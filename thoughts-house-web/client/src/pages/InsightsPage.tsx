/*
 * Design: Precision Shield — Corporate-Minimal
 * Insights index: list of knowledge-base articles.
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Chatbot from "@/components/Chatbot";
import { useLanguage } from "@/contexts/LanguageContext";
import { ARTICLES } from "@/content/articles";
import { imageSrcSet } from "@/content/services";
import { articlePath, INSIGHTS_META } from "@/seo";
import { formatDate } from "./ArticlePage";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function InsightsPage() {
  const { lang } = useLanguage();
  const m = INSIGHTS_META[lang];
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section id="home" className="bg-[#0F172A]">
          <div className="container pt-32 pb-14 md:pt-40 md:pb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              {m.h1}
            </h1>
            <p className="max-w-2xl text-lg text-white/70 leading-relaxed">
              {m.intro}
            </p>
          </div>
        </section>

        <section className="py-16 bg-[#F8FAFC]">
          <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.map(a => {
              const c = a.content[lang];
              return (
                <article
                  key={a.slug}
                  className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col"
                >
                  <img
                    src={a.image}
                    srcSet={imageSrcSet(a.image)}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    alt=""
                    width={1280}
                    height={715}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <time
                      dateTime={a.published}
                      className="text-xs text-[#94A3B8] mb-2"
                    >
                      {formatDate(a.published, lang)}
                    </time>
                    <h2 className="text-lg font-bold text-[#1E293B] mb-3">
                      <a
                        href={articlePath(a.slug, lang)}
                        className="group-hover:text-[#2563EB] transition-colors"
                      >
                        {c.title}
                      </a>
                    </h2>
                    <p className="text-sm text-[#64748B] leading-relaxed mb-5 flex-1">
                      {c.description}
                    </p>
                    <a
                      href={articlePath(a.slug, lang)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB]"
                      aria-label={`${lang === "ar" ? "اقرأ" : "Read"}: ${c.title}`}
                    >
                      {lang === "ar" ? "اقرأ المقال" : "Read article"}
                      <Arrow className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
      <Chatbot />
    </div>
  );
}
