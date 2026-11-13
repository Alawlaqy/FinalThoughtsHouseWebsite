/*
 * Dammam landing pages (/<slug>/ and /ar/<slug>/): local-intent pages for the city where the
 * Thoughts House office is, each linking to the matching nationwide service pages.
 */
import type { Language } from "@/seo";
import type { ServiceSlug } from "./services";
import { CITY_PAGES, type CitySlug } from "./cities";

export type LocalSlug =
  | CitySlug
  | "it-company-dammam"
  | "it-support-dammam"
  | "cybersecurity-dammam"
  | "network-solutions-dammam"
  | "it-hardware-supplier-dammam"
  | "structured-cabling-dammam";

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
  /** Longer sections shown after the reasons to choose us */
  guide?: { title: string; text: string; points?: string[] }[];
  faq: { q: string; a: string }[];
}

export interface LocalPage {
  slug: LocalSlug;
  /** Main related service: hero image and share image */
  service: ServiceSlug;
  serviceType: string;
  /** "dammam": pages for the office city; "city": other cities served */
  group: "dammam" | "city";
  city: Record<Language, string>;
  /** City names (English) for areaServed in structured data */
  areaServed: string[];
  /** Served remotely with scheduled on-site visits (no local team) */
  remote?: boolean;
  content: Record<Language, LocalCopy>;
}

/** Nearby cities served from the Dammam office (shown on every local page). */
const DAMMAM_AREA = [
  "Dammam",
  "Khobar",
  "Dhahran",
  "Qatif",
  "Jubail",
  "Ras Tanura",
  "Al-Ahsa",
];

export const NEARBY: Record<Language, string> = {
  en: "Dammam, Khobar, Dhahran, Qatif, Jubail, Ras Tanura and Al-Ahsa",
  ar: "الدمام، الخبر، الظهران، القطيف، الجبيل، رأس تنورة، الأحساء",
};

const DAMMAM_PAGES: LocalPage[] = [
  {
    slug: "it-company-dammam",
    service: "it-supply",
    serviceType: "IT services and system integration",
    group: "dammam",
    city: { en: "Dammam", ar: "الدمام" },
    areaServed: DAMMAM_AREA,
    content: {
      en: {
        metaTitle: "IT Company in Dammam | Thoughts House",
        metaDescription:
          "IT company and system integrator in Dammam: cybersecurity, networks, IT supply, cloud & backup and IT support for businesses in the Eastern Province.",
        name: "IT Company in Dammam",
        h1: "IT Company & System Integrator in Dammam",
        summary:
          "Thoughts House is an IT company and system integrator based in Dammam. We design, supply, install and support IT for businesses in Dammam, Khobar, Dhahran and the rest of the Eastern Province, and serve customers across Saudi Arabia.",
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
          "250+ organizations served.",
        ],
        guide: [
          {
            title: "How a project works with us",
            text: "Every project follows the same steps, whether it is a single server or several sites. Supply-only orders skip the steps you do not need.",
            points: [
              "Assessment: we review your current systems, sites and requirements.",
              "Design and quotation: we propose the solution, the equipment and the scope in writing.",
              "Supply: we source the hardware and licenses and deliver them to your sites.",
              "Installation: our engineers install, configure and test the system on site or remotely.",
              "Handover: you receive the documentation and asset details.",
              "Support: we stay available through warranty, renewals and maintenance contracts.",
            ],
          },
          {
            title: "Sectors we have delivered for",
            text: "Our work includes training institutes, cement and manufacturing, financial institutions, holding groups, contracting companies and technology companies. We do not name our clients, but you can read examples on our Our Work page.",
          },
          {
            title: "How to choose an IT company in Dammam",
            text: "A few questions will separate a reliable IT partner from a box seller:",
            points: [
              "Who is responsible when something fails: one company, or several suppliers?",
              "Will they survey your site before quoting, or quote from a list?",
              "Can they show examples of similar projects, even without client names?",
              "Is the support scope written down, including what is covered on site?",
              "Do you receive documentation and passwords at handover?",
              "Can they support equipment they did not supply?",
            ],
          },
          {
            title: "IT services in Dammam, in detail",
            text: "Most customers start with one need and add others over time. This is what each service covers when we deliver it in Dammam and the Eastern Province.",
            points: [
              "Cybersecurity: Sophos and Fortinet FortiGate firewalls, endpoint protection and EDR, secure VPN for remote staff, and license renewals tracked before they expire.",
              "Networks: Cisco and Huawei switches, routing, business Wi-Fi sized from a site survey, and Cat6, Cat6A and fiber cabling with labeling and testing.",
              "Communication: Avaya IP phones and communication devices, including additions to an existing Avaya system.",
              "Servers and storage: Dell, HP and Lenovo servers, QNAP storage, and backup with Veeam and Veritas.",
              "Computers and licensing: laptops, desktops and workstations, with Microsoft 365, Dynamics 365 and other business licenses.",
              "Support: annual maintenance contracts with a helpdesk, preventive visits and escalation to the manufacturers.",
            ],
          },
          {
            title: "An IT company in Dammam since 2002",
            text: "Thoughts House was founded in Dammam in 2002 and has served more than 250 organizations since then, including government entities, financial institutions, industrial companies, contractors and training institutes. Long experience in one region matters in practice: we know how local procurement works, what manufacturers and distributors stock in the Kingdom, and what support customers here expect after delivery.",
          },
          {
            title: "Examples of our work",
            text: "We do not publish client names, but these are real projects we delivered:",
            points: [
              "More than 230 Dell computers supplied and installed for a training institute in the Eastern Province.",
              "QNAP storage with a capacity of 600 TB supplied to a Saudi cement company.",
              "More than 300 Microsoft 365 licenses, with ongoing technical support, for a technology company.",
              "Sophos endpoint protection (EDR) for a financial institution in the Kingdom.",
              "Cisco network devices for a Saudi holding group.",
              "Veritas backup license renewal for a contracting company.",
            ],
          },
          {
            title: "Where we work",
            text: "Our engineers work at your premises and remotely. From Dammam we cover the whole Eastern Province and travel to other regions for planned work.",
            points: [
              "Dammam: offices, showrooms, warehouses and industrial sites across the city.",
              "Khobar and Dhahran: close to Dammam, so site surveys and visits are easy to schedule.",
              "Qatif, Ras Tanura, Jubail and Al-Ahsa: on-site visits scheduled in advance.",
              "Riyadh, Jeddah and other regions: remote support, equipment delivered to your site, and planned on-site visits.",
            ],
          },
          {
            title: "What an IT maintenance contract covers",
            text: "Many Dammam businesses have no in-house IT team, or a small one. An annual maintenance contract (AMC) gives them a team to call and a schedule of preventive work.",
            points: [
              "A helpdesk for users, by phone, remote session or site visit.",
              "Preventive visits to check servers, network and security equipment, with a report after each visit.",
              "Monitoring, updates and backup checks.",
              "An asset register with warranty and license renewal dates.",
              "Escalation to the manufacturer when hardware or software needs vendor support.",
            ],
          },
          {
            title: "What to send us for a quotation",
            text: "A clear request gets you an accurate quotation faster. If you are not sure about any of these points, we can survey the site first.",
            points: [
              "What you need: supply only, or supply with installation and support.",
              "The number of users, devices and sites.",
              "Any brand or model you prefer, or the equipment you have today.",
              "Where the equipment will be delivered and installed.",
              "Your preferred delivery date.",
            ],
          },
        ],
        faq: [
          {
            q: "Is Thoughts House an IT company in Dammam?",
            a: "Yes. Thoughts House is an IT company, system integrator and IT reseller based in Dammam. It provides cybersecurity, networks, servers and storage, cloud and backup, IT hardware supply and IT support to businesses in Dammam and across Saudi Arabia.",
          },
          {
            q: "How do I meet the Thoughts House team in Dammam?",
            a: "Our team comes to you. Contact us by phone, WhatsApp, email or the contact form, and we will arrange a meeting or site survey at your premises, or an online session. Our working hours are Sunday to Thursday, 9:00 am to 5:00 pm.",
          },
          {
            q: "Do you only work with companies in Dammam?",
            a: "No. Dammam is our base, and we serve businesses across the Eastern Province and the rest of Saudi Arabia, including Riyadh and Jeddah.",
          },
          {
            q: "What size of company do you work with?",
            a: "We work with small and mid-sized businesses as well as larger organizations with several sites.",
          },
          {
            q: "Can you supply equipment without installing it?",
            a: "Yes. Many of our projects are supply only, such as storage systems, network devices and software licenses. We can also install and configure what we supply if you need it.",
          },
          {
            q: "Do you serve Khobar and Dhahran from Dammam?",
            a: "Yes. We serve Khobar, Dhahran, Qatif, Jubail, Ras Tanura and Al-Ahsa from our Dammam base, with site visits scheduled in advance.",
          },
          {
            q: "Which brands does Thoughts House supply in Dammam?",
            a: "We supply and support products from 29 brands, including Dell, HP, Lenovo, Cisco, Huawei, Sophos, Fortinet, Palo Alto Networks, Microsoft, Veeam, Veritas, QNAP and Avaya.",
          },
          {
            q: "How long has Thoughts House worked in Dammam?",
            a: "Since 2002. The company was founded in Dammam and has served more than 250 organizations across Saudi Arabia.",
          },
          {
            q: "Do you work with government entities?",
            a: "Yes. Our customers include government entities as well as private companies of different sizes.",
          },
          {
            q: "Can you support equipment we bought from another supplier?",
            a: "Yes. Under a maintenance contract we start with an assessment of your systems, including equipment we did not supply.",
          },
          {
            q: "Do you provide support in Arabic and English?",
            a: "Yes. Our team works in both Arabic and English, on site and remotely.",
          },
          {
            q: "How do I request a quotation from an IT company in Dammam?",
            a: "Send us your requirements by WhatsApp, email or the contact form: what you need, the number of users and devices, and the delivery location. We reply with a written quotation, and we can survey the site first if the scope is not clear.",
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
          "بيت الأفكار شركة تقنية معلومات وتكامل أنظمة مقرّها الدمام. نصمم ونورّد وننفذ وندعم أنظمة تقنية المعلومات للشركات في الدمام والخبر والظهران وبقية المنطقة الشرقية، ونخدم العملاء في جميع مناطق المملكة.",
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
          "أكثر من 250 منشأة خدمناها.",
        ],
        guide: [
          {
            title: "كيف ننفذ المشروع معك",
            text: "نتبع الخطوات نفسها في كل مشروع، سواء كان سيرفراً واحداً أو عدة مواقع. وفي طلبات التوريد فقط نتجاوز الخطوات التي لا تحتاجها.",
            points: [
              "التقييم: نراجع أنظمتك الحالية ومواقعك ومتطلباتك.",
              "التصميم وعرض السعر: نقترح الحل والأجهزة والنطاق كتابياً.",
              "التوريد: نؤمّن الأجهزة والتراخيص ونسلّمها إلى مواقعك.",
              "التركيب: يركّب مهندسونا النظام ويُعدّونه ويختبرونه في الموقع أو عن بُعد.",
              "التسليم: تستلم الوثائق وبيانات الأصول.",
              "الدعم: نبقى معك خلال الضمان والتجديدات وعقود الصيانة.",
            ],
          },
          {
            title: "قطاعات عملنا معها",
            text: "تشمل أعمالنا معاهد التدريب، وشركات الإسمنت والتصنيع، والمؤسسات المالية، والمجموعات القابضة، وشركات المقاولات، والشركات التقنية. لا نذكر أسماء عملائنا، ويمكنك الاطلاع على نماذج في صفحة أعمالنا.",
          },
          {
            title: "كيف تختار شركة تقنية معلومات في الدمام",
            text: "تساعدك هذه الأسئلة على تمييز الشريك الموثوق من مجرد بائع أجهزة:",
            points: [
              "من المسؤول عند حدوث عطل: جهة واحدة أم عدة موردين؟",
              "هل تعاين الشركة موقعك قبل عرض السعر؟",
              "هل تعرض أمثلة لمشاريع مشابهة، ولو دون أسماء العملاء؟",
              "هل نطاق الدعم مكتوب، بما في ذلك الزيارات الميدانية؟",
              "هل تستلم الوثائق وكلمات المرور عند التسليم؟",
              "هل تدعم الشركة أجهزة لم تورّدها؟",
            ],
          },
          {
            title: "خدمات تقنية المعلومات في الدمام بالتفصيل",
            text: "يبدأ معظم العملاء بحاجة واحدة ثم يضيفون غيرها مع الوقت. هذا ما تشمله كل خدمة حين ننفذها في الدمام والمنطقة الشرقية.",
            points: [
              "الأمن السيبراني: جدران حماية Sophos وFortinet FortiGate، وحماية الأجهزة وEDR، واتصال VPN آمن للموظفين عن بُعد، ومتابعة تجديد التراخيص قبل انتهائها.",
              "الشبكات: سويتشات Cisco وHuawei، والتوجيه، وشبكات Wi-Fi للأعمال بعد معاينة الموقع، وتمديدات Cat6 وCat6A والألياف مع الترقيم والاختبار.",
              "الاتصالات: هواتف IP وأجهزة اتصالات Avaya، ومنها إضافة أجهزة إلى نظام Avaya قائم.",
              "السيرفرات والتخزين: سيرفرات Dell وHP وLenovo، وتخزين QNAP، والنسخ الاحتياطي ببرامج Veeam وVeritas.",
              "الأجهزة والتراخيص: حواسيب محمولة ومكتبية ومحطات عمل، مع تراخيص Microsoft 365 وDynamics 365 وغيرها.",
              "الدعم: عقود صيانة سنوية تشمل مكتب مساعدة وزيارات وقائية وتصعيداً إلى الشركات المصنّعة.",
            ],
          },
          {
            title: "شركة تقنية معلومات في الدمام منذ 2002",
            text: "تأسس بيت الأفكار في الدمام عام 2002، وخدم منذ ذلك الحين أكثر من 250 منشأة، منها جهات حكومية ومؤسسات مالية وشركات صناعية ومقاولون ومعاهد تدريب. والخبرة الطويلة في منطقة واحدة لها أثر عملي: نعرف كيف تسير المشتريات محلياً، وما يتوفر لدى الشركات المصنّعة والموزعين في المملكة، وما يتوقعه العملاء هنا من دعم بعد التسليم.",
          },
          {
            title: "أمثلة من أعمالنا",
            text: "لا ننشر أسماء عملائنا، لكن هذه مشاريع حقيقية نفذناها:",
            points: [
              "توريد وتركيب أكثر من 230 جهاز Dell لمعهد تدريب في المنطقة الشرقية.",
              "توريد تخزين QNAP بسعة 600 تيرابايت لشركة إسمنت سعودية.",
              "أكثر من 300 ترخيص Microsoft 365 مع دعم فني مستمر لشركة تقنية.",
              "حماية الأجهزة الطرفية Sophos EDR لمؤسسة مالية في المملكة.",
              "أجهزة شبكات Cisco لمجموعة قابضة سعودية.",
              "تجديد تراخيص النسخ الاحتياطي Veritas لشركة مقاولات.",
            ],
          },
          {
            title: "أين نعمل",
            text: "يعمل مهندسونا في موقعك وعن بُعد. ومن الدمام نغطي المنطقة الشرقية كلها، وننتقل إلى المناطق الأخرى للأعمال المجدولة.",
            points: [
              "الدمام: المكاتب والمعارض والمستودعات والمواقع الصناعية في أنحاء المدينة.",
              "الخبر والظهران: قريبتان من الدمام، فتسهل جدولة المعاينات والزيارات.",
              "القطيف ورأس تنورة والجبيل والأحساء: زيارات ميدانية تُجدول مسبقاً.",
              "الرياض وجدة وبقية المناطق: دعم عن بُعد، وتوصيل الأجهزة إلى موقعك، وزيارات ميدانية مجدولة.",
            ],
          },
          {
            title: "ماذا يشمل عقد صيانة تقنية المعلومات",
            text: "كثير من الشركات في الدمام ليس لديها فريق تقنية داخلي، أو لديها فريق صغير. وعقد الصيانة السنوي (AMC) يوفر لها فريقاً تتصل به وجدولاً للأعمال الوقائية.",
            points: [
              "مكتب مساعدة للمستخدمين، بالهاتف أو عن بُعد أو بزيارة ميدانية.",
              "زيارات وقائية لفحص السيرفرات وأجهزة الشبكة والحماية، مع تقرير بعد كل زيارة.",
              "المراقبة والتحديثات وفحص النسخ الاحتياطي.",
              "سجل للأصول بمواعيد الضمان وتجديد التراخيص.",
              "التصعيد إلى الشركة المصنّعة عندما يحتاج الجهاز أو البرنامج إلى دعمها.",
            ],
          },
          {
            title: "ما الذي ترسله لنا لطلب عرض سعر",
            text: "الطلب الواضح يوصلك إلى عرض سعر دقيق بسرعة. وإن لم تكن متأكداً من أي بند، يمكننا معاينة الموقع أولاً.",
            points: [
              "ما تحتاج إليه: توريد فقط، أو توريد مع التركيب والدعم.",
              "عدد المستخدمين والأجهزة والمواقع.",
              "أي علامة أو طراز تفضّله، أو الأجهزة الموجودة لديك حالياً.",
              "مكان التوصيل والتركيب.",
              "موعد التسليم المفضّل.",
            ],
          },
        ],
        faq: [
          {
            q: "هل بيت الأفكار شركة تقنية معلومات في الدمام؟",
            a: "نعم. بيت الأفكار شركة تقنية معلومات وتكامل أنظمة وتوريد أجهزة مقرّها الدمام. تقدم الأمن السيبراني والشبكات والسيرفرات والتخزين والحلول السحابية والنسخ الاحتياطي وتوريد الأجهزة والدعم الفني للشركات في الدمام وجميع مناطق المملكة.",
          },
          {
            q: "كيف ألتقي بفريق بيت الأفكار في الدمام؟",
            a: "يأتي فريقنا إليك. تواصل معنا بالهاتف أو واتساب أو البريد أو نموذج التواصل، وسنرتب اجتماعاً أو معاينة في موقعك، أو جلسة عبر الإنترنت. ساعات العمل من الأحد إلى الخميس، من 9:00 صباحاً إلى 5:00 مساءً.",
          },
          {
            q: "هل تعملون مع الشركات في الدمام فقط؟",
            a: "لا. الدمام مقرّنا، ونخدم الشركات في المنطقة الشرقية وجميع مناطق المملكة، ومنها الرياض وجدة.",
          },
          {
            q: "ما حجم الشركات التي تعملون معها؟",
            a: "نعمل مع الشركات الصغيرة والمتوسطة ومع المنشآت الأكبر متعددة الفروع.",
          },
          {
            q: "هل يمكنكم توريد الأجهزة دون تركيبها؟",
            a: "نعم. كثير من مشاريعنا توريد فقط، مثل أنظمة التخزين وأجهزة الشبكات وتراخيص البرمجيات. ويمكننا أيضاً تركيب ما نورّده وإعداده عند الحاجة.",
          },
          {
            q: "هل تخدمون الخبر والظهران من الدمام؟",
            a: "نعم. نخدم الخبر والظهران والقطيف والجبيل ورأس تنورة والأحساء من مقرّنا في الدمام، بزيارات ميدانية مجدولة مسبقاً.",
          },
          {
            q: "ما العلامات التي يورّدها بيت الأفكار في الدمام؟",
            a: "نورّد وندعم منتجات 29 علامة، منها Dell وHP وLenovo وCisco وHuawei وSophos وFortinet وPalo Alto Networks وMicrosoft وVeeam وVeritas وQNAP وAvaya.",
          },
          {
            q: "منذ متى يعمل بيت الأفكار في الدمام؟",
            a: "منذ عام 2002. تأسست الشركة في الدمام، وخدمت أكثر من 250 منشأة في مناطق المملكة.",
          },
          {
            q: "هل تعملون مع الجهات الحكومية؟",
            a: "نعم. من عملائنا جهات حكومية وشركات خاصة بأحجام مختلفة.",
          },
          {
            q: "هل تدعمون أجهزة اشتريناها من مورّد آخر؟",
            a: "نعم. في عقد الصيانة نبدأ بتقييم أنظمتك، بما فيها الأجهزة التي لم نورّدها.",
          },
          {
            q: "هل تقدمون الدعم بالعربية والإنجليزية؟",
            a: "نعم. يعمل فريقنا باللغتين العربية والإنجليزية، ميدانياً وعن بُعد.",
          },
          {
            q: "كيف أطلب عرض سعر من شركة تقنية معلومات في الدمام؟",
            a: "أرسل لنا متطلباتك عبر واتساب أو البريد أو نموذج التواصل: ما تحتاج إليه، وعدد المستخدمين والأجهزة، ومكان التسليم. ونرد عليك بعرض سعر مكتوب، ويمكننا معاينة الموقع أولاً إن لم يكن النطاق واضحاً.",
          },
        ],
      },
    },
  },
  {
    slug: "it-support-dammam",
    service: "it-support-amc",
    serviceType: "Managed IT services and IT support",
    group: "dammam",
    city: { en: "Dammam", ar: "الدمام" },
    areaServed: DAMMAM_AREA,
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
          "Contracts sized to your business, from a single office to several branches.",
          "The same team that can design and supply your next upgrade.",
        ],
        guide: [
          {
            title: "IT equipment maintenance for businesses in Dammam",
            text: "We maintain business IT, not home appliances: computers, servers, network devices and firewalls in offices, warehouses and factories.",
            points: [
              "Preventive visits to check servers, network and security equipment.",
              "Fault diagnosis, repair coordination and warranty claims with the manufacturer.",
              "An inventory of your devices with warranty and license dates.",
              "Remote support for users, with site visits when needed.",
            ],
          },
        ],
        faq: [
          {
            q: "Do you maintain business computers in Dammam?",
            a: "Yes. We maintain computers, servers, network devices and firewalls for businesses in Dammam, Khobar and Dhahran, under an annual maintenance contract after an initial assessment.",
          },
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
        metaTitle: "الدعم الفني وصيانة أجهزة الشركات في الدمام | بيت الأفكار",
        metaDescription:
          "دعم فني وخدمات تقنية معلومات مُدارة للشركات في الدمام: عقود صيانة سنوية، ودعم عن بُعد، وزيارات ميدانية، ومراقبة وتحديثات وفحص النسخ الاحتياطية.",
        name: "الدعم الفني في الدمام",
        h1: "دعم فني وصيانة أجهزة الشركات في الدمام",
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
          "عقود بحجم منشأتك، من مكتب واحد إلى عدة فروع.",
          "الفريق نفسه يصمم ويورّد التحديث القادم لأنظمتك.",
        ],
        guide: [
          {
            title: "صيانة أجهزة الشركات في الدمام",
            text: "نصون أجهزة تقنية المعلومات للشركات، وليس الأجهزة المنزلية: الحواسيب والسيرفرات وأجهزة الشبكات وجدران الحماية في المكاتب والمستودعات والمصانع.",
            points: [
              "زيارات وقائية لفحص السيرفرات والشبكة وأجهزة الحماية.",
              "تشخيص الأعطال ومتابعة الإصلاح ومطالبات الضمان مع الشركة المصنعة.",
              "سجل بأجهزتك ومواعيد الضمان والتراخيص.",
              "دعم المستخدمين عن بُعد، مع زيارات ميدانية عند الحاجة.",
            ],
          },
        ],
        faq: [
          {
            q: "هل تقدمون صيانة أجهزة الكمبيوتر للشركات في الدمام؟",
            a: "نعم. نصون أجهزة الحاسب والسيرفرات وأجهزة الشبكات وجدران الحماية للشركات في الدمام والخبر والظهران، ضمن عقد صيانة سنوي بعد تقييم أولي للأجهزة.",
          },
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
    group: "dammam",
    city: { en: "Dammam", ar: "الدمام" },
    areaServed: DAMMAM_AREA,
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
    group: "dammam",
    city: { en: "Dammam", ar: "الدمام" },
    areaServed: DAMMAM_AREA,
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
    group: "dammam",
    city: { en: "Dammam", ar: "الدمام" },
    areaServed: DAMMAM_AREA,
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
  {
    slug: "structured-cabling-dammam",
    service: "structured-cabling",
    serviceType: "Structured cabling installation",
    group: "dammam",
    areaServed: DAMMAM_AREA,
    city: { en: "Dammam", ar: "الدمام" },
    content: {
      en: {
        metaTitle: "Structured Cabling in Dammam | Thoughts House",
        metaDescription:
          "Network cabling installation in Dammam and Khobar: Cat6, Cat6A and fiber, racks, labeling and testing for offices, warehouses and factories.",
        name: "Structured Cabling in Dammam",
        h1: "Structured Cabling & Network Cabling Installation in Dammam",
        summary:
          "Thoughts House installs structured cabling for offices, warehouses and factories in Dammam, Khobar, Dhahran and the rest of the Eastern Province: copper and fiber links, network racks, labeling, testing and documentation, planned and installed by our team in Dammam.",
        intro:
          "New offices, warehouse extensions and building fit-outs all need cabling that is planned before the ceilings close. Because our team is in Dammam, we can survey the site, follow the fit-out schedule and come back to test and hand over.",
        offersTitle: "What we install in Dammam",
        offers: [
          {
            title: "Cat6 and Cat6A cabling",
            text: "Copper cabling for desks, access points, cameras and phones.",
            service: "structured-cabling",
          },
          {
            title: "Fiber backbone",
            text: "Fiber links between floors, buildings and racks.",
            service: "structured-cabling",
          },
          {
            title: "Racks and patch panels",
            text: "Network racks, patch panels and cable management, installed and dressed neatly.",
            service: "structured-cabling",
          },
          {
            title: "Wi-Fi access points",
            text: "Access point cabling and installation for offices and warehouses.",
            service: "wifi-installation",
          },
          {
            title: "CCTV cabling",
            text: "Cabling and installation for IP camera systems.",
            service: "cctv-installation",
          },
          {
            title: "Network switching",
            text: "Switches and network setup once the cabling is in place.",
            service: "network-infrastructure",
          },
        ],
        whyTitle: "Why choose us for cabling in Dammam",
        why: [
          "Site surveys in Dammam, Khobar and Dhahran are easy to schedule from our Dammam base.",
          "One team for cabling, switches, Wi-Fi, cameras and firewall, so the network works when the cabling is finished.",
          "Every link labeled and tested, with documentation handed over.",
          "Cabling planned around your fit-out contractor's schedule.",
        ],
        guide: [
          {
            title: "How a cabling project runs",
            text: "Most projects follow the same steps:",
            points: [
              "Site survey and an outlet plan for every room.",
              "A quotation with cable runs, outlets and rack equipment listed.",
              "Installation during the fit-out, before ceilings and walls close.",
              "Testing and labeling of every link.",
              "Handover of drawings and test results.",
              "Network setup: switches, Wi-Fi and firewall.",
            ],
          },
          {
            title: "Cat6 or Cat6A?",
            text: "Cat6 suits most offices today. Cat6A costs more but supports 10 Gbps over the full 100 m run and suits newer Wi-Fi access points, so it is worth considering for new buildings. Our Cat6 vs Cat6A guide explains the difference.",
          },
        ],
        faq: [
          {
            q: "Do you install network cabling in Dammam and Khobar?",
            a: "Yes. We install structured cabling in Dammam, Khobar, Dhahran and the rest of the Eastern Province, from site survey to testing and handover.",
          },
          {
            q: "Can you work with our fit-out contractor?",
            a: "Yes. We plan cable routes and outlet positions with your contractor so the cabling is installed before ceilings and walls are closed.",
          },
          {
            q: "Do you install cabling in warehouses and factories?",
            a: "Yes. We install cabling for warehouses and industrial sites, including fiber links between buildings and cabling for access points and cameras.",
          },
        ],
      },
      ar: {
        metaTitle: "تمديد شبكات في الدمام | بيت الأفكار",
        metaDescription:
          "تمديد شبكات وكابلات للشركات في الدمام والخبر: كابلات Cat6 وCat6A والألياف الضوئية والرفوف والترقيم والاختبار للمكاتب والمستودعات والمصانع في المنطقة الشرقية.",
        name: "تمديد الشبكات في الدمام",
        h1: "تمديد شبكات وكابلات للشركات في الدمام",
        summary:
          "يمدد بيت الأفكار شبكات الكابلات للمكاتب والمستودعات والمصانع في الدمام والخبر والظهران وبقية المنطقة الشرقية: كابلات نحاسية وألياف ضوئية، ورفوف شبكات، وترقيم واختبار وتوثيق، يخطط لها وينفذها فريقنا في الدمام.",
        intro:
          "تحتاج المكاتب الجديدة وتوسعات المستودعات وأعمال التشطيب إلى تمديدات مخططة قبل إغلاق الأسقف. ولأن فريقنا في الدمام، نعاين الموقع ونتابع جدول التشطيب ونعود للاختبار والتسليم.",
        offersTitle: "ما ننفذه في الدمام",
        offers: [
          {
            title: "كابلات Cat6 وCat6A",
            text: "تمديدات نحاسية للمكاتب ونقاط الوصول والكاميرات والهواتف.",
            service: "structured-cabling",
          },
          {
            title: "الألياف الضوئية",
            text: "وصلات ألياف بين الطوابق والمباني والرفوف.",
            service: "structured-cabling",
          },
          {
            title: "الرفوف ولوحات التوصيل",
            text: "رفوف الشبكة ولوحات التوصيل وتنظيم الكابلات بشكل مرتب.",
            service: "structured-cabling",
          },
          {
            title: "نقاط وصول Wi-Fi",
            text: "تمديد وتركيب نقاط الوصول للمكاتب والمستودعات.",
            service: "wifi-installation",
          },
          {
            title: "تمديدات الكاميرات",
            text: "تمديد وتركيب أنظمة كاميرات IP.",
            service: "cctv-installation",
          },
          {
            title: "السويتشات وإعداد الشبكة",
            text: "تركيب السويتشات وإعداد الشبكة بعد اكتمال التمديدات.",
            service: "network-infrastructure",
          },
        ],
        whyTitle: "لماذا تختارنا لتمديد الشبكات في الدمام",
        why: [
          "يسهل جدولة المعاينة في الدمام والخبر والظهران من مقرّنا في الدمام.",
          "فريق واحد للتمديدات والسويتشات وWi-Fi والكاميرات وجدار الحماية، فتعمل الشبكة فور انتهاء التمديد.",
          "ترقيم واختبار كل نقطة، وتسليم الوثائق.",
          "تخطيط التمديدات بحسب جدول مقاول التشطيب.",
        ],
        guide: [
          {
            title: "كيف ينفذ مشروع تمديد الشبكات",
            text: "تمر معظم المشاريع بالخطوات نفسها:",
            points: [
              "معاينة الموقع ومخطط النقاط لكل غرفة.",
              "عرض سعر يحدد مسارات الكابلات والنقاط ومعدات الرف.",
              "التمديد أثناء التشطيب وقبل إغلاق الأسقف والجدران.",
              "اختبار كل نقطة وترقيمها.",
              "تسليم المخططات ونتائج الاختبار.",
              "إعداد الشبكة: السويتشات وWi-Fi وجدار الحماية.",
            ],
          },
          {
            title: "Cat6 أم Cat6A؟",
            text: "تناسب Cat6 معظم المكاتب اليوم. أما Cat6A فأعلى تكلفة لكنها تدعم 10 جيجابت على كامل مسافة 100 متر وتناسب نقاط الوصول الحديثة، لذلك تستحق النظر في المباني الجديدة. ويشرح دليل الفرق بين Cat6 وCat6A ذلك بالتفصيل.",
          },
        ],
        faq: [
          {
            q: "هل تنفذون تمديد الشبكات في الدمام والخبر؟",
            a: "نعم. ننفذ تمديد الشبكات في الدمام والخبر والظهران وبقية المنطقة الشرقية، من المعاينة حتى الاختبار والتسليم.",
          },
          {
            q: "هل يمكنكم العمل مع مقاول التشطيب؟",
            a: "نعم. نخطط مسارات الكابلات ومواقع النقاط مع المقاول، حتى تُمدد الكابلات قبل إغلاق الأسقف والجدران.",
          },
          {
            q: "هل تمددون الشبكات في المستودعات والمصانع؟",
            a: "نعم. نمدد شبكات المستودعات والمواقع الصناعية، ومنها وصلات الألياف بين المباني وتمديدات نقاط الوصول والكاميرات.",
          },
        ],
      },
    },
  },
];

export const LOCAL_PAGES: LocalPage[] = [...DAMMAM_PAGES, ...CITY_PAGES];

export function getLocalPage(slug: LocalSlug) {
  const page = LOCAL_PAGES.find(p => p.slug === slug);
  if (!page) throw new Error(`Unknown local page: ${slug}`);
  return page;
}
