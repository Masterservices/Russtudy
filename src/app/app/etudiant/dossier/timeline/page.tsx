import type { Metadata } from 'next';
import { requireRole } from '../../../../../features/app/data/session';
import { getStudentDossier, getTimeline } from '../../../../../features/app/data/queries';
import { getAppI18n } from '../../../../../features/app/i18n/server';
import { requestStep } from '../../../../../features/app/actions/app';
import { AppHeader } from '../../../../../features/app/ui/AppShell';
import StepGestureButton from '../../../../../features/app/ui/StepGestureButton';
import Timeline from '../../../../../features/app/ui/Timeline';
import { EmptyState } from '../../../../../features/app/ui/primitives';

export const metadata: Metadata = { title: 'Timeline' };

/** Écran 6 — Timeline du dossier. */
export default async function StudentTimelinePage() {
  const { user, demo } = await requireRole(['student']);
  const { lang, t } = await getAppI18n(user.lang);

  const dossier = await getStudentDossier(user.id, demo);
  const steps = await getTimeline(dossier?.id ?? null, demo);

  return (
    <>
      <AppHeader title={t.nav.timeline} subtitle={dossier?.reference} backHref="/app/etudiant/dossier" />

      <main className="rs-main">
        {steps.length === 0 ? (
          <EmptyState title={t.common.empty} />
        ) : (
          <Timeline
            steps={steps}
            lang={lang}
            upcomingLabel={t.status.upcoming}
            currentLabel={t.status.current}
            t={t}
            // L'étudiant ne se prononce que sur l'étape en cours : annoncer
            // une étape qui n'a pas commencé n'aurait aucun sens.
            renderAction={(step) =>
              !demo && step.status === 'current' && step.validation === 'idle' ? (
                <StepGestureButton action={requestStep} stepId={step.id} label={t.validation.request} tone="primary" />
              ) : null
            }
          />
        )}
      </main>
    </>
  );
}
