/*
 * Design: Precision Shield — Corporate-Minimal
 * Coverage page: how Thoughts House serves organizations across Saudi Arabia, region by region.
 */
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Chatbot from "@/components/Chatbot";
import { useLanguage } from "@/contexts/LanguageContext";
import { COVERAGE } from "@/content/coverage";
import { SERVICES, SERVICE_SLUGS } from "@/content/services";
import { servicePath } from "@/seo";
import {
  MapPin,
  PenTool,
  Truck,
  Wrench,
  LifeBuoy,
  ChevronDown,
} from "lucide-react";

const HOW_ICONS = [PenTool, Truck, Wrench, LifeBuoy];

export default function CoveragePage() {
  const { lang } = useLanguage();
  const c = COVERAGE[lang];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section id="home" className="bg-[#0F172A]">
          <div className="container pt-32 pb-14 md:pt-40 md:pb-16">
            <h1 className="max-w-3xl text-4xl sm:text-5xl font-extrabold text-white leading-[1.15] mb-5">
              {c.h1}
            </h1>
            <p className="max-w-3xl text-lg text-white/75 leading-relaxed">
              {c.summary}
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container">
            <p className="max-w-3xl text-lg text-[#334155] leading-relaxed mb-12">
              {c.intro}
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] mb-8">
              {c.howTitle}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {c.how.map((h, i) => {
                const Icon = HOW_ICONS[i % HOW_ICONS.length];
                return (
                  <div
                    key={h.title}
                    className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-100"
                  >
                    <Icon
                      className="w-7 h-7 text-[#2563EB] mb-4"
                      aria-hidden="true"
                    />
                    <h3 className="text-lg font-bold text-[#1E293B] mb-2">
                      {h.title}
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {h.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F8FAFC]">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] mb-8">
              {c.regionsTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {c.regions.map(r => (
                <article
                  key={r.name}
                  className="p-6 bg-white rounded-2xl border border-gray-100"
                >
                  <h3 className="flex items-center gap-2 text-xl font-bold text-[#1E293B] mb-1">
                    <MapPin
                      className="w-5 h-5 text-[#2563EB]"
                      aria-hidden="true"
                    />
                    {r.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#2563EB] mb-3">
                    {r.cities}
                  </p>
                  <p className="text-[#64748B] leading-relaxed">{r.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] mb-6">
              {lang === "ar"
                ? "خدماتنا في جميع المناطق"
                : "Services available in every region"}
            </h2>
            <div className="flex flex-wrap gap-3 mb-14">
              {SERVICE_SLUGS.map(slug => (
                <a
                  key={slug}
                  href={servicePath(slug, lang)}
                  className="px-4 py-2 bg-[#F8FAFC] border border-gray-200 rounded-lg text-sm font-semibold text-[#2563EB] hover:border-[#2563EB] transition-colors"
                >
                  {SERVICES[slug].content[lang].name}
                </a>
              ))}
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] mb-6">
              {c.faqTitle}
            </h2>
            <div className="space-y-4">
              {c.faq.map(f => (
                <details
                  key={f.q}
                  className="group bg-[#F8FAFC] rounded-xl border border-gray-100"
                  open
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

        <ContactSection />
      </main>
      <Footer />
      <WhatsAppWidget />
      <Chatbot />
    </div>
  );
}
