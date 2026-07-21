/* ═══════════════════════════════════════════════════════════════
   fachwerk · menu renderer — tabs, search, i18n aware
   ═══════════════════════════════════════════════════════════════ */
"use strict";

(function () {
  let activeCat = "menus";
  let query = "";

  const tabsEl = () => document.getElementById("menuTabs");
  const panelEl = () => document.getElementById("menuPanel");

  const loc = (val) => {
    if (val == null) return "";
    if (typeof val === "string") return val;
    const lang = window.fwGetLang ? window.fwGetLang() : "de";
    return val[lang] !== undefined ? val[lang] : (val.de !== undefined ? val.de : "");
  };

  const esc = (s) => String(s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  function itemMatches(item, q) {
    if (!q) return true;
    const hay = [];
    if (typeof item.n === "string") hay.push(item.n);
    else if (item.n) hay.push(...Object.values(item.n));
    if (item.d) {
      if (typeof item.d === "string") hay.push(item.d);
      else hay.push(...Object.values(item.d));
    }
    return hay.join(" ").toLowerCase().includes(q);
  }

  function renderTabs() {
    const el = tabsEl();
    if (!el) return;
    el.innerHTML = window.FW_MENU.map(cat =>
      `<button class="menu-tab${cat.id === activeCat ? " active" : ""}" role="tab"
        aria-selected="${cat.id === activeCat}" data-cat="${cat.id}">${esc(loc(cat.label))}</button>`
    ).join("");
  }

  function badgeHtml(item) {
    let out = "";
    if (item.veg === "v") out += `<span class="badge badge-veg" title="${esc(t("menu.veg"))}">V</span>`;
    if (item.veg === "ve") out += `<span class="badge badge-vegan" title="${esc(t("menu.vegan"))}">Ve</span>`;
    if (item.star) out += `<span class="badge badge-genuss" title="${esc(t("menu.genuss"))}">★</span>`;
    return out;
  }

  function priceHtml(item) {
    if (item.variants) {
      return `<div class="menu-variants">` + item.variants.map(v =>
        `<span class="menu-variant">${esc(v.l)} <b>${esc(v.p)} €${v.pp ? " " + esc(t("menu.pp")) : ""}</b></span>`
      ).join("") + `</div>`;
    }
    const pp = item.pp ? ` <small>${esc(t("menu.pp"))}</small>` : "";
    return "";
  }

  function itemHtml(item, i) {
    const name = esc(loc(item.n));
    const desc = item.d ? `<span class="menu-item-desc">${esc(loc(item.d))}</span>` : "";
    let right = "";
    let variantBlock = "";
    if (item.variants) {
      variantBlock = priceHtml(item);
    } else if (item.p) {
      right = `<span class="menu-dots" aria-hidden="true"></span>
               <span class="menu-item-price">${esc(item.p)} €${item.pp ? " <small>" + esc(t("menu.pp")) + "</small>" : ""}</span>`;
    }
    return `<div class="menu-item" style="--i:${i}">
      <div class="menu-item-row">
        <span class="menu-item-name">${name} ${badgeHtml(item)}</span>
        ${right}
      </div>
      ${desc}${variantBlock}
    </div>`;
  }

  function renderPanel() {
    const el = panelEl();
    if (!el) return;
    const cat = window.FW_MENU.find(c => c.id === activeCat) || window.FW_MENU[0];
    let idx = 0;
    let html = "";
    let total = 0;

    cat.groups.forEach(group => {
      const items = group.items.filter(it => itemMatches(it, query));
      if (!items.length) return;
      total += items.length;
      html += `<div class="menu-group">`;
      if (group.title) html += `<h3 class="menu-group-title">${esc(loc(group.title))}</h3>`;
      if (group.note) html += `<p class="menu-group-note">${esc(loc(group.note))}</p>`;
      html += `<div class="menu-items">` + items.map(it => itemHtml(it, idx++)).join("") + `</div></div>`;
    });

    /* global search: when searching, look across ALL categories */
    if (query) {
      html = "";
      idx = 0; total = 0;
      window.FW_MENU.forEach(c => {
        c.groups.forEach(group => {
          const items = group.items.filter(it => itemMatches(it, query));
          if (!items.length) return;
          total += items.length;
          const gt = group.title ? ` — ${esc(loc(group.title))}` : "";
          html += `<div class="menu-group">
            <h3 class="menu-group-title">${esc(loc(c.label))}${gt}</h3>
            <div class="menu-items">` + items.map(it => itemHtml(it, idx++)).join("") + `</div></div>`;
        });
      });
    }

    el.innerHTML = total ? html : `<p class="menu-empty">${esc(t("menu.empty"))}</p>`;
  }

  function render() { renderTabs(); renderPanel(); }

  document.addEventListener("DOMContentLoaded", () => {
    const tabs = tabsEl();
    if (tabs) {
      tabs.addEventListener("click", (e) => {
        const btn = e.target.closest(".menu-tab");
        if (!btn) return;
        activeCat = btn.dataset.cat;
        const search = document.getElementById("menuSearch");
        if (search && search.value) { search.value = ""; query = ""; }
        render();
      });
    }
    const search = document.getElementById("menuSearch");
    if (search) {
      search.addEventListener("input", () => {
        query = search.value.trim().toLowerCase();
        renderPanel();
      });
    }
    render();
  });

  window.fwRenderMenu = render;
})();
