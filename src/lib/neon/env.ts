/**
 * Configuration Neon.
 *
 * L'application doit pouvoir se construire et se déployer sans base branchée :
 * lorsque les variables sont absentes, `/app` bascule en mode démonstration
 * (jeu de données fictif, lecture seule) au lieu d'échouer au build.
 *
 * Trois variables sont nécessaires : `DATABASE_URL` (URL poolée), puis
 * `NEON_AUTH_BASE_URL` et `NEON_AUTH_COOKIE_SECRET` (32 caractères minimum).
 * Le stockage des pièces demande en plus les variables `NEON_STORAGE_*`.
 */
export function isNeonConfigured(): boolean {
  return Boolean(
    process.env.DATABASE_URL &&
      process.env.NEON_AUTH_BASE_URL &&
      (process.env.NEON_AUTH_COOKIE_SECRET ?? "").length >= 32,
  );
}

export function isStorageConfigured(): boolean {
  return Boolean(
    process.env.NEON_STORAGE_BUCKET &&
      process.env.NEON_STORAGE_S3_ENDPOINT &&
      process.env.NEON_STORAGE_REGION &&
      process.env.NEON_STORAGE_ACCESS_KEY_ID &&
      process.env.NEON_STORAGE_SECRET_ACCESS_KEY,
  );
}
