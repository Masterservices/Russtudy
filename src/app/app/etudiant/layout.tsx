import type { ReactNode } from 'react';
import { AppShell } from '../../../features/app/ui/AppShell';
import DemoBanner from '../../../features/app/ui/DemoBanner';
import type { NavItem } from '../../../features/app/ui/BottomNav';
import { requireRole } from '../../../features/app/data/session';
import { getAppI18n } from '../../../features/app/i18n/server';

export default async function StudentLayout({ children }: { children: ReactNode }) {
  const session = await requireRole(['student']);
  const { t } = await getAppI18n(session.user.lang);

  const nav: NavItem[] = [
    { href: '/app/etudiant', label: t.nav.home, icon: 'home' },
    { href: '/app/etudiant/dossier', label: t.nav.dossier, icon: 'folder' },
    { href: '/app/etudiant/messages', label: t.nav.messages, icon: 'messages' },
    { href: '/app/etudiant/profil', label: t.nav.profile, icon: 'profile' },
  ];

  return (
    <AppShell nav={nav}>
      {session.demo ? <DemoBanner t={t} role={session.user.role} /> : null}
      {children}
    </AppShell>
  );
}
