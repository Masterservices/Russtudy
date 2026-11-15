import type { Short, ShortLine } from '../../../../content/shorts/types';

/**
 * Composition du fil.
 *
 * Fonctions pures : le même jeu de shorts donne toujours le même fil,
 * quiz compris. Un tirage au sort afficherait une question au serveur
 * et une autre dans le navigateur — et l'élève qui revient en arrière
 * ne retrouverait pas la question qu'il vient de manquer.
 */

export type FeedItem =
  | { kind: 'short'; key: string; short: Short }
  | { kind: 'quiz'; key: string; short: Short; options: string[]; answer: number }
  | { kind: 'end'; key: string };

/** Une vérification toutes les quatre expressions. */
const QUIZ_EVERY = 4;
const QUIZ_OPTIONS = 3;

function hash(text: string): number {
  let value = 0;
  for (let index = 0; index < text.length; index += 1) {
    value = (value * 31 + text.charCodeAt(index)) >>> 0;
  }
  return value;
}

function isDialogue(short: Short): boolean {
  return short.lines.length > 1;
}

/**
 * Question sur une expression : sa traduction, et deux autres tirées
 * du même parcours. Les leurres viennent d'expressions réelles, donc
 * plausibles, et jamais d'une traduction identique à la bonne réponse.
 */
function quizFor(short: Short, pool: Short[]): FeedItem | null {
  const answerText = short.lines[0].translation;
  const candidates = pool.filter(
    (other) => !isDialogue(other) && other.id !== short.id && other.lines[0].translation !== answerText,
  );
  if (candidates.length < QUIZ_OPTIONS - 1) return null;

  const seed = hash(short.id);
  const decoys: string[] = [];
  for (let step = 0; decoys.length < QUIZ_OPTIONS - 1 && step < candidates.length; step += 1) {
    const text = candidates[(seed + step * 7) % candidates.length].lines[0].translation;
    if (!decoys.includes(text)) decoys.push(text);
  }
  if (decoys.length < QUIZ_OPTIONS - 1) return null;

  const answer = seed % QUIZ_OPTIONS;
  const options = [...decoys];
  options.splice(answer, 0, answerText);

  return { kind: 'quiz', key: `quiz-${short.id}`, short, options, answer };
}

/**
 * Fil d'un jeu de shorts : les shorts, une vérification toutes les
 * quatre expressions, puis l'écran de fin.
 *
 * `pool` est le parcours entier : un fil filtré par thème pioche quand
 * même ses leurres dans toutes les expressions.
 */
export function buildFeed(shorts: Short[], pool: Short[]): FeedItem[] {
  const items: FeedItem[] = [];
  let block: Short[] = [];

  shorts.forEach((short) => {
    items.push({ kind: 'short', key: short.id, short });
    if (isDialogue(short)) return;

    block.push(short);
    if (block.length === QUIZ_EVERY) {
      const asked = block[hash(block[0].id) % block.length];
      const quiz = quizFor(asked, pool);
      if (quiz) items.push(quiz);
      block = [];
    }
  });

  if (shorts.length > 0) items.push({ kind: 'end', key: 'end' });
  return items;
}

/** Ordre « Pour vous » : ce qui n'a pas encore été écouté passe devant. */
export function forYouOrder(shorts: Short[], seen: Record<string, number>): Short[] {
  const fresh = shorts.filter((short) => !seen[short.id]);
  const known = shorts.filter((short) => seen[short.id]);
  return [...fresh, ...known];
}

/* ---------- Sous-titre mot à mot ---------- */

export interface WordSpan {
  text: string;
  /** Instant où le mot commence à être dit, en secondes. */
  start: number;
  /** Vrai si le mot fait partie de l'expression clé. */
  key: boolean;
}

const LETTER = /\p{L}/gu;
const WORD = /\S+/g;

/**
 * Mots d'une réplique, avec l'instant où chacun est prononcé.
 *
 * L'instant n'est pas relevé mot par mot : la durée de la réplique est
 * partagée au prorata du nombre de lettres. Sur une phrase de deux à
 * six mots dite d'un trait, l'écart reste sous le dixième de seconde.
 */
export function wordSpans(line: ShortLine, key: string): WordSpan[] {
  const keyStart = key ? line.text.indexOf(key) : -1;
  const keyEnd = keyStart === -1 ? -1 : keyStart + key.length;

  const words: { text: string; weight: number; key: boolean }[] = [];
  for (const match of line.text.matchAll(WORD)) {
    const text = match[0];
    const letters = text.match(LETTER)?.length ?? 0;
    const from = match.index ?? 0;
    const inKey = keyStart !== -1 && from < keyEnd && from + text.length > keyStart;

    // Un « ? » ou un « ! » isolé — la typographie française le détache —
    // reste collé au mot qui précède : il ne se prononce pas, et ne doit
    // pas passer seul à la ligne.
    if (letters === 0 && words.length > 0) {
      words[words.length - 1].text += ` ${text}`;
      continue;
    }
    words.push({ text, weight: letters + 1, key: inKey });
  }

  const total = words.reduce((sum, word) => sum + word.weight, 0) || 1;
  const span = Math.max(0, line.end - line.start);
  let cursor = line.start;

  return words.map((word) => {
    const start = cursor;
    cursor += (word.weight / total) * span;
    return { text: word.text, start, key: word.key };
  });
}

/* ---------- Recherche ---------- */

/** Forme de comparaison : sans casse, sans accents ni signes de vocalisation. */
export function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ًͯ-ْٰ]/g, '')
    .replace(/ё/g, 'е')
    .replace(/[’`]/g, "'")
    .trim();
}

export function matchesQuery(short: Short, query: string): boolean {
  const needle = normalize(query);
  if (!needle) return true;

  const haystack = [
    ...short.lines.flatMap((line) => [line.text, line.translation]),
    short.keyMeaning,
    short.pron ?? '',
    short.themeLabel,
  ];
  return haystack.some((text) => normalize(text).includes(needle));
}
