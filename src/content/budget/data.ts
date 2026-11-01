export type CityId = 'moscow' | 'spb' | 'kazan';
export type HousingType = 'dorm' | 'shared';

/* Coûts mensuels indicatifs (€) et facteur appliqué aux frais de scolarité de base.
   Source unique partagée avec BudgetSimulator (simulateur affiché sur l'accueil). */
export const CITY_COSTS: Record<CityId, { dorm: number; shared: number; living: number; tuitionFactor: number }> = {
  moscow: { dorm: 90, shared: 280, living: 260, tuitionFactor: 1.15 },
  spb: { dorm: 70, shared: 220, living: 220, tuitionFactor: 1.05 },
  kazan: { dorm: 45, shared: 150, living: 160, tuitionFactor: 0.9 },
};

/* Ordre identique à translations[lang].programs.items dans src/i18n.ts */
export const PROGRAM_BASE_TUITION = [3500, 2800, 3200, 2200];
export const INSURANCE_YEARLY = 180;

export function yearlyBudget(programIdx: number, cityId: CityId, housing: HousingType) {
  const city = CITY_COSTS[cityId];
  const tuition = PROGRAM_BASE_TUITION[programIdx] * city.tuitionFactor;
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
