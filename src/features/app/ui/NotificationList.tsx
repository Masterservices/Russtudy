import Link from 'next/link';
import { Bell, CheckCircle2, CreditCard, FileText, GraduationCap, Mail, XCircle } from 'lucide-react';
import { markAllNotificationsRead } from '../actions/app';
import type { AppDictionary, AppLang } from '../i18n';
import { interpolate } from '../i18n';
import type { NotificationItem } from '../types';
import SubmitButton from './SubmitButton';
import { EmptyState } from './primitives';
import { formatDateTime } from '../utils/format';

const ICONS: Record<string, typeof Bell> = {
  document: FileText,
  payment: CreditCard,
  dossier: GraduationCap,
  invitation: Mail,
  message_received: Mail,
  step_requested: GraduationCap,
  step_confirmed: CheckCircle2,
  step_validated: CheckCircle2,
  document_validated: CheckCircle2,
  document_rejected: XCircle,
};

/**
 * Liste des notifications, partagée par les trois espaces.
 *
 * Le texte n'est pas stocké en base : `kind` est une clé traduite ici et
 * `body` porte son paramètre. Un étudiant arabophone et son consultant
 * francophone lisent ainsi le même événement, chacun dans sa langue.
 */
export default function NotificationList({
  notifications,
  t,
  lang,
  demo,
}: {
  notifications: NotificationItem[];
  t: AppDictionary;
  lang: AppLang;
  demo: boolean;
}) {
  if (notifications.length === 0) return <EmptyState title={t.notifications.empty} />;

  const hasUnread = notifications.some((notification) => !notification.readAt);
  const kinds = t.notifications.kinds as Record<string, string>;
  const steps = t.steps as Record<string, string>;

  const textOf = (notification: NotificationItem) => {
    const template = kinds[notification.kind];
    if (!template) return { title: notification.title, detail: notification.body };

    const raw = notification.body ?? '';
    const value = notification.kind.startsWith('step_') ? steps[raw] ?? raw : raw;
    return { title: interpolate(template, { value }), detail: null };
  };

  return (
    <>
      <ul className="rs-card overflow-hidden divide-y divide-[var(--rs-line)]">
        {notifications.map((notification) => {
          const Icon = ICONS[notification.kind] ?? Bell;
          const unread = !notification.readAt;
          const { title, detail } = textOf(notification);

          const content = (
            <span className="rs-row">
              <span
                className={`grid place-items-center w-9 h-9 rounded-xl shrink-0 ${
                  unread ? 'bg-[var(--rs-primary-soft)] text-[var(--rs-primary)]' : 'bg-[#F1F0F7] text-[var(--rs-muted)]'
                }`}
                aria-hidden="true"
              >
                <Icon size={17} />
              </span>
              <span className="flex-1 min-w-0">
                <span className={`block text-[14px] truncate ${unread ? 'font-semibold' : 'font-medium text-[var(--rs-muted)]'}`}>
                  {title}
                </span>
                {detail ? <span className="block text-[12px] text-[var(--rs-muted)] truncate">{detail}</span> : null}
                <span className="block mt-0.5 text-[11px] text-[var(--rs-muted)]">
                  {formatDateTime(notification.createdAt, lang)}
                </span>
              </span>
              {unread ? (
                <span className="w-2 h-2 rounded-full bg-[var(--rs-primary)] shrink-0" aria-label={t.notifications.unread} />
              ) : null}
            </span>
          );

          return (
            <li key={notification.id}>
              {notification.href ? (
                <Link href={notification.href} className="block hover:bg-[var(--rs-primary-soft)]">
                  {content}
                </Link>
              ) : (
                content
              )}
            </li>
          );
        })}
      </ul>

      {hasUnread && !demo ? (
        <form action={markAllNotificationsRead} className="mt-4">
          <SubmitButton variant="secondary">{t.notifications.markAllRead}</SubmitButton>
        </form>
      ) : null}
    </>
  );
}
