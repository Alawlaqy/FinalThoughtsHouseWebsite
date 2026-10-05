/*
 * Design: Precision Shield — Corporate-Minimal
 * Hero: Full-viewport dark background with data center image, white text overlay
 * Diagonal geometric accent, two CTAs, scroll-reveal entrance
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, ArrowLeft, Shield } from "lucide-react";

const HERO_BG = "/images/hero-1920.webp";
const HERO_SRCSET = "/images/hero-960.webp 960w, /images/hero-1920.webp 1920w";

export default function HeroSection() {
  const { t, lang } = useLanguage();
  const ArrowIcon = lang === "ar" ? ArrowLeft : ArrowRight;

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          srcSet={HERO_SRCSET}
          sizes="100vw"
          alt=""
          width={1920}
          height={1072}
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/70 to-[#1E293B]/90" />
      </div>

      {/* Geometric accent - diagonal line */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <svg
          viewBox="0 0 1440 96"
          className="absolute bottom-0 w-full"
          preserveAspectRatio="none"
        >
          <path d="M0 96L1440 96L1440 0L0 96Z" fill="white" />
        </svg>
      </div>

      {/* Subtle geometric pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M0 0h80v80H0z'/%3E%3Cpath d='M0 40h80M40 0v80'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="container relative z-10 pt-28 pb-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            style={{ "--reveal-delay": "0s" } as React.CSSProperties}
            className="reveal-up inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8"
          >
            <Shield className="w-4 h-4 text-[#60A5FA]" />
            {/* The page's H1 names what the company is (for search engines); the slogan below is the visual headline */}
            <h1 className="text-sm font-medium text-white/90">
              {lang === "en"
                ? "IT Company, System Integrator & IT Reseller in Saudi Arabia"
                : "شركة تقنية معلومات وتكامل أنظمة وتوريد أجهزة في السعودية"}
            </h1>
          </div>

          {/* Headline */}
          <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
            {t("hero.slogan")}
          </p>

          {/* Subtitle */}
          <p
            style={{ "--reveal-delay": "0.2s" } as React.CSSProperties}
            className="reveal-up text-lg sm:text-xl text-white/75 leading-relaxed mb-10 max-w-2xl"
          >
            {t("hero.subtitle")}
          </p>

          {/* CTAs */}
          <div
            style={{ "--reveal-delay": "0.3s" } as React.CSSProperties}
            className="reveal-up flex flex-wrap gap-4"
          >
            <button
              onClick={() => handleNavClick("#services")}
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#2563EB] text-white font-semibold rounded-lg hover:bg-[#1D4ED8] transition-all duration-300 hover:shadow-xl hover:shadow-[#2563EB]/30 active:scale-[0.98]"
            >
              {t("hero.explore")}
              <ArrowIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </button>
            <button
              onClick={() => handleNavClick("#contact")}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/25 hover:bg-white/20 transition-all duration-300 active:scale-[0.98]"
            >
              {t("hero.contact")}
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div
          style={{ "--reveal-delay": "0.4s" } as React.CSSProperties}
          className="reveal-up mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {[
            {
              value: "500+",
              label: lang === "en" ? "Enterprise Clients" : "عميل مؤسسي",
            },
            {
              value: "99.9%",
              label: lang === "en" ? "Uptime SLA" : "اتفاقية وقت التشغيل",
            },
            {
              value: "24/7",
              label: lang === "en" ? "Support Coverage" : "تغطية الدعم",
            },
            {
              value: "15+",
              label: lang === "en" ? "Technology Partners" : "شريك تقني",
            },
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-start">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
