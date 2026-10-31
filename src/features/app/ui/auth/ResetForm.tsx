'use client';

import { useActionState } from 'react';
import { requestPasswordReset, type AuthFormState } from '../../actions/auth';
import type { AppDictionary } from '../../i18n';
import SubmitButton from '../SubmitButton';

const INITIAL: AuthFormState & { sent?: boolean } = {};

export default function ResetForm({ t, confirmation }: { t: AppDictionary; confirmation: string }) {
  const [state, formAction] = useActionState(requestPasswordReset, INITIAL);
  const errors = t.auth.errors as Record<string, string>;

  if (state.sent) {
    return (
      <p role="status" className="text-[13px] text-[var(--rs-success)] bg-[var(--rs-success-soft)] rounded-xl px-3.5 py-3">
        {confirmation}
      </p>
    );
  }

  return (
    <form action={formAction} className="space-y-3.5" noValidate>
      <div>
        <label className="rs-label" htmlFor="email">{t.auth.email}</label>
        <input id="email" name="email" type="email" autoComplete="email" required className="rs-input" placeholder="moussa@gmail.com" />
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
