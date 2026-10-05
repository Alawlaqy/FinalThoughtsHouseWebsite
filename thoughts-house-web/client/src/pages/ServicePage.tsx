/*
 * Design: Precision Shield — Corporate-Minimal
 * Service page: dedicated, indexable page per service (EN + AR) with offerings,
 * technologies, reasons to choose us, FAQ and the contact form.
 */
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Chatbot from "@/components/Chatbot";
import { partners } from "@/components/PartnersSection";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  SERVICES,
  SERVICE_SLUGS,
  imageSrcSet,
  type ServiceSlug,
} from "@/content/services";
import { articlePath, brandPagePath, industryPath, servicePath } from "@/seo";
import { BRAND_PAGES } from "@/content/brandPages";
import { INDUSTRIES } from "@/content/industries";
import { ARTICLES } from "@/content/articles";
import {
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Layers,
  Wrench,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const CTA_LABELS = {
  quote: { en: "Request a quotation", ar: "اطلب عرض سعر" },
  proposal: { en: "Request a proposal", ar: "اطلب عرضاً" },
  consult: { en: "Request a consultation", ar: "اطلب استشارة" },
};

const WHY_ICONS = [MapPin, Layers, Wrench];

export default function ServicePage({ slug }: { slug: ServiceSlug }) {
  const { lang, homeHref } = useLanguage();
  const service = SERVICES[slug];
  const c = service.content[lang];
  const Chevron = lang === "ar" ? ChevronLeft : ChevronRight;
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
  const others = SERVICE_SLUGS.filter(s => s !== slug);
  // Guides tagged with this service; the AMC page shares the supply page's guide.
  const brandLinks = BRAND_PAGES.filter(b => service.vendors.includes(b.name));
  const related = ARTICLES.filter(
    a =>
      a.service === slug ||
      (slug === "it-support-amc" && a.service === "it-supply")
  ).slice(0, 3);
  const logos = service.vendors
    .map(name => partners.find(p => p.name === name))
    .filter((p): p is (typeof partners)[number] => Boolean(p));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Hero */}
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={service.image}
              srcSet={imageSrcSet(service.image)}
              sizes="100vw"
              alt=""
              width={1920}
              height={1072}
              fetchPriority="high"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/85 via-[#0F172A]/80 to-[#1E293B]/90" />
          </div>
          <div className="container relative z-10 pt-32 pb-20 md:pt-40 md:pb-28">
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
                    href={`${homeHref}#services`}
                    className="hover:text-white transition-colors"
                  >
                    {lang === "ar" ? "الخدمات" : "Services"}
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
            <h1 className="max-w-3xl text-4xl sm:text-5xl font-extrabold text-white leading-[1.15] mb-6">
              {c.h1}
            </h1>
            <p className="max-w-2xl text-lg sm:text-xl text-white/75 leading-relaxed mb-6">
              {c.intro}
            </p>
            <p className="max-w-2xl text-base text-white/90 leading-relaxed mb-10 ps-4 border-s-2 border-[#60A5FA]">
              {c.summary}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#2563EB] text-white font-semibold rounded-lg hover:bg-[#1D4ED8] transition-all duration-300 hover:shadow-xl hover:shadow-[#2563EB]/30"
            >
              {
                CTA_LABELS[
                  slug === "it-supply"
                    ? "quote"
                    : slug === "it-support-amc"
                      ? "proposal"
                      : "consult"
                ][lang]
              }
              <Arrow className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* Offerings */}
        <section className="py-20 bg-white geometric-pattern">
          <div className="container">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] mb-12 text-center">
              {c.offeringsTitle}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.offerings.map(o => (
                <article
                  key={o.title}
                  className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-100"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mb-4">
                    <CheckCircle2
                      className="w-5 h-5 text-[#2563EB]"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#1E293B] mb-2">
                    {o.title}
                  </h3>
                  <p className="text-[#64748B] leading-relaxed">{o.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {c.extra?.map(x => (
          <section
            key={x.title}
            className="py-16 bg-white border-t border-gray-100"
          >
            <div className="container max-w-4xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] mb-4">
                {x.title}
              </h2>
              <p className="text-lg text-[#334155] leading-relaxed mb-6">
                {x.text}
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {x.points.map(pt => (
                  <li key={pt} className="flex gap-3 text-[#334155]">
                    <CheckCircle2
                      className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        {/* Technologies */}
        {logos.length > 0 && (
          <section className="py-20 bg-[#F8FAFC]">
            <div className="container text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] mb-4">
                {c.vendorsTitle}
              </h2>
              <p className="text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto mb-10">
                {c.vendorsText}
              </p>
              <ul className="flex flex-wrap justify-center gap-4">
                {logos.map(p => (
                  <li
                    key={p.name}
                    className="px-6 py-4 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center min-w-[150px] h-[76px]"
                  >
                    <img
                      src={p.logo}
                      alt={p.name}
                      width={120}
                      height={44}
                      loading="lazy"
                      decoding="async"
                      className="max-h-[40px] max-w-[110px] object-contain"
                    />
                  </li>
                ))}
              </ul>
              {brandLinks.length > 0 && (
                <p className="mt-8 text-[#64748B]">
                  {lang === "ar" ? "صفحات العلامات: " : "Brand pages: "}
                  {brandLinks.map((b, i) => (
                    <span key={b.slug}>
                      {i > 0 && " · "}
                      <a
                        href={brandPagePath(b.slug, lang)}
                        className="font-semibold text-[#2563EB] hover:underline"
                      >
                        {b.name}
                      </a>
                    </span>
                  ))}
                </p>
              )}
            </div>
          </section>
        )}

        {slug === "it-support-amc" && (
          <section className="py-16 bg-white">
            <div className="container">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] mb-8 text-center">
                {lang === "ar"
                  ? "عقود الصيانة حسب القطاع"
                  : "Maintenance contracts by industry"}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {INDUSTRIES.map(ind => (
                  <a
                    key={ind.slug}
                    href={industryPath(ind.slug, lang)}
                    className="group p-6 bg-[#F8FAFC] rounded-2xl border border-gray-100 hover:border-[#2563EB]/30 hover:shadow-md transition-all"
                  >
                    <h3 className="font-bold text-[#1E293B] group-hover:text-[#2563EB] transition-colors mb-2">
                      {ind.content[lang].name}
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed line-clamp-3">
                      {ind.content[lang].metaDescription}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Why us */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] mb-12 text-center">
              {c.whyTitle}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {c.why.map((w, i) => {
                const Icon = WHY_ICONS[i % WHY_ICONS.length];
                return (
                  <div key={w.title} className="text-center md:text-start">
                    <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-4 mx-auto md:mx-0">
                      <Icon
                        className="w-6 h-6 text-[#2563EB]"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-[#1E293B] mb-2">
                      {w.title}
                    </h3>
                    <p className="text-[#64748B] leading-relaxed">{w.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#F8FAFC]">
          <div className="container max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] mb-10 text-center">
              {c.faqTitle}
            </h2>
            <div className="space-y-4">
              {c.faq.map((f, i) => (
                <details
                  key={f.q}
                  open={i === 0}
                  className="group bg-white rounded-xl border border-gray-100 shadow-sm"
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 font-semibold text-[#1E293B]">
                    <h3 className="text-base">{f.q}</h3>
                    <ChevronDown
                      className="w-5 h-5 text-[#64748B] flex-shrink-0 transition-transform group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="px-5 pb-5 text-[#64748B] leading-relaxed">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related guides */}
        {related.length > 0 && (
          <section className="py-16 bg-[#F8FAFC]">
            <div className="container">
              <h2 className="text-2xl font-extrabold text-[#1E293B] mb-8 text-center">
                {lang === "ar" ? "أدلة ذات صلة" : "Related guides"}
              </h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {related.map(a => (
                  <a
                    key={a.slug}
                    href={articlePath(a.slug, lang)}
                    className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#2563EB]/30 hover:shadow-md transition-all"
                  >
                    <h3 className="font-bold text-[#1E293B] group-hover:text-[#2563EB] transition-colors mb-2">
                      {a.content[lang].title}
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed line-clamp-3">
                      {a.content[lang].description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Other services */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-2xl font-extrabold text-[#1E293B] mb-8 text-center">
              {lang === "ar" ? "خدمات أخرى" : "Other services"}
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {others.map(s => (
                <a
                  key={s}
                  href={servicePath(s, lang)}
                  className="group flex items-center justify-between gap-4 p-6 bg-[#F8FAFC] rounded-2xl border border-gray-100 hover:border-[#2563EB]/30 hover:shadow-md transition-all"
                >
                  <span className="font-bold text-[#1E293B] group-hover:text-[#2563EB] transition-colors">
                    {SERVICES[s].content[lang].name}
                  </span>
                  <Arrow
                    className="w-5 h-5 text-[#2563EB]"
                    aria-hidden="true"
                  />
                </a>
              ))}
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
