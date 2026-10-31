import type { Lang } from '../i18n';
import { SITE } from '../config/site';
import type { PageImage } from '../content/images/registry';
import PageHeroCanvas, { type HeroVariant } from './PageHeroCanvas';

/**
 * Bannière photo des pages de contenu : image optimisée avec texte alternatif
 * traduit, JSON-LD ImageObject (SEO images) et voile WebGL animé décoratif.
 * L'image est chargée en priorité (élément LCP de la page).
 */
export default function PageHero({
  image,
  lang,
  variant = 'sky',
}: {
  image: PageImage;
  lang: Lang;
  variant?: HeroVariant;
}) {
  const imageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: `${SITE.domain}${image.src}`,
    url: `${SITE.domain}${image.src}`,
    width: image.width,
    height: image.height,
    name: image.alt[lang],
    description: image.alt[lang],
    ...(image.credit ? { creditText: image.credit } : {}),
    ...(image.licenseUrl ? { license: image.licenseUrl } : {}),
  };

  return (
    <figure className="relative rounded-[22px] overflow-hidden max-w-4xl mb-8 t-card">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageJsonLd) }} />
      <img
        src={image.src}
        alt={image.alt[lang]}
        width={image.width}
        height={image.height}
        fetchPriority="high"
        decoding="async"
        className="w-full h-[200px] sm:h-[270px] md:h-[330px] object-cover block"
      />
      <PageHeroCanvas variant={variant} />
      {image.credit && (
        <figcaption className="absolute bottom-2 end-3 text-[0.58rem] leading-none text-white/75 bg-black/40 rounded-full px-2 py-1 backdrop-blur-sm">
          {image.credit}
        </figcaption>
      )}
    </figure>
  );
}
