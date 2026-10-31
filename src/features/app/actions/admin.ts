'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { getServerDb } from '../../../lib/neon/server';
import { getAppSession } from '../data/session';
import type { AppRole } from '../types';

export interface AdminActionState {
  error?: string;
  ok?: boolean;
}

/** Étapes créées avec tout nouveau dossier, dans l'ordre du parcours. */
const DEFAULT_STEPS: { key: string; label: string }[] = [
  { key: 'created', label: 'Dossier créé' },
  { key: 'documents', label: 'Documents reçus' },
  { key: 'payment', label: 'Paiement confirmé' },
  { key: 'review', label: 'Étude du dossier' },
  { key: 'admission', label: 'Admission' },
  { key: 'invitation', label: 'Invitation' },
  { key: 'visa', label: 'Visa' },
  { key: 'arrival', label: 'Arrivée en Russie' },
];

/**
 * Mise à jour de la grille tarifaire de référence.
 * Le formulaire envoie un champ `montant:<id>` par ligne ; l'écriture reste
 * verrouillée par la RLS (`pricing_write` : administrateurs uniquement).
 */
export async function updatePricing(formData: FormData): Promise<void> {
  const session = await getAppSession();
  if (!session || session.demo || session.user.role !== 'admin') return;

  const db = await getServerDb();
  if (!db) return;

  const updates: { id: string; amount: number }[] = [];
  for (const [key, value] of formData.entries()) {
    if (!key.startsWith('montant:')) continue;
    const amount = Number(value);
    if (!Number.isFinite(amount) || amount < 0) continue;
    updates.push({ id: key.slice('montant:'.length), amount });
  }

  for (const update of updates) {
    await db
      .from('pricing_items')
      .update({ amount: update.amount, updated_at: new Date().toISOString() })
      .eq('id', update.id);
  }

  if (updates.length > 0) {
    await db.from('audit_logs').insert({
      actor_id: session.user.id,
      action: 'pricing.update',
      entity: 'pricing_items',
      metadata: { count: updates.length },
    });
  }

  revalidatePath('/app', 'layout');
}

/**
 * Changement de rôle d'un utilisateur, réservé à l'administration.
 *
 * La RLS et le trigger `profiles_guard_role` restent l'autorité : cette
 * vérification applicative sert à afficher un message utile, pas à protéger.
 */
export async function setUserRole(formData: FormData): Promise<void> {
  const userId = String(formData.get('userId') ?? '');
  const role = String(formData.get('role') ?? '') as AppRole;

  if (!userId || !['student', 'consultant', 'admin'].includes(role)) return;

  const session = await getAppSession();
  if (!session || session.demo || session.user.role !== 'admin') return;

  const db = await getServerDb();
  if (!db) return;

  const { error } = await db.from('profiles').update({ role }).eq('id', userId);
  if (error) {
    console.error('[app][admin] setUserRole', error.message);
    return;
  }

  await db.from('audit_logs').insert({
    actor_id: session.user.id,
    action: 'profile.role_change',
    entity: 'profiles',
    entity_id: userId,
    metadata: { role },
  });

  revalidatePath('/app', 'layout');
}

/** Référence lisible et unique : RS-<année>-<4 chiffres>. */
function buildReference(): string {
  return `RS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
}

/**
 * Ouverture d'un dossier pour un étudiant, avec sa frise d'étapes.
 *
 * Les étapes sont créées d'emblée : sans elles, l'étudiant verrait un dossier
 * sans parcours, et le consultant n'aurait rien à faire avancer.
 */
export async function createDossier(
  _prev: AdminActionState,
  formData: FormData,
): Promise<AdminActionState> {
  const studentId = String(formData.get('studentId') ?? '');
  const consultantId = String(formData.get('consultantId') ?? '');
  const universityId = String(formData.get('universityId') ?? '');
  const program = String(formData.get('program') ?? '').trim();
  const level = String(formData.get('level') ?? '').trim();
  const startDate = String(formData.get('startDate') ?? '').trim();

  if (!studentId) return { error: 'missing_fields' };

  const session = await getAppSession();
  if (!session) return { error: 'unauthenticated' };
  if (session.demo) return { error: 'demo_mode' };
  if (session.user.role === 'student') return { error: 'forbidden' };

  const db = await getServerDb();
  if (!db) return { error: 'unavailable' };

  const { data: dossier, error } = await db
    .from('dossiers')
    .insert({
      reference: buildReference(),
      student_id: studentId,
      consultant_id: consultantId || null,
      university_id: universityId || null,
      program: program || null,
      level: level || null,
      start_date: startDate || null,
      status: 'in_review',
      progress: 10,
    })
    .select('id')
    .single();

  if (error || !dossier) {
    console.error('[app][admin] createDossier', error?.message);
    return { error: 'create_failed' };
  }

  await db.from('dossier_steps').insert(
    DEFAULT_STEPS.map((step, index) => ({
      dossier_id: dossier.id,
      step_key: step.key,
      label: step.label,
      position: index,
      status: index === 0 ? ('done' as const) : index === 1 ? ('current' as const) : ('upcoming' as const),
      occurred_at: index === 0 ? new Date().toISOString() : null,
    })),
  );

  await db.from('audit_logs').insert({
    actor_id: session.user.id,
    action: 'dossier.create',
    entity: 'dossiers',
    entity_id: dossier.id,
  });

  revalidatePath('/app', 'layout');
  redirect('/app/admin/dossiers');
}

/**
 * Émission d'un devis à partir de la grille tarifaire, avec son échéancier.
 * Les montants restent modifiables ligne à ligne dans le formulaire : la
 * grille sert de point de départ, pas de contrainte.
 */
export async function createQuote(
  _prev: AdminActionState,
  formData: FormData,
): Promise<AdminActionState> {
  const dossierId = String(formData.get('dossierId') ?? '');
  if (!dossierId) return { error: 'missing_fields' };

  const session = await getAppSession();
  if (!session) return { error: 'unauthenticated' };
  if (session.demo) return { error: 'demo_mode' };
  if (session.user.role === 'student') return { error: 'forbidden' };

  const db = await getServerDb();
  if (!db) return { error: 'unavailable' };

  const items: { label: string; amount: number }[] = [];
  for (const [key, value] of formData.entries()) {
    if (!key.startsWith('ligne:')) continue;
    const amount = Number(value);
    if (!Number.isFinite(amount) || amount < 0) continue;
    items.push({ label: key.slice('ligne:'.length), amount });
  }
  if (items.length === 0) return { error: 'missing_fields' };

  const total = items.reduce((sum, item) => sum + item.amount, 0);

  const { data: quote, error } = await db
    .from('quotes')
    .insert({
      dossier_id: dossierId,
      reference: `DEV-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
      currency: 'RUB',
      status: 'sent',
      total_amount: total,
      issued_at: new Date().toISOString(),
    })
    .select('id')
    .single();

  if (error || !quote) {
    console.error('[app][admin] createQuote', error?.message);
    return { error: 'create_failed' };
  }

  await db.from('quote_items').insert(
    items.map((item, index) => ({ quote_id: quote.id, label: item.label, amount: item.amount, position: index })),
  );

  // Échéancier par défaut : un tiers à la signature, le reste en deux fois.
  const deposit = Math.round(total / 3);
  const remainder = total - deposit;
  const second = Math.round(remainder / 2);
  const schedule = [
    { label: String(formData.get('depositLabel') ?? 'Acompte'), amount: deposit, days: 0 },
    { label: String(formData.get('secondLabel') ?? 'Paiement 2'), amount: second, days: 30 },
    { label: String(formData.get('balanceLabel') ?? 'Solde'), amount: remainder - second, days: 90 },
  ];

  await db.from('payments').insert(
    schedule.map((line, index) => ({
      quote_id: quote.id,
      label: line.label,
      amount: line.amount,
      status: 'due' as const,
      due_date: new Date(Date.now() + line.days * 86_400_000).toISOString().slice(0, 10),
      position: index,
    })),
  );

  await db.from('audit_logs').insert({
    actor_id: session.user.id,
    action: 'quote.create',
    entity: 'quotes',
    entity_id: quote.id,
    metadata: { total },
  });

  revalidatePath('/app', 'layout');
  return { ok: true };
}
