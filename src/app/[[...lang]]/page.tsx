import App from '../../App';
import SeoJsonLd from '../../components/SeoJsonLd';
import UniversitiesIndexPage from '../../pages-templates/universites/UniversitiesIndexPage';
import UniversityDetailPage from '../../pages-templates/universites/UniversityDetailPage';
import FilieresIndexPage from '../../pages-templates/filieres/FilieresIndexPage';
import FiliereDetailPage from '../../pages-templates/filieres/FiliereDetailPage';
import ComparatifPage from '../../pages-templates/comparatif/ComparatifPage';
import VillesIndexPage from '../../pages-templates/villes/VillesIndexPage';
import VilleDetailPage from '../../pages-templates/villes/VilleDetailPage';
import VisaPage from '../../pages-templates/visa/VisaPage';
import CoutPage from '../../pages-templates/cout-des-etudes/CoutPage';
import FaqPage from '../../pages-templates/faq/FaqPage';
import { resolveRoute } from './resolveRoute';

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
      return <FiliereDetailPage lang={route.lang} index={route.index} />;
    case 'comparatif':
      return <ComparatifPage lang={route.lang} />;
    case 'villes-index':
      return <VillesIndexPage lang={route.lang} />;
    case 'villes-detail':
      return <VilleDetailPage lang={route.lang} index={route.index} />;
    case 'visa':
      return <VisaPage lang={route.lang} />;
    case 'cout-des-etudes':
      return <CoutPage lang={route.lang} />;
    case 'faq':
      return <FaqPage lang={route.lang} />;
  }
}
