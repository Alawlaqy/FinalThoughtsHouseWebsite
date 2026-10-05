/*
 * Content for the dedicated service pages (/services/<slug>/ and /ar/services/<slug>/).
 * Each service has English and Arabic copy plus SEO metadata.
 */
import type { Language } from "@/seo";

export type ServiceSlug =
  | "cybersecurity"
  | "network-infrastructure"
  | "cloud-backup"
  | "it-supply"
  | "it-support-amc"
  | "firewall-installation"
  | "wifi-installation"
  | "structured-cabling"
  | "cctv-installation";

export const SERVICE_SLUGS: ServiceSlug[] = [
  "cybersecurity",
  "network-infrastructure",
  "cloud-backup",
  "it-supply",
  "it-support-amc",
  "firewall-installation",
  "wifi-installation",
  "structured-cabling",
  "cctv-installation",
];

/** Responsive srcset for a service image ("/images/<name>-1280.webp" also exists at 720w). */
export function imageSrcSet(src: string) {
  return `${src.replace("-1280.", "-720.")} 720w, ${src} 1280w`;
}

interface Localized {
  /** <title> */
  metaTitle: string;
  metaDescription: string;
  /** Short name used in nav, breadcrumbs and cards */
  name: string;
  h1: string;
  /** Answer-first summary: a self-contained 1–2 sentence answer that search and AI engines can quote. */
  summary: string;
  intro: string;
  offeringsTitle: string;
  offerings: { title: string; text: string }[];
  vendorsTitle: string;
  vendorsText: string;
  whyTitle: string;
  why: { title: string; text: string }[];
  /** Optional deeper sections (e.g. managed backup, DR, EDR/XDR/MDR) */
  extra?: { title: string; text: string; points: string[] }[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
}

export interface Service {
  slug: ServiceSlug;
  image: string;
  vendors: string[];
  content: Record<Language, Localized>;
}

export const WHY_EN = [
  {
    title: "Local team in Dammam",
    text: "We are based in Dammam and work with organizations across Saudi Arabia, so you deal directly with the engineers who design, deploy and support your systems.",
  },
  {
    title: "Vendor-neutral advice",
    text: "We partner with many leading vendors rather than a single brand, so we recommend the solution that fits your requirements and budget — not the one we are obliged to sell.",
  },
  {
    title: "End to end",
    text: "From assessment and design to supply, installation, configuration and ongoing support, one team is accountable for the whole project.",
  },
];

export const WHY_AR = [
  {
    title: "فريق محلي في الدمام",
    text: "مقرّنا في الدمام ونخدم المؤسسات في مختلف مناطق المملكة، فتتعامل مباشرة مع المهندسين الذين يصممون أنظمتك وينفذونها ويدعمونها.",
  },
  {
    title: "استشارة محايدة",
    text: "نتعاون مع عدد كبير من الشركات التقنية الرائدة لا مع علامة تجارية واحدة، لذلك نرشّح لك الحل الأنسب لاحتياجاتك وميزانيتك.",
  },
  {
    title: "من البداية إلى النهاية",
    text: "من التقييم والتصميم إلى التوريد والتركيب والإعداد والدعم المستمر، فريق واحد مسؤول عن مشروعك بالكامل.",
  },
];

export const SERVICES: Record<ServiceSlug, Service> = {
  cybersecurity: {
    slug: "cybersecurity",
    image: "/images/cybersecurity-1280.webp",
    vendors: [
      "Sophos",
      "Palo Alto Networks",
      "CrowdStrike",
      "Check Point",
      "Trend Micro",
      "Cisco",
      "Microsoft",
    ],
    content: {
      en: {
        metaTitle: "Cybersecurity Company in Saudi Arabia | Thoughts House",
        metaDescription:
          "Cybersecurity company serving Dammam and all of Saudi Arabia: firewalls, endpoint security and EDR, network protection, MDR and security assessments.",
        name: "Cybersecurity",
        h1: "Cybersecurity Company & Solutions in Saudi Arabia",
        summary:
          "Thoughts House designs, supplies and supports layered cybersecurity for organizations in Saudi Arabia: endpoint protection and EDR, next-generation firewalls, network security monitoring, threat detection and response, and security assessments — working with vendors such as Sophos, Palo Alto Networks, CrowdStrike, Check Point, Trend Micro and Microsoft.",
        intro:
          "Cyber threats keep evolving, and a single weak point can disrupt your whole business. Thoughts House designs, deploys and supports layered cybersecurity solutions that protect your users, devices, network and data — from the endpoint to the perimeter.",
        offeringsTitle: "What we deliver",
        offerings: [
          {
            title: "Endpoint Protection",
            text: "Modern endpoint protection and EDR for laptops, desktops and servers, centrally managed so every device follows the same security policy.",
          },
          {
            title: "Next-Generation Firewalls",
            text: "Selection, sizing, installation and configuration of next-generation firewalls with application control, intrusion prevention, web filtering and secure remote access (VPN).",
          },
          {
            title: "Network Security Monitoring",
            text: "Visibility into traffic and security events across your network so suspicious activity is spotted early instead of after the damage is done.",
          },
          {
            title: "Threat Detection & Response",
            text: "Tools and processes to detect, investigate and contain threats such as ransomware and phishing before they spread.",
          },
          {
            title: "Security Assessment & Audit",
            text: "A review of your current environment that identifies gaps and gives you a prioritized, practical plan to close them.",
          },
        ],
        vendorsTitle: "Technologies we work with",
        vendorsText:
          "We work with leading security vendors and recommend the combination that suits your environment, team size and budget.",
        whyTitle: "Why Thoughts House",
        why: WHY_EN,
        extra: [
          {
            title: "EDR, XDR and MDR services",
            text: "Endpoint detection and response (EDR) records activity on laptops and servers so attacks can be detected and stopped. Extended detection and response (XDR) correlates endpoint, firewall, email and cloud signals in one place. Managed detection and response (MDR) adds a team of analysts who watch the alerts around the clock and respond for you.",
            points: [
              "EDR deployment and tuning on laptops, desktops and servers",
              "XDR integration across endpoint, firewall and email security",
              "MDR services with 24/7 monitoring and response",
              "Incident response support and post-incident hardening",
            ],
          },
        ],
        faqTitle: "Frequently asked questions",
        faq: [
          {
            q: "What does your cybersecurity service include?",
            a: "It covers endpoint protection, next-generation firewalls, network security monitoring, threat detection and response, and security assessments. We can deliver a single component or a complete, layered solution.",
          },
          {
            q: "Which cybersecurity vendors do you work with?",
            a: "We work with vendors including Sophos, Palo Alto Networks, CrowdStrike, Check Point, Trend Micro, Cisco and Microsoft, and recommend what fits your requirements rather than a single brand.",
          },
          {
            q: "Where should we start if we are not sure what we need?",
            a: "Start with a security assessment. We review your current setup, identify the most important risks and propose a prioritized plan. Contact us by form, email, phone or WhatsApp to arrange it.",
          },
        ],
        ctaTitle: "Let's secure your business",
        ctaText:
          "Tell us about your environment and we will get back to you with a recommendation.",
      },
      ar: {
        metaTitle: "شركة أمن سيبراني في السعودية | بيت الأفكار",
        metaDescription:
          "حماية نقاط النهاية وجدران الحماية من الجيل التالي ومراقبة أمن الشبكات وكشف التهديدات وتقييم الأمان للشركات في الدمام وجميع مناطق المملكة.",
        name: "الأمن السيبراني",
        h1: "حلول الأمن السيبراني في المملكة العربية السعودية",
        summary:
          "يصمم بيت الأفكار حلول أمن سيبراني متعددة الطبقات للمنشآت في المملكة ويورّدها ويدعمها: حماية نقاط النهاية وEDR، وجدران الحماية من الجيل التالي، ومراقبة أمن الشبكات، وكشف التهديدات والاستجابة لها، وتقييم الأمان، بالتعاون مع شركات مثل Sophos وPalo Alto Networks وCrowdStrike وCheck Point وTrend Micro وMicrosoft.",
        intro:
          "تتطور التهديدات السيبرانية باستمرار، ونقطة ضعف واحدة قد تعطّل أعمالك بالكامل. في بيت الأفكار نصمم وننفذ وندعم حلول أمن سيبراني متعددة الطبقات تحمي المستخدمين والأجهزة والشبكة والبيانات، من نقاط النهاية وحتى حدود الشبكة.",
        offeringsTitle: "ماذا نقدّم",
        offerings: [
          {
            title: "حماية نقاط النهاية",
            text: "حلول حديثة لحماية نقاط النهاية والاستجابة لها (EDR) لأجهزة الحاسب والخوادم، تُدار مركزياً لتطبيق سياسة أمان موحّدة على جميع الأجهزة.",
          },
          {
            title: "جدران الحماية من الجيل التالي",
            text: "اختيار جدران الحماية وتحديد السعة المناسبة وتركيبها وإعدادها، مع التحكم بالتطبيقات ومنع الاختراق وتصفية الويب والوصول الآمن عن بُعد (VPN).",
          },
          {
            title: "مراقبة أمن الشبكات",
            text: "رؤية واضحة لحركة البيانات والأحداث الأمنية في شبكتك لاكتشاف أي نشاط مشبوه مبكراً قبل وقوع الضرر.",
          },
          {
            title: "كشف التهديدات والاستجابة",
            text: "أدوات وإجراءات لاكتشاف التهديدات مثل برامج الفدية والتصيّد الاحتيالي والتحقيق فيها واحتوائها قبل انتشارها.",
          },
          {
            title: "تقييم وتدقيق الأمان",
            text: "مراجعة شاملة لبيئتك الحالية تحدد الثغرات وتقدّم لك خطة عملية مرتّبة حسب الأولوية لمعالجتها.",
          },
        ],
        vendorsTitle: "التقنيات التي نعمل بها",
        vendorsText:
          "نعمل مع أبرز شركات الأمن السيبراني ونرشّح المزيج الأنسب لبيئتك وحجم فريقك وميزانيتك.",
        whyTitle: "لماذا بيت الأفكار",
        why: WHY_AR,
        extra: [
          {
            title: "خدمات EDR وXDR وMDR",
            text: "تسجّل حلول الكشف والاستجابة لنقاط النهاية (EDR) النشاط على الحواسيب والخوادم لاكتشاف الهجمات وإيقافها. وتربط حلول الكشف والاستجابة الموسّعة (XDR) إشارات الأجهزة وجدار الحماية والبريد والسحابة في مكان واحد. أما خدمة الكشف والاستجابة المُدارة (MDR) فتضيف فريق محللين يراقب التنبيهات على مدار الساعة ويستجيب نيابةً عنك.",
            points: [
              "تنفيذ حلول EDR وضبطها على الحواسيب والخوادم",
              "تكامل XDR بين حماية الأجهزة وجدار الحماية والبريد",
              "خدمات MDR بمراقبة واستجابة على مدار الساعة",
              "دعم الاستجابة للحوادث وتعزيز الحماية بعدها",
            ],
          },
        ],
        faqTitle: "الأسئلة الشائعة",
        faq: [
          {
            q: "ماذا تشمل خدمة الأمن السيبراني لديكم؟",
            a: "تشمل حماية نقاط النهاية وجدران الحماية من الجيل التالي ومراقبة أمن الشبكات وكشف التهديدات والاستجابة لها وتقييم الأمان. يمكننا تنفيذ عنصر واحد أو حل متكامل متعدد الطبقات.",
          },
          {
            q: "ما شركات الأمن السيبراني التي تتعاملون معها؟",
            a: "نتعامل مع شركات منها Sophos وPalo Alto Networks وCrowdStrike وCheck Point وTrend Micro وCisco وMicrosoft، ونرشّح ما يناسب احتياجاتك بدلاً من الالتزام بعلامة واحدة.",
          },
          {
            q: "من أين نبدأ إذا لم نكن متأكدين مما نحتاجه؟",
            a: "ابدأ بتقييم أمني؛ نراجع وضعك الحالي ونحدد أهم المخاطر ونقترح خطة مرتّبة حسب الأولوية. تواصل معنا عبر النموذج أو البريد أو الهاتف أو واتساب لترتيب ذلك.",
          },
        ],
        ctaTitle: "لنحمِ أعمالك معاً",
        ctaText: "أخبرنا عن بيئتك التقنية وسنعود إليك بالتوصية المناسبة.",
      },
    },
  },

  "network-infrastructure": {
    slug: "network-infrastructure",
    image: "/images/network-infrastructure-1280.webp",
    vendors: ["Cisco", "HP", "Dell", "Lenovo", "Supermicro", "ASUS"],
    content: {
      en: {
        metaTitle: "Network Infrastructure Solutions in Saudi Arabia",
        metaDescription:
          "Enterprise routing, switching, wireless, network design and performance optimization for businesses in Dammam and across Saudi Arabia.",
        name: "Network Infrastructure",
        h1: "Network Infrastructure Solutions in Saudi Arabia",
        summary:
          "Thoughts House plans, builds and upgrades enterprise networks in Saudi Arabia — routing, switching, Wi-Fi, network design and performance optimization — using hardware from manufacturers such as Cisco, HP and Dell, and supports them after go-live.",
        intro:
          "Every application, phone call and cloud service depends on your network. Thoughts House plans, builds and upgrades reliable, scalable enterprise networks — wired and wireless — designed for uptime, performance and room to grow.",
        offeringsTitle: "What we deliver",
        offerings: [
          {
            title: "Enterprise Routing",
            text: "Routing design and deployment that connects your sites, data center and cloud services reliably and securely.",
          },
          {
            title: "Advanced Switching",
            text: "Core, distribution and access switching with VLAN segmentation, redundancy and PoE for phones, cameras and access points.",
          },
          {
            title: "Wireless Solutions",
            text: "Enterprise Wi-Fi planned around your building and user density, with secure guest access and central management.",
          },
          {
            title: "Network Design & Planning",
            text: "Assessment of your requirements and existing setup, followed by a clear design, bill of materials and implementation plan.",
          },
          {
            title: "Performance Optimization",
            text: "Troubleshooting and tuning of slow or unstable networks, and upgrades that remove bottlenecks.",
          },
        ],
        vendorsTitle: "Technologies we work with",
        vendorsText:
          "We supply and integrate networking and infrastructure hardware from leading manufacturers, matched to your performance needs and budget.",
        whyTitle: "Why Thoughts House",
        why: WHY_EN,
        faqTitle: "Frequently asked questions",
        faq: [
          {
            q: "Can you upgrade our existing network instead of replacing everything?",
            a: "Yes. We start by assessing what you already have, keep what still performs well, and plan upgrades where they make the biggest difference.",
          },
          {
            q: "Do you handle both wired and wireless networks?",
            a: "Yes. We design and deploy routing, switching and enterprise Wi-Fi as one integrated network, managed centrally.",
          },
          {
            q: "How do we get started?",
            a: "Contact us with a short description of your sites and requirements. We will arrange an assessment and propose a design and implementation plan.",
          },
        ],
        ctaTitle: "Build a network you can rely on",
        ctaText:
          "Tell us about your sites and requirements and we will propose the right design.",
      },
      ar: {
        metaTitle: "حلول البنية التحتية للشبكات في السعودية | بيت الأفكار",
        metaDescription:
          "التوجيه والتبديل المؤسسي والشبكات اللاسلكية وتصميم الشبكات وتحسين أدائها للشركات في الدمام وجميع مناطق المملكة.",
        name: "البنية التحتية للشبكات",
        h1: "حلول البنية التحتية للشبكات في المملكة العربية السعودية",
        summary:
          "يخطط بيت الأفكار للشبكات المؤسسية في المملكة ويبنيها ويطوّرها، من التوجيه والتبديل وشبكات Wi-Fi إلى تصميم الشبكات وتحسين أدائها، باستخدام معدات من شركات مثل Cisco وHP وDell، ويدعمها بعد التشغيل.",
        intro:
          "كل تطبيق ومكالمة وخدمة سحابية تعتمد على شبكتك. في بيت الأفكار نخطط ونبني ونطوّر شبكات مؤسسية موثوقة وقابلة للتوسع، سلكية ولاسلكية، مصممة لأعلى جاهزية وأداء مع مساحة للنمو.",
        offeringsTitle: "ماذا نقدّم",
        offerings: [
          {
            title: "التوجيه المؤسسي",
            text: "تصميم وتنفيذ التوجيه الذي يربط فروعك ومركز بياناتك والخدمات السحابية بشكل موثوق وآمن.",
          },
          {
            title: "التبديل المتقدم",
            text: "مبدّلات للطبقات الأساسية والتوزيع والوصول، مع تقسيم الشبكات (VLAN) والتكرار الاحتياطي وتغذية الأجهزة بالطاقة (PoE) للهواتف والكاميرات ونقاط الوصول.",
          },
          {
            title: "الحلول اللاسلكية",
            text: "شبكات Wi-Fi مؤسسية مخططة حسب مبناك وكثافة المستخدمين، مع وصول آمن للزوار وإدارة مركزية.",
          },
          {
            title: "تصميم وتخطيط الشبكات",
            text: "تقييم احتياجاتك وشبكتك الحالية، ثم تصميم واضح وقائمة بالمعدات وخطة للتنفيذ.",
          },
          {
            title: "تحسين الأداء",
            text: "تشخيص الشبكات البطيئة أو غير المستقرة وضبطها، وتحديثات تزيل نقاط الاختناق.",
          },
        ],
        vendorsTitle: "التقنيات التي نعمل بها",
        vendorsText:
          "نورّد وندمج معدات الشبكات والبنية التحتية من كبرى الشركات المصنّعة بما يتوافق مع احتياجات الأداء والميزانية.",
        whyTitle: "لماذا بيت الأفكار",
        why: WHY_AR,
        faqTitle: "الأسئلة الشائعة",
        faq: [
          {
            q: "هل يمكنكم تطوير شبكتنا الحالية بدلاً من استبدالها بالكامل؟",
            a: "نعم. نبدأ بتقييم ما لديك، ونحتفظ بما يعمل بكفاءة، ونخطط للتحديث حيث يُحدث الفرق الأكبر.",
          },
          {
            q: "هل تتعاملون مع الشبكات السلكية واللاسلكية معاً؟",
            a: "نعم. نصمم وننفذ التوجيه والتبديل وشبكات Wi-Fi المؤسسية كشبكة واحدة متكاملة تُدار مركزياً.",
          },
          {
            q: "كيف نبدأ؟",
            a: "تواصل معنا بوصف مختصر لمواقعك واحتياجاتك، وسنرتّب تقييماً ونقترح تصميماً وخطة تنفيذ.",
          },
        ],
        ctaTitle: "ابنِ شبكة يمكنك الاعتماد عليها",
        ctaText: "أخبرنا عن مواقعك واحتياجاتك وسنقترح عليك التصميم المناسب.",
      },
    },
  },

  "cloud-backup": {
    slug: "cloud-backup",
    image: "/images/cloud-backup-1280.webp",
    vendors: [
      "Microsoft Azure",
      "AWS",
      "Veeam",
      "Veritas",
      "Acronis",
      "Backblaze",
      "NetApp",
      "Pure Storage",
      "Dell",
    ],
    content: {
      en: {
        metaTitle: "Cloud Backup & Disaster Recovery in KSA | Thoughts House",
        metaDescription:
          "Data center solutions, automated backup, disaster recovery, server management and cloud migration for businesses in Dammam and across Saudi Arabia.",
        name: "Cloud & Backup Solutions",
        h1: "Cloud & Backup Solutions in Saudi Arabia",
        summary:
          "Thoughts House builds server, storage, backup and disaster recovery environments and migrates workloads to Microsoft Azure or AWS for organizations in Saudi Arabia, using platforms such as Veeam, Veritas, Acronis, NetApp and Pure Storage.",
        intro:
          "Hardware fails, ransomware strikes and mistakes happen — what matters is how quickly you recover. Thoughts House builds reliable server, storage, backup and cloud environments so your data stays protected and your business keeps running.",
        offeringsTitle: "What we deliver",
        offerings: [
          {
            title: "Data Center Solutions",
            text: "Servers, storage and virtualization sized for your workloads, installed and configured for reliability.",
          },
          {
            title: "Disaster Recovery",
            text: "Recovery plans and infrastructure that get critical systems back online quickly after an outage, failure or cyberattack.",
          },
          {
            title: "Server Management",
            text: "Setup, monitoring, patching and maintenance of your servers to keep them secure and performing well.",
          },
          {
            title: "Automated Backup",
            text: "Scheduled, monitored backups on-premises and in the cloud, including offsite copies that protect you against ransomware.",
          },
          {
            title: "Cloud Migration",
            text: "Planning and moving workloads to Microsoft Azure or AWS, or building a hybrid setup that combines cloud and on-premises systems.",
          },
        ],
        vendorsTitle: "Technologies we work with",
        vendorsText:
          "We work with leading cloud, backup and storage providers and choose the platform that matches your recovery goals and budget.",
        whyTitle: "Why Thoughts House",
        why: WHY_EN,
        extra: [
          {
            title: "Managed backup services",
            text: "We run your backups for you: we design the backup policy, monitor every job, fix failures and test restores, so you have proof your data can be recovered.",
            points: [
              "Backup of servers, virtual machines and Microsoft 365",
              "Immutable and offsite copies against ransomware",
              "Daily job monitoring and failure follow-up",
              "Scheduled restore tests with reports",
            ],
          },
          {
            title: "Cloud disaster recovery",
            text: "Disaster recovery keeps critical systems available after a major outage. We define recovery targets (RPO and RTO) with you and build the right option, from restoring backups in the cloud to a standby environment ready to take over.",
            points: [
              "Recovery targets and a written DR plan",
              "Replication of critical servers to the cloud or a second site",
              "Data residency considered when choosing where to recover",
              "Regular DR tests so the plan works when needed",
            ],
          },
        ],
        faqTitle: "Frequently asked questions",
        faq: [
          {
            q: "What is the difference between backup and disaster recovery?",
            a: "Backup keeps copies of your data so it can be restored. Disaster recovery is the wider plan and infrastructure that brings your systems and services back online after a major incident. Most businesses need both.",
          },
          {
            q: "Can you move our servers to the cloud?",
            a: "Yes. We assess which workloads are suitable, plan the migration to Microsoft Azure or AWS, and can design a hybrid setup where some systems stay on-premises.",
          },
          {
            q: "Which backup platforms do you work with?",
            a: "We work with platforms including Veeam, Veritas, Acronis and Backblaze, together with storage from vendors such as NetApp, Pure Storage and Dell.",
          },
        ],
        ctaTitle: "Protect your data and keep your business running",
        ctaText:
          "Tell us about your servers and data and we will recommend the right backup and recovery setup.",
      },
      ar: {
        metaTitle: "الحلول السحابية والنسخ الاحتياطي في السعودية | بيت الأفكار",
        metaDescription:
          "حلول مراكز البيانات والنسخ الاحتياطي التلقائي والتعافي من الكوارث وإدارة الخوادم والترحيل السحابي للشركات في الدمام وجميع مناطق المملكة.",
        name: "الحلول السحابية والنسخ الاحتياطي",
        h1: "الحلول السحابية والنسخ الاحتياطي في المملكة العربية السعودية",
        summary:
          "يبني بيت الأفكار بيئات الخوادم والتخزين والنسخ الاحتياطي والتعافي من الكوارث، وينقل الأنظمة إلى Microsoft Azure أو AWS للمنشآت في المملكة، باستخدام منصات مثل Veeam وVeritas وAcronis وNetApp وPure Storage.",
        intro:
          "قد تتعطل الأجهزة، وقد تهاجمك برامج الفدية، وقد تقع الأخطاء، والأهم هو سرعة التعافي. في بيت الأفكار نبني بيئات خوادم وتخزين ونسخ احتياطي وسحابة موثوقة لتبقى بياناتك محمية وتستمر أعمالك.",
        offeringsTitle: "ماذا نقدّم",
        offerings: [
          {
            title: "حلول مراكز البيانات",
            text: "خوادم وأنظمة تخزين وافتراضية بسعة مناسبة لأعمالك، تُركّب وتُعدّ لأعلى موثوقية.",
          },
          {
            title: "التعافي من الكوارث",
            text: "خطط وبنية تحتية تعيد الأنظمة الحرجة للعمل بسرعة بعد أي انقطاع أو عطل أو هجوم سيبراني.",
          },
          {
            title: "إدارة الخوادم",
            text: "إعداد الخوادم ومراقبتها وتحديثها وصيانتها للحفاظ على أمانها وأدائها.",
          },
          {
            title: "النسخ الاحتياطي التلقائي",
            text: "نسخ احتياطي مجدول ومراقَب محلياً وفي السحابة، مع نسخ خارج الموقع تحميك من برامج الفدية.",
          },
          {
            title: "الترحيل السحابي",
            text: "التخطيط لنقل الأنظمة إلى Microsoft Azure أو AWS وتنفيذه، أو بناء بيئة هجينة تجمع بين السحابة والأنظمة المحلية.",
          },
        ],
        vendorsTitle: "التقنيات التي نعمل بها",
        vendorsText:
          "نعمل مع أبرز مزوّدي السحابة والنسخ الاحتياطي والتخزين، ونختار المنصة التي تحقق أهداف التعافي لديك ضمن ميزانيتك.",
        whyTitle: "لماذا بيت الأفكار",
        why: WHY_AR,
        extra: [
          {
            title: "خدمات النسخ الاحتياطي المُدارة",
            text: "نتولى النسخ الاحتياطي نيابةً عنك: نصمم سياسة النسخ، ونراقب كل مهمة، ونعالج الأخطاء، ونختبر الاستعادة، لتملك ما يثبت أن بياناتك قابلة للاستعادة.",
            points: [
              "نسخ الخوادم والأجهزة الافتراضية وMicrosoft 365",
              "نسخ غير قابلة للتعديل وخارج الموقع ضد برامج الفدية",
              "مراقبة يومية للمهام ومتابعة الأخطاء",
              "اختبارات استعادة مجدولة مع تقارير",
            ],
          },
          {
            title: "التعافي من الكوارث سحابياً",
            text: "يحافظ التعافي من الكوارث على عمل الأنظمة الحرجة بعد أي انقطاع كبير. نحدد معك أهداف الاستعادة (RPO وRTO) ونبني الخيار المناسب، من استعادة النسخ في السحابة إلى بيئة احتياطية جاهزة لتولي العمل.",
            points: [
              "أهداف استعادة وخطة تعافٍ مكتوبة",
              "نسخ الخوادم الحرجة إلى السحابة أو موقع ثانٍ",
              "مراعاة متطلبات بقاء البيانات داخل المملكة عند اختيار موقع الاستعادة",
              "اختبارات دورية لخطة التعافي",
            ],
          },
        ],
        faqTitle: "الأسئلة الشائعة",
        faq: [
          {
            q: "ما الفرق بين النسخ الاحتياطي والتعافي من الكوارث؟",
            a: "النسخ الاحتياطي يحفظ نسخاً من بياناتك لاستعادتها عند الحاجة. أما التعافي من الكوارث فهو الخطة والبنية الأشمل التي تعيد أنظمتك وخدماتك للعمل بعد حادث كبير. ومعظم الشركات تحتاج الاثنين.",
          },
          {
            q: "هل يمكنكم نقل خوادمنا إلى السحابة؟",
            a: "نعم. نقيّم الأنظمة المناسبة للنقل، ونخطط للترحيل إلى Microsoft Azure أو AWS، ويمكننا تصميم بيئة هجينة تبقى فيها بعض الأنظمة محلياً.",
          },
          {
            q: "ما منصات النسخ الاحتياطي التي تعملون بها؟",
            a: "نعمل مع منصات منها Veeam وVeritas وAcronis وBackblaze، إلى جانب أنظمة التخزين من شركات مثل NetApp وPure Storage وDell.",
          },
        ],
        ctaTitle: "احمِ بياناتك وحافظ على استمرارية أعمالك",
        ctaText:
          "أخبرنا عن خوادمك وبياناتك وسنرشّح لك حل النسخ الاحتياطي والتعافي المناسب.",
      },
    },
  },

  "it-supply": {
    slug: "it-supply",
    image: "/images/it-supply-1280.webp",
    vendors: [
      "Dell",
      "HP",
      "Lenovo",
      "Supermicro",
      "ASUS",
      "NVIDIA",
      "Apple",
      "Cisco",
      "Sophos",
      "Palo Alto Networks",
      "Microsoft",
      "Veeam",
      "NetApp",
      "Pure Storage",
      "Western Digital",
      "Seagate",
    ],
    content: {
      en: {
        metaTitle: "IT Hardware Supplier & Reseller in Saudi Arabia",
        metaDescription:
          "Servers, storage, network and security appliances, laptops and software licenses from Dell, HP, Lenovo, Cisco, Sophos and Microsoft, across Saudi Arabia.",
        name: "IT Supply & Licensing",
        h1: "IT Hardware Supply & Software Licensing in Saudi Arabia",
        summary:
          "Thoughts House is an IT hardware supplier and reseller in Dammam: it supplies servers, storage, network and security appliances, laptops, workstations and software licenses from brands such as Dell, HP, Lenovo, Cisco, Sophos and Microsoft, and can size, install and support them anywhere in Saudi Arabia.",
        intro:
          "Buying IT equipment is easier when your supplier also understands how it will be used. Thoughts House supplies servers, storage, networking and security appliances, end-user devices and software licenses from leading brands — and helps you choose the right models, then delivers, installs and supports them.",
        offeringsTitle: "What we supply",
        offerings: [
          {
            title: "Servers & Storage",
            text: "Rack and tower servers, storage systems and backup appliances, sized for your workloads and growth.",
          },
          {
            title: "Network & Security Appliances",
            text: "Switches, routers, wireless access points and next-generation firewalls, configured to your design.",
          },
          {
            title: "Laptops, Desktops & Workstations",
            text: "Business laptops, desktops and high-performance workstations for office, engineering and design teams.",
          },
          {
            title: "Software Licensing & Renewals",
            text: "Operating systems, productivity, security and backup licenses and subscriptions, with renewal reminders so nothing expires unnoticed.",
          },
          {
            title: "Project Procurement & Quotations",
            text: "Complete bills of materials and competitive quotations for new projects, office fit-outs and refresh cycles.",
          },
        ],
        vendorsTitle: "Brands we supply",
        vendorsText:
          "We source hardware and software from leading manufacturers and recommend the models that fit your requirements and budget.",
        whyTitle: "Why buy from Thoughts House",
        why: WHY_EN,
        faqTitle: "Frequently asked questions",
        faq: [
          {
            q: "Can you help us choose the right hardware before we buy?",
            a: "Yes. Tell us about your users, workloads and budget and we will recommend suitable models and quantities, so you do not over- or under-buy.",
          },
          {
            q: "Do you install and configure what you supply?",
            a: "Yes. Beyond supply we can deliver, install, configure and support the equipment, so everything works together from day one.",
          },
          {
            q: "How do we request a quotation?",
            a: "Send your requirements or bill of materials through the contact form, by email to sales@thoughtshouse.com or on WhatsApp, and our sales team will prepare a quotation.",
          },
        ],
        ctaTitle: "Request a quotation",
        ctaText:
          "Send us your requirements or bill of materials and we will get back to you with a quotation.",
      },
      ar: {
        metaTitle: "توريد أجهزة وسيرفرات وتراخيص في السعودية | بيت الأفكار",
        metaDescription:
          "توريد السيرفرات وأنظمة التخزين وأجهزة الشبكات والحماية وأجهزة الحاسب والتراخيص من أبرز العلامات التجارية، مع اختيار المواصفات والتوصيل والتركيب في السعودية.",
        name: "التوريد والتراخيص",
        h1: "توريد أجهزة تقنية المعلومات وتراخيص البرمجيات في السعودية",
        summary:
          "بيت الأفكار مورّد وموزّع لأجهزة تقنية المعلومات في الدمام: يورّد السيرفرات وأنظمة التخزين وأجهزة الشبكات والحماية والحواسيب ومحطات العمل وتراخيص البرمجيات من علامات مثل Dell وHP وLenovo وCisco وSophos وMicrosoft، ويساعد في اختيار المواصفات والتركيب والدعم في جميع مناطق المملكة.",
        intro:
          "شراء معدات تقنية المعلومات أسهل عندما يفهم المورّد كيف ستُستخدم. في بيت الأفكار نورّد السيرفرات وأنظمة التخزين وأجهزة الشبكات والحماية وأجهزة المستخدمين وتراخيص البرمجيات من أبرز العلامات التجارية، ونساعدك في اختيار الطرازات المناسبة، ثم نوصلها ونركّبها وندعمها.",
        offeringsTitle: "ماذا نورّد",
        offerings: [
          {
            title: "السيرفرات وأنظمة التخزين",
            text: "سيرفرات بأنواعها وأنظمة تخزين وأجهزة نسخ احتياطي بسعات مناسبة لأعمالك ونموّها.",
          },
          {
            title: "أجهزة الشبكات والحماية",
            text: "مبدّلات وموجّهات ونقاط وصول لاسلكية وجدران حماية من الجيل التالي، تُعدّ حسب تصميم شبكتك.",
          },
          {
            title: "أجهزة الحاسب المحمولة والمكتبية ومحطات العمل",
            text: "أجهزة محمولة ومكتبية للأعمال ومحطات عمل عالية الأداء لفرق المكاتب والهندسة والتصميم.",
          },
          {
            title: "تراخيص البرمجيات وتجديدها",
            text: "تراخيص واشتراكات أنظمة التشغيل وبرامج الإنتاجية والحماية والنسخ الاحتياطي، مع تذكير بالتجديد حتى لا ينتهي أي ترخيص دون علمك.",
          },
          {
            title: "توريد المشاريع وعروض الأسعار",
            text: "قوائم معدات متكاملة وعروض أسعار تنافسية للمشاريع الجديدة وتجهيز المكاتب وتحديث الأجهزة.",
          },
        ],
        vendorsTitle: "العلامات التجارية التي نورّدها",
        vendorsText:
          "نورّد الأجهزة والبرمجيات من كبرى الشركات المصنّعة، ونرشّح الطرازات المناسبة لاحتياجاتك وميزانيتك.",
        whyTitle: "لماذا تشتري من بيت الأفكار",
        why: WHY_AR,
        faqTitle: "الأسئلة الشائعة",
        faq: [
          {
            q: "هل تساعدوننا في اختيار الأجهزة المناسبة قبل الشراء؟",
            a: "نعم. أخبرنا عن عدد المستخدمين وطبيعة العمل والميزانية، وسنرشّح الطرازات والكميات المناسبة حتى لا تشتري أكثر أو أقل من حاجتك.",
          },
          {
            q: "هل تقومون بتركيب وإعداد ما تورّدونه؟",
            a: "نعم. إلى جانب التوريد نوصل الأجهزة ونركّبها ونُعدّها وندعمها، ليعمل كل شيء بتكامل من اليوم الأول.",
          },
          {
            q: "كيف نطلب عرض سعر؟",
            a: "أرسل احتياجاتك أو قائمة المعدات عبر نموذج التواصل أو البريد sales@thoughtshouse.com أو واتساب، وسيجهّز فريق المبيعات عرض السعر.",
          },
        ],
        ctaTitle: "اطلب عرض سعر",
        ctaText: "أرسل لنا احتياجاتك أو قائمة المعدات وسنعود إليك بعرض سعر.",
      },
    },
  },
  "it-support-amc": {
    slug: "it-support-amc",
    image: "/images/it-support-amc-1280.webp",
    vendors: [
      "Microsoft",
      "Dell",
      "HP",
      "Lenovo",
      "Cisco",
      "Sophos",
      "Veeam",
      "Microsoft Azure",
    ],
    content: {
      en: {
        metaTitle: "IT Support & Maintenance Contracts (AMC) in Saudi Arabia",
        metaDescription:
          "IT annual maintenance contracts for servers, networks, firewalls, backups and devices: preventive maintenance, monitoring and support across Saudi Arabia.",
        name: "IT Support & Maintenance (AMC)",
        h1: "IT Support & Annual Maintenance Contracts (AMC) in Saudi Arabia",
        summary:
          "Thoughts House provides IT annual maintenance contracts (AMC) and ongoing support in Saudi Arabia: preventive maintenance, monitoring, patching, backup checks, license and warranty tracking, and technical support for servers, networks, firewalls and end-user devices.",
        intro:
          "Technology only pays off when it keeps running. With an IT maintenance contract from Thoughts House, a team that knows your systems looks after them, preventing problems before they stop your business and fixing issues quickly when they happen.",
        offeringsTitle: "What our maintenance contracts cover",
        offerings: [
          {
            title: "Preventive Maintenance",
            text: "Scheduled health checks of servers, storage, network and security equipment, with findings and recommendations after each visit.",
          },
          {
            title: "Monitoring & Patching",
            text: "Monitoring of critical systems and regular operating system, firmware and security updates, applied in planned maintenance windows.",
          },
          {
            title: "Backup Verification",
            text: "Checks that backup jobs complete and periodic test restores, so you know your data can actually be recovered.",
          },
          {
            title: "Technical Support",
            text: "Support for your users and IT team by phone, remote session or site visit, with clear escalation to the hardware and software vendors.",
          },
          {
            title: "License, Warranty & Asset Tracking",
            text: "An up-to-date inventory of your equipment and reminders before licenses, subscriptions and warranties expire.",
          },
        ],
        vendorsTitle: "Systems we maintain",
        vendorsText:
          "We support environments built on leading platforms, including equipment we did not originally supply, after an initial assessment.",
        whyTitle: "Why choose Thoughts House for IT maintenance",
        why: WHY_EN,
        faqTitle: "Frequently asked questions",
        faq: [
          {
            q: "What is an IT annual maintenance contract (AMC)?",
            a: "An IT AMC is a yearly agreement in which an IT provider maintains and supports your systems (preventive maintenance, updates, monitoring and technical support) for a fixed scope and fee, instead of paying for each incident separately.",
          },
          {
            q: "Can you maintain equipment that you did not supply?",
            a: "Yes. We start with an assessment of your current servers, network and devices, document what you have, and then agree the scope of the contract.",
          },
          {
            q: "How do we get a maintenance contract quotation?",
            a: "Send us a list of your sites, servers, network devices and users through the contact form, by email to sales@thoughtshouse.com or on WhatsApp, and we will propose a scope and price.",
          },
        ],
        ctaTitle: "Request a maintenance contract proposal",
        ctaText:
          "Tell us about your sites and systems and we will propose a maintenance scope that fits.",
      },
      ar: {
        metaTitle: "عقود صيانة تقنية المعلومات في السعودية | بيت الأفكار",
        metaDescription:
          "عقود صيانة سنوية ودعم فني للسيرفرات والشبكات وجدران الحماية والنسخ الاحتياطي وأجهزة المستخدمين: صيانة وقائية ومراقبة ودعم في جميع مناطق المملكة.",
        name: "الدعم الفني وعقود الصيانة",
        h1: "عقود صيانة تقنية المعلومات والدعم الفني في السعودية",
        summary:
          "يقدم بيت الأفكار عقود صيانة سنوية لتقنية المعلومات ودعماً فنياً مستمراً في المملكة: صيانة وقائية، ومراقبة، وتحديثات، وفحص النسخ الاحتياطي، ومتابعة التراخيص والضمانات، ودعم فني للسيرفرات والشبكات وجدران الحماية وأجهزة المستخدمين.",
        intro:
          "لا تحقق التقنية قيمتها إلا عندما تستمر في العمل. مع عقد صيانة من بيت الأفكار يعتني بأنظمتك فريق يعرفها، فيمنع المشكلات قبل أن توقف عملك ويعالجها بسرعة عند حدوثها.",
        offeringsTitle: "ماذا تشمل عقود الصيانة",
        offerings: [
          {
            title: "الصيانة الوقائية",
            text: "فحوصات دورية للسيرفرات والتخزين وأجهزة الشبكات والحماية، مع تقرير بالملاحظات والتوصيات بعد كل زيارة.",
          },
          {
            title: "المراقبة والتحديثات",
            text: "مراقبة الأنظمة الحرجة وتطبيق تحديثات أنظمة التشغيل والبرامج الثابتة والتحديثات الأمنية في نوافذ صيانة مخططة.",
          },
          {
            title: "التحقق من النسخ الاحتياطي",
            text: "التأكد من اكتمال مهام النسخ الاحتياطي واختبار الاستعادة دورياً، لتطمئن أن بياناتك قابلة للاستعادة فعلاً.",
          },
          {
            title: "الدعم الفني",
            text: "دعم المستخدمين وفريق تقنية المعلومات هاتفياً أو عن بُعد أو بزيارة ميدانية، مع تصعيد واضح إلى الشركات المصنّعة.",
          },
          {
            title: "متابعة التراخيص والضمانات والأصول",
            text: "سجل محدّث لأجهزتك وتنبيهات قبل انتهاء التراخيص والاشتراكات والضمانات.",
          },
        ],
        vendorsTitle: "الأنظمة التي ندعمها",
        vendorsText:
          "ندعم البيئات المبنية على أبرز المنصات، بما فيها أجهزة لم نورّدها نحن، بعد تقييم مبدئي.",
        whyTitle: "لماذا تختار بيت الأفكار لصيانة تقنية المعلومات",
        why: WHY_AR,
        faqTitle: "الأسئلة الشائعة",
        faq: [
          {
            q: "ما هو عقد الصيانة السنوي لتقنية المعلومات؟",
            a: "عقد الصيانة السنوي (AMC) اتفاق لمدة عام يتولى فيه مزوّد تقنية المعلومات صيانة أنظمتك ودعمها، من الصيانة الوقائية والتحديثات إلى المراقبة والدعم الفني، بنطاق وتكلفة محددين بدلاً من الدفع عن كل عطل.",
          },
          {
            q: "هل تصونون أجهزة لم تورّدوها؟",
            a: "نعم. نبدأ بتقييم السيرفرات والشبكة والأجهزة الحالية، ونوثّق ما لديك، ثم نتفق على نطاق العقد.",
          },
          {
            q: "كيف نطلب عرض سعر لعقد صيانة؟",
            a: "أرسل قائمة بالمواقع والسيرفرات وأجهزة الشبكة وعدد المستخدمين عبر نموذج التواصل أو البريد sales@thoughtshouse.com أو واتساب، وسنقترح النطاق والسعر.",
          },
        ],
        ctaTitle: "اطلب عرضاً لعقد صيانة",
        ctaText: "أخبرنا عن مواقعك وأنظمتك وسنقترح نطاق صيانة يناسبك.",
      },
    },
  },
  "firewall-installation": {
    slug: "firewall-installation",
    image: "/images/firewall-installation-1280.webp",
    vendors: ["Sophos", "Palo Alto Networks", "Check Point", "Cisco"],
    content: {
      en: {
        metaTitle: "Firewall Installation & Configuration in Saudi Arabia",
        metaDescription:
          "Firewall supply, installation and configuration in Saudi Arabia: Sophos, Palo Alto Networks, Check Point and Cisco, with VPN, policies and support.",
        name: "Firewall Installation",
        h1: "Firewall Installation & Configuration in Saudi Arabia",
        summary:
          "Thoughts House supplies, installs and configures next-generation firewalls for organizations across Saudi Arabia, including Sophos, Palo Alto Networks, Check Point and Cisco, covering security policies, VPN, high availability, migration from old firewalls and ongoing support.",
        intro:
          "A firewall protects nothing until it is configured properly. We size the right model for your bandwidth and users, install it with minimal downtime, build a clean security policy and hand it over with documentation your team can follow.",
        offeringsTitle: "What our firewall installation includes",
        offerings: [
          {
            title: "Sizing and model selection",
            text: "We size the firewall on real throughput with threat protection enabled, your users, sites and growth, and compare licensing over three to five years.",
          },
          {
            title: "Installation and cut-over",
            text: "Rack mounting, cabling, firmware updates and a planned cut-over window so your office stays online.",
          },
          {
            title: "Security policy design",
            text: "Clear rules for users, servers and guests, with application control, web filtering, intrusion prevention and TLS inspection where appropriate.",
          },
          {
            title: "VPN and branch connectivity",
            text: "Remote-access VPN with multi-factor authentication, and site-to-site VPN or SD-WAN between branches.",
          },
          {
            title: "Migration and high availability",
            text: "Rule migration from your old firewall, cleanup of unused rules, and active-passive pairs for critical sites.",
          },
        ],
        vendorsTitle: "Firewall brands we install",
        vendorsText:
          "We install and configure firewalls from leading vendors and recommend the one that fits your network and budget.",
        whyTitle: "Why Thoughts House for firewall installation",
        why: WHY_EN,
        faqTitle: "Frequently asked questions",
        faq: [
          {
            q: "How long does a firewall installation take?",
            a: "A single-site installation is usually completed in one planned maintenance window after the design is agreed. Multi-site projects and rule migrations from older firewalls are scheduled in phases.",
          },
          {
            q: "Can you migrate the rules from our existing firewall?",
            a: "Yes. We review and migrate your existing rules, remove unused or risky ones, and document the new policy.",
          },
          {
            q: "Do you support the firewall after installation?",
            a: "Yes. We offer ongoing support and maintenance contracts covering updates, policy changes, monitoring and license renewals.",
          },
        ],
        ctaTitle: "Plan your firewall installation",
        ctaText:
          "Tell us about your sites, users and internet links and we will recommend and quote the right firewall.",
      },
      ar: {
        metaTitle: "تركيب وإعداد جدران الحماية في السعودية | بيت الأفكار",
        metaDescription:
          "توريد وتركيب وإعداد جدران الحماية من الجيل التالي في السعودية: Sophos وPalo Alto Networks وCheck Point وCisco، مع VPN والسياسات الأمنية والدعم.",
        name: "تركيب جدران الحماية",
        h1: "تركيب وإعداد جدران الحماية في المملكة العربية السعودية",
        summary:
          "يورّد بيت الأفكار جدران الحماية من الجيل التالي ويركّبها ويُعدّها للمنشآت في جميع مناطق المملكة، ومنها Sophos وPalo Alto Networks وCheck Point وCisco، بما يشمل السياسات الأمنية والشبكات الافتراضية الخاصة والجاهزية العالية والترحيل من الأجهزة القديمة والدعم المستمر.",
        intro:
          "لا يحمي جدار الحماية شيئاً ما لم يُعدّ بشكل صحيح. نختار الطراز المناسب لسرعة الإنترنت وعدد المستخدمين، ونركّبه بأقل توقف ممكن، ونبني سياسة أمنية واضحة، ونسلّمه مع توثيق يستطيع فريقك الرجوع إليه.",
        offeringsTitle: "ماذا يشمل تركيب جدار الحماية",
        offerings: [
          {
            title: "اختيار الطراز والسعة",
            text: "نحدد السعة بناءً على الأداء الفعلي مع تفعيل الحماية، وعدد المستخدمين والفروع والنمو المتوقع، ونقارن تكلفة التراخيص على ثلاث إلى خمس سنوات.",
          },
          {
            title: "التركيب والانتقال",
            text: "التركيب في الخزانة والتوصيل وتحديث البرامج الثابتة، مع نافذة انتقال مخططة ليبقى مكتبك متصلاً.",
          },
          {
            title: "تصميم السياسة الأمنية",
            text: "قواعد واضحة للمستخدمين والخوادم والزوار، مع التحكم بالتطبيقات وتصفية الويب ومنع الاختراق وفحص الاتصالات المشفرة عند الحاجة.",
          },
          {
            title: "الشبكات الافتراضية وربط الفروع",
            text: "وصول آمن عن بُعد (VPN) مع التحقق متعدد العوامل، وربط الفروع عبر VPN أو SD-WAN.",
          },
          {
            title: "الترحيل والجاهزية العالية",
            text: "نقل القواعد من الجهاز القديم وتنظيفها، وتركيب زوج احتياطي للمواقع الحرجة.",
          },
        ],
        vendorsTitle: "علامات جدران الحماية التي نركّبها",
        vendorsText:
          "نركّب جدران الحماية من أبرز الشركات ونُعدّها، ونرشّح ما يناسب شبكتك وميزانيتك.",
        whyTitle: "لماذا بيت الأفكار لتركيب جدران الحماية",
        why: WHY_AR,
        faqTitle: "الأسئلة الشائعة",
        faq: [
          {
            q: "كم يستغرق تركيب جدار الحماية؟",
            a: "يُنجز التركيب لموقع واحد عادةً في نافذة صيانة واحدة مخططة بعد اعتماد التصميم، أما المشاريع متعددة الفروع وترحيل القواعد من الأجهزة القديمة فتُنفذ على مراحل.",
          },
          {
            q: "هل يمكنكم نقل القواعد من جدار الحماية الحالي؟",
            a: "نعم. نراجع القواعد الحالية وننقلها، ونحذف غير المستخدم منها أو الخطِر، ونوثّق السياسة الجديدة.",
          },
          {
            q: "هل تدعمون جدار الحماية بعد التركيب؟",
            a: "نعم. نقدم دعماً وعقود صيانة تشمل التحديثات وتعديل السياسات والمراقبة وتجديد التراخيص.",
          },
        ],
        ctaTitle: "خطط لتركيب جدار الحماية",
        ctaText:
          "أخبرنا عن مواقعك وعدد المستخدمين وخطوط الإنترنت، وسنرشّح جدار الحماية المناسب ونرسل عرض السعر.",
      },
    },
  },

  "wifi-installation": {
    slug: "wifi-installation",
    image: "/images/wifi-installation-1280.webp",
    vendors: ["Cisco"],
    content: {
      en: {
        metaTitle: "Wi-Fi & Access Point Installation in Saudi Arabia",
        metaDescription:
          "Business Wi-Fi design and access point installation in Saudi Arabia: site surveys, capacity planning, PoE switching, guest networks and central management.",
        name: "Wi-Fi & Access Point Installation",
        h1: "Wi-Fi & Access Point Installation in Saudi Arabia",
        summary:
          "Thoughts House designs and installs business Wi-Fi for offices, warehouses, schools, clinics and hotels across Saudi Arabia: site surveys, access point placement, PoE switching, secure staff and guest networks and central management.",
        intro:
          "Reliable Wi-Fi is planned around your building and the number of devices, not by adding a stronger router. We survey the site, place access points where they are needed, and configure the network so staff, guests and devices each get the right access.",
        offeringsTitle: "What our Wi-Fi installation includes",
        offerings: [
          {
            title: "Site survey",
            text: "A predictive and on-site survey that maps walls, materials and interference, and shows where access points should go.",
          },
          {
            title: "Coverage and capacity design",
            text: "Enough access points for the number of active devices in each area, not only for signal coverage.",
          },
          {
            title: "Access point installation",
            text: "Ceiling or wall mounting, cabling and PoE from switches with enough power budget.",
          },
          {
            title: "Secure networks",
            text: "Separate networks for staff, guests and devices such as printers and cameras, with WPA3 and enterprise authentication where supported.",
          },
          {
            title: "Central management",
            text: "One controller or cloud dashboard for all access points, with monitoring and updates.",
          },
        ],
        vendorsTitle: "Wireless brands we install",
        vendorsText:
          "We install enterprise wireless and the switching behind it, and recommend the platform that suits your site.",
        whyTitle: "Why Thoughts House for Wi-Fi installation",
        why: WHY_EN,
        faqTitle: "Frequently asked questions",
        faq: [
          {
            q: "How many access points does our office need?",
            a: "It depends on the floor area, building materials and how many devices connect at the same time. A site survey gives an accurate number; open-plan offices and meeting rooms usually need more access points than corridors.",
          },
          {
            q: "Can you cover warehouses and outdoor areas?",
            a: "Yes. We design for high ceilings, racking and outdoor areas, using suitable access points and mounting.",
          },
          {
            q: "Do you provide a separate guest Wi-Fi?",
            a: "Yes. Guests get internet-only access on a separate network that cannot reach your internal systems.",
          },
        ],
        ctaTitle: "Request a Wi-Fi site survey",
        ctaText:
          "Tell us about your building, floors and number of users and we will plan the right Wi-Fi coverage.",
      },
      ar: {
        metaTitle: "تركيب شبكات Wi-Fi ونقاط الوصول في السعودية | بيت الأفكار",
        metaDescription:
          "تصميم شبكات Wi-Fi للشركات وتركيب نقاط الوصول في السعودية: المسح الميداني وتخطيط التغطية والسعة ومبدّلات PoE وشبكات الزوار والإدارة المركزية.",
        name: "تركيب Wi-Fi ونقاط الوصول",
        h1: "تركيب شبكات Wi-Fi ونقاط الوصول في المملكة العربية السعودية",
        summary:
          "يصمم بيت الأفكار شبكات Wi-Fi للشركات ويركّبها للمكاتب والمستودعات والمدارس والعيادات والفنادق في جميع مناطق المملكة: المسح الميداني وتوزيع نقاط الوصول ومبدّلات PoE وشبكات آمنة للموظفين والزوار والإدارة المركزية.",
        intro:
          "تُخطط شبكة Wi-Fi الموثوقة حسب المبنى وعدد الأجهزة، لا بإضافة راوتر أقوى. نمسح الموقع ونضع نقاط الوصول حيث تُحتاج، ونُعدّ الشبكة ليحصل الموظفون والزوار والأجهزة كلٌّ على الوصول المناسب.",
        offeringsTitle: "ماذا يشمل تركيب شبكة Wi-Fi",
        offerings: [
          {
            title: "المسح الميداني",
            text: "مسح تنبؤي وميداني يحدد الجدران والمواد ومصادر التداخل، ويوضح أماكن نقاط الوصول المناسبة.",
          },
          {
            title: "تصميم التغطية والسعة",
            text: "عدد كافٍ من نقاط الوصول للأجهزة النشطة في كل منطقة، لا لقوة الإشارة فقط.",
          },
          {
            title: "تركيب نقاط الوصول",
            text: "التركيب في السقف أو الجدار والتمديدات وتغذية PoE من مبدّلات بسعة طاقة كافية.",
          },
          {
            title: "شبكات آمنة",
            text: "شبكات منفصلة للموظفين والزوار والأجهزة كالطابعات والكاميرات، مع WPA3 ومصادقة المؤسسات حيث يتوفر.",
          },
          {
            title: "الإدارة المركزية",
            text: "وحدة تحكم أو لوحة سحابية واحدة لكل نقاط الوصول مع المراقبة والتحديثات.",
          },
        ],
        vendorsTitle: "علامات الشبكات اللاسلكية التي نركّبها",
        vendorsText:
          "نركّب الشبكات اللاسلكية المؤسسية والمبدّلات التي تدعمها، ونرشّح المنصة المناسبة لموقعك.",
        whyTitle: "لماذا بيت الأفكار لتركيب شبكات Wi-Fi",
        why: WHY_AR,
        faqTitle: "الأسئلة الشائعة",
        faq: [
          {
            q: "كم نقطة وصول يحتاج مكتبنا؟",
            a: "يعتمد ذلك على المساحة ومواد البناء وعدد الأجهزة المتصلة في الوقت نفسه. يعطي المسح الميداني عدداً دقيقاً، وتحتاج المكاتب المفتوحة وقاعات الاجتماعات عادةً نقاطاً أكثر من الممرات.",
          },
          {
            q: "هل تغطون المستودعات والمساحات الخارجية؟",
            a: "نعم. نصمم للأسقف العالية والأرفف والمساحات الخارجية باستخدام نقاط وصول وطرق تركيب مناسبة.",
          },
          {
            q: "هل توفرون شبكة منفصلة للزوار؟",
            a: "نعم. يحصل الزوار على إنترنت فقط عبر شبكة منفصلة لا تصل إلى أنظمتك الداخلية.",
          },
        ],
        ctaTitle: "اطلب مسحاً لشبكة Wi-Fi",
        ctaText:
          "أخبرنا عن مبناك وعدد الطوابق والمستخدمين، وسنخطط التغطية المناسبة.",
      },
    },
  },

  "structured-cabling": {
    slug: "structured-cabling",
    image: "/images/structured-cabling-1280.webp",
    vendors: [],
    content: {
      en: {
        metaTitle: "Structured Cabling Installation in Saudi Arabia",
        metaDescription:
          "Structured cabling for offices, warehouses and data rooms in Saudi Arabia: copper and fiber, racks, patch panels, labeling, testing and documentation.",
        name: "Structured Cabling",
        h1: "Structured Cabling Installation in Saudi Arabia",
        summary:
          "Thoughts House installs structured cabling for offices, warehouses, schools and data rooms across Saudi Arabia: copper and fiber links, network racks, patch panels, labeling, certification testing and as-built documentation.",
        intro:
          "Every network, Wi-Fi access point and camera depends on the cabling behind it. We plan and install cabling that is neat, labeled, tested and documented, so it supports your network for years and is easy to maintain.",
        offeringsTitle: "What our structured cabling covers",
        offerings: [
          {
            title: "Design and survey",
            text: "Cable routes, outlet positions, rack locations and capacity for growth, agreed before work starts.",
          },
          {
            title: "Copper cabling",
            text: "Category 6 and 6A cabling for desks, access points, cameras and phones.",
          },
          {
            title: "Fiber backbone",
            text: "Fiber links between floors, buildings and racks for high-speed, long-distance connections.",
          },
          {
            title: "Racks and patch panels",
            text: "Network racks, patch panels, cable management and power distribution, installed and dressed neatly.",
          },
          {
            title: "Testing, labeling and documentation",
            text: "Every link tested and labeled, with as-built drawings and test results handed over.",
          },
        ],
        vendorsTitle: "Quality standards",
        vendorsText:
          "We use quality cabling components and follow structured cabling practices for routing, separation, labeling and testing.",
        whyTitle: "Why Thoughts House for structured cabling",
        why: WHY_EN,
        faqTitle: "Frequently asked questions",
        faq: [
          {
            q: "Do you cable new buildings and renovations?",
            a: "Yes. We work on new fit-outs and on upgrades of existing offices, coordinating with your contractor or facility team.",
          },
          {
            q: "Should we choose Cat 6 or Cat 6A?",
            a: "Cat 6 suits most desks and phones. Cat 6A is recommended for Wi-Fi 6/6E/7 access points and links that may need 10 Gbps in the future.",
          },
          {
            q: "Do you provide documentation after installation?",
            a: "Yes. You receive labeled outlets and panels, test results and as-built documentation.",
          },
        ],
        ctaTitle: "Request a cabling survey",
        ctaText:
          "Tell us about your site and number of outlets and we will plan and quote the cabling.",
      },
      ar: {
        metaTitle: "تمديدات الشبكات (Structured Cabling) في السعودية",
        metaDescription:
          "تمديدات الشبكات للمكاتب والمستودعات وغرف البيانات في السعودية: النحاس والألياف الضوئية والخزائن ولوحات التوصيل والترقيم والاختبار والتوثيق.",
        name: "تمديدات الشبكات",
        h1: "تمديدات الشبكات (Structured Cabling) في المملكة العربية السعودية",
        summary:
          "ينفذ بيت الأفكار تمديدات الشبكات للمكاتب والمستودعات والمدارس وغرف البيانات في جميع مناطق المملكة: كابلات نحاسية وألياف ضوئية، وخزائن الشبكات ولوحات التوصيل، والترقيم، واختبارات الاعتماد، والتوثيق النهائي.",
        intro:
          "تعتمد كل شبكة ونقطة وصول وكاميرا على التمديدات التي خلفها. نخطط وننفذ تمديدات مرتبة ومرقّمة ومختبرة وموثقة، لتخدم شبكتك سنوات طويلة وتسهل صيانتها.",
        offeringsTitle: "ماذا تشمل تمديدات الشبكات",
        offerings: [
          {
            title: "التصميم والمسح",
            text: "مسارات الكابلات ومواقع المنافذ والخزائن والسعة المستقبلية، يُتفق عليها قبل بدء العمل.",
          },
          {
            title: "الكابلات النحاسية",
            text: "كابلات Cat 6 وCat 6A للمكاتب ونقاط الوصول والكاميرات والهواتف.",
          },
          {
            title: "العمود الفقري بالألياف الضوئية",
            text: "وصلات ألياف بين الطوابق والمباني والخزائن للاتصالات السريعة والمسافات الطويلة.",
          },
          {
            title: "الخزائن ولوحات التوصيل",
            text: "خزائن الشبكات ولوحات التوصيل وتنظيم الكابلات وتوزيع الطاقة، مركّبة بشكل مرتب.",
          },
          {
            title: "الاختبار والترقيم والتوثيق",
            text: "اختبار كل وصلة وترقيمها، وتسليم المخططات النهائية ونتائج الاختبار.",
          },
        ],
        vendorsTitle: "معايير الجودة",
        vendorsText:
          "نستخدم مكونات تمديدات عالية الجودة ونتّبع ممارسات التمديدات المهيكلة في المسارات والفصل والترقيم والاختبار.",
        whyTitle: "لماذا بيت الأفكار لتمديدات الشبكات",
        why: WHY_AR,
        faqTitle: "الأسئلة الشائعة",
        faq: [
          {
            q: "هل تنفذون التمديدات للمباني الجديدة والتجديدات؟",
            a: "نعم. نعمل في تجهيز المكاتب الجديدة وتحديث المكاتب القائمة بالتنسيق مع المقاول أو فريق المرافق لديك.",
          },
          {
            q: "هل نختار Cat 6 أم Cat 6A؟",
            a: "يناسب Cat 6 معظم المكاتب والهواتف، ويُنصح بـ Cat 6A لنقاط الوصول بمعايير Wi-Fi 6/6E/7 والوصلات التي قد تحتاج 10 جيجابت مستقبلاً.",
          },
          {
            q: "هل تسلّمون توثيقاً بعد التنفيذ؟",
            a: "نعم. تستلم منافذ ولوحات مرقّمة ونتائج الاختبار والمخططات النهائية.",
          },
        ],
        ctaTitle: "اطلب مسحاً للتمديدات",
        ctaText:
          "أخبرنا عن موقعك وعدد المنافذ، وسنخطط التمديدات ونرسل عرض السعر.",
      },
    },
  },

  "cctv-installation": {
    slug: "cctv-installation",
    image: "/images/cctv-installation-1280.webp",
    vendors: [],
    content: {
      en: {
        metaTitle: "CCTV Camera Supply & Installation in Saudi Arabia",
        metaDescription:
          "IP CCTV camera supply and installation for offices, warehouses, schools and shops in Saudi Arabia: design, cabling, recording, remote viewing and maintenance.",
        name: "CCTV Installation",
        h1: "CCTV Camera Supply & Installation in Saudi Arabia",
        summary:
          "Thoughts House supplies and installs IP CCTV systems for offices, warehouses, schools, clinics and shops across Saudi Arabia: camera placement design, cabling and PoE, network video recorders, secure remote viewing and maintenance.",
        intro:
          "A camera system is only useful if it covers the right areas, records reliably and is secure. We design camera coverage around your site, install it on a properly segmented network, and set up recording and remote viewing your team can rely on.",
        offeringsTitle: "What our CCTV installation includes",
        offerings: [
          {
            title: "Coverage design",
            text: "A camera plan for entrances, perimeters, cash points, stores and corridors, choosing the right lens and resolution for each area.",
          },
          {
            title: "Supply and installation",
            text: "IP cameras, mounting, cabling and PoE switching installed neatly and tested.",
          },
          {
            title: "Recording and storage",
            text: "Network video recorders sized for the number of cameras and the retention period you need.",
          },
          {
            title: "Secure remote viewing",
            text: "Viewing on phones and PCs through secure access, with cameras kept on a separate network segment.",
          },
          {
            title: "Maintenance",
            text: "Health checks, firmware updates and recording verification under a maintenance contract.",
          },
        ],
        vendorsTitle: "Equipment",
        vendorsText:
          "We supply professional IP camera systems and recommend the equipment that fits your site, coverage and budget.",
        whyTitle: "Why Thoughts House for CCTV",
        why: WHY_EN,
        faqTitle: "Frequently asked questions",
        faq: [
          {
            q: "How long are recordings kept?",
            a: "Retention depends on the number of cameras, resolution and recorder storage. We size the storage for the retention period you need, or that applies to your sector.",
          },
          {
            q: "Can we watch the cameras from our phones?",
            a: "Yes. We set up secure remote viewing on phones and computers, without exposing the cameras directly to the internet.",
          },
          {
            q: "Can you add cameras to our existing system?",
            a: "Often yes, depending on the recorder and camera models. We assess your current system first.",
          },
        ],
        ctaTitle: "Plan your CCTV system",
        ctaText:
          "Tell us about your site and the areas you need to cover and we will design and quote the system.",
      },
      ar: {
        metaTitle: "توريد وتركيب كاميرات المراقبة في السعودية | بيت الأفكار",
        metaDescription:
          "توريد وتركيب كاميرات المراقبة IP للمكاتب والمستودعات والمدارس والمحلات في السعودية: التصميم والتمديدات والتسجيل والمشاهدة عن بُعد والصيانة.",
        name: "تركيب كاميرات المراقبة",
        h1: "توريد وتركيب كاميرات المراقبة في المملكة العربية السعودية",
        summary:
          "يورّد بيت الأفكار أنظمة كاميرات المراقبة IP ويركّبها للمكاتب والمستودعات والمدارس والعيادات والمحلات في جميع مناطق المملكة: تصميم توزيع الكاميرات، والتمديدات وتغذية PoE، وأجهزة التسجيل الشبكية، والمشاهدة الآمنة عن بُعد، والصيانة.",
        intro:
          "لا يفيد نظام الكاميرات إلا إذا غطى المناطق الصحيحة وسجّل بموثوقية وكان آمناً. نصمم التغطية حسب موقعك، ونركّب النظام على شبكة مفصولة بشكل صحيح، ونُعدّ التسجيل والمشاهدة عن بُعد بما يعتمد عليه فريقك.",
        offeringsTitle: "ماذا يشمل تركيب كاميرات المراقبة",
        offerings: [
          {
            title: "تصميم التغطية",
            text: "مخطط للكاميرات عند المداخل والأسوار ونقاط الدفع والمخازن والممرات، مع اختيار العدسة والدقة المناسبة لكل منطقة.",
          },
          {
            title: "التوريد والتركيب",
            text: "كاميرات IP والتثبيت والتمديدات ومبدّلات PoE، مركّبة بشكل مرتب ومختبرة.",
          },
          {
            title: "التسجيل والتخزين",
            text: "أجهزة تسجيل شبكية بسعة تناسب عدد الكاميرات ومدة الاحتفاظ المطلوبة.",
          },
          {
            title: "المشاهدة الآمنة عن بُعد",
            text: "المشاهدة على الجوال والحاسب عبر وصول آمن، مع إبقاء الكاميرات على شبكة منفصلة.",
          },
          {
            title: "الصيانة",
            text: "فحوصات دورية وتحديث البرامج الثابتة والتحقق من التسجيل ضمن عقد صيانة.",
          },
        ],
        vendorsTitle: "المعدات",
        vendorsText:
          "نورّد أنظمة كاميرات IP احترافية ونرشّح المعدات المناسبة لموقعك والتغطية والميزانية.",
        whyTitle: "لماذا بيت الأفكار لكاميرات المراقبة",
        why: WHY_AR,
        faqTitle: "الأسئلة الشائعة",
        faq: [
          {
            q: "كم مدة الاحتفاظ بالتسجيلات؟",
            a: "تعتمد المدة على عدد الكاميرات والدقة وسعة جهاز التسجيل، ونحدد سعة التخزين حسب مدة الاحتفاظ المطلوبة لك أو لقطاعك.",
          },
          {
            q: "هل يمكننا مشاهدة الكاميرات من الجوال؟",
            a: "نعم. نُعدّ المشاهدة الآمنة عن بُعد على الجوال والحاسب دون كشف الكاميرات مباشرة على الإنترنت.",
          },
          {
            q: "هل يمكنكم إضافة كاميرات إلى نظامنا الحالي؟",
            a: "غالباً نعم حسب طراز جهاز التسجيل والكاميرات، ونبدأ بتقييم نظامك الحالي.",
          },
        ],
        ctaTitle: "خطط لنظام كاميرات المراقبة",
        ctaText:
          "أخبرنا عن موقعك والمناطق المطلوب تغطيتها، وسنصمم النظام ونرسل عرض السعر.",
      },
    },
  },
};
