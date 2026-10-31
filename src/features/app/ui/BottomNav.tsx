'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Bell,
  CalendarDays,
  CreditCard,
  FolderOpen,
  GraduationCap,
  Home,
  LayoutDashboard,
  MessageSquare,
  MoreHorizontal,
  Settings,
  User,
  Users,
} from 'lucide-react';

export type NavIcon =
  | 'home'
  | 'folder'
  | 'messages'
  | 'profile'
  | 'dashboard'
  | 'students'
  | 'universities'
  | 'settings'
  | 'more'
  | 'bell'
  | 'payments'
  | 'calendar';

export interface NavItem {
  href: string;
  label: string;
  icon: NavIcon;
}

const ICONS: Record<NavIcon, typeof Home> = {
  home: Home,
  folder: FolderOpen,
  messages: MessageSquare,
  profile: User,
  dashboard: LayoutDashboard,
  students: Users,
  universities: GraduationCap,
  settings: Settings,
  more: MoreHorizontal,
  bell: Bell,
  payments: CreditCard,
  calendar: CalendarDays,
};

/**
 * Barre de navigation basse. L'onglet actif est déduit du chemin courant :
 * correspondance exacte, ou préfixe pour les sous-écrans d'une section.
 */
export default function BottomNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  const activeHref = items.reduce<string | null>((best, item) => {
    const matches = pathname === item.href || pathname.startsWith(`${item.href}/`);
    if (!matches) return best;
    return best && best.length >= item.href.length ? best : item.href;
  }, null);

  return (
    <nav className="rs-tabbar" style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }} aria-label="Navigation principale">
      {items.map((item) => {
        const Icon = ICONS[item.icon];
        const current = item.href === activeHref;
        return (
          <Link key={item.href} href={item.href} className="rs-tab" aria-current={current ? 'page' : undefined}>
            <Icon size={21} strokeWidth={current ? 2.4 : 1.8} aria-hidden="true" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
