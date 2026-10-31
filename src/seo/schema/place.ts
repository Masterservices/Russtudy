export interface PlaceFacts {
  name: string;
}

export function buildPlaceSchema(city: PlaceFacts) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: city.name,
    address: { '@type': 'PostalAddress', addressLocality: city.name, addressCountry: 'RU' },
  };
}
