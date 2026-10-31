'use client';

import { useActionState } from 'react';
import { startConversation, type ActionState } from '../../actions/app';
import type { AppDictionary } from '../../i18n';
import SubmitButton from '../SubmitButton';

const INITIAL: ActionState = {};

export interface ConversationTarget {
  id: string;
  label: string;
}

/**
 * Ouverture d'une conversation. L'étudiant n'a qu'un dossier — le champ est
 * alors masqué ; le consultant choisit le dossier concerné.
 */
export default function NewConversationForm({
  dossiers,
  allowUniversity = false,
  t,
  disabled = false,
}: {
  dossiers: ConversationTarget[];
  /** Réservé à l'administration : elle seule s'adresse aux universités. */
  allowUniversity?: boolean;
  t: AppDictionary;
  disabled?: boolean;
}) {
  const [state, formAction] = useActionState(startConversation, INITIAL);

  return (
    <form action={formAction} className="space-y-3.5">
      {dossiers.length === 1 ? (
        <input type="hidden" name="dossierId" value={dossiers[0].id} />
      ) : (
        <div>
          <label className="rs-label" htmlFor="dossierId">{t.admin.student}</label>
          <select id="dossierId" name="dossierId" required className="rs-input">
            {dossiers.map((dossier) => (
              <option key={dossier.id} value={dossier.id}>{dossier.label}</option>
            ))}
          </select>
        </div>
      )}

      {allowUniversity ? (
        <div>
          <label className="rs-label" htmlFor="topic">{t.messages.recipient}</label>
          <select id="topic" name="topic" className="rs-input">
            <option value="consultant">{t.messages.tabs.consultant}</option>
            <option value="university">{t.messages.tabs.university}</option>
          </select>
        </div>
      ) : (
        <input type="hidden" name="topic" value="consultant" />
      )}

      <div>
        <label className="rs-label" htmlFor="title">{t.messages.subject}</label>
        <input id="title" name="title" className="rs-input" maxLength={120} />
      </div>

      <div>
        <label className="rs-label" htmlFor="body">{t.messages.firstMessage}</label>
        <textarea id="body" name="body" required rows={5} className="rs-input" placeholder={t.messages.placeholder} />
      </div>

      {state.error ? (
        <p role="alert" className="text-[13px] text-[var(--rs-danger)] bg-[var(--rs-danger-soft)] rounded-xl px-3 py-2">
          {t.common.error}
        </p>
      ) : null}

      <SubmitButton disabled={disabled}>{t.messages.startConversation}</SubmitButton>
    </form>
  );
}
