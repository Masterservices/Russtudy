'use client';

import { useState, useTransition } from 'react';
import { markLessonDone } from '../../features/app/elearning/actions';

/**
 * « Marquer comme terminée ».
 *
 * L'état initial vient du serveur : une leçon déjà terminée s'affiche
 * comme telle au chargement, sans attendre un clic. En cas d'échec
 * d'enregistrement, le bouton reste cliquable et le dit — cocher une
 * case qui n'a rien enregistré serait un mensonge poli.
 */
export default function MarkDoneButton({
  lessonId,
  blockCount,
  done,
  labels,
}: {
  lessonId: string;
  blockCount: number;
  done: boolean;
  labels: { markDone: string; doneLabel: string; failed: string };
}) {
  const [saved, setSaved] = useState(done);
  const [failed, setFailed] = useState(false);
  const [pending, startTransition] = useTransition();

  if (saved) {
    return (
      <p className="t-chip inline-flex items-center gap-2 text-[0.84rem] font-bold px-4 py-2 rounded-full">
        <span aria-hidden="true">✓</span>
        {labels.doneLabel}
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-2 items-start">
      <button
        type="button"
        disabled={pending}
        onClick={() =>
          startTransition(async () => {
            const result = await markLessonDone(lessonId, blockCount);
            setSaved(result.saved);
            setFailed(!result.saved);
          })
        }
        className="t-btn-light font-bold text-[0.86rem] px-5 py-2.5 rounded-full disabled:opacity-50"
      >
        {labels.markDone}
      </button>
      {failed && (
        <p role="alert" className="text-[0.82rem] opacity-70">
          {labels.failed}
        </p>
      )}
    </div>
  );
}
