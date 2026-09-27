import { createContext, useContext, useCallback, useEffect, type ReactNode } from "react";
import { PATHS, getTitle, type Language } from "@/seo";

interface LanguageContextType {
  lang: Language;
  dir: "ltr" | "rtl";
  /** URL of the same page in the other language (e.g. "/ar/") */
  altHref: string;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  "nav.home": { en: "Home", ar: "الرئيسية" },
  "nav.services": { en: "Services", ar: "الخدمات" },
  "nav.partners": { en: "Partners", ar: "الشركاء" },
  "nav.contact": { en: "Contact Us", ar: "تواصل معنا" },

  // Hero
  "hero.slogan": { en: "We Build & Protect Your Network", ar: "نبني ونحمي شبكتك" },
  "hero.subtitle": {
    en: "Your trusted IT system integrator delivering enterprise-grade cybersecurity, network infrastructure, and cloud solutions across Saudi Arabia.",
    ar: "شريكك الموثوق في تكامل أنظمة تقنية المعلومات، نقدم حلول الأمن السيبراني والبنية التحتية للشبكات والحلول السحابية على مستوى المؤسسات في المملكة العربية السعودية."
  },
  "hero.explore": { en: "Explore Services", ar: "استكشف خدماتنا" },
  "hero.contact": { en: "Contact Us", ar: "تواصل معنا" },

  // Services
  "services.title": { en: "Our Services", ar: "خدماتنا" },
  "services.subtitle": {
    en: "Comprehensive IT solutions tailored to protect and empower your business",
    ar: "حلول تقنية شاملة مصممة لحماية وتمكين أعمالك"
  },
  "services.cybersecurity": { en: "Cybersecurity", ar: "الأمن السيبراني" },
  "services.cybersecurity.desc": {
    en: "Protect your digital assets with our comprehensive cybersecurity solutions including endpoint protection, next-generation firewalls, and advanced network security monitoring.",
    ar: "احمِ أصولك الرقمية من خلال حلول الأمن السيبراني الشاملة التي تشمل حماية نقاط النهاية وجدران الحماية من الجيل التالي ومراقبة أمن الشبكات المتقدمة."
  },
  "services.cybersecurity.endpoint": { en: "Endpoint Protection", ar: "حماية نقاط النهاية" },
  "services.cybersecurity.firewall": { en: "Next-Gen Firewalls", ar: "جدران الحماية المتقدمة" },
  "services.cybersecurity.monitoring": { en: "Network Security Monitoring", ar: "مراقبة أمن الشبكات" },
  "services.cybersecurity.threat": { en: "Threat Detection & Response", ar: "كشف التهديدات والاستجابة" },
  "services.cybersecurity.assessment": { en: "Security Assessment & Audit", ar: "تقييم وتدقيق الأمان" },

  "services.network": { en: "Network Infrastructure", ar: "البنية التحتية للشبكات" },
  "services.network.desc": {
    en: "Build a robust and scalable network foundation with our enterprise routing, switching, and wireless solutions designed for maximum uptime and performance.",
    ar: "ابنِ بنية تحتية قوية وقابلة للتوسع مع حلول التوجيه والتبديل واللاسلكي المؤسسية المصممة لأقصى وقت تشغيل وأداء."
  },
  "services.network.routing": { en: "Enterprise Routing", ar: "التوجيه المؤسسي" },
  "services.network.switching": { en: "Advanced Switching", ar: "التبديل المتقدم" },
  "services.network.wireless": { en: "Wireless Solutions", ar: "الحلول اللاسلكية" },
  "services.network.design": { en: "Network Design & Planning", ar: "تصميم وتخطيط الشبكات" },
  "services.network.optimization": { en: "Performance Optimization", ar: "تحسين الأداء" },

  "services.cloud": { en: "Cloud & Backup Solutions", ar: "الحلول السحابية والنسخ الاحتياطي" },
  "services.cloud.desc": {
    en: "Ensure business continuity with our cloud infrastructure, disaster recovery, and server management solutions backed by industry-leading technology partners.",
    ar: "ضمان استمرارية الأعمال مع حلول البنية التحتية السحابية والتعافي من الكوارث وإدارة الخوادم المدعومة بشركاء تقنيين رائدين في الصناعة."
  },
  "services.cloud.datacenter": { en: "Data Center Solutions", ar: "حلول مراكز البيانات" },
  "services.cloud.disaster": { en: "Disaster Recovery", ar: "التعافي من الكوارث" },
  "services.cloud.server": { en: "Server Management", ar: "إدارة الخوادم" },
  "services.cloud.backup": { en: "Automated Backup", ar: "النسخ الاحتياطي التلقائي" },
  "services.cloud.migration": { en: "Cloud Migration", ar: "الترحيل السحابي" },

  // Partners
  "partners.title": { en: "Our Strategic Partners", ar: "شركاؤنا الاستراتيجيون" },
  "partners.subtitle": {
    en: "We partner with the world's leading technology vendors to deliver best-in-class solutions",
    ar: "نتشارك مع أبرز شركات التقنية العالمية لتقديم حلول من الطراز الأول"
  },

  // Contact
  "contact.title": { en: "Get In Touch", ar: "تواصل معنا" },
  "contact.subtitle": {
    en: "Ready to secure and optimize your IT infrastructure? Let's start a conversation.",
    ar: "هل أنت مستعد لتأمين وتحسين بنيتك التحتية لتقنية المعلومات؟ لنبدأ محادثة."
  },
  "contact.name": { en: "Full Name", ar: "الاسم الكامل" },
  "contact.company": { en: "Company", ar: "الشركة" },
  "contact.email": { en: "Email Address", ar: "البريد الإلكتروني" },
  "contact.message": { en: "Message", ar: "الرسالة" },
  "contact.send": { en: "Send Message", ar: "إرسال الرسالة" },
  "contact.info": { en: "Contact Information", ar: "معلومات التواصل" },
  "contact.address": { en: "Dammam, Saudi Arabia", ar: "الدمام، المملكة العربية السعودية" },
  "contact.phone": { en: "+966 54 102 2995", ar: "٢٩٩٥ ١٠٢ ٥٤ ٩٦٦+" },
  "contact.emailAddress": { en: "sales@thoughtshouse.com", ar: "sales@thoughtshouse.com" },
  "contact.location": { en: "Our Location", ar: "موقعنا" },
  "contact.namePlaceholder": { en: "Enter your name", ar: "أدخل اسمك" },
  "contact.companyPlaceholder": { en: "Enter your company name", ar: "أدخل اسم شركتك" },
  "contact.emailPlaceholder": { en: "Enter your email", ar: "أدخل بريدك الإلكتروني" },
  "contact.messagePlaceholder": { en: "How can we help you?", ar: "كيف يمكننا مساعدتك؟" },
  "contact.sent": { en: "Message sent successfully!", ar: "تم إرسال الرسالة بنجاح!" },

  // Footer
  "footer.rights": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  "footer.slogan": { en: "We Build & Protect Your Network", ar: "نبني ونحمي شبكتك" },
  "footer.quickLinks": { en: "Quick Links", ar: "روابط سريعة" },
  "footer.contactInfo": { en: "Contact Info", ar: "معلومات التواصل" },

  // Chatbot
  "chatbot.title": { en: "Thoughts House Assistant", ar: "مساعد بيت الأفكار" },
  "chatbot.welcome": {
    en: "Hello! How can I help you today? You can ask me about our services, partnerships, or contact information.",
    ar: "مرحباً! كيف يمكنني مساعدتك اليوم؟ يمكنك الاستفسار عن خدماتنا أو شراكاتنا أو معلومات التواصل."
  },
  "chatbot.placeholder": { en: "Type your message...", ar: "اكتب رسالتك..." },
  "chatbot.option.services": { en: "Tell me about your services", ar: "أخبرني عن خدماتكم" },
  "chatbot.option.partners": { en: "Who are your partners?", ar: "من هم شركاؤكم؟" },
  "chatbot.option.contact": { en: "How can I contact you?", ar: "كيف أتواصل معكم؟" },
  "chatbot.option.quote": { en: "I need a quote", ar: "أحتاج عرض سعر" },
  "chatbot.response.services": {
    en: "We offer three main service categories:\n\n1. **Cybersecurity** - Endpoint protection, firewalls, and network security\n2. **Network Infrastructure** - Routing, switching, and wireless solutions\n3. **Cloud & Backup** - Data centers, disaster recovery, and server management\n\nWould you like to know more about any specific service?",
    ar: "نقدم ثلاث فئات رئيسية من الخدمات:\n\n1. **الأمن السيبراني** - حماية نقاط النهاية وجدران الحماية وأمن الشبكات\n2. **البنية التحتية للشبكات** - التوجيه والتبديل والحلول اللاسلكية\n3. **الحلول السحابية والنسخ الاحتياطي** - مراكز البيانات والتعافي من الكوارث وإدارة الخوادم\n\nهل تريد معرفة المزيد عن خدمة محددة؟"
  },
  "chatbot.response.partners": {
    en: "We partner with leading technology vendors including Sophos, Dell, HP, Lenovo, AWS, Cisco, Palo Alto Networks, CrowdStrike, Microsoft, and many more. These partnerships ensure we deliver best-in-class solutions.",
    ar: "نتشارك مع شركات تقنية رائدة تشمل Sophos وDell وHP وLenovo وAWS وCisco وPalo Alto Networks وCrowdStrike وMicrosoft وغيرها الكثير. هذه الشراكات تضمن تقديم حلول من الطراز الأول."
  },
  "chatbot.response.contact": {
    en: "You can reach us at:\n\n- **Email:** sales@thoughtshouse.com\n- **Phone:** +966 54 102 2995\n- **Location:** Dammam, Saudi Arabia\n\nOr fill out the contact form on this page!",
    ar: "يمكنك التواصل معنا عبر:\n\n- **البريد الإلكتروني:** sales@thoughtshouse.com\n- **الهاتف:** +966 54 102 2995\n- **الموقع:** الدمام، المملكة العربية السعودية\n\nأو قم بملء نموذج التواصل في هذه الصفحة!"
  },
  "chatbot.response.quote": {
    en: "For a customized quote, please contact our sales team at sales@thoughtshouse.com or call +966 54 102 2995. You can also fill out the contact form with your requirements and we'll get back to you within 24 hours.",
    ar: "للحصول على عرض سعر مخصص، يرجى التواصل مع فريق المبيعات على sales@thoughtshouse.com أو الاتصال على +966 54 102 2995. يمكنك أيضاً ملء نموذج التواصل بمتطلباتك وسنعود إليك خلال 24 ساعة."
  },
  "chatbot.response.default": {
    en: "Thank you for your message. For detailed inquiries, please contact our team at sales@thoughtshouse.com or call +966 54 102 2995. We're here to help!",
    ar: "شكراً لرسالتك. للاستفسارات التفصيلية، يرجى التواصل مع فريقنا على sales@thoughtshouse.com أو الاتصال على +966 54 102 2995. نحن هنا لمساعدتك!"
  },
};

const LanguageContext = createContext<LanguageContextType | null>(null);

// Each language lives at its own URL (/ and /ar/) so search engines can index both.
// Switching language is a normal link to the other URL.
export function LanguageProvider({ lang, children }: { lang: Language; children: ReactNode }) {
  const dir = lang === "ar" ? "rtl" : "ltr";
  const altHref = PATHS[lang === "en" ? "ar" : "en"];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.title = getTitle(lang);
  }, [lang, dir]);

  const t = useCallback(
    (key: string) => {
      return translations[key]?.[lang] || key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, dir, altHref, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
