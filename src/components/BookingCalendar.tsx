import React, { useMemo, useState } from 'react';
import { Lang, Translation } from '../i18n';

interface BookingCalendarProps {
  t: Translation;
  lang: Lang;
}

const SLOTS = ['10:00', '11:30', '14:00', '15:30', '17:00'];

interface DayOption {
  date: Date;
  label: string;
}

/* 7 prochains jours ouvrés (dimanche exclu), libellés dans la langue active */
function buildDays(lang: Lang): DayOption[] {
  const locale = lang === 'ar' ? 'ar-TN' : lang === 'en' ? 'en-GB' : lang === 'ru' ? 'ru-RU' : 'fr-FR';
  /* Deux formatters distincts + séparateur fixe : un formatter combiné
     weekday+day+month peut ponctuer différemment selon la version ICU
     du serveur (SSR) vs du navigateur (hydratation), causant un mismatch. */
  const weekdayFmt = new Intl.DateTimeFormat(locale, { weekday: 'short' });
  const dateFmt = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short' });
  const days: DayOption[] = [];
  const cursor = new Date();
  while (days.length < 7) {
    cursor.setDate(cursor.getDate() + 1);
    if (cursor.getDay() === 0) continue;
    days.push({ date: new Date(cursor), label: `${weekdayFmt.format(cursor)} ${dateFmt.format(cursor)}` });
  }
  return days;
}

/* Disponibilité pseudo-aléatoire mais déterministe (stable entre rendus) */
const isSlotTaken = (date: Date, slotIdx: number) => (date.getDate() + slotIdx * 3) % 5 === 2;

export default function BookingCalendar({ t, lang }: BookingCalendarProps) {
  const days = useMemo(() => buildDays(lang), [lang]);

  const [typeId, setTypeId] = useState(t.booking.types[0].id);
  const [dayIdx, setDayIdx] = useState(0);
  const [slot, setSlot] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const selectedType = t.booking.types.find((ty) => ty.id === typeId) ?? t.booking.types[0];
  const selectedDay = days[dayIdx];
  const isZoom = typeId === 'zoom';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const contactOk = isZoom ? email.trim() : phone.trim();
    if (!slot || !name.trim() || !contactOk) {
      setError(t.booking.errorFill);
      return;
    }
    setError('');
    try {
      localStorage.setItem(
        'rs_booking',
        JSON.stringify({ type: typeId, day: selectedDay.date.toISOString(), slot, name, phone, email })
      );
    } catch {
      /* stockage local indisponible : la confirmation WhatsApp suffit */
    }
    setConfirmed(true);
  };

  const whatsappUrl = useMemo(() => {
    const contactLine = isZoom ? `• Email: ${email}` : `• WhatsApp: +216 ${phone}`;
    const msg = [
      t.booking.whatsappIntro,
      `• ${t.booking.typeWord}: ${selectedType.label}`,
      `• ${t.booking.dayWord}: ${selectedDay?.label ?? ''}`,
      `• ${t.booking.slotWord}: ${slot ?? ''}`,
      `• ${t.booking.nameWord}: ${name}`,
      contactLine,
    ].join('\n');
    return `https://wa.me/79964334489?text=${encodeURIComponent(msg)}`;
  }, [t, selectedType, selectedDay, slot, name, phone, email, isZoom]);

  if (confirmed) {
    return (
      <div className="t-card t-card-shadow p-8 md:p-10 text-center max-w-xl mx-auto space-y-4">
        <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto t-c4">📅</div>
        <h3 className="t-h text-2xl">{t.booking.confirmedTitle}</h3>
        <p className="text-sm t-muted leading-relaxed">{t.booking.confirmedText}</p>
        <div className="t-card p-4 text-left rtl:text-right text-xs font-mono space-y-1 max-w-sm mx-auto">
          <div>• {t.booking.typeWord} : {selectedType.icon} {selectedType.label}</div>
          <div>• {t.booking.dayWord} : {selectedDay?.label}</div>
          <div>• {t.booking.slotWord} : {slot}</div>
          <div>• {t.booking.nameWord} : {name}</div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="t-btn-primary font-black uppercase text-xs py-3 px-6 cursor-pointer">
            {t.booking.confirmedCta} 💬
          </a>
          <button type="button" onClick={() => setConfirmed(false)} className="t-btn-light font-bold text-xs py-3 px-6 cursor-pointer">
            {t.booking.changeSlot}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="t-card t-card-shadow p-6 md:p-10 max-w-3xl mx-auto space-y-7">
      {/* Type de rendez-vous */}
      <div>
        <span className="block text-[11px] font-bold uppercase tracking-wider mb-2">{t.booking.typeLabel}</span>
        <div className="flex flex-wrap gap-2">
          {t.booking.types.map((ty) => (
            <button
              key={ty.id}
              type="button"
              onClick={() => setTypeId(ty.id)}
              className={`px-4 py-2.5 text-xs font-bold cursor-pointer ${typeId === ty.id ? 't-chip-active' : 't-chip'}`}
            >
              {ty.icon} {ty.label}
            </button>
          ))}
        </div>
      </div>

      {/* Jour */}
      <div>
        <span className="block text-[11px] font-bold uppercase tracking-wider mb-2">{t.booking.dayLabel}</span>
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {days.map((day, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => { setDayIdx(idx); setSlot(null); }}
              className={`px-4 py-2.5 text-xs font-bold whitespace-nowrap cursor-pointer ${dayIdx === idx ? 't-chip-active' : 't-chip'}`}
            >
              {day.label}
            </button>
          ))}
        </div>
      </div>

      {/* Créneau */}
      <div>
        <span className="block text-[11px] font-bold uppercase tracking-wider mb-2">{t.booking.slotLabel}</span>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
          {SLOTS.map((time, idx) => {
            const taken = isSlotTaken(selectedDay.date, idx);
            return (
              <button
                key={time}
                type="button"
                disabled={taken}
                onClick={() => setSlot(time)}
                className={`py-2.5 text-xs font-bold cursor-pointer disabled:cursor-not-allowed disabled:opacity-35 disabled:line-through ${slot === time ? 't-chip-active' : 't-chip'}`}
              >
                {taken ? t.booking.slotTaken : time}
              </button>
            );
          })}
        </div>
      </div>

      {/* Coordonnées */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">{t.booking.nameLabel}</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.booking.namePlaceholder}
            className="t-input w-full px-3 py-2.5 text-sm"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider mb-1">
            {isZoom ? t.booking.emailLabel : t.booking.phoneLabel}
          </label>
          {isZoom ? (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.booking.emailPlaceholder}
              className="t-input w-full px-3 py-2.5 text-sm"
              dir="ltr"
            />
          ) : (
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={t.booking.phonePlaceholder}
              className="t-input w-full px-3 py-2.5 text-sm"
              dir="ltr"
            />
          )}
        </div>
      </div>

      {error && <p className="t-red-text text-xs font-bold">{error}</p>}

      <button type="submit" className="t-btn-primary w-full font-black uppercase text-xs py-4 cursor-pointer">
        {t.booking.submit} ✓
      </button>
    </form>
  );
}
