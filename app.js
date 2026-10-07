(() => {
  const WD = ["日", "月", "火", "水", "木", "金", "土"];
  const TODO_KEY = "morning-board-todos-v2";

  const state = {
    draft: "",
    periods: {},
    todos: loadTodos(),
  };

  function loadTodos() {
    try {
      const raw = localStorage.getItem(TODO_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {}
    return [];
  }

  function saveTodos() {
    localStorage.setItem(TODO_KEY, JSON.stringify(state.todos));
  }

  function todayJst() {
    const now = new Date();
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Tokyo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(now);
    const [y, m, d] = parts.split("-").map(Number);
    return new Date(y, m - 1, d);
  }

  function ymd(dt) {
    const y = dt.getFullYear();
    const m = String(dt.getMonth() + 1).padStart(2, "0");
    const d = String(dt.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }

  function fmtStamp(iso) {
    if (!iso) return "";
    const dt = new Date(iso);
    const w = new Intl.DateTimeFormat("ja-JP", { timeZone: "Asia/Tokyo", weekday: "short" }).format(dt);
    const md = new Intl.DateTimeFormat("ja-JP", { timeZone: "Asia/Tokyo", month: "numeric", day: "numeric" }).format(dt);
    const hm = new Intl.DateTimeFormat("ja-JP", {
      timeZone: "Asia/Tokyo",
      hour: "numeric",
      minute: "2-digit",
      hour12: false,
    }).format(dt);
    return `${md}（${w}）${hm}`;
  }

  function eventDate(ev) {
    if (ev.allDay || ev.date) return ev.date.slice(0, 10);
    return ev.start.slice(0, 10);
  }

  function eventTime(ev) {
    if (ev.allDay || !ev.start) return "終日";
    const s = ev.start.slice(11, 16);
    const e = ev.end ? ev.end.slice(11, 16) : "";
    return e && e !== s ? `${s}-${e}` : s;
  }

  function weatherIcon(code) {
    if (code == null) return "—";
    if (code <= 1) return "晴";
    if (code <= 3 || code === 45 || code === 48) return "曇";
    if (code >= 71 && code <= 86 && ![80, 81, 82].includes(code)) return "雪";
    return "雨";
  }

  function weatherLabel(code) {
    if (code === 0) return "晴れ";
    if (code === 1) return "晴れ";
    if (code === 2) return "晴れのち曇り";
    if (code === 3) return "曇り";
    if (code === 45 || code === 48) return "霧";
    if (code >= 51 && code <= 67) return "雨";
    if (code === 80 || code === 81 || code === 82) return "雨";
    if (code >= 71 && code <= 77) return "雪";
    if (code >= 95) return "雷雨";
    return "曇り";
  }

  function r1(n) {
    return Math.round(n);
  }

  function money(stock) {
    if (stock.price == null) return "—";
    if (stock.cur === "円") return "¥" + Math.round(stock.price).toLocaleString("ja-JP");
    return "$" + stock.price.toFixed(stock.dec ?? 2);
  }

  function chgText(stock) {
    if (stock.chg == null) return "";
    const sign = stock.chg >= 0 ? "+" : "−";
    const abs = Math.abs(stock.chg);
    const unit = stock.cur === "円" ? "¥" + Math.round(abs).toLocaleString("ja-JP") : "$" + abs.toFixed(stock.dec ?? 2);
    const pct = Math.abs(stock.pct).toFixed(2);
    const pctSign = stock.pct >= 0 ? "+" : "−";
    return `${sign}${unit}　${pctSign}${pct}%`;
  }

  function path(a) {
    if (!a || a.length < 2) return { line: "", area: "" };
    const mn = Math.min(...a);
    const mx = Math.max(...a);
    const n = a.length;
    const pts = a.map((v, i) => [(i / (n - 1)) * 300, 92 - ((v - mn) / (mx - mn || 1)) * 84]);
    const line = pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
    return { line, area: line + " L300 100 L0 100 Z" };
  }

  function daysFor(board) {
    const start = todayJst();
    const cals = Object.fromEntries(board.calendar.calendars.map((c) => [c.id, c]));
    return [0, 1, 2, 3, 4, 5, 6].map((i) => {
      const dt = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
      const key = ymd(dt);
      const events = board.calendar.events
        .filter((e) => eventDate(e) === key)
        .sort((a, b) => {
          const ad = a.allDay || a.date ? 0 : 1;
          const bd = b.allDay || b.date ? 0 : 1;
          if (ad !== bd) return ad - bd;
          return eventTime(a).localeCompare(eventTime(b));
        })
        .map((e) => ({
          time: eventTime(e),
          title: e.title,
          cal: cals[e.cal]?.name || e.cal,
          color: cals[e.cal]?.color || "#a3a9b8",
        }));
      return {
        date: `${dt.getMonth() + 1}/${dt.getDate()}`,
        wd: `（${WD[dt.getDay()]}）`,
        todayMark: i === 0 ? " 今日" : "",
        dateColor: i === 0 ? "#e8dcc0" : "#ece8df",
        events,
        empty: events.length === 0,
      };
    });
  }

  function weatherView(board) {
    if (!board.weather || !board.weather.days?.length) {
      return { ok: false };
    }
    const start = ymd(todayJst());
    const days = board.weather.days;
    let idx = days.findIndex((d) => d.date === start);
    if (idx < 0) idx = 0;
    const week = days.slice(idx, idx + 7).map((d) => {
      const dt = new Date(d.date + "T00:00:00+09:00");
      return {
        d: WD[dt.getDay()],
        icon: weatherIcon(d.code),
        hi: r1(d.hi),
        lo: r1(d.lo),
        pop: r1(d.pop),
      };
    });
    const today = days[idx];
    return {
      ok: true,
      icon: weatherIcon(today.code),
      label: weatherLabel(today.code),
      hi: r1(today.hi),
      lo: r1(today.lo),
      pop: r1(today.pop),
      week,
    };
  }

  function readDraft() {
    const input = document.getElementById("todo-draft");
    if (input) state.draft = input.value;
    return state.draft;
  }

  function addTodo() {
    const v = readDraft().trim();
    if (!v) return;
    state.todos.push({ id: Date.now(), text: v, done: false, carry: "" });
    state.draft = "";
    saveTodos();
    render();
  }

  function esc(s) {
    return String(s ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function render() {
    const board = window.BOARD_DATA;
    const root = document.getElementById("app");
    if (!board || !root) return;
    const scrollY = window.scrollY;

    const now = todayJst();
    const kicker = `${now.getFullYear()} / ${String(now.getMonth() + 1).padStart(2, "0")} / ${String(now.getDate()).padStart(2, "0")}`;
    const days = daysFor(board);
    const wx = weatherView(board);
    const dam = board.dam;
    const damDelta = dam?.deltaPt;
    const damDeltaColor = damDelta == null ? "#a3a9b8" : damDelta < 0 ? "var(--down)" : damDelta > 0 ? "var(--up)" : "var(--ink-soft)";
    const damDeltaText = damDelta == null ? "—" : `${damDelta > 0 ? "+" : ""}${damDelta.toFixed(1)}pt`;

    const legend = board.calendar.calendars
      .map((c) => `<span class="legend-item"><span class="dot" style="background:${c.color}"></span>${esc(c.name)}</span>`)
      .join("");

    const dayHtml = days
      .map((d) => {
        const evs = d.empty
          ? `<div class="empty">予定なし</div>`
          : d.events
              .map(
                (e) => `<div class="ev">
          <span class="ev-time">${esc(e.time)}</span>
          <div class="ev-body"><span class="dot" style="background:${e.color}"></span>
            <div><div class="ev-title">${esc(e.title)}</div><div class="ev-cal">${esc(e.cal)}</div></div>
          </div></div>`
              )
              .join("");
        return `<div class="day">
        <div>
          <div class="day-date" style="color:${d.dateColor}">${esc(d.date)}</div>
          <div class="day-wd" style="color:${d.dateColor}">${esc(d.wd)}</div>
          <div class="day-mark">${esc(d.todayMark)}</div>
        </div>
        <div class="day-events">${evs}</div>
      </div>`;
      })
      .join("");

    const todos = state.todos
      .map(
        (t, i) => `<label class="todo">
        <input type="checkbox" data-todo="${i}" ${t.done ? "checked" : ""}>
        <span><span class="todo-text${t.done ? " done" : ""}">${esc(t.text)}</span>
        ${t.carry ? `<span class="todo-carry">${esc(t.carry)}</span>` : ""}</span>
      </label>`
      )
      .join("");

    const wxHtml = wx.ok
      ? `<div class="wx-today">
          <div class="wx-badge">${esc(wx.icon)}</div>
          <div>
            <div class="wx-summary">今日　${esc(wx.label)}</div>
            <div class="wx-temp"><span class="wx-hi">${wx.hi}°</span><span class="wx-slash"> / </span><span class="wx-lo">${wx.lo}°</span></div>
            <div class="wx-pop">降水確率 <strong>${wx.pop}%</strong></div>
          </div>
        </div>
        <div class="week">${wx.week
          .map(
            (w) => `<div class="week-day">
            <div class="week-lab">${esc(w.d)}</div>
            <div class="week-icon">${esc(w.icon)}</div>
            <div class="week-hi">${w.hi}°</div>
            <div class="week-lo">${w.lo}°</div>
            <div class="week-pop">${w.pop}%</div>
          </div>`
          )
          .join("")}</div>`
      : `<div class="wx-fail"><div class="wx-fail-title">取得失敗</div><div class="wx-fail-sub">次回の更新で再取得します</div></div>`;

    const stocks = board.stocks
      .map((s, si) => {
        if (!s.listed) {
          return `<section class="card">
            <div class="stk-top">
              <div><div class="stk-name">${esc(s.name)}</div><div class="stk-code">${esc(s.code)}　${esc(s.cur)}</div></div>
              <div><div class="stk-price">非上場</div><div class="stk-sub">市場価格なし</div></div>
            </div>
            <div class="stk-note">${esc(s.note || "")}</div>
          </section>`;
        }
        const keys = ["1m", "3m", "1y"];
        const labels = ["1か月", "3か月", "1年"];
        const pi = state.periods[s.code] ?? 0;
        const series = s.series?.[keys[pi]] || [];
        const p = path(series);
        const color = s.up ? "var(--up)" : "var(--down)";
        const btns = labels
          .map((l, i) => `<button class="${i === pi ? "on" : "off"}" data-stock="${si}" data-period="${i}">${l}</button>`)
          .join("");
        return `<section class="card">
          <div class="stk-top">
            <div><div class="stk-name">${esc(s.name)}</div><div class="stk-code">${esc(s.code)}　${esc(s.cur)}</div></div>
            <div><div class="stk-price">${esc(money(s))}</div><div class="stk-sub">前日終値</div></div>
          </div>
          <div class="stk-chg" style="color:${color}">${esc(chgText(s))}<span>　前日比</span></div>
          <svg class="chart" viewBox="0 0 300 100" preserveAspectRatio="none">
            <path d="${p.area}" fill="${s.up ? "#7fae96" : "#c9877f"}" opacity="0.12"></path>
            <path d="${p.line}" fill="none" stroke="${s.up ? "#7fae96" : "#c9877f"}" stroke-width="1.6" vector-effect="non-scaling-stroke" stroke-linejoin="round"></path>
          </svg>
          <div class="periods">${btns}</div>
        </section>`;
      })
      .join("");

    root.innerHTML = `
      <div class="page"><div class="wrap">
        <header class="hdr">
          <div class="hdr-kicker">${esc(kicker)}</div>
          <div class="hdr-row">
            <h1>Morning Board</h1>
            <div class="hdr-updated">最終更新：${esc(fmtStamp(board.updatedAt))}</div>
          </div>
          <div class="hdr-rule"></div>
        </header>

        <section class="card">
          <h2 class="tight">向こう1週間の予定</h2>
          <div class="legend">${legend}</div>
          ${dayHtml}
        </section>

        <section class="card">
          <h2>ToDo</h2>
          <div class="todo-add">
            <input id="todo-draft" value="${esc(state.draft)}" placeholder="やることを追加">
            <button type="button" id="todo-add">追加</button>
          </div>
          ${todos}
        </section>

        <section class="card">
          <h2>石手川ダムの貯水率</h2>
          <div class="metrics">
            <div><div class="metric-label">貯水率</div><div class="metric-xl">${dam ? dam.rate.toFixed(1) + "%" : "—"}</div></div>
            <div><div class="metric-label">前日比</div><div class="metric-md" style="color:${damDeltaColor}">${esc(damDeltaText)}</div></div>
            <div><div class="metric-label gold">平年値</div><div class="metric-md">${dam ? dam.normal.toFixed(1) + "%" : "—"}</div></div>
          </div>
        </section>

        <section class="card">
          <div class="wx-head"><h2>今日の天気・週間天気</h2><span class="wx-city">${esc(board.city || "松山市")}</span></div>
          ${wxHtml}
        </section>

        ${stocks}

        <div class="foot">公開データで更新　天気: Open-Meteo　ダム: 川の防災情報　株: Yahoo Finance</div>
      </div></div>`;

    const draft = document.getElementById("todo-draft");
    draft?.addEventListener("input", (e) => {
      state.draft = e.target.value;
    });
    draft?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") addTodo();
    });
    document.getElementById("todo-add")?.addEventListener("click", addTodo);
    root.querySelectorAll("[data-todo]").forEach((el) => {
      el.addEventListener("change", () => {
        const i = Number(el.getAttribute("data-todo"));
        state.todos[i].done = el.checked;
        saveTodos();
        render();
      });
    });
    root.querySelectorAll("[data-stock]").forEach((el) => {
      el.addEventListener("click", () => {
        readDraft();
        const si = Number(el.getAttribute("data-stock"));
        const pi = Number(el.getAttribute("data-period"));
        const code = board.stocks[si].code;
        state.periods[code] = pi;
        render();
      });
    });
    window.scrollTo(0, scrollY);
  }

  const dayKey = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Tokyo" }).format(new Date());
  fetch(`data/board.json?d=${dayKey}`, { cache: "no-store" })
    .then((r) => {
      if (!r.ok) throw new Error("board.json");
      return r.json();
    })
    .then((data) => {
      window.BOARD_DATA = data;
      render();
    })
    .catch(() => render());
})();
