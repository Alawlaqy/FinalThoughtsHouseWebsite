/*
 * Design: Precision Shield — Corporate-Minimal
 * Brands page: manufacturers we supply, integrate and support, grouped by category.
 */
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Chatbot from "@/components/Chatbot";
import { partners } from "@/components/PartnersSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { BRAND_GROUPS, BRANDS_COPY } from "@/content/brands";
import { SERVICES } from "@/content/services";
import { brandPagePath, servicePath } from "@/seo";
import { BRAND_PAGES } from "@/content/brandPages";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function BrandsPage() {
  const { lang } = useLanguage();
  const c = BRANDS_COPY[lang];
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section id="home" className="bg-[#0F172A]">
          <div className="container pt-32 pb-14 md:pt-40 md:pb-16">
            <h1 className="max-w-3xl text-4xl sm:text-5xl font-extrabold text-white leading-[1.15] mb-5">
              {c.h1}
            </h1>
            <p className="max-w-3xl text-lg text-white/75 leading-relaxed mb-8">
              {c.summary}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#2563EB] text-white font-semibold rounded-lg hover:bg-[#1D4ED8] transition-colors"
            >
              {c.cta}
              <Arrow className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </section>

        {BRAND_GROUPS.map((g, gi) => (
          <section
            key={g.title.en}
            className={`py-14 ${gi % 2 ? "bg-[#F8FAFC]" : "bg-white"}`}
          >
            <div className="container">
              <div className="flex flex-wrap items-baseline justify-between gap-3 mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B]">
                  {g.title[lang]}
                </h2>
                <a
                  href={servicePath(g.service, lang)}
                  className="text-sm font-semibold text-[#2563EB] hover:underline"
                >
                  {SERVICES[g.service].content[lang].name}
                </a>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {g.brands.map(b => {
                  const logo = partners.find(p => p.name === b.logoName)?.logo;
                  return (
                    <article
                      key={b.name}
                      className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100"
                    >
                      <div className="w-24 h-14 flex-shrink-0 flex items-center justify-center">
                        {logo && (
                          <img
                            src={logo}
                            alt=""
                            width={120}
                            height={44}
                            loading="lazy"
                            decoding="async"
                            className="max-h-[40px] max-w-[96px] object-contain"
                          />
                        )}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1E293B]">
                          {BRAND_PAGES.some(p => p.name === b.name) ? (
                            <a
                              href={brandPagePath(
                                BRAND_PAGES.find(p => p.name === b.name)!.slug,
                                lang
                              )}
                              className="hover:text-[#2563EB] underline decoration-[#2563EB]/30 underline-offset-4"
                            >
                              {b.name}
                            </a>
                          ) : (
                            b.name
                          )}
                        </h3>
                        <p className="text-sm text-[#64748B] leading-relaxed">
                          {b.products[lang]}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        ))}

        <ContactSection />
      </main>
      <Footer />
      <WhatsAppWidget />
      <Chatbot />
    </div>
  );
}
