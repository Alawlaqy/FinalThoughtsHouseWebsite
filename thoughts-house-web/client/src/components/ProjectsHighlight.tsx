/*
 * Design: Precision Shield — Corporate-Minimal
 * Short list of completed projects, linking to the Our Work page, About and coverage pages.
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { PROJECTS, PROJECTS_COPY } from "@/content/projects";
import type { ServiceSlug } from "@/content/services";
import { aboutPath, coveragePath, projectsPath } from "@/seo";

export default function ProjectsHighlight({
  service,
}: {
  /** Show projects for this service; with none given, show the first three on the list */
  service?: ServiceSlug;
}) {
  const { t, lang } = useLanguage();
  const c = PROJECTS_COPY[lang];
  const projects = service
    ? PROJECTS.filter(p => p.service === service)
    : PROJECTS.slice(0, 3);
  if (projects.length === 0) return null;

  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] mb-3">
          {c.listTitle}
        </h2>
        <p className="max-w-3xl text-[#64748B] leading-relaxed mb-8">
          {c.privacyNote}
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {projects.slice(0, 3).map(p => {
            const project = p.content[lang];
            return (
              <article
                key={project.title}
                className="p-6 bg-white rounded-2xl border border-gray-100"
              >
                <p className="text-sm font-semibold text-[#2563EB] mb-2">
                  {project.type}
                </p>
                <h3 className="text-lg font-bold text-[#1E293B]">
                  {project.title}
                </h3>
              </article>
            );
          })}
        </div>
        <p className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
          <a
            href={projectsPath(lang)}
            className="text-[#2563EB] hover:underline"
          >
            {lang === "ar" ? "جميع مشاريعنا" : "See all our work"}
          </a>
          <a href={aboutPath(lang)} className="text-[#2563EB] hover:underline">
            {t("nav.about")}
          </a>
          <a
            href={coveragePath(lang)}
            className="text-[#2563EB] hover:underline"
          >
            {t("nav.coverage")}
          </a>
        </p>
      </div>
    </section>
  );
}
