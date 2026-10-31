/**
 * Configuration Supabase.
 *
 * L'application doit pouvoir se construire et se déployer sans base branchée :
 * lorsque les variables sont absentes, `/app` bascule en mode démonstration
 * (jeu de données fictif, lecture seule) au lieu d'échouer au build.
 *
 * Deux noms de clé publique sont acceptés : `PUBLISHABLE_KEY` (format actuel
 * `sb_publishable_…`) et `ANON_KEY` (ancien JWT), pour que le projet reste
 * compatible avec les deux générations de clés Supabase.
 *
 * Les références aux variables `process.env.NEXT_PUBLIC_*` doivent rester
 * écrites en toutes lettres : Next.js les remplace statiquement à la
 * compilation, un accès dynamique renverrait `undefined` côté navigateur.
 */

export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';

export const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

export function isSupabaseConfigured(): boolean {
  return SUPABASE_URL.length > 0 && SUPABASE_ANON_KEY.length > 0;
}
