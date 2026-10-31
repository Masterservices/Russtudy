import type { AppLang } from '../i18n';
import type { MessageItem } from '../types';
import { formatDateTime } from '../utils/format';

/** Fil de discussion : messages reçus à gauche, messages émis à droite. */
export default function MessageThread({ messages, lang, emptyLabel }: { messages: MessageItem[]; lang: AppLang; emptyLabel: string }) {
  if (messages.length === 0) {
    return <p className="py-10 text-center text-[13px] text-[var(--rs-muted)]">{emptyLabel}</p>;
  }

  return (
    <ol className="space-y-2.5">
      {messages.map((message) => (
        <li key={message.id} className={`flex ${message.own ? 'justify-end' : 'justify-start'}`}>
          <div
            className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 ${
              message.own
                ? 'bg-[var(--rs-primary)] text-white rounded-ee-md'
                : 'bg-[var(--rs-card)] border border-[var(--rs-line)] rounded-es-md'
            }`}
          >
            {!message.own ? (
              <p className="text-[11px] font-semibold text-[var(--rs-primary)]">{message.senderName}</p>
            ) : null}
            <p className="text-[14px] leading-snug whitespace-pre-line">{message.body}</p>
            <p className={`mt-1 text-[10px] ${message.own ? 'text-white/70' : 'text-[var(--rs-muted)]'}`}>
              {formatDateTime(message.createdAt, lang)}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
