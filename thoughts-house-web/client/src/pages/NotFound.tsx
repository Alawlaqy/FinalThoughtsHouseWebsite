/*
 * 404 page — prerendered to dist/public/404.html, which the host serves for any unknown URL
 * in either language, so the copy is bilingual.
 */
import { SERVICES, SERVICE_SLUGS } from "@/content/services";
import { servicePath } from "@/seo";

const LOGO = "/images/logo-96.webp";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0F172A] text-white px-4 py-16">
      <div className="w-full max-w-xl text-center">
        <a href="/" className="inline-flex items-center gap-2 mb-10">
          <img
            src={LOGO}
            alt="Thoughts House Logo"
            width={48}
            height={48}
            className="w-12 h-12 object-contain brightness-0 invert"
          />
          <span className="text-lg font-bold">Thoughts House</span>
        </a>

        <p className="text-7xl font-extrabold text-[#60A5FA] mb-4">404</p>
        <h1 className="text-2xl sm:text-3xl font-bold mb-3">Page not found</h1>
        <p className="text-white/60 mb-2">
          The page you are looking for doesn't exist or has moved.
        </p>
        <p dir="rtl" lang="ar" className="text-white/60 mb-10">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <a
            href="/"
            className="px-6 py-3 bg-[#2563EB] font-semibold rounded-lg hover:bg-[#1D4ED8] transition-colors"
          >
            Back to home
          </a>
          <a
            href="/ar/"
            lang="ar"
            className="px-6 py-3 bg-white/10 border border-white/20 font-semibold rounded-lg hover:bg-white/20 transition-colors"
          >
            العودة للرئيسية
          </a>
        </div>

        <h2 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-4">
          Our services · خدماتنا
        </h2>
        <ul className="grid sm:grid-cols-3 gap-3 text-sm">
          {SERVICE_SLUGS.map(slug => (
            <li key={slug}>
              <a
                href={servicePath(slug, "en")}
                className="text-white/70 hover:text-[#60A5FA] transition-colors"
              >
                {SERVICES[slug].content.en.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
