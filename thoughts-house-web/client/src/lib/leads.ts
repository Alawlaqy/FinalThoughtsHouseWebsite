/*
 * Lead tracking: records WhatsApp, phone, email and form actions in Vercel Web Analytics.
 * Custom events only show on Vercel plans that include them; the prefilled WhatsApp text and the
 * "how did you find us" form field show the source on every plan.
 */
import type { Language } from "@/seo";

type LeadAction = "whatsapp" | "phone" | "email" | "form";

declare global {
  interface Window {
    va?: (...args: unknown[]) => void;
    vaq?: unknown[][];
  }
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
