'use client';

import { useTransition } from 'react';
import { setAppLang } from '../../actions/preferences';
import { APP_LANGS, type AppLang } from '../../i18n';

const SHORT: Record<AppLang, string> = { fr: 'FR', en: 'EN', ar: 'AR', ru: 'RU' };

/**
 * Sélecteur de langue des écrans non authentifiés.
 *
 * Le réglage complet vit dans le profil, mais il n'est atteignable qu'une
 * fois connecté : sans ce commutateur, un visiteur tombant sur une langue
 * qu'il ne lit pas n'avait aucun moyen d'en changer avant de s'identifier.
 */
export default function AuthLangSwitch({ lang, inverted = false }: { lang: AppLang; inverted?: boolean }) {
  const [pending, startTransition] = useTransition();

  const styles = (current: boolean) => {
    if (inverted) {
      return current ? 'bg-white/25 text-white' : 'text-white/70 hover:bg-white/15 hover:text-white';
    }
    return current
      ? 'bg-[var(--rs-primary)] text-white'
      : 'text-[var(--rs-muted)] hover:bg-[var(--rs-primary-soft)] hover:text-[var(--rs-primary)]';
  };

  return (
    <div className="flex items-center justify-center gap-1.5" role="group" aria-label="Langue">
      {APP_LANGS.map((option) => {
        const current = option.code === lang;
        return (
          <button
            key={option.code}
            type="button"
            lang={option.code}
            disabled={pending || current}
            aria-pressed={current}
            title={option.label}
            onClick={() => startTransition(() => void setAppLang(option.code))}
            className={`px-3 py-1.5 rounded-full text-[12px] font-semibold transition-colors ${styles(current)}`}
          >
            {SHORT[option.code]}
          </button>
        );
      })}
    </div>
  );
}
