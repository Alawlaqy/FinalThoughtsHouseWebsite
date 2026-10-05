/*
 * Brand supply pages (/brands/<slug>/ and /ar/brands/<slug>/): what Thoughts House supplies,
 * installs and supports from each manufacturer. Uses "supply / install / support" wording —
 * official partnership tiers are not claimed.
 */
import type { Language } from "@/seo";
import type { ServiceSlug } from "./services";

export type BrandSlug =
  | "dell"
  | "hp"
  | "lenovo"
  | "cisco"
  | "sophos"
  | "microsoft"
  | "palo-alto-networks"
  | "veeam";

interface BrandPageCopy {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  summary: string;
  intro: string;
  linesTitle: string;
  lines: { title: string; text: string }[];
  faq: { q: string; a: string }[];
}

export interface BrandPage {
  slug: BrandSlug;
  /** Name as used in the partner logo list */
  name: string;
  services: ServiceSlug[];
  content: Record<Language, BrandPageCopy>;
}

const EN_LINES_TITLE = (b: string) => `${b} products we supply`;
const AR_LINES_TITLE = (b: string) => `منتجات ${b} التي نورّدها`;

export const BRAND_PAGES: BrandPage[] = [
  {
    slug: "dell",
    name: "Dell",
    services: ["it-supply", "cloud-backup", "it-support-amc"],
    content: {
      en: {
        metaTitle: "Dell Servers, Laptops & Storage Supplier in Saudi Arabia",
        metaDescription:
          "Dell PowerEdge servers, storage, Latitude laptops, OptiPlex desktops and Precision workstations supplied across Saudi Arabia, with installation and support.",
        h1: "Dell Servers, Laptops & Storage Supplier in Saudi Arabia",
        summary:
          "Thoughts House supplies Dell PowerEdge servers, Dell storage, Latitude laptops, OptiPlex desktops and Precision workstations to organizations across Saudi Arabia, and sizes, installs and supports them.",
        intro:
          "From a single server to a full office refresh, we help you choose the right Dell models, supply them to your sites and set them up so they are ready to use.",
        linesTitle: EN_LINES_TITLE("Dell"),
        lines: [
          {
            title: "PowerEdge servers",
            text: "Rack and tower servers for virtualization, file, database and application workloads.",
          },
          {
            title: "Storage",
            text: "Dell storage systems for shared storage, virtualization and backup targets.",
          },
          {
            title: "Latitude laptops",
            text: "Business laptops for office and mobile staff.",
          },
          {
            title: "OptiPlex desktops",
            text: "Reliable desktops for offices, front desks and labs.",
          },
          {
            title: "Precision workstations",
            text: "High-performance workstations for engineering, design and data work.",
          },
        ],
        faq: [
          {
            q: "Do you supply Dell servers in Saudi Arabia?",
            a: "Yes. We supply Dell PowerEdge servers and storage to organizations across Saudi Arabia, and can size, install and configure them.",
          },
          {
            q: "Can you install and maintain the Dell equipment you supply?",
            a: "Yes. We deliver, install and configure Dell equipment, and can cover it under an IT maintenance contract.",
          },
        ],
      },
      ar: {
        metaTitle: "توريد سيرفرات وأجهزة Dell في السعودية | بيت الأفكار",
        metaDescription:
          "توريد سيرفرات Dell PowerEdge وأنظمة التخزين وأجهزة Latitude المحمولة وOptiPlex المكتبية ومحطات Precision في السعودية، مع اختيار المواصفات والتركيب والدعم.",
        h1: "توريد سيرفرات وأجهزة وأنظمة تخزين Dell في السعودية",
        summary:
          "يورّد بيت الأفكار سيرفرات Dell PowerEdge وأنظمة تخزين Dell وأجهزة Latitude المحمولة وOptiPlex المكتبية ومحطات عمل Precision للمنشآت في جميع مناطق المملكة، ويحدد مواصفاتها ويركّبها ويدعمها.",
        intro:
          "من سيرفر واحد إلى تحديث أجهزة مكتب كامل، نساعدك في اختيار طرازات Dell المناسبة، ونوصلها إلى مواقعك ونجهّزها لتكون جاهزة للاستخدام.",
        linesTitle: AR_LINES_TITLE("Dell"),
        lines: [
          {
            title: "سيرفرات PowerEdge",
            text: "سيرفرات بأنواعها للافتراضية والملفات وقواعد البيانات والتطبيقات.",
          },
          {
            title: "أنظمة التخزين",
            text: "أنظمة تخزين Dell للتخزين المشترك والافتراضية ووجهات النسخ الاحتياطي.",
          },
          {
            title: "أجهزة Latitude المحمولة",
            text: "حواسيب محمولة للأعمال للموظفين في المكتب وخارجه.",
          },
          {
            title: "أجهزة OptiPlex المكتبية",
            text: "حواسيب مكتبية موثوقة للمكاتب والاستقبال والمعامل.",
          },
          {
            title: "محطات عمل Precision",
            text: "محطات عمل عالية الأداء للهندسة والتصميم وتحليل البيانات.",
          },
        ],
        faq: [
          {
            q: "هل تورّدون سيرفرات Dell في السعودية؟",
            a: "نعم. نورّد سيرفرات Dell PowerEdge وأنظمة التخزين للمنشآت في جميع مناطق المملكة، ويمكننا تحديد مواصفاتها وتركيبها وإعدادها.",
          },
          {
            q: "هل تركّبون أجهزة Dell التي تورّدونها وتصونونها؟",
            a: "نعم. نوصل أجهزة Dell ونركّبها ونُعدّها، ويمكن تغطيتها بعقد صيانة لتقنية المعلومات.",
          },
        ],
      },
    },
  },
  {
    slug: "hp",
    name: "HP",
    services: ["it-supply", "it-support-amc"],
    content: {
      en: {
        metaTitle: "HP Laptops, Desktops & Printers Supplier in Saudi Arabia",
        metaDescription:
          "Supply of HP EliteBook and ProBook laptops, Elite and Pro desktops, Z workstations and LaserJet printers in Saudi Arabia, with setup, deployment and support.",
        h1: "HP Laptops, Desktops & Printers Supplier in Saudi Arabia",
        summary:
          "Thoughts House supplies HP EliteBook and ProBook laptops, Elite and Pro desktops, Z workstations and LaserJet printers to organizations across Saudi Arabia, and handles setup, deployment and support.",
        intro:
          "We help you standardise on the right HP models for each team, deliver them ready to use, and keep them running.",
        linesTitle: EN_LINES_TITLE("HP"),
        lines: [
          {
            title: "EliteBook and ProBook laptops",
            text: "Business laptops for managers, office and field staff.",
          },
          {
            title: "Elite and Pro desktops",
            text: "Desktops and all-in-ones for offices and front desks.",
          },
          {
            title: "Z workstations",
            text: "Workstations for engineering, design and data-intensive work.",
          },
          {
            title: "LaserJet printers",
            text: "Office printers and multifunction devices.",
          },
          {
            title: "Monitors and accessories",
            text: "Displays, docks and accessories to complete each workstation.",
          },
        ],
        faq: [
          {
            q: "Do you supply HP laptops for businesses in Saudi Arabia?",
            a: "Yes. We supply HP business laptops, desktops, workstations and printers across Saudi Arabia.",
          },
          {
            q: "Can you prepare the devices before delivery?",
            a: "Yes. We can set up devices with your standard software and settings so they are ready for your staff.",
          },
        ],
      },
      ar: {
        metaTitle: "توريد أجهزة وطابعات HP في السعودية | بيت الأفكار",
        metaDescription:
          "توريد أجهزة HP EliteBook وProBook المحمولة وأجهزة Elite وPro المكتبية ومحطات Z وطابعات LaserJet في السعودية، مع التجهيز والتوزيع والدعم.",
        h1: "توريد أجهزة وطابعات HP في السعودية",
        summary:
          "يورّد بيت الأفكار أجهزة HP EliteBook وProBook المحمولة وأجهزة Elite وPro المكتبية ومحطات عمل Z وطابعات LaserJet للمنشآت في جميع مناطق المملكة، ويتولى التجهيز والتوزيع والدعم.",
        intro:
          "نساعدك في توحيد طرازات HP المناسبة لكل فريق، ونسلّمها جاهزة للاستخدام، ونحافظ على عملها.",
        linesTitle: AR_LINES_TITLE("HP"),
        lines: [
          {
            title: "أجهزة EliteBook وProBook المحمولة",
            text: "حواسيب محمولة للأعمال للمدراء وموظفي المكاتب والميدان.",
          },
          {
            title: "أجهزة Elite وPro المكتبية",
            text: "حواسيب مكتبية وأجهزة متكاملة للمكاتب والاستقبال.",
          },
          {
            title: "محطات عمل Z",
            text: "محطات عمل للهندسة والتصميم والأعمال كثيفة البيانات.",
          },
          {
            title: "طابعات LaserJet",
            text: "طابعات مكتبية وأجهزة متعددة الوظائف.",
          },
          {
            title: "الشاشات والملحقات",
            text: "شاشات ومحطات توصيل وملحقات لاستكمال كل محطة عمل.",
          },
        ],
        faq: [
          {
            q: "هل تورّدون أجهزة HP المحمولة للشركات في السعودية؟",
            a: "نعم. نورّد أجهزة HP المحمولة والمكتبية ومحطات العمل والطابعات للأعمال في جميع مناطق المملكة.",
          },
          {
            q: "هل يمكنكم تجهيز الأجهزة قبل التسليم؟",
            a: "نعم. يمكننا تجهيز الأجهزة ببرامجكم وإعداداتكم المعتمدة لتكون جاهزة للموظفين.",
          },
        ],
      },
    },
  },
  {
    slug: "lenovo",
    name: "Lenovo",
    services: ["it-supply", "it-support-amc"],
    content: {
      en: {
        metaTitle: "Lenovo ThinkPad & Servers Supplier in Saudi Arabia",
        metaDescription:
          "Supply of Lenovo ThinkPad laptops, ThinkCentre desktops, ThinkStation workstations and ThinkSystem servers in Saudi Arabia, with deployment and support.",
        h1: "Lenovo ThinkPad & Servers Supplier in Saudi Arabia",
        summary:
          "Thoughts House supplies Lenovo ThinkPad laptops, ThinkCentre desktops, ThinkStation workstations and ThinkSystem servers to organizations across Saudi Arabia, with deployment and ongoing support.",
        intro:
          "We match Lenovo's business range to each role in your organization and deliver devices that are ready for work.",
        linesTitle: EN_LINES_TITLE("Lenovo"),
        lines: [
          {
            title: "ThinkPad laptops",
            text: "Durable business laptops for office, travel and field work.",
          },
          {
            title: "ThinkCentre desktops",
            text: "Compact and tower desktops for offices and front desks.",
          },
          {
            title: "ThinkStation workstations",
            text: "Workstations for engineering, design and analysis.",
          },
          {
            title: "ThinkSystem servers",
            text: "Servers for virtualization and business applications.",
          },
          {
            title: "Docks and accessories",
            text: "Docking stations, monitors and accessories.",
          },
        ],
        faq: [
          {
            q: "Do you supply Lenovo ThinkPad laptops in Saudi Arabia?",
            a: "Yes. We supply Lenovo ThinkPad laptops and the wider Lenovo business range across Saudi Arabia.",
          },
          {
            q: "Do you also supply Lenovo servers?",
            a: "Yes. We supply Lenovo ThinkSystem servers and can install and configure them.",
          },
        ],
      },
      ar: {
        metaTitle: "توريد أجهزة Lenovo ThinkPad والسيرفرات في السعودية",
        metaDescription:
          "توريد أجهزة Lenovo ThinkPad المحمولة وThinkCentre المكتبية ومحطات ThinkStation وسيرفرات ThinkSystem في السعودية، مع التوزيع والدعم.",
        h1: "توريد أجهزة Lenovo ThinkPad وThinkCentre والسيرفرات في السعودية",
        summary:
          "يورّد بيت الأفكار أجهزة Lenovo ThinkPad المحمولة وThinkCentre المكتبية ومحطات عمل ThinkStation وسيرفرات ThinkSystem للمنشآت في جميع مناطق المملكة، مع التوزيع والدعم المستمر.",
        intro:
          "نطابق مجموعة Lenovo للأعمال مع كل دور في منشأتك، ونسلّم أجهزة جاهزة للعمل.",
        linesTitle: AR_LINES_TITLE("Lenovo"),
        lines: [
          {
            title: "أجهزة ThinkPad المحمولة",
            text: "حواسيب محمولة متينة للأعمال في المكتب والسفر والميدان.",
          },
          {
            title: "أجهزة ThinkCentre المكتبية",
            text: "حواسيب مكتبية صغيرة وبرجية للمكاتب والاستقبال.",
          },
          {
            title: "محطات عمل ThinkStation",
            text: "محطات عمل للهندسة والتصميم والتحليل.",
          },
          {
            title: "سيرفرات ThinkSystem",
            text: "سيرفرات للافتراضية وتطبيقات الأعمال.",
          },
          {
            title: "محطات التوصيل والملحقات",
            text: "محطات توصيل وشاشات وملحقات.",
          },
        ],
        faq: [
          {
            q: "هل تورّدون أجهزة Lenovo ThinkPad في السعودية؟",
            a: "نعم. نورّد أجهزة Lenovo ThinkPad ومجموعة Lenovo للأعمال في جميع مناطق المملكة.",
          },
          {
            q: "هل تورّدون سيرفرات Lenovo أيضاً؟",
            a: "نعم. نورّد سيرفرات Lenovo ThinkSystem ويمكننا تركيبها وإعدادها.",
          },
        ],
      },
    },
  },
  {
    slug: "cisco",
    name: "Cisco",
    services: ["network-infrastructure", "wifi-installation", "it-supply"],
    content: {
      en: {
        metaTitle:
          "Cisco Switches, Routers & Wireless Supplier in Saudi Arabia",
        metaDescription:
          "Supply, installation and configuration of Cisco Catalyst switches, routers, wireless access points, Meraki and Secure Firewall in Saudi Arabia, with support.",
        h1: "Cisco Switches, Routers & Wireless Supplier in Saudi Arabia",
        summary:
          "Thoughts House supplies, installs and configures Cisco Catalyst switches, routers, Catalyst and Meraki wireless and Cisco Secure Firewall for organizations across Saudi Arabia, and supports them after go-live.",
        intro:
          "We design Cisco networks around your sites and users, supply the right models, configure them properly and keep them maintained.",
        linesTitle: EN_LINES_TITLE("Cisco"),
        lines: [
          {
            title: "Catalyst switches",
            text: "Access, distribution and core switching with PoE for phones, cameras and access points.",
          },
          {
            title: "Routers",
            text: "Branch and edge routing for internet and site-to-site connectivity.",
          },
          {
            title: "Wireless",
            text: "Catalyst and Meraki access points and controllers for enterprise Wi-Fi.",
          },
          {
            title: "Meraki cloud-managed networking",
            text: "Switches, wireless and security appliances managed from one cloud dashboard.",
          },
          {
            title: "Cisco Secure Firewall",
            text: "Next-generation firewalls for perimeter and branch security.",
          },
        ],
        faq: [
          {
            q: "Do you supply and configure Cisco switches in Saudi Arabia?",
            a: "Yes. We supply Cisco Catalyst and Meraki switches across Saudi Arabia and configure VLANs, routing, PoE and security to your design.",
          },
          {
            q: "Can you maintain an existing Cisco network?",
            a: "Yes. We assess your current Cisco network and can cover it under a maintenance contract, including firmware updates and configuration changes.",
          },
        ],
      },
      ar: {
        metaTitle: "توريد مبدّلات وموجّهات Cisco في السعودية | بيت الأفكار",
        metaDescription:
          "توريد وتركيب وإعداد مبدّلات Cisco Catalyst والموجّهات ونقاط الوصول اللاسلكية وMeraki وCisco Secure Firewall في السعودية، مع الدعم.",
        h1: "توريد مبدّلات وموجّهات وشبكات Cisco اللاسلكية في السعودية",
        summary:
          "يورّد بيت الأفكار مبدّلات Cisco Catalyst والموجّهات وشبكات Catalyst وMeraki اللاسلكية وجدران Cisco Secure Firewall ويركّبها ويُعدّها للمنشآت في جميع مناطق المملكة، ويدعمها بعد التشغيل.",
        intro:
          "نصمم شبكات Cisco حسب مواقعك ومستخدميك، ونورّد الطرازات المناسبة، ونُعدّها بشكل صحيح ونحافظ على صيانتها.",
        linesTitle: AR_LINES_TITLE("Cisco"),
        lines: [
          {
            title: "مبدّلات Catalyst",
            text: "مبدّلات للطبقات الطرفية والتوزيع والأساسية مع PoE للهواتف والكاميرات ونقاط الوصول.",
          },
          {
            title: "الموجّهات",
            text: "توجيه للفروع والحافة للاتصال بالإنترنت وربط المواقع.",
          },
          {
            title: "الشبكات اللاسلكية",
            text: "نقاط وصول ووحدات تحكم Catalyst وMeraki لشبكات Wi-Fi المؤسسية.",
          },
          {
            title: "شبكات Meraki السحابية",
            text: "مبدّلات وشبكات لاسلكية وأجهزة حماية تُدار من لوحة سحابية واحدة.",
          },
          {
            title: "Cisco Secure Firewall",
            text: "جدران حماية من الجيل التالي لحماية حدود الشبكة والفروع.",
          },
        ],
        faq: [
          {
            q: "هل تورّدون مبدّلات Cisco وتُعدّونها في السعودية؟",
            a: "نعم. نورّد مبدّلات Cisco Catalyst وMeraki في جميع مناطق المملكة ونُعدّ الشبكات الافتراضية والتوجيه وPoE والحماية حسب التصميم.",
          },
          {
            q: "هل يمكنكم صيانة شبكة Cisco قائمة؟",
            a: "نعم. نقيّم شبكة Cisco الحالية ويمكن تغطيتها بعقد صيانة يشمل تحديث البرامج الثابتة وتعديل الإعدادات.",
          },
        ],
      },
    },
  },
  {
    slug: "sophos",
    name: "Sophos",
    services: ["cybersecurity", "firewall-installation"],
    content: {
      en: {
        metaTitle: "Sophos Firewall & Endpoint Supplier in Saudi Arabia",
        metaDescription:
          "Sophos XGS firewalls, Intercept X endpoint protection and Sophos MDR in Saudi Arabia: supply, installation, configuration, licensing and support.",
        h1: "Sophos Firewall & Endpoint Protection Supplier in Saudi Arabia",
        summary:
          "Thoughts House supplies, installs and configures Sophos XGS firewalls, Sophos Intercept X endpoint protection and Sophos MDR for organizations across Saudi Arabia, including licensing, renewals and ongoing support.",
        intro:
          "Sophos firewalls and endpoint protection work best together. We deploy them as one system, tune the policies for your environment and keep licenses renewed.",
        linesTitle: EN_LINES_TITLE("Sophos"),
        lines: [
          {
            title: "Sophos XGS firewalls",
            text: "Next-generation firewalls with intrusion prevention, web filtering, VPN and SD-WAN.",
          },
          {
            title: "Sophos Intercept X",
            text: "Endpoint protection with anti-ransomware and EDR/XDR for laptops, desktops and servers.",
          },
          {
            title: "Sophos MDR",
            text: "Managed detection and response, with threat hunting and response by Sophos analysts.",
          },
          {
            title: "Sophos Central",
            text: "One cloud console to manage firewalls, endpoints and policies.",
          },
          {
            title: "Licensing and renewals",
            text: "Subscriptions sized for your users and devices, with renewal tracking.",
          },
        ],
        faq: [
          {
            q: "Do you supply Sophos licenses in Saudi Arabia?",
            a: "Yes. We supply Sophos firewall and endpoint subscriptions and track renewals so protection does not lapse.",
          },
          {
            q: "Can you install and configure a Sophos firewall?",
            a: "Yes. We size, install and configure Sophos XGS firewalls, including policies, VPN and integration with Intercept X.",
          },
        ],
      },
      ar: {
        metaTitle: "توريد جدران حماية Sophos وحماية الأجهزة في السعودية",
        metaDescription:
          "توريد وتركيب وإعداد جدران حماية Sophos XGS وحماية الأجهزة Sophos Intercept X وخدمة Sophos MDR في السعودية، مع التراخيص والدعم.",
        h1: "توريد جدران حماية Sophos وحماية الأجهزة في السعودية",
        summary:
          "يورّد بيت الأفكار جدران حماية Sophos XGS وحماية الأجهزة Sophos Intercept X وخدمة Sophos MDR ويركّبها ويُعدّها للمنشآت في جميع مناطق المملكة، بما يشمل التراخيص والتجديد والدعم المستمر.",
        intro:
          "تعمل جدران حماية Sophos وحماية الأجهزة بأفضل شكل معاً. ننفذها كنظام واحد، ونضبط السياسات حسب بيئتك، ونتابع تجديد التراخيص.",
        linesTitle: AR_LINES_TITLE("Sophos"),
        lines: [
          {
            title: "جدران حماية Sophos XGS",
            text: "جدران حماية من الجيل التالي مع منع الاختراق وتصفية الويب وVPN وSD-WAN.",
          },
          {
            title: "Sophos Intercept X",
            text: "حماية الأجهزة مع الحماية من برامج الفدية وEDR/XDR للحواسيب والخوادم.",
          },
          {
            title: "Sophos MDR",
            text: "خدمة الكشف والاستجابة المُدارة مع تتبع التهديدات والاستجابة من محللي Sophos.",
          },
          {
            title: "Sophos Central",
            text: "لوحة سحابية واحدة لإدارة جدران الحماية والأجهزة والسياسات.",
          },
          {
            title: "التراخيص والتجديد",
            text: "اشتراكات تناسب عدد المستخدمين والأجهزة مع متابعة التجديد.",
          },
        ],
        faq: [
          {
            q: "هل تورّدون تراخيص Sophos في السعودية؟",
            a: "نعم. نورّد اشتراكات جدران حماية Sophos وحماية الأجهزة ونتابع تجديدها حتى لا تتوقف الحماية.",
          },
          {
            q: "هل تركّبون جدار حماية Sophos وتُعدّونه؟",
            a: "نعم. نحدد سعة جدران Sophos XGS ونركّبها ونُعدّ السياسات وVPN والتكامل مع Intercept X.",
          },
        ],
      },
    },
  },
  {
    slug: "microsoft",
    name: "Microsoft",
    services: ["it-supply", "cloud-backup"],
    content: {
      en: {
        metaTitle: "Microsoft 365 & Windows Server Licensing in Saudi Arabia",
        metaDescription:
          "Microsoft 365, Windows, Windows Server and SQL Server licensing in Saudi Arabia, plus Microsoft 365 setup, email migration and Azure services.",
        h1: "Microsoft 365 & Microsoft Licensing in Saudi Arabia",
        summary:
          "Thoughts House supplies Microsoft 365, Windows, Windows Server and SQL Server licenses to organizations across Saudi Arabia, and handles Microsoft 365 setup, email migration, security configuration and Azure services.",
        intro:
          "Microsoft licensing is easy to over- or under-buy. We help you choose the right plans for each user and server, set them up securely and track renewals.",
        linesTitle: "Microsoft products and services we provide",
        lines: [
          {
            title: "Microsoft 365",
            text: "Business and enterprise plans for email, Teams, OneDrive and Office apps.",
          },
          {
            title: "Windows and Windows Server",
            text: "Desktop and server operating system licensing, including client access licenses.",
          },
          {
            title: "SQL Server",
            text: "Database licensing sized for your servers and workloads.",
          },
          {
            title: "Microsoft 365 setup and migration",
            text: "Tenant setup, email migration, multi-factor authentication and security settings.",
          },
          {
            title: "Microsoft Azure",
            text: "Cloud servers, backup and migration of workloads to Azure.",
          },
        ],
        faq: [
          {
            q: "Can you supply Microsoft 365 licenses in Saudi Arabia?",
            a: "Yes. We supply Microsoft 365 plans and help you choose the right mix for your users.",
          },
          {
            q: "Do you migrate email to Microsoft 365?",
            a: "Yes. We plan and carry out email migration to Microsoft 365, and configure multi-factor authentication and security settings.",
          },
        ],
      },
      ar: {
        metaTitle: "تراخيص Microsoft 365 وWindows Server في السعودية",
        metaDescription:
          "تراخيص Microsoft 365 وWindows وWindows Server وSQL Server في السعودية، مع إعداد Microsoft 365 والترحيل وخدمات Azure والتجديد والدعم.",
        h1: "تراخيص Microsoft 365 ومنتجات Microsoft في السعودية",
        summary:
          "يورّد بيت الأفكار تراخيص Microsoft 365 وWindows وWindows Server وSQL Server للمنشآت في جميع مناطق المملكة، ويتولى إعداد Microsoft 365 وترحيل البريد وإعدادات الأمان وخدمات Azure.",
        intro:
          "من السهل شراء تراخيص Microsoft أكثر أو أقل من الحاجة. نساعدك في اختيار الخطط المناسبة لكل مستخدم وخادم، ونُعدّها بأمان ونتابع التجديد.",
        linesTitle: "منتجات وخدمات Microsoft التي نقدمها",
        lines: [
          {
            title: "Microsoft 365",
            text: "خطط الأعمال والمؤسسات للبريد وTeams وOneDrive وتطبيقات Office.",
          },
          {
            title: "Windows وWindows Server",
            text: "تراخيص أنظمة التشغيل المكتبية والخوادم، بما فيها تراخيص وصول العملاء.",
          },
          {
            title: "SQL Server",
            text: "تراخيص قواعد البيانات بحسب الخوادم وأحمال العمل.",
          },
          {
            title: "إعداد Microsoft 365 والترحيل",
            text: "إعداد الحساب وترحيل البريد والتحقق متعدد العوامل وإعدادات الأمان.",
          },
          {
            title: "Microsoft Azure",
            text: "الخوادم السحابية والنسخ الاحتياطي وترحيل الأنظمة إلى Azure.",
          },
        ],
        faq: [
          {
            q: "هل تورّدون تراخيص Microsoft 365 في السعودية؟",
            a: "نعم. نورّد خطط Microsoft 365 ونساعدك في اختيار المزيج المناسب لمستخدميك.",
          },
          {
            q: "هل تنقلون البريد إلى Microsoft 365؟",
            a: "نعم. نخطط لترحيل البريد إلى Microsoft 365 وننفذه، ونُعدّ التحقق متعدد العوامل وإعدادات الأمان.",
          },
        ],
      },
    },
  },
  {
    slug: "palo-alto-networks",
    name: "Palo Alto Networks",
    services: ["cybersecurity", "firewall-installation"],
    content: {
      en: {
        metaTitle: "Palo Alto Networks Firewall Supplier in Saudi Arabia",
        metaDescription:
          "Supply, installation and configuration of Palo Alto Networks next-generation firewalls and security subscriptions in Saudi Arabia, with migration and support.",
        h1: "Palo Alto Networks Firewall Supplier in Saudi Arabia",
        summary:
          "Thoughts House supplies, installs and configures Palo Alto Networks next-generation firewalls and their security subscriptions for organizations across Saudi Arabia, including migration from other firewalls and ongoing support.",
        intro:
          "Palo Alto Networks firewalls are widely used in larger and regulated environments. We size the right model, migrate your policies and configure the security services you need.",
        linesTitle: EN_LINES_TITLE("Palo Alto Networks"),
        lines: [
          {
            title: "Next-generation firewalls",
            text: "Hardware and virtual firewalls for headquarters, data centers and branches.",
          },
          {
            title: "Security subscriptions",
            text: "Threat prevention, URL filtering, DNS security and malware analysis services.",
          },
          {
            title: "Remote access",
            text: "Secure remote access for staff working outside the office.",
          },
          {
            title: "High availability",
            text: "Firewall pairs for critical sites to avoid a single point of failure.",
          },
          {
            title: "Policy migration",
            text: "Migration and cleanup of rules from your existing firewall.",
          },
        ],
        faq: [
          {
            q: "Do you supply Palo Alto Networks firewalls in Saudi Arabia?",
            a: "Yes. We supply and install Palo Alto Networks firewalls and subscriptions across Saudi Arabia.",
          },
          {
            q: "Can you migrate from another firewall to Palo Alto Networks?",
            a: "Yes. We review your existing rules, migrate and clean them up, and test before cut-over.",
          },
        ],
      },
      ar: {
        metaTitle: "توريد جدران حماية Palo Alto Networks في السعودية",
        metaDescription:
          "توريد وتركيب وإعداد جدران حماية Palo Alto Networks من الجيل التالي واشتراكات الحماية في السعودية، مع الترحيل والدعم.",
        h1: "توريد جدران حماية Palo Alto Networks في السعودية",
        summary:
          "يورّد بيت الأفكار جدران حماية Palo Alto Networks من الجيل التالي واشتراكات الحماية الخاصة بها ويركّبها ويُعدّها للمنشآت في جميع مناطق المملكة، بما يشمل الترحيل من جدران الحماية الأخرى والدعم المستمر.",
        intro:
          "تُستخدم جدران حماية Palo Alto Networks على نطاق واسع في البيئات الكبيرة والخاضعة للتنظيم. نحدد الطراز المناسب، وننقل السياسات، ونُعدّ خدمات الحماية التي تحتاجها.",
        linesTitle: AR_LINES_TITLE("Palo Alto Networks"),
        lines: [
          {
            title: "جدران الحماية من الجيل التالي",
            text: "جدران حماية مادية وافتراضية للمقرات ومراكز البيانات والفروع.",
          },
          {
            title: "اشتراكات الحماية",
            text: "منع التهديدات وتصفية الروابط وحماية DNS وتحليل البرمجيات الخبيثة.",
          },
          {
            title: "الوصول عن بُعد",
            text: "وصول آمن عن بُعد للموظفين خارج المكتب.",
          },
          {
            title: "الجاهزية العالية",
            text: "أزواج جدران حماية للمواقع الحرجة لتجنب نقطة الفشل الواحدة.",
          },
          {
            title: "ترحيل السياسات",
            text: "نقل القواعد من جدار الحماية الحالي وتنظيفها.",
          },
        ],
        faq: [
          {
            q: "هل تورّدون جدران حماية Palo Alto Networks في السعودية؟",
            a: "نعم. نورّد جدران حماية Palo Alto Networks واشتراكاتها ونركّبها في جميع مناطق المملكة.",
          },
          {
            q: "هل يمكنكم الترحيل من جدار حماية آخر إلى Palo Alto Networks؟",
            a: "نعم. نراجع القواعد الحالية وننقلها وننظفها ونختبر قبل الانتقال.",
          },
        ],
      },
    },
  },
  {
    slug: "veeam",
    name: "Veeam",
    services: ["cloud-backup", "it-support-amc"],
    content: {
      en: {
        metaTitle: "Veeam Backup Licensing & Implementation in Saudi Arabia",
        metaDescription:
          "Veeam backup licensing and implementation in Saudi Arabia: backup for servers, VMs and Microsoft 365, with immutable copies and restore testing.",
        h1: "Veeam Backup Licensing & Implementation in Saudi Arabia",
        summary:
          "Thoughts House supplies Veeam backup and recovery licenses and implements them for organizations across Saudi Arabia, protecting servers, virtual machines and Microsoft 365 with immutable copies, monitoring and restore testing.",
        intro:
          "A backup only matters when you need to restore. We design Veeam backup around your recovery targets, protect the backups against ransomware and test that restores work.",
        linesTitle: "Veeam solutions we provide",
        lines: [
          {
            title: "Backup for servers and VMs",
            text: "Backup and recovery for virtual machines and physical servers.",
          },
          {
            title: "Microsoft 365 backup",
            text: "Backup of email, OneDrive, SharePoint and Teams data.",
          },
          {
            title: "Immutable and offsite copies",
            text: "Copies that cannot be changed or deleted, kept offsite or in the cloud.",
          },
          {
            title: "Monitoring and alerts",
            text: "Job monitoring and alerts so failed backups are noticed and fixed.",
          },
          {
            title: "Restore testing",
            text: "Scheduled test restores to prove recovery within your target times.",
          },
        ],
        faq: [
          {
            q: "Do you supply Veeam licenses in Saudi Arabia?",
            a: "Yes. We supply Veeam licenses sized for your servers, virtual machines and Microsoft 365 users.",
          },
          {
            q: "Can you protect our backups from ransomware?",
            a: "Yes. We configure immutable or offline copies, separate credentials and monitoring, and test restores regularly.",
          },
        ],
      },
      ar: {
        metaTitle: "تراخيص وتنفيذ Veeam للنسخ الاحتياطي في السعودية",
        metaDescription:
          "تراخيص Veeam للنسخ الاحتياطي وتنفيذها في السعودية: نسخ الخوادم والأجهزة الافتراضية وMicrosoft 365 مع نسخ غير قابلة للتعديل واختبار الاستعادة.",
        h1: "تراخيص Veeam للنسخ الاحتياطي وتنفيذها في السعودية",
        summary:
          "يورّد بيت الأفكار تراخيص Veeam للنسخ الاحتياطي والاستعادة وينفذها للمنشآت في جميع مناطق المملكة، لحماية الخوادم والأجهزة الافتراضية وبيانات Microsoft 365 بنسخ غير قابلة للتعديل ومراقبة واختبار للاستعادة.",
        intro:
          "لا تظهر قيمة النسخة الاحتياطية إلا عند الحاجة للاستعادة. نصمم النسخ الاحتياطي بـ Veeam حسب أهداف الاستعادة لديك، ونحمي النسخ من برامج الفدية، ونختبر أن الاستعادة تعمل.",
        linesTitle: "حلول Veeam التي نقدمها",
        lines: [
          {
            title: "نسخ الخوادم والأجهزة الافتراضية",
            text: "نسخ احتياطي واستعادة للأجهزة الافتراضية والخوادم المادية.",
          },
          {
            title: "نسخ Microsoft 365",
            text: "نسخ بيانات البريد وOneDrive وSharePoint وTeams.",
          },
          {
            title: "نسخ غير قابلة للتعديل وخارج الموقع",
            text: "نسخ لا يمكن تغييرها أو حذفها، تُحفظ خارج الموقع أو في السحابة.",
          },
          {
            title: "المراقبة والتنبيهات",
            text: "مراقبة المهام وتنبيهات لاكتشاف النسخ الفاشلة ومعالجتها.",
          },
          {
            title: "اختبار الاستعادة",
            text: "اختبارات استعادة مجدولة لإثبات الاستعادة ضمن الأوقات المستهدفة.",
          },
        ],
        faq: [
          {
            q: "هل تورّدون تراخيص Veeam في السعودية؟",
            a: "نعم. نورّد تراخيص Veeam بحسب عدد الخوادم والأجهزة الافتراضية ومستخدمي Microsoft 365.",
          },
          {
            q: "هل يمكنكم حماية النسخ الاحتياطية من برامج الفدية؟",
            a: "نعم. نُعدّ نسخاً غير قابلة للتعديل أو منفصلة، وبيانات دخول منفصلة ومراقبة، ونختبر الاستعادة دورياً.",
          },
        ],
      },
    },
  },
];

export function getBrandPage(slug: BrandSlug) {
  return BRAND_PAGES.find(b => b.slug === slug)!;
}
