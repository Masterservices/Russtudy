'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus } from 'lucide-react';
import { getBrowserSupabase } from '../../../lib/supabase/client';

const MAX_BYTES = 10 * 1024 * 1024;
const ACCEPTED = 'application/pdf,image/jpeg,image/png,image/webp';

function safeName(name: string): string {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9._-]/g, '-')
    .slice(-80);
}

/**
 * Dépôt d'une pièce dans le bucket privé `documents`, rangée sous
 * `<dossier_id>/…` — le chemin est ce que les politiques de stockage
 * contrôlent, il ne doit jamais être construit ailleurs.
 */
export default function DocumentUpload({
  dossierId,
  label,
  sizeError,
  genericError,
}: {
  dossierId: string;
  label: string;
  sizeError: string;
  genericError: string;
}) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const supabase = getBrowserSupabase();

  async function upload(file: File) {
    if (!supabase) return;
    if (file.size > MAX_BYTES) {
      setError(sizeError);
      return;
    }

    setPending(true);
    setError(null);

    const path = `${dossierId}/${Date.now()}-${safeName(file.name)}`;
    const { error: uploadError } = await supabase.storage.from('documents').upload(path, file, { upsert: false });

    if (uploadError) {
      setError(genericError);
      setPending(false);
      return;
    }

    const { error: insertError } = await supabase.from('documents').insert({
      dossier_id: dossierId,
      doc_type: 'other',
      name: file.name,
      status: 'received',
      storage_path: path,
      mime_type: file.type,
      size_bytes: file.size,
      received_at: new Date().toISOString(),
    });

    setPending(false);
    if (insertError) {
      setError(genericError);
      return;
    }

    router.refresh();
  }

  // Mode démonstration : le bouton reste visible mais inerte, pour que
  // l'écran de recette montre bien l'action attendue.
  if (!supabase) {
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
