/*
 * Design: Precision Shield — Corporate-Minimal
 * About: why choose Thoughts House + how a project runs, from assessment to support.
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { WHY_AR, WHY_EN } from "@/content/services";
import { aboutPath } from "@/seo";
import {
  MapPin,
  Layers,
  Wrench,
  Search,
  PenTool,
  Rocket,
  LifeBuoy,
} from "lucide-react";

const WHY_ICONS = [MapPin, Layers, Wrench];

const COPY = {
  en: {
    eyebrow: "About us",
    title: "Why Thoughts House",
    intro:
      "Thoughts House is an IT system integrator based in Dammam, Saudi Arabia. We help organizations choose, build and run the technology they depend on — secure networks, protected endpoints, reliable servers and cloud platforms — working with the world's leading vendors to deliver solutions that fit each business.",
    processTitle: "How we work",
    steps: [
      {
        title: "Assess",
        text: "We start by understanding your goals, current environment and risks.",
      },
      {
        title: "Design",
        text: "We propose a clear solution, bill of materials and implementation plan.",
      },
      {
        title: "Deploy",
        text: "Our engineers supply, install and configure everything, then test it end to end.",
      },
      {
        title: "Support",
        text: "We stay with you after go-live with maintenance, updates and support.",
      },
    ],
  },
  ar: {
    eyebrow: "من نحن",
    title: "لماذا بيت الأفكار",
    intro:
      "بيت الأفكار شركة تكامل أنظمة تقنية معلومات مقرّها الدمام في المملكة العربية السعودية. نساعد المؤسسات على اختيار التقنيات التي تعتمد عليها وبنائها وتشغيلها، من الشبكات الآمنة وحماية الأجهزة إلى الخوادم الموثوقة والمنصات السحابية، بالتعاون مع أبرز الشركات العالمية لتقديم حلول تناسب كل عمل.",
    processTitle: "كيف نعمل",
    steps: [
      {
        title: "التقييم",
        text: "نبدأ بفهم أهدافك وبيئتك التقنية الحالية والمخاطر التي تواجهها.",
      },
      {
        title: "التصميم",
        text: "نقترح حلاً واضحاً مع قائمة المعدات وخطة التنفيذ.",
      },
      {
        title: "التنفيذ",
        text: "يورّد مهندسونا كل شيء ويركّبونه ويُعدّونه، ثم يختبرونه بالكامل.",
      },
      {
        title: "الدعم",
        text: "نبقى معك بعد التشغيل بالصيانة والتحديثات والدعم الفني.",
      },
    ],
  },
};

const STEP_ICONS = [Search, PenTool, Rocket, LifeBuoy];

export default function AboutSection() {
  const { lang } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.05 });
  const c = COPY[lang];
  const why = lang === "ar" ? WHY_AR : WHY_EN;

  return (
    <section id="about" className="py-24 bg-white" ref={sectionRef}>
      <div
        className={`container transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#2563EB]/10 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            <span className="text-sm font-semibold text-[#2563EB] uppercase tracking-wide">
              {c.eyebrow}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] mb-4">
            {c.title}
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">{c.intro}</p>
          <a
            href={aboutPath(lang)}
            className="inline-block mt-4 font-semibold text-[#2563EB] hover:underline"
          >
            {lang === "ar"
              ? "المزيد عن بيت الأفكار"
              : "More about Thoughts House"}
          </a>
        </div>

        {/* Why us */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {why.map((w, i) => {
            const Icon = WHY_ICONS[i];
            return (
              <div
                key={w.title}
                className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#2563EB]" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-[#1E293B] mb-2">
                  {w.title}
                </h3>
                <p className="text-[#64748B] leading-relaxed">{w.text}</p>
              </div>
            );
          })}
        </div>

        {/* Process */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] mb-10 text-center">
          {c.processTitle}
        </h3>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {c.steps.map((step, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <li
                key={step.title}
                className="relative p-6 rounded-2xl border border-gray-100 bg-white shadow-sm"
              >
                <span
                  className="absolute top-4 end-5 text-4xl font-extrabold text-[#2563EB]/10"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <Icon
                  className="w-7 h-7 text-[#2563EB] mb-4"
                  aria-hidden="true"
                />
                <h4 className="text-lg font-bold text-[#1E293B] mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {step.text}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
