'use client';

import { useMemo, useState } from 'react';
import { BookmarkCheck, Play, Search, Volume2, X } from 'lucide-react';
import type { Short, ShortThemeId } from '../../../content/shorts/types';
import { matchesQuery } from '../../../features/app/elearning/shorts/feed';
import { fill, type ShortsLabels } from '../../../features/app/elearning/shorts/labels';
import type { ClipPlayer } from './clipPlayer';

/**
 * Explorer : retrouver une expression sans faire défiler tout le fil.
 *
 * La recherche lit la phrase, sa traduction et sa prononciation
 * approchée — on tape « merci », « spassiba » ou « спасибо » et on
 * arrive au même short. Toucher une ligne l'ouvre dans le fil ; le
 * haut-parleur la fait entendre sans quitter la liste.
 */
export default function ShortsExplorer({
  shorts,
  themes,
  labels,
  targetLang,
  player,
  saved,
  onOpenShort,
}: {
  shorts: Short[];
  themes: { id: ShortThemeId; label: string }[];
  labels: ShortsLabels;
  targetLang: string;
  player: ClipPlayer | null;
  /** Identifiants des expressions enregistrées. */
  saved: ReadonlySet<string>;
  onOpenShort: (id: string) => void;
}) {
  const [query, setQuery] = useState('');
  const [theme, setTheme] = useState<'all' | ShortThemeId>('all');

  const results = useMemo(
    () => shorts.filter((short) => (theme === 'all' || short.theme === theme) && matchesQuery(short, query)),
    [shorts, theme, query],
  );

  return (
    <section className="h-full overflow-y-auto overscroll-contain bg-[var(--bg)] text-[var(--ink)] px-4 pt-[max(1.1rem,env(safe-area-inset-top))] pb-6">
      <h2 className="t-display font-bold text-[1.6rem] tracking-[-0.03em] mb-4">{labels.exploreTitle}</h2>

      <div className="relative mb-3">
        <Search size={18} aria-hidden="true" className="absolute start-4 top-1/2 -translate-y-1/2 opacity-50" />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={labels.searchPlaceholder}
          aria-label={labels.searchPlaceholder}
          enterKeyHint="search"
          className="t-input w-full text-[1rem] ps-11 pe-11 py-3"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            aria-label={labels.clear}
            className="absolute end-2 top-1/2 -translate-y-1/2 grid place-items-center w-8 h-8 rounded-full hover:bg-black/8"
          >
            <X size={16} />
          </button>
        )}
      </div>

      <div className="rs-shorts-chips flex gap-2 overflow-x-auto -mx-4 px-4 pb-1 mb-3">
        {[{ id: 'all' as const, label: labels.all }, ...themes].map((entry) => (
          <button
            key={entry.id}
            type="button"
            onClick={() => setTheme(entry.id)}
            aria-pressed={theme === entry.id}
            className={`shrink-0 whitespace-nowrap font-bold text-[0.8rem] px-3.5 py-1.5 ${
              theme === entry.id ? 't-chip-active' : 't-chip'
            }`}
          >
            {entry.label}
          </button>
        ))}
      </div>

      <p aria-live="polite" className="text-[0.84rem] font-semibold opacity-65 mb-3">
        {fill(labels.results, results.length)}
      </p>

      {results.length === 0 ? (
        <p className="t-card rounded-[18px] p-5 text-[0.95rem] opacity-75">{labels.noResults}</p>
      ) : (
        <ul className="flex flex-col gap-2.5">
          {results.map((short) => (
            <li key={short.id} className="t-card rounded-[18px] flex items-center gap-2 p-2.5">
              <button
                type="button"
                onClick={() => onOpenShort(short.id)}
                className="flex items-center gap-3 min-w-0 flex-1 text-start"
              >
                <span
                  className="relative shrink-0 w-[52px] h-[70px] rounded-[12px] overflow-hidden grid place-items-center"
                  style={{ backgroundColor: short.bg.color }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={short.bg.thumb}
                    alt=""
                    width={144}
                    height={256}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <span className="relative grid place-items-center w-7 h-7 rounded-full bg-black/55 text-white">
                    <Play size={13} fill="currentColor" className="ms-0.5" />
                  </span>
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    lang={targetLang}
                    dir="ltr"
                    className="block font-bold text-[1rem] leading-snug truncate text-start"
                  >
                    {short.lines[0].text}
                  </span>
                  <span className="block text-[0.86rem] opacity-70 truncate">
                    {short.lines[0].translation}
                  </span>
                  <span className="flex items-center gap-1.5 text-[0.72rem] font-semibold opacity-55 mt-0.5">
                    {saved.has(short.id) && <BookmarkCheck size={13} aria-label={labels.saved} />}
                    {short.themeLabel}
                  </span>
                </span>
              </button>
              <button
                type="button"
                onClick={() => player?.clip(short.audio)}
                aria-label={`${labels.listenAgain} : ${short.lines[0].text}`}
                className="shrink-0 grid place-items-center w-10 h-10 rounded-full bg-black/6 hover:bg-black/10"
              >
                <Volume2 size={18} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
