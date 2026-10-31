#!/usr/bin/env node
/**
 * Génère les données d'un cours animé.
 *
 * Entrées, toutes deux dans le dossier de la leçon :
 *   lesson.json        — la leçon telle qu'elle est servie par la
 *                        plateforme (titres, lignes, narration, audio)
 *   mise-en-scene.json — la seule chose écrite à la main : la scène,
 *                        la palette, et ce que chaque chapitre règle
 *
 * Sortie : public/cours-anime/lecons/<cours>__<lecon>.js
 *
 * Rien du texte de la leçon n'est recopié ici : si la leçon change en
 * base, on régénère et le cours animé suit. Voir docs/COURS-ANIME.md.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const RACINE = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const LECONS = join(RACINE, 'supabase', 'seed', 'lessons');
const SORTIE = join(RACINE, 'public', 'cours-anime', 'lecons');

/** Libellés de l'interface, par langue d'affichage du parcours. */
const TEXTES = {
  fr: {
    ecouter: 'Écouter', pause: 'Pause', chapitre: 'Chapitre',
    precedent: 'Chapitre précédent', suivant: 'Chapitre suivant',
    texteIntegral: 'Texte intégral', fermer: 'Fermer',
    titrePanneau: 'Texte intégral',
    notePanneau: 'Tout ce qui est dit, à relire ou à imprimer.',
    progression: 'Progression de la narration',
  },
  ru: {
    ecouter: 'Слушать', pause: 'Пауза', chapitre: 'Глава',
    precedent: 'Предыдущая глава', suivant: 'Следующая глава',
    texteIntegral: 'Полный текст', fermer: 'Закрыть',
    titrePanneau: 'Полный текст',
    notePanneau: 'Всё, что звучит в уроке — чтобы перечитать или распечатать.',
    progression: 'Ход озвучивания',
  },
  en: {
    ecouter: 'Listen', pause: 'Pause', chapitre: 'Chapter',
    precedent: 'Previous chapter', suivant: 'Next chapter',
    texteIntegral: 'Full text', fermer: 'Close',
    titrePanneau: 'Full text',
    notePanneau: 'Everything that is said, to read again or to print.',
    progression: 'Narration progress',
  },
  ar: {
    ecouter: 'استمع', pause: 'إيقاف', chapitre: 'فصل',
    precedent: 'الفصل السابق', suivant: 'الفصل التالي',
    texteIntegral: 'النص الكامل', fermer: 'إغلاق',
    titrePanneau: 'النص الكامل',
    notePanneau: 'كل ما يُقال، لإعادة القراءة أو الطباعة.',
    progression: 'تقدم السرد',
  },
};

/** Palette par défaut : les couleurs de la marque, en registre nuit. */
const PALETTE = ['#2460E8', '#A855F7', '#FBBB21', '#EF4444', '#22C55E', '#F97316'];

function lire(chemin) {
  return JSON.parse(readFileSync(chemin, 'utf8'));
}

function pick(valeur, langue) {
  if (valeur == null) return '';
  if (typeof valeur === 'string') return valeur;
  return valeur[langue] ?? Object.values(valeur)[0] ?? '';
}

export function construire(cours, lecon) {
  const dossier = join(LECONS, cours, lecon);
  const donnees = lire(join(dossier, 'lesson.json'));
  const scene = lire(join(dossier, 'mise-en-scene.json'));
  const ui = scene.ui ?? donnees.ui_lang ?? 'fr';
  const palette = scene.palette ?? PALETTE;
  const blocs = donnees.blocks.filter((b) => b.kind === 'slide');
  const mises = scene.chapitres ?? [];

  if (mises.length && mises.length !== blocs.length) {
    throw new Error(
      `${cours}/${lecon} : ${blocs.length} diapositives mais ${mises.length} mises en scène.`,
    );
  }

  const chapitres = blocs.map((bloc, i) => {
    const m = mises[i] ?? {};
    return {
      n: i + 1,
      sur: m.sur ?? '',
      titre: bloc.title,
      lignes: bloc.lines ?? [],
      narration: bloc.narration ?? '',
      traduction: bloc.narration_translation ?? '',
      audio: bloc.audio ?? '',
      teinte: m.teinte ?? palette[i % palette.length],
      ...(m.params ? { params: m.params } : {}),
      ...(m.focus ? { focus: m.focus } : {}),
      ...(m.jetons ? { jetons: m.jetons } : {}),
    };
  });

  return {
    id: `${cours}/${lecon}`,
    scene: scene.scene,
    ui,
    langueNarration: scene.langueNarration ?? donnees.target_lang ?? 'fr',
    ...(scene.police ? { police: scene.police } : {}),
    titre: pick(donnees.title, ui),
    duree: donnees.duration_min ?? null,
    intro: scene.intro ?? {},
    ...(scene.config ? { config: scene.config } : {}),
    textes: TEXTES[ui] ?? TEXTES.fr,
    chapitres,
  };
}

function ecrire(cours, lecon) {
  const donnees = construire(cours, lecon);
  const nom = `${cours}__${lecon}.js`;
  const corps =
    '/* Fichier généré par scripts/cours-anime/generer.mjs — ne pas modifier à la main. */\n' +
    '(window.CoursAnimeLecons = window.CoursAnimeLecons || {})' +
    `[${JSON.stringify(donnees.id)}] = ${JSON.stringify(donnees, null, 1)};\n`;
  mkdirSync(SORTIE, { recursive: true });
  writeFileSync(join(SORTIE, nom), corps, 'utf8');
  return { nom, chapitres: donnees.chapitres.length, scene: donnees.scene };
}

function toutes() {
  const faits = [];
  for (const cours of readdirSync(LECONS)) {
    for (const lecon of readdirSync(join(LECONS, cours))) {
      if (existsSync(join(LECONS, cours, lecon, 'mise-en-scene.json'))) {
        faits.push({ cours, lecon });
      }
    }
  }
  return faits;
}

/**
 * Registre des leçons mises en scène, pour la plateforme.
 *
 * La page d'une leçon doit savoir, sans lire le disque, s'il existe
 * une version animée. Le registre est donc écrit ici, à côté des
 * données, et jamais tenu à la main.
 */
function ecrireRegistre() {
  const ids = toutes().map(({ cours, lecon }) => `${cours}/${lecon}`).sort();
  const corps =
    '// Fichier généré par scripts/cours-anime/generer.mjs — ne pas modifier à la main.\n\n' +
    '/** Leçons qui ont une version animée, par « cours/leçon ». */\n' +
    'export const COURS_ANIME: ReadonlySet<string> = new Set([\n' +
    ids.map((id) => `  ${JSON.stringify(id)},`).join('\n') +
    '\n]);\n';
  const dossier = join(RACINE, 'src', 'content', 'cours-anime');
  mkdirSync(dossier, { recursive: true });
  writeFileSync(join(dossier, 'registre.ts'), corps, 'utf8');
  return ids.length;
}

const args = process.argv.slice(2);
const cibles = args.length
  ? args.map((a) => {
      const [cours, lecon] = a.split('/');
      return { cours, lecon };
    })
  : toutes();

if (!cibles.length) {
  console.log('Aucune leçon mise en scène. Ajoutez un mise-en-scene.json à côté du lesson.json.');
}
for (const { cours, lecon } of cibles) {
  const r = ecrire(cours, lecon);
  console.log(`${r.nom.padEnd(44)} ${String(r.chapitres).padStart(2)} chapitres · scène « ${r.scene} »`);
}
console.log(`registre : ${ecrireRegistre()} leçon(s) animée(s)`);
