'use client';

import { useEffect, useState } from 'react';
import { Check, CircleHelp, Clapperboard, Volume2, X, type LucideIcon } from 'lucide-react';
import type { AppLang } from '../../../features/app/i18n';
import type { Short } from '../../../content/shorts/types';
import { formatDue, formatSpan } from '../../../features/app/elearning/shorts/format';
import { fill, type ShortsLabels } from '../../../features/app/elearning/shorts/labels';
import { dueIds, reviewCard, type ShortsProgress } from '../../../features/app/elearning/shorts/progress';
import {
  DUE_BUCKETS,
  SRS_LAST_BOX,
  SRS_STEPS,
  dueBucket,
  type DueBucket,
  type SrsCard,
  type SrsGrade,
} from '../../../features/app/elearning/shorts/srs';
import { touchClock, updateProgress } from '../../../features/app/elearning/shorts/store';
import type { ClipPlayer } from './clipPlayer';

const GRADES: { grade: SrsGrade; icon: LucideIcon; label: keyof ShortsLabels; tone: string }[] = [
  { grade: 'hard', icon: X, label: 'gradeHard', tone: 'border-[var(--red)] text-[var(--red)]' },
  { grade: 'again', icon: CircleHelp, label: 'gradeAgain', tone: 'border-[var(--orange)] text-[var(--orange)]' },
  { grade: 'known', icon: Check, label: 'gradeKnown', tone: 'border-[var(--green)] text-[var(--green)]' },
];

const BUCKET_LABEL: Record<DueBucket, keyof ShortsLabels> = {
  now: 'bucketNow',
  today: 'bucketToday',
  tomorrow: 'bucketTomorrow',
  week: 'bucketWeek',
  later: 'bucketLater',
};

/** Barreau où une réponse envoie la carte : le délai affiché sous le bouton en dépend. */
function nextBox(card: SrsCard, grade: SrsGrade): number {
  if (grade === 'hard') return 0;
  if (grade === 'again') return card.box;
  return Math.min(card.box + 1, SRS_LAST_BOX);
}

function ReviewCard({
  short,
  card,
  labels,
  lang,
  targetLang,
  player,
  onGrade,
  onContext,
}: {
  short: Short;
  card: SrsCard;
  labels: ShortsLabels;
  lang: AppLang;
  targetLang: string;
  player: ClipPlayer | null;
  onGrade: (grade: SrsGrade) => void;
  onContext: () => void;
}) {
  const [flipped, setFlipped] = useState(false);

  // La carte se présente à l'oreille d'abord : c'est la phrase entendue
  // qu'il faut reconnaître, pas seulement sa forme écrite.
  useEffect(() => {
    player?.clip(short.audio);
  }, [player, short]);

  return (
    <>
      <div className="t-card t-card-shadow rounded-[24px] overflow-hidden mb-4">
        <div className="relative h-[132px]" style={{ backgroundColor: short.bg.color }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={short.bg.src}
            alt=""
            width={576}
            height={1024}
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={() => player?.clip(short.audio)}
            aria-label={labels.listenAgain}
            className="absolute end-3 bottom-3 grid place-items-center w-11 h-11 rounded-full bg-black/60 text-white backdrop-blur-sm"
          >
            <Volume2 size={20} />
          </button>
        </div>

        <div className="px-5 py-5 text-center">
          <p
            lang={targetLang}
            dir="ltr"
            className="t-display font-bold text-[clamp(1.5rem,7vw,2rem)] leading-[1.15] tracking-[-0.02em]"
          >
            {short.lines[0].text}
          </p>
          {short.pron && (
            <p dir="ltr" className="text-[0.9rem] italic opacity-60 mt-1">
              « {short.pron} »
            </p>
          )}

          <div aria-live="polite">
            {flipped && (
              <div className="rs-short-reveal mt-4 pt-4 border-t border-black/10">
                <p className="font-bold text-[1.15rem] leading-snug">{short.lines[0].translation}</p>
                <p className="text-[0.92rem] leading-[1.55] opacity-75 mt-2">
                  <span lang={targetLang} dir="ltr" className="font-bold">
                    {short.key}
                  </span>{' '}
                  — {short.keyMeaning}
                </p>
                <p className="text-[0.88rem] leading-[1.55] opacity-65 mt-1.5">{short.note}</p>
                <button
                  type="button"
                  onClick={onContext}
                  className="t-btn-dark inline-flex items-center gap-2 font-bold text-[0.84rem] px-4 py-2.5 mt-4"
                >
                  <Clapperboard size={16} />
                  {labels.seeContext}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {flipped ? (
        <div className="grid grid-cols-3 gap-2.5">
          {GRADES.map(({ grade, icon: Icon, label, tone }) => (
            <button
              key={grade}
              type="button"
              onClick={() => onGrade(grade)}
              className="flex flex-col items-center gap-1.5 py-1"
            >
              <span className={`grid place-items-center w-14 h-14 rounded-full border-2 bg-[var(--surface)] ${tone}`}>
                <Icon size={26} strokeWidth={2.6} />
              </span>
              <span className="font-bold text-[0.84rem] leading-tight">{labels[label]}</span>
              <span className="text-[0.72rem] opacity-55 leading-none">
                {formatSpan(SRS_STEPS[nextBox(card, grade)], lang)}
              </span>
            </button>
          ))}
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setFlipped(true)}
          className="t-btn-primary w-full font-bold text-[0.98rem] px-5 py-4"
        >
          {labels.showAnswer}
        </button>
      )}
    </>
  );
}

/**
 * Réviser : les expressions enregistrées reviennent au bon moment.
 *
 * Une carte à la fois, et trois réponses. L'élève dit lui-même s'il
 * savait — la carte ne peut pas le deviner — et le calendrier, dessous,
 * montre ce que sa réponse a décidé : rien n'est caché de la mécanique.
 */
export default function ShortsReview({
  course,
  shorts,
  labels,
  lang,
  targetLang,
  player,
  progress,
  now,
  onOpenShort,
  onGoFeed,
}: {
  course: string;
  shorts: Short[];
  labels: ShortsLabels;
  lang: AppLang;
  targetLang: string;
  player: ClipPlayer | null;
  progress: ShortsProgress;
  now: number;
  onOpenShort: (id: string) => void;
  onGoFeed: () => void;
}) {
  const [reviewed, setReviewed] = useState(0);

  const byId = new Map(shorts.map((short) => [short.id, short]));
  // Une carte dont le short a été retiré du contenu ne se révise plus.
  const due = dueIds(progress, now).filter((id) => byId.has(id));
  const current = due[0] ? byId.get(due[0]) ?? null : null;

  const cards = Object.entries(progress.cards).filter(([id]) => byId.has(id));
  const upcoming = cards
    .map(([, card]) => card.due)
    .filter((time) => time > now)
    .sort((a, b) => a - b)[0];

  const total = reviewed + due.length;

  const grade = (value: SrsGrade) => {
    if (!current) return;
    updateProgress(course, (state) => reviewCard(state, current.id, value, Date.now()));
    touchClock();
    setReviewed((count) => count + 1);
  };

  return (
    <section className="h-full overflow-y-auto overscroll-contain bg-[var(--bg)] text-[var(--ink)] px-4 pt-[max(1.1rem,env(safe-area-inset-top))] pb-6">
      <h2 className="t-display font-bold text-[1.6rem] tracking-[-0.03em]">{labels.reviewTitle}</h2>

      {cards.length === 0 ? (
        <div className="t-card rounded-[22px] p-6 mt-4">
          <h3 className="t-display font-bold text-[1.15rem] mb-2">{labels.reviewEmptyTitle}</h3>
          <p className="text-[0.95rem] leading-[1.6] opacity-75 mb-5">{labels.reviewEmptyText}</p>
          <button type="button" onClick={onGoFeed} className="t-btn-primary font-bold text-[0.92rem] px-5 py-3">
            {labels.goToFeed}
          </button>
        </div>
      ) : (
        <>
          <p aria-live="polite" className="text-[0.88rem] font-semibold opacity-65 mt-1 mb-4">
            {fill(labels.dueNow, due.length)}
          </p>

          {current ? (
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="t-chip text-[0.78rem] font-bold px-3 py-1">
                  {reviewed + 1} / {total}
                </span>
                <div className="flex-1 h-1.5 rounded-full bg-[color-mix(in_srgb,var(--accent)_20%,transparent)] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[var(--accent)] transition-[width] duration-300"
                    style={{ width: `${(reviewed / total) * 100}%` }}
                  />
                </div>
              </div>
              <ReviewCard
                key={current.id}
                short={current}
                card={progress.cards[current.id]}
                labels={labels}
                lang={lang}
                targetLang={targetLang}
                player={player}
                onGrade={grade}
                onContext={() => onOpenShort(current.id)}
              />
            </div>
          ) : (
            <div className="t-card rounded-[22px] p-6 mb-8">
              <h3 className="t-display font-bold text-[1.15rem] mb-1.5">
                {reviewed > 0 ? labels.reviewDone : labels.reviewDoneText}
              </h3>
              {reviewed > 0 && <p className="text-[0.95rem] opacity-75">{labels.reviewDoneText}</p>}
              {upcoming && now > 0 && (
                <p className="text-[0.92rem] opacity-75 mt-2">
                  {labels.nextReview} : <strong>{formatDue(upcoming, now, lang)}</strong>
                </p>
              )}
              <button
                type="button"
                onClick={onGoFeed}
                className="t-btn-dark font-bold text-[0.88rem] px-5 py-2.5 mt-4"
              >
                {labels.goToFeed}
              </button>
            </div>
          )}

          <h3 className="t-display font-bold text-[1.1rem] tracking-[-0.02em] mb-4">{labels.calendarTitle}</h3>
          <ol className="relative ms-1.5 border-s-2 border-black/10 flex flex-col gap-4 ps-5 mb-8">
            {DUE_BUCKETS.map((bucket) => {
              const inBucket = cards
                .filter(([, card]) => dueBucket(card, now) === bucket)
                .sort(([, a], [, b]) => a.due - b.due);
              if (inBucket.length === 0) return null;

              return (
                <li key={bucket} className="relative">
                  <span
                    aria-hidden="true"
                    className={`absolute -start-[1.72rem] top-1 w-3 h-3 rounded-full ring-4 ring-[var(--bg)] ${
                      bucket === 'now' ? 'bg-[var(--accent)]' : 'bg-black/30'
                    }`}
                  />
                  <p className="font-bold text-[0.92rem]">
                    {labels[BUCKET_LABEL[bucket]]}
                    <span className="font-semibold opacity-55"> · {inBucket.length}</span>
                  </p>
                  <p lang={targetLang} dir="ltr" className="text-[0.86rem] opacity-70 truncate text-start">
                    {inBucket
                      .slice(0, 3)
                      .map(([id]) => byId.get(id)?.lines[0].text)
                      .join(' · ')}
                    {inBucket.length > 3 ? ' …' : ''}
                  </p>
                </li>
              );
            })}
          </ol>
        </>
      )}

      <h3 className="t-display font-bold text-[1.1rem] tracking-[-0.02em] mt-6 mb-2">{labels.ladderTitle}</h3>
      <p className="text-[0.86rem] leading-[1.55] opacity-65 mb-3">{labels.ladderHint}</p>
      <ol className="flex flex-wrap gap-1.5">
        {SRS_STEPS.map((step, index) => (
          <li key={step} className="t-chip text-[0.76rem] font-bold px-3 py-1">
            <span className="opacity-45 me-1">{index + 1}</span>
            {formatSpan(step, lang)}
          </li>
        ))}
      </ol>
    </section>
  );
}
