'use client';

import { useState, useTransition } from 'react';
import type { Lang } from '../../i18n';
import type { PublicExercise } from '../../features/app/elearning/public';
import { gradeExercise, type GradeResult } from '../../features/app/elearning/actions';

type State = Record<string, { chosen: string; result?: GradeResult }>;

/**
 * Exercices à choix multiple, aux couleurs du site.
 *
 * La correction part sur le serveur : la bonne réponse n'est ni dans le
 * HTML ni dans le JavaScript envoyé au navigateur. Un visiteur qui
 * ouvre les outils de développement ne trouve rien à lire.
 */
export default function ExerciseBoard({
  exercises,
  lang,
  labels,
}: {
  exercises: PublicExercise[];
  lang: Lang;
  labels: Record<string, string>;
}) {
  const [state, setState] = useState<State>({});
  const [pending, startTransition] = useTransition();

  function check(exerciseId: string) {
    const chosen = state[exerciseId]?.chosen;
    if (!chosen) return;
    startTransition(async () => {
      const result = await gradeExercise(exerciseId, chosen, lang);
      setState((s) => ({ ...s, [exerciseId]: { chosen, result } }));
    });
  }

  return (
    <ol className="flex flex-col gap-5 max-w-3xl">
      {exercises.map((exercise, idx) => {
        const options = exercise.options[lang] ?? exercise.options.ru ?? exercise.options.fr ?? [];
        const prompt = exercise.prompt[lang] ?? exercise.prompt.ru ?? exercise.prompt.fr ?? '';
        const current = state[exercise.id];
        const result = current?.result;

        return (
          <li key={exercise.id} className="t-card rounded-[20px] p-6">
            <p className="t-display font-bold text-[1.02rem] leading-[1.45] mb-4">
              {idx + 1}. {prompt}
            </p>

            <ul className="flex flex-col gap-2 mb-4">
              {options.map((option) => {
                const chosen = current?.chosen === option;
                return (
                  <li key={option}>
                    <button
                      type="button"
                      aria-pressed={chosen}
                      onClick={() =>
                        setState((s) => ({ ...s, [exercise.id]: { chosen: option } }))
                      }
                      className={`w-full text-start text-[0.95rem] leading-[1.5] px-4 py-3 rounded-[14px] border transition-colors ${
                        chosen
                          ? 'border-current font-semibold'
                          : 'border-black/10 dark:border-white/15 hover:border-current/40'
                      }`}
                    >
                      {option}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-3 flex-wrap">
              <button
                type="button"
                onClick={() => check(exercise.id)}
                disabled={!current?.chosen || pending}
                className="t-btn-primary font-bold text-[0.88rem] px-5 py-2.5 rounded-full disabled:opacity-40"
              >
                {labels.check}
              </button>

              {result && (
                <span
                  className={`text-[0.88rem] font-bold ${
                    result.correct ? 't-green-text' : 't-accent-text'
                  }`}
                >
                  {result.correct ? labels.correct : labels.incorrect}
                </span>
              )}
            </div>

            {result?.explanation && (
              <p className="text-[0.92rem] leading-[1.65] opacity-80 mt-3">{result.explanation}</p>
            )}
          </li>
        );
      })}
    </ol>
  );
}
