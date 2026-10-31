import type { Lang } from '../../i18n';
import { requireRole } from '../../features/app/data/session';
import { getAppI18n } from '../../features/app/i18n/server';
import { listMyBookings, listOpenSlots } from '../../features/app/elearning/tutoring';
import { EL } from '../../features/app/elearning/labels';
import TutoringBoard from '../../features/app/ui/elearning/TutoringBoard';
import { buildBreadcrumb } from '../../seo/breadcrumb';
import ElearningShell from './ElearningShell';
import { ELEARNING_LABEL, accessRequestHref } from './labels';

const VISIO_LABEL: Record<Lang, string> = {
  fr: 'Visio',
  en: 'Video',
  ar: 'فيديو',
  ru: 'Видео',
};

/**
 * Réservation d'un créneau et bulle vidéo avec le professeur.
 *
 * Seule page de l'espace e-learning à exiger un compte : elle engage un
 * professeur sur un horaire, ce qu'un visiteur anonyme ne peut pas
 * faire. `requireRole` renvoie vers la connexion le cas échéant.
 */
export default async function VisioPage() {
  const { user, demo } = await requireRole(['student', 'consultant', 'admin']);
  const { lang } = await getAppI18n(user.lang);
  const L = EL[lang];

  const [slots, bookings] = demo ? [[], []] : await Promise.all([listOpenSlots(), listMyBookings()]);

  const breadcrumb = buildBreadcrumb('/elearning/visio', lang, {
    elearning: ELEARNING_LABEL[lang],
    visio: VISIO_LABEL[lang],
  });

  return (
    <ElearningShell
      lang={lang}
      breadcrumb={breadcrumb}
      accessHref={accessRequestHref(lang)}
      accessLabel={L.signupCta}
    >
      <h1 className="t-display font-bold text-[clamp(1.6rem,5vw,2.6rem)] tracking-[-0.04em] leading-[1.12] mb-3">
        {L.visioTitle}
      </h1>
      <p className="text-[1rem] leading-[1.7] max-w-2xl opacity-85 mb-8">{L.visioSubtitle}</p>

      {demo ? (
        <p className="t-card rounded-[20px] p-6 text-[0.95rem] leading-[1.65] opacity-80 max-w-2xl">
          {L.visioDemo}
        </p>
      ) : slots.length === 0 && bookings.length === 0 ? (
        <div className="t-card rounded-[20px] p-6 max-w-2xl">
          <h2 className="t-display font-bold text-lg tracking-[-0.02em] mb-2">{L.visioEmptyTitle}</h2>
          <p className="text-[0.95rem] leading-[1.65] opacity-80">{L.visioEmptyHint}</p>
        </div>
      ) : (
        <div className="t-card rounded-[22px] p-6 max-w-3xl">
          <h2 className="t-display font-bold text-lg tracking-[-0.02em] mb-4">{L.visioSlots}</h2>
          <TutoringBoard
            slots={slots}
            bookings={bookings}
            displayName={user.fullName}
            labels={L}
            locale={lang}
          />
        </div>
      )}
    </ElearningShell>
  );
}
