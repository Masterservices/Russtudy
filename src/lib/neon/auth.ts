import { createNeonAuth } from '@neon/auth/next/server';
import { isNeonConfigured } from './env';

type NeonAuth = ReturnType<typeof createNeonAuth>;

let instance: NeonAuth | undefined;

/**
 * Instance Neon Auth (Managed Better Auth) côté serveur, ou `null` quand les
 * variables d'environnement manquent : `/app` reste alors en mode démonstration.
 */
export function getAuth(): NeonAuth | null {
  if (!isNeonConfigured()) return null;
  if (!instance) {
    instance = createNeonAuth({
      baseUrl: process.env.NEON_AUTH_BASE_URL!,
      cookies: { secret: process.env.NEON_AUTH_COOKIE_SECRET! },
    });
  }
  return instance;
}
