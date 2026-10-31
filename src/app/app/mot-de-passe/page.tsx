import type { Metadata } from 'next';
import Link from 'next/link';
import { getAppI18n } from '../../../features/app/i18n/server';
import AuthLangSwitch from '../../../features/app/ui/auth/AuthLangSwitch';
import ResetForm from '../../../features/app/ui/auth/ResetForm';
import Wordmark from '../../../features/app/ui/Wordmark';

export const metadata: Metadata = { title: 'Mot de passe oublié' };

const CONFIRMATION: Record<string, string> = {
  fr: 'Si un compte existe pour cette adresse, un lien de réinitialisation vient d’être envoyé.',
  en: 'If an account exists for this address, a reset link has just been sent.',
  ar: 'إذا كان هناك حساب بهذا العنوان، فقد تم إرسال رابط إعادة التعيين.',
  ru: 'Если аккаунт с этим адресом существует, ссылка для сброса пароля отправлена.',
};

export default async function PasswordResetPage() {
  const { lang, t } = await getAppI18n();

  return (
    <main className="rs-shell px-6 py-10 flex flex-col">
      <Link href="/app/connexion" className="mb-8 inline-flex"><Wordmark size="sm" /></Link>

      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-[24px] font-bold text-center">{t.auth.forgot}</h1>
        <p className="mt-1 mb-7 text-center text-[13px] text-[var(--rs-muted)]">{t.auth.email}</p>

        <ResetForm t={t} confirmation={CONFIRMATION[lang] ?? CONFIRMATION.fr} />

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
