import type { Metadata } from 'next';
import { requireRole } from '../../../../features/app/data/session';
import { getAllProfiles } from '../../../../features/app/data/queries';
import { getAppI18n } from '../../../../features/app/i18n/server';
import { AppHeader } from '../../../../features/app/ui/AppShell';
import RoleSelect from '../../../../features/app/ui/admin/RoleSelect';
import { Avatar, EmptyState } from '../../../../features/app/ui/primitives';

export const metadata: Metadata = { title: 'Utilisateurs & rôles' };

/** Écran 31 — Attribution des rôles. */
export default async function AdminUsersPage() {
  const { user, demo } = await requireRole(['admin']);
  const { t } = await getAppI18n(user.lang);
  const profiles = await getAllProfiles(demo);

  return (
    <>
      <AppHeader title={t.admin.usersTitle} subtitle={`${profiles.length}`} backHref="/app/admin/parametres" />

      <main className="rs-main">
        {profiles.length === 0 ? (
          <EmptyState title={t.common.empty} />
        ) : (
          <ul className="rs-card overflow-hidden divide-y divide-[var(--rs-line)]">
            {profiles.map((profile) => (
              <li key={profile.id} className="rs-row">
                <Avatar name={profile.fullName} url={profile.avatarUrl} size={38} />
                <span className="flex-1 min-w-0">
                  <span className="block text-[14px] font-semibold truncate">{profile.fullName || '—'}</span>
                  <span className="block text-[12px] text-[var(--rs-muted)] truncate">{profile.email}</span>
                </span>
                <RoleSelect
                  userId={profile.id}
                  role={profile.role}
                  t={t}
                  disabled={demo || profile.id === user.id}
                />
              </li>
            ))}
          </ul>
        )}

        <p className="mt-3 px-1 text-[12px] leading-snug text-[var(--rs-muted)]">
          {t.admin.usersRoles} — votre propre rôle n’est pas modifiable ici, pour éviter de vous
          retirer l’accès à cet écran.
        </p>
      </main>
    </>
  );
}
