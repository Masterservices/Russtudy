import type { Lang } from '../../../i18n';
import type { FaqEntry } from '../../../seo/schema/faqPage';

/** Lien interne vers une page /universites/ existante. */
export interface DeepLink {
  /** Slug de la page cible (sans préfixe de langue ni /universites/). */
  universitySlug: string;
  label: string;
}

/** Une section H2 du contenu profond d'une filière. */
export interface DeepSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  /** Liens internes vers les pages universités (section « universités »). */
  links?: DeepLink[];
}

/** Contenu long, autonome et unique d'une page filière (par langue). */
export interface DeepFiliereContent {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: DeepSection[];
  faq: FaqEntry[];
}

export type DeepFiliereByLang = Record<Lang, DeepFiliereContent>;
