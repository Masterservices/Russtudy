import type { Lang } from '../../i18n';
import type { LegalKind } from '../../content/legal/copy';

export const LEGAL_SECTION_LABEL: Record<LegalKind, Record<Lang, string>> = {
  privacy: {
    fr: 'Politique de confidentialité',
    en: 'Privacy policy',
    ar: 'سياسة الخصوصية',
    ru: 'Политика конфиденциальности',
  },
  cookies: {
    fr: 'Cookies',
    en: 'Cookies',
    ar: 'الكوكيز',
    ru: 'Cookies',
  },
  'legal-notice': {
    fr: 'Mentions légales',
    en: 'Legal notice',
    ar: 'المعلومات القانونية',
    ru: 'Правовая информация',
  },
  'terms-of-use': {
    fr: "Conditions générales d'utilisation",
    en: 'Terms of use',
    ar: 'شروط الاستخدام',
    ru: 'Условия использования',
  },
  'terms-of-sale': {
    fr: 'Conditions générales de vente',
    en: 'Terms of sale',
    ar: 'شروط البيع',
    ru: 'Условия продажи',
  },
};

export const LEGAL_PATH: Record<LegalKind, string> = {
  privacy: '/politique-de-confidentialite',
  cookies: '/cookies',
  'legal-notice': '/mentions-legales',
  'terms-of-use': '/conditions-generales-utilisation',
  'terms-of-sale': '/conditions-generales-vente',
};

export { basePathFor } from '../basePath';
