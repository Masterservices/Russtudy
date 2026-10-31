import { buildFaqPageSchema } from '../seo/schema/faqPage';
import { translations, type Lang } from '../i18n';
import GlobalJsonLd from './GlobalJsonLd';

export default function SeoJsonLd({ lang }: { lang: Lang }) {
  const faqSchema = buildFaqPageSchema(translations[lang].faq.items);

  return (
    <>
      <GlobalJsonLd />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
