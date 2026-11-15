'use client';

import { useCallback, useSyncExternalStore } from 'react';
import { EMPTY_PROGRESS, parseProgress, type ShortsProgress } from './progress';

/**
 * Carnet de l'apprenant, tenu dans le navigateur.
 *
 * Un magasin minimal au lieu d'un état React : le fil, la révision et
 * le carnet lisent la même mémoire, et un onglet resté ouvert doit voir
 * ce qu'un autre vient d'enregistrer. `useSyncExternalStore` garantit
 * aussi que le premier rendu côté navigateur reprend l'état vide du
 * serveur, sans écart d'hydratation.
 */

const PREFIX = 'rs_shorts_';

const cache = new Map<string, ShortsProgress>();
const listeners = new Map<string, Set<() => void>>();

function read(course: string): ShortsProgress {
  const cached = cache.get(course);
  if (cached) return cached;

  let state = EMPTY_PROGRESS;
  try {
    state = parseProgress(window.localStorage.getItem(PREFIX + course));
  } catch {
    // Navigation privée ou stockage refusé : on repart d'un carnet vide.
  }
  cache.set(course, state);
  return state;
}

function emit(course: string): void {
  listeners.get(course)?.forEach((listener) => listener());
}

/** Applique un changement au carnet d'un parcours et le conserve. */
export function updateProgress(
  course: string,
  change: (state: ShortsProgress) => ShortsProgress,
): void {
  const current = read(course);
  const next = change(current);
  if (next === current) return;

  cache.set(course, next);
  try {
    window.localStorage.setItem(PREFIX + course, JSON.stringify(next));
  } catch {
    // Stockage plein : le carnet reste juste pour la durée de la visite.
  }
  emit(course);
}

function subscribe(course: string, listener: () => void): () => void {
  let set = listeners.get(course);
  if (!set) {
    set = new Set();
    listeners.set(course, set);
  }
  set.add(listener);

  const onStorage = (event: StorageEvent) => {
    if (event.key !== PREFIX + course) return;
    cache.delete(course);
    listener();
  };
  window.addEventListener('storage', onStorage);

  return () => {
    set.delete(listener);
    window.removeEventListener('storage', onStorage);
  };
}

export function useShortsProgress(course: string): ShortsProgress {
  const subscribeToCourse = useCallback(
    (listener: () => void) => subscribe(course, listener),
    [course],
  );
  return useSyncExternalStore(
    subscribeToCourse,
    () => read(course),
    () => EMPTY_PROGRESS,
  );
}

/* ---------- Préférences de lecture ---------- */

export interface ShortsPrefs {
  /** Lecture ralentie, pour détacher les syllabes. */
  slow: boolean;
  /** Passe au short suivant sans geste, une fois la phrase répétée. */
  autoNext: boolean;
  /** Montre la traduction dès la première écoute. */
  translationFirst: boolean;
  /** Affiche la prononciation approchée, quand le parcours en donne une. */
  pron: boolean;
}

const PREFS_KEY = 'rs_shorts_prefs';
const DEFAULT_PREFS: ShortsPrefs = { slow: false, autoNext: false, translationFirst: false, pron: true };

let prefs: ShortsPrefs | null = null;
const prefsListeners = new Set<() => void>();

function readPrefs(): ShortsPrefs {
  if (prefs) return prefs;
  prefs = DEFAULT_PREFS;
  try {
    const raw = window.localStorage.getItem(PREFS_KEY);
    if (raw) prefs = { ...DEFAULT_PREFS, ...(JSON.parse(raw) as Partial<ShortsPrefs>) };
  } catch {
    // Préférences illisibles : valeurs par défaut.
  }
  return prefs;
}

export function setPref<K extends keyof ShortsPrefs>(key: K, value: ShortsPrefs[K]): void {
  prefs = { ...readPrefs(), [key]: value };
  try {
    window.localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
  } catch {
    // Sans stockage, la préférence vaut pour la visite.
  }
  prefsListeners.forEach((listener) => listener());
}

function subscribePrefs(listener: () => void): () => void {
  prefsListeners.add(listener);
  return () => {
    prefsListeners.delete(listener);
  };
}

export function useShortsPrefs(): ShortsPrefs {
  return useSyncExternalStore(subscribePrefs, readPrefs, () => DEFAULT_PREFS);
}

/* ---------- Horloge ---------- */

/**
 * Heure courante, rafraîchie toutes les vingt secondes.
 *
 * Les échéances de révision dépendent de l'heure, et lire l'horloge
 * pendant un rendu le rendrait impur. L'heure passe donc par un magasin
 * qui ne change qu'à intervalle fixe : une carte due « dans 15 minutes »
 * apparaît d'elle-même, sans recharger la page.
 */
const TICK = 20_000;

let clock = 0;
let timer: number | null = null;
const clockListeners = new Set<() => void>();

function subscribeClock(listener: () => void): () => void {
  clockListeners.add(listener);
  if (timer === null) {
    timer = window.setInterval(() => {
      clock = Date.now();
      clockListeners.forEach((each) => each());
    }, TICK);
  }
  return () => {
    clockListeners.delete(listener);
    if (clockListeners.size === 0 && timer !== null) {
      window.clearInterval(timer);
      timer = null;
    }
  };
}

function readClock(): number {
  if (clock === 0) clock = Date.now();
  return clock;
}

/** Avance l'horloge tout de suite, après une action de l'élève. */
export function touchClock(): void {
  clock = Date.now();
  clockListeners.forEach((listener) => listener());
}

/** Heure courante en millisecondes ; 0 pendant le rendu serveur. */
export function useNow(): number {
  return useSyncExternalStore(subscribeClock, readClock, () => 0);
}
