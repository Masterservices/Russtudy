import Link from 'next/link';
import type { AppDictionary, AppLang } from '../i18n';
import type { ConversationThread } from '../types';
import { formatDateTime } from '../utils/format';
import { Avatar, EmptyState } from './primitives';

/** Liste de conversations, partagée par l'espace étudiant et l'espace consultant. */
export default function ConversationList({
  threads,
  basePath,
  t,
  lang,
}: {
  threads: ConversationThread[];
  basePath: string;
  t: AppDictionary;
  lang: AppLang;
}) {
  if (threads.length === 0) return <EmptyState title={t.messages.empty} />;

  return (
    <div className="rs-card overflow-hidden divide-y divide-[var(--rs-line)]">
      {threads.map((thread) => (
        <Link key={thread.id} href={`${basePath}/${thread.id}`} className="rs-row hover:bg-[var(--rs-primary-soft)] transition-colors">
          <Avatar name={thread.title} url={thread.counterpart?.avatarUrl} />
          <span className="flex-1 min-w-0">
            <span className="flex items-baseline gap-2">
              <span className="flex-1 text-[14px] font-semibold truncate">{thread.title}</span>
              <span className="text-[11px] text-[var(--rs-muted)] shrink-0">
                {thread.lastMessageAt ? formatDateTime(thread.lastMessageAt, lang) : ''}
              </span>
            </span>
            <span className="mt-0.5 flex items-center gap-2">
              <span className={`flex-1 text-[12px] truncate ${thread.unreadCount > 0 ? 'font-medium text-[var(--rs-ink)]' : 'text-[var(--rs-muted)]'}`}>
                {thread.lastMessage ?? '—'}
              </span>
              {thread.unreadCount > 0 ? (
                <span className="shrink-0 min-w-[18px] h-[18px] px-1 rounded-full bg-[var(--rs-primary)] text-white text-[10px] font-bold grid place-items-center">
                  {thread.unreadCount}
                </span>
              ) : null}
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}
