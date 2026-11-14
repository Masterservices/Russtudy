'use client';

import { memo, useState } from 'react';
import { Check, ChevronUp, Volume2, X } from 'lucide-react';
import type { Short } from '../../../content/shorts/types';
import type { ShortsLabels } from '../../../features/app/elearning/shorts/labels';
import { XP } from '../../../features/app/elearning/shorts/progress';

/**
 * Vérification intercalée dans le fil.
 *
 * Faire défiler ne prouve rien. Toutes les quatre expressions, le fil
 * s'arrête sur une question : la phrase vient d'être entendue, il faut
 * retrouver son sens. Se tromper ne coûte rien — la bonne réponse
 * s'affiche, et l'expression reste à portée, un geste plus haut.
 */
function QuizSlideView({
  short,
  options,
  answer,
  targetLang,
  labels,
  onHear,
  onAnswer,
}: {
  short: Short;
  options: string[];
  /** Position de la bonne réponse dans `options`. */
  answer: number;
  targetLang: string;
  labels: ShortsLabels;
  onHear: (short: Short) => void;
  onAnswer: (correct: boolean) => void;
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const answered = picked !== null;
  const correct = picked === answer;

  const choose = (index: number) => {
    if (answered) return;
    setPicked(index);
    onAnswer(index === answer);
  };

  return (
    <section
      aria-label={labels.quizTitle}
      className="rs-short-quiz relative h-full w-full overflow-hidden text-white flex flex-col justify-center gap-6 px-5 pt-20 pb-8"
    >
      <p className="self-start text-[0.7rem] font-bold uppercase tracking-[0.08em] bg-white/14 rounded-full px-3 py-1">
        {labels.quizTitle} · +{XP.quiz} XP
      </p>

      <div>
        <p className="text-[0.95rem] text-white/75 mb-3">{labels.quizQuestion}</p>
        <div className="flex items-center gap-3">
          <p
            lang={targetLang}
            dir="ltr"
            className="font-bold text-[clamp(1.7rem,8vw,2.4rem)] leading-[1.15] tracking-[-0.02em] text-start"
          >
            {short.lines[0].text}
          </p>
          <button
            type="button"
            onClick={() => onHear(short)}
            aria-label={labels.quizHear}
            className="shrink-0 grid place-items-center w-11 h-11 rounded-full bg-white/14"
          >
            <Volume2 size={20} />
          </button>
        </div>
      </div>

      <ul className="flex flex-col gap-2.5">
        {options.map((option, index) => {
          const isAnswer = index === answer;
          const isPicked = index === picked;
          const tone = !answered
            ? 'bg-white/10 border-white/20'
            : isAnswer
              ? 'bg-[var(--green)] border-[var(--green)] text-[var(--ink)]'
              : isPicked
                ? 'bg-[var(--red)] border-[var(--red)]'
                : 'bg-white/5 border-white/10 opacity-60';

          return (
            <li key={option}>
              <button
                type="button"
                onClick={() => choose(index)}
                disabled={answered}
                className={`flex items-center justify-between gap-3 w-full text-start font-semibold text-[1rem] leading-snug rounded-[18px] border px-4 py-3.5 transition-colors ${tone}`}
              >
                <span>{option}</span>
                {answered && isAnswer && <Check size={20} className="shrink-0" />}
                {answered && isPicked && !isAnswer && <X size={20} className="shrink-0" />}
              </button>
            </li>
          );
        })}
      </ul>

      <div aria-live="polite" className="min-h-[3.4rem]">
        {answered && (
          <p className="text-[0.95rem] leading-snug">
            {correct ? (
              <span className="font-bold text-[var(--green)]">
                {labels.quizRight} · +{XP.quiz} XP
              </span>
            ) : (
              <>
                <span className="text-white/75">{labels.quizWrong}</span>{' '}
                <span className="font-bold">{options[answer]}</span>
              </>
            )}
          </p>
        )}
      </div>

      {answered && (
        <div
          aria-hidden="true"
          className="rs-short-hint pointer-events-none flex flex-col items-center gap-1 text-white/85"
        >
          <ChevronUp size={28} />
          <span className="text-[0.78rem] font-bold">{labels.swipeHint}</span>
        </div>
      )}
    </section>
  );
}

const QuizSlide = memo(QuizSlideView);
export default QuizSlide;
