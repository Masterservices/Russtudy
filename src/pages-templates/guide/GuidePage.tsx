import type { Lang } from '../../i18n';
import { buildGuideCopy } from '../../content/guide/copy';
import { buildBreadcrumb, breadcrumbToJsonLd } from '../../seo/breadcrumb';
import GlobalJsonLd from '../../components/GlobalJsonLd';
import { GUIDE_SECTION_LABEL } from './labels';
import GuideExperience from './GuideExperience';

export default function GuidePage({ lang }: { lang: Lang }) {
  const copy = buildGuideCopy(lang);
  const breadcrumb = buildBreadcrumb('/guide', lang, { guide: GUIDE_SECTION_LABEL[lang] });
  const breadcrumbJsonLd = breadcrumbToJsonLd(breadcrumb);

  return (
    <>
      <GlobalJsonLd />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <GuideExperience lang={lang} copy={copy} />
    </>
  );
}
