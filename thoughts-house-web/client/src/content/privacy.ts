/*
 * Privacy policy (/privacy/ and /ar/privacy/). Describes what this website actually collects
 * and which services process it. Aligned with Saudi Arabia's Personal Data Protection Law (PDPL).
 * Review with the company's legal/compliance contact before relying on it.
 */
import type { Language } from "@/seo";

export const PRIVACY_UPDATED = "2026-10-05";

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
    updated: "Last updated: 5 October 2026",
    intro:
      "This policy explains what personal data Thoughts House collects through this website, why we collect it, and the rights you have under Saudi Arabia's Personal Data Protection Law (PDPL).",
    sections: [
      {
        h2: "Who we are",
        body: [
          "Thoughts House (بيت الأفكار) is responsible for the personal data described in this policy. Address: King Khaled St, Al 'Adamah, Dammam 32242, Saudi Arabia. Email: sales@thoughtshouse.com. Phone: +966 54 102 2995.",
        ],
      },
      {
        h2: "What we collect",
        body: [
          "Contact form: your name, company name (optional), email address and the message you write.",
          "WhatsApp, email and phone: if you contact us this way, we receive the details you share, such as your name, number and message.",
          "Technical data: like any website, our hosting provider processes your IP address and basic request information (such as browser type and the page requested) to deliver the site and keep it secure. We do not use advertising or analytics cookies.",
        ],
      },
      {
        h2: "Why we use it",
        body: [
          "We use the information you send us only to answer your enquiry, prepare quotations and proposals, and provide the services you ask for. The legal basis is your consent when you contact us, and our legitimate interest in responding to business enquiries.",
          "We do not sell your personal data or use it for automated decision-making.",
        ],
      },
      {
        h2: "Services that process data for us",
        body: [
          "Contact form delivery: messages are delivered to our inbox by FormSubmit (formsubmit.co).",
          "Website hosting: the site is hosted by Vercel.",
          "Fonts and map: pages load fonts from Google Fonts, and the contact section shows an embedded Google Map, so your browser connects to Google's servers.",
          "Some of these providers process data outside Saudi Arabia. We use them only for the purposes above and in line with the PDPL's requirements for transferring data abroad.",
        ],
      },
      {
        h2: "How long we keep it",
        body: [
          "We keep enquiry messages only as long as needed to respond and to manage any resulting business relationship, and as required by law. We then delete them.",
        ],
      },
      {
        h2: "Your rights",
        body: [
          "Under the PDPL you can ask to be informed about how your data is processed, to access a copy of it, to have it corrected or completed, and to have it destroyed when it is no longer needed. You can also withdraw your consent at any time.",
          "To make a request, email sales@thoughtshouse.com. You may also raise a complaint with the Saudi Data & AI Authority (SDAIA).",
        ],
      },
      {
        h2: "Security",
        body: [
          "The website is served only over encrypted HTTPS connections, and access to enquiry messages is limited to the staff who need them.",
        ],
      },
      {
        h2: "Changes to this policy",
        body: [
          "We may update this policy. The date at the top shows when it last changed.",
        ],
      },
    ],
  },
  ar: {
    metaTitle: "سياسة الخصوصية | بيت الأفكار",
    metaDescription:
      "كيف يجمع بيت الأفكار البيانات الشخصية المرسلة عبر موقع thoughtshouse.com ويستخدمها ويحميها، وفقاً لنظام حماية البيانات الشخصية في المملكة.",
    h1: "سياسة الخصوصية",
    updated: "آخر تحديث: 5 أكتوبر 2026",
    intro:
      "توضح هذه السياسة البيانات الشخصية التي يجمعها بيت الأفكار عبر هذا الموقع، وسبب جمعها، وحقوقك وفقاً لنظام حماية البيانات الشخصية في المملكة العربية السعودية.",
    sections: [
      {
        h2: "من نحن",
        body: [
          "بيت الأفكار (Thoughts House) هو المسؤول عن البيانات الشخصية الموضحة في هذه السياسة. العنوان: شارع الملك خالد، حي العدامة، الدمام 32242، المملكة العربية السعودية. البريد: sales@thoughtshouse.com. الهاتف: ‎+966 54 102 2995.",
        ],
      },
      {
        h2: "ما الذي نجمعه",
        body: [
          "نموذج التواصل: اسمك واسم شركتك (اختياري) وبريدك الإلكتروني والرسالة التي تكتبها.",
          "واتساب والبريد والهاتف: إذا تواصلت معنا بهذه الطرق نتلقى البيانات التي تشاركها، مثل اسمك ورقمك ورسالتك.",
          "البيانات التقنية: كأي موقع إلكتروني، يعالج مزوّد الاستضافة عنوان IP ومعلومات الطلب الأساسية (مثل نوع المتصفح والصفحة المطلوبة) لعرض الموقع وحمايته. لا نستخدم ملفات تعريف الارتباط الإعلانية أو التحليلية.",
        ],
      },
      {
        h2: "لماذا نستخدمها",
        body: [
          "نستخدم المعلومات التي ترسلها فقط للرد على استفسارك وإعداد عروض الأسعار والعروض الفنية وتقديم الخدمات التي تطلبها. والأساس النظامي هو موافقتك عند التواصل معنا، ومصلحتنا المشروعة في الرد على استفسارات الأعمال.",
          "لا نبيع بياناتك الشخصية ولا نستخدمها في اتخاذ قرارات آلية.",
        ],
      },
      {
        h2: "الخدمات التي تعالج البيانات لصالحنا",
        body: [
          "إيصال رسائل النموذج: تصل الرسائل إلى بريدنا عبر خدمة FormSubmit ‏(formsubmit.co).",
          "استضافة الموقع: الموقع مستضاف لدى Vercel.",
          "الخطوط والخريطة: تُحمَّل الخطوط من Google Fonts، ويعرض قسم التواصل خريطة Google مضمّنة، لذلك يتصل متصفحك بخوادم Google.",
          "يعالج بعض هؤلاء المزوّدين البيانات خارج المملكة، ونستخدمهم للأغراض المذكورة فقط ووفقاً لمتطلبات النظام بشأن نقل البيانات خارج المملكة.",
        ],
      },
      {
        h2: "مدة الاحتفاظ",
        body: [
          "نحتفظ برسائل الاستفسار بالقدر اللازم للرد عليها وإدارة أي علاقة عمل تنتج عنها، وبما يتطلبه النظام، ثم نحذفها.",
        ],
      },
      {
        h2: "حقوقك",
        body: [
          "يحق لك وفقاً للنظام أن تُبلَّغ بكيفية معالجة بياناتك، وأن تحصل على نسخة منها، وأن تطلب تصحيحها أو استكمالها، وأن تطلب إتلافها عند انتفاء الحاجة إليها، كما يمكنك سحب موافقتك في أي وقت.",
          "لتقديم طلب راسلنا على sales@thoughtshouse.com، ويمكنك أيضاً تقديم شكوى إلى الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا).",
        ],
      },
      {
        h2: "الأمان",
        body: [
          "يُعرض الموقع عبر اتصالات HTTPS مشفّرة فقط، ويقتصر الاطلاع على رسائل الاستفسار على الموظفين الذين يحتاجون إليها.",
        ],
      },
      {
        h2: "التغييرات على هذه السياسة",
        body: ["قد نحدّث هذه السياسة، ويوضح التاريخ في أعلاها آخر تحديث لها."],
      },
    ],
  },
};
