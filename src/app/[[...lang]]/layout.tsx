import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import '../../index.css';

import { resolveRoute, allRouteParams } from './resolveRoute';
import { buildRouteMetadata } from './buildRouteMetadata';

export function generateStaticParams() {
  return allRouteParams();
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F0EBE3',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang?: string[] }>;
}): Promise<Metadata> {
  const { lang: segments } = await params;
  const route = resolveRoute(segments);
  return buildRouteMetadata(route);
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang?: string[] }>;
}) {
  const { lang: segments } = await params;
  const route = resolveRoute(segments);

  return (
    <html lang={route.lang} dir={route.lang === 'ar' ? 'rtl' : 'ltr'}>
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
