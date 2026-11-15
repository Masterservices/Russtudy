'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { X } from 'lucide-react';

/**
 * Panneau qui monte du bas de l'écran.
 *
 * Il recouvre le fil sans le quitter : on lit le détail d'une
 * expression, on ferme, et le short reprend où il s'était arrêté.
 * Clair sur fond sombre, aux couleurs du site — le fil est une salle
 * obscure, le panneau est la page de cahier qu'on ouvre dedans.
 */
export default function BottomSheet({
  title,
  closeLabel,
  onClose,
  children,
}: {
  title: string;
  closeLabel: string;
  onClose: () => void;
  children: ReactNode;
}) {
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    panel.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      // Échap ferme le panneau, pas le fil qui se trouve derrière.
      event.stopPropagation();
      onClose();
    };
    window.addEventListener('keydown', onKey, true);
    return () => window.removeEventListener('keydown', onKey, true);
  }, [onClose]);

  return (
    <div data-rs-sheet="" className="absolute inset-0 z-[20] flex flex-col justify-end">
      <button
        type="button"
        aria-label={closeLabel}
        onClick={onClose}
        className="rs-sheet-backdrop absolute inset-0 w-full h-full bg-black/55 cursor-default"
      />
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        className="rs-sheet-panel relative max-h-[86%] overflow-y-auto overscroll-contain rounded-t-[26px] bg-[var(--bg)] text-[var(--ink)] px-5 pt-3 pb-[max(1.25rem,env(safe-area-inset-bottom))] outline-none"
      >
        <span aria-hidden="true" className="block w-10 h-1 rounded-full bg-black/15 mx-auto mb-3" />
        <div className="flex items-start justify-between gap-3 mb-4">
          <h2 className="t-display font-bold text-[1.25rem] tracking-[-0.02em] leading-tight">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            className="shrink-0 grid place-items-center w-9 h-9 rounded-full bg-black/8 hover:bg-black/12"
          >
            <X size={18} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
