import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getAppI18n } from '../../features/app/i18n/server';
import { getAppSession, HOME_BY_ROLE } from '../../features/app/data/session';
import { isNeonConfigured } from '../../lib/neon/env';
import AuthLangSwitch from '../../features/app/ui/auth/AuthLangSwitch';
import SkylineArt from '../../features/app/ui/SkylineArt';
import Wordmark from '../../features/app/ui/Wordmark';

export const metadata: Metadata = { title: 'RusStudy — Espace personnel' };

/** Écran 1 — Splash. Redirige immédiatement l'utilisateur déjà connecté. */
export default async function AppSplashPage() {
  const session = await getAppSession();
  if (session && !session.demo) redirect(HOME_BY_ROLE[session.user.role]);

  const { lang, t } = await getAppI18n(session?.user.lang);
  const demo = !isNeonConfigured();

  return (
    <main className="rs-shell rs-gradient relative flex flex-col overflow-hidden">
      {/* Décor de fond : la silhouette reste sous le contenu, jamais devant. */}
      <SkylineArt className="absolute inset-x-0 bottom-0 h-[190px] text-white/12 pointer-events-none" />

      <div className="relative flex-1 flex flex-col items-center justify-center px-6 text-center">
        <Wordmark size="lg" inverted />
        <p className="mt-3 text-[11px] font-semibold tracking-[0.22em] text-white/70">{t.common.tagline}</p>
      </div>

      <div className="relative px-6 pb-10 space-y-2.5">
        <Link href="/app/connexion" className="rs-btn bg-white text-[var(--rs-primary)] hover:bg-white/90">
          {t.auth.signIn}
        </Link>
        <Link href="/app/inscription" className="rs-btn bg-white/15 text-white border border-white/30 hover:bg-white/25">
          {t.auth.signUp}
        </Link>
        <div className="pt-2">
          <AuthLangSwitch lang={lang} inverted />
        </div>
        {demo ? <p className="pt-1 text-center text-[11px] text-white/70">{t.common.demoBadge}</p> : null}
        <Link href="/" className="block pt-1 text-center text-[12px] text-white/70 hover:text-white">
          {t.common.backToSite}
        </Link>
      </div>
    </main>
  );
}
