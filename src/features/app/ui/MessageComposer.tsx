'use client';

import { useActionState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import { sendMessage, type ActionState } from '../actions/app';

const INITIAL: ActionState = {};

/** Zone de saisie d'un message, vidée après un envoi réussi. */
export default function MessageComposer({
  conversationId,
  placeholder,
  sendLabel,
  disabled = false,
}: {
  conversationId: string;
  placeholder: string;
  sendLabel: string;
  disabled?: boolean;
}) {
  const [state, formAction, pending] = useActionState(sendMessage, INITIAL);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok) formRef.current?.reset();
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="sticky bottom-[76px] mt-4 flex items-end gap-2">
      <input type="hidden" name="conversationId" value={conversationId} />
      <label className="sr-only" htmlFor="message-body">{placeholder}</label>
      <textarea
        id="message-body"
        name="body"
        rows={1}
        required
        disabled={disabled || pending}
        placeholder={placeholder}
        className="rs-input flex-1 resize-none py-3"
      />
      <button
        type="submit"
        disabled={disabled || pending}
        aria-label={sendLabel}
        className="shrink-0 w-12 h-12 rounded-2xl grid place-items-center bg-[var(--rs-primary)] text-white disabled:opacity-50"
      >
        <Send size={18} aria-hidden="true" />
      </button>
    </form>
  );
}
