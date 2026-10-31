// Applique le schéma RusStudy sur une base Neon.
//
//   MIGRATION_DATABASE_URL=<url directe, sans -pooler> node scripts/neon/apply-migrations.mjs
//
// Ordre : neon/migrations/*.sql (couche de compatibilité), puis
// supabase/migrations/*.sql. Chaque fichier s'exécute dans sa propre
// transaction et n'est appliqué qu'une fois (table _migrations.applied).
// Transport WebSocket (port 443) : fonctionne même là où le port 5432 est fermé.
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { Pool, neonConfig } from "@neondatabase/serverless";
import WebSocket from "ws";

const url = process.env.MIGRATION_DATABASE_URL;
if (!url) {
  console.error("MIGRATION_DATABASE_URL n'est pas défini.");
  process.exit(1);
}

// Derrière un proxy HTTPS (environnements de build fermés), le WebSocket doit le traverser.
const proxy = process.env.HTTPS_PROXY || process.env.https_proxy;
if (proxy) {
  const { HttpsProxyAgent } = await import("https-proxy-agent");
  const agent = new HttpsProxyAgent(proxy);
  neonConfig.webSocketConstructor = class extends WebSocket {
    constructor(address, protocols) {
      super(address, protocols, { agent });
    }
  };
} else {
  neonConfig.webSocketConstructor = WebSocket;
}

// Ajustements limités et explicites des migrations Supabase.
const TRANSFORMS = [
  {
    // pg_net n'existe pas sur Neon : net.http_post est fourni par la couche de compatibilité.
    pattern: /^\s*create extension if not exists pg_net with schema extensions;\s*$/gim,
    replacement: "-- [neon] pg_net indisponible : net.http_post fourni par la couche de compatibilité.",
  },
];

const root = process.cwd();
const sources = ["neon/migrations", "supabase/migrations"].flatMap((dir) =>
  readdirSync(join(root, dir))
    .filter((file) => file.endsWith(".sql"))
    .sort()
    .map((file) => ({ name: `${dir}/${file}`, path: join(root, dir, file) })),
);

const pool = new Pool({ connectionString: url });
const client = await pool.connect();

try {
  await client.query(`
    create schema if not exists _migrations;
    create table if not exists _migrations.applied (
      name       text primary key,
      applied_at timestamptz not null default now()
    );
  `);
  const { rows } = await client.query("select name from _migrations.applied");
  const done = new Set(rows.map((row) => row.name));

  for (const { name, path } of sources) {
    if (done.has(name)) {
      console.log(`= ${name} (déjà appliquée)`);
      continue;
    }
    let sql = readFileSync(path, "utf8");
    for (const { pattern, replacement } of TRANSFORMS) sql = sql.replace(pattern, replacement);

    try {
      await client.query("begin");
      await client.query(sql);
      await client.query("insert into _migrations.applied (name) values ($1)", [name]);
      await client.query("commit");
      console.log(`+ ${name}`);
    } catch (error) {
      await client.query("rollback");
      console.error(`! ${name}\n  ${error.message}`);
      process.exitCode = 1;
      break;
    }
  }
} finally {
  client.release();
  await pool.end();
}
