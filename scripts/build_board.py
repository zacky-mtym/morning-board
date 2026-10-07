# -*- coding: utf-8 -*-
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(Path(__file__).resolve().parent))
import os
from datetime import datetime, timedelta
from fetch_public import (
    fetch_dam,
    fetch_weather,
    fetch_chart,
    fetch_ics_events,
    HOLIDAY_ICS,
    JST,
)


def downsample(points, max_n):
    if len(points) <= max_n:
        return [p["c"] for p in points]
    step = len(points) / max_n
    out = []
    i = 0.0
    while int(i) < len(points) and len(out) < max_n:
        out.append(points[int(i)]["c"])
        i += step
    if out[-1] != points[-1]["c"]:
        out[-1] = points[-1]["c"]
    return out


def stock_payload(symbol, name, currency_label, dec):
    year = fetch_chart(symbol, "1y", "1d")
    day = fetch_chart(symbol, "5d", "1d")
    closes = [p["c"] for p in day["points"]]
    price = day["price"] if day["price"] is not None else (closes[-1] if closes else None)
    prev = closes[-2] if len(closes) >= 2 else year.get("previousClose")
    chg = (price - prev) if price is not None and prev else None
    pct = (chg / prev * 100) if chg is not None and prev else None
    pts = year["points"]
    return {
        "name": name,
        "code": symbol,
        "cur": currency_label,
        "listed": True,
        "price": price,
        "prev": prev,
        "chg": chg,
        "pct": pct,
        "dec": dec,
        "up": bool(chg is not None and chg >= 0),
        "series": {
            "1m": downsample(pts[-22:] if len(pts) > 22 else pts, 22),
            "3m": downsample(pts[-64:] if len(pts) > 64 else pts, 64),
            "1y": downsample(pts, 120),
        },
    }


def refresh_calendar(calendar: dict) -> dict:
    now = datetime.now(JST)
    start = now - timedelta(days=1)
    end = now + timedelta(days=40)
    kept = [e for e in calendar.get("events", []) if e.get("cal") != "h"]
    try:
        holidays = fetch_ics_events(HOLIDAY_ICS, "h", start, end)
        kept.extend(holidays)
    except Exception as e:
        print("holiday ics failed:", e)
        kept.extend([e for e in calendar.get("events", []) if e.get("cal") == "h"])
    env_map = {"ICS_URL_W": "w", "ICS_URL_F": "f", "ICS_URL_P": "p"}
    for env_name, cal_id in env_map.items():
        url = os.environ.get(env_name, "").strip()
        if not url:
            continue
        try:
            fresh = fetch_ics_events(url, cal_id, start, end)
            kept = [e for e in kept if e.get("cal") != cal_id]
            kept.extend(fresh)
            print("ics refreshed", cal_id, len(fresh))
        except Exception as e:
            print("ics failed", cal_id, e)
    calendar["events"] = kept
    return calendar


def main():
    calendar = json.loads((ROOT / "data" / "calendar.json").read_text(encoding="utf-8"))
    calendar = refresh_calendar(calendar)
    (ROOT / "data" / "calendar.json").write_text(
        json.dumps(calendar, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    board = {
        "updatedAt": datetime.now(JST).isoformat(timespec="minutes"),
        "city": "松山市",
        "calendar": calendar,
        "weather": None,
        "weatherError": None,
        "dam": None,
        "damError": None,
        "stocks": [],
        "stockErrors": {},
    }
    try:
        w = fetch_weather()
        d = w["daily"]
        board["weather"] = {
            "days": [
                {
                    "date": d["time"][i],
                    "code": d["weather_code"][i],
                    "hi": d["temperature_2m_max"][i],
                    "lo": d["temperature_2m_min"][i],
                    "pop": d["precipitation_probability_max"][i],
                }
                for i in range(len(d["time"]))
            ]
        }
    except Exception as e:
        board["weatherError"] = str(e)
    try:
        dam = fetch_dam()
        dam.pop("rawLatest", None)
        board["dam"] = dam
    except Exception as e:
        board["damError"] = str(e)
    specs = [
        ("TSLA", "テスラ", "ドル", 2),
        ("SPCX", "SpaceX", "ドル", 2),
        ("7011.T", "三菱重工業", "円", 0),
    ]
    for symbol, name, cur, dec in specs:
        try:
            board["stocks"].append(stock_payload(symbol, name, cur, dec))
        except Exception as e:
            board["stockErrors"][symbol] = str(e)
    out_json = ROOT / "data" / "board.json"
    out_js = ROOT / "data.js"
    text = json.dumps(board, ensure_ascii=False, indent=2)
    out_json.write_text(text + "\n", encoding="utf-8")
    out_js.write_text("window.BOARD_DATA = " + text + ";\n", encoding="utf-8")
    print("wrote", out_json)
    print("updatedAt", board["updatedAt"])
    print("dam", board["dam"])
    print("weatherError", board["weatherError"])
    print("stockErrors", board["stockErrors"])


if __name__ == "__main__":
    main()
