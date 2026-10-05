/*
 * Dammam landing pages (/<slug>/ and /ar/<slug>/): local-intent pages for the city where the
 * Thoughts House office is, each linking to the matching nationwide service pages.
 */
import type { Language } from "@/seo";
import type { ServiceSlug } from "./services";

export type LocalSlug =
  | "it-company-dammam"
  | "it-support-dammam"
  | "cybersecurity-dammam"
  | "network-solutions-dammam"
  | "it-hardware-supplier-dammam";

interface LocalCopy {
  metaTitle: string;
  metaDescription: string;
  /** Short name for links and breadcrumbs */
  name: string;
  h1: string;
  summary: string;
  intro: string;
  offersTitle: string;
  offers: { title: string; text: string; service: ServiceSlug }[];
  whyTitle: string;
  why: string[];
  faq: { q: string; a: string }[];
}

export interface LocalPage {
  slug: LocalSlug;
  /** Main related service: hero image and share image */
  service: ServiceSlug;
  serviceType: string;
  content: Record<Language, LocalCopy>;
}

/** Nearby cities served from the Dammam office (shown on every local page). */
export const NEARBY: Record<Language, string> = {
  en: "Dammam, Khobar, Dhahran, Qatif, Jubail, Ras Tanura and Al-Ahsa",
  ar: "الدمام، الخبر، الظهران، القطيف، الجبيل، رأس تنورة، الأحساء",
};

export const LOCAL_PAGES: LocalPage[] = [
  {
    slug: "it-company-dammam",
    service: "it-supply",
    serviceType: "IT services and system integration",
    content: {
      en: {
        metaTitle: "IT Company in Dammam | Thoughts House",
        metaDescription:
          "IT company and system integrator in Dammam: cybersecurity, networks, IT supply, cloud & backup and IT support for businesses in the Eastern Province.",
        name: "IT Company in Dammam",
        h1: "IT Company & System Integrator in Dammam",
        summary:
          "Thoughts House is an IT company and system integrator with its office on King Khaled Street in Dammam. We design, supply, install and support IT for businesses in Dammam, Khobar, Dhahran and the rest of the Eastern Province, and serve customers across Saudi Arabia.",
        intro:
          "Businesses in Dammam usually need more than one IT supplier: someone for laptops and servers, someone for the network, someone for security and someone for support. We bring these under one team, so one company is responsible for the design, the equipment, the installation and the support afterwards.",
        offersTitle: "What we do for Dammam businesses",
        offers: [
          {
            title: "Cybersecurity",
            text: "Firewalls, endpoint protection and EDR, email security and NCA ECC alignment.",
            service: "cybersecurity",
          },
          {
            title: "Networks and Wi-Fi",
            text: "Switching, routing, business Wi-Fi and structured cabling for offices, warehouses and plants.",
            service: "network-infrastructure",
          },
          {
            title: "IT hardware and licensing",
            text: "Laptops, desktops, servers, storage and Microsoft licensing from Dell, HP, Lenovo and other leading brands.",
            service: "it-supply",
          },
          {
            title: "Cloud and backup",
            text: "Microsoft 365, Azure, managed backup and disaster recovery.",
            service: "cloud-backup",
          },
          {
            title: "IT support and maintenance",
            text: "Annual maintenance contracts (AMC) with remote and on-site support.",
            service: "it-support-amc",
          },
          {
            title: "CCTV",
            text: "IP camera systems for offices, warehouses and retail sites.",
            service: "cctv-installation",
          },
        ],
        whyTitle: "Why Dammam businesses choose Thoughts House",
        why: [
          "Local team based in Dammam, so site surveys and on-site work in the Eastern Province are easy to schedule.",
          "One partner from design and supply to installation and support.",
          "Supply and support for 25+ technology brands, including Cisco, Sophos, Palo Alto Networks, Dell, HP, Lenovo, Microsoft and Veeam.",
          "500+ organizations served, with 24/7 support coverage.",
        ],
        faq: [
          {
            q: "Where is the Thoughts House office in Dammam?",
            a: "Our office is on King Khaled Street, Al 'Adamah, Dammam 32242. Contact us before visiting so the right engineer is available.",
          },
          {
            q: "Do you only work with companies in Dammam?",
            a: "No. Dammam is our base, and we serve businesses across the Eastern Province and the rest of Saudi Arabia, including Riyadh and Jeddah.",
          },
          {
            q: "What size of company do you work with?",
            a: "We work with small and mid-sized businesses as well as larger organizations with several sites.",
          },
        ],
      },
      ar: {
        metaTitle: "شركة تقنية معلومات في الدمام | بيت الأفكار",
        metaDescription:
          "بيت الأفكار شركة تقنية معلومات وتكامل أنظمة في الدمام: أمن سيبراني، شبكات، توريد أجهزة، حلول سحابية ونسخ احتياطي، ودعم فني لشركات المنطقة الشرقية.",
        name: "شركة تقنية معلومات في الدمام",
        h1: "شركة تقنية معلومات وتكامل أنظمة في الدمام",
        summary:
          "بيت الأفكار شركة تقنية معلومات وتكامل أنظمة مقرّها شارع الملك خالد في الدمام. نصمم ونورّد وننفذ وندعم أنظمة تقنية المعلومات للشركات في الدمام والخبر والظهران وبقية المنطقة الشرقية، ونخدم العملاء في جميع مناطق المملكة.",
        intro:
          "تحتاج الشركات في الدمام عادةً إلى أكثر من مورّد: واحد للأجهزة والسيرفرات، وآخر للشبكات، وثالث للحماية، ورابع للدعم. نحن نجمعها في فريق واحد، فتكون جهة واحدة مسؤولة عن التصميم والأجهزة والتركيب والدعم بعد التشغيل.",
        offersTitle: "ما نقدمه للشركات في الدمام",
        offers: [
          {
            title: "الأمن السيبراني",
            text: "جدران الحماية، وحماية الأجهزة وEDR، وحماية البريد، والتوافق مع الضوابط الأساسية للأمن السيبراني.",
            service: "cybersecurity",
          },
          {
            title: "الشبكات وWi-Fi",
            text: "السويتشات والراوترات وشبكات Wi-Fi والتمديدات للمكاتب والمستودعات والمصانع.",
            service: "network-infrastructure",
          },
          {
            title: "توريد الأجهزة والتراخيص",
            text: "حواسيب وسيرفرات وأنظمة تخزين وتراخيص Microsoft من Dell وHP وLenovo وغيرها.",
            service: "it-supply",
          },
          {
            title: "الحلول السحابية والنسخ الاحتياطي",
            text: "Microsoft 365 وAzure والنسخ الاحتياطي المُدار والتعافي من الكوارث.",
            service: "cloud-backup",
          },
          {
            title: "الدعم الفني والصيانة",
            text: "عقود صيانة سنوية بدعم عن بُعد وفي الموقع.",
            service: "it-support-amc",
          },
          {
            title: "كاميرات المراقبة",
            text: "أنظمة كاميرات IP للمكاتب والمستودعات والمحلات.",
            service: "cctv-installation",
          },
        ],
        whyTitle: "لماذا تختار شركات الدمام بيت الأفكار",
        why: [
          "فريق محلي في الدمام، فيسهل جدولة المسح الميداني والعمل في الموقع داخل المنطقة الشرقية.",
          "شريك واحد من التصميم والتوريد إلى التركيب والدعم.",
          "توريد ودعم لأكثر من 25 علامة تقنية، منها Cisco وSophos وPalo Alto Networks وDell وHP وLenovo وMicrosoft وVeeam.",
          "أكثر من 500 منشأة خدمناها، مع تغطية دعم على مدار الساعة.",
        ],
        faq: [
          {
            q: "أين يقع مكتب بيت الأفكار في الدمام؟",
            a: "مكتبنا في شارع الملك خالد، حي العدامة، الدمام 32242. تواصل معنا قبل الزيارة ليكون المهندس المناسب متاحاً.",
          },
          {
            q: "هل تعملون مع الشركات في الدمام فقط؟",
            a: "لا. الدمام مقرّنا، ونخدم الشركات في المنطقة الشرقية وجميع مناطق المملكة، ومنها الرياض وجدة.",
          },
          {
            q: "ما حجم الشركات التي تعملون معها؟",
            a: "نعمل مع الشركات الصغيرة والمتوسطة ومع المنشآت الأكبر متعددة الفروع.",
          },
        ],
      },
    },
  },
  {
    slug: "it-support-dammam",
    service: "it-support-amc",
    serviceType: "Managed IT services and IT support",
    content: {
      en: {
        metaTitle: "IT Support & Managed IT Services in Dammam",
        metaDescription:
          "IT support and managed IT services in Dammam: annual maintenance contracts, helpdesk, on-site visits, monitoring, patching and backup checks for businesses.",
        name: "IT Support in Dammam",
        h1: "IT Support & Managed IT Services in Dammam",
        summary:
          "Thoughts House provides IT support and managed IT services to businesses in Dammam, Khobar and Dhahran, through annual maintenance contracts that combine a helpdesk, remote support, on-site visits and proactive maintenance.",
        intro:
          "Many small and mid-sized companies in Dammam do not have a full IT team, or have one person who cannot cover everything. An IT support contract gives you a team to call, regular maintenance so problems are prevented, and engineers who know your setup.",
        offersTitle: "What our IT support covers",
        offers: [
          {
            title: "Helpdesk and remote support",
            text: "Help for users with laptops, email, printers, access and everyday issues.",
            service: "it-support-amc",
          },
          {
            title: "On-site visits",
            text: "Engineers on site in Dammam and nearby cities for hardware, network and installation work.",
            service: "it-support-amc",
          },
          {
            title: "Preventive maintenance",
            text: "Patching, monitoring and health checks for servers, firewalls and network devices.",
            service: "network-infrastructure",
          },
          {
            title: "Backup checks",
            text: "Monitoring of backup jobs and regular restore tests.",
            service: "cloud-backup",
          },
          {
            title: "Security upkeep",
            text: "Firewall and endpoint protection updates, and review of security alerts.",
            service: "cybersecurity",
          },
          {
            title: "Procurement and renewals",
            text: "Supply of replacement devices and tracking of license and warranty renewals.",
            service: "it-supply",
          },
        ],
        whyTitle: "Why choose us for IT support in Dammam",
        why: [
          "Engineers based in Dammam who can come on site when remote support is not enough.",
          "24/7 support coverage for critical systems.",
          "Contracts sized to your business, from a single office to several branches.",
          "The same team that can design and supply your next upgrade.",
        ],
        faq: [
          {
            q: "What is an IT annual maintenance contract (AMC)?",
            a: "A yearly agreement where an IT company supports and maintains your systems: helpdesk, on-site visits, preventive maintenance and agreed response times.",
          },
          {
            q: "Do you provide on-site IT support in Khobar and Dhahran?",
            a: "Yes. Our team is based in Dammam and supports businesses on site in Khobar, Dhahran, Qatif and other nearby cities.",
          },
          {
            q: "Can you support equipment we bought from another supplier?",
            a: "Yes. We start with an assessment of your current systems and then support them under the contract.",
          },
        ],
      },
      ar: {
        metaTitle: "دعم فني للشركات في الدمام | بيت الأفكار",
        metaDescription:
          "دعم فني وخدمات تقنية معلومات مُدارة للشركات في الدمام: عقود صيانة سنوية، ودعم عن بُعد، وزيارات ميدانية، ومراقبة وتحديثات وفحص النسخ الاحتياطية.",
        name: "الدعم الفني في الدمام",
        h1: "دعم فني وخدمات تقنية معلومات مُدارة في الدمام",
        summary:
          "يقدم بيت الأفكار الدعم الفني وخدمات تقنية المعلومات المُدارة للشركات في الدمام والخبر والظهران، عبر عقود صيانة سنوية تجمع الدعم عن بُعد والزيارات الميدانية والصيانة الوقائية.",
        intro:
          "كثير من الشركات الصغيرة والمتوسطة في الدمام لا تملك فريق تقنية معلومات كاملاً، أو لديها موظف واحد لا يستطيع تغطية كل شيء. يمنحك عقد الدعم الفني فريقاً تتصل به، وصيانة منتظمة تمنع المشكلات، ومهندسين يعرفون أنظمتك.",
        offersTitle: "ما يشمله الدعم الفني",
        offers: [
          {
            title: "مكتب المساعدة والدعم عن بُعد",
            text: "مساعدة المستخدمين في الحواسيب والبريد والطابعات والصلاحيات والمشكلات اليومية.",
            service: "it-support-amc",
          },
          {
            title: "الزيارات الميدانية",
            text: "مهندسون في الموقع بالدمام والمدن القريبة لأعمال الأجهزة والشبكات والتركيب.",
            service: "it-support-amc",
          },
          {
            title: "الصيانة الوقائية",
            text: "تحديثات ومراقبة وفحوصات دورية للسيرفرات وجدران الحماية وأجهزة الشبكة.",
            service: "network-infrastructure",
          },
          {
            title: "فحص النسخ الاحتياطية",
            text: "مراقبة مهام النسخ واختبارات استعادة دورية.",
            service: "cloud-backup",
          },
          {
            title: "متابعة الحماية",
            text: "تحديث جدران الحماية وحماية الأجهزة ومراجعة التنبيهات الأمنية.",
            service: "cybersecurity",
          },
          {
            title: "التوريد والتجديدات",
            text: "توريد الأجهزة البديلة ومتابعة تجديد التراخيص والضمانات.",
            service: "it-supply",
          },
        ],
        whyTitle: "لماذا تختارنا للدعم الفني في الدمام",
        why: [
          "مهندسون في الدمام يحضرون إلى الموقع عندما لا يكفي الدعم عن بُعد.",
          "تغطية دعم على مدار الساعة للأنظمة الحرجة.",
          "عقود بحجم منشأتك، من مكتب واحد إلى عدة فروع.",
          "الفريق نفسه يصمم ويورّد التحديث القادم لأنظمتك.",
        ],
        faq: [
          {
            q: "ما هو عقد الصيانة السنوي لتقنية المعلومات؟",
            a: "اتفاقية سنوية تتولى فيها شركة تقنية المعلومات دعم أنظمتك وصيانتها: دعم عن بُعد، وزيارات ميدانية، وصيانة وقائية، وأوقات استجابة متفق عليها.",
          },
          {
            q: "هل تقدمون دعماً فنياً في الموقع بالخبر والظهران؟",
            a: "نعم. فريقنا في الدمام ويدعم الشركات في مواقعها بالخبر والظهران والقطيف والمدن القريبة.",
          },
          {
            q: "هل تدعمون أجهزة اشتريناها من مورّد آخر؟",
            a: "نعم. نبدأ بتقييم أنظمتك الحالية ثم ندعمها ضمن العقد.",
          },
        ],
      },
    },
  },
  {
    slug: "cybersecurity-dammam",
    service: "cybersecurity",
    serviceType: "Cybersecurity services",
    content: {
      en: {
        metaTitle: "Cybersecurity Company in Dammam | Thoughts House",
        metaDescription:
          "Cybersecurity company in Dammam: firewalls, endpoint protection and EDR, email security, security assessments and NCA ECC and PDPL support for local businesses.",
        name: "Cybersecurity in Dammam",
        h1: "Cybersecurity Company in Dammam",
        summary:
          "Thoughts House is a cybersecurity company in Dammam that protects businesses in the Eastern Province with firewalls, endpoint protection and EDR, email security, security assessments and support for NCA ECC and PDPL requirements.",
        intro:
          "Ransomware and phishing affect companies of every size in the Eastern Province, from offices in Khobar to plants in Jubail. We help you put the right controls in place, configure them properly and keep them up to date.",
        offersTitle: "Cybersecurity services in Dammam",
        offers: [
          {
            title: "Firewall installation",
            text: "Sophos, Palo Alto Networks, Check Point and Cisco firewalls, with VPN and reviewed policies.",
            service: "firewall-installation",
          },
          {
            title: "Endpoint protection and EDR",
            text: "Protection for laptops and servers, with detection and response and optional 24/7 MDR.",
            service: "cybersecurity",
          },
          {
            title: "Email security",
            text: "Protection against phishing, spoofing and malicious attachments.",
            service: "cybersecurity",
          },
          {
            title: "Security assessments",
            text: "Gap assessments against the NCA Essential Cybersecurity Controls and PDPL technical requirements.",
            service: "cybersecurity",
          },
          {
            title: "Ransomware-resistant backup",
            text: "Immutable and offsite backups with regular restore tests.",
            service: "cloud-backup",
          },
        ],
        whyTitle: "Why choose Thoughts House for cybersecurity in Dammam",
        why: [
          "Local engineers for on-site firewall and network work across the Eastern Province.",
          "Experience with Saudi requirements such as NCA ECC and PDPL.",
          "Supply, configuration and support for leading security vendors.",
          "Practical, prioritized recommendations that fit your budget.",
        ],
        faq: [
          {
            q: "Which firewall brands do you install in Dammam?",
            a: "We supply and configure firewalls from Sophos, Palo Alto Networks, Check Point and Cisco, and recommend a model based on your users, internet bandwidth and features needed.",
          },
          {
            q: "Can you help us comply with the NCA Essential Cybersecurity Controls?",
            a: "Yes. We run gap assessments against the ECC and implement the technical controls, such as firewalls, MFA, endpoint protection, logging and backup.",
          },
          {
            q: "Do you offer 24/7 security monitoring?",
            a: "Yes, through managed detection and response (MDR) services built on EDR and XDR platforms.",
          },
        ],
      },
      ar: {
        metaTitle: "شركة أمن سيبراني في الدمام | بيت الأفكار",
        metaDescription:
          "شركة أمن سيبراني في الدمام: جدران الحماية، وحماية الأجهزة وEDR، وحماية البريد، وتقييم الأمن، ودعم الامتثال لضوابط الهيئة الوطنية ونظام حماية البيانات.",
        name: "الأمن السيبراني في الدمام",
        h1: "شركة أمن سيبراني في الدمام",
        summary:
          "بيت الأفكار شركة أمن سيبراني في الدمام تحمي الشركات في المنطقة الشرقية بجدران الحماية، وحماية الأجهزة وEDR، وحماية البريد الإلكتروني، وتقييم الأمن، ودعم متطلبات الضوابط الأساسية للأمن السيبراني ونظام حماية البيانات الشخصية.",
        intro:
          "تطال برامج الفدية والتصيد الشركات بمختلف أحجامها في المنطقة الشرقية، من المكاتب في الخبر إلى المصانع في الجبيل. نساعدك على تطبيق الضوابط المناسبة وإعدادها بشكل صحيح وإبقائها محدّثة.",
        offersTitle: "خدمات الأمن السيبراني في الدمام",
        offers: [
          {
            title: "تركيب جدران الحماية",
            text: "جدران حماية Sophos وPalo Alto Networks وCheck Point وCisco، مع VPN وسياسات مراجعة.",
            service: "firewall-installation",
          },
          {
            title: "حماية الأجهزة وEDR",
            text: "حماية الحواسيب والخوادم بالكشف والاستجابة، مع خدمة MDR على مدار الساعة عند الحاجة.",
            service: "cybersecurity",
          },
          {
            title: "حماية البريد الإلكتروني",
            text: "الحماية من التصيد والانتحال والمرفقات الضارة.",
            service: "cybersecurity",
          },
          {
            title: "تقييم الأمن",
            text: "تقييم الفجوات وفق الضوابط الأساسية للأمن السيبراني والمتطلبات التقنية لنظام حماية البيانات الشخصية.",
            service: "cybersecurity",
          },
          {
            title: "نسخ احتياطي مقاوم لبرامج الفدية",
            text: "نسخ غير قابلة للتعديل وخارج الموقع مع اختبارات استعادة دورية.",
            service: "cloud-backup",
          },
        ],
        whyTitle: "لماذا تختار بيت الأفكار للأمن السيبراني في الدمام",
        why: [
          "مهندسون محليون لأعمال جدران الحماية والشبكات في الموقع بالمنطقة الشرقية.",
          "خبرة بالمتطلبات السعودية مثل الضوابط الأساسية للأمن السيبراني ونظام حماية البيانات الشخصية.",
          "توريد وإعداد ودعم لحلول أبرز شركات الأمن.",
          "توصيات عملية مرتبة حسب الأولوية وتناسب ميزانيتك.",
        ],
        faq: [
          {
            q: "ما علامات جدران الحماية التي تركّبونها في الدمام؟",
            a: "نورّد ونعدّ جدران حماية Sophos وPalo Alto Networks وCheck Point وCisco، ونوصي بالطراز المناسب حسب عدد المستخدمين وسرعة الإنترنت والمزايا المطلوبة.",
          },
          {
            q: "هل تساعدوننا على الامتثال للضوابط الأساسية للأمن السيبراني؟",
            a: "نعم. نجري تقييم الفجوات وفق الضوابط وننفذ الضوابط التقنية مثل جدران الحماية والتحقق متعدد العوامل وحماية الأجهزة والسجلات والنسخ الاحتياطي.",
          },
          {
            q: "هل تقدمون مراقبة أمنية على مدار الساعة؟",
            a: "نعم، عبر خدمات الكشف والاستجابة المُدارة (MDR) المبنية على منصات EDR وXDR.",
          },
        ],
      },
    },
  },
  {
    slug: "network-solutions-dammam",
    service: "network-infrastructure",
    serviceType: "Network installation and infrastructure",
    content: {
      en: {
        metaTitle: "Network Solutions & Installation in Dammam",
        metaDescription:
          "Network company in Dammam: network design and installation, switching, business Wi-Fi, structured cabling and firewalls for offices, warehouses and plants.",
        name: "Network Solutions in Dammam",
        h1: "Network Solutions & Installation in Dammam",
        summary:
          "Thoughts House designs and installs business networks in Dammam and the Eastern Province: switching and routing, business Wi-Fi, structured cabling, firewalls and network upgrades for offices, warehouses and industrial sites.",
        intro:
          "A slow or unreliable network affects every system in the business. Whether you are fitting out a new office in Dammam, adding Wi-Fi to a warehouse in the Second Industrial City or upgrading an old network, we survey the site, design the network and install it end to end.",
        offersTitle: "Network services in Dammam",
        offers: [
          {
            title: "Network design and switching",
            text: "Core and access switching, VLANs, routing and redundancy, with Cisco and other leading vendors.",
            service: "network-infrastructure",
          },
          {
            title: "Business Wi-Fi",
            text: "Site surveys, access point installation, guest networks and central management.",
            service: "wifi-installation",
          },
          {
            title: "Structured cabling",
            text: "Cat6 and Cat6A copper, fiber backbones, racks, labelling and testing.",
            service: "structured-cabling",
          },
          {
            title: "Firewalls and secure connectivity",
            text: "Firewalls, site-to-site VPN and secure remote access.",
            service: "firewall-installation",
          },
          {
            title: "Network support",
            text: "Monitoring, maintenance and troubleshooting under a support contract.",
            service: "it-support-amc",
          },
        ],
        whyTitle: "Why choose us for networking in Dammam",
        why: [
          "On-site surveys and installation by a team based in Dammam.",
          "One contractor for cabling, switching, Wi-Fi and security.",
          "Documented, labelled and tested installations.",
          "Support after go-live, so the network keeps running.",
        ],
        faq: [
          {
            q: "Do you install structured cabling in Dammam?",
            a: "Yes. We install copper and fiber cabling, racks and patch panels, and test and label every link.",
          },
          {
            q: "Can you fix poor Wi-Fi coverage in our office or warehouse?",
            a: "Yes. We survey the site, find the cause, such as access point placement or interference, and redesign coverage where needed.",
          },
          {
            q: "Do you work on industrial sites in Jubail?",
            a: "Yes. We serve industrial and logistics sites across the Eastern Province, including Jubail.",
          },
        ],
      },
      ar: {
        metaTitle: "شركة شبكات في الدمام | بيت الأفكار",
        metaDescription:
          "شركة شبكات في الدمام: تصميم وتركيب الشبكات، والسويتشات، وشبكات Wi-Fi للشركات، وتمديدات الشبكات، وجدران الحماية للمكاتب والمستودعات والمصانع.",
        name: "حلول الشبكات في الدمام",
        h1: "حلول وتركيب الشبكات في الدمام",
        summary:
          "يصمم بيت الأفكار وينفذ شبكات الشركات في الدمام والمنطقة الشرقية: السويتشات والتوجيه، وشبكات Wi-Fi، وتمديدات الشبكات، وجدران الحماية، وتحديث الشبكات للمكاتب والمستودعات والمواقع الصناعية.",
        intro:
          "الشبكة البطيئة أو غير المستقرة تؤثر على كل أنظمة العمل. سواء كنت تجهّز مكتباً جديداً في الدمام، أو تضيف Wi-Fi لمستودع في المدينة الصناعية الثانية، أو تحدّث شبكة قديمة، نمسح الموقع ونصمم الشبكة وننفذها بالكامل.",
        offersTitle: "خدمات الشبكات في الدمام",
        offers: [
          {
            title: "تصميم الشبكات والسويتشات",
            text: "سويتشات أساسية وطرفية، وشبكات VLAN، وتوجيه، واحتياطية، مع Cisco وغيرها من الشركات الرائدة.",
            service: "network-infrastructure",
          },
          {
            title: "شبكات Wi-Fi للشركات",
            text: "مسح الموقع، وتركيب نقاط الوصول، وشبكات الزوار، والإدارة المركزية.",
            service: "wifi-installation",
          },
          {
            title: "تمديدات الشبكات",
            text: "كابلات Cat6 وCat6A، وألياف ضوئية، وكبائن، وترقيم واختبار.",
            service: "structured-cabling",
          },
          {
            title: "جدران الحماية والاتصال الآمن",
            text: "جدران حماية، وVPN بين الفروع، ووصول آمن عن بُعد.",
            service: "firewall-installation",
          },
          {
            title: "دعم الشبكات",
            text: "مراقبة وصيانة ومعالجة الأعطال ضمن عقد دعم.",
            service: "it-support-amc",
          },
        ],
        whyTitle: "لماذا تختارنا لشبكات شركتك في الدمام",
        why: [
          "مسح وتركيب في الموقع بفريق مقرّه الدمام.",
          "مقاول واحد للتمديدات والسويتشات وWi-Fi والحماية.",
          "تركيبات موثقة ومرقّمة ومختبرة.",
          "دعم بعد التشغيل لتبقى الشبكة تعمل.",
        ],
        faq: [
          {
            q: "هل تنفذون تمديدات الشبكات في الدمام؟",
            a: "نعم. ننفذ تمديدات النحاس والألياف الضوئية والكبائن ولوحات التوصيل، ونختبر ونرقّم كل نقطة.",
          },
          {
            q: "هل يمكنكم حل ضعف تغطية Wi-Fi في مكتبنا أو مستودعنا؟",
            a: "نعم. نمسح الموقع ونحدد السبب، مثل أماكن نقاط الوصول أو التداخل، ونعيد تصميم التغطية عند الحاجة.",
          },
          {
            q: "هل تعملون في المواقع الصناعية بالجبيل؟",
            a: "نعم. نخدم المواقع الصناعية واللوجستية في جميع أنحاء المنطقة الشرقية، ومنها الجبيل.",
          },
        ],
      },
    },
  },
  {
    slug: "it-hardware-supplier-dammam",
    service: "it-supply",
    serviceType: "IT hardware and software supply",
    content: {
      en: {
        metaTitle: "IT Hardware Supplier in Dammam | Thoughts House",
        metaDescription:
          "IT hardware supplier in Dammam: business laptops, desktops, servers, storage, network equipment and Microsoft licenses from Dell, HP, Lenovo, Cisco and more.",
        name: "IT Hardware Supplier in Dammam",
        h1: "IT Hardware Supplier in Dammam",
        summary:
          "Thoughts House supplies IT hardware and software to businesses in Dammam and the Eastern Province: business laptops and desktops, servers and storage, network and security equipment, and Microsoft licensing, from Dell, HP, Lenovo, Cisco and other leading brands.",
        intro:
          "Buying IT equipment is easier when the supplier also understands how it will be used. We help you choose the right specifications, supply the equipment, and can install, configure and support it.",
        offersTitle: "What we supply in Dammam",
        offers: [
          {
            title: "Laptops and desktops",
            text: "Business laptops, desktops and workstations from Dell, HP, Lenovo and Apple.",
            service: "it-supply",
          },
          {
            title: "Servers and storage",
            text: "Rack and tower servers, NAS and SAN storage, sized for your workloads.",
            service: "it-supply",
          },
          {
            title: "Network and security equipment",
            text: "Switches, access points and firewalls from Cisco, Sophos, Palo Alto Networks and others.",
            service: "network-infrastructure",
          },
          {
            title: "Software licensing",
            text: "Microsoft 365, Windows, Windows Server, security and backup licenses, with renewals tracked.",
            service: "it-supply",
          },
          {
            title: "Installation and support",
            text: "Setup, deployment and ongoing support for everything we supply.",
            service: "it-support-amc",
          },
        ],
        whyTitle: "Why buy IT equipment from Thoughts House",
        why: [
          "Help choosing specifications, so you do not overpay or under-buy.",
          "25+ technology brands from one supplier.",
          "Local delivery and installation in Dammam, Khobar and Dhahran, and supply across Saudi Arabia.",
          "Support after the sale, including warranty and license renewals.",
        ],
        faq: [
          {
            q: "Which brands do you supply in Dammam?",
            a: "Dell, HP, Lenovo, Apple, Cisco, Sophos, Palo Alto Networks, Microsoft, Veeam and more than 25 technology brands in total.",
          },
          {
            q: "Do you supply both hardware and licenses?",
            a: "Yes. We supply hardware, Microsoft and security licenses, and backup software, and can install and support them.",
          },
          {
            q: "How do I get a quotation?",
            a: "Send us your requirements through the contact form, by email or on WhatsApp, and we will reply with a quotation.",
          },
        ],
      },
      ar: {
        metaTitle: "توريد أجهزة كمبيوتر وسيرفرات للشركات في الدمام",
        metaDescription:
          "مورّد أجهزة تقنية معلومات في الدمام: حواسيب للشركات، وسيرفرات، وأنظمة تخزين، وأجهزة شبكات، وتراخيص Microsoft من Dell وHP وLenovo وCisco وغيرها.",
        name: "توريد أجهزة تقنية المعلومات في الدمام",
        h1: "توريد أجهزة تقنية المعلومات للشركات في الدمام",
        summary:
          "يورّد بيت الأفكار أجهزة وبرمجيات تقنية المعلومات للشركات في الدمام والمنطقة الشرقية: حواسيب محمولة ومكتبية، وسيرفرات وأنظمة تخزين، وأجهزة شبكات وحماية، وتراخيص Microsoft، من Dell وHP وLenovo وCisco وغيرها من العلامات الرائدة.",
        intro:
          "شراء الأجهزة أسهل عندما يفهم المورّد كيف ستُستخدم. نساعدك على اختيار المواصفات المناسبة، ونورّد الأجهزة، ويمكننا تركيبها وإعدادها ودعمها.",
        offersTitle: "ما نورّده في الدمام",
        offers: [
          {
            title: "الحواسيب المحمولة والمكتبية",
            text: "حواسيب للأعمال ومحطات عمل من Dell وHP وLenovo وApple.",
            service: "it-supply",
          },
          {
            title: "السيرفرات وأنظمة التخزين",
            text: "سيرفرات رف وبرج، وأنظمة تخزين NAS وSAN، بمواصفات تناسب أعمالك.",
            service: "it-supply",
          },
          {
            title: "أجهزة الشبكات والحماية",
            text: "سويتشات ونقاط وصول وجدران حماية من Cisco وSophos وPalo Alto Networks وغيرها.",
            service: "network-infrastructure",
          },
          {
            title: "تراخيص البرمجيات",
            text: "تراخيص Microsoft 365 وWindows وWindows Server والحماية والنسخ الاحتياطي، مع متابعة التجديد.",
            service: "it-supply",
          },
          {
            title: "التركيب والدعم",
            text: "التجهيز والتشغيل والدعم المستمر لكل ما نورّده.",
            service: "it-support-amc",
          },
        ],
        whyTitle: "لماذا تشتري أجهزتك من بيت الأفكار",
        why: [
          "مساعدة في اختيار المواصفات، فلا تدفع أكثر من حاجتك ولا تشتري أقل منها.",
          "أكثر من 25 علامة تقنية من مورّد واحد.",
          "توصيل وتركيب في الدمام والخبر والظهران، وتوريد لجميع مناطق المملكة.",
          "دعم بعد البيع، يشمل متابعة تجديد الضمانات والتراخيص.",
        ],
        faq: [
          {
            q: "ما العلامات التي تورّدونها في الدمام؟",
            a: "Dell وHP وLenovo وApple وCisco وSophos وPalo Alto Networks وMicrosoft وVeeam، وأكثر من 25 علامة تقنية إجمالاً.",
          },
          {
            q: "هل تورّدون الأجهزة والتراخيص معاً؟",
            a: "نعم. نورّد الأجهزة وتراخيص Microsoft والحماية وبرامج النسخ الاحتياطي، ويمكننا تركيبها ودعمها.",
          },
          {
            q: "كيف أحصل على عرض سعر؟",
            a: "أرسل احتياجاتك عبر نموذج التواصل أو البريد الإلكتروني أو واتساب، وسنرد عليك بعرض سعر.",
          },
        ],
      },
    },
  },
];

export function getLocalPage(slug: LocalSlug) {
  const page = LOCAL_PAGES.find(p => p.slug === slug);
  if (!page) throw new Error(`Unknown local page: ${slug}`);
  return page;
}
