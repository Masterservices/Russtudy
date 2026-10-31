'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { Lang } from '../../i18n';
import type { PublicBlock } from '../../features/app/elearning/public';
import PresenterBubble from './PresenterBubble';

/**
 * Lecteur de leçon aux couleurs du site public.
 *
 * Une diapositive à la fois, avec sa voix off. Image et audio sont
 * composés à l'affichage plutôt que montés en vidéo : corriger une
 * phrase narrée revient à remplacer un MP3, sans refaire de rendu, et
 * le texte lu reste sélectionnable, lisible par un lecteur d'écran et
 * indexable.
 *
 * Rien ne se pose sur la diapositive : ni l'indicateur de voix, ni le
 * sous-titre. Un diaporama de langue est déjà du texte, et une phrase
 * russe de quatorze mots enveloppe six lignes — incrustée, elle
 * recouvrait l'image qu'elle accompagne.
 */
export default function LessonViewer({
  blocks,
  lang,
  spokenLang,
  labels,
}: {
  blocks: PublicBlock[];
  lang: Lang;
  /** Langue de la voix off : celle qu'enseigne le parcours. */
  spokenLang: string;
  labels: Record<string, string>;
}) {
  const [index, setIndex] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [spokenWords, setSpokenWords] = useState(-1);
  const audioRef = useRef<HTMLAudioElement>(null);

  const block = blocks[index];

  const lines = useMemo(() => {
    if (!block) return [];
    return block.lines[lang] ?? block.lines.fr ?? block.lines.en ?? [];
  }, [block, lang]);

  const read = block
    ? block.transcript[spokenLang as Lang] || block.transcript[lang] || block.transcript.fr || ''
    : '';

  const words = useMemo(() => read.split(/\s+/).filter(Boolean), [read]);

  // L'audio d'une diapositive ne doit jamais se poursuivre sur la
  // suivante. Remettre la lecture à zéro ne suffit pas : changer la
  // source d'un élément <audio> déjà monté ne la recharge pas, et le
  // lecteur continuait de jouer la narration de la diapositive
  // précédente, en contradiction avec le texte affiché. `load()` force
  // la prise en compte de la nouvelle source.
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    el.pause();
    el.load();
    setSpeaking(false);
    setSpokenWords(-1);
  }, [index]);

  // En mode agrandi, Échap referme et la page cesse de défiler
  // derrière le voile.
  useEffect(() => {
    if (!expanded) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setExpanded(false);
    };

    document.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [expanded]);

  /* Téléphone tourné, viser la barre native devient malaisé : l'image
     entière et un bouton de la rangée font la même chose. */
  const togglePlay = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) void el.play().catch(() => {});
    else el.pause();
  };

  if (!block) return null;

  const title = block.title[lang] ?? block.title.fr ?? '';
  const spoken = block.transcript[spokenLang as Lang] ?? '';
  const translation = spokenLang !== lang && spoken ? (block.transcript[lang] ?? '') : '';

  const isFirst = index === 0;
  const isLast = index === blocks.length - 1;

  return (
    <div className="flex flex-col gap-4 max-w-3xl">
      {/*
        Diapositive, sous-titre et lecteur dans une même enveloppe :
        agrandir change les classes de cette enveloppe, sans jamais
        déplacer l'élément <audio> dans le DOM. Le déplacer le
        démonterait, et la narration s'arrêterait au moment précis où
        l'on agrandit.
      */}
      <div
        className={
          expanded
            ? 'rs-shell-expanded fixed inset-0 z-[1000] bg-black flex flex-col gap-2 p-3 pt-[max(0.75rem,env(safe-area-inset-top))] pb-[max(0.75rem,env(safe-area-inset-bottom))]'
            : 'flex flex-col gap-3'
        }
      >
        <div
          className={`relative overflow-hidden bg-black/90 grid place-items-center ${
            expanded ? 'rs-stage-expanded flex-1 min-h-0' : 'rounded-[22px] aspect-[16/10]'
          }`}
        >
          {block.mediaUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={block.mediaUrl}
              alt={title}
              // La clé force le redémarrage de l'animation à chaque
              // diapositive : sans elle, le mouvement resterait figé à la
              // position atteinte par la précédente.
              key={block.id}
              className={`w-full h-full object-contain rs-slide-motion rs-motion-${index % 3} ${
                speaking ? 'is-speaking' : ''
              }`}
            />
          ) : (
            <div className="px-6 py-8 text-center text-white">
              <p className="t-display font-bold text-xl mb-2">{title}</p>
              <ul className="flex flex-col gap-1.5 text-[0.92rem] opacity-85">
                {lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Toute l'image lance et arrête la narration, comme sur un
              lecteur vidéo. Le disque se tient au coin, pas au centre :
              au milieu, il masque exactement ce qu'on vient lire. */}
          {block.audioUrl && (
            <button
              type="button"
              onClick={togglePlay}
              aria-label={speaking ? labels.pause : labels.listen}
              className="absolute inset-0 z-[5] w-full h-full grid place-items-end p-3.5"
            >
              <span
                aria-hidden="true"
                className={`w-[54px] h-[54px] rounded-full bg-black/70 border-2 border-white/80 grid place-items-center text-white text-[21px] ps-0.5 transition-opacity duration-200 ${
                  speaking ? 'opacity-0 hover:opacity-80' : ''
                }`}
              >
                ▶
              </span>
            </button>
          )}

          <span className="absolute top-3 end-3 text-[0.72rem] font-bold text-white/80 bg-black/50 rounded-full px-2.5 py-1">
            {labels.slideOf} {index + 1}/{blocks.length}
          </span>
        </div>

        {/*
          Sous la diapositive quand il y a la place ; par-dessus quand
          il n'y en a pas. Un téléphone couché n'offre que ~400 px de
          haut : les commandes en prenaient 250 et il ne restait qu'un
          bandeau de l'image. Groupées, elles peuvent glisser sur la
          diapositive, sur un voile dégradé, comme sur un lecteur vidéo.
        */}
        <div className="rs-controls flex flex-col gap-2.5">
        {/* Ce qui est dit, pendant que c'est dit, un mot après l'autre. */}
        {speaking && words.length > 0 && (
          <div className="rs-subs t-dark rounded-[14px] px-4 py-2.5">
            <p
              lang={spokenLang}
              className="text-[0.82rem] sm:text-[0.9rem] leading-[1.55] font-medium text-center"
            >
              {words.map((word, position) => (
                <span
                  key={`${word}-${position}`}
                  className={`rs-w ${position <= spokenWords ? 'is-read' : ''}`}
                >
                  {word}{' '}
                </span>
              ))}
            </p>
          </div>
        )}

        {block.audioUrl && (
          <div className="rs-voicebar flex items-center gap-3">
            <PresenterBubble speaking={speaking} name={labels.presenter} />
            {/* `key` lié au bloc : React remonte l'élément à chaque
                diapositive plutôt que d'en réécrire la source, ce qui
                garantit que la voix entendue est bien celle de la
                diapositive affichée. */}
            <audio
              key={block.id}
              ref={audioRef}
              controls
              preload="none"
              src={block.audioUrl}
              onPlay={() => setSpeaking(true)}
              onPause={() => setSpeaking(false)}
              onEnded={() => setSpeaking(false)}
              onTimeUpdate={(event) => {
                const el = event.currentTarget;
                if (!el.duration || !words.length) return;
                setSpokenWords(Math.floor((el.currentTime / el.duration) * words.length));
              }}
              className="flex-1 min-w-0"
            />
          </div>
        )}

        {/* Agrandi, on ne voit plus la navigation restée dans la page :
            elle est reprise ici pour pouvoir avancer sans refermer. */}
        {expanded && (
          <div className="flex items-center justify-between gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={isFirst}
              aria-label={labels.previous}
              className="text-[0.84rem] font-bold text-white bg-white/15 hover:bg-white/25 px-4 py-2.5 rounded-full disabled:opacity-35 transition-colors"
            >
              ←
            </button>
            {block.audioUrl && (
              <button
                type="button"
                onClick={togglePlay}
                className="t-btn-primary font-bold text-[0.8rem] sm:text-[0.84rem] px-4 py-2.5 rounded-full whitespace-nowrap"
              >
                {speaking ? labels.pause : labels.listen}
              </button>
            )}
            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="text-[0.8rem] sm:text-[0.84rem] font-bold text-white bg-white/15 hover:bg-white/25 px-4 py-2.5 rounded-full transition-colors whitespace-nowrap"
            >
              ✕ {labels.shrink}
            </button>
            <button
              type="button"
              onClick={() => setIndex((i) => Math.min(blocks.length - 1, i + 1))}
              disabled={isLast}
              aria-label={labels.next}
              className="t-btn-primary font-bold text-[0.84rem] px-4 py-2.5 rounded-full disabled:opacity-35"
            >
              →
            </button>
          </div>
        )}
        </div>
      </div>

      {/* Sous le lecteur plutôt que posé sur l'image : une pastille au
          coin de la diapositive recouvre son titre, et reste sombre sur
          sombre. Agrandir, plutôt que le plein écran du navigateur :
          celui-ci est refusé dans une iframe et absent de Safari sur
          iPhone, là même où l'écran est le plus petit. */}
      {!expanded && (
        <div>
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="t-btn-dark font-bold text-[0.88rem] px-5 py-2.5 rounded-full"
          >
            ⤢ {labels.expand}
          </button>
        </div>
      )}

      {block.mediaUrl && lines.length > 0 && (
        <ul className="flex flex-col gap-1.5 text-[0.95rem] leading-[1.65] opacity-85">
          {lines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      )}

      {read && (
        <details className="t-card rounded-[18px] px-5 py-4">
          <summary className="t-kicker text-[0.78rem] font-bold uppercase tracking-wide cursor-pointer opacity-70">
            {labels.transcript}
          </summary>
          <p className="text-[0.95rem] leading-[1.7] opacity-85 mt-3" lang={spokenLang}>
            {read}
          </p>
          {translation && (
            <>
              <p className="t-kicker text-[0.72rem] font-bold uppercase tracking-wide opacity-55 mt-4">
                {labels.translation}
              </p>
              <p className="text-[0.95rem] leading-[1.7] opacity-75 mt-1">{translation}</p>
            </>
          )}
        </details>
      )}

      <div className="flex items-center justify-between gap-3 pt-1">
        <button
          type="button"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={isFirst}
          className="t-btn-light font-bold text-[0.88rem] px-5 py-2.5 rounded-full disabled:opacity-35"
        >
          ← {labels.previous}
        </button>
        <button
          type="button"
          onClick={() => setIndex((i) => Math.min(blocks.length - 1, i + 1))}
          disabled={isLast}
          className="t-btn-primary font-bold text-[0.88rem] px-5 py-2.5 rounded-full disabled:opacity-35"
        >
          {labels.next} →
        </button>
      </div>
    </div>
  );
}
