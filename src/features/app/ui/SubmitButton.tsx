'use client';

import type { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';

/** Bouton de soumission d'un formulaire d'action serveur, désactivé pendant l'envoi. */
export default function SubmitButton({
  children,
  variant = 'primary',
  className = '',
  disabled = false,
}: {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending || disabled}
      aria-busy={pending}
      className={`rs-btn rs-btn-${variant} ${className}`}
    >
      {children}
    </button>
  );
}
