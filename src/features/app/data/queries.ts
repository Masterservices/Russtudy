import 'server-only';

import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database, DossierStepRow, ProfileRow } from '../../../lib/supabase/database.types';
import { getServerSupabase } from '../../../lib/supabase/server';
import type {
  AdminOverview,
  AppRole,
  AuditLogItem,
  ConsultantOverview,
  ConversationThread,
  DocumentItem,
  Dossier,
  MessageItem,
  NotificationItem,
  PersonRef,
  PricingItem,
  ProfileDetail,
  Quote,
  SeriesPoint,
  TimelineStep,
  UniversityItem,
} from '../types';
import {
  DEMO_ADMIN,
  DEMO_ADMIN_OVERVIEW,
  DEMO_CONSULTANT,
  DEMO_DOCUMENTS,
  DEMO_DOSSIER,
  DEMO_DOSSIERS,
  DEMO_LOGS,
  DEMO_MESSAGES,
  DEMO_NOTIFICATIONS,
  DEMO_PRICING,
  DEMO_QUOTE,
  DEMO_STEPS,
  DEMO_STUDENT,
  DEMO_THREADS,
  DEMO_UNIVERSITIES,
} from './demo';

type Db = SupabaseClient<Database>;

/* ------------------------------------------------------------------ */
/* Utilitaires                                                         */
/* ------------------------------------------------------------------ */

function toPersonRef(row: Pick<ProfileRow, 'id' | 'full_name' | 'email' | 'avatar_url'> | undefined): PersonRef | null {
  if (!row) return null;
  return { id: row.id, fullName: row.full_name, email: row.email, avatarUrl: row.avatar_url };
}

const UNKNOWN_PERSON: PersonRef = { id: '', fullName: '—', email: '', avatarUrl: null };

/** Charge les profils cités par un lot de dossiers en une seule requête. */
async function loadPeople(db: Db, ids: (string | null)[]): Promise<Map<string, PersonRef>> {
  const unique = [...new Set(ids.filter((id): id is string => Boolean(id)))];
  const map = new Map<string, PersonRef>();
  if (unique.length === 0) return map;

  const { data } = await db.from('profiles').select('id, full_name, email, avatar_url').in('id', unique);
  for (const row of data ?? []) {
    const person = toPersonRef(row);
    if (person) map.set(person.id, person);
  }
  return map;
}

async function loadUniversities(db: Db, ids: (string | null)[]): Promise<Map<string, { id: string; name: string; city: string }>> {
  const unique = [...new Set(ids.filter((id): id is string => Boolean(id)))];
  const map = new Map<string, { id: string; name: string; city: string }>();
  if (unique.length === 0) return map;

  const { data } = await db.from('universities').select('id, name, city').in('id', unique);
  for (const row of data ?? []) map.set(row.id, { id: row.id, name: row.name, city: row.city });
  return map;
}

type DossierRowLite = Database['public']['Tables']['dossiers']['Row'];

async function hydrateDossiers(db: Db, rows: DossierRowLite[]): Promise<Dossier[]> {
  // Deux lectures indépendantes : les enchaîner doublait la latence pour rien.
  const [people, universities] = await Promise.all([
    loadPeople(db, rows.flatMap((r) => [r.student_id, r.consultant_id])),
    loadUniversities(db, rows.map((r) => r.university_id)),
  ]);

  return rows.map((row) => ({
    id: row.id,
    reference: row.reference,
    status: row.status,
    leadStatus: row.lead_status,
    progress: row.progress,
    program: row.program,
    level: row.level,
    startDate: row.start_date,
    createdAt: row.created_at,
    university: row.university_id ? universities.get(row.university_id) ?? null : null,
    student: people.get(row.student_id) ?? UNKNOWN_PERSON,
    consultant: row.consultant_id ? people.get(row.consultant_id) ?? null : null,
  }));
}

/* ------------------------------------------------------------------ */
/* Espace étudiant                                                     */
/* ------------------------------------------------------------------ */

export async function getStudentDossier(userId: string, demo: boolean): Promise<Dossier | null> {
  if (demo) return DEMO_DOSSIER;
  const db = await getServerSupabase();
  if (!db) return null;

  const { data } = await db
    .from('dossiers')
    .select('*')
    .eq('student_id', userId)
    .order('created_at', { ascending: false })
    .limit(1);

  if (!data || data.length === 0) return null;
  return (await hydrateDossiers(db, data))[0] ?? null;
}

/** Dossiers ouverts au nom d'un étudiant, du plus récent au plus ancien. */
export async function getStudentDossiers(studentId: string, demo: boolean): Promise<Dossier[]> {
  if (demo) return DEMO_DOSSIERS.slice(0, 1);
  const db = await getServerSupabase();
  if (!db) return [];

  const { data } = await db
    .from('dossiers')
    .select('*')
    .eq('student_id', studentId)
    .order('created_at', { ascending: false });

  return hydrateDossiers(db, data ?? []);
}

/** Profil complet d'une personne : les listes n'en montrent qu'un extrait. */
export async function getProfileDetail(profileId: string, demo: boolean): Promise<ProfileDetail | null> {
  if (demo) {
    const user = [DEMO_STUDENT, DEMO_CONSULTANT, DEMO_ADMIN].find((candidate) => candidate.id === profileId);
    if (!user) return null;
    return {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      avatarUrl: user.avatarUrl,
      role: user.role,
      phone: user.phone,
      city: user.city,
      createdAt: new Date().toISOString(),
    };
  }

  const db = await getServerSupabase();
  if (!db) return null;

  const { data } = await db
    .from('profiles')
    .select('id, full_name, email, avatar_url, role, phone, city, lang, created_at')
    .eq('id', profileId)
    .maybeSingle();

  if (!data) return null;

  return {
    id: data.id,
    fullName: data.full_name ?? '',
    email: data.email,
    avatarUrl: data.avatar_url,
    role: data.role,
    phone: data.phone,
    city: data.city,
    createdAt: data.created_at,
  };
}

export async function getDossierById(dossierId: string, demo: boolean): Promise<Dossier | null> {
  if (demo) return DEMO_DOSSIERS.find((d) => d.id === dossierId) ?? null;
  const db = await getServerSupabase();
  if (!db) return null;

  const { data } = await db.from('dossiers').select('*').eq('id', dossierId).maybeSingle();
  if (!data) return null;
  return (await hydrateDossiers(db, [data]))[0] ?? null;
}

export async function getTimeline(dossierId: string | null, demo: boolean): Promise<TimelineStep[]> {
  if (demo) return DEMO_STEPS;
  // Hors démonstration, l'absence de dossier signifie « rien à afficher ».
  // Retomber sur le jeu fictif montrerait à l'utilisateur des étapes qui ne
  // sont pas les siennes.
  if (!dossierId) return [];

  const db = await getServerSupabase();
  if (!db) return [];

  const { data } = await db
    .from('dossier_steps')
    .select('*')
    .eq('dossier_id', dossierId)
    .order('position', { ascending: true });

  return (data ?? []).map(toTimelineStep);
}

function toTimelineStep(row: DossierStepRow): TimelineStep {
  return {
    id: row.id,
    key: row.step_key,
    label: row.label,
    status: row.status,
    occurredAt: row.occurred_at,
    validation: row.validated_at
      ? 'validated'
      : row.confirmed_at
        ? 'confirmed'
        : row.requested_at
          ? 'requested'
          : 'idle',
    requestedAt: row.requested_at,
    confirmedAt: row.confirmed_at,
    validatedAt: row.validated_at,
  };
}

export interface PendingStep {
  step: TimelineStep;
  dossierId: string;
  reference: string;
  student: PersonRef;
}

/**
 * Étapes déclarées par un étudiant et pas encore signées. Le consultant y voit
 * ce qu'il doit confirmer, l'administration ce qu'elle doit signer.
 */
export async function getPendingSteps(dossiers: Dossier[], demo: boolean): Promise<PendingStep[]> {
  if (demo || dossiers.length === 0) return [];

  const db = await getServerSupabase();
  if (!db) return [];

  const { data } = await db
    .from('dossier_steps')
    .select('*')
    .in('dossier_id', dossiers.map((dossier) => dossier.id))
    .not('requested_at', 'is', null)
    .is('validated_at', null)
    .order('requested_at', { ascending: true });

  const byId = new Map(dossiers.map((dossier) => [dossier.id, dossier]));

  return (data ?? []).flatMap((row) => {
    const dossier = byId.get(row.dossier_id);
    if (!dossier) return [];
    return [{
      step: toTimelineStep(row),
      dossierId: dossier.id,
      reference: dossier.reference,
      student: dossier.student,
    }];
  });
}

export async function getDocuments(dossierId: string | null, demo: boolean): Promise<DocumentItem[]> {
  if (demo) return DEMO_DOCUMENTS;
  if (!dossierId) return [];

  const db = await getServerSupabase();
  if (!db) return [];

  const { data } = await db
    .from('documents')
    .select('*')
    .eq('dossier_id', dossierId)
    .order('created_at', { ascending: true });

  return (data ?? []).map((row) => ({
    id: row.id,
    dossierId: row.dossier_id,
    docType: row.doc_type,
    name: row.name,
    status: row.status,
    note: row.note,
    receivedAt: row.received_at,
    storagePath: row.storage_path,
    mimeType: row.mime_type,
    sizeBytes: row.size_bytes,
  }));
}

export async function getDocument(documentId: string, demo: boolean): Promise<DocumentItem | null> {
  if (demo) return DEMO_DOCUMENTS.find((d) => d.id === documentId) ?? null;
  const db = await getServerSupabase();
  if (!db) return null;

  const { data } = await db.from('documents').select('*').eq('id', documentId).maybeSingle();
  if (!data) return null;
  return {
    id: data.id,
    dossierId: data.dossier_id,
    docType: data.doc_type,
    name: data.name,
    status: data.status,
    note: data.note,
    receivedAt: data.received_at,
    storagePath: data.storage_path,
    mimeType: data.mime_type,
    sizeBytes: data.size_bytes,
  };
}

/** URL signée de courte durée pour une pièce jointe du bucket privé. */
export async function getDocumentDownloadUrl(storagePath: string | null, demo: boolean): Promise<string | null> {
  if (demo || !storagePath) return null;
  const db = await getServerSupabase();
  if (!db) return null;

  const { data } = await db.storage.from('documents').createSignedUrl(storagePath, 60 * 10);
  return data?.signedUrl ?? null;
}

/**
 * URLs signées pour un lot de pièces, en un seul aller-retour.
 *
 * Afficher un aperçu dans une liste supposerait sinon autant d'appels que de
 * documents : `createSignedUrls` les demande d'un coup.
 */
export async function getDocumentPreviewUrls(
  documents: DocumentItem[],
  demo: boolean,
): Promise<Map<string, string>> {
  const urls = new Map<string, string>();
  const paths = documents.map((document) => document.storagePath).filter((path): path is string => !!path);

  if (demo || paths.length === 0) return urls;

  const db = await getServerSupabase();
  if (!db) return urls;

  const { data } = await db.storage.from('documents').createSignedUrls(paths, 60 * 10);

  for (const entry of data ?? []) {
    if (entry.path && entry.signedUrl) urls.set(entry.path, entry.signedUrl);
  }

  return urls;
}

export async function getThreads(dossierIds: string[], userId: string, demo: boolean): Promise<ConversationThread[]> {
  if (demo) return DEMO_THREADS;
  const db = await getServerSupabase();
  if (!db || dossierIds.length === 0) return [];

  const { data: conversations } = await db
    .from('conversations')
    .select('*')
    .in('dossier_id', dossierIds)
    .order('updated_at', { ascending: false });

  if (!conversations || conversations.length === 0) return [];

  const { data: messages } = await db
    .from('messages')
    .select('id, conversation_id, sender_id, body, read_at, created_at')
    .in('conversation_id', conversations.map((c) => c.id))
    .order('created_at', { ascending: false });

  const people = await loadPeople(db, (messages ?? []).map((m) => m.sender_id));

  return conversations.map((conversation) => {
    const thread = (messages ?? []).filter((m) => m.conversation_id === conversation.id);
    const last = thread[0];
    const counterpartId = thread.find((m) => m.sender_id && m.sender_id !== userId)?.sender_id ?? null;

    return {
      id: conversation.id,
      dossierId: conversation.dossier_id,
      topic: conversation.topic,
      title: conversation.title ?? (counterpartId ? people.get(counterpartId)?.fullName ?? '' : conversation.topic),
      counterpart: counterpartId ? people.get(counterpartId) ?? null : null,
      lastMessage: last?.body ?? null,
      lastMessageAt: last?.created_at ?? null,
      unreadCount: thread.filter((m) => !m.read_at && m.sender_id !== userId).length,
    };
  });
}

export async function getMessages(conversationId: string, userId: string, demo: boolean): Promise<MessageItem[]> {
  if (demo) return DEMO_MESSAGES[conversationId] ?? [];
  const db = await getServerSupabase();
  if (!db) return [];

  const { data } = await db
    .from('messages')
    .select('*')
    .eq('conversation_id', conversationId)
    .order('created_at', { ascending: true });

  const people = await loadPeople(db, (data ?? []).map((m) => m.sender_id));

  return (data ?? []).map((row) => ({
    id: row.id,
    body: row.body,
    senderId: row.sender_id,
    senderName: row.sender_id ? people.get(row.sender_id)?.fullName ?? '' : 'RusStudy',
    createdAt: row.created_at,
    own: row.sender_id === userId,
  }));
}

export async function getNotifications(userId: string, demo: boolean): Promise<NotificationItem[]> {
  if (demo) return DEMO_NOTIFICATIONS;
  const db = await getServerSupabase();
  if (!db) return [];

  const { data } = await db
    .from('notifications')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(50);

  return (data ?? []).map((row) => ({
    id: row.id,
    kind: row.kind,
    title: row.title,
    body: row.body,
    href: row.href,
    readAt: row.read_at,
    createdAt: row.created_at,
  }));
}

export async function getQuote(dossierId: string | null, demo: boolean): Promise<Quote | null> {
  if (demo) return DEMO_QUOTE;
  // Sans dossier, il n'existe aucun devis. Afficher le devis fictif ferait
  // croire à une facture réelle, avec un acompte marqué comme payé.
  if (!dossierId) return null;

  const db = await getServerSupabase();
  if (!db) return null;

  const { data: quote } = await db
    .from('quotes')
    .select('*')
    .eq('dossier_id', dossierId)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle();

  if (!quote) return null;

  const [{ data: items }, { data: payments }] = await Promise.all([
    db.from('quote_items').select('*').eq('quote_id', quote.id).order('position'),
    db.from('payments').select('*').eq('quote_id', quote.id).order('position'),
  ]);

  return {
    id: quote.id,
    dossierId: quote.dossier_id,
    reference: quote.reference,
    currency: quote.currency,
    status: quote.status,
    totalAmount: Number(quote.total_amount),
    issuedAt: quote.issued_at,
    items: (items ?? []).map((i) => ({ id: i.id, label: i.label, amount: Number(i.amount) })),
    payments: (payments ?? []).map((p) => ({
      id: p.id,
      label: p.label,
      amount: Number(p.amount),
      status: p.status,
      dueDate: p.due_date,
      paidAt: p.paid_at,
    })),
  };
}

/* ------------------------------------------------------------------ */
/* Espace consultant                                                   */
/* ------------------------------------------------------------------ */

export async function getConsultantDossiers(consultantId: string, demo: boolean): Promise<Dossier[]> {
  if (demo) return DEMO_DOSSIERS;
  const db = await getServerSupabase();
  if (!db) return [];

  const { data } = await db
    .from('dossiers')
    .select('*')
    .eq('consultant_id', consultantId)
    .order('updated_at', { ascending: false });

  return hydrateDossiers(db, data ?? []);
}

export async function getConsultantOverview(consultantId: string, demo: boolean): Promise<ConsultantOverview> {
  const dossiers = await getConsultantDossiers(consultantId, demo);
  return {
    studentCount: new Set(dossiers.map((d) => d.student.id)).size,
    activeDossierCount: dossiers.filter((d) => d.status !== 'cancelled' && d.status !== 'arrived').length,
    admittedCount: dossiers.filter((d) => d.status === 'admitted').length,
    invitationCount: dossiers.filter((d) => d.status === 'invitation').length,
    recentDossiers: dossiers.slice(0, 5),
  };
}

export async function getQuotesForDossiers(dossierIds: string[], demo: boolean): Promise<Quote[]> {
  if (demo) return [DEMO_QUOTE];
  const db = await getServerSupabase();
  if (!db || dossierIds.length === 0) return [];

  const { data: quotes } = await db
    .from('quotes')
    .select('*')
    .in('dossier_id', dossierIds)
    .order('created_at', { ascending: false });

  if (!quotes || quotes.length === 0) return [];

  const ids = quotes.map((q) => q.id);
  const [{ data: items }, { data: payments }] = await Promise.all([
    db.from('quote_items').select('*').in('quote_id', ids).order('position'),
    db.from('payments').select('*').in('quote_id', ids).order('position'),
  ]);

  return quotes.map((quote) => ({
    id: quote.id,
    dossierId: quote.dossier_id,
    reference: quote.reference,
    currency: quote.currency,
    status: quote.status,
    totalAmount: Number(quote.total_amount),
    issuedAt: quote.issued_at,
    items: (items ?? []).filter((i) => i.quote_id === quote.id).map((i) => ({ id: i.id, label: i.label, amount: Number(i.amount) })),
    payments: (payments ?? []).filter((p) => p.quote_id === quote.id).map((p) => ({
      id: p.id,
      label: p.label,
      amount: Number(p.amount),
      status: p.status,
      dueDate: p.due_date,
      paidAt: p.paid_at,
    })),
  }));
}

/* ------------------------------------------------------------------ */
/* Référentiels partagés                                               */
/* ------------------------------------------------------------------ */

export async function getUniversities(demo: boolean): Promise<UniversityItem[]> {
  if (demo) return DEMO_UNIVERSITIES;
  const db = await getServerSupabase();
  if (!db) return [];

  const { data } = await db.from('universities').select('*').order('name');
  const { data: dossiers } = await db.from('dossiers').select('university_id');

  const counts = new Map<string, number>();
  for (const row of dossiers ?? []) {
    if (row.university_id) counts.set(row.university_id, (counts.get(row.university_id) ?? 0) + 1);
  }

  return (data ?? []).map((row) => ({
    id: row.id,
    slug: row.slug,
    name: row.name,
    city: row.city,
    country: row.country,
    tuitionMinRub: row.tuition_min_rub,
    tuitionMaxRub: row.tuition_max_rub,
    isActive: row.is_active,
    dossierCount: counts.get(row.id) ?? 0,
  }));
}

export async function getPricing(demo: boolean): Promise<PricingItem[]> {
  if (demo) return DEMO_PRICING;
  const db = await getServerSupabase();
  if (!db) return [];

  const { data } = await db.from('pricing_items').select('*').order('position');
  return (data ?? []).map((row) => ({
    id: row.id,
    key: row.key,
    label: row.label,
    amount: Number(row.amount),
    currency: row.currency,
  }));
}

/* ------------------------------------------------------------------ */
/* Espace administration                                               */
/* ------------------------------------------------------------------ */

export interface ProfileWithRole extends PersonRef {
  role: AppRole;
  createdAt: string;
}

/** Annuaire complet, pour l'écran d'attribution des rôles (admin). */
export async function getAllProfiles(demo: boolean): Promise<ProfileWithRole[]> {
  if (demo) {
    return [DEMO_STUDENT, DEMO_CONSULTANT, DEMO_ADMIN].map((u) => ({
      id: u.id,
      fullName: u.fullName,
      email: u.email,
      avatarUrl: null,
      role: u.role,
      createdAt: new Date().toISOString(),
    }));
  }

  const db = await getServerSupabase();
  if (!db) return [];

  const { data } = await db
    .from('profiles')
    .select('id, full_name, email, avatar_url, role, created_at')
    .order('created_at', { ascending: false });

  return (data ?? []).map((row) => ({
    id: row.id,
    fullName: row.full_name,
    email: row.email,
    avatarUrl: row.avatar_url,
    role: row.role,
    createdAt: row.created_at,
  }));
}

/**
 * Étudiants n'ayant encore aucun dossier — les seuls pour lesquels en ouvrir
 * un ait du sens depuis le formulaire de création.
 */
export async function getStudentsWithoutDossier(demo: boolean): Promise<PersonRef[]> {
  if (demo) return [{ id: DEMO_STUDENT.id, fullName: DEMO_STUDENT.fullName, email: DEMO_STUDENT.email, avatarUrl: null }];

  const db = await getServerSupabase();
  if (!db) return [];

  const [{ data: students }, { data: dossiers }] = await Promise.all([
    db.from('profiles').select('id, full_name, email, avatar_url').eq('role', 'student').order('full_name'),
    db.from('dossiers').select('student_id'),
  ]);

  const taken = new Set((dossiers ?? []).map((d) => d.student_id));
  return (students ?? [])
    .filter((row) => !taken.has(row.id))
    .map((row) => toPersonRef(row) ?? UNKNOWN_PERSON);
}

/** Tous les dossiers de la plateforme (RLS : réservé aux administrateurs). */
export async function getAllDossiers(demo: boolean): Promise<Dossier[]> {
  if (demo) return DEMO_DOSSIERS;
  const db = await getServerSupabase();
  if (!db) return [];

  const { data } = await db.from('dossiers').select('*').order('updated_at', { ascending: false }).limit(200);
  return hydrateDossiers(db, data ?? []);
}

export async function getProfilesByRole(role: AppRole, demo: boolean): Promise<PersonRef[]> {
  if (demo) {
    if (role === 'consultant') return [DEMO_CONSULTANT, DEMO_ADMIN].map((u) => ({ id: u.id, fullName: u.fullName, email: u.email, avatarUrl: null }));
    if (role === 'admin') return [{ id: DEMO_ADMIN.id, fullName: DEMO_ADMIN.fullName, email: DEMO_ADMIN.email, avatarUrl: null }];
    return [DEMO_STUDENT, ...DEMO_DOSSIERS.slice(1).map((d) => d.student)].map((u) => ({
      id: u.id,
      fullName: 'fullName' in u ? u.fullName : '',
      email: u.email,
      avatarUrl: null,
    }));
  }

  const db = await getServerSupabase();
  if (!db) return [];

  const { data } = await db
    .from('profiles')
    .select('id, full_name, email, avatar_url')
    .eq('role', role)
    .order('full_name');

  return (data ?? []).map((row) => toPersonRef(row) ?? UNKNOWN_PERSON);
}

const MONTH_LABELS = ['Janv.', 'Févr.', 'Mars', 'Avr.', 'Mai', 'Juin', 'Juil.', 'Août', 'Sep.', 'Oct.', 'Nov.', 'Déc.'];

/** Agrège des horodatages en série mensuelle sur les 6 derniers mois. */
function monthlySeries(dates: string[], valueOf: (index: number) => number = () => 1): SeriesPoint[] {
  const now = new Date();
  const buckets: SeriesPoint[] = [];
  const keys: string[] = [];

  for (let offset = 5; offset >= 0; offset -= 1) {
    const d = new Date(now.getFullYear(), now.getMonth() - offset, 1);
    keys.push(`${d.getFullYear()}-${d.getMonth()}`);
    buckets.push({ label: MONTH_LABELS[d.getMonth()], value: 0 });
  }

  dates.forEach((iso, index) => {
    const d = new Date(iso);
    const position = keys.indexOf(`${d.getFullYear()}-${d.getMonth()}`);
    if (position >= 0) buckets[position].value += valueOf(index);
  });

  return buckets;
}

export async function getAdminOverview(demo: boolean): Promise<AdminOverview> {
  if (demo) return DEMO_ADMIN_OVERVIEW;
  const db = await getServerSupabase();
  if (!db) return { ...DEMO_ADMIN_OVERVIEW, studentCount: 0, consultantCount: 0, dossierCount: 0, revenue: 0 };

  const [{ count: studentCount }, { count: consultantCount }, { data: dossiers }, { data: payments }] = await Promise.all([
    db.from('profiles').select('id', { count: 'exact', head: true }).eq('role', 'student'),
    db.from('profiles').select('id', { count: 'exact', head: true }).eq('role', 'consultant'),
    db.from('dossiers').select('id, status, consultant_id, created_at'),
    db.from('payments').select('amount, paid_at, status').eq('status', 'paid'),
  ]);

  const paid = payments ?? [];
  const revenue = paid.reduce((sum, p) => sum + Number(p.amount), 0);

  const consultants = await loadPeople(db, (dossiers ?? []).map((d) => d.consultant_id));
  const perConsultant = new Map<string, number>();
  for (const d of dossiers ?? []) {
    if (d.consultant_id) perConsultant.set(d.consultant_id, (perConsultant.get(d.consultant_id) ?? 0) + 1);
  }

  return {
    studentCount: studentCount ?? 0,
    consultantCount: consultantCount ?? 0,
    dossierCount: (dossiers ?? []).length,
    revenue,
    currency: 'RUB',
    admissionsSeries: monthlySeries((dossiers ?? []).filter((d) => d.status === 'admitted').map((d) => d.created_at)),
    revenueSeries: monthlySeries(
      paid.map((p) => p.paid_at ?? new Date().toISOString()),
      (index) => Number(paid[index].amount),
    ),
    topConsultants: [...perConsultant.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([id, dossierCount]) => ({
        consultant: consultants.get(id) ?? UNKNOWN_PERSON,
        dossierCount,
        revenue: 0,
      })),
  };
}

export async function getAuditLogs(demo: boolean): Promise<AuditLogItem[]> {
  if (demo) return DEMO_LOGS;
  const db = await getServerSupabase();
  if (!db) return [];

  const { data } = await db
    .from('audit_logs')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(50);

  const actors = await loadPeople(db, (data ?? []).map((row) => row.actor_id));

  return (data ?? []).map((row) => ({
    id: row.id,
    action: row.action,
    entity: row.entity,
    actorName: row.actor_id ? actors.get(row.actor_id)?.fullName ?? '—' : 'Système',
    createdAt: row.created_at,
  }));
}
