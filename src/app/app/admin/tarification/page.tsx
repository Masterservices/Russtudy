import type { Metadata } from 'next';
import { requireRole } from '../../../../features/app/data/session';
import { getAdminOverview, getPricing } from '../../../../features/app/data/queries';
import { updatePricing } from '../../../../features/app/actions/admin';
import { getAppI18n } from '../../../../features/app/i18n/server';
import { AppHeader } from '../../../../features/app/ui/AppShell';
import { BarChart } from '../../../../features/app/ui/charts';
import { Card, EmptyState, SectionTitle } from '../../../../features/app/ui/primitives';
import { formatCompactAmount } from '../../../../features/app/utils/format';

export const metadata: Metadata = { title: 'Tarification' };

/** Écran 27 — Grille tarifaire et chiffre d'affaires. */
export default async function AdminPricingPage() {
  const { user, demo } = await requireRole(['admin']);
  const { lang, t } = await getAppI18n(user.lang);

  const [pricing, overview] = await Promise.all([getPricing(demo), getAdminOverview(demo)]);

  return (
    <>
      <AppHeader title={t.admin.pricingTitle} backHref="/app/admin" />

      <main className="rs-main">
        {pricing.length === 0 ? (
          <EmptyState title={t.common.empty} />
        ) : (
          <form action={updatePricing}>
            <ul className="rs-card px-4 divide-y divide-[var(--rs-line)]">
              {pricing.map((item) => (
                <li key={item.id} className="flex items-center gap-3 py-3">
                  <label htmlFor={`prix-${item.id}`} className="flex-1 text-[14px] text-[var(--rs-ink)]">
                    {item.label}
                  </label>
                  <input
                    id={`prix-${item.id}`}
                    name={`montant:${item.id}`}
                    type="number"
                    min={0}
                    step={1000}
                    defaultValue={item.amount}
                    disabled={demo}
                    className="rs-input w-[130px] text-end min-h-[40px] py-2"
                  />
                  <span className="text-[12px] text-[var(--rs-muted)] w-9 shrink-0">{item.currency}</span>
                </li>
              ))}
            </ul>

            {!demo ? (
              <button type="submit" className="rs-btn rs-btn-primary mt-4">
                {t.admin.editPricing}
              </button>
            ) : null}
          </form>
        )}

        <SectionTitle>{t.admin.revenueChart}</SectionTitle>
        <Card>
          <p className="mb-3 text-[22px] font-bold text-[var(--rs-primary)]">
            {formatCompactAmount(overview.revenue, overview.currency, lang)}
          </p>
          <BarChart points={overview.revenueSeries} label={t.admin.revenueChart} />
        </Card>
      </main>
    </>
  );
}
