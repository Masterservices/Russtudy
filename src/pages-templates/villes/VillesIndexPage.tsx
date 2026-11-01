import Link from 'next/link';
import { translations, type Lang } from '../../i18n';
import { CITY_SLUGS, CITY_UNIVERSITY_INDICES } from '../../content/villes/registry';
import { buildCityIndexCopy, buildUniversityCountLabel } from '../../content/villes/copy';
import { buildBreadcrumb } from '../../seo/breadcrumb';
import ContentPageShell from '../ContentPageShell';
import { VILLES_SECTION_LABEL, basePathFor } from './labels';

export default function VillesIndexPage({ lang }: { lang: Lang }) {
  const cities = translations[lang].simulator.cities.map((c, i) => ({ ...c, slug: CITY_SLUGS[i] }));
  const copy = buildCityIndexCopy(lang);
  const breadcrumb = buildBreadcrumb('/villes', lang, { villes: VILLES_SECTION_LABEL[lang] });
  const basePath = basePathFor(lang);

  return (
    <ContentPageShell lang={lang} breadcrumb={breadcrumb}>
      <h1 className="t-display font-bold text-[clamp(1.8rem,6vw,3rem)] tracking-[-0.04em] leading-[1.1] mb-3">
        {VILLES_SECTION_LABEL[lang]}
      </h1>
      <p className="text-[0.95rem] leading-[1.65] max-w-2xl opacity-85 mb-6">{copy.intro}</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {cities.map((c) => (
          <Link key={c.slug} href={`${basePath}/villes/${c.slug}`} className="t-card rounded-[18px] p-5 block hover:opacity-80 transition-opacity">
            <div className="font-bold text-base">{c.name}</div>
            <div className="text-xs opacity-60 mt-0.5">{buildUniversityCountLabel(lang, CITY_UNIVERSITY_INDICES[c.slug].length)}</div>
          </Link>
        ))}
      </div>
    </ContentPageShell>
  );
}
