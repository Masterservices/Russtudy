'use client';

import { useEffect, useRef, useState } from 'react';
import { Eye, X } from 'lucide-react';

/**
 * Aperçu d'une pièce sans quitter l'application.
 *
 * Le fichier est servi par une URL signée du domaine de stockage : l'ouvrir
 * dans un onglet faisait sortir de RusStudy — et, depuis l'application
 * installée, basculait carrément dans le navigateur. On l'affiche donc
 * par-dessus l'écran courant, la revue reste là où elle était.
 */
export default function DocumentPreview({
  url,
  name,
  mimeType,
  label,
  closeLabel,
  openLabel,
}: {
  url: string;
  name: string;
  mimeType: string | null;
  label: string;
  closeLabel: string;
  openLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  const isImage = (mimeType ?? '').startsWith('image/');
  const isPdf = (mimeType ?? '') === 'application/pdf';

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    // Le fond ne doit pas défiler sous l'aperçu.
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rs-btn rs-btn-secondary mt-3 min-h-[38px] text-[13px]"
      >
        <Eye size={16} aria-hidden="true" />
        {label}
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={name}
          className="fixed inset-0 z-50 flex flex-col bg-black/80"
          onClick={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div className="flex items-center gap-3 px-4 py-3 text-white">
            <p className="flex-1 min-w-0 text-[14px] font-semibold truncate">{name}</p>
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label={closeLabel}
              className="shrink-0 grid place-items-center w-9 h-9 rounded-full bg-white/15 hover:bg-white/25"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          <div className="flex-1 min-h-0 px-4 pb-4">
            {isImage ? (
              // Fichier privé servi par URL signée : pas d'optimisation Next possible.
              // eslint-disable-next-line @next/next/no-img-element
              <img src={url} alt={name} className="w-full h-full object-contain" />
            ) : isPdf ? (
              <iframe src={url} title={name} className="w-full h-full rounded-xl bg-white" />
            ) : (
              <div className="h-full grid place-items-center">
                <a href={url} target="_blank" rel="noopener noreferrer" className="rs-btn rs-btn-primary max-w-xs">
                  {openLabel}
                </a>
              </div>
            )}
          </div>

          {/* Certains navigateurs mobiles refusent d'afficher un PDF dans un
              cadre : la sortie explicite reste possible, mais elle est choisie. */}
          {isPdf ? (
            <div className="px-4 pb-4">
              <a href={url} target="_blank" rel="noopener noreferrer" className="rs-btn rs-btn-secondary">
                {openLabel}
              </a>
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
