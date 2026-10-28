/*
 * City landing pages outside Dammam (/it-company-<city>/ and /ar/...). Eastern Province cities are
 * served on site by the Dammam team; Riyadh and Jeddah are served remotely with scheduled visits.
 */
import type { LocalPage } from "./local";

export type CitySlug =
  | "it-company-khobar"
  | "it-company-dhahran"
  | "it-company-jubail"
  | "it-company-al-ahsa"
  | "it-company-riyadh"
  | "it-company-jeddah";

export const CITY_PAGES: LocalPage[] = [
  {
    slug: "it-company-khobar",
    service: "it-support-amc",
    serviceType: "IT services and system integration",
    group: "city",
    city: { en: "Khobar", ar: "الخبر" },
    areaServed: ["Khobar"],
    content: {
      en: {
        metaTitle: "IT Company in Khobar | Thoughts House",
        metaDescription:
          "IT company serving Khobar from our nearby Dammam office: IT support contracts, cybersecurity, networks, Wi-Fi and IT hardware supply for Khobar businesses.",
        name: "IT Company in Khobar",
        h1: "IT Company & IT Support in Khobar",
        summary:
          "Thoughts House serves businesses in Al Khobar from our office in nearby Dammam, with IT support and maintenance contracts, cybersecurity, networks and Wi-Fi, and IT hardware and licensing supply.",
        intro:
          "Khobar is home to corporate offices, retail, hospitality and professional services firms. Our engineers are based minutes away in Dammam, so site surveys, installations and on-site support in Khobar are part of our everyday work.",
        offersTitle: "IT services for Khobar businesses",
        offers: [
          {
            title: "IT support and maintenance",
            text: "Annual maintenance contracts with helpdesk, remote support and on-site visits.",
            service: "it-support-amc",
          },
          {
            title: "Cybersecurity",
            text: "Firewalls, endpoint protection and EDR, and email security.",
            service: "cybersecurity",
          },
          {
            title: "Office networks and Wi-Fi",
            text: "Switching, business Wi-Fi and structured cabling for offices, showrooms and hotels.",
            service: "network-infrastructure",
          },
          {
            title: "IT hardware and licensing",
            text: "Laptops, servers, network equipment and Microsoft licenses.",
            service: "it-supply",
          },
          {
            title: "Cloud and backup",
            text: "Microsoft 365, managed backup and disaster recovery.",
            service: "cloud-backup",
          },
        ],
        whyTitle: "Why Khobar businesses work with us",
        why: [
          "Engineers based in Dammam, close enough for regular on-site work in Khobar.",
          "One partner for support, security, networks and supply.",
          "25+ technology brands, including Cisco, Sophos, Dell, HP, Lenovo and Microsoft.",
          "24/7 support coverage for critical systems.",
        ],
        faq: [
          {
            q: "Do you provide on-site IT support in Khobar?",
            a: "Yes. Our team is based in Dammam and visits customers in Khobar for installations, surveys and support.",
          },
          {
            q: "Can you set up the network and IT for a new office in Khobar?",
            a: "Yes. We design and install cabling, switching, Wi-Fi, firewall and devices, and can support the office afterwards under a maintenance contract.",
          },
          {
            q: "Do you supply laptops and servers in Khobar?",
            a: "Yes. We supply and deliver business laptops, desktops, servers and licenses, and can install and configure them.",
          },
        ],
      },
      ar: {
        metaTitle: "شركة تقنية معلومات في الخبر | بيت الأفكار",
        metaDescription:
          "شركة تقنية معلومات تخدم الخبر من مكتبنا القريب في الدمام: عقود صيانة ودعم فني، وأمن سيبراني، وشبكات وWi-Fi، وتوريد أجهزة وتراخيص للشركات.",
        name: "شركة تقنية معلومات في الخبر",
        h1: "شركة تقنية معلومات ودعم فني في الخبر",
        summary:
          "يخدم بيت الأفكار الشركات في الخبر من مكتبنا القريب في الدمام، بعقود الدعم الفني والصيانة، والأمن السيبراني، والشبكات وWi-Fi، وتوريد الأجهزة والتراخيص.",
        intro:
          "تضم الخبر مكاتب الشركات والمحلات والفنادق ومكاتب الخدمات المهنية. ومهندسونا على بُعد دقائق في الدمام، فالمسح الميداني والتركيب والدعم في الموقع بالخبر جزء من عملنا اليومي.",
        offersTitle: "خدمات تقنية المعلومات لشركات الخبر",
        offers: [
          {
            title: "الدعم الفني والصيانة",
            text: "عقود صيانة سنوية بمكتب مساعدة ودعم عن بُعد وزيارات ميدانية.",
            service: "it-support-amc",
          },
          {
            title: "الأمن السيبراني",
            text: "جدران الحماية، وحماية الأجهزة وEDR، وحماية البريد.",
            service: "cybersecurity",
          },
          {
            title: "شبكات المكاتب وWi-Fi",
            text: "سويتشات وشبكات Wi-Fi وتمديدات للمكاتب والمعارض والفنادق.",
            service: "network-infrastructure",
          },
          {
            title: "توريد الأجهزة والتراخيص",
            text: "حواسيب وسيرفرات وأجهزة شبكات وتراخيص Microsoft.",
            service: "it-supply",
          },
          {
            title: "السحابة والنسخ الاحتياطي",
            text: "Microsoft 365 والنسخ الاحتياطي المُدار والتعافي من الكوارث.",
            service: "cloud-backup",
          },
        ],
        whyTitle: "لماذا تعمل معنا شركات الخبر",
        why: [
          "مهندسون في الدمام قريبون بما يكفي للعمل الميداني المنتظم في الخبر.",
          "شريك واحد للدعم والحماية والشبكات والتوريد.",
          "أكثر من 25 علامة تقنية، منها Cisco وSophos وDell وHP وLenovo وMicrosoft.",
          "تغطية دعم على مدار الساعة للأنظمة الحرجة.",
        ],
        faq: [
          {
            q: "هل تقدمون دعماً فنياً في الموقع بالخبر؟",
            a: "نعم. فريقنا في الدمام ويزور العملاء في الخبر للتركيب والمسح الميداني والدعم.",
          },
          {
            q: "هل تجهّزون الشبكة وتقنية المعلومات لمكتب جديد في الخبر؟",
            a: "نعم. نصمم وننفذ التمديدات والسويتشات وWi-Fi وجدار الحماية والأجهزة، ونستطيع دعم المكتب بعدها بعقد صيانة.",
          },
          {
            q: "هل تورّدون الحواسيب والسيرفرات في الخبر؟",
            a: "نعم. نورّد ونوصل الحواسيب والسيرفرات والتراخيص للشركات، ونستطيع تركيبها وإعدادها.",
          },
        ],
      },
    },
  },
  {
    slug: "it-company-dhahran",
    service: "cybersecurity",
    serviceType: "IT services and system integration",
    group: "city",
    city: { en: "Dhahran", ar: "الظهران" },
    areaServed: ["Dhahran"],
    content: {
      en: {
        metaTitle: "IT Company in Dhahran | Thoughts House",
        metaDescription:
          "IT services in Dhahran from our Dammam office: cybersecurity, networks, IT support contracts, servers and IT supply for companies and contractors.",
        name: "IT Company in Dhahran",
        h1: "IT Services & Cybersecurity in Dhahran",
        summary:
          "Thoughts House provides IT services to organizations in Dhahran from our nearby Dammam office: cybersecurity, networks, servers and storage, IT support contracts and IT hardware supply.",
        intro:
          "Many organizations in Dhahran work in or alongside the energy sector, where security expectations are high and downtime is costly. We help them secure, connect and support their IT, with engineers who can be on site from Dammam.",
        offersTitle: "IT services in Dhahran",
        offers: [
          {
            title: "Cybersecurity and compliance",
            text: "Firewalls, EDR, email security and NCA ECC gap assessments.",
            service: "cybersecurity",
          },
          {
            title: "Firewall installation",
            text: "Supply and configuration of Sophos, Palo Alto Networks, Check Point and Cisco firewalls.",
            service: "firewall-installation",
          },
          {
            title: "Networks",
            text: "Switching, Wi-Fi and structured cabling for offices and sites.",
            service: "network-infrastructure",
          },
          {
            title: "Servers and IT supply",
            text: "Servers, storage, laptops and licensing from leading brands.",
            service: "it-supply",
          },
          {
            title: "IT support contracts",
            text: "Maintenance, monitoring and support with on-site visits.",
            service: "it-support-amc",
          },
        ],
        whyTitle: "Why choose Thoughts House in Dhahran",
        why: [
          "Local team in Dammam for on-site work in Dhahran.",
          "Experience with Saudi cybersecurity requirements such as NCA ECC and PDPL.",
          "Design, supply, installation and support from one partner.",
          "Documented, tested installations.",
        ],
        faq: [
          {
            q: "Do you work with contractors and suppliers to the energy sector?",
            a: "Yes. We support companies of different sizes in Dhahran and the Eastern Province with security, networks, servers and support.",
          },
          {
            q: "Can you help us meet NCA cybersecurity requirements?",
            a: "Yes. We run gap assessments against the NCA Essential Cybersecurity Controls and implement the technical controls.",
          },
          {
            q: "Do you visit sites in Dhahran?",
            a: "Yes. Our engineers are based in Dammam and work on site in Dhahran for surveys, installations and support.",
          },
        ],
      },
      ar: {
        metaTitle: "شركة تقنية معلومات في الظهران | بيت الأفكار",
        metaDescription:
          "خدمات تقنية المعلومات في الظهران من مكتبنا في الدمام: أمن سيبراني، وشبكات، وعقود دعم فني، وسيرفرات، وتوريد أجهزة للشركات والمقاولين.",
        name: "شركة تقنية معلومات في الظهران",
        h1: "خدمات تقنية المعلومات والأمن السيبراني في الظهران",
        summary:
          "يقدم بيت الأفكار خدمات تقنية المعلومات للمنشآت في الظهران من مكتبنا القريب في الدمام: الأمن السيبراني، والشبكات، والسيرفرات والتخزين، وعقود الدعم الفني، وتوريد الأجهزة.",
        intro:
          "تعمل منشآت كثيرة في الظهران في قطاع الطاقة أو معه، حيث توقعات الأمن عالية والتوقف مكلف. نساعدها على حماية أنظمتها وربطها ودعمها، بمهندسين يحضرون إلى الموقع من الدمام.",
        offersTitle: "خدمات تقنية المعلومات في الظهران",
        offers: [
          {
            title: "الأمن السيبراني والامتثال",
            text: "جدران الحماية وEDR وحماية البريد وتقييم الفجوات وفق ضوابط الهيئة الوطنية.",
            service: "cybersecurity",
          },
          {
            title: "تركيب جدران الحماية",
            text: "توريد وإعداد جدران حماية Sophos وPalo Alto Networks وCheck Point وCisco.",
            service: "firewall-installation",
          },
          {
            title: "الشبكات",
            text: "سويتشات وWi-Fi وتمديدات للمكاتب والمواقع.",
            service: "network-infrastructure",
          },
          {
            title: "السيرفرات والتوريد",
            text: "سيرفرات وأنظمة تخزين وحواسيب وتراخيص من علامات رائدة.",
            service: "it-supply",
          },
          {
            title: "عقود الدعم الفني",
            text: "صيانة ومراقبة ودعم مع زيارات ميدانية.",
            service: "it-support-amc",
          },
        ],
        whyTitle: "لماذا تختار بيت الأفكار في الظهران",
        why: [
          "فريق محلي في الدمام للعمل الميداني في الظهران.",
          "خبرة بمتطلبات الأمن السيبراني السعودية مثل ضوابط الهيئة الوطنية ونظام حماية البيانات.",
          "التصميم والتوريد والتركيب والدعم من شريك واحد.",
          "تركيبات موثقة ومختبرة.",
        ],
        faq: [
          {
            q: "هل تعملون مع المقاولين والموردين لقطاع الطاقة؟",
            a: "نعم. ندعم شركات بأحجام مختلفة في الظهران والمنطقة الشرقية بالحماية والشبكات والسيرفرات والدعم.",
          },
          {
            q: "هل تساعدوننا على تلبية متطلبات الهيئة الوطنية للأمن السيبراني؟",
            a: "نعم. نجري تقييم الفجوات وفق الضوابط الأساسية للأمن السيبراني وننفذ الضوابط التقنية.",
          },
          {
            q: "هل تزورون المواقع في الظهران؟",
            a: "نعم. مهندسونا في الدمام ويعملون في الموقع بالظهران للمسح والتركيب والدعم.",
          },
        ],
      },
    },
  },
  {
    slug: "it-company-jubail",
    service: "network-infrastructure",
    serviceType: "Industrial IT and network services",
    group: "city",
    city: { en: "Jubail", ar: "الجبيل" },
    areaServed: ["Jubail"],
    content: {
      en: {
        metaTitle: "IT Company in Jubail | Thoughts House",
        metaDescription:
          "IT and network services in Jubail: industrial and warehouse Wi-Fi, structured cabling, firewalls, servers and IT support contracts for plants and contractors.",
        name: "IT Company in Jubail",
        h1: "IT & Network Solutions in Jubail",
        summary:
          "Thoughts House supports plants, contractors, warehouses and offices in Jubail with networks and Wi-Fi, structured cabling, cybersecurity, servers and IT support contracts, delivered from our Dammam office around 100 km away.",
        intro:
          "Jubail's industrial city brings large sites, harsh environments and many contractors working side by side. Networks must cover wide areas, security must separate office and industrial systems, and support must be reliable. We plan on-site work in Jubail in advance and support customers remotely in between.",
        offersTitle: "IT services in Jubail",
        offers: [
          {
            title: "Industrial and warehouse networks",
            text: "Network design, switching and fiber links across large sites.",
            service: "network-infrastructure",
          },
          {
            title: "Wi-Fi for large sites",
            text: "Coverage surveys and access points for warehouses, yards and offices.",
            service: "wifi-installation",
          },
          {
            title: "Structured cabling",
            text: "Copper and fiber cabling, racks, labelling and testing.",
            service: "structured-cabling",
          },
          {
            title: "Firewalls and network separation",
            text: "Firewalls and segmentation between office and industrial networks.",
            service: "firewall-installation",
          },
          {
            title: "IT support contracts",
            text: "Remote monitoring and support with scheduled on-site visits.",
            service: "it-support-amc",
          },
        ],
        whyTitle: "Why choose Thoughts House in Jubail",
        why: [
          "Eastern Province team, with on-site work in Jubail planned in advance.",
          "Experience with large-area Wi-Fi and fiber networks.",
          "Security that separates office IT from industrial systems.",
          "Supply, installation and support from one partner.",
        ],
        faq: [
          {
            q: "Do you work on industrial sites in Jubail?",
            a: "Yes. We design and install networks, Wi-Fi and cabling for plants, warehouses, yards and site offices in Jubail.",
          },
          {
            q: "How do you support customers in Jubail?",
            a: "Through remote monitoring and support, with on-site visits from our Dammam team scheduled for surveys, installation and maintenance.",
          },
          {
            q: "Can you secure our operational technology (OT) network?",
            a: "We secure the boundary between office and industrial networks with firewalls and segmentation. For deeper OT security requirements, such as the NCA OTCC, we scope the work with you.",
          },
        ],
      },
      ar: {
        metaTitle: "شركة تقنية معلومات وشبكات في الجبيل | بيت الأفكار",
        metaDescription:
          "خدمات تقنية المعلومات والشبكات في الجبيل: Wi-Fi للمواقع الصناعية والمستودعات، وتمديدات الشبكات، وجدران الحماية، والسيرفرات، وعقود الدعم الفني.",
        name: "شركة تقنية معلومات في الجبيل",
        h1: "حلول تقنية المعلومات والشبكات في الجبيل",
        summary:
          "يدعم بيت الأفكار المصانع والمقاولين والمستودعات والمكاتب في الجبيل بالشبكات وWi-Fi، وتمديدات الشبكات، والأمن السيبراني، والسيرفرات، وعقود الدعم الفني، من مكتبنا في الدمام على بُعد نحو 100 كم.",
        intro:
          "تضم مدينة الجبيل الصناعية مواقع كبيرة وبيئات قاسية ومقاولين كثيرين يعملون جنباً إلى جنب. فيجب أن تغطي الشبكات مساحات واسعة، وأن تفصل الحماية بين أنظمة المكاتب والأنظمة الصناعية، وأن يكون الدعم موثوقاً. نخطط للعمل الميداني في الجبيل مسبقاً، وندعم العملاء عن بُعد فيما بين الزيارات.",
        offersTitle: "خدمات تقنية المعلومات في الجبيل",
        offers: [
          {
            title: "شبكات المواقع الصناعية والمستودعات",
            text: "تصميم الشبكات والسويتشات ووصلات الألياف الضوئية للمواقع الكبيرة.",
            service: "network-infrastructure",
          },
          {
            title: "Wi-Fi للمواقع الكبيرة",
            text: "مسح التغطية وتركيب نقاط الوصول للمستودعات والساحات والمكاتب.",
            service: "wifi-installation",
          },
          {
            title: "تمديدات الشبكات",
            text: "كابلات نحاسية وألياف ضوئية وكبائن وترقيم واختبار.",
            service: "structured-cabling",
          },
          {
            title: "جدران الحماية وفصل الشبكات",
            text: "جدران حماية وتقسيم بين شبكات المكاتب والشبكات الصناعية.",
            service: "firewall-installation",
          },
          {
            title: "عقود الدعم الفني",
            text: "مراقبة ودعم عن بُعد مع زيارات ميدانية مجدولة.",
            service: "it-support-amc",
          },
        ],
        whyTitle: "لماذا تختار بيت الأفكار في الجبيل",
        why: [
          "فريق في المنطقة الشرقية، مع عمل ميداني في الجبيل مخطط مسبقاً.",
          "خبرة في شبكات Wi-Fi والألياف الضوئية للمساحات الواسعة.",
          "حماية تفصل تقنية المعلومات في المكاتب عن الأنظمة الصناعية.",
          "التوريد والتركيب والدعم من شريك واحد.",
        ],
        faq: [
          {
            q: "هل تعملون في المواقع الصناعية بالجبيل؟",
            a: "نعم. نصمم وننفذ الشبكات وWi-Fi والتمديدات للمصانع والمستودعات والساحات ومكاتب المواقع في الجبيل.",
          },
          {
            q: "كيف تدعمون العملاء في الجبيل؟",
            a: "عبر المراقبة والدعم عن بُعد، مع زيارات ميدانية من فريقنا في الدمام مجدولة للمسح والتركيب والصيانة.",
          },
          {
            q: "هل تؤمّنون شبكة التقنيات التشغيلية (OT)؟",
            a: "نؤمّن الحدود بين شبكات المكاتب والشبكات الصناعية بجدران الحماية والتقسيم. أما متطلبات أمن التقنيات التشغيلية الأعمق، مثل ضوابط OTCC من الهيئة الوطنية، فنحدد نطاقها معك.",
          },
        ],
      },
    },
  },
  {
    slug: "it-company-al-ahsa",
    service: "it-supply",
    serviceType: "IT services and system integration",
    group: "city",
    city: { en: "Al-Ahsa", ar: "الأحساء" },
    areaServed: ["Al-Ahsa", "Hofuf", "Al Mubarraz"],
    content: {
      en: {
        metaTitle: "IT Company in Al-Ahsa (Hofuf) | Thoughts House",
        metaDescription:
          "IT services in Al-Ahsa, Hofuf and Al Mubarraz: IT hardware supply, networks, cybersecurity, backup and IT support contracts, with scheduled on-site visits.",
        name: "IT Company in Al-Ahsa",
        h1: "IT Company & IT Supply in Al-Ahsa",
        summary:
          "Thoughts House serves businesses, schools, clinics and factories in Al-Ahsa, including Hofuf and Al Mubarraz, with IT hardware and licensing supply, networks, cybersecurity, backup and IT support contracts, combining remote support with scheduled on-site visits from Dammam.",
        intro:
          "Organizations in Al-Ahsa often need a reliable supplier and support partner without building a large IT team. We supply and set up equipment, secure and connect sites, and support them remotely, with on-site visits planned for installations and maintenance.",
        offersTitle: "IT services in Al-Ahsa",
        offers: [
          {
            title: "IT hardware and licensing",
            text: "Laptops, desktops, servers, printers and Microsoft licenses.",
            service: "it-supply",
          },
          {
            title: "Networks and Wi-Fi",
            text: "Office, school and clinic networks, Wi-Fi and cabling.",
            service: "network-infrastructure",
          },
          {
            title: "Cybersecurity",
            text: "Firewalls, endpoint protection and email security.",
            service: "cybersecurity",
          },
          {
            title: "Backup",
            text: "Managed backup with offsite and immutable copies.",
            service: "cloud-backup",
          },
          {
            title: "IT support contracts",
            text: "Remote support with scheduled on-site visits.",
            service: "it-support-amc",
          },
        ],
        whyTitle: "Why choose Thoughts House in Al-Ahsa",
        why: [
          "Eastern Province team, with on-site visits to Al-Ahsa planned in advance.",
          "Remote support and monitoring between visits.",
          "Supply and support for 25+ technology brands.",
          "One partner from supply to installation and support.",
        ],
        faq: [
          {
            q: "Do you deliver IT equipment to Al-Ahsa?",
            a: "Yes. We supply and deliver laptops, servers, network equipment and licenses to customers in Hofuf, Al Mubarraz and across Al-Ahsa.",
          },
          {
            q: "How do you provide support in Al-Ahsa?",
            a: "Most issues are handled remotely. Installations, surveys and maintenance visits are scheduled with our Dammam team.",
          },
          {
            q: "Do you work with schools and clinics?",
            a: "Yes. We provide IT supply, networks and maintenance contracts for education and healthcare organizations.",
          },
        ],
      },
      ar: {
        metaTitle: "شركة تقنية معلومات في الأحساء | بيت الأفكار",
        metaDescription:
          "خدمات تقنية المعلومات في الأحساء والهفوف والمبرز: توريد أجهزة، وشبكات، وأمن سيبراني، ونسخ احتياطي، وعقود دعم فني مع زيارات ميدانية مجدولة.",
        name: "شركة تقنية معلومات في الأحساء",
        h1: "شركة تقنية معلومات وتوريد أجهزة في الأحساء",
        summary:
          "يخدم بيت الأفكار الشركات والمدارس والعيادات والمصانع في الأحساء، ومنها الهفوف والمبرز، بتوريد الأجهزة والتراخيص، والشبكات، والأمن السيبراني، والنسخ الاحتياطي، وعقود الدعم الفني، بدعم عن بُعد وزيارات ميدانية مجدولة من الدمام.",
        intro:
          "تحتاج منشآت كثيرة في الأحساء إلى مورّد وشريك دعم موثوق دون بناء فريق تقنية معلومات كبير. نحن نورّد الأجهزة ونجهزها، ونحمي المواقع ونربطها، وندعمها عن بُعد، مع زيارات ميدانية مخطط لها للتركيب والصيانة.",
        offersTitle: "خدمات تقنية المعلومات في الأحساء",
        offers: [
          {
            title: "توريد الأجهزة والتراخيص",
            text: "حواسيب محمولة ومكتبية وسيرفرات وطابعات وتراخيص Microsoft.",
            service: "it-supply",
          },
          {
            title: "الشبكات وWi-Fi",
            text: "شبكات المكاتب والمدارس والعيادات وWi-Fi والتمديدات.",
            service: "network-infrastructure",
          },
          {
            title: "الأمن السيبراني",
            text: "جدران الحماية وحماية الأجهزة وحماية البريد.",
            service: "cybersecurity",
          },
          {
            title: "النسخ الاحتياطي",
            text: "نسخ احتياطي مُدار مع نسخ خارج الموقع وغير قابلة للتعديل.",
            service: "cloud-backup",
          },
          {
            title: "عقود الدعم الفني",
            text: "دعم عن بُعد مع زيارات ميدانية مجدولة.",
            service: "it-support-amc",
          },
        ],
        whyTitle: "لماذا تختار بيت الأفكار في الأحساء",
        why: [
          "فريق في المنطقة الشرقية، مع زيارات ميدانية للأحساء مخطط لها مسبقاً.",
          "دعم ومراقبة عن بُعد بين الزيارات.",
          "توريد ودعم لأكثر من 25 علامة تقنية.",
          "شريك واحد من التوريد إلى التركيب والدعم.",
        ],
        faq: [
          {
            q: "هل توصلون الأجهزة إلى الأحساء؟",
            a: "نعم. نورّد ونوصل الحواسيب والسيرفرات وأجهزة الشبكات والتراخيص للعملاء في الهفوف والمبرز وجميع أنحاء الأحساء.",
          },
          {
            q: "كيف تقدمون الدعم في الأحساء؟",
            a: "نعالج معظم المشكلات عن بُعد، وتُجدول زيارات التركيب والمسح والصيانة مع فريقنا في الدمام.",
          },
          {
            q: "هل تعملون مع المدارس والعيادات؟",
            a: "نعم. نقدم توريد الأجهزة والشبكات وعقود الصيانة لمنشآت التعليم والرعاية الصحية.",
          },
        ],
      },
    },
  },
  {
    slug: "it-company-riyadh",
    service: "it-support-amc",
    serviceType: "IT services and system integration",
    group: "city",
    remote: true,
    city: { en: "Riyadh", ar: "الرياض" },
    areaServed: ["Riyadh"],
    content: {
      en: {
        metaTitle: "IT Services in Riyadh | Thoughts House",
        metaDescription:
          "IT services for Riyadh businesses: remote IT support and AMC, cybersecurity and NCA ECC, IT hardware supply, with on-site visits scheduled in advance.",
        name: "IT Services in Riyadh",
        h1: "IT Services & IT Support for Riyadh Businesses",
        summary:
          "Thoughts House serves organizations in Riyadh from our Dammam office: IT support and maintenance contracts delivered remotely, cybersecurity and NCA ECC alignment, IT hardware and licensing supply, and on-site visits scheduled in advance for surveys, installation and maintenance.",
        intro:
          "Many Riyadh companies, especially those with branches in the Eastern Province or across the Kingdom, want one IT partner for every site. Most support, monitoring and configuration work is done remotely, equipment is delivered to your office, and our engineers travel to Riyadh for planned on-site work.",
        offersTitle: "IT services for Riyadh organizations",
        offers: [
          {
            title: "Remote IT support and AMC",
            text: "Helpdesk, monitoring and maintenance, with scheduled on-site visits.",
            service: "it-support-amc",
          },
          {
            title: "Cybersecurity and NCA ECC",
            text: "Gap assessments, firewalls, EDR, MDR and email security.",
            service: "cybersecurity",
          },
          {
            title: "IT hardware and licensing",
            text: "Laptops, servers, network equipment and Microsoft licenses delivered to Riyadh.",
            service: "it-supply",
          },
          {
            title: "Cloud and backup",
            text: "Microsoft 365, managed backup and cloud disaster recovery.",
            service: "cloud-backup",
          },
          {
            title: "Multi-branch networks",
            text: "Network and Wi-Fi design for offices and branches across the Kingdom.",
            service: "network-infrastructure",
          },
        ],
        whyTitle: "How we serve Riyadh",
        why: [
          "Remote support and monitoring for day-to-day IT.",
          "On-site visits to Riyadh scheduled in advance for surveys, installations and maintenance.",
          "Equipment and licenses delivered to your Riyadh office.",
          "One partner for companies with sites in Riyadh, the Eastern Province and elsewhere.",
        ],
        faq: [
          {
            q: "Do you have an office in Riyadh?",
            a: "No. Our office is in Dammam. We serve Riyadh customers remotely and schedule on-site visits in advance for surveys, installation and maintenance.",
          },
          {
            q: "Can you provide an IT maintenance contract (AMC) in Riyadh?",
            a: "Yes. Contracts combine remote support and monitoring with a set number of scheduled on-site visits, agreed with you.",
          },
          {
            q: "Do you deliver IT equipment to Riyadh?",
            a: "Yes. We supply and deliver laptops, servers, network and security equipment and licenses to Riyadh.",
          },
        ],
      },
      ar: {
        metaTitle: "خدمات تقنية المعلومات في الرياض | بيت الأفكار",
        metaDescription:
          "خدمات تقنية المعلومات لشركات الرياض: دعم فني وعقود صيانة عن بُعد، وأمن سيبراني وضوابط ECC، وتوريد أجهزة، مع زيارات ميدانية مجدولة مسبقاً.",
        name: "خدمات تقنية المعلومات في الرياض",
        h1: "خدمات تقنية المعلومات والدعم الفني لشركات الرياض",
        summary:
          "يخدم بيت الأفكار المنشآت في الرياض من مكتبنا في الدمام: عقود الدعم الفني والصيانة عن بُعد، والأمن السيبراني والتوافق مع الضوابط الأساسية، وتوريد الأجهزة والتراخيص، مع زيارات ميدانية مجدولة مسبقاً للمسح والتركيب والصيانة.",
        intro:
          "تريد شركات كثيرة في الرياض، خاصةً التي لديها فروع في المنطقة الشرقية أو في أنحاء المملكة، شريك تقنية معلومات واحداً لكل مواقعها. ننجز معظم أعمال الدعم والمراقبة والإعداد عن بُعد، ونوصل الأجهزة إلى مكتبك، ويسافر مهندسونا إلى الرياض للأعمال الميدانية المخطط لها.",
        offersTitle: "خدمات تقنية المعلومات لمنشآت الرياض",
        offers: [
          {
            title: "الدعم الفني وعقود الصيانة عن بُعد",
            text: "مكتب مساعدة ومراقبة وصيانة مع زيارات ميدانية مجدولة.",
            service: "it-support-amc",
          },
          {
            title: "الأمن السيبراني وضوابط ECC",
            text: "تقييم الفجوات وجدران الحماية وEDR وMDR وحماية البريد.",
            service: "cybersecurity",
          },
          {
            title: "توريد الأجهزة والتراخيص",
            text: "حواسيب وسيرفرات وأجهزة شبكات وتراخيص Microsoft مع التوصيل للرياض.",
            service: "it-supply",
          },
          {
            title: "السحابة والنسخ الاحتياطي",
            text: "Microsoft 365 والنسخ الاحتياطي المُدار والتعافي من الكوارث سحابياً.",
            service: "cloud-backup",
          },
          {
            title: "شبكات الفروع المتعددة",
            text: "تصميم الشبكات وWi-Fi للمكاتب والفروع في أنحاء المملكة.",
            service: "network-infrastructure",
          },
        ],
        whyTitle: "كيف نخدم الرياض",
        why: [
          "دعم ومراقبة عن بُعد لأعمال تقنية المعلومات اليومية.",
          "زيارات ميدانية للرياض مجدولة مسبقاً للمسح والتركيب والصيانة.",
          "توصيل الأجهزة والتراخيص إلى مكتبك في الرياض.",
          "شريك واحد للشركات التي لها مواقع في الرياض والمنطقة الشرقية وغيرها.",
        ],
        faq: [
          {
            q: "هل لديكم مكتب في الرياض؟",
            a: "لا. مكتبنا في الدمام، ونخدم عملاء الرياض عن بُعد مع زيارات ميدانية مجدولة مسبقاً للمسح والتركيب والصيانة.",
          },
          {
            q: "هل تقدمون عقد صيانة تقنية معلومات في الرياض؟",
            a: "نعم. تجمع العقود بين الدعم والمراقبة عن بُعد وعدد محدد من الزيارات الميدانية المجدولة المتفق عليها معك.",
          },
          {
            q: "هل توصلون أجهزة تقنية المعلومات إلى الرياض؟",
            a: "نعم. نورّد ونوصل الحواسيب والسيرفرات وأجهزة الشبكات والحماية والتراخيص إلى الرياض.",
          },
        ],
      },
    },
  },
  {
    slug: "it-company-jeddah",
    service: "network-infrastructure",
    serviceType: "IT services and system integration",
    group: "city",
    remote: true,
    city: { en: "Jeddah", ar: "جدة" },
    areaServed: ["Jeddah"],
    content: {
      en: {
        metaTitle: "IT Services in Jeddah | Thoughts House",
        metaDescription:
          "IT services for Jeddah businesses: remote IT support and AMC, multi-branch networks, cybersecurity and IT hardware supply, with scheduled on-site visits.",
        name: "IT Services in Jeddah",
        h1: "IT Services & IT Support for Jeddah Businesses",
        summary:
          "Thoughts House serves organizations in Jeddah from our Dammam office: remote IT support and maintenance contracts, multi-branch networks, cybersecurity, IT hardware and licensing supply, and on-site visits scheduled in advance.",
        intro:
          "Jeddah's trade, logistics, retail and hospitality companies often run several branches that need the same reliable network, security and support. We manage and support them remotely, deliver equipment to each site, and schedule on-site visits for installations and maintenance.",
        offersTitle: "IT services for Jeddah organizations",
        offers: [
          {
            title: "Remote IT support and AMC",
            text: "Helpdesk, monitoring and maintenance, with scheduled on-site visits.",
            service: "it-support-amc",
          },
          {
            title: "Multi-branch networks",
            text: "Standard network, Wi-Fi and site-to-site VPN design for every branch.",
            service: "network-infrastructure",
          },
          {
            title: "Cybersecurity",
            text: "Firewalls, EDR and MDR, and email security.",
            service: "cybersecurity",
          },
          {
            title: "IT hardware and licensing",
            text: "Laptops, POS-ready devices, servers and Microsoft licenses delivered to Jeddah.",
            service: "it-supply",
          },
          {
            title: "Cloud and backup",
            text: "Microsoft 365, managed backup and disaster recovery.",
            service: "cloud-backup",
          },
        ],
        whyTitle: "How we serve Jeddah",
        why: [
          "Remote support and monitoring for day-to-day IT.",
          "On-site visits to Jeddah scheduled in advance for surveys, installations and maintenance.",
          "Equipment and licenses delivered to each branch.",
          "The same standards and support across all your sites in the Kingdom.",
        ],
        faq: [
          {
            q: "Do you have an office in Jeddah?",
            a: "No. Our office is in Dammam. We serve Jeddah customers remotely and schedule on-site visits in advance for surveys, installation and maintenance.",
          },
          {
            q: "Can you support a company with branches in Jeddah and other cities?",
            a: "Yes. We design standard networks and security for every branch and support all of them under one contract.",
          },
          {
            q: "Do you deliver IT equipment to Jeddah?",
            a: "Yes. We supply and deliver laptops, servers, network and security equipment and licenses to Jeddah.",
          },
        ],
      },
      ar: {
        metaTitle: "خدمات تقنية المعلومات في جدة | بيت الأفكار",
        metaDescription:
          "خدمات تقنية المعلومات لشركات جدة: دعم فني وعقود صيانة عن بُعد، وشبكات الفروع، وأمن سيبراني، وتوريد أجهزة، مع زيارات ميدانية مجدولة.",
        name: "خدمات تقنية المعلومات في جدة",
        h1: "خدمات تقنية المعلومات والدعم الفني لشركات جدة",
        summary:
          "يخدم بيت الأفكار المنشآت في جدة من مكتبنا في الدمام: عقود الدعم الفني والصيانة عن بُعد، وشبكات الفروع المتعددة، والأمن السيبراني، وتوريد الأجهزة والتراخيص، مع زيارات ميدانية مجدولة مسبقاً.",
        intro:
          "تدير شركات التجارة والخدمات اللوجستية والتجزئة والضيافة في جدة غالباً عدة فروع تحتاج الشبكة والحماية والدعم نفسها. نحن ندير هذه الفروع وندعمها عن بُعد، ونوصل الأجهزة لكل موقع، ونجدول زيارات ميدانية للتركيب والصيانة.",
        offersTitle: "خدمات تقنية المعلومات لمنشآت جدة",
        offers: [
          {
            title: "الدعم الفني وعقود الصيانة عن بُعد",
            text: "مكتب مساعدة ومراقبة وصيانة مع زيارات ميدانية مجدولة.",
            service: "it-support-amc",
          },
          {
            title: "شبكات الفروع المتعددة",
            text: "تصميم موحد للشبكات وWi-Fi وVPN بين الفروع.",
            service: "network-infrastructure",
          },
          {
            title: "الأمن السيبراني",
            text: "جدران الحماية وEDR وMDR وحماية البريد.",
            service: "cybersecurity",
          },
          {
            title: "توريد الأجهزة والتراخيص",
            text: "حواسيب وأجهزة لنقاط البيع وسيرفرات وتراخيص Microsoft مع التوصيل لجدة.",
            service: "it-supply",
          },
          {
            title: "السحابة والنسخ الاحتياطي",
            text: "Microsoft 365 والنسخ الاحتياطي المُدار والتعافي من الكوارث.",
            service: "cloud-backup",
          },
        ],
        whyTitle: "كيف نخدم جدة",
        why: [
          "دعم ومراقبة عن بُعد لأعمال تقنية المعلومات اليومية.",
          "زيارات ميدانية لجدة مجدولة مسبقاً للمسح والتركيب والصيانة.",
          "توصيل الأجهزة والتراخيص لكل فرع.",
          "المعايير والدعم نفسها في جميع مواقعك بالمملكة.",
        ],
        faq: [
          {
            q: "هل لديكم مكتب في جدة؟",
            a: "لا. مكتبنا في الدمام، ونخدم عملاء جدة عن بُعد مع زيارات ميدانية مجدولة مسبقاً للمسح والتركيب والصيانة.",
          },
          {
            q: "هل تدعمون شركة لها فروع في جدة ومدن أخرى؟",
            a: "نعم. نصمم شبكات وحماية موحدة لكل الفروع وندعمها جميعاً بعقد واحد.",
          },
          {
            q: "هل توصلون أجهزة تقنية المعلومات إلى جدة؟",
            a: "نعم. نورّد ونوصل الحواسيب والسيرفرات وأجهزة الشبكات والحماية والتراخيص إلى جدة.",
          },
        ],
      },
    },
  },
];
