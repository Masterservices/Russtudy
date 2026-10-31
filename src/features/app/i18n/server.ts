import 'server-only';

import { cookies } from 'next/headers';
import { APP_LANG_COOKIE, getAppDictionary, isAppLang, type AppDictionary, type AppLang } from './index';

/**
 * Langue de la plateforme : choix explicite de l'utilisateur (cookie) sinon
 * langue enregistrée sur son profil, sinon français.
 */
export async function resolveAppLang(profileLang?: string | null): Promise<AppLang> {
  const store = await cookies();
  const cookieLang = store.get(APP_LANG_COOKIE)?.value;
  if (isAppLang(cookieLang)) return cookieLang;
  if (isAppLang(profileLang)) return profileLang;
  return 'fr';
}

export async function getAppI18n(profileLang?: string | null): Promise<{ lang: AppLang; t: AppDictionary }> {
  const lang = await resolveAppLang(profileLang);
  return { lang, t: getAppDictionary(lang) };
}
