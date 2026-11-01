import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Lang } from '../i18n';
import type { BreadcrumbItem } from '../types/seo';
import { breadcrumbToJsonLd } from '../seo/breadcrumb';
import { basePathFor } from './basePath';

const HOME_HREF: Record<Lang, string> = { fr: '/', en: '/en', ar: '/ar', ru: '/ru' };
const APPLY_LABEL: Record<Lang, string> = {
  fr: 'Commencer mon dossier gratuit',
  en: 'Start my free application',
  ar: 'ابدأ ملفي المجاني',
  ru: 'Начать моё бесплатное досье',
};

export default function ContentPageShell({
  lang,
  breadcrumb,
  children,
}: {
  lang: Lang;
  breadcrumb: BreadcrumbItem[];
  children: ReactNode;
}) {
  const breadcrumbJsonLd = breadcrumbToJsonLd(breadcrumb);

  return (
    <div className="t-page min-h-screen relative font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <header className="px-4 md:px-8 py-4">
        <Link href={HOME_HREF[lang]} className="t-display font-bold text-[1.4rem] tracking-[-0.05em] leading-none inline-block">
          Rus<span className="t-accent-text">Study</span>.
        </Link>
      </header>

      <nav aria-label="Breadcrumb" className="px-4 md:px-8 pb-2">
        <ol className="flex flex-wrap gap-1.5 text-[0.78rem] opacity-60">
          {breadcrumb.map((item, idx) => (
            <li key={item.path} className="flex items-center gap-1.5">
              {idx > 0 && <span aria-hidden="true">/</span>}
              {idx === breadcrumb.length - 1 ? (
                <span className="font-semibold">{item.name}</span>
              ) : (
                <Link href={item.path === '/' ? HOME_HREF[lang] : `${basePathFor(lang)}${item.path}`} className="hover:underline">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <main className="px-4 md:px-8 pb-10">{children}</main>

      <div className="px-4 md:px-8 pb-8">
        <div className="t-card-dark rounded-[22px] px-6 py-8 text-center">
          <Link href={`${HOME_HREF[lang]}#candidat`} className="t-btn-primary inline-block font-bold text-[0.95rem] px-8 py-4">
            {APPLY_LABEL[lang]} →
          </Link>
        </div>
      </div>
    </div>
  );
}
