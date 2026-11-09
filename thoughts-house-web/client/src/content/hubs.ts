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
  HubCopy & {
    address: string;
    appointment: string;
    hours: string;
    mapLabel: string;
  }
> = {
  en: {
    metaTitle: "Contact Thoughts House | IT Company in Dammam",
    metaDescription:
      "Contact Thoughts House in Dammam for a quotation or technical advice by phone, WhatsApp or email. We work on-site and remotely across Saudi Arabia.",
    h1: "Contact Thoughts House",
    summary:
      "Tell us what you need and we will reply with a clear next step. You can call, send a WhatsApp message, email us or use the form below.",
    address: "Dammam, Eastern Province, Saudi Arabia",
    appointment:
      "We work on-site at your premises and remotely. Meetings by appointment, at your site or online.",
    hours:
      "Sunday to Thursday, 9:00 am to 5:00 pm. Closed Friday and Saturday.",
    mapLabel: "View on Google Maps",
  },
  ar: {
    metaTitle: "تواصل مع بيت الأفكار | شركة تقنية معلومات في الدمام",
    metaDescription:
      "تواصل مع بيت الأفكار في الدمام لطلب عرض سعر أو استشارة تقنية عبر الهاتف أو واتساب أو البريد. نعمل ميدانياً وعن بُعد في جميع مناطق المملكة.",
    h1: "تواصل مع بيت الأفكار",
    summary:
      "أخبرنا بما تحتاج إليه وسنرد عليك بالخطوة التالية. يمكنك الاتصال، أو مراسلتنا على واتساب، أو البريد، أو استخدام النموذج أدناه.",
    address: "الدمام، المنطقة الشرقية، المملكة العربية السعودية",
    appointment:
      "نعمل ميدانياً في موقعكم وعن بُعد. الاجتماعات بموعد مسبق، في موقعكم أو عبر الإنترنت.",
    hours:
      "الأحد إلى الخميس، من 9:00 صباحاً إلى 5:00 مساءً. الجمعة والسبت إجازة.",
    mapLabel: "الموقع على خرائط Google",
  },
};
