import { Pool, types } from "pg";
import { attachDatabasePool } from "@vercel/functions";

// Les valeurs reviennent de la base sous la forme qu'attendait le code écrit
// pour PostgREST : nombres JS pour int8/numeric, dates en ISO 8601.
types.setTypeParser(20, (value) => Number(value)); // int8
types.setTypeParser(1700, (value) => Number(value)); // numeric
types.setTypeParser(1184, (value) => new Date(value).toISOString()); // timestamptz
types.setTypeParser(1114, (value) => new Date(`${value.replace(" ", "T")}Z`).toISOString()); // timestamp

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
