'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { PartnerLang, PartnerTestimonial } from '../../content/partenaires/types';

/**
 * Mur de témoignages vidéo.
 *
 * Les affiches seules se chargent avec la page ; une vidéo ne se
 * télécharge qu'au moment où on l'ouvre. Dix-neuf mégaoctets de
 * témoignages ne pèsent donc rien sur le premier affichage, ce que
 * l'objectif Lighthouse demande.
 *
 * Sur téléphone, les cartes défilent au doigt ; sur grand écran, elles
 * tiennent sur une ligne. Une vidéo ouverte se joue avec le son — le
 * geste de l'utilisateur l'autorise — et enchaîne sur la suivante.
 */
function duree(s: number) {
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

export default function TestimonialWall({
  items,
  lang,
  accent,
  labels,
}: {
  items: PartnerTestimonial[];
  lang: PartnerLang;
  accent: string;
  labels: Record<string, string>;
}) {
  const [ouvert, setOuvert] = useState<number | null>(null);
  const video = useRef<HTMLVideoElement>(null);
  const fermerRef = useRef<HTMLButtonElement>(null);
  const rtl = lang === 'ar';

  const fermer = useCallback(() => setOuvert(null), []);
  const aller = useCallback(
    (pas: number) =>
      setOuvert((i) => (i === null ? i : (i + pas + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (ouvert === null) return;
    const avant = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    fermerRef.current?.focus();
    const clavier = (e: KeyboardEvent) => {
      if (e.key === 'Escape') fermer();
      else if (e.key === 'ArrowRight') aller(rtl ? -1 : 1);
      else if (e.key === 'ArrowLeft') aller(rtl ? 1 : -1);
    };
    window.addEventListener('keydown', clavier);
    return () => {
      document.body.style.overflow = avant;
      window.removeEventListener('keydown', clavier);
    };
  }, [ouvert, fermer, aller, rtl]);

  useEffect(() => {
    if (ouvert !== null) void video.current?.play().catch(() => undefined);
  }, [ouvert]);

  const courant = ouvert === null ? null : items[ouvert];

  return (
    <>
      <div className="-mx-4 md:mx-0 flex lg:grid lg:grid-cols-4 gap-3 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scroll-px-4 md:scroll-px-0 px-4 md:px-0 pb-2 [scrollbar-width:none]">
        {items.map((t, i) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setOuvert(i)}
            aria-label={`${labels.testimonialsWatch} : ${t.title[lang]}`}
            className="group relative shrink-0 w-[62vw] max-w-[260px] lg:w-auto lg:max-w-none snap-start aspect-[9/16] rounded-[22px] overflow-hidden bg-[#0d1a3e] text-start shadow-[0_18px_40px_-22px_rgba(13,26,62,0.55)] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
            style={{ outlineColor: accent }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={t.poster}
              alt=""
              loading="lazy"
              decoding="async"
              width={400}
              height={712}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

            <span
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center w-14 h-14 rounded-full bg-white/20 backdrop-blur-md ring-2 transition-transform duration-300 group-hover:scale-110"
              style={{ ['--tw-ring-color' as string]: accent }}
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 ms-1 fill-white">
                <path d="M7 4.5v15l12-7.5z" />
              </svg>
            </span>

            <span className="absolute inset-x-0 bottom-0 p-4 text-white">
              <span className="block text-[0.95rem] font-bold leading-[1.3]" dir="auto">
                {t.title[lang]}
              </span>
              <span className="inline-block mt-1.5 rounded-full bg-white/20 px-2.5 py-0.5 text-[0.72rem] font-bold tabular-nums" dir="ltr">
                ▶ {duree(t.durationSec)}
              </span>
            </span>
          </button>
        ))}
      </div>

      {courant && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={courant.title[lang]}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
          // Voile en style en ligne : la page derrière ne doit plus se lire.
          style={{ background: 'rgba(5, 8, 18, 0.96)' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) fermer();
          }}
        >
          <div className="relative flex flex-col items-center gap-3 w-full max-w-[min(440px,calc((100dvh-140px)*9/16))]">
            <video
              key={courant.id}
              ref={video}
              src={courant.src}
              poster={courant.poster}
              controls
              playsInline
              preload="metadata"
              onEnded={() => aller(1)}
              className="w-full aspect-[9/16] rounded-[20px] bg-black object-contain"
            />
            <p className="text-white text-[0.95rem] font-bold text-center" dir="auto">
              {courant.title[lang]}
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => aller(-1)}
                aria-label={labels.testimonialsPrev}
                className="w-11 h-11 rounded-full bg-white/15 text-white text-lg hover:bg-white/25"
              >
                {rtl ? '→' : '←'}
              </button>
              <span className="text-white/60 text-[0.8rem] tabular-nums" dir="ltr">
                {(ouvert ?? 0) + 1} / {items.length}
              </span>
              <button
                type="button"
                onClick={() => aller(1)}
                aria-label={labels.testimonialsNext}
                className="w-11 h-11 rounded-full bg-white/15 text-white text-lg hover:bg-white/25"
              >
                {rtl ? '←' : '→'}
              </button>
            </div>
          </div>
          <button
            ref={fermerRef}
            type="button"
            onClick={fermer}
            aria-label={labels.testimonialsClose}
            className="absolute top-4 end-4 w-11 h-11 rounded-full bg-white/15 text-white text-lg hover:bg-white/25"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
