/**
 * Ossature affichée pendant le chargement d'un écran.
 *
 * Les pages de `/app` sont rendues à la demande : sans cette ossature, Next.js
 * attend la fin des requêtes avant de peindre quoi que ce soit et l'écran
 * précédent reste figé une à deux secondes. Ici, la navigation répond
 * immédiatement et le contenu prend la place des blocs gris.
 */
export default function ScreenSkeleton({ rows = 4 }: { rows?: number }) {
  return (
    <div className="rs-shell" aria-busy="true" aria-live="polite">
      <header className="sticky top-0 z-30 bg-[var(--rs-bg)]/95 border-b border-[var(--rs-line)]">
        <div className="flex items-center gap-3 px-4 py-3.5">
          <div className="h-5 w-40 rs-skeleton" />
        </div>
      </header>

      <main className="rs-main">
        <div className="h-24 rs-skeleton" />
        <div className="mt-3 space-y-2.5">
          {Array.from({ length: rows }).map((_, index) => (
            <div key={index} className="h-16 rs-skeleton" />
          ))}
        </div>
      </main>
    </div>
  );
}
