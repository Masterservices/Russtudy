import type { AppDictionary } from '../i18n';
import type { DocumentStatus, DossierStatus, LeadStatus, PaymentStatus, QuoteStatus, StepStatus } from '../types';
import type { PillTone } from './primitives';

const DOSSIER_TONES: Record<DossierStatus, PillTone> = {
  draft: 'neutral',
  in_review: 'warning',
  admitted: 'success',
  invitation: 'info',
  visa: 'info',
  arrived: 'success',
  cancelled: 'danger',
};

const DOCUMENT_TONES: Record<DocumentStatus, PillTone> = {
  missing: 'danger',
  pending: 'warning',
  received: 'info',
  validated: 'success',
  rejected: 'danger',
};

const PAYMENT_TONES: Record<PaymentStatus, PillTone> = {
  due: 'warning',
  paid: 'success',
  late: 'danger',
  refunded: 'neutral',
};

const LEAD_TONES: Record<LeadStatus, PillTone> = {
  new: 'primary',
  contacted: 'info',
  in_progress: 'warning',
  admitted: 'success',
  lost: 'neutral',
};

const QUOTE_TONES: Record<QuoteStatus, PillTone> = {
  draft: 'neutral',
  sent: 'info',
  accepted: 'success',
  refused: 'danger',
};

const STEP_TONES: Record<StepStatus, PillTone> = {
  done: 'success',
  current: 'warning',
  upcoming: 'neutral',
};

export function dossierBadge(status: DossierStatus, t: AppDictionary): { tone: PillTone; label: string } {
  return { tone: DOSSIER_TONES[status], label: t.status[status] };
}

export function documentBadge(status: DocumentStatus, t: AppDictionary): { tone: PillTone; label: string } {
  return { tone: DOCUMENT_TONES[status], label: t.documents.statuses[status] };
}

export function paymentBadge(status: PaymentStatus, t: AppDictionary): { tone: PillTone; label: string } {
  const labels: Record<PaymentStatus, string> = {
    due: t.payments.due,
    paid: t.payments.paid,
    late: t.payments.late,
    refunded: t.payments.refunded,
  };
  return { tone: PAYMENT_TONES[status], label: labels[status] };
}

export function leadBadge(status: LeadStatus, t: AppDictionary): { tone: PillTone; label: string } {
  return { tone: LEAD_TONES[status], label: t.status[status] };
}

export function quoteBadge(status: QuoteStatus, t: AppDictionary): { tone: PillTone; label: string } {
  return { tone: QUOTE_TONES[status], label: t.status[status] };
}

export function stepBadge(status: StepStatus, t: AppDictionary): { tone: PillTone; label: string } {
  return { tone: STEP_TONES[status], label: t.status[status] };
}
