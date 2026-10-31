import type { Lang } from '../../i18n';

/**
 * Identité légale de l'éditeur.
 *
 * Source unique pour les mentions légales, les CGU et les CGV : un champ
 * renseigné ici apparaît automatiquement dans les trois documents et dans
 * les quatre langues.
 *
 * Règle : un champ dont la valeur n'est pas vérifiée reste `undefined`.
 * Il s'affiche alors comme « à compléter » plutôt que de porter une valeur
 * plausible mais fausse — une mention légale inventée expose davantage que
 * son absence.
 */
export interface LegalIdentity {
  /** Dénomination sociale de l'éditeur. */
  legalName: string;
  /** Forme juridique (SARL, SUARL, entreprise individuelle…). */
  legalForm?: string;
  /** Capital social, le cas échéant. */
  capital?: string;
  /** Adresse complète du siège. */
  headOffice?: string;
  /** Matricule fiscal ou identifiant au registre national des entreprises. */
  taxId?: string;
  /** Nom du responsable de la publication. */
  publicationDirector?: string;
  /** Adresse e-mail de contact. */
  email: string;
  /** Téléphone fixe ou mobile de contact. */
  phone?: string;
  /** Numéro WhatsApp professionnel. */
  whatsapp: string;
  /** Domaine officiel servi en production. */
  site: string;
  /** Raison sociale de l'hébergeur. */
  host: string;
  /** Adresse de l'hébergeur. */
  hostAddress: string;
  /** Année de début d'activité, lorsqu'elle est vérifiée. */
  since?: string;
}

export const LEGAL_IDENTITY: LegalIdentity = {
  legalName: 'Master Services',
  email: 'contact@russieetudes.com',
  whatsapp: '+7 996 433 4489',
  site: 'www.russieetudes.com',
  host: 'Vercel Inc.',
  hostAddress: '440 N Barranca Ave #4133, Covina, CA 91723, États-Unis',
  since: '2018',
  // Champs volontairement non renseignés, faute de source vérifiée :
  // legalForm, capital, headOffice, taxId, publicationDirector, phone.
};

const TO_COMPLETE: Record<Lang, string> = {
  fr: 'Information à compléter par l’éditeur',
  en: 'Information to be completed by the publisher',
  ar: 'معلومة يجب أن يستكملها الناشر',
  ru: 'Сведения, подлежащие уточнению издателем',
};

/** Valeur d'un champ d'identité, ou mention explicite si elle n'est pas renseignée. */
export function identityField(key: keyof LegalIdentity, lang: Lang): string {
  const value = LEGAL_IDENTITY[key];
  return value && value.trim() ? value : TO_COMPLETE[lang];
}

/** true tant qu'au moins un champ obligatoire d'une mention légale manque. */
export function hasIncompleteIdentity(): boolean {
  const required: (keyof LegalIdentity)[] = [
    'legalForm',
    'headOffice',
    'taxId',
    'publicationDirector',
  ];
  return required.some((key) => !LEGAL_IDENTITY[key]);
}
