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
  "microsoft-365-business-plans-saudi-arabia": {
    en: {
      summary: [
        "For most Saudi companies under 300 users, Microsoft 365 Business Premium is the best fit: it adds device management, identity protection and advanced email and endpoint security to everything in Business Standard.",
        "Business plans are capped at 300 users across the Business family; larger organizations, or those that need enterprise-only features, move to Microsoft 365 E3 or E5.",
        "Buying through a Cloud Solution Provider (CSP) partner means choosing a monthly, annual or multi-year commitment: annual terms cost less but can only be reduced in the first seven days.",
      ],
      faq: [
        {
          q: "Which Microsoft 365 plan is best for a small business in Saudi Arabia?",
          a: "Business Premium suits most companies that handle customer, financial or personal data, because it includes Intune, Entra ID P1, Defender for Business and Defender for Office 365 Plan 1. Business Standard fits teams that need the desktop Office apps but already have strong security elsewhere, and Business Basic suits staff who only need email, Teams and the web apps.",
        },
        {
          q: "What is a Microsoft CSP partner?",
          a: "A Cloud Solution Provider is a Microsoft partner authorized to sell, bill and support Microsoft 365, Azure and other cloud subscriptions. The partner manages your licenses in Microsoft Partner Center, invoices you locally and is your first line of support.",
        },
        {
          q: "Can I reduce Microsoft 365 licenses in the middle of the year?",
          a: "On an annual commitment you can add licenses at any time, but you can only cancel or reduce them within the first seven days of the term or of a renewal. If your headcount changes often, keep a small part of your licenses on a monthly term, which costs more but can be reduced each month.",
        },
        {
          q: "Did Microsoft 365 prices change in 2026?",
          a: "Yes. Microsoft raised prices for several suites on 1 July 2026, including Business Basic, Business Standard, Apps for business, E3 and E5. Existing annual subscriptions keep their price until their next renewal after that date. Ask your CSP partner for a current quotation in Saudi riyals.",
        },
        {
          q: "Is Microsoft 365 data stored in Saudi Arabia?",
          a: "Microsoft announced that its Saudi Arabia East datacenter region, in the Eastern Province, becomes available to customers in November 2026 for eligible workloads and data. Before assuming in-country storage for Microsoft 365, confirm with Microsoft or your partner which services are covered and check the data location shown in your Microsoft 365 admin center.",
        },
      ],
      blocks: [
        {
          p: "Microsoft 365 is the default productivity platform for many companies in Saudi Arabia: business email on Exchange Online, Word, Excel and Outlook, file storage in OneDrive and SharePoint, and meetings in Teams. Choosing the plan is the easy part to get wrong. Buy a plan that is too small and you pay later for separate security add-ons; buy one that is too large and you pay for features nobody uses. This guide explains the main plans, how licensing through a Cloud Solution Provider (CSP) partner works, and what to check before you commit.",
        },
        { h2: "The main Microsoft 365 plans for businesses" },
        {
          p: "Microsoft groups its business offers into two families: Business plans for organizations with up to 300 users, and Enterprise plans with no user cap. The plans most Saudi SMEs compare are:",
        },
        {
          ul: [
            "Microsoft 365 Business Basic: business email, Teams, OneDrive and SharePoint, with the web and mobile versions of the Office apps only.",
            "Microsoft 365 Business Standard: everything in Basic plus the installable desktop apps (Word, Excel, PowerPoint, Outlook) on up to five PCs or Macs, five tablets and five phones per user.",
            "Microsoft 365 Business Premium: everything in Standard plus Intune for device management, Entra ID P1 for conditional access, Defender for Business for endpoint protection, Defender for Office 365 Plan 1 for email protection, and Purview information protection.",
            "Microsoft 365 Apps for business: the desktop apps and OneDrive without business email, useful when email is hosted elsewhere.",
            "Microsoft 365 E3 and E5: Enterprise suites with no 300-user limit and deeper compliance, security and management capabilities; E5 adds advanced threat protection, analytics and voice features.",
            "Microsoft 365 F1 and F3: lower-cost licenses for frontline staff such as warehouse, retail and field teams who share devices or mainly use mobile apps.",
          ],
        },
        { h2: "Business Premium or Enterprise E3?" },
        {
          p: "The 300-user limit applies to the whole Business family combined, so 250 Business Premium users leave room for only 50 more Business seats. If you expect to pass 300 users, or you need enterprise compliance features, plan the move to E3 or E5 early, because changing suites later means re-planning security policies and renewals. Below that size, Business Premium usually gives an SME the best security for the money, because it bundles tools that would otherwise be bought as separate add-ons.",
        },
        { h2: "Matching plans to people" },
        {
          p: "You don't need to give every employee the same license. You can mix plans in one tenant and assign each person the license their role needs:",
        },
        {
          ul: [
            "Office staff, managers and finance: Business Premium, because they handle sensitive data and are the main targets of phishing.",
            "Staff who only need email, Teams and shared files: Business Basic, combined with conditional access and multi-factor authentication.",
            "Frontline and shift workers on shared devices: F1 or F3.",
            "Shared mailboxes such as sales@ or info@: usually no license needed, as long as they stay within Microsoft's size limits and nobody signs in to them directly.",
          ],
        },
        { h2: "With or without Teams" },
        {
          p: "Microsoft now sells suites both with Teams and without Teams, in line with regional regulations. For most companies the suites that include Teams are the simpler choice, because adding Teams later means buying a separate license. Choose a no-Teams suite only if you already use another meeting platform, and check that it covers chat, meetings and calling for every user.",
        },
        { h2: "What buying through a CSP partner means" },
        {
          p: "Most businesses in the Kingdom buy Microsoft 365 through a CSP partner rather than directly with a credit card. The partner provisions your licenses in Microsoft Partner Center, invoices you locally, tracks renewals and gives you first-line support. A good partner also reviews your tenant settings, because many companies pay for Business Premium but never switch on the security features it includes.",
        },
        { h2: "Monthly, annual or three-year commitments" },
        {
          p: "Under Microsoft's new commerce rules for CSP, every subscription has a term length and a billing frequency, and the choice affects both price and flexibility:",
        },
        {
          ul: [
            "Monthly term: the most flexible option, since licenses can be reduced each month, but priced about 20% higher than an annual term.",
            "Annual term: the usual choice for a stable team. You can add licenses or upgrade at any time, but you can only cancel or reduce within the first seven days of the term or of a renewal.",
            "Annual term billed monthly: spreads the cost across the year; since April 2025 Microsoft adds a 5% uplift compared with paying the year upfront.",
            "Three-year term: offered for some products, and useful only when your headcount and plan choice are very stable.",
          ],
        },
        {
          p: "A practical approach is to put your core staff on an annual term and keep a small buffer of licenses for temporary staff and contractors on a monthly term.",
        },
        { h2: "2026 price changes" },
        {
          p: "Microsoft raised prices for several Microsoft 365 suites on 1 July 2026, including Business Basic, Business Standard, Apps for business, E3 and E5, while adding new capabilities to the enterprise suites. Existing annual subscriptions keep their current price until their next renewal after that date. Prices in Saudi Arabia are set in the local market and quoted by your partner, so compare quotations on the same plan, term and billing frequency.",
        },
        { h2: "Data residency and the Saudi Arabia East region" },
        {
          p: "Data location matters for companies working under the Personal Data Protection Law (PDPL) or the NCA cybersecurity controls. Microsoft has announced that its Saudi Arabia East datacenter region, in the Eastern Province, becomes available to customers in November 2026 for eligible workloads and data. Which Microsoft 365 services store data in-country, and whether existing tenants can move, depends on Microsoft's published terms, so confirm this before you rely on it for a compliance requirement.",
        },
        { h2: "Copilot add-ons" },
        {
          p: "Microsoft 365 Copilot is sold as an add-on to an existing Microsoft 365 license. For organizations with up to 300 users, Microsoft offers Microsoft 365 Copilot Business, with a US list price of USD 21 per user per month on an annual commitment; promotional prices are sometimes available. Start with a pilot group, and tidy up SharePoint and OneDrive permissions first, because Copilot can surface any file a user already has access to.",
        },
        { h2: "Checklist before you buy or renew" },
        {
          ul: [
            "Count active users and remove licenses from staff who have left.",
            "Decide which roles need desktop apps, advanced security or only email and Teams.",
            "Check whether you are close to the 300-user Business limit.",
            "Choose term length and billing frequency per group of users, not for everyone at once.",
            "Turn on multi-factor authentication and the security features your plan already includes.",
            "Note renewal dates, because reductions are only possible in the first seven days of a term.",
            "Back up Microsoft 365 data separately; Microsoft keeps the service running, but recovering deleted or encrypted data is your responsibility.",
          ],
        },
        { h2: "How Thoughts House can help" },
        {
          p: "Thoughts House supplies Microsoft 365 and other Microsoft licenses to businesses across Saudi Arabia. We review your users and current licenses, recommend the right mix of plans and terms, migrate email from other platforms, configure the security features you are paying for, and track renewals so nothing expires unnoticed. We are based in Dammam, Saudi Arabia, and work on-site by appointment or remotely. Contact sales@thoughtshouse.com or +966 54 102 2995 for a licensing review and quotation.",
        },
      ],
      sources: [
        {
          label: "Microsoft — Microsoft 365 Packaging and Pricing Updates FAQ",
          url: "https://www.microsoft.com/en-us/licensing/news/2026-m365-packaging-pricing-updates-faq",
        },
        {
          label: "Microsoft Learn — Microsoft 365 Business Premium FAQ",
          url: "https://learn.microsoft.com/en-us/microsoft-365/business-premium/microsoft-365-business-faqs",
        },
        {
          label: "Microsoft Learn — New commerce license-based overview",
          url: "https://learn.microsoft.com/en-us/partner-center/customers/new-commerce-license-based",
        },
        {
          label: "Microsoft — Saudi Arabia East datacenter region availability",
          url: "https://news.microsoft.com/source/emea/2026/08/microsoft-announces-saudi-arabia-east-datacenter-region-will-be-available-in-november-2026/",
        },
        {
          label: "Microsoft — Microsoft 365 Copilot Business",
          url: "https://www.microsoft.com/en-us/copilot/blog/2025/12/02/microsoft-365-copilot-business-the-future-of-work-for-small-businesses/",
        },
      ],
    },
    ar: {
      summary: [
        "باقة Microsoft 365 Business Premium هي الأنسب لمعظم الشركات السعودية التي يقل عدد مستخدميها عن 300، لأنها تضيف إدارة الأجهزة وحماية الهويات والحماية المتقدمة للبريد والأجهزة إلى كل ما في Business Standard.",
        "باقات Business محدودة بـ 300 مستخدم لمجموعة باقات Business مجتمعة، وتنتقل المنشآت الأكبر أو التي تحتاج مزايا مؤسسية إلى Microsoft 365 E3 أو E5.",
        "الشراء عبر شريك CSP يعني اختيار التزام شهري أو سنوي أو متعدد السنوات؛ الالتزام السنوي أرخص، لكن لا يمكن تخفيض عدد التراخيص فيه إلا خلال الأيام السبعة الأولى.",
      ],
      faq: [
        {
          q: "ما أفضل باقة Microsoft 365 للشركة الصغيرة في السعودية؟",
          a: "تناسب Business Premium معظم الشركات التي تتعامل مع بيانات العملاء أو البيانات المالية أو الشخصية، لأنها تشمل Intune وEntra ID P1 وDefender for Business وDefender for Office 365 Plan 1. وتناسب Business Standard الفرق التي تحتاج تطبيقات Office المكتبية ولديها حماية قوية من مصدر آخر، بينما تكفي Business Basic للموظفين الذين يحتاجون البريد وTeams والتطبيقات عبر المتصفح فقط.",
        },
        {
          q: "ما هو شريك Microsoft CSP؟",
          a: "شريك مزوّد الحلول السحابية (CSP) هو شريك معتمد من Microsoft لبيع اشتراكات Microsoft 365 وAzure وغيرها وفوترتها ودعمها. يدير الشريك تراخيصك عبر Microsoft Partner Center، ويصدر لك الفواتير محلياً، ويكون جهة الدعم الأولى لك.",
        },
        {
          q: "هل يمكن تخفيض تراخيص Microsoft 365 خلال السنة؟",
          a: "في الالتزام السنوي يمكنك إضافة تراخيص في أي وقت، لكن الإلغاء أو التخفيض متاح فقط خلال الأيام السبعة الأولى من بداية المدة أو من التجديد. وإذا كان عدد موظفيك يتغير كثيراً، فاجعل جزءاً صغيراً من التراخيص بالتزام شهري؛ فهو أعلى سعراً لكنه قابل للتخفيض كل شهر.",
        },
        {
          q: "هل تغيّرت أسعار Microsoft 365 في 2026؟",
          a: "نعم. رفعت Microsoft أسعار عدة باقات في 1 يوليو 2026، منها Business Basic وBusiness Standard وApps for business وE3 وE5. وتحتفظ الاشتراكات السنوية القائمة بسعرها حتى أول تجديد بعد هذا التاريخ. اطلب من شريكك عرض سعر محدّثاً بالريال السعودي.",
        },
        {
          q: "هل تُخزَّن بيانات Microsoft 365 داخل المملكة؟",
          a: "أعلنت Microsoft أن منطقة مراكز البيانات Saudi Arabia East في المنطقة الشرقية تصبح متاحة للعملاء في نوفمبر 2026 لأحمال العمل والبيانات المؤهلة. وقبل أن تفترض تخزين بيانات Microsoft 365 داخل المملكة، تأكد من Microsoft أو من شريكك من الخدمات المشمولة، وراجع موقع البيانات الظاهر في مركز إدارة Microsoft 365.",
        },
      ],
      blocks: [
        {
          p: "أصبحت Microsoft 365 المنصة الأساسية للعمل اليومي في كثير من الشركات السعودية: بريد الأعمال عبر Exchange Online، وتطبيقات Word وExcel وOutlook، وتخزين الملفات في OneDrive وSharePoint، والاجتماعات عبر Teams. لكن اختيار الباقة هو الجزء الذي يسهل الخطأ فيه؛ فالباقة الأصغر من حاجتك تجعلك تدفع لاحقاً ثمن إضافات أمنية منفصلة، والأكبر منها تحمّلك تكلفة مزايا لا يستخدمها أحد. يشرح هذا الدليل الباقات الرئيسية، وكيف يعمل الترخيص عبر شريك مزوّد الحلول السحابية (CSP)، وما الذي يجب التحقق منه قبل الالتزام.",
        },
        { h2: "باقات Microsoft 365 الرئيسية للشركات" },
        {
          p: "تقسّم Microsoft عروضها للشركات إلى مجموعتين: باقات Business للمنشآت التي لا يتجاوز عدد مستخدميها 300، وباقات Enterprise دون حد أقصى للمستخدمين. وأكثر الباقات التي تقارن بينها الشركات الصغيرة والمتوسطة في المملكة:",
        },
        {
          ul: [
            "Microsoft 365 Business Basic: بريد الأعمال وTeams وOneDrive وSharePoint، مع نسخ تطبيقات Office عبر المتصفح والجوال فقط.",
            "Microsoft 365 Business Standard: كل ما في Basic مع تطبيقات Office المكتبية القابلة للتثبيت (Word وExcel وPowerPoint وOutlook) على ما يصل إلى خمسة حواسيب وخمسة أجهزة لوحية وخمسة هواتف لكل مستخدم.",
            "Microsoft 365 Business Premium: كل ما في Standard مع Intune لإدارة الأجهزة، وEntra ID P1 للوصول المشروط، وDefender for Business لحماية الأجهزة، وDefender for Office 365 Plan 1 لحماية البريد، وأدوات Purview لحماية المعلومات.",
            "Microsoft 365 Apps for business: التطبيقات المكتبية وOneDrive دون بريد الأعمال، وتفيد عندما يكون البريد مستضافاً لدى جهة أخرى.",
            "Microsoft 365 E3 وE5: باقات مؤسسية دون حد الـ 300 مستخدم، مع قدرات أعمق في الامتثال والأمن والإدارة، وتضيف E5 الحماية المتقدمة من التهديدات والتحليلات ومزايا الاتصال الصوتي.",
            "Microsoft 365 F1 وF3: تراخيص أقل تكلفة للعاملين في الميدان، مثل فرق المستودعات والفروع والمواقع، الذين يتشاركون الأجهزة أو يعتمدون على تطبيقات الجوال.",
          ],
        },
        { h2: "Business Premium أم Enterprise E3؟" },
        {
          p: "ينطبق حد الـ 300 مستخدم على باقات Business مجتمعة، فإذا كان لديك 250 مستخدماً على Business Premium فلن يتبقى لك سوى 50 ترخيصاً من باقات Business الأخرى. وإذا كنت تتوقع تجاوز 300 مستخدم أو تحتاج مزايا الامتثال المؤسسية، فخطط للانتقال إلى E3 أو E5 مبكراً، لأن تغيير الباقات لاحقاً يعني إعادة تخطيط سياسات الأمان والتجديدات. أما دون هذا الحجم، فتمنح Business Premium الشركة الصغيرة والمتوسطة غالباً أفضل حماية مقابل التكلفة، لأنها تجمع أدوات كانت ستُشترى إضافات منفصلة.",
        },
        { h2: "اختيار الترخيص حسب طبيعة العمل" },
        {
          p: "لا يلزم أن يحصل كل موظف على الترخيص نفسه؛ إذ يمكنك الجمع بين عدة باقات في المستأجر (Tenant) الواحد، وتخصيص الترخيص المناسب لدور كل موظف:",
        },
        {
          ul: [
            "موظفو المكاتب والمديرون والإدارة المالية: Business Premium، لأنهم يتعاملون مع بيانات حساسة وهم الهدف الأول لرسائل التصيد.",
            "الموظفون الذين يحتاجون البريد وTeams والملفات المشتركة فقط: Business Basic، مع الوصول المشروط والتحقق متعدد العوامل.",
            "العاملون في الميدان وفي الورديات على أجهزة مشتركة: F1 أو F3.",
            "صناديق البريد المشتركة مثل sales@ أو info@: لا تحتاج ترخيصاً في الغالب ما دامت ضمن حدود الحجم التي تحددها Microsoft ولا يسجّل أحد الدخول إليها مباشرة.",
          ],
        },
        { h2: "مع Teams أم بدونه" },
        {
          p: "تبيع Microsoft اليوم الباقات بنسختين: مع Teams وبدونه، وفق الأنظمة المعمول بها في كل منطقة. والباقات التي تشمل Teams هي الخيار الأبسط لمعظم الشركات، لأن إضافته لاحقاً تعني شراء ترخيص منفصل. فلا تختر باقة دون Teams إلا إذا كنت تستخدم منصة اجتماعات أخرى، وتأكدت أنها تغطي المحادثات والاجتماعات والمكالمات لجميع المستخدمين.",
        },
        { h2: "ماذا يعني الشراء عبر شريك CSP" },
        {
          p: "تشتري معظم الشركات في المملكة Microsoft 365 عبر شريك CSP بدلاً من الشراء المباشر ببطاقة ائتمان. يفعّل الشريك تراخيصك عبر Microsoft Partner Center، ويصدر الفواتير محلياً، ويتابع التجديدات، ويقدم الدعم الأولي. والشريك الجيد يراجع أيضاً إعدادات المستأجر لديك، فكثير من الشركات تدفع ثمن Business Premium ولا تفعّل أبداً مزايا الأمان المضمّنة فيها.",
        },
        { h2: "الالتزام الشهري أو السنوي أو لثلاث سنوات" },
        {
          p: "وفق قواعد Microsoft الجديدة للشراء عبر CSP، لكل اشتراك مدة التزام ودورة فوترة، ويؤثر اختيارهما في السعر والمرونة معاً:",
        },
        {
          ul: [
            "الالتزام الشهري: الأكثر مرونة، إذ يمكن تخفيض التراخيص كل شهر، لكن سعره أعلى بنحو 20% من الالتزام السنوي.",
            "الالتزام السنوي: الخيار المعتاد للفرق المستقرة؛ يمكنك إضافة تراخيص أو الترقية في أي وقت، لكن الإلغاء أو التخفيض متاح فقط خلال الأيام السبعة الأولى من المدة أو من التجديد.",
            "الالتزام السنوي بفوترة شهرية: يوزّع التكلفة على أشهر السنة، لكن Microsoft تضيف منذ أبريل 2025 زيادة قدرها 5% مقارنة بالدفع السنوي المقدم.",
            "الالتزام لثلاث سنوات: متاح لبعض المنتجات، ولا يفيد إلا إذا كان عدد الموظفين ونوع الباقة مستقرين جداً.",
          ],
        },
        {
          p: "والأسلوب العملي أن تضع الموظفين الأساسيين على التزام سنوي، وتحتفظ بعدد محدود من التراخيص بالتزام شهري للموظفين المؤقتين والمتعاقدين.",
        },
        { h2: "تغييرات الأسعار في 2026" },
        {
          p: "رفعت Microsoft أسعار عدة باقات من Microsoft 365 في 1 يوليو 2026، منها Business Basic وBusiness Standard وApps for business وE3 وE5، مع إضافة قدرات جديدة إلى الباقات المؤسسية. وتحتفظ الاشتراكات السنوية القائمة بسعرها الحالي حتى أول تجديد بعد هذا التاريخ. وتُحدَّد الأسعار في المملكة حسب السوق المحلي ويقدّمها لك الشريك، لذا قارن عروض الأسعار على الباقة نفسها ومدة الالتزام نفسها ودورة الفوترة نفسها.",
        },
        { h2: "موقع البيانات ومنطقة Saudi Arabia East" },
        {
          p: "يهم موقع البيانات الشركات الخاضعة لنظام حماية البيانات الشخصية أو لضوابط الهيئة الوطنية للأمن السيبراني. وقد أعلنت Microsoft أن منطقة مراكز البيانات Saudi Arabia East في المنطقة الشرقية تصبح متاحة للعملاء في نوفمبر 2026 لأحمال العمل والبيانات المؤهلة. أما الخدمات التي تُخزَّن بياناتها داخل المملكة من Microsoft 365، وإمكانية نقل المستأجرين الحاليين، فتعتمد على الشروط التي تنشرها Microsoft، فتأكد من ذلك قبل أن تعتمد عليه لتلبية متطلب امتثال.",
        },
        { h2: "إضافات Copilot" },
        {
          p: "يُباع Microsoft 365 Copilot إضافةً إلى ترخيص Microsoft 365 قائم. وللمنشآت التي لا يتجاوز عدد مستخدميها 300 تقدم Microsoft باقة Microsoft 365 Copilot Business بسعر قائمة أمريكي قدره 21 دولاراً للمستخدم شهرياً بالتزام سنوي، وقد تتوفر أحياناً أسعار ترويجية. ابدأ بمجموعة تجريبية صغيرة، ونظّم صلاحيات SharePoint وOneDrive أولاً، لأن Copilot قد يُظهر أي ملف يملك المستخدم صلاحية الوصول إليه.",
        },
        { h2: "قائمة تحقق قبل الشراء أو التجديد" },
        {
          ul: [
            "احصر المستخدمين الفعليين وأزل التراخيص عن الموظفين المغادرين.",
            "حدد الأدوار التي تحتاج التطبيقات المكتبية أو الحماية المتقدمة، والأدوار التي يكفيها البريد وTeams.",
            "تحقق إن كنت تقترب من حد الـ 300 مستخدم لباقات Business.",
            "اختر مدة الالتزام ودورة الفوترة لكل مجموعة من المستخدمين، لا للجميع دفعة واحدة.",
            "فعّل التحقق متعدد العوامل ومزايا الأمان المضمّنة في باقتك أصلاً.",
            "دوّن تواريخ التجديد، فالتخفيض متاح فقط في الأيام السبعة الأولى من المدة.",
            "انسخ بيانات Microsoft 365 احتياطياً بشكل مستقل؛ فـ Microsoft تضمن استمرار الخدمة، لكن استعادة البيانات المحذوفة أو المشفّرة مسؤوليتك أنت.",
          ],
        },
        { h2: "كيف يساعدك بيت الأفكار" },
        {
          p: "يورّد بيت الأفكار تراخيص Microsoft 365 وغيرها من تراخيص Microsoft للشركات في جميع مناطق المملكة. نراجع المستخدمين والتراخيص الحالية، ونقترح المزيج المناسب من الباقات ومدد الالتزام، وننقل البريد من المنصات الأخرى، ونهيّئ مزايا الأمان التي تدفع ثمنها، ونتابع التجديدات حتى لا ينتهي أي اشتراك دون علمك. مقرنا في الدمام بالمملكة العربية السعودية، ونقدّم خدماتنا في موقعك بموعد مسبق أو عن بُعد. تواصل معنا عبر sales@thoughtshouse.com أو على الرقم ⁦+966 54 102 2995⁩ لمراجعة تراخيصك والحصول على عرض سعر.",
        },
      ],
      sources: [
        {
          label: "Microsoft — Microsoft 365 Packaging and Pricing Updates FAQ",
          url: "https://www.microsoft.com/en-us/licensing/news/2026-m365-packaging-pricing-updates-faq",
        },
        {
          label: "Microsoft Learn — Microsoft 365 Business Premium FAQ",
          url: "https://learn.microsoft.com/en-us/microsoft-365/business-premium/microsoft-365-business-faqs",
        },
        {
          label: "Microsoft Learn — New commerce license-based overview",
          url: "https://learn.microsoft.com/en-us/partner-center/customers/new-commerce-license-based",
        },
        {
          label: "Microsoft — Saudi Arabia East datacenter region availability",
          url: "https://news.microsoft.com/source/emea/2026/08/microsoft-announces-saudi-arabia-east-datacenter-region-will-be-available-in-november-2026/",
        },
        {
          label: "Microsoft — Microsoft 365 Copilot Business",
          url: "https://www.microsoft.com/en-us/copilot/blog/2025/12/02/microsoft-365-copilot-business-the-future-of-work-for-small-businesses/",
        },
      ],
    },
  },
  "how-to-choose-it-company-dammam": {
    en: {
      summary: [
        "Choose an IT company that takes responsibility for the whole result, not only for selling equipment.",
        "Ask for a site survey, a written scope, examples of similar work and clear support terms before you sign.",
        "A company based in Dammam makes on-site work in the Eastern Province easier to schedule, but location alone is not enough.",
      ],
      faq: [
        {
          q: "What should I ask an IT company in Dammam before signing?",
          a: "Ask who is responsible for the full project, whether they will survey your site, what the support scope includes, what you receive at handover and whether they can show examples of similar work.",
        },
        {
          q: "Does an IT company need to be based in Dammam?",
          a: "Not always, but a local team makes site surveys, installation and on-site support easier to schedule, especially for businesses in Dammam, Khobar and Dhahran.",
        },
      ],
      blocks: [
        {
          p: "Most businesses in Dammam need the same things from an IT company: equipment that fits, systems that work together, and someone who answers when something fails. Price matters, but the cheapest quotation can cost more if nobody owns the problem later. These eight questions help you compare companies on what matters.",
        },
        { h2: "1. Who is responsible for the whole result?" },
        {
          p: "If your laptops, network, firewall and support come from different suppliers, each one can blame the others. Ask whether one company will take responsibility for design, supply, installation and support.",
        },
        { h2: "2. Will they survey your site first?" },
        {
          p: "Network, Wi-Fi, cabling and CCTV quotations depend on the building. A company that quotes without seeing the site, or without asking for detailed information, is guessing.",
        },
        { h2: "3. Can they show similar work?" },
        {
          p: "Many clients do not allow their names to be published, so do not expect a logo wall. Ask for examples of the project type, size and sector instead.",
        },
        { h2: "4. Is the scope written down?" },
        {
          p: "A good quotation lists the equipment, the work, what is excluded and who provides what. Vague wording causes most disputes later.",
        },
        { h2: "5. What happens after installation?" },
        {
          p: "Ask about warranty handling, support hours, on-site visits and how issues are reported. If you need ongoing cover, ask for an annual maintenance contract with a defined scope.",
        },
        { h2: "6. Can they support what you already own?" },
        {
          p: "You may not want to replace everything. Check whether the company will assess and support equipment it did not supply.",
        },
        { h2: "7. What do you receive at handover?" },
        {
          p: "You should receive documentation, asset details, license records and admin credentials. Your systems should not depend on one supplier's memory.",
        },
        { h2: "8. Do they recommend what you need?" },
        {
          p: "A reseller tied to one brand will recommend that brand. Ask why a product was chosen, and whether a simpler option would do the job.",
        },
        { h2: "How Thoughts House works in Dammam" },
        {
          p: "Thoughts House is an IT company and system integrator based in Dammam. We design, supply, install and support IT for businesses across the Eastern Province and Saudi Arabia, and our Our Work page shows examples of our projects without naming clients.",
        },
      ],
    },
    ar: {
      summary: [
        "اختر شركة تقنية معلومات تتحمل مسؤولية النتيجة كاملة، وليس بيع الأجهزة فقط.",
        "اطلب معاينة الموقع ونطاقاً مكتوباً وأمثلة لأعمال مشابهة وشروط دعم واضحة قبل التوقيع.",
        "وجود الشركة في الدمام يسهّل جدولة العمل الميداني في المنطقة الشرقية، لكن الموقع وحده لا يكفي.",
      ],
      faq: [
        {
          q: "ماذا أسأل شركة تقنية المعلومات في الدمام قبل التعاقد؟",
          a: "اسأل من المسؤول عن المشروع كاملاً، وهل ستعاين الموقع، وما نطاق الدعم، وماذا تستلم عند التسليم، وهل يمكنها عرض أمثلة لأعمال مشابهة.",
        },
        {
          q: "هل يجب أن تكون شركة تقنية المعلومات في الدمام؟",
          a: "ليس دائماً، لكن الفريق المحلي يسهّل جدولة المعاينة والتركيب والدعم الميداني، خصوصاً للشركات في الدمام والخبر والظهران.",
        },
      ],
      blocks: [
        {
          p: "تحتاج معظم الشركات في الدمام إلى الأمور نفسها من شركة تقنية المعلومات: أجهزة مناسبة، وأنظمة تعمل معاً، وجهة تستجيب عند حدوث عطل. السعر مهم، لكن أرخص عرض قد يكلفك أكثر إذا لم يتحمل أحد المسؤولية لاحقاً. تساعدك هذه الأسئلة الثمانية على المقارنة بين الشركات فيما يهم فعلاً.",
        },
        { h2: "1. من المسؤول عن النتيجة كاملة؟" },
        {
          p: "إذا جاءت الأجهزة والشبكة وجدار الحماية والدعم من موردين مختلفين، فقد يلقي كل منهم المسؤولية على الآخر. اسأل هل ستتحمل شركة واحدة التصميم والتوريد والتركيب والدعم.",
        },
        { h2: "2. هل ستعاين موقعك أولاً؟" },
        {
          p: "تعتمد عروض الشبكات وWi-Fi والتمديدات والكاميرات على المبنى. والشركة التي تقدم عرضها دون معاينة أو معلومات مفصلة تعتمد على التخمين.",
        },
        { h2: "3. هل يمكنها عرض أعمال مشابهة؟" },
        {
          p: "لا يسمح كثير من العملاء بنشر أسمائهم، فلا تتوقع قائمة شعارات. اطلب بدلاً من ذلك أمثلة على نوع المشروع وحجمه وقطاعه.",
        },
        { h2: "4. هل النطاق مكتوب؟" },
        {
          p: "يوضح العرض الجيد الأجهزة والأعمال والاستثناءات ومسؤولية كل طرف. فالصياغة الغامضة هي سبب معظم الخلافات لاحقاً.",
        },
        { h2: "5. ماذا يحدث بعد التركيب؟" },
        {
          p: "اسأل عن التعامل مع الضمان وساعات الدعم والزيارات الميدانية وطريقة الإبلاغ عن الأعطال. وإذا احتجت إلى تغطية مستمرة، فاطلب عقد صيانة سنوياً بنطاق محدد.",
        },
        { h2: "6. هل تدعم ما تملكه حالياً؟" },
        {
          p: "قد لا ترغب في استبدال كل شيء. تأكد أن الشركة ستقيّم الأجهزة التي لم تورّدها وتدعمها.",
        },
        { h2: "7. ماذا تستلم عند التسليم؟" },
        {
          p: "يجب أن تستلم الوثائق وبيانات الأصول وسجلات التراخيص وبيانات دخول المسؤول، حتى لا تعتمد أنظمتك على ذاكرة مورد واحد.",
        },
        { h2: "8. هل ترشح ما تحتاجه فعلاً؟" },
        {
          p: "الموزع المرتبط بعلامة واحدة سيرشحها غالباً. اسأل لماذا اختير المنتج، وهل يكفي خيار أبسط.",
        },
        { h2: "كيف يعمل بيت الأفكار في الدمام" },
        {
          p: "بيت الأفكار شركة تقنية معلومات وتكامل أنظمة مقرّها الدمام. نصمم ونورّد ونركّب وندعم أنظمة تقنية المعلومات للشركات في المنطقة الشرقية وجميع مناطق المملكة، وتعرض صفحة أعمالنا نماذج من مشاريعنا دون ذكر أسماء العملاء.",
        },
      ],
    },
  },
  "what-is-it-amc-saudi-arabia": {
    en: {
      summary: [
        "An IT AMC is a yearly contract in which a provider maintains and supports your systems for an agreed scope and fee.",
        "It usually covers preventive maintenance, updates, backup checks, technical support and asset tracking.",
        "The price depends on users, devices, sites, support hours and whether parts are included.",
      ],
      faq: [
        {
          q: "What does IT AMC stand for?",
          a: "AMC stands for annual maintenance contract. An IT AMC covers the maintenance and support of IT systems for a year.",
        },
        {
          q: "How much does an IT AMC cost in Saudi Arabia?",
          a: "There is no fixed price, because the cost depends on the number of users, devices and sites, the support hours and what is included. Share your asset list to get a quotation you can compare.",
        },
      ],
      blocks: [
        {
          p: "An IT annual maintenance contract (AMC) is an agreement in which an IT provider looks after your systems for a year. You agree the scope and the fee in advance, so maintenance happens on a schedule, and you are not looking for a technician when something fails.",
        },
        { h2: "What an IT AMC usually covers" },
        {
          ul: [
            "Preventive maintenance of servers, storage, network and security equipment.",
            "Operating system, firmware and security updates in planned windows.",
            "Backup checks and periodic test restores.",
            "Technical support by phone, remote session or site visit.",
            "An asset register with warranty and license dates.",
          ],
        },
        { h2: "What it often excludes" },
        {
          p: "Check these items, because they are a common source of disputes: spare parts, new projects, data recovery, work on systems added after signing, and support outside agreed hours. Exclusions are normal, as long as they are written down.",
        },
        { h2: "What affects the price" },
        {
          ul: [
            "The number of users, servers and network devices.",
            "The number of sites and the distance between them.",
            "The number of preventive visits each year.",
            "Support hours, and whether critical systems need out-of-hours cover.",
            "Whether parts and vendor support are included.",
          ],
        },
        { h2: "How to compare AMC quotations" },
        {
          p: "Compare the scope first and the price second. Check which devices are listed, how many visits are included, how issues are reported and what happens to equipment that fails. Two quotations with the same price can cover very different work.",
        },
        { h2: "How Thoughts House provides IT AMC" },
        {
          p: "Thoughts House provides IT maintenance contracts across Saudi Arabia from our Dammam base, combining remote support with scheduled site visits. We start with an assessment of your systems, including equipment we did not supply.",
        },
      ],
    },
    ar: {
      summary: [
        "عقد صيانة تقنية المعلومات اتفاق سنوي يتولى فيه المزوّد صيانة أنظمتك ودعمها بنطاق وتكلفة محددين.",
        "يشمل عادةً الصيانة الوقائية والتحديثات وفحص النسخ الاحتياطي والدعم الفني وتتبع الأصول.",
        "يعتمد السعر على عدد المستخدمين والأجهزة والمواقع وساعات الدعم وهل تشمل التكلفة قطع الغيار.",
      ],
      faq: [
        {
          q: "ما معنى AMC في تقنية المعلومات؟",
          a: "AMC اختصار لعقد الصيانة السنوي (Annual Maintenance Contract)، وهو يغطي صيانة أنظمة تقنية المعلومات ودعمها لمدة عام.",
        },
        {
          q: "كم تكلفة عقد صيانة تقنية المعلومات في السعودية؟",
          a: "لا يوجد سعر ثابت، لأن التكلفة تعتمد على عدد المستخدمين والأجهزة والمواقع وساعات الدعم وما يشمله العقد. أرسل قائمة أصولك لتحصل على عرض يمكن مقارنته.",
        },
      ],
      blocks: [
        {
          p: "عقد الصيانة السنوي لتقنية المعلومات (AMC) اتفاق يتولى فيه مزوّد تقنية المعلومات رعاية أنظمتك لمدة عام. تتفقان مسبقاً على النطاق والتكلفة، فتتم الصيانة بجدول محدد، ولا تبحث عن فني عند حدوث العطل.",
        },
        { h2: "ماذا يشمل عقد الصيانة عادةً" },
        {
          ul: [
            "الصيانة الوقائية للسيرفرات والتخزين وأجهزة الشبكات والحماية.",
            "تحديثات أنظمة التشغيل والبرامج الثابتة والتحديثات الأمنية في نوافذ مخططة.",
            "فحص النسخ الاحتياطي واختبار الاستعادة دورياً.",
            "الدعم الفني بالهاتف أو عن بُعد أو بزيارة ميدانية.",
            "سجل أصول يتضمن مواعيد الضمان والتراخيص.",
          ],
        },
        { h2: "ما الذي يستثنيه غالباً" },
        {
          p: "راجع هذه البنود، فهي مصدر شائع للخلاف: قطع الغيار، والمشاريع الجديدة، واستعادة البيانات المفقودة، والأنظمة المضافة بعد التوقيع، والدعم خارج الساعات المتفق عليها. الاستثناءات طبيعية ما دامت مكتوبة.",
        },
        { h2: "ما الذي يحدد السعر" },
        {
          ul: [
            "عدد المستخدمين والسيرفرات وأجهزة الشبكة.",
            "عدد المواقع والمسافة بينها.",
            "عدد الزيارات الوقائية في السنة.",
            "ساعات الدعم، وهل تحتاج الأنظمة الحرجة إلى تغطية خارج الدوام.",
            "هل تشمل التكلفة قطع الغيار ودعم الشركات المصنّعة.",
          ],
        },
        { h2: "كيف تقارن عروض الصيانة" },
        {
          p: "قارن النطاق أولاً ثم السعر. تحقق من الأجهزة المذكورة، وعدد الزيارات، وطريقة الإبلاغ عن الأعطال، وما يحدث للجهاز المعطل. فقد يتساوى عرضان في السعر ويختلفان كثيراً في العمل الذي يغطيانه.",
        },
        { h2: "كيف يقدم بيت الأفكار عقود الصيانة" },
        {
          p: "يقدم بيت الأفكار عقود صيانة تقنية المعلومات في جميع مناطق المملكة من مقرّنا في الدمام، بدعم عن بُعد وزيارات ميدانية مجدولة. ونبدأ بتقييم أنظمتك، بما فيها الأجهزة التي لم نورّدها.",
        },
      ],
    },
  },
  "microsoft-365-e3-vs-e5-vs-e7": {
    en: {
      summary: [
        "E3 is the standard enterprise plan, E5 adds advanced security, compliance and analytics, and E7 adds AI and agent governance on top of E5.",
        "Microsoft describes E7 as E5 plus Microsoft 365 Copilot, Microsoft Entra Suite and Agent 365.",
        "Most organizations should mix plans by user role, instead of giving everyone the highest plan.",
      ],
      faq: [
        {
          q: "What is the difference between Microsoft 365 E3 and E5?",
          a: "E5 includes everything in E3 and adds stronger security, compliance and analytics, including Microsoft Entra ID P2, the wider Defender suite and advanced Purview capabilities.",
        },
        {
          q: "Does Microsoft 365 E7 include Copilot?",
          a: "Yes. Microsoft 365 E7 includes Microsoft 365 Copilot, along with Microsoft Entra Suite and Agent 365. With E3 and E5, Copilot is licensed as an add-on.",
        },
        {
          q: "Can we mix E3 and E5 licenses?",
          a: "Yes. Many organizations assign E5 to users with higher risk or compliance needs and E3 to others. Check the licensing terms for any features that require all users to be licensed.",
        },
      ],
      blocks: [
        {
          p: "Microsoft 365 E3, E5 and E7 are the main enterprise plans. They differ in security, compliance and AI, and the right choice depends on the risk and the work of each group of users. Microsoft 365 E7 became generally available on 1 May 2026.",
        },
        { h2: "Microsoft 365 E3" },
        {
          p: "E3 covers the core needs of most office users: Microsoft 365 apps, email, file storage, device management and baseline security and compliance. It suits organizations with standard security needs, or those that add security from other vendors.",
        },
        { h2: "Microsoft 365 E5" },
        {
          p: "E5 includes everything in E3 and adds Microsoft Entra ID P2, the wider Microsoft Defender suite, advanced Purview compliance features and Power BI Pro. It suits regulated organizations and users who handle sensitive data.",
        },
        { h2: "Microsoft 365 E7" },
        {
          p: "E7 is the top tier. It contains everything in E5, plus Microsoft 365 Copilot, Microsoft Entra Suite and Agent 365, which is used to govern and secure AI agents. It suits organizations that have decided to roll out Copilot and agents widely.",
        },
        { h2: "How to choose" },
        {
          ul: [
            "List your user groups: office staff, finance, management, IT and frontline workers.",
            "Match each group to its security and compliance needs.",
            "Check which security tools you already pay for, to avoid paying twice.",
            "Pilot Copilot with a small group before buying it for everyone.",
            "Use F plans for frontline staff, and E1 where desktop apps are not needed.",
          ],
        },
        { h2: "Mixing plans is normal" },
        {
          p: "Few organizations need one plan for everyone. A common approach is E3 for most staff, E5 for sensitive roles, and Copilot only where it pays for itself. Microsoft changes plans and prices over time, so confirm the current details before you order.",
        },
        { h2: "How Thoughts House can help" },
        {
          p: "We supply Microsoft 365 and Dynamics 365 licenses in Saudi Arabia, including a mixed enterprise license project of more than 300 Microsoft 365 licenses for a technology company. Tell us your user groups and we will propose the right mix.",
        },
      ],
      sources: [
        {
          label:
            "Microsoft Learn — Microsoft 365 Copilot license feature overview",
          url: "https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-license-feature-overview",
        },
      ],
    },
    ar: {
      summary: [
        "E3 هي الباقة المؤسسية الأساسية، وتضيف E5 حماية وامتثالاً وتحليلات متقدمة، وتضيف E7 الذكاء الاصطناعي وحوكمة الوكلاء فوق E5.",
        "تصف Microsoft باقة E7 بأنها E5 مضافاً إليها Microsoft 365 Copilot وMicrosoft Entra Suite وAgent 365.",
        "الأفضل لمعظم المنشآت الجمع بين الباقات حسب دور المستخدم، بدل منح الجميع أعلى باقة.",
      ],
      faq: [
        {
          q: "ما الفرق بين Microsoft 365 E3 وE5؟",
          a: "تشمل E5 كل ما في E3، وتضيف حماية وامتثالاً وتحليلات أقوى، ومنها Microsoft Entra ID P2 ومجموعة Defender الأوسع وإمكانات Purview المتقدمة.",
        },
        {
          q: "هل تشمل Microsoft 365 E7 خدمة Copilot؟",
          a: "نعم. تشمل Microsoft 365 E7 خدمة Microsoft 365 Copilot، إضافة إلى Microsoft Entra Suite وAgent 365. أما مع E3 وE5 فيُرخَّص Copilot كإضافة.",
        },
        {
          q: "هل يمكن الجمع بين تراخيص E3 وE5؟",
          a: "نعم. تمنح منشآت كثيرة E5 للمستخدمين الأعلى خطورة أو احتياجاً للامتثال، وE3 لغيرهم. راجع شروط الترخيص للميزات التي تتطلب ترخيص جميع المستخدمين.",
        },
      ],
      blocks: [
        {
          p: "باقات Microsoft 365 E3 وE5 وE7 هي الباقات المؤسسية الرئيسية. وتختلف في الحماية والامتثال والذكاء الاصطناعي، ويعتمد الاختيار على مخاطر كل فئة من المستخدمين وطبيعة عملها. وقد أصبحت Microsoft 365 E7 متاحة في 1 مايو 2026.",
        },
        { h2: "Microsoft 365 E3" },
        {
          p: "تغطي E3 الاحتياجات الأساسية لمعظم الموظفين: تطبيقات Microsoft 365 والبريد وتخزين الملفات وإدارة الأجهزة والحماية والامتثال الأساسيين. وتناسب المنشآت ذات الاحتياجات الأمنية المعتادة، أو التي تضيف الحماية من شركات أخرى.",
        },
        { h2: "Microsoft 365 E5" },
        {
          p: "تشمل E5 كل ما في E3، وتضيف Microsoft Entra ID P2 ومجموعة Microsoft Defender الأوسع وميزات Purview المتقدمة للامتثال وPower BI Pro. وتناسب المنشآت الخاضعة لتنظيمات صارمة والمستخدمين الذين يتعاملون مع بيانات حساسة.",
        },
        { h2: "Microsoft 365 E7" },
        {
          p: "E7 هي الفئة الأعلى، وتشمل كل ما في E5 مع Microsoft 365 Copilot وMicrosoft Entra Suite وAgent 365 المستخدم في حوكمة وكلاء الذكاء الاصطناعي وحمايتهم. وتناسب المنشآت التي قررت نشر Copilot والوكلاء على نطاق واسع.",
        },
        { h2: "كيف تختار" },
        {
          ul: [
            "حدد فئات المستخدمين: الموظفون، والمالية، والإدارة، وتقنية المعلومات، والعاملون الميدانيون.",
            "طابق كل فئة مع احتياجاتها من الحماية والامتثال.",
            "راجع أدوات الحماية التي تدفع مقابلها حالياً، حتى لا تدفع مرتين.",
            "جرّب Copilot مع مجموعة صغيرة قبل شرائه للجميع.",
            "استخدم باقات F للعاملين الميدانيين، وE1 عندما لا تحتاج إلى تطبيقات سطح المكتب.",
          ],
        },
        { h2: "الجمع بين الباقات أمر طبيعي" },
        {
          p: "قليل من المنشآت تحتاج إلى باقة واحدة للجميع. والنهج الشائع هو E3 لمعظم الموظفين، وE5 للأدوار الحساسة، وCopilot حيث يحقق عائداً واضحاً. وتغيّر Microsoft الباقات والأسعار من وقت لآخر، فتأكد من التفاصيل الحالية قبل الطلب.",
        },
        { h2: "كيف يساعدك بيت الأفكار" },
        {
          p: "نورّد تراخيص Microsoft 365 وDynamics 365 في المملكة، ومن ذلك مشروع تراخيص مؤسسية متنوعة تجاوز 300 ترخيص Microsoft 365 لشركة تقنية. أخبرنا بفئات مستخدميك وسنقترح المزيج المناسب.",
        },
      ],
      sources: [
        {
          label:
            "Microsoft Learn — نظرة عامة على ميزات تراخيص Microsoft 365 Copilot",
          url: "https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-license-feature-overview",
        },
      ],
    },
  },
  "how-to-read-it-amc-contract": {
    en: {
      summary: [
        "Read the scope and the asset list first: anything not listed is usually not covered.",
        "Check response times, visit schedules, exclusions and who pays for spare parts, in writing.",
        "Make sure you keep your passwords and documentation, and that you can leave the contract cleanly.",
      ],
      faq: [
        {
          q: "What should an IT AMC contract include?",
          a: "A list of covered sites and devices, the services included, response and visit terms, exclusions, spare parts and warranty handling, reporting, confidentiality, renewal and handover terms.",
        },
        {
          q: "Are spare parts included in an IT AMC?",
          a: "Not always. Some contracts include labor only, others include parts for listed devices. The contract should say which, and how replacement parts are approved and priced.",
        },
        {
          q: "What happens to our passwords when the contract ends?",
          a: "They should stay with you. The contract should require the provider to hand over admin credentials, documentation and configuration backups at the end of the term.",
        },
      ],
      blocks: [
        {
          p: "An IT annual maintenance contract (AMC) decides who fixes what, how fast and at what cost for the next year. Most disputes come from wording that looked harmless at signing. These are the clauses to read carefully before you sign.",
        },
        { h2: "1. Scope and asset list" },
        {
          p: "The contract should list the sites, servers, network devices, firewalls, storage and user devices it covers. Anything not on the list is usually outside the contract. Ask how new devices are added during the year and what that costs.",
        },
        { h2: "2. Response and resolution times" },
        {
          p: "Response time is how quickly the provider starts working on a reported issue; resolution time is how quickly it is fixed. Check whether times differ by priority, whether they apply outside working hours, and how a critical issue is defined.",
        },
        { h2: "3. Preventive visits and remote support" },
        {
          p: "Look for the number of preventive visits per year, what each visit checks, and whether you receive a report afterwards. Confirm which support is remote and when an engineer comes on site.",
        },
        { h2: "4. Exclusions" },
        {
          p: "Common exclusions are new projects, data recovery, damage from power or misuse, and systems added after signing. Exclusions are normal, but they should be written down so there are no surprises.",
        },
        { h2: "5. Spare parts and manufacturer warranty" },
        {
          p: "Check whether parts are included, who orders replacements, and who handles warranty claims with the manufacturer. If parts are not included, ask how they are approved and priced.",
        },
        { h2: "6. Reporting and records" },
        {
          p: "A good contract gives you a record of tickets, visits and changes, plus an asset register with warranty and license dates. These records are useful even if you change provider later.",
        },
        { h2: "7. Access, passwords and confidentiality" },
        {
          p: "The provider will have admin access to your systems. The contract should cover confidentiality, how access is controlled, and that admin credentials stay yours. If personal data is involved, check that the terms fit your obligations under Saudi Arabia's Personal Data Protection Law.",
        },
        { h2: "8. Renewal, termination and handover" },
        {
          p: "Read how the contract renews, how much notice ends it, and what the provider must hand over at the end: credentials, documentation and configuration backups. A clean exit protects you if the relationship does not work.",
        },
        { h2: "Checklist before you sign" },
        {
          ul: [
            "Every site and device you expect to be covered is listed.",
            "Response times and priorities are written down.",
            "The number of preventive visits is stated.",
            "Exclusions are clear.",
            "Spare parts and warranty handling are defined.",
            "You keep admin credentials and documentation.",
            "Renewal and termination terms are clear.",
          ],
        },
        { h2: "How Thoughts House can help" },
        {
          p: "Thoughts House provides IT maintenance contracts in Dammam and across Saudi Arabia. We start with an assessment of your systems and put the scope, visits and exclusions in writing before you sign.",
        },
      ],
    },
    ar: {
      summary: [
        "اقرأ النطاق وقائمة الأجهزة أولاً، فما لا يرد في القائمة لا يشمله العقد عادةً.",
        "تأكد أن زمن الاستجابة وجدول الزيارات والاستثناءات ومسؤولية قطع الغيار مكتوبة.",
        "احرص على بقاء كلمات المرور والوثائق لديك، وعلى إمكانية إنهاء العقد بسلاسة.",
      ],
      faq: [
        {
          q: "ماذا يجب أن يتضمن عقد صيانة تقنية المعلومات؟",
          a: "قائمة المواقع والأجهزة المشمولة، والخدمات، وشروط الاستجابة والزيارات، والاستثناءات، وقطع الغيار والضمان، والتقارير، والسرية، وشروط التجديد والتسليم.",
        },
        {
          q: "هل تشمل عقود الصيانة قطع الغيار؟",
          a: "ليس دائماً. بعض العقود تشمل العمل فقط، وبعضها يشمل قطع الأجهزة المذكورة. يجب أن يوضح العقد ذلك، وكيف تُعتمد القطع البديلة وتُسعّر.",
        },
        {
          q: "ماذا يحدث لكلمات المرور عند انتهاء العقد؟",
          a: "يجب أن تبقى لديك. وينبغي أن يُلزم العقد المزوّد بتسليم بيانات دخول المسؤول والوثائق ونسخ الإعدادات عند انتهاء المدة.",
        },
      ],
      blocks: [
        {
          p: "يحدد عقد الصيانة السنوي لتقنية المعلومات (AMC) من يصلح ماذا، وبأي سرعة، وبأي تكلفة خلال العام. ومعظم الخلافات تأتي من صياغة بدت عادية عند التوقيع. هذه هي البنود التي تستحق القراءة بعناية قبل أن توقع.",
        },
        { h2: "1. النطاق وقائمة الأجهزة" },
        {
          p: "يجب أن يذكر العقد المواقع والسيرفرات وأجهزة الشبكة وجدران الحماية والتخزين وأجهزة المستخدمين المشمولة. وما لا يرد في القائمة يكون غالباً خارج العقد. اسأل كيف تُضاف الأجهزة الجديدة خلال العام وكم تكلف.",
        },
        { h2: "2. زمن الاستجابة وزمن الحل" },
        {
          p: "زمن الاستجابة هو سرعة بدء المزوّد في العمل على البلاغ، وزمن الحل هو سرعة إصلاحه. تحقق هل يختلفان حسب الأولوية، وهل يسريان خارج ساعات العمل، وكيف يُعرَّف العطل الحرج.",
        },
        { h2: "3. الزيارات الوقائية والدعم عن بُعد" },
        {
          p: "ابحث عن عدد الزيارات الوقائية في السنة، وما تفحصه كل زيارة، وهل تستلم تقريراً بعدها. وتأكد أي دعم يتم عن بُعد، ومتى يحضر المهندس إلى الموقع.",
        },
        { h2: "4. الاستثناءات" },
        {
          p: "من الاستثناءات الشائعة: المشاريع الجديدة، واستعادة البيانات، والأضرار الناتجة عن الكهرباء أو سوء الاستخدام، والأنظمة المضافة بعد التوقيع. الاستثناءات طبيعية، لكن يجب أن تكون مكتوبة حتى لا تفاجأ.",
        },
        { h2: "5. قطع الغيار وضمان الشركة المصنّعة" },
        {
          p: "تحقق هل تشمل التكلفة قطع الغيار، ومن يطلب البدائل، ومن يتابع مطالبات الضمان مع الشركة المصنّعة. وإن لم تكن القطع مشمولة، فاسأل كيف تُعتمد وتُسعّر.",
        },
        { h2: "6. التقارير والسجلات" },
        {
          p: "يمنحك العقد الجيد سجلاً بالبلاغات والزيارات والتغييرات، وسجلاً للأصول بمواعيد الضمان والتراخيص. وتفيدك هذه السجلات حتى لو غيّرت المزوّد لاحقاً.",
        },
        { h2: "7. الصلاحيات وكلمات المرور والسرية" },
        {
          p: "سيملك المزوّد صلاحيات المسؤول على أنظمتك. لذلك يجب أن يغطي العقد السرية، وكيف تُضبط الصلاحيات، وأن بيانات دخول المسؤول ملك لك. وإن كانت هناك بيانات شخصية، فتأكد أن الشروط تتوافق مع التزاماتك وفق نظام حماية البيانات الشخصية في المملكة.",
        },
        { h2: "8. التجديد والإنهاء والتسليم" },
        {
          p: "اقرأ كيف يتجدد العقد، وما مدة الإشعار لإنهائه، وما يجب على المزوّد تسليمه في النهاية: بيانات الدخول والوثائق ونسخ الإعدادات. فالخروج المنظم يحميك إن لم تنجح العلاقة.",
        },
        { h2: "قائمة تحقق قبل التوقيع" },
        {
          ul: [
            "كل موقع وجهاز تتوقع شموله مذكور في العقد.",
            "زمن الاستجابة والأولويات مكتوبة.",
            "عدد الزيارات الوقائية محدد.",
            "الاستثناءات واضحة.",
            "قطع الغيار والتعامل مع الضمان محددان.",
            "بيانات دخول المسؤول والوثائق تبقى لديك.",
            "شروط التجديد والإنهاء واضحة.",
          ],
        },
        { h2: "كيف يساعدك بيت الأفكار" },
        {
          p: "يقدم بيت الأفكار عقود صيانة تقنية المعلومات في الدمام وجميع مناطق المملكة. نبدأ بتقييم أنظمتك، ونكتب النطاق والزيارات والاستثناءات بوضوح قبل التوقيع.",
        },
      ],
    },
  },
  "nas-vs-san-vs-cloud-storage": {
    en: {
      summary: [
        "A NAS shares files over the network and suits most small and mid-sized offices; a SAN gives servers fast block storage and suits virtualization clusters and busy databases; cloud storage removes hardware from your site and suits remote teams, branches and offsite copies.",
        "Most Saudi companies end up with a mix: shared documents in Microsoft 365 or a NAS, virtual machines on a SAN or shared server storage, and backups copied to the cloud.",
        "None of the three is a backup on its own. RAID, snapshots and sync protect against hardware faults, not against deletion or ransomware, so keep a separate, ideally immutable, backup copy.",
      ],
      faq: [
        {
          q: "Is a NAS enough for a small business?",
          a: "For many offices of up to a few dozen users, yes. A business-grade NAS with RAID, user permissions, snapshots and a cloud backup copy handles shared folders, scanned documents and large design or CCTV files well. It becomes a limit when you need high availability for virtual machines or many users working on very large files at once.",
        },
        {
          q: "Do I need a SAN if I run virtual machines?",
          a: "Not always. One or two hosts often run well on internal server disks. Shared storage becomes important when you run a cluster of hosts and want virtual machines to move or restart on another host if one fails. That shared storage can be an iSCSI or Fibre Channel SAN, or a hyperconverged setup that pools the disks inside the servers.",
        },
        {
          q: "Can Saudi companies keep their data in the cloud?",
          a: "Yes, but check what the data is and where it will be stored. The Personal Data Protection Law (PDPL) sets conditions for transferring personal data outside the Kingdom, and organizations covered by NCA controls must follow the Cloud Cybersecurity Controls. Cloud regions inside Saudi Arabia, such as Google Cloud's Dammam region and Microsoft's Saudi Arabia East region, make in-country storage easier to arrange.",
        },
        {
          q: "Does RAID replace backup?",
          a: "No. RAID keeps storage running when a drive fails, but a deleted folder, a corrupted database or files encrypted by ransomware are deleted or encrypted on every drive in the array at once. You still need separate backup copies, at least one of them offsite or immutable.",
        },
      ],
      blocks: [
        {
          p: "Every company reaches the point where files on individual PCs and a single old server are no longer enough. The usual question is whether to buy a NAS, invest in a SAN or move everything to the cloud. The three are not really competitors: they solve different problems, and most well-run IT environments in Saudi Arabia use more than one. This guide explains what each option is, where it fits, what it costs to run, and what to check about backup and data residency before you decide.",
        },
        { h2: "The three options in one paragraph each" },
        {
          ul: [
            "NAS (network-attached storage): a storage device on your network that shares folders to users and servers over standard file protocols such as SMB for Windows and NFS for Linux. Users see it as mapped drives or shared folders.",
            "SAN (storage area network): a dedicated network that gives servers block-level storage, so a server sees a SAN volume as if it were a local disk. It runs over iSCSI on Ethernet, Fibre Channel, or newer NVMe over Fabrics, and usually sits behind virtualization hosts and databases rather than serving users directly.",
            "Cloud storage: capacity rented from a provider and reached over the internet, either as file sync and sharing (such as OneDrive and SharePoint in Microsoft 365), managed file shares (such as Azure Files), or object storage used for backups and archives.",
          ],
        },
        { h2: "When a NAS makes sense" },
        {
          p: "A NAS is the simplest way to give a team central, permission-controlled shared folders. Business models from vendors such as Synology, QNAP, Dell and HPE include RAID, snapshots, Active Directory integration and built-in tools to copy data to the cloud. A NAS fits well when:",
        },
        {
          ul: [
            "Teams work with large files, such as engineering drawings, video, survey data or scanned archives, that are slow to sync from the cloud.",
            "Internet bandwidth at the office is limited or shared by many users.",
            "You need local storage for CCTV recordings or for a backup target on site.",
            "You want predictable, one-time hardware cost instead of a monthly fee that grows with capacity.",
          ],
        },
        {
          p: "The limits are worth knowing. A single NAS is usually a single point of failure unless you buy a high-availability pair; performance drops when many users open large files at once on a 1 Gbps network; and someone has to patch its firmware, because internet-exposed NAS devices are a frequent ransomware target.",
        },
        { h2: "When a SAN makes sense" },
        {
          p: "A SAN is built for servers, not for end users. Its job is to give several virtualization hosts or database servers fast, shared block storage with low latency and high availability, usually with dual controllers, redundant paths and redundant switches so that no single failure stops the system. It fits when:",
        },
        {
          ul: [
            "You run a cluster of two or more VMware, Hyper-V or Proxmox hosts and want virtual machines to keep running or restart on another host after a failure.",
            "ERP, accounting or other database systems need consistent, low-latency storage performance.",
            "You need storage features such as replication to a second site for disaster recovery.",
          ],
        },
        {
          p: "A SAN costs more to buy and needs more skill to design and run: the storage network, multipathing, zoning or iSCSI configuration, and firmware updates all have to be done carefully. Smaller environments often get the same benefits from an entry-level iSCSI array or from hyperconverged infrastructure, which pools the disks inside the servers into shared storage.",
        },
        { h2: "When cloud storage makes sense" },
        {
          p: "Cloud storage moves the hardware, power, cooling and replacement cycle to a provider. For many companies the first step is already paid for: Microsoft 365 business plans include OneDrive and SharePoint, which handle everyday documents, sharing with external parties and access from home or a branch. Cloud storage fits when:",
        },
        {
          ul: [
            "Staff work from several sites, from home or on mobile devices.",
            "You want an offsite copy of your backups without building a second server room.",
            "Capacity needs are hard to predict and you would rather pay as you grow.",
            "You prefer an operating cost to a capital purchase.",
          ],
        },
        {
          p: "The trade-offs are an ongoing monthly cost that rises with capacity and, for some services, with data retrieval; dependence on your internet link for every file you open; and the need to check where the data is physically stored.",
        },
        { h2: "Side-by-side comparison" },
        {
          ul: [
            "What it serves: NAS serves files to users and servers; SAN serves disks to servers; cloud serves files, shares or objects over the internet.",
            "Performance: SAN gives the lowest latency for databases and virtual machines; a NAS is fast on the local network; cloud speed depends on your internet connection.",
            "Cost model: NAS and SAN are mainly upfront hardware plus support renewals; cloud is a monthly subscription.",
            "Skills needed: NAS is the easiest to run; SAN needs storage and networking expertise; cloud needs good identity, permission and cost management.",
            "Resilience: depends on design in every case; dual controllers for SAN, replicated pairs for NAS, and redundancy options chosen per cloud service.",
          ],
        },
        { h2: "Data residency and regulation in Saudi Arabia" },
        {
          p: "Where the data sits matters as much as the technology. The Personal Data Protection Law, overseen by SDAIA, only allows personal data to be transferred outside the Kingdom under the conditions set out in its transfer regulation. Organizations covered by the National Cybersecurity Authority's controls must also apply the Cloud Cybersecurity Controls (CCC-2:2024), which set requirements for both cloud providers and their customers. In practice, keep sensitive and personal data on premises or in a cloud region inside the Kingdom unless you have confirmed that a transfer is allowed.",
        },
        {
          p: "In-country options are growing. Google Cloud's Dammam region is available to Saudi-based customers who buy through its local reseller, CNTXT, and Microsoft has announced that its Saudi Arabia East region, in the Eastern Province, becomes available to customers in November 2026 for eligible workloads and data. Before relying on either for a compliance requirement, confirm which specific services store data in the region.",
        },
        { h2: "None of them is a backup" },
        {
          p: "A common and expensive mistake is treating the storage itself as protection. RAID protects against a failed drive. Snapshots help you roll back recent changes, but they live on the same device. OneDrive and SharePoint sync deletions and encrypted files just as quickly as good files. Whatever storage you choose, follow the 3-2-1 rule: three copies of your data, on two different types of media, with one copy offsite, and make at least one copy immutable so ransomware cannot delete it. Test restores regularly, not only backups.",
        },
        { h2: "Which combination fits your company?" },
        {
          ul: [
            "Office of 10 to 50 users working mainly on Office documents: Microsoft 365 for documents and sharing, with a separate backup of Microsoft 365 data. Add a small NAS only if you have large files or CCTV recordings.",
            "Engineering, design or media firm with large files: a NAS with 10 Gbps networking for working files, snapshots for quick recovery, and a cloud or offsite backup copy.",
            "Company running ERP and several virtual servers: a cluster of hosts on a SAN or hyperconverged storage, a NAS or backup appliance as the local backup target, and an offsite copy in an in-Kingdom cloud region.",
            "Company with several branches: cloud file shares or Microsoft 365 for collaboration, with local caching or a small NAS at branches where links are slow.",
          ],
        },
        { h2: "Questions to answer before you buy" },
        {
          ul: [
            "How much data do you have today, and how fast has it grown over the last two years?",
            "Which applications need low-latency storage, and which only need shared folders?",
            "How long can each system be down, and how much data can you afford to lose?",
            "Is any of the data personal or classified, and where is it allowed to be stored?",
            "What is your office internet bandwidth, and is there a backup link?",
            "Who will patch, monitor and replace the storage over the next five years?",
          ],
        },
        { h2: "How Thoughts House can help" },
        {
          p: "Thoughts House designs and supplies storage, server and backup solutions for companies across Saudi Arabia, from a single NAS for a growing office to shared storage for virtualization clusters and offsite backup in the cloud. We start with an assessment of your data, applications and recovery needs, then recommend a vendor-neutral design and support it after installation. Our cloud backup and data center services cover the full setup. We are based in Dammam, Saudi Arabia, and work on-site by appointment or remotely. Contact sales@thoughtshouse.com or +966 54 102 2995 to arrange a storage review.",
        },
      ],
      sources: [
        {
          label: "NCA — Cloud Cybersecurity Controls (CCC-2:2024)",
          url: "https://nca.gov.sa/en/regulatory-documents/controls-list/ccc/",
        },
        {
          label:
            "SDAIA — Regulation on Personal Data Transfer outside the Kingdom",
          url: "https://sdaia.gov.sa/Documents/RegulationonPersonalDataEN.pdf",
        },
        {
          label: "Microsoft — Saudi Arabia East datacenter region availability",
          url: "https://news.microsoft.com/source/emea/2026/08/microsoft-announces-saudi-arabia-east-datacenter-region-will-be-available-in-november-2026/",
        },
        {
          label: "Google Cloud — Dammam region access",
          url: "https://docs.cloud.google.com/docs/dammam-region-access",
        },
        {
          label: "Microsoft Learn — What is Azure Files?",
          url: "https://learn.microsoft.com/en-us/azure/storage/files/storage-files-introduction",
        },
      ],
    },
    ar: {
      summary: [
        "جهاز NAS يشارك الملفات عبر الشبكة ويناسب أغلب المكاتب الصغيرة والمتوسطة، وشبكة SAN تمنح السيرفرات تخزيناً سريعاً على مستوى الكتل وتناسب بيئات المحاكاة الافتراضية وقواعد البيانات المزدحمة، والتخزين السحابي يُخرج الأجهزة من مقرك ويناسب الفرق الموزعة والفروع والنسخ خارج الموقع.",
        "تنتهي أغلب الشركات في المملكة إلى مزيج من الثلاثة: المستندات المشتركة في Microsoft 365 أو على NAS، والأجهزة الافتراضية على SAN أو تخزين مشترك للسيرفرات، والنسخ الاحتياطية في السحابة.",
        "لا يُعد أيٌّ منها نسخاً احتياطياً بحد ذاته؛ فـ RAID واللقطات والمزامنة تحمي من أعطال الأجهزة لا من الحذف أو برامج الفدية، لذا احتفظ بنسخة احتياطية منفصلة، ويُفضّل أن تكون غير قابلة للتعديل.",
      ],
      faq: [
        {
          q: "هل يكفي جهاز NAS لشركة صغيرة؟",
          a: "في كثير من المكاتب التي يصل عدد مستخدميها إلى بضع عشرات، نعم. فجهاز NAS مخصص للأعمال مع RAID وصلاحيات للمستخدمين ولقطات ونسخة احتياطية في السحابة يكفي للمجلدات المشتركة والمستندات الممسوحة ضوئياً وملفات التصميم أو تسجيلات الكاميرات الكبيرة. ويصبح عائقاً عندما تحتاج إلى توافر عالٍ للأجهزة الافتراضية، أو عندما يعمل عدد كبير من المستخدمين على ملفات ضخمة في الوقت نفسه.",
        },
        {
          q: "هل أحتاج إلى SAN إذا كنت أشغّل أجهزة افتراضية؟",
          a: "ليس دائماً. فسيرفر أو اثنان يعملان غالباً بشكل جيد على أقراصهما الداخلية. ويصبح التخزين المشترك مهماً عندما تشغّل مجموعة (Cluster) من السيرفرات وتريد أن تنتقل الأجهزة الافتراضية أو تعيد التشغيل على سيرفر آخر إذا تعطل أحدها. وقد يكون هذا التخزين المشترك شبكة SAN تعمل بـ iSCSI أو Fibre Channel، أو بنية متقاربة (Hyperconverged) تجمع أقراص السيرفرات في مخزن واحد.",
        },
        {
          q: "هل يمكن للشركات السعودية حفظ بياناتها في السحابة؟",
          a: "نعم، لكن تحقق من نوع البيانات ومكان تخزينها. فنظام حماية البيانات الشخصية يضع شروطاً لنقل البيانات الشخصية إلى خارج المملكة، والجهات المشمولة بضوابط الهيئة الوطنية للأمن السيبراني ملزمة بضوابط الأمن السيبراني للحوسبة السحابية. كما أن المناطق السحابية داخل المملكة، مثل منطقة Google Cloud في الدمام ومنطقة Microsoft المسماة Saudi Arabia East، تسهّل إبقاء البيانات داخل البلاد.",
        },
        {
          q: "هل يغني RAID عن النسخ الاحتياطي؟",
          a: "لا. يحافظ RAID على استمرار التخزين عند تعطل قرص، لكن المجلد المحذوف أو قاعدة البيانات التالفة أو الملفات التي شفّرتها برامج الفدية تُحذف أو تُشفَّر على جميع أقراص المصفوفة في اللحظة نفسها. لذلك ما زلت تحتاج نسخاً احتياطية منفصلة، إحداها على الأقل خارج الموقع أو غير قابلة للتعديل.",
        },
      ],
      blocks: [
        {
          p: "تصل كل شركة إلى مرحلة لا تعود فيها الملفات المحفوظة على أجهزة الموظفين وسيرفر قديم واحد كافية. وعندها يتكرر السؤال: هل نشتري جهاز NAS، أم نستثمر في شبكة SAN، أم ننقل كل شيء إلى السحابة؟ والحقيقة أن الخيارات الثلاثة ليست متنافسة بالمعنى الدقيق، فكل منها يحل مشكلة مختلفة، ومعظم بيئات تقنية المعلومات المنظمة في المملكة تستخدم أكثر من خيار. يشرح هذا الدليل كل خيار، ومتى يناسب، وتكلفة تشغيله، وما يجب التحقق منه في النسخ الاحتياطي وبقاء البيانات داخل المملكة قبل اتخاذ القرار.",
        },
        { h2: "الخيارات الثلاثة باختصار" },
        {
          ul: [
            "NAS (التخزين المتصل بالشبكة): جهاز تخزين على شبكتك يشارك المجلدات مع المستخدمين والسيرفرات عبر بروتوكولات الملفات المعتادة، مثل SMB لأنظمة Windows وNFS لأنظمة Linux، ويظهر للمستخدم كمحرك أقراص أو مجلد مشترك.",
            "SAN (شبكة منطقة التخزين): شبكة مخصصة تمنح السيرفرات تخزيناً على مستوى الكتل (Block)، فيرى السيرفر وحدة التخزين كأنها قرص داخلي. تعمل عبر iSCSI على شبكة Ethernet أو عبر Fibre Channel أو تقنية NVMe over Fabrics الأحدث، وتخدم عادةً سيرفرات المحاكاة الافتراضية وقواعد البيانات لا المستخدمين مباشرة.",
            "التخزين السحابي: سعة تستأجرها من مزوّد وتصل إليها عبر الإنترنت، سواء كانت مزامنة ومشاركة ملفات (مثل OneDrive وSharePoint في Microsoft 365)، أو مجلدات مشتركة مُدارة (مثل Azure Files)، أو تخزين كائنات يُستخدم للنسخ الاحتياطي والأرشفة.",
          ],
        },
        { h2: "متى يكون NAS هو الخيار المناسب" },
        {
          p: "جهاز NAS هو أبسط طريقة لمنح فريق العمل مجلدات مركزية مشتركة بصلاحيات محددة. وتأتي الطرازات المخصصة للأعمال من شركات مثل Synology وQNAP وDell وHPE مع RAID واللقطات والتكامل مع Active Directory وأدوات مدمجة لنسخ البيانات إلى السحابة. ويناسب NAS في الحالات التالية:",
        },
        {
          ul: [
            "عندما يتعامل الفريق مع ملفات كبيرة، مثل المخططات الهندسية أو الفيديو أو بيانات المسح أو الأرشيف الممسوح ضوئياً، والتي تكون مزامنتها من السحابة بطيئة.",
            "عندما يكون عرض نطاق الإنترنت في المكتب محدوداً أو مشتركاً بين عدد كبير من المستخدمين.",
            "عندما تحتاج إلى تخزين محلي لتسجيلات الكاميرات أو وجهة محلية للنسخ الاحتياطي.",
            "عندما تفضّل تكلفة أجهزة واضحة تُدفع مرة واحدة بدلاً من اشتراك شهري يرتفع مع السعة.",
          ],
        },
        {
          p: "ومن المهم معرفة حدوده أيضاً: جهاز NAS واحد يمثل غالباً نقطة تعطل وحيدة ما لم تشترِ زوجاً بتوافر عالٍ، ويتراجع أداؤه حين يفتح عدد كبير من المستخدمين ملفات ضخمة في آن واحد على شبكة 1 جيجابت، ويحتاج إلى من يحدّث نظامه باستمرار، لأن أجهزة NAS المكشوفة على الإنترنت هدف متكرر لبرامج الفدية.",
        },
        { h2: "متى تكون SAN هي الخيار المناسب" },
        {
          p: "صُممت شبكة SAN لخدمة السيرفرات لا المستخدمين. ومهمتها أن تمنح عدة سيرفرات محاكاة افتراضية أو قواعد بيانات تخزيناً مشتركاً سريعاً بزمن استجابة منخفض وتوافر عالٍ، وذلك عادةً بوحدتي تحكم ومسارات ومبدّلات احتياطية حتى لا يوقف عطل واحد النظام كله. وتناسب في الحالات التالية:",
        },
        {
          ul: [
            "عندما تشغّل مجموعة من سيرفرين أو أكثر بنظام VMware أو Hyper-V أو Proxmox، وتريد أن تستمر الأجهزة الافتراضية أو يُعاد تشغيلها على سيرفر آخر عند حدوث عطل.",
            "عندما تحتاج أنظمة ERP أو المحاسبة أو قواعد البيانات الأخرى إلى أداء تخزين ثابت وزمن استجابة منخفض.",
            "عندما تحتاج إلى مزايا مثل النسخ المتزامن إلى موقع ثانٍ للتعافي من الكوارث.",
          ],
        },
        {
          p: "تكلفة شراء SAN أعلى، وتصميمها وتشغيلها يحتاجان إلى خبرة أكبر؛ فشبكة التخزين وتعدد المسارات وإعدادات Zoning أو iSCSI وتحديثات البرامج الثابتة كلها تتطلب عناية. ولهذا تحصل البيئات الأصغر غالباً على الفوائد نفسها من مصفوفة iSCSI بمستوى مبتدئ، أو من البنية المتقاربة التي تجمع الأقراص الموجودة داخل السيرفرات في تخزين مشترك.",
        },
        { h2: "متى يكون التخزين السحابي هو الخيار المناسب" },
        {
          p: "ينقل التخزين السحابي عبء الأجهزة والكهرباء والتبريد ودورة الاستبدال إلى المزوّد. وكثير من الشركات دفعت بالفعل ثمن الخطوة الأولى، إذ تتضمن باقات Microsoft 365 للأعمال خدمتي OneDrive وSharePoint اللتين تكفيان للمستندات اليومية، والمشاركة مع جهات خارجية، والوصول من المنزل أو من الفروع. ويناسب التخزين السحابي في الحالات التالية:",
        },
        {
          ul: [
            "عندما يعمل الموظفون من عدة مواقع أو من المنزل أو من الأجهزة المحمولة.",
            "عندما تريد نسخة احتياطية خارج الموقع دون بناء غرفة خوادم ثانية.",
            "عندما يصعب توقع احتياجك من السعة وتفضّل الدفع بقدر النمو.",
            "عندما تفضّل مصروفاً تشغيلياً على شراء رأسمالي.",
          ],
        },
        {
          p: "وفي المقابل، هناك تكلفة شهرية مستمرة ترتفع مع السعة، ومع استرجاع البيانات في بعض الخدمات، واعتماد على اتصال الإنترنت في كل ملف تفتحه، وضرورة التحقق من المكان الفعلي لتخزين البيانات.",
        },
        { h2: "مقارنة مباشرة" },
        {
          ul: [
            "ما الذي يقدمه: NAS يقدم الملفات للمستخدمين والسيرفرات، وSAN تقدم أقراصاً للسيرفرات، والسحابة تقدم ملفات أو مجلدات مشتركة أو كائنات عبر الإنترنت.",
            "الأداء: SAN تعطي أقل زمن استجابة لقواعد البيانات والأجهزة الافتراضية، وNAS سريع على الشبكة المحلية، وسرعة السحابة مرتبطة باتصال الإنترنت.",
            "نموذج التكلفة: NAS وSAN تكلفة أجهزة مقدّمة في الأساس مع تجديد الدعم، والسحابة اشتراك شهري.",
            "الخبرة المطلوبة: NAS الأسهل تشغيلاً، وSAN تحتاج خبرة في التخزين والشبكات، والسحابة تحتاج إدارة جيدة للهويات والصلاحيات والتكاليف.",
            "الاعتمادية: تعتمد على التصميم في كل الحالات؛ وحدتا تحكم في SAN، وزوج متزامن في NAS، وخيارات احتياطية تختارها لكل خدمة سحابية.",
          ],
        },
        { h2: "بقاء البيانات داخل المملكة والمتطلبات التنظيمية" },
        {
          p: "مكان البيانات لا يقل أهمية عن التقنية نفسها. فنظام حماية البيانات الشخصية، الذي تشرف عليه الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا)، لا يسمح بنقل البيانات الشخصية إلى خارج المملكة إلا وفق الشروط المحددة في لائحة نقل البيانات. كما يجب على الجهات المشمولة بضوابط الهيئة الوطنية للأمن السيبراني تطبيق ضوابط الأمن السيبراني للحوسبة السحابية (CCC-2:2024)، وهي تضع متطلبات على مزوّدي الخدمات السحابية وعملائهم معاً. وعملياً، احتفظ بالبيانات الحساسة والشخصية في مقرك أو في منطقة سحابية داخل المملكة، ما لم تتأكد من أن النقل مسموح.",
        },
        {
          p: "والخيارات داخل المملكة في ازدياد. فمنطقة Google Cloud في الدمام متاحة للعملاء المقيمين في المملكة عبر موزّعها المحلي CNTXT، وأعلنت Microsoft أن منطقتها Saudi Arabia East في المنطقة الشرقية تصبح متاحة للعملاء في نوفمبر 2026 لأحمال العمل والبيانات المؤهلة. وقبل الاعتماد على أي منهما لتلبية متطلب تنظيمي، تأكد من الخدمات المحددة التي تحفظ بياناتها داخل تلك المنطقة.",
        },
        { h2: "لا شيء منها يُعد نسخاً احتياطياً" },
        {
          p: "من الأخطاء الشائعة والمكلفة اعتبار التخزين نفسه وسيلة حماية. فـ RAID يحمي من تعطل قرص، واللقطات تساعد على التراجع عن التغييرات الحديثة لكنها محفوظة على الجهاز نفسه، وOneDrive وSharePoint يزامنان الحذف والملفات المشفّرة بالسرعة نفسها التي يزامنان بها الملفات السليمة. وأياً كان التخزين الذي تختاره، طبّق قاعدة 3-2-1: ثلاث نسخ من بياناتك، على نوعين مختلفين من الوسائط، وإحداها خارج الموقع، واجعل نسخة واحدة على الأقل غير قابلة للتعديل حتى لا تستطيع برامج الفدية حذفها. واختبر الاستعادة بانتظام، لا النسخ فقط.",
        },
        { h2: "أي مزيج يناسب شركتك؟" },
        {
          ul: [
            "مكتب من 10 إلى 50 مستخدماً يعمل غالباً على مستندات Office: استخدم Microsoft 365 للمستندات والمشاركة مع نسخ احتياطي مستقل لبياناته، وأضف جهاز NAS صغيراً فقط إذا كانت لديك ملفات كبيرة أو تسجيلات كاميرات.",
            "شركة هندسية أو تصميم أو إنتاج إعلامي بملفات كبيرة: جهاز NAS مع شبكة 10 جيجابت لملفات العمل، ولقطات للاستعادة السريعة، ونسخة احتياطية في السحابة أو خارج الموقع.",
            "شركة تشغّل نظام ERP وعدة سيرفرات افتراضية: مجموعة سيرفرات على SAN أو تخزين متقارب، وجهاز NAS أو جهاز نسخ احتياطي كوجهة محلية للنسخ، ونسخة خارج الموقع في منطقة سحابية داخل المملكة.",
            "شركة لها عدة فروع: مجلدات سحابية مشتركة أو Microsoft 365 للعمل المشترك، مع تخزين مؤقت محلي أو جهاز NAS صغير في الفروع ذات الاتصال البطيء.",
          ],
        },
        { h2: "أسئلة تجيب عنها قبل الشراء" },
        {
          ul: [
            "كم حجم بياناتك اليوم، وبأي سرعة نمت خلال السنتين الماضيتين؟",
            "أي التطبيقات تحتاج إلى تخزين بزمن استجابة منخفض، وأيها يكفيه مجلد مشترك؟",
            "كم من الوقت يمكن أن يتوقف كل نظام، وكم من البيانات يمكنك تحمّل فقدانها؟",
            "هل بين بياناتك بيانات شخصية أو مصنّفة، وأين يُسمح بتخزينها؟",
            "ما سرعة الإنترنت في مكتبك، وهل لديك خط احتياطي؟",
            "من سيتولى تحديث التخزين ومراقبته واستبداله خلال السنوات الخمس القادمة؟",
          ],
        },
        { h2: "كيف يساعدك بيت الأفكار" },
        {
          p: "يصمم بيت الأفكار ويورّد حلول التخزين والسيرفرات والنسخ الاحتياطي للشركات في جميع مناطق المملكة، من جهاز NAS واحد لمكتب في طور النمو، إلى التخزين المشترك لمجموعات المحاكاة الافتراضية، والنسخ الاحتياطي خارج الموقع في السحابة. نبدأ بتقييم بياناتك وتطبيقاتك واحتياجات الاستعادة لديك، ثم نوصي بتصميم محايد تجاه الشركات المصنّعة وندعمه بعد التركيب، وتغطي خدماتنا للنسخ الاحتياطي السحابي ومراكز البيانات الإعداد كاملاً. مقرنا في الدمام بالمملكة العربية السعودية، ونقدّم خدماتنا في موقعك بموعد مسبق أو عن بُعد. تواصل معنا عبر sales@thoughtshouse.com أو على الرقم ⁦+966 54 102 2995⁩ لترتيب مراجعة لبيئة التخزين لديك.",
        },
      ],
      sources: [
        {
          label:
            "الهيئة الوطنية للأمن السيبراني — ضوابط الأمن السيبراني للحوسبة السحابية (CCC-2:2024)",
          url: "https://nca.gov.sa/en/regulatory-documents/controls-list/ccc/",
        },
        {
          label: "سدايا — لائحة نقل البيانات الشخصية إلى خارج المملكة",
          url: "https://sdaia.gov.sa/Documents/RegulationonPersonalDataEN.pdf",
        },
        {
          label: "Microsoft — إتاحة منطقة Saudi Arabia East",
          url: "https://news.microsoft.com/source/emea/2026/08/microsoft-announces-saudi-arabia-east-datacenter-region-will-be-available-in-november-2026/",
        },
        {
          label: "Google Cloud — الوصول إلى منطقة الدمام",
          url: "https://docs.cloud.google.com/docs/dammam-region-access",
        },
        {
          label: "Microsoft Learn — ما هي خدمة Azure Files؟",
          url: "https://learn.microsoft.com/en-us/azure/storage/files/storage-files-introduction",
        },
      ],
    },
  },
  "it-company-vs-system-integrator": {
    en: {
      summary: [
        "An IT company is a broad term: it can supply equipment and licenses, fix computers, or manage your IT day to day.",
        "A system integrator designs a solution, brings products from different vendors together, installs and configures them, and makes them work as one system.",
        "Simple purchases and routine support need an IT company; projects that touch several systems, sites or vendors need integration work, and many companies offer both.",
      ],
      faq: [
        {
          q: "Is a system integrator the same as an IT company?",
          a: "A system integrator is a type of IT company. Every integrator works in IT, but not every IT company does integration. Some only supply products or provide support for systems that already exist.",
        },
        {
          q: "When do I need a system integrator instead of a supplier?",
          a: "When the project involves design and several connected parts, such as a new office network, a firewall and VPN rollout, a storage and backup system, or moving users to new devices without stopping work. If you only need equipment delivered, a supplier is enough.",
        },
        {
          q: "Can one company be both?",
          a: "Yes. Many companies, including Thoughts House, supply hardware and licenses and also design, install and support complete solutions. Ask which role they will play in your project and put it in the scope.",
        },
      ],
      blocks: [
        {
          p: 'Businesses often use "IT company" and "system integrator" as if they mean the same thing. They overlap, but they are not identical, and the difference matters when you plan a project. Choosing the wrong kind of partner usually shows up later as equipment that does not work together, or as a gap that nobody takes responsibility for.',
        },
        { h2: "What an IT company does" },
        {
          p: '"IT company" is a broad label. It can describe a business that does one or more of these things:',
        },
        {
          ul: [
            "Supplies hardware and software: computers, servers, network devices and licenses.",
            "Provides support and maintenance for existing systems, on site or remotely.",
            "Manages day-to-day IT for a company that has no internal IT team, or a small one.",
            "Offers specific services such as cabling, CCTV or Wi-Fi installation.",
          ],
        },
        {
          p: "An IT company that mainly supplies products is often called a reseller. Its main job is to deliver the right items, with the right warranty and licenses, on time.",
        },
        { h2: "What a system integrator adds" },
        {
          p: "A system integrator starts from the outcome you need, not from a product list. The work usually follows these steps:",
        },
        {
          ul: [
            "Understanding your requirements: users, sites, applications, security needs and growth.",
            "Designing the solution and producing a bill of materials.",
            "Choosing products from different vendors that fit together.",
            "Installing, configuring and connecting them with the systems you already have.",
            "Testing, documenting and handing over, then supporting the result.",
          ],
        },
        {
          p: "The key word is integration. A firewall, a set of switches, a Wi-Fi system and a backup appliance may each work on their own. The integrator's job is to make them work together, with consistent settings, security and documentation.",
        },
        { h2: "A simple way to tell them apart" },
        {
          p: "Ask what the partner is responsible for. A supplier is responsible for delivering items. A support company is responsible for keeping existing systems running. An integrator is responsible for a working solution, from design to handover.",
        },
        { h2: "Examples: which one do you need?" },
        {
          ul: [
            "Buying 20 laptops of a model you already use: a supplier is enough.",
            "Renewing licenses you already have: a supplier, ideally one that tracks your renewal dates.",
            "Monthly support for an existing office: an IT support or maintenance provider.",
            "Fitting out a new office with cabling, network, Wi-Fi and firewall: a system integrator.",
            "Replacing a file server with storage and backup: a system integrator, because data, permissions and backup must move together.",
            "Replacing hundreds of computers while staff keep working: integration and project planning, not only supply.",
          ],
        },
        { h2: "Why the difference matters" },
        {
          p: "When a project needs integration but is bought as separate supply orders, the business itself becomes the integrator, often without the time or skills to do it. Common results are devices that do not match the design, missing licenses discovered at installation, and disputes between suppliers about whose problem it is.",
        },
        {
          p: "The opposite also happens: paying for a full integration project when you only need a straightforward purchase. A good partner will tell you which case you are in.",
        },
        { h2: "Questions to ask before you choose" },
        {
          ul: [
            "Will you design the solution, or only quote the items we list?",
            "Who is responsible if two products do not work together?",
            "Will you survey our site before quoting?",
            "What documentation and credentials do we receive at handover?",
            "Who supports the solution after go-live?",
          ],
        },
        { h2: "How Thoughts House can help" },
        {
          p: "Thoughts House is an IT company and system integrator based in Dammam, serving organizations across Saudi Arabia. We supply hardware and licenses when that is all you need, and design, install and support complete solutions when the project calls for it. Our About page explains how we work, and our Services page lists what we deliver.",
        },
      ],
    },
    ar: {
      summary: [
        "شركة تقنية المعلومات وصف واسع، فقد تورّد الأجهزة والتراخيص، أو تصلح الأعطال، أو تدير تقنية المعلومات لديك يوماً بيوم.",
        "شركة تكامل الأنظمة تصمم الحل، وتجمع منتجات من موردين مختلفين، وتركّبها وتضبطها حتى تعمل كنظام واحد.",
        "المشتريات البسيطة والدعم المعتاد تكفيها شركة تقنية معلومات، أما المشاريع التي تمس عدة أنظمة أو مواقع أو موردين فتحتاج إلى تكامل، وكثير من الشركات تقدم الاثنين.",
      ],
      faq: [
        {
          q: "هل شركة تكامل الأنظمة هي نفسها شركة تقنية المعلومات؟",
          a: "شركة تكامل الأنظمة نوع من شركات تقنية المعلومات. فكل شركة تكامل تعمل في تقنية المعلومات، لكن ليست كل شركة تقنية معلومات تقدم التكامل؛ فبعضها يكتفي بالتوريد أو بدعم الأنظمة القائمة.",
        },
        {
          q: "متى أحتاج إلى شركة تكامل أنظمة بدلاً من مورّد؟",
          a: "عندما يحتاج المشروع إلى تصميم وأجزاء مترابطة، مثل شبكة مكتب جديد، أو تركيب جدار حماية وVPN، أو نظام تخزين ونسخ احتياطي، أو نقل الموظفين إلى أجهزة جديدة دون إيقاف العمل. أما إذا كنت تحتاج إلى توريد الأجهزة فقط، فالمورّد يكفي.",
        },
        {
          q: "هل يمكن أن تجمع شركة واحدة بين الدورين؟",
          a: "نعم. كثير من الشركات، ومنها بيت الأفكار، تورّد الأجهزة والتراخيص، وتصمم الحلول المتكاملة وتركّبها وتدعمها أيضاً. اسأل عن الدور الذي ستؤديه الشركة في مشروعك، واكتبه في النطاق.",
        },
      ],
      blocks: [
        {
          p: "يستخدم كثيرون عبارتي «شركة تقنية معلومات» و«شركة تكامل أنظمة» وكأنهما شيء واحد. بينهما تداخل واضح، لكنهما ليستا متطابقتين، ويظهر الفرق عند التخطيط لأي مشروع. فاختيار الشريك غير المناسب يظهر لاحقاً في صورة أجهزة لا تعمل معاً، أو ثغرة لا يتحمل أحد مسؤوليتها.",
        },
        { h2: "ماذا تقدم شركة تقنية المعلومات؟" },
        {
          p: "«شركة تقنية معلومات» وصف عام يشمل شركات تقوم بعمل واحد أو أكثر مما يلي:",
        },
        {
          ul: [
            "توريد الأجهزة والبرمجيات: أجهزة الحاسب والسيرفرات وأجهزة الشبكات والتراخيص.",
            "دعم الأنظمة القائمة وصيانتها، في الموقع أو عن بُعد.",
            "إدارة تقنية المعلومات اليومية لشركة ليس لديها فريق تقنية داخلي، أو لديها فريق صغير.",
            "خدمات محددة مثل التمديدات أو كاميرات المراقبة أو تركيب شبكات Wi-Fi.",
          ],
        },
        {
          p: "والشركة التي يغلب على عملها التوريد تُسمى غالباً «موزّعاً» أو «مورّداً»، ومهمتها الأساسية تسليم المنتجات الصحيحة بالضمان والتراخيص المناسبة وفي الوقت المحدد.",
        },
        { h2: "ما الذي تضيفه شركة تكامل الأنظمة؟" },
        {
          p: "تبدأ شركة تكامل الأنظمة من النتيجة التي تحتاجها، لا من قائمة المنتجات. ويسير عملها عادةً بهذه الخطوات:",
        },
        {
          ul: [
            "فهم احتياجاتك: المستخدمون والمواقع والتطبيقات ومتطلبات الأمن والتوسع المتوقع.",
            "تصميم الحل وإعداد قائمة المواد.",
            "اختيار منتجات من موردين مختلفين تعمل معاً بشكل صحيح.",
            "التركيب والإعداد وربط الحل بالأنظمة الموجودة لديك.",
            "الاختبار والتوثيق والتسليم، ثم دعم الحل بعد التشغيل.",
          ],
        },
        {
          p: "والكلمة المفتاحية هنا هي «التكامل». فجدار الحماية والسويتشات وشبكة Wi-Fi وجهاز النسخ الاحتياطي قد يعمل كل منها منفرداً، لكن مهمة شركة التكامل أن تجعلها تعمل معاً بإعدادات متسقة وحماية موحدة ووثائق واضحة.",
        },
        { h2: "طريقة بسيطة للتمييز بينهما" },
        {
          p: "اسأل: ما الذي يتحمل الشريك مسؤوليته؟ المورّد مسؤول عن تسليم المنتجات، وشركة الدعم مسؤولة عن استمرار عمل الأنظمة القائمة، أما شركة التكامل فمسؤولة عن حل يعمل فعلاً، من التصميم حتى التسليم.",
        },
        { h2: "أمثلة: أيهما تحتاج؟" },
        {
          ul: [
            "شراء 20 جهاز لابتوب من طراز تستخدمه حالياً: يكفيك مورّد.",
            "تجديد تراخيص تملكها: يكفيك مورّد، ويفضل أن يتابع مواعيد التجديد عنك.",
            "دعم شهري لمكتب قائم: مزوّد دعم أو عقد صيانة.",
            "تجهيز مكتب جديد بالتمديدات والشبكة وWi-Fi وجدار الحماية: شركة تكامل أنظمة.",
            "استبدال سيرفر الملفات بنظام تخزين ونسخ احتياطي: شركة تكامل، لأن البيانات والصلاحيات والنسخ الاحتياطي يجب أن تنتقل معاً.",
            "استبدال مئات الأجهزة والموظفون مستمرون في العمل: تكامل وتخطيط مشروع، لا توريد فقط.",
          ],
        },
        { h2: "لماذا يهم هذا الفرق؟" },
        {
          p: "حين يحتاج المشروع إلى تكامل لكنه يُشترى على شكل طلبات توريد منفصلة، تصبح الشركة نفسها هي من يقوم بالتكامل، وغالباً دون وقت كافٍ أو خبرة لازمة. والنتيجة المعتادة: أجهزة لا تطابق التصميم، وتراخيص ناقصة تُكتشف أثناء التركيب، وخلاف بين الموردين حول المسؤول عن المشكلة.",
        },
        {
          p: "ويحدث العكس أيضاً: أن تدفع مقابل مشروع تكامل كامل وأنت لا تحتاج إلا إلى شراء مباشر. والشريك الجيد يخبرك بصراحة أي الحالتين تنطبق عليك.",
        },
        { h2: "أسئلة قبل أن تختار" },
        {
          ul: [
            "هل ستصممون الحل، أم ستسعّرون فقط ما نطلبه؟",
            "من المسؤول إذا لم يعمل منتجان معاً؟",
            "هل ستعاينون الموقع قبل تقديم العرض؟",
            "ما الوثائق وبيانات الدخول التي نستلمها عند التسليم؟",
            "من يدعم الحل بعد التشغيل؟",
          ],
        },
        { h2: "كيف يساعدك بيت الأفكار" },
        {
          p: "بيت الأفكار شركة تقنية معلومات وتكامل أنظمة مقرها الدمام، تخدم المنشآت في جميع مناطق المملكة. نورّد الأجهزة والتراخيص حين يكون هذا كل ما تحتاجه، ونصمم الحلول المتكاملة ونركّبها وندعمها حين يتطلب المشروع ذلك. تعرّف على طريقة عملنا في صفحة «من نحن»، وعلى ما نقدمه في صفحة الخدمات.",
        },
      ],
    },
  },
  "how-to-choose-a-nas-for-business": {
    en: {
      summary: [
        "Start with the job the NAS will do: shared folders, a backup target, CCTV recordings or virtual machines. The job decides the number of drive bays, the drive type and the network speed you need.",
        "Size it for the next three to five years, not for today: add up your current data, expected growth and the capacity that RAID takes, and keep spare bays or an expansion option.",
        "A NAS is not a backup. Whatever model you buy, plan a second copy on another device or in the cloud, and keep the NAS off the open internet.",
      ],
      faq: [
        {
          q: "How many drive bays does a business NAS need?",
          a: "Work it out from capacity and protection rather than from the number of users. Four bays is a practical minimum for most offices, because it allows RAID 5 or RAID 6 and leaves room to use larger drives later. Choose more bays, or a model that accepts expansion units, if your data grows quickly or you store video and design files.",
        },
        {
          q: "Which RAID level should we use?",
          a: "According to QNAP's documentation, RAID 1 suits two-disk devices, RAID 5 tolerates one failed disk and balances protection, capacity and speed, RAID 6 tolerates two failed disks and is recommended for critical business data, and RAID 10 suits databases and other workloads that need fast random access. With large drives, RAID 6 is the safer choice.",
        },
        {
          q: "Do we still need a backup if the NAS has RAID and snapshots?",
          a: "Yes. RAID keeps the NAS running when a drive fails, and snapshots let you roll back recent changes, but both live on the same device. Fire, theft, a failed unit or ransomware can take all of them at once. Keep at least one more copy on another NAS, at another site or in the cloud.",
        },
      ],
      blocks: [
        {
          p: "A NAS (network-attached storage) looks like a simple purchase: a box, some drives and a network cable. In practice, two devices at a similar price can behave very differently once thirty people open files at the same time or the nightly backup starts. This guide walks through the decisions in the order they should be made, so the model you choose fits the work it will do. If you are still deciding between a NAS, a SAN and cloud storage, read our comparison of the three first.",
        },
        { h2: "1. Start with the job, not the model" },
        {
          p: "Write down what the NAS will be used for. Most business devices do one or more of these jobs, and each one pulls the specification in a different direction:",
        },
        {
          ul: [
            "Shared folders for staff: needs good permissions, integration with your user directory and enough network speed for the number of users.",
            "Backup target for servers, PCs or Microsoft 365: needs capacity above all, plus snapshots and a way to copy backups offsite.",
            "CCTV recordings: needs large, continuous-write capacity and a clear retention period in days.",
            "Virtual machines or applications on the NAS: needs a stronger processor, more memory and usually SSDs.",
          ],
        },
        { h2: "2. Work out capacity and the number of bays" },
        {
          p: "Add up the data you have today, then add the growth you expect over the next three to five years. Then account for RAID: in RAID 5 the capacity of one disk goes to parity, and in RAID 6 the capacity of two disks. Four equal drives in RAID 5 therefore give you the usable space of three, and in RAID 6 the space of two. Snapshots also need free space, so do not plan to fill the volume.",
        },
        {
          p: "Buy more bays than you need on day one. Empty bays, or support for expansion units, are the cheapest way to grow later. A NAS that is full after eighteen months usually ends up being replaced rather than expanded.",
        },
        { h2: "3. Choose the RAID level" },
        {
          ul: [
            "RAID 1: two disks holding identical copies; tolerates one failed disk. Suitable for two-bay devices.",
            "RAID 5: three or more disks; tolerates one failed disk. A good balance between protection, capacity and speed.",
            "RAID 6: four or more disks; tolerates two failed disks. Recommended for critical business data, and the safer choice with large drives because rebuilding a failed drive takes a long time.",
            "RAID 10: four or more disks in pairs; tolerates one failed disk per pair. Suits databases and workloads with heavy random access.",
          ],
        },
        { h2: "4. Pick the drives: hard disks or SSDs" },
        {
          p: "Hard disks cost less per terabyte and suit archives, backups and CCTV. SSDs are much faster and suit active workloads such as virtual machines, databases and many users working on the same project files. Many organizations combine the two. Whichever you choose, use drives designed for NAS or enterprise use, buy them with the device, and check the vendor's compatibility list before ordering; QNAP, for example, publishes a searchable list of drives it has tested with each model.",
        },
        { h2: "5. Match the processor, memory and network" },
        {
          p: "For plain file sharing, the network is usually the bottleneck before the processor is. A 1 GbE port is enough for a small office working on documents. Teams that open large drawings, video or scan archives should look for 2.5 GbE or 10 GbE ports, or a slot to add them, and make sure the switch and cabling can carry that speed. Memory and processor matter more when the NAS runs applications, virtual machines, encryption or deduplication.",
        },
        { h2: "6. Check the operating system and data protection features" },
        {
          p: "The software matters as much as the hardware. Look for snapshots, integration with Active Directory or Microsoft Entra ID, detailed folder permissions, and built-in backup tools. On QNAP devices there is also a choice of operating system: QTS uses the ext4 file system, while QuTS hero is based on ZFS, which checksums data blocks and can repair silent corruption when the RAID has redundancy. QNAP states that QuTS hero needs a NAS with at least 8 GB of memory, and at least 16 GB for inline deduplication, and that switching between the two systems means re-initializing the NAS. Decide before you load your data.",
        },
        { h2: "7. Plan power and placement" },
        {
          p: "Tower models suit an office or branch without a rack; rackmount models belong in a server room or cabinet with proper cooling. For a NAS that the business depends on, consider a model with redundant power supplies, and connect any NAS to a UPS so that a power cut leads to a clean shutdown instead of a damaged volume.",
        },
        { h2: "8. Secure it from day one" },
        {
          p: "NAS devices exposed to the internet are a regular target for ransomware. QNAP's own security guidance comes down to a short list:",
        },
        {
          ul: [
            "Do not expose the NAS to the internet: disable port forwarding and UPnP on the router.",
            "Use a VPN for remote access instead of open ports.",
            "Keep the firmware and apps up to date.",
            "Change the default administrator password, use strong passwords and remove accounts you do not need.",
            "Turn on a snapshot schedule and back up regularly.",
          ],
        },
        { h2: "9. Plan the backup before you buy" },
        {
          p: "Decide where the second copy will live and include it in the budget. Common choices are a second NAS at another site, cloud object storage, or both, following the 3-2-1 rule: three copies, on two types of media, with one offsite. Most business NAS systems include a tool for this; QNAP's Hybrid Backup Sync, for instance, backs up and syncs data to local storage, remote servers and cloud services. Test a restore after setup, and again on a schedule.",
        },
        { h2: "Pre-purchase checklist" },
        {
          ul: [
            "What will the NAS be used for, and by how many users at once?",
            "How much data today, and how much in three to five years?",
            "Which RAID level, and what usable capacity does it leave?",
            "Hard disks, SSDs or both, and are they on the compatibility list?",
            "Which network speed, and can the switch and cabling carry it?",
            "Which operating system and file system?",
            "Tower or rack, single or redundant power, and is there a UPS?",
            "Where does the second copy go, and who tests restores?",
            "What warranty covers the device and the drives, and who supports it?",
          ],
        },
        { h2: "How Thoughts House can help" },
        {
          p: "Thoughts House supplies QNAP NAS systems and drives to organizations across Saudi Arabia, as supply only or with installation and configuration. Our projects include supplying QNAP storage with SSDs equal to 600 TB for a Saudi cement company. We help you size the device, choose the drives and RAID level, and plan the backup copy with it. See our QNAP page for the systems we supply and our cloud backup service for the offsite copy. We are based in Dammam and serve all regions of the Kingdom.",
        },
      ],
      sources: [
        {
          label: "QNAP — RAID types (QTS documentation)",
          url: "https://docs.qnap.com/operating-system/qts/5.1.x/en-us/raid-types-0DFE381A.html",
        },
        {
          label: "QNAP — QuTS hero operating system",
          url: "https://www.qnap.com/en-us/operating-system/quts-hero",
        },
        {
          label: "QNAP — Best practices for enhancing NAS security",
          url: "https://www.qnap.com/en/how-to/faq/article/what-is-the-best-practice-for-enhancing-nas-security",
        },
        {
          label: "QNAP — Compatibility list",
          url: "https://www.qnap.com/en/compatibility/",
        },
        {
          label: "QNAP — Hybrid Backup Sync",
          url: "https://www.qnap.com/en/software/hybrid-backup-sync",
        },
      ],
    },
    ar: {
      summary: [
        "ابدأ من المهمة التي سيؤديها الجهاز: مجلدات مشتركة، أم وجهة للنسخ الاحتياطي، أم تسجيلات كاميرات، أم أجهزة افتراضية. فالمهمة هي التي تحدد عدد فتحات الأقراص ونوعها وسرعة الشبكة المطلوبة.",
        "احسب السعة لثلاث إلى خمس سنوات قادمة لا لليوم فقط: بياناتك الحالية، والنمو المتوقع، وما يقتطعه RAID من السعة، واترك فتحات فارغة أو إمكانية للتوسعة.",
        "جهاز NAS ليس نسخة احتياطية. أياً كان الطراز الذي تشتريه، خطط لنسخة ثانية على جهاز آخر أو في السحابة، ولا تجعل الجهاز مكشوفاً على الإنترنت.",
      ],
      faq: [
        {
          q: "كم فتحة أقراص يحتاج جهاز NAS للشركات؟",
          a: "احسبها من السعة ومستوى الحماية لا من عدد المستخدمين. أربع فتحات حد أدنى عملي لأغلب المكاتب، لأنها تتيح RAID 5 أو RAID 6 وتترك مجالاً لأقراص أكبر لاحقاً. واختر عدداً أكبر، أو طرازاً يقبل وحدات توسعة، إذا كانت بياناتك تنمو بسرعة أو كنت تخزّن ملفات فيديو وتصميم.",
        },
        {
          q: "أي مستوى RAID نستخدم؟",
          a: "بحسب وثائق QNAP: يناسب RAID 1 الأجهزة ذات القرصين، ويتحمل RAID 5 تعطل قرص واحد ويوازن بين الحماية والسعة والسرعة، ويتحمل RAID 6 تعطل قرصين ويُنصح به لبيانات الأعمال المهمة، ويناسب RAID 10 قواعد البيانات والأعمال التي تحتاج وصولاً عشوائياً سريعاً. ومع الأقراص الكبيرة يكون RAID 6 الخيار الأكثر أماناً.",
        },
        {
          q: "هل نحتاج نسخاً احتياطياً إذا كان في الجهاز RAID ولقطات؟",
          a: "نعم. يُبقي RAID الجهاز عاملاً عند تعطل قرص، وتتيح اللقطات التراجع عن التغييرات الأخيرة، لكن كليهما على الجهاز نفسه. وقد يذهب بها جميعاً حريق أو سرقة أو عطل في الجهاز أو هجوم فدية. لذلك احتفظ بنسخة أخرى على الأقل على جهاز NAS آخر أو في موقع آخر أو في السحابة.",
        },
      ],
      blocks: [
        {
          p: "يبدو شراء جهاز NAS (التخزين المتصل بالشبكة) أمراً بسيطاً: جهاز وبعض الأقراص وكابل شبكة. لكن جهازين متقاربين في السعر قد يختلف أداؤهما كثيراً حين يفتح ثلاثون موظفاً ملفاتهم في وقت واحد، أو حين يبدأ النسخ الاحتياطي الليلي. يرتّب هذا الدليل القرارات بالتسلسل الذي ينبغي اتخاذها به، حتى يناسب الطراز الذي تختاره العمل المطلوب منه. وإذا كنت ما زلت تقارن بين NAS وSAN والتخزين السحابي، فابدأ بمقالنا الذي يقارن بين الثلاثة.",
        },
        { h2: "1. ابدأ من المهمة لا من الطراز" },
        {
          p: "اكتب ما الذي سيُستخدم الجهاز من أجله. أغلب أجهزة الشركات تؤدي مهمة أو أكثر مما يلي، ولكل مهمة أثرها في المواصفات:",
        },
        {
          ul: [
            "مجلدات مشتركة للموظفين: تحتاج صلاحيات دقيقة وربطاً بدليل المستخدمين وسرعة شبكة تناسب عددهم.",
            "وجهة للنسخ الاحتياطي للسيرفرات أو الأجهزة أو Microsoft 365: تحتاج السعة قبل كل شيء، ثم اللقطات ووسيلة لنقل النسخ خارج الموقع.",
            "تسجيلات كاميرات المراقبة: تحتاج سعة كبيرة للكتابة المستمرة ومدة احتفاظ محددة بالأيام.",
            "تشغيل أجهزة افتراضية أو تطبيقات على الجهاز: يحتاج معالجاً أقوى وذاكرة أكبر وأقراص SSD في الغالب.",
          ],
        },
        { h2: "2. احسب السعة وعدد الفتحات" },
        {
          p: "اجمع حجم بياناتك اليوم، وأضف إليه النمو المتوقع خلال ثلاث إلى خمس سنوات، ثم احسب ما يقتطعه RAID: ففي RAID 5 تذهب سعة قرص واحد للحماية، وفي RAID 6 سعة قرصين. أي أن أربعة أقراص متساوية تعطيك في RAID 5 سعة ثلاثة أقراص، وفي RAID 6 سعة قرصين. واللقطات أيضاً تحتاج مساحة فارغة، فلا تخطط لملء وحدة التخزين بالكامل.",
        },
        {
          p: "واشترِ فتحات أكثر مما تحتاجه في اليوم الأول. فالفتحات الفارغة، أو دعم وحدات التوسعة، أقل طرق التوسع تكلفة لاحقاً. والجهاز الذي يمتلئ بعد سنة ونصف يُستبدل في العادة ولا يُوسَّع.",
        },
        { h2: "3. اختر مستوى RAID" },
        {
          ul: [
            "RAID 1: قرصان يحملان نسختين متطابقتين، ويتحمل تعطل قرص واحد. يناسب الأجهزة ذات الفتحتين.",
            "RAID 5: ثلاثة أقراص أو أكثر، ويتحمل تعطل قرص واحد. توازن جيد بين الحماية والسعة والسرعة.",
            "RAID 6: أربعة أقراص أو أكثر، ويتحمل تعطل قرصين. يُنصح به لبيانات الأعمال المهمة، وهو الأكثر أماناً مع الأقراص الكبيرة لأن إعادة بناء القرص المتعطل تستغرق وقتاً طويلاً.",
            "RAID 10: أربعة أقراص أو أكثر في أزواج، ويتحمل تعطل قرص واحد من كل زوج. يناسب قواعد البيانات والأعمال كثيفة الوصول العشوائي.",
          ],
        },
        { h2: "4. اختر الأقراص: صلبة أم SSD" },
        {
          p: "الأقراص الصلبة أقل تكلفة لكل تيرابايت وتناسب الأرشيف والنسخ الاحتياطي وتسجيلات الكاميرات. وأقراص SSD أسرع بكثير وتناسب الأعمال النشطة، مثل الأجهزة الافتراضية وقواعد البيانات وفرق العمل التي تفتح ملفات المشروع نفسه معاً. وتجمع منشآت كثيرة بين النوعين. وفي الحالتين استخدم أقراصاً مخصصة لأجهزة NAS أو للمؤسسات، واشترها مع الجهاز، وراجع قائمة التوافق لدى الشركة المصنّعة قبل الطلب؛ فشركة QNAP مثلاً تنشر قائمة قابلة للبحث بالأقراص التي اختبرتها مع كل طراز.",
        },
        { h2: "5. المعالج والذاكرة وسرعة الشبكة" },
        {
          p: "في مشاركة الملفات العادية تكون الشبكة هي نقطة الاختناق قبل المعالج. ومنفذ 1 جيجابت يكفي مكتباً صغيراً يعمل على المستندات. أما الفرق التي تفتح مخططات كبيرة أو فيديو أو أرشيفاً ممسوحاً ضوئياً، فالأنسب لها منافذ 2.5 أو 10 جيجابت، أو فتحة لإضافتها، مع التأكد من أن السويتش والتمديدات تتحمل هذه السرعة. وتزداد أهمية الذاكرة والمعالج حين يشغّل الجهاز تطبيقات أو أجهزة افتراضية أو تشفيراً أو إزالة للبيانات المكررة.",
        },
        { h2: "6. نظام التشغيل ومزايا حماية البيانات" },
        {
          p: "البرمجيات لا تقل أهمية عن العتاد. ابحث عن اللقطات، والتكامل مع Active Directory أو Microsoft Entra ID، وصلاحيات تفصيلية للمجلدات، وأدوات نسخ احتياطي مدمجة. وفي أجهزة QNAP يوجد خيار إضافي هو نظام التشغيل: فنظام QTS يستخدم نظام الملفات ext4، ونظام QuTS hero مبني على ZFS الذي يتحقق من سلامة كتل البيانات ويصلح التلف الصامت عند وجود حماية RAID. وتذكر QNAP أن QuTS hero يحتاج جهازاً بذاكرة 8 جيجابايت على الأقل، و16 جيجابايت على الأقل لإزالة البيانات المكررة، وأن التحويل بين النظامين يتطلب إعادة تهيئة الجهاز. لذلك احسم الاختيار قبل نقل بياناتك إليه.",
        },
        { h2: "7. الكهرباء ومكان الجهاز" },
        {
          p: "الطرازات المكتبية تناسب مكتباً أو فرعاً بلا خزانة شبكات، وطرازات الرف مكانها غرفة السيرفرات أو خزانة بتبريد مناسب. وإذا كان العمل يعتمد على الجهاز، ففكّر في طراز بمزوّدَي طاقة، ووصّل أي جهاز NAS بمزوّد طاقة غير منقطعة (UPS) حتى ينتهي انقطاع الكهرباء بإيقاف تشغيل سليم لا بتلف وحدة التخزين.",
        },
        { h2: "8. أمّنه من اليوم الأول" },
        {
          p: "أجهزة NAS المكشوفة على الإنترنت هدف متكرر لبرامج الفدية. وتتلخص إرشادات QNAP الأمنية في قائمة قصيرة:",
        },
        {
          ul: [
            "لا تكشف الجهاز على الإنترنت: عطّل توجيه المنافذ (Port Forwarding) وخاصية UPnP في الراوتر.",
            "استخدم VPN للوصول عن بُعد بدلاً من فتح المنافذ.",
            "حدّث نظام الجهاز وتطبيقاته باستمرار.",
            "غيّر كلمة مرور المدير الافتراضية، واستخدم كلمات مرور قوية، واحذف الحسابات التي لا تحتاجها.",
            "فعّل جدولاً للقطات، وانسخ بياناتك احتياطياً بانتظام.",
          ],
        },
        { h2: "9. خطط للنسخ الاحتياطي قبل الشراء" },
        {
          p: "حدد أين ستكون النسخة الثانية وأدخلها في الميزانية. والخيارات المعتادة: جهاز NAS ثانٍ في موقع آخر، أو تخزين سحابي، أو كلاهما، وفق قاعدة 3-2-1: ثلاث نسخ، على نوعين من الوسائط، وإحداها خارج الموقع. وأغلب أجهزة NAS للشركات تتضمن أداة لذلك؛ فأداة Hybrid Backup Sync من QNAP مثلاً تنسخ البيانات وتزامنها مع التخزين المحلي والسيرفرات البعيدة والخدمات السحابية. واختبر الاستعادة بعد الإعداد، ثم بشكل دوري.",
        },
        { h2: "قائمة قبل الشراء" },
        {
          ul: [
            "ما المهمة التي سيؤديها الجهاز، وكم مستخدماً سيعمل عليه في وقت واحد؟",
            "كم حجم البيانات اليوم، وكم سيصبح خلال ثلاث إلى خمس سنوات؟",
            "أي مستوى RAID، وكم يبقى من السعة الفعلية بعده؟",
            "أقراص صلبة أم SSD أم كلاهما، وهل هي ضمن قائمة التوافق؟",
            "ما سرعة الشبكة المطلوبة، وهل يتحملها السويتش والتمديدات؟",
            "أي نظام تشغيل وأي نظام ملفات؟",
            "مكتبي أم للرف، بمزوّد طاقة واحد أم اثنين، وهل يوجد UPS؟",
            "أين ستُحفظ النسخة الثانية، ومن يختبر الاستعادة؟",
            "ما الضمان الذي يغطي الجهاز والأقراص، ومن يدعمه؟",
          ],
        },
        { h2: "كيف يساعدك بيت الأفكار" },
        {
          p: "يورّد بيت الأفكار أجهزة QNAP NAS والأقراص للمنشآت في جميع مناطق المملكة، توريداً فقط أو مع التركيب والإعداد. ومن مشاريعنا توريد أجهزة تخزين QNAP مع أقراص SSD بسعة تعادل 600 تيرابايت لشركة إسمنت سعودية. نساعدك على تحديد حجم الجهاز واختيار الأقراص ومستوى RAID، وعلى التخطيط للنسخة الاحتياطية معه. تجد الأجهزة التي نورّدها في صفحة QNAP، وحل النسخة خارج الموقع في خدمة النسخ الاحتياطي السحابي. مقرنا في الدمام، ونخدم جميع مناطق المملكة.",
        },
      ],
      sources: [
        {
          label: "QNAP — أنواع RAID (وثائق نظام QTS)",
          url: "https://docs.qnap.com/operating-system/qts/5.1.x/en-us/raid-types-0DFE381A.html",
        },
        {
          label: "QNAP — نظام التشغيل QuTS hero",
          url: "https://www.qnap.com/en-us/operating-system/quts-hero",
        },
        {
          label: "QNAP — أفضل الممارسات لتعزيز أمان أجهزة NAS",
          url: "https://www.qnap.com/en/how-to/faq/article/what-is-the-best-practice-for-enhancing-nas-security",
        },
        {
          label: "QNAP — قائمة التوافق",
          url: "https://www.qnap.com/en/compatibility/",
        },
        {
          label: "QNAP — Hybrid Backup Sync",
          url: "https://www.qnap.com/en/software/hybrid-backup-sync",
        },
      ],
    },
  },
  "structured-cabling-new-office": {
    en: {
      summary: [
        "Bring the cabling designer in at the layout stage, before ceilings and partitions close: outlet positions, the network room and cable routes are cheap to change on a drawing and expensive to change on site.",
        "Plan every outlet from the floor plan, not from the headcount: desks, printers, access points, cameras, access control, meeting-room screens and spare points, with each permanent link kept within 90 m of the rack.",
        "Do not accept the work until every link is labeled, certified with a cable tester and documented. The test reports and as-built drawings are what you are paying for as much as the cable.",
      ],
      faq: [
        {
          q: "How many network points does each desk need?",
          a: "Many offices install two data points per workstation, so a phone, a docking station or a second device can be connected without adding cable later. Add separate points for printers, wireless access points, cameras, door controllers and meeting-room equipment, and keep around 10 to 20 percent spare capacity on the patch panels and switches.",
        },
        {
          q: "What is the maximum length of a network cable run?",
          a: "Under the TIA and ISO cabling standards, a twisted-pair channel can be up to 100 m from one active device to another, including patch cords. The fixed part, the permanent link from the patch panel to the wall outlet, is limited to 90 m. If some outlets would be further than that, plan a second network cabinet connected to the main rack by fiber.",
        },
        {
          q: "Should the electrical contractor install the network cabling?",
          a: "The electrical contractor can install containment such as trays and conduit, but the data cabling itself is best done by a team that terminates, labels and certifies to the cabling standards and to the component manufacturer's warranty requirements. Whoever installs it, ask for certification test reports for every link before you sign off.",
        },
        {
          q: "Do we still need cabling if we plan to use Wi-Fi?",
          a: "Yes. Wi-Fi access points are themselves connected and powered through network cables, and fixed devices such as printers, cameras, IP phones and desktop computers work more reliably on a cable. Good Wi-Fi depends on good cabling behind it.",
        },
      ],
      blocks: [
        {
          p: "Moving into a new office is the best chance you will get to build the network properly. Once the ceilings, partitions and furniture are in, every extra cable means opening tiles, drilling walls and working around staff. The cabling will also outlive several generations of switches, computers and access points, so mistakes made now stay with the business for years. This guide walks through structured cabling for a new office in the order the work should happen, from the first floor plan to the handover documents.",
        },
        { h2: "1. Start at the design stage, not after the fit-out" },
        {
          p: "Ask for a cabling design as soon as there is a furniture layout. The designer needs the floor plan, the planned positions of desks, meeting rooms and reception, and a rough idea of the systems that will run on the network. At this stage, moving an outlet or the network room costs nothing more than a revised drawing. Coordinate the cabling programme with the fit-out contractor so that containment goes in before the ceilings close, and cabling is pulled before the final finishes.",
        },
        { h2: "2. Count the outlets from the floor plan" },
        {
          p: "Headcount is a poor guide. Walk through the plan room by room and list every device that needs a cable:",
        },
        {
          ul: [
            "Workstations: many offices fit two data points per desk, so a second device never needs a new cable.",
            "Wireless access points: one point per planned access point position, usually in the ceiling. A Wi-Fi survey or predictive design tells you where they go.",
            "CCTV cameras, door access controllers and intercoms, usually powered over the cable (PoE).",
            "Printers, meeting-room screens, video conferencing systems and digital signage.",
            "Reception, the server or communications room, and any space you expect to convert later.",
            "Spare capacity: around 10 to 20 percent extra on the patch panels, and spare cables to areas likely to change.",
          ],
        },
        { h2: "3. Choose the cable and the components" },
        {
          p: "For horizontal cabling to desks and devices, the choice is usually between Category 6 and Category 6A. Category 6 supports 1 Gbps to the full distance and suits desks and phones. Category 6A supports 10 Gbps over the full 100 m channel and handles higher PoE power better, which matters for Wi-Fi 6E and Wi-Fi 7 access points and PTZ cameras. Our Cat6 vs Cat6A article explains the trade-off in detail. For power delivery over cabling, the latest TIA copper cabling standard, ANSI/TIA-568.2-E published in 2024, recommends Category 6A or higher.",
        },
        {
          p: "Use fiber for the backbone between floors, between buildings and between network cabinets, and wherever a run would exceed the copper distance limit. Check whether the building owner or consultant specifies a fire-performance rating for the cable jacket, such as low-smoke zero-halogen (LSZH). Finally, buy cable, jacks, patch panels and patch cords from one manufacturer's system. Mixing brands makes warranty claims difficult, and many manufacturers only offer an extended system warranty when the installation is certified with their components.",
        },
        { h2: "4. Plan the network room and the racks" },
        {
          p: "The network room, or a cabinet in smaller offices, is the heart of the installation. Place it as centrally as possible so that every outlet stays within the 90 m permanent link limit; if the floor is too large, add a second cabinet linked to the main one by fiber. Then plan the room itself:",
        },
        {
          ul: [
            "Size: a rack with room for patch panels, switches, the firewall, a NAS or server, cable management and future growth. Leave free rack units on day one.",
            "Power: dedicated circuits and a UPS sized for the switches, especially PoE switches that power access points and cameras.",
            "Cooling: switches and servers produce heat around the clock, so plan ventilation or air conditioning that runs when the office is closed.",
            "Earthing and bonding of racks and cable trays, coordinated with the electrical contractor.",
            "Security: a lockable room or cabinet, away from water pipes, and not shared with cleaning stores.",
          ],
        },
        { h2: "5. Design the cable pathways" },
        {
          p: "Cables need a defined route from the rack to every outlet: cable trays or baskets above the ceiling, conduit inside walls, floor boxes or raised-floor routes for desks in open areas. Size the trays for the cables you install now plus future additions, because overfilled trays crush cables and make changes difficult. Keep data cables separated from power cables and away from sources of interference such as lighting ballasts and motors, following the separation guidance in the cabling standards and from the manufacturer. Where cables pass through fire-rated walls or floors, the openings must be fire-stopped again after installation.",
        },
        { h2: "6. Install to the standard" },
        {
          p: "Good installation practice is what turns quality components into a reliable link. Ask the installer to follow these basics:",
        },
        {
          ul: [
            "Pull cables without exceeding the manufacturer's pulling tension or minimum bend radius.",
            "Use hook-and-loop straps instead of tight plastic ties, and avoid tightly combed bundles. TIA-568.2-E advises smaller, looser bundles where cables carry PoE, to limit heat build-up.",
            "Terminate every link to the same wiring scheme, T568A or T568B, at both ends.",
            "Leave a neat service loop at the rack and the outlet for future re-termination.",
            "Dress cables into the rack with proper cable management, so patching stays tidy for years.",
          ],
        },
        { h2: "7. Label everything and document it" },
        {
          p: "Every outlet, patch panel port, cable and rack should carry a label, and the same identifier should appear on the drawings and in the test reports. The TIA-606 administration standard provides a common labeling scheme many installers follow. With consistent labels, your IT team or support provider can trace a fault in minutes instead of hours.",
        },
        { h2: "8. Certify every link with a cable tester" },
        {
          p: "A simple continuity tester only shows that the wires are connected. Certification testing measures each link against the performance limits of its category. Fluke Networks recommends testing the permanent link, the fixed cabling from patch panel to outlet, rather than the channel, because high-quality patch cords can make a channel pass even when the fixed cabling underneath has failed. Before work starts, agree in writing:",
        },
        {
          ul: [
            "The test limit to be used, which follows the project specification and the manufacturer's warranty requirements.",
            "Whether marginal passes are acceptable; under the standards a marginal pass still counts as a pass.",
            "That full results, including plot data, are saved and handed over for every link.",
            "For Category 6A, how alien crosstalk testing will be handled, if 10 Gbps is required.",
            "For fiber, that every connector is inspected and cleaned before final connection and that loss is tested on every link.",
          ],
        },
        { h2: "9. Handover: what you should receive" },
        {
          ul: [
            "Certification test reports for every copper and fiber link.",
            "As-built drawings showing the final outlet positions, identifiers and cable routes.",
            "A labeling schedule that matches the drawings and the reports.",
            "The manufacturer's system warranty registration, where offered.",
            "A clean, dressed rack, with patch cords of suitable lengths and a few spare outlets and cords.",
          ],
        },
        { h2: "Quick checklist for a new office" },
        {
          ul: [
            "Cabling design agreed before the ceilings close?",
            "Outlet schedule covers desks, access points, cameras, access control, printers, screens and spares?",
            "Cable category chosen, and fiber planned for the backbone?",
            "Network room central, cooled, powered with a UPS, earthed and lockable?",
            "Every permanent link within 90 m?",
            "Trays sized for growth and separated from power?",
            "One manufacturer's system, with a warranty?",
            "Test limits and handover documents agreed in writing?",
          ],
        },
        { h2: "How Thoughts House can help" },
        {
          p: "Thoughts House designs and installs structured cabling for offices, warehouses and data rooms across Saudi Arabia: Category 6 and 6A copper, fiber backbones, racks and patch panels, with labeling, certification testing and as-built documentation. We work alongside your fit-out contractor from the layout stage, and can also supply and configure the switches, firewall and Wi-Fi that run on the cabling. We are based in Dammam, Saudi Arabia, and work on-site by appointment. Contact sales@thoughtshouse.com or +966 54 102 2995 to plan your new office.",
        },
      ],
      sources: [
        {
          label: "TIA — ANSI/TIA-568.2-E and ANSI/TIA-568.5-1 published",
          url: "https://tiaonline.org/?p=36976",
        },
        {
          label: "Siemon — ANSI/TIA-568.2-E released: key changes",
          url: "https://www.siemon.com/en/ansi-tia-568-2-e-released/",
        },
        {
          label:
            "ISO — ISO/IEC 11801-1:2017 Generic cabling for customer premises",
          url: "https://www.iso.org/standard/66182.html",
        },
        {
          label: "Fluke Networks — Channel, permanent link and patch cords",
          url: "https://www.flukenetworks.com/blog/cabling-chronicles/channel-permanent-link-patch-cords-mptl-e2e-oh-my",
        },
        {
          label: "Fluke Networks — Top 10 cable testing mistakes",
          url: "https://www.flukenetworks.com/blog/cabling-chronicles/top-10-cable-testing-mistakes",
        },
      ],
    },
    ar: {
      summary: [
        "أشرك مصمم التمديدات في مرحلة المخطط، قبل إغلاق الأسقف وتركيب القواطع: فتغيير موقع منفذ أو غرفة الشبكة أو مسار الكابلات على الورق لا يكلف شيئاً، أما في الموقع فيكلف كثيراً.",
        "خطط للمنافذ من المخطط لا من عدد الموظفين: المكاتب والطابعات ونقاط الوصول والكاميرات وأنظمة الدخول وشاشات الاجتماعات والمنافذ الاحتياطية، مع بقاء كل وصلة ثابتة ضمن 90 متراً من الخزانة.",
        "لا تستلم العمل قبل أن تكون كل وصلة مرقّمة ومختبرة بجهاز اعتماد وموثقة. فتقارير الاختبار والمخططات النهائية جزء أساسي مما تدفع ثمنه، لا يقل أهمية عن الكابل نفسه.",
      ],
      faq: [
        {
          q: "كم منفذ شبكة يحتاج كل مكتب؟",
          a: "تركّب كثير من الشركات منفذين لكل محطة عمل، حتى يمكن توصيل هاتف أو قاعدة توصيل أو جهاز ثانٍ دون تمديد جديد لاحقاً. وأضف منافذ مستقلة للطابعات ونقاط الوصول اللاسلكية والكاميرات وأجهزة التحكم بالأبواب ومعدات قاعات الاجتماعات، واترك سعة احتياطية في حدود 10 إلى 20 بالمئة في لوحات التوصيل والسويتشات.",
        },
        {
          q: "ما أقصى طول لتمديد كابل الشبكة؟",
          a: "وفق معايير TIA وISO، يصل طول القناة النحاسية إلى 100 متر من جهاز نشط إلى آخر بما فيها أسلاك التوصيل. أما الجزء الثابت، أي الوصلة الدائمة من لوحة التوصيل إلى منفذ الجدار، فحدّه 90 متراً. وإذا كانت بعض المنافذ أبعد من ذلك، فخطط لخزانة شبكة ثانية تتصل بالخزانة الرئيسية بالألياف الضوئية.",
        },
        {
          q: "هل يمكن أن يتولى مقاول الكهرباء تمديدات الشبكة؟",
          a: "يمكن لمقاول الكهرباء تركيب المسارات مثل حوامل الكابلات والأنابيب، لكن الأفضل أن يتولى كابلات البيانات نفسها فريق يوصّل ويرقّم ويختبر وفق معايير التمديدات ومتطلبات ضمان الشركة المصنّعة. وأياً كان المنفذ، اطلب تقارير اختبار الاعتماد لكل وصلة قبل التوقيع على الاستلام.",
        },
        {
          q: "هل نحتاج إلى تمديدات إذا كنا سنعتمد على Wi-Fi؟",
          a: "نعم. فنقاط الوصول اللاسلكية نفسها تتصل بالشبكة وتُغذّى بالطاقة عبر كابلات الشبكة، والأجهزة الثابتة مثل الطابعات والكاميرات وهواتف IP والحواسيب المكتبية تعمل بثبات أكبر على الكابل. فجودة شبكة Wi-Fi تعتمد على جودة التمديدات التي خلفها.",
        },
      ],
      blocks: [
        {
          p: "الانتقال إلى مكتب جديد هو أفضل فرصة لبناء الشبكة بالشكل الصحيح. فبعد تركيب الأسقف والقواطع والأثاث، يصبح كل كابل إضافي مرهوناً بفتح بلاطات السقف وثقب الجدران والعمل وسط الموظفين. كما أن التمديدات تعيش أطول من عدة أجيال من السويتشات والحواسيب ونقاط الوصول، فما يُرتكب من أخطاء اليوم يبقى مع المنشأة سنوات. يشرح هذا الدليل تمديدات الشبكات (Structured Cabling) لمكتب جديد بالتسلسل الذي ينبغي أن يسير عليه العمل، من أول مخطط حتى مستندات التسليم.",
        },
        { h2: "1. ابدأ من مرحلة التصميم لا بعد التشطيب" },
        {
          p: "اطلب تصميم التمديدات بمجرد توفر مخطط توزيع الأثاث. يحتاج المصمم إلى مخطط الطابق، ومواقع المكاتب وقاعات الاجتماعات والاستقبال، وتصور مبدئي للأنظمة التي ستعمل على الشبكة. في هذه المرحلة لا يكلف نقل منفذ أو تغيير موقع غرفة الشبكة أكثر من تعديل المخطط. ونسّق جدول التمديدات مع مقاول التشطيب، بحيث تُركّب المسارات قبل إغلاق الأسقف، وتُسحب الكابلات قبل اللمسات النهائية.",
        },
        { h2: "2. احسب المنافذ من المخطط" },
        {
          p: "عدد الموظفين مؤشر ضعيف. مرّ على المخطط غرفة غرفة، واكتب كل جهاز يحتاج إلى كابل:",
        },
        {
          ul: [
            "محطات العمل: تركّب كثير من الشركات منفذين لكل مكتب، حتى لا يحتاج الجهاز الثاني إلى تمديد جديد.",
            "نقاط الوصول اللاسلكية: منفذ لكل موقع مخطط لنقطة وصول، وغالباً في السقف. ويحدد مسح Wi-Fi أو التصميم التنبؤي مواقعها.",
            "كاميرات المراقبة وأجهزة التحكم بالدخول والإنتركم، وتُغذّى غالباً بالطاقة عبر الكابل (PoE).",
            "الطابعات وشاشات قاعات الاجتماعات وأنظمة الاجتماعات المرئية والشاشات الإعلانية.",
            "الاستقبال وغرفة السيرفرات أو الاتصالات، وأي مساحة تتوقع تحويلها لاحقاً.",
            "السعة الاحتياطية: نحو 10 إلى 20 بالمئة إضافية في لوحات التوصيل، وكابلات احتياطية للمناطق المرشحة للتغيير.",
          ],
        },
        { h2: "3. اختر الكابل والمكونات" },
        {
          p: "في التمديدات الأفقية إلى المكاتب والأجهزة، يكون الاختيار عادةً بين Cat6 وCat6A. يدعم Cat6 سرعة 1 جيجابت على كامل المسافة ويناسب المكاتب والهواتف. ويدعم Cat6A سرعة 10 جيجابت على كامل قناة 100 متر ويتحمل طاقة PoE الأعلى بشكل أفضل، وهذا مهم لنقاط وصول Wi-Fi 6E وWi-Fi 7 وكاميرات PTZ. ويشرح مقالنا عن الفرق بين Cat6 وCat6A هذه المفاضلة بالتفصيل. وفيما يخص نقل الطاقة عبر الكابلات، يوصي أحدث معيار من TIA للكابلات النحاسية، وهو ANSI/TIA-568.2-E الصادر عام 2024، باستخدام Cat6A أو أعلى.",
        },
        {
          p: "واستخدم الألياف الضوئية للعمود الفقري بين الطوابق والمباني وخزائن الشبكة، وفي أي تمديد يتجاوز حد المسافة للكابل النحاسي. وتحقق مما إذا كان مالك المبنى أو الاستشاري يشترط تصنيفاً معيناً لغلاف الكابل من حيث مقاومة الحريق، مثل الكابلات منخفضة الدخان والخالية من الهالوجين (LSZH). وأخيراً، اشترِ الكابلات والمقابس ولوحات التوصيل وأسلاك التوصيل من نظام شركة مصنّعة واحدة؛ فخلط العلامات التجارية يصعّب مطالبات الضمان، وكثير من المصنّعين لا يمنحون ضماناً ممتداً للنظام إلا إذا اختُبر التركيب بمكوناتهم.",
        },
        { h2: "4. خطط لغرفة الشبكة والخزائن" },
        {
          p: "غرفة الشبكة، أو الخزانة في المكاتب الصغيرة، هي قلب التمديدات. ضعها في موقع متوسط قدر الإمكان حتى تبقى كل المنافذ ضمن حد الوصلة الدائمة البالغ 90 متراً، وإذا كان الطابق أكبر من ذلك فأضف خزانة ثانية تتصل بالرئيسية عبر الألياف الضوئية. ثم خطط للغرفة نفسها:",
        },
        {
          ul: [
            "الحجم: خزانة تتسع للوحات التوصيل والسويتشات والجدار الناري وجهاز NAS أو السيرفر وتنظيم الكابلات والتوسع المستقبلي، مع ترك وحدات فارغة من اليوم الأول.",
            "الكهرباء: دوائر مخصصة ومزوّد طاقة غير منقطعة (UPS) يناسب حمل السويتشات، خصوصاً سويتشات PoE التي تغذي نقاط الوصول والكاميرات.",
            "التبريد: السويتشات والسيرفرات تُصدر حرارة طوال اليوم، فخطط لتهوية أو تكييف يعمل حتى في أوقات إغلاق المكتب.",
            "التأريض والربط الكهربائي للخزائن وحوامل الكابلات، بالتنسيق مع مقاول الكهرباء.",
            "الأمان: غرفة أو خزانة تُقفل، بعيدة عن مواسير المياه، ولا تُستخدم مخزناً لمواد التنظيف.",
          ],
        },
        { h2: "5. صمّم مسارات الكابلات" },
        {
          p: "تحتاج الكابلات إلى مسار محدد من الخزانة إلى كل منفذ: حوامل أو سلال كابلات فوق السقف، وأنابيب داخل الجدران، وصناديق أرضية أو أرضيات مرتفعة للمكاتب في المساحات المفتوحة. احسب سعة الحوامل للكابلات الحالية والإضافات المستقبلية، لأن الحوامل المكتظة تضغط على الكابلات وتصعّب أي تعديل. وافصل كابلات البيانات عن كابلات الكهرباء، وأبعدها عن مصادر التداخل مثل محولات الإنارة والمحركات، وفق إرشادات الفصل في معايير التمديدات وتعليمات الشركة المصنّعة. وحيث تعبر الكابلات جدراناً أو أرضيات مقاومة للحريق، يجب إعادة إغلاق الفتحات بمواد عزل الحريق بعد التركيب.",
        },
        { h2: "6. نفّذ وفق المعايير" },
        {
          p: "حسن التنفيذ هو ما يحوّل المكونات الجيدة إلى وصلة موثوقة. اطلب من المنفذ الالتزام بهذه الأساسيات:",
        },
        {
          ul: [
            "سحب الكابلات دون تجاوز قوة الشد أو نصف قطر الانحناء الأدنى الذي تحدده الشركة المصنّعة.",
            "استخدام أربطة اللاصق (الفيلكرو) بدلاً من الأربطة البلاستيكية المشدودة، وتجنب الحزم المضغوطة. ويوصي معيار TIA-568.2-E بحزم أصغر وأقل إحكاماً للكابلات التي تنقل PoE للحد من تراكم الحرارة.",
            "توصيل كل الوصلات بنظام الأسلاك نفسه، T568A أو T568B، في الطرفين.",
            "ترك فائض مرتب من الكابل عند الخزانة والمنفذ لإعادة التوصيل مستقبلاً.",
            "ترتيب الكابلات داخل الخزانة بأدوات تنظيم مناسبة، حتى تبقى أسلاك التوصيل منظمة لسنوات.",
          ],
        },
        { h2: "7. رقّم كل شيء ووثّقه" },
        {
          p: "ينبغي أن يحمل كل منفذ ومنفذ في لوحة التوصيل وكل كابل وخزانة رقماً تعريفياً، وأن يظهر الرقم نفسه في المخططات وتقارير الاختبار. ويقدّم معيار الإدارة TIA-606 نظام ترقيم موحداً يتبعه كثير من المنفذين. ومع ترقيم متسق، يستطيع فريق تقنية المعلومات لديك أو مزوّد الدعم تتبع العطل في دقائق بدلاً من ساعات.",
        },
        { h2: "8. اختبر كل وصلة بجهاز اعتماد" },
        {
          p: "جهاز فحص التوصيل البسيط يبيّن فقط أن الأسلاك متصلة. أما اختبار الاعتماد (Certification) فيقيس أداء كل وصلة مقابل حدود فئتها. وتوصي Fluke Networks باختبار الوصلة الدائمة، أي التمديد الثابت من لوحة التوصيل إلى المنفذ، لا القناة الكاملة، لأن أسلاك التوصيل عالية الجودة قد تجعل القناة تنجح في الاختبار رغم فشل التمديد الثابت تحتها. وقبل بدء العمل، اتفق كتابياً على ما يلي:",
        },
        {
          ul: [
            "حد الاختبار المعتمد، وهو تابع لمواصفات المشروع ومتطلبات ضمان الشركة المصنّعة.",
            "هل تُقبل النتائج الهامشية أم لا؛ فالنجاح الهامشي يُعد نجاحاً وفق المعايير.",
            "حفظ النتائج الكاملة، بما فيها البيانات البيانية، وتسليمها لكل وصلة.",
            "في Cat6A، طريقة التعامل مع اختبار التداخل الخارجي (Alien Crosstalk) إذا كانت سرعة 10 جيجابت مطلوبة.",
            "في الألياف، فحص كل موصل وتنظيفه قبل التوصيل النهائي، واختبار الفقد في كل وصلة.",
          ],
        },
        { h2: "9. التسليم: ما الذي يجب أن تستلمه" },
        {
          ul: [
            "تقارير اختبار الاعتماد لكل وصلة نحاسية وضوئية.",
            "المخططات النهائية (As-built) بمواقع المنافذ وأرقامها ومسارات الكابلات كما نُفذت.",
            "جدول ترقيم يطابق المخططات والتقارير.",
            "تسجيل ضمان النظام لدى الشركة المصنّعة، إن كان متاحاً.",
            "خزانة نظيفة ومرتبة، مع أسلاك توصيل بأطوال مناسبة وعدد من المنافذ والأسلاك الاحتياطية.",
          ],
        },
        { h2: "قائمة مراجعة سريعة للمكتب الجديد" },
        {
          ul: [
            "هل اعتُمد تصميم التمديدات قبل إغلاق الأسقف؟",
            "هل يشمل جدول المنافذ المكاتب ونقاط الوصول والكاميرات وأنظمة الدخول والطابعات والشاشات والاحتياطي؟",
            "هل حُددت فئة الكابل، وخُطط للألياف في العمود الفقري؟",
            "هل غرفة الشبكة في موقع متوسط، ومبرّدة، وموصولة بـ UPS، ومؤرّضة، وتُقفل؟",
            "هل كل وصلة دائمة ضمن 90 متراً؟",
            "هل سعة الحوامل تكفي للتوسع، وهل هي مفصولة عن الكهرباء؟",
            "هل المكونات من نظام شركة مصنّعة واحدة، وبضمان؟",
            "هل اتُفق كتابياً على حدود الاختبار ومستندات التسليم؟",
          ],
        },
        { h2: "كيف يساعدك بيت الأفكار" },
        {
          p: "يصمم بيت الأفكار وينفذ تمديدات الشبكات للمكاتب والمستودعات وغرف البيانات في جميع مناطق المملكة: كابلات Cat6 وCat6A النحاسية، والعمود الفقري بالألياف الضوئية، والخزائن ولوحات التوصيل، مع الترقيم واختبارات الاعتماد والمخططات النهائية. نعمل مع مقاول التشطيب لديك من مرحلة المخطط، ويمكننا أيضاً توريد وإعداد السويتشات والجدار الناري وشبكة Wi-Fi التي تعمل على هذه التمديدات. مقرنا في الدمام، ونعمل في الموقع بموعد مسبق. تواصل معنا عبر sales@thoughtshouse.com أو على الرقم ⁦+966 54 102 2995⁩ للتخطيط لمكتبك الجديد.",
        },
      ],
      sources: [
        {
          label: "TIA — صدور معياري ANSI/TIA-568.2-E وANSI/TIA-568.5-1",
          url: "https://tiaonline.org/?p=36976",
        },
        {
          label: "Siemon — صدور ANSI/TIA-568.2-E وأبرز التغييرات",
          url: "https://www.siemon.com/en/ansi-tia-568-2-e-released/",
        },
        {
          label: "ISO — معيار ISO/IEC 11801-1:2017 للتمديدات العامة في المنشآت",
          url: "https://www.iso.org/standard/66182.html",
        },
        {
          label: "Fluke Networks — القناة والوصلة الدائمة وأسلاك التوصيل",
          url: "https://www.flukenetworks.com/blog/cabling-chronicles/channel-permanent-link-patch-cords-mptl-e2e-oh-my",
        },
        {
          label: "Fluke Networks — أشهر 10 أخطاء في اختبار الكابلات",
          url: "https://www.flukenetworks.com/blog/cabling-chronicles/top-10-cable-testing-mistakes",
        },
      ],
    },
  },
  "fortinet-vs-sophos-firewall": {
    en: {
      summary: [
        "Both Fortinet FortiGate and Sophos Firewall are mature next-generation firewalls; the better choice depends on your network, your team and what you already run.",
        "FortiGate suits multi-branch networks, SD-WAN and organizations that want firewalls, switches and Wi-Fi from one vendor in one management system.",
        "Sophos Firewall suits organizations that use or plan to use Sophos endpoint protection, because the firewall and endpoints share health status and can isolate an infected device automatically.",
        "Compare the two on throughput with threat protection and TLS inspection turned on, and on the total cost of hardware plus subscriptions over three to five years.",
      ],
      faq: [
        {
          q: "Is Fortinet better than Sophos?",
          a: "Neither is better for every business. FortiGate is often stronger for multi-site networks, SD-WAN and very high throughput. Sophos is often simpler for small and mid-sized teams, especially when Sophos endpoint protection is already in place. Size both on the same requirements before deciding.",
        },
        {
          q: "Do both firewalls need yearly subscriptions?",
          a: "Yes. Intrusion prevention, web filtering, malware protection and support are sold as subscriptions on top of the hardware. Fortinet sells them as FortiGuard bundles and Sophos mainly as the Xstream Protection bundle. Always compare the renewal cost, not only the first year.",
        },
        {
          q: "Can I manage several branches from one place?",
          a: "Yes, with both. Fortinet uses FortiManager, FortiAnalyzer or the FortiGate Cloud service. Sophos manages its firewalls from Sophos Central, the same cloud console used for its endpoint products.",
        },
        {
          q: "Can I move from one brand to the other later?",
          a: "Yes, but plan it as a project. Rules, VPNs, user groups and NAT need to be rebuilt and tested on the new firewall, usually with a short maintenance window for the cut-over.",
        },
      ],
      blocks: [
        {
          p: "Fortinet and Sophos are two of the firewall brands we are asked about most by businesses in Dammam and across Saudi Arabia. Both protect the edge of your network, inspect traffic for threats, filter websites and connect branches and remote staff over VPN. The differences are in how they are built, how they are licensed and what else they connect to. This guide compares them on the points that matter when you choose one.",
        },
        { h2: "The short answer" },
        {
          ul: [
            "Choose Fortinet FortiGate if you have several branches, need SD-WAN between sites, expect high traffic volumes, or want firewalls, switches and access points managed together.",
            "Choose Sophos Firewall if you are a small or mid-sized organization, already use Sophos Intercept X on your computers, or want the firewall and endpoint protection in one cloud console.",
            "If neither applies, size both models on your real requirements and compare total cost and the support you will get locally.",
          ],
        },
        { h2: "Performance and hardware" },
        {
          p: "FortiGate appliances use Fortinet's own security processors to accelerate firewall and VPN traffic, which is why they often show high throughput figures for their price class. Sophos XGS appliances also include a dedicated processor to offload trusted traffic. In both cases the headline throughput on the datasheet is not the number to size on. Use the throughput with threat protection, intrusion prevention and TLS inspection enabled, because that is how the firewall will actually run.",
        },
        {
          p: "Size for the next three to five years: your internet speed, the number of users and devices, the VPN users working remotely and any new branches you plan to open.",
        },
        { h2: "Licensing and subscriptions" },
        {
          p: "Both brands sell the hardware with security subscriptions that renew each year or for several years at once.",
        },
        {
          ul: [
            "Fortinet sells FortiGuard services individually or in bundles. Advanced Threat Protection (ATP) is the base bundle, Unified Threat Protection (UTP) adds web and DNS filtering, and Enterprise Protection (ENT) adds further services such as data loss prevention. Each bundle includes FortiCare support.",
            "Sophos sells the Xstream Protection bundle, which covers network protection, web protection and zero-day protection, with central management and reporting in Sophos Central included.",
          ],
        },
        {
          p: "Bundle contents change from time to time, so check the current contents with your supplier before you buy. Compare the renewal price for the same period on both quotations; the renewal is where most of the cost of a firewall sits over its life.",
        },
        { h2: "Management and branches" },
        {
          p: "Fortinet's strength is its Security Fabric: FortiGate firewalls, FortiSwitch switches and FortiAP access points can be managed from the firewall itself, and larger networks add FortiManager and FortiAnalyzer for central policy and logs. SD-WAN is built into FortiOS, which makes FortiGate a common choice for organizations with many branches.",
        },
        {
          p: "Sophos manages its firewalls, endpoint protection, email security and other products from one cloud console, Sophos Central. For a small IT team that looks after everything, one console for the firewall and the computers saves time.",
        },
        { h2: "Working with endpoint protection" },
        {
          p: "This is where Sophos stands out. With Synchronized Security, the firewall and Sophos Intercept X on each computer share a Security Heartbeat. When a computer reports an active threat, the firewall can automatically limit its network access until it is cleaned, so the infection does not spread to servers and shared folders.",
        },
        {
          p: "Fortinet offers similar integration within its own products, such as FortiClient and FortiEDR. If you already run another vendor's endpoint protection, this point matters less and the choice comes down to the network itself.",
        },
        { h2: "Questions to answer before you choose" },
        {
          ul: [
            "How many sites do you have, and do they need to connect to each other?",
            "What is your internet speed now, and what will it be in three years?",
            "How many staff work remotely over VPN?",
            "Which endpoint protection do you use on your computers?",
            "Who will manage the firewall day to day: your own team or a supplier?",
            "Do you need to show alignment with the NCA Essential Cybersecurity Controls?",
          ],
        },
        { h2: "How Thoughts House helps" },
        {
          p: "Thoughts House supplies, installs and supports both Fortinet and Sophos firewalls for organizations in Dammam, Al Khobar and across Saudi Arabia. We size the model on your real traffic, prepare comparable quotations for both brands when you want to compare, migrate your existing rules and VPNs, and support the firewall after installation.",
        },
      ],
      sources: [
        {
          label: "Fortinet — FortiGate security bundles",
          url: "https://www.fortinet.com/support/support-services/fortiguard-security-subscriptions/fortigate-security-bundles",
        },
        {
          label: "Sophos — How to buy Sophos Firewall",
          url: "https://www.sophos.com/en-us/products/next-gen-firewall/how-to-buy",
        },
        {
          label: "Sophos — Central management and reporting",
          url: "https://www.sophos.com/en-us/products/next-gen-firewall/ecosystem-central",
        },
      ],
    },
    ar: {
      summary: [
        "جدار FortiGate من Fortinet وجدار Sophos Firewall كلاهما ناضج وموثوق، والاختيار الأفضل يعتمد على شبكتك وفريقك وما تستخدمه حالياً.",
        "يناسب FortiGate الشبكات متعددة الفروع وربط الفروع (SD-WAN)، والمنشآت التي تريد جدار الحماية والسويتشات والـ Wi-Fi من مصنّع واحد وفي نظام إدارة واحد.",
        "يناسب Sophos المنشآت التي تستخدم أو تنوي استخدام حماية Sophos للأجهزة، لأن الجدار والأجهزة يتبادلان حالتها ويعزلان الجهاز المصاب تلقائياً.",
        "قارن بينهما على الأداء مع تشغيل الحماية وفحص الاتصالات المشفّرة، وعلى التكلفة الإجمالية للجهاز والاشتراكات خلال ثلاث إلى خمس سنوات.",
      ],
      faq: [
        {
          q: "هل Fortinet أفضل من Sophos؟",
          a: "لا يوجد أفضل لكل المنشآت. FortiGate غالباً أقوى للشبكات متعددة الفروع وربط الفروع والسرعات العالية جداً. وSophos غالباً أبسط للفرق الصغيرة والمتوسطة، خصوصاً مع وجود حماية Sophos على الأجهزة. حدّد مقاس الجهازين على المتطلبات نفسها قبل القرار.",
        },
        {
          q: "هل يحتاج الجداران إلى اشتراكات سنوية؟",
          a: "نعم. منع الاختراق، وتصفية المواقع، والحماية من البرمجيات الخبيثة، والدعم، كلها اشتراكات فوق سعر الجهاز. تبيعها Fortinet كحزم FortiGuard، وتبيعها Sophos غالباً كحزمة Xstream Protection. قارن دائماً تكلفة التجديد، لا السنة الأولى فقط.",
        },
        {
          q: "هل أستطيع إدارة عدة فروع من مكان واحد؟",
          a: "نعم في الحالتين. تستخدم Fortinet منصة FortiManager أو FortiAnalyzer أو خدمة FortiGate Cloud. وتدير Sophos جدرانها من Sophos Central، وهي اللوحة السحابية نفسها التي تدير بها حماية الأجهزة.",
        },
        {
          q: "هل أستطيع الانتقال من علامة إلى الأخرى لاحقاً؟",
          a: "نعم، لكن خطّط له كمشروع. تُعاد بناء القواعد والـ VPN ومجموعات المستخدمين والـ NAT على الجدار الجديد وتُختبر، وغالباً مع نافذة صيانة قصيرة وقت التحويل.",
        },
      ],
      blocks: [
        {
          p: "Fortinet وSophos من أكثر علامات جدران الحماية التي تسألنا عنها المنشآت في الدمام وبقية مناطق المملكة. كلاهما يحمي حدود شبكتك، ويفحص الاتصالات بحثاً عن التهديدات، ويصفّي المواقع، ويربط الفروع والموظفين عن بُعد عبر VPN. الفرق في طريقة البناء، وطريقة الترخيص، وما يتكامل معه كل منهما. يقارن هذا الدليل بينهما في النقاط التي تهمّك عند الاختيار.",
        },
        { h2: "الجواب المختصر" },
        {
          ul: [
            "اختر FortiGate من Fortinet إذا كان لديك عدة فروع، أو تحتاج إلى ربط الفروع (SD-WAN)، أو تتوقع حجم اتصالات كبيراً، أو تريد إدارة جدار الحماية والسويتشات ونقاط الاتصال معاً.",
            "اختر Sophos Firewall إذا كانت منشأتك صغيرة أو متوسطة، أو تستخدم Sophos Intercept X على أجهزتك، أو تريد جدار الحماية وحماية الأجهزة في لوحة سحابية واحدة.",
            "إن لم ينطبق أيٌّ منهما، فحدّد مقاس الجهازين على متطلباتك الفعلية، وقارن التكلفة الإجمالية والدعم الذي ستحصل عليه محلياً.",
          ],
        },
        { h2: "الأداء والأجهزة" },
        {
          p: "تستخدم أجهزة FortiGate معالجات أمنية خاصة بـ Fortinet لتسريع اتصالات الجدار والـ VPN، ولهذا تظهر غالباً بأرقام أداء عالية مقارنة بفئتها السعرية. وتحتوي أجهزة Sophos XGS أيضاً على معالج مخصص لتخفيف الحمل عن الاتصالات الموثوقة. في الحالتين، الرقم الكبير في النشرة الفنية ليس الرقم الذي تختار عليه. اعتمد الأداء مع تشغيل الحماية من التهديدات ومنع الاختراق وفحص الاتصالات المشفّرة، لأن الجدار سيعمل هكذا فعلاً.",
        },
        {
          p: "اختر المقاس لثلاث إلى خمس سنوات قادمة: سرعة الإنترنت، وعدد المستخدمين والأجهزة، والموظفين الذين يعملون عن بُعد عبر VPN، وأي فروع جديدة تخطط لافتتاحها.",
        },
        { h2: "التراخيص والاشتراكات" },
        {
          p: "تبيع العلامتان الجهاز مع اشتراكات حماية تُجدَّد سنوياً أو لعدة سنوات دفعة واحدة.",
        },
        {
          ul: [
            "تبيع Fortinet خدمات FortiGuard منفردة أو في حزم. حزمة Advanced Threat Protection (ATP) هي الأساسية، وتضيف حزمة Unified Threat Protection (UTP) تصفية المواقع والـ DNS، وتضيف حزمة Enterprise Protection (ENT) خدمات أخرى مثل منع تسريب البيانات. وكل حزمة تشمل دعم FortiCare.",
            "تبيع Sophos حزمة Xstream Protection، وتشمل حماية الشبكة، وحماية التصفح، والحماية من الهجمات غير المعروفة، مع الإدارة المركزية والتقارير في Sophos Central.",
          ],
        },
        {
          p: "محتوى الحزم يتغير من وقت لآخر، فتأكد من المحتوى الحالي مع المورّد قبل الشراء. وقارن سعر التجديد للمدة نفسها في العرضين؛ فالتجديد هو الجزء الأكبر من تكلفة الجدار طوال عمره.",
        },
        { h2: "الإدارة والفروع" },
        {
          p: "نقطة قوة Fortinet هي Security Fabric: تُدار جدران FortiGate وسويتشات FortiSwitch ونقاط الاتصال FortiAP من الجدار نفسه، وتضيف الشبكات الأكبر FortiManager وFortiAnalyzer للسياسات والسجلات المركزية. وربط الفروع (SD-WAN) مدمج في نظام FortiOS، ولهذا يكثر اختيار FortiGate في المنشآت متعددة الفروع.",
        },
        {
          p: "أما Sophos فتدير جدرانها وحماية الأجهزة وحماية البريد ومنتجاتها الأخرى من لوحة سحابية واحدة هي Sophos Central. ولفريق تقنية صغير يتولى كل شيء، توفّر اللوحة الواحدة للجدار والأجهزة وقتاً واضحاً.",
        },
        { h2: "التكامل مع حماية الأجهزة" },
        {
          p: "هنا تتميز Sophos. مع خاصية Synchronized Security يتبادل الجدار وبرنامج Sophos Intercept X على كل جهاز إشارة اسمها Security Heartbeat. وعندما يبلّغ جهاز عن تهديد نشط، يستطيع الجدار تقييد وصوله إلى الشبكة تلقائياً حتى يُنظَّف، فلا تنتقل الإصابة إلى السيرفرات والمجلدات المشتركة.",
        },
        {
          p: "وتقدم Fortinet تكاملاً مشابهاً بين منتجاتها، مثل FortiClient وFortiEDR. وإن كنت تستخدم حماية أجهزة من مصنّع آخر، فهذه النقطة أقل أهمية، ويعود الاختيار إلى الشبكة نفسها.",
        },
        { h2: "أسئلة أجب عنها قبل الاختيار" },
        {
          ul: [
            "كم فرعاً لديك، وهل تحتاج الفروع إلى الاتصال ببعضها؟",
            "ما سرعة الإنترنت الآن، وكم ستكون بعد ثلاث سنوات؟",
            "كم موظفاً يعمل عن بُعد عبر VPN؟",
            "ما برنامج الحماية المستخدم على أجهزتك؟",
            "من سيدير الجدار يومياً: فريقك أم المورّد؟",
            "هل تحتاج إلى إثبات التوافق مع الضوابط الأساسية للأمن السيبراني من الهيئة الوطنية؟",
          ],
        },
        { h2: "كيف يساعدك بيت الأفكار" },
        {
          p: "يورّد بيت الأفكار جدران حماية Fortinet وSophos وينفذها ويدعمها للمنشآت في الدمام والخبر وجميع مناطق المملكة. نحدد المقاس على اتصالاتك الفعلية، ونجهّز عرضين متقابلين للعلامتين عند رغبتك في المقارنة، وننقل قواعدك واتصالات الـ VPN الحالية، وندعم الجدار بعد التركيب.",
        },
      ],
      sources: [
        {
          label: "Fortinet — حزم الحماية لأجهزة FortiGate",
          url: "https://www.fortinet.com/support/support-services/fortiguard-security-subscriptions/fortigate-security-bundles",
        },
        {
          label: "Sophos — طريقة شراء Sophos Firewall",
          url: "https://www.sophos.com/en-us/products/next-gen-firewall/how-to-buy",
        },
        {
          label: "Sophos — الإدارة المركزية والتقارير",
          url: "https://www.sophos.com/en-us/products/next-gen-firewall/ecosystem-central",
        },
      ],
    },
  },
  "protect-business-email-phishing-bec": {
    en: {
      summary: [
        "Phishing tricks people into clicking, opening or signing in; business email compromise (BEC) uses a fake or hijacked mailbox to get money or data, often with no link or attachment at all.",
        "Technology stops most phishing: multi-factor authentication, good mail filtering and SPF, DKIM and DMARC on your domain.",
        "BEC is stopped mainly by process: confirm every new or changed bank detail by phone on a number you already have, and require a second approval for payments.",
      ],
      faq: [
        {
          q: "What is the difference between phishing and BEC?",
          a: "Phishing is a broad attack that tries to make someone click a link, open an attachment or enter a password. BEC is a targeted fraud in which the attacker pretends to be a manager, colleague or supplier, usually to redirect a payment. BEC messages often contain no link or file, so filters miss them more easily.",
        },
        {
          q: "Does Microsoft 365 protect against phishing on its own?",
          a: "Every Microsoft 365 plan with cloud mailboxes includes built-in protection against spam, malware and phishing. Microsoft Defender for Office 365 Plan 1, included in Microsoft 365 Business Premium and Microsoft 365 E3, adds Safe Links, Safe Attachments and impersonation protection. These settings still need to be configured and reviewed; they do not replace MFA, DMARC or a payment verification process.",
        },
        {
          q: "What does DMARC do?",
          a: "DMARC tells receiving mail servers what to do with messages that claim to come from your domain but fail SPF and DKIM checks: deliver them, send them to junk, or reject them. It also sends you reports, so you can see who is sending mail in your name.",
        },
        {
          q: "What should we do if an employee paid a fraudulent invoice?",
          a: "Call your bank immediately and ask them to stop or recall the transfer; speed matters more than anything else. Then reset the affected passwords, end active sessions, check for mailbox forwarding rules and keep the emails and logs as evidence.",
        },
      ],
      blocks: [
        {
          p: "Email is still the easiest way into most companies. One convincing message can steal a password, install malware or persuade the accounts team to pay a supplier invoice into the wrong bank account. For businesses in Saudi Arabia that work with many suppliers, contractors and overseas partners, the second risk is often the most expensive. This guide explains how phishing and business email compromise (BEC) work and the practical layers that protect your company email.",
        },
        { h2: "Phishing and BEC: what is the difference?" },
        {
          p: "Phishing is the wide net: a fake delivery notice, a shared-document alert or a password-expiry warning that leads to a fake sign-in page or a malicious file. BEC is the targeted version. The attacker studies your company, then sends a short, believable message from a look-alike domain, a spoofed address or a real mailbox they have already taken over. Common BEC scenarios include:",
        },
        {
          ul: [
            "A supplier 'changes' its bank account and asks for the next invoice to be paid to the new details.",
            "A message that appears to come from the general manager asks for an urgent, confidential transfer.",
            "An employee 'asks' HR to change the bank account for their salary.",
            "A real supplier's mailbox is hacked, and the attacker replies inside a genuine email thread with a modified invoice.",
          ],
        },
        {
          p: "Because many BEC messages contain no link or attachment, mail filters have less to detect. That is why protection needs both technology and process.",
        },
        { h2: "Layer 1: protect the accounts" },
        {
          p: "Most mailbox takeovers start with a stolen password. Close that path first:",
        },
        {
          ul: [
            "Turn on multi-factor authentication (MFA) for every mailbox, starting with management, finance and IT administrators. Prefer an authenticator app or security keys over SMS codes.",
            "Block legacy sign-in methods that cannot use MFA.",
            "Give administrators separate admin accounts that are not used for daily email.",
            "Alert on new inbox rules that forward or delete mail, a classic sign of a compromised mailbox.",
          ],
        },
        { h2: "Layer 2: filter incoming mail" },
        {
          p: "Every Microsoft 365 subscription with cloud mailboxes includes built-in protection against spam, malware and phishing. Microsoft Defender for Office 365 Plan 1, included in Microsoft 365 Business Premium and Microsoft 365 E3, adds Safe Links (links are checked when clicked, not only when the email arrives), Safe Attachments (files are opened in a sandbox before delivery) and user and domain impersonation protection, which flags messages pretending to be your managers or your own domain. Plan 2, included in plans such as Microsoft 365 E5, adds attack simulation training, threat investigation and automated response.",
        },
        {
          p: "Licences alone are not enough. Review the anti-phishing policy, add your senior staff and key suppliers to impersonation protection, and tag messages from outside the company so staff notice when a 'colleague' writes from an external address.",
        },
        { h2: "Layer 3: authenticate your domain with SPF, DKIM and DMARC" },
        {
          p: "These three DNS records stop attackers from sending email that appears to come from your exact domain, and they improve the delivery of your own mail.",
        },
        {
          ul: [
            "SPF lists the servers and services allowed to send email for your domain.",
            "DKIM adds a digital signature that proves a message was not changed in transit.",
            "DMARC tells receiving servers what to do when a message fails those checks, and sends you reports about who is sending in your name.",
          ],
        },
        {
          p: "Start DMARC at p=none to collect reports, add every legitimate sender you find (your ERP, CRM, newsletter or e-invoicing platform), then move to quarantine and finally reject. Large mailbox providers now expect this: since May 2025, Outlook.com rejects mail from domains sending more than 5,000 messages a day unless SPF and DKIM pass and a DMARC policy of at least p=none is published.",
        },
        { h2: "Layer 4: a payment verification process" },
        {
          p: "This is the control that stops BEC, even when the email looks perfect. Write it down and apply it to everyone, including senior management:",
        },
        {
          ul: [
            "Confirm any new or changed bank details by phone, using a number from your supplier file or contract, never the number in the email.",
            "Require two people to approve new beneficiaries and payments above an agreed amount.",
            "Treat urgency and secrecy as warning signs, not reasons to skip checks.",
            "Keep supplier bank details in the ERP under change control, with a record of who changed what and when.",
          ],
        },
        { h2: "Layer 5: train staff and make reporting easy" },
        {
          p: "Short, regular awareness sessions work better than one long annual course. Show real examples: look-alike domains, fake Microsoft sign-in pages, invoices with changed bank details. Run phishing simulations, and add a 'Report phishing' button in Outlook so a suspicious message reaches IT in one click. Thank people who report, even when it turns out to be safe.",
        },
        { h2: "If someone clicked, signed in or paid" },
        {
          ul: [
            "If money was sent, call your bank immediately and ask for the transfer to be stopped or recalled.",
            "Reset the user's password, end all active sessions and check which MFA methods are registered on the account.",
            "Look for inbox rules, forwarding and mailbox delegation the attacker may have added.",
            "Keep the emails, headers and sign-in logs as evidence, and warn suppliers and customers who may have received messages from the account.",
            "If personal data may have been exposed, review your notification obligations under the Personal Data Protection Law (PDPL).",
          ],
        },
        { h2: "What the NCA Essential Cybersecurity Controls expect" },
        {
          p: "The NCA's Essential Cybersecurity Controls (ECC-2:2024) include a dedicated Email Protection subdomain. As a minimum it covers filtering of phishing and spam, multi-factor authentication for remote and webmail access, email archiving and backup, protection against advanced persistent threats and zero-day malware, and validation of the entity's email domains with SPF, DKIM and DMARC. Even if the ECC are not mandatory for your company, they are a useful local checklist, and the same points often appear in customer and tender security questionnaires.",
        },
        { h2: "How Thoughts House helps" },
        {
          p: "Thoughts House reviews and hardens business email for companies in Dammam and across Saudi Arabia: Microsoft 365 security settings and Defender for Office 365 policies, MFA rollout, SPF, DKIM and DMARC from monitoring to enforcement, and awareness sessions for your staff. Service is by appointment, on-site or remote. Contact us at sales@thoughtshouse.com or +966 54 102 2995 to arrange an email security review.",
        },
      ],
      sources: [
        {
          label: "NCA — Essential Cybersecurity Controls (ECC-2:2024)",
          url: "https://cdn.nca.gov.sa/api/files/public/upload/86e09090-44e4-481f-bc28-355673607654_ECC--2024-EN.pdf",
        },
        {
          label: "Microsoft — Microsoft Defender for Office 365 overview",
          url: "https://learn.microsoft.com/en-us/defender-office-365/mdo-about",
        },
        {
          label: "Microsoft — Outlook requirements for high-volume senders",
          url: "https://techcommunity.microsoft.com/blog/microsoftthreatprotectionblog/strengthening-email-ecosystem-outlook%e2%80%99s-new-requirements-for-high%e2%80%90volume-senders/4399730",
        },
      ],
    },
    ar: {
      summary: [
        "التصيّد الاحتيالي يخدع الموظف ليضغط رابطاً أو يفتح ملفاً أو يُدخل كلمة مروره، أما احتيال اختراق البريد (BEC) فيستخدم بريداً مزيفاً أو مخترقاً للحصول على أموال أو بيانات، وكثيراً ما يأتي بلا رابط ولا مرفق.",
        "التقنية توقف معظم رسائل التصيّد: التحقق متعدد العوامل، وتصفية جيدة للبريد، وسجلات SPF وDKIM وDMARC على نطاقك.",
        "أما احتيال BEC فيوقفه الإجراء قبل التقنية: تأكَّد هاتفياً من أي حساب بنكي جديد أو معدَّل على رقم موثّق لديك مسبقاً، واشترط موافقة ثانية على المدفوعات.",
      ],
      faq: [
        {
          q: "ما الفرق بين التصيّد الاحتيالي واحتيال BEC؟",
          a: "التصيّد هجوم واسع يحاول دفع الموظف إلى ضغط رابط أو فتح مرفق أو إدخال كلمة المرور. أما BEC فاحتيال موجّه ينتحل فيه المهاجم صفة مدير أو زميل أو مورّد، وغالباً لتحويل دفعة مالية إلى حسابه. وكثيراً ما تخلو رسائله من الروابط والملفات، فيسهل أن تفلت من أنظمة التصفية.",
        },
        {
          q: "هل يكفي Microsoft 365 وحده للحماية من التصيّد؟",
          a: "كل خطط Microsoft 365 التي تتضمن صناديق بريد سحابية تشمل حماية مدمجة من الرسائل المزعجة والبرمجيات الخبيثة والتصيّد. وتضيف خطة Microsoft Defender for Office 365 Plan 1، المضمّنة في Microsoft 365 Business Premium وMicrosoft 365 E3، خصائص Safe Links وSafe Attachments والحماية من انتحال الهوية. لكن هذه الإعدادات تحتاج إلى ضبط ومراجعة، ولا تغني عن التحقق متعدد العوامل وDMARC وإجراء التحقق من المدفوعات.",
        },
        {
          q: "ما وظيفة سجل DMARC؟",
          a: "يخبر DMARC خوادم البريد المستقبِلة بما تفعله مع الرسائل التي تدّعي أنها من نطاقك وتفشل في فحص SPF وDKIM: تسليمها، أو نقلها إلى البريد غير الهام، أو رفضها. ويرسل إليك تقارير توضّح من يرسل بريداً باسم نطاقك.",
        },
        {
          q: "ماذا نفعل إذا دفع أحد الموظفين فاتورة احتيالية؟",
          a: "اتصل بالبنك فوراً واطلب إيقاف التحويل أو استرجاعه؛ فالسرعة هنا أهم من أي خطوة أخرى. ثم أعد تعيين كلمات المرور المتأثرة، وأنهِ الجلسات النشطة، وافحص قواعد إعادة توجيه البريد، واحتفظ بالرسائل والسجلات كأدلة.",
        },
      ],
      blocks: [
        {
          p: "ما زال البريد الإلكتروني أسهل باب للدخول إلى معظم الشركات. رسالة واحدة مقنعة تكفي لسرقة كلمة مرور، أو تثبيت برمجية خبيثة، أو إقناع قسم الحسابات بتحويل فاتورة مورّد إلى حساب بنكي خاطئ. وللمنشآت في المملكة التي تتعامل مع موردين ومقاولين وشركاء في الخارج، يكون الخطر الثاني غالباً هو الأعلى كلفة. يشرح هذا الدليل كيف يعمل التصيّد الاحتيالي واحتيال اختراق البريد التجاري (BEC)، وما طبقات الحماية العملية لبريد منشأتك.",
        },
        { h2: "التصيّد واحتيال BEC: ما الفرق؟" },
        {
          p: "التصيّد شبكة واسعة: إشعار شحنة مزيف، أو تنبيه بمستند مشترك، أو تحذير بانتهاء كلمة المرور، يقودك إلى صفحة دخول مزيفة أو ملف خبيث. أما BEC فهو النسخة الموجّهة؛ يدرس المهاجم منشأتك ثم يرسل رسالة قصيرة ومقنعة من نطاق مشابه لنطاقك، أو عنوان منتحَل، أو صندوق بريد حقيقي سيطر عليه مسبقاً. ومن أشهر صوره:",
        },
        {
          ul: [
            "مورّد «يغيّر» حسابه البنكي ويطلب تحويل الفاتورة القادمة إلى البيانات الجديدة.",
            "رسالة تبدو من المدير العام تطلب تحويلاً عاجلاً وسرياً.",
            "موظف «يطلب» من الموارد البشرية تغيير الحساب الذي يُحوَّل إليه راتبه.",
            "اختراق بريد مورّد حقيقي، ثم الرد داخل سلسلة مراسلات صحيحة بفاتورة معدَّلة.",
          ],
        },
        {
          p: "ولأن كثيراً من رسائل BEC بلا روابط ولا مرفقات، يقل ما تستطيع أنظمة التصفية اكتشافه. لهذا تحتاج الحماية إلى التقنية والإجراءات معاً.",
        },
        { h2: "الطبقة الأولى: حماية الحسابات" },
        {
          p: "تبدأ معظم عمليات السيطرة على صناديق البريد بكلمة مرور مسروقة، فأغلق هذا الباب أولاً:",
        },
        {
          ul: [
            "فعّل التحقق متعدد العوامل (MFA) لكل صناديق البريد، وابدأ بالإدارة والمالية ومديري الأنظمة. وفضّل تطبيق المصادقة أو مفاتيح الأمان على رموز الرسائل النصية.",
            "أوقف طرق الدخول القديمة التي لا تدعم التحقق متعدد العوامل.",
            "خصّص لمديري الأنظمة حسابات إدارية منفصلة لا تُستخدم للبريد اليومي.",
            "فعّل تنبيهاً عند إنشاء قواعد جديدة تعيد توجيه البريد أو تحذفه؛ فهي علامة معروفة على اختراق الصندوق.",
          ],
        },
        { h2: "الطبقة الثانية: تصفية البريد الوارد" },
        {
          p: "تشمل كل اشتراكات Microsoft 365 ذات صناديق البريد السحابية حماية مدمجة من الرسائل المزعجة والبرمجيات الخبيثة والتصيّد. وتضيف خطة Microsoft Defender for Office 365 Plan 1، المضمّنة في Microsoft 365 Business Premium وMicrosoft 365 E3، خاصية Safe Links التي تفحص الرابط لحظة الضغط عليه لا لحظة وصول الرسالة فقط، وخاصية Safe Attachments التي تفتح الملفات في بيئة معزولة قبل تسليمها، والحماية من انتحال هوية المستخدمين والنطاقات التي تنبّه إلى الرسائل المتنكّرة في صفة مديريك أو نطاقك. أما Plan 2، المضمّنة في خطط مثل Microsoft 365 E5، فتضيف محاكاة هجمات التصيّد للتدريب، وأدوات التحقيق في التهديدات، والاستجابة الآلية.",
        },
        {
          p: "والتراخيص وحدها لا تكفي. راجع سياسة مكافحة التصيّد، وأضف كبار المسؤولين وأهم الموردين إلى الحماية من الانتحال، ومَيّز الرسائل القادمة من خارج المنشأة بوسم واضح حتى ينتبه الموظف عندما يراسله «زميل» من عنوان خارجي.",
        },
        { h2: "الطبقة الثالثة: توثيق نطاقك بسجلات SPF وDKIM وDMARC" },
        {
          p: "تمنع هذه السجلات الثلاثة في إعدادات DNS المهاجمين من إرسال بريد يظهر وكأنه من نطاقك نفسه، وتحسّن في الوقت ذاته وصول رسائلك إلى صناديق الوارد.",
        },
        {
          ul: [
            "سجل SPF يحدد الخوادم والخدمات المسموح لها بالإرسال باسم نطاقك.",
            "سجل DKIM يضيف توقيعاً رقمياً يثبت أن الرسالة لم تُعدَّل أثناء انتقالها.",
            "سجل DMARC يحدد للخوادم المستقبِلة ما تفعله بالرسائل التي تفشل في الفحصين، ويرسل إليك تقارير عمّن يرسل باسمك.",
          ],
        },
        {
          p: "ابدأ DMARC بسياسة p=none لجمع التقارير، وأضف كل جهة إرسال مشروعة تظهر لك، مثل نظام ERP أو CRM أو منصة النشرات البريدية أو الفوترة الإلكترونية، ثم انتقل إلى quarantine وبعدها إلى reject. وكبار مزودي البريد باتوا يشترطون ذلك؛ فمنذ مايو 2025 يرفض Outlook.com رسائل النطاقات التي ترسل أكثر من 5,000 رسالة يومياً ما لم تنجح في فحص SPF وDKIM وتنشر سياسة DMARC لا تقل عن p=none.",
        },
        { h2: "الطبقة الرابعة: إجراء للتحقق من المدفوعات" },
        {
          p: "هذا هو الضابط الذي يوقف احتيال BEC حتى لو بدت الرسالة متقنة تماماً. اكتبه واعتمده وطبّقه على الجميع، بمن فيهم الإدارة العليا:",
        },
        {
          ul: [
            "تأكَّد من أي حساب بنكي جديد أو معدَّل باتصال هاتفي على رقم مسجّل في ملف المورّد أو العقد، لا على الرقم الوارد في الرسالة.",
            "اشترط موافقة شخصين على إضافة مستفيد جديد وعلى المدفوعات التي تتجاوز مبلغاً متفقاً عليه.",
            "تعامل مع الاستعجال وطلب السرية كعلامتَي تحذير، لا كمبرر لتجاوز الإجراء.",
            "احفظ بيانات حسابات الموردين في نظام ERP مع ضبط صلاحيات التعديل، وسجل يوضح من عدّل ماذا ومتى.",
          ],
        },
        { h2: "الطبقة الخامسة: توعية الموظفين وتسهيل الإبلاغ" },
        {
          p: "الجلسات التوعوية القصيرة والمنتظمة أنفع من دورة طويلة مرة في السنة. اعرض أمثلة حقيقية: نطاقات مشابهة، وصفحات دخول Microsoft مزيفة، وفواتير بحسابات بنكية معدَّلة. ونفّذ محاكاة لرسائل التصيّد، وأضف زر «الإبلاغ عن تصيّد» في Outlook حتى تصل الرسالة المشبوهة إلى فريق التقنية بضغطة واحدة. واشكر من يبلّغ حتى لو تبيّن أن الرسالة سليمة.",
        },
        { h2: "إذا ضغط موظف رابطاً أو أدخل بياناته أو حوّل مبلغاً" },
        {
          ul: [
            "إذا حُوِّل مبلغ، فاتصل بالبنك فوراً واطلب إيقاف التحويل أو استرجاعه.",
            "أعد تعيين كلمة مرور المستخدم، وأنهِ جميع الجلسات النشطة، وراجع طرق التحقق المسجّلة على حسابه.",
            "ابحث عن قواعد البريد وإعادة التوجيه والتفويضات التي ربما أضافها المهاجم.",
            "احتفظ بالرسائل وترويساتها وسجلات الدخول كأدلة، ونبّه الموردين والعملاء الذين ربما وصلتهم رسائل من الحساب.",
            "إذا احتمل تسرّب بيانات شخصية، فراجع التزامات الإبلاغ في نظام حماية البيانات الشخصية.",
          ],
        },
        { h2: "ما تتطلبه الضوابط الأساسية للأمن السيبراني" },
        {
          p: "تتضمن الضوابط الأساسية للأمن السيبراني الصادرة عن الهيئة الوطنية للأمن السيبراني (ECC-2:2024) مكوّناً فرعياً مخصصاً لحماية البريد الإلكتروني. ويشمل كحدٍّ أدنى: تحليل الرسائل وتصفيتها من التصيّد والرسائل المزعجة، والتحقق متعدد العوامل للدخول عن بُعد وعبر بوابة البريد على الويب، وأرشفة البريد ونسخه احتياطياً، والحماية من التهديدات المتقدمة المستمرة والبرمجيات الخبيثة غير المعروفة، والتحقق من نطاقات بريد الجهة باستخدام SPF وDKIM وDMARC. وحتى إن لم تكن الضوابط إلزامية لمنشأتك، فهي قائمة محلية مفيدة، وكثيراً ما تتكرر النقاط نفسها في استبيانات الأمن لدى العملاء والمنافسات.",
        },
        { h2: "كيف يساعدك بيت الأفكار" },
        {
          p: "يراجع بيت الأفكار بريد المنشآت ويعزّز حمايته في الدمام وجميع مناطق المملكة: إعدادات الأمان في Microsoft 365 وسياسات Defender for Office 365، وتفعيل التحقق متعدد العوامل، وسجلات SPF وDKIM وDMARC من مرحلة المراقبة حتى الرفض الكامل، وجلسات توعية لموظفيك. نقدّم الخدمة بموعد مسبق، في موقعك أو عن بُعد. تواصل معنا على sales@thoughtshouse.com أو ‎+966 54 102 2995 لترتيب مراجعة لأمن بريدك.",
        },
      ],
      sources: [
        {
          label: "الهيئة الوطنية للأمن السيبراني — الضوابط الأساسية للأمن السيبراني (ECC-2:2024)",
          url: "https://cdn.nca.gov.sa/api/files/public/upload/86e09090-44e4-481f-bc28-355673607654_ECC--2024-EN.pdf",
        },
        {
          label: "Microsoft — نظرة عامة على Microsoft Defender for Office 365",
          url: "https://learn.microsoft.com/en-us/defender-office-365/mdo-about",
        },
        {
          label: "Microsoft — متطلبات Outlook للمرسلين بكميات كبيرة",
          url: "https://techcommunity.microsoft.com/blog/microsoftthreatprotectionblog/strengthening-email-ecosystem-outlook%e2%80%99s-new-requirements-for-high%e2%80%90volume-senders/4399730",
        },
      ],
    },
  },
};
