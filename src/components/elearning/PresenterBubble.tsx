'use client';

/**
 * Indicateur de voix, posé à côté du lecteur.
 *
 * Il ne montre pas de portrait. La narration est dite par une voix de
 * femme, et le visage dont nous disposons est celui d'un homme :
 * afficher l'un pendant qu'on entend l'autre décrédibilise la leçon
 * plus sûrement que l'absence d'illustration. Trois barres qui
 * s'animent disent exactement ce qui est vrai — la voix parle — et
 * s'immobilisent à la pause.
 *
 * Il vit hors de la diapositive : posé dessus, il en cachait un coin,
 * et une diapositive de langue n'a pas de coin à perdre. Le
 * positionnement appartient au parent.
 *
 * Un portrait reviendra le jour où il correspondra à la voix :
 * passer `src` suffira.
 */
export default function PresenterBubble({
  speaking,
  name,
  src,
}: {
  speaking: boolean;
  name: string;
  /** Portrait, uniquement s'il correspond à la voix entendue. */
  src?: string;
}) {
  return (
    <div className="relative shrink-0">
      <span
        aria-hidden="true"
        className={`absolute -inset-1 rounded-full border-2 border-current ${
          speaking ? 'rs-presenter-ring opacity-60' : 'opacity-25'
        }`}
      />

      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={name}
          width={46}
          height={46}
          className={`relative w-[46px] h-[46px] rounded-full object-cover border-2 border-white/80 ${
            speaking ? 'rs-presenter-breathe' : ''
          }`}
        />
      ) : (
        <div
          role="img"
          aria-label={name}
          className="relative w-[46px] h-[46px] rounded-full border-2 border-white/80 bg-[var(--dark-bg)] flex items-end justify-center gap-1 pb-[15px]"
        >
          {[0, 1, 2].map((bar) => (
            <span
              key={bar}
              className={`w-1 rounded-full bg-white ${
                speaking ? `rs-voice-bar rs-voice-bar-${bar}` : 'h-[5px] opacity-45'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
