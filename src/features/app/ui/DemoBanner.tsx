import { Info } from 'lucide-react';
import { setDemoRole } from '../actions/auth';
import type { AppDictionary } from '../i18n';
import type { AppRole } from '../types';

const ROLES: AppRole[] = ['student', 'consultant', 'admin'];

/**
 * Bandeau affiché uniquement en mode démonstration (aucune base connectée).
 * Il permet aussi de basculer d'un espace à l'autre pour la recette.
 */
export default function DemoBanner({ t, role }: { t: AppDictionary; role: AppRole }) {
  return (
    <aside className="mx-4 mt-3 rounded-[14px] border border-[var(--rs-warning)]/30 bg-[var(--rs-warning-soft)] px-3.5 py-3">
      <p className="flex items-start gap-2 text-[12px] leading-snug text-[var(--rs-ink)]">
        <Info size={15} className="mt-0.5 shrink-0 text-[var(--rs-warning)]" aria-hidden="true" />
        <span>
          <strong className="font-semibold">{t.common.demoBadge} — </strong>
          {t.common.demoNotice}
        </span>
      </p>
      <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
        <span className="text-[11px] text-[var(--rs-muted)] me-1">{t.common.demoSwitch}</span>
        {ROLES.map((candidate) => (
          <form key={candidate} action={setDemoRole.bind(null, candidate)}>
            <button
              type="submit"
              aria-pressed={candidate === role}
              className={`rs-pill ${candidate === role ? 'rs-pill-primary' : 'rs-pill-neutral'} cursor-pointer`}
            >
              {t.roles[candidate]}
            </button>
          </form>
        ))}
      </div>
    </aside>
  );
}
