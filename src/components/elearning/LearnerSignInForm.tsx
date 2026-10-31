'use client';

import { useActionState } from 'react';
import { signInLearner, type LearnerAuthState } from '../../features/app/elearning/actions';

const INITIAL: LearnerAuthState = {};

/**
 * Connexion à la plateforme de langue.
 *
 * Le champ caché `suivant` ramène à la page quittée : qui bute sur une
 * leçon réservée y revient une fois connecté, au lieu d'être déposé sur
 * le catalogue sans explication.
 */
export default function LearnerSignInForm({
  labels,
  next,
}: {
  labels: {
    email: string;
    password: string;
    submit: string;
    errors: Record<string, string>;
  };
  next?: string;
}) {
  const [state, formAction, pending] = useActionState(signInLearner, INITIAL);
  const message = state.error ? (labels.errors[state.error] ?? labels.errors.unavailable) : null;

  return (
    <form action={formAction} className="flex flex-col gap-4" noValidate>
      {next ? <input type="hidden" name="suivant" value={next} /> : null}

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-[0.84rem] font-semibold opacity-80">
          {labels.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          dir="ltr"
          className="rounded-[12px] px-4 py-3 text-[0.95rem] bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 outline-none focus-visible:ring-2 focus-visible:ring-current"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="password" className="text-[0.84rem] font-semibold opacity-80">
          {labels.password}
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          dir="ltr"
          className="rounded-[12px] px-4 py-3 text-[0.95rem] bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 outline-none focus-visible:ring-2 focus-visible:ring-current"
        />
      </div>

      {message && (
        <p
          role="alert"
          className="text-[0.86rem] leading-[1.5] rounded-[12px] px-4 py-3 bg-black/5 dark:bg-white/10"
        >
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="t-btn-primary font-bold text-[0.95rem] px-7 py-3.5 rounded-full disabled:opacity-50"
      >
        {labels.submit}
      </button>
    </form>
  );
}
