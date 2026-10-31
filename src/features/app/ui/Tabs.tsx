import Link from 'next/link';

export interface TabItem {
  key: string;
  label: string;
  href: string;
}

/**
 * Filtres d'écran pilotés par l'URL (`?filtre=`) : l'état est partageable,
 * conservé au retour arrière, et n'entraîne aucun JavaScript côté client.
 */
export default function Tabs({ items, active }: { items: TabItem[]; active: string }) {
  return (
    <div className="flex gap-1.5 p-1 rounded-full bg-[var(--rs-card)] border border-[var(--rs-line)]" role="tablist">
      {items.map((item) => {
        const current = item.key === active;
        return (
          <Link
            key={item.key}
            href={item.href}
            role="tab"
            aria-selected={current}
            className={`flex-1 text-center px-3 py-2 rounded-full text-[13px] font-semibold transition-colors ${
              current ? 'bg-[var(--rs-primary)] text-white' : 'text-[var(--rs-muted)] hover:bg-[var(--rs-primary-soft)]'
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
