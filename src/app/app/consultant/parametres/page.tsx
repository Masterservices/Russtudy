import type { Metadata } from 'next';
import { Bell, GraduationCap, HelpCircle, LogOut, ShieldCheck, UserRound } from 'lucide-react';
import { requireRole } from '../../../../features/app/data/session';
import { signOut } from '../../../../features/app/actions/auth';
import { getAppI18n } from '../../../../features/app/i18n/server';
import { AppHeader } from '../../../../features/app/ui/AppShell';
import LanguageSelect from '../../../../features/app/ui/LanguageSelect';
import ProfileForm from '../../../../features/app/ui/ProfileForm';
import { Avatar, CardList, LinkRow, SectionTitle } from '../../../../features/app/ui/primitives';

export const metadata: Metadata = { title: 'Paramètres consultant' };

/** Écran 22 — Paramètres du consultant. */
export default async function ConsultantSettingsPage() {
  const { user, demo } = await requireRole(['consultant']);
  const { lang, t } = await getAppI18n(user.lang);

  return (
    <>
      <AppHeader title={t.consultant.settingsTitle} />

      <main className="rs-main">
        <div className="rs-card flex items-center gap-3.5 p-4">
          <Avatar name={user.fullName} url={user.avatarUrl} size={54} />
          <div className="min-w-0">
            <p className="text-[16px] font-bold truncate">{user.fullName}</p>
            <p className="text-[13px] text-[var(--rs-muted)] truncate">{user.email}</p>
          </div>
        </div>

        <SectionTitle>{t.profile.personalInfo}</SectionTitle>
        <ProfileForm user={user} t={t} disabled={demo} />

        <SectionTitle>{t.nav.settings}</SectionTitle>
        <CardList>
          <LinkRow href="/app/consultant/universites" icon={<GraduationCap size={18} />} title={t.nav.universities} />
          <LinkRow href="/app/consultant/etudiants" icon={<UserRound size={18} />} title={t.nav.students} />
          <LinkRow href="/app/consultant/messages" icon={<Bell size={18} />} title={t.consultant.messageTemplates} />
          <LinkRow href="/app/mot-de-passe" icon={<ShieldCheck size={18} />} title={t.profile.security} />
          <LanguageSelect lang={lang} label={t.common.language} />
          <LinkRow href="/faq" icon={<HelpCircle size={18} />} title={t.profile.helpCenter} />
        </CardList>

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
