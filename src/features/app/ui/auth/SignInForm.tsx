'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { signIn, type AuthFormState } from '../../actions/auth';
import type { AppDictionary } from '../../i18n';
import SubmitButton from '../SubmitButton';

const INITIAL: AuthFormState = {};

export default function SignInForm({ t, next }: { t: AppDictionary; next?: string }) {
  const [state, formAction] = useActionState(signIn, INITIAL);
  const errors = t.auth.errors as Record<string, string>;
  const message = state.error ? errors[state.error] ?? errors.unavailable : null;

  return (
    <form action={formAction} className="space-y-3.5" noValidate>
      {next ? <input type="hidden" name="suivant" value={next} /> : null}

      <div>
        <label className="rs-label" htmlFor="email">{t.auth.email}</label>
        <input id="email" name="email" type="email" autoComplete="email" required className="rs-input" placeholder="moussa@gmail.com" />
      </div>

      <div>
        <label className="rs-label" htmlFor="password">{t.auth.password}</label>
        <input id="password" name="password" type="password" autoComplete="current-password" required className="rs-input" placeholder="••••••••" />
      </div>

      <div className="flex justify-end">
        <Link href="/app/mot-de-passe" className="text-[12px] font-medium text-[var(--rs-primary)]">{t.auth.forgot}</Link>
      </div>

      {message ? (
        <p role="alert" className="text-[13px] text-[var(--rs-danger)] bg-[var(--rs-danger-soft)] rounded-xl px-3 py-2">
          {message}
        </p>
      ) : null}

      <SubmitButton>{t.auth.signIn}</SubmitButton>
    </form>
  );
}
