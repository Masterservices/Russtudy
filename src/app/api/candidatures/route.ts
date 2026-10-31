import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Réception des candidatures du site.
 *
 * Canal d'envoi : la variable d'environnement CANDIDATURE_WEBHOOK_URL
 * (webhook Make/Zapier/n8n/Google Apps Script/CRM) reçoit le lead en JSON.
 * Chaque lead est aussi journalisé côté serveur (logs Vercel) pour ne
 * jamais perdre silencieusement une candidature, même sans webhook configuré.
 */

interface CandidaturePayload {
  nomComplet: string;
  whatsapp: string;
  email: string;
  [key: string]: unknown;
}

function isNonEmptyString(v: unknown): v is string {
  return typeof v === 'string' && v.trim().length > 0;
}

function parsePayload(data: unknown): CandidaturePayload | null {
  if (typeof data !== 'object' || data === null) return null;
  const d = data as Record<string, unknown>;
  if (!isNonEmptyString(d.nomComplet) || !isNonEmptyString(d.whatsapp) || !isNonEmptyString(d.email)) {
    return null;
  }
  return d as CandidaturePayload;
}

function generateDossierId(): string {
  const year = new Date().getFullYear();
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `RS-${year}-${rand}`;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const payload = parsePayload(body);
  if (!payload) {
    return NextResponse.json({ ok: false, error: 'missing_required_fields' }, { status: 400 });
  }

  const id = generateDossierId();
  const lead = {
    ...payload,
    id,
    receivedAt: new Date().toISOString(),
    source: 'russieetudes.com/candidature',
  };

  // Trace serveur systématique : les leads restent consultables dans les
  // logs de la fonction même si aucun webhook n'est configuré.
  console.log('[candidature]', JSON.stringify(lead));

  const webhookUrl = process.env.CANDIDATURE_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
        signal: AbortSignal.timeout(8000),
      });
      if (!res.ok) {
        console.error('[candidature] webhook_failed', res.status, id);
        return NextResponse.json({ ok: false, error: 'delivery_failed', id }, { status: 502 });
      }
      return NextResponse.json({ ok: true, id, delivered: true });
    } catch (err) {
      console.error('[candidature] webhook_error', id, err);
      return NextResponse.json({ ok: false, error: 'delivery_failed', id }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true, id, delivered: false });
}
