import NotFound from "@/pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import InsightsPage from "./pages/InsightsPage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import { alternatePath, HOME_PATHS, langFromPath, resolveRoute } from "./seo";

/** `path` is the request path — passed explicitly during prerendering, read from the URL in the browser. */
function App({ path }: { path: string }) {
  // Every page is a real URL (prerendered to static HTML), so routing is a simple lookup;
  // navigation between pages is a normal full-page link.
  const route = resolveRoute(path);
  const lang = route?.lang ?? langFromPath(path);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider lang={lang} altHref={route ? alternatePath(route) : HOME_PATHS[lang === "en" ? "ar" : "en"]}>
          {!route ? (
            <NotFound />
          ) : route.page === "home" ? (
            <Home />
          ) : route.page === "service" ? (
            <ServicePage slug={route.slug} />
          ) : route.page === "about" ? (
            <AboutPage />
          ) : route.page === "insights" ? (
            <InsightsPage />
          ) : (
            <ArticlePage slug={route.slug} />
          )}
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
