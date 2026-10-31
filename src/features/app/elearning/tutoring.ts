'use server';

import { revalidatePath } from 'next/cache';
import { getServerDb } from '../../../lib/neon/server';
import { getAppSession, requireRole } from '../data/session';

export interface SlotOption {
  id: string;
  teacherName: string;
  startsAt: string;
  endsAt: string;
}

export interface BookingRecord {
  id: string;
  status: 'requested' | 'confirmed' | 'done' | 'cancelled';
  startsAt: string;
  teacherName: string;
  /** Renseigné seulement lorsque la réservation est confirmée. */
  roomName: string | null;
}

/** Créneaux à venir encore libres. */
export async function listOpenSlots(): Promise<SlotOption[]> {
  await requireRole(['student', 'consultant', 'admin']);
  const client = await getServerDb();
  if (!client) return [];

  const { data: slots } = await client
    .from('tutoring_slots')
    .select('id, teacher_id, starts_at, ends_at')
    .gt('starts_at', new Date().toISOString())
    .order('starts_at')
    .limit(50);

  if (!slots?.length) return [];

  // Un créneau déjà réservé disparaît de la liste : `slot_id` est unique
  // en base, donc une seconde réservation échouerait de toute façon.
  const { data: taken } = await client
    .from('tutoring_bookings')
    .select('slot_id')
    .in('slot_id', slots.map((s) => s.id as string))
    .neq('status', 'cancelled');

  const booked = new Set((taken ?? []).map((b) => b.slot_id as string));
  const free = slots.filter((s) => !booked.has(s.id as string));
  if (!free.length) return [];

  const { data: profiles } = await client
    .from('profiles')
    .select('id, full_name')
    .in('id', [...new Set(free.map((s) => s.teacher_id as string))]);

  const names = new Map((profiles ?? []).map((p) => [p.id as string, p.full_name as string]));

  return free.map((s) => ({
    id: s.id as string,
    teacherName: names.get(s.teacher_id as string) ?? '—',
    startsAt: s.starts_at as string,
    endsAt: s.ends_at as string,
  }));
}

export async function listMyBookings(): Promise<BookingRecord[]> {
  const session = await getAppSession();
  if (!session) return [];

  const client = await getServerDb();
  if (!client) return [];

  const { data } = await client
    .from('tutoring_bookings')
    .select('id, status, room_name, slot_id')
    .eq('student_id', session.user.id)
    .neq('status', 'cancelled')
    .order('created_at', { ascending: false })
    .limit(20);

  if (!data?.length) return [];

  const { data: slots } = await client
    .from('tutoring_slots')
    .select('id, teacher_id, starts_at')
    .in('id', data.map((b) => b.slot_id as string));

  const slotById = new Map((slots ?? []).map((s) => [s.id as string, s]));

  const { data: profiles } = await client
    .from('profiles')
    .select('id, full_name')
    .in('id', [...new Set((slots ?? []).map((s) => s.teacher_id as string))]);

  const names = new Map((profiles ?? []).map((p) => [p.id as string, p.full_name as string]));

  return data.map((b) => {
    const slot = slotById.get(b.slot_id as string);
    return {
      id: b.id as string,
      status: b.status as BookingRecord['status'],
      startsAt: (slot?.starts_at as string) ?? '',
      teacherName: names.get((slot?.teacher_id as string) ?? '') ?? '—',
      roomName: (b.room_name as string | null) ?? null,
    };
  });
}

export async function requestSlot(slotId: string, note: string): Promise<{ ok: boolean }> {
  const session = await getAppSession();
  if (!session) return { ok: false };

  const client = await getServerDb();
  if (!client) return { ok: false };

  const { error } = await client.from('tutoring_bookings').insert({
    slot_id: slotId,
    student_id: session.user.id,
    status: 'requested',
    student_note: note.trim() || null,
  });

  revalidatePath('/elearning/visio');
  return { ok: !error };
}

export async function cancelBooking(bookingId: string): Promise<{ ok: boolean }> {
  const session = await getAppSession();
  if (!session) return { ok: false };

  const client = await getServerDb();
  if (!client) return { ok: false };

  const { error } = await client
    .from('tutoring_bookings')
    .update({ status: 'cancelled' })
    .eq('id', bookingId)
    .eq('student_id', session.user.id);

  revalidatePath('/elearning/visio');
  return { ok: !error };
}
