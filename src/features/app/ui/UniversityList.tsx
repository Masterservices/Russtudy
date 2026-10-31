import { GraduationCap } from 'lucide-react';
import type { AppDictionary, AppLang } from '../i18n';
import { interpolate } from '../i18n';
import type { UniversityItem } from '../types';
import { formatAmount } from '../utils/format';
import { EmptyState } from './primitives';

/** Liste des universités partenaires — espaces consultant et administration. */
export default function UniversityList({
  universities,
  t,
  lang,
}: {
  universities: UniversityItem[];
  t: AppDictionary;
  lang: AppLang;
}) {
  if (universities.length === 0) return <EmptyState title={t.common.empty} />;

  return (
    <ul className="rs-card overflow-hidden divide-y divide-[var(--rs-line)]">
      {universities.map((university) => (
        <li key={university.id} className="rs-row">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-[var(--rs-primary-soft)] text-[var(--rs-primary)] shrink-0" aria-hidden="true">
            <GraduationCap size={17} />
          </span>
          <span className="flex-1 min-w-0">
            <span className="block text-[14px] font-semibold truncate">{university.name}</span>
            <span className="block text-[12px] text-[var(--rs-muted)] truncate">
              {university.city}
              {university.tuitionMinRub
                ? ` · ${formatAmount(university.tuitionMinRub, 'RUB', lang)}`
                : ''}
            </span>
          </span>
          <span className="rs-pill rs-pill-neutral shrink-0">
            {interpolate(t.admin.dossierCount, { n: university.dossierCount })}
          </span>
        </li>
      ))}
    </ul>
  );
}
