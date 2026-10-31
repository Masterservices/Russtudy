import type { Metadata } from 'next';
import { requireRole } from '../../../../../../features/app/data/session';
import { getTimeline } from '../../../../../../features/app/data/queries';
import { confirmStep } from '../../../../../../features/app/actions/app';
import { getAppI18n } from '../../../../../../features/app/i18n/server';
import StepGestureButton from '../../../../../../features/app/ui/StepGestureButton';
import Timeline from '../../../../../../features/app/ui/Timeline';
import { EmptyState } from '../../../../../../features/app/ui/primitives';

export const metadata: Metadata = { title: 'Timeline du dossier' };

/** Écran 17 — Timeline du dossier côté consultant. */
export default async function ConsultantStudentTimelinePage({ params }: { params: Promise<{ id: string }> }) {
  const { user, demo } = await requireRole(['consultant']);
  const { lang, t } = await getAppI18n(user.lang);
  const { id } = await params;

  const steps = await getTimeline(id, demo);

  return (
    <main className="rs-main pt-4">
      {steps.length === 0 ? (
        <EmptyState title={t.common.empty} />
      ) : (
        <Timeline
          steps={steps}
          lang={lang}
          upcomingLabel={t.status.upcoming}
          currentLabel={t.status.current}
          t={t}
          renderAction={(step) =>
            !demo && step.validation === 'requested' ? (
              <StepGestureButton action={confirmStep} stepId={step.id} label={t.validation.confirm} tone="primary" />
            ) : null
          }
        />
      )}
    </main>
  );
}
