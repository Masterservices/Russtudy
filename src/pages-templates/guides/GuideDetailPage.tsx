import Link from 'next/link';
import type { Lang } from '../../i18n';
import { GUIDE_SLUGS, GUIDE_IMAGE_KEYS } from '../../content/guides/registry';
import { buildPracticalGuideCopy, guideUpdatedAt, GUIDES_COUNT } from '../../content/guides/copy';
import { buildArticleSchema } from '../../seo/schema/article';
import { buildFaqPageSchema } from '../../seo/schema/faqPage';
import { buildBreadcrumb } from '../../seo/breadcrumb';
import { SITE } from '../../config/site';
import ContentPageShell from '../ContentPageShell';
import PageHero from '../../components/PageHero';
import { SECTION_IMAGES } from '../../content/images/registry';
import { GUIDES_SECTION_LABEL, basePathFor } from './labels';

const FAQ_HEADING: Record<Lang, string> = {
  fr: 'Questions fréquentes',
  en: 'Frequently asked questions',
  ar: 'أسئلة شائعة',
  ru: 'Часто задаваемые вопросы',
};

const OTHER_GUIDES_HEADING: Record<Lang, string> = {
  fr: 'Les autres guides',
  en: 'Other guides',
  ar: 'الأدلة الأخرى',
  ru: 'Другие гиды',
};

export default function GuideDetailPage({ lang, index }: { lang: Lang; index: number }) {
  const slug = GUIDE_SLUGS[index];
  const guide = buildPracticalGuideCopy(lang, index);
  const updatedAt = guideUpdatedAt(index);
  const basePath = basePathFor(lang);
  const image = SECTION_IMAGES[GUIDE_IMAGE_KEYS[slug]];

  const schema = buildArticleSchema({
    slug: `guides/${slug}`,
    lang,
    title: guide.title,
    description: guide.description,
    h1: guide.h1,
    schemaType: 'Article',
    updatedAt,
    excerpt: guide.summary,
    publishedAt: updatedAt,
    author: SITE.name,
    tags: guide.keywords,
    ogImage: `${SITE.domain}${image.src}`,
  });
  const faqSchema = buildFaqPageSchema(guide.faq);

  const breadcrumb = buildBreadcrumb(`/guides/${slug}`, lang, {
    guides: GUIDES_SECTION_LABEL[lang],
    [slug]: guide.h1,
  });

  const others = Array.from({ length: GUIDES_COUNT }, (_, i) => i)
    .filter((i) => i !== index)
    .map((i) => ({ slug: GUIDE_SLUGS[i], guide: buildPracticalGuideCopy(lang, i) }));

  return (
    <ContentPageShell lang={lang} breadcrumb={breadcrumb}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <h1 className="t-display font-bold text-[clamp(1.8rem,6vw,3rem)] tracking-[-0.04em] leading-[1.1] mb-3">{guide.h1}</h1>
      <p className="text-[0.95rem] leading-[1.65] max-w-2xl opacity-85 mb-6">{guide.intro}</p>

      <PageHero image={image} lang={lang} variant="teal" />

      <div className="flex flex-col gap-8 max-w-2xl">
        {guide.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="t-display font-bold text-xl tracking-[-0.03em] mb-3">{section.heading}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="text-[0.92rem] leading-[1.7] opacity-85 mb-3">{paragraph}</p>
            ))}
            {section.bullets && (
              <ul className="space-y-1.5 text-[0.9rem] mt-1">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="t-card rounded-[12px] px-4 py-2.5 leading-[1.55]">{bullet}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <h2 className="t-display font-bold text-xl tracking-[-0.03em] mt-9 mb-3">{FAQ_HEADING[lang]}</h2>
      <div className="flex flex-col gap-2 max-w-2xl mb-9">
        {guide.faq.map((faqItem) => (
          <div key={faqItem.question} className="t-card rounded-[18px] p-6">
            <h3 className="font-bold text-base mb-2">{faqItem.question}</h3>
            <p className="text-[0.9rem] leading-[1.65] opacity-80">{faqItem.answer}</p>
          </div>
        ))}
      </div>

      <h2 className="t-display font-bold text-xl tracking-[-0.03em] mb-3">{OTHER_GUIDES_HEADING[lang]}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {others.map((o) => (
          <Link
            key={o.slug}
            href={`${basePath}/guides/${o.slug}`}
            className="t-card rounded-[16px] p-4 block hover:opacity-80 transition-opacity"
          >
            <div className="font-bold text-sm">{o.guide.h1}</div>
            <div className="text-xs opacity-60 mt-0.5">{o.guide.summary}</div>
          </Link>
        ))}
      </div>
    </ContentPageShell>
  );
}
