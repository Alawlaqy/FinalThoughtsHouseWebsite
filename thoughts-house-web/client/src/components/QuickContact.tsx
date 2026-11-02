/*
 * Design: Precision Shield — Corporate-Minimal
 * Call-to-action band: quotation, WhatsApp and phone, shown before the contact form.
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { COMPANY } from "@/content/about";
import { whatsappUrl } from "@/lib/leads";

export default function QuickContact() {
  const { lang } = useLanguage();
  const ar = lang === "ar";

  return (
    <section className="bg-[#0F172A]">
      <div className="container py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-2">
            {ar ? "هل تحتاج إلى عرض سعر؟" : "Need a quotation?"}
          </h2>
          <p className="text-white/75">
            {ar
              ? "أخبرنا بما تحتاج إليه، ويمكنك إرسال قائمة الأجهزة أو التراخيص المطلوبة."
              : "Tell us what you need. You can also send your list of equipment or licenses."}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="px-6 py-3 bg-[#2563EB] text-white font-semibold rounded-lg hover:bg-[#1D4ED8] transition-colors"
          >
            {ar ? "اطلب عرض سعر" : "Request a quotation"}
          </a>
          <a
            href={whatsappUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
          >
            {ar ? "واتساب" : "WhatsApp"}
          </a>
          <a
            href={`tel:${COMPANY.phone}`}
            dir="ltr"
            className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
          >
            {COMPANY.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
