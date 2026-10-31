import Link from 'next/link';
import type { Lang } from '../../i18n';
import { CITY_SLUGS, CITY_NAMES, CITY_UNIVERSITY_INDICES } from '../../content/villes/registry';
import { buildCityIndexCopy, buildUniversityCountLabel } from '../../content/villes/copy';
import { buildBreadcrumb } from '../../seo/breadcrumb';
import ContentPageShell from '../ContentPageShell';
import PageHero from '../../components/PageHero';
import CardImage from '../../components/CardImage';
import { CITY_IMAGES, SECTION_IMAGES } from '../../content/images/registry';
import { VILLES_SECTION_LABEL, basePathFor } from './labels';
import { VILLES_GUIDANCE } from '../../content/index-pages/guidance';

export default function VillesIndexPage({ lang }: { lang: Lang }) {
  const cities = CITY_SLUGS.map((slug) => ({ slug, name: CITY_NAMES[slug][lang] }));
  const copy = buildCityIndexCopy(lang);
  const breadcrumb = buildBreadcrumb('/villes', lang, { villes: VILLES_SECTION_LABEL[lang] });
  const basePath = basePathFor(lang);

  const GUIDE = VILLES_GUIDANCE[lang];

  return (
    <ContentPageShell lang={lang} breadcrumb={breadcrumb}>
      <h1 className="t-display font-bold text-[clamp(1.8rem,6vw,3rem)] tracking-[-0.04em] leading-[1.1] mb-3">
        {VILLES_SECTION_LABEL[lang]}
      </h1>
      <p className="text-[0.95rem] leading-[1.65] max-w-2xl opacity-85 mb-6">{copy.intro}</p>

      <PageHero image={SECTION_IMAGES.villes} lang={lang} variant="teal" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {cities.map((c) => (
          <Link key={c.slug} href={`${basePath}/villes/${c.slug}`} className="t-card rounded-[18px] overflow-hidden block hover:opacity-80 transition-opacity">
            <CardImage image={CITY_IMAGES[c.slug]} lang={lang} heightClass="h-36" />
            <div className="p-5">
              <div className="font-bold text-base">{c.name}</div>
              <div className="text-xs opacity-60 mt-0.5">{buildUniversityCountLabel(lang, CITY_UNIVERSITY_INDICES[c.slug].length)}</div>
            </div>
          </Link>
        ))}
      </div>
      {GUIDE.map((section) => (
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

    </ContentPageShell>
  );
}
