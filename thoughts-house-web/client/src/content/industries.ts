/*
 * IT maintenance contract (AMC) pages by industry:
 * /services/it-support-amc/<sector>/ and /ar/services/it-support-amc/<sector>/.
 */
import type { Language } from "@/seo";

export type IndustrySlug =
  | "healthcare"
  | "education"
  | "hospitality"
  | "logistics-industrial";

interface IndustryCopy {
  metaTitle: string;
  metaDescription: string;
  name: string;
  h1: string;
  summary: string;
  intro: string;
  challengesTitle: string;
  challenges: string[];
  coverageTitle: string;
  coverage: { title: string; text: string }[];
  faq: { q: string; a: string }[];
}

export interface Industry {
  slug: IndustrySlug;
  image: string;
  content: Record<Language, IndustryCopy>;
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "healthcare",
    image: "/images/cybersecurity-1280.webp",
    content: {
      en: {
        metaTitle: "IT AMC for Hospitals & Clinics in Saudi Arabia",
        metaDescription:
          "IT maintenance contracts for hospitals, clinics and labs in Saudi Arabia: uptime for clinical systems, network security, backups and patient data protection.",
        name: "Healthcare",
        h1: "IT Maintenance Contracts for Hospitals & Clinics in Saudi Arabia",
        summary:
          "Thoughts House provides IT annual maintenance contracts (AMC) for hospitals, clinics, laboratories and pharmacies across Saudi Arabia, keeping clinical and administrative systems available, networks secure and patient data protected.",
        intro:
          "In healthcare, IT downtime delays patients. Clinics and hospitals depend on networks, workstations, printers and servers being available every shift, and on patient data being protected under the Personal Data Protection Law.",
        challengesTitle: "IT challenges in healthcare",
        challenges: [
          "Clinical and front-desk systems that must stay available during every shift",
          "Patient data that must be protected and access-controlled",
          "Many shared workstations, label printers and scanners across departments",
          "Medical and administrative devices on the same network that need separating",
        ],
        coverageTitle: "What a healthcare IT AMC covers",
        coverage: [
          {
            title: "Preventive maintenance",
            text: "Scheduled checks of servers, network equipment, workstations and printers in each department.",
          },
          {
            title: "Network segmentation and security",
            text: "Separate networks for clinical, administrative, guest and device traffic, with firewall and endpoint protection maintained.",
          },
          {
            title: "Backups and recovery",
            text: "Monitored backups and periodic restore tests for patient and administrative systems.",
          },
          {
            title: "Support for every shift",
            text: "Clear support channels and escalation so issues are handled without disrupting patient care.",
          },
          {
            title: "Asset, license and warranty tracking",
            text: "An up-to-date inventory and reminders before licenses and warranties expire.",
          },
        ],
        faq: [
          {
            q: "Do you support clinics with several branches?",
            a: "Yes. One contract can cover multiple branches across Saudi Arabia, with the same maintenance schedule and support in each location.",
          },
          {
            q: "How do you help protect patient data?",
            a: "We maintain access controls, endpoint protection, firewalls, encryption and backups, and separate clinical networks from guest and device networks, supporting your obligations under the PDPL.",
          },
        ],
      },
      ar: {
        metaTitle: "عقود صيانة تقنية المعلومات للمستشفيات والعيادات",
        metaDescription:
          "عقود صيانة سنوية لتقنية المعلومات للمستشفيات والعيادات والمختبرات والصيدليات في السعودية: جاهزية الأنظمة وأمن الشبكات والنسخ الاحتياطي وحماية بيانات المرضى.",
        name: "القطاع الصحي",
        h1: "عقود صيانة تقنية المعلومات للمستشفيات والعيادات في السعودية",
        summary:
          "يقدم بيت الأفكار عقود صيانة سنوية لتقنية المعلومات للمستشفيات والعيادات والمختبرات والصيدليات في جميع مناطق المملكة، لإبقاء الأنظمة الطبية والإدارية متاحة والشبكات آمنة وبيانات المرضى محمية.",
        intro:
          "في القطاع الصحي يعني توقف التقنية تأخر المرضى. تعتمد العيادات والمستشفيات على جاهزية الشبكات والأجهزة والطابعات والخوادم في كل وردية، وعلى حماية بيانات المرضى وفق نظام حماية البيانات الشخصية.",
        challengesTitle: "تحديات تقنية المعلومات في القطاع الصحي",
        challenges: [
          "أنظمة طبية وأنظمة استقبال يجب أن تبقى متاحة في كل وردية",
          "بيانات مرضى يجب حمايتها والتحكم في الوصول إليها",
          "عدد كبير من الأجهزة المشتركة وطابعات الملصقات والماسحات في الأقسام",
          "أجهزة طبية وإدارية على الشبكة نفسها تحتاج إلى فصل",
        ],
        coverageTitle: "ماذا يشمل عقد الصيانة للقطاع الصحي",
        coverage: [
          {
            title: "الصيانة الوقائية",
            text: "فحوصات دورية للخوادم وأجهزة الشبكة والحواسيب والطابعات في كل قسم.",
          },
          {
            title: "فصل الشبكات وحمايتها",
            text: "شبكات منفصلة للأنظمة الطبية والإدارية والزوار والأجهزة، مع صيانة جدران الحماية وحماية الأجهزة.",
          },
          {
            title: "النسخ الاحتياطي والاستعادة",
            text: "نسخ احتياطي مراقَب واختبارات استعادة دورية لأنظمة المرضى والأنظمة الإدارية.",
          },
          {
            title: "دعم لكل وردية",
            text: "قنوات دعم وتصعيد واضحة لمعالجة الأعطال دون تعطيل رعاية المرضى.",
          },
          {
            title: "متابعة الأصول والتراخيص والضمانات",
            text: "سجل محدّث وتنبيهات قبل انتهاء التراخيص والضمانات.",
          },
        ],
        faq: [
          {
            q: "هل تدعمون العيادات متعددة الفروع؟",
            a: "نعم. يمكن لعقد واحد أن يغطي فروعاً متعددة في مناطق المملكة بنفس جدول الصيانة والدعم في كل موقع.",
          },
          {
            q: "كيف تساعدون في حماية بيانات المرضى؟",
            a: "نصون ضوابط الوصول وحماية الأجهزة وجدران الحماية والتشفير والنسخ الاحتياطي، ونفصل الشبكات الطبية عن شبكات الزوار والأجهزة، بما يدعم التزاماتكم وفق نظام حماية البيانات الشخصية.",
          },
        ],
      },
    },
  },
  {
    slug: "education",
    image: "/images/wifi-installation-1280.webp",
    content: {
      en: {
        metaTitle: "IT AMC for Schools & Universities in Saudi Arabia",
        metaDescription:
          "IT maintenance contracts for schools and universities in Saudi Arabia: classroom technology, Wi-Fi, computer labs, content filtering and backups.",
        name: "Education",
        h1: "IT Maintenance Contracts for Schools & Universities in Saudi Arabia",
        summary:
          "Thoughts House provides IT annual maintenance contracts (AMC) for schools, universities and training centers across Saudi Arabia, keeping classroom technology, Wi-Fi, computer labs and administration systems running and secure.",
        intro:
          "Schools run on a tight timetable. When projectors, lab computers or Wi-Fi fail, lessons stop. An education AMC keeps classroom and administrative IT ready for every school day and protects student data.",
        challengesTitle: "IT challenges in education",
        challenges: [
          "Hundreds of student devices connecting to Wi-Fi at the same time",
          "Computer labs that must be ready and consistent for every lesson",
          "Content filtering and safe internet access for students",
          "Student and staff data that must be protected",
        ],
        coverageTitle: "What an education IT AMC covers",
        coverage: [
          {
            title: "Classroom and lab maintenance",
            text: "Regular checks and fixes for lab computers, classroom PCs, projectors, displays and printers.",
          },
          {
            title: "Wi-Fi for high device density",
            text: "Monitoring and tuning of access points so classrooms and halls stay connected.",
          },
          {
            title: "Content filtering and security",
            text: "Firewall web filtering, endpoint protection and separate student, staff and guest networks.",
          },
          {
            title: "Term-break projects",
            text: "Lab re-imaging, upgrades and cabling work scheduled during holidays to avoid disrupting lessons.",
          },
          {
            title: "Backups and support",
            text: "Monitored backups of administration systems and clear support channels for staff.",
          },
        ],
        faq: [
          {
            q: "Can maintenance work be done outside school hours?",
            a: "Yes. Preventive maintenance and larger upgrades are scheduled after hours, at weekends or during term breaks.",
          },
          {
            q: "Do you provide content filtering for students?",
            a: "Yes. We configure and maintain web filtering on the firewall, with separate policies for students and staff.",
          },
        ],
      },
      ar: {
        metaTitle: "عقود صيانة تقنية المعلومات للمدارس والجامعات | بيت الأفكار",
        metaDescription:
          "عقود صيانة تقنية المعلومات للمدارس والجامعات ومراكز التدريب في السعودية: تقنيات الفصول وشبكات Wi-Fi ومعامل الحاسب وتصفية المحتوى والنسخ الاحتياطي.",
        name: "قطاع التعليم",
        h1: "عقود صيانة تقنية المعلومات للمدارس والجامعات في السعودية",
        summary:
          "يقدم بيت الأفكار عقود صيانة سنوية لتقنية المعلومات للمدارس والجامعات ومراكز التدريب في جميع مناطق المملكة، لإبقاء تقنيات الفصول وشبكات Wi-Fi ومعامل الحاسب والأنظمة الإدارية جاهزة وآمنة.",
        intro:
          "تعمل المدارس وفق جدول دقيق، وعندما تتعطل أجهزة العرض أو حواسيب المعامل أو شبكة Wi-Fi تتوقف الدروس. يحافظ عقد الصيانة على جاهزية تقنيات الفصول والإدارة في كل يوم دراسي ويحمي بيانات الطلاب.",
        challengesTitle: "تحديات تقنية المعلومات في التعليم",
        challenges: [
          "مئات أجهزة الطلاب تتصل بشبكة Wi-Fi في الوقت نفسه",
          "معامل حاسب يجب أن تكون جاهزة ومتطابقة لكل درس",
          "تصفية المحتوى ووصول آمن للإنترنت للطلاب",
          "بيانات طلاب وموظفين يجب حمايتها",
        ],
        coverageTitle: "ماذا يشمل عقد الصيانة لقطاع التعليم",
        coverage: [
          {
            title: "صيانة الفصول والمعامل",
            text: "فحوصات وإصلاحات منتظمة لحواسيب المعامل والفصول وأجهزة العرض والشاشات والطابعات.",
          },
          {
            title: "Wi-Fi للكثافة العالية",
            text: "مراقبة نقاط الوصول وضبطها لتبقى الفصول والقاعات متصلة.",
          },
          {
            title: "تصفية المحتوى والحماية",
            text: "تصفية الويب في جدار الحماية وحماية الأجهزة وشبكات منفصلة للطلاب والموظفين والزوار.",
          },
          {
            title: "مشاريع الإجازات",
            text: "إعادة تجهيز المعامل والتحديثات والتمديدات خلال الإجازات لتجنب تعطيل الدروس.",
          },
          {
            title: "النسخ الاحتياطي والدعم",
            text: "نسخ احتياطي مراقَب للأنظمة الإدارية وقنوات دعم واضحة للموظفين.",
          },
        ],
        faq: [
          {
            q: "هل يمكن تنفيذ الصيانة خارج أوقات الدوام؟",
            a: "نعم. تُجدول الصيانة الوقائية والتحديثات الكبيرة بعد الدوام أو في عطلة نهاية الأسبوع أو خلال الإجازات.",
          },
          {
            q: "هل توفرون تصفية المحتوى للطلاب؟",
            a: "نعم. نُعدّ تصفية الويب في جدار الحماية ونصونها، مع سياسات منفصلة للطلاب والموظفين.",
          },
        ],
      },
    },
  },
  {
    slug: "hospitality",
    image: "/images/it-supply-1280.webp",
    content: {
      en: {
        metaTitle: "IT AMC for Hotels & Hospitality in Saudi Arabia",
        metaDescription:
          "IT maintenance contracts for hotels and restaurants in Saudi Arabia: guest Wi-Fi, front-desk and POS systems, CCTV, network security and support.",
        name: "Hospitality",
        h1: "IT Maintenance Contracts for Hotels & Hospitality in Saudi Arabia",
        summary:
          "Thoughts House provides IT annual maintenance contracts (AMC) for hotels, serviced apartments and restaurants across Saudi Arabia, keeping guest Wi-Fi, front-desk and point-of-sale systems, CCTV and back-office IT running around the clock.",
        intro:
          "Guests judge a hotel by its Wi-Fi as much as its rooms, and a failed front-desk or POS system stops check-ins and sales. A hospitality AMC keeps guest-facing and back-office technology running every day of the year.",
        challengesTitle: "IT challenges in hospitality",
        challenges: [
          "Guest Wi-Fi that must work in every room and public area",
          "Front-desk, booking and point-of-sale systems that cannot go down",
          "Guest and payment data that must be kept separate and secure",
          "CCTV and building systems sharing the network",
        ],
        coverageTitle: "What a hospitality IT AMC covers",
        coverage: [
          {
            title: "Guest Wi-Fi",
            text: "Monitoring and maintenance of access points across rooms, lobbies and outdoor areas, with a separate guest network.",
          },
          {
            title: "Front desk and POS",
            text: "Maintenance of front-desk PCs, printers and point-of-sale terminals, and the network they depend on.",
          },
          {
            title: "Network security",
            text: "Firewall and endpoint protection maintained, with guest, staff, payment and device networks kept apart.",
          },
          {
            title: "CCTV maintenance",
            text: "Camera health checks, firmware updates and recording verification.",
          },
          {
            title: "Support for peak seasons",
            text: "Preventive checks before busy periods and clear escalation when issues arise.",
          },
        ],
        faq: [
          {
            q: "Can you cover several hotels or branches?",
            a: "Yes. One contract can cover multiple properties across Saudi Arabia, with consistent standards at each site.",
          },
          {
            q: "Can guest Wi-Fi be kept separate from hotel systems?",
            a: "Yes. Guests are placed on an internet-only network that cannot reach front-desk, POS or back-office systems.",
          },
        ],
      },
      ar: {
        metaTitle: "عقود صيانة تقنية المعلومات للفنادق والضيافة | بيت الأفكار",
        metaDescription:
          "عقود صيانة تقنية المعلومات للفنادق والشقق الفندقية والمطاعم في السعودية: Wi-Fi للنزلاء وأنظمة الاستقبال ونقاط البيع وكاميرات المراقبة وأمن الشبكات والدعم.",
        name: "قطاع الضيافة",
        h1: "عقود صيانة تقنية المعلومات للفنادق وقطاع الضيافة في السعودية",
        summary:
          "يقدم بيت الأفكار عقود صيانة سنوية لتقنية المعلومات للفنادق والشقق الفندقية والمطاعم في جميع مناطق المملكة، لإبقاء شبكة Wi-Fi للنزلاء وأنظمة الاستقبال ونقاط البيع وكاميرات المراقبة وأنظمة المكاتب تعمل على مدار الساعة.",
        intro:
          "يحكم النزلاء على الفندق من شبكة Wi-Fi بقدر ما يحكمون عليه من الغرف، وتعطل نظام الاستقبال أو نقاط البيع يوقف تسجيل الدخول والمبيعات. يحافظ عقد الصيانة على عمل تقنيات النزلاء والمكاتب كل يوم في السنة.",
        challengesTitle: "تحديات تقنية المعلومات في الضيافة",
        challenges: [
          "شبكة Wi-Fi للنزلاء يجب أن تعمل في كل غرفة ومساحة عامة",
          "أنظمة استقبال وحجز ونقاط بيع لا تحتمل التوقف",
          "بيانات نزلاء ومدفوعات يجب فصلها وحمايتها",
          "كاميرات المراقبة وأنظمة المبنى تتشارك الشبكة",
        ],
        coverageTitle: "ماذا يشمل عقد الصيانة لقطاع الضيافة",
        coverage: [
          {
            title: "Wi-Fi للنزلاء",
            text: "مراقبة نقاط الوصول وصيانتها في الغرف والردهات والمساحات الخارجية، مع شبكة منفصلة للنزلاء.",
          },
          {
            title: "الاستقبال ونقاط البيع",
            text: "صيانة حواسيب الاستقبال والطابعات وأجهزة نقاط البيع والشبكة التي تعتمد عليها.",
          },
          {
            title: "أمن الشبكات",
            text: "صيانة جدار الحماية وحماية الأجهزة، مع فصل شبكات النزلاء والموظفين والمدفوعات والأجهزة.",
          },
          {
            title: "صيانة كاميرات المراقبة",
            text: "فحص الكاميرات وتحديث برامجها والتحقق من التسجيل.",
          },
          {
            title: "دعم في مواسم الذروة",
            text: "فحوصات وقائية قبل المواسم المزدحمة وتصعيد واضح عند حدوث الأعطال.",
          },
        ],
        faq: [
          {
            q: "هل تغطون عدة فنادق أو فروع؟",
            a: "نعم. يمكن لعقد واحد أن يغطي عدة منشآت في مناطق المملكة بمعايير موحدة في كل موقع.",
          },
          {
            q: "هل يمكن فصل شبكة النزلاء عن أنظمة الفندق؟",
            a: "نعم. يُوضع النزلاء على شبكة إنترنت فقط لا تصل إلى أنظمة الاستقبال أو نقاط البيع أو المكاتب.",
          },
        ],
      },
    },
  },
  {
    slug: "logistics-industrial",
    image: "/images/network-infrastructure-1280.webp",
    content: {
      en: {
        metaTitle:
          "IT AMC for Warehouses, Logistics & Factories in Saudi Arabia",
        metaDescription:
          "IT maintenance contracts for warehouses and factories in Saudi Arabia: warehouse Wi-Fi, scanners, servers, network security and multi-site support.",
        name: "Logistics & Industrial",
        h1: "IT Maintenance Contracts for Warehouses, Logistics & Factories in Saudi Arabia",
        summary:
          "Thoughts House provides IT annual maintenance contracts (AMC) for warehouses, logistics companies and factories across Saudi Arabia, keeping warehouse Wi-Fi, handheld scanners, servers, networks and security running across sites and shifts.",
        intro:
          "In a warehouse or plant, a Wi-Fi dead spot or failed server stops scanning, picking and dispatch. An industrial IT AMC keeps the network, devices and systems behind your operations running across every site and shift.",
        challengesTitle: "IT challenges in logistics and industry",
        challenges: [
          "Wi-Fi coverage across high racking, yards and large floor areas",
          "Handheld scanners, label printers and terminals used on every shift",
          "Several sites, yards and branches that need consistent IT",
          "Office and operational networks that need to be separated and secured",
        ],
        coverageTitle: "What a logistics and industrial IT AMC covers",
        coverage: [
          {
            title: "Warehouse Wi-Fi",
            text: "Monitoring and tuning of access points for scanners and vehicles across aisles, racking and yards.",
          },
          {
            title: "Devices and printers",
            text: "Maintenance of handheld terminals, label printers, workstations and their network connections.",
          },
          {
            title: "Servers and backups",
            text: "Health checks, updates and monitored backups for the systems that run your operations.",
          },
          {
            title: "Network security",
            text: "Firewall and endpoint protection maintained, with office and operational networks separated.",
          },
          {
            title: "Multi-site support",
            text: "One contract covering every warehouse, plant and branch in the Kingdom.",
          },
        ],
        faq: [
          {
            q: "Do you support sites outside major cities?",
            a: "Yes. We support warehouses, plants and yards across Saudi Arabia, combining remote support with scheduled site visits.",
          },
          {
            q: "Can maintenance be scheduled around our shifts?",
            a: "Yes. Preventive maintenance and changes are planned in agreed windows so operations are not interrupted.",
          },
        ],
      },
      ar: {
        metaTitle:
          "عقود صيانة تقنية المعلومات للمستودعات والمصانع | بيت الأفكار",
        metaDescription:
          "عقود صيانة تقنية المعلومات للمستودعات وشركات الخدمات اللوجستية والمصانع في السعودية: Wi-Fi للمستودعات والماسحات والخوادم وأمن الشبكات والدعم متعدد المواقع.",
        name: "اللوجستيات والصناعة",
        h1: "عقود صيانة تقنية المعلومات للمستودعات والخدمات اللوجستية والمصانع في السعودية",
        summary:
          "يقدم بيت الأفكار عقود صيانة سنوية لتقنية المعلومات للمستودعات وشركات الخدمات اللوجستية والمصانع في جميع مناطق المملكة، لإبقاء شبكات Wi-Fi في المستودعات والماسحات اليدوية والخوادم والشبكات والحماية تعمل في كل المواقع والورديات.",
        intro:
          "في المستودع أو المصنع، تؤدي منطقة بلا تغطية Wi-Fi أو خادم متعطل إلى توقف المسح والتجهيز والشحن. يحافظ عقد الصيانة على عمل الشبكة والأجهزة والأنظمة التي تقوم عليها عملياتك في كل موقع ووردية.",
        challengesTitle: "تحديات تقنية المعلومات في اللوجستيات والصناعة",
        challenges: [
          "تغطية Wi-Fi بين الأرفف العالية والساحات والمساحات الكبيرة",
          "ماسحات يدوية وطابعات ملصقات وأجهزة تُستخدم في كل وردية",
          "عدة مواقع وساحات وفروع تحتاج إلى تقنية موحدة",
          "شبكات مكتبية وتشغيلية تحتاج إلى فصل وحماية",
        ],
        coverageTitle: "ماذا يشمل عقد الصيانة للوجستيات والصناعة",
        coverage: [
          {
            title: "Wi-Fi المستودعات",
            text: "مراقبة نقاط الوصول وضبطها للماسحات والمركبات بين الممرات والأرفف والساحات.",
          },
          {
            title: "الأجهزة والطابعات",
            text: "صيانة الأجهزة اليدوية وطابعات الملصقات والحواسيب واتصالاتها بالشبكة.",
          },
          {
            title: "الخوادم والنسخ الاحتياطي",
            text: "فحوصات وتحديثات ونسخ احتياطي مراقَب للأنظمة التي تدير عملياتك.",
          },
          {
            title: "أمن الشبكات",
            text: "صيانة جدار الحماية وحماية الأجهزة مع فصل الشبكات المكتبية والتشغيلية.",
          },
          {
            title: "دعم متعدد المواقع",
            text: "عقد واحد يغطي كل مستودع ومصنع وفرع في المملكة.",
          },
        ],
        faq: [
          {
            q: "هل تدعمون المواقع خارج المدن الرئيسية؟",
            a: "نعم. ندعم المستودعات والمصانع والساحات في جميع مناطق المملكة بالجمع بين الدعم عن بُعد والزيارات الميدانية المجدولة.",
          },
          {
            q: "هل يمكن جدولة الصيانة حسب الورديات؟",
            a: "نعم. تُخطط الصيانة الوقائية والتغييرات في نوافذ متفق عليها حتى لا تتوقف العمليات.",
          },
        ],
      },
    },
  },
];

export function getIndustry(slug: IndustrySlug) {
  return INDUSTRIES.find(i => i.slug === slug)!;
}
