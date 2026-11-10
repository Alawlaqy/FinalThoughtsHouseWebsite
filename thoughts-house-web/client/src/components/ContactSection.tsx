/*
 * Design: Precision Shield — Corporate-Minimal
 * Contact: Clean form + info cards + embedded Google Map
 * White background with geometric pattern
 */
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { COMPANY } from "@/content/about";
import { SERVICES, SERVICE_SLUGS } from "@/content/services";
import { privacyPath } from "@/seo";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { trackLead, whatsappUrl } from "@/lib/leads";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Loader2,
  ChevronDown,
  Clock,
  MessageCircle,
} from "lucide-react";

const CONTACT_ENDPOINT = "https://formsubmit.co/ajax/sales@thoughtshouse.com";
// FormSubmit can take 30+ seconds to answer; after this long, offer WhatsApp instead.
const SLOW_NOTICE_MS = 8000;
const FIND_US_OPTIONS = [
  "google",
  "maps",
  "ai",
  "referral",
  "social",
  "other",
] as const;

export default function ContactSection() {
  const { t, lang } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.05 });
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    source: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [slow, setSlow] = useState(false);

  // Messages are delivered to the sales inbox via FormSubmit (https://formsubmit.co).
  // The very first submission triggers a one-time activation email to that inbox.
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const honeypot = new FormData(e.currentTarget).get("_honey");
    if (honeypot) return; // spam bot filled the hidden field

    setSending(true);
    setError(false);
    const slowTimer = setTimeout(() => setSlow(true), SLOW_NOTICE_MS);
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone || "Not provided",
          service: formData.service || "Not selected",
          source: formData.source || "Not answered",
          message: formData.message,
          _replyto: formData.email,
          _subject: `New website inquiry from ${formData.name}${formData.company ? ` (${formData.company})` : ""}`,
          _template: "table",
          language: lang === "ar" ? "Arabic" : "English",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === false || data.success === "false") {
        throw new Error(data.message || `HTTP ${res.status}`);
      }
      trackLead("form", formData.source);
      setSubmitted(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        source: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      console.error("Contact form failed", err);
      setError(true);
    } finally {
      clearTimeout(slowTimer);
      setSlow(false);
      setSending(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.emailAddress"),
      href: "mailto:sales@thoughtshouse.com",
    },
    {
      icon: Phone,
      label: t("contact.phone"),
      href: "tel:+966541022995",
    },
    {
      icon: MapPin,
      label: t("contact.address"),
      href: COMPANY.mapUrl,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#2563EB]/10 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            <span className="text-sm font-semibold text-[#2563EB] uppercase tracking-wide">
              {t("contact.title")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            {t("contact.subtitle")}
          </p>
        </div>

        <div
          className={`grid lg:grid-cols-5 gap-10 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Contact Form - 3 cols */}
          <div className="lg:col-span-3">
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot: hidden from people, bots tend to fill it */}
                <input
                  type="text"
                  name="_honey"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-semibold text-[#1E293B] mb-2"
                    >
                      {t("contact.name")}
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={e =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder={t("contact.namePlaceholder")}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[#1E293B] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-sm font-semibold text-[#1E293B] mb-2"
                    >
                      {t("contact.phoneField")}
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      dir="ltr"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={e =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="05X XXX XXXX"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[#1E293B] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-semibold text-[#1E293B] mb-2"
                  >
                    {t("contact.email")}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={e =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder={t("contact.emailPlaceholder")}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[#1E293B] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-semibold text-[#1E293B] mb-2"
                  >
                    {t("contact.message")}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={e =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder={t("contact.messagePlaceholder")}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[#1E293B] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all resize-none"
                  />
                </div>
                <details className="group rounded-xl border border-gray-200 bg-white">
                  <summary className="cursor-pointer select-none list-none px-4 py-3 text-sm font-semibold text-[#334155] flex items-center justify-between [&::-webkit-details-marker]:hidden">
                    {t("contact.moreDetails")}
                    <ChevronDown className="w-4 h-4 text-[#64748B] transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-4 pb-4 pt-1 grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-company"
                        className="block text-sm font-semibold text-[#1E293B] mb-2"
                      >
                        {t("contact.company")}
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={e =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder={t("contact.companyPlaceholder")}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[#1E293B] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-service"
                        className="block text-sm font-semibold text-[#1E293B] mb-2"
                      >
                        {t("contact.serviceField")}
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={e =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[#1E293B] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all"
                      >
                        <option value="">
                          {t("contact.sourcePlaceholder")}
                        </option>
                        {SERVICE_SLUGS.map(slug => (
                          <option
                            key={slug}
                            value={SERVICES[slug].content.en.name}
                          >
                            {SERVICES[slug].content[lang].name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="contact-source"
                        className="block text-sm font-semibold text-[#1E293B] mb-2"
                      >
                        {t("contact.source")}
                      </label>
                      <select
                        id="contact-source"
                        name="source"
                        value={formData.source}
                        onChange={e =>
                          setFormData({ ...formData, source: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[#1E293B] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all"
                      >
                        <option value="">
                          {t("contact.sourcePlaceholder")}
                        </option>
                        {FIND_US_OPTIONS.map(o => (
                          <option key={o} value={o}>
                            {t(`contact.source.${o}`)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </details>
                <button
                  type="submit"
                  disabled={submitted || sending}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#2563EB] text-white font-semibold rounded-xl hover:bg-[#1D4ED8] transition-all duration-300 hover:shadow-lg hover:shadow-[#2563EB]/25 active:scale-[0.98] disabled:opacity-70"
                >
                  {submitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      {t("contact.sent")}
                    </>
                  ) : sending ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {t("contact.sending")}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t("contact.send")}
                    </>
                  )}
                </button>
                <p className="text-xs text-[#64748B]">
                  {t("contact.privacyNote")}{" "}
                  <a
                    href={privacyPath(lang)}
                    className="underline hover:text-[#2563EB]"
                  >
                    {t("nav.privacy")}
                  </a>
                  .
                </p>
                <p role="status" aria-live="polite" className="text-sm">
                  {slow && (
                    <span className="text-[#334155] font-medium">
                      {t("contact.slow")}{" "}
                      <a
                        href={whatsappUrl(lang)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-[#2563EB]"
                      >
                        {t("contact.slowWhatsapp")}
                      </a>
                      .
                    </span>
                  )}
                  {submitted && (
                    <span className="text-green-700 font-medium">
                      {t("contact.sent")}
                    </span>
                  )}
                  {error && (
                    <span className="text-red-600 font-medium">
                      {t("contact.error")}
                    </span>
                  )}
                </p>
              </form>
            </div>
          </div>

          {/* Contact Info - 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Info Cards */}
            <div className="space-y-3">
              <a
                href={whatsappUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#25D366]/10 rounded-xl border border-[#25D366]/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <span>
                  <span className="block text-sm font-bold text-[#1E293B]">
                    {t("contact.whatsapp")}
                  </span>
                  <span className="block text-xs text-[#475569]">
                    {t("contact.whatsappNote")}
                  </span>
                </span>
              </a>
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <a
                    key={i}
                    href={info.href || undefined}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-4 p-4 bg-[#F8FAFC] rounded-xl border border-gray-100 hover:border-[#2563EB]/20 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2563EB]/20 transition-colors">
                      <Icon className="w-5 h-5 text-[#2563EB]" />
                    </div>
                    <span className="text-sm font-medium text-[#334155] group-hover:text-[#2563EB] transition-colors">
                      {info.label}
                    </span>
                  </a>
                );
              })}
              <div className="flex items-center gap-4 p-4 bg-[#F8FAFC] rounded-xl border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#2563EB]" />
                </div>
                <span className="text-sm font-medium text-[#334155]">
                  {t("contact.hours")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
