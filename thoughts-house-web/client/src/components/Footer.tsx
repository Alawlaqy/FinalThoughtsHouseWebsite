/*
 * Design: Precision Shield — Corporate-Minimal
 * Footer: Deep navy background, white text, organized columns
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin } from "lucide-react";
import { SERVICES, SERVICE_SLUGS } from "@/content/services";
import {
  aboutPath,
  brandsPath,
  coveragePath,
  insightsPath,
  servicePath,
} from "@/seo";

export default function Footer() {
  const { t, lang, homeHref } = useLanguage();

  const handleNavClick = (e: React.MouseEvent, hash: string) => {
    const el = document.querySelector(hash);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { key: "nav.home", href: "#home" },
    { key: "nav.services", href: "#services" },
    { key: "nav.partners", href: "#partners" },
    { key: "nav.contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#0F172A] text-white">
      {/* Geometric divider */}
      <div className="h-1 bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#2563EB]" />

      <div className="container py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/logo-96.webp"
                alt="Thoughts House Logo"
                width={48}
                height={48}
                loading="lazy"
                className="w-12 h-12 object-contain brightness-0 invert"
              />
              <div>
                <div className="text-lg font-bold">Thoughts House</div>
                <div className="text-xs text-white/50">
                  IT System Integrator
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4 max-w-xs">
              {t("footer.slogan")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-5">
              {t("footer.quickLinks")}
            </h2>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.key}>
                  <a
                    href={homeHref + link.href}
                    onClick={e => handleNavClick(e, link.href)}
                    className="text-sm text-white/60 hover:text-[#60A5FA] transition-colors duration-200"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={aboutPath(lang)}
                  className="text-sm text-white/60 hover:text-[#60A5FA] transition-colors duration-200"
                >
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a
                  href={coveragePath(lang)}
                  className="text-sm text-white/60 hover:text-[#60A5FA] transition-colors duration-200"
                >
                  {t("nav.coverage")}
                </a>
              </li>
              <li>
                <a
                  href={brandsPath(lang)}
                  className="text-sm text-white/60 hover:text-[#60A5FA] transition-colors duration-200"
                >
                  {t("nav.brands")}
                </a>
              </li>
              <li>
                <a
                  href={insightsPath(lang)}
                  className="text-sm text-white/60 hover:text-[#60A5FA] transition-colors duration-200"
                >
                  {t("nav.insights")}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-5">
              {t("footer.services")}
            </h2>
            <ul className="space-y-3">
              {SERVICE_SLUGS.map(slug => (
                <li key={slug}>
                  <a
                    href={servicePath(slug, lang)}
                    className="text-sm text-white/60 hover:text-[#60A5FA] transition-colors duration-200"
                  >
                    {SERVICES[slug].content[lang].name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-5">
              {t("footer.contactInfo")}
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:sales@thoughtshouse.com"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-[#60A5FA] transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  sales@thoughtshouse.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+966541022995"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-[#60A5FA] transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  +966 54 102 2995
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/SECK4KzVH42TiTxD6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-[#60A5FA] transition-colors"
                >
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  {t("contact.address")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} Thoughts House.{" "}
            {t("footer.rights")}
          </p>
          <div className="flex items-center gap-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-[#2563EB]/60"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
