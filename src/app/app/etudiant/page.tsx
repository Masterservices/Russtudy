import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Bell, CalendarClock, CheckCircle2, ChevronRight, FileWarning, GraduationCap, Languages } from 'lucide-react';
import { requireRole } from '../../../features/app/data/session';
import { getDocuments, getNotifications, getQuote, getStudentDossier, getTimeline } from '../../../features/app/data/queries';
import { resolveNextAction } from '../../../features/app/data/nextAction';
import { getAppI18n } from '../../../features/app/i18n/server';
import { interpolate } from '../../../features/app/i18n';
import { AppHeader } from '../../../features/app/ui/AppShell';
import NotificationBell from '../../../features/app/ui/NotificationBell';
import { Card, EmptyState, ProgressBar, SectionTitle, StatusPill } from '../../../features/app/ui/primitives';
import { dossierBadge } from '../../../features/app/ui/status';
import { EL } from '../../../features/app/elearning/labels';
import { daysUntil } from '../../../features/app/utils/format';

export const metadata: Metadata = { title: 'Accueil' };

/** Écran 4 — Accueil étudiant. */
export default async function StudentHomePage() {
  const { user, demo } = await requireRole(['student']);
  const { t, lang } = await getAppI18n(user.lang);

  const dossier = await getStudentDossier(user.id, demo);
  const [steps, documents, notifications, quote] = await Promise.all([
    getTimeline(dossier?.id ?? null, demo),
    getDocuments(dossier?.id ?? null, demo),
    getNotifications(user.id, demo),
    getQuote(dossier?.id ?? null, demo),
  ]);

  const nextStep = steps.find((s) => s.status === 'current') ?? steps.find((s) => s.status === 'upcoming');
  const missing = documents.filter((d) => d.status === 'missing' || d.status === 'rejected').length;
  const unread = notifications.filter((n) => !n.readAt).length;
  const firstName = user.fullName.split(' ')[0] || user.fullName;
  const nextAction = resolveNextAction({ steps, documents, quote, t });

  return (
    <>
      <AppHeader
        title={`${t.student.greeting} ${firstName} 👋`}
        subtitle={t.student.subtitle}
        action={<NotificationBell href="/app/etudiant/notifications" count={unread} label={t.notifications.title} />}
      />

      <main className="rs-main">
        {!dossier ? (
          <EmptyState title={t.student.noDossier} hint={t.student.noDossierHint} />
        ) : (
          <>
            <section className="rs-card rs-gradient p-5 border-transparent">
              <p className="text-[12px] font-medium text-white/80">{t.student.progressTitle}</p>
              <p className="mt-1 text-[38px] font-bold leading-none">{dossier.progress}%</p>
              <div className="mt-3.5">
                <ProgressBar value={dossier.progress} />
              </div>
            </section>

            {/* Ce que l'étudiant doit faire maintenant, avant tout le reste :
                une action réelle, ou l'aveu qu'il n'y en a pas. */}
            <SectionTitle>{t.nextAction.title}</SectionTitle>
            <Card>
              <div className="flex items-start gap-3">
                <span
                  className={`grid place-items-center w-10 h-10 rounded-xl shrink-0 ${
                    nextAction.tone === 'action'
                      ? 'bg-[var(--rs-warning-soft)] text-[var(--rs-warning)]'
                      : 'bg-[var(--rs-success-soft)] text-[var(--rs-success)]'
                  }`}
                  aria-hidden="true"
                >
                  {nextAction.tone === 'action' ? <FileWarning size={19} /> : <CheckCircle2 size={19} />}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-[15px] font-semibold leading-tight">{nextAction.title}</p>
                  <p className="mt-1 text-[13px] text-[var(--rs-muted)]">{nextAction.detail}</p>
                </div>
              </div>

              <Link
                href={nextAction.href}
                className={`rs-btn mt-3.5 ${nextAction.tone === 'action' ? 'rs-btn-primary' : 'rs-btn-secondary'}`}
              >
                {nextAction.cta}
                <ArrowRight size={17} className="rtl:rotate-180" aria-hidden="true" />
              </Link>
            </Card>

            {/* En l'absence d'action, le bloc ci-dessus annonce déjà l'étape
                en cours : inutile de la répéter. */}
            {nextStep && nextAction.tone === 'action' ? (
              <Link href="/app/etudiant/dossier/timeline" className="mt-3 block">
                <Card className="flex items-center gap-3">
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-[var(--rs-primary-soft)] text-[var(--rs-primary)] shrink-0" aria-hidden="true">
                    <CalendarClock size={19} />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-[12px] text-[var(--rs-muted)]">{t.student.nextStep}</span>
                    <span className="block text-[15px] font-semibold truncate">
                      {(t.steps as Record<string, string>)[nextStep.key] ?? nextStep.label}
                    </span>
                    {dossier.startDate ? (
                      <span className="block text-[12px] text-[var(--rs-muted)]">
                        {interpolate(t.student.inDays, { n: daysUntil(dossier.startDate) })}
                      </span>
                    ) : null}
                  </span>
                  <ChevronRight size={16} className="text-[var(--rs-muted)] rtl:rotate-180" aria-hidden="true" />
                </Card>
              </Link>
            ) : null}

            <div className="mt-3 grid grid-cols-2 gap-3">
              <Link href="/app/etudiant/notifications">
                <Card className="h-full">
                  <Bell size={17} className="text-[var(--rs-primary)]" aria-hidden="true" />
                  <p className="mt-2 text-[24px] font-bold leading-none">{unread}</p>
                  <p className="mt-1 text-[12px] text-[var(--rs-muted)]">{t.student.notificationsCount}</p>
                </Card>
              </Link>
              <Link href="/app/etudiant/documents?filtre=requis">
                <Card className="h-full">
                  <FileWarning size={17} className="text-[var(--rs-danger)]" aria-hidden="true" />
                  <p className="mt-2 text-[24px] font-bold leading-none">{missing}</p>
                  <p className="mt-1 text-[12px] text-[var(--rs-muted)]">
                    {missing > 1 ? t.student.missingDocsPlural : t.student.missingDocs}
                  </p>
                </Card>
              </Link>
            </div>

            {dossier.university ? (
              <Link href="/app/etudiant/dossier" className="mt-3 block">
                <Card className="flex items-center gap-3">
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-[var(--rs-primary-soft)] text-[var(--rs-primary)] shrink-0" aria-hidden="true">
                    <GraduationCap size={19} />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-[14px] font-semibold truncate">{dossier.university.name}</span>
                    <span className="block text-[12px] text-[var(--rs-muted)] truncate">{dossier.program ?? dossier.university.city}</span>
                  </span>
                  <StatusPill {...dossierBadge(dossier.status, t)} />
                </Card>
              </Link>
            ) : null}
          </>
        )}

        {/* Hors du test sur le dossier : apprendre la langue ne suppose
            pas d'avoir un dossier d'inscription ouvert. */}
        <Link href="/elearning" className="mt-3 block">
          <Card className="flex items-center gap-3">
            <span
              className="grid place-items-center w-10 h-10 rounded-xl bg-[var(--rs-primary-soft)] text-[var(--rs-primary)] shrink-0"
              aria-hidden="true"
            >
              <Languages size={19} />
            </span>
            <span className="flex-1 min-w-0">
              <span className="block text-[14px] font-semibold truncate">{EL[lang].title}</span>
              <span className="block text-[12px] text-[var(--rs-muted)] truncate">{EL[lang].subtitle}</span>
            </span>
            <ChevronRight size={18} className="text-[var(--rs-muted)] shrink-0" aria-hidden="true" />
          </Card>
        </Link>
      </main>
    </>
  );
}
