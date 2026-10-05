/*
 * Design: Precision Shield — Corporate-Minimal
 * Article page: knowledge-base guide with breadcrumb, readable body, sources,
 * a call-to-action for the related service, and links to other articles.
 */
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Chatbot from "@/components/Chatbot";
import { useLanguage } from "@/contexts/LanguageContext";
import { ARTICLES, getArticle, type ArticleSlug } from "@/content/articles";
import { getArticleBody } from "@/content/articleBodyStore";
import { SERVICES } from "@/content/services";
import { articlePath, INSIGHTS_META, insightsPath, servicePath } from "@/seo";
import {
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const MONTHS = {
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  ar: [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ],
};

/** Deterministic date format (identical at prerender time and in the browser, so hydration matches). */
export function formatDate(iso: string, lang: "en" | "ar") {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[lang][m - 1]} ${y}`;
}

export default function ArticlePage({ slug }: { slug: ArticleSlug }) {
  const { lang, homeHref } = useLanguage();
  const article = getArticle(slug);
  const c = article.content[lang];
  const body = getArticleBody(slug, lang);
  const service = SERVICES[article.service].content[lang];
  const Chevron = lang === "ar" ? ChevronLeft : ChevronRight;
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
  const others = ARTICLES.filter(a => a.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Header */}
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
                    href={insightsPath(lang)}
                    className="hover:text-white transition-colors"
                  >
                    {INSIGHTS_META[lang].h1}
                  </a>
                </li>
              </ol>
            </nav>
            <h1 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.2] mb-5">
              {c.title}
            </h1>
            <p className="max-w-3xl text-lg text-white/70 leading-relaxed mb-6">
              {c.description}
            </p>
            <p className="text-sm text-white/50">
              <time dateTime={article.published}>
                {formatDate(article.published, lang)}
              </time>
              {" · "}
              {lang === "ar" ? "بيت الأفكار" : "Thoughts House"}
            </p>
          </div>
        </section>

        {/* Body */}
        <article className="py-16 bg-white">
          <div className="container max-w-3xl text-[#334155] text-[17px] leading-[1.85]">
            {body?.summary.length ? (
              <div className="mb-10 p-6 rounded-2xl bg-[#EFF4FF] border border-[#2563EB]/15">
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#2563EB] mb-3">
                  {lang === "ar" ? "الخلاصة" : "Key takeaways"}
                </h2>
                <ul className="space-y-2 list-disc ps-6 marker:text-[#2563EB]">
                  {body.summary.map(s => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {body?.blocks.map((b, i) =>
              "h2" in b ? (
                <h2
                  key={i}
                  className="text-2xl font-extrabold text-[#1E293B] mt-12 mb-4"
                >
                  {b.h2}
                </h2>
              ) : "p" in b ? (
                <p key={i} className="mb-5">
                  {b.p}
                </p>
              ) : (
                <ul
                  key={i}
                  className="mb-6 space-y-3 list-disc ps-6 marker:text-[#2563EB]"
                >
                  {b.ul.map(li => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              )
            )}

            {body?.faq.length ? (
              <div className="mt-12">
                <h2 className="text-2xl font-extrabold text-[#1E293B] mb-4">
                  {lang === "ar" ? "أسئلة شائعة" : "Frequently asked questions"}
                </h2>
                <div className="space-y-5">
                  {body.faq.map(f => (
                    <div key={f.q}>
                      <h3 className="font-bold text-[#1E293B] mb-1">{f.q}</h3>
                      <p>{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {body?.sources && (
              <div className="mt-12 pt-6 border-t border-gray-100">
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#64748B] mb-3">
                  {lang === "ar" ? "المصادر" : "Sources"}
                </h2>
                <ul className="space-y-2 text-base">
                  {body.sources.map(s => (
                    <li key={s.url}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#2563EB] hover:underline"
                      >
                        {s.label}
                        <ExternalLink
                          className="w-3.5 h-3.5"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Related service */}
            <aside className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-gray-100">
              <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wide mb-2">
                {lang === "ar" ? "خدمة ذات صلة" : "Related service"}
              </p>
              <p className="text-xl font-bold text-[#1E293B] mb-4">
                {service.name}
              </p>
              <a
                href={servicePath(article.service, lang)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white font-semibold rounded-lg hover:bg-[#1D4ED8] transition-colors"
              >
                {lang === "ar" ? "اعرف المزيد" : "Learn more"}
                <Arrow className="w-4 h-4" aria-hidden="true" />
              </a>
            </aside>
          </div>
        </article>

        {/* More articles */}
        <section className="py-16 bg-[#F8FAFC]">
          <div className="container">
            <h2 className="text-2xl font-extrabold text-[#1E293B] mb-8 text-center">
              {lang === "ar" ? "مقالات أخرى" : "More insights"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {others.map(a => (
                <a
                  key={a.slug}
                  href={articlePath(a.slug, lang)}
                  className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#2563EB]/30 hover:shadow-md transition-all"
                >
                  <h3 className="font-bold text-[#1E293B] group-hover:text-[#2563EB] transition-colors mb-2">
                    {a.content[lang].title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed line-clamp-3">
                    {a.content[lang].description}
                  </p>
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
