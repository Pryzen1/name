/* ═══════════════════════════════════════════════════════════════
   fachwerk · interactions
   ═══════════════════════════════════════════════════════════════ */
"use strict";

(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  /* ── opening hours model (Europe/Berlin) ───────────────────── */
  /* day: 0=Sun … 6=Sat — [open, close] in minutes, null = closed  */
  const HOURS = {
    0: [12 * 60, 22 * 60],
    1: null,
    2: [17 * 60 + 30, 23 * 60 + 30],
    3: [17 * 60 + 30, 22 * 60 + 30],
    4: [17 * 60 + 30, 23 * 60 + 30],
    5: [17 * 60 + 30, 23 * 60 + 30],
    6: [17 * 60 + 30, 23 * 60 + 30]
  };
  const DAY_KEYS = ["day.sun", "day.mon", "day.tue", "day.wed", "day.thu", "day.fri", "day.sat"];
  const fmt = (mins) => `${String(Math.floor(mins / 60)).padStart(2, "0")}:${String(mins % 60).padStart(2, "0")}`;

  function berlinNow() {
    try {
      const parts = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Berlin", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false
      }).formatToParts(new Date());
      const get = (type) => (parts.find(p => p.type === type) || {}).value;
      const dayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
      return { day: dayMap[get("weekday")] ?? new Date().getDay(), mins: (+get("hour")) * 60 + (+get("minute")) };
    } catch (e) {
      const d = new Date();
      return { day: d.getDay(), mins: d.getHours() * 60 + d.getMinutes() };
    }
  }

  function updateOpenStatus() {
    const { day, mins } = berlinNow();
    const today = HOURS[day];
    let open = false, text = "";

    if (today && mins >= today[0] && mins < today[1]) {
      open = true;
      text = t("status.open").replace("{t}", fmt(today[1]));
    } else if (today && mins < today[0]) {
      text = t("status.today").replace("{t}", fmt(today[0]));
    } else {
      for (let i = 1; i <= 7; i++) {
        const d = (day + i) % 7;
        if (HOURS[d]) {
          text = t("status.day").replace("{d}", t(DAY_KEYS[d])).replace("{t}", fmt(HOURS[d][0]));
          break;
        }
      }
    }

    [["openChip", "openChipText"], [null, "openChipText2"]].forEach(([chipId, textId]) => {
      const textEl = document.getElementById(textId);
      if (textEl) textEl.textContent = text;
      const chip = chipId ? document.getElementById(chipId) : (textEl && textEl.closest(".chip-status"));
      if (chip) chip.classList.toggle("closed", !open);
    });

    /* highlight today's row */
    $$("#hoursList > div").forEach(row => row.classList.toggle("today", +row.dataset.day === day));
  }
  window.fwUpdateOpenStatus = updateOpenStatus;
  setInterval(updateOpenStatus, 60000);

  /* ── marquee ───────────────────────────────────────────────── */
  function renderMarquee() {
    const track = document.getElementById("marqueeTrack");
    if (!track) return;
    const words = t("marquee");
    if (!Array.isArray(words)) return;
    const seq = words.map(w => `<span class="marquee-item">${w}</span>`).join("");
    track.innerHTML = seq + seq + seq + seq; /* 4× for a seamless 50% loop */
  }
  window.fwRenderMarquee = renderMarquee;

  /* ── hero word rotator ─────────────────────────────────────── */
  let rotatorTimer = null;
  function startRotator() {
    const el = document.getElementById("rotatorWord");
    if (!el) return;
    if (rotatorTimer) clearInterval(rotatorTimer);
    let i = 0;
    const words = t("hero.rotator");
    if (!Array.isArray(words) || !words.length) return;
    el.textContent = words[0];
    if (reduceMotion) return;
    rotatorTimer = setInterval(() => {
      i = (i + 1) % words.length;
      el.classList.add("out");
      setTimeout(() => {
        el.textContent = words[i];
        el.classList.remove("out");
        el.classList.add("in");
        requestAnimationFrame(() => requestAnimationFrame(() => el.classList.remove("in")));
      }, 360);
    }, 3200);
  }
  window.fwResetRotator = startRotator;

  /* ── preloader ─────────────────────────────────────────────── */
  function initPreloader() {
    const pre = document.getElementById("preloader");
    const finish = () => {
      document.body.classList.add("loaded");
      if (pre) pre.classList.add("done");
      sessionStorage.setItem("fw-visited", "1");
    };
    if (!pre) { document.body.classList.add("loaded"); return; }
    if (sessionStorage.getItem("fw-visited") || reduceMotion) {
      pre.style.transition = "none";
      finish();
      return;
    }
    const delay = 1900;
    if (document.readyState === "complete") setTimeout(finish, delay);
    else window.addEventListener("load", () => setTimeout(finish, Math.max(600, delay - performance.now())));
    setTimeout(finish, 3800); /* hard safety */
  }

  /* ── nav state, progress, to-top ───────────────────────────── */
  function initScrollUI() {
    const nav = document.getElementById("siteNav");
    const bar = document.getElementById("scrollProgressBar");
    const toTop = document.getElementById("toTop");
    const onScroll = () => {
      const y = window.scrollY;
      if (nav) nav.classList.toggle("scrolled", y > 30);
      if (y < 200) $$(".nav-links a").forEach(l => l.classList.remove("active"));
      if (bar) {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = `scaleX(${h > 0 ? Math.min(1, y / h) : 0})`;
      }
      if (toTop) toTop.classList.toggle("show", y > 900);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    if (toTop) toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
  }

  /* ── active nav link ───────────────────────────────────────── */
  function initSpy() {
    const links = $$(".nav-links a");
    if (!links.length || !("IntersectionObserver" in window)) return;
    const map = new Map();
    links.forEach(l => {
      const id = l.getAttribute("href").slice(1);
      const sec = document.getElementById(id);
      if (sec) map.set(sec, l);
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          links.forEach(l => l.classList.remove("active"));
          const link = map.get(en.target);
          if (link) link.classList.add("active");
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    map.forEach((_, sec) => io.observe(sec));
  }

  /* ── mobile menu ───────────────────────────────────────────── */
  function initMobileMenu() {
    const burger = document.getElementById("burger");
    const menu = document.getElementById("mobileMenu");
    if (!burger || !menu) return;
    const setOpen = (open) => {
      burger.classList.toggle("open", open);
      menu.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", String(open));
      menu.setAttribute("aria-hidden", String(!open));
      document.body.classList.toggle("no-scroll", open);
    };
    burger.addEventListener("click", () => setOpen(!menu.classList.contains("open")));
    menu.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
    window.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
  }

  /* ── language dropdown ─────────────────────────────────────── */
  function initLang() {
    const wrap = document.getElementById("langSwitch");
    const btn = document.getElementById("langBtn");
    const list = document.getElementById("langList");
    if (!wrap || !btn || !list) return;
    const close = () => { wrap.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); };
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = wrap.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
    list.addEventListener("click", (e) => {
      const li = e.target.closest("[data-lang]");
      if (!li) return;
      fwApplyLang(li.dataset.lang);
      close();
    });
    document.addEventListener("click", close);
    window.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }

  /* ── scroll reveals ────────────────────────────────────────── */
  function initReveals() {
    const els = $$(".reveal");
    if (!("IntersectionObserver" in window) || reduceMotion) {
      els.forEach(el => el.classList.add("visible"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(el => io.observe(el));
  }

  /* ── counters ──────────────────────────────────────────────── */
  function initCounters() {
    const nums = $$(".counter-num");
    if (!nums.length) return;
    const animate = (el) => {
      const target = +el.dataset.count;
      const suffix = el.dataset.suffix || "";
      const plain = el.dataset.plain === "1";
      if (reduceMotion) { el.textContent = (plain ? target : target.toLocaleString()) + suffix; return; }
      const dur = 1600;
      const start = performance.now();
      const step = (now) => {
        const p = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = Math.round(target * eased);
        el.textContent = (plain ? String(val) : val.toLocaleString()) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if (!("IntersectionObserver" in window)) { nums.forEach(animate); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { animate(en.target); io.unobserve(en.target); }
      });
    }, { threshold: 0.6 });
    nums.forEach(el => io.observe(el));
  }

  /* ── ember particles in hero ───────────────────────────────── */
  function initEmbers() {
    const canvas = document.getElementById("embers");
    if (!canvas || reduceMotion) return;
    const isSmall = window.matchMedia("(max-width: 700px)").matches;
    const ctx = canvas.getContext("2d");
    let w, h, parts = [];
    const N = isSmall ? 22 : 46;
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      canvas.width = w = Math.floor(r.width * devicePixelRatio);
      canvas.height = h = Math.floor(r.height * devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);
    const spawn = () => ({
      x: Math.random() * w,
      y: h + Math.random() * h * 0.3,
      r: (Math.random() * 1.6 + 0.6) * devicePixelRatio,
      vy: (Math.random() * 0.35 + 0.12) * devicePixelRatio,
      vx: (Math.random() - 0.5) * 0.22 * devicePixelRatio,
      a: Math.random() * 0.5 + 0.15,
      tw: Math.random() * Math.PI * 2
    });
    for (let i = 0; i < N; i++) { const p = spawn(); p.y = Math.random() * h; parts.push(p); }
    let visible = true;
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(en => { visible = en[0].isIntersecting; }).observe(canvas);
    }
    const tick = () => {
      requestAnimationFrame(tick);
      if (!visible || document.hidden) return;
      ctx.clearRect(0, 0, w, h);
      parts.forEach((p, i) => {
        p.y -= p.vy; p.x += p.vx + Math.sin(p.tw += 0.01) * 0.15;
        if (p.y < -10) parts[i] = spawn();
        const alpha = p.a * (0.6 + 0.4 * Math.sin(p.tw * 2));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(226, 201, 143, ${alpha.toFixed(3)})`;
        ctx.shadowColor = "rgba(201,163,92,.8)";
        ctx.shadowBlur = 6 * devicePixelRatio;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
    };
    tick();
  }

  /* ── tilt cards ────────────────────────────────────────────── */
  function initTilt() {
    if (reduceMotion || !window.matchMedia("(hover: hover)").matches) return;
    $$(".tilt").forEach(card => {
      let raf = null;
      card.addEventListener("pointermove", (e) => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          raf = null;
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          card.style.transform = `perspective(900px) rotateY(${px * 6}deg) rotateX(${py * -6}deg) translateY(-4px)`;
        });
      });
      card.addEventListener("pointerleave", () => {
        card.style.transform = "";
      });
    });
  }

  /* ── magnetic buttons ──────────────────────────────────────── */
  function initMagnetic() {
    if (reduceMotion || !window.matchMedia("(hover: hover)").matches) return;
    $$(".magnetic").forEach(el => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.18;
        const y = (e.clientY - r.top - r.height / 2) * 0.22;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
      el.addEventListener("pointerleave", () => { el.style.transform = ""; });
    });
  }

  /* ── chef parallax ─────────────────────────────────────────── */
  function initParallax() {
    if (reduceMotion) return;
    const img = $(".chef-bg img");
    if (!img) return;
    const sec = $(".chef");
    const onScroll = () => {
      const r = sec.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      const p = (r.top + r.height / 2 - innerHeight / 2) / innerHeight;
      img.style.transform = `translateY(${p * -40}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ── lazy map ──────────────────────────────────────────────── */
  function initMap() {
    const frame = document.getElementById("mapFrame");
    const btn = document.getElementById("mapLoadBtn");
    if (!frame || !btn) return;
    btn.addEventListener("click", () => {
      const iframe = document.createElement("iframe");
      iframe.src = "https://www.google.com/maps?q=Burscheider+Str.+106a,+51381+Leverkusen&output=embed&hl=de";
      iframe.title = "Google Maps — fachwerk Restaurant, Burscheider Str. 106a, 51381 Leverkusen";
      iframe.loading = "lazy";
      iframe.referrerPolicy = "no-referrer-when-downgrade";
      iframe.allowFullscreen = true;
      frame.innerHTML = "";
      frame.appendChild(iframe);
    });
  }

  /* ── smooth anchor offset (nav height) ─────────────────────── */
  function initAnchors() {
    $$('a[href^="#"]').forEach(a => {
      a.addEventListener("click", (e) => {
        const id = a.getAttribute("href").slice(1);
        if (!id) return;
        const target = document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top: Math.max(0, y), behavior: reduceMotion ? "auto" : "smooth" });
        history.replaceState(null, "", "#" + id);
      });
    });
  }

  /* ── boot ──────────────────────────────────────────────────── */
  document.addEventListener("DOMContentLoaded", () => {
    fwApplyLang(window.fwGetLang());
    initPreloader();
    initScrollUI();
    initSpy();
    initMobileMenu();
    initLang();
    initReveals();
    initCounters();
    initEmbers();
    initTilt();
    initMagnetic();
    initParallax();
    initMap();
    initAnchors();
    startRotator();
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
  });
})();
