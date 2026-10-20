# -*- coding: utf-8 -*-
import json
import re
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone, timedelta, date
from email.utils import parsedate_to_datetime

JST = timezone(timedelta(hours=9))
UA = {"User-Agent": "MorningBoard/1.0"}


def get(url: str) -> bytes:
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=30) as res:
        return res.read()


def fetch_dam() -> dict:
    outer = get(
        "https://www1.river.go.jp/cgi-bin/DspDamData.exe?ID=1368080150020&KIND=3&PAGE=0"
    ).decode("euc-jp", errors="replace")
    m = re.search(r'<IFRAME src="(/html/frm/[^"]+)"', outer, re.I)
    if not m:
        raise RuntimeError("dam iframe not found")
    inner = get("https://www1.river.go.jp" + m.group(1)).decode("euc-jp", errors="replace")
    rows = re.findall(r"<TR[^>]*>(.*?)</TR>", inner, re.I | re.S)
    parsed = []
    for row in rows:
        cells = [re.sub(r"<[^>]+>", "", c).strip() for c in re.findall(r"<TD[^>]*>(.*?)</TD>", row, re.I | re.S)]
        if len(cells) >= 7 and re.match(r"\d{4}", cells[0]):
            parsed.append(cells)
    if not parsed:
        raise RuntimeError("dam rows not found")
    def num(cell):
        cell = cell.replace(",", "").replace("−", "-").strip()
        if not cell or cell in ("-", "―", "–"):
            return None
        return float(cell)

    usable = [c for c in parsed if num(c[6]) is not None]
    if not usable:
        raise RuntimeError("dam rate missing: " + repr(parsed[:3]))
    latest, prev = usable[0], usable[1] if len(usable) > 1 else None
    rate = num(latest[6])
    prev_rate = num(prev[6]) if prev else None
    return {
        "date": latest[0],
        "time": latest[1],
        "rate": rate,
        "prevRate": prev_rate,
        "deltaPt": round(rate - prev_rate, 1) if prev_rate is not None else None,
        "normal": 88.4,
        "rawLatest": latest,
    }


def fetch_weather() -> dict:
    url = (
        "https://api.open-meteo.com/v1/forecast"
        "?latitude=33.839&longitude=132.766"
        "&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max"
        "&hourly=weather_code,precipitation_probability"
        "&timezone=Asia%2FTokyo&forecast_days=7"
    )
    return json.loads(get(url).decode("utf-8"))


# Higher means a worse condition. Daily Open-Meteo codes use the worst hour of
# the whole date, so overnight rain paints a sunny day as rain.
def weather_severity(code):
    if code is None:
        return -1
    if code <= 1:
        return code
    if code <= 3:
        return 10 + code
    if code in (45, 48):
        return 20
    if 51 <= code <= 67 or code in (80, 81, 82):
        return 30 + code
    if 71 <= code <= 77 or code in (85, 86):
        return 50 + code
    if code >= 95:
        return 70 + code
    return 30 + code


def _daytime_slots(hourly, day):
    times = hourly.get("time") or []
    codes = hourly.get("weather_code") or []
    pops = hourly.get("precipitation_probability") or []
    slots = []
    for t, code, pop in zip(times, codes, pops):
        if not t.startswith(day):
            continue
        hour = int(t[11:13])
        if 6 <= hour <= 18:
            slots.append((hour, code, pop))
    return slots


def daytime_summary(hourly, day, now):
    """Weather code and precipitation probability for 06:00–18:00.

    Hours already past are left out of today, so rain before dawn does not
    stay on the board after it has ended. Later days use the full daytime window.
    """
    slots = _daytime_slots(hourly, day)
    if not slots:
        return None, None
    if day == now.strftime("%Y-%m-%d"):
        upcoming = [slot for slot in slots if slot[0] >= now.hour]
        if upcoming:
            slots = upcoming
    code = max((slot[1] for slot in slots), key=weather_severity)
    probs = [slot[2] for slot in slots if slot[2] is not None]
    pop = max(probs) if probs else None
    return code, pop


def summarize_weather_days(payload, now):
    daily = payload["daily"]
    hourly = payload.get("hourly") or {}
    days = []
    for i, day in enumerate(daily["time"]):
        code = daily["weather_code"][i]
        pop = daily["precipitation_probability_max"][i]
        daytime_code, daytime_pop = daytime_summary(hourly, day, now)
        if daytime_code is not None:
            code = daytime_code
        if daytime_pop is not None:
            pop = daytime_pop
        days.append({
            "date": day,
            "code": code,
            "hi": daily["temperature_2m_max"][i],
            "lo": daily["temperature_2m_min"][i],
            "pop": pop,
        })
    return days


def fetch_chart(symbol: str, range_: str = "1y", interval: str = "1d") -> dict:
    url = (
        f"https://query1.finance.yahoo.com/v8/finance/chart/{symbol}"
        f"?range={range_}&interval={interval}&includePrePost=false"
    )
    data = json.loads(get(url).decode("utf-8"))
    result = data["chart"]["result"][0]
    meta = result["meta"]
    ts = result.get("timestamp") or []
    closes = (result.get("indicators") or {}).get("quote", [{}])[0].get("close") or []
    points = []
    for t, c in zip(ts, closes):
        if c is None:
            continue
        points.append({"t": t, "c": float(c)})
    prev = meta.get("chartPreviousClose") or meta.get("previousClose")
    price = meta.get("regularMarketPrice")
    return {
        "symbol": symbol,
        "currency": meta.get("currency"),
        "price": price,
        "previousClose": prev,
        "points": points,
    }


def main() -> None:
    out = {
        "updatedAt": datetime.now(JST).isoformat(timespec="minutes"),
        "weather": None,
        "weatherError": None,
        "dam": None,
        "damError": None,
        "stocks": {},
        "stockErrors": {},
    }
    try:
        out["weather"] = fetch_weather()
    except Exception as e:
        out["weatherError"] = str(e)
    try:
        out["dam"] = fetch_dam()
    except Exception as e:
        out["damError"] = str(e)
    for sym in ("TSLA", "SPCX", "7011.T"):
        try:
            out["stocks"][sym] = fetch_chart(sym)
        except Exception as e:
            out["stockErrors"][sym] = str(e)
    print(json.dumps(out, ensure_ascii=False, indent=2))


CITY_NEWS_RSS = "https://www.city.matsuyama.ehime.jp/rss_news.xml"
CITY_NEWS_LIMIT = 30
_ENTRY_RE = re.compile(r"^\d+\.\s+(\d{4}-\d{2}-\d{2} \d{2}:\d{2})\s+(.+?)\s*$")
_NOTE_RE = re.compile(r"(?:【[^】]*】)+\s*$")
_CHECKED_RE = re.compile(r"^最終確認:\s*(\d{4}-\d{2}-\d{2})")
_PAGE_LINE_RE = re.compile(r"^更新日:\s*(\d{4}-\d{2}-\d{2})\s*$")
_PAGE_HTML_RE = re.compile(
    r'class="update">\s*更新日[：:]\s*(\d{4})年(\d{1,2})月(\d{1,2})日'
)
_PAGE_HTML_FALLBACK_RE = re.compile(r"更新日[：:]\s*(\d{4})年(\d{1,2})月(\d{1,2})日")
SEEN_MARK = "【確認済み】"


def norm_city_link(url: str) -> str:
    url = (url or "").strip().rstrip("/")
    if url.startswith("https://"):
        url = "http://" + url[len("https://"):]
    return url


def fetch_city_news(limit: int = CITY_NEWS_LIMIT) -> list:
    """Top items from the Matsuyama city RSS. Times stay in the feed's GMT."""
    root = ET.fromstring(get(CITY_NEWS_RSS))
    channel = root.find("channel")
    if channel is None:
        raise RuntimeError("city news channel not found")
    items = []
    for item in channel.findall("item"):
        title = (item.findtext("title") or "").strip()
        link = (item.findtext("link") or "").strip()
        pub = (item.findtext("pubDate") or "").strip()
        if not title or not link or not pub:
            continue
        published = parsedate_to_datetime(pub).astimezone(timezone.utc).strftime("%Y-%m-%d %H:%M")
        items.append({"title": title, "link": link, "published": published})
        if len(items) >= limit:
            break
    if not items:
        raise RuntimeError("city news items not found")
    return items


def fetch_page_updated(url: str):
    """The date printed on the city page as 更新日. None when it cannot be read."""
    raw = get(url)
    encoding = "utf-8"
    declared = re.search(br"charset=([\w-]+)", raw[:2500], re.I)
    if declared:
        encoding = declared.group(1).decode("ascii", errors="ignore") or "utf-8"
    html = raw.decode(encoding, errors="replace")
    match = _PAGE_HTML_RE.search(html) or _PAGE_HTML_FALLBACK_RE.search(html)
    if not match:
        return None
    year, month, day = (int(match.group(i)) for i in (1, 2, 3))
    return date(year, month, day)


def parse_city_news_baseline(text: str):
    """Return (seen_in_order, last_checked).

    seen values keep every URL the board has already observed. The numbered
    list is only the latest RSS top 30 and is merged in when the seen section
    is still empty.
    """
    lines = text.splitlines()
    last_checked = None
    seen = {}
    order = []
    in_seen = False
    i = 0
    while i < len(lines):
        raw_line = lines[i]
        line = raw_line.strip()
        checked = _CHECKED_RE.match(line)
        if checked:
            last_checked = date.fromisoformat(checked.group(1))
        if line.startswith(SEEN_MARK):
            in_seen = True
            i += 1
            continue
        if in_seen:
            if "\t" in line and (line.startswith("http://") or line.startswith("https://")):
                url, page_updated, published, title = (line.split("\t", 3) + ["", "", ""])[:4]
                key = norm_city_link(url)
                if key and key not in seen:
                    order.append(key)
                if key:
                    seen[key] = {
                        "title": title.strip(),
                        "link": url.strip(),
                        "published": published.strip(),
                        "pageUpdated": page_updated.strip(),
                    }
            i += 1
            continue
        match = _ENTRY_RE.match(line)
        if not match:
            i += 1
            continue
        title = _NOTE_RE.sub("", match.group(2)).strip()
        link = ""
        page_updated = ""
        if i + 1 < len(lines):
            nxt = lines[i + 1].strip()
            if nxt.startswith("http://") or nxt.startswith("https://"):
                link = nxt
                i += 1
                if i + 1 < len(lines):
                    page_match = _PAGE_LINE_RE.match(lines[i + 1].strip())
                    if page_match:
                        page_updated = page_match.group(1)
                        i += 1
        if link:
            key = norm_city_link(link)
            if key not in seen:
                order.append(key)
                seen[key] = {
                    "title": title,
                    "link": link,
                    "published": match.group(1),
                    "pageUpdated": page_updated,
                }
        i += 1
    return seen, order, last_checked


def select_city_news_updates(seen: dict, order: list, current: list, last_checked: date, page_updated_of):
    """Updates are pages whose 更新日 is new since the previous check.

    RSS republication is not an update. A URL that leaves the top 30 and
    later returns is not an update when its page date is unchanged. The seen
    map only grows.
    """
    seen = {norm_city_link(key): dict(value) for key, value in seen.items()}
    order = [norm_city_link(key) for key in order if norm_city_link(key) in seen]
    updates = []
    for item in current:
        key = norm_city_link(item["link"])
        prev = seen.get(key)
        if (
            prev
            and prev.get("published") == item["published"]
            and prev.get("title") == item["title"]
        ):
            continue
        page_updated = page_updated_of(item["link"])
        if page_updated is None:
            continue
        prev_page = None
        if prev and prev.get("pageUpdated"):
            prev_page = date.fromisoformat(prev["pageUpdated"])
        record = {
            "title": item["title"],
            "link": item["link"],
            "published": item["published"],
            "pageUpdated": page_updated.isoformat(),
        }
        if key not in seen:
            order.append(key)
        seen[key] = record
        if page_updated < last_checked:
            continue
        if prev_page is not None and page_updated <= prev_page:
            continue
        updates.append(dict(record))
    return updates, seen, order


def format_city_news_baseline(current: list, seen: dict, order: list, checked_on: str) -> str:
    lines = [
        "松山市公式HP 更新情報（RSS上位30件）",
        f"最終確認: {checked_on}",
        f"出典: {CITY_NEWS_RSS}",
        "日時はRSSのGMT表記",
        "掲載条件: ページの「更新日」が前回の最終確認日以降で、確認済みより新しいものだけ。RSSの再掲や順位の変化では出さない。",
        "",
    ]
    for i, item in enumerate(current, 1):
        lines.append(f"{i}. {item['published']} {item['title']}")
        lines.append(f"   {item['link']}")
        page_updated = seen.get(norm_city_link(item["link"]), {}).get("pageUpdated")
        if page_updated:
            lines.append(f"   更新日: {page_updated}")
    lines.append("")
    lines.append(f"{SEEN_MARK} URL、ページの更新日、RSSのGMT、見出し。消さない。")
    for key in order:
        item = seen.get(key)
        if not item:
            continue
        lines.append(
            "\t".join([
                item["link"],
                item.get("pageUpdated") or "",
                item.get("published") or "",
                item.get("title") or "",
            ])
        )
    return "\n".join(lines) + "\n"


HOLIDAY_ICS = (
    "https://calendar.google.com/calendar/ical/"
    "ja.japanese%23holiday%40group.v.calendar.google.com/public/basic.ics"
)


def _as_jst(dt):
    if dt.tzinfo is None:
        return dt.replace(tzinfo=JST)
    return dt.astimezone(JST)


def fetch_ics_events(url: str, cal_id: str, start: datetime, end: datetime):
    from icalendar import Calendar
    import recurring_ical_events

    text = get(url).decode("utf-8", errors="replace")
    calendar = Calendar.from_ical(text)
    out = []
    for ev in recurring_ical_events.of(calendar).between(start, end):
        summary = str(ev.get("SUMMARY") or "").replace("\\,", ",").replace("\\n", " ").strip()
        if not summary:
            continue
        dtstart = ev.start
        dtend = ev.end
        if not isinstance(dtstart, datetime):
            day0 = dtstart if isinstance(dtstart, date) else dtstart.date()
            if dtend is None:
                day1 = day0 + timedelta(days=1)
            elif isinstance(dtend, datetime):
                day1 = _as_jst(dtend).date()
            else:
                day1 = dtend
            d = day0
            while d < day1:
                ds = d.strftime("%Y-%m-%d")
                if start.strftime("%Y-%m-%d") <= ds <= end.strftime("%Y-%m-%d"):
                    out.append({"cal": cal_id, "title": summary, "allDay": True, "date": ds})
                d += timedelta(days=1)
            continue
        start_j = _as_jst(dtstart)
        end_j = _as_jst(dtend) if isinstance(dtend, datetime) else start_j
        out.append({
            "cal": cal_id,
            "title": summary,
            "start": start_j.strftime("%Y-%m-%dT%H:%M:%S+09:00"),
            "end": end_j.strftime("%Y-%m-%dT%H:%M:%S+09:00"),
        })
    return out


if __name__ == "__main__":
    main()
