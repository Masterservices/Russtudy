import { gradeCard, isDue, isMastered, newCard, type SrsCard, type SrsGrade } from './srs';

/**
 * Mémoire de l'apprenant dans les shorts d'un parcours.
 *
 * Elle tient dans le navigateur : regarder un short, enregistrer une
 * expression, réviser une carte doit marcher dès le premier écran, sans
 * compte. L'interface le dit — « enregistré sur cet appareil » — pour
 * ne pas promettre une synchronisation qui n'existe pas encore.
 *
 * Fonctions pures, comme `srs.ts` : l'état entre, l'état sort.
 */

export interface ShortsProgress {
  /** Version du format : à incrémenter si la forme change. */
  v: 1;
  /** Expressions enregistrées, par identifiant de short. */
  cards: Record<string, SrsCard>;
  /** Shorts écoutés jusqu'au bout, et combien de fois. */
  seen: Record<string, number>;
  xp: number;
  /** Points gagnés par jour (AAAA-MM-JJ, heure locale). */
  days: Record<string, number>;
  quiz: { right: number; total: number };
}

export const EMPTY_PROGRESS: ShortsProgress = {
  v: 1,
  cards: {},
  seen: {},
  xp: 0,
  days: {},
  quiz: { right: 0, total: 0 },
};

/** Points par action. Écouter rapporte peu, se souvenir rapporte plus. */
export const XP = {
  watch: 5,
  quiz: 10,
  speak: 5,
  review: { hard: 1, again: 2, known: 4 } satisfies Record<SrsGrade, number>,
} as const;

/** Points à gagner dans la journée pour remplir l'anneau. */
export const DAILY_GOAL = 30;

/** Jours conservés dans l'historique : assez pour la série et la semaine. */
const HISTORY_DAYS = 120;

export function dayKey(time: number): string {
  const date = new Date(time);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}

function award(state: ShortsProgress, points: number, now: number): ShortsProgress {
  const today = dayKey(now);
  const days = { ...state.days, [today]: (state.days[today] ?? 0) + points };

  const keys = Object.keys(days).sort();
  for (const stale of keys.slice(0, Math.max(0, keys.length - HISTORY_DAYS))) delete days[stale];

  return { ...state, xp: state.xp + points, days };
}

/** Short écouté jusqu'au bout. Les points ne viennent qu'à la première écoute. */
export function markSeen(state: ShortsProgress, id: string, now: number): ShortsProgress {
  const count = state.seen[id] ?? 0;
  const next = { ...state, seen: { ...state.seen, [id]: count + 1 } };
  return count === 0 ? award(next, XP.watch, now) : next;
}

export function saveCard(state: ShortsProgress, id: string, now: number): ShortsProgress {
  if (state.cards[id]) return state;
  return { ...state, cards: { ...state.cards, [id]: newCard(now) } };
}

export function removeCard(state: ShortsProgress, id: string): ShortsProgress {
  if (!state.cards[id]) return state;
  const cards = { ...state.cards };
  delete cards[id];
  return { ...state, cards };
}

export function reviewCard(
  state: ShortsProgress,
  id: string,
  grade: SrsGrade,
  now: number,
): ShortsProgress {
  const card = state.cards[id];
  if (!card) return state;
  const next = { ...state, cards: { ...state.cards, [id]: gradeCard(card, grade, now) } };
  return award(next, XP.review[grade], now);
}

export function answerQuiz(state: ShortsProgress, correct: boolean, now: number): ShortsProgress {
  const next = {
    ...state,
    quiz: { right: state.quiz.right + (correct ? 1 : 0), total: state.quiz.total + 1 },
  };
  return correct ? award(next, XP.quiz, now) : next;
}

export function recordSpeaking(state: ShortsProgress, now: number): ShortsProgress {
  return award(state, XP.speak, now);
}

/**
 * Jours d'affilée avec au moins une action.
 *
 * Une série ne tombe pas à minuit : tant que la journée d'hier compte,
 * elle tient encore, et l'élève a jusqu'au soir pour la prolonger.
 */
export function streak(state: ShortsProgress, now: number): number {
  const DAY = 86_400_000;
  let cursor = now;
  if (!state.days[dayKey(cursor)]) cursor -= DAY;

  let count = 0;
  while (state.days[dayKey(cursor)]) {
    count += 1;
    cursor -= DAY;
  }
  return count;
}

/** Points des sept derniers jours, du plus ancien à aujourd'hui. */
export function lastWeek(state: ShortsProgress, now: number): { key: string; xp: number; time: number }[] {
  const DAY = 86_400_000;
  return Array.from({ length: 7 }, (_, index) => {
    const time = now - (6 - index) * DAY;
    const key = dayKey(time);
    return { key, xp: state.days[key] ?? 0, time };
  });
}

export function todayXp(state: ShortsProgress, now: number): number {
  return state.days[dayKey(now)] ?? 0;
}

export function dueIds(state: ShortsProgress, now: number): string[] {
  return Object.entries(state.cards)
    .filter(([, card]) => isDue(card, now))
    .sort(([, a], [, b]) => a.due - b.due)
    .map(([id]) => id);
}

export function masteredCount(state: ShortsProgress): number {
  return Object.values(state.cards).filter(isMastered).length;
}

/** Relit un état stocké ; tout ce qui n'a pas la bonne forme est ignoré. */
export function parseProgress(raw: string | null): ShortsProgress {
  if (!raw) return EMPTY_PROGRESS;
  try {
    const data = JSON.parse(raw) as Partial<ShortsProgress> | null;
    if (!data || data.v !== 1) return EMPTY_PROGRESS;
    return {
      v: 1,
      cards: data.cards && typeof data.cards === 'object' ? data.cards : {},
      seen: data.seen && typeof data.seen === 'object' ? data.seen : {},
      xp: typeof data.xp === 'number' ? data.xp : 0,
      days: data.days && typeof data.days === 'object' ? data.days : {},
      quiz: {
        right: typeof data.quiz?.right === 'number' ? data.quiz.right : 0,
        total: typeof data.quiz?.total === 'number' ? data.quiz.total : 0,
      },
    };
  } catch {
    return EMPTY_PROGRESS;
  }
}
