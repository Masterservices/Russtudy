import type { Lang } from '../types/seo';

export const SITE = {
  name: 'RusStudy',
  alternateName: 'Russie Études',
  domain: 'https://www.russieetudes.com',
  email: 'contact@russieetudes.com',
  phone: '+79964334489',
  foundingDate: '2015',
  defaultLang: 'fr' as Lang,
  supportedLangs: ['fr', 'en', 'ar', 'ru'] as Lang[],
  ogImage: 'https://www.russieetudes.com/assets/img/og-cover.jpg',
  /**
   * Comptes officiels. Renseigner l'URL complète (https://…) ; une valeur vide
   * masque l'icône dans le pied de page et retire l'entrée de `sameAs`.
   */
  social: {
    facebook: '',
    instagram: '',
  },
};
