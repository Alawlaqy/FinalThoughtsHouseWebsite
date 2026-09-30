/*
 * Design: Precision Shield — Corporate-Minimal
 * About page: the company's entity page — summary, fact sheet, services and approach.
 */
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Chatbot from "@/components/Chatbot";
import { useLanguage } from "@/contexts/LanguageContext";
import { ABOUT } from "@/content/about";
import { SERVICES, SERVICE_SLUGS } from "@/content/services";
import { servicePath } from "@/seo";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const { lang } = useLanguage();
  const c = ABOUT[lang];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section id="home" className="bg-[#0F172A]">
          <div className="container pt-32 pb-14 md:pt-40 md:pb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">{c.h1}</h1>
            <p className="max-w-3xl text-lg text-white/75 leading-relaxed">{c.summary}</p>
          </div>
        </section>

        {/* Fact sheet */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] mb-8">{c.factsTitle}</h2>
            <dl className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
              {c.facts.map((f) => (
                <div key={f.label} className="grid sm:grid-cols-[220px_minmax(0,1fr)] gap-1 sm:gap-6 px-5 py-4 bg-white odd:bg-[#F8FAFC]">
                  <dt className="text-sm font-semibold text-[#64748B]">{f.label}</dt>
                  <dd className="text-[#1E293B] leading-relaxed">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* What we do */}
        <section className="py-16 bg-[#F8FAFC]">
          <div className="container max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] mb-8">{c.whatTitle}</h2>
            <ul className="space-y-4 mb-10">
              {c.what.map((w) => (
                <li key={w} className="flex gap-3 text-[#334155] leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              {SERVICE_SLUGS.map((slug) => (
                <a
                  key={slug}
                  href={servicePath(slug, lang)}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-[#2563EB] hover:border-[#2563EB] transition-colors"
                >
                  {SERVICES[slug].content[lang].name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] mb-6">{c.approachTitle}</h2>
            <p className="text-lg text-[#334155] leading-relaxed">{c.approach}</p>
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
