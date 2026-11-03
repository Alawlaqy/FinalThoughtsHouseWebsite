/*
 * Design: Precision Shield — Corporate-Minimal
 * Contact page: the single reference for the company's address, phone and email.
 */
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Chatbot from "@/components/Chatbot";
import { useLanguage } from "@/contexts/LanguageContext";
import { COMPANY } from "@/content/about";
import { CONTACT_PAGE } from "@/content/hubs";
import { whatsappUrl } from "@/lib/leads";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default function ContactPage() {
  const { lang } = useLanguage();
  const c = CONTACT_PAGE[lang];
  const cardClass = "p-6 bg-[#F8FAFC] rounded-2xl border border-gray-100";

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
          <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className={cardClass}>
              <MapPin
                className="w-6 h-6 text-[#2563EB] mb-3"
                aria-hidden="true"
              />
              <h2 className="font-bold text-[#1E293B] mb-2">
                {lang === "ar" ? "العنوان" : "Address"}
              </h2>
              <p className="text-sm text-[#64748B] leading-relaxed mb-2">
                {c.address}. {c.appointment}
              </p>
              <p className="text-sm text-[#64748B] leading-relaxed mb-2">
                {c.hours}
              </p>
              <a
                href={COMPANY.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#2563EB] hover:underline"
              >
                {c.mapLabel}
              </a>
            </div>
            <div className={cardClass}>
              <Phone
                className="w-6 h-6 text-[#2563EB] mb-3"
                aria-hidden="true"
              />
              <h2 className="font-bold text-[#1E293B] mb-2">
                {lang === "ar" ? "الهاتف" : "Phone"}
              </h2>
              <a
                href={`tel:${COMPANY.phone}`}
                dir="ltr"
                className="text-sm text-[#334155] hover:text-[#2563EB]"
              >
                {COMPANY.phoneDisplay}
              </a>
            </div>
            <div className={cardClass}>
              <MessageCircle
                className="w-6 h-6 text-[#2563EB] mb-3"
                aria-hidden="true"
              />
              <h2 className="font-bold text-[#1E293B] mb-2">
                {lang === "ar" ? "واتساب" : "WhatsApp"}
              </h2>
              <a
                href={whatsappUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#334155] hover:text-[#2563EB]"
              >
                {lang === "ar" ? "راسلنا على واتساب" : "Message us on WhatsApp"}
              </a>
            </div>
            <div className={cardClass}>
              <Mail
                className="w-6 h-6 text-[#2563EB] mb-3"
                aria-hidden="true"
              />
              <h2 className="font-bold text-[#1E293B] mb-2">
                {lang === "ar" ? "البريد الإلكتروني" : "Email"}
              </h2>
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-sm text-[#334155] hover:text-[#2563EB] break-all"
              >
                {COMPANY.email}
              </a>
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
