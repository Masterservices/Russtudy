import type { PageSEO } from '../types/seo';
import { buildCanonicalUrl } from './canonical';

export interface GeneratedMeta {
  title: string;
  description: string;
  canonical: string;
  robots: string;
}

/**
 * Longueur au-delà de laquelle Google tronque le titre dans ses résultats.
 * La limite réelle se compte en pixels ; 65 caractères en est l'équivalent
 * usuel pour un alphabet latin.
 */
const TITRE_MAX = 65;

/**
 * Retire la marque d'un titre déjà trop long.
 *
 * Un titre tronqué perd sa fin — donc la marque de toute façon. Autant
 * la retirer nous-mêmes et rendre ces douze caractères au contenu, qui
 * lui porte les mots sur lesquels la page est trouvée. Les titres courts
 * gardent leur marque : c'est là qu'elle sert.
 */
function sansMarqueSiTropLong(title: string): string {
  if (title.length <= TITRE_MAX) return title;
  const court = title.replace(/\s*[|—–-]\s*RusStudy\s*$/, '');
  return court.length >= 20 ? court : title;
}

/**
 * Longueur au-delà de laquelle Google tronque la description.
 */
const DESC_MAX = 160;

/**
 * Coupe une description trop longue à la fin d'une phrase.
 *
 * Google tronque de toute façon, mais en plein mot et avec des points
 * de suspension. Autant s'arrêter nous-mêmes là où la phrase s'arrête :
 * ce qui reste se lit, au lieu de se terminer en morceau de mot. Si
 * aucune fin de phrase ne tombe au bon endroit, on ne touche à rien —
 * une description amputée au hasard serait pire que longue.
 */
function finDePhrase(description: string): string {
  if (description.length <= DESC_MAX) return description;
  const debut = description.slice(0, DESC_MAX + 1);
  const fins = [...debut.matchAll(/[.!?؟…](?=\s|$)/g)];
  const derniere = fins[fins.length - 1];
  if (!derniere || derniere.index === undefined || derniere.index < 90) return description;
  return debut.slice(0, derniere.index + 1).trim();
}

export function generatePageMeta(page: PageSEO): GeneratedMeta {
  return {
    title: sansMarqueSiTropLong(page.title),
    description: finDePhrase(page.description),
    canonical: buildCanonicalUrl(page.lang, page.slug),
    robots: page.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1',
  };
}
