/*
 * Lead tracking: records WhatsApp, phone, email and form actions in Google Analytics 4
 * (and in Vercel Web Analytics if it is ever enabled). The prefilled WhatsApp text and the
 * "how did you find us" form field also show the source of each enquiry.
 */
import type { Language } from "@/seo";

type LeadAction = "whatsapp" | "phone" | "email" | "form";

declare global {
  interface Window {
    va?: (...args: unknown[]) => void;
    vaq?: unknown[][];
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = "G-7WMEWBHN7Z";

// gtag.js only reads entries pushed as the \`arguments\` object, not as a plain array.
function gtag(..._args: unknown[]) {
  // eslint-disable-next-line prefer-rest-params
  (window.dataLayer ??= []).push(arguments);
}

/** Loads Google Analytics after the page has finished loading, so it does not slow the first paint. */
export function loadAnalytics() {
  if (window.location.hostname !== "www.thoughtshouse.com") return;
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_ID);
  const inject = () => {
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
  };
  if (document.readyState === "complete") setTimeout(inject, 1500);
  else
    window.addEventListener("load", () => setTimeout(inject, 1500), {
      once: true,
    });
}

const WHATSAPP_NUMBER = "966541022995";
const WHATSAPP_TEXT: Record<Language, string> = {
  en: "Hello, I found you through the Thoughts House website. I need help with: ",
  ar: "مرحباً، وصلت إليكم عبر موقع بيت الأفكار. أحتاج إلى: ",
};

export function whatsappUrl(lang: Language) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT[lang])}`;
}

export function trackLead(action: LeadAction, source?: string) {
  const page = window.location.pathname;
  window.gtag?.("event", "generate_lead", {
    method: action,
    page_path: page,
    ...(source ? { lead_source: source } : {}),
  });
  window.gtag?.("event", `lead_${action}`, { page_path: page });
  // Same queue the Vercel script reads, so events sent before it loads are kept.
  window.va ??= (...args: unknown[]) => {
    (window.vaq ??= []).push(args);
  };
  window.va("event", {
    name: `lead_${action}`,
    data: { page: window.location.pathname, ...(source ? { source } : {}) },
  });
}

/** One listener for every contact link on the site, including links added later. */
export function trackContactClicks() {
  document.addEventListener("click", e => {
    const href = (e.target as Element)
      .closest?.("a[href]")
      ?.getAttribute("href");
    if (!href) return;
    if (href.includes("wa.me/")) trackLead("whatsapp");
    else if (href.startsWith("tel:")) trackLead("phone");
    else if (href.startsWith("mailto:")) trackLead("email");
  });
}
