'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { getServerDb } from '../../../lib/neon/server';
import { getAppSession } from '../data/session';
import { APP_LANG_COOKIE, isAppLang, type AppLang } from '../i18n';

/**
 * Choix de langue de la plateforme : mémorisé par cookie (immédiat, y compris
 * hors session) et reporté sur le profil lorsqu'une base est connectée.
 */
export async function setAppLang(lang: AppLang): Promise<void> {
  if (!isAppLang(lang)) return;

  const store = await cookies();
  store.set(APP_LANG_COOKIE, lang, { path: '/app', maxAge: 60 * 60 * 24 * 365, sameSite: 'lax' });

  const session = await getAppSession();
  if (session && !session.demo) {
    const db = await getServerDb();
    if (db) await db.from('profiles').update({ lang }).eq('id', session.user.id);
  }

  revalidatePath('/app', 'layout');
}
