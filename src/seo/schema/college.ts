export interface CollegeFacts {
  name: string;
  city: string;
}

export function buildCollegeSchema(facts: CollegeFacts) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollegeOrUniversity',
    name: facts.name,
    address: { '@type': 'PostalAddress', addressLocality: facts.city, addressCountry: 'RU' },
  };
}
