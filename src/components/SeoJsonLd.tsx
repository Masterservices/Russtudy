import { buildEducationalOrganizationSchema } from '../seo/schema/educationalOrganization';
import { buildFaqPageSchema } from '../seo/schema/faqPage';
import { SITE } from '../config/site';
import { translations, type Lang } from '../i18n';
import ratingData from '../content/organization/rating.json';

export default function SeoJsonLd({ lang }: { lang: Lang }) {
  const organizationSchema = buildEducationalOrganizationSchema(ratingData);
  const faqSchema = buildFaqPageSchema(translations[lang].faq.items);
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    </>
  );
}
