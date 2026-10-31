'use client';

import { useActionState } from 'react';
import { createDossier, type AdminActionState } from '../../actions/admin';
import type { AppDictionary } from '../../i18n';
import type { PersonRef, UniversityItem } from '../../types';
import SubmitButton from '../SubmitButton';

const INITIAL: AdminActionState = {};

/** Ouverture d'un dossier : étudiant obligatoire, le reste complétable ensuite. */
export default function DossierForm({
  students,
  consultants,
  universities,
  t,
  disabled = false,
}: {
  students: PersonRef[];
  consultants: PersonRef[];
  universities: UniversityItem[];
  t: AppDictionary;
  disabled?: boolean;
}) {
  const [state, formAction] = useActionState(createDossier, INITIAL);

  if (students.length === 0) {
    return (
      <p className="rs-card-flat px-4 py-8 text-center text-[13px] text-[var(--rs-muted)]">
        {t.admin.noStudentAvailable}
      </p>
    );
  }

  return (
    <form action={formAction} className="space-y-3.5">
      <div>
        <label className="rs-label" htmlFor="studentId">{t.admin.student}</label>
        <select id="studentId" name="studentId" required className="rs-input">
          {students.map((student) => (
            <option key={student.id} value={student.id}>
              {student.fullName || student.email} — {student.email}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="rs-label" htmlFor="consultantId">{t.student.consultant}</label>
        <select id="consultantId" name="consultantId" className="rs-input">
          <option value="">{t.admin.choose}</option>
          {consultants.map((consultant) => (
            <option key={consultant.id} value={consultant.id}>
              {consultant.fullName || consultant.email}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="rs-label" htmlFor="universityId">{t.student.university}</label>
        <select id="universityId" name="universityId" className="rs-input">
          <option value="">{t.admin.choose}</option>
          {universities.map((university) => (
            <option key={university.id} value={university.id}>
              {university.name} — {university.city}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="rs-label" htmlFor="program">{t.student.program}</label>
        <input id="program" name="program" className="rs-input" placeholder="Master en Informatique" />
      </div>

      <div>
        <label className="rs-label" htmlFor="level">{t.admin.level}</label>
        <input id="level" name="level" className="rs-input" placeholder="Master" />
      </div>

      <div>
        <label className="rs-label" htmlFor="startDate">{t.student.startDate}</label>
        <input id="startDate" name="startDate" type="date" className="rs-input" />
      </div>

      {state.error ? (
        <p role="alert" className="text-[13px] text-[var(--rs-danger)] bg-[var(--rs-danger-soft)] rounded-xl px-3 py-2">
          {t.common.error}
        </p>
      ) : null}

      <SubmitButton disabled={disabled}>{t.admin.createDossier}</SubmitButton>
    </form>
  );
}
