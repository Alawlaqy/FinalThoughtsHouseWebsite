/*
 * Design: Precision Shield — Corporate-Minimal
 * Brand supply page: what we supply, install and support from one manufacturer.
 */
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Chatbot from "@/components/Chatbot";
import { partners } from "@/components/PartnersSection";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  BRAND_PAGES,
  getBrandPage,
  type BrandSlug,
} from "@/content/brandPages";
import { BRANDS_COPY } from "@/content/brands";
import { SERVICES } from "@/content/services";
import { brandPagePath, brandsPath, servicePath } from "@/seo";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Truck,
  Wrench,
  LifeBuoy,
} from "lucide-react";

const HOW = {
  en: [
    {
      icon: CheckCircle2,
      title: "Right model and quantity",
      text: "We match models and licenses to your users and workloads, so you do not over- or under-buy.",
    },
    {
      icon: Truck,
      title: "Supply across Saudi Arabia",
      text: "Delivered to your sites anywhere in the Kingdom, with a clear quotation and lead times.",
    },
    {
      icon: Wrench,
      title: "Installation and setup",
      text: "Installed, configured and tested by our engineers, ready for your team to use.",
    },
    {
      icon: LifeBuoy,
      title: "Support and renewals",
      text: "Ongoing support, maintenance contracts and reminders before warranties and licenses expire.",
    },
  ],
  ar: [
    {
      icon: CheckCircle2,
      title: "الطراز والكمية المناسبة",
      text: "نطابق الطرازات والتراخيص مع مستخدميك وأحمال العمل حتى لا تشتري أكثر أو أقل من حاجتك.",
    },
    {
      icon: Truck,
      title: "التوريد لجميع مناطق المملكة",
      text: "التوصيل إلى مواقعك في أي مكان بالمملكة مع عرض سعر واضح ومدد توريد محددة.",
    },
    {
      icon: Wrench,
      title: "التركيب والإعداد",
      text: "يركّبها مهندسونا ويُعدّونها ويختبرونها لتكون جاهزة لفريقك.",
    },
    {
      icon: LifeBuoy,
      title: "الدعم والتجديد",
      text: "دعم مستمر وعقود صيانة وتنبيهات قبل انتهاء الضمانات والتراخيص.",
    },
  ],
};

export default function BrandPage({ slug }: { slug: BrandSlug }) {
  const { lang, homeHref } = useLanguage();
  const brand = getBrandPage(slug);
  const c = brand.content[lang];
  const logo = partners.find(p => p.name === brand.name)?.logo;
  const Chevron = lang === "ar" ? ChevronLeft : ChevronRight;
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section id="home" className="bg-[#0F172A]">
          <div className="container pt-32 pb-14 md:pt-40 md:pb-16">
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
                    href={brandsPath(lang)}
                    className="hover:text-white transition-colors"
                  >
                    {lang === "ar" ? "العلامات التجارية" : "Brands"}
                  </a>
                </li>
                <li aria-hidden="true">
                  <Chevron className="w-4 h-4" />
                </li>
                <li aria-current="page" className="text-white/90">
                  {brand.name}
                </li>
              </ol>
            </nav>
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-1">
                <h1 className="max-w-3xl text-3xl sm:text-5xl font-extrabold text-white leading-[1.15] mb-6">
                  {c.h1}
                </h1>
                <p className="max-w-2xl text-lg text-white/75 leading-relaxed mb-8">
                  {c.summary}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#2563EB] text-white font-semibold rounded-lg hover:bg-[#1D4ED8] transition-colors"
                >
                  {BRANDS_COPY[lang].cta}
                  <Arrow className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
              {logo && (
                <div className="w-48 h-28 bg-white rounded-2xl flex items-center justify-center p-6 flex-shrink-0">
                  <img
                    src={logo}
                    alt={brand.name}
                    width={120}
                    height={44}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container">
            <p className="max-w-3xl text-lg text-[#334155] leading-relaxed mb-10">
              {c.intro}
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] mb-8">
              {c.linesTitle}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.lines.map(l => (
                <article
                  key={l.title}
                  className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-100"
                >
                  <h3 className="text-lg font-bold text-[#1E293B] mb-2">
                    {l.title}
                  </h3>
                  <p className="text-[#64748B] leading-relaxed">{l.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F8FAFC]">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] mb-8 text-center">
              {lang === "ar" ? "أكثر من مجرد توريد" : "More than supply"}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {HOW[lang].map(h => (
                <div
                  key={h.title}
                  className="p-6 bg-white rounded-2xl border border-gray-100"
                >
                  <h.icon
                    className="w-7 h-7 text-[#2563EB] mb-4"
                    aria-hidden="true"
                  />
                  <h3 className="font-bold text-[#1E293B] mb-2">{h.title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {h.text}
                  </p>
                </div>
              ))}
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
              {lang === "ar" ? "خدمات ذات صلة" : "Related services"}
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {brand.services.map(s => (
                <a
                  key={s}
                  href={servicePath(s, lang)}
                  className="px-4 py-2 bg-[#F8FAFC] border border-gray-200 rounded-lg text-sm font-semibold text-[#2563EB] hover:border-[#2563EB] transition-colors"
                >
                  {SERVICES[s].content[lang].name}
                </a>
              ))}
            </div>
            <h2 className="text-xl font-extrabold text-[#1E293B] mb-4 text-center">
              {lang === "ar" ? "علامات أخرى نورّدها" : "Other brands we supply"}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {BRAND_PAGES.filter(b => b.slug !== slug).map(b => (
                <a
                  key={b.slug}
                  href={brandPagePath(b.slug, lang)}
                  className="px-4 py-2 bg-[#F8FAFC] border border-gray-200 rounded-lg text-sm font-semibold text-[#2563EB] hover:border-[#2563EB] transition-colors"
                >
                  {b.name}
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
