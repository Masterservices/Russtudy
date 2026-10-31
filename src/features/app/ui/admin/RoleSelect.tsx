'use client';

import { useTransition } from 'react';
import { setUserRole } from '../../actions/admin';
import type { AppDictionary } from '../../i18n';
import type { AppRole } from '../../types';

const ROLES: AppRole[] = ['student', 'consultant', 'admin'];

/**
 * Attribution du rôle d'un utilisateur.
 *
 * Le changement est appliqué au relâchement de la liste, sans bouton de
 * validation : une seule valeur, aucun brouillon possible. La RLS et le
 * trigger `profiles_guard_role` restent l'autorité côté base.
 */
export default function RoleSelect({
  userId,
  role,
  t,
  disabled = false,
}: {
  userId: string;
  role: AppRole;
  t: AppDictionary;
  disabled?: boolean;
}) {
  const [pending, startTransition] = useTransition();

  return (
    <select
      aria-label={t.admin.role}
      defaultValue={role}
      disabled={disabled || pending}
      onChange={(event) => {
        const data = new FormData();
        data.set('userId', userId);
        data.set('role', event.target.value);
        startTransition(() => void setUserRole(data));
      }}
      className="shrink-0 rounded-full border border-[var(--rs-line)] bg-[var(--rs-card)] px-2.5 py-1.5 text-[12px] font-semibold text-[var(--rs-ink)] disabled:opacity-50"
    >
      {ROLES.map((value) => (
        <option key={value} value={value}>
          {t.roles[value]}
        </option>
      ))}
    </select>
  );
}
