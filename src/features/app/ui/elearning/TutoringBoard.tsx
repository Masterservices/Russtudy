'use client';

import { useState, useTransition } from 'react';
import TeacherBubble from './TeacherBubble';
import { cancelBooking, requestSlot, type BookingRecord, type SlotOption } from '../../elearning/tutoring';

const LOCALE: Record<string, string> = { fr: 'fr-FR', en: 'en-GB', ar: 'ar-TN', ru: 'ru-RU' };

export default function TutoringBoard({
  slots,
  bookings,
  displayName,
  labels,
  locale,
}: {
  slots: SlotOption[];
  bookings: BookingRecord[];
  displayName: string;
  labels: Record<string, string>;
  locale: string;
}) {
  const [note, setNote] = useState('');
  const [pending, startTransition] = useTransition();
  const [message, setMessage] = useState('');

  const fmt = (iso: string) =>
    iso
      ? new Date(iso).toLocaleString(LOCALE[locale] ?? 'fr-FR', {
          weekday: 'short',
          day: 'numeric',
          month: 'short',
          hour: '2-digit',
          minute: '2-digit',
        })
      : '—';

  function book(slotId: string) {
    startTransition(async () => {
      const result = await requestSlot(slotId, note);
      setMessage(result.ok ? labels.visioRequested : labels.visioFailed);
    });
  }

  function drop(bookingId: string) {
    startTransition(async () => {
      const result = await cancelBooking(bookingId);
      setMessage(result.ok ? labels.visioCancelled : labels.visioFailed);
    });
  }

  const confirmed = bookings.find((b) => b.status === 'confirmed' && b.roomName);

  return (
    <div className="flex flex-col gap-5">
      {/* La bulle n'apparaît qu'une fois le créneau confirmé : avant
          cela, aucune salle n'existe et le professeur n'est pas engagé. */}
      {confirmed?.roomName && (
        <div>
          <p className="font-semibold text-[0.9rem] mb-1">
            {labels.visioWith} {confirmed.teacherName} · {fmt(confirmed.startsAt)}
          </p>
          <TeacherBubble roomName={confirmed.roomName} displayName={displayName} labels={labels} />
        </div>
      )}

      {bookings.length > 0 && (
        <div>
          <p className="text-[0.76rem] font-bold uppercase tracking-wide opacity-60 mb-2">
            {labels.visioMine}
          </p>
          <ul className="flex flex-col gap-2">
            {bookings.map((b) => (
              <li
                key={b.id}
                className="flex items-center justify-between gap-3 rounded-[14px] px-3 py-2.5 bg-black/[0.03] dark:bg-white/[0.06]"
              >
                <div className="min-w-0">
                  <p className="font-semibold text-[0.88rem] truncate">{fmt(b.startsAt)}</p>
                  <p className="text-[0.78rem] opacity-60 truncate">
                    {b.teacherName} ·{' '}
                    {b.status === 'confirmed'
                      ? labels.visioConfirmed
                      : b.status === 'requested'
                        ? labels.visioPending
                        : b.status}
                  </p>
                </div>
                {b.status !== 'done' && (
                  <button
                    type="button"
                    onClick={() => drop(b.id)}
                    disabled={pending}
                    className="text-[0.78rem] font-bold underline opacity-70 hover:opacity-100 shrink-0"
                  >
                    {labels.visioCancel}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {slots.length > 0 && (
        <div>
          <p className="text-[0.76rem] font-bold uppercase tracking-wide opacity-60 mb-2">
            {labels.visioFree}
          </p>

          <label className="flex flex-col gap-1 mb-3">
            <span className="text-[0.76rem] opacity-60">{labels.visioNote}</span>
            <input
              value={note}
              onChange={(e) => setNote(e.target.value)}
              maxLength={300}
              className="t-input rounded-[12px] px-3 py-2.5 text-[0.88rem]"
            />
          </label>

          <ul className="flex flex-col gap-2">
            {slots.map((s) => (
              <li
                key={s.id}
                className="flex items-center justify-between gap-3 rounded-[14px] px-3 py-2.5 bg-black/[0.03] dark:bg-white/[0.06]"
              >
                <div className="min-w-0">
                  <p className="font-semibold text-[0.88rem] truncate">{fmt(s.startsAt)}</p>
                  <p className="text-[0.78rem] opacity-60 truncate">{s.teacherName}</p>
                </div>
                <button
                  type="button"
                  onClick={() => book(s.id)}
                  disabled={pending}
                  className="t-btn-primary font-bold text-[0.8rem] px-4 py-2 rounded-full shrink-0 disabled:opacity-40"
                >
                  {labels.visioBook}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {message && <p className="text-[0.86rem] font-bold opacity-80">{message}</p>}
    </div>
  );
}
