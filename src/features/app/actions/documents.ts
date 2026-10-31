'use server';

import { revalidatePath } from 'next/cache';
import { isStorageConfigured } from '../../../lib/neon/env';
import { getServerDb } from '../../../lib/neon/server';
import { DOCUMENTS_PREFIX, signedUploadUrl } from '../../../lib/neon/storage';
import { getAppSession } from '../data/session';

const MAX_BYTES = 10 * 1024 * 1024;
const ACCEPTED_TYPES = ['application/pdf', 'image/jpeg', 'image/png', 'image/webp'];
const UPLOAD_URL_TTL = 60 * 5;
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export interface UploadTicket {
  error?: 'unauthenticated' | 'demo_mode' | 'unavailable' | 'too_large' | 'invalid_type' | 'forbidden';
  uploadUrl?: string;
  path?: string;
}

export interface RegisterResult {
  error?: 'unauthenticated' | 'demo_mode' | 'unavailable' | 'invalid_path' | 'failed';
  ok?: boolean;
}

function safeName(name: string): string {
  return name
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-zA-Z0-9._-]/g, '-')
    .slice(-80);
}

/**
 * Étape 1 de l'envoi d'une pièce : vérifie que l'utilisateur a accès au dossier
 * et renvoie un lien d'envoi temporaire vers le stockage objet.
 *
 * Le stockage ne connaît pas la RLS : l'accès est contrôlé ici, en relisant le
 * dossier au nom de l'utilisateur. Le chemin est construit côté serveur, sous
 * `<dossier_id>/` — jamais reçu du navigateur.
 */
export async function prepareDocumentUpload(input: {
  dossierId: string;
  fileName: string;
  mimeType: string;
  size: number;
}): Promise<UploadTicket> {
  const session = await getAppSession();
  if (!session) return { error: 'unauthenticated' };
  if (session.demo) return { error: 'demo_mode' };
  if (!isStorageConfigured()) return { error: 'unavailable' };

  if (!UUID.test(input.dossierId)) return { error: 'forbidden' };
  if (!Number.isFinite(input.size) || input.size <= 0 || input.size > MAX_BYTES) return { error: 'too_large' };
  if (!ACCEPTED_TYPES.includes(input.mimeType)) return { error: 'invalid_type' };

  const db = await getServerDb();
  if (!db) return { error: 'unavailable' };

  const { data: dossier } = await db.from('dossiers').select('id').eq('id', input.dossierId).maybeSingle();
  if (!dossier) return { error: 'forbidden' };

  const path = `${input.dossierId}/${Date.now()}-${safeName(input.fileName)}`;
  const uploadUrl = await signedUploadUrl(`${DOCUMENTS_PREFIX}${path}`, input.mimeType, UPLOAD_URL_TTL);
  return { uploadUrl, path };
}

/** Étape 2 : une fois le fichier déposé, enregistre la pièce dans le dossier (RLS appliquée). */
export async function registerDocument(input: {
  dossierId: string;
  path: string;
  name: string;
  mimeType: string;
  size: number;
}): Promise<RegisterResult> {
  const session = await getAppSession();
  if (!session) return { error: 'unauthenticated' };
  if (session.demo) return { error: 'demo_mode' };

  if (!UUID.test(input.dossierId) || !input.path.startsWith(`${input.dossierId}/`)) return { error: 'invalid_path' };

  const db = await getServerDb();
  if (!db) return { error: 'unavailable' };

  const { error } = await db.from('documents').insert({
    dossier_id: input.dossierId,
    doc_type: 'other',
    name: input.name.slice(0, 200),
    status: 'received',
    storage_path: input.path,
    mime_type: input.mimeType,
    size_bytes: input.size,
    received_at: new Date().toISOString(),
  });

  if (error) return { error: 'failed' };

  revalidatePath('/app', 'layout');
  return { ok: true };
}
