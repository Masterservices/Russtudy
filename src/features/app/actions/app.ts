'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { getServerDb } from '../../../lib/neon/server';
import { getAppSession } from '../data/session';
import type { DocumentStatus } from '../types';

export interface ActionState {
  error?: string;
  ok?: boolean;
}

const DEMO_STATE: ActionState = { error: 'demo_mode' };

/** Envoi d'un message dans une conversation existante. */
export async function sendMessage(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const conversationId = String(formData.get('conversationId') ?? '');
  const body = String(formData.get('body') ?? '').trim();

  if (!conversationId || !body) return { error: 'empty_message' };

  const session = await getAppSession();
  if (!session) return { error: 'unauthenticated' };
  if (session.demo) return DEMO_STATE;

  const db = await getServerDb();
  if (!db) return { error: 'unavailable' };

  const { error } = await db.from('messages').insert({
    conversation_id: conversationId,
    sender_id: session.user.id,
    body,
  });

  if (error) return { error: 'send_failed' };

  revalidatePath('/app', 'layout');
  return { ok: true };
}

const TOPICS = ['consultant', 'university', 'general'] as const;

/**
 * Ouverture d'une conversation sur un dossier, avec son premier message.
 * La RLS n'autorise l'écriture qu'aux personnes rattachées au dossier :
 * l'étudiant, son consultant et l'administration.
 *
 * Les échanges avec l'université sont réservés à l'administration : un
 * étudiant ou un consultant ne peut pas s'adresser directement à elle.
 */
export async function startConversation(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const dossierId = String(formData.get('dossierId') ?? '');
  const topic = String(formData.get('topic') ?? 'consultant');
  const title = String(formData.get('title') ?? '').trim();
  const body = String(formData.get('body') ?? '').trim();

  if (!dossierId || !body || !(TOPICS as readonly string[]).includes(topic)) return { error: 'missing_fields' };

  const session = await getAppSession();
  if (!session) return { error: 'unauthenticated' };
  if (session.demo) return DEMO_STATE;
  if (topic === 'university' && session.user.role !== 'admin') return { error: 'forbidden_topic' };

  const db = await getServerDb();
  if (!db) return { error: 'unavailable' };

  const { data: conversation, error } = await db
    .from('conversations')
    .insert({ dossier_id: dossierId, topic, title: title || null })
    .select('id')
    .single();

  if (error || !conversation) return { error: 'create_failed' };

  const { error: messageError } = await db.from('messages').insert({
    conversation_id: conversation.id,
    sender_id: session.user.id,
    body,
  });

  if (messageError) return { error: 'send_failed' };

  revalidatePath('/app', 'layout');
  const space = session.user.role === 'student' ? 'etudiant' : session.user.role;
  redirect(`/app/${space}/messages/${conversation.id}`);
}

/**
 * Chaîne de validation d'une étape : l'étudiant déclare, le consultant
 * confirme, l'administration signe. Les trois gestes passent par des fonctions
 * SQL `security definer` — l'autorisation est vérifiée en base, ici on ne fait
 * que transmettre et traduire l'échec.
 */
type StepGesture = 'request' | 'confirm' | 'validate';

const STEP_FUNCTIONS = {
  request: 'request_dossier_step',
  confirm: 'confirm_dossier_step',
  validate: 'validate_dossier_step',
} as const;

async function runStepGesture(gesture: StepGesture, formData: FormData): Promise<void> {
  const stepId = String(formData.get('stepId') ?? '');
  if (!stepId) return;

  const session = await getAppSession();
  if (!session || session.demo) return;

  const db = await getServerDb();
  if (!db) return;

  const { error } = await db.rpc(STEP_FUNCTIONS[gesture], { step: stepId });
  if (error) console.error(`[app] ${gesture} step:`, error.message);

  revalidatePath('/app', 'layout');
}

/** L'étudiant déclare avoir accompli l'étape. */
export async function requestStep(formData: FormData): Promise<void> {
  await runStepGesture('request', formData);
}

/** Le consultant confirme la déclaration de l'étudiant. */
export async function confirmStep(formData: FormData): Promise<void> {
  await runStepGesture('confirm', formData);
}

/** L'administration signe : l'étape devient acquise et la suivante démarre. */
export async function validateStep(formData: FormData): Promise<void> {
  await runStepGesture('validate', formData);
}

/** Marque toutes les notifications de l'utilisateur comme lues (action de formulaire). */
export async function markAllNotificationsRead(): Promise<void> {
  const session = await getAppSession();
  if (!session || session.demo) return;

  const db = await getServerDb();
  if (!db) return;

  await db
    .from('notifications')
    .update({ read_at: new Date().toISOString() })
    .eq('user_id', session.user.id)
    .is('read_at', null);

  revalidatePath('/app', 'layout');
}

/** Mise à jour des informations personnelles de l'utilisateur connecté. */
export async function updateProfile(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const fullName = String(formData.get('fullName') ?? '').trim();
  const phone = String(formData.get('phone') ?? '').trim();
  const city = String(formData.get('city') ?? '').trim();

  if (!fullName) return { error: 'missing_fields' };

  const session = await getAppSession();
  if (!session) return { error: 'unauthenticated' };
  if (session.demo) return DEMO_STATE;

  const db = await getServerDb();
  if (!db) return { error: 'unavailable' };

  const { error } = await db
    .from('profiles')
    .update({ full_name: fullName, phone: phone || null, city: city || null })
    .eq('id', session.user.id);

  if (error) return { error: 'update_failed' };

  revalidatePath('/app', 'layout');
  return { ok: true };
}

/**
 * Validation ou refus d'une pièce par le consultant (action de formulaire).
 * L'autorisation réelle est portée par la RLS : seul le consultant assigné au
 * dossier — ou un administrateur — peut écrire.
 */
export async function setDocumentStatus(formData: FormData): Promise<void> {
  const documentId = String(formData.get('documentId') ?? '');
  const status = String(formData.get('status') ?? '') as DocumentStatus;

  const allowed: DocumentStatus[] = ['missing', 'pending', 'received', 'validated', 'rejected'];
  if (!documentId || !allowed.includes(status)) return;

  const session = await getAppSession();
  if (!session || session.demo || session.user.role === 'student') return;

  const db = await getServerDb();
  if (!db) return;

  await db.from('documents').update({ status }).eq('id', documentId);
  revalidatePath('/app', 'layout');
}
