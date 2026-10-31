import type { Metadata } from 'next';
import { CreditCard, HelpCircle, LogOut, ShieldCheck, UserRound, Users } from 'lucide-react';
import { requireRole } from '../../../../features/app/data/session';
import { getStudentDossier } from '../../../../features/app/data/queries';
import { signOut } from '../../../../features/app/actions/auth';
import { getAppI18n } from '../../../../features/app/i18n/server';
import { AppHeader } from '../../../../features/app/ui/AppShell';
import LanguageSelect from '../../../../features/app/ui/LanguageSelect';
import { Avatar, CardList, LinkRow } from '../../../../features/app/ui/primitives';

export const metadata: Metadata = { title: 'Profil' };

/** Écran 12 — Profil étudiant. */
export default async function StudentProfilePage() {
  const { user, demo } = await requireRole(['student']);
  const { lang, t } = await getAppI18n(user.lang);
  const dossier = await getStudentDossier(user.id, demo);

  return (
    <>
      <AppHeader title={t.profile.title} />

      <main className="rs-main">
        <div className="rs-card flex items-center gap-3.5 p-4">
          <Avatar name={user.fullName} url={user.avatarUrl} size={54} />
          <div className="min-w-0">
            <p className="text-[16px] font-bold truncate">{user.fullName}</p>
            <p className="text-[13px] text-[var(--rs-muted)] truncate">{user.email}</p>
          </div>
        </div>

        <div className="mt-4">
          <CardList>
            {dossier?.consultant ? (
              <LinkRow
                href="/app/etudiant/messages?filtre=consultant"
                icon={<Users size={18} />}
                title={t.profile.myConsultant}
                subtitle={dossier.consultant.fullName}
              />
            ) : null}
            <LinkRow href="/app/etudiant/profil/informations" icon={<UserRound size={18} />} title={t.profile.personalInfo} />
            <LinkRow href="/app/etudiant/paiements" icon={<CreditCard size={18} />} title={t.payments.title} />
            <LinkRow href="/app/mot-de-passe" icon={<ShieldCheck size={18} />} title={t.profile.security} />
            <LanguageSelect lang={lang} label={t.common.language} />
            <LinkRow href="/faq" icon={<HelpCircle size={18} />} title={t.profile.helpCenter} />
          </CardList>
        </div>

        <form action={signOut} className="mt-4">
          <button type="submit" className="rs-btn rs-btn-secondary text-[var(--rs-danger)]">
            <LogOut size={17} aria-hidden="true" />
            {t.common.logout}
          </button>
        </form>
      </main>
    </>
  );
}
