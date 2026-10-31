import type { FiliereSlug } from '../filieres/registry';

export type CityId = 'moscow' | 'spb' | 'kazan' | 'tula' | 'yelets' | 'lipetsk' | 'voronezh' | 'orel';
export type HousingType = 'dorm' | 'shared';

/* Coûts mensuels indicatifs (€) et facteur appliqué aux frais de scolarité de base.
   Source unique partagée avec BudgetSimulator (simulateur affiché sur l'accueil,
   limité aux trois grandes villes) et avec les pages /villes (les villes de
   région utilisent des fourchettes prudentes, nettement moins chères). */
export const CITY_COSTS: Record<CityId, { dorm: number; shared: number; living: number; tuitionFactor: number }> = {
  moscow: { dorm: 90, shared: 280, living: 260, tuitionFactor: 1.15 },
  spb: { dorm: 70, shared: 220, living: 220, tuitionFactor: 1.05 },
  kazan: { dorm: 45, shared: 150, living: 160, tuitionFactor: 0.9 },
  tula: { dorm: 40, shared: 130, living: 160, tuitionFactor: 0.85 },
  yelets: { dorm: 30, shared: 100, living: 140, tuitionFactor: 0.75 },
  lipetsk: { dorm: 35, shared: 110, living: 150, tuitionFactor: 0.8 },
  voronezh: { dorm: 40, shared: 130, living: 160, tuitionFactor: 0.85 },
  orel: { dorm: 30, shared: 100, living: 140, tuitionFactor: 0.75 },
};

/* Frais de scolarité de base, par filière.
   Nommés plutôt qu'indexés : une position ne dit pas de quelle filière il
   s'agit, et l'ajout d'une carte suffisait à décaler silencieusement tous les
   tarifs affichés. Pharmacie et Médecine dentaire partagent le même montant,
   les deux spécialités russes étant facturées au même niveau. */
export const PROGRAM_BASE_TUITION: Record<FiliereSlug, number> = {
  'medecine-generale': 3500,
  'ingenierie-tech': 2800,
  pharmacie: 3200,
  'medecine-dentaire': 3200,
  'economie-business': 2200,
};
export const INSURANCE_YEARLY = 180;

export function yearlyBudget(slug: FiliereSlug, cityId: CityId, housing: HousingType) {
  const city = CITY_COSTS[cityId];
  const tuition = PROGRAM_BASE_TUITION[slug] * city.tuitionFactor;
  const housingYear = (housing === 'dorm' ? city.dorm : city.shared) * 12;
  const livingYear = city.living * 12;
  return {
    tuition,
    housingYear,
    livingYear,
    insurance: INSURANCE_YEARLY,
    total: tuition + housingYear + livingYear + INSURANCE_YEARLY,
  };
}
