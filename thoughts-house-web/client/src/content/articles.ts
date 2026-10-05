/*
 * Knowledge-base articles (/insights/<slug>/ and /ar/insights/<slug>/).
 * Practical guides for IT decision makers in Saudi Arabia; each links to a related service.
 * Metadata only — article bodies live in articleBodies.ts, loaded only on article pages.
 */
import type { Language } from "@/seo";
import type { ServiceSlug } from "./services";

export type ArticleSlug =
  | "nca-essential-cybersecurity-controls"
  | "pdpl-technical-requirements"
  | "how-to-choose-a-firewall"
  | "3-2-1-backup-ransomware"
  | "office-wifi-planning"
  | "how-to-choose-it-system-integrator";

interface LocalizedArticle {
  title: string;
  metaTitle: string;
  description: string;
}

export interface Article {
  slug: ArticleSlug;
  /** ISO date */
  published: string;
  image: string;
  service: ServiceSlug;
  content: Record<Language, LocalizedArticle>;
}

export const ARTICLES: Article[] = [
  {
    slug: "how-to-choose-it-system-integrator",
    published: "2026-09-30",
    image: "/images/it-supply-1280.webp",
    service: "it-supply",
    content: {
      en: {
        title:
          "How to Choose an IT System Integrator in Saudi Arabia: 8 Questions to Ask",
        metaTitle: "How to Choose an IT System Integrator in Saudi Arabia",
        description:
          "A checklist for choosing an IT system integrator or reseller in Saudi Arabia: partnerships, certified engineers, local presence, support and references.",
      },
      ar: {
        title:
          "كيف تختار شركة تكامل أنظمة تقنية المعلومات في السعودية: 8 أسئلة قبل التعاقد",
        metaTitle: "كيف تختار شركة تكامل أنظمة في السعودية | بيت الأفكار",
        description:
          "قائمة عملية لاختيار شركة تكامل أنظمة أو موزّع تقنية معلومات في المملكة: الشراكات، والمهندسون المعتمدون، والتواجد المحلي، والدعم، والمراجع.",
      },
    },
  },

  {
    slug: "nca-essential-cybersecurity-controls",
    published: "2026-09-27",
    image: "/images/cybersecurity-1280.webp",
    service: "cybersecurity",
    content: {
      en: {
        title:
          "NCA Essential Cybersecurity Controls (ECC): A Practical Starting Guide",
        metaTitle: "NCA Essential Cybersecurity Controls (ECC) Explained",
        description:
          "What the NCA Essential Cybersecurity Controls are, who they apply to, and practical steps for Saudi organizations to start working towards compliance.",
      },
      ar: {
        title: "الضوابط الأساسية للأمن السيبراني (ECC): دليل عملي للبدء",
        metaTitle: "شرح الضوابط الأساسية للأمن السيبراني ECC | بيت الأفكار",
        description:
          "ما هي الضوابط الأساسية للأمن السيبراني الصادرة عن الهيئة الوطنية للأمن السيبراني، ومن تنطبق عليه، وخطوات عملية تبدأ بها المنشآت في السعودية للامتثال لها.",
      },
    },
  },

  {
    slug: "pdpl-technical-requirements",
    published: "2026-09-27",
    image: "/images/cloud-backup-1280.webp",
    service: "cybersecurity",
    content: {
      en: {
        title: "Saudi PDPL: The Technical Measures Your IT Team Needs",
        metaTitle: "Saudi PDPL Technical Requirements | Thoughts House",
        description:
          "An overview of Saudi Arabia's Personal Data Protection Law (PDPL) and the practical IT and security measures that help organizations meet it.",
      },
      ar: {
        title:
          "نظام حماية البيانات الشخصية PDPL: الإجراءات التقنية التي يحتاجها فريق تقنية المعلومات",
        metaTitle:
          "المتطلبات التقنية لنظام حماية البيانات الشخصية | بيت الأفكار",
        description:
          "نظرة عامة على نظام حماية البيانات الشخصية في المملكة (PDPL) والإجراءات التقنية والأمنية العملية التي تساعد المنشآت على الالتزام به.",
      },
    },
  },

  {
    slug: "how-to-choose-a-firewall",
    published: "2026-09-27",
    image: "/images/cybersecurity-1280.webp",
    service: "cybersecurity",
    content: {
      en: {
        title:
          "How to Choose the Right Next-Generation Firewall for Your Business",
        metaTitle: "How to Choose a Next-Generation Firewall | Thoughts House",
        description:
          "What matters when choosing a next-generation firewall: real-world throughput, features, licensing, management and support, explained without vendor bias.",
      },
      ar: {
        title: "كيف تختار جدار الحماية المناسب لشركتك",
        metaTitle: "كيف تختار جدار حماية من الجيل التالي (NGFW) | بيت الأفكار",
        description:
          "المعايير المهمة عند اختيار جدار حماية من الجيل التالي: الأداء الفعلي والمزايا والتراخيص والإدارة والدعم، بشرح محايد لا ينحاز لعلامة تجارية.",
      },
    },
  },

  {
    slug: "3-2-1-backup-ransomware",
    published: "2026-09-27",
    image: "/images/cloud-backup-1280.webp",
    service: "cloud-backup",
    content: {
      en: {
        title: "The 3-2-1 Backup Rule: Your Best Defense Against Ransomware",
        metaTitle: "3-2-1 Backup Rule & Ransomware Protection | Thoughts House",
        description:
          "What the 3-2-1 backup rule is, why ransomware targets backups, and how immutable copies, testing and clear recovery targets keep your business running.",
      },
      ar: {
        title: "قاعدة النسخ الاحتياطي 3-2-1: أفضل دفاع ضد برامج الفدية",
        metaTitle: "قاعدة النسخ الاحتياطي 3-2-1 ضد برامج الفدية | بيت الأفكار",
        description:
          "ما هي قاعدة النسخ الاحتياطي 3-2-1، ولماذا تستهدف برامج الفدية النسخ الاحتياطية، وكيف تحمي النسخ غير القابلة للتعديل واختبار الاستعادة أعمالك.",
      },
    },
  },

  {
    slug: "office-wifi-planning",
    published: "2026-09-27",
    image: "/images/network-infrastructure-1280.webp",
    service: "network-infrastructure",
    content: {
      en: {
        title: "Planning Reliable Wi-Fi for Your Office: A Practical Checklist",
        metaTitle: "How to Plan Reliable Office Wi-Fi | Thoughts House",
        description:
          "A practical checklist for planning business Wi-Fi: site surveys, coverage versus capacity, access point placement, PoE, guest access and central management.",
      },
      ar: {
        title: "تخطيط شبكة Wi-Fi موثوقة للمكاتب: قائمة عملية",
        metaTitle: "كيف تخطط لشبكة Wi-Fi موثوقة في المكتب | بيت الأفكار",
        description:
          "قائمة عملية لتخطيط شبكات Wi-Fi للشركات: المسح الميداني، والتغطية مقابل السعة، وتوزيع نقاط الوصول، وتغذية PoE، وشبكة الزوار، والإدارة المركزية.",
      },
    },
  },
];

export const ARTICLE_SLUGS = ARTICLES.map(a => a.slug);

export function getArticle(slug: ArticleSlug) {
  return ARTICLES.find(a => a.slug === slug)!;
}
