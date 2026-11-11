/*
 * Design: Precision Shield — Corporate-Minimal
 * Self-assessment test: yes / no / not sure questions, a short reason after each answer, then a
 * result with the gaps to fix and a way to contact the company. Answers stay in the browser.
 */
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  ASSESS_UI,
  getAssessment,
  type AssessmentSlug,
} from "@/content/assessments";
import { contactPath, servicePath, testsPath } from "@/seo";
import { SERVICES } from "@/content/services";
import { trackEvent, whatsappUrl } from "@/lib/leads";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleHelp,
  MessageCircle,
  RotateCcw,
  Share2,
  TriangleAlert,
  X,
} from "lucide-react";

type Answer = "yes" | "no" | "unsure";

export default function AssessmentPage({ slug }: { slug: AssessmentSlug }) {
  const { lang } = useLanguage();
  const a = getAssessment(slug);
  const c = a.content[lang];
  const ui = ASSESS_UI[lang];
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
  const total = c.questions.length;

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [done, setDone] = useState(false);
  const [copied, setCopied] = useState(false);

  const current = answers[index];
  const q = c.questions[index];
  const score = answers.filter(x => x === "yes").length;
  const level =
    c.levels.find(l => score >= l.min) ?? c.levels[c.levels.length - 1];
  const gaps = c.questions.filter((_, i) => answers[i] !== "yes");

  const choose = (value: Answer) => {
    if (current) return;
    if (index === 0) trackEvent("quiz_start", { quiz: slug });
    setAnswers([...answers, value]);
  };

  const next = () => {
    if (index + 1 < total) setIndex(index + 1);
    else {
      setDone(true);
      trackEvent("quiz_complete", { quiz: slug, score });
    }
  };

  const restart = () => {
    setIndex(0);
    setAnswers([]);
    setDone(false);
    setCopied(false);
  };

  const share = async () => {
    const url = window.location.origin + window.location.pathname;
    trackEvent("quiz_share", { quiz: slug });
    try {
      await navigator.clipboard.writeText(`${ui.shareText} ${url}`);
      setCopied(true);
    } catch {
      window.prompt(ui.share, url);
    }
  };

  const options: { value: Answer; label: string; icon: typeof Check }[] = [
    { value: "yes", label: ui.yes, icon: Check },
    { value: "no", label: ui.no, icon: X },
    { value: "unsure", label: ui.unsure, icon: CircleHelp },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section id="home" className="bg-[#0F172A]">
          <div className="container pt-32 pb-14 md:pt-40 md:pb-16">
            <p className="text-sm font-semibold text-[#60A5FA] mb-3">
              {c.audience} · {c.minutes}
            </p>
            <h1 className="max-w-3xl text-4xl sm:text-5xl font-extrabold text-white leading-[1.15] mb-5">
              {c.h1}
            </h1>
            <p className="max-w-3xl text-lg text-white/75 leading-relaxed">
              {c.summary}
            </p>
          </div>
        </section>

        <section className="py-14 bg-[#F8FAFC]">
          <div className="container max-w-3xl">
            {!done ? (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
                <p className="text-sm font-semibold text-[#2563EB] mb-3">
                  {ui.question} {index + 1} {ui.of} {total}
                </p>
                <div
                  className="h-1.5 rounded-full bg-gray-100 overflow-hidden mb-6"
                  aria-hidden="true"
                >
                  <div
                    className="h-full bg-[#2563EB] transition-all duration-300"
                    style={{ width: `${((index + 1) / total) * 100}%` }}
                  />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B] leading-snug mb-6">
                  {q.q}
                </h2>
                <div className="grid sm:grid-cols-3 gap-3">
                  {options.map(o => {
                    const Icon = o.icon;
                    const picked = current === o.value;
                    return (
                      <button
                        key={o.value}
                        type="button"
                        onClick={() => choose(o.value)}
                        disabled={!!current}
                        aria-pressed={picked}
                        className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold border transition-all ${
                          picked
                            ? "bg-[#2563EB] border-[#2563EB] text-white"
                            : "bg-white border-gray-200 text-[#1E293B] hover:border-[#2563EB] disabled:opacity-50"
                        }`}
                      >
                        <Icon className="w-5 h-5" aria-hidden="true" />
                        {o.label}
                      </button>
                    );
                  })}
                </div>
                <div role="status" aria-live="polite">
                  {current && (
                    <div className="mt-6 rounded-xl p-5 border bg-[#EFF6FF] border-[#BFDBFE]">
                      <p className="font-bold text-[#1E40AF] mb-2">
                        {ui.whyTitle}
                      </p>
                      <p className="text-[#334155] leading-relaxed">{q.why}</p>
                      <button
                        type="button"
                        onClick={next}
                        className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white font-semibold rounded-xl hover:bg-[#1D4ED8] transition-colors"
                      >
                        {index + 1 < total ? ui.next : ui.finish}
                        <Arrow className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
                <p className="text-sm font-semibold text-[#2563EB] mb-2">
                  {ui.resultTitle}
                </p>
                <p className="text-5xl font-extrabold text-[#1E293B] mb-1">
                  <span dir="ltr">
                    {score} / {total}
                  </span>
                </p>
                <p className="text-sm text-[#64748B] mb-5">
                  {score} {ui.score} {total}
                </p>
                <h2 className="text-2xl font-extrabold text-[#1E293B] mb-2">
                  {level.title}
                </h2>
                <p className="text-[#334155] leading-relaxed mb-6">
                  {level.text}
                </p>

                <h3 className="font-bold text-[#1E293B] mb-3">
                  {ui.gapsTitle}
                </h3>
                {gaps.length === 0 ? (
                  <p className="text-[#334155] mb-6">{ui.noGaps}</p>
                ) : (
                  <ul className="space-y-2.5 mb-6">
                    {gaps.map(g => (
                      <li
                        key={g.q}
                        className="flex items-start gap-3 text-[#334155] leading-relaxed"
                      >
                        <TriangleAlert
                          className="w-5 h-5 text-[#D97706] flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{g.fix}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-3 mb-8">
                  <button
                    type="button"
                    onClick={share}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 text-[#1E293B] font-semibold rounded-xl hover:border-[#2563EB] transition-colors"
                  >
                    <Share2 className="w-4 h-4" aria-hidden="true" />
                    {copied ? ui.copied : ui.share}
                  </button>
                  <button
                    type="button"
                    onClick={restart}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 text-[#1E293B] font-semibold rounded-xl hover:border-[#2563EB] transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" aria-hidden="true" />
                    {ui.retry}
                  </button>
                </div>

                <div className="rounded-xl bg-[#0F172A] p-6">
                  <h2 className="text-xl font-extrabold text-white mb-2">
                    {c.ctaTitle}
                  </h2>
                  <p className="text-white/75 leading-relaxed mb-5">
                    {c.ctaText}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`${contactPath(lang)}#contact`}
                      className="inline-flex items-center gap-2 px-5 py-3 bg-[#2563EB] text-white font-semibold rounded-xl hover:bg-[#1D4ED8] transition-colors"
                    >
                      {ui.ctaButton}
                      <Arrow className="w-4 h-4" aria-hidden="true" />
                    </a>
                    <a
                      href={whatsappUrl(lang)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
                    >
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      {ui.ctaWhatsapp}
                    </a>
                  </div>
                </div>
              </div>
            )}
            <p className="mt-4 text-xs text-[#64748B]">{ui.note}</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-extrabold text-[#1E293B] mb-8">
              {ui.faqTitle}
            </h2>
            <div className="space-y-4">
              {c.faq.map(f => (
                <div
                  key={f.q}
                  className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-100"
                >
                  <h3 className="font-bold text-[#1E293B] mb-2">{f.q}</h3>
                  <p className="text-[#475569] leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              <a
                href={servicePath(a.service, lang)}
                className="font-semibold text-[#2563EB] hover:underline"
              >
                {SERVICES[a.service].content[lang].name}
              </a>
              <a
                href={testsPath(lang)}
                className="font-semibold text-[#2563EB] hover:underline"
              >
                {ui.allTests}
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
