/*
 * Prerender: turns the client-only SPA into static HTML per language so search engines
 * and AI crawlers see the full content without running JavaScript.
 *
 *   dist/public/index.html     → English  (/)
 *   dist/public/ar/index.html  → Arabic   (/ar/)
 *
 * Runs after `vite build` (client) and `vite build --ssr` (server entry).
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..");
const publicDir = path.join(root, "dist", "public");
const serverEntry = path.join(root, "dist", "server", "entry-server.js");

const { render, renderHead, PATHS } = await import(pathToFileURL(serverEntry).href);
const template = fs.readFileSync(path.join(publicDir, "index.html"), "utf-8");

for (const lang of ["en", "ar"]) {
  const url = PATHS[lang];
  const html = template
    .replace(/<html lang="en" dir="ltr">/, `<html lang="${lang}" dir="${lang === "ar" ? "rtl" : "ltr"}">`)
    // function replacers so "$" in content is never treated as a replacement pattern
    .replace(/<!--seo-head-->[\s\S]*?<!--\/seo-head-->/, () => renderHead(lang))
    .replace("<!--app-html-->", () => render(url));

  const outDir = path.join(publicDir, url);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html);
  console.log(`prerendered ${url} → ${path.relative(root, path.join(outDir, "index.html"))}`);
}

fs.rmSync(path.join(root, "dist", "server"), { recursive: true, force: true });
