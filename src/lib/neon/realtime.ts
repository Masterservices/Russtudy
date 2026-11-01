import 'server-only';

import { createRealtime, rawSql } from '@neon/realtime/server';

/**
 * Requêtes en direct (Neon Realtime, en bêta).
 *
 * La requête est définie et scellée ici, côté serveur : le navigateur reçoit une
 * capacité chiffrée qu'il peut suivre mais ni lire ni modifier. Le secret
 * `NEON_REALTIME_SECRET` ne quitte jamais le serveur (aucun préfixe `NEXT_PUBLIC_`).
 */

export interface LiveUpdate {
  id: string;
  message: string;
  created_at: Date;
}

/** Les vingt dernières annonces, de la plus récente à la plus ancienne. */
export function liveUpdatesQuery() {
  return rawSql<LiveUpdate>(
    `SELECT id, message, created_at FROM public.live_updates ORDER BY created_at DESC, id DESC LIMIT 20`,
  );
}

let server: ReturnType<typeof createRealtime> | undefined;

/** Serveur de scellement, créé à la demande (absent sans configuration : le build n'en a pas besoin). */
export function getRealtime() {
  const secret = process.env.NEON_REALTIME_SECRET;
  if (!secret) return null;
  if (!server) server = createRealtime({ secret, db: 'neondb' });
  return server;
}
