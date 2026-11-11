/*
 * Design: Precision Shield — Corporate-Minimal
 * Tests hub: one card per free test, so new tests can be added without changing the menu.
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import QuickContact from "@/components/QuickContact";
import ContactSection from "@/components/ContactSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { ASSESSMENTS, TESTS_HUB } from "@/content/assessments";
import { QUIZ_COPY } from "@/content/quiz";
import { assessmentPath, quizPath } from "@/seo";
import {
  ArrowLeft,
  ArrowRight,
  DatabaseBackup,
  MailWarning,
  ShieldCheck,
} from "lucide-react";

export default function TestsPage() {
  const { lang } = useLanguage();
  const c = TESTS_HUB[lang];
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
  const icons = {
    "backup-readiness": DatabaseBackup,
    "cybersecurity-readiness": ShieldCheck,
  };

  const cards = [
    {
      href: quizPath(lang),
      icon: MailWarning,
      title: QUIZ_COPY[lang].name,
      text: QUIZ_COPY[lang].summary,
      audience: c.phishingAudience,
      minutes: c.phishingMinutes,
    },
    ...ASSESSMENTS.map(a => ({
      href: assessmentPath(a.slug, lang),
      icon: icons[a.slug],
      title: a.content[lang].name,
      text: a.content[lang].summary,
      audience: a.content[lang].audience,
      minutes: a.content[lang].minutes,
    })),
  ];

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

        <section className="py-16 bg-[#F8FAFC]">
          <div className="container grid md:grid-cols-3 gap-6">
            {cards.map(card => {
              const Icon = card.icon;
              return (
                <a
                  key={card.href}
                  href={card.href}
                  className="group flex flex-col p-7 bg-white rounded-2xl border border-gray-100 hover:border-[#2563EB]/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-5">
                    <Icon
                      className="w-6 h-6 text-[#2563EB]"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-xs font-semibold text-[#2563EB] mb-2">
                    {card.audience}
                  </p>
                  <h2 className="text-xl font-extrabold text-[#1E293B] mb-3">
                    {card.title}
                  </h2>
                  <p className="text-sm text-[#475569] leading-relaxed mb-5 flex-1">
                    {card.text}
                  </p>
                  <p className="text-xs text-[#64748B] mb-4">{card.minutes}</p>
                  <span className="inline-flex items-center gap-2 font-semibold text-[#2563EB]">
                    {c.start}
                    <Arrow
                      className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-extrabold text-[#1E293B] mb-6">
              {c.whyTitle}
            </h2>
            <ol className="space-y-4">
              {c.why.map((w, i) => (
                <li key={w} className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#2563EB]/10 text-[#2563EB] font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-[#334155] leading-relaxed pt-1">
                    {w}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <QuickContact />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
