import type { Lang } from '../i18n';
import type { PageImage } from '../content/images/registry';

/**
 * Vignette photo des cartes de listing (universités, villes, filières, blog).
 * Chargée en lazy loading pour ne pas peser sur le LCP.
 */
export default function CardImage({
  image,
  lang,
  heightClass = 'h-32',
}: {
  image: PageImage;
  lang: Lang;
  heightClass?: string;
}) {
  return (
    <img
      src={image.src}
      alt={image.alt[lang]}
      width={image.width}
      height={image.height}
      loading="lazy"
      decoding="async"
      className={`w-full ${heightClass} object-cover block`}
    />
  );
}
