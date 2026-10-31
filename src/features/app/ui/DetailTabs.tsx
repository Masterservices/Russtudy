'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface DetailTab {
  href: string;
  label: string;
}

/** Onglets d'une fiche (infos / documents / timeline / devis), pilotés par la route. */
export default function DetailTabs({ tabs }: { tabs: DetailTab[] }) {
  const pathname = usePathname();
  const active = tabs.reduce<string | null>(
    (best, tab) => (pathname === tab.href && (!best || tab.href.length > best.length) ? tab.href : best),
    null,
  );

  return (
    <nav className="flex gap-1.5 p-1 rounded-full bg-[var(--rs-card)] border border-[var(--rs-line)]" aria-label="Sections">
      {tabs.map((tab) => {
        const current = tab.href === (active ?? tabs[0].href);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            aria-current={current ? 'page' : undefined}
            className={`flex-1 text-center px-2.5 py-2 rounded-full text-[13px] font-semibold transition-colors ${
              current ? 'bg-[var(--rs-primary)] text-white' : 'text-[var(--rs-muted)] hover:bg-[var(--rs-primary-soft)]'
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
