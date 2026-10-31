import Link from 'next/link';
import { translations, type Lang } from '../../i18n';
import { CITY_SLUGS, CITY_NAMES, CITY_UNIVERSITY_INDICES, CITY_BUDGET_ID } from '../../content/villes/registry';
import { buildCityDetailCopy, PER_MONTH_LABEL, COST_OF_LIVING_HEADING, LIVING_MONTHLY_LABEL } from '../../content/villes/copy';
import { UNIVERSITY_SLUGS } from '../../content/universites/registry';
import { CITY_COSTS } from '../../content/budget/data';
import { buildBreadcrumb } from '../../seo/breadcrumb';
import { buildPlaceSchema } from '../../seo/schema/place';
import { buildFaqPageSchema } from '../../seo/schema/faqPage';
import { buildCityFaq } from '../../content/villes/faq';
import { getDeepCityContent } from '../../content/villes/deep';
import ContentPageShell from '../ContentPageShell';
import PageHero from '../../components/PageHero';
import { CITY_IMAGES } from '../../content/images/registry';
import { UNIVERSITES_SECTION_LABEL } from '../universites/labels';
import { VILLES_SECTION_LABEL, basePathFor } from './labels';

const FAQ_HEADING: Record<Lang, string> = {
  fr: 'Questions fréquentes',
  en: 'Frequently asked questions',
  ar: 'أسئلة شائعة',
  ru: 'Часто задаваемые вопросы',
};

export default function VilleDetailPage({ lang, index }: { lang: Lang; index: number }) {
  const slug = CITY_SLUGS[index];
  const city = { name: CITY_NAMES[slug][lang] };
  const budgetId = CITY_BUDGET_ID[slug];
  const cost = CITY_COSTS[budgetId];
  const universityIndices = CITY_UNIVERSITY_INDICES[slug];

  const copy = buildCityDetailCopy(lang, { name: city.name, budgetId, universityCount: universityIndices.length });
  const schema = buildPlaceSchema({ name: city.name });
  const faq = buildCityFaq(lang, { name: city.name, budgetId, universityCount: universityIndices.length });
  const faqSchema = buildFaqPageSchema(faq);
  const breadcrumb = buildBreadcrumb(`/villes/${slug}`, lang, {
    villes: VILLES_SECTION_LABEL[lang],
    [slug]: city.name,
  });
  const basePath = basePathFor(lang);
  const t = translations[lang];
  const deep = getDeepCityContent(slug, lang);

  const universities = universityIndices.map((i) => ({ ...t.universities.items[i], slug: UNIVERSITY_SLUGS[i] }));

  return (
    <ContentPageShell lang={lang} breadcrumb={breadcrumb}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <h1 className="t-display font-bold text-[clamp(1.8rem,6vw,3rem)] tracking-[-0.04em] leading-[1.1] mb-3">{city.name}</h1>
      <p className="text-[0.95rem] leading-[1.65] max-w-2xl opacity-85 mb-6">{copy.intro}</p>

      <PageHero image={CITY_IMAGES[slug]} lang={lang} variant="teal" />

      {deep && <p className="text-[0.95rem] leading-[1.7] max-w-2xl opacity-85 mb-9">{deep.intro}</p>}

      <h2 className="t-display font-bold text-xl tracking-[-0.03em] mb-3">{UNIVERSITES_SECTION_LABEL[lang]}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-9">
        {universities.map((u) => (
          <Link key={u.slug} href={`${basePath}/universites/${u.slug}`} className="t-card rounded-[16px] p-4 block hover:opacity-80 transition-opacity">
            <div className="font-bold text-sm">{u.name}</div>
            <div className="text-xs opacity-60 mt-0.5">{u.rank}</div>
          </Link>
        ))}
      </div>

      <h2 className="t-display font-bold text-xl tracking-[-0.03em] mb-3">{COST_OF_LIVING_HEADING[lang]}</h2>
      <div className="t-card rounded-[18px] overflow-auto max-w-xl">
        <table className="w-full border-collapse text-[0.85rem]">
          <tbody>
            <tr>
              <th scope="row" className="p-3 text-start border-b t-line-soft">{t.simulator.housingDorm}</th>
              <td className="p-3 font-bold border-b t-line-soft">{cost.dorm} € {PER_MONTH_LABEL[lang]}</td>
            </tr>
            <tr>
              <th scope="row" className="p-3 text-start border-b t-line-soft">{t.simulator.housingShared}</th>
              <td className="p-3 font-bold border-b t-line-soft">{cost.shared} € {PER_MONTH_LABEL[lang]}</td>
            </tr>
            <tr>
              <th scope="row" className="p-3 text-start">{LIVING_MONTHLY_LABEL[lang]}</th>
              <td className="p-3 font-bold">{cost.living} € {PER_MONTH_LABEL[lang]}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-[0.72rem] opacity-50 max-w-xl mt-2">{t.simulator.disclaimer}</p>

      {deep?.sections.map((section) => (
        <section key={section.heading} className="max-w-2xl">
          <h2 className="t-display font-bold text-xl tracking-[-0.03em] mt-9 mb-3">{section.heading}</h2>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="text-[0.95rem] leading-[1.7] opacity-85 mb-3">
              {paragraph}
            </p>
          ))}
          {section.bullets && (
            <ul className="flex flex-col gap-2 mt-3">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="text-[0.92rem] leading-[1.6] opacity-85 ps-4 relative before:content-['—'] before:absolute before:start-0 before:opacity-50">
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <h2 className="t-display font-bold text-xl tracking-[-0.03em] mt-9 mb-3">{FAQ_HEADING[lang]}</h2>
      <div className="flex flex-col gap-2 max-w-2xl">
        {faq.map((faqItem) => (
          <div key={faqItem.question} className="t-card rounded-[18px] p-6">
            <h3 className="font-bold text-base mb-2">{faqItem.question}</h3>
            <p className="text-[0.9rem] leading-[1.65] opacity-80">{faqItem.answer}</p>
          </div>
        ))}
      </div>
    </ContentPageShell>
  );
}
