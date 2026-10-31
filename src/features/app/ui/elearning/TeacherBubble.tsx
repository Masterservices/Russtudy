'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Bulle vidéo ronde avec le professeur, en visioconférence Jitsi.
 *
 * Jitsi est chargé dans une iframe sur l'instance publique : aucun
 * compte, aucune clé d'API, rien à installer pour l'étudiant. Le nom de
 * salle est tiré au sort en base à la confirmation du créneau, donc
 * non devinable depuis l'extérieur.
 *
 * L'iframe n'est montée qu'au moment où l'étudiant rejoint : tant qu'il
 * ne clique pas, aucune requête ne part vers Jitsi et la caméra reste
 * fermée.
 */
const JITSI_HOST = 'meet.jit.si';

export default function TeacherBubble({
  roomName,
  displayName,
  labels,
}: {
  roomName: string;
  displayName: string;
  labels: Record<string, string>;
}) {
  const [joined, setJoined] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const frameRef = useRef<HTMLIFrameElement>(null);

  // Quitter la page doit couper l'appel : une iframe laissée montée
  // garderait la caméra active en arrière-plan.
  useEffect(() => {
    return () => {
      if (frameRef.current) frameRef.current.src = 'about:blank';
    };
  }, []);

  if (!joined) {
    return (
      <div className="flex flex-col items-center gap-3 py-4">
        <div className="w-28 h-28 rounded-full grid place-items-center bg-black/[0.06] dark:bg-white/[0.08] text-3xl">
          🎥
        </div>
        <button
          type="button"
          onClick={() => setJoined(true)}
          className="rs-btn-primary font-bold text-[0.88rem] px-5 py-3 rounded-full"
        >
          {labels.joinCall}
        </button>
        <p className="text-[0.78rem] opacity-60 text-center max-w-xs">{labels.joinHint}</p>
      </div>
    );
  }

  const params = new URLSearchParams({
    'userInfo.displayName': displayName,
    'config.prejoinPageEnabled': 'false',
    'config.disableDeepLinking': 'true',
    'interfaceConfig.MOBILE_APP_PROMO': 'false',
  });
  const src = `https://${JITSI_HOST}/${encodeURIComponent(roomName)}#${params.toString()}`;

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className={
          expanded
            ? 'w-full aspect-video rounded-[18px] overflow-hidden bg-black'
            : 'w-56 h-56 rounded-full overflow-hidden bg-black ring-4 ring-black/10'
        }
      >
        <iframe
          ref={frameRef}
          src={src}
          title={labels.callTitle}
          allow="camera; microphone; fullscreen; display-capture; autoplay"
          className="w-full h-full border-0"
          // La bulle ronde recadre l'image : on agrandit légèrement pour
          // que le visage reste centré plutôt que rogné sur les bords.
          style={expanded ? undefined : { transform: 'scale(1.35)', transformOrigin: 'center' }}
        />
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="rs-btn-ghost font-bold text-[0.8rem] px-4 py-2 rounded-full"
        >
          {expanded ? labels.shrink : labels.expand}
        </button>
        <button
          type="button"
          onClick={() => {
            if (frameRef.current) frameRef.current.src = 'about:blank';
            setJoined(false);
            setExpanded(false);
          }}
          className="font-bold text-[0.8rem] px-4 py-2 rounded-full bg-red-600 text-white hover:opacity-90"
        >
          {labels.leaveCall}
        </button>
      </div>
    </div>
  );
}
