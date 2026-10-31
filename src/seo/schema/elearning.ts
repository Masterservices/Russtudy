import { SITE } from '../../config/site';

/** Fournisseur commun : la même entité que le reste du site. */
const PROVIDER = {
  '@type': 'EducationalOrganization',
  name: SITE.name,
  sameAs: `${SITE.domain}/`,
};

export interface ElearningCourseFacts {
  slug: string;
  name: string;
  description: string;
  /** Niveau affiché sur la page (A1, A2…). */
  level: string;
  /** Langue de l'interface du parcours, affichée telle quelle. */
  inLanguage: string;
  /** Durée totale annoncée sur la page, en minutes. */
  totalMinutes: number;
  /** Titres des modules, tels qu'ils apparaissent dans le programme. */
  modules: string[];
  /** Vrai si au moins une leçon est ouverte à tous. */
  hasFreeLesson: boolean;
}

/**
 * Parcours e-learning en Course schema.org.
 *
 * Tout ce qui est balisé ici est écrit sur la page : le niveau, la
 * durée totale, les modules du programme. Aucune note, aucun avis,
 * aucun prix — rien de tout cela n'est affiché, et baliser ce qu'on
 * ne montre pas est du spam de données structurées.
 */
export function buildElearningCourseSchema(course: ElearningCourseFacts) {
  const url = `${SITE.domain}/elearning/${course.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    url,
    inLanguage: course.inLanguage,
    educationalLevel: course.level,
    provider: PROVIDER,
    ...(course.hasFreeLesson ? { isAccessibleForFree: false } : {}),
    hasCourseInstance: [
      {
        '@type': 'CourseInstance',
        courseMode: 'online',
        ...(course.totalMinutes > 0
          ? { courseWorkload: `PT${course.totalMinutes}M` }
          : {}),
      },
    ],
    ...(course.modules.length
      ? {
          syllabusSections: course.modules.map((name, index) => ({
            '@type': 'Syllabus',
            name,
            position: index + 1,
          })),
        }
      : {}),
  };
}

export interface ElearningLessonFacts {
  courseSlug: string;
  courseName: string;
  lessonSlug: string;
  name: string;
  description: string;
  durationMin: number;
  inLanguage: string;
}

/**
 * Leçon d'essai en LearningResource.
 *
 * Réservé aux leçons réellement ouvertes : une leçon dont le contenu
 * n'est pas servi au visiteur n'a rien à annoncer à un moteur.
 */
export function buildElearningLessonSchema(lesson: ElearningLessonFacts) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: lesson.name,
    description: lesson.description,
    url: `${SITE.domain}/elearning/${lesson.courseSlug}/${lesson.lessonSlug}`,
    learningResourceType: 'Lesson',
    inLanguage: lesson.inLanguage,
    isAccessibleForFree: true,
    ...(lesson.durationMin > 0 ? { timeRequired: `PT${lesson.durationMin}M` } : {}),
    provider: PROVIDER,
    isPartOf: {
      '@type': 'Course',
      name: lesson.courseName,
      url: `${SITE.domain}/elearning/${lesson.courseSlug}`,
      provider: PROVIDER,
    },
  };
}
