import { NextResponse } from 'next/server';
import { getAuth } from '../../../../lib/neon/auth';

export const dynamic = 'force-dynamic';

/**
 * Proxy d'authentification Neon Auth : connexion, inscription, retour OAuth,
 * session, réinitialisation de mot de passe. Sans configuration (mode
 * démonstration), la route répond 503 plutôt que d'échouer au build.
 */
const unavailable = () => NextResponse.json({ error: 'auth_unavailable' }, { status: 503 });

function handlers() {
  const auth = getAuth();
  return auth ? auth.handler() : null;
}

export const GET = (request: Request, context: { params: Promise<{ path: string[] }> }) =>
  handlers()?.GET(request as never, context) ?? unavailable();
export const POST = (request: Request, context: { params: Promise<{ path: string[] }> }) =>
  handlers()?.POST(request as never, context) ?? unavailable();
export const PUT = (request: Request, context: { params: Promise<{ path: string[] }> }) =>
  handlers()?.PUT(request as never, context) ?? unavailable();
export const PATCH = (request: Request, context: { params: Promise<{ path: string[] }> }) =>
  handlers()?.PATCH(request as never, context) ?? unavailable();
export const DELETE = (request: Request, context: { params: Promise<{ path: string[] }> }) =>
  handlers()?.DELETE(request as never, context) ?? unavailable();
