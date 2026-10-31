import Link from 'next/link';
import { Bell } from 'lucide-react';

/** Cloche d'en-tête avec le nombre de notifications non lues. */
export default function NotificationBell({ href, count, label }: { href: string; count: number; label: string }) {
  return (
    <Link href={href} className="relative shrink-0 p-2 rounded-full hover:bg-[var(--rs-primary-soft)]" aria-label={label}>
      <Bell size={20} aria-hidden="true" />
      {count > 0 ? (
        <span className="absolute top-1 end-1 min-w-[16px] h-4 px-1 rounded-full bg-[var(--rs-danger)] text-white text-[10px] font-bold grid place-items-center">
          {count}
        </span>
      ) : null}
    </Link>
  );
}
