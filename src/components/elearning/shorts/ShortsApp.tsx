'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowRight, CalendarCheck, ChevronDown, ChevronUp, Play, Search, X } from 'lucide-react';
import type { AppLang } from '../../../features/app/i18n';
import type { Short, ShortThemeId } from '../../../content/shorts/types';
import { forYouOrder } from '../../../features/app/elearning/shorts/feed';
import { fill, type ShortsLabels } from '../../../features/app/elearning/shorts/labels';
import { dueIds } from '../../../features/app/elearning/shorts/progress';
import {
  useNow,
  useShortsPrefs,
  useShortsProgress,
} from '../../../features/app/elearning/shorts/store';
import { ClipPlayer } from './clipPlayer';
import ShortsExplorer from './ShortsExplorer';
import ShortsFeed, { type FeedHandle } from './ShortsFeed';
import ShortsNotebook from './ShortsNotebook';
import ShortsReview from './ShortsReview';
import type { LessonLink } from './ShortSheet';
import ShortsTabBar, { type ShortsTab } from './ShortsTabBar';

/**
 * Les shorts d'un parcours : l'affiche dans la page, et l'application
 * qui s'ouvre par-dessus.
 *
 * Dans la page, il n'y a qu'une affiche — un bouton. Le fil n'y défile
 * pas : un défilement enfermé dans une boîte, au milieu d'une page qui
 * défile elle-même, se dispute le pouce avec elle. Le toucher ouvre le
 * fil en plein écran, et c'est aussi ce geste qui autorise le son :
 * aucun navigateur ne laisse une page parler avant qu'on l'ait touchée.
 *
 * Le bouton Retour du téléphone referme le fil au lieu de quitter la
 * page — c'est le geste que fait tout le monde sur une application.
 */
export default function ShortsApp({
  course,
  lang,
  targetLang,
  shorts,
  themes,
  labels,
  badge,
  initialShortId,
  initialTab,
  lessons,
  courseHref,
}: {
  course: string;
  lang: AppLang;
  targetLang: string;
  shorts: Short[];
  themes: { id: ShortThemeId; label: string }[];
  labels: ShortsLabels;
  /** Langue et niveau du parcours, tels qu'ils s'annoncent sur l'affiche. */
  badge: string;
  /** Short demandé par un lien partagé. */
  initialShortId: string | null;
  /** Vue demandée par le lien. */
  initialTab: ShortsTab | null;
  lessons: Record<string, LessonLink>;
  courseHref: string;
}) {
  const progress = useShortsProgress(course);
  const prefs = useShortsPrefs();
  const now = useNow();

  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<ShortsTab>('feed');
  const [player, setPlayer] = useState<ClipPlayer | null>(null);
  const [order, setOrder] = useState<Short[]>(shorts);
  const [resumeId, setResumeId] = useState<string | null>(null);

  const overlay = useRef<HTMLDivElement>(null);
  const launcher = useRef<HTMLButtonElement>(null);
  const feed = useRef<FeedHandle>(null);

  const poster = shorts.find((short) => short.id === initialShortId) ?? shorts[0];
  const dueCount = dueIds(progress, now).filter((id) => shorts.some((short) => short.id === id)).length;
  const saved = useMemo(() => new Set(Object.keys(progress.cards)), [progress.cards]);
  const hasPron = shorts.some((short) => short.pron);

  const launch = (target: ShortsTab) => {
    const ordered = forYouOrder(shorts, progress.seen);
    const start = shorts.find((short) => short.id === initialShortId) ?? ordered[0] ?? null;

    let current = player;
    if (!current) {
      current = new ClipPlayer();
      setPlayer(current);
    }
    // Un lecteur ne peut jouer de lui-même qu'après un premier appel
    // venu d'un geste. On l'amorce ici, sur la bonne piste : le fil
    // prendra la suite sans redemander de toucher l'écran.
    if (start) current.unlock(start.audio);

    setOrder(ordered);
    setResumeId(start?.id ?? null);
    setTab(target);
    setOpen(true);
    window.history.pushState({ rsShorts: true }, '');
  };

  const close = useCallback(() => {
    // L'ouverture a posé une entrée d'historique : la refermer passe
    // par elle, pour que Retour et la croix fassent la même chose.
    if ((window.history.state as { rsShorts?: boolean } | null)?.rsShorts) window.history.back();
    else setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;

    const node = overlay.current;
    const trigger = launcher.current;
    const onPop = () => setOpen(false);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !document.querySelector('[data-rs-sheet]')) close();
    };

    // Tout ce qui se trouve derrière le fil devient inerte : ni le
    // pouce ni le clavier ne doivent atteindre la page recouverte.
    const behind = Array.from(document.body.children).filter(
      (element): element is HTMLElement =>
        element instanceof HTMLElement && element !== node && !element.hasAttribute('inert'),
    );
    behind.forEach((element) => element.setAttribute('inert', ''));
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('popstate', onPop);
    window.addEventListener('keydown', onKey);
    node?.focus();

    return () => {
      window.removeEventListener('popstate', onPop);
      window.removeEventListener('keydown', onKey);
      behind.forEach((element) => element.removeAttribute('inert'));
      document.body.style.overflow = overflow;
      trigger?.focus();
    };
  }, [open, close]);

  const openShort = useCallback((id: string) => {
    setResumeId(id);
    setTab('feed');
  }, []);

  if (!poster) return null;

  return (
    <div className="flex flex-col gap-4">
      <button
        ref={launcher}
        type="button"
        onClick={() => launch(initialTab ?? 'feed')}
        className="group relative block w-full max-w-[360px] aspect-[4/5] sm:aspect-[9/14] rounded-[28px] overflow-hidden text-start text-white shadow-[0_24px_60px_rgba(10,10,10,0.28)] transition-transform duration-200 hover:-translate-y-1 active:translate-y-0"
        style={{ backgroundColor: poster.bg.color }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={poster.bg.src}
          alt=""
          width={576}
          height={1024}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <span aria-hidden="true" className="rs-short-veil absolute inset-0" />

        <span className="absolute top-4 start-4 text-[0.74rem] font-bold bg-white/18 backdrop-blur-sm rounded-full px-3 py-1.5">
          {badge}
        </span>

        <span aria-hidden="true" className="absolute inset-0 grid place-items-center">
          <span className="grid place-items-center w-[84px] h-[84px] rounded-full bg-[var(--accent)] text-[var(--accent-ink)] shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-transform duration-200 group-hover:scale-110">
            <Play size={36} fill="currentColor" className="ms-1.5" />
          </span>
        </span>

        <span className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-2.5 p-5">
          <span
            lang={targetLang}
            dir="ltr"
            className="font-bold text-[clamp(1.7rem,8vw,2.2rem)] leading-[1.1] tracking-[-0.02em]"
          >
            {poster.lines[0].text}
          </span>
          <span className="bg-white text-[var(--ink)] font-semibold text-[0.95rem] rounded-[14px] px-3 py-1">
            {poster.lines[0].translation}
          </span>
          <span className="inline-flex items-center gap-2 font-bold text-[0.98rem] mt-1.5">
            {labels.launch}
            <ArrowRight size={18} className="rtl:rotate-180" />
          </span>
        </span>
      </button>

      <div className="flex flex-wrap gap-2 max-w-[360px]">
        <button
          type="button"
          onClick={() => launch('review')}
          className="t-chip inline-flex items-center gap-2 font-bold text-[0.84rem] px-4 py-2"
        >
          <CalendarCheck size={16} />
          {dueCount > 0 ? fill(labels.launcherDue, dueCount) : labels.tabReview}
        </button>
        <button
          type="button"
          onClick={() => launch('explore')}
          className="t-chip inline-flex items-center gap-2 font-bold text-[0.84rem] px-4 py-2"
        >
          <Search size={16} />
          {labels.tabExplore}
        </button>
      </div>

      {open &&
        createPortal(
          <div
            ref={overlay}
            role="dialog"
            aria-modal="true"
            aria-label={`${labels.tabFeed} — ${badge}`}
            tabIndex={-1}
            className="rs-shorts-overlay fixed inset-x-0 top-0 h-[100dvh] z-[1000] bg-[#07060C] flex justify-center outline-none font-sans"
          >
            <div className="relative w-full max-w-[460px] h-full md:py-4">
              <div className="relative h-full flex flex-col md:rounded-[28px] overflow-hidden">
                <div className="relative flex-1 min-h-0">
                  {tab === 'feed' && (
                    <ShortsFeed
                      ref={feed}
                      course={course}
                      targetLang={targetLang}
                      shorts={order}
                      pool={shorts}
                      themes={themes}
                      labels={labels}
                      player={player}
                      progress={progress}
                      prefs={prefs}
                      now={now}
                      initialId={resumeId}
                      lessons={lessons}
                      courseHref={courseHref}
                      onActive={setResumeId}
                      onClose={close}
                      onOpenReview={() => setTab('review')}
                      onOpenNotebook={() => setTab('notebook')}
                    />
                  )}
                  {tab === 'explore' && (
                    <ShortsExplorer
                      shorts={shorts}
                      themes={themes}
                      labels={labels}
                      targetLang={targetLang}
                      player={player}
                      saved={saved}
                      onOpenShort={openShort}
                    />
                  )}
                  {tab === 'review' && (
                    <ShortsReview
                      course={course}
                      shorts={shorts}
                      labels={labels}
                      lang={lang}
                      targetLang={targetLang}
                      player={player}
                      progress={progress}
                      now={now}
                      onOpenShort={openShort}
                      onGoFeed={() => setTab('feed')}
                    />
                  )}
                  {tab === 'notebook' && (
                    <ShortsNotebook
                      course={course}
                      shorts={shorts}
                      labels={labels}
                      lang={lang}
                      targetLang={targetLang}
                      progress={progress}
                      prefs={prefs}
                      now={now}
                      hasPron={hasPron}
                      courseHref={courseHref}
                      courseLabel={labels.endCourse}
                      onOpenShort={openShort}
                    />
                  )}

                  {tab !== 'feed' && (
                    <button
                      type="button"
                      onClick={close}
                      aria-label={labels.close}
                      className="absolute top-[max(0.9rem,env(safe-area-inset-top))] end-4 z-[10] grid place-items-center w-10 h-10 rounded-full bg-black/8 text-[var(--ink)] hover:bg-black/12"
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>

                <ShortsTabBar tab={tab} due={dueCount} labels={labels} onChange={setTab} />
              </div>

              {tab === 'feed' && (
                <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 -end-16 flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => feed.current?.go(-1)}
                    aria-label={labels.previous}
                    className="grid place-items-center w-12 h-12 rounded-full bg-white/12 text-white hover:bg-white/22"
                  >
                    <ChevronUp size={24} />
                  </button>
                  <button
                    type="button"
                    onClick={() => feed.current?.go(1)}
                    aria-label={labels.next}
                    className="grid place-items-center w-12 h-12 rounded-full bg-white/12 text-white hover:bg-white/22"
                  >
                    <ChevronDown size={24} />
                  </button>
                </div>
              )}
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
