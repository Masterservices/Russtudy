import { buildEducationalOrganizationSchema } from '../seo/schema/educationalOrganization';
import { SITE } from '../config/site';

/**
 * Organization + WebSite JSON-LD partagé par toutes les pages (pas seulement
 * l'accueil) : Google recommande une entité Organization cohérente et
 * détectable sur l'ensemble du site, pas uniquement sur la page d'accueil.
 *
 * Pas d'aggregateRating ici : une note sur notre propre Organization publiée
 * sur notre propre site est un avis "self-serving" (non éligible aux rich
 * results) et, sans note visible sur la page, un risque d'action manuelle
 * Google. Voir CLAUDE.md, section SEO.
 */
export default function GlobalJsonLd() {
  const organizationSchema = buildEducationalOrganizationSchema();
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: `${SITE.domain}/`,
    inLanguage: SITE.supportedLangs,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    </>
  );
}
