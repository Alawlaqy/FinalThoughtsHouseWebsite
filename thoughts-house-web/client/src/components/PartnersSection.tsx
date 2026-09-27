/*
 * Design: Precision Shield — Corporate-Minimal
 * Partners: Continuous scrolling marquee of partner logos (actual images)
 * Two rows scrolling in opposite directions
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";


interface Partner {
  name: string;
  logo: string;
}

export const partners: Partner[] = [
  { name: "Sophos", logo: "/images/partners/sophos.webp" },
  { name: "Dell", logo: "/images/partners/dell.webp" },
  { name: "HP", logo: "/images/partners/hp.webp" },
  { name: "Lenovo", logo: "/images/partners/lenovo.webp" },
  { name: "AWS", logo: "/images/partners/aws.webp" },
  { name: "Cisco", logo: "/images/partners/cisco.webp" },
  { name: "Palo Alto Networks", logo: "/images/partners/paloalto.webp" },
  { name: "CrowdStrike", logo: "/images/partners/crowdstrike.webp" },
  { name: "Check Point", logo: "/images/partners/checkpoint.webp" },
  { name: "Trend Micro", logo: "/images/partners/trendmicro.webp" },
  { name: "Apple", logo: "/images/partners/apple.webp" },
  { name: "Microsoft", logo: "/images/partners/microsoft.webp" },
  { name: "Supermicro", logo: "/images/partners/supermicro.webp" },
  { name: "ASUS", logo: "/images/partners/asus.webp" },
  { name: "NVIDIA", logo: "/images/partners/nvidia.webp" },
  { name: "Veeam", logo: "/images/partners/veeam.webp" },
  { name: "Microsoft Azure", logo: "/images/partners/azure.webp" },
  { name: "Veritas", logo: "/images/partners/veritas.webp" },
  { name: "Acronis", logo: "/images/partners/acronis.webp" },
  { name: "Backblaze", logo: "/images/partners/backblaze.webp" },
  { name: "NetApp", logo: "/images/partners/netapp.webp" },
  { name: "Western Digital", logo: "/images/partners/westerndigital.webp" },
  { name: "Seagate", logo: "/images/partners/seagate.webp" },
  { name: "Pure Storage", logo: "/images/partners/purestorage.webp" },
  { name: "Buffalo", logo: "/images/partners/buffalo.webp" },
];

// The marquee repeats the list 3x for a seamless loop; only the first copy is exposed
// to screen readers / search engines, the repeats are decorative.
function PartnerCard({ partner, decorative = false }: { partner: Partner; decorative?: boolean }) {
  return (
    <div aria-hidden={decorative || undefined} className="flex-shrink-0 mx-3 px-8 py-5 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center hover:shadow-md hover:border-[#2563EB]/20 transition-all duration-300 group min-w-[160px] h-[80px]">
      <img
        src={partner.logo}
        alt={decorative ? "" : partner.name}
        width={120}
        height={44}
        decoding="async"
        className="max-h-[44px] max-w-[120px] object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
        loading="lazy"
      />
    </div>
  );
}

export default function PartnersSection() {
  const { t, lang } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.05 });

  const firstHalf = partners.slice(0, 13);
  const secondHalf = partners.slice(13);

  return (
    <section id="partners" className="py-24 bg-[#F8FAFC]" ref={sectionRef}>
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
              {t("partners.title")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] mb-4">
            {t("partners.title")}
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            {t("partners.subtitle")}
          </p>
        </div>
      </div>

      {/* Marquee Row 1 */}
      <div
        className={`overflow-hidden mb-4 transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`flex ${lang === "ar" ? "animate-marquee-rtl" : "animate-marquee"}`}
          style={{ width: "max-content" }}
        >
          {[...firstHalf, ...firstHalf, ...firstHalf].map((partner, i) => (
            <PartnerCard key={`r1-${i}`} partner={partner} decorative={i >= firstHalf.length} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 */}
      <div
        className={`overflow-hidden transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`flex ${lang === "ar" ? "animate-marquee" : "animate-marquee-rtl"}`}
          style={{ width: "max-content" }}
        >
          {[...secondHalf, ...secondHalf, ...secondHalf].map((partner, i) => (
            <PartnerCard key={`r2-${i}`} partner={partner} decorative={i >= secondHalf.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
