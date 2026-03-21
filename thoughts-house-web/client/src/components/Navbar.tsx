/*
 * Design: Precision Shield — Corporate-Minimal
 * Navbar: Fixed top, white bg with subtle shadow on scroll, navy text, blue accent CTA
 * RTL-aware with language toggle
 */
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { key: "nav.home", href: "#home" },
  { key: "nav.services", href: "#services" },
  { key: "nav.partners", href: "#partners" },
  { key: "nav.contact", href: "#contact" },
];

export default function Navbar() {
  const { t, lang, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(30,41,59,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-18 md:h-20">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
          className="flex items-center gap-2 group"
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032266291/6GEufHXYFFmAikUkdcoDrJ/thoughts-house-logo-transparent_8229ec19.png"
            alt="Thoughts House Logo"
            className="w-11 h-11 object-contain"
          />
          <div className="flex flex-col">
            <span className={`text-lg font-bold leading-tight ${scrolled ? "text-[#1E293B]" : "text-white"} transition-colors duration-300`}>
              Thoughts House
            </span>
            <span className={`text-[10px] font-medium tracking-wider uppercase ${scrolled ? "text-[#64748B]" : "text-white/70"} transition-colors duration-300`}>
              IT System Integrator
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-[#2563EB]/10 ${
                scrolled ? "text-[#1E293B] hover:text-[#2563EB]" : "text-white/90 hover:text-white"
              }`}
            >
              {t(link.key)}
            </a>
          ))}

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
              scrolled
                ? "text-[#64748B] hover:text-[#2563EB] hover:bg-[#2563EB]/10"
                : "text-white/70 hover:text-white hover:bg-white/10"
            }`}
          >
            <Globe className="w-4 h-4" />
            {lang === "en" ? "العربية" : "English"}
          </button>

          {/* CTA */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
            className="ml-2 px-5 py-2.5 bg-[#2563EB] text-white text-sm font-semibold rounded-lg hover:bg-[#1D4ED8] transition-all duration-200 hover:shadow-lg hover:shadow-[#2563EB]/25 active:scale-[0.98]"
          >
            {t("hero.contact")}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLanguage}
            className={`p-2 rounded-lg transition-colors ${
              scrolled ? "text-[#64748B]" : "text-white/70"
            }`}
          >
            <Globe className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`p-2 rounded-lg transition-colors ${
              scrolled ? "text-[#1E293B]" : "text-white"
            }`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="px-4 py-3 text-[#1E293B] font-medium rounded-lg hover:bg-[#2563EB]/10 hover:text-[#2563EB] transition-colors"
                >
                  {t(link.key)}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                className="mt-2 px-4 py-3 bg-[#2563EB] text-white font-semibold rounded-lg text-center hover:bg-[#1D4ED8] transition-colors"
              >
                {t("hero.contact")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
