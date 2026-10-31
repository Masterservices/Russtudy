import type { ReactNode } from 'react';
import { AppShell } from '../../../features/app/ui/AppShell';
import DemoBanner from '../../../features/app/ui/DemoBanner';
import type { NavItem } from '../../../features/app/ui/BottomNav';
import { requireRole } from '../../../features/app/data/session';
import { getAppI18n } from '../../../features/app/i18n/server';

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const session = await requireRole(['admin']);
  const { t } = await getAppI18n(session.user.lang);

  // Le dossier est l'objet central de la plateforme : il lui faut un onglet
  // permanent. Les universités restent accessibles depuis les paramètres.
  const nav: NavItem[] = [
    { href: '/app/admin', label: t.consultant.overview, icon: 'dashboard' },
    { href: '/app/admin/dossiers', label: t.admin.dossiers, icon: 'folder' },
    { href: '/app/admin/etudiants', label: t.nav.students, icon: 'students' },
    { href: '/app/admin/consultants', label: t.nav.consultants, icon: 'profile' },
    { href: '/app/admin/parametres', label: t.nav.settings, icon: 'settings' },
  ];

  return (
    <AppShell nav={nav}>
      {session.demo ? <DemoBanner t={t} role={session.user.role} /> : null}
      {children}
    </AppShell>
  );
}
