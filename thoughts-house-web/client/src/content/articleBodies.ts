/*
 * Article bodies, split from articles.ts so they are only downloaded on article pages
 * (main.tsx loads this module before hydrating an article; the prerenderer imports it directly).
 */
import type { ArticleSlug } from "./articles";
import type { Language } from "@/seo";

export type Block = { h2: string } | { p: string } | { ul: string[] };

export interface ArticleBody {
  blocks: Block[];
  sources?: { label: string; url: string }[];
}

export const ARTICLE_BODIES: Record<ArticleSlug, Record<Language, ArticleBody>> = {
  "nca-essential-cybersecurity-controls": {
    en: {
      blocks: [
          {
            p: "The Essential Cybersecurity Controls (ECC) are the baseline cybersecurity requirements issued by Saudi Arabia's National Cybersecurity Authority (NCA). The current edition is ECC 2-2024. For many organizations in the Kingdom they are the reference point for what a \"minimum acceptable\" security program looks like — and even where they are not mandatory, they are an excellent, locally relevant framework to follow.",
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
          { label: "NCA — Essential Cybersecurity Controls (ECC)", url: "https://nca.gov.sa/en/regulatory-documents/controls-list/ecc/" },
        ],
    },
    ar: {
      blocks: [
          {
            p: "الضوابط الأساسية للأمن السيبراني (ECC) هي الحد الأدنى من متطلبات الأمن السيبراني الصادرة عن الهيئة الوطنية للأمن السيبراني في المملكة، والإصدار الحالي هو ECC 2-2024. تمثّل هذه الضوابط لكثير من الجهات المرجعَ لما يجب أن يكون عليه برنامج الأمن السيبراني، وحتى عندما لا تكون إلزامية فهي إطار عملي ممتاز ومناسب للبيئة المحلية.",
          },
          { h2: "من المطالب بالامتثال؟" },
          {
            p: "تنطبق الضوابط على الجهات الوطنية: الجهات الحكومية والشركات والجهات التابعة لها، إضافة إلى جهات القطاع الخاص التي تملك بنى تحتية وطنية حساسة أو تشغّلها أو تستضيفها. وتُشجَّع بقية الشركات على تطبيقها، كما أصبح كثير من العملاء والمنافسات يسألون الموردين عن مدى التزامهم بها. راجع دائماً أحدث وثيقة رسمية على موقع الهيئة لمعرفة النطاق الدقيق المنطبق عليك.",
          },
          { h2: "ماذا تغطي الضوابط؟" },
          { p: "تنقسم الضوابط إلى مكونات رئيسية تغطي دورة الأمن السيبراني كاملة:" },
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
          { label: "الهيئة الوطنية للأمن السيبراني — الضوابط الأساسية للأمن السيبراني", url: "https://nca.gov.sa/ar/regulatory-documents/controls-list/ecc/" },
        ],
    },
  },
  "pdpl-technical-requirements": {
    en: {
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
          { label: "SDAIA — Data Governance Platform (PDPL)", url: "https://dgp.sdaia.gov.sa/" },
          { label: "Saudi Data & AI Authority (SDAIA)", url: "https://sdaia.gov.sa/en/" },
        ],
    },
    ar: {
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
          { label: "منصة حوكمة البيانات — سدايا", url: "https://dgp.sdaia.gov.sa/" },
          { label: "الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا)", url: "https://sdaia.gov.sa/ar/" },
        ],
    },
  },
  "how-to-choose-a-firewall": {
    en: {
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
};
