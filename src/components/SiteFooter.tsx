'use client';

import { lazy, Suspense } from 'react';
import { Lang, translations } from '../i18n';
import { basePathFor } from '../pages-templates/basePath';
import { BLOG_SECTION_LABEL } from '../pages-templates/blog/labels';
import { UNIVERSITES_SECTION_LABEL } from '../pages-templates/universites/labels';
import { FILIERES_SECTION_LABEL } from '../pages-templates/filieres/labels';
import { VILLES_SECTION_LABEL } from '../pages-templates/villes/labels';
import { VISA_SECTION_LABEL } from '../pages-templates/visa/labels';
import { COUT_SECTION_LABEL } from '../pages-templates/cout-des-etudes/labels';
import { COMPARATIF_SECTION_LABEL } from '../pages-templates/comparatif/labels';
import { ACCOMPAGNEMENT_SECTION_LABEL } from '../pages-templates/accompagnement/labels';
import { BOURSES_SECTION_LABEL } from '../pages-templates/bourses/labels';
import { GUIDES_SECTION_LABEL } from '../pages-templates/guides/labels';
import { GUIDE_SECTION_LABEL } from '../pages-templates/guide/labels';
import { FAQ_PAGE_SECTION_LABEL } from '../pages-templates/faq/labels';

const FooterGridCanvas = lazy(() => import('./FooterGridCanvas'));

const HOME_HREF: Record<Lang, string> = { fr: '/', en: '/en', ar: '/ar', ru: '/ru' };

// Pastilles légales : mêmes libellés que t.footer.smallPills, dans le même ordre.
const PILL_PATHS = [
  '/faq',
  '/mentions-legales',
  '/conditions-generales-vente',
  '/conditions-generales-utilisation',
  '/politique-de-confidentialite',
  '/cookies',
];

export default function SiteFooter({ lang }: { lang: Lang }) {
  const t = translations[lang];
  const toHref = (href: string) => (href.startsWith('#') ? `${HOME_HREF[lang]}${href}` : href);
  const basePath = basePathFor(lang);

  const pageLinks = [
    { href: `${basePath}/universites`, label: UNIVERSITES_SECTION_LABEL[lang] },
    { href: `${basePath}/filieres`, label: FILIERES_SECTION_LABEL[lang] },
    { href: `${basePath}/villes`, label: VILLES_SECTION_LABEL[lang] },
    { href: `${basePath}/visa`, label: VISA_SECTION_LABEL[lang] },
    { href: `${basePath}/cout-des-etudes`, label: COUT_SECTION_LABEL[lang] },
    { href: `${basePath}/bourses`, label: BOURSES_SECTION_LABEL[lang] },
    { href: `${basePath}/guides`, label: GUIDES_SECTION_LABEL[lang] },
    { href: `${basePath}/accompagnement`, label: ACCOMPAGNEMENT_SECTION_LABEL[lang] },
    { href: `${basePath}/comparatif`, label: COMPARATIF_SECTION_LABEL[lang] },
    { href: `${basePath}/guide`, label: GUIDE_SECTION_LABEL[lang] },
    { href: `${basePath}/faq`, label: FAQ_PAGE_SECTION_LABEL[lang] },
    { href: `${basePath}/blog`, label: BLOG_SECTION_LABEL[lang] },
  ];

  return (
    <div className="px-4 md:px-8 pt-2.5 pb-5">
      <footer className="t-dark rounded-[22px] overflow-hidden pt-8 px-5">
        <div className="t-display font-bold text-[1.3rem] tracking-[-0.04em]">
          Rus<span className="t-accent-text">Study</span>.
        </div>
        <p className="text-[0.82rem] opacity-40 leading-[1.7] max-w-sm mt-2">{t.footer.about}</p>
        <p className="text-xs t-gold-text font-bold mt-2">{t.footer.whatsapp}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 my-5">
          {t.footer.links.map((link) => (
            <a key={link.href} href={toHref(link.href)} className="v2-flink">{link.label}</a>
          ))}
          {pageLinks.map((link) => (
            <a key={link.href} href={link.href} className="v2-flink">{link.label}</a>
          ))}
          <a href="tel:+79964334489" className="v2-flink" dir="ltr">+7 996 433 4489</a>
          <a href="mailto:contact@russieetudes.com" className="v2-flink">contact@russieetudes.com</a>
          {/* Document statique servi par réécriture : lien dur voulu. */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/immersion" className="v2-flink">🎬 {t.nav.demo3d}</a>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {t.footer.smallPills.map((pill, idx) => (
            <a key={idx} href={`${basePath}${PILL_PATHS[idx] ?? '/faq'}`} className="v2-fpill hover:opacity-80">{pill}</a>
          ))}
          {t.footer.contact.map((line, idx) => (
            <span key={`c${idx}`} className="v2-fpill">{line}</span>
          ))}
        </div>

        <div className="relative -mx-5 overflow-hidden h-[160px]">
          <Suspense fallback={null}>
            <FooterGridCanvas />
          </Suspense>
          <div className="v2-footer-giant t-display">RusStudy.</div>
        </div>

        <div className="border-t border-white/[.07] py-4 flex items-center justify-between flex-wrap gap-2.5">
          <p className="text-[0.72rem] opacity-25">© {new Date().getFullYear()} RusStudy — {t.footer.legal}</p>
          <div className="flex gap-1.5">
            <a href="https://wa.me/79964334489" target="_blank" rel="noreferrer" className="v2-soc" aria-label="WhatsApp">wa</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
