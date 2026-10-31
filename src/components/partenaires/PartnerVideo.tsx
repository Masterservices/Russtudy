'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Vidéo verticale 9:16 dans un cadre de téléphone.
 *
 * Lecture automatique en muet uniquement si l'utilisateur n'a pas demandé
 * moins d'animations. Pas de boucle : à la fin, un bouton « Revoir ».
 * Lorsque le fichier n'est pas encore fourni, le cadre affiche un état
 * d'attente plutôt qu'un lecteur cassé.
 */
export default function PartnerVideo({
  src,
  poster,
  accent,
  labels,
  transcript,
}: {
  src?: string;
  poster?: string;
  accent: string;
  labels: Record<string, string>;
  transcript?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);
  const [openTranscript, setOpenTranscript] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced) void el.play().catch(() => undefined);
  }, []);

  function toggleSound() {
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
    if (!el.muted && el.paused) void el.play().catch(() => undefined);
  }

  function togglePlay() {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) void el.play().catch(() => undefined);
    else el.pause();
  }

  function replay() {
    const el = videoRef.current;
    if (!el) return;
    el.currentTime = 0;
    setEnded(false);
    void el.play().catch(() => undefined);
  }

  return (
    <div className="flex flex-col gap-3">
      <div
        className="relative mx-auto w-full max-w-[280px] rounded-[34px] border-[6px] border-[#0a0a0a] bg-black overflow-hidden"
        style={{
          aspectRatio: '9 / 16',
          boxShadow: `0 0 0 2px ${accent}66, 0 26px 60px rgba(0,0,0,0.45)`,
        }}
      >
        {src ? (
          <>
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              playsInline
              muted
              preload="metadata"
              poster={poster}
              onEnded={() => setEnded(true)}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            >
              <source src={src} type="video/mp4" />
            </video>

            {ended && (
              <button
                type="button"
                onClick={replay}
                className="absolute inset-0 grid place-items-center bg-black/65 text-white font-bold text-sm backdrop-blur-[2px]"
              >
                ↻ {labels.videoReplay}
              </button>
            )}
          </>
        ) : (
          <div
            className="w-full h-full grid place-items-center text-center px-5 text-white/70 text-[0.82rem] leading-[1.6]"
            style={{ background: `linear-gradient(160deg, ${accent} 0%, #0a0a0a 85%)` }}
          >
            {labels.videoPending}
          </div>
        )}
      </div>

      {src && (
        <div className="flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? labels.videoPause : labels.videoPlay}
            className="font-bold text-[0.8rem] px-4 py-2 rounded-full bg-white/12 text-white border border-white/30 backdrop-blur-sm hover:bg-white/22 transition-colors"
          >
            {playing ? '❚❚' : '▶'}
          </button>
          <button
            type="button"
            onClick={toggleSound}
            className="font-bold text-[0.8rem] px-4 py-2 rounded-full bg-white/12 text-white border border-white/30 backdrop-blur-sm hover:bg-white/22 transition-colors"
          >
            {muted ? `🔈 ${labels.videoSound}` : `🔇 ${labels.videoMute}`}
          </button>
        </div>
      )}

      {transcript && (
        <div className="mx-auto w-full max-w-[420px]">
          <button
            type="button"
            onClick={() => setOpenTranscript((v) => !v)}
            aria-expanded={openTranscript}
            className="w-full text-start text-[0.78rem] font-bold opacity-75 hover:opacity-100 py-2"
          >
            {openTranscript ? '−' : '+'} {labels.videoTranscript}
          </button>
          {openTranscript && (
            <p className="text-[0.82rem] leading-[1.75] opacity-80 pb-2">{transcript}</p>
          )}
        </div>
      )}
    </div>
  );
}
