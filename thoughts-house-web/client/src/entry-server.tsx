/*
 * Server entry used only at build time by scripts/prerender.mjs
 * to render static HTML for each language URL.
 */
import { renderToString } from "react-dom/server";
import App from "./App";

export { renderHead, renderSitemap, ROUTES } from "./seo";

export function render(path: string) {
  return renderToString(<App path={path} />);
}
