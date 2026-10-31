'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus } from 'lucide-react';
import { prepareDocumentUpload, registerDocument } from '../actions/documents';

const MAX_BYTES = 10 * 1024 * 1024;
const ACCEPTED = 'application/pdf,image/jpeg,image/png,image/webp';

/**
 * Dépôt d'une pièce dans le stockage objet privé, rangée sous `<dossier_id>/…`.
 *
 * Trois temps : le serveur vérifie l'accès au dossier et délivre un lien
 * d'envoi temporaire, le navigateur dépose le fichier directement dans le
 * stockage (sans passer par la limite de taille des fonctions), puis le
 * serveur enregistre la pièce. Le chemin est toujours construit côté serveur.
 */
export default function DocumentUpload({
  dossierId,
  label,
  sizeError,
  genericError,
  demo = false,
}: {
  dossierId: string;
  label: string;
  sizeError: string;
  genericError: string;
  demo?: boolean;
}) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function upload(file: File) {
    if (file.size > MAX_BYTES) {
      setError(sizeError);
      return;
    }

    setPending(true);
    setError(null);

    try {
      const ticket = await prepareDocumentUpload({
        dossierId,
        fileName: file.name,
        mimeType: file.type,
        size: file.size,
      });

      if (ticket.error || !ticket.uploadUrl || !ticket.path) {
        setError(ticket.error === 'too_large' ? sizeError : genericError);
        return;
      }

      const response = await fetch(ticket.uploadUrl, {
        method: 'PUT',
        headers: { 'Content-Type': file.type },
        body: file,
      });
      if (!response.ok) {
        setError(genericError);
        return;
      }

      const result = await registerDocument({
        dossierId,
        path: ticket.path,
        name: file.name,
        mimeType: file.type,
        size: file.size,
      });
      if (!result.ok) {
        setError(genericError);
        return;
      }

      router.refresh();
    } catch {
      setError(genericError);
    } finally {
      setPending(false);
    }
  }

  // Mode démonstration : le bouton reste visible mais inerte, pour que
  // l'écran de recette montre bien l'action attendue.
  if (demo) {
    return (
      <button type="button" className="rs-btn rs-btn-primary" disabled>
        <Plus size={17} aria-hidden="true" />
        {label}
      </button>
    );
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept={ACCEPTED}
        className="sr-only"
        onChange={(event) => {
          const file = event.target.files?.[0];
          event.target.value = '';
          if (file) void upload(file);
        }}
      />
      <button type="button" className="rs-btn rs-btn-primary" disabled={pending} onClick={() => inputRef.current?.click()}>
        <Plus size={17} aria-hidden="true" />
        {label}
      </button>
      {error ? (
        <p role="alert" className="mt-2 text-[12px] text-[var(--rs-danger)]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
