import type { MetadataRoute } from 'next';
import { SITE } from '../config/site';
import { buildCanonicalUrl, buildHreflangAlternates } from '../seo/canonical';
import { getPublicCatalogue } from '../features/app/elearning/public';
import { UNIVERSITY_SLUGS } from '../content/universites/registry';
import { publishedPartners } from '../content/partenaires/registry';
import { PARTNER_LANGS } from '../content/partenaires/types';
import { PARTNER_LABELS } from '../content/partenaires/labels';
import { FILIERE_SLUGS } from '../content/filieres/registry';
import { CITY_SLUGS } from '../content/villes/registry';
import { BLOG_SLUGS } from '../content/blog/registry';
import { blogPublishedAt } from '../content/blog/copy';
import { GUIDE_SLUGS, GUIDE_IMAGE_KEYS } from '../content/guides/registry';
import { COMPARISON_SLUGS, COMPARISON_IMAGE_KEYS } from '../content/comparatif/countries';
import {
  SECTION_IMAGES,
  UNIVERSITY_IMAGES,
  FILIERE_IMAGES,
  CITY_IMAGES,
  BLOG_IMAGES,
} from '../content/images/registry';

interface SitemapPath {
  path: string;
  changeFrequency: 'weekly' | 'monthly';
  priority: number;
  /** Chemin de la photo de la page, déclarée au sitemap pour Google Images. */
  image?: string;
  /** Date propre à la page ; à défaut, la date de révision du site est utilisée. */
  lastModified?: string;
}

/**
 * Date de révision du site, pour les pages sans date propre. À remonter
 * délibérément quand une page est retravaillée : un `new Date()` ferait mentir
 * toutes les pages à chaque déploiement.
 */
const SITE_LAST_MODIFIED = '2026-09-14';

/**
 * Échappe un texte destiné au sitemap.
 *
 * Next.js insère tels quels les titres et descriptions des vidéos : un
 * seul « & » rend le fichier XML invalide, et Google rejette alors le
 * sitemap entier, pas seulement l'entrée fautive.
 */
function xml(texte: string): string {
  return texte
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const PATHS: SitemapPath[] = [
  { path: '', changeFrequency: 'weekly', priority: 1.0 },
  { path: 'universites', changeFrequency: 'monthly', priority: 0.8, image: SECTION_IMAGES.universites.src },
  { path: 'filieres', changeFrequency: 'monthly', priority: 0.8, image: SECTION_IMAGES.filieres.src },
  { path: 'comparatif', changeFrequency: 'monthly', priority: 0.6, image: SECTION_IMAGES.comparatif.src },
  { path: 'visa', changeFrequency: 'monthly', priority: 0.8, image: SECTION_IMAGES.visa.src },
  { path: 'cout-des-etudes', changeFrequency: 'monthly', priority: 0.8, image: SECTION_IMAGES['cout-des-etudes'].src },
  { path: 'bourses', changeFrequency: 'monthly', priority: 0.8, image: SECTION_IMAGES.bourses.src },
  { path: 'accompagnement', changeFrequency: 'monthly', priority: 0.7, image: SECTION_IMAGES.accompagnement.src },
  { path: 'villes', changeFrequency: 'monthly', priority: 0.7, image: SECTION_IMAGES.villes.src },
  { path: 'guide', changeFrequency: 'monthly', priority: 0.9 },
  { path: 'guides', changeFrequency: 'monthly', priority: 0.8, image: SECTION_IMAGES.guides.src },
  { path: 'faq', changeFrequency: 'monthly', priority: 0.7, image: SECTION_IMAGES.faq.src },
  { path: 'blog', changeFrequency: 'weekly', priority: 0.7, image: SECTION_IMAGES.blog.src },
  { path: 'politique-de-confidentialite', changeFrequency: 'monthly', priority: 0.3 },
  { path: 'cookies', changeFrequency: 'monthly', priority: 0.3 },
  { path: 'cours', changeFrequency: 'monthly', priority: 0.8, image: SECTION_IMAGES['apprendre-russe'].src },
  { path: 'cours/russe', changeFrequency: 'monthly', priority: 0.8, image: SECTION_IMAGES['apprendre-russe'].src },
  { path: 'cours/francais', changeFrequency: 'monthly', priority: 0.8, image: SECTION_IMAGES['comparatif-france'].src },
  { path: 'mentions-legales', changeFrequency: 'monthly', priority: 0.3 },
  { path: 'conditions-generales-utilisation', changeFrequency: 'monthly', priority: 0.3 },
  { path: 'conditions-generales-vente', changeFrequency: 'monthly', priority: 0.3 },
  ...UNIVERSITY_SLUGS.map((slug) => ({
    path: `universites/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
    image: UNIVERSITY_IMAGES[slug].src,
  })),
  ...FILIERE_SLUGS.map((slug) => ({
    path: `filieres/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
    image: FILIERE_IMAGES[slug].src,
  })),
  ...CITY_SLUGS.map((slug) => ({
    path: `villes/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
    image: CITY_IMAGES[slug].src,
  })),
  ...BLOG_SLUGS.map((slug, index) => ({
    path: `blog/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
    image: BLOG_IMAGES[slug].src,
    lastModified: blogPublishedAt(index),
  })),
  ...GUIDE_SLUGS.map((slug) => ({
    path: `guides/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    image: SECTION_IMAGES[GUIDE_IMAGE_KEYS[slug]].src,
  })),
  ...COMPARISON_SLUGS.map((slug) => ({
    path: `comparatif/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    image: SECTION_IMAGES[COMPARISON_IMAGE_KEYS[slug]].src,
  })),
];

/**
 * Leçons ouvertes à tous, déclarées au sitemap.
 *
 * Elles viennent de la base, pas d'un registre : une leçon publiée en
 * leçon d'essai doit apparaître sans qu'on ait pensé à la recopier
 * quelque part. Les leçons réservées restent dehors — leur contenu
 * n'est pas servi, et les proposer serait promettre ce qu'elles ne
 * montrent pas.
 *
 * Si la base est injoignable au moment de la construction, le sitemap
 * se contente des pages statiques plutôt que d'échouer : un sitemap
 * incomplet vaut mieux qu'un déploiement bloqué.
 */
async function elearningEntries(): Promise<MetadataRoute.Sitemap> {
  try {
    const courses = await getPublicCatalogue();
    const entries: MetadataRoute.Sitemap = [
      {
        url: `${SITE.domain}/elearning`,
        lastModified: SITE_LAST_MODIFIED,
        changeFrequency: 'weekly',
        priority: 0.7,
      },
    ];

    for (const course of courses) {
      entries.push({
        url: `${SITE.domain}/elearning/${course.slug}`,
        lastModified: SITE_LAST_MODIFIED,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
      for (const lesson of course.lessons) {
        if (!lesson.isFree) continue;
        entries.push({
          url: `${SITE.domain}/elearning/${course.slug}/${lesson.slug}`,
          lastModified: SITE_LAST_MODIFIED,
          changeFrequency: 'monthly',
          priority: 0.6,
        });
      }
    }

    return entries;
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];
  for (const lang of SITE.supportedLangs) {
    for (const { path, changeFrequency, priority, image, lastModified } of PATHS) {
      entries.push({
        url: buildCanonicalUrl(lang, path),
        lastModified: lastModified ?? SITE_LAST_MODIFIED,
        changeFrequency,
        priority,
        // Les quatre versions se déclarent l'une l'autre : le sitemap
        // dit la même chose que les <link rel="alternate"> des pages.
        alternates: { languages: buildHreflangAlternates(path) },
        ...(image ? { images: [`${SITE.domain}${image}`] } : {}),
      });
    }
  }

  // Pages partenaires : français et arabe seulement, et uniquement celles
  // dont la fiche est publiée. Une fiche encore incomplète reste accessible
  // par URL directe pour relecture, mais hors sitemap et en noindex.
  for (const partner of publishedPartners()) {
    for (const lang of PARTNER_LANGS) {
      entries.push({
        url: buildCanonicalUrl(lang, `partenaires/${partner.slug}`),
        lastModified: SITE_LAST_MODIFIED,
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: {
          languages: buildHreflangAlternates(`partenaires/${partner.slug}`, PARTNER_LANGS),
        },
        ...(partner.videoPoster ? { images: [`${SITE.domain}${partner.videoPoster}`] } : {}),
        // Témoignages vidéo, déclarés pour la recherche vidéo de Google.
        // Ni note ni nombre de vues : rien qui ne soit affiché sur la page.
        ...(partner.testimonials?.length
          ? {
              videos: partner.testimonials.map((t) => ({
                title: xml(t.title[lang]),
                description: xml(`${PARTNER_LABELS[lang].testimonialsSubtitle} ${t.title[lang]}`),
                thumbnail_loc: `${SITE.domain}${t.poster}`,
                content_loc: `${SITE.domain}${t.src}`,
                duration: t.durationSec,
                publication_date: t.publishedOn,
                family_friendly: 'yes' as const,
              })),
            }
          : {}),
      });
    }
  }

  entries.push(...(await elearningEntries()));

  // La visite immersive 3D : page unique, servie telle quelle dans les
  // quatre langues (son contenu est visuel), liée depuis tout le site.
  entries.push({
    url: `${SITE.domain}/immersion`,
    lastModified: SITE_LAST_MODIFIED,
    changeFrequency: 'monthly',
    priority: 0.6,
  });

  return entries;
}
