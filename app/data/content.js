/**
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │  CONTENU DU SITE — seul fichier à modifier pour le mettre à jour.        │
 * │                                                                          │
 * │  Les informations viennent de sources publiques (profils pro, TF1).      │
 * │  Tout ce qui reste à confirmer est marqué ⚠️.                            │
 * └──────────────────────────────────────────────────────────────────────────┘
 */

export const site = {
  nom: "Antoine Santos",
  role: "Journaliste reporter d'images",
  // Titre de la page d'accueil, révélé mot à mot. Chaque entrée est une ligne.
  accroche: [
    "Journaliste Reporter d’Images,",
    "Télépilote de drone, monteur et vidéaste,",
    "Formateur occasionnel en école de journalisme,",
    "basé en Normandie, disponible partout en France.",
  ],
  ville: "Caen, FR",
  fuseau: "Europe/Paris",
  email: "antoine.santos.pro@gmail.com",
  emailPiedDePage: "contact@antoinesantos.fr",
  description:
    "Antoine Santos, journaliste reporter d'images, monteur et télépilote de drone basé à Caen. Correspondant en Normandie pour TF1 et TF1 Info.",
  portrait: "/photos/antoine-santos-morzine.jpg",
  portraitAlt: "Antoine Santos tenant un drone à Morzine au coucher du soleil — photo Corentin Gérard",
};

/** Blocs de repères affichés à gauche du titre, en page d'accueil. */
export const reperes = [
  { label: "Réalisations", lignes: ["+900 Reportages", "+20 Productions"] },
  { label: "Expérience", lignes: ["JRI Monteur depuis 2018", "Télépilote STS / A1-A2-A3"] },
  { label: "Clients", lignes: ["+10 entreprises"] },
  { label: "Médias", lignes: ["TF1 · Public Sénat · NOVO19 · Ici"] },
];

export const navigation = [
  { to: "/", label: "Accueil" },
  { to: "/reportages", label: "Reportages" },
  { to: "/a-propos", label: "À propos" },
];

/**
 * La grille d'accueil est uniforme : toutes les vignettes en 16:9.
 *
 * `video` (optionnel) : clip court et MUET joué au survol de la vignette et en
 * tête de la page du reportage. Sans lui, tout reste sur l'image fixe.
 * `youtube` (optionnel) : lien vers le sujet complet, affiché sur sa page.
 * `galerie` (optionnel) : images choisies, en bas de la page du reportage.
 */
export const reportages = [
  {
    slug: "saul",
    titre: "Au cœur du village le plus isolé de France",
    lieu: "Saül, Guyane française",
    // ⚠️ À CONFIRMER — déduit d'un horodatage de piège photographique vu à
    // l'image (12/03/2025). Corriger avec la vraie date de diffusion.
    date: "2025",
    mois: "03/25",
    genre: "Reportage",
    // ⚠️ À CONFIRMER — c'est son métier, pas forcément son crédit exact ici.
    role: "JRI & télépilote de drone",
    image: "/photos/saul.jpg",
    youtubeEmbed: "https://www.youtube-nocookie.com/embed/d_0IVb4CgsU?start=26&rel=0",
    galerie: [
      "/photos/saul-1.jpg",
      "/photos/saul-2.jpg",
      "/photos/saul-3.jpg",
      "/photos/saul-4.jpg",
      "/photos/saul-5.jpg",
    ],
    youtube: "https://www.youtube.com/watch?v=d_0IVb4CgsU&t=26s",
    chapeau:
      "Aucune route ne mène à Saül, au cœur de la forêt amazonienne guyanaise. Tout y arrive par avion depuis Cayenne, sur une piste taillée dans la canopée.",
    parution: "TF1 — Le 13H",
  },
];

export const profil =
  "Je conçois et réalise des reportages, magazines et je participe comme télépilote de drone à des films documentaires pour des médias nationaux, notamment TF1, France 3, NOVO19 ou encore Public Sénat. De la recherche de sujet au tournage, en passant par la réalisation, les prises de vues aériennes et le montage, j’interviens sur l’ensemble de la chaîne de production. Je suis basé sur Caen en Normandie et disponible sur toute la France. Mon expérience de terrain me permet de m’adapter sur des sujets très variés, en France comme à l’étranger, dans des contextes qui exigent réactivité, autonomie et capacité d’adaptation. Je porte une attention particulière à la qualité des images, à leur sens et au récit, avec la volonté de rendre chaque sujet à la fois rigoureux, tourné en séquences et visuellement fort. Habitué aux exigences des diffuseurs nationaux et aux délais contraints, je mets cette double expertise journalistique et audiovisuelle au service de projets éditoriaux ambitieux.";

export const details = ["Basé à Caen, en Normandie", "Disponible partout en France et dans le monde"];

export const competences = [
  "Brand Films", "Commercial Films", "Music Videos", "Fashion & Editorial Films",
  "Sports & Lifestyle Films", "Documentary & Short Films", "Creative Direction",
  "Concept Development", "Storyboarding", "Production Planning", "Cinematography",
  "Drone Videography", "Camera Operation", "Video Editing", "Color Grading",
  "Motion Graphics", "Sound Design", "Post-Production",
];

export const clients = [
  "Festival Beauregard", "UTOBI", "La Réserve Pêche lodé", "Kite-R Évolution",
  "Le Sémaphore", "Normandie Pays d’Auge Tourisme", "Merville-Franceville",
];

export const equipement = ["Sony FX6", "ARRI Alexa Mini", "RED Komodo 6K", "DJI Ronin", "Zeiss Prime Lenses"];

export const awards = [
  { annee: "2026", prix: "Best Short Film", evenement: "Urban Frame" },
  { annee: "2025", prix: "Best Cinematography", evenement: "Motion Awards" },
  { annee: "2025", prix: "Official Selection", evenement: "Global Film Festival" },
];

export const liens = [
  { label: "YouTube", icone: "youtube", href: "https://www.youtube.com/c/AntoineSANTOS" },
  { label: "LinkedIn", icone: "linkedin", href: "https://www.linkedin.com/in/antoinesantos/" },
  { label: "Instagram", icone: "instagram", href: "https://www.instagram.com/antoinesnts/" },
  { label: "TikTok", icone: "tiktok", href: "https://www.tiktok.com/@antoinesnts" },
];
