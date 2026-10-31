import type { ReactNode } from 'react';
import type { Viewport } from 'next';
import '../../../index.css';

import { resolveElearning } from './resolve';

/**
 * Racine de l'espace e-learning.
 *
 * Même feuille de style et mêmes polices que russieetudes.com : les
 * cours de langue sont un produit du site, pas une rubrique de la
 * plateforme de suivi. Chaque page pose ensuite son en-tête, son fil
 * d'Ariane et son pied de page par ContentPageShell, comme les autres
 * pages de contenu.
 *
 * La langue du document suit le parcours : elle se résout ici, au seul
 * endroit qui puisse écrire l'attribut `lang` de la page.
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2F66E8',
};

export default async function ElearningLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const route = await resolveElearning(slug);
  const lang = route.kind === 'unknown' ? 'fr' : route.lang;

  return (
    <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Tajawal:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
