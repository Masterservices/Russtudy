'use client';

import { useCallback, useEffect, useMemo, useRef, useState, type RefObject } from 'react';
import type { Short } from '../../../content/shorts/types';
import { wordSpans } from '../../../features/app/elearning/shorts/feed';
import type { ClipPlayer } from './clipPlayer';

/**
 * Déroulé d'un short.
 *
 * Un short ne se contente pas de jouer un son : il fait écouter, puis
 * réécouter avec le sens, puis laisse le temps de redire la phrase.
 *
 *   0  première écoute — la phrase seule, mot après mot
 *   1  respiration
 *   2  seconde écoute — la traduction est maintenant affichée
 *   3  respiration
 *   4  à vous — un silence de la longueur de la phrase, pour la redire
 *   5  terminé
 *
 * La séquence est pilotée hors de React : seuls le pas courant et le
 * mot en cours remontent dans l'état, et la barre de progression
 * s'écrit directement dans le DOM, soixante fois par seconde.
 */

export type PlaybackStatus = 'playing' | 'paused' | 'blocked' | 'done';
export type PlaybackStep = 0 | 1 | 2 | 3 | 4 | 5;

export interface PlaybackView {
  status: PlaybackStatus;
  step: PlaybackStep;
  /** Réplique en cours. */
  line: number;
  /** Dernier mot prononcé dans la réplique en cours ; -1 avant le premier. */
  word: number;
}

interface State extends PlaybackView {
  /** Short auquel cet état appartient. */
  key: string | null;
}

interface Engine {
  step: PlaybackStep;
  timer: number;
  frame: number;
  deadline: number;
  remaining: number;
  next: (() => void) | null;
  paused: boolean;
  blocked: boolean;
  dead: boolean;
  pause: () => void;
  resume: () => void;
  restart: () => void;
}

const GAP_REVEAL = 650;
const GAP_TURN = 450;

function initial(key: string | null): State {
  return { key, status: 'playing', step: 0, line: 0, word: -1 };
}

export function usePlayback({
  player,
  short,
  rate,
  onDone,
}: {
  /** Lecteur partagé, amorcé par le geste d'ouverture du fil. */
  player: ClipPlayer | null;
  /** Short à l'écran ; `null` sur un quiz ou l'écran de fin. */
  short: Short | null;
  rate: number;
  /** Appelé quand la séquence est allée au bout. */
  onDone: (id: string) => void;
}): {
  view: PlaybackView;
  progressRef: RefObject<HTMLDivElement | null>;
  toggle: () => void;
  replay: () => void;
} {
  const [state, setState] = useState<State>(() => initial(null));
  const progressRef = useRef<HTMLDivElement | null>(null);
  const engineRef = useRef<Engine | null>(null);
  const rateRef = useRef(rate);
  const doneRef = useRef(onDone);

  const key = short?.id ?? null;
  // L'état d'un short précédent ne vaut rien pour le suivant : plutôt
  // que de le remettre à zéro dans un effet, on l'ignore dès le rendu.
  const view: PlaybackView = state.key === key ? state : initial(key);

  const spans = useMemo(
    () => (short ? short.lines.map((line) => wordSpans(line, short.key)) : []),
    [short],
  );

  useEffect(() => {
    doneRef.current = onDone;
  });

  useEffect(() => {
    rateRef.current = rate;
    player?.setRate(rate);
  }, [rate, player]);

  useEffect(() => {
    if (!player || !short) return;

    const id = short.id;
    const lines = short.lines;
    const dialogue = lines.length > 1;

    const patch = (change: Partial<PlaybackView>) =>
      setState((previous) => ({ ...(previous.key === id ? previous : initial(id)), ...change }));

    const seconds = () => player.duration ?? short.duration;

    // Le temps de redire la phrase : un peu plus que sa durée. Un
    // dialogue ne se redit pas d'un bloc, il enchaîne.
    const turnMs = () =>
      dialogue ? 900 : Math.min(6000, Math.max(1800, seconds() * 1400 + 600));

    const engine: Engine = {
      step: 0,
      timer: 0,
      frame: 0,
      deadline: 0,
      remaining: 0,
      next: null,
      paused: false,
      blocked: false,
      dead: false,
      pause: () => {},
      resume: () => {},
      restart: () => {},
    };

    const play = () => {
      player.setRate(rateRef.current);
      player.start().then(
        () => {
          if (engine.dead) return;
          engine.blocked = false;
          patch({ status: 'playing' });
        },
        (error: unknown) => {
          if (engine.dead) return;
          // Interrompue par la piste suivante : pas un refus du navigateur.
          if (error instanceof DOMException && error.name === 'AbortError') return;
          engine.blocked = true;
          patch({ status: 'blocked' });
        },
      );
    };

    const wait = (ms: number, next: () => void) => {
      engine.next = next;
      engine.remaining = ms;
      engine.deadline = performance.now() + ms;
      engine.timer = window.setTimeout(next, ms);
    };

    const enter = (step: PlaybackStep) => {
      if (engine.dead) return;
      engine.step = step;
      engine.next = null;
      patch({ step, status: step === 5 ? 'done' : 'playing' });

      if (step === 0 || step === 2) {
        player.rewind();
        play();
      } else if (step === 1) {
        wait(GAP_REVEAL, () => enter(2));
      } else if (step === 3) {
        wait(GAP_TURN, () => enter(4));
      } else if (step === 4) {
        wait(turnMs(), () => enter(5));
      } else {
        doneRef.current(id);
      }
    };

    engine.pause = () => {
      if (engine.paused || engine.step === 5) return;
      engine.paused = true;
      if (engine.step === 0 || engine.step === 2) {
        player.pause();
      } else {
        window.clearTimeout(engine.timer);
        engine.remaining = Math.max(0, engine.deadline - performance.now());
      }
      patch({ status: 'paused' });
    };

    engine.resume = () => {
      if (engine.step === 5) return;
      const wasPaused = engine.paused;
      engine.paused = false;
      if (engine.step === 0 || engine.step === 2) {
        play();
      } else if (wasPaused && engine.next) {
        wait(engine.remaining, engine.next);
        patch({ status: 'playing' });
      }
    };

    engine.restart = () => {
      window.clearTimeout(engine.timer);
      engine.paused = false;
      enter(0);
    };

    const onEnded = () => {
      if (engine.step === 0) enter(1);
      else if (engine.step === 2) enter(3);
    };

    let lastLine = 0;
    let lastWord = -1;

    const tick = () => {
      if (engine.dead) return;

      // Hors écoute, toute la phrase est lue : elle reste allumée.
      let line = lines.length - 1;
      let word = spans[line].length - 1;

      if (engine.step === 0 || engine.step === 2) {
        const time = player.time;
        line = 0;
        for (let index = 0; index < lines.length; index += 1) {
          if (time >= lines[index].start - 0.1) line = index;
        }
        word = -1;
        for (let index = 0; index < spans[line].length; index += 1) {
          if (time >= spans[line][index].start - 0.04) word = index;
        }
      }

      if (line !== lastLine || word !== lastWord) {
        lastLine = line;
        lastWord = word;
        patch({ line, word });
      }

      const bar = progressRef.current;
      if (bar) {
        const listen = (seconds() / rateRef.current) * 1000;
        const turn = turnMs();
        const total = 2 * listen + GAP_REVEAL + GAP_TURN + turn;
        const heard = (player.time / rateRef.current) * 1000;
        const left = engine.paused
          ? engine.remaining
          : Math.max(0, engine.deadline - performance.now());

        let elapsed = total;
        if (engine.step === 0) elapsed = heard;
        else if (engine.step === 1) elapsed = listen + GAP_REVEAL - left;
        else if (engine.step === 2) elapsed = listen + GAP_REVEAL + heard;
        else if (engine.step === 3) elapsed = 2 * listen + GAP_REVEAL + GAP_TURN - left;
        else if (engine.step === 4) elapsed = total - left;

        bar.style.transform = `scaleX(${Math.min(1, Math.max(0, elapsed / total))})`;
      }

      engine.frame = window.requestAnimationFrame(tick);
    };

    const offEnded = player.on('ended', onEnded);
    const offError = player.on('error', onEnded);
    engineRef.current = engine;

    player.load(short.audio);
    player.rewind();
    play();
    engine.frame = window.requestAnimationFrame(tick);

    return () => {
      engine.dead = true;
      window.clearTimeout(engine.timer);
      window.cancelAnimationFrame(engine.frame);
      offEnded();
      offError();
      player.pause();
      if (engineRef.current === engine) engineRef.current = null;
    };
  }, [player, short, spans]);

  const toggle = useCallback(() => {
    const engine = engineRef.current;
    if (!engine) return;
    if (engine.step === 5) engine.restart();
    else if (engine.paused || engine.blocked) engine.resume();
    else engine.pause();
  }, []);

  const replay = useCallback(() => engineRef.current?.restart(), []);

  return { view, progressRef, toggle, replay };
}
