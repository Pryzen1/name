/* ═══════════════════════════════════════════════════════════════
   LA FIORENTINA — interactions & animations
   ═══════════════════════════════════════════════════════════════ */
(() => {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;

  /* ─────────── DONNÉES DE LA CARTE (tarifs à emporter) ─────────── */
  // pizza / pinsa : prix en € — pinsa: null si non proposée en pinsa
  const MENU = {
    pizzas: [
      { name: "Marguerita",     pizza: 9.0,  pinsa: null,  desc: "Tomate, fromage, origan, olives", tags: ["veggie"] },
      { name: "Mozzarella",     pizza: 10.5, pinsa: null,  desc: "Tomate, fromage, mozzarella, origan, olives", tags: ["veggie"] },
      { name: "Napolitaine",    pizza: 10.5, pinsa: null,  desc: "Tomate, anchois, fromage, origan, olives", tags: [] },
      { name: "Chorizo",        pizza: 11.9, pinsa: null,  desc: "Tomate, chorizo, champignons, fromage, origan, olives", tags: [] },
      { name: "Neptune",        pizza: 12.3, pinsa: null,  desc: "Tomate, thon, persillade, fromage, origan, olives", tags: [] },
      { name: "Provençale",     pizza: 12.3, pinsa: null,  desc: "Tomate, mozzarella, jambon, basilic, origan, olives", tags: [] },
      { name: "Sicilienne",     pizza: 12.3, pinsa: null,  desc: "Tomate, anchois, câpres, fromage, origan, olives", tags: [] },
      { name: "Aubergine",      pizza: 12.4, pinsa: null,  desc: "Tomate, aubergines, persillade, fromage, origan, olives", tags: ["veggie"] },
      { name: "Flamenkuch",     pizza: 12.4, pinsa: null,  desc: "Crème fraîche, oignons, lardons, fromage, origan, olives", tags: ["creme"] },
      { name: "Reine",          pizza: 12.4, pinsa: 13.4,  desc: "Tomate, champignons, jambon, fromage, origan, olives", tags: [] },
      { name: "Forestière",     pizza: 12.4, pinsa: 13.4,  desc: "Tomate, sanguins, champignons, persillade, fromage, origan, olives", tags: ["veggie"] },
      { name: "Montagnarde",    pizza: 12.9, pinsa: 13.9,  desc: "Crème fraîche, fromage, chèvre, miel, pignons, origan, olives", tags: ["veggie", "creme"] },
      { name: "Calzone",        pizza: 13.2, pinsa: null,  desc: "Chausson — tomate, champignons, jambon, œuf, fromage, origan", tags: [] },
      { name: "Fiorentina",     pizza: 13.2, pinsa: 14.2,  desc: "Tomates, sanguins, jambon cru, persillade, fromage, origan, olives", tags: ["signature"] },
      { name: "Campagnarde",    pizza: 13.2, pinsa: 14.2,  desc: "Tomate, champignons, lardons, oignons, œuf, fromage, origan, olives", tags: [] },
      { name: "Cannibale",      pizza: 13.2, pinsa: 14.2,  desc: "Tomate, bœuf haché, oignons, œuf, fromage, origan, olives", tags: [] },
      { name: "Merguez",        pizza: 13.2, pinsa: 14.2,  desc: "Tomate, merguez, poivrons, fromage, origan, olives", tags: [] },
      { name: "Parma",          pizza: 13.2, pinsa: 14.2,  desc: "Tomate, jambon cru, chèvre, fromage, origan, olives", tags: [] },
      { name: "4 Fromages",     pizza: 13.2, pinsa: 14.2,  desc: "Tomate, gorgonzola, mozzarella, chèvre, fromage, origan, olives", tags: ["veggie"] },
      { name: "4 Saisons",      pizza: 13.2, pinsa: 14.2,  desc: "Tomate, champignons, jambon, poivrons, cœurs d'artichauts, fromage, origan, olives", tags: [] },
      { name: "Reblochon",      pizza: 13.2, pinsa: 14.2,  desc: "Tomate, jambon cru, reblochon, champignons, fromage, origan, olives", tags: [] },
      { name: "Reine Blanche",  pizza: 13.2, pinsa: 14.2,  desc: "Crème fraîche, champignons, jambon, fromage, origan, olives", tags: ["creme"] },
      { name: "Seguin",         pizza: 13.2, pinsa: 14.2,  desc: "Tomate, champignons, jambon, chèvre, fromage, origan, olives", tags: [] },
      { name: "Américaine",     pizza: 14.2, pinsa: 15.2,  desc: "Tomate, bœuf haché, chorizo, poivrons, fromage, origan, olives", tags: [] },
      { name: "Andalouse",      pizza: 14.2, pinsa: 15.2,  desc: "Tomate, merguez, chorizo, poivrons, fromage, origan, olives", tags: [] },
      { name: "Italienne",      pizza: 14.2, pinsa: 15.2,  desc: "Tomate, tomates cerises, jambon cru, mozzarella, basilic, origan, olives", tags: ["signature"] },
      { name: "Tartiflette",    pizza: 14.2, pinsa: 15.2,  desc: "Crème fraîche, pomme de terre, lardons, reblochon, fromage, origan, olives", tags: ["creme"] },
      { name: "Carnivore",      pizza: 15.1, pinsa: 16.1,  desc: "Tomate, merguez, jambon, chorizo, bœuf haché, origan, olives", tags: [] },
      { name: "Bufala",         pizza: 16.9, pinsa: 17.9,  desc: "Tomates cerises, mozzarella, bufala, jambon cru", tags: ["signature"] },
      { name: "À la Truffe",    pizza: 18.0, pinsa: 19.0,  desc: "Crème de truffe, mozzarella, copeaux de truffe", tags: ["signature", "creme"] }
    ],
    salades: [
      { name: "Salade Niçoise", pizza: 11.8, pinsa: null, desc: "La classique du pays — l'authentique, comme à Nice", tags: [] },
      { name: "Tomates, Bufala", pizza: 12.75, pinsa: null, desc: "Tomates parfumées et mozzarella di bufala", tags: ["veggie"] },
      { name: "César Salade",   pizza: 13.15, pinsa: null, desc: "La grande classique, généreuse et fraîche", tags: [] }
    ],
    desserts: [
      { name: "Pizza Nutella",         pizza: 7, pinsa: null, desc: "Notre pâte maison, version dessert", tags: ["signature"] },
      { name: "Tarte Citron Meringuée", pizza: 7, pinsa: null, desc: "Acidulée et aérienne", tags: [] },
      { name: "Tarte Tatin",           pizza: 7, pinsa: null, desc: "Pommes caramélisées, tradition française", tags: [] },
      { name: "Fondant Chocolat",      pizza: 7, pinsa: null, desc: "Cœur coulant, plaisir absolu", tags: [] },
      { name: "Croquant Chocolat",     pizza: 7, pinsa: null, desc: "Croustillant dehors, intense dedans", tags: [] }
    ]
  };

  const fmtPrice = (n) =>
    n.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(",00", "") + " €";

  /* ─────────── PRELOADER ─────────── */
  const preloader = document.getElementById("preloader");
  document.querySelectorAll(".preloader-word span").forEach((s, i) => {
    s.style.setProperty("--i", (i * 0.045).toFixed(3));
  });
  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.classList.add("is-done");
      document.body.classList.add("is-loaded");
      setTimeout(() => preloader.remove(), 900);
    }, prefersReduced ? 100 : 1400);
  });
  // Sécurité : ne jamais bloquer plus de 4 s
  setTimeout(() => { preloader.classList.add("is-done"); }, 4000);

  /* ─────────── SPLIT DU TITRE HERO ─────────── */
  document.querySelectorAll("[data-split]").forEach((el, wordIdx) => {
    const text = el.textContent;
    el.textContent = "";
    [...text].forEach((ch, i) => {
      const span = document.createElement("span");
      span.className = "ch";
      span.textContent = ch;
      span.style.animationDelay = `${1.5 + wordIdx * 0.25 + i * 0.045}s`;
      el.appendChild(span);
    });
  });

  /* ─────────── NAVIGATION ─────────── */
  const nav = document.getElementById("nav");
  const navLinks = document.getElementById("navLinks");
  const burger = document.getElementById("navBurger");
  let lastY = 0;

  burger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
  });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    })
  );

  /* ─────────── SCROLL GLOBAL ─────────── */
  const progress = document.getElementById("scrollProgress");
  const toTop = document.getElementById("toTop");
  const pizzaArt = document.getElementById("pizzaArt");

  const onScroll = () => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - innerHeight;

    progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    nav.classList.toggle("is-scrolled", y > 30);
    nav.classList.toggle("is-hidden", y > 300 && y > lastY && !navLinks.classList.contains("is-open"));
    toTop.classList.toggle("is-visible", y > 700);

    // La pizza tourne doucement avec le scroll
    if (pizzaArt && !prefersReduced) {
      pizzaArt.style.transform = `rotate(${y * 0.04}deg)`;
    }
    lastY = y;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" }));

  /* ─────────── REVEAL AU SCROLL ─────────── */
  const revealEls = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el, i) => {
    el.style.setProperty("--rd", `${(i % 4) * 0.08}s`);
    io.observe(el);
  });

  /* ─────────── COMPTEURS ─────────── */
  const counters = document.querySelectorAll(".stat-num");
  const cio = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = +el.dataset.count;
        const suffix = el.dataset.suffix || "";
        const dur = 1400;
        const t0 = performance.now();
        const tick = (t) => {
          const p = Math.min((t - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        prefersReduced ? (el.textContent = target + suffix) : requestAnimationFrame(tick);
        cio.unobserve(el);
      });
    },
    { threshold: 0.6 }
  );
  counters.forEach((c) => cio.observe(c));

  /* ─────────── RENDU DE LA CARTE ─────────── */
  const grid = document.getElementById("carteGrid");
  const tabs = document.querySelectorAll(".carte-tab");
  const baseToggle = document.getElementById("baseToggle");
  const baseBtns = document.querySelectorAll(".base-btn");
  const filterWrap = document.getElementById("carteFilters");
  const chips = document.querySelectorAll(".chip");

  let currentCat = "pizzas";
  let currentBase = "pizza";
  let currentFilter = "all";

  function renderMenu() {
    const items = MENU[currentCat].filter((it) => {
      if (currentCat !== "pizzas" || currentFilter === "all") return true;
      return it.tags.includes(currentFilter);
    });

    grid.innerHTML = "";
    if (!items.length) {
      grid.innerHTML = `<p class="carte-empty">Rien par ici… essayez un autre filtre&nbsp;!</p>`;
      return;
    }

    items.forEach((it, i) => {
      const isPinsaBase = currentCat === "pizzas" && currentBase === "pinsa";
      const price = isPinsaBase && it.pinsa != null ? it.pinsa : it.pizza;
      const pizzaOnly = isPinsaBase && it.pinsa == null;

      const card = document.createElement("article");
      card.className = "menu-item" + (it.tags.includes("signature") ? " is-signature" : "");
      card.style.setProperty("--d", i);

      const tagsHtml = [];
      if (it.tags.includes("veggie")) tagsHtml.push(`<span class="menu-item-tag veggie">🌿 Végé</span>`);
      if (pizzaOnly) tagsHtml.push(`<span class="menu-item-tag">Base pizza uniquement</span>`);
      else if (currentCat === "pizzas" && it.pinsa != null)
        tagsHtml.push(`<span class="menu-item-tag pinsa-only">Pizza ou Pinsa</span>`);

      card.innerHTML = `
        <div class="menu-item-head">
          <h3 class="menu-item-name">${it.name}</h3>
          <span class="menu-item-dots" aria-hidden="true"></span>
          <span class="menu-item-price is-swap">${fmtPrice(price)}</span>
        </div>
        <p class="menu-item-desc">${it.desc}</p>
        ${tagsHtml.length ? `<div class="menu-item-tags">${tagsHtml.join("")}</div>` : ""}
      `;
      grid.appendChild(card);
    });
    bindCursorTargets(grid);
  }

  tabs.forEach((tab) =>
    tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.classList.toggle("is-active", t === tab);
        t.setAttribute("aria-selected", String(t === tab));
      });
      currentCat = tab.dataset.cat;
      const isPizzas = currentCat === "pizzas";
      baseToggle.classList.toggle("is-hidden", !isPizzas);
      filterWrap.classList.toggle("is-hidden", !isPizzas);
      renderMenu();
    })
  );

  baseBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
      baseBtns.forEach((b) => b.classList.toggle("is-active", b === btn));
      currentBase = btn.dataset.base;
      renderMenu();
    })
  );

  chips.forEach((chip) =>
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.toggle("is-active", c === chip));
      currentFilter = chip.dataset.filter;
      renderMenu();
    })
  );

  renderMenu();

  /* ─────────── OUVERT / FERMÉ (heure de Paris) ─────────── */
  // [ [open, close], ... ] en minutes — index = jour (0 = dimanche)
  const HOURS = {
    0: [],
    1: [[1080, 1320]],
    2: [[705, 840], [1080, 1320]],
    3: [[705, 840], [1080, 1320]],
    4: [[705, 840], [1080, 1320]],
    5: [[705, 840], [1080, 1320]],
    6: [[1080, 1320]]
  };
  const mins = (m) => `${Math.floor(m / 60)}h${String(m % 60).padStart(2, "0")}`;

  function updateOpenStatus() {
    const now = new Date();
    const paris = new Intl.DateTimeFormat("fr-FR", {
      timeZone: "Europe/Paris", weekday: "short", hour: "numeric", minute: "numeric", hour12: false
    }).formatToParts(now);
    const get = (t) => paris.find((p) => p.type === t)?.value;
    const dayMap = { "dim.": 0, "lun.": 1, "mar.": 2, "mer.": 3, "jeu.": 4, "ven.": 5, "sam.": 6 };
    const day = dayMap[get("weekday")] ?? now.getDay();
    const nowMin = parseInt(get("hour"), 10) * 60 + parseInt(get("minute"), 10);

    const slots = HOURS[day] || [];
    let open = false, next = null;
    for (const [o, c] of slots) {
      if (nowMin >= o && nowMin < c) { open = true; next = c; break; }
      if (nowMin < o) { next = o; break; }
    }

    let text;
    if (open) text = `Ouvert — jusqu'à ${mins(next)}`;
    else if (next != null) text = `Fermé — ouvre à ${mins(next)}`;
    else if (day === 6 || day === 0) text = `Fermé — réouverture lundi 18h`;
    else text = `Fermé — réouverture demain`;

    const badgeText = document.getElementById("openBadgeText");
    const statusText = document.getElementById("openStatusText");
    if (badgeText) badgeText.textContent = text;
    if (statusText) statusText.textContent = text;
    document.querySelectorAll(".pulse-dot").forEach((d) => d.classList.toggle("is-closed", !open));

    document.querySelectorAll("#hoursTable tr").forEach((tr) =>
      tr.classList.toggle("is-today", +tr.dataset.day === day)
    );
  }
  updateOpenStatus();
  setInterval(updateOpenStatus, 60000);

  /* ─────────── BRAISES (canvas) ─────────── */
  function embers(canvasId, density) {
    const canvas = document.getElementById(canvasId);
    if (!canvas || prefersReduced) return;
    const ctx = canvas.getContext("2d");
    let w, h, parts = [], running = false;

    const resize = () => {
      const r = canvas.parentElement.getBoundingClientRect();
      w = canvas.width = r.width * devicePixelRatio;
      h = canvas.height = r.height * devicePixelRatio;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const COLORS = ["#e2572b", "#f0a35e", "#d9a441", "#c7342a", "#f0c96a"];
    const spawn = () => ({
      x: Math.random() * w,
      y: h + 10 * devicePixelRatio,
      r: (Math.random() * 2.2 + 0.7) * devicePixelRatio,
      vy: (Math.random() * 0.7 + 0.35) * devicePixelRatio,
      vx: (Math.random() - 0.5) * 0.45 * devicePixelRatio,
      life: 0,
      maxLife: Math.random() * 260 + 160,
      color: COLORS[(Math.random() * COLORS.length) | 0],
      wobble: Math.random() * Math.PI * 2
    });

    const count = Math.min(density, Math.floor((w / devicePixelRatio) / 14));
    for (let i = 0; i < count; i++) {
      const p = spawn();
      p.y = Math.random() * h;
      p.life = Math.random() * p.maxLife;
      parts.push(p);
    }

    const frame = () => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        p.life++;
        p.wobble += 0.02;
        p.x += p.vx + Math.sin(p.wobble) * 0.3 * devicePixelRatio;
        p.y -= p.vy;
        const fade = 1 - p.life / p.maxLife;
        if (fade <= 0 || p.y < -12) { parts[i] = spawn(); continue; }
        ctx.globalAlpha = Math.min(fade * 1.4, 0.85);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * (0.6 + fade * 0.4), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(frame);
    };

    // N'anime que lorsque visible à l'écran
    new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const was = running;
        running = e.isIntersecting;
        if (running && !was) requestAnimationFrame(frame);
      });
    }).observe(canvas);
  }
  embers("emberCanvas", 70);
  embers("emberCanvas2", 45);

  /* ─────────── CURSEUR PERSONNALISÉ ─────────── */
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");

  function bindCursorTargets(root = document) {
    if (isTouch) return;
    root.querySelectorAll("[data-cursor], a, button, .menu-item").forEach((el) => {
      if (el.dataset.cursorBound) return;
      el.dataset.cursorBound = "1";
      el.addEventListener("mouseenter", () => ring.classList.add("is-hover"));
      el.addEventListener("mouseleave", () => ring.classList.remove("is-hover"));
    });
  }

  if (!isTouch && !prefersReduced) {
    let mx = -100, my = -100, rx = -100, ry = -100;
    window.addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.opacity = ring.style.opacity = "1";
    }, { passive: true });
    document.addEventListener("mouseleave", () => {
      dot.style.opacity = ring.style.opacity = "0";
    });
    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      dot.style.transform = `translate(${mx - 3.5}px, ${my - 3.5}px)`;
      const size = ring.offsetWidth / 2;
      ring.style.transform = `translate(${rx - size}px, ${ry - size}px)`;
      requestAnimationFrame(loop);
    };
    loop();
    bindCursorTargets();
  }

  /* ─────────── BOUTONS MAGNÉTIQUES ─────────── */
  if (!isTouch && !prefersReduced) {
    document.querySelectorAll("[data-magnetic]").forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.22;
        const y = (e.clientY - r.top - r.height / 2) * 0.22;
        btn.style.transform = `translate(${x}px, ${y}px)`;
      });
      btn.addEventListener("mouseleave", () => { btn.style.transform = ""; });
    });
  }

  /* ─────────── LUEUR SUIVANT LA SOURIS (cartes pinsa) ─────────── */
  if (!isTouch) {
    document.querySelectorAll(".pinsa-card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
        card.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
      });
    });
  }

  /* ─────────── DIVERS ─────────── */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
