/*
 * Our Work page (/projects/ and /ar/projects/): completed projects, approved by the owner.
 * Clients are never named, and no prices are shown. Each project is labelled with what was
 * actually delivered: most were supply only, so do not describe them as installations.
 */
import type { Language } from "@/seo";
import type { ServiceSlug } from "./services";
import type { BrandSlug } from "./brandPages";

interface ProjectCopy {
  title: string;
  /** What was delivered, e.g. supply only or supply and installation */
  type: string;
  text: string;
}

export interface Project {
  service: ServiceSlug;
  brand?: BrandSlug;
  content: Record<Language, ProjectCopy>;
}

interface ProjectsCopy {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  summary: string;
  privacyNote: string;
  listTitle: string;
  relatedLabel: string;
}

export const PROJECTS_COPY: Record<Language, ProjectsCopy> = {
  en: {
    metaTitle: "Our Work: IT Projects in Saudi Arabia | Thoughts House",
    metaDescription:
      "Examples of Thoughts House IT projects in Saudi Arabia: computer deployment, enterprise storage, Microsoft 365 licensing, Sophos EDR, Cisco and Veritas supply.",
    h1: "Our Work",
    summary:
      "Examples of projects Thoughts House has delivered for organizations in Saudi Arabia, including computer supply and deployment, enterprise storage, Microsoft 365 and Dynamics 365 licensing, endpoint protection and network equipment.",
    privacyNote:
      "We do not name our clients, to respect their privacy, and we do not publish project values.",
    listTitle: "Examples of our projects",
    relatedLabel: "Related",
  },
  ar: {
    metaTitle: "أعمالنا: مشاريع تقنية المعلومات في السعودية | بيت الأفكار",
    metaDescription:
      "نماذج من مشاريع بيت الأفكار في المملكة: تجهيز أجهزة الحاسب، والتخزين المؤسسي، وتراخيص Microsoft 365، وتوريد Sophos EDR وCisco وVeritas.",
    h1: "أعمالنا",
    summary:
      "نماذج من المشاريع التي نفذها بيت الأفكار لمنشآت في المملكة العربية السعودية، منها توريد أجهزة الحاسب وتجهيزها، والتخزين المؤسسي، وتراخيص Microsoft 365 وDynamics 365، وحماية الأجهزة الطرفية، وأجهزة الشبكات.",
    privacyNote:
      "لا نذكر أسماء عملائنا احتراماً لخصوصيتهم، ولا ننشر قيمة المشاريع.",
    listTitle: "نماذج من مشاريعنا",
    relatedLabel: "ذات صلة",
  },
};

export const PROJECTS: Project[] = [
  {
    service: "it-supply",
    brand: "dell",
    content: {
      en: {
        title:
          "More than 230 computers for a training institute in the Eastern Province",
        type: "Supply and installation",
        text: "We supplied and installed Dell computers, prepared the systems and connected them to the network, and moved user data department by department so that work did not stop. We then securely wiped the old computers, documented the assets and handed over the project.",
      },
      ar: {
        title: "تجهيز أكثر من 230 جهازاً لمعهد تدريب في المنطقة الشرقية",
        type: "توريد وتركيب",
        text: "توريد أجهزة Dell وتركيبها، وتجهيز الأنظمة وربطها بالشبكة، ونقل بيانات المستخدمين قسماً بقسم حتى لا يتوقف العمل. ثم مسح الأجهزة القديمة مسحاً آمناً، وتوثيق الأصول، وتسليم المشروع.",
      },
    },
  },
  {
    service: "cloud-backup",
    brand: "qnap",
    content: {
      en: {
        title: "600 TB of storage for a Saudi cement company",
        type: "Supply",
        text: "We supplied QNAP network-attached storage (NAS) with SSDs totalling the equivalent of 600 TB.",
      },
      ar: {
        title: "تخزين بسعة 600 تيرابايت لشركة إسمنت سعودية",
        type: "توريد",
        text: "توريد أجهزة تخزين شبكي QNAP مع أقراص SSD بسعة إجمالية تعادل 600 تيرابايت.",
      },
    },
  },
  {
    service: "it-supply",
    brand: "microsoft",
    content: {
      en: {
        title: "More than 300 Microsoft 365 licenses for a technology company",
        type: "License supply and technical support",
        text: "We supplied Microsoft 365 E1, E3, E5, E7 and F1 licenses, together with Dynamics 365, Microsoft 365 Copilot, Power BI, Project, Visio, Teams Phone and extra SharePoint storage, plus technical support for Azure and on-premises Microsoft products.",
      },
      ar: {
        title: "أكثر من 300 ترخيص Microsoft 365 لشركة تقنية",
        type: "توريد تراخيص ودعم فني",
        text: "توريد تراخيص Microsoft 365 من فئات E1 وE3 وE5 وE7 وF1، مع Dynamics 365 وMicrosoft 365 Copilot وPower BI وProject وVisio وTeams Phone ومساحة تخزين إضافية في SharePoint، إضافة إلى الدعم الفني لمنتجات Microsoft على Azure وفي البيئات المحلية.",
      },
    },
  },
  {
    service: "cybersecurity",
    brand: "sophos",
    content: {
      en: {
        title:
          "Endpoint protection for a financial institution in Saudi Arabia",
        type: "Supply",
        text: "We supplied Sophos EDR to detect and respond to threats on endpoints.",
      },
      ar: {
        title: "حماية الأجهزة الطرفية لمؤسسة مالية في المملكة",
        type: "توريد",
        text: "توريد حل Sophos EDR لرصد التهديدات على الأجهزة الطرفية والاستجابة لها.",
      },
    },
  },
  {
    service: "network-infrastructure",
    brand: "cisco",
    content: {
      en: {
        title: "Cisco devices for a Saudi holding group",
        type: "Supply",
        text: "We supplied Cisco devices.",
      },
      ar: {
        title: "أجهزة Cisco لمجموعة قابضة سعودية",
        type: "توريد",
        text: "توريد أجهزة Cisco.",
      },
    },
  },
  {
    service: "cloud-backup",
    brand: "veritas",
    content: {
      en: {
        title: "Veritas license renewal for a contracting company",
        type: "License renewal",
        text: "We supplied the renewal of Veritas licenses.",
      },
      ar: {
        title: "تجديد تراخيص Veritas لشركة مقاولات",
        type: "تجديد تراخيص",
        text: "توريد تجديد تراخيص Veritas.",
      },
    },
  },
];
