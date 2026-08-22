import { reportages } from "./app/data/content.js";

/**
 * Static build: every route is rendered to HTML at build time, so the site
 * needs no Node server and can be hosted on GitHub Pages. All content comes
 * from content.js, so there is nothing to render per-request.
 */
export default {
  ssr: false,
  basename: process.env.BASE_PATH || "/",
  prerender() {
    return [
      "/",
      "/reportages",
      "/a-propos",
      "/contact",
      ...reportages.map((r) => `/reportages/${r.slug}`),
    ];
  },
};
