import { Pool } from "pg";
import { attachDatabasePool } from "@vercel/functions";

// Pool node-postgres partagé, utilisé uniquement côté serveur (routes API, server actions).
// DATABASE_URL pointe sur l'URL poolée (-pooler) : c'est le trafic applicatif normal.
// Les migrations doivent utiliser l'URL directe (sans -pooler).
let pool: Pool | undefined;

export function getPool(): Pool {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error("DATABASE_URL n'est pas défini.");
    }
    pool = new Pool({ connectionString, max: 5, connectionTimeoutMillis: 5000 });
    attachDatabasePool(pool);
  }
  return pool;
}
