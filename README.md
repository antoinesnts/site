# Site d'Antoine Santos — journaliste reporter d'images

Site vitrine statique-rendu-serveur, inspiré de l'esthétique éditoriale de
[whitman.framer.website](https://whitman.framer.website) : fond noir, grotesque
serré, grille de 12 colonnes à gouttière fine, grain photographique, révélations
au défilement.

Antoine Santos est JRI, monteur et télépilote de drone, correspondant en
Normandie pour TF1 et TF1 Info.

> Le site contient **un seul sujet** pour l'instant (Saül, Guyane). Tout le
> contenu vit dans `app/data/content.js` ; ce qui reste à confirmer y est
> marqué `⚠️`.

## Stack

| | |
|---|---|
| Framework | React 19 + React Router 7 (framework mode, **prérendu statique**) |
| Build | Vite 6 |
| Styles | CSS Modules + un fichier global de tokens — pas de framework CSS |
| Langage | JavaScript uniquement, **pas de TypeScript** |
| Dépendances runtime | React, React Router. Rien d'autre. |

Les animations sont en CSS pur pilotées par `IntersectionObserver` : aucune
bibliothèque de motion n'est embarquée.

## Commandes

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build && npm run preview
```

Le serveur de dev respecte la variable `PORT`.

## Déploiement — GitHub Pages

Chaque push sur `main` déclenche `.github/workflows/deploy.yml`, qui construit
le site et le publie. Rien d'autre à faire au quotidien.

**Une seule manipulation, une fois :** dans *Settings → Pages* du dépôt, mettre
**Source: GitHub Actions**. Sans ça le workflow échoue au moment de publier.

Le site n'a pas besoin de serveur : toutes les routes sont rendues en HTML au
moment du build (`ssr: false` + `prerender`), puisque tout le contenu vient de
`content.js`. Le résultat tient dans `build/client`.

### Le chemin de base

Les pages de projet GitHub sont servies depuis `https://<compte>.github.io/<dépôt>/`
et non depuis la racine du domaine. La variable `BASE_PATH` porte ce préfixe :

- en local, elle n'est pas définie → le site tourne à la racine ;
- dans le workflow, elle vaut `/site/`.

Elle est répercutée sur Vite (`base`), sur React Router (`basename`) et sur les
fichiers de `public/` via le petit utilitaire `app/lib/asset.js`. Les polices et
le grain sont passés par le pipeline Vite (`app/styles/assets/`) : ils sont donc
empreintés et préfixés automatiquement.

`scripts/pages.mjs` termine le travail : React Router écrit le HTML sous le
basename (`build/client/site/…`) alors que Vite pose les assets à la racine ; le
script remonte le HTML d'un cran, copie le fallback en `404.html` et écrit un
`.nojekyll`.

### Passer à un nom de domaine

1. Mettre `BASE_PATH: /` dans `.github/workflows/deploy.yml`.
2. Ajouter un fichier `public/CNAME` contenant le domaine.
3. Faire pointer le DNS sur GitHub Pages, puis renseigner le domaine dans
   *Settings → Pages*.

Rien d'autre : le code ne suppose jamais un chemin en particulier.

## Modifier le contenu

Tout est dans **`app/data/content.js`** :

| Export | Rôle |
|---|---|
| `site` | nom, rôle, accroche d'accueil, ville, fuseau, e-mail, portrait, description SEO |
| `reperes` | les quatre blocs de repères à gauche du titre d'accueil |
| `navigation` | les entrées du menu |
| `reportages` | la liste des sujets (voir ci-dessous) |
| `bio`, `parcours`, `parutions` | page « À propos » |
| `liens` | réseaux affichés dans le pied de page |

Chaque reportage :

```js
{
  slug: "saul",                // l'URL : /reportages/saul
  titre: "Au cœur du village le plus isolé de France",
  lieu: "Saül, Guyane française",
  date: "2025",
  mois: "03/25",               // affiché dans la grille
  genre: "Reportage",
  role: "JRI & télépilote de drone",
  image: "/photos/saul.jpg",
  video: "/videos/saul.mp4",   // optionnel — clip court et muet
  youtube: "https://…",        // optionnel — lien vers le sujet complet
  galerie: ["/photos/saul-1.jpg"], // optionnel — images choisies, bas de page
  chapeau: "…",                // chapeau de la page du reportage
  parution: "TF1 — Le 13H",
}
```

La grille d'accueil est uniforme : toutes les vignettes font la même taille, en
16:9, sur 3 colonnes (2 sous 1160 px, 1 sous 768 px, et 2 tant qu'il y a moins
de trois sujets, pour qu'une rangée presque vide ne saute pas aux yeux). Au
survol d'une vignette, les autres passent à 25 % d'opacité — c'est du CSS
(`:has()`), donc déplacer la souris sur la grille ne provoque aucun rendu React.

Le nombre de vignettes affichées en accueil est la constante `SELECTION`
(`app/routes/accueil.jsx`), 6 par défaut ; le lien « Voir tous les reportages »
n'apparaît qu'au-delà.

## Ajouter un sujet vidéo

Le site n'héberge **jamais** le sujet complet : seulement une boucle courte et
muette, plus un lien vers la version intégrale.

- `video` — clip de 5 à 10 s, sans bande son. Il boucle au survol de la vignette
  sur l'accueil, et en tête de la page du reportage. Chargé uniquement au survol
  (`preload="none"`) et jamais sur écran tactile (`@media (hover: none)`).
  L'image fixe sert de poster : le clip n'apparaît qu'une fois la lecture
  réellement lancée, donc pas de trame noire.
- `youtube` — le lien « Voir le reportage en entier », affiché sous le chapeau.
- `galerie` — les images choisies, en bas de la page. Une image sur trois passe
  en pleine largeur, pour que la mosaïque ne se lise pas comme une simple liste
  à deux colonnes. Sans ce champ, la page retombe sur des images de démonstration.

Sans `video`, tout reste sur l'image fixe ; sans `youtube`, pas de lien. Les
deux sont indépendants, il n'y a rien à activer.

### Fabriquer les deux fichiers depuis un rush

Déposez le rush à la racine du dépôt (les `.webm/.mp4/.mov/.mkv` y sont
gitignorés) puis repérez un plan continu et parlant. Une planche-contact aide :

```bash
ffmpeg -i rush.webm -vf "fps=1/30,scale=320:-1,tile=6x4" -frames:v 1 /tmp/planche.png
```

L'image fixe, prise sur une image propre (sans bandeau incrusté) :

```bash
ffmpeg -ss 28.2 -i rush.webm -frames:v 1 -vf "scale=1600:-2" -q:v 4 public/photos/mon-sujet.jpg
```

La boucle, muette et redimensionnée (`-an` retire la bande son) :

```bash
ffmpeg -ss 26 -t 8 -i rush.webm -an -vf "scale=1280:-2,fps=25" -c:v libx264 -profile:v high -pix_fmt yuv420p -crf 30 -preset slow -movflags +faststart public/videos/mon-sujet.mp4
```

Et les images choisies pour le bas de page, une par plan retenu :

```bash
ffmpeg -ss 153.5 -i rush.webm -frames:v 1 -vf "scale=1600:-2" -q:v 4 public/photos/mon-sujet-1.jpg
```

Repère : le sujet Saül pèse 57 Ko pour l'image, 326 Ko pour 8 s de vidéo, et
~150 Ko par image de la mosaïque.
Visez cet ordre de grandeur — au-delà de ~1 Mo, le survol devient poussif.

## Remplacer les images

Les visuels de `public/photos/` sont des dégradés générés, pas des photos.
Déposez les vraies images au même endroit et pointez `image` dessus.

> ⚠️ Ne renommez pas `public/photos/` en `public/reportages/` : un dossier
> statique portant le nom d'une route est servi en priorité et provoque une
> redirection 301 sur `/reportages` en production.

Formats conseillés : ~2000 px sur le grand côté, JPEG ou WebP.

## Charte

Les valeurs sont dans `app/styles/app.css` (`:root`).

| Token | Valeur |
|---|---|
| Fond / texte | `#000` / `#f2f2f2` |
| Texte secondaire | le texte principal à `opacity: .5` |
| Typo | Switzer 400/500/700, auto-hébergée dans `public/fonts/` |
| Titrage | 48 px desktop · 40 px tablette · 24 px mobile, interligne 112 %, approche −0.02em |
| Courant | 14 px, interligne 136 % |
| Grille | 12 colonnes, gouttière 4 px, marge de page 24 px |
| Ruptures | 1160 px · 768 px |
| Grain | tuile 256 px à 7 % d'opacité, fixe |

Switzer vient de [Fontshare](https://fontshare.com/fonts/switzer) (gratuite, usage
commercial autorisé) et est servie depuis le site : aucune requête vers un CDN
tiers, donc rien à déclarer côté RGPD.

## Accessibilité et robustesse

- Toutes les routes sont prérendues en HTML : le contenu est là sans JavaScript.
- Sans JS, une feuille `<noscript>` annule les états de départ des animations et
  retire le voile de chargement — rien n'est masqué.
- Le voile de chargement se lève sur une animation CSS : même si le bundle
  échoue, la page s'ouvre.
- `prefers-reduced-motion` désactive révélations, voile et transitions.
- Sous 768 px, la navigation passe dans un panneau plein écran (`Échap` ferme).

## Structure

```
app/
├── root.jsx                 layout, <head>, repli sans JS
├── routes.js                déclaration des routes
├── data/content.js          ← tout le contenu éditable
├── lib/intro.js             synchronisation du voile de chargement
├── lib/asset.js             préfixe de base pour les fichiers de public/
├── lib/texte.js             accord au pluriel
├── styles/app.css           tokens, reset, grille, grain
├── styles/assets/           polices + grain (empreintés par Vite)
├── components/
│   ├── Reveal/              révélation au défilement
│   ├── SplitText/           révélation mot à mot
│   ├── Preloader/           voile + compteur
│   ├── Header/              en-tête fixe + menu mobile
│   ├── Clock/               heure locale de Paris
│   ├── ReportageCard/       carte de la grille
│   └── Footer/
└── routes/
    ├── accueil.jsx          /
    ├── reportages.jsx       /reportages
    ├── reportage.jsx        /reportages/:slug
    └── a-propos.jsx         /a-propos
```
