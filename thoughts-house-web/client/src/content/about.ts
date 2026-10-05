/*
 * About page (/about/ and /ar/about/): the company's entity page — clear, factual statements
 * that search engines and AI assistants can use to describe Thoughts House.
 */
import type { Language } from "@/seo";

export const COMPANY = {
  name: "Thoughts House",
  nameAr: "بيت الأفكار",
  email: "sales@thoughtshouse.com",
  phone: "+966541022995",
  phoneDisplay: "+966 54 102 2995",
  streetAddress: "King Khaled St, Al 'Adamah",
  locality: "Dammam",
  region: "Eastern Province",
  postalCode: "32242",
  country: "SA",
  mapUrl: "https://maps.app.goo.gl/SECK4KzVH42TiTxD6",
};

export const PARTNER_BRANDS =
  "Sophos, Cisco, Palo Alto Networks, CrowdStrike, Check Point, Trend Micro, Microsoft, Microsoft Azure, AWS, Dell, HP, Lenovo, Supermicro, ASUS, NVIDIA, Apple, Veeam, Veritas, Acronis, Backblaze, NetApp, Pure Storage, Western Digital, Seagate, Buffalo";

interface AboutCopy {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  summary: string;
  factsTitle: string;
  facts: { label: string; value: string }[];
  whatTitle: string;
  what: string[];
  approachTitle: string;
  approach: string;
}

export const ABOUT: Record<Language, AboutCopy> = {
  en: {
    metaTitle: "About Thoughts House | IT Company in Dammam, Saudi Arabia",
    metaDescription:
      "Thoughts House is a Saudi IT company and system integrator in Dammam: cybersecurity, networks, cloud & backup, IT maintenance and hardware supply.",
    h1: "About Thoughts House",
    summary:
      "Thoughts House (بيت الأفكار) is an IT system integrator and IT supplier based in Dammam, in Saudi Arabia's Eastern Province. It designs, supplies, installs and supports cybersecurity, network infrastructure, cloud and backup solutions, and supplies IT hardware and software licenses, for organizations across the Kingdom.",
    factsTitle: "Company facts",
    facts: [
      { label: "Company name", value: "Thoughts House (بيت الأفكار)" },
      {
        label: "Type",
        value: "IT system integrator and IT supplier / reseller",
      },
      {
        label: "Headquarters",
        value: "Dammam, Eastern Province, Saudi Arabia",
      },
      {
        label: "Address",
        value: "King Khaled St, Al 'Adamah, Dammam 32242, Saudi Arabia",
      },
      { label: "Service area", value: "All regions of Saudi Arabia" },
      { label: "Clients", value: "500+ organizations served" },
      { label: "Support", value: "24/7 support coverage, 99.9% uptime SLA" },
      {
        label: "Services",
        value:
          "Cybersecurity · Network infrastructure · Cloud & backup · IT supply & licensing · Support & maintenance",
      },
      { label: "Technology partners", value: PARTNER_BRANDS },
      { label: "Languages", value: "Arabic, English" },
      {
        label: "Contact",
        value:
          "sales@thoughtshouse.com · +966 54 102 2995 (phone and WhatsApp)",
      },
    ],
    whatTitle: "What we do",
    what: [
      "Cybersecurity: endpoint protection and EDR, next-generation firewalls, network security monitoring, threat detection and response, and security assessments.",
      "Network infrastructure: enterprise routing and switching, Wi-Fi, network design and performance optimization.",
      "Cloud & backup: servers and storage, automated backup, disaster recovery and cloud migration to Microsoft Azure or AWS.",
      "IT supply & licensing: servers, storage, network and security appliances, laptops, workstations and software licenses.",
    ],
    approachTitle: "How we work",
    approach:
      "Every project starts with an assessment of your requirements and current environment, followed by a written design and bill of materials. Our engineers then supply, install and configure the solution, test it end to end, and stay with you after go-live with maintenance, updates and support. Because we work with many vendors rather than one, we recommend what fits your needs and budget.",
  },
  ar: {
    metaTitle: "من نحن | بيت الأفكار لتكامل أنظمة تقنية المعلومات في الدمام",
    metaDescription:
      "بيت الأفكار شركة تكامل أنظمة ومورّد تقنية معلومات مقرّها الدمام، تقدم حلول الأمن السيبراني والشبكات والسحابة والنسخ الاحتياطي وتوريد الأجهزة وتراخيص البرمجيات.",
    h1: "من نحن",
    summary:
      "بيت الأفكار (Thoughts House) شركة تكامل أنظمة تقنية معلومات ومورّد لأجهزة وتراخيص تقنية المعلومات، مقرّها الدمام في المنطقة الشرقية. تصمم حلول الأمن السيبراني والبنية التحتية للشبكات والسحابة والنسخ الاحتياطي وتورّدها وتركّبها وتدعمها، وتورّد الأجهزة وتراخيص البرمجيات للمنشآت في جميع مناطق المملكة.",
    factsTitle: "معلومات الشركة",
    facts: [
      { label: "اسم الشركة", value: "بيت الأفكار (Thoughts House)" },
      {
        label: "النشاط",
        value: "تكامل أنظمة تقنية المعلومات وتوريد أجهزتها وتراخيصها",
      },
      {
        label: "المقر",
        value: "الدمام، المنطقة الشرقية، المملكة العربية السعودية",
      },
      { label: "العنوان", value: "شارع الملك خالد، حي العدامة، الدمام 32242" },
      { label: "نطاق الخدمة", value: "جميع مناطق المملكة" },
      { label: "العملاء", value: "أكثر من 500 منشأة" },
      { label: "الدعم", value: "دعم على مدار الساعة طوال أيام الأسبوع، واتفاقية مستوى خدمة بجاهزية 99.9%" },
      {
        label: "الخدمات",
        value:
          "الأمن السيبراني · البنية التحتية للشبكات · السحابة والنسخ الاحتياطي · التوريد والتراخيص · الدعم والصيانة",
      },
      { label: "الشركاء التقنيون", value: PARTNER_BRANDS },
      { label: "اللغات", value: "العربية، الإنجليزية" },
      {
        label: "التواصل",
        value: "sales@thoughtshouse.com · ‎+966 54 102 2995 (هاتف وواتساب)",
      },
    ],
    whatTitle: "ماذا نقدّم",
    what: [
      "الأمن السيبراني: حماية نقاط النهاية وEDR، وجدران الحماية من الجيل التالي، ومراقبة أمن الشبكات، وكشف التهديدات والاستجابة لها، وتقييم الأمان.",
      "البنية التحتية للشبكات: التوجيه والتبديل المؤسسي، وشبكات Wi-Fi، وتصميم الشبكات وتحسين أدائها.",
      "السحابة والنسخ الاحتياطي: الخوادم والتخزين، والنسخ الاحتياطي التلقائي، والتعافي من الكوارث، والترحيل إلى Microsoft Azure أو AWS.",
      "التوريد والتراخيص: السيرفرات وأنظمة التخزين وأجهزة الشبكات والحماية والحواسيب ومحطات العمل وتراخيص البرمجيات.",
    ],
    approachTitle: "كيف نعمل",
    approach:
      "يبدأ كل مشروع بتقييم احتياجاتك وبيئتك الحالية، ثم تصميم مكتوب وقائمة معدات. بعدها يورّد مهندسونا الحل ويركّبونه ويُعدّونه ويختبرونه بالكامل، ونبقى معك بعد التشغيل بالصيانة والتحديثات والدعم. ولأننا نعمل مع شركات كثيرة لا مع علامة واحدة، نرشّح ما يناسب احتياجاتك وميزانيتك.",
  },
};
