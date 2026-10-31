'use client';

import { useActionState } from 'react';
import { signUp, type AuthFormState } from '../../actions/auth';
import type { AppDictionary } from '../../i18n';
import SubmitButton from '../SubmitButton';

const INITIAL: AuthFormState = {};

export default function SignUpForm({ t }: { t: AppDictionary }) {
  const [state, formAction] = useActionState(signUp, INITIAL);
  const errors = t.auth.errors as Record<string, string>;
  const message = state.error ? errors[state.error] ?? errors.unavailable : null;

  // Confirmation d'adresse active : le compte existe mais aucune session n'a
  // été ouverte. Afficher l'invitation à consulter sa boîte plutôt que de
  // rediriger vers un espace inaccessible.
  if (state.sent) {
    return (
      <p role="status" className="text-[13px] leading-snug text-[var(--rs-success)] bg-[var(--rs-success-soft)] rounded-xl px-3.5 py-3">
        {t.auth.checkInbox}
      </p>
    );
  }

  return (
    <form action={formAction} className="space-y-3.5" noValidate>
      <div>
        <label className="rs-label" htmlFor="fullName">{t.auth.fullName}</label>
        <input id="fullName" name="fullName" type="text" autoComplete="name" required className="rs-input" placeholder="Moussa Diop" />
      </div>

      <div>
        <label className="rs-label" htmlFor="email">{t.auth.email}</label>
        <input id="email" name="email" type="email" autoComplete="email" required className="rs-input" placeholder="moussa@gmail.com" />
      </div>

      <div>
        <label className="rs-label" htmlFor="password">{t.auth.password}</label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          minLength={8}
          required
          className="rs-input"
          placeholder="••••••••"
          aria-describedby="password-hint"
        />
        <p id="password-hint" className="mt-1.5 text-[11px] text-[var(--rs-muted)]">{t.auth.passwordHint}</p>
      </div>

      {message ? (
        <p role="alert" className="text-[13px] text-[var(--rs-danger)] bg-[var(--rs-danger-soft)] rounded-xl px-3 py-2">
          {message}
        </p>
      ) : null}

      <SubmitButton>{t.auth.signUp}</SubmitButton>
    </form>
  );
}
