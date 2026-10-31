'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Parallaxe au défilement, sans dépendance.
 *
 * L'écart appliqué est proportionnel à la distance entre le centre de
 * l'élément et le centre de la fenêtre : la couche avance plus vite ou moins
 * vite que la page selon le signe de `speed`.
 *
 * Trois garde-fous, parce qu'une parallaxe mal faite coûte plus cher qu'elle
 * ne rapporte sur mobile :
 * - rien ne se déclenche si l'utilisateur a demandé moins d'animations ;
 * - le calcul ne tourne que lorsque l'élément est à l'écran ;
 * - les mesures sont regroupées dans une frame d'animation, et l'écoute du
 *   défilement est passive, donc jamais bloquante pour le scroll.
 */
export default function ParallaxLayer({
  speed = 0.12,
  className,
  children,
}: {
  /** Fraction du déplacement. Négatif pour aller à contresens du défilement. */
  speed?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    let visible = false;

    const apply = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const offsetFromCenter = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = `translate3d(0, ${(-offsetFromCenter * speed).toFixed(2)}px, 0)`;
    };

    const schedule = () => {
      if (!visible || frame) return;
      frame = requestAnimationFrame(apply);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) schedule();
      },
      { rootMargin: '120px' },
    );
    observer.observe(el);

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) cancelAnimationFrame(frame);
      el.style.transform = '';
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
}
