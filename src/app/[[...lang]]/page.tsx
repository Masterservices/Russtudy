import { notFound } from 'next/navigation';
import App from '../../App';
import SeoJsonLd from '../../components/SeoJsonLd';
import UniversitiesIndexPage from '../../pages-templates/universites/UniversitiesIndexPage';
import UniversityDetailPage from '../../pages-templates/universites/UniversityDetailPage';
import FilieresIndexPage from '../../pages-templates/filieres/FilieresIndexPage';
import FiliereDetailPage from '../../pages-templates/filieres/FiliereDetailPage';
import ComparatifPage from '../../pages-templates/comparatif/ComparatifPage';
import VisaPage from '../../pages-templates/visa/VisaPage';
import CoutPage from '../../pages-templates/cout-des-etudes/CoutPage';
import AccompagnementPage from '../../pages-templates/accompagnement/AccompagnementPage';
import BoursesPage from '../../pages-templates/bourses/BoursesPage';
import GuidesIndexPage from '../../pages-templates/guides/GuidesIndexPage';
import GuideDetailPage from '../../pages-templates/guides/GuideDetailPage';
import ComparatifDetailPage from '../../pages-templates/comparatif/ComparatifDetailPage';
import VillesIndexPage from '../../pages-templates/villes/VillesIndexPage';
import VilleDetailPage from '../../pages-templates/villes/VilleDetailPage';
import GuidePage from '../../pages-templates/guide/GuidePage';
import FaqPage from '../../pages-templates/faq/FaqPage';
import BlogIndexPage from '../../pages-templates/blog/BlogIndexPage';
import BlogDetailPage from '../../pages-templates/blog/BlogDetailPage';
import LegalPage from '../../pages-templates/legal/LegalPage';
import PartnerPage from '../../pages-templates/partenaires/PartnerPage';
import CoursIndexPage from '../../pages-templates/cours/CoursIndexPage';
import CourseLandingPage from '../../pages-templates/cours/CourseLandingPage';
import { getPartner } from '../../content/partenaires/registry';
import { isPartnerLang } from '../../content/partenaires/types';
import { resolveRoute } from './resolveRoute';
import { FILIERE_SLUGS } from '../../content/filieres/registry';

export default async function RoutedPage({
  params,
}: {
  params: Promise<{ lang?: string[] }>;
}) {
  const { lang: segments } = await params;
  const route = resolveRoute(segments);

  switch (route.type) {
    case 'home':
      return (
        <>
          <SeoJsonLd lang={route.lang} />
          <App initialLang={route.lang} />
        </>
      );
    case 'universites-index':
      return <UniversitiesIndexPage lang={route.lang} />;
    case 'universites-detail':
      return <UniversityDetailPage lang={route.lang} index={route.index} />;
    case 'filieres-index':
      return <FilieresIndexPage lang={route.lang} />;
    case 'filieres-detail':
      return <FiliereDetailPage lang={route.lang} slug={FILIERE_SLUGS[route.index]} />;
    case 'comparatif':
      return <ComparatifPage lang={route.lang} />;
    case 'comparatif-detail':
      return <ComparatifDetailPage lang={route.lang} index={route.index} />;
    case 'visa':
      return <VisaPage lang={route.lang} />;
    case 'cout-des-etudes':
      return <CoutPage lang={route.lang} />;
    case 'bourses':
      return <BoursesPage lang={route.lang} />;
    case 'accompagnement':
      return <AccompagnementPage lang={route.lang} />;
    case 'villes-index':
      return <VillesIndexPage lang={route.lang} />;
    case 'villes-detail':
      return <VilleDetailPage lang={route.lang} index={route.index} />;
    case 'guide':
      return <GuidePage lang={route.lang} />;
    case 'guides-index':
      return <GuidesIndexPage lang={route.lang} />;
    case 'guides-detail':
      return <GuideDetailPage lang={route.lang} index={route.index} />;
    case 'faq':
      return <FaqPage lang={route.lang} />;
    case 'blog-index':
      return <BlogIndexPage lang={route.lang} />;
    case 'blog-detail':
      return <BlogDetailPage lang={route.lang} index={route.index} />;
    case 'privacy':
      return <LegalPage lang={route.lang} kind="privacy" />;
    case 'cookies':
      return <LegalPage lang={route.lang} kind="cookies" />;
    case 'legal-notice':
      return <LegalPage lang={route.lang} kind="legal-notice" />;
    case 'terms-of-use':
      return <LegalPage lang={route.lang} kind="terms-of-use" />;
    case 'terms-of-sale':
      return <LegalPage lang={route.lang} kind="terms-of-sale" />;
    case 'cours-index':
      return <CoursIndexPage lang={route.lang} />;
    case 'cours-detail':
      return <CourseLandingPage lang={route.lang} slug={route.slug} />;
    case 'partner': {
      const partner = getPartner(route.slug);
      if (!partner || !isPartnerLang(route.lang)) notFound();
      return <PartnerPage partner={partner} lang={route.lang} />;
    }
  }
}
