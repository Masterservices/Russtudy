import type { ReactNode } from 'react';
import { Check } from 'lucide-react';
import type { AppDictionary, AppLang } from '../i18n';
import type { TimelineStep } from '../types';
import { formatDate } from '../utils/format';

const DOT: Record<TimelineStep['status'], string> = {
  done: 'bg-[var(--rs-success)] text-white border-[var(--rs-success)]',
  current: 'bg-[var(--rs-warning)] text-white border-[var(--rs-warning)]',
  upcoming: 'bg-[var(--rs-card)] text-[var(--rs-muted)] border-[var(--rs-line)]',
};

const VALIDATION_TONE: Record<Exclude<TimelineStep['validation'], 'idle'>, string> = {
  requested: 'text-[var(--rs-warning)]',
  confirmed: 'text-[var(--rs-primary)]',
  validated: 'text-[var(--rs-success)]',
};

/**
 * Frise verticale du dossier. Le trait de liaison est porté par chaque étape
 * sauf la dernière, ce qui évite un pseudo-élément absolu difficile à aligner
 * quand les libellés passent sur deux lignes.
 *
 * `renderAction` laisse chaque espace décider du geste proposé : demander,
 * confirmer ou signer. La frise, elle, se contente d'afficher où en est la
 * validation.
 */
export default function Timeline({
  steps,
  lang,
  upcomingLabel,
  currentLabel,
  t,
  renderAction,
}: {
  steps: TimelineStep[];
  lang: AppLang;
  upcomingLabel: string;
  currentLabel: string;
  t?: AppDictionary;
  renderAction?: (step: TimelineStep) => ReactNode;
}) {
  // Les étapes standard sont traduites depuis leur clé ; le libellé stocké en
  // base sert de repli pour toute étape ajoutée sur mesure.
  const labelOf = (step: TimelineStep) =>
    (t?.steps as Record<string, string> | undefined)?.[step.key] ?? step.label;

  const validationLabel = (step: TimelineStep) => {
    if (!t || step.validation === 'idle') return null;
    return t.validation[step.validation];
  };

  return (
    <ol className="rs-card px-4 py-2">
      {steps.map((step, index) => (
        <li key={step.id} className="flex gap-3">
          <div className="flex flex-col items-center">
            <span
              className={`mt-3.5 grid place-items-center w-6 h-6 rounded-full border-2 text-[11px] font-bold ${DOT[step.status]}`}
              aria-hidden="true"
            >
              {step.status === 'done' ? <Check size={13} strokeWidth={3} /> : index + 1}
            </span>
            {index < steps.length - 1 ? (
              <span
                className="flex-1 w-0.5 my-1"
                style={{ backgroundColor: step.status === 'done' ? 'var(--rs-success)' : 'var(--rs-line)' }}
                aria-hidden="true"
              />
            ) : null}
          </div>
          <div className="flex-1 py-3.5 min-w-0">
            <p className={`text-[14px] leading-tight ${step.status === 'upcoming' ? 'text-[var(--rs-muted)]' : 'font-semibold text-[var(--rs-ink)]'}`}>
              {labelOf(step)}
            </p>
            <p className="mt-0.5 text-[12px] text-[var(--rs-muted)]">
              {step.occurredAt
                ? formatDate(step.occurredAt, lang)
                : step.status === 'current'
                  ? currentLabel
                  : upcomingLabel}
            </p>

            {step.validation !== 'idle' ? (
              <p className={`mt-1 text-[12px] font-medium ${VALIDATION_TONE[step.validation]}`}>
                {validationLabel(step)}
              </p>
            ) : null}

            {renderAction ? <div className="mt-2 empty:mt-0">{renderAction(step)}</div> : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
