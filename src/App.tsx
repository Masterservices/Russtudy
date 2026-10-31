'use client';

import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ShieldCheck } from 'lucide-react';

import { Lang, translations } from './i18n';
import { basePathFor } from './pages-templates/basePath';
import { WHY_CARD_PATHS } from './constants/internalLinks';
import { PROGRAM_CARD_SLUGS } from './content/filieres/registry';
import { getFiliereFacts } from './content/filieres/facts';
import { UNIVERSITY_SLUGS } from './content/universites/registry';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import PixelArtCard from './components/PixelArtCard';
import BudgetSimulator from './components/BudgetSimulator';
import BookingCalendar from './components/BookingCalendar';

/* Composants sous la ligne de flottaison (ou a fond de secours identique
   deja en place, comme le hero) : charges en differe */
const WebGLHero = lazy(() => import('./components/WebGLHero'));
const TunnelCanvas = lazy(() => import('./components/TunnelCanvas'));
const ProgramBgCanvas = lazy(() => import('./components/ProgramBgCanvas'));
const FunnelModal = lazy(() => import('./components/VideoPopupModal'));
const CandidatureModal = lazy(() => import('./components/CandidatureModal'));

/* Styles fixes des cartes programmes (les textes viennent de i18n) */
/* Un style par carte, dans l'ordre de PROGRAM_CARD_SLUGS. Médecine dentaire
   reprend un bleu-vert clinique, distinct de l'ambre de la pharmacie voisine
   pour que les deux cartes ne se confondent pas. */
const PROGRAM_STYLE = [
  { bodyClass: 't-c1', linkColor: '#FBBB21', canvasColorStart: '#0a2a6e', canvasColorEnd: '#1a4fcc' },
  { bodyClass: 't-c2', linkColor: '#0A0A0A', canvasColorStart: '#7c2600', canvasColorEnd: '#e05a00' },
  { bodyClass: 't-c3', linkColor: '#0A0A0A', canvasColorStart: '#5a4500', canvasColorEnd: '#b88a00' },
  { bodyClass: 't-c4', linkColor: '#0A0A0A', canvasColorStart: '#00463f', canvasColorEnd: '#00998a' },
  { bodyClass: 't-c5', linkColor: '#0A0A0A', canvasColorStart: '#3b006b', canvasColorEnd: '#8400d4' },
];

const WHY_CARD_STYLE = ['t-c1', 't-c3', 't-c2', 't-c4'];
const PROCESS_STEP_STYLE = ['t-card', 't-c5', 't-c3', 't-c2', 't-c4'];
const TESTIMONIAL_STYLE = ['t-c1', 't-c2', 't-c4'];

/* Photos réelles vérifiées */
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

/* Portraits réels des témoignages */
const TESTIMONIAL_AVATARS = [
  'photo-1500648767791-00dcc994a43e',
  'photo-1494790108377-be9c29b29330',
  'photo-1506794778202-cad84cf45f1d',
];
const avatarUrl = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=96&h=96&q=60`;

const ArrowIcon = () => <span aria-hidden="true">↗</span>;

export default function App({ initialLang }: { initialLang: Lang }) {
  /* Langue pilotée par l'URL (/, /en, /ar, /ru) — voir SiteHeader pour le sélecteur */
  const [lang, setLang] = useState<Lang>(initialLang);
  const [prevInitialLang, setPrevInitialLang] = useState<Lang>(initialLang);
  if (prevInitialLang !== initialLang) {
    setPrevInitialLang(initialLang);
    setLang(initialLang);
  }

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    try { localStorage.setItem('rs_lang', lang); } catch { /* non bloquant */ }
  }, [lang]);

  // Modal / funnel states
  const [isFunnelOpen, setIsFunnelOpen] = useState(false);
  const [isCandidatureModalOpen, setIsCandidatureModalOpen] = useState(false);
  const [showGuideTab, setShowGuideTab] = useState(false);

  // FAQ Accordion State
  const [activeFaqId, setActiveFaqId] = useState<number | null>(null);

  // Interactive Candidate Status Tracker State
  const [trackerInputId, setTrackerInputId] = useState('');
  const [trackedDossier, setTrackedDossier] = useState<{
    id: string;
    nom: string;
    filiere: string;
    status: string;
    stepIndex: number;
  } | null>(null);
  const [trackerError, setTrackerError] = useState('');

  const heroBoxRef = useRef<HTMLDivElement | null>(null);

  /* Funnel V2 : ouverture au premier défilement, une fois par session,
     puis onglet flottant « Guide gratuit » */
  useEffect(() => {
    try {
      if (sessionStorage.getItem('rs_funnel_seen') === '1') {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- lecture sessionStorage possible uniquement côté client, après hydratation
        setShowGuideTab(true);
        return;
      }
    } catch { /* on tente quand même */ }

    const onScroll = () => {
      if (window.scrollY > 120) {
        try { sessionStorage.setItem('rs_funnel_seen', '1'); } catch { /* non bloquant */ }
        setIsFunnelOpen(true);
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeFunnel = () => {
    setIsFunnelOpen(false);
    setShowGuideTab(true);
  };

  /* Révélation au défilement (V2) avec filet de sécurité :
     les éléments restent visibles si l'observer ne tire pas. */
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

  /* Tilt 3D des cartes (V2, pointeur fin uniquement) */
  useEffect(() => {
    if (!window.matchMedia('(pointer:fine)').matches) return;

    const cleanups: (() => void)[] = [];
    document.querySelectorAll('.tilt-card').forEach((element) => {
      const el = element as HTMLElement;
      const handleMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(600px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg) scale(1.02)`;
      };
      const handleLeave = () => { el.style.transform = ''; };
      el.addEventListener('mousemove', handleMove);
      el.addEventListener('mouseleave', handleLeave);
      cleanups.push(() => {
        el.removeEventListener('mousemove', handleMove);
        el.removeEventListener('mouseleave', handleLeave);
      });
    });
    return () => cleanups.forEach((fn) => fn());
  }, [lang]);

  /* Parallax souris du hero (V2) */
  useEffect(() => {
    if (!window.matchMedia('(pointer:fine)').matches) return;
    const onMove = (e: MouseEvent) => {
      const box = heroBoxRef.current;
      if (!box) return;
      const mx = (e.clientX / window.innerWidth - 0.5) * 10;
      const my = (e.clientY / window.innerHeight - 0.5) * 7;
      box.style.transform = `perspective(900px) rotateY(${mx}deg) rotateX(${-my}deg)`;
    };
    document.addEventListener('mousemove', onMove);
    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  // Interactive Status Checker Action
  const handleTrackDossier = (e: React.FormEvent) => {
    e.preventDefault();
    setTrackerError('');
    setTrackedDossier(null);

    const inputClean = trackerInputId.trim().toUpperCase();
    if (!inputClean) {
      setTrackerError(t.tracker.invalid);
      return;
    }

    try {
      const localDataStr = localStorage.getItem('rs_candidate_data');
      const localId = localStorage.getItem('rs_last_id');

      if (localId && localId.toUpperCase() === inputClean && localDataStr) {
        const localData = JSON.parse(localDataStr);
        setTrackedDossier({
          id: localId,
          nom: localData.nomComplet || t.tracker.defaultName,
          filiere: localData.filiere || t.programs.items[0].name,
          status: t.tracker.statusLocal,
          stepIndex: 1
        });
      } else {
        setTrackedDossier({
          id: inputClean,
          nom: t.tracker.defaultName,
          filiere: t.tracker.defaultField,
          status: t.tracker.statusRemote,
          stepIndex: 2
        });
      }
    } catch {
      setTrackerError(t.tracker.error);
    }
  };

  return (
    <div className="t-page min-h-screen relative overflow-x-hidden font-sans">

      {/* 0. HEADER : bandeau d'urgence + nav (partagé, voir components/SiteHeader.tsx) */}
      <SiteHeader lang={lang} onApplyClick={() => setIsCandidatureModalOpen(true)} />

      {/* 1. HERO V2 : carte encastrée + WebGL + parallax souris */}
      <section id="hero" className="pt-[124px] px-4 md:px-8">
        <div
          ref={heroBoxRef}
          className="reveal relative rounded-[22px] overflow-hidden h-[72svh] min-h-[480px] bg-black text-white will-change-transform"
        >
          <Suspense fallback={null}>
            <WebGLHero />
          </Suspense>

          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-1.5 mb-5 animate-float">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22C55E]"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider">• {t.hero.badge}</span>
            </div>

            <h1 className="t-display t-h1 font-bold text-[clamp(2.2rem,9vw,5.2rem)] tracking-[-0.04em] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.4)]">
              {t.hero.title1}<br />{t.hero.title2}
            </h1>
            <p className="text-[clamp(0.9rem,3vw,1.15rem)] text-white/85 mt-3 font-medium max-w-xl leading-relaxed drop-shadow">
              {t.hero.subtitle}
            </p>

            {/* Badges de réassurance (contenu V5) */}
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-1.5 mt-5">
              {t.hero.badges.map((badge, idx) => (
                <span key={idx} className="text-[11px] font-bold text-white/80">
                  {badge.icon} {badge.text}
                </span>
              ))}
            </div>
          </div>

          {/* CTA noir pilule (V2) */}
          <div className="absolute bottom-5 inset-x-0 z-20 flex flex-col sm:flex-row items-center justify-center gap-2 px-4">
            <button
              onClick={() => setIsCandidatureModalOpen(true)}
              className="bg-black text-white rounded-full px-8 py-4 font-bold text-[0.95rem] flex items-center gap-3 hover:scale-[1.03] transition-transform cursor-pointer"
            >
              {t.hero.ctaPrimary}
              <span className="w-[26px] h-[26px] rounded-full bg-white text-black grid place-items-center text-xs">↗</span>
            </button>
            <button
              onClick={() => setIsFunnelOpen(true)}
              className="bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/25 rounded-full px-6 py-3.5 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              {t.hero.ctaSecondary}
            </button>
          </div>
        </div>
      </section>

      {/* 2. TICKER A (pilule bleue V2) */}
      <div className="t-ticker-a reveal overflow-hidden mx-4 md:mx-8 mt-2.5 rounded-full">
        <div className="animate-ticker hover:animate-ticker-fast pause-on-hover">
          {Array(4).fill(t.tickerA).flat().map((txt, idx) => (
            <span key={idx} className="font-bold text-sm py-3 px-4 tracking-wider uppercase whitespace-nowrap">
              {txt}
            </span>
          ))}
        </div>
      </div>

      {/* 3. STATS (3 cartes noires V2) */}
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

      {/* 4. BANDEAU MINISTÉRIEL (contenu V5, carte blanche V2) */}
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

      {/* 5. POURQUOI (cartes V2, contenu V5) */}
      <div id="pourquoi" className="scroll-mt-32"></div>
      <div className="px-4 md:px-8 pt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {t.why.cards.map((card, idx) => (
          <Link
            key={idx}
            href={`${basePathFor(lang)}${WHY_CARD_PATHS[idx] ?? '/comparatif'}`}
            className={`reveal tilt-card rounded-[22px] p-7 relative overflow-hidden block ${WHY_CARD_STYLE[idx]} ${idx === 0 || idx === 3 ? 'sm:col-span-2' : ''}`}
          >
            <div className="t-kicker text-[0.72rem] mb-4" style={{ borderColor: 'currentColor', color: 'inherit', opacity: 0.85 }}>{card.tag}</div>
            <h2 className="t-display font-bold text-[clamp(1.6rem,6vw,2.6rem)] tracking-[-0.04em] leading-[1.1]">{card.title}</h2>
            <p className="text-sm leading-[1.65] mt-2.5 opacity-80 max-w-xl">{card.text}</p>
            <div className="v2-arrow"><ArrowIcon /></div>
          </Link>
        ))}
      </div>

      {/* 6. PIÈGES À ÉVITER (contenu V5, cartes noires) */}
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

      {/* 7. TUNNEL (canvas V5 dans l'écrin V2) + COMMUNAUTÉ */}
      <div className="px-4 md:px-8 pt-6 grid grid-cols-1 lg:grid-cols-2 gap-2 items-stretch">
        <div className="reveal t-card relative overflow-hidden rounded-[22px] min-h-[360px]">
          <div className="absolute inset-0 opacity-90">
            <Suspense fallback={null}>
              <TunnelCanvas />
            </Suspense>
          </div>
          <div className="absolute bottom-0 inset-x-0 p-6" style={{ background: 'linear-gradient(to top, rgba(240,235,227,.95) 60%, transparent)' }}>
            <h3 className="t-display font-bold text-xl tracking-[-0.03em]">{t.tunnel.title} {t.tunnel.titleHl}</h3>
            <p className="text-[0.83rem] opacity-60 mt-1 leading-relaxed">{t.tunnel.text}</p>
            <button onClick={() => setIsCandidatureModalOpen(true)} className="t-btn-primary font-bold text-xs px-5 py-2.5 mt-3 cursor-pointer">
              {t.tunnel.cta} →
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Link href={`${basePathFor(lang)}/villes`} className="reveal t-c4 tilt-card rounded-[22px] p-7 flex-1 block">
            <div className="t-kicker text-[0.72rem] mb-4" style={{ borderColor: 'currentColor', color: 'inherit', opacity: 0.85 }}>🇹🇳 {t.tunnel.communitySub}</div>
            <h2 className="t-display font-bold text-2xl tracking-[-0.03em]">{t.tunnel.communityTitle}</h2>
            <p className="text-sm leading-[1.65] mt-2.5 opacity-80">{t.tunnel.communityText}</p>
            <div className="v2-arrow"><ArrowIcon /></div>
          </Link>
          <Link href={`${basePathFor(lang)}/guide`} className="reveal t-c5 tilt-card rounded-[22px] p-7 flex-1 relative block">
            <div className="t-kicker text-[0.72rem] mb-4" style={{ borderColor: 'currentColor', color: 'inherit', opacity: 0.85 }}>🇷🇺 {t.tunnel.prepSub}</div>
            <h2 className="t-display font-bold text-2xl tracking-[-0.03em]">{t.tunnel.prepTitle}</h2>
            <p className="text-sm leading-[1.65] mt-2.5 opacity-80">{t.tunnel.prepText}</p>
            <div className="v2-arrow"><ArrowIcon /></div>
          </Link>
        </div>
      </div>

      {/* 8. E-PLATEFORME (pixel cards V5 = style V2) */}
      <div className="px-4 md:px-8 pt-6">
        <div className="reveal t-card p-6 rounded-[22px] mb-2 text-center">
          <div className="t-kicker text-[0.72rem] mb-3 mx-auto">{t.platform.kicker}</div>
          <h2 className="t-display font-bold text-[clamp(1.5rem,5vw,2.2rem)] tracking-[-0.04em]">
            {t.platform.title} <span className="t-hl">{t.platform.titleHl}</span>
          </h2>
          <p className="text-sm t-muted mt-2 leading-relaxed max-w-2xl mx-auto">{t.platform.sub}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="reveal"><PixelArtCard artType="cap" title={t.platform.card1Title} description={t.platform.card1Text} /></div>
          <div className="reveal"><PixelArtCard artType="star" title={t.platform.card2Title} description={t.platform.card2Text} /></div>
        </div>
      </div>

      {/* 9. TICKER B (pilule jaune V2) */}
      <div className="t-ticker-b reveal overflow-hidden mx-4 md:mx-8 mt-6 rounded-full">
        <div className="animate-ticker-reverse hover:animate-ticker-fast pause-on-hover">
          {Array(4).fill(t.tickerB).flat().map((txt, idx) => (
            <span key={idx} className="font-bold text-sm py-3 px-4 tracking-wider uppercase whitespace-nowrap">
              {txt}
            </span>
          ))}
        </div>
      </div>

      {/* 10. PROCESSUS (V2 proc-items, contenu V5) */}
      <div id="processus" className="scroll-mt-32"></div>
      <div className="px-4 md:px-8 pt-6 flex flex-col gap-2">
        <div className="reveal t-c1 rounded-[22px] p-7 flex items-center justify-between">
          <div>
            <div className="t-kicker text-[0.72rem] mb-3" style={{ borderColor: 'rgba(255,255,255,.3)', color: '#fff' }}>{t.process.kicker}</div>
            <h2 className="t-display font-bold text-[clamp(1.5rem,5vw,2rem)] tracking-[-0.04em]">
              {t.process.title} {t.process.titleHl}
            </h2>
            <p className="text-sm opacity-70 mt-2 leading-relaxed max-w-xl">{t.process.sub}</p>
            <Link
              href={`${basePathFor(lang)}/visa`}
              className="inline-flex items-center gap-1.5 font-bold text-[0.85rem] mt-3 hover:gap-2.5 transition-all"
              style={{ color: '#fff' }}
            >
              {t.process.viewVisa} <ArrowIcon />
            </Link>
          </div>
          <ChevronDown className="w-7 h-7 shrink-0 t-gold-text" />
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

      {/* 11. PROGRAMMES (cartes V2, contenu V5 complet) */}
      <div id="programmes" className="scroll-mt-32"></div>
      <div className="px-4 md:px-8 pt-6">
        <div className="reveal t-card p-6 rounded-[22px] mb-2">
          <div className="t-kicker text-[0.72rem] mb-3">{t.programs.kicker}</div>
          <h2 className="t-display font-bold text-[clamp(1.5rem,5vw,2.2rem)] tracking-[-0.04em]">
            {t.programs.title} <span className="t-hl">{t.programs.titleHl}</span>
          </h2>
          <p className="text-sm t-muted mt-2 leading-relaxed max-w-2xl">{t.programs.sub}</p>
          <Link
            href={`${basePathFor(lang)}/filieres`}
            className="inline-flex items-center gap-1.5 font-bold text-[0.85rem] mt-3 hover:gap-2.5 transition-all"
          >
            {t.programs.viewAll} <ArrowIcon />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {PROGRAM_CARD_SLUGS.map((slug, idx) => {
            const prog = getFiliereFacts(lang, slug);
            return (
            <div key={slug} className="reveal rounded-[22px] overflow-hidden hover:scale-[1.015] transition-transform will-change-transform">
              <div className="h-[200px] relative overflow-hidden">
                <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
                  <ProgramBgCanvas colorStart={PROGRAM_STYLE[idx].canvasColorStart} colorEnd={PROGRAM_STYLE[idx].canvasColorEnd} />
                </Suspense>
                <Link
                  href={`${basePathFor(lang)}/filieres/${slug}`}
                  className="absolute inset-0 flex flex-col justify-end p-4"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,.72), transparent 50%)' }}
                >
                  <div className="flex gap-1.5 flex-wrap mb-1.5">
                    <span className="bg-white/20 text-white rounded-full px-2.5 py-0.5 text-[0.68rem] font-semibold backdrop-blur-sm">{prog.tag}</span>
                    <span className="bg-white/20 text-white rounded-full px-2.5 py-0.5 text-[0.68rem] font-semibold backdrop-blur-sm">{prog.duration}</span>
                    <span className="bg-white/20 text-white rounded-full px-2.5 py-0.5 text-[0.68rem] font-semibold backdrop-blur-sm">{prog.price}</span>
                  </div>
                  <h3 className="text-white text-[1.35rem] font-bold tracking-[-0.03em]">{prog.name}</h3>
                </Link>
              </div>
              <div className={`p-5 ${PROGRAM_STYLE[idx].bodyClass}`}>
                <ul className="space-y-1 text-[0.85rem] opacity-85">
                  {prog.details.map((det, i) => (
                    <li key={i}>✓ {det}</li>
                  ))}
                </ul>
                <button
                  onClick={() => setIsCandidatureModalOpen(true)}
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

      {/* 12. UNIVERSITÉS (header vert + chips blanches V2, contenu V5) */}
      <div className="reveal px-4 md:px-8 pt-6">
        <div className="t-c4 rounded-[22px] p-7 mb-2 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <div className="t-kicker text-[0.72rem] mb-3" style={{ borderColor: 'rgba(0,0,0,.2)', color: 'inherit' }}>{t.universities.kicker}</div>
            <h2 className="t-display font-bold text-[clamp(1.5rem,5vw,2rem)] tracking-[-0.04em]">{t.universities.title}</h2>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
            <Link
              href={`${basePathFor(lang)}/universites`}
              className="inline-flex items-center gap-1.5 font-bold text-[0.85rem] hover:gap-2.5 transition-all"
            >
              {t.universities.viewAll} <ArrowIcon />
            </Link>
            <Link
              href={`${basePathFor(lang)}/villes`}
              className="inline-flex items-center gap-1.5 font-bold text-[0.78rem] opacity-80 hover:gap-2.5 transition-all"
            >
              {t.universities.viewCities} <ArrowIcon />
            </Link>
          </div>
        </div>
        <div className="overflow-hidden py-0.5">
          <div className="animate-ticker pause-on-hover flex gap-2">
            {Array(3).fill(t.universities.items).flat().map((univ, idx) => (
              <Link key={idx} href={`${basePathFor(lang)}/universites/${UNIVERSITY_SLUGS[idx % UNIVERSITY_SLUGS.length]}`} className="v2-uni-chip">
                <span className="bg-black text-white rounded-full px-2 py-0.5 text-[0.62rem] font-bold tracking-wide">{univ.rank}</span>
                <span className="font-semibold text-[0.83rem]">{univ.name} · {univ.city}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 13. GALERIE PHOTOS RÉELLES (contenu V5) */}
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
                alt={t.gallery.items[idx].alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                loading="lazy"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent text-white text-[10px] md:text-xs font-bold px-3 py-2.5">
                {t.gallery.items[idx].caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* 14. SIMULATEUR DE BUDGET (contenu V5) */}
      <div id="simulateur" className="scroll-mt-32"></div>
      <div className="px-4 md:px-8 pt-6">
        <div className="reveal t-c3 rounded-[22px] p-7 mb-2">
          <div className="t-kicker text-[0.72rem] mb-3" style={{ borderColor: 'rgba(0,0,0,.2)', color: 'inherit' }}>{t.simulator.kicker}</div>
          <h2 className="t-display font-bold text-[clamp(1.5rem,5vw,2.2rem)] tracking-[-0.04em]">
            {t.simulator.title} {t.simulator.titleHl}
          </h2>
          <p className="text-sm opacity-70 mt-2 leading-relaxed max-w-2xl">{t.simulator.sub}</p>
          <Link
            href={`${basePathFor(lang)}/cout-des-etudes`}
            className="inline-flex items-center gap-1.5 font-bold text-[0.85rem] mt-3 hover:gap-2.5 transition-all"
          >
            {t.simulator.viewFull} <ArrowIcon />
          </Link>
        </div>
        <div className="reveal">
          <BudgetSimulator t={t} lang={lang} />
        </div>
      </div>

      {/* 15. SUIVI DE DOSSIER (contenu V5) */}
      <div id="candidat" className="scroll-mt-32"></div>
      <div className="px-4 md:px-8 pt-6 max-w-3xl mx-auto w-full">
        <div className="reveal t-card t-card-shadow p-7 relative overflow-hidden">
          <div className="absolute top-0 end-0 t-c5 text-[9px] font-bold uppercase tracking-widest px-4 py-1 rounded-bl-[12px]">
            {t.tracker.badge}
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-[38px] h-[38px] rounded-full grid place-items-center t-c5 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <div>
              <h3 className="t-display font-bold text-xl leading-tight tracking-[-0.02em]">{t.tracker.title}</h3>
              <p className="text-xs t-muted mt-0.5">{t.tracker.sub}</p>
            </div>
          </div>

          <form onSubmit={handleTrackDossier} className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder={t.tracker.placeholder}
              value={trackerInputId}
              onChange={(e) => setTrackerInputId(e.target.value)}
              className="t-input flex-1 px-4 py-2.5 font-mono text-sm"
            />
            <button type="submit" className="t-btn-dark font-bold py-2.5 px-6 text-xs uppercase cursor-pointer">
              {t.tracker.search}
            </button>
          </form>

          {trackerError && <p className="t-red-text text-xs font-bold mt-2">{trackerError}</p>}

          {trackedDossier && (
            <div className="mt-6 border-t t-line-soft pt-5 space-y-5">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <span className="text-[10px] t-muted font-bold uppercase tracking-wider block">{t.tracker.idLabel} : {trackedDossier.id}</span>
                  <span className="text-base font-bold">{trackedDossier.nom} · {trackedDossier.filiere}</span>
                </div>
                <span className="t-c3 text-[10px] font-bold px-3 py-1 rounded-full uppercase">{t.tracker.validated}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                {t.tracker.steps.map((step, idx) => {
                  const active = trackedDossier.stepIndex >= (idx <= 1 ? 1 : idx);
                  return (
                    <div key={idx} className={`p-3 text-xs ${active ? 't-chip-active rounded-[14px]' : 't-chip rounded-[14px] opacity-60'}`}>
                      <div className="font-bold">{step.label}</div>
                      <div className="text-[10px] opacity-80 mt-1">{step.desc}</div>
                    </div>
                  );
                })}
              </div>

              <div className="t-card p-4 text-xs" style={{ borderColor: 'var(--green)' }}>
                <strong>{t.tracker.statusLive}</strong> {trackedDossier.status}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 16. TÉMOIGNAGES (cartes V2 + photos réelles) */}
      <div id="temoignages" className="scroll-mt-32"></div>
      <div className="px-4 md:px-8 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-2">
        {t.testimonials.items.map((testi, idx) => (
          <div key={idx} className={`reveal tilt-card rounded-[22px] p-7 ${TESTIMONIAL_STYLE[idx]}`}>
            <div className="text-base mb-3.5" aria-label="5/5">★★★★★</div>
            <p className="text-[0.98rem] leading-[1.65] font-medium italic">{testi.text}</p>
            <div className="flex items-center gap-3 mt-5">
              <Image
                src={avatarUrl(TESTIMONIAL_AVATARS[idx])}
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

      {/* 17. GARANTIES (section V2) */}
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

      {/* 18. RENDEZ-VOUS (contenu V5) */}
      <div id="rendezvous" className="scroll-mt-32"></div>
      <div className="px-4 md:px-8 pt-6">
        <div className="reveal t-c5 rounded-[22px] p-7 mb-2">
          <div className="t-kicker text-[0.72rem] mb-3" style={{ borderColor: 'rgba(0,0,0,.2)', color: 'inherit' }}>{t.booking.kicker}</div>
          <h2 className="t-display font-bold text-[clamp(1.5rem,5vw,2.2rem)] tracking-[-0.04em]">
            {t.booking.title} {t.booking.titleHl}
          </h2>
          <p className="text-sm opacity-70 mt-2 leading-relaxed max-w-2xl">{t.booking.sub}</p>
        </div>
        <div className="reveal">
          <BookingCalendar t={t} lang={lang} />
        </div>
      </div>

      {/* 19. FAQ (header jaune + items blancs V2, contenu V5) */}
      <div id="faq" className="scroll-mt-32"></div>
      <div className="px-4 md:px-8 pt-6 flex flex-col gap-2">
        <div className="reveal t-c3 rounded-[22px] p-7">
          <div className="t-kicker text-[0.72rem] mb-3" style={{ borderColor: 'rgba(0,0,0,.2)', color: 'inherit' }}>{t.faq.kicker}</div>
          <h2 className="t-display font-bold text-[clamp(1.5rem,5vw,2rem)] tracking-[-0.04em]">
            {t.faq.title} {t.faq.titleHl}
          </h2>
          <p className="text-sm opacity-70 mt-2">{t.faq.sub}</p>
          <Link
            href={`${basePathFor(lang)}/faq`}
            className="inline-flex items-center gap-1.5 font-bold text-[0.85rem] mt-3 hover:gap-2.5 transition-all"
          >
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

      {/* 20. COMPARATIF (table blanche V2, contenu V5 : 8 critères) */}
      <div id="comparatif" className="scroll-mt-32"></div>
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
        <Link
          href={`${basePathFor(lang)}/comparatif`}
          className="inline-flex items-center gap-1.5 font-bold text-[0.85rem] mt-3 hover:gap-2.5 transition-all"
        >
          {t.comparison.viewFull} <ArrowIcon />
        </Link>
      </div>

      {/* 21. CTA FINAL (boîte noire V2 : nom + WhatsApp + filière) */}
      <div id="contact" className="px-4 md:px-8 pt-6">
        <div className="reveal t-card-dark rounded-[22px] px-6 py-9 text-center">
          <div className="t-kicker t-kicker-dark text-[0.72rem] mb-3.5 mx-auto" style={{ display: 'inline-block' }}>{t.finalCta.kicker}</div>
          <h2 className="t-display font-bold text-[clamp(1.7rem,6vw,2.8rem)] tracking-[-0.04em] leading-[1.1] mb-2.5">
            {t.finalCta.title} <span className="t-accent-text">{t.finalCta.titleHl}</span>
          </h2>
          <p className="text-[0.88rem] opacity-45 leading-[1.65] mb-6 max-w-xl mx-auto">{t.finalCta.sub}</p>

          <form
            onSubmit={(e) => { e.preventDefault(); setIsCandidatureModalOpen(true); }}
            className="flex flex-col gap-2 max-w-md mx-auto"
          >
            <input
              type="text"
              required
              placeholder={t.finalCta.placeholder}
              className="bg-white/[.07] border-[1.5px] border-white/[.13] rounded-full px-5 py-3 text-white text-[0.88rem] outline-none focus:border-[#A855F7] transition-colors placeholder:text-white/30"
            />
            <input
              type="tel"
              placeholder={t.candidatureModal.whatsappLabel.replace(' *', '')}
              className="bg-white/[.07] border-[1.5px] border-white/[.13] rounded-full px-5 py-3 text-white text-[0.88rem] outline-none focus:border-[#A855F7] transition-colors placeholder:text-white/30"
            />
            <select
              className="bg-white/[.07] border-[1.5px] border-white/[.13] rounded-full px-5 py-3 text-white text-[0.88rem] outline-none focus:border-[#A855F7] transition-colors appearance-none"
              defaultValue=""
            >
              <option value="" disabled style={{ background: '#111' }}>{t.candidatureModal.fieldLabel}</option>
              {t.candidatureModal.fieldOptions.map((opt) => (
                <option key={opt} style={{ background: '#111' }}>{opt}</option>
              ))}
            </select>
            <button type="submit" className="t-btn-primary w-full font-bold text-[0.95rem] py-4 cursor-pointer">
              {t.finalCta.cta}
            </button>
          </form>

          <div className="flex flex-wrap justify-center gap-3.5 mt-4">
            <span className="v2-trust text-[0.72rem] opacity-60 flex items-center gap-1.5">{t.finalCta.reassurance}</span>
          </div>
        </div>
      </div>

      {/* 22. FOOTER (partagé, voir components/SiteFooter.tsx) */}
      <SiteFooter lang={lang} />

      {/* Onglet flottant guide gratuit (V2) */}
      {showGuideTab && !isFunnelOpen && (
        <button type="button" onClick={() => { setShowGuideTab(false); setIsFunnelOpen(true); }} className="v2-guide-tab cursor-pointer">
          {t.funnel.guideTab}
        </button>
      )}

      {/* FUNNEL 4 ÉTAPES (V2) */}
      {isFunnelOpen && (
        <Suspense fallback={null}>
          <FunnelModal isOpen={isFunnelOpen} onClose={closeFunnel} t={t} lang={lang} />
        </Suspense>
      )}

      {/* MODALE CANDIDATURE (bottom-sheet V2) */}
      {isCandidatureModalOpen && (
        <Suspense fallback={null}>
          <CandidatureModal isOpen={isCandidatureModalOpen} onClose={() => setIsCandidatureModalOpen(false)} t={t} />
        </Suspense>
      )}

    </div>
  );
}
