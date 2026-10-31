import type { Metadata } from 'next';
import Link from 'next/link';
import { getAppI18n } from '../../../../features/app/i18n/server';
import AuthLangSwitch from '../../../../features/app/ui/auth/AuthLangSwitch';
import NewPasswordForm from '../../../../features/app/ui/auth/NewPasswordForm';
import Wordmark from '../../../../features/app/ui/Wordmark';

export const metadata: Metadata = { title: 'Nouveau mot de passe', robots: { index: false } };

/**
 * Cible du lien de réinitialisation envoyé par e-mail. Neon Auth y ajoute
 * `?token=…`, ou `?error=INVALID_TOKEN` quand le lien est périmé.
 */
export default async function NewPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string; error?: string }>;
}) {
  const { lang, t } = await getAppI18n();
  const { token, error } = await searchParams;
  const valid = Boolean(token) && !error;
  const errors = t.auth.errors as Record<string, string>;

  return (
    <main className="rs-shell px-6 py-10 flex flex-col">
      <Link href="/app/connexion" className="mb-8 inline-flex"><Wordmark size="sm" /></Link>

      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-[24px] font-bold text-center mb-7">{t.auth.newPassword}</h1>

        {valid && token ? (
          <NewPasswordForm t={t} token={token} />
        ) : (
          <div className="space-y-4">
            <p role="alert" className="text-[13px] text-[var(--rs-danger)] bg-[var(--rs-danger-soft)] rounded-xl px-3 py-2">
              {errors.invalid_link}
            </p>
            <Link href="/app/mot-de-passe" className="rs-btn rs-btn-secondary">{t.auth.forgot}</Link>
          </div>
        )}

        <p className="mt-7 text-center text-[13px]">
          <Link href="/app/connexion" className="font-semibold text-[var(--rs-primary)]">{t.common.back}</Link>
        </p>

        <div className="mt-8">
          <AuthLangSwitch lang={lang} />
        </div>
      </div>
    </main>
  );
}
