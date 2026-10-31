import { BookOpen, CalendarDays, CircleDot, Clock, GraduationCap, UserRound } from 'lucide-react';
import type { AppDictionary, AppLang } from '../i18n';
import type { Dossier } from '../types';
import { formatDate } from '../utils/format';
import { KeyValue, StatusPill } from './primitives';
import { dossierBadge } from './status';

/** Fiche d'identité d'un dossier, partagée par l'espace étudiant et consultant. */
export default function DossierInfoCard({ dossier, t, lang }: { dossier: Dossier; t: AppDictionary; lang: AppLang }) {
  return (
    <div className="rs-card px-4 divide-y divide-[var(--rs-line)]">
      <KeyValue icon={<BookOpen size={17} />} label={t.student.program} value={dossier.program ?? '—'} />
      {dossier.university ? (
        <KeyValue
          icon={<GraduationCap size={17} />}
          label={t.student.university}
          value={`${dossier.university.name} · ${dossier.university.city}`}
        />
      ) : null}
      <KeyValue icon={<CalendarDays size={17} />} label={t.student.startDate} value={formatDate(dossier.startDate, lang)} />
      <KeyValue
        icon={<UserRound size={17} />}
        label={t.student.consultant}
        value={dossier.consultant?.fullName ?? t.student.unassigned}
      />
      <KeyValue icon={<Clock size={17} />} label={t.student.createdAt} value={formatDate(dossier.createdAt, lang)} />
      <KeyValue
        icon={<CircleDot size={17} />}
        label={t.student.status}
        value={<StatusPill {...dossierBadge(dossier.status, t)} />}
      />
    </div>
  );
}
