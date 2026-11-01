import { NextResponse, type NextRequest } from 'next/server';

const REDIRECT_COOKIE = 'rs_lang_redirected';

/**
 * Detection automatique (premiere visite de / uniquement) :
 * fr/ar/ru detectes tels quels, toute autre langue -> anglais.
 * Memorisee par cookie pour ne plus jamais rediriger ensuite -
 * / reste sinon strictement inchange (pas de redirection repetee).
 */
export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname !== '/' || request.cookies.has(REDIRECT_COOKIE)) {
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
  matcher: '/',
};
