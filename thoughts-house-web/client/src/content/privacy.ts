/*
 * Privacy policy (/privacy/ and /ar/privacy/). Describes what this website actually collects
 * and which services process it. Aligned with Saudi Arabia's Personal Data Protection Law (PDPL).
 * Review with the company's legal/compliance contact before relying on it.
 */
import type { Language } from "@/seo";

export const PRIVACY_UPDATED = "2026-10-06";

interface PrivacyCopy {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  updated: string;
  intro: string;
  sections: { h2: string; body: string[] }[];
}

export const PRIVACY: Record<Language, PrivacyCopy> = {
  en: {
    metaTitle: "Privacy Policy | Thoughts House",
    metaDescription:
      "How Thoughts House collects, uses and protects personal data sent through thoughtshouse.com, in line with Saudi Arabia's PDPL.",
    h1: "Privacy Policy",
    updated: "Last updated: 6 October 2026",
    intro:
      "This policy explains what personal data Thoughts House collects through this website, why we collect it, and the rights you have under Saudi Arabia's Personal Data Protection Law (PDPL).",
    sections: [
      {
        h2: "Who we are",
        body: [
          "Thoughts House (بيت الأفكار) is the controller responsible for the personal data described in this policy. Address: King Khaled St, Al 'Adamah, Dammam 32242, Saudi Arabia. Email: sales@thoughtshouse.com. Phone: +966 54 102 2995.",
        ],
      },
      {
        h2: "What we collect",
        body: [
          "Contact form: your name, company name (optional), email address and the message you write.",
          "WhatsApp, email and phone: if you contact us this way, we receive the details you share, such as your name, number and message.",
          "Technical data: like any website, our hosting provider processes your IP address and basic request information (such as browser type and the page requested) to deliver the site and keep it secure.",
          "We do not use cookies, advertising or analytics trackers. The chat assistant on this site gives preset answers inside your browser; it does not send or store what you type.",
          "We do not ask for sensitive data. Please do not include it in your messages.",
        ],
      },
      {
        h2: "How we collect it",
        body: [
          "Directly from you, when you submit the contact form, email us, call us or message us on WhatsApp, and automatically through the hosting provider when you visit the site. We do not buy personal data or collect it from other sources.",
        ],
      },
      {
        h2: "Why we use it",
        body: [
          "We use the information you send us only to answer your enquiry, prepare quotations and proposals, and provide the services you ask for. The legal basis is your consent when you contact us, and our legitimate interest in responding to business enquiries.",
          "We do not sell your personal data, use it for marketing without your consent, or use it for automated decision-making.",
        ],
      },
      {
        h2: "Who receives it",
        body: [
          "Contact form delivery: messages are delivered to our inbox by FormSubmit (formsubmit.co).",
          "Website hosting: the site is hosted by Vercel.",
          "Fonts and map: pages load fonts from Google Fonts, and the contact section shows an embedded Google Map, so your browser connects to Google's servers.",
          "WhatsApp: messages you send us on WhatsApp are handled by WhatsApp (Meta) under its own privacy policy.",
          "Some of these providers process data outside Saudi Arabia. We use them only for the purposes above and in line with the PDPL's requirements for transferring personal data abroad. We may also disclose data where Saudi law requires it.",
        ],
      },
      {
        h2: "How we store it",
        body: [
          "Enquiries are kept in our company email accounts and, when they lead to a project, in our business records. Access is limited to the staff who handle your enquiry.",
        ],
      },
      {
        h2: "How long we keep it and how we destroy it",
        body: [
          "If an enquiry does not lead to business, we delete it once it is resolved and no later than 24 months after our last contact with you. If it leads to a business relationship, we keep it for as long as the relationship lasts and as long as Saudi law requires us to keep related business and tax records.",
          "When the retention period ends, we permanently delete the messages and their copies from our email accounts and records.",
        ],
      },
      {
        h2: "Your rights",
        body: [
          "Under the PDPL you have the right to be informed about how your data is processed, to access and obtain a copy of it, to have it corrected or completed, and to have it destroyed when it is no longer needed. You can also withdraw your consent at any time.",
          "To make a request, email sales@thoughtshouse.com. We may ask you to confirm your identity, and we respond within 30 days. You may also raise a complaint with the Saudi Data & AI Authority (SDAIA).",
        ],
      },
      {
        h2: "Security",
        body: [
          "The website is served only over encrypted HTTPS connections with security headers, and access to enquiry messages is limited to the staff who need them. If a breach affects your personal data, we will notify SDAIA and, where required, you, as the PDPL requires.",
        ],
      },
      {
        h2: "Changes and language",
        body: [
          "We may update this policy. The date at the top shows when it last changed.",
          "This policy is published in Arabic and English. If the two versions differ, the Arabic version prevails.",
        ],
      },
    ],
  },
  ar: {
    metaTitle: "سياسة الخصوصية | بيت الأفكار",
    metaDescription:
      "كيف يجمع بيت الأفكار البيانات الشخصية المرسلة عبر موقع thoughtshouse.com ويستخدمها ويحميها، وفقاً لنظام حماية البيانات الشخصية في المملكة.",
    h1: "سياسة الخصوصية",
    updated: "آخر تحديث: 6 أكتوبر 2026",
    intro:
      "توضح هذه السياسة البيانات الشخصية التي يجمعها بيت الأفكار عبر هذا الموقع، وسبب جمعها، وحقوقك وفقاً لنظام حماية البيانات الشخصية في المملكة العربية السعودية.",
    sections: [
      {
        h2: "من نحن",
        body: [
          "بيت الأفكار (Thoughts House) هو جهة التحكم المسؤولة عن البيانات الشخصية الموضحة في هذه السياسة. العنوان: شارع الملك خالد، حي العدامة، الدمام 32242، المملكة العربية السعودية. البريد: sales@thoughtshouse.com. الهاتف: \u2066+966 54 102 2995\u2069.",
        ],
      },
      {
        h2: "ما الذي نجمعه",
        body: [
          "نموذج التواصل: اسمك واسم شركتك (اختياري) وبريدك الإلكتروني والرسالة التي تكتبها.",
          "واتساب والبريد والهاتف: إذا تواصلت معنا بهذه الطرق نتلقى البيانات التي تشاركها، مثل اسمك ورقمك ورسالتك.",
          "البيانات التقنية: كأي موقع إلكتروني، يعالج مزوّد الاستضافة عنوان IP ومعلومات الطلب الأساسية (مثل نوع المتصفح والصفحة المطلوبة) لعرض الموقع وحمايته.",
          "لا نستخدم ملفات تعريف الارتباط أو أدوات التتبع الإعلانية أو التحليلية. ويقدم المساعد الآلي في الموقع إجابات جاهزة داخل متصفحك، ولا يرسل ما تكتبه ولا يحفظه.",
          "لا نطلب بيانات حساسة، ونرجو عدم تضمينها في رسائلك.",
        ],
      },
      {
        h2: "كيف نجمعها",
        body: [
          "مباشرةً منك عند إرسال نموذج التواصل أو مراسلتنا بالبريد أو الاتصال بنا أو التواصل عبر واتساب، وتلقائياً عبر مزوّد الاستضافة عند زيارتك للموقع. لا نشتري بيانات شخصية ولا نجمعها من مصادر أخرى.",
        ],
      },
      {
        h2: "لماذا نستخدمها",
        body: [
          "نستخدم المعلومات التي ترسلها فقط للرد على استفسارك وإعداد عروض الأسعار والعروض الفنية وتقديم الخدمات التي تطلبها. والأساس النظامي هو موافقتك عند التواصل معنا، ومصلحتنا المشروعة في الرد على استفسارات الأعمال.",
          "لا نبيع بياناتك الشخصية، ولا نستخدمها في التسويق دون موافقتك، ولا في اتخاذ قرارات آلية.",
        ],
      },
      {
        h2: "الجهات التي تتلقاها",
        body: [
          "إيصال رسائل النموذج: تصل الرسائل إلى بريدنا عبر خدمة FormSubmit ‏(formsubmit.co).",
          "استضافة الموقع: الموقع مستضاف لدى Vercel.",
          "الخطوط والخريطة: تُحمَّل الخطوط من Google Fonts، ويعرض قسم التواصل خريطة Google مضمّنة، لذلك يتصل متصفحك بخوادم Google.",
          "واتساب: تعالج WhatsApp ‏(Meta) الرسائل التي ترسلها إلينا عبر واتساب وفق سياسة الخصوصية الخاصة بها.",
          "يعالج بعض هؤلاء المزوّدين البيانات خارج المملكة، ونستخدمهم للأغراض المذكورة فقط ووفقاً لمتطلبات النظام بشأن نقل البيانات الشخصية خارج المملكة. وقد نفصح عن البيانات إذا اقتضت الأنظمة السعودية ذلك.",
        ],
      },
      {
        h2: "كيف نحفظها",
        body: [
          "تُحفظ الاستفسارات في حسابات البريد الإلكتروني للشركة، وفي سجلات أعمالنا إذا نتج عنها مشروع، ويقتصر الاطلاع عليها على الموظفين المعنيين بالرد على استفسارك.",
        ],
      },
      {
        h2: "مدة الاحتفاظ وطريقة الإتلاف",
        body: [
          "إذا لم ينتج عن الاستفسار تعامل تجاري، نحذفه بعد انتهائه وفي موعد أقصاه 24 شهراً من آخر تواصل معك. وإذا نتجت عنه علاقة عمل، نحتفظ به طوال مدة العلاقة وللمدة التي تفرضها الأنظمة السعودية للاحتفاظ بالسجلات التجارية والضريبية.",
          "عند انتهاء مدة الاحتفاظ نحذف الرسائل ونسخها نهائياً من حسابات البريد والسجلات.",
        ],
      },
      {
        h2: "حقوقك",
        body: [
          "يحق لك وفقاً للنظام أن تُبلَّغ بكيفية معالجة بياناتك، وأن تطّلع عليها وتحصل على نسخة منها، وأن تطلب تصحيحها أو استكمالها، وأن تطلب إتلافها عند انتفاء الحاجة إليها، كما يمكنك سحب موافقتك في أي وقت.",
          "لتقديم طلب راسلنا على sales@thoughtshouse.com، وقد نطلب التحقق من هويتك، ونرد خلال 30 يوماً. ويمكنك أيضاً تقديم شكوى إلى الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا).",
        ],
      },
      {
        h2: "الأمان",
        body: [
          "يُعرض الموقع عبر اتصالات HTTPS مشفّرة فقط مع ترويسات أمان، ويقتصر الاطلاع على رسائل الاستفسار على الموظفين الذين يحتاجون إليها. وإذا تعرضت بياناتك الشخصية لتسرب، نبلغ سدايا ونبلغك عند الاقتضاء وفق ما يتطلبه النظام.",
        ],
      },
      {
        h2: "التغييرات واللغة",
        body: [
          "قد نحدّث هذه السياسة، ويوضح التاريخ في أعلاها آخر تحديث لها.",
          "نُشرت هذه السياسة باللغتين العربية والإنجليزية، وفي حال الاختلاف بينهما يُعتمد النص العربي.",
        ],
      },
    ],
  },
};
