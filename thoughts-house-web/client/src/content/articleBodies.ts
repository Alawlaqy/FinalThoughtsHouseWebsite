/*
 * Article bodies, split from articles.ts so they are only downloaded on article pages
 * (main.tsx loads this module before hydrating an article; the prerenderer imports it directly).
 */
import type { ArticleSlug } from "./articles";
import type { Language } from "@/seo";

export type Block = { h2: string } | { p: string } | { ul: string[] };

export interface ArticleBody {
  /** Key takeaways shown first on the page (answer-first, quotable by search and AI engines) */
  summary: string[];
  faq: { q: string; a: string }[];
  blocks: Block[];
  sources?: { label: string; url: string }[];
}

export const ARTICLE_BODIES: Record<
  ArticleSlug,
  Record<Language, ArticleBody>
> = {
  "nca-essential-cybersecurity-controls": {
    en: {
      summary: [
        "The ECC are the NCA's baseline cybersecurity requirements; the current edition is ECC 2-2024.",
        "They apply to government entities, their companies and private organizations that own, operate or host critical national infrastructure; others are encouraged to adopt them.",
        "Start with a gap assessment, an asset inventory and high-impact controls such as MFA, patching, endpoint protection, firewalls, backups and central logging.",
      ],
      faq: [
        {
          q: "Are the NCA Essential Cybersecurity Controls mandatory for private companies?",
          a: "They are mandatory for national entities, which include government organizations, their companies and private organizations that own, operate or host critical national infrastructure. Other private companies are encouraged to adopt them, and many customers and tenders ask suppliers about alignment. Check the latest NCA document for your exact scope.",
        },
        {
          q: "What is the first step towards ECC compliance?",
          a: "A gap assessment: compare your current practices against each control, record what is missing and prioritize the highest-risk gaps.",
        },
      ],
      blocks: [
        {
          p: 'The Essential Cybersecurity Controls (ECC) are the baseline cybersecurity requirements issued by Saudi Arabia\'s National Cybersecurity Authority (NCA). The current edition is ECC 2-2024. For many organizations in the Kingdom they are the reference point for what a "minimum acceptable" security program looks like — and even where they are not mandatory, they are an excellent, locally relevant framework to follow.',
        },
        { h2: "Who needs to comply?" },
        {
          p: "The ECC apply to national entities: government organizations and the companies and entities they own, as well as private-sector organizations that own, operate or host critical national infrastructure. Other private companies are encouraged to adopt them, and many customers and tenders now ask suppliers about their alignment. Always check the latest official document on the NCA website for the exact scope that applies to you.",
        },
        { h2: "What the controls cover" },
        {
          p: "The controls are organized into main domains that together cover the full lifecycle of cybersecurity:",
        },
        {
          ul: [
            "Cybersecurity governance — strategy, roles and responsibilities, policies, risk management and compliance.",
            "Cybersecurity defense — asset management, identity and access management, protection of systems, email, networks and mobile devices, data protection and cryptography, backup, vulnerability management, penetration testing, event logging and monitoring, and incident management.",
            "Cybersecurity resilience — cybersecurity as part of business continuity management.",
            "Third-party and cloud computing cybersecurity — managing risks from suppliers, service providers and cloud hosting.",
            "Industrial control systems — additional controls where operational technology is in use.",
          ],
        },
        { h2: "A practical way to start" },
        {
          ul: [
            "Run a gap assessment: compare your current practices against each control and record what is missing.",
            "Build an asset inventory: you cannot protect servers, laptops, applications and data you do not know you have.",
            "Prioritize high-impact technical controls: multi-factor authentication, patching, endpoint protection, next-generation firewalls, secure backups and centralized logging.",
            "Write and approve policies: cybersecurity policies must be documented, approved by management and reviewed periodically.",
            "Assign ownership: the ECC expect a defined cybersecurity function with clear responsibilities.",
            "Measure and review: track progress, re-assess regularly and keep evidence of implementation.",
          ],
        },
        { h2: "How technology supports compliance" },
        {
          p: "Many ECC requirements map directly to technology you may already own or plan to buy. Endpoint protection and EDR support system protection and incident detection; next-generation firewalls support network security; identity platforms enable MFA and privileged access management; backup platforms with offsite, immutable copies support resilience; and a central log platform supports monitoring. The key is configuring these tools to meet the control, and keeping evidence that they work.",
        },
        { h2: "How Thoughts House can help" },
        {
          p: "We help organizations in Dammam and across Saudi Arabia assess their current state, prioritize the gaps that matter most, and design, supply and deploy the technical controls — from firewalls and endpoint protection to backup and monitoring. Contact us to arrange an assessment.",
        },
      ],
      sources: [
        {
          label: "NCA — Essential Cybersecurity Controls (ECC)",
          url: "https://nca.gov.sa/en/regulatory-documents/controls-list/ecc/",
        },
      ],
    },
    ar: {
      summary: [
        "الضوابط الأساسية للأمن السيبراني هي الحد الأدنى من متطلبات الهيئة الوطنية للأمن السيبراني، والإصدار الحالي ECC 2-2024.",
        "تنطبق على الجهات الحكومية والشركات التابعة لها وجهات القطاع الخاص التي تملك بنى تحتية وطنية حساسة أو تشغّلها أو تستضيفها، وتُشجَّع بقية الجهات على تطبيقها.",
        "ابدأ بتقييم الفجوات وسجل الأصول والضوابط الأعلى أثراً مثل التحقق متعدد العوامل والتحديثات وحماية الأجهزة وجدران الحماية والنسخ الاحتياطي والسجلات المركزية.",
      ],
      faq: [
        {
          q: "هل الضوابط الأساسية للأمن السيبراني إلزامية للشركات الخاصة؟",
          a: "هي إلزامية للجهات الوطنية، ومنها الجهات الحكومية والشركات التابعة لها وجهات القطاع الخاص التي تملك بنى تحتية وطنية حساسة أو تشغّلها أو تستضيفها. وتُشجَّع بقية الشركات على تطبيقها، ويسأل كثير من العملاء والمنافسات الموردين عن التزامهم بها. راجع أحدث وثيقة للهيئة لمعرفة النطاق المنطبق عليك.",
        },
        {
          q: "ما أول خطوة نحو الالتزام بالضوابط؟",
          a: "تقييم الفجوات: قارن ممارساتك الحالية بكل ضابط، وسجّل ما ينقص، ورتّب المعالجة حسب المخاطر الأعلى.",
        },
      ],
      blocks: [
        {
          p: "الضوابط الأساسية للأمن السيبراني (ECC) هي الحد الأدنى من متطلبات الأمن السيبراني الصادرة عن الهيئة الوطنية للأمن السيبراني في المملكة، والإصدار الحالي هو ECC 2-2024. تمثّل هذه الضوابط لكثير من الجهات المرجعَ لما يجب أن يكون عليه برنامج الأمن السيبراني، وحتى عندما لا تكون إلزامية فهي إطار عملي ممتاز ومناسب للبيئة المحلية.",
        },
        { h2: "من المطالب بالامتثال؟" },
        {
          p: "تنطبق الضوابط على الجهات الوطنية: الجهات الحكومية والشركات والجهات التابعة لها، إضافة إلى جهات القطاع الخاص التي تملك بنى تحتية وطنية حساسة أو تشغّلها أو تستضيفها. وتُشجَّع بقية الشركات على تطبيقها، كما أصبح كثير من العملاء والمنافسات يسألون الموردين عن مدى التزامهم بها. راجع دائماً أحدث وثيقة رسمية على موقع الهيئة لمعرفة النطاق الدقيق المنطبق عليك.",
        },
        { h2: "ماذا تغطي الضوابط؟" },
        {
          p: "تنقسم الضوابط إلى مكونات رئيسية تغطي دورة الأمن السيبراني كاملة:",
        },
        {
          ul: [
            "حوكمة الأمن السيبراني: الاستراتيجية والأدوار والمسؤوليات والسياسات وإدارة المخاطر والالتزام.",
            "تعزيز الأمن السيبراني: إدارة الأصول، وإدارة الهويات والصلاحيات، وحماية الأنظمة والبريد الإلكتروني والشبكات والأجهزة المحمولة، وحماية البيانات والتشفير، والنسخ الاحتياطي، وإدارة الثغرات، واختبار الاختراق، وسجلات الأحداث ومراقبتها، وإدارة الحوادث.",
            "صمود الأمن السيبراني: جوانب الأمن السيبراني ضمن إدارة استمرارية الأعمال.",
            "الأمن السيبراني المتعلق بالأطراف الخارجية والحوسبة السحابية: إدارة مخاطر الموردين ومقدمي الخدمات والاستضافة السحابية.",
            "أنظمة التحكم الصناعي: ضوابط إضافية عند استخدام التقنيات التشغيلية.",
          ],
        },
        { h2: "طريقة عملية للبدء" },
        {
          ul: [
            "أجرِ تقييماً للفجوات: قارن ممارساتك الحالية بكل ضابط وسجّل ما ينقص.",
            "أنشئ سجلاً للأصول: لا يمكنك حماية سيرفرات وأجهزة وتطبيقات وبيانات لا تعرف بوجودها.",
            "ابدأ بالضوابط التقنية الأعلى أثراً: التحقق متعدد العوامل، وتحديث الأنظمة، وحماية نقاط النهاية، وجدران الحماية من الجيل التالي، والنسخ الاحتياطي الآمن، والتجميع المركزي للسجلات.",
            "اكتب السياسات واعتمدها: يجب توثيق سياسات الأمن السيبراني واعتمادها من الإدارة ومراجعتها دورياً.",
            "حدّد المسؤوليات: تتطلب الضوابط وجود وظيفة للأمن السيبراني بمسؤوليات واضحة.",
            "قِس وراجع: تابع التقدّم، وأعد التقييم دورياً، واحتفظ بما يثبت التطبيق.",
          ],
        },
        { h2: "كيف تدعم التقنية الامتثال؟" },
        {
          p: "كثير من متطلبات الضوابط يقابلها مباشرة حلول تقنية قد تكون لديك أو تخطط لشرائها: حماية نقاط النهاية وEDR لحماية الأنظمة واكتشاف الحوادث، وجدران الحماية من الجيل التالي لأمن الشبكات، ومنصات الهوية للتحقق متعدد العوامل وإدارة الصلاحيات الهامة، ومنصات النسخ الاحتياطي مع نسخ خارج الموقع وغير قابلة للتعديل لتعزيز الصمود، ومنصة مركزية للسجلات لدعم المراقبة. الأهم هو إعداد هذه الأدوات بما يحقق الضابط، والاحتفاظ بما يثبت فعاليتها.",
        },
        { h2: "كيف يساعدك بيت الأفكار؟" },
        {
          p: "نساعد المنشآت في الدمام وجميع مناطق المملكة على تقييم وضعها الحالي، وترتيب الفجوات حسب أهميتها، وتصميم الضوابط التقنية وتوريدها وتنفيذها، من جدران الحماية وحماية الأجهزة إلى النسخ الاحتياطي والمراقبة. تواصل معنا لترتيب تقييم.",
        },
      ],
      sources: [
        {
          label:
            "الهيئة الوطنية للأمن السيبراني — الضوابط الأساسية للأمن السيبراني",
          url: "https://nca.gov.sa/ar/regulatory-documents/controls-list/ecc/",
        },
      ],
    },
  },
  "pdpl-technical-requirements": {
    en: {
      summary: [
        "Saudi Arabia's PDPL came into force in September 2023 with a one-year transition period and is supervised by SDAIA.",
        "Organizations must protect personal data with appropriate technical measures and notify SDAIA of a breach within 72 hours.",
        "Key IT measures: data mapping, least-privilege access with MFA, encryption, endpoint and email security, central logging and tested backups.",
      ],
      faq: [
        {
          q: "How quickly must a personal data breach be reported under the Saudi PDPL?",
          a: "The Implementing Regulations require notifying SDAIA within 72 hours of becoming aware of the breach, and informing affected individuals where the breach may harm them.",
        },
        {
          q: "Who supervises the Personal Data Protection Law in Saudi Arabia?",
          a: "The Saudi Data & AI Authority (SDAIA).",
        },
      ],
      blocks: [
        {
          p: "Saudi Arabia's Personal Data Protection Law (PDPL) regulates how organizations collect, use, store and share personal data. It came into force in September 2023, with a one-year transition period for organizations to comply, and it is supervised by the Saudi Data & AI Authority (SDAIA). While much of the PDPL concerns legal and process matters, a large part of compliance depends on how your IT systems are designed and operated.",
        },
        { h2: "Key obligations with an IT impact" },
        {
          ul: [
            "Security of personal data: organizations must take appropriate organizational, administrative and technical measures to protect personal data.",
            "Breach notification: the Implementing Regulations require notifying SDAIA of a personal data breach within 72 hours of becoming aware of it, and informing affected individuals where the breach may harm them.",
            "Data subject rights: individuals can request access to, correction of and destruction of their data — which means you must be able to find it.",
            "Retention and destruction: personal data should be kept only as long as needed, then securely destroyed.",
            "Transfers outside the Kingdom: transferring personal data abroad is restricted and subject to specific conditions.",
            "Records of processing: organizations must keep records of their personal data processing activities.",
          ],
        },
        { h2: "Technical measures that help" },
        {
          ul: [
            "Know where personal data lives: map systems, file shares, databases and cloud services that hold personal data.",
            "Access control: least-privilege permissions, multi-factor authentication and regular access reviews.",
            "Encryption: encrypt laptops, backups and data in transit; manage keys properly.",
            "Endpoint and email security: most breaches start with a compromised device or phishing email.",
            "Logging and monitoring: centralized logs make it possible to detect a breach quickly — and to meet the 72-hour notification window with facts.",
            "Backup and recovery: protected, tested backups limit the impact of ransomware on personal data.",
            "Data hosting decisions: consider where cloud services store data when choosing providers.",
          ],
        },
        { h2: "Where to start" },
        {
          p: "Start with a data map and a security gap assessment, fix the highest risks first (typically MFA, endpoint protection, encryption and backups), and put an incident response plan in place that includes the notification steps. This article is a technical overview, not legal advice — involve your legal or compliance advisor for the legal requirements.",
        },
        { h2: "How Thoughts House can help" },
        {
          p: "We design and implement the security controls behind PDPL compliance — endpoint protection, firewalls, encryption, secure backup and monitoring — for organizations in Dammam and across Saudi Arabia.",
        },
      ],
      sources: [
        {
          label: "SDAIA — Data Governance Platform (PDPL)",
          url: "https://dgp.sdaia.gov.sa/",
        },
        {
          label: "Saudi Data & AI Authority (SDAIA)",
          url: "https://sdaia.gov.sa/en/",
        },
      ],
    },
    ar: {
      summary: [
        "دخل نظام حماية البيانات الشخصية حيز التنفيذ في سبتمبر 2023 مع مهلة انتقالية مدتها عام، وتشرف عليه سدايا.",
        "يجب حماية البيانات الشخصية بإجراءات تقنية مناسبة، وإبلاغ سدايا بأي تسرب خلال 72 ساعة.",
        "أهم الإجراءات التقنية: خريطة البيانات، والصلاحيات الدنيا مع التحقق متعدد العوامل، والتشفير، وحماية الأجهزة والبريد، والسجلات المركزية، والنسخ الاحتياطي المختبر.",
      ],
      faq: [
        {
          q: "خلال كم ساعة يجب الإبلاغ عن تسرب البيانات الشخصية في السعودية؟",
          a: "تنص اللائحة التنفيذية على إبلاغ سدايا خلال 72 ساعة من العلم بالتسرب، وإبلاغ أصحاب البيانات إذا كان قد يلحق بهم ضرراً.",
        },
        {
          q: "من الجهة المشرفة على نظام حماية البيانات الشخصية في المملكة؟",
          a: "الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا).",
        },
      ],
      blocks: [
        {
          p: "ينظّم نظام حماية البيانات الشخصية في المملكة (PDPL) طريقة جمع المنشآت للبيانات الشخصية واستخدامها وتخزينها ومشاركتها. دخل النظام حيز التنفيذ في سبتمبر 2023 مع مهلة انتقالية مدتها عام للالتزام، وتشرف عليه الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا). ومع أن جزءاً كبيراً من النظام قانوني وإجرائي، فإن جزءاً كبيراً من الالتزام يعتمد على تصميم أنظمة تقنية المعلومات وتشغيلها.",
        },
        { h2: "أهم الالتزامات ذات الأثر التقني" },
        {
          ul: [
            "أمن البيانات الشخصية: يجب اتخاذ الإجراءات التنظيمية والإدارية والتقنية المناسبة لحماية البيانات الشخصية.",
            "الإبلاغ عن التسرب: تنص اللائحة التنفيذية على إبلاغ سدايا بأي حادثة تسرب للبيانات الشخصية خلال 72 ساعة من العلم بها، وإبلاغ أصحاب البيانات إذا كان التسرب قد يلحق بهم ضرراً.",
            "حقوق صاحب البيانات: يحق للأفراد طلب الوصول إلى بياناتهم وتصحيحها وإتلافها، ما يعني أنك يجب أن تعرف مكانها.",
            "الاحتفاظ والإتلاف: لا يُحتفظ بالبيانات الشخصية إلا بقدر الحاجة، ثم تُتلف بطريقة آمنة.",
            "النقل خارج المملكة: نقل البيانات الشخصية إلى الخارج مقيّد وله شروط محددة.",
            "سجل المعالجة: يجب الاحتفاظ بسجل لأنشطة معالجة البيانات الشخصية.",
          ],
        },
        { h2: "إجراءات تقنية تساعدك" },
        {
          ul: [
            "اعرف أين توجد البيانات الشخصية: حدّد الأنظمة ومجلدات المشاركة وقواعد البيانات والخدمات السحابية التي تحتويها.",
            "التحكم بالصلاحيات: أقل صلاحية ممكنة، والتحقق متعدد العوامل، ومراجعة الصلاحيات دورياً.",
            "التشفير: شفّر الأجهزة المحمولة والنسخ الاحتياطية والبيانات أثناء النقل، وأدِر مفاتيح التشفير بشكل سليم.",
            "حماية الأجهزة والبريد الإلكتروني: تبدأ معظم الاختراقات بجهاز مخترق أو رسالة تصيّد.",
            "السجلات والمراقبة: تتيح السجلات المركزية اكتشاف التسرب بسرعة، والإبلاغ خلال 72 ساعة بمعلومات دقيقة.",
            "النسخ الاحتياطي والاستعادة: النسخ المحمية والمختبرة تحدّ من أثر برامج الفدية على البيانات الشخصية.",
            "قرارات الاستضافة: انتبه لمكان تخزين البيانات عند اختيار مزوّدي الخدمات السحابية.",
          ],
        },
        { h2: "من أين تبدأ؟" },
        {
          p: "ابدأ بخريطة للبيانات وتقييم للفجوات الأمنية، وعالج المخاطر الأعلى أولاً (غالباً التحقق متعدد العوامل وحماية الأجهزة والتشفير والنسخ الاحتياطي)، وضع خطة للاستجابة للحوادث تتضمن خطوات الإبلاغ. هذا المقال نظرة تقنية عامة وليس استشارة قانونية، فاستعن بمستشارك القانوني أو مسؤول الالتزام في الجوانب القانونية.",
        },
        { h2: "كيف يساعدك بيت الأفكار؟" },
        {
          p: "نصمم وننفذ الضوابط الأمنية التي يقوم عليها الالتزام بالنظام، من حماية الأجهزة وجدران الحماية والتشفير إلى النسخ الاحتياطي الآمن والمراقبة، للمنشآت في الدمام وجميع مناطق المملكة.",
        },
      ],
      sources: [
        {
          label: "منصة حوكمة البيانات — سدايا",
          url: "https://dgp.sdaia.gov.sa/",
        },
        {
          label: "الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا)",
          url: "https://sdaia.gov.sa/ar/",
        },
      ],
    },
  },
  "how-to-choose-a-firewall": {
    en: {
      summary: [
        "Size a next-generation firewall on its throughput with threat protection and TLS inspection enabled, not the headline figure.",
        "Compare total cost over 3–5 years including subscription renewals.",
        "Plan high availability for critical sites and choose a partner who can configure and support it locally.",
      ],
      faq: [
        {
          q: "What throughput figure should I use when sizing a firewall?",
          a: "Use the throughput with threat protection, intrusion prevention and TLS inspection enabled — it is usually much lower than the raw firewall throughput on the datasheet.",
        },
        {
          q: "Do next-generation firewalls need yearly subscriptions?",
          a: "Usually yes. Features such as intrusion prevention, web filtering and malware protection are subscriptions on top of the hardware, so compare the total cost including renewals.",
        },
      ],
      blocks: [
        {
          p: "The firewall is the gatekeeper between your network and the internet, and between your own sites and users. Choosing one is not only about brand: the wrong size or licensing model can mean a slow network, missing protection or an unexpected renewal bill. These are the criteria we use when advising customers.",
        },
        { h2: "1. Size it on real-world throughput" },
        {
          p: "Datasheets usually lead with raw firewall throughput, but what you will actually get is the throughput with threat protection, intrusion prevention and TLS inspection turned on — often a fraction of the headline figure. Size the firewall on the protected throughput, your internet bandwidth, the number of users and devices, and expected growth over the next three to five years.",
        },
        { h2: "2. Check the features you actually need" },
        {
          ul: [
            "Intrusion prevention (IPS), web filtering and application control.",
            "Malware and sandboxing protection for downloads and email attachments.",
            "TLS/SSL inspection — most traffic is encrypted, so inspection matters.",
            "Remote-access VPN for staff working from outside the office.",
            "Site-to-site VPN or SD-WAN if you connect several branches.",
            "Integration with your endpoint protection for coordinated response.",
          ],
        },
        { h2: "3. Understand the licensing" },
        {
          p: "Most next-generation features are subscriptions on top of the hardware. Compare the total cost over three or five years, including renewals, and confirm what happens if a subscription lapses. Bundled licenses are often better value than buying modules separately.",
        },
        { h2: "4. Plan for availability" },
        {
          p: "If the firewall fails, your whole office can lose internet and access to cloud services. For critical sites, a high-availability pair removes that single point of failure.",
        },
        { h2: "5. Management and visibility" },
        {
          p: "A clear management console, useful reports and central management for multiple sites save time every day. Ask how logs are stored and for how long — you will need them to investigate incidents and demonstrate compliance.",
        },
        { h2: "6. Local support" },
        {
          p: "A firewall is only as good as its configuration. Choose a partner who can design the policy, deploy it properly, and respond quickly when something needs to change.",
        },
        { h2: "How Thoughts House can help" },
        {
          p: "We work with several leading firewall vendors, so we can recommend, supply, install and configure the model that fits your network and budget in Dammam and across Saudi Arabia.",
        },
      ],
    },
    ar: {
      summary: [
        "حدّد سعة جدار الحماية حسب أدائه مع تفعيل الحماية من التهديدات وفحص الاتصالات المشفرة، لا حسب الرقم المعلن.",
        "قارن التكلفة الإجمالية على 3 إلى 5 سنوات بما فيها تجديد الاشتراكات.",
        "خطط للجاهزية العالية في المواقع الحرجة، واختر شريكاً يُعدّه ويدعمه محلياً.",
      ],
      faq: [
        {
          q: "ما رقم الأداء الذي أعتمد عليه عند اختيار جدار الحماية؟",
          a: "اعتمد على الأداء مع تفعيل الحماية من التهديدات ومنع الاختراق وفحص الاتصالات المشفرة، فهو غالباً أقل بكثير من الرقم الخام في النشرة الفنية.",
        },
        {
          q: "هل تحتاج جدران الحماية من الجيل التالي اشتراكات سنوية؟",
          a: "غالباً نعم. مزايا مثل منع الاختراق وتصفية الويب والحماية من البرمجيات الخبيثة اشتراكات إضافية فوق سعر الجهاز، لذا قارن التكلفة الإجمالية مع التجديد.",
        },
      ],
      blocks: [
        {
          p: "جدار الحماية هو البوابة بين شبكتك والإنترنت، وبين فروعك ومستخدميك. واختياره لا يتعلق بالعلامة التجارية فقط، فالحجم أو نموذج الترخيص الخاطئ قد يعني شبكة بطيئة أو حماية ناقصة أو فاتورة تجديد غير متوقعة. هذه هي المعايير التي نعتمدها عند تقديم المشورة لعملائنا.",
        },
        { h2: "1. اختر السعة بناءً على الأداء الفعلي" },
        {
          p: "تعرض النشرات الفنية عادةً سرعة جدار الحماية الخام، لكن ما ستحصل عليه فعلياً هو السرعة مع تفعيل الحماية من التهديدات ومنع الاختراق وفحص الاتصالات المشفرة، وغالباً تكون جزءاً صغيراً من الرقم المعلن. حدّد السعة بناءً على السرعة مع الحماية، وسرعة الإنترنت لديك، وعدد المستخدمين والأجهزة، والنمو المتوقع خلال ثلاث إلى خمس سنوات.",
        },
        { h2: "2. تأكد من المزايا التي تحتاجها فعلاً" },
        {
          ul: [
            "منع الاختراق (IPS) وتصفية الويب والتحكم بالتطبيقات.",
            "الحماية من البرمجيات الخبيثة وتحليل الملفات المشبوهة (Sandboxing).",
            "فحص الاتصالات المشفرة (TLS/SSL)، فمعظم حركة البيانات اليوم مشفرة.",
            "الشبكة الافتراضية الخاصة (VPN) للموظفين خارج المكتب.",
            "ربط الفروع عبر VPN أو SD-WAN إن كانت لديك عدة مواقع.",
            "التكامل مع حماية الأجهزة للاستجابة المنسقة للتهديدات.",
          ],
        },
        { h2: "3. افهم نموذج الترخيص" },
        {
          p: "معظم مزايا الجيل التالي اشتراكات إضافية فوق سعر الجهاز. قارن التكلفة الإجمالية على ثلاث أو خمس سنوات بما فيها التجديد، وتأكد مما يحدث عند انتهاء الاشتراك. غالباً تكون الحزم المجمعة أوفر من شراء كل ميزة منفصلة.",
        },
        { h2: "4. خطط لاستمرارية العمل" },
        {
          p: "إذا تعطل جدار الحماية قد يفقد المكتب بالكامل الاتصال بالإنترنت والخدمات السحابية. في المواقع الحرجة يزيل زوج من الأجهزة بوضع الجاهزية العالية (HA) نقطة الفشل الواحدة.",
        },
        { h2: "5. الإدارة والتقارير" },
        {
          p: "واجهة إدارة واضحة وتقارير مفيدة وإدارة مركزية لعدة فروع توفر الوقت يومياً. اسأل كيف تُحفظ السجلات وإلى متى، فستحتاجها للتحقيق في الحوادث وإثبات الالتزام.",
        },
        { h2: "6. الدعم المحلي" },
        {
          p: "جدار الحماية بجودة إعداده. اختر شريكاً يصمم السياسات وينفذها بشكل صحيح ويستجيب بسرعة عند الحاجة لأي تعديل.",
        },
        { h2: "كيف يساعدك بيت الأفكار؟" },
        {
          p: "نعمل مع عدد من أبرز شركات جدران الحماية، لذلك نرشّح لك الطراز المناسب لشبكتك وميزانيتك ونورّده ونركّبه ونُعدّه في الدمام وجميع مناطق المملكة.",
        },
      ],
    },
  },
  "3-2-1-backup-ransomware": {
    en: {
      summary: [
        "The 3-2-1 rule: keep 3 copies of your data, on 2 types of storage, with 1 copy offsite.",
        "Against ransomware, add one immutable or offline copy and verify restores with zero errors (3-2-1-1-0).",
        "Set RPO and RTO targets, protect the backup system with separate credentials and MFA, and test restores regularly.",
      ],
      faq: [
        {
          q: "What is the 3-2-1 backup rule?",
          a: "Keep three copies of your data (production plus two backups), on two different types of storage, with one copy stored offsite.",
        },
        {
          q: "How do backups protect against ransomware?",
          a: "An immutable or offline copy cannot be encrypted or deleted by attackers, so you can restore clean data. Protect backup systems with separate credentials and MFA, and test restores regularly.",
        },
      ],
      blocks: [
        {
          p: "When ransomware encrypts your servers, the question is not whether you have backups — it is whether those backups survived the attack and how quickly you can restore from them. Modern ransomware actively looks for backup files and backup servers to destroy them first. A simple rule, applied properly, makes that much harder.",
        },
        { h2: "What is the 3-2-1 rule?" },
        {
          ul: [
            "3 copies of your data: the production data plus two backups.",
            "2 different types of storage: for example a backup appliance and cloud storage, so one failure does not take out both.",
            "1 copy offsite: away from your main office, so a fire, flood or theft does not destroy everything.",
          ],
        },
        { h2: "Going further: 3-2-1-1-0" },
        {
          p: "Because of ransomware, many organizations now follow an extended version: one copy that is immutable or offline (it cannot be changed or deleted, even by an administrator account, for a set period), and zero errors when restores are tested.",
        },
        { h2: "Define your recovery targets" },
        {
          ul: [
            "RPO (recovery point objective): how much data you can afford to lose — one day, one hour, fifteen minutes? This sets how often you back up.",
            "RTO (recovery time objective): how long a system can be down before it seriously hurts the business. This sets how you restore — from local storage, the cloud, or a standby system.",
          ],
        },
        { h2: "Protect the backup system itself" },
        {
          ul: [
            "Use separate credentials for backup systems, protected with multi-factor authentication.",
            "Keep backup servers off the everyday domain where possible and restrict who can reach them.",
            "Monitor backup jobs and alert on failures — a backup that silently stopped weeks ago is a common surprise.",
          ],
        },
        { h2: "Test your restores" },
        {
          p: "A backup is only proven when you restore from it. Schedule regular test restores of files, whole servers and critical applications, and time them against your RTO.",
        },
        { h2: "How Thoughts House can help" },
        {
          p: "We design and deploy backup and disaster recovery solutions — on-premises, in the cloud or hybrid — with immutable copies, monitoring and restore testing, for organizations in Dammam and across Saudi Arabia.",
        },
      ],
    },
    ar: {
      summary: [
        "قاعدة 3-2-1: احتفظ بـ 3 نسخ من بياناتك، على نوعين من وسائط التخزين، مع نسخة واحدة خارج الموقع.",
        "للحماية من برامج الفدية أضف نسخة غير قابلة للتعديل أو منفصلة، وتحقق من الاستعادة دون أخطاء (3-2-1-1-0).",
        "حدّد نقطة الاستعادة وزمنها، واحمِ نظام النسخ ببيانات دخول منفصلة وتحقق متعدد العوامل، واختبر الاستعادة دورياً.",
      ],
      faq: [
        {
          q: "ما هي قاعدة النسخ الاحتياطي 3-2-1؟",
          a: "الاحتفاظ بثلاث نسخ من البيانات (الأصلية ونسختان احتياطيتان) على نوعين مختلفين من وسائط التخزين، مع نسخة واحدة خارج الموقع.",
        },
        {
          q: "كيف يحمي النسخ الاحتياطي من برامج الفدية؟",
          a: "النسخة غير القابلة للتعديل أو المنفصلة لا يستطيع المهاجم تشفيرها أو حذفها، فتتمكن من استعادة بيانات سليمة. احمِ أنظمة النسخ ببيانات دخول منفصلة وتحقق متعدد العوامل، واختبر الاستعادة دورياً.",
        },
      ],
      blocks: [
        {
          p: "عندما تشفّر برامج الفدية خوادمك، لا يكون السؤال هل لديك نسخ احتياطية، بل هل نجت هذه النسخ من الهجوم وكم تحتاج من الوقت للاستعادة منها. فبرامج الفدية الحديثة تبحث عن ملفات وخوادم النسخ الاحتياطي لتدمّرها أولاً. وقاعدة بسيطة مطبّقة بشكل صحيح تجعل ذلك أصعب بكثير.",
        },
        { h2: "ما هي قاعدة 3-2-1؟" },
        {
          ul: [
            "3 نسخ من بياناتك: البيانات الأصلية ونسختان احتياطيتان.",
            "نوعان مختلفان من وسائط التخزين: مثل جهاز نسخ احتياطي وتخزين سحابي، حتى لا يُسقطهما عطل واحد معاً.",
            "نسخة واحدة خارج الموقع: بعيداً عن المكتب الرئيسي، حتى لا يدمّر حريق أو غرق أو سرقة كل شيء.",
          ],
        },
        { h2: "خطوة أبعد: 3-2-1-1-0" },
        {
          p: "بسبب برامج الفدية، أصبحت كثير من المنشآت تطبق نسخة موسّعة: نسخة واحدة غير قابلة للتعديل أو منفصلة عن الشبكة (لا يمكن تغييرها أو حذفها لفترة محددة حتى بحساب مدير النظام)، وصفر أخطاء عند اختبار الاستعادة.",
        },
        { h2: "حدّد أهداف الاستعادة" },
        {
          ul: [
            "نقطة الاستعادة (RPO): كم من البيانات يمكنك تحمّل فقدانه؟ يوم، ساعة، ربع ساعة؟ وهذا يحدد عدد مرات النسخ.",
            "زمن الاستعادة (RTO): كم يمكن أن يتوقف النظام قبل أن يضر العمل بشكل كبير؟ وهذا يحدد طريقة الاستعادة: من تخزين محلي أو سحابي أو نظام احتياطي جاهز.",
          ],
        },
        { h2: "احمِ نظام النسخ الاحتياطي نفسه" },
        {
          ul: [
            "استخدم بيانات دخول منفصلة لأنظمة النسخ الاحتياطي مع التحقق متعدد العوامل.",
            "افصل خوادم النسخ الاحتياطي عن النطاق اليومي قدر الإمكان وقيّد من يمكنه الوصول إليها.",
            "راقب مهام النسخ ونبّه عند فشلها، فالنسخ الذي توقف بصمت قبل أسابيع مفاجأة شائعة.",
          ],
        },
        { h2: "اختبر الاستعادة" },
        {
          p: "لا تثبت فعالية النسخة الاحتياطية إلا بالاستعادة منها. جدول اختبارات دورية لاستعادة الملفات والخوادم الكاملة والتطبيقات الحرجة، وقِس الوقت مقارنة بزمن الاستعادة المستهدف.",
        },
        { h2: "كيف يساعدك بيت الأفكار؟" },
        {
          p: "نصمم وننفذ حلول النسخ الاحتياطي والتعافي من الكوارث محلياً أو سحابياً أو بشكل هجين، مع نسخ غير قابلة للتعديل ومراقبة واختبار للاستعادة، للمنشآت في الدمام وجميع مناطق المملكة.",
        },
      ],
    },
  },
  "office-wifi-planning": {
    en: {
      summary: [
        "Reliable office Wi-Fi starts with a site survey and is planned for capacity (people and devices per area), not just coverage.",
        "Use modern Wi-Fi 6/6E or Wi-Fi 7 access points, enough PoE on the switches, and separate networks for staff, guests and devices.",
        "Manage all access points centrally to keep settings consistent and spot problems early.",
      ],
      faq: [
        {
          q: "Why is my office Wi-Fi slow even with full signal?",
          a: "Usually because too many devices share too few access points, or because of interference. Business Wi-Fi should be planned for capacity — the number of active devices per area — not only coverage.",
        },
        {
          q: "Should guests use a separate Wi-Fi network?",
          a: "Yes. Give guests internet-only access on a separate network (SSID and VLAN) that cannot reach internal systems.",
        },
      ],
      blocks: [
        {
          p: "Slow or unreliable Wi-Fi is one of the most common complaints in any office — and it is rarely solved by adding a stronger router. Business Wi-Fi works well when it is planned around the building, the number of people and devices, and the applications they use.",
        },
        { h2: "1. Start with a site survey" },
        {
          p: "Walls, glass, metal, lifts and neighbouring networks all affect wireless signals. A site survey — predictive, on-site or both — shows where access points need to go and avoids dead spots and interference.",
        },
        { h2: "2. Plan for capacity, not just coverage" },
        {
          p: "A single access point can cover a large area, but it can only serve a limited number of active devices well. Meeting rooms, training rooms and open-plan areas need more access points than corridors. Count users and devices per area, including phones and laptops.",
        },
        { h2: "3. Choose the right standard and bands" },
        {
          p: "Modern Wi-Fi 6/6E and Wi-Fi 7 access points handle busy environments much better than older generations, and the 5 GHz and 6 GHz bands offer more capacity with less interference than 2.4 GHz. Check that your laptops and phones support the bands you plan to use.",
        },
        { h2: "4. Don't forget the wired network" },
        {
          ul: [
            "Access points are powered over Ethernet (PoE) — make sure your switches have enough PoE budget.",
            "Use quality cabling and uplinks fast enough for the access points you deploy.",
            "Mount access points on ceilings, away from metal obstructions.",
          ],
        },
        { h2: "5. Separate and secure" },
        {
          ul: [
            "Use separate networks (SSIDs and VLANs) for staff, guests and devices such as printers or cameras.",
            "Use WPA3 where supported, and enterprise authentication for staff where possible.",
            "Give guests internet-only access that cannot reach internal systems.",
          ],
        },
        { h2: "6. Manage centrally" },
        {
          p: "A central controller or cloud management platform lets you configure all access points consistently, see who is connected, spot problems and roll out updates — especially important across several floors or branches.",
        },
        { h2: "How Thoughts House can help" },
        {
          p: "We plan, supply, install and configure enterprise Wi-Fi and the switching behind it for offices in Dammam and across Saudi Arabia.",
        },
      ],
    },
    ar: {
      summary: [
        "تبدأ شبكة Wi-Fi الموثوقة في المكتب بمسح ميداني، وتُخطط حسب السعة (عدد الأشخاص والأجهزة في كل منطقة) لا حسب التغطية فقط.",
        "استخدم نقاط وصول حديثة Wi-Fi 6/6E أو Wi-Fi 7، وسعة PoE كافية في المبدّلات، وشبكات منفصلة للموظفين والزوار والأجهزة.",
        "أدِر جميع نقاط الوصول مركزياً لتوحيد الإعدادات واكتشاف المشكلات مبكراً.",
      ],
      faq: [
        {
          q: "لماذا تكون شبكة Wi-Fi بطيئة رغم قوة الإشارة؟",
          a: "غالباً لأن أجهزة كثيرة تتشارك عدداً قليلاً من نقاط الوصول، أو بسبب التداخل. يجب تخطيط شبكات الشركات حسب السعة، أي عدد الأجهزة النشطة في كل منطقة، لا حسب التغطية فقط.",
        },
        {
          q: "هل يجب فصل شبكة الزوار؟",
          a: "نعم. امنح الزوار وصولاً للإنترنت فقط عبر شبكة منفصلة (SSID وVLAN) لا تصل إلى الأنظمة الداخلية.",
        },
      ],
      blocks: [
        {
          p: "بطء شبكة Wi-Fi أو انقطاعها من أكثر الشكاوى شيوعاً في المكاتب، ونادراً ما يُحل بإضافة راوتر أقوى. تعمل شبكات الشركات اللاسلكية بكفاءة عندما تُخطط حسب المبنى وعدد الأشخاص والأجهزة والتطبيقات المستخدمة.",
        },
        { h2: "1. ابدأ بمسح ميداني" },
        {
          p: "الجدران والزجاج والمعادن والمصاعد والشبكات المجاورة كلها تؤثر على الإشارة اللاسلكية. يوضح المسح الميداني، سواء كان تنبؤياً أو في الموقع أو كليهما، أماكن نقاط الوصول المناسبة ويتجنب المناطق الميتة والتداخل.",
        },
        { h2: "2. خطط للسعة لا للتغطية فقط" },
        {
          p: "قد تغطي نقطة وصول واحدة مساحة كبيرة، لكنها لا تخدم إلا عدداً محدوداً من الأجهزة النشطة بكفاءة. تحتاج قاعات الاجتماعات والتدريب والمكاتب المفتوحة نقاط وصول أكثر من الممرات. احسب عدد المستخدمين والأجهزة في كل منطقة، بما فيها الجوالات والحواسيب.",
        },
        { h2: "3. اختر المعيار والنطاقات المناسبة" },
        {
          p: "نقاط الوصول الحديثة بمعيار Wi-Fi 6/6E وWi-Fi 7 تتعامل مع البيئات المزدحمة أفضل بكثير من الأجيال السابقة، ونطاقا 5 و6 جيجاهرتز يوفران سعة أكبر وتداخلاً أقل من نطاق 2.4 جيجاهرتز. تأكد أن أجهزتك تدعم النطاقات التي تخطط لاستخدامها.",
        },
        { h2: "4. لا تنسَ الشبكة السلكية" },
        {
          ul: [
            "تُغذّى نقاط الوصول بالطاقة عبر كابل الشبكة (PoE)، فتأكد أن سعة PoE في المبدّلات كافية.",
            "استخدم كابلات عالية الجودة ووصلات سريعة بما يكفي لنقاط الوصول المستخدمة.",
            "ركّب نقاط الوصول في الأسقف بعيداً عن العوائق المعدنية.",
          ],
        },
        { h2: "5. افصل الشبكات وأمّنها" },
        {
          ul: [
            "استخدم شبكات منفصلة (SSID وVLAN) للموظفين والزوار والأجهزة مثل الطابعات والكاميرات.",
            "استخدم WPA3 حيث يتوفر، ومصادقة المؤسسات للموظفين قدر الإمكان.",
            "امنح الزوار وصولاً للإنترنت فقط دون الوصول للأنظمة الداخلية.",
          ],
        },
        { h2: "6. أدِر الشبكة مركزياً" },
        {
          p: "تتيح وحدة التحكم المركزية أو منصة الإدارة السحابية إعداد جميع نقاط الوصول بشكل موحد، ومعرفة المتصلين، واكتشاف المشكلات، وتطبيق التحديثات، وهذا مهم خصوصاً مع تعدد الطوابق أو الفروع.",
        },
        { h2: "كيف يساعدك بيت الأفكار؟" },
        {
          p: "نخطط لشبكات Wi-Fi المؤسسية والمبدّلات التي تدعمها، ونورّدها ونركّبها ونُعدّها للمكاتب في الدمام وجميع مناطق المملكة.",
        },
      ],
    },
  },
  "how-to-choose-it-system-integrator": {
    en: {
      summary: [
        "A good IT system integrator designs, supplies, installs and supports your IT as one system — not just boxes.",
        "Check vendor partnerships, certified engineers, local presence, knowledge of Saudi compliance (NCA ECC, PDPL), support terms and references.",
        "Ask for a written design and bill of materials, and compare total cost including licenses and renewals.",
      ],
      faq: [
        {
          q: "What is the difference between an IT reseller and a system integrator?",
          a: "A reseller mainly sells hardware and software licenses. A system integrator also designs the solution, installs and configures it, connects it with your existing systems and supports it afterwards. Many companies, including Thoughts House, do both.",
        },
        {
          q: "Should I choose a local IT partner in Saudi Arabia?",
          a: "A local partner can visit your sites, respond faster, and understands local requirements such as NCA and PDPL, as well as local procurement and support practices.",
        },
      ],
      blocks: [
        {
          p: "Whether you are securing a network, refreshing servers or opening a new office, the partner you choose determines how smoothly the project runs and how well it works afterwards. These are the questions we recommend asking any IT system integrator or reseller in Saudi Arabia — including us.",
        },
        {
          h2: "1. Which vendors do they partner with?",
        },
        {
          p: "Ask which manufacturers they are partnered with and at what level. Partners get access to pricing, training and vendor support. A partner that works with several vendors can recommend what fits you instead of the one brand they sell.",
        },
        {
          h2: "2. Are their engineers certified?",
        },
        {
          p: "Certifications from vendors (for example on firewalls, switching or backup platforms) show that the people configuring your systems have been trained on them. Ask who will actually do the work.",
        },
        {
          h2: "3. Do they design, or only supply?",
        },
        {
          p: "A system integrator should start from your requirements and produce a written design and bill of materials. If a quotation arrives without questions about your users, sites and applications, the solution may not fit.",
        },
        {
          h2: "4. Do they understand local compliance?",
        },
        {
          p: "Many organizations in the Kingdom need to align with the NCA Essential Cybersecurity Controls or the Personal Data Protection Law. A partner who knows these can build the right controls in from the start.",
        },
        {
          h2: "5. Are they local?",
        },
        {
          p: "A team in your region can survey sites, install on-premises and respond in person when needed.",
        },
        {
          h2: "6. What does support look like after go-live?",
        },
        {
          ul: [
            "Who do you call, and how quickly do they respond?",
            "Is maintenance included, and for how long?",
            "Who tracks license and warranty renewals?",
          ],
        },
        {
          h2: "7. What is the total cost?",
        },
        {
          p: "Compare total cost over three to five years: hardware, subscriptions and renewals, installation and support. The cheapest hardware quote is not always the cheapest solution.",
        },
        {
          h2: "8. Can they show references?",
        },
        {
          p: "Ask for examples of similar projects and, where possible, speak to an existing customer.",
        },
        {
          h2: "How Thoughts House works",
        },
        {
          p: "Thoughts House is an IT system integrator and supplier based in Dammam. We work with leading vendors across cybersecurity, networking, cloud and backup, start every project with an assessment and a written design, and support what we deliver. Contact us to discuss your project.",
        },
      ],
    },
    ar: {
      summary: [
        "شركة تكامل الأنظمة الجيدة تصمم تقنية المعلومات لديك وتورّدها وتركّبها وتدعمها كنظام واحد، لا مجرد أجهزة.",
        "تحقق من الشراكات مع الشركات المصنّعة، والمهندسين المعتمدين، والتواجد المحلي، ومعرفة متطلبات الالتزام في المملكة، وشروط الدعم، والمراجع.",
        "اطلب تصميماً مكتوباً وقائمة معدات، وقارن التكلفة الإجمالية بما فيها التراخيص والتجديد.",
      ],
      faq: [
        {
          q: "ما الفرق بين موزّع تقنية المعلومات وشركة تكامل الأنظمة؟",
          a: "الموزّع يبيع الأجهزة وتراخيص البرمجيات أساساً، أما شركة تكامل الأنظمة فتصمم الحل وتركّبه وتُعدّه وتربطه بأنظمتك الحالية وتدعمه بعد التشغيل. وكثير من الشركات، ومنها بيت الأفكار، تقدم الأمرين.",
        },
        {
          q: "هل أختار شريك تقنية معلومات محلياً في السعودية؟",
          a: "الشريك المحلي يزور مواقعك ويستجيب أسرع، ويفهم المتطلبات المحلية مثل ضوابط الهيئة الوطنية للأمن السيبراني ونظام حماية البيانات الشخصية، إضافة إلى ممارسات الشراء والدعم المحلية.",
        },
      ],
      blocks: [
        {
          p: "سواء كنت تؤمّن شبكتك أو تحدّث خوادمك أو تجهّز مكتباً جديداً، فإن الشريك الذي تختاره يحدد سلاسة المشروع وجودة النتيجة بعده. هذه الأسئلة التي ننصح بطرحها على أي شركة تكامل أنظمة أو موزّع تقنية معلومات في المملكة، ومنها نحن.",
        },
        {
          h2: "1. مع أي شركات مصنّعة يتعاملون؟",
        },
        {
          p: "اسأل عن الشركات المصنّعة التي تربطهم بها شراكة وعن مستواها. فالشريك يحصل على أسعار وتدريب ودعم من الشركة المصنّعة، والشريك الذي يتعامل مع عدة شركات يرشّح لك الأنسب لا العلامة الوحيدة التي يبيعها.",
        },
        {
          h2: "2. هل مهندسوهم معتمدون؟",
        },
        {
          p: "شهادات الشركات المصنّعة (مثل جدران الحماية أو المبدّلات أو منصات النسخ الاحتياطي) تثبت أن من يُعدّ أنظمتك تدرّب عليها. واسأل من سينفّذ العمل فعلياً.",
        },
        {
          h2: "3. هل يصممون الحل أم يورّدون فقط؟",
        },
        {
          p: "يجب أن تبدأ شركة تكامل الأنظمة من احتياجاتك وتقدّم تصميماً مكتوباً وقائمة معدات. وإذا وصلك عرض سعر دون أسئلة عن المستخدمين والمواقع والتطبيقات، فقد لا يناسبك الحل.",
        },
        {
          h2: "4. هل يفهمون متطلبات الالتزام المحلية؟",
        },
        {
          p: "تحتاج منشآت كثيرة في المملكة للالتزام بالضوابط الأساسية للأمن السيبراني أو نظام حماية البيانات الشخصية. والشريك الذي يعرفها يبني الضوابط المناسبة من البداية.",
        },
        {
          h2: "5. هل هم محليون؟",
        },
        {
          p: "الفريق الموجود في منطقتك يستطيع مسح المواقع والتركيب في الموقع والحضور عند الحاجة.",
        },
        {
          h2: "6. كيف يكون الدعم بعد التشغيل؟",
        },
        {
          ul: [
            "بمن تتصل، وما سرعة الاستجابة؟",
            "هل الصيانة مشمولة، ولأي مدة؟",
            "من يتابع تجديد التراخيص والضمانات؟",
          ],
        },
        {
          h2: "7. ما التكلفة الإجمالية؟",
        },
        {
          p: "قارن التكلفة على ثلاث إلى خمس سنوات: الأجهزة والاشتراكات وتجديدها والتركيب والدعم. فأرخص عرض للأجهزة ليس دائماً أرخص حل.",
        },
        {
          h2: "8. هل لديهم مراجع؟",
        },
        {
          p: "اطلب أمثلة لمشاريع مشابهة، وتحدث مع عميل حالي إن أمكن.",
        },
        {
          h2: "كيف يعمل بيت الأفكار",
        },
        {
          p: "بيت الأفكار شركة تكامل أنظمة ومورّد تقنية معلومات مقرّها الدمام. نعمل مع أبرز الشركات في الأمن السيبراني والشبكات والسحابة والنسخ الاحتياطي، ونبدأ كل مشروع بتقييم وتصميم مكتوب، وندعم ما نقدّمه. تواصل معنا لمناقشة مشروعك.",
        },
      ],
    },
  },
  "pdpl-gap-assessment": {
    en: {
      summary: [
        "A PDPL gap assessment compares how your organization handles personal data today with what Saudi Arabia's Personal Data Protection Law and its regulations require.",
        "It covers both legal and technical areas: data inventory, legal basis, privacy notices, data subject rights, transfers outside the Kingdom, security controls and breach notification.",
        "The output is a prioritized remediation plan, so you fix the highest-risk gaps first.",
      ],
      faq: [
        {
          q: "What is a PDPL gap assessment?",
          a: "A structured review that compares your current personal data practices with the requirements of the Saudi Personal Data Protection Law and its Implementing Regulations, and lists the gaps with a plan to close them.",
        },
        {
          q: "Who supervises the PDPL in Saudi Arabia?",
          a: "The Saudi Data and AI Authority (SDAIA) is the competent authority for the PDPL. Its official portal publishes the law, regulations and guidance.",
        },
        {
          q: "How long does a PDPL gap assessment take?",
          a: "For a small or mid-sized organization it usually takes a few weeks, depending on how many systems hold personal data and how well processes are documented.",
        },
      ],
      blocks: [
        {
          p: "Saudi Arabia's Personal Data Protection Law (PDPL) applies to organizations that process personal data of individuals in the Kingdom. A gap assessment is the fastest way to find out where you stand and what to fix. This guide explains what to review and how to turn findings into a plan. It is practical guidance, not legal advice; confirm details with the official SDAIA documents or a legal adviser.",
        },
        {
          h2: "Step 1: Map your personal data",
        },
        {
          p: "You cannot protect data you do not know about. Build a data inventory that answers, for each system or process:",
        },
        {
          ul: [
            "What personal data is collected (customers, employees, visitors, suppliers)?",
            "Why it is collected and on what legal basis.",
            "Where it is stored: on-premises servers, cloud services, email, file shares, spreadsheets.",
            "Who can access it, inside and outside the organization.",
            "How long it is kept, and how it is deleted.",
            "Whether it leaves the Kingdom, for example through a cloud or SaaS provider.",
          ],
        },
        {
          p: "This inventory becomes your record of processing activities, which the regulations expect controllers to maintain.",
        },
        {
          h2: "Step 2: Review the legal and governance areas",
        },
        {
          ul: [
            "Legal basis: consent, contract, legal obligation or legitimate interest, documented for each purpose.",
            "Privacy notice: clear, available in Arabic, and describes purposes, retention and rights.",
            "Data subject rights: a process to handle requests to access, correct, obtain a copy of or destroy personal data within the required time.",
            "Transfers outside the Kingdom: identify each transfer and check it against the transfer regulation.",
            "Processors: contracts with vendors that process data on your behalf.",
            "Roles: who is responsible for data protection, and whether you need a data protection officer.",
          ],
        },
        {
          h2: "Step 3: Review the technical security controls",
        },
        {
          p: "The PDPL requires appropriate organizational and technical measures to protect personal data. In practice, review:",
        },
        {
          ul: [
            "Access control: least privilege, multi-factor authentication and removal of leavers' accounts.",
            "Encryption of laptops, databases and backups, and of data in transit.",
            "Endpoint and email security, including protection against phishing and ransomware.",
            "Central logging so you can investigate who accessed what.",
            "Backups that are protected from ransomware and tested.",
            "Secure disposal of devices and media.",
          ],
        },
        {
          h2: "Step 4: Test your breach response",
        },
        {
          p: "The Implementing Regulations require notifying SDAIA within 72 hours of becoming aware of a personal data breach, and informing affected individuals where the breach may harm them. Check that you have a written incident response plan, a named owner, and the logs needed to understand what happened. Run a short tabletop exercise to test it.",
        },
        {
          h2: "Step 5: Prioritize and fix",
        },
        {
          p: "Score each gap by risk and effort. Quick wins such as MFA, an Arabic privacy notice and a rights-request process often close a large part of the risk. Larger items, such as moving data hosted abroad or adding central logging, go into a roadmap with owners and dates.",
        },
        {
          h2: "How Thoughts House can help",
        },
        {
          p: "We support the technical side of PDPL compliance across Saudi Arabia: data mapping workshops, security control reviews, and implementation of MFA, encryption, endpoint protection, logging and backup. We work alongside your legal adviser for the legal review.",
        },
      ],
      sources: [
        {
          label: "SDAIA — Personal Data Protection Law portal",
          url: "https://dgp.sdaia.gov.sa/",
        },
      ],
    },
    ar: {
      summary: [
        "تقييم الفجوات لنظام حماية البيانات الشخصية يقارن طريقة تعامل منشأتك مع البيانات الشخصية اليوم بما يتطلبه النظام ولوائحه في المملكة.",
        "يشمل الجوانب النظامية والتقنية: حصر البيانات، والأساس النظامي، وإشعار الخصوصية، وحقوق أصحاب البيانات، والنقل خارج المملكة، والضوابط الأمنية، والإبلاغ عن التسرب.",
        "النتيجة خطة معالجة مرتبة حسب الأولوية، لتبدأ بالفجوات الأعلى خطورة.",
      ],
      faq: [
        {
          q: "ما هو تقييم الفجوات لنظام حماية البيانات الشخصية؟",
          a: "مراجعة منظمة تقارن ممارساتك الحالية في معالجة البيانات الشخصية بمتطلبات نظام حماية البيانات الشخصية ولوائحه التنفيذية، وتحدد الفجوات مع خطة لمعالجتها.",
        },
        {
          q: "من الجهة المشرفة على نظام حماية البيانات الشخصية في السعودية؟",
          a: "الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا) هي الجهة المختصة، وتنشر بوابتها الرسمية النظام ولوائحه والأدلة الإرشادية.",
        },
        {
          q: "كم يستغرق تقييم الفجوات؟",
          a: "في المنشآت الصغيرة والمتوسطة يستغرق عادةً بضعة أسابيع، بحسب عدد الأنظمة التي تحتوي بيانات شخصية ومدى توثيق الإجراءات.",
        },
      ],
      blocks: [
        {
          p: "ينطبق نظام حماية البيانات الشخصية على الجهات التي تعالج بيانات شخصية لأفراد في المملكة. وتقييم الفجوات أسرع طريقة لمعرفة وضعك الحالي وما يجب إصلاحه. يشرح هذا الدليل ما تراجعه وكيف تحوّل النتائج إلى خطة عمل. وهو إرشاد عملي وليس استشارة قانونية، فتحقق من التفاصيل في وثائق سدايا الرسمية أو مع مستشار قانوني.",
        },
        {
          h2: "الخطوة 1: حصر البيانات الشخصية",
        },
        {
          p: "لا يمكنك حماية بيانات لا تعرف بوجودها. أعدّ سجلاً للبيانات يجيب لكل نظام أو إجراء عن الأسئلة التالية:",
        },
        {
          ul: [
            "ما البيانات الشخصية التي تُجمع (العملاء، الموظفون، الزوار، الموردون)؟",
            "لماذا تُجمع، وما أساسها النظامي؟",
            "أين تُخزَّن: خوادم داخلية، خدمات سحابية، بريد إلكتروني، مجلدات مشتركة، جداول بيانات.",
            "من يستطيع الوصول إليها داخل المنشأة وخارجها؟",
            "كم تُحفظ، وكيف تُتلف؟",
            "هل تخرج من المملكة، مثلاً عبر مزوّد سحابي أو تطبيق خارجي؟",
          ],
        },
        {
          p: "يصبح هذا الحصر سجل أنشطة المعالجة الذي تتوقع اللوائح من جهة التحكم الاحتفاظ به.",
        },
        {
          h2: "الخطوة 2: مراجعة الجوانب النظامية والحوكمة",
        },
        {
          ul: [
            "الأساس النظامي: الموافقة أو العقد أو الالتزام النظامي أو المصلحة المشروعة، موثقاً لكل غرض.",
            "إشعار الخصوصية: واضح ومتاح بالعربية، ويبين الأغراض ومدة الحفظ والحقوق.",
            "حقوق أصحاب البيانات: إجراء للتعامل مع طلبات الاطلاع والتصحيح والحصول على نسخة والإتلاف خلال المدة المطلوبة.",
            "النقل خارج المملكة: حصر كل عملية نقل والتحقق منها وفق لائحة نقل البيانات.",
            "جهات المعالجة: عقود مع الموردين الذين يعالجون البيانات نيابةً عنك.",
            "الأدوار: من المسؤول عن حماية البيانات، وهل تحتاج إلى مسؤول حماية بيانات.",
          ],
        },
        {
          h2: "الخطوة 3: مراجعة الضوابط الأمنية التقنية",
        },
        {
          p: "يتطلب النظام اتخاذ تدابير تنظيمية وتقنية مناسبة لحماية البيانات الشخصية. وعملياً راجع ما يلي:",
        },
        {
          ul: [
            "التحكم في الصلاحيات: أقل صلاحية لازمة، والتحقق متعدد العوامل، وإلغاء حسابات المغادرين.",
            "تشفير الحواسيب وقواعد البيانات والنسخ الاحتياطية، والبيانات أثناء النقل.",
            "حماية الأجهزة والبريد الإلكتروني من التصيد وبرامج الفدية.",
            "السجلات المركزية لمعرفة من اطّلع على ماذا.",
            "نسخ احتياطية محمية من برامج الفدية ومختبرة.",
            "الإتلاف الآمن للأجهزة ووسائط التخزين.",
          ],
        },
        {
          h2: "الخطوة 4: اختبار الاستجابة للتسرب",
        },
        {
          p: "تتطلب اللوائح التنفيذية إبلاغ سدايا خلال 72 ساعة من العلم بتسرب البيانات الشخصية، وإبلاغ الأفراد المتأثرين إذا كان التسرب قد يضر بهم. تأكد من وجود خطة مكتوبة للاستجابة للحوادث، ومسؤول محدد، والسجلات اللازمة لفهم ما حدث، ونفّذ تمريناً قصيراً لاختبارها.",
        },
        {
          h2: "الخطوة 5: ترتيب الأولويات والمعالجة",
        },
        {
          p: "قيّم كل فجوة حسب الخطورة والجهد. فالإجراءات السريعة مثل التحقق متعدد العوامل وإشعار خصوصية بالعربية وإجراء لطلبات الحقوق تعالج جزءاً كبيراً من المخاطر. أما البنود الأكبر، مثل نقل بيانات مستضافة خارج المملكة أو إضافة سجلات مركزية، فتدخل في خارطة طريق بمسؤولين وتواريخ.",
        },
        {
          h2: "كيف يساعدك بيت الأفكار",
        },
        {
          p: "ندعم الجانب التقني من الامتثال لنظام حماية البيانات الشخصية في جميع مناطق المملكة: ورش حصر البيانات، ومراجعة الضوابط الأمنية، وتنفيذ التحقق متعدد العوامل والتشفير وحماية الأجهزة والسجلات والنسخ الاحتياطي، بالتعاون مع مستشارك القانوني في المراجعة النظامية.",
        },
      ],
      sources: [
        {
          label: "سدايا — بوابة نظام حماية البيانات الشخصية",
          url: "https://dgp.sdaia.gov.sa/",
        },
      ],
    },
  },
  "nca-ecc-compliance-checklist": {
    en: {
      summary: [
        "This checklist turns the NCA Essential Cybersecurity Controls (ECC 2-2024) into 20 practical checks you can review with your IT team.",
        "It follows the ECC domains: governance, defense, resilience, third-party and cloud security, and industrial control systems where relevant.",
        "Organizations using cloud, critical systems or operational technology should also review the NCA's related control sets, such as the CCC, CSCC and OTCC.",
      ],
      faq: [
        {
          q: "Is this checklist enough to prove ECC compliance?",
          a: "No. It is a starting point to find gaps quickly. Compliance is measured against the full official ECC document and, for regulated entities, through the NCA's assessment process.",
        },
        {
          q: "What other NCA control sets might apply?",
          a: "Depending on your environment, the NCA also publishes control sets such as the Cloud Cybersecurity Controls (CCC), Critical Systems Cybersecurity Controls (CSCC) and Operational Technology Cybersecurity Controls (OTCC). Check the NCA website for the ones that apply to you.",
        },
        {
          q: "Which ECC controls should we fix first?",
          a: "Usually multi-factor authentication, patching, endpoint protection, backups protected from ransomware and central logging, because they reduce the most common attack paths.",
        },
      ],
      blocks: [
        {
          p: "Our guide to the NCA Essential Cybersecurity Controls explains what the ECC are and who they apply to. This article is the hands-on companion: a checklist you can go through with your IT team to see where you stand. Use the official ECC document as the final reference.",
        },
        {
          h2: "Governance",
        },
        {
          ul: [
            "1. A cybersecurity strategy and policies are approved by management.",
            "2. Cybersecurity roles are defined, with a responsible person or function.",
            "3. Cybersecurity risks are assessed and reviewed regularly.",
            "4. Cybersecurity requirements are included in IT projects and changes.",
            "5. Staff receive regular security awareness training.",
          ],
        },
        {
          h2: "Defense",
        },
        {
          ul: [
            "6. An up-to-date inventory of hardware, software and information assets exists.",
            "7. Access follows least privilege, with multi-factor authentication for remote and privileged access.",
            "8. Leavers' and unused accounts are removed promptly.",
            "9. Systems and network devices are hardened and patched on a schedule.",
            "10. Endpoint protection (ideally EDR) runs on all laptops, desktops and servers.",
            "11. Email is protected against phishing, spoofing and malicious attachments.",
            "12. The network is segmented and protected by firewalls with reviewed rules.",
            "13. Sensitive data is classified and encrypted where required.",
            "14. Backups are made, protected from ransomware and restore-tested.",
            "15. Vulnerability scans run regularly and findings are fixed.",
            "16. Security logs are collected centrally and monitored.",
            "17. An incident response plan exists and has been tested.",
          ],
        },
        {
          h2: "Resilience",
        },
        {
          ul: [
            "18. Cybersecurity is part of business continuity and disaster recovery plans.",
          ],
        },
        {
          h2: "Third parties and cloud",
        },
        {
          ul: [
            "19. Contracts with suppliers and service providers include cybersecurity requirements.",
            "20. Cloud services are assessed for security and data hosting location before use.",
          ],
        },
        {
          p: "If your organization uses industrial control systems or operational technology, the ECC add requirements for those environments, and the OTCC go further.",
        },
        {
          h2: "How to use the checklist",
        },
        {
          p: "Mark each item as in place, partial or missing, and note the evidence (a policy, a report, a screenshot). Then rank the gaps by risk. Missing MFA, unpatched systems and untested backups are usually the first items to fix.",
        },
        {
          h2: "How Thoughts House can help",
        },
        {
          p: "We help organizations across Saudi Arabia run ECC gap assessments and implement the technical controls: firewalls, EDR, email security, MFA, central logging and protected backups, with documentation you can use as evidence.",
        },
      ],
      sources: [
        {
          label: "NCA — Essential Cybersecurity Controls (ECC)",
          url: "https://nca.gov.sa/en/regulatory-documents/controls-list/ecc/",
        },
      ],
    },
    ar: {
      summary: [
        "تحوّل هذه القائمة الضوابط الأساسية للأمن السيبراني (ECC 2-2024) إلى 20 بنداً عملياً تراجعها مع فريق تقنية المعلومات.",
        "تتبع محاور الضوابط: الحوكمة، والتعزيز (الدفاع)، والصمود، والأطراف الخارجية والحوسبة السحابية، وأنظمة التحكم الصناعي عند وجودها.",
        "الجهات التي تستخدم السحابة أو الأنظمة الحساسة أو التقنيات التشغيلية يجب أن تراجع أيضاً مجموعات الضوابط الأخرى للهيئة مثل CCC وCSCC وOTCC.",
      ],
      faq: [
        {
          q: "هل تكفي هذه القائمة لإثبات الامتثال لضوابط ECC؟",
          a: "لا. هي نقطة بداية لاكتشاف الفجوات بسرعة. ويُقاس الامتثال وفق وثيقة الضوابط الرسمية كاملة، ومن خلال آلية التقييم لدى الهيئة للجهات الملزمة.",
        },
        {
          q: "ما مجموعات الضوابط الأخرى التي قد تنطبق علينا؟",
          a: "بحسب بيئتك، تصدر الهيئة الوطنية للأمن السيبراني مجموعات أخرى مثل ضوابط الأمن السيبراني للحوسبة السحابية (CCC)، وضوابط الأمن السيبراني للأنظمة الحساسة (CSCC)، وضوابط الأمن السيبراني للأنظمة التشغيلية (OTCC). راجع موقع الهيئة لمعرفة ما ينطبق عليك.",
        },
        {
          q: "بأي الضوابط نبدأ؟",
          a: "غالباً التحقق متعدد العوامل، والتحديثات الأمنية، وحماية الأجهزة، والنسخ الاحتياطية المحمية من برامج الفدية، والسجلات المركزية، لأنها تسد أكثر طرق الهجوم شيوعاً.",
        },
      ],
      blocks: [
        {
          p: "يشرح دليلنا عن الضوابط الأساسية للأمن السيبراني ماهيتها ومن تنطبق عليه. أما هذا المقال فهو الجانب العملي: قائمة تراجعها مع فريق تقنية المعلومات لتعرف موقعك. واعتمد وثيقة الضوابط الرسمية مرجعاً نهائياً.",
        },
        {
          h2: "الحوكمة",
        },
        {
          ul: [
            "1. استراتيجية وسياسات للأمن السيبراني معتمدة من الإدارة.",
            "2. أدوار الأمن السيبراني محددة، مع شخص أو إدارة مسؤولة.",
            "3. تقييم مخاطر الأمن السيبراني ومراجعتها دورياً.",
            "4. تضمين متطلبات الأمن السيبراني في مشاريع التقنية والتغييرات.",
            "5. توعية الموظفين بالأمن السيبراني بشكل دوري.",
          ],
        },
        {
          h2: "التعزيز (الدفاع)",
        },
        {
          ul: [
            "6. سجل محدّث للأجهزة والبرمجيات والأصول المعلوماتية.",
            "7. صلاحيات بأقل قدر لازم، مع تحقق متعدد العوامل للوصول عن بُعد والحسابات ذات الصلاحيات العالية.",
            "8. إلغاء حسابات المغادرين والحسابات غير المستخدمة فوراً.",
            "9. تقوية إعدادات الأنظمة وأجهزة الشبكة وتحديثها بجدول منتظم.",
            "10. حماية الأجهزة (ويفضّل EDR) على جميع الحواسيب والخوادم.",
            "11. حماية البريد الإلكتروني من التصيد والانتحال والمرفقات الضارة.",
            "12. تقسيم الشبكة وحمايتها بجدران حماية ذات قواعد مراجعة.",
            "13. تصنيف البيانات الحساسة وتشفيرها عند الحاجة.",
            "14. نسخ احتياطية محمية من برامج الفدية ومختبرة الاستعادة.",
            "15. فحص الثغرات بانتظام ومعالجة نتائجه.",
            "16. جمع السجلات الأمنية مركزياً ومراقبتها.",
            "17. خطة للاستجابة للحوادث تم اختبارها.",
          ],
        },
        {
          h2: "الصمود",
        },
        {
          ul: [
            "18. الأمن السيبراني جزء من خطط استمرارية الأعمال والتعافي من الكوارث.",
          ],
        },
        {
          h2: "الأطراف الخارجية والحوسبة السحابية",
        },
        {
          ul: [
            "19. عقود الموردين ومقدمي الخدمات تتضمن متطلبات الأمن السيبراني.",
            "20. تقييم أمن الخدمات السحابية وموقع استضافة البيانات قبل استخدامها.",
          ],
        },
        {
          p: "إذا كانت منشأتك تستخدم أنظمة تحكم صناعي أو تقنيات تشغيلية، فالضوابط الأساسية تضيف متطلبات لهذه البيئات، وضوابط OTCC تتوسع فيها أكثر.",
        },
        {
          h2: "كيف تستخدم القائمة",
        },
        {
          p: "صنّف كل بند: مطبّق أو جزئي أو غير مطبّق، ودوّن الدليل (سياسة، تقرير، لقطة شاشة). ثم رتّب الفجوات حسب الخطورة. وعادةً يأتي غياب التحقق متعدد العوامل والأنظمة غير المحدّثة والنسخ غير المختبرة في مقدمة ما يُعالج.",
        },
        {
          h2: "كيف يساعدك بيت الأفكار",
        },
        {
          p: "نساعد المنشآت في جميع مناطق المملكة على تقييم الفجوات وفق الضوابط الأساسية وتنفيذ الضوابط التقنية: جدران الحماية، وEDR، وحماية البريد، والتحقق متعدد العوامل، والسجلات المركزية، والنسخ الاحتياطية المحمية، مع توثيق يصلح دليلاً على التطبيق.",
        },
      ],
      sources: [
        {
          label:
            "الهيئة الوطنية للأمن السيبراني — الضوابط الأساسية للأمن السيبراني",
          url: "https://nca.gov.sa/ar/regulatory-documents/controls-list/ecc/",
        },
      ],
    },
  },
  "edr-vs-xdr-vs-mdr": {
    en: {
      summary: [
        "EDR (endpoint detection and response) watches laptops and servers for suspicious behavior and lets you isolate and investigate an affected device.",
        "XDR (extended detection and response) correlates signals from endpoints, network, email, identity and cloud in one platform.",
        "MDR (managed detection and response) is a service: a team of analysts monitors and responds 24/7 using EDR or XDR tools.",
      ],
      faq: [
        {
          q: "Is EDR the same as antivirus?",
          a: "No. Traditional antivirus blocks known malware. EDR also records activity on the device, detects suspicious behavior such as ransomware encryption or credential theft, and lets you isolate the device and investigate.",
        },
        {
          q: "Do small companies need XDR?",
          a: "Not always. A small company with no security team usually gets more value from EDR combined with an MDR service. XDR becomes valuable when you have several security tools and someone to act on the correlated alerts.",
        },
        {
          q: "What does MDR include?",
          a: "Typically 24/7 monitoring of alerts, investigation, threat hunting, guided or direct response such as isolating devices, and regular reports. Scope differs by provider, so check what response actions are included.",
        },
      ],
      blocks: [
        {
          p: "EDR, XDR and MDR appear in almost every cybersecurity proposal today, and the terms are often mixed up. They are related but solve different problems. This guide explains each one and how to choose.",
        },
        {
          h2: "EDR: endpoint detection and response",
        },
        {
          p: "EDR is software installed on laptops, desktops and servers. Beyond blocking known malware, it records process, file and network activity, detects suspicious behavior, and gives you response actions such as isolating a device, killing a process or rolling back changes. It is the foundation of modern endpoint security.",
        },
        {
          h2: "XDR: extended detection and response",
        },
        {
          p: "XDR extends the same idea beyond the endpoint. It collects signals from endpoints, firewalls, email, identity and cloud services, and correlates them into a single incident. For example, a phishing email, a suspicious login and malware on a laptop appear as one attack instead of three separate alerts.",
        },
        {
          h2: "MDR: managed detection and response",
        },
        {
          p: "MDR is not a product but a service. A provider's security analysts monitor your EDR or XDR alerts around the clock, investigate them, hunt for threats and respond, either by taking action directly or by guiding your team. It gives you a 24/7 security operations capability without building one.",
        },
        {
          h2: "Quick comparison",
        },
        {
          ul: [
            "What it is: EDR and XDR are technology; MDR is a service delivered by people.",
            "Coverage: EDR covers endpoints; XDR covers endpoints plus network, email, identity and cloud; MDR covers whatever tools it monitors.",
            "Who responds: with EDR and XDR, your team; with MDR, the provider's analysts, 24/7.",
            "Best for: EDR for every organization; XDR for teams with several security tools; MDR for organizations without a 24/7 security team.",
          ],
        },
        {
          h2: "How to choose",
        },
        {
          ul: [
            "Start with EDR on every endpoint and server. It is now a baseline control.",
            "Ask who will watch the alerts at night and on weekends. If nobody, add MDR.",
            "Consider XDR when you already run several security products from one vendor ecosystem and want fewer, better alerts.",
            "Check that the solution supports your compliance needs, such as log retention for NCA ECC.",
          ],
        },
        {
          h2: "How Thoughts House can help",
        },
        {
          p: "We supply, deploy and support EDR and XDR platforms from leading vendors such as Sophos and Palo Alto Networks across Saudi Arabia, and arrange MDR services for organizations that need 24/7 monitoring and response.",
        },
      ],
      sources: [
        {
          label: "NIST Cybersecurity Framework 2.0",
          url: "https://www.nist.gov/cyberframework",
        },
      ],
    },
    ar: {
      summary: [
        "EDR (الكشف والاستجابة لنقاط النهاية) يراقب الحواسيب والخوادم لاكتشاف السلوك المشبوه، ويتيح عزل الجهاز المصاب والتحقيق فيه.",
        "XDR (الكشف والاستجابة الموسّعة) يربط إشارات الأجهزة والشبكة والبريد والهوية والسحابة في منصة واحدة.",
        "MDR (الكشف والاستجابة المُدارة) خدمة: فريق محللين يراقب ويستجيب على مدار الساعة باستخدام أدوات EDR أو XDR.",
      ],
      faq: [
        {
          q: "هل EDR هو نفسه مضاد الفيروسات؟",
          a: "لا. مضاد الفيروسات التقليدي يمنع البرمجيات الضارة المعروفة، أما EDR فيسجّل أيضاً النشاط على الجهاز، ويكتشف السلوك المشبوه مثل تشفير برامج الفدية أو سرقة كلمات المرور، ويتيح عزل الجهاز والتحقيق.",
        },
        {
          q: "هل تحتاج الشركات الصغيرة إلى XDR؟",
          a: "ليس دائماً. الشركة الصغيرة التي لا تملك فريق أمن تستفيد غالباً أكثر من EDR مع خدمة MDR. ويصبح XDR مفيداً عند وجود عدة أدوات أمنية وفريق يتعامل مع التنبيهات المترابطة.",
        },
        {
          q: "ماذا تشمل خدمة MDR؟",
          a: "عادةً مراقبة التنبيهات على مدار الساعة، والتحقيق، والبحث عن التهديدات، والاستجابة المباشرة أو الموجّهة مثل عزل الأجهزة، وتقارير دورية. ويختلف النطاق بين المزوّدين، فتحقق من إجراءات الاستجابة المشمولة.",
        },
      ],
      blocks: [
        {
          p: "تظهر مصطلحات EDR وXDR وMDR في معظم عروض الأمن السيبراني اليوم، وكثيراً ما يُخلط بينها. هي مترابطة لكنها تحل مشكلات مختلفة. يشرح هذا الدليل كل واحد منها وكيف تختار.",
        },
        {
          h2: "EDR: الكشف والاستجابة لنقاط النهاية",
        },
        {
          p: "برنامج يُثبَّت على الحواسيب والخوادم. وإلى جانب منع البرمجيات الضارة المعروفة، يسجل نشاط العمليات والملفات والشبكة، ويكتشف السلوك المشبوه، ويوفر إجراءات استجابة مثل عزل الجهاز أو إيقاف عملية أو التراجع عن التغييرات. وهو أساس حماية الأجهزة الحديثة.",
        },
        {
          h2: "XDR: الكشف والاستجابة الموسّعة",
        },
        {
          p: "يوسّع الفكرة نفسها لما بعد الجهاز، فيجمع الإشارات من الأجهزة وجدران الحماية والبريد والهوية والخدمات السحابية ويربطها في حادثة واحدة. فمثلاً تظهر رسالة تصيد وتسجيل دخول مشبوه وبرمجية ضارة على حاسوب كهجوم واحد بدلاً من ثلاثة تنبيهات منفصلة.",
        },
        {
          h2: "MDR: الكشف والاستجابة المُدارة",
        },
        {
          p: "ليس منتجاً بل خدمة. يراقب محللو الأمن لدى المزوّد تنبيهات EDR أو XDR على مدار الساعة، ويحققون فيها، ويبحثون عن التهديدات، ويستجيبون مباشرةً أو بتوجيه فريقك. فتحصل على قدرة عمليات أمنية على مدار الساعة دون بنائها داخلياً.",
        },
        {
          h2: "مقارنة سريعة",
        },
        {
          ul: [
            "الطبيعة: EDR وXDR تقنية، وMDR خدمة يقدمها أشخاص.",
            "النطاق: EDR يغطي الأجهزة، وXDR يغطي الأجهزة والشبكة والبريد والهوية والسحابة، وMDR يغطي الأدوات التي يراقبها.",
            "من يستجيب: مع EDR وXDR فريقك، ومع MDR محللو المزوّد على مدار الساعة.",
            "الأنسب: EDR لكل منشأة، وXDR للفرق التي تستخدم عدة أدوات أمنية، وMDR للمنشآت التي لا تملك فريق أمن يعمل على مدار الساعة.",
          ],
        },
        {
          h2: "كيف تختار",
        },
        {
          ul: [
            "ابدأ بتثبيت EDR على كل جهاز وخادم، فهو اليوم ضابط أساسي.",
            "اسأل: من سيراقب التنبيهات ليلاً وفي العطل؟ إن لم يوجد أحد، فأضف MDR.",
            "فكّر في XDR عندما تستخدم عدة منتجات أمنية من منظومة واحدة وتريد تنبيهات أقل وأدق.",
            "تأكد أن الحل يدعم متطلبات الامتثال لديك، مثل حفظ السجلات وفق الضوابط الأساسية للأمن السيبراني.",
          ],
        },
        {
          h2: "كيف يساعدك بيت الأفكار",
        },
        {
          p: "نورّد وننفذ وندعم منصات EDR وXDR من شركات رائدة مثل Sophos وPalo Alto Networks في جميع مناطق المملكة، ونرتّب خدمات MDR للمنشآت التي تحتاج مراقبة واستجابة على مدار الساعة.",
        },
      ],
      sources: [
        {
          label: "NIST — إطار الأمن السيبراني 2.0",
          url: "https://www.nist.gov/cyberframework",
        },
      ],
    },
  },
  "cloud-disaster-recovery-saudi-arabia": {
    en: {
      summary: [
        "Disaster recovery (DR) is how you bring critical systems back after a major outage, such as ransomware, hardware failure or a site incident.",
        "Start by setting two targets per system: RPO (how much data you can lose) and RTO (how long you can be down).",
        "In Saudi Arabia, also check data classification and residency rules before choosing where to recover, and test the DR plan regularly.",
      ],
      faq: [
        {
          q: "What is the difference between backup and disaster recovery?",
          a: "Backup keeps copies of your data. Disaster recovery is the plan and infrastructure to run your systems again after an outage, within an agreed time. You need backups for DR, but backups alone do not guarantee a fast recovery.",
        },
        {
          q: "What are RPO and RTO?",
          a: "RPO (recovery point objective) is the maximum amount of data, measured in time, you can afford to lose. RTO (recovery time objective) is the maximum time a system can be unavailable before it must be running again.",
        },
        {
          q: "Can we recover to a cloud region outside Saudi Arabia?",
          a: "It depends on the data. Some data, particularly government and sensitive data, must stay in the Kingdom under national regulations. Classify your data first and check the applicable NCA and SDAIA requirements before choosing a recovery location.",
        },
      ],
      blocks: [
        {
          p: "Ransomware, hardware failures, power or cooling incidents and human error can all take critical systems offline. Disaster recovery (DR) is the plan and infrastructure that brings them back within an agreed time. Cloud services have made DR affordable for organizations that could never justify a second data center.",
        },
        {
          h2: "Step 1: Define RPO and RTO",
        },
        {
          p: "List your critical systems, such as ERP, email, file servers and line-of-business applications, and agree two targets for each with the business:",
        },
        {
          ul: [
            "RPO: how much data you can afford to lose, for example 15 minutes or 24 hours.",
            "RTO: how long the system can be down, for example 1 hour or 2 days.",
          ],
        },
        {
          p: "Tighter targets cost more, so not every system needs the same level.",
        },
        {
          h2: "Step 2: Choose a DR model",
        },
        {
          ul: [
            "Backup and restore: backups are copied to the cloud and restored when needed. Lowest cost, longest recovery time.",
            "Pilot light: core systems such as databases are replicated continuously, while other servers are started only during a disaster.",
            "Warm standby: a smaller copy of the environment is always running and is scaled up during a disaster.",
            "Active-active: two sites run at the same time. Fastest recovery, highest cost.",
          ],
        },
        {
          h2: "Step 3: Consider data residency in Saudi Arabia",
        },
        {
          p: "Before choosing where to recover, classify your data. National regulations require some data, particularly government and sensitive data, to stay inside the Kingdom, and organizations subject to NCA controls must also meet cloud cybersecurity requirements. Several global and local cloud providers now operate data centers in Saudi Arabia, which makes in-Kingdom DR more practical.",
        },
        {
          h2: "Step 4: Protect against ransomware",
        },
        {
          p: "A DR copy that ransomware can encrypt is not a DR copy. Use immutable or isolated backups, separate credentials for the DR environment, and multi-factor authentication for its management.",
        },
        {
          h2: "Step 5: Document and test",
        },
        {
          p: "Write a DR runbook: who declares a disaster, the order systems are recovered, and how users reconnect. Test it at least once a year, and after major changes. A DR plan that has never been tested is an assumption, not a plan.",
        },
        {
          h2: "How Thoughts House can help",
        },
        {
          p: "We design and implement backup and cloud disaster recovery across Saudi Arabia, using platforms such as Veeam: recovery targets, replication of critical servers, immutable backups, runbooks and regular DR tests.",
        },
      ],
      sources: [
        {
          label: "NIST SP 800-34 — Contingency Planning Guide",
          url: "https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final",
        },
      ],
    },
    ar: {
      summary: [
        "التعافي من الكوارث هو طريقة إعادة تشغيل الأنظمة الحرجة بعد انقطاع كبير، مثل برامج الفدية أو أعطال الأجهزة أو حادث في الموقع.",
        "ابدأ بتحديد هدفين لكل نظام: RPO (كم من البيانات يمكنك تحمّل فقده) وRTO (كم من الوقت يمكنك تحمّل التوقف).",
        "في السعودية، تحقق أيضاً من تصنيف البيانات ومتطلبات بقائها داخل المملكة قبل اختيار موقع الاستعادة، واختبر خطة التعافي بانتظام.",
      ],
      faq: [
        {
          q: "ما الفرق بين النسخ الاحتياطي والتعافي من الكوارث؟",
          a: "النسخ الاحتياطي يحتفظ بنسخ من بياناتك، أما التعافي من الكوارث فهو الخطة والبنية اللازمة لإعادة تشغيل أنظمتك بعد الانقطاع خلال وقت متفق عليه. تحتاج النسخ للتعافي، لكنها وحدها لا تضمن استعادة سريعة.",
        },
        {
          q: "ما معنى RPO وRTO؟",
          a: "RPO (هدف نقطة الاستعادة) هو أقصى قدر من البيانات، مقاساً بالوقت، يمكنك تحمّل فقده. وRTO (هدف وقت الاستعادة) هو أقصى مدة يمكن أن يتوقف فيها النظام قبل أن يجب إعادته للعمل.",
        },
        {
          q: "هل يمكن الاستعادة إلى منطقة سحابية خارج السعودية؟",
          a: "يعتمد ذلك على البيانات. فبعض البيانات، خاصةً الحكومية والحساسة، يجب أن تبقى داخل المملكة وفق الأنظمة الوطنية. صنّف بياناتك أولاً وراجع متطلبات الهيئة الوطنية للأمن السيبراني وسدايا قبل اختيار موقع الاستعادة.",
        },
      ],
      blocks: [
        {
          p: "برامج الفدية وأعطال الأجهزة وحوادث الكهرباء أو التبريد والأخطاء البشرية قد توقف الأنظمة الحرجة. والتعافي من الكوارث هو الخطة والبنية التي تعيدها للعمل خلال وقت متفق عليه. وقد جعلت الخدمات السحابية التعافي في متناول منشآت لم يكن بإمكانها تبرير مركز بيانات ثانٍ.",
        },
        {
          h2: "الخطوة 1: تحديد RPO وRTO",
        },
        {
          p: "حدد أنظمتك الحرجة، مثل نظام تخطيط الموارد والبريد وخوادم الملفات وتطبيقات العمل، واتفق مع الإدارة على هدفين لكل منها:",
        },
        {
          ul: [
            "RPO: كم من البيانات يمكن تحمّل فقده، مثلاً 15 دقيقة أو 24 ساعة.",
            "RTO: كم يمكن أن يتوقف النظام، مثلاً ساعة أو يومين.",
          ],
        },
        {
          p: "كلما ضاقت الأهداف ارتفعت التكلفة، ولذلك لا تحتاج كل الأنظمة المستوى نفسه.",
        },
        {
          h2: "الخطوة 2: اختيار نموذج التعافي",
        },
        {
          ul: [
            "النسخ والاستعادة: تُنسخ البيانات إلى السحابة وتُستعاد عند الحاجة. أقل تكلفة وأطول وقت استعادة.",
            "الشعلة الدائمة (Pilot light): تُنسخ الأنظمة الأساسية مثل قواعد البيانات باستمرار، وتُشغَّل بقية الخوادم عند الكارثة فقط.",
            "الاستعداد الدافئ (Warm standby): نسخة مصغرة من البيئة تعمل دائماً وتُوسَّع عند الكارثة.",
            "التشغيل المتزامن (Active-active): موقعان يعملان في الوقت نفسه. أسرع استعادة وأعلى تكلفة.",
          ],
        },
        {
          h2: "الخطوة 3: مراعاة بقاء البيانات داخل المملكة",
        },
        {
          p: "قبل اختيار موقع الاستعادة صنّف بياناتك. فالأنظمة الوطنية تتطلب بقاء بعض البيانات، خاصةً الحكومية والحساسة، داخل المملكة، والجهات الخاضعة لضوابط الهيئة الوطنية للأمن السيبراني يجب أن تلتزم أيضاً بمتطلبات الأمن السيبراني للحوسبة السحابية. ويشغّل اليوم عدد من مزوّدي السحابة العالميين والمحليين مراكز بيانات في المملكة، مما يجعل التعافي داخلها أكثر عملية.",
        },
        {
          h2: "الخطوة 4: الحماية من برامج الفدية",
        },
        {
          p: "نسخة التعافي التي تستطيع برامج الفدية تشفيرها ليست نسخة تعافٍ. استخدم نسخاً غير قابلة للتعديل أو معزولة، وبيانات دخول منفصلة لبيئة التعافي، وتحققاً متعدد العوامل لإدارتها.",
        },
        {
          h2: "الخطوة 5: التوثيق والاختبار",
        },
        {
          p: "اكتب دليل تشغيل للتعافي: من يعلن الكارثة، وترتيب استعادة الأنظمة، وكيف يعود المستخدمون للاتصال. واختبره مرة في السنة على الأقل وبعد التغييرات الكبيرة. فخطة التعافي التي لم تُختبر افتراض وليست خطة.",
        },
        {
          h2: "كيف يساعدك بيت الأفكار",
        },
        {
          p: "نصمم وننفذ النسخ الاحتياطي والتعافي من الكوارث سحابياً في جميع مناطق المملكة باستخدام منصات مثل Veeam: أهداف الاستعادة، ونسخ الخوادم الحرجة، والنسخ غير القابلة للتعديل، وأدلة التشغيل، واختبارات التعافي الدورية.",
        },
      ],
      sources: [
        {
          label: "NIST SP 800-34 — دليل تخطيط الطوارئ",
          url: "https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final",
        },
      ],
    },
  },
  "cat6-vs-cat6a": {
    en: {
      summary: [
        "Cat6 is rated to 250 MHz and supports 1 Gbps to 100 m; 10 Gbps works only over short runs, typically up to about 55 m.",
        "Cat6A is rated to 500 MHz and supports 10 Gbps over the full 100 m channel, with better resistance to crosstalk and heat from PoE.",
        "For new offices that will run Wi-Fi 6, 6E or 7 access points or need 10 Gbps, Cat6A is usually the better long-term choice; Cat6 is still fine for desktops and phones.",
      ],
      faq: [
        {
          q: "Is Cat6 enough for Wi-Fi 6 access points?",
          a: "For many Wi-Fi 6 access points with 1 Gbps uplinks, Cat6 works. Newer Wi-Fi 6E and Wi-Fi 7 access points often use 2.5 or 5 Gbps uplinks and higher PoE power, where Cat6A gives more headroom over long runs.",
        },
        {
          q: "How much more does Cat6A cost?",
          a: "Cat6A cable and components cost more and the cable is thicker, so it needs more space in trays and conduit and takes longer to install. The difference is usually a small part of a fit-out budget compared with recabling later.",
        },
        {
          q: "Can I mix Cat6 and Cat6A?",
          a: "Yes, but a link performs at the level of its weakest component. Use matching cable, jacks and patch cords within each link, and certify the links after installation.",
        },
      ],
      blocks: [
        {
          p: "Cabling is installed once and expected to last 10 to 15 years, through several generations of switches and access points. Choosing between Cat6 and Cat6A is one of the few network decisions that is expensive to change later, so it is worth getting right at fit-out.",
        },
        {
          h2: "The key differences",
        },
        {
          ul: [
            "Bandwidth: Cat6 is rated to 250 MHz; Cat6A to 500 MHz.",
            "10 Gbps distance: Cat6 supports 10GBASE-T only over short runs, typically up to about 55 m; Cat6A supports it to the full 100 m channel.",
            "Crosstalk: Cat6A is designed to limit alien crosstalk between neighboring cables, which matters in dense bundles.",
            "PoE: Cat6A's larger conductors handle the heat of high-power PoE better in large bundles.",
            "Size: Cat6A is thicker and less flexible, so trays, conduit and racks need more space.",
          ],
        },
        {
          h2: "When Cat6 is enough",
        },
        {
          p: "For desktop computers, IP phones, printers and most CCTV cameras, 1 Gbps is plenty, and Cat6 delivers it over 100 m. Smaller offices with short cable runs and no plan for multi-gigabit access points can save with Cat6.",
        },
        {
          h2: "When to choose Cat6A",
        },
        {
          ul: [
            "New Wi-Fi 6E or Wi-Fi 7 access points with 2.5 or 5 Gbps uplinks.",
            "High-power PoE devices such as PTZ cameras or access points in large cable bundles.",
            "Long horizontal runs where you want 10 Gbps headroom.",
            "Warehouses, factories and other sites with electrical noise.",
            "Buildings you expect to occupy for many years.",
          ],
        },
        {
          h2: "Do not forget the rest of the installation",
        },
        {
          p: "Cable category is only part of a reliable network. Use components from one system, terminate and label properly, keep cables away from power lines, plan fiber for the backbone between floors or buildings, and certify every link with a cable tester. A badly installed Cat6A link can perform worse than a well-installed Cat6 one.",
        },
        {
          h2: "How Thoughts House can help",
        },
        {
          p: "We design and install structured cabling across Saudi Arabia, including Cat6, Cat6A and fiber backbones, with labelling, testing and documentation. Contact us for a site survey and recommendation.",
        },
      ],
    },
    ar: {
      summary: [
        "كابل Cat6 مصنّف حتى 250 ميجاهرتز ويدعم سرعة 1 جيجابت حتى 100 متر، أما سرعة 10 جيجابت فتعمل على مسافات قصيرة فقط، غالباً حتى نحو 55 متراً.",
        "كابل Cat6A مصنّف حتى 500 ميجاهرتز ويدعم 10 جيجابت على كامل مسافة 100 متر، مع مقاومة أفضل للتداخل وحرارة PoE.",
        "للمكاتب الجديدة التي ستستخدم نقاط وصول Wi-Fi 6 أو 6E أو 7 أو تحتاج 10 جيجابت، فإن Cat6A غالباً الخيار الأفضل على المدى الطويل، ويبقى Cat6 مناسباً للحواسيب والهواتف.",
      ],
      faq: [
        {
          q: "هل يكفي Cat6 لنقاط وصول Wi-Fi 6؟",
          a: "لكثير من نقاط وصول Wi-Fi 6 بمنفذ 1 جيجابت، نعم. أما نقاط Wi-Fi 6E وWi-Fi 7 الأحدث فتستخدم غالباً منافذ 2.5 أو 5 جيجابت وطاقة PoE أعلى، وهنا يمنح Cat6A هامشاً أكبر على المسافات الطويلة.",
        },
        {
          q: "كم تزيد تكلفة Cat6A؟",
          a: "الكابلات والملحقات أغلى، والكابل أسمك فيحتاج مساحة أكبر في المسارات ووقتاً أطول للتركيب. لكن الفرق عادةً جزء صغير من ميزانية التجهيز مقارنةً بإعادة التمديد لاحقاً.",
        },
        {
          q: "هل يمكن الجمع بين Cat6 وCat6A؟",
          a: "نعم، لكن أداء كل وصلة يكون بمستوى أضعف مكوّن فيها. استخدم كابلات ومقابس وأسلاك توصيل متطابقة في كل وصلة، واختبر الوصلات بعد التركيب.",
        },
      ],
      blocks: [
        {
          p: "تُركّب الكابلات مرة واحدة ويُتوقع أن تعمل من 10 إلى 15 سنة، عبر عدة أجيال من السويتشات ونقاط الوصول. والاختيار بين Cat6 وCat6A من القرارات القليلة في الشبكة التي يصعب تغييرها لاحقاً، لذلك يستحق الحسم عند التجهيز.",
        },
        {
          h2: "أهم الفروق",
        },
        {
          ul: [
            "عرض النطاق: Cat6 مصنّف حتى 250 ميجاهرتز، وCat6A حتى 500 ميجاهرتز.",
            "مسافة 10 جيجابت: Cat6 يدعمها على مسافات قصيرة فقط، غالباً حتى نحو 55 متراً، وCat6A حتى 100 متر كاملة.",
            "التداخل: صُمم Cat6A للحد من التداخل بين الكابلات المتجاورة، وهذا مهم في الحزم الكثيفة.",
            "PoE: موصلات Cat6A الأكبر تتحمل حرارة PoE عالي الطاقة بشكل أفضل في الحزم الكبيرة.",
            "الحجم: Cat6A أسمك وأقل مرونة، فيحتاج مساحة أكبر في المسارات والأنابيب والكبائن.",
          ],
        },
        {
          h2: "متى يكفي Cat6",
        },
        {
          p: "للحواسيب المكتبية وهواتف IP والطابعات ومعظم كاميرات المراقبة، تكفي سرعة 1 جيجابت، ويوفرها Cat6 حتى 100 متر. ويمكن للمكاتب الصغيرة ذات المسافات القصيرة وبدون خطط لنقاط وصول متعددة الجيجابت أن توفّر باختيار Cat6.",
        },
        {
          h2: "متى تختار Cat6A",
        },
        {
          ul: [
            "نقاط وصول Wi-Fi 6E أو Wi-Fi 7 بمنافذ 2.5 أو 5 جيجابت.",
            "أجهزة PoE عالية الطاقة مثل كاميرات PTZ أو نقاط الوصول في حزم كابلات كبيرة.",
            "التمديدات الأفقية الطويلة التي تريد لها هامش 10 جيجابت.",
            "المستودعات والمصانع والمواقع ذات التداخل الكهربائي.",
            "المباني التي تتوقع البقاء فيها سنوات طويلة.",
          ],
        },
        {
          h2: "لا تنسَ بقية التركيب",
        },
        {
          p: "فئة الكابل جزء فقط من شبكة موثوقة. استخدم مكونات من نظام واحد، وأحسن التوصيل والترقيم، وأبعد الكابلات عن خطوط الكهرباء، وخطط للألياف الضوئية بين الطوابق أو المباني، واختبر كل وصلة بجهاز فحص. فوصلة Cat6A سيئة التركيب قد تعمل أسوأ من وصلة Cat6 جيدة التركيب.",
        },
        {
          h2: "كيف يساعدك بيت الأفكار",
        },
        {
          p: "نصمم وننفذ تمديدات الشبكات في جميع مناطق المملكة، بما فيها Cat6 وCat6A والألياف الضوئية، مع الترقيم والاختبار والتوثيق. تواصل معنا لمسح الموقع والحصول على توصية.",
        },
      ],
    },
  },
  "immutable-backup": {
    en: {
      summary: [
        "An immutable backup cannot be changed or deleted until its retention period ends, even by an administrator account.",
        "It protects against ransomware gangs that log in with stolen admin credentials and delete or encrypt backups before encrypting servers.",
        "Combine immutability with the 3-2-1-1-0 rule: three copies, two media, one offsite, one immutable or offline, and zero errors in restore tests.",
      ],
      faq: [
        {
          q: "What is the difference between immutable and air-gapped backup?",
          a: "An air-gapped backup is physically or logically disconnected from the network, such as tapes in a safe or a disconnected disk. An immutable backup stays online but cannot be modified or deleted until its lock expires. Both protect against ransomware; immutable storage is easier to automate.",
        },
        {
          q: "Can immutable backups still be deleted?",
          a: "Not through normal means before the retention period ends. That is why retention must be set carefully, and why access to the storage system itself and its management must be protected with separate credentials and MFA.",
        },
        {
          q: "Does Microsoft 365 need its own backup?",
          a: "Microsoft runs the service, but protecting your data against deletion, ransomware or account compromise is your responsibility under the shared responsibility model. A third-party backup with immutable copies is recommended.",
        },
      ],
      blocks: [
        {
          p: "Modern ransomware attacks rarely start with encryption. Attackers first gain administrator access, look for backups and delete or encrypt them, and only then encrypt servers. If your backups can be deleted by an administrator account, a single stolen password can remove your only way to recover.",
        },
        {
          h2: "What makes a backup immutable",
        },
        {
          p: "Immutable storage uses write-once-read-many (WORM) behavior: once a backup is written, it cannot be changed or deleted until a set retention period ends. Common ways to achieve this:",
        },
        {
          ul: [
            "Object storage with object lock in compliance mode, on-premises or in the cloud.",
            "A hardened Linux backup repository with immutability, such as the one supported by Veeam.",
            "Backup appliances with built-in retention lock.",
            "Cloud backup services that offer immutable or locked copies.",
          ],
        },
        {
          h2: "Immutable, offline or offsite?",
        },
        {
          ul: [
            "Offsite protects against fire, flood or theft at your site.",
            "Offline or air-gapped protects because attackers cannot reach the copy at all.",
            "Immutable protects because even a reachable copy cannot be changed.",
          ],
        },
        {
          p: "They are complementary. The 3-2-1-1-0 rule combines them: three copies of the data, on two different media, one offsite, one immutable or offline, and zero errors when you test restores.",
        },
        {
          h2: "Setting it up correctly",
        },
        {
          ul: [
            "Choose a retention period that covers how long an attacker might stay hidden, often 14 to 30 days or more for critical systems.",
            "Use separate credentials and MFA for the backup system and storage, not your domain admin account.",
            "Monitor backup jobs and alert on failures or unusual deletions.",
            "Test restores regularly, including a full server restore.",
          ],
        },
        {
          h2: "How Thoughts House can help",
        },
        {
          p: "We design and run backup and recovery across Saudi Arabia with Veeam and other platforms, including immutable repositories, offsite and cloud copies, Microsoft 365 backup and regular restore testing.",
        },
      ],
      sources: [
        {
          label: "CISA — #StopRansomware Guide",
          url: "https://www.cisa.gov/stopransomware/ransomware-guide",
        },
        {
          label: "Veeam — The 3-2-1 backup rule",
          url: "https://www.veeam.com/blog/321-backup-rule.html",
        },
      ],
    },
    ar: {
      summary: [
        "النسخة الاحتياطية غير القابلة للتعديل لا يمكن تغييرها أو حذفها حتى تنتهي مدة الاحتفاظ بها، حتى من حساب المسؤول.",
        "تحمي من مجموعات برامج الفدية التي تدخل بصلاحيات مسؤول مسروقة وتحذف النسخ أو تشفّرها قبل تشفير الخوادم.",
        "اجمع عدم القابلية للتعديل مع قاعدة 3-2-1-1-0: ثلاث نسخ، على وسيطين، واحدة خارج الموقع، وواحدة غير قابلة للتعديل أو معزولة، وصفر أخطاء في اختبارات الاستعادة.",
      ],
      faq: [
        {
          q: "ما الفرق بين النسخ غير القابلة للتعديل والنسخ المعزولة؟",
          a: "النسخة المعزولة مفصولة فعلياً أو منطقياً عن الشبكة، مثل الأشرطة في خزنة أو قرص مفصول. أما غير القابلة للتعديل فتبقى متصلة لكن لا يمكن تعديلها أو حذفها حتى ينتهي القفل. وكلاهما يحمي من برامج الفدية، والتخزين غير القابل للتعديل أسهل في الأتمتة.",
        },
        {
          q: "هل يمكن حذف النسخ غير القابلة للتعديل؟",
          a: "ليس بالطرق العادية قبل انتهاء مدة الاحتفاظ. لذلك يجب ضبط المدة بعناية، وحماية الوصول إلى نظام التخزين وإدارته ببيانات دخول منفصلة وتحقق متعدد العوامل.",
        },
        {
          q: "هل يحتاج Microsoft 365 إلى نسخ احتياطي خاص؟",
          a: "تدير Microsoft الخدمة، لكن حماية بياناتك من الحذف وبرامج الفدية واختراق الحسابات مسؤوليتك وفق نموذج المسؤولية المشتركة. ويُنصح بنسخ احتياطي من طرف ثالث مع نسخ غير قابلة للتعديل.",
        },
      ],
      blocks: [
        {
          p: "نادراً ما تبدأ هجمات برامج الفدية الحديثة بالتشفير. يحصل المهاجمون أولاً على صلاحيات المسؤول، ويبحثون عن النسخ الاحتياطية ويحذفونها أو يشفّرونها، ثم يشفّرون الخوادم. فإذا كان حساب المسؤول يستطيع حذف نسخك، فإن كلمة مرور واحدة مسروقة قد تُفقدك طريقك الوحيد للاستعادة.",
        },
        {
          h2: "ما الذي يجعل النسخة غير قابلة للتعديل",
        },
        {
          p: "يعمل التخزين غير القابل للتعديل بمبدأ الكتابة مرة والقراءة مرات (WORM): بعد كتابة النسخة لا يمكن تغييرها أو حذفها حتى تنتهي مدة احتفاظ محددة. ومن الطرق الشائعة لذلك:",
        },
        {
          ul: [
            "تخزين الكائنات مع خاصية قفل الكائنات (Object Lock) بوضع الامتثال، داخلياً أو في السحابة.",
            "مستودع نسخ احتياطي معزز على Linux يدعم عدم القابلية للتعديل، مثل المستودع الذي يدعمه Veeam.",
            "أجهزة نسخ احتياطي بقفل احتفاظ مدمج.",
            "خدمات نسخ سحابية توفر نسخاً مقفلة أو غير قابلة للتعديل.",
          ],
        },
        {
          h2: "غير قابلة للتعديل أم معزولة أم خارج الموقع؟",
        },
        {
          ul: [
            "خارج الموقع: تحمي من الحريق أو الغرق أو السرقة في موقعك.",
            "معزولة: تحمي لأن المهاجم لا يستطيع الوصول إلى النسخة أصلاً.",
            "غير قابلة للتعديل: تحمي لأن النسخة لا يمكن تغييرها حتى لو أمكن الوصول إليها.",
          ],
        },
        {
          p: "وهي متكاملة. وتجمعها قاعدة 3-2-1-1-0: ثلاث نسخ من البيانات، على وسيطين مختلفين، واحدة خارج الموقع، وواحدة غير قابلة للتعديل أو معزولة، وصفر أخطاء عند اختبار الاستعادة.",
        },
        {
          h2: "الإعداد الصحيح",
        },
        {
          ul: [
            "اختر مدة احتفاظ تغطي المدة التي قد يبقى فيها المهاجم مختبئاً، وغالباً من 14 إلى 30 يوماً أو أكثر للأنظمة الحرجة.",
            "استخدم بيانات دخول منفصلة وتحققاً متعدد العوامل لنظام النسخ والتخزين، وليس حساب مسؤول النطاق.",
            "راقب مهام النسخ ونبّه عند الفشل أو عمليات الحذف غير المعتادة.",
            "اختبر الاستعادة بانتظام، بما فيها استعادة خادم كامل.",
          ],
        },
        {
          h2: "كيف يساعدك بيت الأفكار",
        },
        {
          p: "نصمم وندير النسخ الاحتياطي والاستعادة في جميع مناطق المملكة باستخدام Veeam وغيرها، بما في ذلك المستودعات غير القابلة للتعديل، والنسخ خارج الموقع والسحابية، ونسخ Microsoft 365، واختبارات الاستعادة الدورية.",
        },
      ],
      sources: [
        {
          label: "CISA — #StopRansomware Guide",
          url: "https://www.cisa.gov/stopransomware/ransomware-guide",
        },
        {
          label: "Veeam — The 3-2-1 backup rule",
          url: "https://www.veeam.com/blog/321-backup-rule.html",
        },
      ],
    },
  },
  "microsoft-licensing-oem-vs-volume": {
    en: {
      summary: [
        "OEM licenses come preinstalled with a new device and stay with that device; they cannot be moved to another computer.",
        "Retail (FPP) licenses are bought separately and can usually be transferred to a new device, but cost more and are hard to manage at scale.",
        "Most businesses now buy Microsoft 365 and many other products through Cloud Solution Provider (CSP) partners, while Windows Server is licensed per core plus client access licenses (CALs).",
      ],
      faq: [
        {
          q: "Can I move an OEM Windows license to a new laptop?",
          a: "No. An OEM license is tied to the device it was first installed on and ends with that device. Retail licenses can generally be transferred.",
        },
        {
          q: "How is Windows Server licensed?",
          a: "Windows Server Standard and Datacenter are licensed per physical core, with minimums of 8 cores per processor and 16 cores per server, plus client access licenses (CALs) for users or devices that access the server. Check current Microsoft terms for your edition.",
        },
        {
          q: "What is CSP?",
          a: "The Cloud Solution Provider program lets Microsoft partners sell and manage Microsoft 365, Azure and other subscriptions for customers, typically billed monthly or annually, with the partner providing support.",
        },
      ],
      blocks: [
        {
          p: "Microsoft licensing confuses many companies, and buying the wrong type can mean paying twice or falling out of compliance in an audit. This guide explains the main ways businesses buy Windows, Windows Server and Microsoft 365. Licensing terms change, so confirm details for your situation before buying.",
        },
        {
          h2: "OEM licenses",
        },
        {
          p: "OEM (original equipment manufacturer) licenses come preinstalled on new computers and servers from manufacturers such as Dell, HP and Lenovo. They are the cheapest way to get Windows on a new device, but the license is tied to that device and cannot be moved to another one.",
        },
        {
          h2: "Retail licenses",
        },
        {
          p: "Retail or full packaged product (FPP) licenses are bought separately. They can usually be transferred to another device, but they cost more and each key must be tracked individually, which becomes hard to manage as you grow.",
        },
        {
          h2: "Volume and subscription licensing",
        },
        {
          p: "Organizations buying many licenses use Microsoft's volume and subscription channels. Today, most small and mid-sized businesses buy Microsoft 365, Windows upgrades for business, and many server and cloud products through Cloud Solution Provider (CSP) partners, with monthly or annual billing. Larger organizations may also use enterprise agreements.",
        },
        {
          h2: "Windows Server: cores and CALs",
        },
        {
          ul: [
            "Windows Server Standard and Datacenter are licensed per physical core.",
            "Minimums apply: 8 core licenses per processor and 16 per server.",
            "Standard covers a limited number of virtual machines; Datacenter covers unlimited virtual machines on the licensed host.",
            "Users or devices that access the server also need client access licenses (CALs).",
          ],
        },
        {
          h2: "Which should you choose?",
        },
        {
          ul: [
            "New laptops and desktops: OEM Windows Pro included with the device is usually enough.",
            "Email, Office apps and collaboration: Microsoft 365 business plans through CSP.",
            "On-premises servers: Windows Server core licenses plus CALs, sized to your hardware and virtual machines.",
            "Keep records of what you bought, for which devices or users, so renewals and audits are easy.",
          ],
        },
        {
          h2: "How Thoughts House can help",
        },
        {
          p: "We supply Microsoft licenses to businesses across Saudi Arabia, including Microsoft 365, Windows and Windows Server, size licensing to your servers and users, and track renewals for you.",
        },
      ],
    },
    ar: {
      summary: [
        "تراخيص OEM تأتي مثبتة مع الجهاز الجديد وتبقى مرتبطة به، ولا يمكن نقلها إلى حاسوب آخر.",
        "تراخيص التجزئة (FPP) تُشترى منفصلة ويمكن عادةً نقلها لجهاز جديد، لكنها أغلى وصعبة الإدارة عند كثرة الأجهزة.",
        "تشتري معظم الشركات اليوم Microsoft 365 ومنتجات أخرى عبر شركاء برنامج CSP، بينما يُرخَّص Windows Server حسب عدد الأنوية مع تراخيص وصول العملاء (CAL).",
      ],
      faq: [
        {
          q: "هل يمكن نقل ترخيص Windows OEM إلى حاسوب جديد؟",
          a: "لا. ترخيص OEM مرتبط بالجهاز الذي ثُبّت عليه أول مرة وينتهي بانتهائه. أما تراخيص التجزئة فيمكن نقلها عادةً.",
        },
        {
          q: "كيف يُرخَّص Windows Server؟",
          a: "يُرخَّص إصدارا Standard وDatacenter حسب عدد الأنوية الفعلية، بحد أدنى 8 أنوية لكل معالج و16 نواة لكل خادم، إضافة إلى تراخيص وصول العملاء (CAL) للمستخدمين أو الأجهزة التي تصل إلى الخادم. تحقق من شروط Microsoft الحالية لإصدارك.",
        },
        {
          q: "ما هو برنامج CSP؟",
          a: "برنامج مزوّدي الحلول السحابية الذي يتيح لشركاء Microsoft بيع اشتراكات Microsoft 365 وAzure وغيرها وإدارتها للعملاء، بفوترة شهرية أو سنوية عادةً، مع دعم من الشريك.",
        },
      ],
      blocks: [
        {
          p: "تربك تراخيص Microsoft كثيراً من الشركات، وشراء النوع الخطأ قد يعني الدفع مرتين أو مخالفة الشروط عند التدقيق. يشرح هذا الدليل الطرق الرئيسية لشراء Windows وWindows Server وMicrosoft 365. وتتغير شروط الترخيص، فتأكد من التفاصيل لحالتك قبل الشراء.",
        },
        {
          h2: "تراخيص OEM",
        },
        {
          p: "تأتي تراخيص OEM مثبتة على الحواسيب والخوادم الجديدة من الشركات المصنعة مثل Dell وHP وLenovo. وهي أرخص طريقة للحصول على Windows لجهاز جديد، لكن الترخيص مرتبط بالجهاز ولا يمكن نقله إلى جهاز آخر.",
        },
        {
          h2: "تراخيص التجزئة",
        },
        {
          p: "تُشترى تراخيص التجزئة (FPP) منفصلة، ويمكن عادةً نقلها إلى جهاز آخر، لكنها أغلى ويجب تتبّع كل مفتاح على حدة، وهذا يصعب مع نمو الشركة.",
        },
        {
          h2: "التراخيص المؤسسية والاشتراكات",
        },
        {
          p: "تستخدم المنشآت التي تشتري تراخيص كثيرة قنوات Microsoft المؤسسية والاشتراكات. واليوم تشتري معظم الشركات الصغيرة والمتوسطة Microsoft 365 وترقيات Windows للأعمال وكثيراً من منتجات الخوادم والسحابة عبر شركاء برنامج CSP بفوترة شهرية أو سنوية، وقد تستخدم المنشآت الكبيرة اتفاقيات مؤسسية.",
        },
        {
          h2: "Windows Server: الأنوية وتراخيص الوصول",
        },
        {
          ul: [
            "يُرخَّص إصدارا Standard وDatacenter حسب عدد الأنوية الفعلية.",
            "يوجد حد أدنى: 8 تراخيص أنوية لكل معالج و16 لكل خادم.",
            "يغطي Standard عدداً محدوداً من الأجهزة الافتراضية، ويغطي Datacenter عدداً غير محدود على الخادم المرخَّص.",
            "يحتاج المستخدمون أو الأجهزة التي تصل إلى الخادم إلى تراخيص وصول العملاء (CAL).",
          ],
        },
        {
          h2: "أيها تختار؟",
        },
        {
          ul: [
            "الحواسيب الجديدة: يكفي غالباً ترخيص Windows Pro من نوع OEM المرفق بالجهاز.",
            "البريد وتطبيقات Office والتعاون: باقات Microsoft 365 للأعمال عبر CSP.",
            "الخوادم الداخلية: تراخيص أنوية Windows Server مع تراخيص الوصول، حسب الأجهزة والأجهزة الافتراضية.",
            "احتفظ بسجل لما اشتريته ولأي أجهزة أو مستخدمين، لتسهل التجديدات والتدقيق.",
          ],
        },
        {
          h2: "كيف يساعدك بيت الأفكار",
        },
        {
          p: "نورّد تراخيص Microsoft للشركات في جميع مناطق المملكة، ومنها Microsoft 365 وWindows وWindows Server، ونحدد التراخيص المناسبة لخوادمك ومستخدميك، ونتابع التجديدات نيابةً عنك.",
        },
      ],
    },
  },
  "how-to-choose-a-server-small-business": {
    en: {
      summary: [
        "First decide whether you need an on-premises server at all: email and file sharing often fit better in Microsoft 365, while ERP, databases, CCTV recording and local applications may need one.",
        "Size the server for your workloads: CPU cores, RAM, storage capacity and speed, with RAID and redundant power supplies for reliability.",
        "Budget for the full picture: Windows Server licensing, backup, a UPS, a suitable room or rack, and a warranty with fast onsite support.",
      ],
      faq: [
        {
          q: "Tower or rack server for a small office?",
          a: "A tower server suits a small office without a rack and is quieter. A rack server suits companies that already have a network rack or plan to grow, and makes cabling and cooling easier to manage.",
        },
        {
          q: "Which RAID level should a small business use?",
          a: "RAID 1 (mirroring) for two drives, or RAID 10 for performance and resilience with four or more drives. RAID protects against drive failure but is not a backup; you still need separate backups.",
        },
        {
          q: "How long does a server last?",
          a: "Most businesses plan on five years, aligned with the warranty. After that, support costs and failure risk rise.",
        },
      ],
      blocks: [
        {
          p: "Buying a server is a five-year decision. Too small and it slows the business; too large and you pay for capacity and licenses you never use. This guide walks through the questions we ask before recommending a server.",
        },
        {
          h2: "1. Do you need a server?",
        },
        {
          p: "Email, file sharing and Office apps often work better in Microsoft 365 than on a local server. You may still need one for an ERP or accounting database, line-of-business applications, CCTV recording, Active Directory, or when internet reliability or data residency make the cloud less suitable.",
        },
        {
          h2: "2. Size it for your workloads",
        },
        {
          ul: [
            "CPU: list the applications and virtual machines you will run; most small businesses need one modern processor with enough cores for their VMs.",
            "RAM: often the first bottleneck; plan for your VMs plus growth, and leave free slots.",
            "Storage: SSDs for databases and virtual machines, larger HDDs for archives; plan capacity for three to five years of growth.",
            "Network: at least two network ports, and 10 Gbps if you move large files or run storage over the network.",
          ],
        },
        {
          h2: "3. Build in reliability",
        },
        {
          ul: [
            "RAID 1 or RAID 10 so a single drive failure does not stop the business.",
            "Redundant, hot-swappable power supplies.",
            "Remote management (such as Dell iDRAC or HPE iLO) for monitoring and support.",
            "A UPS sized to shut the server down safely during a power cut.",
          ],
        },
        {
          h2: "4. Tower or rack",
        },
        {
          p: "Tower servers suit small offices with no rack and are quieter. Rack servers suit companies with a network rack or server room, and make expansion, cabling and cooling easier.",
        },
        {
          h2: "5. Do not forget the costs around the server",
        },
        {
          ul: [
            "Windows Server licenses per core, plus client access licenses.",
            "Backup software and storage, ideally with an immutable or offsite copy.",
            "A cool, secure location; heat is a common cause of failures.",
            "A warranty with next-business-day onsite support, or faster for critical systems.",
          ],
        },
        {
          h2: "How Thoughts House can help",
        },
        {
          p: "We size, supply and install servers from Dell, HP and Lenovo across Saudi Arabia, including licensing, backup and support. Tell us what you run and we will recommend a configuration.",
        },
      ],
    },
    ar: {
      summary: [
        "قرر أولاً هل تحتاج إلى سيرفر داخلي أصلاً: البريد ومشاركة الملفات تناسب غالباً Microsoft 365، بينما قد تحتاج أنظمة ERP وقواعد البيانات وتسجيل الكاميرات والتطبيقات المحلية إلى سيرفر.",
        "حدد المواصفات حسب أعمالك: عدد الأنوية، والذاكرة، وسعة التخزين وسرعته، مع RAID ومزودي طاقة احتياطيين للاعتمادية.",
        "احسب الصورة كاملة: تراخيص Windows Server، والنسخ الاحتياطي، وجهاز UPS، والمكان أو الكبينة المناسبة، وضمان بدعم سريع في الموقع.",
      ],
      faq: [
        {
          q: "سيرفر برج أم رف لمكتب صغير؟",
          a: "سيرفر البرج يناسب المكتب الصغير الذي لا يملك كبينة، وهو أهدأ صوتاً. وسيرفر الرف يناسب الشركات التي لديها كبينة شبكة أو تخطط للتوسع، ويسهّل تنظيم الكابلات والتبريد.",
        },
        {
          q: "أي مستوى RAID تستخدم الشركة الصغيرة؟",
          a: "RAID 1 (النسخ المتطابق) لقرصين، أو RAID 10 للأداء والاعتمادية مع أربعة أقراص أو أكثر. ويحمي RAID من تعطل القرص لكنه ليس نسخاً احتياطياً، فما زلت تحتاج نسخاً منفصلة.",
        },
        {
          q: "كم يعيش السيرفر؟",
          a: "تخطط معظم الشركات لخمس سنوات بما يتوافق مع الضمان، وبعدها ترتفع تكاليف الدعم واحتمال الأعطال.",
        },
      ],
      blocks: [
        {
          p: "شراء السيرفر قرار لخمس سنوات. إذا كان صغيراً أبطأ العمل، وإذا كان كبيراً دفعت ثمن سعة وتراخيص لا تستخدمها. يمر هذا الدليل على الأسئلة التي نطرحها قبل التوصية بسيرفر.",
        },
        {
          h2: "1. هل تحتاج إلى سيرفر؟",
        },
        {
          p: "البريد ومشاركة الملفات وتطبيقات Office تعمل غالباً بشكل أفضل في Microsoft 365. وقد تحتاج إلى سيرفر لنظام ERP أو قاعدة بيانات محاسبية، أو تطبيقات أعمال، أو تسجيل الكاميرات، أو Active Directory، أو عندما تجعل جودة الإنترنت أو متطلبات بقاء البيانات السحابة أقل ملاءمة.",
        },
        {
          h2: "2. حدد المواصفات حسب أعمالك",
        },
        {
          ul: [
            "المعالج: اكتب قائمة التطبيقات والأجهزة الافتراضية، فمعظم الشركات الصغيرة تحتاج معالجاً حديثاً واحداً بعدد أنوية كافٍ.",
            "الذاكرة: غالباً أول عنق زجاجة، فخطط لأجهزتك الافتراضية مع النمو واترك فتحات فارغة.",
            "التخزين: أقراص SSD لقواعد البيانات والأجهزة الافتراضية، وأقراص HDD أكبر للأرشيف، مع سعة تكفي نمو 3 إلى 5 سنوات.",
            "الشبكة: منفذان على الأقل، و10 جيجابت إذا كنت تنقل ملفات كبيرة أو تستخدم تخزيناً عبر الشبكة.",
          ],
        },
        {
          h2: "3. أضف الاعتمادية",
        },
        {
          ul: [
            "RAID 1 أو RAID 10 حتى لا يوقف تعطل قرص واحد العمل.",
            "مزودا طاقة احتياطيان قابلان للاستبدال أثناء التشغيل.",
            "إدارة عن بُعد (مثل Dell iDRAC أو HPE iLO) للمراقبة والدعم.",
            "جهاز UPS يكفي لإيقاف السيرفر بأمان عند انقطاع الكهرباء.",
          ],
        },
        {
          h2: "4. برج أم رف",
        },
        {
          p: "سيرفرات البرج تناسب المكاتب الصغيرة التي لا تملك كبينة، وهي أهدأ. وسيرفرات الرف تناسب الشركات التي لديها كبينة شبكة أو غرفة خوادم، وتسهّل التوسع وتنظيم الكابلات والتبريد.",
        },
        {
          h2: "5. لا تنسَ التكاليف المحيطة بالسيرفر",
        },
        {
          ul: [
            "تراخيص Windows Server حسب الأنوية، مع تراخيص وصول العملاء.",
            "برنامج النسخ الاحتياطي والتخزين، ويُفضّل مع نسخة غير قابلة للتعديل أو خارج الموقع.",
            "مكان بارد وآمن، فالحرارة سبب شائع للأعطال.",
            "ضمان بدعم في الموقع في يوم العمل التالي، أو أسرع للأنظمة الحرجة.",
          ],
        },
        {
          h2: "كيف يساعدك بيت الأفكار",
        },
        {
          p: "نحدد مواصفات السيرفرات ونورّدها ونركّبها من Dell وHP وLenovo في جميع مناطق المملكة، مع التراخيص والنسخ الاحتياطي والدعم. أخبرنا بما تشغّله وسنوصي بالإعداد المناسب.",
        },
      ],
    },
  },
  "sme-cybersecurity-checklist-saudi-arabia": {
    en: {
      summary: [
        "Most attacks on small and mid-sized businesses use the same paths: stolen passwords, phishing emails, unpatched systems and exposed remote access.",
        "Fifteen essentials, from MFA and patching to EDR, email security and tested backups, close most of these paths without a large budget.",
        "In Saudi Arabia, these controls also support PDPL requirements and align with the NCA Essential Cybersecurity Controls.",
      ],
      faq: [
        {
          q: "What is the most important cybersecurity step for a small business?",
          a: "Turning on multi-factor authentication for email, remote access and admin accounts. It blocks most attacks that rely on stolen passwords.",
        },
        {
          q: "Do small companies in Saudi Arabia need to follow the NCA controls?",
          a: "The ECC are mandatory for national entities, such as government organizations and critical infrastructure. Other companies are encouraged to adopt them, and the PDPL requires appropriate security for personal data whatever the company size.",
        },
        {
          q: "How much should a small business spend on cybersecurity?",
          a: "It depends on size and risk. Many essentials, such as MFA, patching and Microsoft 365 security settings, cost little; EDR, email security and backup are modest per-user costs compared with the cost of an incident.",
        },
      ],
      blocks: [
        {
          p: "Small and mid-sized businesses are attacked because they often have valuable data and weaker defenses. The good news is that most attacks use a few common paths. This checklist covers the fifteen essentials we recommend to every SME.",
        },
        {
          h2: "Accounts and access",
        },
        {
          ul: [
            "1. Multi-factor authentication on email, VPN, remote desktop and every admin account.",
            "2. Separate admin accounts, used only for administration.",
            "3. Remove accounts of staff who leave on their last day.",
            "4. A password manager and no shared passwords.",
          ],
        },
        {
          h2: "Devices",
        },
        {
          ul: [
            "5. Automatic updates for Windows, macOS, browsers and Office.",
            "6. Endpoint protection with EDR on every laptop, desktop and server.",
            "7. Disk encryption on laptops.",
            "8. Users without local administrator rights.",
          ],
        },
        {
          h2: "Email and network",
        },
        {
          ul: [
            "9. Email security with anti-phishing, plus SPF, DKIM and DMARC on your domain.",
            "10. A business firewall with current firmware and no unnecessary open ports.",
            "11. A separate guest Wi-Fi network.",
            "12. No remote desktop exposed directly to the internet; use VPN with MFA.",
          ],
        },
        {
          h2: "Data and recovery",
        },
        {
          ul: [
            "13. Backups following the 3-2-1 rule, with an immutable or offline copy and regular restore tests.",
            "14. Know where personal data is stored, as required under the PDPL.",
          ],
        },
        {
          h2: "People and response",
        },
        {
          ul: [
            "15. Short, regular phishing awareness training, and a simple plan for who to call and what to do in an incident.",
          ],
        },
        {
          h2: "How Thoughts House can help",
        },
        {
          p: "We help SMEs across Saudi Arabia put these essentials in place: firewalls, EDR, email security, MFA, backup and support, with a short assessment to show you where to start.",
        },
      ],
      sources: [
        {
          label: "NCA — Essential Cybersecurity Controls (ECC)",
          url: "https://nca.gov.sa/en/regulatory-documents/controls-list/ecc/",
        },
        {
          label: "CISA — #StopRansomware Guide",
          url: "https://www.cisa.gov/stopransomware/ransomware-guide",
        },
      ],
    },
    ar: {
      summary: [
        "تستخدم معظم الهجمات على الشركات الصغيرة والمتوسطة الطرق نفسها: كلمات مرور مسروقة، ورسائل تصيد، وأنظمة غير محدّثة، ووصول عن بُعد مكشوف.",
        "خمسة عشر إجراءً أساسياً، من التحقق متعدد العوامل والتحديثات إلى EDR وحماية البريد والنسخ المختبرة، تسد معظم هذه الطرق دون ميزانية كبيرة.",
        "في السعودية تدعم هذه الضوابط أيضاً متطلبات نظام حماية البيانات الشخصية وتتوافق مع الضوابط الأساسية للأمن السيبراني.",
      ],
      faq: [
        {
          q: "ما أهم خطوة أمنية للشركة الصغيرة؟",
          a: "تفعيل التحقق متعدد العوامل للبريد والوصول عن بُعد وحسابات المسؤولين، فهو يمنع معظم الهجمات المعتمدة على كلمات المرور المسروقة.",
        },
        {
          q: "هل يجب على الشركات الصغيرة في السعودية الالتزام بضوابط الهيئة الوطنية؟",
          a: "الضوابط الأساسية إلزامية للجهات الوطنية مثل الجهات الحكومية والبنى التحتية الحساسة، وتُشجَّع بقية الشركات على تطبيقها. كما يتطلب نظام حماية البيانات الشخصية حماية مناسبة للبيانات الشخصية أياً كان حجم الشركة.",
        },
        {
          q: "كم يجب أن تنفق الشركة الصغيرة على الأمن السيبراني؟",
          a: "يعتمد ذلك على الحجم والمخاطر. فكثير من الأساسيات مثل التحقق متعدد العوامل والتحديثات وإعدادات أمان Microsoft 365 قليلة التكلفة، وتكلفة EDR وحماية البريد والنسخ الاحتياطي لكل مستخدم بسيطة مقارنةً بتكلفة حادثة واحدة.",
        },
      ],
      blocks: [
        {
          p: "تُستهدف الشركات الصغيرة والمتوسطة لأنها تملك غالباً بيانات قيّمة ودفاعات أضعف. والخبر الجيد أن معظم الهجمات تستخدم طرقاً قليلة معروفة. تغطي هذه القائمة خمسة عشر إجراءً أساسياً نوصي بها لكل شركة.",
        },
        {
          h2: "الحسابات والصلاحيات",
        },
        {
          ul: [
            "1. التحقق متعدد العوامل للبريد وVPN وسطح المكتب البعيد وكل حسابات المسؤولين.",
            "2. حسابات مسؤول منفصلة تُستخدم للإدارة فقط.",
            "3. إلغاء حسابات المغادرين في آخر يوم عمل لهم.",
            "4. مدير كلمات مرور وعدم مشاركة كلمات المرور.",
          ],
        },
        {
          h2: "الأجهزة",
        },
        {
          ul: [
            "5. تحديثات تلقائية لنظامي Windows وmacOS والمتصفحات وOffice.",
            "6. حماية الأجهزة مع EDR على كل حاسوب وخادم.",
            "7. تشفير أقراص الحواسيب المحمولة.",
            "8. المستخدمون بدون صلاحيات مسؤول محلي.",
          ],
        },
        {
          h2: "البريد والشبكة",
        },
        {
          ul: [
            "9. حماية البريد من التصيد، مع إعداد SPF وDKIM وDMARC لنطاقك.",
            "10. جدار حماية للأعمال بإصدار محدّث وبدون منافذ مفتوحة غير ضرورية.",
            "11. شبكة Wi-Fi منفصلة للزوار.",
            "12. عدم كشف سطح المكتب البعيد على الإنترنت مباشرة، واستخدام VPN مع التحقق متعدد العوامل.",
          ],
        },
        {
          h2: "البيانات والاستعادة",
        },
        {
          ul: [
            "13. نسخ احتياطية وفق قاعدة 3-2-1، مع نسخة غير قابلة للتعديل أو معزولة واختبارات استعادة منتظمة.",
            "14. معرفة أماكن تخزين البيانات الشخصية كما يتطلب نظام حماية البيانات الشخصية.",
          ],
        },
        {
          h2: "الموظفون والاستجابة",
        },
        {
          ul: [
            "15. توعية قصيرة ومنتظمة بالتصيد، وخطة بسيطة توضح بمن تتصل وماذا تفعل عند الحادثة.",
          ],
        },
        {
          h2: "كيف يساعدك بيت الأفكار",
        },
        {
          p: "نساعد الشركات الصغيرة والمتوسطة في جميع مناطق المملكة على تطبيق هذه الأساسيات: جدران الحماية، وEDR، وحماية البريد، والتحقق متعدد العوامل، والنسخ الاحتياطي، والدعم، مع تقييم قصير يوضح لك من أين تبدأ.",
        },
      ],
      sources: [
        {
          label:
            "الهيئة الوطنية للأمن السيبراني — الضوابط الأساسية للأمن السيبراني",
          url: "https://nca.gov.sa/ar/regulatory-documents/controls-list/ecc/",
        },
        {
          label: "CISA — #StopRansomware Guide",
          url: "https://www.cisa.gov/stopransomware/ransomware-guide",
        },
      ],
    },
  },
};
