'use client';

import { useActionState } from 'react';
import { updateProfile, type ActionState } from '../actions/app';
import type { AppDictionary } from '../i18n';
import type { AppUser } from '../types';
import SubmitButton from './SubmitButton';

const INITIAL: ActionState = {};

export default function ProfileForm({ user, t, disabled = false }: { user: AppUser; t: AppDictionary; disabled?: boolean }) {
  const [state, formAction] = useActionState(updateProfile, INITIAL);

  return (
    <form action={formAction} className="space-y-3.5">
      <div>
        <label className="rs-label" htmlFor="fullName">{t.profile.fullName}</label>
        <input id="fullName" name="fullName" defaultValue={user.fullName} required className="rs-input" />
      </div>

      <div>
        <label className="rs-label" htmlFor="email">{t.profile.email}</label>
        <input id="email" defaultValue={user.email} readOnly disabled className="rs-input opacity-60" aria-describedby="email-hint" />
        <p id="email-hint" className="mt-1.5 text-[11px] text-[var(--rs-muted)]">{t.profile.emailLocked}</p>
      </div>

      <div>
        <label className="rs-label" htmlFor="phone">{t.profile.phone}</label>
        <input id="phone" name="phone" type="tel" defaultValue={user.phone ?? ''} className="rs-input" />
      </div>

      <div>
        <label className="rs-label" htmlFor="city">{t.profile.city}</label>
        <input id="city" name="city" defaultValue={user.city ?? ''} className="rs-input" />
      </div>

      {state.ok ? (
        <p role="status" className="text-[13px] text-[var(--rs-success)] bg-[var(--rs-success-soft)] rounded-xl px-3 py-2">
          {t.common.saved}
        </p>
      ) : null}
      {state.error && state.error !== 'demo_mode' ? (
        <p role="alert" className="text-[13px] text-[var(--rs-danger)] bg-[var(--rs-danger-soft)] rounded-xl px-3 py-2">
          {t.common.error}
        </p>
      ) : null}

      <SubmitButton disabled={disabled}>{t.common.save}</SubmitButton>
    </form>
  );
}
