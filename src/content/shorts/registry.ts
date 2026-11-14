import type { Lang } from '../../i18n';
import { pick } from '../../features/app/elearning/types';
import { SHORT_AUDIO } from './audio.generated';
import { SHORT_BACKGROUNDS } from './fonds.generated';
import { FRANCAIS_A1_SHORTS } from './francais-a1';
import { RUSSE_A1_SHORTS } from './russe-a1';
import { SHORT_THEMES, themeLabel } from './themes';
import type { Short, ShortDeckSource, ShortLine, ShortThemeId } from './types';

/**
 * Registre des shorts, par parcours.
 *
 * Les shorts vivent dans le dépôt, pas en base : ce sont des extraits
 * ouverts à tous, servis en fichiers statiques, et une page de shorts
 * doit s'afficher même quand la base ne répond pas.
 */
const DECKS: Record<string, ShortDeckSource> = {
  [RUSSE_A1_SHORTS.courseSlug]: RUSSE_A1_SHORTS,
  [FRANCAIS_A1_SHORTS.courseSlug]: FRANCAIS_A1_SHORTS,
};

/** Segment d'URL réservé au fil : /elearning/<parcours>/shorts. */
export const SHORTS_SEGMENT = 'shorts';

export const SHORT_COURSE_SLUGS: readonly string[] = Object.keys(DECKS);

export function getShortDeck(courseSlug: string): ShortDeckSource | null {
  return DECKS[courseSlug] ?? null;
}

/**
 * Bornes de chaque réplique dans l'audio.
 *
 * Le script de découpe les mesure. Si le compte ne correspond pas — une
 * réplique ajoutée sans relancer le script —, la durée est partagée au
 * prorata de la longueur des répliques : le sous-titre reste lisible,
 * à peine moins bien calé.
 */
function lineBounds(texts: string[], duration: number, measured: [number, number][]): [number, number][] {
  if (measured.length === texts.length) return measured;

  const total = texts.reduce((sum, text) => sum + text.length, 0) || 1;
  let cursor = 0;
  return texts.map((text) => {
    const start = cursor;
    cursor += (text.length / total) * duration;
    return [start, cursor];
  });
}

/**
 * Shorts d'un parcours, dans une langue d'interface.
 *
 * Un short sans audio n'est pas servi : sans la voix, il ne resterait
 * qu'une carte de vocabulaire, et ce n'est pas ce que la page promet.
 */
export function resolveShorts(courseSlug: string, lang: Lang): Short[] {
  const deck = DECKS[courseSlug];
  if (!deck) return [];

  const shorts: Short[] = [];
  for (const source of deck.shorts) {
    const audio = SHORT_AUDIO[`${courseSlug}/${source.id}`];
    if (!audio) continue;

    const bounds = lineBounds(
      source.lines.map((line) => line.text),
      audio.duration,
      audio.lines,
    );

    const lines: ShortLine[] = source.lines.map((line, index) => ({
      text: line.text,
      translation: pick(line.translation, lang),
      start: bounds[index][0],
      end: bounds[index][1],
    }));

    shorts.push({
      id: source.id,
      theme: source.theme,
      themeLabel: themeLabel(source.theme, lang),
      lines,
      key: source.key,
      keyMeaning: pick(source.keyMeaning, lang),
      note: pick(source.note, lang),
      pron: source.pron ?? null,
      audio: audio.src,
      duration: audio.duration,
      bg: SHORT_BACKGROUNDS[source.bg],
      lesson: source.lesson ?? null,
    });
  }
  return shorts;
}

/** Thèmes réellement présents dans un jeu de shorts, dans l'ordre du filtre. */
export function themesOf(shorts: Short[], lang: Lang): { id: ShortThemeId; label: string }[] {
  const present = new Set(shorts.map((short) => short.theme));
  return SHORT_THEMES.filter((theme) => present.has(theme.id)).map((theme) => ({
    id: theme.id,
    label: theme.label[lang],
  }));
}
