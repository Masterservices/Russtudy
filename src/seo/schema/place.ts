import type { City } from '../../types/content';

export function buildPlaceSchema(city: City) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: city.name,
    address: { '@type': 'PostalAddress', addressLocality: city.name, addressCountry: 'RU' },
  };
}
