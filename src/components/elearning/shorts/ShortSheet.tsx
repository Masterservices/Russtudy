'use client';

import Link from 'next/link';
import { ArrowRight, Bookmark, BookmarkCheck, Turtle, Volume2 } from 'lucide-react';
import type { Short } from '../../../content/shorts/types';
import type { ShortsLabels } from '../../../features/app/elearning/shorts/labels';
import BottomSheet from './BottomSheet';
import type { ClipPlayer } from './clipPlayer';

/** Destination du lien « contexte » d'une expression. */
export interface LessonLink {
  href: string;
  title: string;
  /** Faux quand la leçon demande un accès : le lien mène alors au programme. */
  open: boolean;
}

/**
 * Détail d'une expression.
 *
 * Ce que le short n'a pas la place de dire : le sens mot à mot, quand
 * l'employer, et la leçon du parcours qui l'explique. C'est le lien
 * entre le fil, qui fait entendre, et la leçon, qui fait comprendre.
 */
export default function ShortSheet({
  short,
  targetLang,
  labels,
  player,
  saved,
  lesson,
  onSave,
  onClose,
}: {
  short: Short;
  targetLang: string;
  labels: ShortsLabels;
  player: ClipPlayer | null;
  saved: boolean;
  lesson: LessonLink | null;
  onSave: (id: string) => void;
  onClose: () => void;
}) {
  return (
    <BottomSheet title={labels.keyExpression} closeLabel={labels.close} onClose={onClose}>
      <div className="t-card rounded-[20px] p-4 mb-4">
        <ul className="flex flex-col gap-2.5">
          {short.lines.map((line, index) => (
            <li key={`${line.text}-${index}`}>
              <p lang={targetLang} dir="ltr" className="font-bold text-[1.2rem] leading-snug text-start">
                {line.text}
              </p>
              <p className="text-[0.92rem] opacity-70">{line.translation}</p>
            </li>
          ))}
        </ul>
        {short.pron && (
          <p dir="ltr" className="text-[0.9rem] italic opacity-65 mt-2 text-start">
            « {short.pron} »
          </p>
        )}
        <div className="flex flex-wrap gap-2 mt-4">
          <button
            type="button"
            onClick={() => player?.clip(short.audio)}
            className="t-btn-dark inline-flex items-center gap-2 font-bold text-[0.84rem] px-4 py-2.5"
          >
            <Volume2 size={16} />
            {labels.listenAgain}
          </button>
          <button
            type="button"
            onClick={() => player?.clip(short.audio, 0.75)}
            className="t-btn-light inline-flex items-center gap-2 font-bold text-[0.84rem] px-4 py-2.5"
          >
            <Turtle size={16} />
            {labels.listenSlow}
          </button>
        </div>
      </div>

      <dl className="flex flex-col gap-4 mb-5">
        <div>
          <dt className="t-kicker text-[0.7rem] font-bold uppercase tracking-wide opacity-60 mb-1">
            {labels.meaning}
          </dt>
          <dd className="text-[0.98rem] leading-[1.55]">
            <span lang={targetLang} dir="ltr" className="font-bold">
              {short.key}
            </span>{' '}
            — {short.keyMeaning}
          </dd>
        </div>
        <div>
          <dt className="t-kicker text-[0.7rem] font-bold uppercase tracking-wide opacity-60 mb-1">
            {labels.usage}
          </dt>
          <dd className="text-[0.98rem] leading-[1.55]">{short.note}</dd>
        </div>
      </dl>

      <div className="flex flex-col gap-2.5">
        <button
          type="button"
          onClick={() => onSave(short.id)}
          aria-pressed={saved}
          className={`inline-flex items-center justify-center gap-2 font-bold text-[0.92rem] px-5 py-3.5 ${
            saved ? 't-btn-light' : 't-btn-primary'
          }`}
        >
          {saved ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
          {saved ? labels.saved : labels.save}
        </button>

        {lesson && (
          <Link
            href={lesson.href}
            className="t-card rounded-[18px] flex items-center justify-between gap-3 px-4 py-3.5 hover:opacity-85 transition-opacity"
          >
            <span className="min-w-0">
              <span className="block text-[0.72rem] font-bold uppercase tracking-wide opacity-55">
                {lesson.open ? labels.lessonLink : labels.courseLink}
              </span>
              <span className="block font-semibold text-[0.95rem] truncate">{lesson.title}</span>
            </span>
            <ArrowRight size={18} className="shrink-0 rtl:rotate-180" />
          </Link>
        )}
      </div>
    </BottomSheet>
  );
}
