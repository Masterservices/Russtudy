import type { AppDictionary } from '../i18n';
import { interpolate } from '../i18n';
import type { DocumentItem, Quote, TimelineStep } from '../types';

export interface NextAction {
  /** `action` : l'étudiant doit agir. `info` : la balle est dans notre camp. */
  tone: 'action' | 'info';
  title: string;
  detail: string;
  href: string;
  cta: string;
}

/**
 * Ce que l'étudiant doit faire maintenant.
 *
 * On ne propose que des actions réellement possibles dans l'application :
 * déposer une pièce, régler une échéance. Le reste du parcours dépend de nous,
 * et l'écran le dit franchement plutôt que d'inventer un bouton sans effet.
 */
export function resolveNextAction({
  steps,
  documents,
  quote,
  t,
}: {
  steps: TimelineStep[];
  documents: DocumentItem[];
  quote: Quote | null;
  t: AppDictionary;
}): NextAction {
  const missing = documents.filter((doc) => doc.status === 'missing' || doc.status === 'rejected').length;

  if (missing > 0) {
    return {
      tone: 'action',
      title: t.nextAction.documentsTitle,
      detail: interpolate(missing > 1 ? t.nextAction.documentsDetailPlural : t.nextAction.documentsDetail, {
        n: missing,
      }),
      href: '/app/etudiant/documents?filtre=requis',
      cta: t.nextAction.documentsCta,
    };
  }

  const unpaid = quote?.payments.filter((payment) => payment.status === 'due' || payment.status === 'late') ?? [];

  if (unpaid.length > 0) {
    return {
      tone: 'action',
      title: t.nextAction.paymentTitle,
      detail: t.nextAction.paymentDetail,
      href: '/app/etudiant/paiements',
      cta: t.nextAction.paymentCta,
    };
  }

  const current = steps.find((step) => step.status === 'current');

  return {
    tone: 'info',
    title: t.nextAction.waitingTitle,
    detail: current
      ? `${t.nextAction.currentStep} : ${(t.steps as Record<string, string>)[current.key] ?? current.label}`
      : t.nextAction.waitingDetail,
    href: '/app/etudiant/dossier/timeline',
    cta: t.nextAction.waitingCta,
  };
}
