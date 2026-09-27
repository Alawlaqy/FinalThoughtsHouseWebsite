import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import { provideArticleBodies } from "./content/articleBodyStore";
import { resolveRoute } from "./seo";
import "./index.css";

async function start() {
  const path = window.location.pathname;

  // Article text is a separate chunk, only fetched on article pages (before hydrating, so the
  // client render matches the prerendered HTML).
  if (resolveRoute(path)?.page === "article") {
    const { ARTICLE_BODIES } = await import("./content/articleBodies");
    provideArticleBodies(ARTICLE_BODIES);
  }

  const root = document.getElementById("root")!;
  const app = <App path={path} />;

  // Production pages are prerendered (scripts/prerender.mjs) — hydrate them; dev renders from scratch.
  if (root.firstElementChild) {
    hydrateRoot(root, app);
  } else {
    createRoot(root).render(app);
  }
}

start();
