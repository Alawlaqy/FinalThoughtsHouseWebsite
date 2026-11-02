/*
 * Text for the services overview (/services/, /ar/services/) and contact (/contact/, /ar/contact/) pages.
 */
import type { Language } from "@/seo";

interface HubCopy {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  summary: string;
}

export const SERVICES_HUB: Record<Language, HubCopy> = {
  en: {
    metaTitle: "IT Services in Saudi Arabia | Thoughts House",
    metaDescription:
      "IT services for businesses in Saudi Arabia: cybersecurity, networks, cloud and backup, IT hardware and licensing, and annual maintenance contracts.",
    h1: "IT Services for Businesses in Saudi Arabia",
    summary:
      "Thoughts House designs, supplies, installs and supports IT for organizations in Saudi Arabia. Choose a service below to see what it includes.",
  },
  ar: {
    metaTitle: "خدمات تقنية المعلومات في السعودية | بيت الأفكار",
    metaDescription:
      "خدمات تقنية المعلومات للشركات في السعودية: الأمن السيبراني، والشبكات، والسحابة والنسخ الاحتياطي، وتوريد الأجهزة والتراخيص، وعقود الصيانة السنوية.",
    h1: "خدمات تقنية المعلومات للشركات في السعودية",
    summary:
      "يصمم بيت الأفكار أنظمة تقنية المعلومات ويورّدها ويركّبها ويدعمها للمنشآت في المملكة. اختر خدمة لتعرف ما تشمله.",
  },
};

export const CONTACT_PAGE: Record<
  Language,
  HubCopy & { address: string; appointment: string; mapLabel: string }
> = {
  en: {
    metaTitle: "Contact Thoughts House | IT Company in Dammam",
    metaDescription:
      "Contact Thoughts House in Dammam for a quotation or technical advice by phone, WhatsApp or email. Service by appointment, on-site or remote.",
    h1: "Contact Thoughts House",
    summary:
      "Tell us what you need and we will reply with a clear next step. You can call, send a WhatsApp message, email us or use the form below.",
    address:
      "4028 Al Malek Khaled, As Suq Dist., Dammam 32242-8181, Saudi Arabia",
    appointment: "Service by appointment, on-site or remote.",
    mapLabel: "View on Google Maps",
  },
  ar: {
    metaTitle: "تواصل مع بيت الأفكار | شركة تقنية معلومات في الدمام",
    metaDescription:
      "تواصل مع بيت الأفكار في الدمام لطلب عرض سعر أو استشارة تقنية عبر الهاتف أو واتساب أو البريد. الخدمة بموعد مسبق، ميدانياً أو عن بُعد.",
    h1: "تواصل مع بيت الأفكار",
    summary:
      "أخبرنا بما تحتاج إليه وسنرد عليك بالخطوة التالية. يمكنك الاتصال، أو مراسلتنا على واتساب، أو البريد، أو استخدام النموذج أدناه.",
    address:
      "⁦4028⁩ الملك خالد، حي السوق، الدمام ⁦32242-8181⁩، المملكة العربية السعودية",
    appointment: "الخدمة بموعد مسبق، ميدانياً أو عن بُعد.",
    mapLabel: "الموقع على خرائط Google",
  },
};
