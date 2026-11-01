import type { Metadata } from 'next';
import { translations } from '../../i18n';
import { buildMetadata } from '../../seo/next-metadata';
import { buildUniversityDetailCopy, buildUniversityIndexCopy } from '../../content/universites/copy';
import { buildFiliereDetailCopy, buildFiliereIndexCopy } from '../../content/filieres/copy';
import { buildComparatifCopy } from '../../content/comparatif/copy';
import { buildCityDetailCopy, buildCityIndexCopy } from '../../content/villes/copy';
import { buildVisaCopy } from '../../content/visa/copy';
import { buildCoutCopy } from '../../content/cout-des-etudes/copy';
import { buildFaqPageCopy } from '../../content/faq-page/copy';
import { CITY_BUDGET_ID, CITY_UNIVERSITY_INDICES, CITY_SLUGS } from '../../content/villes/registry';
import { UNIVERSITES_SECTION_LABEL } from '../../pages-templates/universites/labels';
import { FILIERES_SECTION_LABEL } from '../../pages-templates/filieres/labels';
import { VILLES_SECTION_LABEL } from '../../pages-templates/villes/labels';
import { VISA_SECTION_LABEL } from '../../pages-templates/visa/labels';
import { COUT_SECTION_LABEL } from '../../pages-templates/cout-des-etudes/labels';
import { FAQ_PAGE_SECTION_LABEL } from '../../pages-templates/faq/labels';
import type { Route } from './resolveRoute';

const ICON_META = {
  icons: {
    icon: [
      { url: '/assets/img/favicon.ico' },
      { url: '/assets/img/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/assets/img/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
};

const UPDATED_AT = '2026-07-08';

export function buildRouteMetadata(route: Route): Metadata {
  switch (route.type) {
    case 'home': {
      if (route.lang === 'fr') {
        return {
          ...buildMetadata({
            slug: '',
            lang: 'fr',
            title: 'RusStudy — Étudie en Russie | Médecine, Ingénierie, Pharmacie dès 2 200€/an',
            description:
              "RusStudy : Agence officielle d'orientation vers les universités russes pour étudiants tunisiens. Accompagnement total, visa garanti, logement sécurisé et admission garantie dès 2 200€ par an.",
            h1: 'RusStudy — Étudier en Russie depuis la Tunisie',
            keywords: [
              'étudier en Russie',
              'université russe Tunisie',
              'médecine Russie',
              'études Russie',
              'RusStudy',
              'russieetudes',
              'bourse Russie Tunisie',
              'simulateur budget études Russie',
            ],
            schemaType: 'WebSite',
            updatedAt: UPDATED_AT,
          }),
          ...ICON_META,
        };
      }
      const hero = translations[route.lang].hero;
      return {
        ...buildMetadata({
          slug: '',
          lang: route.lang,
          title: `${hero.title1} ${hero.title2} — RusStudy`,
          description: hero.subtitle,
          h1: `${hero.title1} ${hero.title2}`,
          schemaType: 'WebSite',
          updatedAt: UPDATED_AT,
        }),
        ...ICON_META,
      };
    }

    case 'universites-index': {
      const copy = buildUniversityIndexCopy(route.lang);
      return {
        ...buildMetadata({
          slug: 'universites',
          lang: route.lang,
          title: copy.title,
          description: copy.description,
          h1: UNIVERSITES_SECTION_LABEL[route.lang],
          schemaType: 'WebSite',
          updatedAt: UPDATED_AT,
        }),
        ...ICON_META,
      };
    }

    case 'universites-detail': {
      const item = translations[route.lang].universities.items[route.index];
      const copy = buildUniversityDetailCopy(route.lang, item);
      return {
        ...buildMetadata({
          slug: `universites/${route.slug}`,
          lang: route.lang,
          title: copy.title,
          description: copy.description,
          h1: item.name,
          schemaType: 'EducationalOrganization',
          updatedAt: UPDATED_AT,
        }),
        ...ICON_META,
      };
    }

    case 'filieres-index': {
      const copy = buildFiliereIndexCopy(route.lang);
      return {
        ...buildMetadata({
          slug: 'filieres',
          lang: route.lang,
          title: copy.title,
          description: copy.description,
          h1: FILIERES_SECTION_LABEL[route.lang],
          schemaType: 'WebSite',
          updatedAt: UPDATED_AT,
        }),
        ...ICON_META,
      };
    }

    case 'filieres-detail': {
      const item = translations[route.lang].programs.items[route.index];
      const copy = buildFiliereDetailCopy(route.lang, item);
      return {
        ...buildMetadata({
          slug: `filieres/${route.slug}`,
          lang: route.lang,
          title: copy.title,
          description: copy.description,
          h1: item.name,
          schemaType: 'Course',
          updatedAt: UPDATED_AT,
        }),
        ...ICON_META,
      };
    }

    case 'comparatif': {
      const copy = buildComparatifCopy(route.lang);
      return {
        ...buildMetadata({
          slug: 'comparatif',
          lang: route.lang,
          title: copy.title,
          description: copy.description,
          h1: copy.h1,
          schemaType: 'Article',
          updatedAt: UPDATED_AT,
        }),
        ...ICON_META,
      };
    }

    case 'villes-index': {
      const copy = buildCityIndexCopy(route.lang);
      return {
        ...buildMetadata({
          slug: 'villes',
          lang: route.lang,
          title: copy.title,
          description: copy.description,
          h1: VILLES_SECTION_LABEL[route.lang],
          schemaType: 'WebSite',
          updatedAt: UPDATED_AT,
        }),
        ...ICON_META,
      };
    }

    case 'villes-detail': {
      const city = translations[route.lang].simulator.cities[route.index];
      const budgetId = CITY_BUDGET_ID[CITY_SLUGS[route.index]];
      const universityCount = CITY_UNIVERSITY_INDICES[CITY_SLUGS[route.index]].length;
      const copy = buildCityDetailCopy(route.lang, { name: city.name, budgetId, universityCount });
      return {
        ...buildMetadata({
          slug: `villes/${route.slug}`,
          lang: route.lang,
          title: copy.title,
          description: copy.description,
          h1: city.name,
          schemaType: 'Place',
          updatedAt: UPDATED_AT,
        }),
        ...ICON_META,
      };
    }

    case 'visa': {
      const copy = buildVisaCopy(route.lang);
      return {
        ...buildMetadata({
          slug: 'visa',
          lang: route.lang,
          title: copy.title,
          description: copy.description,
          h1: copy.h1,
          schemaType: 'Article',
          updatedAt: UPDATED_AT,
        }),
        ...ICON_META,
      };
    }

    case 'cout-des-etudes': {
      const copy = buildCoutCopy(route.lang);
      return {
        ...buildMetadata({
          slug: 'cout-des-etudes',
          lang: route.lang,
          title: copy.title,
          description: copy.description,
          h1: copy.h1,
          schemaType: 'Article',
          updatedAt: UPDATED_AT,
        }),
        ...ICON_META,
      };
    }

    case 'faq': {
      const copy = buildFaqPageCopy(route.lang);
      return {
        ...buildMetadata({
          slug: 'faq',
          lang: route.lang,
          title: copy.title,
          description: copy.description,
          h1: FAQ_PAGE_SECTION_LABEL[route.lang],
          schemaType: 'FAQPage',
          updatedAt: UPDATED_AT,
        }),
        ...ICON_META,
      };
    }
  }
}
