import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getAppI18n } from '../../../features/app/i18n/server';
import { getAppSession, HOME_BY_ROLE } from '../../../features/app/data/session';
import { isNeonConfigured } from '../../../lib/neon/env';
import AuthLangSwitch from '../../../features/app/ui/auth/AuthLangSwitch';
import GoogleButton from '../../../features/app/ui/auth/GoogleButton';
import SignInForm from '../../../features/app/ui/auth/SignInForm';
import Wordmark from '../../../features/app/ui/Wordmark';

export const metadata: Metadata = { title: 'Connexion' };

/** Écran 2 — Connexion. */
export default async function SignInPage({ searchParams }: { searchParams: Promise<{ suivant?: string }> }) {
  const session = await getAppSession();
  if (session && !session.demo) redirect(HOME_BY_ROLE[session.user.role]);

  const { lang, t } = await getAppI18n();
  const { suivant } = await searchParams;
  const next = suivant?.startsWith('/app/') ? suivant : undefined;

  return (
    <main className="rs-shell px-6 py-10 flex flex-col">
      <Link href="/app" className="mb-8 inline-flex"><Wordmark size="sm" /></Link>

      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-[26px] font-bold text-center">{t.auth.welcome}</h1>
        <p className="mt-1 mb-7 text-center text-[13px] text-[var(--rs-muted)]">{t.auth.signInSubtitle}</p>

        <SignInForm t={t} next={next} />

        <GoogleButton label="Google" dividerLabel={t.auth.or} next={next} enabled={isNeonConfigured()} />

        <p className="mt-7 text-center text-[13px] text-[var(--rs-muted)]">
          {t.auth.noAccount}{' '}
          <Link href="/app/inscription" className="font-semibold text-[var(--rs-primary)]">{t.auth.signUp}</Link>
        </p>

        <div className="mt-8">
          <AuthLangSwitch lang={lang} />
        </div>
      </div>
    </main>
  );
}
