/* Home page FAQ (also emitted as FAQPage structured data). */
import type { Language } from "@/seo";

export const HOME_FAQ: Record<
  Language,
  { title: string; items: { q: string; a: string }[] }
> = {
  en: {
    title: "Frequently asked questions",
    items: [
      {
        q: "What does an IT system integrator do?",
        a: "A system integrator designs, supplies, installs and connects the different parts of your IT — networks, security, servers, storage, cloud and end-user devices — so they work together as one reliable system, and supports them afterwards.",
      },
      {
        q: "Where is Thoughts House located and which areas do you serve?",
        a: "We are based in Dammam in the Eastern Province and work with organizations across Saudi Arabia.",
      },
      {
        q: "Do you supply hardware and software licenses?",
        a: "Yes. We supply servers, storage, network and security appliances, laptops, workstations and software licenses from leading brands, and can install and configure them.",
      },
      {
        q: "Which brands do you work with?",
        a: "We work with vendors including Sophos, Cisco, Palo Alto Networks, CrowdStrike, Check Point, Microsoft, Dell, HP, Lenovo, AWS, Veeam and NetApp, and recommend the solution that fits your needs rather than a single brand.",
      },
      {
        q: "Do you provide support after installation?",
        a: "Yes. We stay with you after go-live with maintenance, updates and technical support.",
      },
      {
        q: "How can we request a quotation?",
        a: "Use the contact form on this page, email sales@thoughtshouse.com, call +966 54 102 2995 or message us on WhatsApp.",
      },
    ],
  },
  ar: {
    title: "الأسئلة الشائعة",
    items: [
      {
        q: "ماذا تفعل شركة تكامل أنظمة تقنية المعلومات؟",
        a: "تصمم شركة تكامل الأنظمة مكونات تقنية المعلومات المختلفة وتورّدها وتركّبها وتربطها ببعضها، من الشبكات والحماية إلى السيرفرات والتخزين والسحابة وأجهزة المستخدمين، لتعمل كنظام واحد موثوق، ثم تدعمها بعد التشغيل.",
      },
      {
        q: "أين يقع بيت الأفكار وما المناطق التي تخدمونها؟",
        a: "مقرّنا في الدمام بالمنطقة الشرقية، ونخدم المنشآت في جميع مناطق المملكة.",
      },
      {
        q: "هل تورّدون الأجهزة وتراخيص البرمجيات؟",
        a: "نعم. نورّد السيرفرات وأنظمة التخزين وأجهزة الشبكات والحماية والحواسيب ومحطات العمل وتراخيص البرمجيات من أبرز العلامات التجارية، ويمكننا تركيبها وإعدادها.",
      },
      {
        q: "ما العلامات التجارية التي تتعاملون معها؟",
        a: "نتعامل مع شركات منها Sophos وCisco وPalo Alto Networks وCrowdStrike وCheck Point وMicrosoft وDell وHP وLenovo وAWS وVeeam وNetApp، ونرشّح الحل المناسب لاحتياجاتك لا علامة واحدة بعينها.",
      },
      {
        q: "هل تقدمون الدعم بعد التركيب؟",
        a: "نعم. نبقى معك بعد التشغيل بالصيانة والتحديثات والدعم الفني.",
      },
      {
        q: "كيف نطلب عرض سعر؟",
        a: "استخدم نموذج التواصل في هذه الصفحة، أو راسلنا على sales@thoughtshouse.com، أو اتصل على ⁦+966 54 102 2995⁩، أو تواصل معنا عبر واتساب.",
      },
    ],
  },
};
