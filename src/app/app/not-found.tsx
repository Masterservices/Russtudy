import Link from 'next/link';
import { getAppI18n } from '../../features/app/i18n/server';
import Wordmark from '../../features/app/ui/Wordmark';

export default async function AppNotFound() {
  const { t } = await getAppI18n();

  return (
    <main className="rs-shell px-6 py-16 flex flex-col items-center justify-center text-center">
      <Wordmark size="md" />
      <p className="mt-8 text-[52px] font-bold leading-none text-[var(--rs-primary)]">404</p>
      <p className="mt-3 text-[14px] text-[var(--rs-muted)]">{t.common.empty}</p>
      <Link href="/app" className="rs-btn rs-btn-primary mt-8 max-w-[240px]">
        {t.common.back}
      </Link>
    </main>
  );
}
