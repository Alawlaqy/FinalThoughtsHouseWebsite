/*
 * Content for the dedicated service pages (/services/<slug>/ and /ar/services/<slug>/).
 * Each service has English and Arabic copy plus SEO metadata.
 */
import type { Language } from "@/seo";

export type ServiceSlug =
  | "cybersecurity"
  | "network-infrastructure"
  | "cloud-backup"
  | "it-supply";

export const SERVICE_SLUGS: ServiceSlug[] = [
  "cybersecurity",
  "network-infrastructure",
  "cloud-backup",
  "it-supply",
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
        metaTitle: "Cybersecurity Solutions in Saudi Arabia | Thoughts House",
        metaDescription:
          "Endpoint protection, next-generation firewalls, network security monitoring, threat detection and security assessments for businesses in Dammam and across Saudi Arabia.",
        name: "Cybersecurity",
        h1: "Cybersecurity Solutions in Saudi Arabia",
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
        metaTitle: "حلول الأمن السيبراني في السعودية | بيت الأفكار",
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
        metaTitle:
          "Network Infrastructure Solutions in Saudi Arabia | Thoughts House",
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
        metaTitle: "Cloud & Backup Solutions in Saudi Arabia | Thoughts House",
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
        metaTitle:
          "IT Hardware Supplier & Reseller in Dammam, Saudi Arabia | Thoughts House",
        metaDescription:
          "Supply of servers, storage, network and security appliances, laptops, workstations and software licenses from leading brands — with sizing, delivery and installation in Saudi Arabia.",
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
        metaTitle:
          "توريد أجهزة وسيرفرات وتراخيص تقنية المعلومات في الدمام | بيت الأفكار",
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
};
