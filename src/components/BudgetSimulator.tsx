import React, { useMemo, useState } from 'react';
import { Translation } from '../i18n';
import { CityId, HousingType, yearlyBudget } from '../content/budget/data';

interface BudgetSimulatorProps {
  t: Translation;
}

const fmt = (n: number) => `${Math.round(n).toLocaleString('fr-FR')} €`;

export default function BudgetSimulator({ t }: BudgetSimulatorProps) {
  const [programIdx, setProgramIdx] = useState(0);
  const [cityId, setCityId] = useState<CityId>('moscow');
  const [housing, setHousing] = useState<HousingType>('dorm');

  const budget = useMemo(() => yearlyBudget(programIdx, cityId, housing), [programIdx, cityId, housing]);

  const cityName = (id: CityId) => t.simulator.cities.find((c) => c.id === id)?.name ?? id;

  const whatsappUrl = useMemo(() => {
    const msg = [
      t.simulator.whatsappIntro,
      `• ${t.simulator.fieldLabel}: ${t.programs.items[programIdx].name}`,
      `• ${t.simulator.cityLabel}: ${cityName(cityId)}`,
      `• ${t.simulator.housingLabel}: ${housing === 'dorm' ? t.simulator.housingDorm : t.simulator.housingShared}`,
      `• ${t.simulator.totalYear}: ${fmt(budget.total)}`,
    ].join('\n');
    return `https://wa.me/79964334489?text=${encodeURIComponent(msg)}`;
  }, [t, programIdx, cityId, housing, budget.total]);

  const rows = [
    { label: t.simulator.tuition, value: budget.tuition },
    { label: t.simulator.housing, value: budget.housingYear },
    { label: t.simulator.living, value: budget.livingYear },
    { label: t.simulator.insurance, value: budget.insurance },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Panneau de saisie */}
      <div className="t-card t-card-shadow p-6 md:p-8 space-y-6 lg:self-start lg:sticky lg:top-36">
        <div>
          <span className="block text-[11px] font-bold uppercase tracking-wider mb-2">{t.simulator.fieldLabel}</span>
          <div className="flex flex-wrap gap-2">
            {t.programs.items.map((prog, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setProgramIdx(idx)}
                className={`px-3 py-2 text-xs font-bold cursor-pointer ${programIdx === idx ? 't-chip-active' : 't-chip'}`}
              >
                {prog.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="block text-[11px] font-bold uppercase tracking-wider mb-2">{t.simulator.cityLabel}</span>
          <div className="flex flex-wrap gap-2">
            {t.simulator.cities.map((city) => (
              <button
                key={city.id}
                type="button"
                onClick={() => setCityId(city.id as CityId)}
                className={`px-3 py-2 text-xs font-bold cursor-pointer ${cityId === city.id ? 't-chip-active' : 't-chip'}`}
              >
                {city.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="block text-[11px] font-bold uppercase tracking-wider mb-2">{t.simulator.housingLabel}</span>
          <div className="flex flex-wrap gap-2">
            {([
              { id: 'dorm', label: t.simulator.housingDorm },
              { id: 'shared', label: t.simulator.housingShared },
            ] as { id: HousingType; label: string }[]).map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setHousing(opt.id)}
                className={`px-3 py-2 text-xs font-bold cursor-pointer ${housing === opt.id ? 't-chip-active' : 't-chip'}`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <p className="text-[10px] t-muted leading-relaxed">{t.simulator.disclaimer}</p>
      </div>

      {/* Panneau de résultat */}
      <div className="t-card-dark t-card-shadow p-6 md:p-8 flex flex-col justify-between gap-6">
        <div className="space-y-3">
          {rows.map((row, idx) => (
            <div key={idx} className="flex justify-between items-baseline gap-4 border-b t-dark-line pb-2 text-sm">
              <span className="t-dark-muted">{row.label}</span>
              <span className="font-bold whitespace-nowrap">{fmt(row.value)}</span>
            </div>
          ))}

          <div className="flex justify-between items-baseline gap-4 pt-2">
            <span className="font-bold text-sm uppercase tracking-wider">{t.simulator.totalYear}</span>
            <span className="t-display font-black text-3xl md:text-4xl t-gold-text whitespace-nowrap">{fmt(budget.total)}</span>
          </div>
          <p className="text-[10px] t-dark-muted">{t.simulator.oneTime}</p>
        </div>

        {/* Comparateur de villes */}
        <div>
          <span className="block text-[10px] font-bold uppercase tracking-widest t-dark-muted mb-2">{t.simulator.compareTitle}</span>
          <div className="grid grid-cols-3 gap-2">
            {t.simulator.cities.map((city) => {
              const cityTotal = yearlyBudget(programIdx, city.id as CityId, housing).total;
              const active = city.id === cityId;
              return (
                <button
                  key={city.id}
                  type="button"
                  onClick={() => setCityId(city.id as CityId)}
                  className={`rounded-xl p-3 text-center border transition-all cursor-pointer ${active ? 'border-current' : 't-dark-line opacity-70 hover:opacity-100'}`}
                >
                  <span className="block text-[10px] font-bold uppercase tracking-wider t-dark-muted">{city.name}</span>
                  <span className="block font-bold text-sm mt-1 whitespace-nowrap">
                    {fmt(cityTotal)} <span className="text-[9px] t-dark-muted">{t.simulator.perYear}</span>
                  </span>
                </button>
              );
            })}
          </div>
          <p className="text-[10px] t-dark-muted mt-3 leading-relaxed">{t.simulator.benchmark}</p>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="t-btn-primary text-center font-black uppercase text-xs py-4 px-6 cursor-pointer"
        >
          {t.simulator.cta}
        </a>
      </div>
    </div>
  );
}
