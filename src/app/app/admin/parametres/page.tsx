import type { Metadata } from 'next';
import { Building2, FolderKanban, GraduationCap, LogOut, MessageSquare, ScrollText, ShieldCheck, Tags, UserCog, Users } from 'lucide-react';
import { requireRole } from '../../../../features/app/data/session';
import { signOut } from '../../../../features/app/actions/auth';
import { getAppI18n } from '../../../../features/app/i18n/server';
import { AppHeader } from '../../../../features/app/ui/AppShell';
import LanguageSelect from '../../../../features/app/ui/LanguageSelect';
import { CardList, LinkRow } from '../../../../features/app/ui/primitives';

export const metadata: Metadata = { title: 'Paramètres généraux' };

/** Écran 28 — Paramètres généraux de la plateforme. */
export default async function AdminSettingsPage() {
  const { user } = await requireRole(['admin']);
  const { lang, t } = await getAppI18n(user.lang);

  return (
    <>
      <AppHeader title={t.admin.settingsTitle} subtitle={user.email} />

      <main className="rs-main">
        {/* Chaque ligne mène à un écran réel : un libellé qui ne correspond pas
            à sa destination rend la fonction introuvable. */}
        <CardList>
          <LinkRow href="/app/admin/dossiers" icon={<FolderKanban size={18} />} title={t.admin.dossiers} />
          <LinkRow href="/app/admin/etudiants" icon={<GraduationCap size={18} />} title={t.admin.students} />
          <LinkRow href="/app/admin/consultants" icon={<UserCog size={18} />} title={t.admin.consultants} />
          <LinkRow href="/app/admin/universites" icon={<Building2 size={18} />} title={t.nav.universities} />
          <LinkRow href="/app/admin/messages" icon={<MessageSquare size={18} />} title={t.messages.title} />
          <LinkRow href="/app/admin/utilisateurs" icon={<Users size={18} />} title={t.admin.usersRoles} />
          <LinkRow href="/app/admin/tarification" icon={<Tags size={18} />} title={t.admin.pricingTitle} />
          <LinkRow href="/app/admin/logs" icon={<ScrollText size={18} />} title={t.admin.securityTitle} />
          <LinkRow href="/app/mot-de-passe" icon={<ShieldCheck size={18} />} title={t.profile.security} />
          <LanguageSelect lang={lang} label={t.common.language} />
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
