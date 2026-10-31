import type { ReactNode } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { initialsOf } from '../utils/format';

/* ------------------------------------------------------------------ */
/* Surfaces                                                            */
/* ------------------------------------------------------------------ */

export function Card({ children, className = '', as: Tag = 'div' }: { children: ReactNode; className?: string; as?: 'div' | 'section' | 'article' }) {
  return <Tag className={`rs-card p-4 ${className}`}>{children}</Tag>;
}

export function SectionTitle({ children, action }: { children: ReactNode; action?: ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-3 mb-2.5 mt-6 first:mt-0">
      <h2 className="text-[15px] font-semibold text-[var(--rs-ink)]">{children}</h2>
      {action}
    </div>
  );
}

export function EmptyState({ title, hint, action }: { title: string; hint?: string; action?: ReactNode }) {
  return (
    <div className="rs-card-flat px-4 py-10 text-center">
      <p className="text-sm font-medium text-[var(--rs-ink)]">{title}</p>
      {hint ? <p className="mt-1.5 text-[13px] text-[var(--rs-muted)]">{hint}</p> : null}
      {action ? <div className="mt-4 flex justify-center">{action}</div> : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Statuts                                                             */
/* ------------------------------------------------------------------ */

export type PillTone = 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'primary';

export function StatusPill({ tone, label }: { tone: PillTone; label: string }) {
  return <span className={`rs-pill rs-pill-${tone}`}>{label}</span>;
}

/* ------------------------------------------------------------------ */
/* Divers                                                              */
/* ------------------------------------------------------------------ */

export function Avatar({ name, size = 40, url }: { name: string; size?: number; url?: string | null }) {
  const style = { width: size, height: size, fontSize: Math.round(size / 2.8) };

  if (url) {
    // Avatars issus du stockage utilisateur : dimensions fixes, pas d'optimisation nécessaire.
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={url} alt="" style={style} className="rounded-full object-cover shrink-0" loading="lazy" />;
  }

  return (
    <span
      aria-hidden="true"
      style={style}
      className="shrink-0 rounded-full grid place-items-center font-semibold bg-[var(--rs-primary-soft)] text-[var(--rs-primary)]"
    >
      {initialsOf(name)}
    </span>
  );
}

export function ProgressBar({ value, tone = 'light' }: { value: number; tone?: 'light' | 'dark' }) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div
      className="rs-progress"
      style={tone === 'dark' ? { backgroundColor: 'var(--rs-primary-soft)' } : undefined}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <span style={{ width: `${clamped}%`, backgroundColor: tone === 'dark' ? 'var(--rs-primary)' : '#ffffff' }} />
    </div>
  );
}

export function KeyValue({ icon, label, value }: { icon?: ReactNode; label: string; value: ReactNode }) {
  return (
    <div className="flex items-start gap-3 py-3">
      {icon ? <span className="mt-0.5 text-[var(--rs-muted)]" aria-hidden="true">{icon}</span> : null}
      <span className="flex-1 min-w-0">
        <span className="block text-[12px] text-[var(--rs-muted)]">{label}</span>
        <span className="block text-[14px] font-medium text-[var(--rs-ink)] break-words">{value}</span>
      </span>
    </div>
  );
}

/**
 * Indicateur chiffré. Avec `href`, la tuile devient le point d'entrée vers
 * l'écran qui détaille le chiffre : sur un tableau de bord, c'est là que
 * l'utilisateur cherche à cliquer.
 */
export function StatTile({
  value,
  label,
  tone = 'default',
  href,
}: {
  value: ReactNode;
  label: string;
  tone?: 'default' | 'primary';
  href?: string;
}) {
  const className = `rs-card px-3 py-3.5 ${tone === 'primary' ? 'bg-[var(--rs-primary-soft)] border-transparent' : ''}`;

  const body = (
    <>
      <p className="text-[22px] font-bold leading-none text-[var(--rs-primary)]">{value}</p>
      <p className="mt-1.5 flex items-center gap-1 text-[12px] leading-tight text-[var(--rs-muted)]">
        <span className="min-w-0 truncate">{label}</span>
        {href ? <ChevronRight size={14} className="shrink-0 rtl:rotate-180" aria-hidden="true" /> : null}
      </p>
    </>
  );

  if (!href) return <div className={className}>{body}</div>;

  return (
    <Link href={href} className={`${className} block hover:border-[var(--rs-primary)] transition-colors`}>
      {body}
    </Link>
  );
}

/** Ligne de liste cliquable (menus de profil, réglages, listes d'entités). */
export function LinkRow({
  href,
  icon,
  title,
  subtitle,
  trailing,
  tone = 'default',
}: {
  href: string;
  icon?: ReactNode;
  title: string;
  subtitle?: ReactNode;
  trailing?: ReactNode;
  tone?: 'default' | 'danger';
}) {
  return (
    <Link href={href} className="rs-row hover:bg-[var(--rs-primary-soft)] transition-colors">
      {icon ? (
        <span className={tone === 'danger' ? 'text-[var(--rs-danger)]' : 'text-[var(--rs-muted)]'} aria-hidden="true">
          {icon}
        </span>
      ) : null}
      <span className="flex-1 min-w-0">
        <span className={`block text-[14px] font-medium truncate ${tone === 'danger' ? 'text-[var(--rs-danger)]' : 'text-[var(--rs-ink)]'}`}>
          {title}
        </span>
        {subtitle ? <span className="block text-[12px] text-[var(--rs-muted)] truncate">{subtitle}</span> : null}
      </span>
      {trailing ?? <ChevronRight size={16} className="text-[var(--rs-muted)] shrink-0 rtl:rotate-180" aria-hidden="true" />}
    </Link>
  );
}

export function CardList({ children }: { children: ReactNode }) {
  return <div className="rs-card overflow-hidden divide-y divide-[var(--rs-line)]">{children}</div>;
}
