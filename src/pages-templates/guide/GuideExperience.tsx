'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Building2, CheckCircle2, Cog, Heart, Laptop, PlaneTakeoff, Pill, ShieldCheck,
} from 'lucide-react';
import type { Lang } from '../../i18n';
import { translations } from '../../i18n';
import type { GuideCopy } from '../../content/guide/copy';
import { buildGuidePopupCopy } from '../../content/guide/popup';
import { basePathFor } from '../basePath';
import { WHY_CARD_PATHS } from '../../constants/internalLinks';
import { PROGRAM_CARD_SLUGS } from '../../content/filieres/registry';
import { getFiliereFacts } from '../../content/filieres/facts';
import { UNIVERSITY_SLUGS } from '../../content/universites/registry';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import GuidePopup from './GuidePopup';

const SPECIALTY_ICONS = [Heart, PlaneTakeoff, Laptop, Cog, Pill, Building2];
const SPECIALTY_STYLE = ['t-c2', 't-c1', 't-c5', 't-c3', 't-c4', 't-c3'];
const WHY_CARD_STYLE = ['t-c1', 't-c3', 't-c2', 't-c4'];
const PROCESS_STEP_STYLE = ['t-card', 't-c5', 't-c3', 't-c2', 't-c4'];
const TESTIMONIAL_STYLE = ['t-c1', 't-c2', 't-c4'];
/* Même ordre et mêmes teintes que les cartes de l'accueil. */
const PROGRAM_STYLE = [
  { bodyClass: 't-c1', linkColor: '#FBBB21', gradient: 'linear-gradient(135deg,#0a2a6e,#1a4fcc)' },
  { bodyClass: 't-c2', linkColor: '#0A0A0A', gradient: 'linear-gradient(135deg,#7c2600,#e05a00)' },
  { bodyClass: 't-c3', linkColor: '#0A0A0A', gradient: 'linear-gradient(135deg,#5a4500,#b88a00)' },
  { bodyClass: 't-c4', linkColor: '#0A0A0A', gradient: 'linear-gradient(135deg,#00463f,#00998a)' },
  { bodyClass: 't-c5', linkColor: '#0A0A0A', gradient: 'linear-gradient(135deg,#3b006b,#8400d4)' },
];

/* Photos réelles déjà utilisées ailleurs sur le site (même banque, même licence) */
const PHOTO_HERO = 'photo-1513326738677-b964603b136d';
const PHOTO_CAMPUS = 'photo-1523240795612-9a054b0db644';
const GALLERY_IMAGES = [
  'photo-1513326738677-b964603b136d',
  'photo-1547448415-e9f5b28e570d',
  'photo-1556610961-2fecc5927173',
  'photo-1519452635265-7b1fbfd1e4e0',
  'photo-1522202176988-66273c2fd55f',
  'photo-1523240795612-9a054b0db644',
  'photo-1520106212299-d99c443e4568',
  'photo-1541339907198-e08756dedf3f',
];
const galleryUrl = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=640&h=480&q=60`;
const TESTIMONIAL_AVATARS = [
  'photo-1500648767791-00dcc994a43e',
  'photo-1494790108377-be9c29b29330',
  'photo-1506794778202-cad84cf45f1d',
];
const avatarUrl = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=96&h=96&q=60`;

const RESOURCE_LINKS: { path: string; label: Record<Lang, string> }[] = [
  { path: '/villes', label: { fr: 'Villes universitaires', en: 'University cities', ar: 'المدن الجامعية', ru: 'Университетские города' } },
  { path: '/cout-des-etudes', label: { fr: 'Coût des études', en: 'Cost of studies', ar: 'تكلفة الدراسة', ru: 'Стоимость обучения' } },
  { path: '/blog', label: { fr: 'Blog', en: 'Blog', ar: 'المدونة', ru: 'Блог' } },
];

const ArrowIcon = () => <span aria-hidden="true">↗</span>;

interface GuideExperienceProps {
  lang: Lang;
  copy: GuideCopy;
}

export default function GuideExperience({ lang, copy }: GuideExperienceProps) {
  const t = translations[lang];
  const [isOpen, setIsOpen] = useState(false);
  const [activeFaqId, setActiveFaqId] = useState<number | null>(null);

  useEffect(() => {
    const id = setTimeout(() => setIsOpen(true), 500);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add('js-reveal');
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.08 });
    els.forEach((el) => obs.observe(el));
    const safety = setTimeout(() => els.forEach((el) => el.classList.add('in')), 2500);
    return () => { obs.disconnect(); clearTimeout(safety); };
  }, [lang]);

  const popupCopy = buildGuidePopupCopy(lang);
  const perks: [{ title: string; text: string }, { title: string; text: string }] = [
    copy.benefits[0],
    copy.benefits[2] ?? copy.benefits[0],
  ];

  const openPopup = () => setIsOpen(true);
  const basePath = basePathFor(lang);

  return (
    <div className="t-page min-h-screen relative overflow-x-hidden font-sans">
      <SiteHeader lang={lang} onApplyClick={openPopup} />

      {/* HERO */}
      <section className="pt-[124px] px-4 md:px-8">
        <div className="reveal relative rounded-[22px] overflow-hidden min-h-[480px] h-[72svh] bg-black text-white">
          <Image src={galleryUrl(PHOTO_HERO)} alt="" fill sizes="100vw" priority className="object-cover opacity-70" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,10,10,.4), rgba(10,10,10,.8))' }} aria-hidden="true" />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-1.5 mb-5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22C55E]" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider">• {t.hero.badge}</span>
            </div>
            <h1 className="t-display font-bold text-[clamp(2.2rem,8vw,4.4rem)] tracking-[-0.04em] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.4)]">
              {copy.h1}
            </h1>
            <p className="text-[clamp(0.9rem,3vw,1.15rem)] text-white/85 mt-3 font-medium max-w-xl leading-relaxed drop-shadow">
              {copy.sub}
            </p>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-1.5 mt-5">
              {t.hero.badges.map((badge, idx) => (
                <span key={idx} className="text-[11px] font-bold text-white/80">{badge.icon} {badge.text}</span>
              ))}
            </div>
          </div>
          <div className="absolute bottom-5 inset-x-0 z-20 flex justify-center px-4">
            <button
              type="button"
              onClick={openPopup}
              className="bg-black text-white rounded-full px-8 py-4 font-bold text-[0.95rem] flex items-center gap-3 hover:scale-[1.03] transition-transform cursor-pointer"
            >
              {copy.startCta}
              <span className="w-[26px] h-[26px] rounded-full bg-white text-black grid place-items-center text-xs">↗</span>
            </button>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="t-ticker-a reveal overflow-hidden mx-4 md:mx-8 mt-2.5 rounded-full">
        <div className="animate-ticker hover:animate-ticker-fast pause-on-hover">
          {Array(4).fill(t.tickerA).flat().map((txt, idx) => (
            <span key={idx} className="font-bold text-sm py-3 px-4 tracking-wider uppercase whitespace-nowrap">{txt}</span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div className="reveal grid grid-cols-3 gap-2 px-4 md:px-8 pt-2.5">
        {t.stats.map((stat, idx) => (
          <div key={idx} className="t-card-dark rounded-[18px] py-5 px-3 text-center">
            <div className={`t-display font-bold text-[clamp(1.4rem,5vw,2.4rem)] leading-none tracking-[-0.04em] ${idx === 0 ? 't-accent-text' : idx === 1 ? 't-gold-text' : 't-green-text'}`}>
              {stat.value}
            </div>
            <div className="text-[0.62rem] opacity-40 mt-1.5 tracking-[0.1em] uppercase font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* BANDEAU MINISTÉRIEL */}
      <div className="reveal px-4 md:px-8 pt-2.5">
        <div className="t-card p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex items-center gap-3 shrink-0">
            <span className="w-[38px] h-[38px] rounded-full grid place-items-center t-c5">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <span className="t-kicker text-[0.7rem]">{t.ministry.kicker}</span>
          </div>
          <p className="text-sm t-muted leading-relaxed flex-1">{t.ministry.text}</p>
          <div className="flex flex-wrap gap-2 shrink-0">
            {t.ministry.badges.map((badge, idx) => (
              <span key={idx} className="t-chip px-3 py-1.5 text-[10px] font-bold whitespace-nowrap">{badge}</span>
            ))}
          </div>
        </div>
      </div>

      {/* L'ESSENTIEL EN BREF (bénéfices du guide) */}
      <div className="px-4 md:px-8 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {copy.benefits.map((b) => (
          <div key={b.title} className="reveal t-card rounded-[18px] p-5">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 t-green-text shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h2 className="t-display font-bold text-[1rem] tracking-[-0.02em] mb-1">{b.title}</h2>
                <p className="text-[0.85rem] leading-[1.55] opacity-80">{b.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* POURQUOI RUSSTUDY (cartes) */}
      <div className="px-4 md:px-8 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {t.why.cards.map((card, idx) => (
          <Link
            key={idx}
            href={`${basePath}${WHY_CARD_PATHS[idx] ?? '/comparatif'}`}
            className={`reveal tilt-card rounded-[22px] p-7 relative overflow-hidden block ${WHY_CARD_STYLE[idx]} ${idx === 0 || idx === 3 ? 'sm:col-span-2' : ''}`}
          >
            <div className="t-kicker text-[0.72rem] mb-4" style={{ borderColor: 'currentColor', color: 'inherit', opacity: 0.85 }}>{card.tag}</div>
            <h2 className="t-display font-bold text-[clamp(1.6rem,6vw,2.6rem)] tracking-[-0.04em] leading-[1.1]">{card.title}</h2>
            <p className="text-sm leading-[1.65] mt-2.5 opacity-80 max-w-xl">{card.text}</p>
            <div className="v2-arrow"><ArrowIcon /></div>
          </Link>
        ))}
      </div>

      {/* PIÈGES À ÉVITER */}
      <div className="px-4 md:px-8 pt-6">
        <div className="reveal t-card-dark p-7 rounded-[22px] mb-2">
          <div className="t-kicker t-kicker-dark text-[0.72rem] mb-3" style={{ color: 'var(--red)' }}>{t.pains.kicker}</div>
          <h2 className="t-display font-bold text-[clamp(1.5rem,5vw,2.2rem)] tracking-[-0.04em] leading-[1.1]">
            {t.pains.title} <span className="t-red-text">{t.pains.titleHl}</span>
          </h2>
          <p className="text-sm t-dark-muted mt-2 leading-relaxed max-w-2xl">{t.pains.sub}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {t.pains.items.map((pt, idx) => (
            <div key={idx} className="reveal t-card-dark p-6 flex gap-4 rounded-[18px]">
              <span className="text-2xl select-none" aria-hidden="true">{pt.icon}</span>
              <div>
                <h3 className="font-bold text-base">{pt.title}</h3>
                <p className="t-dark-muted text-[0.82rem] mt-1.5 leading-[1.55]">{pt.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SPÉCIALITÉS ACCRÉDITÉES */}
      <div className="px-4 md:px-8 pt-6">
        <div className="reveal t-card p-6 rounded-[22px] mb-2 text-center">
          <h2 className="t-display font-bold text-[clamp(1.5rem,5vw,2.2rem)] tracking-[-0.04em]">{copy.step3Title}</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {copy.specialtyChips.map((label, idx) => {
            const Icon = SPECIALTY_ICONS[idx % SPECIALTY_ICONS.length];
            return (
              <div key={label} className={`reveal ${SPECIALTY_STYLE[idx % SPECIALTY_STYLE.length]} rounded-[16px] p-4 flex items-center gap-2.5`}>
                <Icon className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span className="font-bold text-[0.85rem]">{label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* PROCESSUS */}
      <div className="px-4 md:px-8 pt-6 flex flex-col gap-2">
        <div className="reveal t-c1 rounded-[22px] p-7 flex items-center justify-between">
          <div>
            <div className="t-kicker text-[0.72rem] mb-3" style={{ borderColor: 'rgba(255,255,255,.3)', color: '#fff' }}>{t.process.kicker}</div>
            <h2 className="t-display font-bold text-[clamp(1.5rem,5vw,2rem)] tracking-[-0.04em]">
              {t.process.title} {t.process.titleHl}
            </h2>
            <p className="text-sm opacity-70 mt-2 leading-relaxed max-w-xl">{t.process.sub}</p>
            <Link
              href={`${basePath}/visa`}
              className="inline-flex items-center gap-1.5 font-bold text-[0.85rem] mt-3 hover:gap-2.5 transition-all"
              style={{ color: '#fff' }}
            >
              {t.process.viewVisa} <ArrowIcon />
            </Link>
          </div>
        </div>
        {t.process.steps.map((step, idx) => (
          <div key={idx} className={`reveal v2-proc rounded-[18px] p-6 flex items-start gap-5 transition-all ${PROCESS_STEP_STYLE[idx]}`}>
            <div className="t-display font-bold text-4xl tracking-[-0.06em] leading-none opacity-30 shrink-0 pt-0.5">{step.num}</div>
            <div>
              <h3 className="font-bold text-[1.05rem] mb-1">{step.title}</h3>
              <p className="text-[0.82rem] opacity-70 leading-[1.55]">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* DIPLÔMES RECONNUS DANS LE MONDE */}
      <div className="px-4 md:px-8 pt-6">
        <div className="reveal t-card-dark rounded-[22px] p-7 text-center">
          <h2 className="t-display font-bold text-[clamp(1.5rem,5vw,2.2rem)] tracking-[-0.04em]">{copy.step5Title}</h2>
          <p className="text-sm t-dark-muted mt-2 max-w-xl mx-auto">{copy.step5Sub}</p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {copy.step5Regions.map((region) => (
              <span key={region} className="t-chip-active px-3.5 py-1.5 text-[0.78rem] font-bold">{region}</span>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2 mt-6 max-w-lg mx-auto">
            {copy.worldStats.map((s) => (
              <div key={s.label}>
                <div className="t-display font-black text-2xl tracking-[-0.03em] t-gold-text">{s.value}</div>
                <div className="text-[0.68rem] t-dark-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* VIE DE CAMPUS */}
      <div className="px-4 md:px-8 pt-6 grid grid-cols-1 lg:grid-cols-2 gap-2 items-stretch">
        <div className="reveal relative rounded-[22px] overflow-hidden min-h-[240px]">
          <Image src={galleryUrl(PHOTO_CAMPUS)} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="reveal t-card rounded-[22px] p-7">
          <h2 className="t-display font-bold text-2xl tracking-[-0.03em] mb-3">{copy.lifeTitle}</h2>
          <div className="flex flex-col gap-2.5">
            {copy.lifeBullets.map((b) => (
              <div key={b.title} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 t-green-text shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.85rem] leading-snug">
                  <span className="font-bold">{b.title}</span>{' '}
                  <span className="opacity-70">— {b.text}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PROGRAMMES */}
      <div className="px-4 md:px-8 pt-6">
        <div className="reveal t-card p-6 rounded-[22px] mb-2">
          <div className="t-kicker text-[0.72rem] mb-3">{t.programs.kicker}</div>
          <h2 className="t-display font-bold text-[clamp(1.5rem,5vw,2.2rem)] tracking-[-0.04em]">
            {t.programs.title} <span className="t-hl">{t.programs.titleHl}</span>
          </h2>
          <p className="text-sm t-muted mt-2 leading-relaxed max-w-2xl">{t.programs.sub}</p>
          <Link href={`${basePath}/filieres`} className="inline-flex items-center gap-1.5 font-bold text-[0.85rem] mt-3 hover:gap-2.5 transition-all">
            {t.programs.viewAll} <ArrowIcon />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {PROGRAM_CARD_SLUGS.map((slug, idx) => {
            const prog = getFiliereFacts(lang, slug);
            return (
            <div key={slug} className="reveal rounded-[22px] overflow-hidden hover:scale-[1.015] transition-transform will-change-transform">
              <Link
                href={`${basePath}/filieres/${slug}`}
                className="h-[160px] relative overflow-hidden flex flex-col justify-end p-4"
                style={{ background: PROGRAM_STYLE[idx].gradient }}
              >
                <div className="flex gap-1.5 flex-wrap mb-1.5">
                  <span className="bg-white/20 text-white rounded-full px-2.5 py-0.5 text-[0.68rem] font-semibold backdrop-blur-sm">{prog.tag}</span>
                  <span className="bg-white/20 text-white rounded-full px-2.5 py-0.5 text-[0.68rem] font-semibold backdrop-blur-sm">{prog.duration}</span>
                  <span className="bg-white/20 text-white rounded-full px-2.5 py-0.5 text-[0.68rem] font-semibold backdrop-blur-sm">{prog.price}</span>
                </div>
                <h3 className="text-white text-[1.35rem] font-bold tracking-[-0.03em]">{prog.name}</h3>
              </Link>
              <div className={`p-5 ${PROGRAM_STYLE[idx].bodyClass}`}>
                <ul className="space-y-1 text-[0.85rem] opacity-85">
                  {prog.details.map((det, i) => <li key={i}>✓ {det}</li>)}
                </ul>
                <button
                  type="button"
                  onClick={openPopup}
                  className="inline-flex items-center gap-1.5 mt-3 font-bold text-[0.85rem] cursor-pointer hover:gap-2.5 transition-all"
                  style={{ color: PROGRAM_STYLE[idx].linkColor }}
                >
                  {t.programs.apply} <ArrowIcon />
                </button>
              </div>
            </div>
            );
          })}
        </div>
      </div>

      {/* UNIVERSITÉS */}
      <div className="reveal px-4 md:px-8 pt-6">
        <div className="t-c4 rounded-[22px] p-7 mb-2 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <div className="t-kicker text-[0.72rem] mb-3" style={{ borderColor: 'rgba(0,0,0,.2)', color: 'inherit' }}>{t.universities.kicker}</div>
            <h2 className="t-display font-bold text-[clamp(1.5rem,5vw,2rem)] tracking-[-0.04em]">{t.universities.title}</h2>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
            <Link href={`${basePath}/universites`} className="inline-flex items-center gap-1.5 font-bold text-[0.85rem] hover:gap-2.5 transition-all">
              {t.universities.viewAll} <ArrowIcon />
            </Link>
            <Link href={`${basePath}/villes`} className="inline-flex items-center gap-1.5 font-bold text-[0.78rem] opacity-80 hover:gap-2.5 transition-all">
              {t.universities.viewCities} <ArrowIcon />
            </Link>
          </div>
        </div>
        <div className="overflow-hidden py-0.5">
          <div className="animate-ticker pause-on-hover flex gap-2">
            {Array(3).fill(t.universities.items).flat().map((univ, idx) => (
              <Link key={idx} href={`${basePath}/universites/${UNIVERSITY_SLUGS[idx % UNIVERSITY_SLUGS.length]}`} className="v2-uni-chip">
                <span className="bg-black text-white rounded-full px-2 py-0.5 text-[0.62rem] font-bold tracking-wide">{univ.rank}</span>
                <span className="font-semibold text-[0.83rem]">{univ.name} · {univ.city}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* GALERIE */}
      <div className="px-4 md:px-8 pt-6">
        <div className="reveal t-card p-6 rounded-[22px] mb-2 text-center">
          <div className="t-kicker text-[0.72rem] mb-3 mx-auto">{t.gallery.kicker}</div>
          <h2 className="t-display font-bold text-[clamp(1.5rem,5vw,2.2rem)] tracking-[-0.04em]">
            {t.gallery.title} <span className="t-accent-text">{t.gallery.titleHl}</span>
          </h2>
          <p className="text-sm t-muted mt-2 leading-relaxed max-w-2xl mx-auto">{t.gallery.sub}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {GALLERY_IMAGES.map((imgId, idx) => (
            <figure key={imgId} className="reveal relative rounded-[18px] overflow-hidden group aspect-[4/3]">
              <Image
                src={galleryUrl(imgId)}
                alt={t.gallery.items[idx]?.alt ?? ''}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                loading="lazy"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent text-white text-[10px] md:text-xs font-bold px-3 py-2.5">
                {t.gallery.items[idx]?.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* TÉMOIGNAGES */}
      <div className="px-4 md:px-8 pt-6">
        <div className="reveal t-card p-6 rounded-[22px] mb-2 text-center">
          <div className="t-kicker text-[0.72rem] mb-3 mx-auto">{t.testimonials.kicker}</div>
          <h2 className="t-display font-bold text-[clamp(1.5rem,5vw,2.2rem)] tracking-[-0.04em]">
            {t.testimonials.title} <span className="t-accent-text">{t.testimonials.titleHl}</span>
          </h2>
          <p className="text-sm t-muted mt-2 leading-relaxed max-w-2xl mx-auto">
            <span className="font-bold t-gold-text">{t.stats[0]?.value}</span> {copy.testimonialTrustSuffix}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {t.testimonials.items.map((testi, idx) => (
            <div key={idx} className={`reveal tilt-card rounded-[22px] p-7 ${TESTIMONIAL_STYLE[idx]}`}>
              <div className="text-base mb-3.5" aria-label="5/5">★★★★★</div>
              <p className="text-[0.98rem] leading-[1.65] font-medium italic">{testi.text}</p>
              <div className="flex items-center gap-3 mt-5">
                <Image
                  src={avatarUrl(TESTIMONIAL_AVATARS[idx % TESTIMONIAL_AVATARS.length])}
                  alt={testi.name}
                  width={42}
                  height={42}
                  loading="lazy"
                  className="w-[42px] h-[42px] rounded-full object-cover border-2 border-white/40 shadow shrink-0"
                />
                <div>
                  <div className="font-bold text-[0.88rem]">{testi.name}</div>
                  <div className="text-[0.73rem] opacity-60 mt-0.5">{testi.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GARANTIES */}
      <div className="px-4 md:px-8 pt-6 flex flex-col gap-2">
        <div className="reveal t-card-dark rounded-[22px] p-7">
          <div className="t-kicker t-kicker-dark text-[0.72rem] mb-3">{t.guarantees.kicker}</div>
          <h2 className="t-display font-bold text-[clamp(1.5rem,5vw,2rem)] tracking-[-0.04em]">{t.guarantees.title}</h2>
          <p className="text-sm t-dark-muted mt-2 leading-[1.55] max-w-xl">{t.guarantees.sub}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {t.guarantees.items.map((g, idx) => (
            <div key={idx} className="reveal t-card rounded-[18px] p-6 flex items-start gap-3.5">
              <span className="w-[38px] h-[38px] rounded-full t-c5 grid place-items-center shrink-0 text-base" aria-hidden="true">{g.icon}</span>
              <div>
                <h3 className="font-bold text-[0.95rem] mb-1">{g.title}</h3>
                <p className="text-[0.8rem] opacity-65 leading-[1.55]">{g.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="px-4 md:px-8 pt-6 flex flex-col gap-2">
        <div className="reveal t-c3 rounded-[22px] p-7">
          <div className="t-kicker text-[0.72rem] mb-3" style={{ borderColor: 'rgba(0,0,0,.2)', color: 'inherit' }}>{t.faq.kicker}</div>
          <h2 className="t-display font-bold text-[clamp(1.5rem,5vw,2rem)] tracking-[-0.04em]">
            {t.faq.title} {t.faq.titleHl}
          </h2>
          <p className="text-sm opacity-70 mt-2">{t.faq.sub}</p>
          <Link href={`${basePath}/faq`} className="inline-flex items-center gap-1.5 font-bold text-[0.85rem] mt-3 hover:gap-2.5 transition-all">
            {t.faq.viewFull} <ArrowIcon />
          </Link>
        </div>
        {t.faq.items.map((faq, idx) => (
          <div key={idx} className="reveal t-card rounded-[18px] overflow-hidden">
            <button
              type="button"
              onClick={() => setActiveFaqId(activeFaqId === idx ? null : idx)}
              aria-expanded={activeFaqId === idx}
              className="w-full text-start px-5 py-4.5 flex justify-between items-center gap-3 font-bold text-[0.95rem] cursor-pointer py-4"
            >
              <span>{faq.question}</span>
              <span className={`text-xl font-normal shrink-0 transition-transform ${activeFaqId === idx ? 'rotate-45' : ''}`} aria-hidden="true">+</span>
            </button>
            {activeFaqId === idx && (
              <p className="px-5 pb-5 text-[0.85rem] leading-[1.65] opacity-70">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* COMPARATIF */}
      <div className="px-4 md:px-8 pt-6">
        <div className="reveal t-c1 rounded-[22px] p-7 mb-2">
          <div className="t-kicker text-[0.72rem] mb-3" style={{ borderColor: 'rgba(255,255,255,.3)', color: '#fff' }}>{t.comparison.kicker}</div>
          <h2 className="t-display font-bold text-[clamp(1.5rem,5vw,2rem)] tracking-[-0.04em]">
            {t.comparison.title} {t.comparison.titleHl}
          </h2>
          <p className="text-sm opacity-70 mt-2 leading-[1.55] max-w-xl">{t.comparison.sub}</p>
        </div>
        <div className="reveal t-card rounded-[22px] overflow-auto">
          <table className="w-full border-collapse text-[0.82rem] min-w-[560px]">
            <thead>
              <tr>
                <th scope="col" className="p-4 text-start text-[0.78rem] uppercase tracking-wide opacity-55 border-b t-line-soft">{t.comparison.colCriteria}</th>
                <th scope="col" className="p-4 text-start text-[0.78rem] uppercase tracking-wide t-c5 rounded-t-[14px] border-b t-line-soft">{t.comparison.colUs}</th>
                <th scope="col" className="p-4 text-start text-[0.78rem] uppercase tracking-wide opacity-55 border-b t-line-soft">{t.comparison.colGeneric}</th>
                <th scope="col" className="p-4 text-start text-[0.78rem] uppercase tracking-wide opacity-55 border-b t-line-soft">{t.comparison.colSolo}</th>
              </tr>
            </thead>
            <tbody>
              {t.comparison.rows.map((crit, idx) => (
                <tr key={idx}>
                  <th scope="row" className="p-4 text-start font-bold border-b t-line-soft">{crit.name}</th>
                  <td className="p-4 font-bold t-green-text border-b t-line-soft" style={{ background: 'rgba(168,85,247,.08)' }}>{crit.russtudy}</td>
                  <td className="p-4 t-orange-text font-semibold border-b t-line-soft">{crit.competitors}</td>
                  <td className="p-4 opacity-50 border-b t-line-soft">{crit.solo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link href={`${basePath}/comparatif`} className="inline-flex items-center gap-1.5 font-bold text-[0.85rem] mt-3 hover:gap-2.5 transition-all">
          {t.comparison.viewFull} <ArrowIcon />
        </Link>
      </div>

      {/* CTA FINAL */}
      <div className="px-4 md:px-8 pt-6">
        <div className="reveal t-card-dark rounded-[22px] px-6 py-9 text-center">
          <div className="t-kicker t-kicker-dark text-[0.72rem] mb-3.5 mx-auto" style={{ display: 'inline-block' }}>{copy.finalKicker}</div>
          <h2 className="t-display font-bold text-[clamp(1.7rem,6vw,2.8rem)] tracking-[-0.04em] leading-[1.1] mb-2.5">
            {copy.finalTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 max-w-2xl mx-auto mb-6 text-start">
            {copy.offerFeatures.map((f) => (
              <div key={f.title} className="flex items-start gap-2 bg-white/[.06] rounded-[14px] p-3.5">
                <CheckCircle2 className="w-4 h-4 t-green-text shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="font-bold text-[0.82rem] leading-tight">{f.title}</div>
                  <div className="text-[0.72rem] opacity-60 leading-tight">{f.text}</div>
                </div>
              </div>
            ))}
          </div>
          <button type="button" onClick={openPopup} className="t-btn-primary font-bold text-[0.95rem] px-9 py-4 cursor-pointer hover:scale-[1.02] transition-transform">
            {copy.offerCta}
          </button>
          <p className="text-[0.72rem] opacity-45 mt-3">{copy.offerDisclaimer}</p>
        </div>
      </div>

      {/* RESSOURCES CONNEXES */}
      <nav aria-label="resources" className="px-4 md:px-8 pt-6">
        <ul className="flex flex-wrap gap-2 justify-center">
          {RESOURCE_LINKS.map((r) => (
            <li key={r.path}>
              <Link href={`${basePath}${r.path}`} className="t-chip inline-block text-[0.78rem] font-semibold px-3 py-1.5 hover:opacity-80 transition-opacity">
                {r.label[lang]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="pt-6">
        <SiteFooter lang={lang} />
      </div>

      {isOpen && (
        <GuidePopup lang={lang} copy={popupCopy} perks={perks} onClose={() => setIsOpen(false)} />
      )}
    </div>
  );
}
