'use client';

import { CalendarCheck, Clapperboard, NotebookPen, Search, type LucideIcon } from 'lucide-react';
import type { ShortsLabels } from '../../../features/app/elearning/shorts/labels';

export type ShortsTab = 'feed' | 'explore' | 'review' | 'notebook';

const TABS: { id: ShortsTab; icon: LucideIcon; label: keyof ShortsLabels }[] = [
  { id: 'feed', icon: Clapperboard, label: 'tabFeed' },
  { id: 'explore', icon: Search, label: 'tabExplore' },
  { id: 'review', icon: CalendarCheck, label: 'tabReview' },
  { id: 'notebook', icon: NotebookPen, label: 'tabNotebook' },
];

/**
 * Barre d'onglets, en bas de l'écran comme sur une application.
 *
 * Sombre sous le fil, claire sous les autres vues : elle prolonge ce
 * qui se trouve au-dessus d'elle au lieu de le border. La pastille de
 * l'onglet Réviser compte les cartes arrivées à échéance — c'est le
 * seul rappel, et il ne clignote pas.
 */
export default function ShortsTabBar({
  tab,
  due,
  labels,
  onChange,
}: {
  tab: ShortsTab;
  /** Cartes à réviser maintenant. */
  due: number;
  labels: ShortsLabels;
  onChange: (tab: ShortsTab) => void;
}) {
  const dark = tab === 'feed';

  return (
    <nav
      aria-label={labels.tabFeed}
      className={`shrink-0 grid grid-cols-4 border-t pt-1 pb-[max(0.3rem,env(safe-area-inset-bottom))] ${
        dark
          ? 'bg-black text-white border-white/10'
          : 'bg-[var(--surface)] text-[var(--ink)] border-black/10'
      }`}
    >
      {TABS.map(({ id, icon: Icon, label }) => {
        const current = id === tab;
        const tone = current ? 'opacity-100' : 'opacity-55';

        return (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            aria-current={current ? 'page' : undefined}
            className="relative flex flex-col items-center gap-0.5 py-1.5"
          >
            <span className={`relative ${tone}`}>
              <Icon size={22} strokeWidth={current ? 2.4 : 1.9} />
              {id === 'review' && due > 0 && (
                <span className="absolute -top-1.5 -end-2.5 min-w-[1.05rem] h-[1.05rem] px-1 grid place-items-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)] text-[0.62rem] font-bold leading-none">
                  {due}
                </span>
              )}
            </span>
            <span className={`text-[0.66rem] leading-tight ${current ? 'font-bold' : 'font-semibold'} ${tone}`}>
              {labels[label]}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
