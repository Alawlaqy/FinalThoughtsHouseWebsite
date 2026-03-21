/*
 * Design: Precision Shield — Corporate-Minimal
 * Partners: Continuous scrolling marquee of partner logos (actual images)
 * Two rows scrolling in opposite directions
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310419663032266291/6GEufHXYFFmAikUkdcoDrJ";

interface Partner {
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { name: "Sophos", logo: `${CDN}/sophos_36cf4b72.png` },
  { name: "Dell", logo: `${CDN}/dell_8cbd4e7c.png` },
  { name: "HP", logo: `${CDN}/hp_a059a6b6.png` },
  { name: "Lenovo", logo: `${CDN}/lenovo_20c8ed51.png` },
  { name: "AWS", logo: `${CDN}/aws_332948b0.png` },
  { name: "Cisco", logo: `${CDN}/cisco_a8d2b755.png` },
  { name: "Palo Alto Networks", logo: `${CDN}/paloalto_47512556.jpg` },
  { name: "CrowdStrike", logo: `${CDN}/crowdstrike_45a13678.jpg` },
  { name: "Check Point", logo: `${CDN}/checkpoint_b4c37eb0.png` },
  { name: "Trend Micro", logo: `${CDN}/trendmicro_25aaff59.png` },
  { name: "Apple", logo: `${CDN}/apple_831318cf.png` },
  { name: "Microsoft", logo: `${CDN}/microsoft_e888e042.jpg` },
  { name: "Supermicro", logo: `${CDN}/supermicro_42510d91.png` },
  { name: "ASUS", logo: `${CDN}/asus_b1db9bea.png` },
  { name: "NVIDIA", logo: `${CDN}/nvidia_38a21bcb.png` },
  { name: "Veeam", logo: `${CDN}/veeam_02f27d55.webp` },
  { name: "Microsoft Azure", logo: `${CDN}/azure_90458907.png` },
  { name: "Veritas", logo: `${CDN}/veritas_e84ec80b.png` },
  { name: "Acronis", logo: `${CDN}/acronis_4de1df87.png` },
  { name: "Backblaze", logo: `${CDN}/backblaze_83dc6208.png` },
  { name: "NetApp", logo: `${CDN}/netapp_72237aa9.png` },
  { name: "Western Digital", logo: `${CDN}/westerndigital_a371731a.png` },
  { name: "Seagate", logo: `${CDN}/seagate_91398734.png` },
  { name: "Pure Storage", logo: `${CDN}/purestorage_771f30e3.png` },
  { name: "Buffalo", logo: `${CDN}/buffalo_f7d9a99d.webp` },
];

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div className="flex-shrink-0 mx-3 px-8 py-5 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center hover:shadow-md hover:border-[#2563EB]/20 transition-all duration-300 group min-w-[160px] h-[80px]">
      <img
        src={partner.logo}
        alt={partner.name}
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
            <PartnerCard key={`r1-${i}`} partner={partner} />
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
            <PartnerCard key={`r2-${i}`} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
