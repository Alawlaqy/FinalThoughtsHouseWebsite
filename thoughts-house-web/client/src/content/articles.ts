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
  | "how-to-choose-it-system-integrator"
  | "pdpl-gap-assessment"
  | "nca-ecc-compliance-checklist"
  | "edr-vs-xdr-vs-mdr"
  | "cloud-disaster-recovery-saudi-arabia"
  | "cat6-vs-cat6a"
  | "immutable-backup"
  | "microsoft-licensing-oem-vs-volume"
  | "how-to-choose-a-server-small-business"
  | "sme-cybersecurity-checklist-saudi-arabia";

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
    slug: "cat6-vs-cat6a",
    published: "2026-10-06",
    image: "/images/structured-cabling-1280.webp",
    service: "structured-cabling",
    content: {
      en: {
        title:
          "Cat6 vs Cat6A: Which Network Cabling Should Saudi Businesses Install?",
        metaTitle: "Cat6 vs Cat6A Cabling: Which Should You Install?",
        description:
          "Cat6 vs Cat6A for offices and warehouses in Saudi Arabia: speed, distance, PoE, Wi-Fi 6/7 access points, cost and when the upgrade is worth it.",
      },
      ar: {
        title: "كابلات Cat6 أم Cat6A: أيهما تختار لشبكة شركتك؟",
        metaTitle: "الفرق بين كابلات Cat6 وCat6A | بيت الأفكار",
        description:
          "مقارنة بين كابلات Cat6 وCat6A للمكاتب والمستودعات في السعودية: السرعة، والمسافة، وPoE، ونقاط وصول Wi-Fi 6 و7، والتكلفة، ومتى تستحق الترقية.",
      },
    },
  },

  {
    slug: "immutable-backup",
    published: "2026-10-06",
    image: "/images/cloud-backup-1280.webp",
    service: "cloud-backup",
    content: {
      en: {
        title:
          "Immutable Backup Explained: How It Stops Ransomware From Deleting Your Backups",
        metaTitle: "Immutable Backup Explained: Protection From Ransomware",
        description:
          "What immutable backup is, how it differs from air-gapped and offsite copies, the 3-2-1-1-0 rule, and how to add immutability to your backups in Saudi Arabia.",
      },
      ar: {
        title:
          "النسخ الاحتياطي غير القابل للتعديل: كيف يمنع برامج الفدية من حذف نسخك",
        metaTitle: "النسخ الاحتياطي غير القابل للتعديل (Immutable Backup)",
        description:
          "ما هو النسخ الاحتياطي غير القابل للتعديل، وكيف يختلف عن النسخ المعزولة وخارج الموقع، وقاعدة 3-2-1-1-0، وكيف تضيفه لنسخك الاحتياطية.",
      },
    },
  },

  {
    slug: "microsoft-licensing-oem-vs-volume",
    published: "2026-10-06",
    image: "/images/it-supply-1280.webp",
    service: "it-supply",
    content: {
      en: {
        title: "Microsoft Licensing Explained: OEM vs Retail vs Volume and CSP",
        metaTitle: "Microsoft OEM vs Volume Licensing vs CSP Explained",
        description:
          "How Microsoft OEM, retail, volume and CSP licenses differ for Windows, Windows Server and Microsoft 365, and which suits companies in Saudi Arabia.",
      },
      ar: {
        title:
          "شرح تراخيص Microsoft: الفرق بين OEM والتجزئة والتراخيص المؤسسية وCSP",
        metaTitle: "الفرق بين تراخيص Microsoft OEM والمؤسسية وCSP",
        description:
          "كيف تختلف تراخيص Microsoft من نوع OEM والتجزئة والتراخيص المؤسسية وCSP لنظام Windows وWindows Server وMicrosoft 365، وأيها يناسب شركتك.",
      },
    },
  },

  {
    slug: "how-to-choose-a-server-small-business",
    published: "2026-10-06",
    image: "/images/it-support-amc-1280.webp",
    service: "it-supply",
    content: {
      en: {
        title:
          "How to Choose a Server for a Small Business: A Practical Sizing Guide",
        metaTitle: "How to Choose a Server for a Small Business",
        description:
          "Do you need a server, and which one? Tower vs rack, CPU, RAM, storage and RAID, redundancy, licensing and warranty, explained for Saudi SMEs.",
      },
      ar: {
        title: "كيف تختار سيرفر لشركة صغيرة أو متوسطة: دليل عملي للمواصفات",
        metaTitle: "كيف تختار سيرفر لشركتك الصغيرة | بيت الأفكار",
        description:
          "هل تحتاج إلى سيرفر، وأي نوع؟ مقارنة البرج والرف، والمعالج والذاكرة والتخزين وRAID، والاحتياطية، والتراخيص، والضمان، للشركات في السعودية.",
      },
    },
  },

  {
    slug: "sme-cybersecurity-checklist-saudi-arabia",
    published: "2026-10-06",
    image: "/images/cybersecurity-1280.webp",
    service: "cybersecurity",
    content: {
      en: {
        title:
          "Cybersecurity Checklist for SMEs in Saudi Arabia: 15 Essentials",
        metaTitle: "Cybersecurity Checklist for SMEs in Saudi Arabia",
        description:
          "15 practical cybersecurity essentials for small and mid-sized businesses in Saudi Arabia: MFA, patching, EDR, email security, backups, firewall and more.",
      },
      ar: {
        title:
          "قائمة الأمن السيبراني للشركات الصغيرة والمتوسطة في السعودية: 15 أساسية",
        metaTitle: "قائمة الأمن السيبراني للشركات الصغيرة والمتوسطة",
        description:
          "15 إجراءً عملياً للأمن السيبراني للشركات الصغيرة والمتوسطة في السعودية: التحقق متعدد العوامل، والتحديثات، وEDR، وحماية البريد، والنسخ الاحتياطي، وجدار الحماية.",
      },
    },
  },

  {
    slug: "pdpl-gap-assessment",
    published: "2026-10-06",
    image: "/images/cybersecurity-1280.webp",
    service: "cybersecurity",
    content: {
      en: {
        title:
          "PDPL Gap Assessment: How to Check Your Compliance in Saudi Arabia",
        metaTitle: "PDPL Gap Assessment for Saudi Organizations",
        description:
          "How to run a PDPL gap assessment in Saudi Arabia: map personal data, review legal basis, notices, rights handling, security controls and breach response.",
      },
      ar: {
        title:
          "تقييم الفجوات لنظام حماية البيانات الشخصية: كيف تتحقق من امتثالك",
        metaTitle: "تقييم الفجوات لنظام حماية البيانات الشخصية PDPL",
        description:
          "خطوات عملية لتقييم فجوات الامتثال لنظام حماية البيانات الشخصية في السعودية: حصر البيانات، والأساس النظامي، والحقوق، والضوابط الأمنية، والإبلاغ عن التسرب.",
      },
    },
  },

  {
    slug: "nca-ecc-compliance-checklist",
    published: "2026-10-06",
    image: "/images/firewall-installation-1280.webp",
    service: "cybersecurity",
    content: {
      en: {
        title: "NCA ECC Compliance Checklist: 20 Controls to Check First",
        metaTitle: "NCA ECC Compliance Checklist for Saudi Organizations",
        description:
          "A practical NCA ECC compliance checklist: governance, asset and access management, patching, logging, backup, incident response, third parties and cloud.",
      },
      ar: {
        title:
          "قائمة التحقق من الامتثال للضوابط الأساسية للأمن السيبراني (ECC)",
        metaTitle: "قائمة التحقق من الامتثال لضوابط ECC | بيت الأفكار",
        description:
          "قائمة عملية للتحقق من الامتثال للضوابط الأساسية للأمن السيبراني: الحوكمة، والأصول، والصلاحيات، والتحديثات، والسجلات، والنسخ الاحتياطي، والأطراف الخارجية.",
      },
    },
  },

  {
    slug: "edr-vs-xdr-vs-mdr",
    published: "2026-10-06",
    image: "/images/cybersecurity-1280.webp",
    service: "cybersecurity",
    content: {
      en: {
        title:
          "EDR vs XDR vs MDR: What's the Difference and Which Do You Need?",
        metaTitle: "EDR vs XDR vs MDR: Differences and How to Choose",
        description:
          "EDR, XDR and MDR explained: what each one does, how they differ from antivirus, and how Saudi organizations can choose the right option for their team.",
      },
      ar: {
        title: "الفرق بين EDR وXDR وMDR: أيها تحتاج منشأتك؟",
        metaTitle: "الفرق بين EDR وXDR وMDR وكيف تختار | بيت الأفكار",
        description:
          "شرح مبسّط لحلول EDR وXDR وخدمة MDR: ماذا يفعل كل منها، وكيف تختلف عن مضاد الفيروسات، وكيف تختار المنشآت في السعودية الخيار المناسب لفريقها.",
      },
    },
  },

  {
    slug: "cloud-disaster-recovery-saudi-arabia",
    published: "2026-10-06",
    image: "/images/cloud-backup-1280.webp",
    service: "cloud-backup",
    content: {
      en: {
        title: "Cloud Disaster Recovery in Saudi Arabia: A Practical Guide",
        metaTitle: "Cloud Disaster Recovery in Saudi Arabia: A Guide",
        description:
          "How to plan cloud disaster recovery in Saudi Arabia: RPO and RTO, DR options from backup restore to warm standby, data residency and regular DR testing.",
      },
      ar: {
        title: "التعافي من الكوارث سحابياً في السعودية: دليل عملي",
        metaTitle: "التعافي من الكوارث سحابياً في السعودية | بيت الأفكار",
        description:
          "كيف تخطط للتعافي من الكوارث عبر السحابة في السعودية: أهداف RPO وRTO، وخيارات التعافي، ومتطلبات بقاء البيانات داخل المملكة، واختبار خطة التعافي.",
      },
    },
  },

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
