/*
 * Design: Precision Shield — Corporate-Minimal
 * Phishing awareness test: one example at a time, an explanation after each answer, then a result
 * with a link to contact the company. Nothing is collected from the visitor.
 */
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { useLanguage } from "@/contexts/LanguageContext";
import { QUIZ_COPY, QUIZ_QUESTIONS, type QuizKind } from "@/content/quiz";
import { contactPath, servicePath, testsPath } from "@/seo";
import { trackEvent, whatsappUrl } from "@/lib/leads";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Link2,
  Mail,
  MessageCircle,
  MessageSquare,
  Phone,
  RotateCcw,
  Share2,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  XCircle,
} from "lucide-react";

const KIND_ICON: Record<QuizKind, typeof Mail> = {
  email: Mail,
  sms: MessageSquare,
  link: Link2,
  call: Phone,
  app: Smartphone,
};

const TOTAL = QUIZ_QUESTIONS.length;

export default function QuizPage() {
  const { lang } = useLanguage();
  const c = QUIZ_COPY[lang];
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [copied, setCopied] = useState(false);

  const q = QUIZ_QUESTIONS[index];
  const qc = q.content[lang];
  const Icon = KIND_ICON[q.kind];
  const isRight = answer !== null && answer === q.scam;
  const level =
    c.levels.find(l => score >= l.min) ?? c.levels[c.levels.length - 1];

  const choose = (saysScam: boolean) => {
    if (answer !== null) return;
    if (index === 0) trackEvent("quiz_start", { quiz: "phishing" });
    setAnswer(saysScam);
    if (saysScam === q.scam) setScore(s => s + 1);
  };

  const next = () => {
    if (index + 1 < TOTAL) {
      setIndex(index + 1);
      setAnswer(null);
    } else {
      setDone(true);
      trackEvent("quiz_complete", { quiz: "phishing", score });
    }
  };

  const restart = () => {
    setIndex(0);
    setAnswer(null);
    setScore(0);
    setDone(false);
    setCopied(false);
  };

  const share = async () => {
    const url = window.location.origin + window.location.pathname;
    trackEvent("quiz_share", { quiz: "phishing" });
    try {
      await navigator.clipboard.writeText(`${c.shareText} ${url}`);
      setCopied(true);
    } catch {
      window.prompt(c.share, url);
    }
  };

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

        <section className="py-14 bg-[#F8FAFC]">
          <div className="container max-w-3xl">
            {!done ? (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <p className="text-sm font-semibold text-[#2563EB]">
                    {c.question} {index + 1} {c.of} {TOTAL}
                  </p>
                  <p className="inline-flex items-center gap-2 text-sm text-[#64748B]">
                    <Icon className="w-4 h-4" aria-hidden="true" />
                    {qc.label}
                  </p>
                </div>
                <div
                  className="h-1.5 rounded-full bg-gray-100 overflow-hidden mb-6"
                  aria-hidden="true"
                >
                  <div
                    className="h-full bg-[#2563EB] transition-all duration-300"
                    style={{ width: `${((index + 1) / TOTAL) * 100}%` }}
                  />
                </div>

                {/* The example message */}
                <div className="rounded-xl border border-gray-200 bg-[#F8FAFC] p-5 mb-6">
                  {qc.from && (
                    <p
                      dir="ltr"
                      className="text-sm font-mono text-[#334155] break-all text-start mb-2"
                    >
                      {qc.from}
                    </p>
                  )}
                  {qc.subject && (
                    <p className="font-bold text-[#1E293B] mb-2">
                      {qc.subject}
                    </p>
                  )}
                  <p className="text-[#334155] leading-relaxed">{qc.body}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => choose(false)}
                    disabled={answer !== null}
                    aria-pressed={answer === false}
                    className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold border transition-all ${
                      answer === false
                        ? "bg-[#059669] border-[#059669] text-white"
                        : "bg-white border-gray-200 text-[#1E293B] hover:border-[#059669] disabled:opacity-50"
                    }`}
                  >
                    <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                    {c.safe}
                  </button>
                  <button
                    type="button"
                    onClick={() => choose(true)}
                    disabled={answer !== null}
                    aria-pressed={answer === true}
                    className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold border transition-all ${
                      answer === true
                        ? "bg-[#DC2626] border-[#DC2626] text-white"
                        : "bg-white border-gray-200 text-[#1E293B] hover:border-[#DC2626] disabled:opacity-50"
                    }`}
                  >
                    <ShieldAlert className="w-5 h-5" aria-hidden="true" />
                    {c.scam}
                  </button>
                </div>

                <div role="status" aria-live="polite">
                  {answer !== null && (
                    <div
                      className={`mt-6 rounded-xl p-5 border ${
                        isRight
                          ? "bg-[#ECFDF5] border-[#A7F3D0]"
                          : "bg-[#FEF2F2] border-[#FECACA]"
                      }`}
                    >
                      <p
                        className={`flex items-center gap-2 font-bold mb-2 ${
                          isRight ? "text-[#047857]" : "text-[#B91C1C]"
                        }`}
                      >
                        {isRight ? (
                          <CheckCircle className="w-5 h-5" aria-hidden="true" />
                        ) : (
                          <XCircle className="w-5 h-5" aria-hidden="true" />
                        )}
                        {isRight ? c.correct : c.wrong}
                      </p>
                      <p className="text-[#334155] leading-relaxed">{qc.why}</p>
                      <button
                        type="button"
                        onClick={next}
                        className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white font-semibold rounded-xl hover:bg-[#1D4ED8] transition-colors"
                      >
                        {index + 1 < TOTAL ? c.next : c.finish}
                        <Arrow className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
                <p className="text-sm font-semibold text-[#2563EB] mb-2">
                  {c.resultTitle}
                </p>
                <p className="text-5xl font-extrabold text-[#1E293B] mb-1">
                  <span dir="ltr">
                    {score} / {TOTAL}
                  </span>
                </p>
                <p className="text-sm text-[#64748B] mb-5">
                  {score} {c.score} {TOTAL}
                </p>
                <h2 className="text-2xl font-extrabold text-[#1E293B] mb-2">
                  {level.title}
                </h2>
                <p className="text-[#334155] leading-relaxed mb-6">
                  {level.text}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <button
                    type="button"
                    onClick={share}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 text-[#1E293B] font-semibold rounded-xl hover:border-[#2563EB] transition-colors"
                  >
                    <Share2 className="w-4 h-4" aria-hidden="true" />
                    {copied ? c.copied : c.share}
                  </button>
                  <button
                    type="button"
                    onClick={restart}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 text-[#1E293B] font-semibold rounded-xl hover:border-[#2563EB] transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" aria-hidden="true" />
                    {c.retry}
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
                      {c.ctaButton}
                      <Arrow className="w-4 h-4" aria-hidden="true" />
                    </a>
                    <a
                      href={whatsappUrl(lang)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
                    >
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      {c.ctaWhatsapp}
                    </a>
                  </div>
                </div>
              </div>
            )}
            <p className="mt-4 text-xs text-[#64748B]">{c.note}</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-extrabold text-[#1E293B] mb-8">
              {c.tipsTitle}
            </h2>
            <ol className="grid sm:grid-cols-2 gap-5">
              {c.tips.map((tip, i) => (
                <li
                  key={tip.title}
                  className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-100"
                >
                  <p className="text-sm font-bold text-[#2563EB] mb-1">
                    {i + 1}
                  </p>
                  <h3 className="font-bold text-[#1E293B] mb-2">{tip.title}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {tip.text}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              <a
                href={testsPath(lang)}
                className="font-semibold text-[#2563EB] hover:underline"
              >
                {lang === "ar" ? "كل الاختبارات المجانية" : "All free tests"}
              </a>
              <a
                href={servicePath("cybersecurity", lang)}
                className="font-semibold text-[#2563EB] hover:underline"
              >
                {lang === "ar"
                  ? "خدمات الأمن السيبراني من بيت الأفكار"
                  : "Cybersecurity services from Thoughts House"}
              </a>
            </p>
          </div>
        </section>

        <section className="py-16 bg-[#F8FAFC]">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-extrabold text-[#1E293B] mb-8">
              {c.faqTitle}
            </h2>
            <div className="space-y-4">
              {c.faq.map(f => (
                <div
                  key={f.q}
                  className="p-6 bg-white rounded-2xl border border-gray-100"
                >
                  <h3 className="font-bold text-[#1E293B] mb-2">{f.q}</h3>
                  <p className="text-[#475569] leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
