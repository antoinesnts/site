import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/accueil.jsx"),
  route("realisations", "routes/reportages.jsx"),
  route("realisations/:slug", "routes/reportage.jsx"),
  route("reportages/*", "routes/legacy-reportages.jsx"),
  route("a-propos", "routes/a-propos.jsx"),
  route("contact", "routes/contact.jsx"),
];
