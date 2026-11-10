/*
 * Phishing awareness test (/phishing-test/ and /ar/phishing-test/).
 * Every message, sender, link and number below is invented for teaching. No real organization is
 * named, and the domains use the reserved ".example" ending so they can never point to a real site.
 */
import type { Language } from "@/seo";

export type QuizKind = "email" | "sms" | "link" | "call" | "app";

export interface QuizQuestion {
  id: string;
  kind: QuizKind;
  /** true when the message is a scam */
  scam: boolean;
  content: Record<
    Language,
    {
      /** Where the message arrives, e.g. "Email" */
      label: string;
      /** Sender line, link text or caller, shown left-to-right */
      from?: string;
      subject?: string;
      body: string;
      /** The sign that gives it away, shown after answering */
      why: string;
    }
  >;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "password-expiry",
    kind: "email",
    scam: true,
    content: {
      en: {
        label: "Email",
        from: "IT Support <support@yourcompany-helpdesk.example>",
        subject: "Your password expires today",
        body: "Your email password expires in 2 hours. Click the link below and sign in to keep your current password, or your mailbox will be locked.",
        why: "Scam. The sender's address is not your company's own domain, the message creates a deadline, and it asks you to sign in through a link. Real IT teams do not ask for your password by email.",
      },
      ar: {
        label: "بريد إلكتروني",
        from: "IT Support <support@yourcompany-helpdesk.example>",
        subject: "كلمة المرور تنتهي اليوم",
        body: "تنتهي كلمة مرور بريدك خلال ساعتين. اضغط الرابط أدناه وسجّل الدخول للاحتفاظ بكلمة المرور الحالية، وإلا سيُقفل صندوق بريدك.",
        why: "احتيال. عنوان المرسل ليس نطاق شركتك، والرسالة تضع مهلة للاستعجال، وتطلب تسجيل الدخول عبر رابط. فريق تقنية المعلومات الحقيقي لا يطلب كلمة مرورك بالبريد.",
      },
    },
  },
  {
    id: "parcel-fee",
    kind: "sms",
    scam: true,
    content: {
      en: {
        label: "Text message",
        from: "+966 5X XXX XXXX",
        body: "Your parcel is on hold. Pay the 3.50 SAR customs fee within 24 hours to avoid return: http://delivery-fee.example/pay",
        why: "Scam. A small fee, a deadline and a link from an unknown mobile number are the usual pattern. The page then asks for your card details. Check the shipment in the courier's own app instead.",
      },
      ar: {
        label: "رسالة نصية",
        from: "+966 5X XXX XXXX",
        body: "شحنتك موقوفة. ادفع رسوم الجمارك 3.50 ريال خلال 24 ساعة لتجنب إرجاعها: http://delivery-fee.example/pay",
        why: "احتيال. رسوم صغيرة ومهلة ورابط من رقم جوال مجهول هو النمط المعتاد، ثم تطلب الصفحة بيانات بطاقتك. تحقق من الشحنة في تطبيق شركة الشحن نفسه.",
      },
    },
  },
  {
    id: "lookalike-link",
    kind: "link",
    scam: true,
    content: {
      en: {
        label: "Link in a message",
        from: "https://yourbank.example.account-verify.example/login",
        body: "The message says this is your bank's sign-in page.",
        why: "Scam. Read the address from the end: the real site is the part just before the first single slash, here account-verify.example. The bank's name at the start is only decoration.",
      },
      ar: {
        label: "رابط في رسالة",
        from: "https://yourbank.example.account-verify.example/login",
        body: "تقول الرسالة إن هذه صفحة تسجيل الدخول إلى مصرفك.",
        why: "احتيال. اقرأ العنوان من نهايته: الموقع الحقيقي هو الجزء الذي يسبق أول شرطة مائلة مفردة، وهو هنا account-verify.example. واسم المصرف في أوله مجرد تمويه.",
      },
    },
  },
  {
    id: "holiday-notice",
    kind: "email",
    scam: false,
    content: {
      en: {
        label: "Email",
        from: "HR Department <hr@yourcompany.example>",
        subject: "Office closed on Sunday",
        body: "A reminder that the office is closed this Sunday for the public holiday. Work resumes on Monday. No action is needed.",
        why: "Safe. It comes from your company's own domain, asks for nothing, has no link or attachment, and creates no pressure. Not every message is a threat.",
      },
      ar: {
        label: "بريد إلكتروني",
        from: "HR Department <hr@yourcompany.example>",
        subject: "المكتب مغلق يوم الأحد",
        body: "تذكير بأن المكتب مغلق يوم الأحد القادم بمناسبة الإجازة الرسمية، ويُستأنف العمل يوم الاثنين. لا يلزمك أي إجراء.",
        why: "آمنة. جاءت من نطاق شركتك نفسه، ولا تطلب شيئاً، وليس فيها رابط أو مرفق، ولا تضغط عليك. ليست كل رسالة تهديداً.",
      },
    },
  },
  {
    id: "ceo-transfer",
    kind: "email",
    scam: true,
    content: {
      en: {
        label: "Email",
        from: "General Manager <gm.office@mail-fast.example>",
        subject: "Urgent and confidential",
        body: "I am in a meeting and cannot take calls. I need you to make a bank transfer to a new supplier in the next 30 minutes. Reply with confirmation and keep this between us.",
        why: "Scam. A manager writing from an outside address, asking for money urgently and telling you not to call or tell anyone, is a classic fraud. Always confirm by phone on a number you already know.",
      },
      ar: {
        label: "بريد إلكتروني",
        from: "General Manager <gm.office@mail-fast.example>",
        subject: "عاجل وسري",
        body: "أنا في اجتماع ولا أستطيع الرد على الهاتف. أحتاج منك تحويلاً بنكياً لمورّد جديد خلال 30 دقيقة. أكّد لي بالرد، وليبقَ الأمر بيننا.",
        why: "احتيال. مدير يكتب من عنوان خارجي، ويطلب مالاً على عجل، ويطلب ألا تتصل ولا تخبر أحداً: هذا احتيال معروف. تأكد دائماً بالاتصال على رقم تعرفه مسبقاً.",
      },
    },
  },
  {
    id: "invoice-exe",
    kind: "email",
    scam: true,
    content: {
      en: {
        label: "Email with an attachment",
        from: "Accounts <billing@supplier-docs.example>",
        subject: "Overdue invoice 8841",
        body: "Please find the overdue invoice attached and settle it today. Attachment: Invoice_8841.pdf.exe",
        why: "Scam. The file ends in .exe, which is a program, not a document. The .pdf in the middle is there to fool you. Do not open attachments you were not expecting, especially from a sender you do not know.",
      },
      ar: {
        label: "بريد إلكتروني بمرفق",
        from: "Accounts <billing@supplier-docs.example>",
        subject: "فاتورة متأخرة 8841",
        body: "مرفق لكم الفاتورة المتأخرة، ونرجو سدادها اليوم. المرفق: Invoice_8841.pdf.exe",
        why: "احتيال. الملف ينتهي بـ ‎.exe، أي أنه برنامج وليس مستنداً، ووجود ‎.pdf في وسطه للخداع. لا تفتح مرفقاً لم تكن تنتظره، خاصة من مرسل لا تعرفه.",
      },
    },
  },
  {
    id: "bookmark",
    kind: "link",
    scam: false,
    content: {
      en: {
        label: "Address bar",
        from: "https://mail.yourcompany.example/",
        body: "You open your company email from the bookmark you saved yourself. The address bar shows this address.",
        why: "Safe. You reached the page from your own bookmark, and the address is your company's domain. Typing the address or using a saved bookmark is safer than following a link in a message.",
      },
      ar: {
        label: "شريط العنوان",
        from: "https://mail.yourcompany.example/",
        body: "فتحتَ بريد شركتك من الإشارة المرجعية التي حفظتها بنفسك، ويظهر هذا العنوان في شريط المتصفح.",
        why: "آمنة. وصلت إلى الصفحة من إشارتك المرجعية، والعنوان هو نطاق شركتك. كتابة العنوان بنفسك أو استخدام إشارة محفوظة أكثر أماناً من اتباع رابط في رسالة.",
      },
    },
  },
  {
    id: "otp-call",
    kind: "call",
    scam: true,
    content: {
      en: {
        label: "Phone call",
        from: "Unknown number",
        body: "The caller says he is from your bank's security team. He says someone tried to use your card, and asks you to read out the code you just received by text so he can block the transaction.",
        why: "Scam. A verification code is for you alone. No bank or company employee needs it, and the code he asks for is the one that approves his own transaction. Hang up and call the number on your card.",
      },
      ar: {
        label: "مكالمة هاتفية",
        from: "رقم مجهول",
        body: "يقول المتصل إنه من فريق الأمن في مصرفك، وإن أحداً حاول استخدام بطاقتك، ويطلب أن تقرأ له الرمز الذي وصلك للتو في رسالة نصية ليوقف العملية.",
        why: "احتيال. رمز التحقق لك وحدك، ولا يحتاج إليه أي موظف في مصرف أو شركة. والرمز الذي يطلبه هو ما يعتمد عمليته هو. أنهِ المكالمة واتصل بالرقم المكتوب على بطاقتك.",
      },
    },
  },
  {
    id: "mfa-push",
    kind: "app",
    scam: true,
    content: {
      en: {
        label: "Sign-in approval on your phone",
        from: "Authenticator app",
        body: 'At 2:10 am your phone shows: "Approve sign-in to your work account?" You are not signing in to anything.',
        why: "Scam attempt. Someone has your password and is trying to get in. Tap Deny, never Approve to make the prompts stop, then change your password and tell your IT team.",
      },
      ar: {
        label: "طلب موافقة على تسجيل الدخول",
        from: "تطبيق المصادقة",
        body: "في الساعة 2:10 فجراً يظهر على جوالك: «هل توافق على تسجيل الدخول إلى حساب العمل؟» وأنت لا تسجّل الدخول إلى أي شيء.",
        why: "محاولة احتيال. أحدهم يملك كلمة مرورك ويحاول الدخول. اضغط «رفض»، ولا توافق أبداً لتتوقف الإشعارات، ثم غيّر كلمة المرور وأبلغ فريق تقنية المعلومات.",
      },
    },
  },
  {
    id: "requested-reset",
    kind: "email",
    scam: false,
    content: {
      en: {
        label: "Email",
        from: "Accounts <no-reply@yourcompany.example>",
        subject: "Reset your password",
        body: 'One minute ago you pressed "Forgot password" on your company portal. This email arrives with a reset link that points to yourcompany.example.',
        why: "Safe. You asked for it yourself a moment ago, the sender is the usual address, and the link goes to the same domain. A reset email you did not request is a different story: ignore it and report it.",
      },
      ar: {
        label: "بريد إلكتروني",
        from: "Accounts <no-reply@yourcompany.example>",
        subject: "إعادة تعيين كلمة المرور",
        body: "قبل دقيقة ضغطتَ «نسيت كلمة المرور» في بوابة شركتك، فوصلك هذا البريد وفيه رابط إعادة التعيين يشير إلى yourcompany.example.",
        why: "آمنة. أنت من طلبها قبل لحظات، والمرسل هو العنوان المعتاد، والرابط يذهب إلى النطاق نفسه. أما رسالة إعادة تعيين لم تطلبها فأمر آخر: تجاهلها وأبلغ عنها.",
      },
    },
  },
];

interface QuizCopy {
  metaTitle: string;
  metaDescription: string;
  name: string;
  h1: string;
  summary: string;
  question: string;
  of: string;
  safe: string;
  scam: string;
  correct: string;
  wrong: string;
  next: string;
  finish: string;
  resultTitle: string;
  score: string;
  levels: { min: number; title: string; text: string }[];
  retry: string;
  share: string;
  shareText: string;
  copied: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  ctaWhatsapp: string;
  tipsTitle: string;
  tips: { title: string; text: string }[];
  note: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
}

export const QUIZ_COPY: Record<Language, QuizCopy> = {
  en: {
    metaTitle: "Phishing Awareness Test: Spot the Scam | Thoughts House",
    metaDescription:
      "Free 10-question phishing test. Decide whether each email, text, link or call is safe or a scam, and learn the sign that gives it away. No sign-up needed.",
    name: "Phishing Test",
    h1: "Phishing Test: Can You Spot the Scam?",
    summary:
      "Ten short examples of emails, text messages, links and calls. Decide whether each one is safe or a scam, and see the sign that gives it away. It takes about three minutes and needs no sign-up.",
    question: "Question",
    of: "of",
    safe: "Safe",
    scam: "Scam",
    correct: "Correct",
    wrong: "Not quite",
    next: "Next question",
    finish: "See my result",
    resultTitle: "Your result",
    score: "correct answers out of",
    levels: [
      {
        min: 9,
        title: "Hard to fool",
        text: "You read the sender, the link and the request before acting. Share the test with your colleagues: an attacker only needs one person to click.",
      },
      {
        min: 6,
        title: "Good, with a few gaps",
        text: "You caught most of them. Read the explanations for the ones you missed, since attackers rely on exactly those details.",
      },
      {
        min: 0,
        title: "Worth a second look",
        text: "These messages are designed to fool busy people, so you are not alone. Go through the five signs below, then try again.",
      },
    ],
    retry: "Try again",
    share: "Copy test link",
    shareText:
      "Can you spot a scam message? Try this free 3-minute phishing test:",
    copied: "Link copied",
    ctaTitle: "Protect your whole organization, not just one inbox",
    ctaText:
      "Awareness helps, but one click is enough. Thoughts House sets up email security, firewalls and endpoint protection for organizations in Dammam and across Saudi Arabia.",
    ctaButton: "Request a security assessment",
    ctaWhatsapp: "Chat on WhatsApp",
    tipsTitle: "Five signs of a phishing message",
    tips: [
      {
        title: "The sender's address does not match",
        text: "Look at the full address, not the display name. A message about your company account should come from your company's domain.",
      },
      {
        title: "It rushes you",
        text: "Deadlines, locked accounts and threats are there to stop you from thinking. A real request can wait five minutes while you check.",
      },
      {
        title: "The link goes somewhere else",
        text: "Read the address from the end. The real site is the part just before the first single slash.",
      },
      {
        title: "It asks for a code, a password or a payment",
        text: "No one needs your password or verification code. Payment and bank detail changes should be confirmed by phone on a known number.",
      },
      {
        title: "The attachment was not expected",
        text: "Be careful with files you did not ask for, and never open one that ends in .exe, .scr or .js.",
      },
    ],
    note: "All examples on this page are invented for training. They do not refer to any real organization.",
    faqTitle: "Questions about phishing",
    faq: [
      {
        q: "What is phishing?",
        a: "Phishing is a message that pretends to come from someone you trust, such as your bank, your manager or your IT team, to make you give away a password, a verification code or a payment, or to open a harmful file.",
      },
      {
        q: "What should I do if I clicked a phishing link?",
        a: "Do not enter any details. If you already did, change that password at once from the real site, turn on two-step verification, and tell your IT team or bank. Reporting quickly limits the damage.",
      },
      {
        q: "How can a company reduce phishing risk?",
        a: "Combine regular staff awareness with technical controls: email filtering, two-step verification, endpoint protection and a firewall with web filtering, plus a simple way for staff to report suspicious messages.",
      },
      {
        q: "Is this phishing test free?",
        a: "Yes. The test is free, needs no sign-up and does not collect your answers by name. You can share it with your team.",
      },
    ],
  },
  ar: {
    metaTitle: "اختبار التصيّد الإلكتروني: اكشف الاحتيال | بيت الأفكار",
    metaDescription:
      "اختبار مجاني من 10 أسئلة عن التصيّد الإلكتروني. حدّد هل كل رسالة أو رابط أو مكالمة آمنة أم احتيال، وتعرّف على العلامة التي تكشفها. دون تسجيل.",
    name: "اختبار التصيّد",
    h1: "اختبار التصيّد الإلكتروني: هل تكشف رسالة الاحتيال؟",
    summary:
      "عشرة أمثلة قصيرة لرسائل بريد ورسائل نصية وروابط ومكالمات. حدّد هل كل واحدة آمنة أم احتيال، وشاهد العلامة التي تكشفها. يستغرق نحو ثلاث دقائق ولا يحتاج إلى تسجيل.",
    question: "السؤال",
    of: "من",
    safe: "آمنة",
    scam: "احتيال",
    correct: "إجابة صحيحة",
    wrong: "ليست الإجابة الصحيحة",
    next: "السؤال التالي",
    finish: "اعرض نتيجتي",
    resultTitle: "نتيجتك",
    score: "إجابات صحيحة من",
    levels: [
      {
        min: 9,
        title: "يصعب خداعك",
        text: "تقرأ المرسل والرابط والطلب قبل أن تتصرف. شارك الاختبار مع زملائك، فالمهاجم يكفيه شخص واحد يضغط.",
      },
      {
        min: 6,
        title: "جيد، مع بعض الثغرات",
        text: "كشفت معظمها. اقرأ شرح الأسئلة التي أخطأت فيها، فالمهاجمون يعتمدون على هذه التفاصيل بالذات.",
      },
      {
        min: 0,
        title: "يستحق مراجعة ثانية",
        text: "هذه الرسائل مصممة لخداع المشغولين، فلست وحدك. راجع العلامات الخمس أدناه ثم أعد المحاولة.",
      },
    ],
    retry: "أعد المحاولة",
    share: "انسخ رابط الاختبار",
    shareText: "هل تكشف رسالة الاحتيال؟ جرّب هذا الاختبار المجاني في 3 دقائق:",
    copied: "تم نسخ الرابط",
    ctaTitle: "احمِ منشأتك كلها، لا صندوق بريد واحداً",
    ctaText:
      "التوعية مفيدة، لكن ضغطة واحدة تكفي. يجهّز بيت الأفكار حماية البريد وجدران الحماية وحماية الأجهزة للمنشآت في الدمام وجميع مناطق المملكة.",
    ctaButton: "اطلب تقييماً أمنياً",
    ctaWhatsapp: "راسلنا على واتساب",
    tipsTitle: "خمس علامات تكشف رسالة التصيّد",
    tips: [
      {
        title: "عنوان المرسل لا يطابق الجهة",
        text: "انظر إلى العنوان كاملاً لا إلى الاسم الظاهر. الرسالة عن حساب شركتك يجب أن تأتي من نطاق شركتك.",
      },
      {
        title: "تستعجلك",
        text: "المهل والحسابات المقفلة والتهديدات هدفها أن تمنعك من التفكير. الطلب الحقيقي ينتظر خمس دقائق حتى تتحقق.",
      },
      {
        title: "الرابط يذهب إلى مكان آخر",
        text: "اقرأ العنوان من نهايته. الموقع الحقيقي هو الجزء الذي يسبق أول شرطة مائلة مفردة.",
      },
      {
        title: "تطلب رمزاً أو كلمة مرور أو دفعة",
        text: "لا أحد يحتاج إلى كلمة مرورك أو رمز التحقق. وتغيير بيانات الدفع أو الحساب البنكي يُؤكَّد بالهاتف على رقم معروف.",
      },
      {
        title: "المرفق لم تكن تنتظره",
        text: "احذر الملفات التي لم تطلبها، ولا تفتح أبداً ملفاً ينتهي بـ ‎.exe أو ‎.scr أو ‎.js.",
      },
    ],
    note: "كل الأمثلة في هذه الصفحة مختلقة للتدريب، ولا تشير إلى أي جهة حقيقية.",
    faqTitle: "أسئلة عن التصيّد الإلكتروني",
    faq: [
      {
        q: "ما هو التصيّد الإلكتروني؟",
        a: "التصيّد رسالة تنتحل صفة جهة تثق بها، مثل مصرفك أو مديرك أو فريق تقنية المعلومات، لتدفعك إلى إعطاء كلمة مرور أو رمز تحقق أو دفعة مالية، أو إلى فتح ملف ضار.",
      },
      {
        q: "ماذا أفعل إذا ضغطت على رابط تصيّد؟",
        a: "لا تُدخل أي بيانات. وإن أدخلتها، فغيّر كلمة المرور فوراً من الموقع الحقيقي، وفعّل التحقق بخطوتين، وأبلغ فريق تقنية المعلومات أو مصرفك. الإبلاغ السريع يحدّ من الضرر.",
      },
      {
        q: "كيف تقلل الشركة مخاطر التصيّد؟",
        a: "بالجمع بين توعية الموظفين بانتظام والضوابط التقنية: تصفية البريد، والتحقق بخطوتين، وحماية الأجهزة، وجدار حماية مع تصفية المواقع، مع طريقة سهلة يبلّغ بها الموظفون عن الرسائل المشبوهة.",
      },
      {
        q: "هل اختبار التصيّد هذا مجاني؟",
        a: "نعم. الاختبار مجاني، ولا يحتاج إلى تسجيل، ولا يجمع إجاباتك باسمك. ويمكنك مشاركته مع فريقك.",
      },
    ],
  },
};
