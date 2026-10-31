import type { ReactNode } from 'react';
import { AppShell } from '../../../features/app/ui/AppShell';
import DemoBanner from '../../../features/app/ui/DemoBanner';
import type { NavItem } from '../../../features/app/ui/BottomNav';
import { requireRole } from '../../../features/app/data/session';
import { getAppI18n } from '../../../features/app/i18n/server';

export default async function ConsultantLayout({ children }: { children: ReactNode }) {
  const session = await requireRole(['consultant']);
  const { t } = await getAppI18n(session.user.lang);

  const nav: NavItem[] = [
    { href: '/app/consultant', label: t.consultant.overview, icon: 'dashboard' },
    { href: '/app/consultant/etudiants', label: t.nav.students, icon: 'students' },
    { href: '/app/consultant/messages', label: t.nav.messages, icon: 'messages' },
    { href: '/app/consultant/agenda', label: t.nav.calendar, icon: 'calendar' },
    { href: '/app/consultant/parametres', label: t.nav.settings, icon: 'settings' },
  ];

  return (
    <AppShell nav={nav}>
      {session.demo ? <DemoBanner t={t} role={session.user.role} /> : null}
      {children}
    </AppShell>
  );
}
