'use client';

import { lazy, Suspense, useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Lang, LANGS, translations } from '../i18n';
import { basePathFor } from '../pages-templates/basePath';
import { FILIERES_SECTION_LABEL } from '../pages-templates/filieres/labels';
import { UNIVERSITES_SECTION_LABEL } from '../pages-templates/universites/labels';
import { VILLES_SECTION_LABEL } from '../pages-templates/villes/labels';
import { VISA_SECTION_LABEL } from '../pages-templates/visa/labels';
import { COUT_SECTION_LABEL } from '../pages-templates/cout-des-etudes/labels';
import { COMPARATIF_SECTION_LABEL } from '../pages-templates/comparatif/labels';
import { ACCOMPAGNEMENT_SECTION_LABEL } from '../pages-templates/accompagnement/labels';
import { BOURSES_SECTION_LABEL } from '../pages-templates/bourses/labels';
import { GUIDES_SECTION_LABEL } from '../pages-templates/guides/labels';
import { BLOG_SECTION_LABEL } from '../pages-templates/blog/labels';
import { COURSES_LABEL } from '../pages-templates/cours/labels';

const CandidatureModal = lazy(() => import('./CandidatureModal'));

const MOBILE_NAV_STYLE = ['t-c1', 't-c3', 't-c2', 't-c4', 't-c5', 't-c1', 't-c3', 't-c2', 't-c4', 't-c5', 't-c1'];
const HOME_HREF: Record<Lang, string> = { fr: '/', en: '/en', ar: '/ar', ru: '/ru' };
const ROUTED_LANGS: string[] = ['en', 'ar', 'ru'];

const ArrowIcon = () => <span aria-hidden="true">↗</span>;

/**
 * Le sélecteur de langue doit émettre de vrais liens <a href>. Avec de simples
 * boutons, les versions /en, /ar et /ru n'étaient reliées au reste du site par
 * aucun lien interne : Googlebot ne clique pas et ne suit pas router.push, si
 * bien que trois quarts des URL du sitemap restaient orphelines et finissaient
 * en « Détectée, actuellement non indexée ». Le onClick ne sert plus qu'à
 * conserver l'ancre courante lors d'une vraie navigation.
 */
function LangSwitch({
  lang,
  hrefForLang,
  onSelect,
  availableLangs,
  big = false,
}: {
  lang: Lang;
  hrefForLang: (target: Lang) => string;
  onSelect: (target: Lang) => void;
  /** Langues réellement publiées pour la page courante. */
  availableLangs?: Lang[];
  big?: boolean;
}) {
  const shown = availableLangs ? LANGS.filter((l) => availableLangs.includes(l.code)) : LANGS;
  return (
    <nav className="flex items-center gap-1.5" aria-label="Language">
      {shown.map((l) => (
        <a
          key={l.code}
          href={hrefForLang(l.code)}
          hrefLang={l.code}
          onClick={(event) => {
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
            event.preventDefault();
            onSelect(l.code);
          }}
          aria-current={lang === l.code ? 'page' : undefined}
          className={`${big ? 'px-4 py-2 text-sm' : 'px-2.5 py-1.5 text-[11px]'} font-bold cursor-pointer ${lang === l.code ? 't-chip-active' : 't-chip'}`}
        >
          {l.label}
        </a>
      ))}
    </nav>
  );
}

interface SiteHeaderProps {
  lang: Lang;
  onApplyClick?: () => void;
  /**
   * Destination du bouton d'action principal. Fournie, elle remplace
   * l'ouverture du formulaire de candidature : les pages qui ne mènent
   * pas au dossier d'inscription — les leçons, par exemple — ne doivent
   * pas y pousser le visiteur.
   */
  applyHref?: string;
  applyLabel?: string;
  /**
   * Langues dans lesquelles la page courante existe. À renseigner pour les
   * pages qui ne sont pas publiées dans les quatre langues : sans cela, le
   * sélecteur propose des liens vers des URL inexistantes, que Googlebot
   * suivrait jusqu'à un 404.
   */
  availableLangs?: Lang[];
}

export default function SiteHeader({
  lang,
  onApplyClick,
  availableLangs,
  applyHref,
  applyLabel,
}: SiteHeaderProps) {
  const t = translations[lang];
  const router = useRouter();
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [isCandidatureModalOpen, setIsCandidatureModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const hrefForLang = (target: Lang) => {
    const segments = pathname.split('/').filter(Boolean);
    const rest = segments.length > 0 && ROUTED_LANGS.includes(segments[0]) ? segments.slice(1) : segments;
    const restPath = rest.length ? `/${rest.join('/')}` : '';
    return target === 'fr' ? restPath || '/' : `/${target}${restPath}`;
  };

  const goToLang = (target: Lang) => {
    router.push(`${hrefForLang(target)}${window.location.hash}`);
  };

  const handleApply = () => {
    if (onApplyClick) onApplyClick();
    else setIsCandidatureModalOpen(true);
  };

  const toHref = (href: string) => (href.startsWith('#') ? `${HOME_HREF[lang]}${href}` : href);

  const navLinks = [
    { href: toHref('#pourquoi'), label: t.nav.why },
    { href: toHref('#processus'), label: t.nav.process },
    { href: toHref('#programmes'), label: t.nav.programs },
    { href: `${basePathFor(lang)}/universites`, label: UNIVERSITES_SECTION_LABEL[lang] },
    { href: `${basePathFor(lang)}/filieres`, label: FILIERES_SECTION_LABEL[lang] },
    { href: `${basePathFor(lang)}/villes`, label: VILLES_SECTION_LABEL[lang] },
    { href: `${basePathFor(lang)}/visa`, label: VISA_SECTION_LABEL[lang] },
    { href: `${basePathFor(lang)}/cout-des-etudes`, label: COUT_SECTION_LABEL[lang] },
    { href: `${basePathFor(lang)}/bourses`, label: BOURSES_SECTION_LABEL[lang] },
    { href: `${basePathFor(lang)}/guides`, label: GUIDES_SECTION_LABEL[lang] },
    { href: `${basePathFor(lang)}/cours`, label: COURSES_LABEL[lang] },
    { href: `${basePathFor(lang)}/accompagnement`, label: ACCOMPAGNEMENT_SECTION_LABEL[lang] },
    { href: `${basePathFor(lang)}/comparatif`, label: COMPARATIF_SECTION_LABEL[lang] },
    { href: toHref('#simulateur'), label: t.nav.simulator },
    { href: toHref('#rendezvous'), label: t.nav.booking },
    { href: toHref('#temoignages'), label: t.testimonials.kicker },
    { href: toHref('#faq'), label: t.nav.faq },
    { href: `${basePathFor(lang)}/guide`, label: t.nav.guide },
    { href: `${basePathFor(lang)}/blog`, label: BLOG_SECTION_LABEL[lang] },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[500]">
        {/*
          Le message défile : il en dit plus qu'une ligne fixe n'en
          tiendrait sur un téléphone, et annonce la session suivante
          sans rien retirer à celle qui se ferme. Le lien de rendez-vous
          reste immobile à droite — une cible qui bouge ne se clique pas.
          Le défilement s'arrête au survol, et tout entier pour qui a
          demandé moins d'animations : la copie visible est alors la
          première, complète.
        */}
        <div className="t-urgency h-9 flex items-center gap-3 px-3">
          <div className="relative flex-1 min-w-0 h-full overflow-hidden">
            <div className="animate-ticker pause-on-hover h-full items-center">
              {[0, 1].map((copy) => (
                <p
                  key={copy}
                  aria-hidden={copy === 1}
                  dir={lang === 'ar' ? 'rtl' : 'ltr'}
                  className="flex items-center gap-8 pe-8 text-[10px] md:text-[11px] font-bold tracking-wide whitespace-nowrap"
                >
                  <span>⏳ {t.urgency.text}</span>
                  <span className="opacity-80">{t.urgency.next}</span>
                </p>
              ))}
            </div>
          </div>
          <a
            href={toHref('#rendezvous')}
            className="hidden sm:inline-block text-[10px] font-black underline underline-offset-2 whitespace-nowrap hover:opacity-80 shrink-0"
          >
            {t.urgency.cta} →
          </a>
        </div>

        <nav className={`t-nav flex items-center justify-between px-4 md:px-8 py-3.5 transition-all ${navScrolled ? 'scrolled' : ''}`}>
          <a href={HOME_HREF[lang]} className="flex flex-col shrink-0">
            <span className="t-display font-bold text-[1.6rem] tracking-[-0.05em] leading-none">
              Rus<span className="t-accent-text">Study</span>.
            </span>
            <span className="text-[8px] font-medium tracking-[0.18em] opacity-50 uppercase mt-0.5">
              {t.nav.tagline}
            </span>
          </a>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <LangSwitch lang={lang} hrefForLang={hrefForLang} onSelect={goToLang} availableLangs={availableLangs} />
            </div>
            {/* Document HTML statique servi par réécriture, pas une page
                Next : une navigation client y échouerait. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/immersion"
              className="t-btn-dark hidden sm:inline-block font-bold text-[0.85rem] px-5 py-2.5 whitespace-nowrap"
            >
              🎬 {t.nav.demo3d}
            </a>
            {applyHref ? (
              <a
                href={applyHref}
                className="t-btn-primary font-bold text-[0.88rem] px-5 py-2.5 whitespace-nowrap"
              >
                {applyLabel ?? t.nav.apply}
              </a>
            ) : (
              <button
                onClick={handleApply}
                className="t-btn-primary font-bold text-[0.88rem] px-5 py-2.5 cursor-pointer"
              >
                {t.nav.apply}
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label={t.nav.menuOpen}
              aria-expanded={isMobileMenuOpen}
              className="v2-sq-btn"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[900] overflow-y-auto flex flex-col gap-2 px-4 pb-4 pt-24" style={{ background: 'var(--bg)' }}>
          <div className="fixed top-0 left-0 right-0 z-[910] flex items-center justify-between px-4 py-3.5" style={{ background: 'var(--bg)' }}>
            <span className="t-display font-bold text-[1.6rem] tracking-[-0.05em] leading-none">
              Rus<span className="t-accent-text">Study</span>.
            </span>
            <button type="button" onClick={() => setIsMobileMenuOpen(false)} aria-label={t.nav.menuClose} className="v2-sq-btn">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-center py-3">
            <LangSwitch lang={lang} hrefForLang={hrefForLang} onSelect={goToLang} availableLangs={availableLangs} big />
          </div>

          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/immersion" className="v2-mob-link t-dark">
            <span>🎬 {t.nav.demo3d}</span><ArrowIcon />
          </a>
          {navLinks.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`v2-mob-link ${MOBILE_NAV_STYLE[idx % MOBILE_NAV_STYLE.length]}`}
            >
              <span>{String(idx + 1).padStart(2, '0')} · {link.label}</span><ArrowIcon />
            </a>
          ))}
          {applyHref ? (
            <a
              href={applyHref}
              onClick={() => setIsMobileMenuOpen(false)}
              className="t-btn-primary font-bold text-base py-4 text-center"
            >
              {applyLabel ?? t.nav.apply} →
            </a>
          ) : (
            <button
              onClick={() => { setIsMobileMenuOpen(false); handleApply(); }}
              className="t-btn-primary font-bold text-base py-4 cursor-pointer"
            >
              {t.nav.apply} →
            </button>
          )}
        </div>
      )}

      {!onApplyClick && isCandidatureModalOpen && (
        <Suspense fallback={null}>
          <CandidatureModal isOpen={isCandidatureModalOpen} onClose={() => setIsCandidatureModalOpen(false)} t={t} />
        </Suspense>
      )}
    </>
  );
}
