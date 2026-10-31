import Link from 'next/link';
import type { Lang } from '../../i18n';
import { FILIERE_SLUGS } from '../../content/filieres/registry';
import { getFiliereFacts } from '../../content/filieres/facts';
import { buildFiliereIndexCopy } from '../../content/filieres/copy';
import { buildBreadcrumb } from '../../seo/breadcrumb';
import ContentPageShell from '../ContentPageShell';
import PageHero from '../../components/PageHero';
import CardImage from '../../components/CardImage';
import { FILIERE_IMAGES, SECTION_IMAGES } from '../../content/images/registry';
import { FILIERES_SECTION_LABEL, basePathFor } from './labels';
import { FILIERES_GUIDANCE } from '../../content/index-pages/guidance';

export default function FilieresIndexPage({ lang }: { lang: Lang }) {
  const items = FILIERE_SLUGS.map((slug) => ({ ...getFiliereFacts(lang, slug), slug }));
  const copy = buildFiliereIndexCopy(lang);
  const breadcrumb = buildBreadcrumb('/filieres', lang, { filieres: FILIERES_SECTION_LABEL[lang] });
  const basePath = basePathFor(lang);

  const GUIDE = FILIERES_GUIDANCE[lang];

  return (
    <ContentPageShell lang={lang} breadcrumb={breadcrumb}>
      <h1 className="t-display font-bold text-[clamp(1.8rem,6vw,3rem)] tracking-[-0.04em] leading-[1.1] mb-3">
        {FILIERES_SECTION_LABEL[lang]}
      </h1>
      <p className="text-[0.95rem] leading-[1.65] max-w-2xl opacity-85 mb-6">{copy.intro}</p>

      <PageHero image={SECTION_IMAGES.filieres} lang={lang} variant="violet" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {items.map((p) => (
          <Link key={p.slug} href={`${basePath}/filieres/${p.slug}`} className="t-card rounded-[18px] overflow-hidden block hover:opacity-80 transition-opacity">
            <CardImage image={FILIERE_IMAGES[p.slug]} lang={lang} />
            <div className="p-5">
              <span className="bg-black text-white rounded-full px-2 py-0.5 text-[0.62rem] font-bold tracking-wide">{p.tag}</span>
              <div className="font-bold text-base mt-2">{p.name}</div>
              <div className="text-xs opacity-60 mt-0.5">{p.duration} · {p.price}</div>
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
