import type { Lang } from '../../../i18n';
import type { UniversitySlug } from '../registry';
import type { DeepUniversityByLang, DeepUniversityContent } from './types';
import { MGU_DEEP, SPBPU_DEEP, PIROGOV_DEEP } from './moscou';
import { RUDN_DEEP, BAUMAN_DEEP, KAZAN_UNIV_DEEP, STROGANOV_DEEP } from './moscou-kazan';
import {
  TOULA_UNIV_DEEP,
  ELETS_UNIV_DEEP,
  LIPETSK_UNIV_DEEP,
  VORONEJ_UNIV_DEEP,
  OREL_UNIV_DEEP,
} from './regions';

export type { DeepUniversityContent, DeepUniversitySection, UniversityIdentity } from './types';

/**
 * Contenu profond des fiches universités. Les pages ne portaient qu'un chapô
 * générique et deux questions de FAQ : 260 mots de médiane, trop peu pour un
 * cluster qui porte l'intention commerciale du site.
 *
 * Chaque fiche publie uniquement ce qui est confirmé par une source
 * institutionnelle, et nomme explicitement ce qui ne l'est pas dans sa
 * section de vérification — laquelle diffère d'un établissement à l'autre.
 */
const DEEP_CONTENT: Record<UniversitySlug, DeepUniversityByLang> = {
  'universite-detat-de-moscou': MGU_DEEP,
  'polytechnique-de-saint-petersbourg': SPBPU_DEEP,
  'universite-de-medecine-pirogov': PIROGOV_DEEP,
  'universite-rudn': RUDN_DEEP,
  'universite-technique-bauman': BAUMAN_DEEP,
  'universite-de-kazan': KAZAN_UNIV_DEEP,
  'institut-stroganov-dart': STROGANOV_DEEP,
  'universite-detat-de-toula': TOULA_UNIV_DEEP,
  'universite-detat-elets-bounine': ELETS_UNIV_DEEP,
  'universite-technique-detat-de-lipetsk': LIPETSK_UNIV_DEEP,
  'universite-detat-de-voronej': VORONEJ_UNIV_DEEP,
  'universite-detat-tourgueniev-dorel': OREL_UNIV_DEEP,
};

export function getDeepUniversityContent(slug: UniversitySlug, lang: Lang): DeepUniversityContent | null {
  return DEEP_CONTENT[slug]?.[lang] ?? null;
}
