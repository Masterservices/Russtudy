'use client';

import Link from 'next/link';
import { ArrowRight, Flame, Trash2 } from 'lucide-react';
import type { AppLang } from '../../../features/app/i18n';
import type { Short } from '../../../content/shorts/types';
import {
  formatDay,
  formatDue,
  formatPercent,
  formatWeekday,
} from '../../../features/app/elearning/shorts/format';
import type { ShortsLabels } from '../../../features/app/elearning/shorts/labels';
import {
  DAILY_GOAL,
  lastWeek,
  masteredCount,
  removeCard,
  streak,
  todayXp,
  type ShortsProgress,
} from '../../../features/app/elearning/shorts/progress';
import { SRS_STEPS, isDue } from '../../../features/app/elearning/shorts/srs';
import { setPref, updateProgress, type ShortsPrefs } from '../../../features/app/elearning/shorts/store';

/** Hauteur de la plus haute barre du graphique de la semaine, en pixels. */
const BAR_MAX = 64;

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="flex items-center justify-between gap-4 w-full text-start py-3"
    >
      <span className="text-[0.95rem] font-semibold">{label}</span>
      <span
        aria-hidden="true"
        className={`relative shrink-0 w-11 h-6 rounded-full transition-colors ${
          checked ? 'bg-[var(--accent)]' : 'bg-black/20'
        }`}
      >
        <span
          className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-[inset-inline-start] ${
            checked ? 'start-[1.375rem]' : 'start-0.5'
          }`}
        />
      </span>
    </button>
  );
}

/**
 * Carnet : ce que l'élève a fait, et ce qu'il a gardé.
 *
 * Quatre chiffres, une série de jours, une semaine en barres. Rien de
 * plus : un tableau de bord qui en montre davantage flatte sans
 * informer. Le graphique ne porte qu'une couleur parce qu'il ne mesure
 * qu'une chose, et chaque valeur se lit aussi sans lui, dans la liste
 * que parcourt un lecteur d'écran.
 */
export default function ShortsNotebook({
  course,
  shorts,
  labels,
  lang,
  targetLang,
  progress,
  prefs,
  now,
  hasPron,
  courseHref,
  courseLabel,
  onOpenShort,
}: {
  course: string;
  shorts: Short[];
  labels: ShortsLabels;
  lang: AppLang;
  targetLang: string;
  progress: ShortsProgress;
  prefs: ShortsPrefs;
  now: number;
  /** Vrai si le parcours donne des prononciations approchées. */
  hasPron: boolean;
  courseHref: string;
  courseLabel: string;
  onOpenShort: (id: string) => void;
}) {
  const byId = new Map(shorts.map((short) => [short.id, short]));
  const saved = Object.entries(progress.cards)
    .filter(([id]) => byId.has(id))
    .sort(([, a], [, b]) => a.due - b.due);

  const seen = shorts.filter((short) => progress.seen[short.id]).length;
  const days = streak(progress, now);
  const today = todayXp(progress, now);
  const week = lastWeek(progress, now);
  const scale = Math.max(DAILY_GOAL, ...week.map((day) => day.xp));
  const quizRate = progress.quiz.total > 0 ? progress.quiz.right / progress.quiz.total : null;

  const tiles = [
    { label: labels.statSeen, value: `${seen} / ${shorts.length}` },
    { label: labels.statSaved, value: String(saved.length) },
    { label: labels.statMastered, value: String(masteredCount(progress)) },
    { label: labels.statQuiz, value: quizRate === null ? '—' : formatPercent(quizRate, lang) },
  ];

  return (
    <section className="h-full overflow-y-auto overscroll-contain bg-[var(--bg)] text-[var(--ink)] px-4 pt-[max(1.1rem,env(safe-area-inset-top))] pb-6">
      <h2 className="t-display font-bold text-[1.6rem] tracking-[-0.03em] mb-4">{labels.notebookTitle}</h2>

      <div className="t-card rounded-[22px] p-5 mb-3">
        <div className="flex items-center gap-4">
          <Flame
            size={44}
            aria-hidden="true"
            className={days > 0 ? 'text-[var(--orange)]' : 'opacity-25'}
          />
          <p>
            <span className="block font-bold text-[3.1rem] leading-none tracking-[-0.04em]">{days}</span>
            <span className="block text-[0.86rem] font-semibold opacity-65 mt-1">{labels.streak}</span>
          </p>
        </div>

        <div className="mt-5">
          <div className="flex items-baseline justify-between gap-3 mb-1.5">
            <span className="text-[0.86rem] font-semibold">{labels.todayGoal}</span>
            <span className="text-[0.84rem] opacity-65">
              {Math.min(today, DAILY_GOAL)} / {DAILY_GOAL} XP
            </span>
          </div>
          <div
            role="progressbar"
            aria-label={labels.todayGoal}
            aria-valuemin={0}
            aria-valuemax={DAILY_GOAL}
            aria-valuenow={Math.min(today, DAILY_GOAL)}
            className="h-2 rounded-full bg-[color-mix(in_srgb,var(--accent)_20%,transparent)] overflow-hidden"
          >
            <div
              className="h-full rounded-full bg-[var(--accent)]"
              style={{ width: `${Math.min(100, (today / DAILY_GOAL) * 100)}%` }}
            />
          </div>
        </div>
      </div>

      <div className="t-card rounded-[22px] p-5 mb-3">
        <h3 className="text-[0.86rem] font-semibold mb-4">{labels.weekTitle} · XP</h3>
        <div role="list" className="flex items-end justify-between gap-1 border-b border-black/12">
          {week.map((day) => (
            <div
              key={day.key}
              role="listitem"
              tabIndex={0}
              aria-label={`${formatDay(day.time, lang)} : ${day.xp} XP`}
              className="rs-week-day group relative flex-1 flex items-end justify-center outline-none"
              style={{ height: `${BAR_MAX}px` }}
            >
              <span
                aria-hidden="true"
                className="rs-week-tip pointer-events-none absolute bottom-full mb-1.5 z-[1] whitespace-nowrap rounded-[10px] bg-[var(--dark-bg)] text-white text-[0.72rem] px-2.5 py-1.5 leading-tight text-center"
              >
                <strong className="block text-[0.82rem]">{day.xp} XP</strong>
                {formatDay(day.time, lang)}
              </span>
              <span
                aria-hidden="true"
                className="block w-[18px] rounded-t-[4px] bg-[var(--accent)] group-hover:brightness-110 group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-[var(--ink)]"
                style={{ height: `${day.xp > 0 ? Math.max(3, (day.xp / scale) * BAR_MAX) : 0}px` }}
              />
            </div>
          ))}
        </div>
        <div aria-hidden="true" className="flex justify-between gap-1 mt-1.5">
          {week.map((day, index) => (
            <span
              key={day.key}
              className={`flex-1 text-center text-[0.72rem] ${
                index === week.length - 1 ? 'font-bold' : 'opacity-55'
              }`}
            >
              {formatWeekday(day.time, lang)}
            </span>
          ))}
        </div>
      </div>

      <dl className="grid grid-cols-2 gap-3 mb-3">
        {tiles.map((tile) => (
          // Le chiffre se lit avant son libellé, mais un <dl> veut le
          // terme en premier : l'ordre visuel est inversé, pas le balisage.
          <div key={tile.label} className="t-card rounded-[18px] px-4 py-3.5 flex flex-col-reverse gap-1.5">
            <dt className="text-[0.8rem] font-semibold opacity-60">{tile.label}</dt>
            <dd className="font-bold text-[1.55rem] leading-none tracking-[-0.03em]">{tile.value}</dd>
          </div>
        ))}
      </dl>

      <div className="t-card rounded-[22px] p-5 mb-6">
        <div className="flex items-baseline justify-between gap-3 mb-1.5">
          <h3 className="text-[0.86rem] font-semibold">{labels.progressTitle}</h3>
          <span className="text-[0.84rem] opacity-65">
            {formatPercent(shorts.length ? seen / shorts.length : 0, lang)}
          </span>
        </div>
        <div
          role="progressbar"
          aria-label={labels.progressTitle}
          aria-valuemin={0}
          aria-valuemax={shorts.length}
          aria-valuenow={seen}
          className="h-2 rounded-full bg-[color-mix(in_srgb,var(--accent)_20%,transparent)] overflow-hidden"
        >
          <div
            className="h-full rounded-full bg-[var(--accent)]"
            style={{ width: `${shorts.length ? (seen / shorts.length) * 100 : 0}%` }}
          />
        </div>
      </div>

      <h3 className="t-display font-bold text-[1.1rem] tracking-[-0.02em] mb-3">{labels.savedTitle}</h3>
      {saved.length === 0 ? (
        <p className="t-card rounded-[18px] p-5 text-[0.95rem] opacity-70 mb-6">{labels.savedEmpty}</p>
      ) : (
        <ul className="flex flex-col gap-2.5 mb-6">
          {saved.map(([id, card]) => {
            const short = byId.get(id);
            if (!short) return null;
            const due = isDue(card, now);

            return (
              <li key={id} className="t-card rounded-[18px] flex items-center gap-2 ps-4 pe-2 py-3">
                <button
                  type="button"
                  onClick={() => onOpenShort(id)}
                  className="min-w-0 flex-1 text-start"
                >
                  <span lang={targetLang} dir="ltr" className="block font-bold text-[1rem] truncate text-start">
                    {short.lines[0].text}
                  </span>
                  <span className="block text-[0.86rem] opacity-70 truncate">{short.lines[0].translation}</span>
                  <span className="flex items-center gap-2.5 mt-1.5">
                    <span aria-hidden="true" className="flex gap-[3px]">
                      {SRS_STEPS.map((step, index) => (
                        <span
                          key={step}
                          className={`w-2 h-2 rounded-full ${
                            index <= card.box
                              ? 'bg-[var(--accent)]'
                              : 'bg-[color-mix(in_srgb,var(--accent)_20%,transparent)]'
                          }`}
                        />
                      ))}
                    </span>
                    <span className="text-[0.74rem] font-semibold opacity-60">
                      {due ? labels.dueLabel : now > 0 ? formatDue(card.due, now, lang) : ''}
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => updateProgress(course, (state) => removeCard(state, id))}
                  aria-label={`${labels.remove} : ${short.lines[0].text}`}
                  className="shrink-0 grid place-items-center w-10 h-10 rounded-full opacity-55 hover:opacity-100 hover:bg-black/8"
                >
                  <Trash2 size={17} />
                </button>
              </li>
            );
          })}
        </ul>
      )}

      <h3 className="t-display font-bold text-[1.1rem] tracking-[-0.02em] mb-1">{labels.settingsTitle}</h3>
      <div className="t-card rounded-[18px] px-4 mb-6 divide-y divide-black/10">
        <Toggle
          label={labels.setAutoNext}
          checked={prefs.autoNext}
          onChange={(value) => setPref('autoNext', value)}
        />
        <Toggle
          label={labels.setTranslationFirst}
          checked={prefs.translationFirst}
          onChange={(value) => setPref('translationFirst', value)}
        />
        {hasPron && (
          <Toggle label={labels.setPron} checked={prefs.pron} onChange={(value) => setPref('pron', value)} />
        )}
      </div>

      <div className="flex flex-col gap-2.5 mb-5">
        <Link
          href={courseHref}
          className="t-btn-primary inline-flex items-center justify-center gap-2 font-bold text-[0.92rem] px-5 py-3.5"
        >
          {courseLabel}
          <ArrowRight size={18} className="rtl:rotate-180" />
        </Link>
        <Link
          href="/elearning/visio"
          className="t-btn-light inline-flex items-center justify-center font-bold text-[0.92rem] px-5 py-3"
        >
          {labels.visioCta}
        </Link>
      </div>

      <p className="text-[0.78rem] leading-[1.5] opacity-55">{labels.deviceNotice}</p>
    </section>
  );
}
