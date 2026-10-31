'use client';

import { useState, useTransition } from 'react';
import {
  grantAccess,
  revokeAccess,
  type AdminCourseOption,
  type EnrollmentRecord,
  type GrantResult,
} from '../../elearning/admin';

const ERROR_LABEL: Record<string, string> = {
  no_database: 'Base non connectée : aucun accès ne peut être ouvert.',
  user_not_found: 'Aucun compte avec cette adresse. L’étudiant doit s’être inscrit au préalable.',
  course_not_found: 'Parcours introuvable.',
  write_failed: 'Écriture refusée. Vérifiez que vous êtes bien connecté en administrateur.',
};

export default function AccessManager({
  courses,
  enrollments,
}: {
  courses: AdminCourseOption[];
  enrollments: EnrollmentRecord[];
}) {
  const [feedback, setFeedback] = useState<GrantResult | null>(null);
  const [pending, startTransition] = useTransition();

  function onSubmit(formData: FormData) {
    startTransition(async () => {
      setFeedback(await grantAccess(formData));
    });
  }

  function onRevoke(id: string) {
    startTransition(async () => {
      setFeedback(await revokeAccess(id));
    });
  }

  return (
    <>
      <form action={onSubmit} className="flex flex-col gap-3 mb-6">
        <label className="flex flex-col gap-1">
          <span className="text-[0.76rem] font-bold uppercase tracking-wide opacity-60">
            Adresse e-mail de l’étudiant
          </span>
          <input
            name="email"
            type="email"
            required
            placeholder="etudiant@exemple.com"
            className="rs-input rounded-[12px] px-3 py-2.5 text-[0.9rem]"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-[0.76rem] font-bold uppercase tracking-wide opacity-60">Parcours</span>
          <select name="courseId" required className="rs-input rounded-[12px] px-3 py-2.5 text-[0.9rem]">
            {courses.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-[0.76rem] font-bold uppercase tracking-wide opacity-60">
            Durée en mois — 0 pour un accès sans échéance
          </span>
          <input
            name="months"
            type="number"
            min={0}
            max={60}
            defaultValue={12}
            className="rs-input rounded-[12px] px-3 py-2.5 text-[0.9rem]"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-[0.76rem] font-bold uppercase tracking-wide opacity-60">
            Note interne — référence du paiement, par exemple
          </span>
          <input name="note" type="text" className="rs-input rounded-[12px] px-3 py-2.5 text-[0.9rem]" />
        </label>

        <button
          type="submit"
          disabled={pending || courses.length === 0}
          className="rs-btn-primary font-bold text-[0.88rem] px-5 py-3 rounded-full disabled:opacity-40 self-start"
        >
          Ouvrir l’accès
        </button>

        {feedback?.ok && <p className="text-[0.86rem] font-bold text-emerald-600">Accès enregistré.</p>}
        {feedback && !feedback.ok && (
          <p className="text-[0.86rem] font-bold text-amber-600">
            {ERROR_LABEL[feedback.error ?? ''] ?? 'Opération refusée.'}
          </p>
        )}
      </form>

      {enrollments.length === 0 ? (
        <p className="text-[0.88rem] opacity-60">Aucun accès ouvert pour l’instant.</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {enrollments.map((e) => (
            <li
              key={e.id}
              className="flex items-center justify-between gap-3 rounded-[14px] px-3 py-2.5 bg-black/[0.03] dark:bg-white/[0.06]"
            >
              <div className="min-w-0">
                <p className="font-semibold text-[0.9rem] truncate">{e.fullName}</p>
                <p className="text-[0.78rem] opacity-60 truncate">
                  {e.email} · {e.courseTitle}
                  {e.expiresAt ? ` · jusqu’au ${new Date(e.expiresAt).toLocaleDateString('fr-FR')}` : ' · sans échéance'}
                </p>
                {e.note && <p className="text-[0.74rem] opacity-50 truncate">{e.note}</p>}
              </div>

              {e.status === 'active' ? (
                <button
                  type="button"
                  onClick={() => onRevoke(e.id)}
                  disabled={pending}
                  className="text-[0.78rem] font-bold underline opacity-70 hover:opacity-100 shrink-0"
                >
                  Révoquer
                </button>
              ) : (
                <span className="rs-pill rs-pill-neutral text-[0.74rem] shrink-0">{e.status}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
