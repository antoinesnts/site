/**
 * Prefixes a path from `public/` with the deploy base.
 *
 * Assets under `public/` are copied verbatim, so Vite never rewrites the
 * absolute paths written in content.js. On GitHub Pages the site lives under
 * `/site/`, and without this every image would 404.
 */
export function asset(chemin) {
  if (!chemin) return chemin;
  if (/^[a-z]+:\/\//i.test(chemin)) return chemin;
  return import.meta.env.BASE_URL.replace(/\/$/, "") + chemin;
}
