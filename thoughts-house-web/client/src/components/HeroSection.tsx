/*
 * Design: Precision Shield — Corporate-Minimal
 * Hero: Full-viewport dark background with data center image, white text overlay
 * Diagonal geometric accent, two CTAs, scroll-reveal entrance
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Shield } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663032266291/6GEufHXYFFmAikUkdcoDrJ/hero-bg-Vr4m9Ly3dbEfs2tnY82hfX.webp";

export default function HeroSection() {
  const { t, lang } = useLanguage();
  const ArrowIcon = lang === "ar" ? ArrowLeft : ArrowRight;

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
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
        <svg viewBox="0 0 1440 96" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0 96L1440 96L1440 0L0 96Z" fill="white" />
        </svg>
      </div>

      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M0 0h80v80H0z'/%3E%3Cpath d='M0 40h80M40 0v80'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Content */}
      <div className="container relative z-10 pt-28 pb-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8"
          >
            <Shield className="w-4 h-4 text-[#60A5FA]" />
            <span className="text-sm font-medium text-white/90">
              {lang === "en" ? "Trusted IT System Integrator" : "شريك موثوق في تكامل أنظمة تقنية المعلومات"}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6"
          >
            {t("hero.slogan")}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg sm:text-xl text-white/75 leading-relaxed mb-10 max-w-2xl"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-wrap gap-4"
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
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {[
            { value: "50+", label: lang === "en" ? "Enterprise Clients" : "عميل مؤسسي" },
            { value: "99.9%", label: lang === "en" ? "Uptime SLA" : "اتفاقية وقت التشغيل" },
            { value: "24/7", label: lang === "en" ? "Support Coverage" : "تغطية الدعم" },
            { value: "15+", label: lang === "en" ? "Technology Partners" : "شريك تقني" },
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-start">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
