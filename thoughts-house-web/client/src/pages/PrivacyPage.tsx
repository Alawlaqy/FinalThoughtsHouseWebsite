/*
 * Design: Precision Shield — Corporate-Minimal
 * Privacy policy page (EN/AR).
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { PRIVACY } from "@/content/privacy";

export default function PrivacyPage() {
  const { lang } = useLanguage();
  const c = PRIVACY[lang];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section id="home" className="bg-[#0F172A]">
          <div className="container pt-32 pb-12 md:pt-40">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              {c.h1}
            </h1>
            <p className="text-white/60">{c.updated}</p>
          </div>
        </section>
        <section className="py-14 bg-white">
          <div className="container max-w-3xl text-[#334155] leading-relaxed">
            <p className="text-lg mb-10">{c.intro}</p>
            {c.sections.map(s => (
              <div key={s.h2} className="mb-8">
                <h2 className="text-xl font-bold text-[#1E293B] mb-3">
                  {s.h2}
                </h2>
                {s.body.map(b => (
                  <p key={b} className="mb-3">
                    {b}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
