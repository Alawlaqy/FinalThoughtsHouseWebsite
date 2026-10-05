/*
 * Brands page (/brands/ and /ar/brands/): the manufacturers whose products Thoughts House
 * supplies, integrates and supports, grouped by category. Wording says "supply" / "work with" —
 * official partnership tiers are not claimed here.
 */
import type { Language } from "@/seo";
import type { ServiceSlug } from "./services";

interface Brand {
  name: string;
  /** Matches the partner logo list in PartnersSection */
  logoName: string;
  products: Record<Language, string>;
}

interface BrandGroup {
  title: Record<Language, string>;
  service: ServiceSlug;
  brands: Brand[];
}

export const BRAND_GROUPS: BrandGroup[] = [
  {
    title: { en: "Cybersecurity", ar: "الأمن السيبراني" },
    service: "cybersecurity",
    brands: [
      {
        name: "Sophos",
        logoName: "Sophos",
        products: {
          en: "Firewalls, endpoint protection and EDR/XDR",
          ar: "جدران الحماية وحماية نقاط النهاية وEDR/XDR",
        },
      },
      {
        name: "Palo Alto Networks",
        logoName: "Palo Alto Networks",
        products: {
          en: "Next-generation firewalls and security subscriptions",
          ar: "جدران الحماية من الجيل التالي واشتراكات الحماية",
        },
      },
      {
        name: "CrowdStrike",
        logoName: "CrowdStrike",
        products: {
          en: "Endpoint protection and EDR",
          ar: "حماية نقاط النهاية وEDR",
        },
      },
      {
        name: "Check Point",
        logoName: "Check Point",
        products: {
          en: "Firewalls and network security",
          ar: "جدران الحماية وأمن الشبكات",
        },
      },
      {
        name: "Trend Micro",
        logoName: "Trend Micro",
        products: {
          en: "Endpoint, server and email security",
          ar: "حماية الأجهزة والخوادم والبريد الإلكتروني",
        },
      },
    ],
  },
  {
    title: { en: "Networking", ar: "الشبكات" },
    service: "network-infrastructure",
    brands: [
      {
        name: "Cisco",
        logoName: "Cisco",
        products: {
          en: "Switches, routers, wireless and security",
          ar: "المبدّلات والموجّهات والشبكات اللاسلكية والحماية",
        },
      },
    ],
  },
  {
    title: {
      en: "Servers, PCs & workstations",
      ar: "السيرفرات والحواسيب ومحطات العمل",
    },
    service: "it-supply",
    brands: [
      {
        name: "Dell",
        logoName: "Dell",
        products: {
          en: "Servers, storage, laptops, desktops and workstations",
          ar: "السيرفرات والتخزين والحواسيب المحمولة والمكتبية ومحطات العمل",
        },
      },
      {
        name: "HP",
        logoName: "HP",
        products: {
          en: "Laptops, desktops, workstations and printers",
          ar: "الحواسيب المحمولة والمكتبية ومحطات العمل والطابعات",
        },
      },
      {
        name: "Lenovo",
        logoName: "Lenovo",
        products: {
          en: "Laptops, desktops, workstations and servers",
          ar: "الحواسيب المحمولة والمكتبية ومحطات العمل والسيرفرات",
        },
      },
      {
        name: "Supermicro",
        logoName: "Supermicro",
        products: {
          en: "Rack servers and GPU servers",
          ar: "سيرفرات الرف وسيرفرات وحدات المعالجة الرسومية",
        },
      },
      {
        name: "ASUS",
        logoName: "ASUS",
        products: {
          en: "Laptops, desktops and workstations",
          ar: "الحواسيب المحمولة والمكتبية ومحطات العمل",
        },
      },
      {
        name: "NVIDIA",
        logoName: "NVIDIA",
        products: {
          en: "GPUs for AI, rendering and engineering workloads",
          ar: "وحدات المعالجة الرسومية للذكاء الاصطناعي والتصميم والهندسة",
        },
      },
      {
        name: "Apple",
        logoName: "Apple",
        products: {
          en: "Mac, iPad and iPhone for business",
          ar: "أجهزة Mac وiPad وiPhone للأعمال",
        },
      },
    ],
  },
  {
    title: { en: "Cloud & software", ar: "السحابة والبرمجيات" },
    service: "cloud-backup",
    brands: [
      {
        name: "Microsoft",
        logoName: "Microsoft",
        products: {
          en: "Microsoft 365, Windows and Windows Server licensing",
          ar: "تراخيص Microsoft 365 وWindows وWindows Server",
        },
      },
      {
        name: "Microsoft Azure",
        logoName: "Microsoft Azure",
        products: {
          en: "Cloud infrastructure, backup and migration",
          ar: "البنية التحتية السحابية والنسخ الاحتياطي والترحيل",
        },
      },
      {
        name: "AWS",
        logoName: "AWS",
        products: {
          en: "Cloud infrastructure and migration",
          ar: "البنية التحتية السحابية والترحيل",
        },
      },
    ],
  },
  {
    title: { en: "Backup & storage", ar: "النسخ الاحتياطي والتخزين" },
    service: "cloud-backup",
    brands: [
      {
        name: "Veeam",
        logoName: "Veeam",
        products: {
          en: "Backup and recovery software",
          ar: "برامج النسخ الاحتياطي والاستعادة",
        },
      },
      {
        name: "Veritas",
        logoName: "Veritas",
        products: {
          en: "Backup and data protection",
          ar: "النسخ الاحتياطي وحماية البيانات",
        },
      },
      {
        name: "Acronis",
        logoName: "Acronis",
        products: {
          en: "Backup and cyber protection",
          ar: "النسخ الاحتياطي والحماية السيبرانية",
        },
      },
      {
        name: "Backblaze",
        logoName: "Backblaze",
        products: {
          en: "Cloud storage for offsite backups",
          ar: "التخزين السحابي للنسخ خارج الموقع",
        },
      },
      {
        name: "NetApp",
        logoName: "NetApp",
        products: {
          en: "Enterprise storage systems",
          ar: "أنظمة التخزين المؤسسية",
        },
      },
      {
        name: "Pure Storage",
        logoName: "Pure Storage",
        products: { en: "All-flash storage", ar: "أنظمة التخزين الفلاشية" },
      },
      {
        name: "Western Digital",
        logoName: "Western Digital",
        products: {
          en: "Hard drives and SSDs",
          ar: "الأقراص الصلبة وأقراص SSD",
        },
      },
      {
        name: "Seagate",
        logoName: "Seagate",
        products: {
          en: "Hard drives for servers and NAS",
          ar: "أقراص السيرفرات وأنظمة NAS",
        },
      },
      {
        name: "Buffalo",
        logoName: "Buffalo",
        products: { en: "NAS and storage devices", ar: "أجهزة NAS والتخزين" },
      },
    ],
  },
];

export const BRANDS_COPY: Record<
  Language,
  {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    summary: string;
    cta: string;
  }
> = {
  en: {
    metaTitle: "IT Brands We Supply in Saudi Arabia | Thoughts House",
    metaDescription:
      "Dell, HP, Lenovo, Cisco, Sophos, Palo Alto Networks, Microsoft, Veeam, NetApp and more: supplied, installed and supported across Saudi Arabia.",
    h1: "IT Brands We Supply in Saudi Arabia",
    summary:
      "Thoughts House is an IT reseller and system integrator in Saudi Arabia that supplies, installs and supports products from 25 leading brands, including Dell, HP, Lenovo, Cisco, Sophos, Palo Alto Networks, CrowdStrike, Microsoft, Veeam, NetApp and Pure Storage.",
    cta: "Request a quotation",
  },
  ar: {
    metaTitle: "العلامات التجارية التي نورّدها في السعودية | بيت الأفكار",
    metaDescription:
      "يورّد بيت الأفكار ويركّب ويدعم منتجات Dell وHP وLenovo وCisco وSophos وPalo Alto Networks وMicrosoft وVeeam وNetApp وغيرها في جميع مناطق المملكة.",
    h1: "العلامات التجارية التي نورّدها في السعودية",
    summary:
      "بيت الأفكار موزّع وشركة تكامل أنظمة تقنية معلومات في السعودية، يورّد ويركّب ويدعم منتجات 25 علامة تجارية رائدة، منها Dell وHP وLenovo وCisco وSophos وPalo Alto Networks وCrowdStrike وMicrosoft وVeeam وNetApp وPure Storage.",
    cta: "اطلب عرض سعر",
  },
};
