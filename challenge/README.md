# Le Défi — 30 jours, pompes & tractions

Suivi du défi de Thomas, Raphaël et Ethan. Un jour pompes, un jour tractions, en alternance,
pendant 30 jours. Chacun a ses objectifs, tout le monde voit où en sont les autres.

| | Pompes / jour | Tractions / jour | Total sur 30 jours |
|---|---|---|---|
| Thomas | 750 | 250 | 15 000 |
| Raphaël | 500 | 175 | 10 125 |
| Ethan | 250 | 175 | 6 375 |
| **À trois** | | | **31 500** |

**Départ le 1er septembre 2026.** Jour 1 = pompes, jour 2 = tractions, jour 3 = pompes…
et ainsi de suite jusqu'au jour 30. Chaque jour, tout le monde fait le même exercice,
chacun avec son propre objectif. La date est modifiable dans les réglages et le changement
est partagé avec les trois.

## Ce qu'il y a dedans

- **Aujourd'hui** — l'objectif du jour, l'anneau de progression, les boutons d'ajout rapide,
  et l'avancement des deux autres en direct.
- **Chrono EMOM** — une série au début de chaque minute. Tu choisis combien de répétitions par
  minute, il calcule le nombre de séries, bipe à chaque minute, décompte les 3 dernières
  secondes, garde l'écran allumé et s'arrête tout seul à l'objectif.
  La minute tourne en continu : si tu mets 15 secondes à faire tes répétitions, il te reste
  45 secondes de repos. Le bouton **« Série faite »** valide la série immédiatement — pour que
  les autres la voient — mais n'écourte pas le repos ; il devient **« Passer le repos »** si tu
  veux quand même enchaîner. Tu n'es obligé d'appuyer sur rien : sans aucun geste, le chrono
  valide chaque série à la fin de sa minute.
- **Calendrier 30 jours** — une case par jour, remplie au pourcentage, avec les trois barres
  de couleur pour comparer. On peut corriger ou rattraper n'importe quel jour.
- **Classement** — trois vues : régularité, volume, séries. Plus les statistiques perso.

## Déploiement sur Netlify

### Avec synchronisation entre vous trois (recommandé)

Il faut un déploiement **depuis Git**, pour que la fonction serveur parte avec le site.

1. Sur [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**
2. Choisis ce dépôt et la branche `claude/pushups-pullups-tracker-eosil2`
3. Ne touche à rien : `netlify.toml` règle déjà tout
   (`publish = challenge`, `functions = netlify/functions`)
4. Déploie, puis envoie l'URL à Raphaël et Ethan

Chacun ouvre le lien, choisit son prénom, et c'est parti. Dès que quelqu'un saisit quelque
chose, les autres le voient **en 2 à 3 secondes**, sans rien recharger : le classement se
réordonne, les anneaux bougent, le total du groupe monte.

### Sans synchronisation (glisser-déposer)

Tu peux déposer le dossier `challenge/` directement sur Netlify. Le site marche, mais **sans
partage** : chacun n'aura que ses propres données, sur son propre téléphone. La pastille en haut
à droite affiche alors « Local ».

### Sur le téléphone

Ouvre le lien, puis « Ajouter à l'écran d'accueil ». Ça s'ouvre en plein écran, comme une appli.

## Comment ça marche

`challenge/index.html` est autonome : pas de framework, pas d'étape de build, aucune dépendance
en dehors des polices Google. Tout tient dans un fichier.

La synchronisation passe par `netlify/functions/state.mjs`, qui range l'état partagé dans
Netlify Blobs. Aucun compte à créer, aucune clé à gérer.

**Rien ne peut être écrasé.** Chaque case (une personne × un jour) porte son propre horodatage,
et la fusion se fait entrée par entrée, côté serveur, sous écriture conditionnelle. Si vous
cochez tous les trois en même temps, les trois saisies sont conservées.

**Ça marche sans réseau.** Une saisie hors ligne est gardée et repart toute seule au retour du
réseau. La pastille indique ce qui est en attente.

**Le rafraîchissement s'adapte.** Toutes les 2,5 s tant que quelqu'un est actif ; toutes les
20 s après 3 minutes de calme ; complètement en veille après 15 minutes, et le moindre geste le
réveille. Rien n'est demandé au serveur quand l'onglet est en arrière-plan. C'est ce qui permet
de rester quasi instantané sans dépasser le quota gratuit de Netlify.

**Le chrono ne triche pas.** Il ne compte pas des minutes, il lit l'heure réelle : s'il est mis en
veille, il se recale au réveil. Et si l'écran s'est éteint pendant plusieurs minutes, il ne crédite
rien tout seul — il demande combien de séries tu as réellement faites.

## Réglages

Le bouton ⚙️ en haut à droite permet de changer :

- **le premier jour du défi** — partagé entre vous trois ;
- **le salon** — le mot qui identifie vos données. Le même chez les trois = les mêmes données.
  En changer, c'est repartir de zéro. On peut aussi le passer dans l'URL : `?salon=les-trois`.

## Changer les objectifs ou les prénoms

Tout est en haut du `<script>` dans `challenge/index.html` :

```js
const DEFAULT_START = '2026-09-01';   // le premier jour du défi
const PEOPLE = [
  { id:'thomas',  name:'Thomas',  color:'#FF6B3D', goals:{ pushups:750, pullups:250 } },
  { id:'raphael', name:'Raphaël', color:'#5E7CFF', goals:{ pushups:500, pullups:175 } },
  { id:'ethan',   name:'Ethan',   color:'#2FD8A0', goals:{ pushups:250, pullups:175 } },
];
const DAYS = 30;
```

Les `id` servent de clés de stockage : si tu en changes un, les données déjà saisies pour cette
personne ne seront plus retrouvées.
