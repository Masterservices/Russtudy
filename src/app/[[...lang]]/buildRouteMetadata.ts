import type { Metadata } from 'next';
import { translations } from '../../i18n';
import { buildMetadata } from '../../seo/next-metadata';
import { buildUniversityDetailCopy, buildUniversityIndexCopy } from '../../content/universites/copy';
import { buildFiliereDetailCopy, buildFiliereIndexCopy } from '../../content/filieres/copy';
import { getFiliereFacts } from '../../content/filieres/facts';
import { getDeepFiliereContent } from '../../content/filieres/deep';
import { buildComparatifCopy } from '../../content/comparatif/copy';
import { buildVisaCopy } from '../../content/visa/copy';
import { buildCoutCopy } from '../../content/cout-des-etudes/copy';
import { buildAccompagnementCopy } from '../../content/accompagnement/copy';
import { buildBoursesCopy } from '../../content/bourses/copy';
import { buildGuidesIndexCopy, buildPracticalGuideCopy } from '../../content/guides/copy';
import {
  buildCountryComparisonCopy,
  COMPARISON_SLUGS,
  COMPARISON_IMAGE_KEYS,
} from '../../content/comparatif/countries';
import { GUIDE_SLUGS, GUIDE_IMAGE_KEYS } from '../../content/guides/registry';
import { GUIDES_SECTION_LABEL } from '../../pages-templates/guides/labels';
import { buildCityDetailCopy, buildCityIndexCopy } from '../../content/villes/copy';
import { CITY_BUDGET_ID, CITY_NAMES, CITY_UNIVERSITY_INDICES, CITY_SLUGS } from '../../content/villes/registry';
import { buildGuideCopy } from '../../content/guide/copy';
import { buildFaqPageCopy } from '../../content/faq-page/copy';
import { buildBlogIndexCopy, buildBlogArticleCopy } from '../../content/blog/copy';
import { LEGAL_PATH } from '../../pages-templates/legal/labels';
import { getPartner } from '../../content/partenaires/registry';
import { COURSE_COPY, COURSE_INDEX_COPY } from '../../content/cours/copy';
import { isPartnerLang, PARTNER_LANGS } from '../../content/partenaires/types';
import { buildLegalCopy } from '../../content/legal/copy';
import { SITE } from '../../config/site';
import { UNIVERSITY_SLUGS } from '../../content/universites/registry';
import { FILIERE_SLUGS } from '../../content/filieres/registry';
import { BLOG_SLUGS } from '../../content/blog/registry';
import {
  UNIVERSITY_IMAGES,
  CITY_IMAGES,
  FILIERE_IMAGES,
  SECTION_IMAGES,
  BLOG_IMAGES,
  type PageImage,
} from '../../content/images/registry';
import { UNIVERSITES_SECTION_LABEL } from '../../pages-templates/universites/labels';
import { FILIERES_SECTION_LABEL } from '../../pages-templates/filieres/labels';
import { VILLES_SECTION_LABEL } from '../../pages-templates/villes/labels';
import { FAQ_PAGE_SECTION_LABEL } from '../../pages-templates/faq/labels';
import { BLOG_SECTION_LABEL } from '../../pages-templates/blog/labels';
import type { Route } from './resolveRoute';

const ICON_META = {
  icons: {
    icon: [
      { url: '/assets/img/favicon.ico', sizes: 'any' },
      { url: '/assets/img/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/img/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/img/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/assets/img/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/assets/img/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/assets/img/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [{ rel: 'mask-icon', url: '/assets/img/safari-pinned-tab.svg', color: '#2F66E8' }],
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#2F66E8',
    'msapplication-TileImage': '/assets/img/mstile-150x150.png',
    'msapplication-config': '/browserconfig.xml',
  },
};

const UPDATED_AT = '2026-07-08';
/** Pages de cours : publiées après la révision générale du site. */
const COURSES_UPDATED_AT = '2026-10-23';

/** OpenGraph/Twitter : la photo de la page remplace l'image générique. */
function ogImageMeta(image: PageImage, lang: Route['lang']) {
  return {
    ogImage: `${SITE.domain}${image.src}`,
    ogImageWidth: image.width,
    ogImageHeight: image.height,
    ogImageAlt: image.alt[lang],
  };
}

export function buildRouteMetadata(route: Route): Metadata {
  switch (route.type) {
    case 'home': {
      if (route.lang === 'fr') {
        return {
          ...buildMetadata({
            slug: '',
            lang: 'fr',
            // Titre et description taillés pour les résultats de
            // recherche : au-delà, Google tronque et la fin se perd.
            title: 'RusStudy — Étudier en Russie : médecine, ingénierie, visa',
            description:
              "Agence d'orientation vers les universités russes pour étudiants tunisiens : admission garantie, visa, logement et accompagnement complet, dès 2 200 €/an.",
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
          ...ogImageMeta(SECTION_IMAGES.universites, route.lang),
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
          ...ogImageMeta(UNIVERSITY_IMAGES[UNIVERSITY_SLUGS[route.index]], route.lang),
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
          ...ogImageMeta(SECTION_IMAGES.filieres, route.lang),
        }),
        ...ICON_META,
      };
    }

    case 'filieres-detail': {
      const slug = FILIERE_SLUGS[route.index];
      const item = getFiliereFacts(route.lang, slug);
      const copy = buildFiliereDetailCopy(route.lang, item);
      const deep = getDeepFiliereContent(slug, route.lang);
      return {
        ...buildMetadata({
          slug: `filieres/${route.slug}`,
          lang: route.lang,
          title: deep?.metaTitle ?? copy.title,
          description: deep?.metaDescription ?? copy.description,
          h1: deep?.h1 ?? item.name,
          schemaType: 'Course',
          updatedAt: COURSES_UPDATED_AT,
          ...ogImageMeta(FILIERE_IMAGES[slug], route.lang),
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
          ...ogImageMeta(SECTION_IMAGES.comparatif, route.lang),
        }),
        ...ICON_META,
      };
    }

    case 'comparatif-detail': {
      const copy = buildCountryComparisonCopy(route.lang, route.index);
      const image = SECTION_IMAGES[COMPARISON_IMAGE_KEYS[COMPARISON_SLUGS[route.index]]];
      return {
        ...buildMetadata({
          slug: `comparatif/${route.slug}`,
          lang: route.lang,
          title: copy.title,
          description: copy.description,
          h1: copy.h1,
          keywords: copy.keywords,
          schemaType: 'Article',
          updatedAt: '2026-09-14',
          ...ogImageMeta(image, route.lang),
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
          ...ogImageMeta(SECTION_IMAGES.visa, route.lang),
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
          ...ogImageMeta(SECTION_IMAGES['cout-des-etudes'], route.lang),
        }),
        ...ICON_META,
      };
    }

    case 'bourses': {
      const copy = buildBoursesCopy(route.lang);
      return {
        ...buildMetadata({
          slug: 'bourses',
          lang: route.lang,
          title: copy.title,
          description: copy.description,
          h1: copy.h1,
          keywords: [
            'bourse études Russie',
            'bourse Russie Tunisie',
            "quota d'État russe",
            'financement études Russie',
            'étudier en Russie pas cher',
          ],
          schemaType: 'Article',
          updatedAt: '2026-09-14',
          ...ogImageMeta(SECTION_IMAGES.bourses, route.lang),
        }),
        ...ICON_META,
      };
    }

    case 'accompagnement': {
      const copy = buildAccompagnementCopy(route.lang);
      return {
        ...buildMetadata({
          slug: 'accompagnement',
          lang: route.lang,
          title: copy.title,
          description: copy.description,
          h1: copy.h1,
          schemaType: 'Article',
          updatedAt: '2026-07-22',
          ...ogImageMeta(SECTION_IMAGES.accompagnement, route.lang),
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
          ...ogImageMeta(SECTION_IMAGES.villes, route.lang),
        }),
        ...ICON_META,
      };
    }

    case 'villes-detail': {
      const city = { name: CITY_NAMES[CITY_SLUGS[route.index]][route.lang] };
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
          ...ogImageMeta(CITY_IMAGES[CITY_SLUGS[route.index]], route.lang),
        }),
        ...ICON_META,
      };
    }

    case 'guide': {
      const copy = buildGuideCopy(route.lang);
      return {
        ...buildMetadata({
          slug: 'guide',
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

    case 'guides-index': {
      const copy = buildGuidesIndexCopy(route.lang);
      return {
        ...buildMetadata({
          slug: 'guides',
          lang: route.lang,
          title: copy.title,
          description: copy.description,
          h1: GUIDES_SECTION_LABEL[route.lang],
          schemaType: 'WebSite',
          updatedAt: '2026-09-14',
          ...ogImageMeta(SECTION_IMAGES.guides, route.lang),
        }),
        ...ICON_META,
      };
    }

    case 'guides-detail': {
      const copy = buildPracticalGuideCopy(route.lang, route.index);
      const image = SECTION_IMAGES[GUIDE_IMAGE_KEYS[GUIDE_SLUGS[route.index]]];
      return {
        ...buildMetadata({
          slug: `guides/${route.slug}`,
          lang: route.lang,
          title: copy.title,
          description: copy.description,
          h1: copy.h1,
          keywords: copy.keywords,
          schemaType: 'Article',
          updatedAt: '2026-09-14',
          ...ogImageMeta(image, route.lang),
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
          ...ogImageMeta(SECTION_IMAGES.faq, route.lang),
        }),
        ...ICON_META,
      };
    }

    case 'blog-index': {
      const copy = buildBlogIndexCopy(route.lang);
      return {
        ...buildMetadata({
          slug: 'blog',
          lang: route.lang,
          title: copy.title,
          description: copy.description,
          h1: BLOG_SECTION_LABEL[route.lang],
          schemaType: 'WebSite',
          updatedAt: UPDATED_AT,
          ...ogImageMeta(SECTION_IMAGES.blog, route.lang),
        }),
        ...ICON_META,
      };
    }

    case 'blog-detail': {
      const copy = buildBlogArticleCopy(route.lang, route.index);
      return {
        ...buildMetadata({
          slug: `blog/${route.slug}`,
          lang: route.lang,
          title: copy.title,
          description: copy.description,
          h1: copy.h1,
          keywords: copy.keywords,
          schemaType: 'Article',
          updatedAt: UPDATED_AT,
          ...ogImageMeta(BLOG_IMAGES[BLOG_SLUGS[route.index]], route.lang),
        }),
        ...ICON_META,
      };
    }

    case 'cours-index': {
      const copy = COURSE_INDEX_COPY[route.lang];
      return {
        ...buildMetadata({
          slug: 'cours',
          lang: route.lang,
          title: copy.metaTitle,
          description: copy.metaDescription,
          h1: copy.h1,
          keywords: copy.keywords,
          schemaType: 'Course',
          updatedAt: COURSES_UPDATED_AT,
          ...ogImageMeta(SECTION_IMAGES['apprendre-russe'], route.lang),
        }),
        ...ICON_META,
      };
    }

    case 'cours-detail': {
      const copy = COURSE_COPY[route.slug][route.lang];
      const image = route.slug === 'russe' ? SECTION_IMAGES['apprendre-russe'] : SECTION_IMAGES['comparatif-france'];
      return {
        ...buildMetadata({
          slug: `cours/${route.slug}`,
          lang: route.lang,
          title: copy.metaTitle,
          description: copy.metaDescription,
          h1: copy.h1,
          keywords: copy.keywords,
          schemaType: 'Course',
          updatedAt: COURSES_UPDATED_AT,
          ...ogImageMeta(image, route.lang),
        }),
        ...ICON_META,
      };
    }

    case 'partner': {
      const partner = getPartner(route.slug);
      if (!partner || !isPartnerLang(route.lang)) return ICON_META;
      const copy = partner.copy[route.lang];
      return {
        ...buildMetadata({
          slug: `partenaires/${partner.slug}`,
          lang: route.lang,
          title: copy.metaTitle,
          description: copy.metaDescription,
          h1: copy.h1,
          schemaType: 'WebSite',
          updatedAt: '2026-10-14',
          langs: PARTNER_LANGS,
          // Tant que la fiche n'est pas publiée, la page reste accessible
          // par URL directe pour relecture mais sort de l'index.
          noindex: !partner.published,
          ...(partner.videoPoster ? { ogImage: partner.videoPoster } : {}),
        }),
        ...ICON_META,
      };
    }

    case 'privacy':
    case 'cookies':
    case 'legal-notice':
    case 'terms-of-use':
    case 'terms-of-sale': {
      const kind = route.type;
      const copy = buildLegalCopy(kind, route.lang);
      return {
        ...buildMetadata({
          slug: LEGAL_PATH[kind].replace(/^\//, ''),
          lang: route.lang,
          title: copy.title,
          description: copy.description,
          h1: copy.h1,
          schemaType: 'Article',
          updatedAt: kind === 'privacy' || kind === 'cookies' ? '2026-07-22' : '2026-10-07',
        }),
        ...ICON_META,
      };
    }
  }
}
