/*
 * Self-assessment tests (/tests/<slug>/) and the tests hub (/tests/).
 * Each question is answered Yes, No or Not sure; "Yes" is the good practice. The result lists the
 * gaps with one practical step each. Nothing the visitor answers is stored or sent anywhere.
 */
import type { Language } from "@/seo";
import type { ServiceSlug } from "./services";

export type AssessmentSlug =
  | "backup-readiness"
  | "cybersecurity-readiness"
  | "password-security"
  | "wifi-security";

interface AssessmentCopy {
  metaTitle: string;
  metaDescription: string;
  /** Short name for cards, links and breadcrumbs */
  name: string;
  h1: string;
  summary: string;
  audience: string;
  minutes: string;
  questions: {
    q: string;
    /** The answer that is good practice; "yes" unless stated */
    good?: "yes" | "no";
    /** Why it matters, shown after answering */
    why: string;
    /** One practical step, listed in the result when the answer is not Yes */
    fix: string;
  }[];
  /** Highest `min` first */
  levels: { min: number; title: string; text: string }[];
  ctaTitle: string;
  ctaText: string;
  faq: { q: string; a: string }[];
}

export interface Assessment {
  slug: AssessmentSlug;
  service: ServiceSlug;
  content: Record<Language, AssessmentCopy>;
}

export const ASSESSMENTS: Assessment[] = [
  {
    slug: "backup-readiness",
    service: "cloud-backup",
    content: {
      en: {
        metaTitle: "Backup Readiness Test: Could You Recover? | Thoughts House",
        metaDescription:
          "Free 8-question backup test for business owners and IT managers. Check whether your backups would survive ransomware or a failed server, and see what to fix.",
        name: "Backup Readiness Test",
        h1: "Backup Readiness Test: Could Your Business Recover?",
        summary:
          "Eight yes-or-no questions about how your business data is backed up. At the end you get a readiness level and a short list of what to fix. It takes about two minutes and needs no sign-up.",
        audience: "For business owners and IT managers",
        minutes: "8 questions · 2 minutes",
        questions: [
          {
            q: "Is your important business data backed up automatically, on a fixed schedule?",
            why: "Manual backups get skipped on busy days, and those are the days things go wrong. A schedule removes the human step.",
            fix: "Set an automatic daily backup for servers, shared folders and key computers.",
          },
          {
            good: "no",
            q: "Are all your backup copies kept in the same building as your servers?",
            why: "Fire, theft, flooding or a power fault can destroy the server and a backup sitting next to it at the same time.",
            fix: "Keep one copy offsite or in the cloud, updated automatically.",
          },
          {
            q: "Is one copy protected from being changed or deleted, even by an administrator account?",
            why: "Ransomware looks for backups and encrypts or deletes them first. A copy that cannot be changed (immutable) or is offline survives.",
            fix: "Add an immutable or offline copy that ransomware cannot reach.",
          },
          {
            q: "Have you restored real files from your backup in the last six months to test it?",
            why: "A backup is only proven when it restores. Many problems, such as incomplete jobs or damaged files, appear only during a restore.",
            fix: "Run a restore test now, then repeat it every few months and record the result.",
          },
          {
            good: "no",
            q: "Do you rely only on Microsoft 365 or Google to keep your email and cloud files, with no separate backup?",
            why: "Cloud services keep the service running, but deleted or overwritten data may be gone after a retention period. Your own backup covers that gap.",
            fix: "Add a backup for mailboxes, OneDrive and SharePoint.",
          },
          {
            q: "Does someone check the backup reports or alerts every week?",
            why: "Backups fail quietly: a full disk, an expired license or a changed password. Without a check, you find out when you need the data.",
            fix: "Send backup alerts to a named person and review the report weekly.",
          },
          {
            q: "Do you know how long it would take to be working again after losing your main server?",
            why: "Hours and days of downtime cost very differently. Knowing the recovery time lets you decide whether it is acceptable before it happens.",
            fix: "Agree a recovery time target and check that your backup method can meet it.",
          },
          {
            good: "no",
            q: "Does the same administrator password open both your servers and your backup system?",
            why: "If the same administrator password opens both the servers and the backups, an attacker who gets one gets both.",
            fix: "Use a separate account with two-step verification for the backup system.",
          },
        ],
        levels: [
          {
            min: 7,
            title: "Well prepared",
            text: "Your backups follow good practice. Keep testing restores and reviewing reports so it stays that way.",
          },
          {
            min: 4,
            title: "Partly protected",
            text: "You have a backup, but some gaps could stop a full recovery. Start with the points listed below.",
          },
          {
            min: 0,
            title: "At risk",
            text: "A ransomware attack or a failed server could cost you data you cannot get back. The points below are the place to start.",
          },
        ],
        ctaTitle: "Want a backup you can rely on?",
        ctaText:
          "Thoughts House designs and supports backup for organizations in Dammam and across Saudi Arabia, using QNAP storage, Veeam and cloud copies, with restore tests included.",
        faq: [
          {
            q: "What is the 3-2-1 backup rule?",
            a: "Keep three copies of your data, on two different types of storage, with one copy offsite. Many organizations now add one immutable or offline copy to protect against ransomware.",
          },
          {
            q: "How often should a business back up its data?",
            a: "Most businesses back up at least once a day. Systems that change constantly, such as accounting or ERP databases, are often backed up several times a day.",
          },
          {
            q: "Does a NAS count as a backup?",
            a: "A NAS is a good place to store backups, but it should not hold the only copy. Keep another copy offsite or in the cloud, and protect one copy from deletion.",
          },
        ],
      },
      ar: {
        metaTitle: "اختبار جاهزية النسخ الاحتياطي لمنشأتك | بيت الأفكار",
        metaDescription:
          "اختبار مجاني من 8 أسئلة لأصحاب المنشآت ومديري التقنية. اعرف هل تصمد نسخك الاحتياطية أمام برامج الفدية أو تعطل السيرفر، وما الذي تصلحه.",
        name: "اختبار جاهزية النسخ الاحتياطي",
        h1: "اختبار جاهزية النسخ الاحتياطي: هل تستعيد منشأتك بياناتها؟",
        summary:
          "ثمانية أسئلة بنعم أو لا عن طريقة نسخ بيانات منشأتك. في النهاية تحصل على مستوى الجاهزية وقائمة قصيرة بما تصلحه. يستغرق نحو دقيقتين ولا يحتاج إلى تسجيل.",
        audience: "لأصحاب المنشآت ومديري تقنية المعلومات",
        minutes: "8 أسئلة · دقيقتان",
        questions: [
          {
            q: "هل تُنسخ بيانات منشأتك المهمة تلقائياً وفق جدول ثابت؟",
            why: "النسخ اليدوي يُنسى في الأيام المزدحمة، وهي الأيام التي تقع فيها المشاكل. الجدولة تلغي الاعتماد على التذكّر.",
            fix: "اضبط نسخاً تلقائياً يومياً للسيرفرات والمجلدات المشتركة والأجهزة المهمة.",
          },
          {
            good: "no",
            q: "هل كل نسخكم الاحتياطية محفوظة في المبنى نفسه الذي فيه السيرفرات؟",
            why: "الحريق أو السرقة أو تسرب الماء أو عطل الكهرباء قد يتلف السيرفر والنسخة الموجودة بجانبه في وقت واحد.",
            fix: "احتفظ بنسخة خارج الموقع أو في السحابة، تُحدَّث تلقائياً.",
          },
          {
            q: "هل توجد نسخة محمية من التعديل أو الحذف، حتى من حساب المسؤول؟",
            why: "برامج الفدية تبحث عن النسخ الاحتياطية وتشفّرها أو تحذفها أولاً. والنسخة غير القابلة للتغيير أو المفصولة عن الشبكة تنجو.",
            fix: "أضف نسخة غير قابلة للتغيير أو مفصولة عن الشبكة لا تصل إليها برامج الفدية.",
          },
          {
            q: "هل استعدتم ملفات حقيقية من النسخة الاحتياطية خلال آخر ستة أشهر لاختبارها؟",
            why: "النسخة لا تثبت صلاحيتها إلا بالاستعادة. ومشاكل كثيرة، مثل مهام غير مكتملة أو ملفات تالفة، لا تظهر إلا عند الاستعادة.",
            fix: "نفّذ اختبار استعادة الآن، ثم كرّره كل بضعة أشهر وسجّل نتيجته.",
          },
          {
            good: "no",
            q: "هل تعتمدون على Microsoft 365 أو Google وحدهما لحفظ البريد والملفات السحابية، دون نسخة احتياطية مستقلة؟",
            why: "الخدمات السحابية تضمن استمرار الخدمة، لكن البيانات المحذوفة أو المستبدلة قد تختفي بعد مدة الاحتفاظ. ونسختك الخاصة تسد هذه الثغرة.",
            fix: "أضف نسخاً احتياطياً لصناديق البريد وOneDrive وSharePoint.",
          },
          {
            q: "هل يراجع أحد تقارير النسخ الاحتياطي أو تنبيهاته كل أسبوع؟",
            why: "النسخ الاحتياطي يتعطل بصمت: قرص ممتلئ، أو ترخيص منتهٍ، أو كلمة مرور تغيّرت. ودون متابعة تكتشف ذلك حين تحتاج إلى البيانات.",
            fix: "وجّه تنبيهات النسخ إلى شخص محدد، وراجع التقرير أسبوعياً.",
          },
          {
            q: "هل تعرفون كم يستغرق الرجوع إلى العمل بعد فقدان السيرفر الرئيسي؟",
            why: "تكلفة التوقف ساعات تختلف كثيراً عن تكلفته أياماً. ومعرفة زمن الاستعادة تتيح لك أن تقرر هل هو مقبول قبل وقوع المشكلة.",
            fix: "حدّد زمن الاستعادة المستهدف، وتأكد أن طريقة النسخ الحالية تحققه.",
          },
          {
            good: "no",
            q: "هل كلمة مرور المسؤول نفسها تفتح السيرفرات ونظام النسخ الاحتياطي معاً؟",
            why: "إذا كانت كلمة مرور المسؤول نفسها تفتح السيرفرات والنسخ الاحتياطية، فمن يحصل على واحدة يحصل على الاثنتين.",
            fix: "استخدم حساباً مستقلاً بتحقق بخطوتين لنظام النسخ الاحتياطي.",
          },
        ],
        levels: [
          {
            min: 7,
            title: "جاهزية جيدة",
            text: "نسخك الاحتياطي يتبع الممارسات السليمة. واصل اختبار الاستعادة ومراجعة التقارير ليبقى كذلك.",
          },
          {
            min: 4,
            title: "حماية جزئية",
            text: "لديك نسخ احتياطي، لكن بعض الثغرات قد تمنع الاستعادة الكاملة. ابدأ بالنقاط المذكورة أدناه.",
          },
          {
            min: 0,
            title: "معرّضة للخطر",
            text: "هجوم فدية أو تعطل سيرفر قد يكلفك بيانات لا تُستعاد. النقاط أدناه هي نقطة البداية.",
          },
        ],
        ctaTitle: "تريد نسخاً احتياطياً تعتمد عليه؟",
        ctaText:
          "يصمم بيت الأفكار حلول النسخ الاحتياطي ويدعمها للمنشآت في الدمام وجميع مناطق المملكة، بتخزين QNAP وبرنامج Veeam ونسخ سحابية، مع اختبارات استعادة.",
        faq: [
          {
            q: "ما قاعدة 3-2-1 في النسخ الاحتياطي؟",
            a: "احتفظ بثلاث نسخ من بياناتك، على نوعين مختلفين من وسائط التخزين، مع نسخة واحدة خارج الموقع. وتضيف منشآت كثيرة اليوم نسخة غير قابلة للتغيير أو مفصولة للحماية من برامج الفدية.",
          },
          {
            q: "كم مرة تنسخ المنشأة بياناتها؟",
            a: "معظم المنشآت تنسخ مرة واحدة يومياً على الأقل. أما الأنظمة التي تتغير باستمرار، مثل قواعد بيانات المحاسبة أو ERP، فتُنسخ غالباً عدة مرات في اليوم.",
          },
          {
            q: "هل يُعد جهاز NAS نسخة احتياطية؟",
            a: "جهاز NAS مكان جيد لحفظ النسخ الاحتياطية، لكن لا ينبغي أن يحمل النسخة الوحيدة. احتفظ بنسخة أخرى خارج الموقع أو في السحابة، واحمِ إحدى النسخ من الحذف.",
          },
        ],
      },
    },
  },
  {
    slug: "cybersecurity-readiness",
    service: "cybersecurity",
    content: {
      en: {
        metaTitle:
          "Cybersecurity Readiness Test for Businesses | Thoughts House",
        metaDescription:
          "Free 10-question cybersecurity self-assessment for businesses in Saudi Arabia. Check your firewall, updates, access and backups, and get a list of gaps to fix.",
        name: "Cybersecurity Readiness Test",
        h1: "Cybersecurity Readiness Test for Your Business",
        summary:
          "Ten yes-or-no questions about the basic protections every business needs. At the end you get a risk level and a list of the gaps to close first. It takes about three minutes and needs no sign-up.",
        audience: "For business owners and IT managers",
        minutes: "10 questions · 3 minutes",
        questions: [
          {
            good: "no",
            q: "Is your office connected to the internet through a home-type router only, with no business firewall?",
            why: "A home router or an expired license only passes traffic. The security services, such as intrusion prevention and web filtering, need an active subscription.",
            fix: "Install a business firewall, or renew the security subscription on the one you have.",
          },
          {
            q: "Does every computer and server have endpoint protection that is managed from one console?",
            why: "One unprotected laptop is enough for an attacker. Central management shows which devices are missing protection or out of date.",
            fix: "Deploy managed endpoint protection on all computers and servers.",
          },
          {
            q: "Is two-step verification turned on for email and remote access?",
            why: "Stolen passwords are the most common way in. A second step stops most of these attempts even when the password is known.",
            fix: "Turn on two-step verification for email, VPN and administrator accounts.",
          },
          {
            q: "Are security updates installed regularly on computers, servers and network devices?",
            why: "Attackers use known weaknesses that updates have already fixed. Firewalls, switches and NAS devices need updates too, not only Windows.",
            fix: "Set a monthly update routine that includes network and storage devices.",
          },
          {
            good: "no",
            q: "Do most staff have administrator rights on their own computers?",
            why: "Malware runs with the rights of the user who opened it. Fewer administrator accounts means less damage from one mistake.",
            fix: "Remove administrator rights from daily accounts and keep separate admin accounts.",
          },
          {
            good: "no",
            q: "Do visitors connect to the same Wi-Fi network as your computers and servers?",
            why: "Visitors' phones and laptops are outside your control. On the same network, an infected device can reach your systems.",
            fix: "Create a separate guest Wi-Fi network that cannot reach internal systems.",
          },
          {
            q: "Do you have a tested backup with a copy kept offsite or protected from deletion?",
            why: "When everything else fails, the backup decides whether you recover in hours or lose the data.",
            fix: "Add an offsite or immutable copy and test a restore.",
          },
          {
            q: "Have your staff had security awareness training in the last 12 months?",
            why: "Most attacks start with a message to an employee. People who know the signs report it instead of clicking.",
            fix: "Run a short awareness session, and share our free phishing test with your team.",
          },
          {
            q: "Is there a written plan for what to do, and who to call, if you are attacked?",
            why: "In the first hour of an incident, people lose time deciding who is in charge. A one-page plan with names and numbers saves that time.",
            fix: "Write a one-page incident plan with contacts and first steps.",
          },
          {
            good: "no",
            q: "Do former employees still have accounts that work after they leave?",
            why: "Old accounts with working passwords are an open door, and nobody watches them.",
            fix: "Add account removal to your leaving checklist and review active accounts every quarter.",
          },
        ],
        levels: [
          {
            min: 9,
            title: "Strong foundation",
            text: "The basic protections are in place. The next step is to review them regularly and test your incident plan.",
          },
          {
            min: 6,
            title: "Moderate risk",
            text: "You have several protections, but the gaps below are the ones attackers commonly use. Close them in order.",
          },
          {
            min: 0,
            title: "High risk",
            text: "Several basic protections are missing. Start with the first three points below; they reduce the most risk for the least effort.",
          },
        ],
        ctaTitle: "Want help closing these gaps?",
        ctaText:
          "Thoughts House supplies, installs and supports firewalls, endpoint protection and backup for organizations in Dammam and across Saudi Arabia, and can review your setup on site.",
        faq: [
          {
            q: "What are the most important cybersecurity basics for a small business?",
            a: "A business firewall with an active subscription, managed endpoint protection, two-step verification on email, regular updates, limited administrator rights, and a tested backup with an offsite copy.",
          },
          {
            q: "Does this test replace a security audit?",
            a: "No. It is a quick self-assessment of the basics. A full audit reviews your actual configuration, and organizations subject to the NCA Essential Cybersecurity Controls need a formal assessment.",
          },
          {
            q: "Are my answers saved?",
            a: "No. The test runs in your browser. Your answers are not stored or sent to us.",
          },
        ],
      },
      ar: {
        metaTitle: "اختبار جاهزية الأمن السيبراني للمنشآت | بيت الأفكار",
        metaDescription:
          "تقييم ذاتي مجاني من 10 أسئلة للأمن السيبراني في منشأتك. راجع جدار الحماية والتحديثات والصلاحيات والنسخ الاحتياطي، واحصل على قائمة بالثغرات.",
        name: "اختبار جاهزية الأمن السيبراني",
        h1: "اختبار جاهزية الأمن السيبراني لمنشأتك",
        summary:
          "عشرة أسئلة بنعم أو لا عن وسائل الحماية الأساسية التي تحتاج إليها كل منشأة. في النهاية تحصل على مستوى المخاطر وقائمة بالثغرات التي تبدأ بها. يستغرق نحو ثلاث دقائق ولا يحتاج إلى تسجيل.",
        audience: "لأصحاب المنشآت ومديري تقنية المعلومات",
        minutes: "10 أسئلة · 3 دقائق",
        questions: [
          {
            good: "no",
            q: "هل يتصل مكتبكم بالإنترنت عبر راوتر منزلي فقط، دون جدار حماية للأعمال؟",
            why: "راوتر المنازل أو الجهاز المنتهي ترخيصه يمرر البيانات فقط. أما خدمات الحماية، مثل منع الاختراق وتصفية المواقع، فتحتاج إلى اشتراك فعّال.",
            fix: "ركّب جدار حماية للأعمال، أو جدّد اشتراك الحماية في الجهاز الموجود.",
          },
          {
            q: "هل على كل جهاز كمبيوتر وسيرفر برنامج حماية يُدار من لوحة واحدة؟",
            why: "جهاز محمول واحد غير محمي يكفي المهاجم. والإدارة المركزية تُظهر الأجهزة التي تنقصها الحماية أو التحديث.",
            fix: "ثبّت حماية مُدارة على كل الأجهزة والسيرفرات.",
          },
          {
            q: "هل التحقق بخطوتين مفعّل للبريد والدخول عن بُعد؟",
            why: "كلمات المرور المسروقة أكثر طرق الاختراق شيوعاً. والخطوة الثانية توقف معظم هذه المحاولات حتى لو عُرفت كلمة المرور.",
            fix: "فعّل التحقق بخطوتين للبريد وVPN وحسابات المسؤولين.",
          },
          {
            q: "هل تُثبَّت التحديثات الأمنية بانتظام على الأجهزة والسيرفرات وأجهزة الشبكة؟",
            why: "المهاجمون يستغلون ثغرات معروفة أصلحتها التحديثات. وجدران الحماية والسويتشات وأجهزة NAS تحتاج إلى تحديث أيضاً، لا Windows فقط.",
            fix: "ضع جدول تحديث شهرياً يشمل أجهزة الشبكة والتخزين.",
          },
          {
            good: "no",
            q: "هل لدى معظم الموظفين صلاحيات المسؤول على أجهزتهم؟",
            why: "البرنامج الخبيث يعمل بصلاحيات من فتحه. وكلما قلّت حسابات المسؤولين قلّ ضرر الخطأ الواحد.",
            fix: "أزل صلاحيات المسؤول من الحسابات اليومية، وخصص حسابات مستقلة للإدارة.",
          },
          {
            good: "no",
            q: "هل يتصل الزوار بشبكة Wi-Fi نفسها التي عليها أجهزتكم وسيرفراتكم؟",
            why: "جوالات الزوار وأجهزتهم خارج سيطرتكم. وعلى الشبكة نفسها يستطيع جهاز مصاب الوصول إلى أنظمتكم.",
            fix: "أنشئ شبكة Wi-Fi مستقلة للضيوف لا تصل إلى الأنظمة الداخلية.",
          },
          {
            q: "هل لديكم نسخ احتياطي مُجرَّب، مع نسخة خارج الموقع أو محمية من الحذف؟",
            why: "حين يفشل كل شيء آخر، النسخة الاحتياطية هي ما يحدد هل تعودون خلال ساعات أم تفقدون البيانات.",
            fix: "أضف نسخة خارج الموقع أو غير قابلة للتغيير، واختبر الاستعادة.",
          },
          {
            q: "هل تلقى الموظفون توعية أمنية خلال آخر 12 شهراً؟",
            why: "معظم الهجمات تبدأ برسالة إلى موظف. ومن يعرف العلامات يبلّغ عنها بدل أن يضغط.",
            fix: "نظّم جلسة توعية قصيرة، وشارك اختبار التصيّد المجاني مع فريقك.",
          },
          {
            q: "هل توجد خطة مكتوبة لما تفعلونه، ومن تتصلون به، عند وقوع هجوم؟",
            why: "في الساعة الأولى من الحادثة يضيع الوقت في تحديد المسؤول. وخطة من صفحة واحدة بالأسماء والأرقام توفّر هذا الوقت.",
            fix: "اكتب خطة حوادث من صفحة واحدة فيها جهات الاتصال والخطوات الأولى.",
          },
          {
            good: "no",
            q: "هل تبقى حسابات الموظفين السابقين تعمل بعد مغادرتهم؟",
            why: "الحسابات القديمة بكلمات مرور تعمل باب مفتوح لا يراقبه أحد.",
            fix: "أضف تعطيل الحسابات إلى إجراءات المغادرة، وراجع الحسابات الفعالة كل ثلاثة أشهر.",
          },
        ],
        levels: [
          {
            min: 9,
            title: "أساس قوي",
            text: "وسائل الحماية الأساسية موجودة. الخطوة التالية مراجعتها بانتظام واختبار خطة الحوادث.",
          },
          {
            min: 6,
            title: "مخاطر متوسطة",
            text: "لديكم عدة وسائل حماية، لكن الثغرات أدناه هي ما يستغله المهاجمون عادة. أغلقوها بالترتيب.",
          },
          {
            min: 0,
            title: "مخاطر عالية",
            text: "تنقصكم عدة وسائل حماية أساسية. ابدؤوا بالنقاط الثلاث الأولى أدناه، فهي تخفض أكبر قدر من المخاطر بأقل جهد.",
          },
        ],
        ctaTitle: "تريد مساعدة في إغلاق هذه الثغرات؟",
        ctaText:
          "يورّد بيت الأفكار جدران الحماية وحماية الأجهزة والنسخ الاحتياطي ويركّبها ويدعمها للمنشآت في الدمام وجميع مناطق المملكة، ويمكنه مراجعة وضعكم في الموقع.",
        faq: [
          {
            q: "ما أهم أساسيات الأمن السيبراني للمنشأة الصغيرة؟",
            a: "جدار حماية للأعمال باشتراك فعّال، وحماية مُدارة للأجهزة، وتحقق بخطوتين للبريد، وتحديثات منتظمة، وصلاحيات مسؤول محدودة، ونسخ احتياطي مُجرَّب مع نسخة خارج الموقع.",
          },
          {
            q: "هل يغني هذا الاختبار عن التدقيق الأمني؟",
            a: "لا. هو تقييم ذاتي سريع للأساسيات. أما التدقيق الكامل فيراجع الإعدادات الفعلية، والجهات الخاضعة للضوابط الأساسية للأمن السيبراني من الهيئة الوطنية تحتاج إلى تقييم رسمي.",
          },
          {
            q: "هل تُحفظ إجاباتي؟",
            a: "لا. الاختبار يعمل في متصفحك، ولا تُخزَّن إجاباتك ولا تُرسل إلينا.",
          },
        ],
      },
    },
  },
  {
    slug: "password-security",
    service: "cybersecurity",
    content: {
      en: {
        metaTitle: "Password Security Test for Businesses | Thoughts House",
        metaDescription:
          "Free 8-question test on how your business handles passwords and accounts. Check for reused passwords, shared logins and missing two-step verification.",
        name: "Password and Accounts Test",
        h1: "Password and Accounts Test: How Safe Are Your Logins?",
        summary:
          "Eight yes-or-no questions about passwords and user accounts in your business. At the end you get a level and a short list of what to fix. It takes about two minutes and needs no sign-up.",
        audience: "For business owners and IT managers",
        minutes: "8 questions · 2 minutes",
        questions: [
          {
            good: "no",
            q: "Do several employees share one login for email or a business system?",
            why: "With a shared login you cannot tell who did what, and you cannot remove one person's access without changing the password for everyone.",
            fix: "Give each person their own account and close shared logins.",
          },
          {
            q: "Is two-step verification turned on for email for all staff?",
            why: "Most break-ins start with a stolen email password. A second step, such as an app prompt, stops the attacker even when the password is known.",
            fix: "Turn on two-step verification for every mailbox, starting with managers and finance.",
          },
          {
            good: "no",
            q: "Do staff use the same password for more than one work system?",
            why: "When one website is breached, attackers try the same email and password everywhere else. A reused password turns one leak into many.",
            fix: "Ask staff to stop reusing passwords, and give them a password manager so it is practical.",
          },
          {
            q: "Does the business provide a password manager for storing passwords?",
            why: "People cannot remember dozens of long passwords, so they reuse them or write them in notes and spreadsheets. A password manager removes the need.",
            fix: "Choose one password manager for the business and move stored passwords into it.",
          },
          {
            q: "Are passwords at least 12 characters long on your main systems?",
            why: "Length matters more than symbols. A long phrase is much harder to guess by trial than a short password with a number at the end.",
            fix: "Set a minimum length of 12 characters and encourage phrases of several words.",
          },
          {
            q: "Do administrators use a separate account for admin work, not their everyday account?",
            why: "If an administrator's everyday account is tricked by a phishing email, the attacker gets full control. A separate admin account limits the damage.",
            fix: "Create separate admin accounts and use them only for admin tasks.",
          },
          {
            q: "Are accounts disabled on the same day an employee leaves?",
            why: "Old accounts are a common way in. Nobody is watching them, and the former employee may still know the password.",
            fix: "Add account removal to the leaving checklist and review active accounts every quarter.",
          },
          {
            good: "no",
            q: "Are any routers, cameras or printers still using the password they came with?",
            why: "Default passwords are published in manuals and online lists. Attackers try them first on any device they can reach.",
            fix: "List your network devices and change every default password.",
          },
        ],
        levels: [
          {
            min: 7,
            title: "Strong habits",
            text: "Your accounts follow good practice. Review the list of active accounts from time to time so it stays that way.",
          },
          {
            min: 4,
            title: "Some weak points",
            text: "The basics are there, but a few gaps make a stolen password more dangerous than it should be. Start with the points below.",
          },
          {
            min: 0,
            title: "Easy to break into",
            text: "One stolen or guessed password could open much of your business. The points below are the place to start.",
          },
        ],
        ctaTitle: "Want help securing your accounts?",
        ctaText:
          "Thoughts House sets up two-step verification, account policies and email protection for organizations in Dammam and across Saudi Arabia.",
        faq: [
          {
            q: "What makes a password strong?",
            a: "Length and uniqueness. A phrase of several unrelated words that you use for one system only is stronger than a short password with symbols, and easier to remember.",
          },
          {
            q: "Is two-step verification by text message enough?",
            a: "It is far better than a password alone. An authenticator app or a security key is stronger, because text messages can be intercepted or redirected.",
          },
          {
            q: "Should staff change passwords every few months?",
            a: "Current guidance is to change a password when there is a sign it was exposed, not on a fixed schedule. Forced frequent changes lead people to pick weaker passwords.",
          },
        ],
      },
      ar: {
        metaTitle: "اختبار أمان كلمات المرور للمنشآت | بيت الأفكار",
        metaDescription:
          "اختبار مجاني من 8 أسئلة عن تعامل منشأتك مع كلمات المرور والحسابات. اكشف كلمات المرور المكررة والحسابات المشتركة وغياب التحقق بخطوتين.",
        name: "اختبار كلمات المرور والحسابات",
        h1: "اختبار كلمات المرور والحسابات: ما مدى أمان حسابات منشأتك؟",
        summary:
          "ثمانية أسئلة بنعم أو لا عن كلمات المرور وحسابات المستخدمين في منشأتك. في النهاية تحصل على مستوى وقائمة قصيرة بما تصلحه. يستغرق نحو دقيقتين ولا يحتاج إلى تسجيل.",
        audience: "لأصحاب المنشآت ومديري تقنية المعلومات",
        minutes: "8 أسئلة · دقيقتان",
        questions: [
          {
            good: "no",
            q: "هل يشترك عدة موظفين في حساب واحد للبريد أو لأحد أنظمة العمل؟",
            why: "مع الحساب المشترك لا تعرف من فعل ماذا، ولا تستطيع سحب صلاحية شخص واحد دون تغيير كلمة المرور على الجميع.",
            fix: "خصّص لكل شخص حسابه، وأغلق الحسابات المشتركة.",
          },
          {
            q: "هل التحقق بخطوتين مفعّل على البريد الإلكتروني لجميع الموظفين؟",
            why: "أغلب الاختراقات تبدأ بكلمة مرور بريد مسروقة. الخطوة الثانية، مثل إشعار في التطبيق، توقف المهاجم حتى لو عرف كلمة المرور.",
            fix: "فعّل التحقق بخطوتين على كل صناديق البريد، وابدأ بالمديرين والمالية.",
          },
          {
            good: "no",
            q: "هل يستخدم الموظفون كلمة المرور نفسها لأكثر من نظام عمل؟",
            why: "عند اختراق موقع واحد يجرّب المهاجمون البريد وكلمة المرور نفسيهما في كل مكان آخر. الكلمة المكررة تحوّل تسريباً واحداً إلى عدة اختراقات.",
            fix: "اطلب من الموظفين عدم تكرار كلمات المرور، ووفّر لهم مدير كلمات مرور ليصبح ذلك عملياً.",
          },
          {
            q: "هل توفّر المنشأة مدير كلمات مرور لحفظ كلمات المرور؟",
            why: "لا أحد يحفظ عشرات الكلمات الطويلة، فيكررها الناس أو يكتبونها في ملاحظات وجداول. مدير كلمات المرور يغني عن ذلك.",
            fix: "اختر مدير كلمات مرور واحداً للمنشأة، وانقل إليه كلمات المرور المحفوظة.",
          },
          {
            q: "هل لا يقل طول كلمات المرور عن 12 حرفاً في أنظمتكم الأساسية؟",
            why: "الطول أهم من الرموز. العبارة الطويلة أصعب في التخمين بالتجربة من كلمة قصيرة في آخرها رقم.",
            fix: "اجعل الحد الأدنى 12 حرفاً، وشجّع على عبارات من عدة كلمات.",
          },
          {
            q: "هل يستخدم مديرو الأنظمة حساباً منفصلاً لأعمال الإدارة، غير حسابهم اليومي؟",
            why: "إذا انخدع حساب المدير اليومي برسالة تصيّد حصل المهاجم على تحكم كامل. الحساب الإداري المنفصل يحدّ من الضرر.",
            fix: "أنشئ حسابات إدارية منفصلة، واستخدمها لمهام الإدارة فقط.",
          },
          {
            q: "هل تُعطَّل حسابات الموظف في يوم مغادرته نفسه؟",
            why: "الحسابات القديمة مدخل شائع. لا أحد يراقبها، وقد يظل الموظف السابق يعرف كلمة المرور.",
            fix: "أضف تعطيل الحسابات إلى إجراءات المغادرة، وراجع الحسابات الفعالة كل ربع سنة.",
          },
          {
            good: "no",
            q: "هل ما زال أي راوتر أو كاميرا أو طابعة يعمل بكلمة المرور التي جاء بها؟",
            why: "كلمات المرور الافتراضية منشورة في الأدلة وقوائم الإنترنت، وهي أول ما يجرّبه المهاجم على أي جهاز يصل إليه.",
            fix: "احصر أجهزة الشبكة، وغيّر كل كلمة مرور افتراضية.",
          },
        ],
        levels: [
          {
            min: 7,
            title: "عادات قوية",
            text: "حساباتكم تتبع الممارسات السليمة. راجعوا قائمة الحسابات الفعالة من وقت لآخر ليبقى الوضع كذلك.",
          },
          {
            min: 4,
            title: "نقاط ضعف قليلة",
            text: "الأساسيات موجودة، لكن بعض الثغرات تجعل سرقة كلمة مرور أخطر مما ينبغي. ابدؤوا بالنقاط أدناه.",
          },
          {
            min: 0,
            title: "سهلة الاختراق",
            text: "كلمة مرور واحدة مسروقة أو مخمَّنة قد تفتح جزءاً كبيراً من منشأتكم. النقاط أدناه هي نقطة البداية.",
          },
        ],
        ctaTitle: "تريد مساعدة في تأمين حساباتكم؟",
        ctaText:
          "يفعّل بيت الأفكار التحقق بخطوتين وسياسات الحسابات وحماية البريد للمنشآت في الدمام وجميع مناطق المملكة.",
        faq: [
          {
            q: "ما الذي يجعل كلمة المرور قوية؟",
            a: "الطول وعدم التكرار. عبارة من عدة كلمات غير مترابطة تستخدمها لنظام واحد فقط أقوى من كلمة قصيرة فيها رموز، وأسهل في الحفظ.",
          },
          {
            q: "هل يكفي التحقق بخطوتين عبر الرسائل النصية؟",
            a: "هو أفضل بكثير من كلمة المرور وحدها. تطبيق المصادقة أو مفتاح الأمان أقوى، لأن الرسائل النصية يمكن اعتراضها أو تحويلها.",
          },
          {
            q: "هل يجب أن يغيّر الموظفون كلمات المرور كل بضعة أشهر؟",
            a: "التوجيه الحالي هو تغيير كلمة المرور عند ظهور علامة على انكشافها، لا وفق جدول ثابت. التغيير الإجباري المتكرر يدفع الناس إلى اختيار كلمات أضعف.",
          },
        ],
      },
    },
  },
  {
    slug: "wifi-security",
    service: "wifi-installation",
    content: {
      en: {
        metaTitle: "Office Wi-Fi Security Test | Thoughts House",
        metaDescription:
          "Free 8-question test on your office Wi-Fi. Check guest access, encryption, router passwords and updates, and see what to fix first.",
        name: "Office Wi-Fi Security Test",
        h1: "Office Wi-Fi Security Test: Who Can Reach Your Network?",
        summary:
          "Eight yes-or-no questions about the wireless network in your office. At the end you get a level and a short list of what to fix. It takes about two minutes and needs no sign-up.",
        audience: "For business owners and IT managers",
        minutes: "8 questions · 2 minutes",
        questions: [
          {
            good: "no",
            q: "Do visitors connect to the same Wi-Fi network your staff use?",
            why: "A visitor's phone or laptop on the staff network can reach your shared folders, printers and servers. A guest network gives internet only.",
            fix: "Create a guest network that is isolated from the internal network.",
          },
          {
            q: "Does your Wi-Fi use WPA2 or WPA3 security?",
            why: "Older settings such as WEP and the first WPA can be broken in minutes with free tools. An open network with no password exposes everything sent over it.",
            fix: "Set the network to WPA2 or WPA3 and replace access points that support neither.",
          },
          {
            q: "Has the administrator password of the router and access points been changed from the default?",
            why: "Anyone on the network can open the router's settings page. With the default password they can change settings or redirect your traffic.",
            fix: "Change the administrator password on every router and access point.",
          },
          {
            q: "Is the Wi-Fi password changed when an employee who knew it leaves?",
            why: "A shared Wi-Fi password stays valid for everyone who ever had it, and it works from the car park as well as from inside the office.",
            fix: "Change the password after staff leave, or move to individual logins for each user.",
          },
          {
            good: "no",
            q: "Are cameras, printers and smart devices on the same network as your computers?",
            why: "These devices are rarely updated and are often the easiest thing to break into. Separation keeps a compromised camera away from your files.",
            fix: "Put cameras, printers and smart devices on their own network segment.",
          },
          {
            q: "Has the software of your router and access points been updated in the last year?",
            why: "Manufacturers fix security flaws through updates. A router that has not been updated for years carries flaws that are publicly known.",
            fix: "Check for updates now, and replace devices the manufacturer no longer supports.",
          },
          {
            good: "no",
            q: "Is WPS, the push-button connection feature, turned on in your router?",
            why: "WPS uses a short PIN that can be guessed by trial, which gives an attacker the Wi-Fi password without knowing it.",
            fix: "Turn off WPS on every router and access point.",
          },
          {
            q: "Do you know which devices are connected to your network right now?",
            why: "You cannot protect what you cannot see. An unknown device may be a neighbour, a former employee or a small access point someone plugged in.",
            fix: "Review the list of connected devices and remove any you do not recognize.",
          },
        ],
        levels: [
          {
            min: 7,
            title: "Well secured",
            text: "Your Wi-Fi follows good practice. Keep the devices updated and review connected devices from time to time.",
          },
          {
            min: 4,
            title: "Some doors open",
            text: "The network is protected, but a few gaps let visitors or old devices reach more than they should. Start with the points below.",
          },
          {
            min: 0,
            title: "Open to outsiders",
            text: "Someone near your office could reach your internal network with little effort. The points below are the place to start.",
          },
        ],
        ctaTitle: "Want a Wi-Fi network you can trust?",
        ctaText:
          "Thoughts House designs, installs and secures office Wi-Fi for organizations in Dammam and across Saudi Arabia, with separate staff, guest and device networks.",
        faq: [
          {
            q: "What is the difference between WPA2 and WPA3?",
            a: "WPA3 is the newer standard. It protects better against password guessing and keeps past traffic private even if the password is later exposed. WPA2 with a long password is still acceptable.",
          },
          {
            q: "Is hiding the network name a security measure?",
            a: "No. A hidden name is easy to find with free tools and can cause connection problems. Strong encryption and a long password protect the network, not hiding it.",
          },
          {
            q: "Should a business use one Wi-Fi password for everyone?",
            a: "It works for a small office if the password is long and changed when people leave. Larger offices are better served by individual logins, so one person's access can be removed without affecting others.",
          },
        ],
      },
      ar: {
        metaTitle: "اختبار أمان شبكة Wi-Fi في المكتب | بيت الأفكار",
        metaDescription:
          "اختبار مجاني من 8 أسئلة عن شبكة Wi-Fi في مكتبك. راجع شبكة الضيوف والتشفير وكلمات مرور الراوتر والتحديثات، واعرف ما تصلحه أولاً.",
        name: "اختبار أمان شبكة Wi-Fi",
        h1: "اختبار أمان شبكة Wi‑Fi في المكتب: من يصل إلى شبكتك؟",
        summary:
          "ثمانية أسئلة بنعم أو لا عن الشبكة اللاسلكية في مكتبك. في النهاية تحصل على مستوى وقائمة قصيرة بما تصلحه. يستغرق نحو دقيقتين ولا يحتاج إلى تسجيل.",
        audience: "لأصحاب المنشآت ومديري تقنية المعلومات",
        minutes: "8 أسئلة · دقيقتان",
        questions: [
          {
            good: "no",
            q: "هل يتصل الزوار بشبكة Wi-Fi نفسها التي يستخدمها الموظفون؟",
            why: "جوال الزائر أو حاسوبه على شبكة الموظفين يصل إلى المجلدات المشتركة والطابعات والسيرفرات. شبكة الضيوف تعطي الإنترنت فقط.",
            fix: "أنشئ شبكة ضيوف معزولة عن الشبكة الداخلية.",
          },
          {
            q: "هل تستخدم شبكة Wi-Fi لديكم حماية WPA2 أو WPA3؟",
            why: "الإعدادات الأقدم مثل WEP وWPA الأول تُكسر في دقائق بأدوات مجانية. والشبكة المفتوحة دون كلمة مرور تكشف كل ما يمر عبرها.",
            fix: "اضبط الشبكة على WPA2 أو WPA3، واستبدل نقاط الاتصال التي لا تدعم أياً منهما.",
          },
          {
            q: "هل غُيّرت كلمة مرور الإدارة الافتراضية في الراوتر ونقاط الاتصال؟",
            why: "أي متصل بالشبكة يستطيع فتح صفحة إعدادات الراوتر. بكلمة المرور الافتراضية يغيّر الإعدادات أو يحوّل مسار اتصالكم.",
            fix: "غيّر كلمة مرور الإدارة في كل راوتر ونقطة اتصال.",
          },
          {
            q: "هل تُغيَّر كلمة مرور Wi-Fi عند مغادرة موظف كان يعرفها؟",
            why: "كلمة مرور Wi-Fi المشتركة تبقى صالحة لكل من عرفها يوماً، وتعمل من موقف السيارات كما تعمل من داخل المكتب.",
            fix: "غيّر كلمة المرور بعد مغادرة الموظفين، أو انتقل إلى دخول فردي لكل مستخدم.",
          },
          {
            good: "no",
            q: "هل الكاميرات والطابعات والأجهزة الذكية على الشبكة نفسها مع الحواسيب؟",
            why: "هذه الأجهزة قلّما تُحدَّث، وهي غالباً أسهل ما يُخترق. الفصل يبعد الكاميرا المخترقة عن ملفاتكم.",
            fix: "ضع الكاميرات والطابعات والأجهزة الذكية في قسم شبكي خاص بها.",
          },
          {
            q: "هل حُدّث برنامج الراوتر ونقاط الاتصال خلال السنة الماضية؟",
            why: "الشركات المصنّعة تعالج الثغرات الأمنية بالتحديثات. الراوتر الذي لم يُحدَّث منذ سنوات فيه ثغرات معروفة للجميع.",
            fix: "تحقق من التحديثات الآن، واستبدل الأجهزة التي توقف دعمها من المصنّع.",
          },
          {
            good: "no",
            q: "هل خاصية WPS، أي الاتصال بضغطة زر، مفعّلة في الراوتر؟",
            why: "تعتمد WPS على رقم قصير يمكن تخمينه بالتجربة، فيحصل المهاجم على كلمة مرور Wi-Fi دون أن يعرفها.",
            fix: "أوقف WPS في كل راوتر ونقطة اتصال.",
          },
          {
            q: "هل تعرف ما الأجهزة المتصلة بشبكتك الآن؟",
            why: "لا تحمي ما لا تراه. الجهاز المجهول قد يكون جاراً، أو موظفاً سابقاً، أو نقطة اتصال صغيرة وصّلها أحدهم.",
            fix: "راجع قائمة الأجهزة المتصلة، واحذف ما لا تعرفه.",
          },
        ],
        levels: [
          {
            min: 7,
            title: "مؤمَّنة جيداً",
            text: "شبكتكم تتبع الممارسات السليمة. واصلوا تحديث الأجهزة ومراجعة المتصلين من وقت لآخر.",
          },
          {
            min: 4,
            title: "بعض الأبواب مفتوحة",
            text: "الشبكة محمية، لكن بعض الثغرات تتيح للزوار أو الأجهزة القديمة الوصول إلى أكثر مما ينبغي. ابدؤوا بالنقاط أدناه.",
          },
          {
            min: 0,
            title: "مفتوحة للغرباء",
            text: "شخص قريب من مكتبكم قد يصل إلى شبكتكم الداخلية بجهد قليل. النقاط أدناه هي نقطة البداية.",
          },
        ],
        ctaTitle: "تريد شبكة Wi-Fi تثق بها؟",
        ctaText:
          "يصمم بيت الأفكار شبكات Wi-Fi للمكاتب وينفذها ويؤمّنها في الدمام وجميع مناطق المملكة، مع شبكات منفصلة للموظفين والضيوف والأجهزة.",
        faq: [
          {
            q: "ما الفرق بين WPA2 وWPA3؟",
            a: "WPA3 هو المعيار الأحدث. يحمي أفضل من تخمين كلمة المرور، ويُبقي الاتصالات السابقة خاصة حتى لو انكشفت كلمة المرور لاحقاً. WPA2 مع كلمة مرور طويلة ما زال مقبولاً.",
          },
          {
            q: "هل إخفاء اسم الشبكة وسيلة حماية؟",
            a: "لا. الاسم المخفي يُكشف بسهولة بأدوات مجانية، وقد يسبب مشاكل في الاتصال. ما يحمي الشبكة هو التشفير القوي وكلمة المرور الطويلة، لا الإخفاء.",
          },
          {
            q: "هل تستخدم المنشأة كلمة مرور Wi-Fi واحدة للجميع؟",
            a: "تصلح للمكتب الصغير إذا كانت طويلة وتُغيَّر عند مغادرة الموظفين. المكاتب الأكبر يناسبها دخول فردي لكل مستخدم، فتُسحب صلاحية شخص دون التأثير على البقية.",
          },
        ],
      },
    },
  },
];

export function getAssessment(slug: AssessmentSlug) {
  return ASSESSMENTS.find(a => a.slug === slug)!;
}

/** Labels shared by every assessment */
export const ASSESS_UI: Record<
  Language,
  {
    question: string;
    of: string;
    yes: string;
    no: string;
    unsure: string;
    whyTitle: string;
    next: string;
    finish: string;
    resultTitle: string;
    score: string;
    gapsTitle: string;
    noGaps: string;
    retry: string;
    share: string;
    shareText: string;
    copied: string;
    ctaButton: string;
    ctaWhatsapp: string;
    note: string;
    faqTitle: string;
    allTests: string;
  }
> = {
  en: {
    question: "Question",
    of: "of",
    yes: "Yes",
    no: "No",
    unsure: "Not sure",
    whyTitle: "Why it matters",
    next: "Next question",
    finish: "See my result",
    resultTitle: "Your result",
    score: "good practices out of",
    gapsTitle: "What to fix first",
    noGaps: "No gaps found in these questions.",
    retry: "Start again",
    share: "Copy test link",
    shareText: "A free 3-minute test for businesses:",
    copied: "Link copied",
    ctaButton: "Request an assessment",
    ctaWhatsapp: "Chat on WhatsApp",
    note: "Your answers stay in your browser. They are not stored or sent to us.",
    faqTitle: "Common questions",
    allTests: "All free tests",
  },
  ar: {
    question: "السؤال",
    of: "من",
    yes: "نعم",
    no: "لا",
    unsure: "لست متأكداً",
    whyTitle: "لماذا يهم",
    next: "السؤال التالي",
    finish: "اعرض نتيجتي",
    resultTitle: "نتيجتك",
    score: "ممارسات سليمة من",
    gapsTitle: "ما تصلحه أولاً",
    noGaps: "لم تظهر ثغرات في هذه الأسئلة.",
    retry: "ابدأ من جديد",
    share: "انسخ رابط الاختبار",
    shareText: "اختبار مجاني للمنشآت في 3 دقائق:",
    copied: "تم نسخ الرابط",
    ctaButton: "اطلب تقييماً",
    ctaWhatsapp: "راسلنا على واتساب",
    note: "إجاباتك تبقى في متصفحك، ولا تُخزَّن ولا تُرسل إلينا.",
    faqTitle: "أسئلة شائعة",
    allTests: "كل الاختبارات المجانية",
  },
};

/** The tests hub page (/tests/) */
export const TESTS_HUB: Record<
  Language,
  {
    metaTitle: string;
    metaDescription: string;
    name: string;
    h1: string;
    summary: string;
    start: string;
    phishingAudience: string;
    phishingMinutes: string;
    whyTitle: string;
    why: string[];
  }
> = {
  en: {
    metaTitle: "Free IT Security Tests for Businesses | Thoughts House",
    metaDescription:
      "Free short tests from Thoughts House: spot phishing messages and check your backups, passwords, Wi-Fi and cybersecurity basics. No sign-up needed.",
    name: "Free Tests",
    h1: "Free IT Security Tests",
    summary:
      "Short tests you can take in a few minutes. Use them to check your own habits, your team's awareness and your organization's basic protections. They are free and need no sign-up.",
    start: "Start the test",
    phishingAudience: "For all staff",
    phishingMinutes: "10 questions · 3 minutes",
    whyTitle: "How to use these tests",
    why: [
      "Share the phishing test with your team; attackers only need one person to click.",
      "Take the other tests yourself, or with your IT manager, and note the gaps.",
      "Send us the gaps you found and we will suggest how to close them.",
    ],
  },
  ar: {
    metaTitle: "اختبارات مجانية لأمن تقنية المعلومات | بيت الأفكار",
    metaDescription:
      "اختبارات قصيرة مجانية من بيت الأفكار: اكشف رسائل التصيّد، وراجع النسخ الاحتياطي وكلمات المرور وشبكة Wi-Fi وأساسيات الأمن السيبراني في منشأتك. دون تسجيل.",
    name: "اختبارات",
    h1: "اختبارات مجانية لأمن تقنية المعلومات",
    summary:
      "اختبارات قصيرة تنهيها في دقائق. استخدمها لمراجعة عاداتك، ووعي فريقك، ووسائل الحماية الأساسية في منشأتك. كلها مجانية ولا تحتاج إلى تسجيل.",
    start: "ابدأ الاختبار",
    phishingAudience: "لجميع الموظفين",
    phishingMinutes: "10 أسئلة · 3 دقائق",
    whyTitle: "كيف تستفيد من هذه الاختبارات",
    why: [
      "شارك اختبار التصيّد مع فريقك، فالمهاجم يكفيه شخص واحد يضغط.",
      "أجب عن بقية الاختبارات بنفسك أو مع مدير التقنية، ودوّن الثغرات.",
      "أرسل لنا الثغرات التي وجدتها، ونقترح عليك طريقة إغلاقها.",
    ],
  },
};
