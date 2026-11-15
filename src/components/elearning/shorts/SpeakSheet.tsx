'use client';

import { useEffect, useRef, useState } from 'react';
import { Mic, Repeat, Square, Volume2 } from 'lucide-react';
import type { Short } from '../../../content/shorts/types';
import type { ShortsLabels } from '../../../features/app/elearning/shorts/labels';
import BottomSheet from './BottomSheet';
import type { ClipPlayer } from './clipPlayer';

/**
 * S'enregistrer et se comparer au modèle.
 *
 * Aucune reconnaissance vocale : un score de prononciation rassure ou
 * décourage sans rien apprendre. Entendre sa propre voix juste après le
 * modèle, en revanche, fait percevoir l'écart — et c'est l'oreille de
 * l'élève qui juge.
 *
 * L'enregistrement ne quitte pas le navigateur : c'est un fichier en
 * mémoire, effacé à la fermeture du panneau.
 */

type Phase = 'idle' | 'recording' | 'ready' | 'denied' | 'unsupported';

function canRecord(): boolean {
  return (
    typeof window !== 'undefined' &&
    'MediaRecorder' in window &&
    Boolean(navigator.mediaDevices?.getUserMedia)
  );
}

export default function SpeakSheet({
  short,
  targetLang,
  labels,
  player,
  onRecorded,
  onClose,
}: {
  short: Short;
  targetLang: string;
  labels: ShortsLabels;
  player: ClipPlayer | null;
  /** Appelé à la première prise : parler rapporte des points une fois. */
  onRecorded: () => void;
  onClose: () => void;
}) {
  const [phase, setPhase] = useState<Phase>(() => (canRecord() ? 'idle' : 'unsupported'));
  const [take, setTake] = useState<string | null>(null);
  const own = useRef<HTMLAudioElement>(null);
  const session = useRef<{
    recorder: MediaRecorder | null;
    stream: MediaStream | null;
    timer: number;
    counted: boolean;
  }>({ recorder: null, stream: null, timer: 0, counted: false });

  useEffect(() => {
    const current = session.current;
    return () => {
      window.clearTimeout(current.timer);
      if (current.recorder?.state === 'recording') current.recorder.stop();
      current.stream?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  useEffect(() => {
    return () => {
      if (take) URL.revokeObjectURL(take);
    };
  }, [take]);

  const record = async () => {
    const current = session.current;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks: Blob[] = [];
      current.stream = stream;
      current.recorder = recorder;

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) chunks.push(event.data);
      };
      recorder.onstop = () => {
        // Le micro se coupe dès la fin de la prise : son témoin ne doit
        // pas rester allumé pendant qu'on s'écoute.
        stream.getTracks().forEach((track) => track.stop());
        current.stream = null;
        setTake(URL.createObjectURL(new Blob(chunks, { type: recorder.mimeType || 'audio/webm' })));
        setPhase('ready');
        if (!current.counted) {
          current.counted = true;
          onRecorded();
        }
      };

      recorder.start();
      setPhase('recording');
      // Arrêt de lui-même : le temps de dire la phrase deux fois.
      current.timer = window.setTimeout(
        () => {
          if (recorder.state === 'recording') recorder.stop();
        },
        Math.max(3000, short.duration * 2400 + 1500),
      );
    } catch {
      setPhase('denied');
    }
  };

  const stop = () => {
    const current = session.current;
    window.clearTimeout(current.timer);
    if (current.recorder?.state === 'recording') current.recorder.stop();
  };

  const compare = () => {
    if (!player) return;
    player.once('ended', () => void own.current?.play().catch(() => {}));
    player.clip(short.audio);
  };

  return (
    <BottomSheet title={labels.speakTitle} closeLabel={labels.close} onClose={onClose}>
      <p className="text-[0.92rem] leading-[1.55] opacity-75 mb-4">{labels.speakHint}</p>

      <div className="t-card rounded-[20px] p-4 mb-4">
        <p lang={targetLang} dir="ltr" className="font-bold text-[1.35rem] leading-snug text-start">
          {short.lines[0].text}
        </p>
        <p className="text-[0.92rem] opacity-70">{short.lines[0].translation}</p>
        <button
          type="button"
          onClick={() => player?.clip(short.audio)}
          className="t-btn-light inline-flex items-center gap-2 font-bold text-[0.84rem] px-4 py-2.5 mt-3"
        >
          <Volume2 size={16} />
          {labels.speakModel}
        </button>
      </div>

      {phase === 'unsupported' && (
        <p role="status" className="text-[0.9rem] leading-[1.55] opacity-75">
          {labels.speakUnsupported}
        </p>
      )}

      {phase === 'denied' && (
        <p role="alert" className="text-[0.9rem] leading-[1.55] opacity-80">
          {labels.speakDenied}
        </p>
      )}

      {(phase === 'idle' || phase === 'ready') && (
        <button
          type="button"
          onClick={record}
          className="t-btn-primary inline-flex items-center justify-center gap-2 w-full font-bold text-[0.95rem] px-5 py-4"
        >
          <Mic size={19} />
          {labels.speakRecord}
        </button>
      )}

      {phase === 'recording' && (
        <button
          type="button"
          onClick={stop}
          className="inline-flex items-center justify-center gap-2.5 w-full font-bold text-[0.95rem] px-5 py-4 rounded-full bg-[var(--red)] text-white"
        >
          <span aria-hidden="true" className="rs-rec-dot w-2.5 h-2.5 rounded-full bg-white" />
          <span role="status">{labels.speakRecording}</span>
          <Square size={15} fill="currentColor" aria-hidden="true" />
          <span className="sr-only">{labels.speakStop}</span>
        </button>
      )}

      {take && phase === 'ready' && (
        <div className="t-card rounded-[20px] p-4 mt-4">
          <p className="text-[0.7rem] font-bold uppercase tracking-wide opacity-60 mb-2">
            {labels.speakYou}
          </p>
          <audio ref={own} src={take} controls className="w-full" />
          <button
            type="button"
            onClick={compare}
            className="t-btn-dark inline-flex items-center gap-2 font-bold text-[0.84rem] px-4 py-2.5 mt-3"
          >
            <Repeat size={16} />
            {labels.speakCompare}
          </button>
        </div>
      )}

      <p className="text-[0.78rem] leading-[1.5] opacity-55 mt-4">{labels.speakPrivacy}</p>
    </BottomSheet>
  );
}
