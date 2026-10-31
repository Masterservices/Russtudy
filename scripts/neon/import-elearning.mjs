// Importe les parcours et leçons e-learning dans Neon : contenu en base, médias dans le stockage objet.
//
//   MIGRATION_DATABASE_URL=<url directe, sans -pooler> \
//   NEON_STORAGE_BUCKET=assets NEON_STORAGE_S3_ENDPOINT=... NEON_STORAGE_REGION=... \
//   NEON_STORAGE_ACCESS_KEY_ID=... NEON_STORAGE_SECRET_ACCESS_KEY=... \
//   node scripts/neon/import-elearning.mjs [--dry-run]
//
// Remplace `scripts/elearning/import_lesson.py` (Supabase). Idempotent : relancé, il met à jour
// les leçons au lieu d'en créer d'autres, et remplace leurs blocs et exercices.
//
// Ordre : parcours (`courses.sql`), leçons de `supabase/seed/lessons/<parcours>/<leçon>/`,
// puis modules et rattachement des leçons (`modules.sql`).
// Transport WebSocket (port 443) : fonctionne même là où le port 5432 est fermé.
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { extname, join } from "node:path";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { Pool, neonConfig } from "@neondatabase/serverless";
import WebSocket from "ws";

const dryRun = process.argv.includes("--dry-run");
const url = process.env.MIGRATION_DATABASE_URL;
if (!url) {
  console.error("MIGRATION_DATABASE_URL n'est pas défini.");
  process.exit(1);
}

const storageVars = [
  "NEON_STORAGE_BUCKET",
  "NEON_STORAGE_S3_ENDPOINT",
  "NEON_STORAGE_REGION",
  "NEON_STORAGE_ACCESS_KEY_ID",
  "NEON_STORAGE_SECRET_ACCESS_KEY",
];
const missing = storageVars.filter((name) => !process.env[name]);
if (missing.length > 0 && !dryRun) {
  console.error(`Variables de stockage manquantes : ${missing.join(", ")}`);
  process.exit(1);
}

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

const COURSE_ASSETS_PREFIX = "course-assets/";
const MIME = { ".webp": "image/webp", ".png": "image/png", ".jpg": "image/jpeg", ".mp3": "audio/mpeg" };

const seedDir = join(process.cwd(), "supabase", "seed");
const lessonsDir = join(seedDir, "lessons");

const storage = dryRun
  ? null
  : new S3Client({
      endpoint: process.env.NEON_STORAGE_S3_ENDPOINT,
      region: process.env.NEON_STORAGE_REGION,
      credentials: {
        accessKeyId: process.env.NEON_STORAGE_ACCESS_KEY_ID,
        secretAccessKey: process.env.NEON_STORAGE_SECRET_ACCESS_KEY,
      },
      forcePathStyle: true,
      requestChecksumCalculation: "WHEN_REQUIRED",
    });

async function upload(localPath, relativeKey) {
  const bytes = readFileSync(localPath);
  if (dryRun) return bytes.length;
  await storage.send(
    new PutObjectCommand({
      Bucket: process.env.NEON_STORAGE_BUCKET,
      Key: `${COURSE_ASSETS_PREFIX}${relativeKey}`,
      Body: bytes,
      ContentType: MIME[extname(localPath).toLowerCase()] ?? "application/octet-stream",
    }),
  );
  return bytes.length;
}

const pool = new Pool({ connectionString: url });
const client = await pool.connect();

/** Types des colonnes d'une table, pour sérialiser les jsonb et laisser passer les tableaux SQL. */
const typeCache = new Map();
async function columnTypes(table) {
  if (!typeCache.has(table)) {
    const { rows } = await client.query(
      "select column_name, udt_name from information_schema.columns where table_schema = 'public' and table_name = $1",
      [table],
    );
    typeCache.set(table, new Map(rows.map((row) => [row.column_name, row.udt_name])));
  }
  return typeCache.get(table);
}

async function insertRow(table, row) {
  const types = await columnTypes(table);
  const columns = Object.keys(row).filter((key) => row[key] !== undefined);
  for (const column of columns) {
    if (!types.has(column)) throw new Error(`Colonne inconnue ${table}.${column}`);
  }
  const values = columns.map((column) => {
    const value = row[column];
    if (value === null) return null;
    const udt = types.get(column);
    return udt === "jsonb" || udt === "json" ? JSON.stringify(value) : value;
  });
  const placeholders = columns.map((_, index) => `$${index + 1}`).join(", ");
  const sql = `insert into public.${table} (${columns.map((c) => `"${c}"`).join(", ")}) values (${placeholders}) returning id`;
  const { rows } = await client.query(sql, values);
  return rows[0]?.id;
}

try {
  await client.query("begin");

  console.log("Parcours…");
  if (!dryRun) await client.query(readFileSync(join(seedDir, "courses.sql"), "utf8"));

  let totalBytes = 0;
  let totalFiles = 0;

  for (const courseSlug of readdirSync(lessonsDir).sort()) {
    const courseDir = join(lessonsDir, courseSlug);
    if (!statSync(courseDir).isDirectory()) continue;

    const { rows: courses } = await client.query("select id from public.courses where slug = $1", [courseSlug]);
    if (!courses[0] && !dryRun) throw new Error(`Parcours « ${courseSlug} » introuvable après courses.sql.`);
    const courseId = courses[0]?.id;

    for (const lessonSlug of readdirSync(courseDir).sort()) {
      const lessonDir = join(courseDir, lessonSlug);
      const lessonFile = join(lessonDir, "lesson.json");
      if (!existsSync(lessonFile)) continue;

      const lesson = JSON.parse(readFileSync(lessonFile, "utf8"));
      const slug = lesson.slug;
      const ui = lesson.ui_lang ?? "fr";
      const spoken = lesson.target_lang ?? ui;

      console.log(`Leçon ${courseSlug}/${slug} : ${lesson.blocks?.length ?? 0} blocs, ${lesson.exercises?.length ?? 0} exercices`);

      let lessonId = null;
      if (!dryRun) {
        const { rows } = await client.query(
          `insert into public.lessons
             (course_id, slug, position, title, summary, objectives, is_free, duration_min, is_published, source_file)
           values ($1, $2, $3, $4, $5, $6, $7, $8, true, $9)
           on conflict (course_id, slug) do update set
             position = excluded.position, title = excluded.title, summary = excluded.summary,
             objectives = excluded.objectives, is_free = excluded.is_free,
             duration_min = excluded.duration_min, is_published = true, source_file = excluded.source_file
           returning id`,
          [
            courseId,
            slug,
            lesson.position ?? 0,
            JSON.stringify(lesson.title ?? {}),
            JSON.stringify(lesson.summary ?? {}),
            JSON.stringify(lesson.objectives ?? []),
            Boolean(lesson.is_free),
            lesson.duration_min ?? 10,
            lesson.source_file ?? null,
          ],
        );
        lessonId = rows[0].id;
        // Les blocs et exercices sont remplacés en bloc : une leçon corrigée ne garde pas d'anciennes diapositives.
        await client.query("delete from public.lesson_blocks where lesson_id = $1", [lessonId]);
        await client.query("delete from public.exercises where lesson_id = $1", [lessonId]);
      }

      for (const block of lesson.blocks ?? []) {
        const prefix = `${courseSlug}/${slug}`;
        let mediaPath = null;
        let audioPath = null;
        if (block.media) {
          totalBytes += await upload(join(lessonDir, block.media), `${prefix}/${block.media}`);
          totalFiles += 1;
          mediaPath = `${prefix}/${block.media}`;
        }
        if (block.audio) {
          totalBytes += await upload(join(lessonDir, block.audio), `${prefix}/${block.audio}`);
          totalFiles += 1;
          audioPath = `${prefix}/${block.audio}`;
        }

        // La voix off parle la langue enseignée ; la traduction suit la langue d'interface.
        const transcript = { [spoken]: block.narration ?? "" };
        if (block.narration_translation && ui !== spoken) transcript[ui] = block.narration_translation;

        if (!dryRun) {
          await insertRow("lesson_blocks", {
            lesson_id: lessonId,
            position: block.position ?? 0,
            kind: block.kind ?? "slide",
            content: { title: { [ui]: block.title ?? "" }, lines: { [ui]: block.lines ?? [] } },
            media_url: mediaPath,
            audio_url: audioPath,
            transcript,
          });
        }
      }

      if (!dryRun) {
        for (const exercise of lesson.exercises ?? []) {
          await insertRow("exercises", { ...exercise, lesson_id: lessonId });
        }
      }
    }
  }

  console.log("Modules et rattachement des leçons…");
  if (!dryRun) await client.query(readFileSync(join(seedDir, "modules.sql"), "utf8"));

  if (dryRun) {
    await client.query("rollback");
    console.log(`Simulation terminée : ${totalFiles} fichiers, ${(totalBytes / 1048576).toFixed(1)} Mo. Rien n'a été écrit.`);
  } else {
    await client.query("commit");
    console.log(`Terminé : ${totalFiles} fichiers déposés (${(totalBytes / 1048576).toFixed(1)} Mo), contenu en base.`);
  }
} catch (error) {
  await client.query("rollback").catch(() => {});
  console.error(`! ${error.message}`);
  process.exitCode = 1;
} finally {
  client.release();
  await pool.end();
}
