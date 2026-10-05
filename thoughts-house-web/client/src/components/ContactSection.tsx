/*
 * Design: Precision Shield — Corporate-Minimal
 * Contact: Clean form + info cards + embedded Google Map
 * White background with geometric pattern
 */
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";

const CONTACT_ENDPOINT = "https://formsubmit.co/ajax/sales@thoughtshouse.com";

export default function ContactSection() {
  const { t, lang } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.05 });
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  // Messages are delivered to the sales inbox via FormSubmit (https://formsubmit.co).
  // The very first submission triggers a one-time activation email to that inbox.
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const honeypot = new FormData(e.currentTarget).get("_honey");
    if (honeypot) return; // spam bot filled the hidden field

    setSending(true);
    setError(false);
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
      setSubmitted(true);
      setFormData({ name: "", company: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      console.error("Contact form failed", err);
      setError(true);
    } finally {
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
      href: "https://maps.app.goo.gl/SECK4KzVH42TiTxD6",
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
                    rows={5}
                    value={formData.message}
                    onChange={e =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder={t("contact.messagePlaceholder")}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[#1E293B] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all resize-none"
                  />
                </div>
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
                <p role="status" aria-live="polite" className="text-sm">
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

          {/* Contact Info + Map - 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Info Cards */}
            <div className="space-y-3">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <a
                    key={i}
                    href={info.href}
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
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-[280px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.0!2d50.1033!3d26.4333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e6d4b1d1e5c1%3A0x1!2sDammam%2C+Saudi+Arabia!5e0!3m2!1sen!2ssa!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Thoughts House Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
