/* ═══════════════════════════════════════════════════════════════
   LA FIORENTINA — interactions, générateur de pizzas & animations
   ═══════════════════════════════════════════════════════════════ */
(() => {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;

  /* ─────────── DONNÉES DE LA CARTE (tarifs à emporter) ─────────── */
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
      { name: "Salade Niçoise", pizza: 11.8, pinsa: null, desc: "La classique du pays — l'authentique, comme à Nice", tags: [], icon: "salade" },
      { name: "Tomates, Bufala", pizza: 12.75, pinsa: null, desc: "Tomates parfumées et mozzarella di bufala", tags: ["veggie"], icon: "salade" },
      { name: "César Salade",   pizza: 13.15, pinsa: null, desc: "La grande classique, généreuse et fraîche", tags: [], icon: "salade" }
    ],
    desserts: [
      { name: "Pizza Nutella",          pizza: 7, pinsa: null, desc: "Notre pâte maison, version dessert", tags: ["signature"], icon: "dessert" },
      { name: "Tarte Citron Meringuée", pizza: 7, pinsa: null, desc: "Acidulée et aérienne", tags: [], icon: "dessert" },
      { name: "Tarte Tatin",            pizza: 7, pinsa: null, desc: "Pommes caramélisées, tradition française", tags: [], icon: "dessert" },
      { name: "Fondant Chocolat",       pizza: 7, pinsa: null, desc: "Cœur coulant, plaisir absolu", tags: [], icon: "dessert" },
      { name: "Croquant Chocolat",      pizza: 7, pinsa: null, desc: "Croustillant dehors, intense dedans", tags: [], icon: "dessert" }
    ]
  };

  const fmtPrice = (n) =>
    n.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(",00", "") + " €";

  /* ─────────── GÉNÉRATEUR DE MINI-PIZZAS SVG ───────────
     Chaque recette produit une pizza dessinée à partir de ses ingrédients,
     avec un placement pseudo-aléatoire stable (graine = nom). */
  function seededRand(seed) {
    let h = 2166136261;
    for (let i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619); }
    return () => {
      h = Math.imul(h ^ (h >>> 15), 2246822507);
      h = Math.imul(h ^ (h >>> 13), 3266489909);
      return ((h ^= h >>> 16) >>> 0) / 4294967296;
    };
  }

  function scatter(rnd, count, rMax) {
    const pts = [];
    for (let i = 0; i < count; i++) {
      const a = rnd() * Math.PI * 2;
      const r = Math.sqrt(rnd()) * rMax;
      pts.push([50 + Math.cos(a) * r, 50 + Math.sin(a) * r, rnd()]);
    }
    return pts;
  }

  function pizzaSVG(item) {
    if (item.icon === "salade") {
      return `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#fdfaf2"/><circle cx="50" cy="50" r="40" fill="#e9f0dc"/>
        <path d="M28 58 q10 -22 26 -18 q16 4 18 20 q-14 12 -30 8 q-12 -3 -14 -10z" fill="#6fa055"/>
        <path d="M36 46 q8 -14 20 -10" stroke="#4a7c3a" stroke-width="3" fill="none" stroke-linecap="round"/>
        <circle cx="40" cy="60" r="6" fill="#d4452a"/><circle cx="62" cy="56" r="6" fill="#d4452a"/>
        <circle cx="52" cy="44" r="5" fill="#fdfaf2"/></svg>`;
    }
    if (item.icon === "dessert") {
      const choc = /chocolat|nutella/i.test(item.name);
      const main = choc ? "#7a4a2a" : "#f0c96a";
      const top = choc ? "#5d3620" : "#f7dd9a";
      return `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#fdfaf2"/>
        <path d="M22 62 L50 30 L78 62 z" fill="${main}"/>
        <path d="M30 62 L50 40 L70 62 z" fill="${top}"/>
        <rect x="22" y="62" width="56" height="10" rx="4" fill="${main}"/>
        <circle cx="50" cy="27" r="5" fill="#d4452a"/></svg>`;
    }

    const d = item.desc.toLowerCase();
    const rnd = seededRand(item.name);
    const isCream = /crème/.test(d);
    const sauce = isCream ? "#f7efd8" : "#d4452a";
    const sauceHi = isCream ? "#fdf8e8" : "#e2643f";
    let layers = "";

    // fromage fondu
    layers += `<circle cx="50" cy="50" r="33" fill="${isCream ? "#f3e3b8" : "#f3d491"}"/>`;

    const add = (pts, fn) => pts.forEach((p) => { layers += fn(p[0].toFixed(1), p[1].toFixed(1), p[2]); });

    if (/pomme de terre/.test(d)) add(scatter(rnd, 5, 24), (x, y) => `<circle cx="${x}" cy="${y}" r="7.5" fill="#efd9a8" stroke="#d9bc80" stroke-width="1"/>`);
    if (/aubergine/.test(d)) add(scatter(rnd, 4, 23), (x, y, r) => `<ellipse cx="${x}" cy="${y}" rx="8" ry="5.5" fill="#6d4a7c" transform="rotate(${r * 180} ${x} ${y})"/>`);
    if (/sanguin/.test(d)) add(scatter(rnd, 4, 23), (x, y, r) => `<ellipse cx="${x}" cy="${y}" rx="7.5" ry="5" fill="#c9924f" transform="rotate(${r * 180} ${x} ${y})"/>`);
    if (/champignon/.test(d)) add(scatter(rnd, 4, 24), (x, y, r) => `<ellipse cx="${x}" cy="${y}" rx="6.5" ry="4.5" fill="#e8dcc4" transform="rotate(${r * 180} ${x} ${y})"/><ellipse cx="${x}" cy="${y}" rx="3" ry="2" fill="#cbb98d"/>`);
    if (/thon/.test(d)) add(scatter(rnd, 4, 22), (x, y, r) => `<ellipse cx="${x}" cy="${y}" rx="7" ry="5" fill="#b7a68e" transform="rotate(${r * 160} ${x} ${y})"/>`);
    if (/jambon cru/.test(d)) add(scatter(rnd, 3, 21), (x, y, r) => `<path d="M${x - 8} ${y} q8 -7 16 0 q-4 7 -10 6 q-6 -1 -6 -6z" fill="#d97f7b" transform="rotate(${r * 120} ${x} ${y})"/>`);
    else if (/jambon/.test(d)) add(scatter(rnd, 3, 21), (x, y, r) => `<rect x="${x - 7}" y="${y - 5}" width="14" height="10" rx="3" fill="#eda69f" transform="rotate(${r * 90} ${x} ${y})"/>`);
    if (/lardon/.test(d)) add(scatter(rnd, 5, 23), (x, y, r) => `<rect x="${x - 5}" y="${y - 2.5}" width="10" height="5" rx="2" fill="#d98a75" transform="rotate(${r * 180} ${x} ${y})"/>`);
    if (/chorizo/.test(d)) add(scatter(rnd, 4, 22), (x, y) => `<circle cx="${x}" cy="${y}" r="6" fill="#b93a22" stroke="#8e241d" stroke-width="1.4"/>`);
    if (/merguez/.test(d)) add(scatter(rnd, 4, 22), (x, y, r) => `<rect x="${x - 8}" y="${y - 3}" width="16" height="6" rx="3" fill="#a03d26" transform="rotate(${r * 180} ${x} ${y})"/>`);
    if (/bœuf|boeuf/.test(d)) add(scatter(rnd, 6, 24), (x, y) => `<circle cx="${x}" cy="${y}" r="3.4" fill="#8a5a3a"/>`);
    if (/poivron/.test(d)) add(scatter(rnd, 4, 23), (x, y, r) => `<path d="M${x - 8} ${y} q8 -5 16 0 q-8 4 -16 0z" fill="#3f9b5f" transform="rotate(${r * 180} ${x} ${y})"/>`);
    if (/artichaut/.test(d)) add(scatter(rnd, 3, 21), (x, y, r) => `<path d="M${x} ${y - 7} q6 4 4 12 q-4 3 -8 0 q-2 -8 4 -12z" fill="#8ba46a" transform="rotate(${r * 160} ${x} ${y})"/>`);
    if (/oignon/.test(d)) add(scatter(rnd, 4, 23), (x, y, r) => `<circle cx="${x}" cy="${y}" r="5.5" fill="none" stroke="#e8d8ee" stroke-width="2.2" transform="rotate(${r * 90} ${x} ${y})"/>`);
    if (/tomates cerises/.test(d)) add(scatter(rnd, 5, 22), (x, y) => `<circle cx="${x}" cy="${y}" r="4.5" fill="#e0392a" stroke="#b12b20" stroke-width="1"/>`);
    if (/mozzarella|bufala/.test(d)) add(scatter(rnd, 4, 21), (x, y) => `<circle cx="${x}" cy="${y}" r="6" fill="#fdfaf2" stroke="#e8ddc4" stroke-width="1"/>`);
    if (/chèvre/.test(d)) add(scatter(rnd, 4, 22), (x, y) => `<circle cx="${x}" cy="${y}" r="5" fill="#f6f0dd" stroke="#ddd2b4" stroke-width="1.2"/>`);
    if (/gorgonzola/.test(d)) add(scatter(rnd, 4, 22), (x, y) => `<circle cx="${x}" cy="${y}" r="5" fill="#e9e7d2"/><circle cx="${x}" cy="${y}" r="1.6" fill="#7c8fa0"/>`);
    if (/reblochon/.test(d)) add(scatter(rnd, 4, 22), (x, y, r) => `<ellipse cx="${x}" cy="${y}" rx="7" ry="5" fill="#f3e4bb" transform="rotate(${r * 120} ${x} ${y})"/>`);
    if (/anchois/.test(d)) add(scatter(rnd, 4, 22), (x, y, r) => `<path d="M${x - 8} ${y} q8 3 16 0" stroke="#7d8291" stroke-width="3" fill="none" stroke-linecap="round" transform="rotate(${r * 160} ${x} ${y})"/>`);
    if (/câpre/.test(d)) add(scatter(rnd, 6, 23), (x, y) => `<circle cx="${x}" cy="${y}" r="2.6" fill="#7c8f4c"/>`);
    if (/truffe/.test(d)) add(scatter(rnd, 6, 23), (x, y, r) => `<path d="M${x - 5} ${y} q5 -4 10 0 q-5 3 -10 0z" fill="#3d3128" transform="rotate(${r * 180} ${x} ${y})"/>`);
    if (/pignon/.test(d)) add(scatter(rnd, 6, 22), (x, y, r) => `<ellipse cx="${x}" cy="${y}" rx="2.6" ry="1.6" fill="#e6cfa0" transform="rotate(${r * 180} ${x} ${y})"/>`);
    if (/miel/.test(d)) layers += `<path d="M30 44 q20 12 40 0 M32 56 q18 10 36 0" stroke="#e0a34e" stroke-width="2.4" fill="none" stroke-linecap="round" opacity="0.85"/>`;
    if (/œuf|oeuf/.test(d)) { const p = scatter(rnd, 1, 10)[0]; layers += `<circle cx="${p[0]}" cy="${p[1]}" r="9" fill="#fdfaf2"/><circle cx="${p[0]}" cy="${p[1]}" r="4.5" fill="#f0b429"/>`; }
    if (/basilic|persillade/.test(d)) add(scatter(rnd, 5, 26), (x, y, r) => `<path d="M${x} ${y - 4} q4 2 3 7 q-4 2 -6 -1 q-1 -4 3 -6z" fill="#4a7c3a" transform="rotate(${r * 240} ${x} ${y})"/>`);
    if (/olive/.test(d)) add(scatter(rnd, 4, 26), (x, y) => `<circle cx="${x}" cy="${y}" r="3.2" fill="#33362a"/>`);

    // Calzone : chausson replié
    if (/chausson/i.test(item.desc)) {
      return `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#fdfaf2"/>
        <path d="M16 62 A34 34 0 0 1 84 62 z" fill="#e5b264"/>
        <path d="M16 62 A34 34 0 0 1 84 62 l-6 0 A28 28 0 0 0 22 62 z" fill="#c98a3d"/>
        <path d="M26 62 q6 -8 12 0 q6 -8 12 0 q6 -8 12 0 q6 -8 12 0" stroke="#b0702e" stroke-width="2.5" fill="none"/>
        <circle cx="38" cy="52" r="2.4" fill="#b0702e"/><circle cx="58" cy="48" r="2.4" fill="#b0702e"/></svg>`;
    }

    return `<svg viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="47" fill="#e5b264"/>
      <circle cx="50" cy="50" r="47" fill="none" stroke="#c98a3d" stroke-width="2.5"/>
      <circle cx="50" cy="50" r="39" fill="${sauce}"/>
      <circle cx="44" cy="44" r="20" fill="${sauceHi}" opacity="0.5"/>
      ${layers}
    </svg>`;
  }

  /* ─────────── PRELOADER ─────────── */
  const preloader = document.getElementById("preloader");
  const preFill = document.getElementById("preloaderFill");
  let preP = 0;
  const preTimer = setInterval(() => {
    preP = Math.min(preP + 8 + Math.random() * 20, 92);
    preFill.style.width = preP + "%";
  }, 110);
  const closePreloader = () => {
    clearInterval(preTimer);
    preFill.style.width = "100%";
    setTimeout(() => {
      preloader.classList.add("is-done");
      setTimeout(() => preloader.remove(), 800);
    }, prefersReduced ? 50 : 350);
  };
  window.addEventListener("load", () => setTimeout(closePreloader, prefersReduced ? 0 : 500));
  setTimeout(closePreloader, 3800);

  /* ─────────── SPLIT DU TITRE HERO ─────────── */
  document.querySelectorAll("[data-split]").forEach((el, wordIdx) => {
    const text = el.textContent;
    el.textContent = "";
    [...text].forEach((ch, i) => {
      const span = document.createElement("span");
      span.className = "ch";
      span.textContent = ch;
      span.style.animationDelay = `${0.9 + wordIdx * 0.22 + i * 0.04}s`;
      el.appendChild(span);
    });
  });

  /* ─────────── PARALLAXE SOURIS (hero) ─────────── */
  if (!isTouch && !prefersReduced) {
    const ings = document.querySelectorAll(".ing");
    const hero = document.querySelector(".hero");
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = null;
    hero.addEventListener("mousemove", (e) => {
      const r = hero.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
      if (!raf) raf = requestAnimationFrame(tickPar);
    }, { passive: true });
    function tickPar() {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      ings.forEach((el) => {
        const depth = +el.dataset.depth || 40;
        el.style.transform = `translate(${(-cx * depth).toFixed(1)}px, ${(-cy * depth).toFixed(1)}px)`;
      });
      if (Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001) raf = requestAnimationFrame(tickPar);
      else raf = null;
    }
  }

  /* ─────────── NAVIGATION ─────────── */
  const nav = document.getElementById("nav");
  const navLinks = document.getElementById("navLinks");
  const burger = document.getElementById("navBurger");
  let lastY = 0;

  burger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
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

  const onScroll = () => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    nav.classList.toggle("is-scrolled", y > 30);
    nav.classList.toggle("is-hidden", y > 320 && y > lastY && !navLinks.classList.contains("is-open"));
    toTop.classList.toggle("is-visible", y > 700);
    lastY = y;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" }));

  /* ─────────── REVEALS ─────────── */
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
    }),
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.setProperty("--rd", `${(i % 4) * 0.08}s`);
    io.observe(el);
  });

  /* ─────────── COMPTEURS ─────────── */
  const cio = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.count;
      const suffix = el.dataset.suffix || "";
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min((t - t0) / 1400, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      prefersReduced ? (el.textContent = target + suffix) : requestAnimationFrame(tick);
      cio.unobserve(el);
    }),
    { threshold: 0.6 }
  );
  document.querySelectorAll(".stat-num").forEach((c) => cio.observe(c));

  /* ─────────── CRAFT — étapes actives au scroll ─────────── */
  const steps = document.querySelectorAll(".craft-step");
  const icons = document.querySelectorAll(".craft-icon");
  if (steps.length) {
    const sio = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const idx = e.target.dataset.icon;
        steps.forEach((s) => s.classList.toggle("is-active", s === e.target));
        icons.forEach((ic) => ic.classList.toggle("is-active", ic.id === "craftIcon" + idx));
      }),
      { threshold: 0.55, rootMargin: "-15% 0px -25% 0px" }
    );
    steps.forEach((s) => sio.observe(s));
    steps[0].classList.add("is-active");
  }

  /* ─────────── ANATOMIE — hotspots ─────────── */
  const anatomyPizza = document.getElementById("anatomyPizza");
  const hotspots = document.querySelectorAll(".hotspot");
  const infos = document.querySelectorAll(".anatomy-info");
  let activeSpot = null;

  function setAnatomy(target) {
    activeSpot = target;
    hotspots.forEach((h) => h.classList.toggle("is-active", h.dataset.target === target));
    infos.forEach((inf) => inf.classList.toggle("is-active", inf.dataset.info === (target || "intro")));
    const groups = anatomyPizza.querySelectorAll(".a-group");
    anatomyPizza.classList.toggle("has-focus", !!target && target !== "crust");
    groups.forEach((g) => g.classList.toggle("is-focus", g.dataset.part === target));
  }
  hotspots.forEach((h) => {
    h.addEventListener("click", () => setAnatomy(activeSpot === h.dataset.target ? null : h.dataset.target));
    if (!isTouch) h.addEventListener("mouseenter", () => setAnatomy(h.dataset.target));
  });

  /* ─────────── COMPARATEUR PIZZA / PINSA ─────────── */
  const compare = document.getElementById("compare");
  const compareRange = document.getElementById("compareRange");
  if (compare && compareRange) {
    const setPos = (v) => compare.style.setProperty("--pos", v + "%");
    compareRange.addEventListener("input", () => setPos(compareRange.value));
    setPos(50);
    // Petit va-et-vient d'invitation au premier passage
    const wio = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting || prefersReduced) return;
        wio.disconnect();
        let t = 0;
        const wiggle = () => {
          t += 0.045;
          if (t >= Math.PI) { setPos(50); compareRange.value = 50; return; }
          const v = 50 + Math.sin(t) * 14;
          setPos(v.toFixed(1)); compareRange.value = v;
          requestAnimationFrame(wiggle);
        };
        setTimeout(() => requestAnimationFrame(wiggle), 500);
      });
    }, { threshold: 0.5 });
    wio.observe(compare);
  }

  /* ─────────── RENDU DE LA CARTE ─────────── */
  const grid = document.getElementById("carteGrid");
  const tabs = document.querySelectorAll(".carte-tab");
  const subControls = document.getElementById("carteSub");
  const baseBtns = document.querySelectorAll(".base-btn");
  const chips = document.querySelectorAll(".chip");
  const hoverCard = document.getElementById("hoverCard");
  const hoverCardPizza = document.getElementById("hoverCardPizza");
  const hoverCardName = document.getElementById("hoverCardName");

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
      const svg = pizzaSVG(it);

      const row = document.createElement("article");
      row.className = "menu-row";
      row.style.setProperty("--d", i);
      row.dataset.svg = svg;
      row.dataset.name = it.name;

      const tagsHtml = [];
      if (it.tags.includes("veggie")) tagsHtml.push(`<span class="menu-row-tag veggie">🌿 Végé</span>`);
      if (currentCat === "pizzas" && it.pinsa != null) tagsHtml.push(`<span class="menu-row-tag duo">Pizza ou Pinsa</span>`);
      if (pizzaOnly) tagsHtml.push(`<span class="menu-row-tag">Base pizza uniquement</span>`);

      row.innerHTML = `
        <div class="menu-row-pizza" aria-hidden="true">${svg}</div>
        <div class="menu-row-main">
          <div class="menu-row-head">
            <h3 class="menu-row-name">${it.name}${it.tags.includes("signature") ? ' <span class="sig">✦</span>' : ""}</h3>
            <span class="menu-row-dots" aria-hidden="true"></span>
            <span class="menu-row-price is-swap">${fmtPrice(price)}</span>
          </div>
          <p class="menu-row-desc">${it.desc}</p>
          ${tagsHtml.length ? `<div class="menu-row-tags">${tagsHtml.join("")}</div>` : ""}
        </div>
      `;
      grid.appendChild(row);
    });
    bindHoverCards();
    bindCursorTargets(grid);
  }

  /* Carte flottante qui suit la souris */
  let hcRaf = null, hcX = 0, hcY = 0, hcTX = 0, hcTY = 0;
  function bindHoverCards() {
    if (isTouch) return;
    grid.querySelectorAll(".menu-row").forEach((row) => {
      row.addEventListener("mouseenter", () => {
        hoverCardPizza.innerHTML = row.dataset.svg;
        hoverCardName.textContent = row.dataset.name;
        hoverCard.classList.add("is-visible");
      });
      row.addEventListener("mouseleave", () => hoverCard.classList.remove("is-visible"));
    });
  }
  if (!isTouch) {
    window.addEventListener("mousemove", (e) => {
      hcTX = e.clientX; hcTY = e.clientY;
      if (!hcRaf) hcRaf = requestAnimationFrame(hcTick);
    }, { passive: true });
    function hcTick() {
      hcX += (hcTX - hcX) * 0.18;
      hcY += (hcTY - hcY) * 0.18;
      const offX = hcX + 230 > innerWidth ? -220 : 26;
      hoverCard.style.left = hcX + offX + "px";
      hoverCard.style.top = Math.min(hcY - 90, innerHeight - 260) + "px";
      if (Math.abs(hcTX - hcX) > 0.4 || Math.abs(hcTY - hcY) > 0.4) hcRaf = requestAnimationFrame(hcTick);
      else hcRaf = null;
    }
  }

  tabs.forEach((tab) =>
    tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.classList.toggle("is-active", t === tab);
        t.setAttribute("aria-selected", String(t === tab));
      });
      currentCat = tab.dataset.cat;
      subControls.classList.toggle("is-hidden", currentCat !== "pizzas");
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

  /* ─────────── CURSEUR PERSONNALISÉ ─────────── */
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  const cursorLabel = document.getElementById("cursorLabel");

  function bindCursorTargets(root = document) {
    if (isTouch) return;
    root.querySelectorAll("[data-cursor], a, button, .menu-row").forEach((el) => {
      if (el.dataset.cursorBound) return;
      el.dataset.cursorBound = "1";
      el.addEventListener("mouseenter", () => {
        ring.classList.add("is-hover");
        const label = el.dataset.cursorLabel;
        if (label) { cursorLabel.textContent = label; ring.classList.add("has-label"); }
      });
      el.addEventListener("mouseleave", () => {
        ring.classList.remove("is-hover", "has-label");
        cursorLabel.textContent = "";
      });
    });
  }

  if (!isTouch && !prefersReduced) {
    let mx = -100, my = -100, rx = -100, ry = -100;
    window.addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.opacity = ring.style.opacity = "1";
    }, { passive: true });
    document.addEventListener("mouseleave", () => { dot.style.opacity = ring.style.opacity = "0"; });
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
        btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.22}px, ${(e.clientY - r.top - r.height / 2) * 0.22}px)`;
      });
      btn.addEventListener("mouseleave", () => { btn.style.transform = ""; });
    });
  }

  /* ─────────── DIVERS ─────────── */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
