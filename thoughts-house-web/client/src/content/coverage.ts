/*
 * Coverage page (/saudi-arabia/ and /ar/saudi-arabia/): how Thoughts House serves organizations
 * across the Kingdom, region by region.
 */
import type { Language } from "@/seo";

interface Region {
  name: string;
  cities: string;
  text: string;
}

interface CoverageCopy {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  summary: string;
  intro: string;
  howTitle: string;
  how: { title: string; text: string }[];
  regionsTitle: string;
  regions: Region[];
  faqTitle: string;
  faq: { q: string; a: string }[];
}

/** Places listed as areaServed in structured data. */
export const SERVED_PLACES = [
  "Riyadh",
  "Jeddah",
  "Makkah",
  "Madinah",
  "Dammam",
  "Khobar",
  "Dhahran",
  "Jubail",
  "Al-Ahsa",
  "Qatif",
  "Yanbu",
  "Taif",
  "Buraidah",
  "Abha",
  "Khamis Mushait",
  "Tabuk",
  "Hail",
  "Jazan",
  "Najran",
];

export const COVERAGE: Record<Language, CoverageCopy> = {
  en: {
    metaTitle:
      "IT Services Across Saudi Arabia: Riyadh, Jeddah, Eastern Province | Thoughts House",
    metaDescription:
      "Thoughts House serves organizations in every region of Saudi Arabia, including Riyadh, Jeddah, Makkah, Madinah, Dammam, Khobar and Jubail, with IT supply, system integration, cybersecurity and support.",
    h1: "IT Services Across Saudi Arabia",
    summary:
      "Thoughts House is a Saudi IT company headquartered in Dammam that serves organizations in every region of the Kingdom, including Riyadh, Jeddah, Makkah, Madinah, the Eastern Province, Qassim, Asir and Tabuk, with IT hardware and software supply, system integration, cybersecurity, networking, cloud and backup, and IT maintenance contracts.",
    intro:
      "Many of our customers have offices, branches or sites in more than one city. We work with them wherever they are in the Kingdom, with one team responsible for design, supply, installation and support.",
    howTitle: "How we work with customers outside Dammam",
    how: [
      {
        title: "Design and configuration",
        text: "Requirements, design and most configuration work can be done remotely, so projects start quickly wherever you are.",
      },
      {
        title: "Nationwide supply",
        text: "Servers, network and security appliances, devices and licenses are supplied to your sites anywhere in Saudi Arabia.",
      },
      {
        title: "On-site work when it is needed",
        text: "Installation, cabling and site surveys are scheduled with each project, and visits are planned in advance.",
      },
      {
        title: "Ongoing support",
        text: "Remote support and maintenance contracts cover multi-site organizations with the same service in every location.",
      },
    ],
    regionsTitle: "Regions we serve",
    regions: [
      {
        name: "Eastern Province",
        cities: "Dammam, Khobar, Dhahran, Jubail, Al-Ahsa, Qatif",
        text: "Our home region and the centre of the Kingdom's energy, petrochemical and industrial sectors. We support offices, plants, warehouses and logistics operations with networks, security, servers and maintenance.",
      },
      {
        name: "Riyadh Region",
        cities: "Riyadh, Al-Kharj",
        text: "The capital and home to government entities, corporate headquarters and financial institutions, where cybersecurity compliance such as the NCA Essential Cybersecurity Controls is a priority.",
      },
      {
        name: "Makkah Region",
        cities: "Jeddah, Makkah, Taif",
        text: "Trade, ports, logistics, retail and hospitality, where reliable multi-branch networks, Wi-Fi and secure connectivity matter most.",
      },
      {
        name: "Madinah Region",
        cities: "Madinah, Yanbu",
        text: "Hospitality, services and the industrial city of Yanbu, with needs ranging from guest Wi-Fi to industrial network security.",
      },
      {
        name: "Central, Southern and Northern Regions",
        cities: "Buraidah, Abha, Khamis Mushait, Tabuk, Hail, Jazan, Najran",
        text: "Organizations across Qassim, Asir, Tabuk, Hail, Jazan and Najran, supported remotely and on site as each project requires.",
      },
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "Does Thoughts House only work in Dammam?",
        a: "No. Our headquarters is in Dammam, but we serve organizations in every region of Saudi Arabia, including Riyadh, Jeddah, Makkah and Madinah.",
      },
      {
        q: "Can you support a company with branches in several cities?",
        a: "Yes. We design and support multi-site networks and security, supply equipment to every site, and cover all locations under one maintenance contract.",
      },
    ],
  },
  ar: {
    metaTitle:
      "خدمات تقنية المعلومات في جميع مناطق السعودية: الرياض وجدة والشرقية | بيت الأفكار",
    metaDescription:
      "يخدم بيت الأفكار المنشآت في جميع مناطق المملكة، ومنها الرياض وجدة ومكة والمدينة والدمام والخبر والجبيل، بتوريد الأجهزة وتكامل الأنظمة والأمن السيبراني والدعم الفني.",
    h1: "خدمات تقنية المعلومات في جميع مناطق المملكة",
    summary:
      "بيت الأفكار شركة تقنية معلومات سعودية مقرّها الدمام، تخدم المنشآت في جميع مناطق المملكة، ومنها الرياض وجدة ومكة والمدينة والمنطقة الشرقية والقصيم وعسير وتبوك، بتوريد الأجهزة والتراخيص وتكامل الأنظمة والأمن السيبراني والشبكات والسحابة والنسخ الاحتياطي وعقود الصيانة.",
    intro:
      "كثير من عملائنا لديهم مكاتب أو فروع أو مواقع في أكثر من مدينة. نعمل معهم أينما كانوا في المملكة، بفريق واحد مسؤول عن التصميم والتوريد والتركيب والدعم.",
    howTitle: "كيف نعمل مع العملاء خارج الدمام",
    how: [
      {
        title: "التصميم والإعداد",
        text: "يمكن إنجاز دراسة الاحتياجات والتصميم ومعظم أعمال الإعداد عن بُعد، فيبدأ المشروع بسرعة أينما كنت.",
      },
      {
        title: "التوريد لجميع المناطق",
        text: "نورّد السيرفرات وأجهزة الشبكات والحماية والحواسيب والتراخيص إلى مواقعك في أي مكان بالمملكة.",
      },
      {
        title: "العمل الميداني عند الحاجة",
        text: "تُجدول أعمال التركيب والتمديدات والمسح الميداني مع كل مشروع، وتُخطط الزيارات مسبقاً.",
      },
      {
        title: "الدعم المستمر",
        text: "يغطي الدعم عن بُعد وعقود الصيانة المنشآت متعددة الفروع بنفس مستوى الخدمة في كل موقع.",
      },
    ],
    regionsTitle: "المناطق التي نخدمها",
    regions: [
      {
        name: "المنطقة الشرقية",
        cities: "الدمام، الخبر، الظهران، الجبيل، الأحساء، القطيف",
        text: "منطقتنا الأم ومركز قطاعات الطاقة والبتروكيماويات والصناعة في المملكة. ندعم المكاتب والمصانع والمستودعات وعمليات الخدمات اللوجستية بالشبكات والحماية والسيرفرات والصيانة.",
      },
      {
        name: "منطقة الرياض",
        cities: "الرياض، الخرج",
        text: "العاصمة ومقر الجهات الحكومية والمقرات الرئيسية للشركات والمؤسسات المالية، حيث يمثّل الالتزام بالأمن السيبراني مثل الضوابط الأساسية للهيئة الوطنية أولوية.",
      },
      {
        name: "منطقة مكة المكرمة",
        cities: "جدة، مكة المكرمة، الطائف",
        text: "التجارة والموانئ والخدمات اللوجستية والتجزئة والضيافة، حيث تهمّ الشبكات الموثوقة متعددة الفروع وشبكات Wi-Fi والاتصال الآمن.",
      },
      {
        name: "منطقة المدينة المنورة",
        cities: "المدينة المنورة، ينبع",
        text: "الضيافة والخدمات ومدينة ينبع الصناعية، باحتياجات تمتد من شبكات Wi-Fi للزوار إلى أمن الشبكات الصناعية.",
      },
      {
        name: "المناطق الوسطى والجنوبية والشمالية",
        cities: "بريدة، أبها، خميس مشيط، تبوك، حائل، جازان، نجران",
        text: "المنشآت في القصيم وعسير وتبوك وحائل وجازان ونجران، ندعمها عن بُعد وميدانياً حسب متطلبات كل مشروع.",
      },
    ],
    faqTitle: "الأسئلة الشائعة",
    faq: [
      {
        q: "هل يعمل بيت الأفكار في الدمام فقط؟",
        a: "لا. مقرّنا في الدمام، لكننا نخدم المنشآت في جميع مناطق المملكة، ومنها الرياض وجدة ومكة المكرمة والمدينة المنورة.",
      },
      {
        q: "هل تدعمون شركة لديها فروع في عدة مدن؟",
        a: "نعم. نصمم الشبكات والحماية للمنشآت متعددة الفروع وندعمها، ونورّد الأجهزة لكل موقع، ونغطي جميع المواقع بعقد صيانة واحد.",
      },
    ],
  },
};
