/*
 * Design: Precision Shield — Corporate-Minimal
 * Home FAQ: native <details> accordion (content stays in the HTML for search engines).
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { HOME_FAQ } from "@/content/homeFaq";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const { lang } = useLanguage();
  const faq = HOME_FAQ[lang];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] mb-10 text-center">
          {faq.title}
        </h2>
        <div className="space-y-4">
          {faq.items.map(f => (
            <details
              key={f.q}
              className="group bg-[#F8FAFC] rounded-xl border border-gray-100"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 font-semibold text-[#1E293B]">
                <h3 className="text-base">{f.q}</h3>
                <ChevronDown
                  className="w-5 h-5 text-[#64748B] flex-shrink-0 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-5 pb-5 text-[#64748B] leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
