# fachwerk · Restaurant Bergisch Neukirchen

A hand-crafted, dependency-free website for the **„fachwerk“ Restaurant** in
Leverkusen (Burscheider Straße 106a) — Mediterranean cuisine, fresh fish,
Black Angus steaks, tapas and Croatian specialities served in a historic
half-timbered house.

## Highlights

- **Six languages** — German, English, French, Spanish, Croatian and
  Luxembourgish, with automatic browser detection, one-click switching and
  persistence (`localStorage`).
- **Complete interactive menu** — every dish, drink and wine from the real
  menu, fully translated, with category tabs, live search across all
  categories, vegetarian/vegan badges and signature-dish markers.
- **Live opening status** — “Open now · until 23:30” computed in the
  Europe/Berlin timezone, with today's row highlighted in the hours table.
- **Cinematic presentation** — animated pre-loader drawing the timber-frame
  house, Ken-Burns hero with floating ember particles and film grain,
  scroll-triggered reveals, animated counters, 3D-tilt dish cards, magnetic
  buttons, parallax chef band, marquee ribbon.
- **Performance-minded** — no frameworks, no build step; lazy-loaded images,
  lazy consent-friendly Google-Maps embed, `prefers-reduced-motion` support,
  `<noscript>` fallbacks.
- **SEO & a11y** — Restaurant JSON-LD (address, opening hours, cuisine),
  Open Graph/Twitter cards, semantic landmarks, skip link, ARIA state on all
  controls, keyboard-closable overlays.

## Structure

```
index.html          single page, all sections
css/style.css       design system (dark timber / candlelight gold / shutter green)
js/i18n.js          UI dictionaries (6 languages) + language engine
js/menu-data.js     full menu data, per-language names & descriptions
js/menu.js          menu renderer (tabs, search, badges)
js/main.js          interactions (preloader, reveals, embers, status, …)
assets/img/         photography & award badges
```

## Run locally

Any static server works:

```
python3 -m http.server 8000
# → http://localhost:8000
```

No build step, no dependencies.
