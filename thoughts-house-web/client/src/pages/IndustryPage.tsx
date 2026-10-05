/*
 * Design: Precision Shield — Corporate-Minimal
 * IT maintenance contract (AMC) page for one industry.
 */
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Chatbot from "@/components/Chatbot";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  INDUSTRIES,
  getIndustry,
  type IndustrySlug,
} from "@/content/industries";
import { SERVICES, imageSrcSet } from "@/content/services";
import { industryPath, servicePath } from "@/seo";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

export default function IndustryPage({ slug }: { slug: IndustrySlug }) {
  const { lang, homeHref } = useLanguage();
  const industry = getIndustry(slug);
  const c = industry.content[lang];
  const amc = SERVICES["it-support-amc"].content[lang];
  const Chevron = lang === "ar" ? ChevronLeft : ChevronRight;
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={industry.image}
              srcSet={imageSrcSet(industry.image)}
              sizes="100vw"
              alt=""
              width={1280}
              height={715}
              fetchPriority="high"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/90 via-[#0F172A]/85 to-[#1E293B]/90" />
          </div>
          <div className="container relative z-10 pt-32 pb-16 md:pt-40 md:pb-20">
            <nav
              aria-label={lang === "ar" ? "مسار التنقل" : "Breadcrumb"}
              className="mb-6"
            >
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
                <li>
                  <a
                    href={homeHref}
                    className="hover:text-white transition-colors"
                  >
                    {lang === "ar" ? "الرئيسية" : "Home"}
                  </a>
                </li>
                <li aria-hidden="true">
                  <Chevron className="w-4 h-4" />
                </li>
                <li>
                  <a
                    href={servicePath("it-support-amc", lang)}
                    className="hover:text-white transition-colors"
                  >
                    {amc.name}
                  </a>
                </li>
                <li aria-hidden="true">
                  <Chevron className="w-4 h-4" />
                </li>
                <li aria-current="page" className="text-white/90">
                  {c.name}
                </li>
              </ol>
            </nav>
            <h1 className="max-w-3xl text-3xl sm:text-5xl font-extrabold text-white leading-[1.15] mb-6">
              {c.h1}
            </h1>
            <p className="max-w-2xl text-lg text-white/80 leading-relaxed mb-6">
              {c.summary}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#2563EB] text-white font-semibold rounded-lg hover:bg-[#1D4ED8] transition-colors"
            >
              {lang === "ar" ? "اطلب عرضاً" : "Request a proposal"}
              <Arrow className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-[#334155] leading-relaxed mb-8">
                {c.intro}
              </p>
              <h2 className="text-2xl font-extrabold text-[#1E293B] mb-5">
                {c.challengesTitle}
              </h2>
              <ul className="space-y-3">
                {c.challenges.map(ch => (
                  <li key={ch} className="flex gap-3 text-[#334155]">
                    <AlertTriangle
                      className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-[#1E293B] mb-5">
                {c.coverageTitle}
              </h2>
              <div className="space-y-4">
                {c.coverage.map(cv => (
                  <div
                    key={cv.title}
                    className="flex gap-3 p-4 bg-[#F8FAFC] rounded-xl border border-gray-100"
                  >
                    <CheckCircle2
                      className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-bold text-[#1E293B]">{cv.title}</h3>
                      <p className="text-sm text-[#64748B] leading-relaxed">
                        {cv.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F8FAFC]">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-extrabold text-[#1E293B] mb-6 text-center">
              {lang === "ar" ? "الأسئلة الشائعة" : "Frequently asked questions"}
            </h2>
            <div className="space-y-5 mb-12">
              {c.faq.map(f => (
                <div
                  key={f.q}
                  className="p-5 bg-white rounded-xl border border-gray-100"
                >
                  <h3 className="font-bold text-[#1E293B] mb-2">{f.q}</h3>
                  <p className="text-[#64748B] leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
            <h2 className="text-xl font-extrabold text-[#1E293B] mb-4 text-center">
              {lang === "ar"
                ? "عقود الصيانة لقطاعات أخرى"
                : "Maintenance contracts for other sectors"}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {INDUSTRIES.filter(i => i.slug !== slug).map(i => (
                <a
                  key={i.slug}
                  href={industryPath(i.slug, lang)}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-[#2563EB] hover:border-[#2563EB] transition-colors"
                >
                  {i.content[lang].name}
                </a>
              ))}
              <a
                href={servicePath("it-support-amc", lang)}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-[#2563EB] hover:border-[#2563EB] transition-colors"
              >
                {amc.name}
              </a>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
      <WhatsAppWidget />
      <Chatbot />
    </div>
  );
}
