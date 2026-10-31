import Link from 'next/link';
import { translations, type Lang } from '../../i18n';
import { UNIVERSITY_SLUGS } from '../../content/universites/registry';
import { buildUniversityIndexCopy } from '../../content/universites/copy';
import { buildBreadcrumb } from '../../seo/breadcrumb';
import ContentPageShell from '../ContentPageShell';
import PageHero from '../../components/PageHero';
import CardImage from '../../components/CardImage';
import { SECTION_IMAGES, UNIVERSITY_IMAGES } from '../../content/images/registry';
import { UNIVERSITES_SECTION_LABEL, basePathFor } from './labels';
import { UNIVERSITES_GUIDANCE } from '../../content/index-pages/guidance';

export default function UniversitiesIndexPage({ lang }: { lang: Lang }) {
  const items = translations[lang].universities.items.map((u, i) => ({ ...u, slug: UNIVERSITY_SLUGS[i] }));
  const copy = buildUniversityIndexCopy(lang);
  const breadcrumb = buildBreadcrumb('/universites', lang, { universites: UNIVERSITES_SECTION_LABEL[lang] });
  const basePath = basePathFor(lang);

  const GUIDE = UNIVERSITES_GUIDANCE[lang];

  return (
    <ContentPageShell lang={lang} breadcrumb={breadcrumb}>
      <h1 className="t-display font-bold text-[clamp(1.8rem,6vw,3rem)] tracking-[-0.04em] leading-[1.1] mb-3">
        {UNIVERSITES_SECTION_LABEL[lang]}
      </h1>
      <p className="text-[0.95rem] leading-[1.65] max-w-2xl opacity-85 mb-6">{copy.intro}</p>

      <PageHero image={SECTION_IMAGES.universites} lang={lang} variant="sky" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {items.map((u) => (
          <Link key={u.slug} href={`${basePath}/universites/${u.slug}`} className="t-card rounded-[18px] overflow-hidden block hover:opacity-80 transition-opacity">
            <CardImage image={UNIVERSITY_IMAGES[u.slug]} lang={lang} />
            <div className="p-5">
              <span className="bg-black text-white rounded-full px-2 py-0.5 text-[0.62rem] font-bold tracking-wide">{u.rank}</span>
              <div className="font-bold text-base mt-2">{u.name}</div>
              <div className="text-xs opacity-60 mt-0.5">{u.city}</div>
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
