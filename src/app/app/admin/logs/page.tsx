import type { Metadata } from 'next';
import { ScrollText } from 'lucide-react';
import { requireRole } from '../../../../features/app/data/session';
import { getAuditLogs } from '../../../../features/app/data/queries';
import { getAppI18n } from '../../../../features/app/i18n/server';
import { AppHeader } from '../../../../features/app/ui/AppShell';
import { EmptyState } from '../../../../features/app/ui/primitives';
import { formatDateTime } from '../../../../features/app/utils/format';

export const metadata: Metadata = { title: 'Logs & sécurité' };

/** Écran 29 — Journal d'audit. */
export default async function AdminLogsPage() {
  const { user, demo } = await requireRole(['admin']);
  const { lang, t } = await getAppI18n(user.lang);
  const logs = await getAuditLogs(demo);

  return (
    <>
      <AppHeader title={t.admin.securityTitle} subtitle={t.admin.recentActivity} backHref="/app/admin/parametres" />

      <main className="rs-main">
        {logs.length === 0 ? (
          <EmptyState title={t.common.empty} />
        ) : (
          <ul className="rs-card overflow-hidden divide-y divide-[var(--rs-line)]">
            {logs.map((log) => (
              <li key={log.id} className="rs-row">
                <span className="grid place-items-center w-9 h-9 rounded-xl bg-[var(--rs-primary-soft)] text-[var(--rs-primary)] shrink-0" aria-hidden="true">
                  <ScrollText size={16} />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-[14px] font-medium truncate">{log.action}</span>
                  <span className="block text-[12px] text-[var(--rs-muted)] truncate">
                    {log.actorName}
                    {log.entity ? ` · ${log.entity}` : ''}
                  </span>
                </span>
                <span className="text-[11px] text-[var(--rs-muted)] shrink-0">{formatDateTime(log.createdAt, lang)}</span>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
