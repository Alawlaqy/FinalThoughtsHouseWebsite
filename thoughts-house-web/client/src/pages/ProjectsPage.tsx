/*
 * Design: Precision Shield — Corporate-Minimal
 * Our Work page: completed projects, without client names or values.
 */
import Navbar from "@/components/Navbar";
import QuickContact from "@/components/QuickContact";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Chatbot from "@/components/Chatbot";
import { useLanguage } from "@/contexts/LanguageContext";
import { PROJECTS, PROJECTS_COPY } from "@/content/projects";
import { SERVICES } from "@/content/services";
import { getBrandPage } from "@/content/brandPages";
import { brandPagePath, servicePath } from "@/seo";

export default function ProjectsPage() {
  const { lang } = useLanguage();
  const c = PROJECTS_COPY[lang];

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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] mb-3">
              {c.listTitle}
            </h2>
            <p className="max-w-3xl text-[#64748B] leading-relaxed mb-10">
              {c.privacyNote}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {PROJECTS.map(p => {
                const project = p.content[lang];
                return (
                  <article
                    key={project.title}
                    className="flex flex-col p-6 bg-[#F8FAFC] rounded-2xl border border-gray-100"
                  >
                    <p className="text-sm font-semibold text-[#2563EB] mb-2">
                      {project.type}
                    </p>
                    <h3 className="text-xl font-bold text-[#1E293B] mb-3">
                      {project.title}
                    </h3>
                    <p className="text-[#64748B] leading-relaxed mb-5">
                      {project.text}
                    </p>
                    <p className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                      <span className="text-[#64748B]">{c.relatedLabel}:</span>
                      <a
                        href={servicePath(p.service, lang)}
                        className="font-semibold text-[#2563EB] hover:underline"
                      >
                        {SERVICES[p.service].content[lang].name}
                      </a>
                      {p.brand && (
                        <a
                          href={brandPagePath(p.brand, lang)}
                          className="font-semibold text-[#2563EB] hover:underline"
                        >
                          {getBrandPage(p.brand).name}
                        </a>
                      )}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <QuickContact />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppWidget />
      <Chatbot />
    </div>
  );
}
