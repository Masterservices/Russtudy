import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Lang } from '../i18n';
import type { BreadcrumbItem } from '../types/seo';
import { breadcrumbToJsonLd } from '../seo/breadcrumb';
import { basePathFor } from './basePath';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import GlobalJsonLd from '../components/GlobalJsonLd';

const HOME_HREF: Record<Lang, string> = { fr: '/', en: '/en', ar: '/ar', ru: '/ru' };
const APPLY_LABEL: Record<Lang, string> = {
  fr: 'Commencer mon dossier gratuit',
  en: 'Start my free application',
  ar: 'ابدأ ملفي المجاني',
  ru: 'Начать моё бесплатное досье',
};

const RESOURCES_HEADING: Record<Lang, string> = {
  fr: 'Ressources utiles',
  en: 'Useful resources',
  ar: 'موارد مفيدة',
  ru: 'Полезные ресурсы',
};

/**
 * Maillage interne transverse : chaque page de contenu renvoie vers les
 * autres piliers du site (hors sa propre section) pour renforcer le PageRank
 * interne des pages peu liées (visa, coût des études, guide, comparatif).
 */
const RESOURCE_LINKS: { key: string; path: string; label: Record<Lang, string> }[] = [
  { key: 'universites', path: '/universites', label: { fr: 'Universités partenaires', en: 'Partner universities', ar: 'الجامعات الشريكة', ru: 'Партнёрские вузы' } },
  { key: 'filieres', path: '/filieres', label: { fr: 'Filières et tarifs', en: 'Fields of study & fees', ar: 'التخصصات والرسوم', ru: 'Направления и стоимость' } },
  { key: 'villes', path: '/villes', label: { fr: 'Villes universitaires', en: 'University cities', ar: 'المدن الجامعية', ru: 'Университетские города' } },
  { key: 'visa', path: '/visa', label: { fr: "Visa d'études", en: 'Student visa', ar: 'تأشيرة الدراسة', ru: 'Студенческая виза' } },
  { key: 'cout-des-etudes', path: '/cout-des-etudes', label: { fr: 'Coût des études', en: 'Cost of studies', ar: 'تكلفة الدراسة', ru: 'Стоимость обучения' } },
  { key: 'bourses', path: '/bourses', label: { fr: 'Bourses et financement', en: 'Scholarships & funding', ar: 'المنح والتمويل', ru: 'Стипендии и финансирование' } },
  { key: 'guides', path: '/guides', label: { fr: 'Guides pratiques', en: 'Practical guides', ar: 'أدلة عملية', ru: 'Практические гиды' } },
  { key: 'cours', path: '/cours', label: { fr: 'Cours de langues', en: 'Language courses', ar: 'دروس اللغات', ru: 'Курсы языков' } },
  { key: 'accompagnement', path: '/accompagnement', label: { fr: 'Accueil aéroport & tuteur', en: 'Airport pickup & tutor', ar: 'الاستقبال في المطار والمرشد', ru: 'Встреча в аэропорту и куратор' } },
  { key: 'guide', path: '/guide', label: { fr: 'Guide interactif', en: 'Interactive guide', ar: 'الدليل التفاعلي', ru: 'Интерактивный гид' } },
  { key: 'comparatif', path: '/comparatif', label: { fr: 'Comparatif RusStudy', en: 'RusStudy comparison', ar: 'مقارنة RusStudy', ru: 'Сравнение RusStudy' } },
  { key: 'faq', path: '/faq', label: { fr: 'Questions fréquentes', en: 'Frequently asked questions', ar: 'الأسئلة الشائعة', ru: 'Частые вопросы' } },
  { key: 'blog', path: '/blog', label: { fr: 'Blog', en: 'Blog', ar: 'المدونة', ru: 'Блог' } },
];

export default function ContentPageShell({
  lang,
  breadcrumb,
  children,
  applyHref,
  applyLabel,
}: {
  lang: Lang;
  breadcrumb: BreadcrumbItem[];
  children: ReactNode;
  /**
   * Destination du bouton principal de l'en-tête. À préciser sur une
   * page qui ne mène pas au dossier d'inscription : les leçons de
   * langue n'ont pas à pousser vers une candidature universitaire.
   */
  applyHref?: string;
  applyLabel?: string;
}) {
  const breadcrumbJsonLd = breadcrumbToJsonLd(breadcrumb);
  const currentSection = breadcrumb[1]?.path.replace(/^\//, '');
  const basePath = basePathFor(lang);
  const relatedLinks = RESOURCE_LINKS.filter((r) => r.key !== currentSection);

  return (
    <div className="t-page min-h-screen relative font-sans">
      <GlobalJsonLd />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <SiteHeader lang={lang} applyHref={applyHref} applyLabel={applyLabel} />

      <nav aria-label="Breadcrumb" className="px-4 md:px-8 pt-[124px] pb-2">
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

      <nav aria-label={RESOURCES_HEADING[lang]} className="px-4 md:px-8 pb-6">
        <h2 className="text-[0.72rem] font-bold uppercase tracking-wide opacity-55 mb-2">{RESOURCES_HEADING[lang]}</h2>
        <ul className="flex flex-wrap gap-2">
          {relatedLinks.map((r) => (
            <li key={r.key}>
              <Link href={`${basePath}${r.path}`} className="t-chip inline-block text-[0.78rem] font-semibold px-3 py-1.5 hover:opacity-80 transition-opacity">
                {r.label[lang]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-4 md:px-8 pb-2">
        <div className="t-card-dark rounded-[22px] px-6 py-8 text-center">
          <Link href={`${HOME_HREF[lang]}#candidat`} className="t-btn-primary inline-block font-bold text-[0.95rem] px-8 py-4">
            {APPLY_LABEL[lang]} →
          </Link>
        </div>
      </div>

      <SiteFooter lang={lang} />
    </div>
  );
}
