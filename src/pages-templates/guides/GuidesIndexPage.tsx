import Link from 'next/link';
import type { Lang } from '../../i18n';
import { GUIDE_SLUGS, GUIDE_IMAGE_KEYS } from '../../content/guides/registry';
import { buildGuidesIndexCopy, buildPracticalGuideCopy, GUIDES_COUNT } from '../../content/guides/copy';
import { buildBreadcrumb } from '../../seo/breadcrumb';
import ContentPageShell from '../ContentPageShell';
import PageHero from '../../components/PageHero';
import CardImage from '../../components/CardImage';
import { SECTION_IMAGES } from '../../content/images/registry';
import { GUIDES_SECTION_LABEL, basePathFor } from './labels';

export default function GuidesIndexPage({ lang }: { lang: Lang }) {
  const copy = buildGuidesIndexCopy(lang);
  const breadcrumb = buildBreadcrumb('/guides', lang, { guides: GUIDES_SECTION_LABEL[lang] });
  const basePath = basePathFor(lang);

  const guides = Array.from({ length: GUIDES_COUNT }, (_, index) => ({
    slug: GUIDE_SLUGS[index],
    guide: buildPracticalGuideCopy(lang, index),
  }));

  return (
    <ContentPageShell lang={lang} breadcrumb={breadcrumb}>
      <h1 className="t-display font-bold text-[clamp(1.8rem,6vw,3rem)] tracking-[-0.04em] leading-[1.1] mb-3">
        {GUIDES_SECTION_LABEL[lang]}
      </h1>
      <p className="text-[0.95rem] leading-[1.65] max-w-2xl opacity-85 mb-6">{copy.intro}</p>

      <PageHero image={SECTION_IMAGES.guides} lang={lang} variant="teal" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {guides.map(({ slug, guide }) => (
          <Link
            key={slug}
            href={`${basePath}/guides/${slug}`}
            className="t-card rounded-[18px] overflow-hidden block hover:opacity-80 transition-opacity"
          >
            <CardImage image={SECTION_IMAGES[GUIDE_IMAGE_KEYS[slug]]} lang={lang} />
            <div className="p-5">
              <div className="font-bold text-base">{guide.h1}</div>
              <p className="text-[0.82rem] opacity-70 mt-1.5 leading-[1.5]">{guide.summary}</p>
              <span className="text-[0.78rem] font-bold t-green-text mt-3 inline-block">{copy.readMore}</span>
            </div>
          </Link>
        ))}
      </div>
    </ContentPageShell>
  );
}
