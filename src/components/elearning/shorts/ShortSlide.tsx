'use client';

import { memo, useMemo, useRef, useState, type RefObject } from 'react';
import {
  Bookmark,
  BookmarkCheck,
  ChevronRight,
  ChevronUp,
  Lightbulb,
  Mic,
  Play,
  RotateCcw,
  Share2,
  Turtle,
} from 'lucide-react';
import type { Short } from '../../../content/shorts/types';
import { wordSpans, type WordSpan } from '../../../features/app/elearning/shorts/feed';
import type { ShortsLabels } from '../../../features/app/elearning/shorts/labels';
import type { PlaybackView } from './usePlayback';

/**
 * Un short, tel qu'il occupe l'écran.
 *
 * Trois couches : la photo, la phrase et ce qu'on en retient, et la
 * rangée d'actions. Toute la surface met en pause, comme sur un lecteur
 * vidéo ; deux touches rapprochées enregistrent l'expression.
 *
 * Le composant ne décide de rien : il reçoit l'état de la lecture et
 * rend ce qu'il faut. Hors écran, il ne reçoit pas d'état du tout, et
 * n'est donc pas redessiné pendant que le voisin joue.
 */

const DOUBLE_TAP_MS = 300;

/** Taille de la phrase : un mot seul s'affiche en très grand, une phrase longue doit tenir. */
function phraseSize(length: number): string {
  if (length <= 12) return 'text-[clamp(2.3rem,11.5vw,3.4rem)]';
  if (length <= 20) return 'text-[clamp(1.95rem,9.4vw,2.8rem)]';
  if (length <= 30) return 'text-[clamp(1.65rem,7.8vw,2.3rem)]';
  return 'text-[clamp(1.4rem,6.6vw,1.95rem)]';
}

function Words({ spans, read }: { spans: WordSpan[]; read: number }) {
  return (
    <>
      {spans.map((span, index) => (
        <span
          key={`${span.text}-${index}`}
          className={`rs-short-word ${index <= read ? 'is-read' : ''} ${span.key ? 'is-key' : ''}`}
        >
          {span.text}
          {index < spans.length - 1 ? ' ' : ''}
        </span>
      ))}
    </>
  );
}

function RailButton({
  label,
  pressed,
  onClick,
  children,
}: {
  label: string;
  pressed?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={pressed}
      className="pointer-events-auto flex flex-col items-center gap-1 text-white"
    >
      <span
        className={`grid place-items-center w-11 h-11 rounded-full transition-colors ${
          pressed ? 'bg-[var(--accent)] text-[var(--accent-ink)]' : 'bg-black/45 backdrop-blur-sm'
        }`}
      >
        {children}
      </span>
      <span className="text-[0.66rem] font-semibold leading-none drop-shadow">{label}</span>
    </button>
  );
}

function ShortSlideView({
  short,
  ordinal,
  total,
  targetLang,
  active,
  near,
  view,
  revealed,
  saved,
  slow,
  showPron,
  canSpeak,
  labels,
  progressRef,
  onToggle,
  onReplay,
  onReveal,
  onSave,
  onSlow,
  onSpeak,
  onShare,
  onDetails,
}: {
  short: Short;
  /** Rang du short dans le fil, à partir de 1. */
  ordinal: number;
  total: number;
  targetLang: string;
  active: boolean;
  /** Vrai à un écran de distance : la photo ne se charge qu'à l'approche. */
  near: boolean;
  /** État de la lecture ; `null` hors écran. */
  view: PlaybackView | null;
  revealed: boolean;
  saved: boolean;
  slow: boolean;
  showPron: boolean;
  canSpeak: boolean;
  labels: ShortsLabels;
  progressRef: RefObject<HTMLDivElement | null> | null;
  onToggle: () => void;
  onReplay: () => void;
  onReveal: (id: string) => void;
  onSave: (id: string) => void;
  onSlow: () => void;
  onSpeak: (id: string) => void;
  onShare: (id: string) => void;
  onDetails: (id: string) => void;
}) {
  const [burst, setBurst] = useState(0);
  const lastTap = useRef(0);

  const spans = useMemo(() => short.lines.map((line) => wordSpans(line, short.key)), [short]);
  const dialogue = short.lines.length > 1;

  // Hors lecture, la phrase est entièrement lisible : c'est aussi la
  // forme que reçoit un moteur de recherche.
  const currentLine = view ? view.line : short.lines.length - 1;
  const readWord = (line: number) => {
    if (!view) return spans[line].length - 1;
    if (line < view.line) return spans[line].length - 1;
    return line === view.line ? view.word : -1;
  };

  const status = view?.status ?? 'done';
  const step = view?.step ?? 5;
  const phase =
    step === 0 ? labels.phaseListen : step <= 2 ? labels.phaseAgain : step <= 4 ? labels.phaseYourTurn : '';

  const onTap = (event: React.MouseEvent) => {
    if (!active) return;
    if (event.timeStamp - lastTap.current < DOUBLE_TAP_MS) {
      // Seconde touche : on annule la pause que la première vient de
      // poser, et on enregistre l'expression.
      lastTap.current = 0;
      onToggle();
      if (!saved) onSave(short.id);
      setBurst((count) => count + 1);
      return;
    }
    lastTap.current = event.timeStamp;
    if (step === 5) onReplay();
    else onToggle();
  };

  return (
    <article
      aria-label={short.lines.map((line) => line.text).join(' ')}
      className="relative h-full w-full overflow-hidden text-white"
      style={{ backgroundColor: short.bg.color }}
    >
      {near && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={short.bg.src}
          alt=""
          width={576}
          height={1024}
          decoding="async"
          className={`rs-short-bg absolute inset-0 w-full h-full object-cover ${
            active && status === 'playing' ? 'is-running' : ''
          }`}
        />
      )}
      <div aria-hidden="true" className="rs-short-veil absolute inset-0" />

      {short.bg.credit && (
        <p className="absolute top-[4.4rem] start-4 end-16 text-[0.6rem] leading-tight text-white/55">
          {short.bg.credit}
        </p>
      )}

      <button
        type="button"
        onClick={onTap}
        aria-label={status === 'playing' ? labels.phaseListen : labels.replay}
        className="absolute inset-0 w-full h-full cursor-pointer"
      />

      {active && (status === 'paused' || status === 'blocked') && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid place-items-center">
          <span className="flex flex-col items-center gap-3">
            <span className="grid place-items-center w-[76px] h-[76px] rounded-full bg-black/55 backdrop-blur-sm">
              <Play size={34} fill="currentColor" className="ms-1" />
            </span>
            {status === 'blocked' && (
              <span className="text-[0.9rem] font-bold drop-shadow">{labels.tapToStart}</span>
            )}
          </span>
        </div>
      )}

      {burst > 0 && (
        <div
          key={burst}
          aria-hidden="true"
          className="rs-short-burst pointer-events-none absolute inset-0 grid place-items-center"
        >
          <BookmarkCheck size={96} strokeWidth={1.6} className="text-[var(--accent)] drop-shadow-lg" />
        </div>
      )}

      <div className="pointer-events-none absolute end-2.5 bottom-[7.2rem] z-[2] flex flex-col items-center gap-4">
        <RailButton label={saved ? labels.saved : labels.save} pressed={saved} onClick={() => onSave(short.id)}>
          {saved ? <BookmarkCheck size={21} /> : <Bookmark size={21} />}
        </RailButton>
        <RailButton label={labels.slow} pressed={slow} onClick={onSlow}>
          <Turtle size={21} />
        </RailButton>
        {canSpeak && !dialogue && (
          <RailButton label={labels.speak} onClick={() => onSpeak(short.id)}>
            <Mic size={21} />
          </RailButton>
        )}
        <RailButton label={labels.share} onClick={() => onShare(short.id)}>
          <Share2 size={20} />
        </RailButton>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] flex flex-col gap-3 ps-4 pe-[4.6rem] pb-4">
        <p className="self-start text-[0.7rem] font-bold uppercase tracking-[0.08em] bg-white/16 backdrop-blur-sm rounded-full px-3 py-1">
          {short.themeLabel} · {ordinal}/{total}
        </p>

        {dialogue ? (
          <ol className="flex flex-col gap-2">
            {short.lines.map((line, index) => (
              <li
                key={`${line.text}-${index}`}
                className={`rs-short-line ${index === currentLine ? 'is-current' : ''} ${
                  index < currentLine ? 'is-past' : ''
                }`}
              >
                <p lang={targetLang} dir="ltr" className="font-bold text-[1.14rem] leading-[1.25] text-start">
                  <Words spans={spans[index]} read={readWord(index)} />
                </p>
                {revealed && (
                  <p className="text-[0.8rem] leading-snug text-white/80">{line.translation}</p>
                )}
              </li>
            ))}
          </ol>
        ) : (
          <>
            <p
              lang={targetLang}
              dir="ltr"
              className={`font-bold leading-[1.12] tracking-[-0.02em] text-start ${phraseSize(
                short.lines[0].text.length,
              )}`}
            >
              <Words spans={spans[0]} read={readWord(0)} />
            </p>
            {showPron && short.pron && (
              <p dir="ltr" className="text-[0.92rem] italic text-white/75 text-start">
                « {short.pron} »
              </p>
            )}
          </>
        )}

        <div aria-live="polite" className="min-h-[2.4rem] flex items-start">
          {dialogue ? (
            !revealed && (
              <button
                type="button"
                onClick={() => onReveal(short.id)}
                className="pointer-events-auto text-[0.8rem] font-bold rounded-full border border-white/45 px-3.5 py-1.5"
              >
                {labels.showTranslation}
              </button>
            )
          ) : revealed ? (
            <p className="rs-short-reveal bg-white text-[var(--ink)] font-semibold text-[1rem] leading-snug rounded-[16px] px-3.5 py-1.5">
              {short.lines[0].translation}
            </p>
          ) : (
            <button
              type="button"
              onClick={() => onReveal(short.id)}
              className="pointer-events-auto text-[0.8rem] font-bold rounded-full border border-white/45 px-3.5 py-1.5"
            >
              {labels.showTranslation}
            </button>
          )}
        </div>

        <button
          type="button"
          onClick={() => onDetails(short.id)}
          className="pointer-events-auto flex items-center gap-3 w-full text-start bg-black/55 backdrop-blur-md border border-white/15 rounded-[18px] px-3.5 py-2.5"
        >
          <Lightbulb size={22} className="shrink-0 text-[var(--gold)]" />
          <span className="min-w-0 flex-1">
            <span className="block text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/65">
              {labels.keyExpression}
            </span>
            <span className="block text-[0.95rem] leading-snug">
              <span lang={targetLang} dir="ltr" className="font-bold">
                {short.key}
              </span>
              <span className="text-white/75"> — {short.keyMeaning}</span>
            </span>
          </span>
          <ChevronRight size={18} className="shrink-0 text-white/60 rtl:rotate-180" />
        </button>

        <div className="flex items-center gap-3 min-h-[1.25rem]">
          <div className="flex-1 h-[3px] rounded-full bg-white/25 overflow-hidden">
            <div
              ref={progressRef}
              className="h-full w-full origin-left rtl:origin-right rounded-full bg-white"
              style={{ transform: `scaleX(${active ? 0 : 1})` }}
            />
          </div>
          {active && step === 5 ? (
            <span className="flex items-center gap-1.5 text-[0.72rem] font-bold text-white/90">
              <RotateCcw size={13} />
              {labels.replay}
            </span>
          ) : (
            active && <span className="text-[0.72rem] font-bold text-white/90">{phase}</span>
          )}
        </div>
      </div>

      {active && step === 5 && (
        <div
          aria-hidden="true"
          className="rs-short-hint pointer-events-none absolute inset-x-0 top-[38%] flex flex-col items-center gap-1 text-white/85"
        >
          <ChevronUp size={30} />
          <span className="text-[0.78rem] font-bold drop-shadow">{labels.swipeHint}</span>
        </div>
      )}
    </article>
  );
}

const ShortSlide = memo(ShortSlideView);
export default ShortSlide;
