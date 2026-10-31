import Link from 'next/link';
import type { Lang } from '../../i18n';
import {
  COMPARISON_SLUGS,
  COMPARISON_IMAGE_KEYS,
  buildCountryComparisonCopy,
  comparisonUpdatedAt,
  COMPARISONS_COUNT,
} from '../../content/comparatif/countries';
import { buildArticleSchema } from '../../seo/schema/article';
import { buildFaqPageSchema } from '../../seo/schema/faqPage';
import { buildBreadcrumb } from '../../seo/breadcrumb';
import { SITE } from '../../config/site';
import ContentPageShell from '../ContentPageShell';
import PageHero from '../../components/PageHero';
import { SECTION_IMAGES } from '../../content/images/registry';
import { COMPARATIF_SECTION_LABEL } from './labels';
import { basePathFor } from '../basePath';

const FAQ_HEADING: Record<Lang, string> = {
  fr: 'Questions fréquentes',
  en: 'Frequently asked questions',
  ar: 'أسئلة شائعة',
  ru: 'Часто задаваемые вопросы',
};

const OTHERS_HEADING: Record<Lang, string> = {
  fr: 'Les autres comparatifs',
  en: 'Other comparisons',
  ar: 'المقارنات الأخرى',
  ru: 'Другие сравнения',
};

export default function ComparatifDetailPage({ lang, index }: { lang: Lang; index: number }) {
  const slug = COMPARISON_SLUGS[index];
  const copy = buildCountryComparisonCopy(lang, index);
  const updatedAt = comparisonUpdatedAt(index);
  const image = SECTION_IMAGES[COMPARISON_IMAGE_KEYS[slug]];
  const basePath = basePathFor(lang);

  const schema = buildArticleSchema({
    slug: `comparatif/${slug}`,
    lang,
    title: copy.title,
    description: copy.description,
    h1: copy.h1,
    schemaType: 'Article',
    updatedAt,
    excerpt: copy.summary,
    publishedAt: updatedAt,
    author: SITE.name,
    tags: copy.keywords,
    ogImage: `${SITE.domain}${image.src}`,
  });
  const faqSchema = buildFaqPageSchema(copy.faq);

  const breadcrumb = buildBreadcrumb(`/comparatif/${slug}`, lang, {
    comparatif: COMPARATIF_SECTION_LABEL[lang],
    [slug]: copy.h1,
  });

  const others = Array.from({ length: COMPARISONS_COUNT }, (_, i) => i)
    .filter((i) => i !== index)
    .map((i) => ({ slug: COMPARISON_SLUGS[i], copy: buildCountryComparisonCopy(lang, i) }));

  return (
    <ContentPageShell lang={lang} breadcrumb={breadcrumb}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <h1 className="t-display font-bold text-[clamp(1.8rem,6vw,3rem)] tracking-[-0.04em] leading-[1.1] mb-3">{copy.h1}</h1>
      <p className="text-[0.95rem] leading-[1.65] max-w-2xl opacity-85 mb-6">{copy.intro}</p>

      <PageHero image={image} lang={lang} variant="sky" />

      <h2 className="t-display font-bold text-xl tracking-[-0.03em] mb-3">{copy.tableTitle}</h2>
      <div className="t-card rounded-[18px] overflow-auto max-w-3xl mb-2">
        <table className="w-full border-collapse text-[0.82rem] min-w-[620px]">
          <thead>
            <tr>
              <th scope="col" className="p-3 text-start text-[0.72rem] uppercase tracking-wide opacity-55 border-b t-line-soft">
                {copy.columns.criterion}
              </th>
              <th scope="col" className="p-3 text-start text-[0.72rem] uppercase tracking-wide t-c5 border-b t-line-soft">
                {copy.columns.russia}
              </th>
              <th scope="col" className="p-3 text-start text-[0.72rem] uppercase tracking-wide opacity-55 border-b t-line-soft">
                {copy.columns.other}
              </th>
            </tr>
          </thead>
          <tbody>
            {copy.rows.map((row) => (
              <tr key={row.criterion}>
                <th scope="row" className="p-3 text-start font-bold border-b t-line-soft">{row.criterion}</th>
                <td className="p-3 opacity-85 border-b t-line-soft">{row.russia}</td>
                <td className="p-3 opacity-85 border-b t-line-soft">{row.other}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[0.72rem] opacity-55 max-w-3xl mb-9">{copy.disclaimer}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-3xl mb-9">
        <div className="t-card rounded-[18px] p-6">
          <h2 className="t-display font-bold text-lg tracking-[-0.02em] mb-3">{copy.otherWinsTitle}</h2>
          <ul className="space-y-1.5 text-[0.88rem]">
            {copy.otherWins.map((item) => (
              <li key={item} className="leading-[1.55] opacity-80">• {item}</li>
            ))}
          </ul>
        </div>
        <div className="t-card rounded-[18px] p-6" style={{ borderStyle: 'dashed', borderColor: 'var(--accent, #A855F7)' }}>
          <h2 className="t-display font-bold text-lg tracking-[-0.02em] mb-3">{copy.russiaWinsTitle}</h2>
          <ul className="space-y-1.5 text-[0.88rem]">
            {copy.russiaWins.map((item) => (
              <li key={item} className="leading-[1.55] opacity-80">✓ {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="t-card-dark rounded-[18px] p-6 max-w-2xl mb-9">
        <h2 className="t-display font-bold text-lg tracking-[-0.02em] mb-2">{copy.verdictTitle}</h2>
        <p className="text-[0.9rem] leading-[1.65] opacity-85">{copy.verdict}</p>
      </div>

      <h2 className="t-display font-bold text-xl tracking-[-0.03em] mb-3">{FAQ_HEADING[lang]}</h2>
      <div className="flex flex-col gap-2 max-w-2xl mb-9">
        {copy.faq.map((faqItem) => (
          <div key={faqItem.question} className="t-card rounded-[18px] p-6">
            <h3 className="font-bold text-base mb-2">{faqItem.question}</h3>
            <p className="text-[0.9rem] leading-[1.65] opacity-80">{faqItem.answer}</p>
          </div>
        ))}
      </div>

      <h2 className="t-display font-bold text-xl tracking-[-0.03em] mb-3">{OTHERS_HEADING[lang]}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {others.map((o) => (
          <Link
            key={o.slug}
            href={`${basePath}/comparatif/${o.slug}`}
            className="t-card rounded-[16px] p-4 block hover:opacity-80 transition-opacity"
          >
            <div className="font-bold text-sm">{o.copy.h1}</div>
            <div className="text-xs opacity-60 mt-0.5">{o.copy.summary}</div>
          </Link>
        ))}
      </div>
    </ContentPageShell>
  );
}
