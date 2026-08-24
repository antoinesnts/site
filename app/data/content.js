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
  { label: "Réalisations", lignes: ["+900 Reportages", "+20 Films de marque"] },
  { label: "Expérience", lignes: ["JRI Monteur depuis 2018", "Télépilote de drone STS / A1-A2-A3"] },
  { label: "Clients", lignes: ["+10 entreprises"] },
  { label: "Médias", lignes: ["TF1 · Public Sénat · NOVO19 · Ici · M6"] },
];

export const navigation = [
  { to: "/", label: "Accueil" },
  { to: "/realisations", label: "Réalisations" },
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
    date: "janvier 2026",
    mois: "01/26",
    genre: "Reportage",
    role: "JRI / Télépilote\nMonteur / Étalonneur",
    cameras: ["Sony FX6", "DJI Mavic 3 Pro", "iPhone 17 Pro"],
    client: "TF1",
    equipe: "Jules Beaucamp et Antoine Santos",
    image: "/photos/saul.jpg",
    preview: "/videos/previews/saul.mp4",
    youtubeEmbed: "https://www.youtube-nocookie.com/embed/d_0IVb4CgsU?start=26&rel=0",
    galerie: [
      "/photos/saul-1.jpg",
      "/photos/saul-2.jpg",
      "/photos/saul-3.jpg",
      "/photos/saul-produits-propres.jpg",
      "/photos/saul-5min11.jpg",
      "/photos/saul-5.jpg",
    ],
    youtube: "https://www.youtube.com/watch?v=d_0IVb4CgsU&t=26s",
    resume:
      "Entouré de jaguars et de scorpions, vivre dans l’un des villages les plus isolés de l’Hexagone est une aventure. Saül est un trésor caché de Guyane, loin de tout, en pleine forêt amazonienne. Il compte à peine 50 maisons sur 4 475 km², 42 fois la superficie de Paris. Le quotidien est bien différent, à 7 000 kilomètres de la métropole. Pas de route, de fleuve à proximité… le seul moyen d’y accéder est un aérodrome. Depuis Cayenne, il faut 45 minutes de vol à bord d’un petit avion d’une capacité de 19 passagers. Reportage au cœur du village le plus isolé de France.",
    chapeau:
      "Entouré de jaguars et de scorpions, vivre dans l’un des villages les plus isolés de l’Hexagone est une aventure.",
    parution: "TF1 — Le 13H",
  },
  {
    slug: "chausey",
    titre: "Archipel de Chausey : les plus grandes marées d’Europe",
    lieu: "Chausey, Normandie",
    date: "octobre 2025",
    mois: "10/25",
    genre: "Reportage",
    role: "JRI / Télépilote / Monteur",
    cameras: ["Sony FX6", "DJI Mavic 3 Pro", "iPhone 17 Pro"],
    client: "TF1",
    equipe: "Aurore Coulon et Antoine Santos",
    image: "/photos/chausey.jpg",
    vignette: "/photos/chausey-vignette.jpg",
    video: "/videos/chausey.mp4",
    preview: "/videos/previews/chausey.mp4",
    source: "https://www.linkedin.com/posts/antoinesantos_normandie-grandesmaraezes-grandemaraeze-ugcPost-7383499336590008320-8TmO/",
    galerie: [
      "/photos/chausey-3.jpg",
      "/photos/chausey-2.jpg",
      "/photos/chausey-1.jpg",
      "/photos/chausey-5.jpg",
      "/photos/chausey-4.jpg",
      "/photos/chausey-6.jpg",
    ],
    resume:
      "L’archipel de Chausey offre un spectacle naturel saisissant pendant les grandes marées. À marée basse, 365 îlots se découvrent, contre 52 à marée haute. Avec un marnage qui peut atteindre 14 mètres, la mer transforme entièrement le paysage en seulement quelques heures. Notre défi pour ce reportage : raconter d’une nouvelle façon en images ce phénomène spectaculaire. Pour cela, nous avons parcouru une quinzaine de kilomètres à travers tout l’archipel pour réaliser des avant/après, timelapse et autres séquences pour montrer l’ampleur de ces marées.",
    chapeau:
      "À Chausey, les plus grandes marées d’Europe transforment le paysage en quelques heures.",
    parution: "TF1 — Le 13H",
  },
  {
    slug: "etretat",
    titre: "Étretat : les secours désormais payants pour les imprudents",
    lieu: "Étretat, Normandie",
    date: "avril 2026",
    mois: "04/26",
    genre: "Reportage",
    role: "JRI / Télépilote / Monteur",
    cameras: ["Sony FX6", "DJI Mavic 4 Pro"],
    client: "TF1",
    equipe: "Guillaume Thorel et Antoine Santos",
    image: "/photos/etretat.jpg",
    preview: "/videos/previews/etretat.mp4",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D969146452273589&show_text=false&width=1280",
    source: "https://www.facebook.com/watch/?v=969146452273589",
    galerie: [
      "/photos/etretat-1.jpg",
      "/photos/etretat-2.jpg",
      "/photos/etretat-3.jpg",
      "/photos/etretat-4.jpg",
      "/photos/etretat-5.jpg",
      "/photos/etretat-6.jpg",
    ],
    resume:
      "À Étretat, des touristes s’aventurent dans le Trou à l’homme sans anticiper la montée des eaux. Piégés par la marée haute, ils doivent parfois être secourus avec d’importants moyens. Désormais, les interventions concernant des personnes qui ne sont pas en danger peuvent être facturées, pour un montant minimum de 750 euros. Nous avons filmé ces touristes bloqués par la marée haute dans le Trou à l’homme. Ne voulant pas attendre en sécurité que la marée baisse, ils se sont jetés dans une eau à 12 °C pour regagner la plage.",
    chapeau:
      "À Étretat, les imprudents surpris par la marée peuvent désormais devoir payer les secours.",
    parution: "TF1",
  },
  {
    slug: "mont-saint-michel",
    titre: "Mont-Saint-Michel : le retour à l’insularité",
    lieu: "Mont-Saint-Michel, Normandie",
    date: "mars 2025",
    mois: "03/25",
    genre: "Reportage",
    role: "Co-réalisation / Télépilotage drone",
    cameras: ["Sony FX6", "DJI Mavic 2 Pro", "DJI Mavic 3 Pro", "iPhone 14 Pro"],
    client: "TF1",
    equipe: "Mathieu Rio et Antoine Santos",
    image: "/photos/mont-saint-michel.jpg",
    vignette: "/photos/mont-saint-michel-vignette.jpg",
    preview: "/videos/previews/mont-saint-michel.mp4",
    video: "/videos/mont-saint-michel.mp4",
    source: "https://www.linkedin.com/feed/update/urn:li:activity:7302267178882379777/",
    galerie: [
      "/photos/mont-saint-michel-1.jpg",
      "/photos/mont-saint-michel-2.jpg",
      "/photos/mont-saint-michel-3.jpg",
      "/photos/mont-saint-michel-4.jpg",
      "/photos/mont-saint-michel-5.jpg",
      "/photos/mont-saint-michel-6.jpg",
    ],
    resume:
      "Filmer le Mont-Saint-Michel est toujours aussi exaltant, surtout avec cette sublime lumière de l’aube sous une gelée du matin à 0 °C.\n\nLes grandes marées transforment le Mont-Saint-Michel en île environ sept fois par an. Pendant moins d’une heure, la mer submerge le bout de la passerelle et encercle les remparts. Le Mont-Saint-Michel se retrouve coupé du continent. Une heure plus tard, l’eau se retire. La traversée de la baie redevient possible, offrant aux visiteurs l’occasion de découvrir les sables mouvants. Ce reportage suit cette transformation spectaculaire pendant 12 heures.",
    chapeau:
      "Lors des grandes marées, le Mont-Saint-Michel se retrouve brièvement coupé du continent.",
    parution: "TF1 — Le 20H",
  },
  {
    slug: "granville",
    titre: "Granville : une pépite normande entre mer et élégance",
    lieu: "Granville, Normandie",
    date: "juin 2026",
    mois: "06/26",
    genre: "Reportage",
    role: "JRI / Télépilote / Monteur",
    cameras: ["Sony FX6", "DJI Mavic 4 Pro", "iPhone 17 Pro", "Insta360 X5"],
    client: "TF1",
    equipe: "Guillaume Thorel et Antoine Santos",
    image: "/photos/granville.jpg",
    preview: "/videos/previews/granville.mp4",
    youtubeEmbed: "https://www.youtube-nocookie.com/embed/JqS8WHB0mI4?start=16&rel=0",
    youtube: "https://www.youtube.com/watch?v=JqS8WHB0mI4&t=16s",
    galerie: [
      "/photos/granville-1.jpg",
      "/photos/granville-2.jpg",
      "/photos/granville-3.jpg",
      "/photos/granville-4.jpg",
      "/photos/granville-5.jpg",
      "/photos/granville-6.jpg",
    ],
    resume:
      "Cap sur Granville, dans la baie du Mont-Saint-Michel, pour notre nouveau « Week-end à… » en Normandie !\n\nPremier port coquillier de l’Hexagone et surnommée « la Monaco du Nord », la ville était la préférée de Christian Dior. L’art est omniprésent dans Granville, surtout dans la Haute Ville. Une partie de celle-ci est construite sur un bloc de granite massif. Ce roc a fait de Granville une place militaire stratégique. Saviez-vous qu’un archipel de plusieurs centaines d’îles est rattaché à Granville et qu’il est possible d’y passer la nuit ?",
    chapeau:
      "Granville dévoile son caractère singulier entre mer, patrimoine et élégance normande.",
    parution: "TF1 INFO",
  },
  {
    slug: "erosion-debarquement",
    titre: "L’érosion menace les vestiges du Débarquement",
    lieu: "Arromanches-les-Bains, Pointe du Hoc, Utah Beach et Ver-sur-Mer, Normandie",
    date: "juin 2024",
    mois: "06/24",
    genre: "Reportage",
    role: "JRI / Télépilote / Monteur",
    cameras: ["Sony FX6", "DJI Mavic 2 Pro", "iPhone 14 Pro"],
    client: "TF1",
    equipe: "Lucas Barbier, Mérième Stiti et Antoine Santos",
    image: "/photos/arromanches.jpg",
    preview: "/videos/previews/erosion-debarquement.mp4",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D487174353751058&show_text=false&width=1280",
    source: "https://www.facebook.com/watch/?v=487174353751058",
    galerie: [
      "/photos/erosion-debarquement-1.jpg",
      "/photos/erosion-debarquement-2.jpg",
      "/photos/erosion-debarquement-3.jpg",
      "/photos/erosion-debarquement-4.jpg",
      "/photos/erosion-debarquement-5.jpg",
      "/photos/erosion-debarquement-6.jpg",
    ],
    resume:
      "La grande majorité du port artificiel d’Arromanches-les-Bains a été grignotée par la mer. Sur les 115 caissons, il ne reste plus qu’une quinzaine. La municipalité estime que d’ici 50 ans, il n’y aura plus aucune trace de ce port artificiel, symbole de la logistique des Britanniques. Pour les autorités, le défi est donc de continuer à transmettre l’histoire du Débarquement, avec de moins en moins de témoins directs, et de moins en moins de lieux dédiés.",
    chapeau:
      "Sur les plages normandes, l’érosion menace les lieux emblématiques de l’histoire du Débarquement.",
    parution: "TF1",
  },
  {
    slug: "bora-bora-coraux",
    titre: "Bora-Bora : la renaissance des coraux ... Jusqu'à quand ?",
    lieu: "Bora-Bora, Polynésie française",
    date: "janvier 2023",
    mois: "01/23",
    genre: "Reportage",
    role: "JRI / Télépilote / Monteur",
    cameras: ["Panasonic AJ-HPX800", "DJI Mavic 2 Pro", "iPhone 14 Pro", "GoPro 10"],
    client: "TF1",
    equipe: "Guillaume Thorel et Antoine Santos",
    image: "/photos/bora-bora.jpg",
    preview: "/videos/previews/bora-bora-coraux.mp4",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D5658335480948769&show_text=false&width=1280",
    source: "https://www.facebook.com/watch/?v=5658335480948769",
    galerie: [
      "/photos/bora-bora-coraux-1.jpg",
      "/photos/bora-bora-coraux-2.jpg",
      "/photos/bora-bora-coraux-3.jpg",
      "/photos/bora-bora-coraux-4.jpg",
      "/photos/bora-bora-coraux-5.jpg",
      "/photos/bora-bora-coraux-6.jpg",
    ],
    resume:
      "Derrière les lagons turquoise et les paysages de carte postale de Bora-Bora se joue un enjeu environnemental majeur. Des chercheurs travaillent à mieux comprendre l’état des coraux et à connecter le lagon pour recevoir des informations en temps réel, afin d’identifier plus rapidement les menaces qui pèsent sur cet écosystème fragile.",
    chapeau:
      "À Bora-Bora, la préservation du lagon et des coraux devient un enjeu essentiel.",
    parution: "TF1",
  },
  {
    slug: "deserts-medicaux-drones",
    titre: "Déserts médicaux : la première ligne de drones pour les prélèvements",
    lieu: "France",
    date: "mai 2025",
    mois: "05/25",
    genre: "Reportage",
    role: "JRI / Télépilote / Monteur",
    cameras: ["Sony FX6", "DJI Mavic 3 Pro"],
    client: "TF1 INFO",
    image: "/photos/deserts-medicaux.jpg",
    vignette: "/photos/deserts-medicaux-vignette.jpg",
    preview: "/videos/previews/deserts-medicaux-drones.mp4",
    youtubeEmbed: "https://www.youtube-nocookie.com/embed/YQFAYsgMhbI?rel=0",
    youtube: "https://www.youtube.com/watch?v=YQFAYsgMhbI",
    galerie: ["/photos/deserts-medicaux.jpg"],
    resume:
      "Dans les territoires éloignés des laboratoires, une ligne de drones est mise en place pour acheminer des prélèvements médicaux. Une solution qui pourrait raccourcir les délais d’analyse et faciliter l’accès aux soins dans les déserts médicaux.",
    chapeau:
      "Des drones ouvrent une nouvelle voie pour transporter rapidement des prélèvements médicaux.",
    parution: "TF1 INFO",
  },
  {
    slug: "demolition-a13",
    titre: "Démolition spectaculaire du dernier péage de l’A13",
    lieu: "Dozulé, Normandie",
    date: "septembre 2025",
    mois: "09/25",
    genre: "Reportage",
    role: "JRI / Télépilote / Monteur",
    cameras: ["Sony FX6", "DJI Mavic 3 Pro"],
    client: "TF1",
    image: "/photos/a13.jpg",
    preview: "/videos/previews/demolition-a13.mp4",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D2344931052628879&show_text=false&width=1280",
    source: "https://www.facebook.com/watch/?v=2344931052628879",
    galerie: ["/photos/a13.jpg"],
    resume:
      "Après des mois de préparation, le dernier péage physique de l’A13 est démantelé sous l’œil de la caméra et du drone. Les automobilistes traversent désormais l’autoroute sans s’arrêter : des portiques enregistrent les plaques et le règlement s’effectue ensuite en ligne ou chez un partenaire.",
    chapeau:
      "Le dernier péage physique de l’A13 disparaît, symbole du passage au flux libre.",
    parution: "TF1",
  },
  {
    slug: "lubrizol",
    titre: "Lubrizol : images exclusives de l'intérieur de l'usine",
    lieu: "Rouen, Normandie",
    date: "septembre 2019",
    mois: "09/19",
    genre: "Reportage",
    role: "JRI / Monteur",
    cameras: ["Sony FX6", "DJI Mavic 3 Pro"],
    client: "TF1",
    image: "/photos/lubrizol.jpg",
    preview: "/videos/previews/lubrizol.mp4",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D526264831540226&show_text=false&width=1280",
    source: "https://www.facebook.com/watch/?v=526264831540226",
    galerie: ["/photos/lubrizol.jpg"],
    resume:
      "Le 26 septembre 2019, un incendie ravage l’usine Lubrizol à Rouen, classée Seveso. Après l’extinction du feu, les pompiers restent mobilisés dans les décombres fumants afin d’éviter toute reprise. Une enquête judiciaire est ouverte pour déterminer les causes de l’incendie.",
    chapeau:
      "À Rouen, les images exclusives de l’incendie qui a ravagé l’usine Lubrizol.",
    parution: "TF1",
  },
  {
    slug: "beauregard",
    titre: "Beauregard : 1 an en coulisses dans l’un des plus grands festivals français",
    lieu: "Hérouville-Saint-Clair, Normandie",
    date: "juillet 2026",
    mois: "07/26",
    genre: "Reportage",
    role: "JRI / Télépilote / Monteur",
    cameras: ["Sony FX6", "DJI Mavic 3 Pro"],
    client: "TF1 INFO",
    image: "/photos/beauregard.jpg",
    preview: "/videos/previews/beauregard.mp4",
    youtubeEmbed: "https://www.youtube-nocookie.com/embed/vXK4G6dUwT0?start=25&rel=0",
    youtube: "https://www.youtube.com/watch?v=vXK4G6dUwT0&t=25s",
    galerie: ["/photos/beauregard.jpg"],
    resume:
      "Pendant un an, ce reportage suit les préparatifs du festival Beauregard, à Hérouville-Saint-Clair. Derrière les 42 artistes et les 150 000 festivaliers attendus sur cinq jours, l’équipe organisatrice doit relever de nombreux défis pour faire vivre l’un des plus grands rendez-vous musicaux français.",
    chapeau:
      "Dans les coulisses de Beauregard, un festival qui rassemble plus de 150 000 personnes.",
    parution: "TF1 INFO",
  },
  {
    slug: "viaduc-calix",
    titre: "Calix : un viaduc sous haute surveillance qui a besoin de travaux",
    lieu: "Caen, Normandie",
    date: "mai 2026",
    mois: "05/26",
    genre: "Reportage",
    role: "JRI / Télépilote / Monteur",
    cameras: ["Sony FX6", "DJI Mavic 3 Pro"],
    client: "TF1 — Le 13H",
    image: "/photos/viaduc-calix.jpg",
    vignette: "/photos/viaduc-calix-vignette.jpg",
    preview: "/videos/previews/viaduc-calix.mp4",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D1516726993575508&show_text=false&width=1280",
    source: "https://www.facebook.com/watch/?v=1516726993575508",
    galerie: ["/photos/viaduc-calix.jpg"],
    resume:
      "Chaque jour, près de 80 000 véhicules empruntent le viaduc de Calix, le pont le plus fréquenté de Normandie. Ce reportage révèle les coulisses de cette infrastructure stratégique : la surveillance de l’ouvrage, les travaux d’urgence menés à l’intérieur et les opérations prévues pour prolonger sa durée de vie de plusieurs décennies.",
    chapeau:
      "À Caen, le viaduc de Calix fait l’objet d’une surveillance constante pour assurer son avenir.",
    parution: "TF1 — Le 13H",
  },
  {
    slug: "saint-georges-energie-positive",
    titre: "En Guyane, l’énergie positive de Saint-Georges",
    lieu: "Saint-Georges de l’Oyapock, Guyane française",
    date: "août 2022",
    mois: "08/22",
    genre: "Reportage",
    role: "JRI / Télépilote / Monteur",
    client: "Outremers 360",
    image: "/photos/saint-georges.jpg",
    youtubeEmbed: "https://www.youtube-nocookie.com/embed/fumSzFOfzKs?rel=0",
    youtube: "https://www.youtube.com/watch?v=fumSzFOfzKs",
    galerie: ["/photos/saint-georges.jpg"],
    accueil: false,
    resume:
      "À Saint-Georges de l’Oyapock, en Guyane, l’électricité est 100 % verte. La commune produit davantage d’énergie renouvelable qu’elle n’en consomme grâce à deux centrales : l’une à biomasse, l’autre hydraulique.",
    chapeau:
      "En Guyane, Saint-Georges de l’Oyapock devient un modèle d’autonomie énergétique renouvelable.",
    parution: "Outremers 360",
  },
  {
    slug: "amazonie-richesse-cosmetique",
    titre: "En Guyane, l’Amazonie est une richesse cosmétique",
    lieu: "Kourou, Guyane française",
    date: "juin 2022",
    mois: "06/22",
    genre: "Reportage",
    role: "JRI / Télépilote / Monteur",
    client: "Outremers 360",
    image: "/photos/saint-georges-seconds.jpg",
    youtubeEmbed: "https://www.youtube-nocookie.com/embed/jedMgd7fY-k?rel=0",
    youtube: "https://www.youtube.com/watch?v=jedMgd7fY-k",
    galerie: ["/photos/saint-georges-seconds.jpg"],
    accueil: false,
    resume:
      "En Guyane, les principes actifs de la forêt amazonienne inspirent les créateurs de cosmétiques. Depuis Kourou, Nature Amazonie développe ses produits et s’ouvre à de nouveaux marchés en Amérique du Nord et en Europe.",
    chapeau:
      "La forêt amazonienne de Guyane, source d’innovation pour la cosmétique locale.",
    parution: "Outremers 360",
  },
  {
    slug: "bora-bora-eco-camping",
    titre: "À Bora-Bora, des campings écolos sur la perle du Pacifique",
    lieu: "Bora-Bora, Polynésie française",
    date: "juin 2023",
    mois: "06/23",
    genre: "Reportage",
    role: "JRI / Télépilote / Monteur",
    client: "Outremers 360",
    image: "/photos/gZVIr1dFyw0.jpg",
    youtubeEmbed: "https://www.youtube-nocookie.com/embed/gZVIr1dFyw0?rel=0",
    youtube: "https://www.youtube.com/watch?v=gZVIr1dFyw0",
    galerie: ["/photos/gZVIr1dFyw0.jpg"],
    accueil: false,
    resume:
      "À Bora-Bora, Tahianui Lacour et son époux ont ouvert un éco-camping sur un motu. Une alternative plus accessible, écologique et conviviale aux grands hôtels de luxe de l’île.",
    chapeau:
      "À Bora-Bora, un éco-camping propose une autre façon de découvrir la perle du Pacifique.",
    parution: "Outremers 360",
  },
  {
    slug: "benitier-polynesie",
    titre: "Le bénitier de Polynésie, une espèce à protéger",
    lieu: "Polynésie française",
    date: "avril 2023",
    mois: "04/23",
    genre: "Reportage",
    role: "JRI / Télépilote / Monteur",
    client: "Outremers 360",
    image: "/photos/roQ3FYvocOE.jpg",
    youtubeEmbed: "https://www.youtube-nocookie.com/embed/roQ3FYvocOE?rel=0",
    youtube: "https://www.youtube.com/watch?v=roQ3FYvocOE",
    galerie: ["/photos/roQ3FYvocOE.jpg"],
    accueil: false,
    resume:
      "Les bénitiers, appelés pahua en tahitien, jouent un rôle essentiel dans l’écosystème marin. En Polynésie, autorités, associations et chercheurs se mobilisent pour préserver cette espèce menacée à l’échelle mondiale.",
    chapeau:
      "En Polynésie, la mobilisation s’organise pour protéger les bénitiers et leur écosystème.",
    parution: "Outremers 360",
  },
  {
    slug: "guadeloupe-place-velo",
    titre: "En Guadeloupe, faire de la place au vélo",
    lieu: "Morne-à-l’Eau, Guadeloupe",
    date: "mai 2022",
    mois: "05/22",
    genre: "Reportage",
    role: "JRI / Télépilote / Monteur",
    client: "Outremers 360",
    image: "/photos/jOLrth2Uo3s.jpg",
    youtubeEmbed: "https://www.youtube-nocookie.com/embed/jOLrth2Uo3s?rel=0",
    youtube: "https://www.youtube.com/watch?v=jOLrth2Uo3s",
    galerie: ["/photos/jOLrth2Uo3s.jpg"],
    accueil: false,
    resume:
      "En Guadeloupe, plusieurs initiatives cherchent à encourager la mobilité douce face au trafic routier. À Morne-à-l’Eau, la collectivité développe notamment l’usage du vélo auprès des habitants.",
    chapeau:
      "En Guadeloupe, le vélo devient une réponse concrète aux enjeux de circulation.",
    parution: "Outremers 360",
  },
  {
    slug: "guyane-pollutions-sauvages",
    titre: "En Guyane, des citoyens contre les pollutions sauvages",
    lieu: "Guyane française",
    date: "juillet 2026",
    mois: "07/26",
    genre: "Reportage",
    role: "JRI / Télépilote / Monteur",
    client: "Public Sénat",
    image: "/photos/k2oMjZR3LtD6qgHt7my.jpg",
    embedUrl: "https://www.dailymotion.com/embed/video/k2oMjZR3LtD6qgHt7my?queue-enable=false",
    source: "https://www.dailymotion.com/video/k2oMjZR3LtD6qgHt7my",
    galerie: ["/photos/k2oMjZR3LtD6qgHt7my.jpg"],
    accueil: false,
    resume:
      "En Guyane, des citoyens engagés signalent les rejets d’eaux usées, dépôts sauvages et carcasses de véhicules grâce à une plateforme numérique. Coordonnée par Guyane Nature Environnement, cette mobilisation aide à alerter les autorités sur les atteintes à l’environnement.",
    chapeau:
      "En Guyane, une mobilisation citoyenne pour lutter contre les pollutions sauvages.",
    parution: "Public Sénat",
  },
  {
    slug: "guyane-boutique-solidaire-enfants",
    titre: "En Guyane, une boutique solidaire pour les enfants",
    lieu: "Guyane française",
    date: "avril 2026",
    mois: "04/26",
    genre: "Reportage",
    role: "JRI / Télépilote / Monteur",
    client: "Public Sénat",
    image: "/photos/k5RBzDLvKqUW0ZFxea4.jpg",
    embedUrl: "https://www.dailymotion.com/embed/video/k5RBzDLvKqUW0ZFxea4?queue-enable=false",
    source: "https://www.dailymotion.com/video/k5RBzDLvKqUW0ZFxea4",
    galerie: ["/photos/k5RBzDLvKqUW0ZFxea4.jpg"],
    accueil: false,
    resume:
      "En Guyane, une boutique solidaire collecte, trie et revend à petits prix des vêtements, jouets et équipements de puériculture. Ce modèle aide les familles tout en donnant une seconde vie à plusieurs tonnes d’objets chaque année.",
    chapeau:
      "Une boutique solidaire en Guyane donne une seconde vie aux objets destinés aux enfants.",
    parution: "Public Sénat",
  },
  {
    slug: "amerindiens-culture-guyane",
    titre: "Les Amérindiens entre préservation de leur culture",
    lieu: "Guyane française",
    date: "mars 2022",
    mois: "03/22",
    genre: "Reportage",
    role: "JRI / Télépilote / Monteur",
    client: "Public Sénat",
    image: "/photos/k5UCyLPTfqNdZ2xKkud.jpg",
    embedUrl: "https://www.dailymotion.com/embed/video/k5UCyLPTfqNdZ2xKkud?queue-enable=false",
    source: "https://www.dailymotion.com/video/k5UCyLPTfqNdZ2xKkud",
    galerie: ["/photos/k5UCyLPTfqNdZ2xKkud.jpg"],
    accueil: false,
    resume:
      "En Guyane, les communautés amérindiennes poursuivent leurs efforts pour préserver et transmettre leur culture.",
    chapeau:
      "En Guyane, la préservation de la culture amérindienne au cœur des enjeux de transmission.",
    parution: "Public Sénat",
  },
  {
    slug: "kitesurf-merville-franceville",
    titre: "Kitesurf : le spot parfait pour apprendre en Normandie",
    lieu: "Merville-Franceville, Normandie",
    date: "avril 2024",
    mois: "04/24",
    genre: "Film de marque",
    role: "Réalisation / Image / Montage",
    client: "Kite-R Evolution",
    image: "/photos/QTxNvXll320.jpg",
    youtubeEmbed: "https://www.youtube-nocookie.com/embed/QTxNvXll320?start=4&rel=0",
    youtube: "https://www.youtube.com/watch?v=QTxNvXll320&t=4s",
    galerie: ["/photos/QTxNvXll320.jpg"],
    accueil: false,
    resume:
      "Film de marque pour Kite-R Evolution, école de kitesurf installée à Merville-Franceville. Le film met en avant le spot, les conditions d’apprentissage et les différentes activités proposées par l’école.",
    chapeau:
      "À Merville-Franceville, un film de marque pour découvrir Kite-R Evolution et son spot de kitesurf.",
    parution: "Kite-R Evolution",
  },
  {
    slug: "seasonova-slow-life",
    titre: "Découvrez la slow life dans les campings Seasonova",
    lieu: "Normandie, France",
    date: "mars 2024",
    mois: "03/24",
    genre: "Film de marque",
    role: "Réalisation / Image / Montage",
    client: "Seasonova",
    image: "/photos/iWSXJ1xQqRs.jpg",
    youtubeEmbed: "https://www.youtube-nocookie.com/embed/iWSXJ1xQqRs?rel=0",
    youtube: "https://www.youtube.com/watch?v=iWSXJ1xQqRs",
    galerie: ["/photos/iWSXJ1xQqRs.jpg"],
    accueil: false,
    resume:
      "Film de marque pour les campings Seasonova, imaginé autour de la slow life : nature, moments en famille et simplicité des vacances en plein air.",
    chapeau:
      "Un film de marque qui invite à découvrir la slow life dans les campings Seasonova.",
    parution: "Seasonova",
  },
  {
    slug: "sunset-boat-reserve-peche-iode",
    titre: "Sunset Boat — La Réserve Pêché Iodé",
    lieu: "Merville-Franceville, Normandie",
    date: "juin 2024",
    mois: "06/24",
    genre: "Film de marque",
    role: "Vidéo / Montage",
    client: "La Réserve Pêché Iodé",
    image: "/photos/reserve-peche-iode.svg",
    video: "/videos/sunset-boat-reserve-peche-iode.mp4",
    source: "https://www.linkedin.com/posts/aur%C3%A9lie-lemoine-b1726072_nouveau-projet-%C3%A9ph%C3%A9m%C3%A8re-sunset-boat-by-ugcPost-7212104576395620352-uNRo/",
    galerie: ["/photos/reserve-peche-iode.svg"],
    accueil: false,
    resume:
      "Film de marque pour Sunset Boat, l’expérience estivale imaginée par La Réserve Pêché Iodé : une croisière panoramique sur l’estuaire de l’Orne, entre apéritif au coucher du soleil et dîner à Merville-Franceville.",
    chapeau:
      "Sunset Boat : une expérience estivale sur l’estuaire de l’Orne par La Réserve Pêché Iodé.",
    parution: "La Réserve Pêché Iodé",
  },
  {
    slug: "ultra-tour-obiou-2026",
    titre: "Ultra Tour de l’Obiou 2026",
    lieu: "Massif de l’Obiou, France",
    date: "juillet 2026",
    mois: "07/26",
    genre: "Film de marque",
    role: "Télépilote de drone",
    client: "UTOBI",
    image: "/photos/bF3ZwWwKDLw.jpg",
    youtubeEmbed: "https://www.youtube-nocookie.com/embed/bF3ZwWwKDLw?rel=0",
    youtube: "https://www.youtube.com/watch?v=bF3ZwWwKDLw",
    galerie: ["/photos/bF3ZwWwKDLw.jpg"],
    accueil: false,
    resume:
      "Aftermovie de l’Ultra Tour de l’Obiou 2026, un événement de trail au cœur du massif de l’Obiou. Intervention en tant que télépilote de drone pour les images aériennes.",
    chapeau:
      "Images aériennes de l’Ultra Tour de l’Obiou 2026.",
    parution: "Pure Films",
  },
  {
    slug: "tourisme-paradis-perdus",
    titre: "Tourisme : nos paradis perdus",
    lieu: "France",
    date: "juin 2026",
    mois: "06/26",
    genre: "Film",
    client: "TF1",
    image: "/photos/tourisme-paradis-perdus.svg",
    source: "https://www.tf1.fr/tf1/grands-reportages/videos/grands-reportages-tourisme-nos-paradis-perdus-03249713.html",
    sourceLabel: "Voir le film sur TF1+",
    galerie: ["/photos/tourisme-paradis-perdus.svg"],
    accueil: false,
    resume:
      "À Étretat, Nice, Chamonix ou Marseille, habitants et acteurs locaux cherchent des réponses face aux conséquences du tourisme de masse : pollution, bruit et hausse des loyers.",
    chapeau:
      "Un film sur les territoires français confrontés au surtourisme.",
    parution: "Grands Reportages — TF1",
  },
  {
    slug: "zeph-control-entretien-barre-kitesurf",
    titre: "Comment entretenir et ajuster sa barre de kitesurf ?",
    lieu: "France",
    date: "novembre 2020",
    mois: "11/20",
    genre: "Film de marque",
    client: "Zeph Control",
    image: "/photos/WVl4zCVPPFQ.jpg",
    youtubeEmbed: "https://www.youtube-nocookie.com/embed/WVl4zCVPPFQ?rel=0",
    youtube: "https://www.youtube.com/watch?v=WVl4zCVPPFQ",
    galerie: ["/photos/WVl4zCVPPFQ.jpg"],
    accueil: false,
    resume:
      "Film pratique pour Zeph Control autour de l’entretien, du réglage et de la sécurité d’une barre et de ses lignes de kitesurf.",
    chapeau:
      "Les bons gestes pour entretenir et ajuster sa barre de kitesurf.",
    parution: "Zeph Control",
  },
  {
    slug: "aftermovie-festival-beauregard-2026",
    titre: "Aftermovie — Festival Beauregard 2026",
    lieu: "Hérouville-Saint-Clair, Normandie",
    date: "août 2026",
    mois: "08/26",
    genre: "Film de marque",
    client: "Festival Beauregard",
    image: "/photos/2dvxAncy5RI.jpg",
    youtubeEmbed: "https://www.youtube-nocookie.com/embed/2dvxAncy5RI?rel=0",
    youtube: "https://www.youtube.com/watch?v=2dvxAncy5RI",
    galerie: ["/photos/2dvxAncy5RI.jpg"],
    accueil: false,
    resume:
      "Aftermovie officiel du Festival Beauregard 2026, cinq jours de concerts et de fête au château, réunis dans un film de cinq minutes.",
    chapeau:
      "Les temps forts de l’édition 2026 du Festival Beauregard.",
    parution: "Festival Beauregard",
  },
].map((reportage) => ({
  ...reportage,
  role: reportage.genre === "Reportage"
    ? "JRI / Télépilote de drone\nMonteur / Étalonneur"
    : reportage.role?.replace(/Télépilote(?! de drone)/g, "Télépilote de drone"),
}));

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

export const liens = [
  { label: "YouTube", icone: "youtube", href: "https://www.youtube.com/c/AntoineSANTOS" },
  { label: "LinkedIn", icone: "linkedin", href: "https://www.linkedin.com/in/antoinesantos/" },
  { label: "Instagram", icone: "instagram", href: "https://www.instagram.com/antoinesnts/" },
  { label: "TikTok", icone: "tiktok", href: "https://www.tiktok.com/@antoinesnts" },
];
