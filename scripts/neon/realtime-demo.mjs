// Preuve de fonctionnement de Neon Realtime : s'abonne à la requête des annonces en direct
// et affiche chaque changement reçu. À lancer pendant que l'on insère une ligne dans
// `public.live_updates` (éditeur SQL, outil MCP, ou `psql`).
//
//   NEON_REALTIME_URL=... NEON_REALTIME_SECRET=... node scripts/neon/realtime-demo.mjs [secondes]
//
// Abonnement « direct » (code serveur de confiance) : le script scelle lui-même la requête.
// Ne jamais remplir les paramètres d'un abonnement direct avec une entrée non fiable.
// Le secret n'est jamais affiché.
import { createRealtime, rawSql } from "@neon/realtime/server";

const url = process.env.NEON_REALTIME_URL;
const secret = process.env.NEON_REALTIME_SECRET;
if (!url || !secret) {
  console.error("NEON_REALTIME_URL et NEON_REALTIME_SECRET doivent être définis.");
  process.exit(1);
}

const seconds = Number(process.argv[2] ?? 60);
const realtime = createRealtime({ url, secret, db: "neondb" });

const query = rawSql(
  "SELECT id, message, created_at FROM public.live_updates ORDER BY created_at DESC, id DESC LIMIT 20",
);

const stamp = () => new Date().toISOString().slice(11, 23);

const subscription = await realtime.subscribe(query);

subscription.onStateChange((state) => console.log(`[${stamp()}] état : ${state.status}${state.error ? ` (${state.error.message})` : ""}`));
subscription.onChange((snapshot) => {
  const rows = snapshot.data ?? [];
  console.log(`[${stamp()}] ${rows.length} ligne(s) :`);
  for (const row of rows) console.log(`    - ${row.message}`);
});

setTimeout(() => {
  console.log(`[${stamp()}] fin de l'écoute`);
  subscription.unsubscribe();
  realtime.close();
}, seconds * 1000);
