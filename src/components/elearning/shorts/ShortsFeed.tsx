'use client';

import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type Ref,
} from 'react';
import Link from 'next/link';
import { ArrowRight, CalendarCheck, Flame, RotateCcw, Sparkles, X } from 'lucide-react';
import type { Short, ShortThemeId } from '../../../content/shorts/types';
import { buildFeed, type FeedItem } from '../../../features/app/elearning/shorts/feed';
import type { ShortsLabels } from '../../../features/app/elearning/shorts/labels';
import {
  answerQuiz,
  markSeen,
  recordSpeaking,
  removeCard,
  saveCard,
  streak,
  type ShortsProgress,
} from '../../../features/app/elearning/shorts/progress';
import {
  setPref,
  touchClock,
  updateProgress,
  type ShortsPrefs,
} from '../../../features/app/elearning/shorts/store';
import QuizSlide from './QuizSlide';
import ShortSheet, { type LessonLink } from './ShortSheet';
import ShortSlide from './ShortSlide';
import SpeakSheet from './SpeakSheet';
import type { ClipPlayer } from './clipPlayer';
import { usePlayback } from './usePlayback';

/** Ce que la coque peut demander au fil : avancer ou reculer d'un écran. */
export interface FeedHandle {
  go: (delta: number) => void;
}

type ThemeFilter = 'all' | ShortThemeId;
type Sheet = { kind: 'details' | 'speak'; id: string } | null;

const SLOW_RATE = 0.75;
const TOAST_MS = 2400;

function supportsRecording(): boolean {
  return (
    typeof window !== 'undefined' &&
    'MediaRecorder' in window &&
    Boolean(navigator.mediaDevices?.getUserMedia)
  );
}

/**
 * Le fil : un écran par short, que l'on fait défiler du pouce.
 *
 * Le défilement est celui du navigateur, aimanté écran par écran :
 * aucun geste n'est réécrit, donc l'inertie, la molette et le clavier
 * se comportent comme partout ailleurs. Le fil observe seulement quel
 * écran est en vue, et c'est ce short-là — lui seul — qui joue.
 */
export default function ShortsFeed({
  ref,
  course,
  targetLang,
  shorts,
  pool,
  themes,
  labels,
  player,
  progress,
  prefs,
  now,
  initialId,
  lessons,
  courseHref,
  onActive,
  onClose,
  onOpenReview,
  onOpenNotebook,
}: {
  ref?: Ref<FeedHandle>;
  course: string;
  targetLang: string;
  /** Shorts dans l'ordre « Pour vous », figé à l'ouverture du fil. */
  shorts: Short[];
  /** Tous les shorts du parcours, dans l'ordre du contenu. */
  pool: Short[];
  themes: { id: ShortThemeId; label: string }[];
  labels: ShortsLabels;
  player: ClipPlayer | null;
  progress: ShortsProgress;
  prefs: ShortsPrefs;
  now: number;
  /** Short sur lequel ouvrir le fil. */
  initialId: string | null;
  lessons: Record<string, LessonLink>;
  courseHref: string;
  onActive: (id: string) => void;
  onClose: () => void;
  onOpenReview: () => void;
  onOpenNotebook: () => void;
}) {
  const [theme, setTheme] = useState<ThemeFilter>('all');
  const [sheet, setSheet] = useState<Sheet>(null);
  const [revealedId, setRevealedId] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [canSpeak] = useState(supportsRecording);

  const items = useMemo<FeedItem[]>(
    () => buildFeed(theme === 'all' ? shorts : pool.filter((short) => short.theme === theme), pool),
    [theme, shorts, pool],
  );

  const [activeIndex, setActiveIndex] = useState(() => {
    if (!initialId) return 0;
    return Math.max(
      0,
      buildFeed(shorts, pool).findIndex((item) => item.kind === 'short' && item.short.id === initialId),
    );
  });

  const scroller = useRef<HTMLDivElement>(null);
  const toastTimer = useRef(0);
  const nextTimer = useRef(0);
  const preloader = useRef<HTMLAudioElement | null>(null);
  const startIndex = useRef(activeIndex);
  const itemsRef = useRef(items);

  const activeItem = items[Math.min(activeIndex, items.length - 1)];
  const activeShort = activeItem?.kind === 'short' ? activeItem.short : null;

  const ordinals = useMemo(() => {
    const map = new Map<string, number>();
    items.forEach((item) => {
      if (item.kind === 'short') map.set(item.key, map.size + 1);
    });
    return map;
  }, [items]);

  const go = useCallback((delta: number) => {
    const root = scroller.current;
    if (!root) return;
    const current = Math.round(root.scrollTop / root.clientHeight);
    root.scrollTo({ top: (current + delta) * root.clientHeight, behavior: 'smooth' });
  }, []);

  useImperativeHandle(ref, () => ({ go }), [go]);

  const onDone = useCallback(
    (id: string) => {
      updateProgress(course, (state) => markSeen(state, id, Date.now()));
      if (!prefs.autoNext) return;
      // Le temps de voir la barre arriver au bout, puis le short suivant
      // — sauf si l'élève est déjà parti ailleurs.
      window.clearTimeout(nextTimer.current);
      nextTimer.current = window.setTimeout(() => {
        const root = scroller.current;
        if (!root) return;
        const index = itemsRef.current.findIndex((item) => item.kind === 'short' && item.short.id === id);
        if (index !== -1 && Math.round(root.scrollTop / root.clientHeight) === index) go(1);
      }, 700);
    },
    [course, prefs.autoNext, go],
  );

  // Panneau ouvert, le short se tait ; à la fermeture, il reprend
  // depuis le début — on vient de lire son détail, on le réécoute.
  const playback = usePlayback({
    player,
    short: sheet ? null : activeShort,
    rate: prefs.slow ? SLOW_RATE : 1,
    onDone,
  });

  useEffect(() => {
    itemsRef.current = items;
  }, [items]);

  // Position de départ : posée avant le premier affichage, pour ne pas
  // montrer le premier short le temps d'un battement.
  useLayoutEffect(() => {
    const root = scroller.current;
    if (root && startIndex.current > 0) root.scrollTop = startIndex.current * root.clientHeight;
  }, []);

  useEffect(() => {
    const root = scroller.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.6) continue;
          const index = Number((entry.target as HTMLElement).dataset.index);
          setActiveIndex(index);
          const item = itemsRef.current[index];
          if (item?.kind === 'short') onActive(item.short.id);
        }
      },
      { root, threshold: 0.6 },
    );

    root.querySelectorAll('[data-index]').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [items, onActive]);

  // Le son du short suivant se charge pendant qu'on écoute celui-ci.
  useEffect(() => {
    const upcoming = items.slice(activeIndex + 1).find((item) => item.kind === 'short');
    if (!upcoming || upcoming.kind !== 'short') return;
    const element = preloader.current ?? new Audio();
    element.preload = 'auto';
    element.src = upcoming.short.audio;
    preloader.current = element;
  }, [items, activeIndex]);

  useEffect(() => {
    const timers = { toast: toastTimer, next: nextTimer };
    return () => {
      window.clearTimeout(timers.toast.current);
      window.clearTimeout(timers.next.current);
    };
  }, []);

  const showToast = useCallback((message: string) => {
    setToast(message);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), TOAST_MS);
  }, []);

  const save = useCallback(
    (id: string) => {
      const adding = !progress.cards[id];
      updateProgress(course, (state) =>
        state.cards[id] ? removeCard(state, id) : saveCard(state, id, Date.now()),
      );
      touchClock();
      if (adding) showToast(labels.savedToast);
    },
    [course, progress.cards, labels.savedToast, showToast],
  );

  const share = useCallback(
    async (id: string) => {
      const short = pool.find((each) => each.id === id);
      if (!short) return;
      const url = `${window.location.origin}/elearning/${course}/shorts?s=${id}`;
      const text = `${short.lines[0].text} — ${short.lines[0].translation}`;
      try {
        if (navigator.share) {
          await navigator.share({ title: text, text, url });
        } else {
          await navigator.clipboard.writeText(url);
          showToast(labels.linkCopied);
        }
      } catch {
        // Partage refermé sans choisir : rien à signaler.
      }
    },
    [pool, course, labels.linkCopied, showToast],
  );

  const { toggle, replay } = playback;

  const openDetails = useCallback((id: string) => setSheet({ kind: 'details', id }), []);
  const openSpeak = useCallback((id: string) => setSheet({ kind: 'speak', id }), []);
  const closeSheet = useCallback(() => setSheet(null), []);

  const toggleSlow = useCallback(() => setPref('slow', !prefs.slow), [prefs.slow]);

  const selectTheme = (next: ThemeFilter) => {
    setTheme(next);
    setActiveIndex(0);
    setRevealedId(null);
    scroller.current?.scrollTo({ top: 0 });
  };

  const hearQuiz = useCallback((short: Short) => player?.clip(short.audio), [player]);
  const answer = useCallback(
    (correct: boolean) => updateProgress(course, (state) => answerQuiz(state, correct, Date.now())),
    [course],
  );
  const recorded = useCallback(
    () => updateProgress(course, (state) => recordSpeaking(state, Date.now())),
    [course],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (sheet) return;
      const target = event.target as HTMLElement | null;
      if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return;

      if (['ArrowDown', 'PageDown', 'j'].includes(event.key)) {
        event.preventDefault();
        go(1);
      } else if (['ArrowUp', 'PageUp', 'k'].includes(event.key)) {
        event.preventDefault();
        go(-1);
      } else if (event.key === ' ' && target?.tagName !== 'BUTTON') {
        event.preventDefault();
        toggle();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [sheet, go, toggle]);

  const sheetShort = sheet ? pool.find((short) => short.id === sheet.id) ?? null : null;
  const days = streak(progress, now);
  const dueCount = Object.values(progress.cards).filter((card) => card.due <= now).length;

  return (
    <div className="relative h-full w-full bg-black">
      <div
        ref={scroller}
        className="rs-shorts-scroller h-full overflow-y-auto snap-y snap-mandatory overscroll-contain"
      >
        {items.map((item, index) => {
          const isActive = index === activeIndex && !sheet;

          return (
            <div key={item.key} data-index={index} className="h-full w-full snap-start snap-always">
              {item.kind === 'short' && (
                <ShortSlide
                  short={item.short}
                  ordinal={ordinals.get(item.key) ?? 1}
                  total={ordinals.size}
                  targetLang={targetLang}
                  active={isActive}
                  near={Math.abs(index - activeIndex) <= 1}
                  view={isActive ? playback.view : null}
                  revealed={
                    prefs.translationFirst ||
                    revealedId === item.short.id ||
                    (isActive ? playback.view.step >= 1 : false)
                  }
                  saved={Boolean(progress.cards[item.short.id])}
                  slow={prefs.slow}
                  showPron={prefs.pron}
                  canSpeak={canSpeak}
                  labels={labels}
                  progressRef={isActive ? playback.progressRef : null}
                  onToggle={toggle}
                  onReplay={replay}
                  onReveal={setRevealedId}
                  onSave={save}
                  onSlow={toggleSlow}
                  onSpeak={openSpeak}
                  onShare={share}
                  onDetails={openDetails}
                />
              )}

              {item.kind === 'quiz' && (
                <QuizSlide
                  short={item.short}
                  options={item.options}
                  answer={item.answer}
                  targetLang={targetLang}
                  labels={labels}
                  onHear={hearQuiz}
                  onAnswer={answer}
                />
              )}

              {item.kind === 'end' && (
                <section className="rs-short-quiz h-full w-full flex flex-col justify-center gap-5 px-6 pt-20 pb-8 text-white">
                  <Sparkles size={36} className="text-[var(--gold)]" />
                  <h2 className="t-display font-bold text-[1.9rem] tracking-[-0.03em] leading-[1.1]">
                    {labels.endTitle}
                  </h2>
                  <p className="text-[1rem] leading-[1.6] text-white/80">{labels.endText}</p>
                  <div className="flex flex-col gap-2.5 mt-2">
                    {dueCount > 0 && (
                      <button
                        type="button"
                        onClick={onOpenReview}
                        className="t-btn-primary inline-flex items-center justify-center gap-2 font-bold text-[0.95rem] px-5 py-3.5"
                      >
                        <CalendarCheck size={18} />
                        {labels.endReview}
                      </button>
                    )}
                    <Link
                      href={courseHref}
                      className="inline-flex items-center justify-center gap-2 font-bold text-[0.95rem] px-5 py-3.5 rounded-full bg-white text-[var(--ink)]"
                    >
                      {labels.endCourse}
                      <ArrowRight size={18} className="rtl:rotate-180" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => scroller.current?.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="inline-flex items-center justify-center gap-2 font-bold text-[0.92rem] px-5 py-3 rounded-full border border-white/35"
                    >
                      <RotateCcw size={16} />
                      {labels.endRestart}
                    </button>
                  </div>
                </section>
              )}
            </div>
          );
        })}
      </div>

      <div className="rs-short-topbar pointer-events-none absolute inset-x-0 top-0 z-[5] flex items-center gap-2 px-3 pt-[max(0.75rem,env(safe-area-inset-top))] pb-6">
        <button
          type="button"
          onClick={onClose}
          aria-label={labels.close}
          className="pointer-events-auto shrink-0 grid place-items-center w-10 h-10 rounded-full bg-black/45 backdrop-blur-sm text-white"
        >
          <X size={20} />
        </button>

        <div
          role="tablist"
          aria-label={labels.themes}
          className="rs-shorts-chips pointer-events-auto flex-1 min-w-0 flex items-center gap-4 overflow-x-auto px-1"
        >
          {[{ id: 'all' as ThemeFilter, label: labels.forYou }, ...themes].map((entry) => (
            <button
              key={entry.id}
              type="button"
              role="tab"
              aria-selected={theme === entry.id}
              onClick={() => selectTheme(entry.id)}
              className={`shrink-0 whitespace-nowrap text-[0.9rem] pb-1 border-b-2 drop-shadow transition-colors ${
                theme === entry.id
                  ? 'font-bold text-white border-white'
                  : 'font-semibold text-white/70 border-transparent'
              }`}
            >
              {entry.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={onOpenNotebook}
          aria-label={`${labels.streak} : ${days}`}
          className="pointer-events-auto shrink-0 inline-flex items-center gap-1 h-10 px-3 rounded-full bg-black/45 backdrop-blur-sm text-white font-bold text-[0.88rem]"
        >
          <Flame size={17} className={days > 0 ? 'text-[var(--orange)]' : 'text-white/60'} />
          {days}
        </button>
      </div>

      <div aria-live="polite" className="pointer-events-none absolute inset-x-0 top-[4.6rem] z-[6] flex justify-center px-4">
        {toast && (
          <p className="rs-short-toast bg-white text-[var(--ink)] font-semibold text-[0.84rem] leading-snug rounded-full px-4 py-2 shadow-lg text-center">
            {toast}
          </p>
        )}
      </div>

      {sheet?.kind === 'details' && sheetShort && (
        <ShortSheet
          short={sheetShort}
          targetLang={targetLang}
          labels={labels}
          player={player}
          saved={Boolean(progress.cards[sheetShort.id])}
          lesson={sheetShort.lesson ? lessons[sheetShort.lesson] ?? null : null}
          onSave={save}
          onClose={closeSheet}
        />
      )}

      {sheet?.kind === 'speak' && sheetShort && (
        <SpeakSheet
          short={sheetShort}
          targetLang={targetLang}
          labels={labels}
          player={player}
          onRecorded={recorded}
          onClose={closeSheet}
        />
      )}
    </div>
  );
}
