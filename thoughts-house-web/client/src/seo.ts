/*
 * SEO metadata — single source of truth for <head> tags per language.
 * Used by the prerender step (scripts/prerender.mjs) to generate static HTML.
 */
export type Language = "en" | "ar";

export const SITE_URL = "https://www.thoughtshouse.com";
export const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663032266291/6GEufHXYFFmAikUkdcoDrJ/thoughts-house-logo-transparent_8229ec19.png";
export const OG_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663032266291/6GEufHXYFFmAikUkdcoDrJ/hero-bg-Vr4m9Ly3dbEfs2tnY82hfX.webp";

export const PATHS: Record<Language, string> = { en: "/", ar: "/ar/" };

export function langFromPath(pathname: string): Language {
  return pathname === "/ar" || pathname.startsWith("/ar/") ? "ar" : "en";
}

const META: Record<Language, { title: string; description: string; locale: string }> = {
  en: {
    title: "Thoughts House | IT System Integrator & Cybersecurity in Saudi Arabia",
    description:
      "Thoughts House is an IT system integrator in Dammam, Saudi Arabia, delivering cybersecurity, network infrastructure, cloud and backup solutions with Sophos, Cisco, Dell, Microsoft and more.",
    locale: "en_US",
  },
  ar: {
    title: "بيت الأفكار | تكامل أنظمة تقنية المعلومات والأمن السيبراني في السعودية",
    description:
      "بيت الأفكار (Thoughts House) شركة تكامل أنظمة تقنية معلومات في الدمام، تقدم حلول الأمن السيبراني والبنية التحتية للشبكات والحلول السحابية والنسخ الاحتياطي مع شركاء مثل Sophos وCisco وDell وMicrosoft.",
    locale: "ar_SA",
  },
};

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function getTitle(lang: Language) {
  return META[lang].title;
}

export function renderHead(lang: Language): string {
  const m = META[lang];
  const other: Language = lang === "en" ? "ar" : "en";
  const url = SITE_URL + PATHS[lang];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#organization`,
        name: "Thoughts House",
        alternateName: "بيت الأفكار",
        description: META.en.description,
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
          itemListElement: ["Cybersecurity", "Network Infrastructure", "Cloud & Backup Solutions"].map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name },
          })),
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+966541022995",
          email: "sales@thoughtshouse.com",
          contactType: "sales",
          availableLanguage: ["English", "Arabic"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: "Thoughts House",
        inLanguage: ["en", "ar"],
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<link rel="alternate" hreflang="en" href="${SITE_URL}${PATHS.en}" />`,
    `<link rel="alternate" hreflang="ar" href="${SITE_URL}${PATHS.ar}" />`,
    `<link rel="alternate" hreflang="x-default" href="${SITE_URL}${PATHS.en}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Thoughts House" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:locale" content="${m.locale}" />`,
    `<meta property="og:locale:alternate" content="${META[other].locale}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(m.title)}" />`,
    `<meta name="twitter:description" content="${esc(m.description)}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
    `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, "\\u003c")}</script>`,
  ].join("\n    ");
}
