import type { ReactNode } from 'react';
import BackButton from './BackButton';
import BottomNav, { type NavItem } from './BottomNav';
import { getAppI18n } from '../i18n/server';

/**
 * En-tête d'écran : soit un titre simple, soit un titre précédé d'un retour.
 * Le retour suit le parcours réel de l'utilisateur et n'utilise la route
 * indiquée qu'à défaut d'historique (lien profond, notification, onglet neuf).
 */
export async function AppHeader({
  title,
  subtitle,
  backHref,
  action,
}: {
  title: string;
  subtitle?: string;
  backHref?: string;
  action?: ReactNode;
}) {
  const { t } = await getAppI18n();

  return (
    <header className="sticky top-0 z-30 bg-[var(--rs-bg)]/95 backdrop-blur-sm border-b border-[var(--rs-line)]">
      <div className="flex items-center gap-3 px-4 py-3.5">
        {backHref ? <BackButton href={backHref} label={t.common.back} /> : null}
        <div className="flex-1 min-w-0">
          <h1 className="text-[17px] font-bold leading-tight truncate">{title}</h1>
          {subtitle ? <p className="text-[12px] text-[var(--rs-muted)] truncate">{subtitle}</p> : null}
        </div>
        {action}
      </div>
    </header>
  );
}

/** Ossature commune à tous les écrans authentifiés : contenu + navigation. */
export function AppShell({ children, nav }: { children: ReactNode; nav: NavItem[] }) {
  return (
    <div className="rs-shell">
      {children}
      <BottomNav items={nav} />
    </div>
  );
}
