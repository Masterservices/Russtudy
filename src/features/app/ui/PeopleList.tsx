import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { AppDictionary } from '../i18n';
import type { PersonRef } from '../types';
import { Avatar, EmptyState } from './primitives';

/**
 * Annuaire (étudiants, consultants) pour l'administration.
 *
 * Avec `hrefFor`, chaque ligne mène à la fiche de la personne : un annuaire
 * qui ne mène nulle part n'apprend rien sur les dossiers qu'il recense.
 */
export default function PeopleList({
  people,
  t,
  badge,
  hrefFor,
}: {
  people: PersonRef[];
  t: AppDictionary;
  badge?: string;
  hrefFor?: (person: PersonRef) => string;
}) {
  if (people.length === 0) return <EmptyState title={t.common.empty} />;

  return (
    <ul className="rs-card overflow-hidden divide-y divide-[var(--rs-line)]">
      {people.map((person) => {
        const inner = (
          <>
            <Avatar name={person.fullName} url={person.avatarUrl} size={38} />
            <span className="flex-1 min-w-0">
              <span className="block text-[14px] font-semibold truncate">{person.fullName}</span>
              <span className="block text-[12px] text-[var(--rs-muted)] truncate">{person.email}</span>
            </span>
            {badge ? <span className="rs-pill rs-pill-neutral shrink-0">{badge}</span> : null}
          </>
        );

        return (
          <li key={person.id || person.email}>
            {hrefFor && person.id ? (
              <Link href={hrefFor(person)} className="rs-row hover:bg-[var(--rs-primary-soft)] transition-colors">
                {inner}
                <ChevronRight size={16} className="text-[var(--rs-muted)] shrink-0 rtl:rotate-180" aria-hidden="true" />
              </Link>
            ) : (
              <span className="rs-row">{inner}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
