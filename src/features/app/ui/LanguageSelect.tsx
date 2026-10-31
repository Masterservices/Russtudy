'use client';

import { useTransition } from 'react';
import { Languages } from 'lucide-react';
import { setAppLang } from '../actions/preferences';
import { APP_LANGS, type AppLang } from '../i18n';

/** Sélecteur de langue de la plateforme (cookie + profil). */
export default function LanguageSelect({ lang, label }: { lang: AppLang; label: string }) {
  const [pending, startTransition] = useTransition();

  return (
    <div className="rs-row">
      <Languages size={18} className="text-[var(--rs-muted)]" aria-hidden="true" />
      <label htmlFor="rs-lang" className="flex-1 text-[14px] font-medium text-[var(--rs-ink)]">
        {label}
      </label>
      <select
        id="rs-lang"
        value={lang}
        disabled={pending}
        onChange={(event) => {
          const next = event.target.value as AppLang;
          startTransition(() => {
            void setAppLang(next);
          });
        }}
        className="text-[13px] font-medium text-[var(--rs-muted)] bg-transparent cursor-pointer focus:outline-none"
      >
        {APP_LANGS.map((option) => (
          <option key={option.code} value={option.code}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
