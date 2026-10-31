export interface CollegeFacts {
  name: string;
  city: string;
  /** Dénomination officielle russe, lorsqu'elle est vérifiée. */
  alternateName?: string;
  /** Site officiel de l'établissement, lorsqu'il est vérifié. */
  url?: string;
  /** Année de fondation, uniquement si confirmée par une source institutionnelle. */
  foundingDate?: string;
}

/**
 * Schéma CollegeOrUniversity.
 *
 * Seuls les champs réellement vérifiés sont émis : une information absente de
 * nos sources n'a pas à apparaître dans les données structurées sous une
 * forme qui la ferait passer pour établie.
 */
export function buildCollegeSchema(facts: CollegeFacts) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollegeOrUniversity',
    name: facts.name,
    ...(facts.alternateName ? { alternateName: facts.alternateName } : {}),
    ...(facts.url ? { url: facts.url } : {}),
    ...(facts.foundingDate ? { foundingDate: facts.foundingDate } : {}),
    address: { '@type': 'PostalAddress', addressLocality: facts.city, addressCountry: 'RU' },
  };
}
