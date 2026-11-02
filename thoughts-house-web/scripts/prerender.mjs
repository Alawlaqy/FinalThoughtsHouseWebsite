/*
 * Prerender: turns the client-only SPA into static HTML for every route so search engines
 * and AI crawlers see the full content without running JavaScript.
 *
 *   /                       → dist/public/index.html
 *   /ar/                    → dist/public/ar/index.html
 *   /services/<slug>/       → dist/public/services/<slug>/index.html
 *   /ar/services/<slug>/    → dist/public/ar/services/<slug>/index.html
 *   (unknown URLs)          → dist/public/404.html
 *
 * Also writes sitemap.xml for all routes. Runs after `vite build` (client) and
 * `vite build --ssr` (server entry).
 *
 * Sitemap dates: scripts/page-dates.json stores a hash and date for each page. A page keeps its
 * stored date until its own text changes; a changed or new page gets the build date. Run with
 * UPDATE_PAGE_DATES=1 and commit the file to record the new dates.
 */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..");
const publicDir = path.join(root, "dist", "public");
const serverEntry = path.join(root, "dist", "server", "entry-server.js");

const { render, renderHead, renderNotFoundHead, renderSitemap, renderLlmsTxt, ROUTES } = await import(pathToFileURL(serverEntry).href);
const template = fs.readFileSync(path.join(publicDir, "index.html"), "utf-8");
const datesFile = path.join(root, "scripts", "page-dates.json");
const storedDates = fs.existsSync(datesFile) ? JSON.parse(fs.readFileSync(datesFile, "utf-8")) : {};
const today = new Date().toISOString().slice(0, 10);
const pageDates = {};

/** Hash of the page's own text: title, description and main content, without the shared contact section. */
function pageHash(head, body) {
  const meta = head.match(/<title>[\s\S]*?<\/title>|<meta name="description"[^>]*>/g) ?? [];
  const main = (body.match(/<main[\s\S]*<\/main>/)?.[0] ?? body).split('id="contact"')[0];
  return crypto.createHash("sha256").update(meta.join("") + main).digest("hex").slice(0, 16);
}

for (const route of ROUTES) {
  const head = renderHead(route);
  const body = render(route.path);
  const hash = pageHash(head, body);
  const stored = storedDates[route.path];
  pageDates[route.path] = { hash, date: stored?.hash === hash ? stored.date : today };

  const html = template
    .replace(/<html lang="en" dir="ltr">/, `<html lang="${route.lang}" dir="${route.lang === "ar" ? "rtl" : "ltr"}">`)
    // function replacers so "$" in content is never treated as a replacement pattern
    .replace(/<!--seo-head-->[\s\S]*?<!--\/seo-head-->/, () => head)
    .replace("<!--app-html-->", () => body);

  const outDir = path.join(publicDir, route.path);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html);
  console.log(`prerendered ${route.path}`);
}

// 404.html — served by the host for any unknown URL
fs.writeFileSync(
  path.join(publicDir, "404.html"),
  template
    .replace(/<!--seo-head-->[\s\S]*?<!--\/seo-head-->/, () => renderNotFoundHead())
    .replace("<!--app-html-->", () => render("/404")),
);
console.log("prerendered 404.html");

fs.writeFileSync(path.join(publicDir, "sitemap.xml"), renderSitemap(p => pageDates[p].date));
if (process.env.UPDATE_PAGE_DATES) fs.writeFileSync(datesFile, `${JSON.stringify(pageDates, null, 1)}\n`);
console.log(`sitemap.xml → ${ROUTES.length} URLs`);

fs.writeFileSync(path.join(publicDir, "llms.txt"), renderLlmsTxt());
console.log("llms.txt");

fs.rmSync(path.join(root, "dist", "server"), { recursive: true, force: true });
