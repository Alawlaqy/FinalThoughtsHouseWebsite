/*
 * Prerender: turns the client-only SPA into static HTML for every route so search engines
 * and AI crawlers see the full content without running JavaScript.
 *
 *   /                       → dist/public/index.html
 *   /ar/                    → dist/public/ar/index.html
 *   /services/<slug>/       → dist/public/services/<slug>/index.html
 *   /ar/services/<slug>/    → dist/public/ar/services/<slug>/index.html
 *
 * Also writes sitemap.xml for all routes. Runs after `vite build` (client) and
 * `vite build --ssr` (server entry).
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..");
const publicDir = path.join(root, "dist", "public");
const serverEntry = path.join(root, "dist", "server", "entry-server.js");

const { render, renderHead, renderSitemap, ROUTES } = await import(pathToFileURL(serverEntry).href);
const template = fs.readFileSync(path.join(publicDir, "index.html"), "utf-8");

for (const route of ROUTES) {
  const html = template
    .replace(/<html lang="en" dir="ltr">/, `<html lang="${route.lang}" dir="${route.lang === "ar" ? "rtl" : "ltr"}">`)
    // function replacers so "$" in content is never treated as a replacement pattern
    .replace(/<!--seo-head-->[\s\S]*?<!--\/seo-head-->/, () => renderHead(route))
    .replace("<!--app-html-->", () => render(route.path));

  const outDir = path.join(publicDir, route.path);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html);
  console.log(`prerendered ${route.path}`);
}

fs.writeFileSync(path.join(publicDir, "sitemap.xml"), renderSitemap(new Date().toISOString().slice(0, 10)));
console.log(`sitemap.xml → ${ROUTES.length} URLs`);

fs.rmSync(path.join(root, "dist", "server"), { recursive: true, force: true });
