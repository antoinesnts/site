/**
 * Prepares build/client for a static host.
 *
 * React Router writes prerendered HTML under the basename (build/client/site/…)
 * while Vite emits assets at the root. GitHub Pages serves a project artifact's
 * root at https://<user>.github.io/<repo>/, so the HTML has to be lifted back up
 * to sit beside the assets, otherwise every page 404s.
 */
import { cp, readdir, rename, rm, writeFile, access } from "node:fs/promises";
import { join } from "node:path";

const OUT = "build/client";
const segment = (process.env.BASE_PATH || "/").replace(/^\/+|\/+$/g, "");

if (segment) {
  const nested = join(OUT, segment);
  try {
    await access(nested);
  } catch {
    console.error(`pages: expected ${nested} to exist — did the build run?`);
    process.exit(1);
  }
  for (const entry of await readdir(nested)) {
    await rename(join(nested, entry), join(OUT, entry));
  }
  await rm(nested, { recursive: true, force: true });
  console.log(`pages: lifted ${segment}/ up to the artifact root`);
}

// Unknown URLs boot the app, which then renders its own 404.
try {
  await cp(join(OUT, "__spa-fallback.html"), join(OUT, "404.html"));
  console.log("pages: __spa-fallback.html -> 404.html");
} catch {
  console.warn("pages: no SPA fallback to copy");
}

// Without this, Pages runs Jekyll and drops files whose names start with "_".
await writeFile(join(OUT, ".nojekyll"), "");
console.log("pages: .nojekyll written");
