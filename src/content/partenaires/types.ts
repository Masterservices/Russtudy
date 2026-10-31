import type { Lang } from '../../i18n';

/**
 * Pages partenaires (/partenaires/:slug).
 *
 * Deux langues seulement — français et arabe tunisien (derja) — parce que ces
 * pages servent une audience d'acquisition tunisienne venue d'Instagram et de
 * Facebook, et que leur texte est calé sur celui des vidéos partenaires.
 * Le reste du site reste en quatre langues.
 */
export type PartnerLang = Extract<Lang, 'fr' | 'ar'>;

export const PARTNER_LANGS: PartnerLang[] = ['fr', 'ar'];

export function isPartnerLang(lang: Lang): lang is PartnerLang {
  return lang === 'fr' || lang === 'ar';
}

export interface PartnerStep {
  number: string;
  title: string;
  /** « Avec <partenaire> : … ». Absent tant que le rôle n'est pas confirmé. */
  partnerRole?: string;
  /** « Sur RusStudy : … ». Toujours renseigné : c'est notre propre rôle. */
  platformRole: string;
}

export interface PartnerFaqEntry {
  question: string;
  answer: string;
}

export interface PartnerCopy {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  /** Présentation rédigée par le partenaire. Section masquée si absente. */
  about?: string;
  /** Critères de vérification. Section masquée si la liste est absente. */
  verificationChecks?: string[];
  steps: PartnerStep[];
  budgetIncluded: string[];
  budgetExcluded: string[];
  faq: PartnerFaqEntry[];
  /** Texte de la vidéo, pour l'accessibilité et le référencement. */
  videoTranscript?: string;
}

/**
 * Témoignage vidéo d'un étudiant accompagné par le partenaire.
 *
 * Vertical 9:16, en derja. Rien n'est noté ni chiffré : un témoignage
 * se montre, il ne se balise pas en avis.
 */
export interface PartnerTestimonial {
  id: string;
  src: string;
  poster: string;
  /** Durée réelle du fichier, en secondes. */
  durationSec: number;
  /** Date de mise en ligne sur le site (ISO), pour les données structurées. */
  publishedOn: string;
  title: Record<PartnerLang, string>;
}

/**
 * Faits indépendants de la langue.
 *
 * Même règle que les fiches universités : un champ non vérifié reste
 * `undefined`, et la section correspondante ne s'affiche pas. Aucune valeur
 * plausible n'est écrite à la place d'une valeur réelle.
 */
export interface PartnerProfile {
  slug: string;
  /** Raison commerciale affichée. */
  name: string;
  /** Dénomination complète, lorsqu'elle est vérifiable. Ligne masquée sinon. */
  fullName?: string;
  /** Couleur du partenaire, appliquée uniquement à ses propres éléments. */
  color: string;
  /** Logo du partenaire, chemin public. Bloc logo masqué si absent. */
  logo?: string;
  /** Ville en Tunisie, par langue. Ligne masquée si absente. */
  city?: Record<PartnerLang, string>;
  /** Adresse postale du bureau, affichée telle quelle. Masquée si absente. */
  address?: string;
  /** Date de vérification au format ISO. Badge daté masqué si absente. */
  verifiedOn?: string;
  /** Chemin vers la charte des partenaires. Lien masqué si absent. */
  charterPath?: string;
  /** Vidéo verticale 9:16 à la charte RusStudy. Cadre masqué si absente. */
  videoSrc?: string;
  videoPoster?: string;
  /** Témoignages vidéo. Section masquée si la liste est absente. */
  testimonials?: PartnerTestimonial[];
  /** Montant d'entrée de la première année. Ligne masquée si absent. */
  budgetFrom?: Record<PartnerLang, string>;
  /**
   * `false` tant que les éléments manquants ne sont pas fournis : la page
   * reste accessible par URL directe pour relecture, mais en noindex, hors
   * sitemap et sans lien depuis le reste du site.
   */
  published: boolean;
  copy: Record<PartnerLang, PartnerCopy>;
}
