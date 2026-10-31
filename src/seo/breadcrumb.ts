import { SITE } from '../config/site';
import type { BreadcrumbItem } from '../types/seo';

const HOME_LABEL: Record<string, string> = { fr: 'Accueil', en: 'Home', ar: 'الرئيسية', ru: 'Главная' };

/**
 * Construit le fil d'Ariane à partir du chemin de route et d'un dictionnaire
 * de libellés par segment (fourni par la page appelante, ex. nom réel de
 * l'université plutôt que son slug).
 */
export function buildBreadcrumb(
  pathname: string,
  lang: keyof typeof HOME_LABEL,
  segmentLabels: Record<string, string> = {},
): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean);
  const items: BreadcrumbItem[] = [{ name: HOME_LABEL[lang], path: '/' }];

  let accumulated = '';
  for (const segment of segments) {
    accumulated += `/${segment}`;
    items.push({ name: segmentLabels[segment] ?? segment, path: accumulated });
  }
  return items;
}

export function breadcrumbToJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE.domain}${item.path === '/' ? '' : item.path}`,
    })),
  };
}
