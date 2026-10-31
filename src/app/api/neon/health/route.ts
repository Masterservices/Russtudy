import { getPool } from "../../../../lib/neon/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Contrôle de bout en bout des services Neon. Ne renvoie aucun secret.
export async function GET() {
  const result: Record<string, unknown> = {};

  try {
    const { rows } = await getPool().query<{ now: Date; database: string }>(
      "SELECT now() AS now, current_database() AS database",
    );
    result.database = { ok: true, database: rows[0].database, serverTime: rows[0].now };
  } catch (error) {
    result.database = { ok: false, error: (error as Error).message };
  }

  const jwksUrl = process.env.NEON_AUTH_JWKS_URL;
  try {
    if (!jwksUrl) throw new Error("NEON_AUTH_JWKS_URL n'est pas défini.");
    const response = await fetch(jwksUrl, { cache: "no-store" });
    const body = (await response.json()) as { keys?: unknown[] };
    result.auth = { ok: response.ok && Array.isArray(body.keys), keys: body.keys?.length ?? 0 };
  } catch (error) {
    result.auth = { ok: false, error: (error as Error).message };
  }

  const ok = Object.values(result).every((service) => (service as { ok: boolean }).ok);
  return Response.json(result, { status: ok ? 200 : 503 });
}
