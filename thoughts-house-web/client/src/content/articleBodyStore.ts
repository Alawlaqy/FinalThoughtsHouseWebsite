/*
 * Holds article bodies once loaded. Keeps articleBodies.ts out of the main bundle:
 * the browser loads it on demand (main.tsx) and the prerenderer provides it up front.
 */
import type { Language } from "@/seo";
import type { ArticleSlug } from "./articles";
import type { ArticleBody } from "./articleBodies";

let bodies: Record<ArticleSlug, Record<Language, ArticleBody>> | undefined;

export function provideArticleBodies(
  b: Record<ArticleSlug, Record<Language, ArticleBody>>
) {
  bodies = b;
}

export function getArticleBody(
  slug: ArticleSlug,
  lang: Language
): ArticleBody | undefined {
  return bodies?.[slug][lang];
}
