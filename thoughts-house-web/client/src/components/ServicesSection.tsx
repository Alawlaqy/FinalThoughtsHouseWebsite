/*
 * Design: Precision Shield — Corporate-Minimal
 * Services: Interactive tabs with scroll-reveal, blue accent on active tab
 * Each tab shows image + description + feature list
 */
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Network,
  Cloud,
  CheckCircle2,
} from "lucide-react";

const IMAGES = {
  cybersecurity: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032266291/6GEufHXYFFmAikUkdcoDrJ/cybersecurity-Tk6v5uPJnToKTo9TXqDmCD.webp",
  network: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032266291/6GEufHXYFFmAikUkdcoDrJ/network-infra-i9Hm8tpzm5hNWDuLfBfjTt.webp",
  cloud: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032266291/6GEufHXYFFmAikUkdcoDrJ/cloud-solutions-8rEytQ7iMWksfRUJYD9d6y.webp",
};

type TabKey = "cybersecurity" | "network" | "cloud";

interface TabData {
  key: TabKey;
  icon: typeof ShieldCheck;
  titleKey: string;
  descKey: string;
  features: string[];
  image: string;
}

const tabs: TabData[] = [
  {
    key: "cybersecurity",
    icon: ShieldCheck,
    titleKey: "services.cybersecurity",
    descKey: "services.cybersecurity.desc",
    features: [
      "services.cybersecurity.endpoint",
      "services.cybersecurity.firewall",
      "services.cybersecurity.monitoring",
      "services.cybersecurity.threat",
      "services.cybersecurity.assessment",
    ],
    image: IMAGES.cybersecurity,
  },
  {
    key: "network",
    icon: Network,
    titleKey: "services.network",
    descKey: "services.network.desc",
    features: [
      "services.network.routing",
      "services.network.switching",
      "services.network.wireless",
      "services.network.design",
      "services.network.optimization",
    ],
    image: IMAGES.network,
  },
  {
    key: "cloud",
    icon: Cloud,
    titleKey: "services.cloud",
    descKey: "services.cloud.desc",
    features: [
      "services.cloud.datacenter",
      "services.cloud.disaster",
      "services.cloud.server",
      "services.cloud.backup",
      "services.cloud.migration",
    ],
    image: IMAGES.cloud,
  },
];

export default function ServicesSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabKey>("cybersecurity");
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="services" className="py-24 bg-white geometric-pattern" ref={sectionRef}>
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
              {t("services.title")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] mb-4">
            {t("services.title")}
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Tab Buttons */}
        <div
          role="tablist"
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                id={`service-tab-${tab.key}`}
                role="tab"
                aria-selected={isActive}
                aria-controls={`service-${tab.key}`}
                onClick={() => setActiveTab(tab.key)}
                className={`group flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-[#2563EB] text-white shadow-lg shadow-[#2563EB]/25"
                    : "bg-[#F8FAFC] text-[#64748B] hover:bg-[#2563EB]/10 hover:text-[#2563EB]"
                }`}
              >
                <Icon className={`w-5 h-5 transition-colors ${isActive ? "text-white" : "text-[#94A3B8] group-hover:text-[#2563EB]"}`} />
                {t(tab.titleKey)}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* All panels are rendered so every service is in the HTML for search engines;
              inactive ones are hidden until their tab is selected. */}
          {tabs.map((tab) => {
            const isActive = tab.key === activeTab;
            const Icon = tab.icon;
            return (
              <motion.div
                key={tab.key}
                id={`service-${tab.key}`}
                role="tabpanel"
                aria-labelledby={`service-tab-${tab.key}`}
                hidden={!isActive}
                initial={false}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-2 gap-10 items-center"
              >
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#1E293B]/10 group">
                  <img
                    src={tab.image}
                    alt={t(tab.titleKey)}
                    width={1920}
                    height={1072}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg">
                      <Icon className="w-5 h-5 text-[#2563EB]" />
                      <span className="font-bold text-[#1E293B]">{t(tab.titleKey)}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1E293B] mb-4">
                    {t(tab.titleKey)}
                  </h3>
                  <p className="text-[#64748B] leading-relaxed mb-8 text-base">
                    {t(tab.descKey)}
                  </p>
                  <ul className="space-y-3">
                    {tab.features.map((featureKey) => (
                      <li
                        key={featureKey}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F8FAFC] transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2563EB]/20 transition-colors">
                          <CheckCircle2 className="w-4 h-4 text-[#2563EB]" aria-hidden="true" />
                        </div>
                        <span className="font-medium text-[#334155]">{t(featureKey)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
