'use client';

import { Download } from 'lucide-react';

/**
 * Export du devis : la boîte d'impression du navigateur permet
 * l'enregistrement en PDF, sans embarquer de librairie de génération.
 */
export default function PrintButton({ label }: { label: string }) {
  return (
    <button type="button" onClick={() => window.print()} className="rs-btn rs-btn-primary">
      <Download size={17} aria-hidden="true" />
      {label}
    </button>
  );
}
