import Link from 'next/link';
import type { Lang } from '../../i18n';
import { buildBoursesCopy } from '../../content/bourses/copy';
import { buildFaqPageSchema } from '../../seo/schema/faqPage';
import { buildBreadcrumb } from '../../seo/breadcrumb';
import ContentPageShell from '../ContentPageShell';
import PageHero from '../../components/PageHero';
import { SECTION_IMAGES } from '../../content/images/registry';
import { BOURSES_SECTION_LABEL, basePathFor } from './labels';

const FAQ_HEADING: Record<Lang, string> = {
  fr: 'Questions fréquentes',
  en: 'Frequently asked questions',
  ar: 'أسئلة شائعة',
  ru: 'Часто задаваемые вопросы',
};

export default function BoursesPage({ lang }: { lang: Lang }) {
  const copy = buildBoursesCopy(lang);
  const faqSchema = buildFaqPageSchema(copy.faq);
  const breadcrumb = buildBreadcrumb('/bourses', lang, { bourses: BOURSES_SECTION_LABEL[lang] });
  const basePath = basePathFor(lang);

  return (
    <ContentPageShell lang={lang} breadcrumb={breadcrumb}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <h1 className="t-display font-bold text-[clamp(1.8rem,6vw,3rem)] tracking-[-0.04em] leading-[1.1] mb-3">
        {copy.h1}
      </h1>
      <p className="text-[0.95rem] leading-[1.65] max-w-2xl opacity-85 mb-6">{copy.intro}</p>

      <PageHero image={SECTION_IMAGES.bourses} lang={lang} variant="gold" />

      <h2 className="t-display font-bold text-xl tracking-[-0.03em] mb-3">{copy.tableTitle}</h2>
      <p className="text-[0.9rem] leading-[1.65] max-w-2xl opacity-80 mb-4">{copy.tableIntro}</p>

      <div className="t-card rounded-[18px] overflow-auto max-w-3xl mb-9">
        <table className="w-full border-collapse text-[0.8rem] min-w-[640px]">
          <thead>
            <tr>
              <th scope="col" className="p-3 text-start text-[0.72rem] uppercase tracking-wide opacity-55 border-b t-line-soft">
                {copy.columns.route}
              </th>
              <th scope="col" className="p-3 text-start text-[0.72rem] uppercase tracking-wide opacity-55 border-b t-line-soft">
                {copy.columns.awardedBy}
              </th>
              <th scope="col" className="p-3 text-start text-[0.72rem] uppercase tracking-wide opacity-55 border-b t-line-soft">
                {copy.columns.tuition}
              </th>
              <th scope="col" className="p-3 text-start text-[0.72rem] uppercase tracking-wide opacity-55 border-b t-line-soft">
                {copy.columns.housing}
              </th>
              <th scope="col" className="p-3 text-start text-[0.72rem] uppercase tracking-wide opacity-55 border-b t-line-soft">
                {copy.columns.allowance}
              </th>
              <th scope="col" className="p-3 text-start text-[0.72rem] uppercase tracking-wide opacity-55 border-b t-line-soft">
                {copy.columns.selection}
              </th>
            </tr>
          </thead>
          <tbody>
            {copy.routes.map((route) => (
              <tr key={route.name}>
                <th scope="row" className="p-3 text-start font-bold border-b t-line-soft">{route.name}</th>
                <td className="p-3 opacity-80 border-b t-line-soft">{route.awardedBy}</td>
                <td className="p-3 opacity-80 border-b t-line-soft">{route.tuition}</td>
                <td className="p-3 opacity-80 border-b t-line-soft">{route.housing}</td>
                <td className="p-3 opacity-80 border-b t-line-soft">{route.allowance}</td>
                <td className="p-3 opacity-80 border-b t-line-soft">{route.selection}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-3xl mb-9">
        <div className="t-card rounded-[18px] p-6">
          <h2 className="t-display font-bold text-lg tracking-[-0.02em] mb-3">{copy.coveredTitle}</h2>
          <ul className="space-y-1.5 text-[0.88rem]">
            {copy.covered.map((item) => (
              <li key={item} className="leading-[1.55] opacity-80">✓ {item}</li>
            ))}
          </ul>
        </div>
        <div className="t-card rounded-[18px] p-6" style={{ borderStyle: 'dashed', borderColor: 'var(--gold)' }}>
          <h2 className="t-display font-bold text-lg tracking-[-0.02em] mb-3">{copy.notCoveredTitle}</h2>
          <ul className="space-y-1.5 text-[0.88rem]">
            {copy.notCovered.map((item) => (
              <li key={item} className="leading-[1.55] opacity-80">• {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="t-display font-bold text-xl tracking-[-0.03em] mb-3">{copy.criteriaTitle}</h2>
      <ul className="space-y-1.5 text-[0.9rem] max-w-2xl mb-9">
        {copy.criteria.map((item) => (
          <li key={item} className="t-card rounded-[12px] px-4 py-2.5 leading-[1.55]">{item}</li>
        ))}
      </ul>

      <div className="t-card-dark rounded-[18px] p-6 max-w-2xl mb-9">
        <h2 className="t-display font-bold text-lg tracking-[-0.02em] mb-2">{copy.guideTitle}</h2>
        <p className="text-[0.9rem] leading-[1.65] opacity-85 mb-4">{copy.guideText}</p>
        <Link
          href={`${basePath}/blog/bourse-etudes-russie-tunisien`}
          className="t-btn-primary inline-block font-bold text-[0.85rem] px-6 py-3"
        >
          {copy.guideCta}
        </Link>
      </div>

      <h2 className="t-display font-bold text-xl tracking-[-0.03em] mb-3">{FAQ_HEADING[lang]}</h2>
      <div className="flex flex-col gap-2 max-w-2xl">
        {copy.faq.map((faqItem) => (
          <div key={faqItem.question} className="t-card rounded-[18px] p-6">
            <h3 className="font-bold text-base mb-2">{faqItem.question}</h3>
            <p className="text-[0.9rem] leading-[1.65] opacity-80">{faqItem.answer}</p>
          </div>
        ))}
      </div>
    </ContentPageShell>
  );
}
