/**
 * Répétition espacée des expressions enregistrées.
 *
 * Une échelle, sept barreaux : une expression qu'on reconnaît monte
 * d'un barreau et revient plus tard ; une expression oubliée redescend
 * en bas. C'est le système de Leitner, sans coefficient ni réglage —
 * prévisible pour l'élève, qui peut lire son calendrier et comprendre
 * pourquoi une carte revient demain et une autre dans un mois.
 *
 * Tout est pur : l'heure courante est toujours passée en argument, ce
 * qui rend chaque fonction vérifiable sans horloge.
 */

const MINUTE = 60_000;
const DAY = 24 * 60 * MINUTE;

/** Délai avant la prochaine révision, barreau par barreau. */
export const SRS_STEPS: readonly number[] = [
  15 * MINUTE,
  1 * DAY,
  3 * DAY,
  7 * DAY,
  30 * DAY,
  90 * DAY,
  150 * DAY,
];

export const SRS_LAST_BOX = SRS_STEPS.length - 1;

/** Barreau à partir duquel une expression est tenue pour acquise. */
export const SRS_MASTERED_BOX = 4;

/**
 * Réponse de l'élève devant une carte.
 *
 * `hard` : pas reconnue — retour en bas de l'échelle.
 * `again` : reconnue avec peine — même délai une seconde fois.
 * `known` : reconnue — barreau suivant.
 */
export type SrsGrade = 'hard' | 'again' | 'known';

export interface SrsCard {
  /** Barreau courant, de 0 à SRS_LAST_BOX. */
  box: number;
  /** Échéance de la prochaine révision, en millisecondes. */
  due: number;
  /** Date d'enregistrement, en millisecondes. */
  added: number;
  reviews: number;
  /** Nombre de retours en bas de l'échelle. */
  lapses: number;
}

export function newCard(now: number): SrsCard {
  return { box: 0, due: now + SRS_STEPS[0], added: now, reviews: 0, lapses: 0 };
}

export function gradeCard(card: SrsCard, grade: SrsGrade, now: number): SrsCard {
  const box =
    grade === 'known' ? Math.min(card.box + 1, SRS_LAST_BOX) : grade === 'hard' ? 0 : card.box;

  return {
    ...card,
    box,
    due: now + SRS_STEPS[box],
    reviews: card.reviews + 1,
    lapses: card.lapses + (grade === 'hard' ? 1 : 0),
  };
}

export function isDue(card: SrsCard, now: number): boolean {
  return card.due <= now;
}

export function isMastered(card: SrsCard): boolean {
  return card.box >= SRS_MASTERED_BOX;
}

/**
 * Tranche d'échéance d'une carte, pour le calendrier.
 *
 * Les tranches suivent ce qu'un élève se demande vraiment : qu'ai-je à
 * faire maintenant, plus tard aujourd'hui, demain, cette semaine — et le
 * reste, qui n'appelle aucune action.
 */
export type DueBucket = 'now' | 'today' | 'tomorrow' | 'week' | 'later';

export const DUE_BUCKETS: readonly DueBucket[] = ['now', 'today', 'tomorrow', 'week', 'later'];

export function dueBucket(card: SrsCard, now: number): DueBucket {
  if (card.due <= now) return 'now';

  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  const endOfToday = midnight.getTime();

  if (card.due < endOfToday) return 'today';
  if (card.due < endOfToday + DAY) return 'tomorrow';
  if (card.due < endOfToday + 6 * DAY) return 'week';
  return 'later';
}
