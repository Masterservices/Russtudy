import { SITE } from '../../config/site';
import type { Program } from '../../types/content';

export function buildCourseSchema(program: Program) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: program.name,
    description: program.description,
    provider: { '@type': 'EducationalOrganization', name: SITE.name, sameAs: `${SITE.domain}/` },
  };
}
