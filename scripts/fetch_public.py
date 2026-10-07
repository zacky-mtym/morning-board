# -*- coding: utf-8 -*-
import json
import re
import urllib.request
from datetime import datetime, timezone, timedelta, date

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
        "&timezone=Asia%2FTokyo&forecast_days=7"
    )
    return json.loads(get(url).decode("utf-8"))


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
