'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Version animée d'une leçon.
 *
 * Le moteur et les scènes ne sont pas dans le bundle : ce sont des
 * fichiers servis depuis `public/cours-anime`, chargés seulement
 * quand un visiteur ouvre la version animée. Une leçon lue en
 * diaporama ne paie donc rien — ni les 600 Ko de Three.js, ni les
 * polices cyrilliques.
 *
 * La narration vient de la plateforme, en URL signées : les données
 * générées ne portent que le nom du fichier, et c'est ici qu'on y
 * substitue l'adresse réelle, leçon par leçon.
 */

interface MoteurCoursAnime {
  demarrer: (
    hote: HTMLElement,
    lecon: { chapitres: { audio: string }[] },
    options: { baseAudio?: string; auto?: boolean },
  ) => { detruire: () => void };
  scenes: Record<string, unknown>;
}

declare global {
  interface Window {
    CoursAnime?: MoteurCoursAnime;
    CoursAnimeLecons?: Record<string, { scene: string; chapitres: { audio: string }[] }>;
  }
}

const BASE = '/cours-anime';

function charger(src: string, cle: string) {
  return new Promise<void>((ok, non) => {
    const deja = document.querySelector<HTMLScriptElement>(`script[data-ca="${cle}"]`);
    if (deja) {
      if (deja.dataset.pret === '1') ok();
      else {
        deja.addEventListener('load', () => ok());
        deja.addEventListener('error', () => non(new Error(src)));
      }
      return;
    }
    const s = document.createElement('script');
    s.src = src;
    s.dataset.ca = cle;
    s.onload = () => { s.dataset.pret = '1'; ok(); };
    s.onerror = () => non(new Error(src));
    document.head.appendChild(s);
  });
}

function style(href: string, cle: string) {
  if (document.querySelector(`link[data-ca="${cle}"]`)) return;
  const l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = href;
  l.dataset.ca = cle;
  document.head.appendChild(l);
}

export default function CoursAnime({
  id,
  audios,
  labels,
}: {
  /** « cours/leçon », tel que le registre le nomme. */
  id: string;
  /** URL signées des narrations, dans l'ordre des diapositives. */
  audios: (string | null)[];
  labels: { ouvrir: string; fermer: string; chargement: string; echec: string };
}) {
  const [ouvert, setOuvert] = useState(false);
  const [etat, setEtat] = useState<'repos' | 'charge' | 'pret' | 'echec'>('repos');
  const hote = useRef<HTMLDivElement>(null);
  const instance = useRef<{ detruire: () => void } | null>(null);

  const fermer = useCallback(() => {
    instance.current?.detruire();
    instance.current = null;
    setOuvert(false);
    setEtat('repos');
  }, []);

  useEffect(() => {
    if (!ouvert || !hote.current) return;
    let vivant = true;
    setEtat('charge');

    style(`${BASE}/noyau/polices.css`, 'polices');
    style(`${BASE}/noyau/coquille.css`, 'coquille');

    (async () => {
      await charger(`${BASE}/noyau/three.min.js`, 'three');
      await charger(`${BASE}/noyau/moteur.js`, 'moteur');
      await charger(`${BASE}/lecons/${id.replace('/', '__')}.js`, `lecon-${id}`);
      const lecon = window.CoursAnimeLecons?.[id];
      if (!lecon) throw new Error(`données absentes pour ${id}`);
      await charger(`${BASE}/scenes/${lecon.scene}.js`, `scene-${lecon.scene}`);
      if (!vivant || !hote.current || !window.CoursAnime) return;

      // La narration signée remplace le nom de fichier, diapositive
      // par diapositive. Une leçon sans voix garde une chaîne vide :
      // le moteur sait s'en passer.
      lecon.chapitres.forEach((ch, i) => { ch.audio = audios[i] ?? ''; });

      instance.current = window.CoursAnime.demarrer(hote.current, lecon, { baseAudio: '' });
      setEtat('pret');
    })().catch(() => { if (vivant) setEtat('echec'); });

    return () => {
      vivant = false;
      instance.current?.detruire();
      instance.current = null;
    };
  }, [ouvert, id, audios]);

  useEffect(() => {
    if (!ouvert) return;
    const fuite = (e: KeyboardEvent) => { if (e.key === 'Escape') fermer(); };
    const avant = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', fuite);
    return () => {
      document.body.style.overflow = avant;
      window.removeEventListener('keydown', fuite);
    };
  }, [ouvert, fermer]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOuvert(true)}
        className="t-btn-primary inline-flex items-center gap-2 font-bold text-[0.92rem] px-6 py-3.5 rounded-full"
      >
        ✦ {labels.ouvrir}
      </button>

      {ouvert && (
        <div
          className="fixed inset-0 z-[900]"
          style={{ position: 'fixed', inset: 0, zIndex: 900, background: '#07060C' }}
        >
          {/* La feuille du cours impose « position: relative » à son
              hôte : la taille doit donc venir de la largeur et de la
              hauteur, pas d'un calage absolu qui ne s'appliquerait
              plus. */}
          <div ref={hote} style={{ width: '100%', height: '100%' }} />
          {etat !== 'pret' && (
            <p className="absolute inset-0 flex items-center justify-center text-white/70 text-sm px-6 text-center">
              {etat === 'echec' ? labels.echec : labels.chargement}
            </p>
          )}
          <button
            type="button"
            onClick={fermer}
            data-ca-fermer=""
            aria-label={labels.fermer}
            className="absolute top-4 end-4 z-[910] w-11 h-11 rounded-full bg-white/10 text-white text-lg hover:bg-white/20"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
