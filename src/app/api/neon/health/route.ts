import { cookies } from "next/headers";
import { getAuth } from "../../../../lib/neon/auth";
import { getPool } from "../../../../lib/neon/db";
import { createDb } from "../../../../lib/neon/query";
import {
  deleteObject,
  getBucket,
  getObjectText,
  putObject,
  signedDownloadUrl,
} from "../../../../lib/neon/storage";

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

  // Aller-retour complet : écriture, lecture directe, lecture via lien signé, suppression.
  const key = `health/${Date.now()}.txt`;
  const payload = `ok ${key}`;
  try {
    await putObject(key, payload, "text/plain");
    const direct = await getObjectText(key);
    const signed = await fetch(await signedDownloadUrl(key, 60), { cache: "no-store" });
    const viaSignedUrl = signed.ok ? await signed.text() : `HTTP ${signed.status}`;
    await deleteObject(key);
    result.storage = { ok: direct === payload && viaSignedUrl === payload, bucket: getBucket() };
  } catch (error) {
    result.storage = { ok: false, error: (error as Error).message };
  }

  const ok = Object.values(result).every((service) => (service as { ok: boolean }).ok);

  // Diagnostic de connexion pour le navigateur qui appelle cette route : noms
  // de cookies et oui/non uniquement, jamais une valeur. Ajouté après le calcul
  // de `ok` : il décrit le visiteur, pas l'état des services.
  const session: Record<string, unknown> = {};
  try {
    const names = (await cookies()).getAll().map((cookie) => cookie.name);
    session.neonCookies = names.filter((name) => name.includes("neon-auth"));
    const auth = getAuth();
    if (!auth) {
      session.configured = false;
    } else {
      const { data, error } = await auth.getSession({ query: {} });
      session.getSession = {
        user: Boolean(data?.user),
        error: error ? { status: error.status, code: error.code, message: error.message } : null,
      };
      if (data?.user) {
        const { data: profile, error: profileError } = await createDb({ kind: "user", userId: data.user.id })
          .from("profiles")
          .select("id, role")
          .eq("id", data.user.id)
          .maybeSingle();
        session.profile = { found: Boolean(profile), role: profile?.role ?? null, error: profileError?.message ?? null };
      }
    }
  } catch (error) {
    session.error = (error as Error).message;
  }

  return Response.json({ ...result, session }, { status: ok ? 200 : 503 });
}
