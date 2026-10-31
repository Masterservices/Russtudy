'use client';

import { useActionState } from 'react';
import { createQuote, type AdminActionState } from '../../actions/admin';
import type { AppDictionary } from '../../i18n';
import type { PricingItem } from '../../types';
import SubmitButton from '../SubmitButton';

const INITIAL: AdminActionState = {};

/**
 * Émission d'un devis à partir de la grille tarifaire.
 *
 * Les montants sont pré-remplis avec les tarifs de référence mais restent
 * modifiables : chaque dossier a ses particularités, et figer la grille
 * obligerait à la changer pour toute la plateforme afin d'ajuster un cas.
 *
 * L'échéancier est calculé côté serveur — un tiers à la signature, le solde
 * en deux fois — pour éviter qu'un total et ses échéances divergent.
 */
export default function QuoteForm({
  dossierId,
  pricing,
  t,
  disabled = false,
}: {
  dossierId: string;
  pricing: PricingItem[];
  t: AppDictionary;
  disabled?: boolean;
}) {
  const [state, formAction] = useActionState(createQuote, INITIAL);

  if (state.ok) {
    return (
      <p role="status" className="text-[13px] text-[var(--rs-success)] bg-[var(--rs-success-soft)] rounded-xl px-3.5 py-3">
        {t.payments.quoteCreated}
      </p>
    );
  }

  return (
    <form action={formAction} className="space-y-3.5">
      <input type="hidden" name="dossierId" value={dossierId} />
      <input type="hidden" name="depositLabel" value={t.payments.deposit} />
      <input type="hidden" name="secondLabel" value={t.payments.secondPayment} />
      <input type="hidden" name="balanceLabel" value={t.payments.balance} />

      <ul className="rs-card px-4 divide-y divide-[var(--rs-line)]">
        {pricing.map((item) => (
          <li key={item.id} className="flex items-center gap-3 py-3">
            <label htmlFor={`ligne-${item.id}`} className="flex-1 text-[14px] text-[var(--rs-ink)]">
              {item.label}
            </label>
            <input
              id={`ligne-${item.id}`}
              name={`ligne:${item.label}`}
              type="number"
              min={0}
              step={1000}
              defaultValue={item.amount}
              disabled={disabled}
              className="rs-input w-[130px] text-end min-h-[40px] py-2"
            />
            <span className="w-9 shrink-0 text-[12px] text-[var(--rs-muted)]">{item.currency}</span>
          </li>
        ))}
      </ul>

      {state.error ? (
        <p role="alert" className="text-[13px] text-[var(--rs-danger)] bg-[var(--rs-danger-soft)] rounded-xl px-3 py-2">
          {t.common.error}
        </p>
      ) : null}

      <SubmitButton disabled={disabled}>{t.payments.createQuote}</SubmitButton>
    </form>
  );
}
