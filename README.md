# 🍕 La Fiorentina — Site vitrine

Site vitrine premium pour **La Fiorentina**, pizzeria artisanale à Nice (29 Avenue Sainte-Marguerite, 06200 Nice).

## ✨ Points forts

- **Design "braise & crème"** — thème sombre chaleureux, typographie éditoriale (Fraunces + Figtree), touches tricolores italiennes
- **Animations soignées** — préloader pizza animé, titre en révélation lettre par lettre, particules de braises en canvas, révélations au scroll, compteurs animés, boutons magnétiques, curseur personnalisé, marquee incliné
- **Carte interactive** — 30 recettes avec onglets (Pizzas & Pinsas / Salades / Desserts), bascule de prix **base pizza / base pinsa**, filtres (signatures, végétariennes, base crème)
- **Statut "Ouvert / Fermé" en temps réel** — calculé sur le fuseau Europe/Paris, mise en avant du jour courant dans les horaires
- **SEO complet** — données structurées Schema.org (Restaurant, horaires, géolocalisation), Open Graph, balises sémantiques
- **Accessibilité** — `prefers-reduced-motion` respecté partout, navigation clavier, focus visibles, aria-labels, contrastes soignés
- **Performance** — zéro framework, zéro dépendance : HTML/CSS/JS vanilla, animations sur compositor, canvas mis en pause hors écran, iframe carte en lazy-loading
- **100 % responsive** — menu burger mobile, grilles fluides, tabs défilantes

## 📁 Structure

```
index.html      — page unique (hero, histoire, pinsa, carte, avis, infos, contact)
css/style.css   — design system complet (variables, animations, responsive)
js/main.js      — données de la carte, rendu, interactions, canvas braises
```

## 🚀 Déploiement

Site 100 % statique : il suffit de servir le dossier (GitHub Pages, Netlify, Vercel, OVH…).

```bash
# aperçu local
python3 -m http.server 8000
```

## 🛠 Mise à jour de la carte

Les plats et tarifs sont dans `js/main.js`, objet `MENU` (tarifs à emporter relevés en juillet 2026). Chaque entrée :

```js
{ name: "Fiorentina", pizza: 13.2, pinsa: 14.2, desc: "Tomates, sanguins…", tags: ["signature"] }
```

- `pinsa: null` → recette disponible uniquement en base pizza
- `tags` : `signature`, `veggie`, `creme` (pilotent badges et filtres)
