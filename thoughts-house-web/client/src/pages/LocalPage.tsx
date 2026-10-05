/*
 * Design: Precision Shield — Corporate-Minimal
 * Dammam landing page: local services, office details and links to the nationwide service pages.
 */
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Chatbot from "@/components/Chatbot";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  LOCAL_PAGES,
  NEARBY,
  getLocalPage,
  type LocalSlug,
} from "@/content/local";
import { SERVICES, imageSrcSet } from "@/content/services";
import { COMPANY } from "@/content/about";
import { localPath, servicePath } from "@/seo";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  MapPin,
} from "lucide-react";

export default function LocalPage({ slug }: { slug: LocalSlug }) {
  const { lang, homeHref } = useLanguage();
  const page = getLocalPage(slug);
  const c = page.content[lang];
  const image = SERVICES[page.service].image;
  const Chevron = lang === "ar" ? ChevronLeft : ChevronRight;
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={image}
              srcSet={imageSrcSet(image)}
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
              {lang === "ar" ? "اطلب عرض سعر" : "Request a quotation"}
              <Arrow className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container">
            <p className="max-w-3xl text-lg text-[#334155] leading-relaxed mb-12">
              {c.intro}
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] mb-8">
              {c.offersTitle}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.offers.map(o => (
                <a
                  key={o.title}
                  href={servicePath(o.service, lang)}
                  className="group p-6 bg-[#F8FAFC] rounded-2xl border border-gray-100 hover:border-[#2563EB] transition-colors"
                >
                  <h3 className="text-lg font-bold text-[#1E293B] mb-2 group-hover:text-[#2563EB] transition-colors">
                    {o.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {o.text}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F8FAFC]">
          <div className="container grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-extrabold text-[#1E293B] mb-5">
                {c.whyTitle}
              </h2>
              <ul className="space-y-3">
                {c.why.map(w => (
                  <li key={w} className="flex gap-3 text-[#334155]">
                    <CheckCircle2
                      className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-gray-100 self-start">
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-[#1E293B] mb-4">
                <MapPin className="w-5 h-5 text-[#2563EB]" aria-hidden="true" />
                {lang === "ar" ? "مكتبنا في الدمام" : "Our Dammam office"}
              </h2>
              <p className="text-[#334155] mb-1">
                {lang === "ar"
                  ? "شارع الملك خالد، حي العدامة، الدمام 32242، المملكة العربية السعودية"
                  : `${COMPANY.streetAddress}, ${COMPANY.locality} ${COMPANY.postalCode}, Saudi Arabia`}
              </p>
              <p className="text-[#334155] mb-4" dir="ltr">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="hover:text-[#2563EB]"
                >
                  {COMPANY.phoneDisplay}
                </a>
                {" · "}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-[#2563EB]"
                >
                  {COMPANY.email}
                </a>
              </p>
              <p className="text-sm text-[#64748B] mb-4">
                {lang === "ar"
                  ? `نخدم ${NEARBY.ar}، وجميع مناطق المملكة.`
                  : `Serving ${NEARBY.en}, and all of Saudi Arabia.`}
              </p>
              <a
                href={COMPANY.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#2563EB] hover:underline"
              >
                {lang === "ar"
                  ? "الموقع على خرائط Google"
                  : "View on Google Maps"}
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-extrabold text-[#1E293B] mb-6 text-center">
              {lang === "ar" ? "الأسئلة الشائعة" : "Frequently asked questions"}
            </h2>
            <div className="space-y-5 mb-12">
              {c.faq.map(f => (
                <div
                  key={f.q}
                  className="p-5 bg-[#F8FAFC] rounded-xl border border-gray-100"
                >
                  <h3 className="font-bold text-[#1E293B] mb-2">{f.q}</h3>
                  <p className="text-[#64748B] leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
            <h2 className="text-xl font-extrabold text-[#1E293B] mb-4 text-center">
              {lang === "ar"
                ? "خدماتنا في الدمام"
                : "More IT services in Dammam"}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {LOCAL_PAGES.filter(p => p.slug !== slug).map(p => (
                <a
                  key={p.slug}
                  href={localPath(p.slug, lang)}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-[#2563EB] hover:border-[#2563EB] transition-colors"
                >
                  {p.content[lang].name}
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
