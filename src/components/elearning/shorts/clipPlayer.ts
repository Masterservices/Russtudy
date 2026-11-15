/**
 * Lecteur d'extraits, partagé par toutes les vues des shorts.
 *
 * Un seul élément audio pour le fil, l'explorateur et la révision. Un
 * navigateur de téléphone n'autorise un élément à jouer de lui-même
 * qu'après un premier appel venu d'un geste : avec un élément par vue,
 * chaque vue redemanderait de toucher l'écran avant de parler.
 *
 * L'élément reste privé. Les composants ne le modifient jamais
 * directement : ils demandent — charge, joue, ralentis — et c'est ici
 * que l'état change.
 */
export class ClipPlayer {
  private readonly element: HTMLAudioElement;

  constructor() {
    this.element = new Audio();
    this.element.preload = 'auto';
  }

  /**
   * Amorce l'élément. À appeler depuis un geste : lancer puis suspendre
   * aussitôt suffit à ce que les lectures suivantes soient permises.
   */
  unlock(src: string): void {
    this.element.src = src;
    void this.element.play().catch(() => {});
    this.element.pause();
  }

  /** Charge un extrait, sans recharger celui qui est déjà en place. */
  load(src: string): void {
    if (!this.element.src.endsWith(src)) this.element.src = src;
  }

  rewind(): void {
    this.element.currentTime = 0;
  }

  setRate(rate: number): void {
    this.element.playbackRate = rate;
  }

  /** Lance la lecture ; la promesse échoue si le navigateur la refuse. */
  start(): Promise<void> {
    return this.element.play();
  }

  pause(): void {
    this.element.pause();
  }

  /** Position dans l'extrait, en secondes. */
  get time(): number {
    return this.element.currentTime;
  }

  /** Durée de l'extrait une fois connue, sinon `null`. */
  get duration(): number | null {
    const value = this.element.duration;
    return Number.isFinite(value) && value > 0 ? value : null;
  }

  /** Écoute la fin ou l'échec d'un extrait ; renvoie de quoi se désabonner. */
  on(event: 'ended' | 'error', listener: () => void): () => void {
    this.element.addEventListener(event, listener);
    return () => this.element.removeEventListener(event, listener);
  }

  /** Comme `on`, pour une seule fois. */
  once(event: 'ended', listener: () => void): void {
    this.element.addEventListener(event, listener, { once: true });
  }

  /** Joue un extrait depuis le début. */
  clip(src: string, rate = 1): void {
    this.load(src);
    this.rewind();
    this.setRate(rate);
    // Refusée ou interrompue par un autre extrait : rien à rattraper.
    void this.start().catch(() => {});
  }
}
