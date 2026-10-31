import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { PendingStep } from '../data/queries';
import type { AppDictionary, AppLang } from '../i18n';
import { Avatar, EmptyState } from './primitives';
import { formatDate } from '../utils/format';

/**
 * Étapes déclarées faites par un étudiant et pas encore acquises. Le consultant
 * y lit ce qu'il doit confirmer, l'administration ce qu'elle doit signer.
 */
export default function PendingSteps({
  items,
  hrefFor,
  t,
  lang,
}: {
  items: PendingStep[];
  hrefFor: (item: PendingStep) => string;
  t: AppDictionary;
  lang: AppLang;
}) {
  if (items.length === 0) return <EmptyState title={t.validation.pendingEmpty} />;

  return (
    <ul className="rs-card overflow-hidden divide-y divide-[var(--rs-line)]">
      {items.map((item) => (
        <li key={item.step.id}>
          <Link href={hrefFor(item)} className="rs-row hover:bg-[var(--rs-primary-soft)] transition-colors">
            <Avatar name={item.student.fullName} url={item.student.avatarUrl} size={36} />
            <span className="flex-1 min-w-0">
              <span className="block text-[14px] font-semibold truncate">{item.student.fullName}</span>
              <span className="block text-[12px] text-[var(--rs-muted)] truncate">
                {(t.steps as Record<string, string>)[item.step.key] ?? item.step.label}
                {item.step.requestedAt ? ` · ${formatDate(item.step.requestedAt, lang)}` : ''}
              </span>
              <span
                className={`mt-0.5 block text-[12px] font-medium ${
                  item.step.validation === 'confirmed' ? 'text-[var(--rs-primary)]' : 'text-[var(--rs-warning)]'
                }`}
              >
                {item.step.validation === 'confirmed' ? t.validation.awaitingAdmin : t.validation.awaitingConsultant}
              </span>
            </span>
            <ChevronRight size={16} className="text-[var(--rs-muted)] shrink-0 rtl:rotate-180" aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
