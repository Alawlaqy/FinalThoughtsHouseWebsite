/*
 * Routes + SEO metadata — single source of truth for every page and its <head> tags.
 * Used by the app to pick a page, and by the prerender step (scripts/prerender.mjs)
 * to generate static HTML for every route.
 */
import { SERVICES, SERVICE_SLUGS, type ServiceSlug } from "./content/services";
import { ARTICLES, getArticle, type ArticleSlug } from "./content/articles";
import { HOME_FAQ } from "./content/homeFaq";
import { ABOUT, COMPANY } from "./content/about";
import { COVERAGE, SERVED_PLACES } from "./content/coverage";
import { BRAND_GROUPS, BRANDS_COPY } from "./content/brands";
import { getArticleBody } from "./content/articleBodyStore";

export type Language = "en" | "ar";

export const SITE_URL = "https://www.thoughtshouse.com";
export const LOGO_URL = `${SITE_URL}/images/logo-192.png`;
/** 1200x630 JPG share images (JPG for widest social-platform support) */
export const OG_IMAGE = `${SITE_URL}/images/og-home.jpg`;
const ogImage = (route: Route) =>
  route.page === "service"
    ? `${SITE_URL}/images/og-${route.slug}.jpg`
    : route.page === "article"
      ? `${SITE_URL}/images/og-${getArticle(route.slug).service}.jpg`
      : route.page === "brands"
        ? `${SITE_URL}/images/og-it-supply.jpg`
        : OG_IMAGE;

const ORG_ID = `${SITE_URL}/#organization`;

export type Route =
  | { page: "home"; lang: Language; path: string }
  | { page: "service"; lang: Language; path: string; slug: ServiceSlug }
  | { page: "about"; lang: Language; path: string }
  | { page: "coverage"; lang: Language; path: string }
  | { page: "brands"; lang: Language; path: string }
  | { page: "insights"; lang: Language; path: string }
  | { page: "article"; lang: Language; path: string; slug: ArticleSlug };

export const HOME_PATHS: Record<Language, string> = { en: "/", ar: "/ar/" };

export function servicePath(slug: ServiceSlug, lang: Language) {
  return `${lang === "ar" ? "/ar" : ""}/services/${slug}/`;
}

export function coveragePath(lang: Language) {
  return `${lang === "ar" ? "/ar" : ""}/saudi-arabia/`;
}

export function brandsPath(lang: Language) {
  return `${lang === "ar" ? "/ar" : ""}/brands/`;
}

export function aboutPath(lang: Language) {
  return `${lang === "ar" ? "/ar" : ""}/about/`;
}

export function insightsPath(lang: Language) {
  return `${lang === "ar" ? "/ar" : ""}/insights/`;
}

export function articlePath(slug: ArticleSlug, lang: Language) {
  return `${insightsPath(lang)}${slug}/`;
}

/** Every prerendered page. */
export const ROUTES: Route[] = (["en", "ar"] as Language[]).flatMap(lang => [
  { page: "home" as const, lang, path: HOME_PATHS[lang] },
  ...SERVICE_SLUGS.map(slug => ({
    page: "service" as const,
    lang,
    slug,
    path: servicePath(slug, lang),
  })),
  { page: "about" as const, lang, path: aboutPath(lang) },
  { page: "coverage" as const, lang, path: coveragePath(lang) },
  { page: "brands" as const, lang, path: brandsPath(lang) },
  { page: "insights" as const, lang, path: insightsPath(lang) },
  ...ARTICLES.map(a => ({
    page: "article" as const,
    lang,
    slug: a.slug,
    path: articlePath(a.slug, lang),
  })),
]);

/** Matches a URL path (with or without trailing slash) to a route. */
export function resolveRoute(pathname: string): Route | undefined {
  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return ROUTES.find(r => r.path === normalized);
}

export function langFromPath(pathname: string): Language {
  return pathname === "/ar" || pathname.startsWith("/ar/") ? "ar" : "en";
}

/** Same page in the other language. */
export function alternatePath(route: Route): string {
  const other: Language = route.lang === "en" ? "ar" : "en";
  switch (route.page) {
    case "home":
      return HOME_PATHS[other];
    case "service":
      return servicePath(route.slug, other);
    case "about":
      return aboutPath(other);
    case "coverage":
      return coveragePath(other);
    case "brands":
      return brandsPath(other);
    case "insights":
      return insightsPath(other);
    case "article":
      return articlePath(route.slug, other);
  }
}

const HOME_META: Record<Language, { title: string; description: string }> = {
  en: {
    title:
      "Thoughts House | IT Company, System Integrator & IT Reseller in Saudi Arabia",
    description:
      "Saudi IT company & system integrator: cybersecurity, networks, cloud & backup, IT maintenance (AMC) and Dell, HP, Cisco & Microsoft supply across the Kingdom.",
  },
  ar: {
    title:
      "بيت الأفكار | شركة تقنية معلومات وتكامل أنظمة وتوريد أجهزة في السعودية",
    description:
      "شركة تقنية معلومات سعودية: تكامل أنظمة، أمن سيبراني، شبكات، حلول سحابية ونسخ احتياطي، عقود صيانة، وتوريد أجهزة وتراخيص في جميع مناطق المملكة.",
  },
};

const LOCALE: Record<Language, string> = { en: "en_US", ar: "ar_SA" };

export const INSIGHTS_META: Record<
  Language,
  { title: string; description: string; h1: string; intro: string }
> = {
  en: {
    title: "IT & Cybersecurity Insights for Saudi Businesses | Thoughts House",
    description:
      "Practical guides on cybersecurity compliance, firewalls, backup, Wi-Fi and IT infrastructure for organizations in Saudi Arabia.",
    h1: "Insights",
    intro:
      "Practical guides for IT decision makers in Saudi Arabia — from cybersecurity compliance to backup and networking.",
  },
  ar: {
    title:
      "مقالات في تقنية المعلومات والأمن السيبراني للشركات في السعودية | بيت الأفكار",
    description:
      "أدلة عملية حول الالتزام بالأمن السيبراني وجدران الحماية والنسخ الاحتياطي وشبكات Wi-Fi والبنية التحتية للمنشآت في المملكة.",
    h1: "مقالات ومعرفة",
    intro:
      "أدلة عملية لمتخذي قرارات تقنية المعلومات في المملكة، من الالتزام بالأمن السيبراني إلى النسخ الاحتياطي والشبكات.",
  },
};

export function getMeta(route: Route) {
  switch (route.page) {
    case "home":
      return HOME_META[route.lang];
    case "service": {
      const c = SERVICES[route.slug].content[route.lang];
      return { title: c.metaTitle, description: c.metaDescription };
    }
    case "about":
      return {
        title: ABOUT[route.lang].metaTitle,
        description: ABOUT[route.lang].metaDescription,
      };
    case "coverage":
      return {
        title: COVERAGE[route.lang].metaTitle,
        description: COVERAGE[route.lang].metaDescription,
      };
    case "brands":
      return {
        title: BRANDS_COPY[route.lang].metaTitle,
        description: BRANDS_COPY[route.lang].metaDescription,
      };
    case "insights":
      return INSIGHTS_META[route.lang];
    case "article": {
      const c = getArticle(route.slug).content[route.lang];
      return { title: c.metaTitle, description: c.description };
    }
  }
}

export function getTitle(route: Route) {
  return getMeta(route).title;
}

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
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
  email: COMPANY.email,
  telephone: COMPANY.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.streetAddress,
    addressLocality: COMPANY.locality,
    addressRegion: COMPANY.region,
    postalCode: COMPANY.postalCode,
    addressCountry: COMPANY.country,
  },
  slogan: "We Build & Protect Your Network",
  knowsLanguage: ["ar", "en"],
  areaServed: [
    { "@type": "Country", name: "Saudi Arabia" },
    ...SERVED_PLACES.map(name => ({ "@type": "City", name })),
  ],
  hasMap: COMPANY.mapUrl,
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
    itemListElement: SERVICE_SLUGS.map(slug => ({
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

  const home = HOME_PATHS[route.lang];
  const homeCrumb = {
    "@type": "ListItem",
    position: 1,
    name: route.lang === "ar" ? "الرئيسية" : "Home",
    item: SITE_URL + home,
  };

  if (route.page === "home") {
    graph.push(
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: "Thoughts House",
        inLanguage: ["en", "ar"],
        publisher: { "@id": ORG_ID },
      },
      {
        "@type": "FAQPage",
        inLanguage: route.lang,
        mainEntity: HOME_FAQ[route.lang].items.map(f => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    );
  } else if (route.page === "insights") {
    graph.push(
      {
        "@type": "CollectionPage",
        name: INSIGHTS_META[route.lang].h1,
        url,
        inLanguage: route.lang,
        hasPart: ARTICLES.map(a => ({
          "@type": "Article",
          headline: a.content[route.lang].title,
          url: SITE_URL + articlePath(a.slug, route.lang),
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          homeCrumb,
          {
            "@type": "ListItem",
            position: 2,
            name: INSIGHTS_META[route.lang].h1,
            item: url,
          },
        ],
      }
    );
  } else if (route.page === "coverage") {
    const c = COVERAGE[route.lang];
    graph.push(
      {
        "@type": "WebPage",
        name: c.h1,
        description: c.summary,
        url,
        inLanguage: route.lang,
        about: { "@id": ORG_ID },
      },
      {
        "@type": "FAQPage",
        inLanguage: route.lang,
        mainEntity: c.faq.map(f => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          homeCrumb,
          { "@type": "ListItem", position: 2, name: c.h1, item: url },
        ],
      }
    );
  } else if (route.page === "brands") {
    const c = BRANDS_COPY[route.lang];
    graph.push(
      {
        "@type": "CollectionPage",
        name: c.h1,
        description: c.summary,
        url,
        inLanguage: route.lang,
        about: { "@id": ORG_ID },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: BRAND_GROUPS.flatMap(g => g.brands).map((b, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Brand",
              name: b.name,
              description: b.products[route.lang],
            },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          homeCrumb,
          { "@type": "ListItem", position: 2, name: c.h1, item: url },
        ],
      }
    );
  } else if (route.page === "about") {
    graph.push(
      {
        "@type": "AboutPage",
        name: ABOUT[route.lang].h1,
        description: ABOUT[route.lang].summary,
        url,
        inLanguage: route.lang,
        mainEntity: { "@id": ORG_ID },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          homeCrumb,
          {
            "@type": "ListItem",
            position: 2,
            name: ABOUT[route.lang].h1,
            item: url,
          },
        ],
      }
    );
  } else if (route.page === "article") {
    const a = getArticle(route.slug);
    const c = a.content[route.lang];
    // Bodies are provided at build time (entry-server), so the FAQ is available when prerendering.
    const body = getArticleBody(route.slug, route.lang);
    if (body?.faq.length) {
      graph.push({
        "@type": "FAQPage",
        inLanguage: route.lang,
        mainEntity: body.faq.map(f => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      });
    }
    graph.push(
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: c.title,
        description: c.description,
        ...(body?.summary.length ? { abstract: body.summary.join(" ") } : {}),
        url,
        mainEntityOfPage: url,
        image: `${SITE_URL}/images/og-${a.service}.jpg`,
        inLanguage: route.lang,
        datePublished: a.published,
        dateModified: a.published,
        author: { "@id": ORG_ID },
        publisher: { "@id": ORG_ID },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          homeCrumb,
          {
            "@type": "ListItem",
            position: 2,
            name: INSIGHTS_META[route.lang].h1,
            item: SITE_URL + insightsPath(route.lang),
          },
          { "@type": "ListItem", position: 3, name: c.title, item: url },
        ],
      }
    );
  } else {
    const service = SERVICES[route.slug];
    const c = service.content[route.lang];
    graph.push(
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: c.name,
        serviceType: SERVICES[route.slug].content.en.name,
        description: c.metaDescription,
        url,
        image: SITE_URL + service.image,
        inLanguage: route.lang,
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "Country", name: "Saudi Arabia" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: c.offeringsTitle,
          itemListElement: c.offerings.map(o => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: o.title,
              description: o.text,
            },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          homeCrumb,
          { "@type": "ListItem", position: 2, name: c.name, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        inLanguage: route.lang,
        mainEntity: c.faq.map(f => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    );
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export function renderHead(route: Route): string {
  const m = getMeta(route);
  const url = SITE_URL + route.path;
  const enPath = route.lang === "en" ? route.path : alternatePath(route);
  const arPath = route.lang === "ar" ? route.path : alternatePath(route);
  const image = ogImage(route);
  const other: Language = route.lang === "en" ? "ar" : "en";

  return [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<link rel="alternate" hreflang="en" href="${SITE_URL}${enPath}" />`,
    `<link rel="alternate" hreflang="ar" href="${SITE_URL}${arPath}" />`,
    `<link rel="alternate" hreflang="x-default" href="${SITE_URL}${enPath}" />`,
    `<meta property="og:type" content="${route.page === "article" ? "article" : "website"}" />`,
    `<meta property="og:site_name" content="Thoughts House" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
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
  const urls = ROUTES.map(route => {
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

/** <head> for the 404 page (served for any unknown URL; never indexed). */
export function renderNotFoundHead(): string {
  return [
    `<title>Page not found | Thoughts House</title>`,
    `<meta name="robots" content="noindex" />`,
  ].join("\n    ");
}

/** llms.txt — a plain summary of the company and its key pages for AI assistants. */
export function renderLlmsTxt(): string {
  const lines = [
    "# Thoughts House (بيت الأفكار)",
    "",
    `> ${ABOUT.en.summary}`,
    "",
    "## Company facts",
    ...ABOUT.en.facts.map(f => `- ${f.label}: ${f.value}`),
    `- About page: ${SITE_URL}${aboutPath("en")}`,
    "",
    "## Services",
    ...SERVICE_SLUGS.map(slug => {
      const c = SERVICES[slug].content.en;
      return `- [${c.name}](${SITE_URL}${servicePath(slug, "en")}): ${c.summary}`;
    }),
    "",
    "## Coverage",
    `- [${COVERAGE.en.h1}](${SITE_URL}${coveragePath("en")}): ${COVERAGE.en.summary}`,
    "",
    "## Brands supplied",
    `- [${BRANDS_COPY.en.h1}](${SITE_URL}${brandsPath("en")}): ${BRANDS_COPY.en.summary}`,
    ...BRAND_GROUPS.map(
      g => `- ${g.title.en}: ${g.brands.map(b => b.name).join(", ")}`
    ),
    "",
    "## Insights",
    ...ARTICLES.map(
      a =>
        `- [${a.content.en.title}](${SITE_URL}${articlePath(a.slug, "en")}): ${a.content.en.description}`
    ),
    "",
    "## Arabic",
    `- [الصفحة الرئيسية](${SITE_URL}/ar/)`,
    `- [${ABOUT.ar.h1}](${SITE_URL}${aboutPath("ar")}): ${ABOUT.ar.summary}`,
    ...SERVICE_SLUGS.map(
      slug =>
        `- [${SERVICES[slug].content.ar.name}](${SITE_URL}${servicePath(slug, "ar")})`
    ),
    `- [${COVERAGE.ar.h1}](${SITE_URL}${coveragePath("ar")})`,
    `- [${BRANDS_COPY.ar.h1}](${SITE_URL}${brandsPath("ar")})`,
    `- [${INSIGHTS_META.ar.h1}](${SITE_URL}${insightsPath("ar")})`,
    "",
  ];
  return lines.join("\n");
}
