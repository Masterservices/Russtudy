'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { readNavDepth, writeNavDepth } from './navigation';

/**
 * Suit le parcours de l'utilisateur dans `/app`. Monté une seule fois à la
 * racine de l'espace, il survit aux navigations client : les compteurs restent
 * cohérents tant que l'onglet vit.
 */
export default function NavDepthTracker() {
  const pathname = usePathname();
  const started = useRef(false);
  const popped = useRef(false);

  useEffect(() => {
    // Un retour navigateur déclenche `popstate` avant le rendu de la nouvelle
    // page : on dépile au lieu d'empiler.
    const onPopState = () => {
      popped.current = true;
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    if (!started.current) {
      // Première page de l'onglet : c'est la racine du parcours.
      started.current = true;
      writeNavDepth(0);
      return;
    }

    if (popped.current) {
      popped.current = false;
      writeNavDepth(readNavDepth() - 1);
      return;
    }

    writeNavDepth(readNavDepth() + 1);
  }, [pathname]);

  return null;
}
