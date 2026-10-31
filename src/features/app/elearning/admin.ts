'use server';

import { revalidatePath } from 'next/cache';
import { getServerSupabase } from '../../../lib/supabase/server';
import { requireRole } from '../data/session';

export interface EnrollmentRecord {
  id: string;
  userId: string;
  fullName: string;
  email: string;
  courseSlug: string;
  courseTitle: string;
  status: 'active' | 'expired' | 'revoked';
  grantedAt: string;
  expiresAt: string | null;
  note: string | null;
}

export interface AdminCourseOption {
  id: string;
  slug: string;
  label: string;
}

/**
 * Accès aux parcours payants.
 *
 * Au lancement, l'ouverture est manuelle : un administrateur accorde
 * l'accès après l'échange commercial. La table est déjà structurée pour
 * qu'un prestataire de paiement y écrive plus tard sans rien changer
 * au reste — `granted_by` restera alors simplement vide.
 */
export async function listEnrollments(): Promise<EnrollmentRecord[]> {
  await requireRole(['admin']);
  const client = await getServerSupabase();
  if (!client) return [];

  const { data } = await client
    .from('enrollments')
    .select('id, user_id, course_id, status, granted_at, expires_at, note')
    .order('granted_at', { ascending: false })
    .limit(100);

  if (!data?.length) return [];

  const userIds = [...new Set(data.map((e) => e.user_id as string))];
  const courseIds = [...new Set(data.map((e) => e.course_id as string))];

  const [{ data: profiles }, { data: courses }] = await Promise.all([
    client.from('profiles').select('id, full_name, email').in('id', userIds),
    client.from('courses').select('id, slug, title').in('id', courseIds),
  ]);

  const byUser = new Map((profiles ?? []).map((p) => [p.id as string, p]));
  const byCourse = new Map((courses ?? []).map((c) => [c.id as string, c]));

  return data.map((e) => {
    const profile = byUser.get(e.user_id as string);
    const course = byCourse.get(e.course_id as string);
    const title = (course?.title ?? {}) as Record<string, string>;
    return {
      id: e.id as string,
      userId: e.user_id as string,
      fullName: (profile?.full_name as string) ?? '—',
      email: (profile?.email as string) ?? '—',
      courseSlug: (course?.slug as string) ?? '—',
      courseTitle: title.fr ?? title.ru ?? title.en ?? (course?.slug as string) ?? '—',
      status: e.status as EnrollmentRecord['status'],
      grantedAt: e.granted_at as string,
      expiresAt: (e.expires_at as string | null) ?? null,
      note: (e.note as string | null) ?? null,
    };
  });
}

export async function listAdminCourses(): Promise<AdminCourseOption[]> {
  await requireRole(['admin']);
  const client = await getServerSupabase();
  if (!client) return [];

  const { data } = await client.from('courses').select('id, slug, title').order('position');
  return (data ?? []).map((c) => {
    const title = (c.title ?? {}) as Record<string, string>;
    return {
      id: c.id as string,
      slug: c.slug as string,
      label: title.fr ?? title.ru ?? title.en ?? (c.slug as string),
    };
  });
}

export interface GrantResult {
  ok: boolean;
  /** Message destiné à l'administrateur, jamais à l'étudiant. */
  error?: 'no_database' | 'user_not_found' | 'course_not_found' | 'write_failed';
}

/**
 * Ouvre un accès à partir de l'adresse e-mail de l'étudiant.
 *
 * L'e-mail est plus sûr qu'un identifiant pour une saisie manuelle :
 * un identifiant mal recopié ouvrirait l'accès au mauvais compte en
 * silence, alors qu'un e-mail inconnu échoue franchement.
 */
export async function grantAccess(formData: FormData): Promise<GrantResult> {
  const { user } = await requireRole(['admin']);
  const client = await getServerSupabase();
  if (!client) return { ok: false, error: 'no_database' };

  const email = String(formData.get('email') ?? '').trim().toLowerCase();
  const courseId = String(formData.get('courseId') ?? '');
  const months = Number(formData.get('months') ?? 0);
  const note = String(formData.get('note') ?? '').trim();

  const { data: profile } = await client
    .from('profiles')
    .select('id')
    .eq('email', email)
    .maybeSingle();
  if (!profile) return { ok: false, error: 'user_not_found' };

  const { data: course } = await client.from('courses').select('id').eq('id', courseId).maybeSingle();
  if (!course) return { ok: false, error: 'course_not_found' };

  const expiresAt =
    months > 0 ? new Date(Date.now() + months * 30 * 24 * 60 * 60 * 1000).toISOString() : null;

  const { error } = await client.from('enrollments').upsert(
    {
      user_id: profile.id as string,
      course_id: courseId,
      status: 'active',
      granted_by: user.id,
      granted_at: new Date().toISOString(),
      expires_at: expiresAt,
      note: note || null,
    },
    { onConflict: 'user_id,course_id' },
  );

  if (error) return { ok: false, error: 'write_failed' };

  revalidatePath('/app/admin/acces-cours');
  return { ok: true };
}

export async function revokeAccess(enrollmentId: string): Promise<GrantResult> {
  await requireRole(['admin']);
  const client = await getServerSupabase();
  if (!client) return { ok: false, error: 'no_database' };

  const { error } = await client
    .from('enrollments')
    .update({ status: 'revoked' })
    .eq('id', enrollmentId);

  if (error) return { ok: false, error: 'write_failed' };

  revalidatePath('/app/admin/acces-cours');
  return { ok: true };
}
