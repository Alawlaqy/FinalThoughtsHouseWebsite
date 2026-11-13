/*
 * Design: Precision Shield — Corporate-Minimal
 * Services overview: one entry point to every service page.
 */
import Navbar from "@/components/Navbar";
import ProjectsHighlight from "@/components/ProjectsHighlight";
import QuickContact from "@/components/QuickContact";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Chatbot from "@/components/Chatbot";
import { useLanguage } from "@/contexts/LanguageContext";
import { SERVICES_HUB } from "@/content/hubs";
import { SERVICES, SERVICE_SLUGS } from "@/content/services";
import { brandsPath, servicePath } from "@/seo";

export default function ServicesHubPage() {
  const { lang, t } = useLanguage();
  const c = SERVICES_HUB[lang];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section id="home" className="bg-[#0F172A]">
          <div className="container pt-32 pb-14 md:pt-40 md:pb-16">
            <h1 className="max-w-3xl text-4xl sm:text-5xl font-bold text-white leading-[1.15] mb-5">
              {c.h1}
            </h1>
            <p className="max-w-3xl text-lg text-white/75 leading-relaxed">
              {c.summary}
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {SERVICE_SLUGS.map(slug => {
                const s = SERVICES[slug].content[lang];
                return (
                  <a
                    key={slug}
                    href={servicePath(slug, lang)}
                    className="group p-6 bg-[#F8FAFC] rounded-2xl border border-gray-100 hover:border-[#2563EB] transition-colors"
                  >
                    <h2 className="text-lg font-bold text-[#1E293B] mb-2 group-hover:text-[#2563EB] transition-colors">
                      {s.name}
                    </h2>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {s.metaDescription}
                    </p>
                  </a>
                );
              })}
            </div>
            <a
              href={brandsPath(lang)}
              className="text-sm font-semibold text-[#2563EB] hover:underline"
            >
              {t("nav.brands")}
            </a>
          </div>
        </section>

        <ProjectsHighlight />
        <QuickContact />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppWidget />
      <Chatbot />
    </div>
  );
}
