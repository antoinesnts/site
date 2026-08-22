import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/accueil.jsx"),
  route("reportages", "routes/reportages.jsx"),
  route("reportages/:slug", "routes/reportage.jsx"),
  route("a-propos", "routes/a-propos.jsx"),
];
