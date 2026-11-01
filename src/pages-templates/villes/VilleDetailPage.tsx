import Link from 'next/link';
import { translations, type Lang } from '../../i18n';
import { CITY_SLUGS, CITY_UNIVERSITY_INDICES, CITY_BUDGET_ID } from '../../content/villes/registry';
import { buildCityDetailCopy, PER_MONTH_LABEL, COST_OF_LIVING_HEADING, LIVING_MONTHLY_LABEL } from '../../content/villes/copy';
import { UNIVERSITY_SLUGS } from '../../content/universites/registry';
import { CITY_COSTS } from '../../content/budget/data';
import { buildBreadcrumb } from '../../seo/breadcrumb';
import ContentPageShell from '../ContentPageShell';
import { UNIVERSITES_SECTION_LABEL } from '../universites/labels';
import { VILLES_SECTION_LABEL, basePathFor } from './labels';

export default function VilleDetailPage({ lang, index }: { lang: Lang; index: number }) {
  const city = translations[lang].simulator.cities[index];
  const slug = CITY_SLUGS[index];
  const budgetId = CITY_BUDGET_ID[slug];
  const cost = CITY_COSTS[budgetId];
  const universityIndices = CITY_UNIVERSITY_INDICES[slug];

  const copy = buildCityDetailCopy(lang, { name: city.name, budgetId, universityCount: universityIndices.length });
  const breadcrumb = buildBreadcrumb(`/villes/${slug}`, lang, {
    villes: VILLES_SECTION_LABEL[lang],
    [slug]: city.name,
  });
  const basePath = basePathFor(lang);
  const t = translations[lang];

  const universities = universityIndices.map((i) => ({ ...t.universities.items[i], slug: UNIVERSITY_SLUGS[i] }));

  return (
    <ContentPageShell lang={lang} breadcrumb={breadcrumb}>
      <h1 className="t-display font-bold text-[clamp(1.8rem,6vw,3rem)] tracking-[-0.04em] leading-[1.1] mb-3">{city.name}</h1>
      <p className="text-[0.95rem] leading-[1.65] max-w-2xl opacity-85 mb-8">{copy.intro}</p>

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
    </ContentPageShell>
  );
}
