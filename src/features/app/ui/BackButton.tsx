'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { readNavDepth } from './navigation';

/**
 * Retour d'écran. Reste un lien — donc ouvrable dans un nouvel onglet et
 * annonçable par un lecteur d'écran — mais suit l'historique réel quand
 * l'utilisateur a un parcours derrière lui. La décision est prise au clic,
 * pas au rendu : le compteur est alors à jour.
 */
export default function BackButton({ href, label }: { href: string; label: string }) {
  const router = useRouter();

  return (
    <Link
      href={href}
      aria-label={label}
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
        if (readNavDepth() > 0) {
          event.preventDefault();
          router.back();
        }
      }}
      className="shrink-0 -ms-1 p-1.5 rounded-full text-[var(--rs-ink)] hover:bg-[var(--rs-primary-soft)]"
    >
      <ArrowLeft size={20} className="rtl:rotate-180" aria-hidden="true" />
    </Link>
  );
}
