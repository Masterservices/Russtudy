import { NextResponse, type NextRequest } from 'next/server';
import { updateAppSession } from './lib/neon/proxy';

const REDIRECT_COOKIE = 'rs_lang_redirected';

/**
 * Signatures des robots connus (Googlebot, Bing, Yandex, réseaux sociaux, etc.).
 * Google déconseille explicitement toute redirection automatique basée sur la
 * langue perçue pour les crawlers : cela les empêche d'indexer l'URL canonique
 * (/) et génère des "Page with redirect" en Search Console à chaque passage
 * (les robots ne conservent pas de cookie entre deux requêtes). Les robots
 * reçoivent donc toujours la version française par défaut de /, avec un
 * statut 200 — seuls les vrais navigateurs profitent de la détection auto.
 */
const BOT_UA_PATTERN = /bot|crawl|spider|slurp|mediapartners|facebookexternalhit|whatsapp|telegrambot|discordbot|preview|headless|lighthouse|pagespeed|ahrefs|semrush|bingpreview/i;

/**
 * Detection automatique (premiere visite de / uniquement, hors robots) :
 * fr/ar/ru detectes tels quels, toute autre langue -> anglais.
 * Memorisee par cookie pour ne plus jamais rediriger ensuite -
 * / reste sinon strictement inchange (pas de redirection repetee).
 */
export async function proxy(request: NextRequest) {
  // Plateforme RusStudy : rafraîchissement de la session Neon Auth et garde
  // d'accès. Aucune interaction avec la détection de langue du site public.
  if (request.nextUrl.pathname.startsWith('/app')) {
    return updateAppSession(request);
  }

  const userAgent = request.headers.get('user-agent') ?? '';
  if (
    request.nextUrl.pathname !== '/' ||
    request.cookies.has(REDIRECT_COOKIE) ||
    BOT_UA_PATTERN.test(userAgent)
  ) {
    return NextResponse.next();
  }

  const preferred = (request.headers.get('accept-language') ?? '')
    .split(',')[0]
    ?.trim()
    .slice(0, 2)
    .toLowerCase();

  const target = preferred === 'fr' ? null : preferred === 'ar' ? '/ar' : preferred === 'ru' ? '/ru' : '/en';

  const response = target ? NextResponse.redirect(new URL(target, request.url)) : NextResponse.next();
  response.cookies.set(REDIRECT_COOKIE, '1', { maxAge: 60 * 60 * 24 * 365, path: '/' });
  return response;
}

export const config = {
  matcher: ['/', '/app/:path*'],
};
