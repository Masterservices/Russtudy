import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import '../../features/app/ui/app.css';

import { SITE } from '../../config/site';
import { dirFor } from '../../features/app/i18n';
import { resolveAppLang } from '../../features/app/i18n/server';
import NavDepthTracker from '../../features/app/ui/NavDepthTracker';

/**
 * Racine de la plateforme RusStudy.
 *
 * `/app` est un espace privé : il est explicitement désindexé (`noindex,
 * nofollow`) et exclu du sitemap. Le site public conserve sa propre racine
 * (`src/app/[[...lang]]/layout.tsx`) : les deux arbres sont indépendants,
 * aucune régression possible de l'un vers l'autre.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: 'RusStudy — Espace personnel',
    template: '%s · RusStudy',
  },
  description:
    "Plateforme RusStudy : suivi de dossier, documents, messagerie et paiements pour les étudiants, consultants et administrateurs de RussieEtudes.com.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
  alternates: { canonical: `${SITE.domain}/app` },
  applicationName: 'RusStudy',
  appleWebApp: { capable: true, title: 'RusStudy', statusBarStyle: 'black-translucent' },
  // Le manifeste est propre à `/app` : le site public n'est pas installable.
  manifest: '/app.webmanifest',
  icons: {
    icon: [{ url: '/icons/app-192.png', sizes: '192x192', type: 'image/png' }],
    apple: [{ url: '/icons/app-192.png', sizes: '192x192', type: 'image/png' }],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#5B2BD9',
};

export default async function AppRootLayout({ children }: { children: ReactNode }) {
  const lang = await resolveAppLang();

  return (
    <html lang={lang} dir={dirFor(lang)}>
      <body>
        <NavDepthTracker />
        {children}
      </body>
    </html>
  );
}
