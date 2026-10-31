'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { resetPassword, type AuthFormState } from '../../actions/auth';
import type { AppDictionary } from '../../i18n';
import SubmitButton from '../SubmitButton';

const INITIAL: AuthFormState = {};

/** Saisie du nouveau mot de passe, à partir du jeton du lien reçu par e-mail. */
export default function NewPasswordForm({ t, token }: { t: AppDictionary; token: string }) {
  const [state, formAction] = useActionState(resetPassword, INITIAL);
  const errors = t.auth.errors as Record<string, string>;

  if (state.done) {
    return (
      <div className="space-y-4">
        <p role="status" className="text-[13px] text-[var(--rs-success)] bg-[var(--rs-success-soft)] rounded-xl px-3.5 py-3">
          {t.auth.passwordUpdated}
        </p>
        <Link href="/app/connexion" className="rs-btn rs-btn-primary">
          {t.auth.signIn}
        </Link>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-3.5" noValidate>
      <input type="hidden" name="token" value={token} />

      <div>
        <label className="rs-label" htmlFor="password">{t.auth.newPassword}</label>
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

      {state.error ? (
        <p role="alert" className="text-[13px] text-[var(--rs-danger)] bg-[var(--rs-danger-soft)] rounded-xl px-3 py-2">
          {errors[state.error] ?? errors.unavailable}
        </p>
      ) : null}

      <SubmitButton>{t.common.send}</SubmitButton>
    </form>
  );
}
