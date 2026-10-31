import type { Metadata } from 'next';
import { requireRole } from '../../../../features/app/data/session';
import { AppHeader } from '../../../../features/app/ui/AppShell';
import { Card, SectionTitle } from '../../../../features/app/ui/primitives';
import AccessManager from '../../../../features/app/ui/elearning/AccessManager';
import { listAdminCourses, listEnrollments } from '../../../../features/app/elearning/admin';

export const metadata: Metadata = { title: 'Accès aux cours' };

/** Ouverture et révocation manuelles des accès aux parcours payants. */
export default async function AccesCoursPage() {
  const { demo } = await requireRole(['admin']);

  const [courses, enrollments] = demo
    ? [[], []]
    : await Promise.all([listAdminCourses(), listEnrollments()]);

  return (
    <>
      <AppHeader
        title="Accès aux cours"
        subtitle="Ouvrir ou révoquer l’accès d’un étudiant à un parcours payant."
        backHref="/app/admin"
      />

      {demo ? (
        <Card>
          <p className="text-[0.9rem] leading-[1.6] opacity-75">
            Base non connectée : la gestion des accès est désactivée en mode démonstration. Les
            parcours et les inscriptions s’afficheront ici une fois Supabase branché.
          </p>
        </Card>
      ) : (
        <Card>
          <SectionTitle>Ouvrir un accès</SectionTitle>
          <p className="text-[0.84rem] leading-[1.6] opacity-70 mb-4">
            L’étudiant doit avoir créé son compte avant : l’accès se rattache à une adresse e-mail
            déjà enregistrée. Les leçons d’essai restent ouvertes à tous, sans inscription.
          </p>
          <AccessManager courses={courses} enrollments={enrollments} />
        </Card>
      )}
    </>
  );
}
