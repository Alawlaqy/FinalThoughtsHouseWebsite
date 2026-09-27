/*
 * Routes + SEO metadata — single source of truth for every page and its <head> tags.
 * Used by the app to pick a page, and by the prerender step (scripts/prerender.mjs)
 * to generate static HTML for every route.
 */
import { SERVICES, SERVICE_SLUGS, type ServiceSlug } from "./content/services";

export type Language = "en" | "ar";

export const SITE_URL = "https://www.thoughtshouse.com";
export const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663032266291/6GEufHXYFFmAikUkdcoDrJ/thoughts-house-logo-transparent_8229ec19.png";
export const OG_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663032266291/6GEufHXYFFmAikUkdcoDrJ/hero-bg-Vr4m9Ly3dbEfs2tnY82hfX.webp";

const ORG_ID = `${SITE_URL}/#organization`;

export type Route =
  | { page: "home"; lang: Language; path: string }
  | { page: "service"; lang: Language; path: string; slug: ServiceSlug };

export const HOME_PATHS: Record<Language, string> = { en: "/", ar: "/ar/" };

export function servicePath(slug: ServiceSlug, lang: Language) {
  return `${lang === "ar" ? "/ar" : ""}/services/${slug}/`;
}

/** Every prerendered page. */
export const ROUTES: Route[] = (["en", "ar"] as Language[]).flatMap((lang) => [
  { page: "home" as const, lang, path: HOME_PATHS[lang] },
  ...SERVICE_SLUGS.map((slug) => ({ page: "service" as const, lang, slug, path: servicePath(slug, lang) })),
]);

/** Matches a URL path (with or without trailing slash) to a route. */
export function resolveRoute(pathname: string): Route | undefined {
  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return ROUTES.find((r) => r.path === normalized);
}

export function langFromPath(pathname: string): Language {
  return pathname === "/ar" || pathname.startsWith("/ar/") ? "ar" : "en";
}

/** Same page in the other language. */
export function alternatePath(route: Route): string {
  const other: Language = route.lang === "en" ? "ar" : "en";
  return route.page === "home" ? HOME_PATHS[other] : servicePath(route.slug, other);
}

const HOME_META: Record<Language, { title: string; description: string }> = {
  en: {
    title: "Thoughts House | IT System Integrator & Cybersecurity in Saudi Arabia",
    description:
      "IT system integrator in Dammam, Saudi Arabia: cybersecurity, network infrastructure, cloud and backup solutions with Sophos, Cisco, Dell, Microsoft and more.",
  },
  ar: {
    title: "بيت الأفكار | تكامل أنظمة تقنية المعلومات والأمن السيبراني في السعودية",
    description:
      "بيت الأفكار شركة تكامل أنظمة تقنية معلومات في الدمام: حلول الأمن السيبراني والبنية التحتية للشبكات والحلول السحابية والنسخ الاحتياطي في السعودية.",
  },
};

const LOCALE: Record<Language, string> = { en: "en_US", ar: "ar_SA" };

export function getMeta(route: Route) {
  if (route.page === "home") return HOME_META[route.lang];
  const c = SERVICES[route.slug].content[route.lang];
  return { title: c.metaTitle, description: c.metaDescription };
}

export function getTitle(route: Route) {
  return getMeta(route).title;
}

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const organization = {
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: "Thoughts House",
  alternateName: "بيت الأفكار",
  description: HOME_META.en.description,
  url: `${SITE_URL}/`,
  logo: LOGO_URL,
  image: OG_IMAGE,
  email: "sales@thoughtshouse.com",
  telephone: "+966541022995",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dammam",
    addressRegion: "Eastern Province",
    addressCountry: "SA",
  },
  areaServed: { "@type": "Country", name: "Saudi Arabia" },
  hasMap: "https://maps.app.goo.gl/SECK4KzVH42TiTxD6",
  knowsAbout: [
    "Cybersecurity",
    "Endpoint Protection",
    "Next-Generation Firewalls",
    "Network Infrastructure",
    "Wireless Solutions",
    "Cloud Migration",
    "Disaster Recovery",
    "Backup Solutions",
    "Data Center Solutions",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT Services",
    itemListElement: SERVICE_SLUGS.map((slug) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: SERVICES[slug].content.en.name,
        url: SITE_URL + servicePath(slug, "en"),
      },
    })),
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+966541022995",
    email: "sales@thoughtshouse.com",
    contactType: "sales",
    availableLanguage: ["English", "Arabic"],
  },
};

function structuredData(route: Route) {
  const url = SITE_URL + route.path;
  const graph: object[] = [organization];

  if (route.page === "home") {
    graph.push({
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Thoughts House",
      inLanguage: ["en", "ar"],
      publisher: { "@id": ORG_ID },
    });
  } else {
    const service = SERVICES[route.slug];
    const c = service.content[route.lang];
    const home = HOME_PATHS[route.lang];
    graph.push(
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: c.name,
        serviceType: SERVICES[route.slug].content.en.name,
        description: c.metaDescription,
        url,
        image: service.image,
        inLanguage: route.lang,
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "Country", name: "Saudi Arabia" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: c.offeringsTitle,
          itemListElement: c.offerings.map((o) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: o.title, description: o.text },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: route.lang === "ar" ? "الرئيسية" : "Home", item: SITE_URL + home },
          { "@type": "ListItem", position: 2, name: c.name, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        inLanguage: route.lang,
        mainEntity: c.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    );
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export function renderHead(route: Route): string {
  const m = getMeta(route);
  const url = SITE_URL + route.path;
  const enPath = route.lang === "en" ? route.path : alternatePath(route);
  const arPath = route.lang === "ar" ? route.path : alternatePath(route);
  const image = route.page === "service" ? SERVICES[route.slug].image : OG_IMAGE;
  const other: Language = route.lang === "en" ? "ar" : "en";

  return [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<link rel="alternate" hreflang="en" href="${SITE_URL}${enPath}" />`,
    `<link rel="alternate" hreflang="ar" href="${SITE_URL}${arPath}" />`,
    `<link rel="alternate" hreflang="x-default" href="${SITE_URL}${enPath}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Thoughts House" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:locale" content="${LOCALE[route.lang]}" />`,
    `<meta property="og:locale:alternate" content="${LOCALE[other]}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(m.title)}" />`,
    `<meta name="twitter:description" content="${esc(m.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<script type="application/ld+json">${JSON.stringify(structuredData(route)).replace(/</g, "\\u003c")}</script>`,
  ].join("\n    ");
}

/** sitemap.xml covering every route, with hreflang alternates. */
export function renderSitemap(lastmod: string): string {
  const urls = ROUTES.map((route) => {
    const enPath = route.lang === "en" ? route.path : alternatePath(route);
    const arPath = route.lang === "ar" ? route.path : alternatePath(route);
    return [
      "  <url>",
      `    <loc>${SITE_URL}${route.path}</loc>`,
      `    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${enPath}" />`,
      `    <xhtml:link rel="alternate" hreflang="ar" href="${SITE_URL}${arPath}" />`,
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${enPath}" />`,
      `    <lastmod>${lastmod}</lastmod>`,
      "  </url>",
    ].join("\n");
  });
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    "</urlset>",
    "",
  ].join("\n");
}
