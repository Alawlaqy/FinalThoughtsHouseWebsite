import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.getElementById("root")!;
const app = <App path={window.location.pathname} />;

// Production pages are prerendered (scripts/prerender.mjs) — hydrate them; dev renders from scratch.
if (root.firstElementChild) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
