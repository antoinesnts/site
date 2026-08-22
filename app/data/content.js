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
  // ⚠️ Image d'attente sur la page « À propos » : un plan de ses reportages,
  // à remplacer par un vrai portrait.
  portrait: "/photos/saul.jpg",
  portraitAlt: "Saül, Guyane française — vue aérienne extraite du reportage",
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
    video: "/videos/saul.mp4",
    galerie: [
      "/photos/saul-1.jpg",
      "/photos/saul-2.jpg",
      "/photos/saul-3.jpg",
      "/photos/saul-4.jpg",
      "/photos/saul-5.jpg",
    ],
    youtube: "https://www.youtube.com/watch?v=d_0IVb4CgsU",
    chapeau:
      "Aucune route ne mène à Saül, au cœur de la forêt amazonienne guyanaise. Tout y arrive par avion depuis Cayenne, sur une piste taillée dans la canopée.",
    parution: "TF1 — Le 13H",
  },
];

// ⚠️ Texte proposé à partir de sources publiques : à relire et corriger.
export const bio = [
  "Antoine Santos est journaliste reporter d'images, monteur et télépilote de drone. Il vit à Caen et couvre la Normandie pour TF1 et TF1 Info.",
  "Ses sujets partent le plus souvent du terrain normand — le littoral et son érosion, le tourisme, la vie des communes — et l'emmènent parfois beaucoup plus loin, de la Polynésie française à la Guyane.",
  "Le drone fait partie de son écriture. Il donne l'échelle d'un trait de côte, d'une forêt ou d'un village isolé, là où le sol ne raconte qu'une partie de l'histoire.",
];

export const parcours = [
  {
    annee: "Aujourd'hui",
    intitule:
      "JRI, monteur et télépilote de drone — TF1 / TF1 Info, correspondant en Normandie",
  },
  { annee: "2018 — 2019", intitule: "Licence professionnelle télévision — IUT de Tours / EPJT" },
];

export const parutions = ["TF1", "TF1 Info", "Le 13H", "Le 20H"];

export const liens = [
  { label: "YouTube", icone: "youtube", href: "https://www.youtube.com/c/AntoineSANTOS" },
  { label: "LinkedIn", icone: "linkedin", href: "https://www.linkedin.com/in/antoinesantos/" },
  { label: "Instagram", icone: "instagram", href: "https://www.instagram.com/antoinesnts/" },
  { label: "TikTok", icone: "tiktok", href: "https://www.tiktok.com/@antoinesnts" },
];
