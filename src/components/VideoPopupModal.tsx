import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Lang, Translation } from '../i18n';

/* ══════════════════════════════════════════════
   FUNNEL DE CONVERSION (repris de RustudyClaudeV2)
   Étape 1 : animation nocturne + email
   Étape 2 : guide PDF + ticket −25% (code GUIDE25)
   Étape 3 : prise de rendez-vous (Zoom → email, WhatsApp → numéro)
   Étape 4 : confirmation + lien WhatsApp
══════════════════════════════════════════════ */

interface FunnelModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translation;
  lang: Lang;
}

const WHATSAPP_NUMBER = '79964334489';
const PDF_PATH = '/assets/pdf/guide-gratuit-etudes-russie.pdf';
const SLOTS = ['09:00', '11:00', '14:00', '16:00', '18:00'];

/* Animation V2 : ciel nocturne, aurores boréales, skyline, neige, légendes en fondu */
function NightAnimCanvas({ captions }: { captions: string[][] }) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      cv.width = cv.clientWidth * dpr;
      cv.height = cv.clientHeight * dpr;
    };
    resize();
    window.addEventListener('resize', resize);

    const stars = Array.from({ length: 70 }, () => ({ x: Math.random(), y: Math.random() * 0.5, r: Math.random() * 1.1 + 0.4, ph: Math.random() * 6 }));
    const backline = Array.from({ length: 14 }, (_, i) => ({ x: i / 14, w: (1 / 14) * (0.8 + Math.random() * 0.4), h: 0.13 + Math.random() * 0.16 }));
    const frontline = Array.from({ length: 8 }, (_, i) => ({ x: i / 8, w: (1 / 8) * (0.7 + Math.random() * 0.5), h: 0.2 + Math.random() * 0.3, spire: Math.random() > 0.6 }));
    const windows = frontline.map(() => Array.from({ length: 10 }, () => ({ x: Math.random(), y: Math.random(), on: Math.random() > 0.3, ph: Math.random() * 6 })));
    const snow = Array.from({ length: 110 }, () => ({ x: Math.random(), y: Math.random(), d: Math.ceil(Math.random() * 3), ph: Math.random() * 6 }));

    const CAP_DUR = 3.8;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const start = performance.now();
    let prev = start;
    let raf = 0;

    const frame = (tNow: number) => {
      if (!reduceMotion) raf = requestAnimationFrame(frame);
      const elapsed = Math.max((tNow - start) / 1000, 0);
      const delta = Math.min(Math.max((tNow - prev) / 1000, 0), 0.05);
      prev = tNow;
      const w = cv.width, h = cv.height;
      if (!w || !h) { resize(); return; }

      const sky = ctx.createLinearGradient(0, 0, 0, h);
      sky.addColorStop(0, '#12081f');
      sky.addColorStop(0.45, '#1b2a6b');
      sky.addColorStop(0.8, '#2460E8');
      sky.addColorStop(1, '#0A0A0A');
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, w, h);

      stars.forEach((s) => {
        ctx.globalAlpha = 0.35 + Math.sin(elapsed * 1.8 + s.ph) * 0.3;
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(s.x * w, s.y * h, s.r * dpr * 0.7, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      const mx = w * 0.82, my = h * 0.2, mr = h * 0.07;
      const halo = ctx.createRadialGradient(mx, my, 0, mx, my, mr * 4);
      halo.addColorStop(0, 'rgba(240,235,227,.35)');
      halo.addColorStop(1, 'rgba(240,235,227,0)');
      ctx.fillStyle = halo;
      ctx.fillRect(mx - mr * 4, my - mr * 4, mr * 8, mr * 8);
      ctx.fillStyle = '#F0EBE3';
      ctx.beginPath();
      ctx.arc(mx, my, mr, 0, Math.PI * 2);
      ctx.fill();

      // aurores boréales
      ([['168,85,247', 0.16, 0.05], ['34,197,94', 0.24, 0.04], ['36,96,232', 0.32, 0.045]] as [string, number, number][]).forEach(([rgb, base, amp], k) => {
        ctx.beginPath();
        ctx.moveTo(0, h);
        for (let s = 0; s <= 40; s++) {
          const x = (w * s) / 40;
          const y = h * base + Math.sin((x / w) * 4 + elapsed * (0.5 + k * 0.2) + k * 2) * h * amp;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(w, 0);
        ctx.lineTo(0, 0);
        ctx.closePath();
        const grad = ctx.createLinearGradient(0, 0, 0, h * 0.5);
        grad.addColorStop(0, `rgba(${rgb},0)`);
        grad.addColorStop(1, `rgba(${rgb},.14)`);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      backline.forEach((b) => {
        ctx.fillStyle = 'rgba(20,25,55,.9)';
        ctx.fillRect(b.x * w, h - b.h * h - h * 0.12, b.w * w, b.h * h + h * 0.12);
      });

      frontline.forEach((b, i) => {
        const bw = b.w * w, bh = b.h * h, bx = b.x * w, by = h - bh;
        ctx.fillStyle = '#04040a';
        ctx.fillRect(bx, by, bw, bh);
        if (b.spire) {
          ctx.beginPath();
          ctx.moveTo(bx + bw * 0.5 - w * 0.004, by);
          ctx.lineTo(bx + bw * 0.5, by - h * 0.07);
          ctx.lineTo(bx + bw * 0.5 + w * 0.004, by);
          ctx.closePath();
          ctx.fill();
        }
        windows[i].forEach((win) => {
          const on = win.on && Math.sin(elapsed * 1.2 + win.ph) > -0.4;
          ctx.fillStyle = on ? 'rgba(251,187,33,.9)' : 'rgba(255,255,255,.05)';
          ctx.fillRect(bx + win.x * bw * 0.8 + bw * 0.1, by + win.y * bh * 0.7 + bh * 0.18, w * 0.005, h * 0.011);
        });
      });

      snow.forEach((p) => {
        p.y += (p.d * 0.1 + 0.06) * delta;
        if (p.y > 1) { p.y = -0.02; p.x = Math.random(); }
        const drift = Math.sin(elapsed * 0.8 + p.ph) * 0.008 * p.d;
        ctx.globalAlpha = 0.25 + p.d * 0.22;
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc((p.x + drift) * w, p.y * h, (p.d * 0.55 + 0.3) * dpr, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      // légendes marketing en fondu enchaîné
      const cyc = elapsed % (captions.length * CAP_DUR);
      const idx = Math.floor(cyc / CAP_DUR);
      const local = (cyc % CAP_DUR) / CAP_DUR;
      const fade = Math.min(local / 0.18, 1, (1 - local) / 0.18);
      const [line1, line2] = captions[idx];
      ctx.globalAlpha = Math.max(fade, 0);
      ctx.textAlign = 'center';
      ctx.shadowColor = 'rgba(0,0,0,.6)';
      ctx.shadowBlur = 12 * dpr;
      ctx.fillStyle = '#fff';
      ctx.font = `700 ${Math.round(w * 0.052)}px 'Space Grotesk','Tajawal',sans-serif`;
      ctx.fillText(line1, w * 0.5, h * 0.52);
      ctx.fillStyle = '#FBBB21';
      ctx.font = `600 ${Math.round(w * 0.03)}px 'Space Grotesk','Tajawal',sans-serif`;
      ctx.fillText(line2, w * 0.5, h * 0.52 + w * 0.05);
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    };
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, [captions]);

  return <canvas ref={ref} className="w-full h-full block" aria-hidden="true" />;
}

export default function FunnelModal({ isOpen, onClose, t, lang }: FunnelModalProps) {
  const f = t.funnel;

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [err1, setErr1] = useState(false);
  const [field, setField] = useState('');
  const [mode, setMode] = useState<'whatsapp' | 'zoom'>('whatsapp');
  const [dayIdx, setDayIdx] = useState<number | null>(null);
  const [slot, setSlot] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [err3, setErr3] = useState(false);
  const [refId, setRefId] = useState('');

  /* 10 prochains jours, localisés */
  const days = useMemo(() => {
    const locale = lang === 'ar' ? 'ar-TN' : lang === 'en' ? 'en-GB' : lang === 'ru' ? 'ru-RU' : 'fr-FR';
    const nameFmt = new Intl.DateTimeFormat(locale, { weekday: 'short' });
    const out: { name: string; num: number; full: string }[] = [];
    const today = new Date();
    for (let i = 1; i <= 10; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      out.push({
        name: nameFmt.format(d),
        num: d.getDate(),
        full: d.toLocaleDateString(locale, { day: '2-digit', month: '2-digit', year: 'numeric' }),
      });
    }
    return out;
  }, [lang]);

  // Fermeture directe : Échap
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const submitEmail = () => {
    if (!isValidEmail(email.trim())) { setErr1(true); return; }
    setErr1(false);
    try { localStorage.setItem('rs_guide_email', email.trim()); } catch { /* non bloquant */ }
    setStep(2);
  };

  const submitBooking = () => {
    const contactOk = mode === 'zoom' ? isValidEmail(email.trim()) : phone.trim().length > 0;
    if (!name.trim() || !contactOk || dayIdx === null || !slot) { setErr3(true); return; }
    setErr3(false);
    const id = `RDV-${new Date().getFullYear()}-${Math.floor(Math.random() * 900 + 100)}`;
    setRefId(id);
    try {
      localStorage.setItem('rs_booking', JSON.stringify({ name, phone, email, field, mode, day: days[dayIdx].full, slot, id }));
    } catch { /* non bloquant */ }
    setStep(4);
  };

  const fill = (tpl: string) =>
    tpl
      .replace('{day}', dayIdx !== null ? days[dayIdx].full : '')
      .replace('{slot}', slot ?? '')
      .replace('{ref}', refId)
      .replace('{field}', field || f.fieldTbd)
      .replace('{email}', email);

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fill(mode === 'zoom' ? f.waZoomMsg : f.waMsg))}`;

  const chip = (active: boolean) =>
    `px-4 py-2 text-[0.8rem] font-semibold cursor-pointer transition-all ${active ? 't-chip-active' : 't-chip'}`;

  return (
    <div
      className="fixed inset-0 bg-black/65 backdrop-blur-sm flex items-center justify-center z-[850] p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className="v2-fn-sheet relative shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="✕"
          className="absolute top-3.5 end-3.5 w-9 h-9 rounded-full bg-black/45 text-white grid place-items-center z-10 cursor-pointer hover:bg-black/70 transition-colors"
        >
          ✕
        </button>

        {/* ÉTAPE 1 : animation + email */}
        {step === 1 && (
          <div className="flex flex-col min-h-0">
            <div className="relative aspect-video bg-black shrink-0">
              <NightAnimCanvas captions={f.captions} />
              <div className="absolute bottom-3 start-3 bg-black/55 text-white text-[0.66rem] font-semibold px-3 py-1.5 rounded-full">
                {f.animBadge}
              </div>
            </div>
            <div className="p-6 overflow-y-auto">
              <span className="t-btn-primary inline-block text-[0.7rem] font-bold uppercase tracking-wide px-3.5 py-1.5 mb-3">{f.tag}</span>
              <h3 className="t-display font-bold text-xl tracking-[-0.03em] leading-tight mb-2">{f.title}</h3>
              <p className="text-[0.85rem] t-muted leading-[1.55] mb-4">{f.desc}</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={f.emailPlaceholder}
                autoComplete="email"
                className="t-input w-full px-4.5 py-3 text-[0.9rem] mb-2.5 px-5"
                dir="ltr"
              />
              {err1 && <p className="t-red-text text-[0.78rem] mb-2">{f.errEmail}</p>}
              <button onClick={submitEmail} className="t-btn-primary w-full font-bold text-[0.92rem] py-3.5 cursor-pointer">
                {f.cta}
              </button>
              <div className="flex flex-wrap gap-2.5 mt-3.5">
                {f.trust.map((item, idx) => (
                  <span key={idx} className="v2-trust text-[0.7rem] opacity-50 flex items-center gap-1">{item}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ÉTAPE 2 : guide PDF + ticket −25% (coupon élégant) */}
        {step === 2 && (
          <div className="p-6 pt-12 overflow-y-auto">
            <div className="w-[60px] h-[74px] bg-[#EF4444] rounded-lg flex flex-col items-center justify-center text-white font-bold text-[0.65rem] mx-auto mb-4 shadow-[0_10px_30px_rgba(0,0,0,.18)]">
              PDF<span className="text-base mt-0.5">📘</span>
            </div>
            <span className="t-btn-primary block w-fit mx-auto text-[0.7rem] font-bold uppercase tracking-wide px-3.5 py-1.5 mb-3 text-center">{f.pdfTag}</span>
            <h3 className="t-display font-bold text-xl tracking-[-0.03em] text-center mb-2">{f.pdfTitle}</h3>

            <div
              className="t-card rounded-[16px] p-4 my-4 flex items-center gap-4"
              style={{ borderStyle: 'dashed', borderColor: 'var(--gold)' }}
            >
              <div className="t-display font-bold text-[2rem] tracking-[-0.04em] t-gold-text shrink-0">−25%</div>
              <div className="text-start min-w-0">
                <div className="font-mono text-base font-bold t-gold-text">{f.couponCode}</div>
                <div className="text-[0.72rem] t-muted leading-snug mt-0.5">{f.couponLabel}</div>
              </div>
            </div>

            <p className="text-[0.85rem] t-muted leading-[1.55] text-center mb-4">{f.pdfDesc}</p>
            <a
              href={PDF_PATH}
              download
              onClick={() => setTimeout(() => setStep(3), 600)}
              className="t-btn-primary block w-full text-center font-bold text-[0.92rem] py-3.5 cursor-pointer"
            >
              {f.pdfDownload}
            </a>
            <button onClick={() => setStep(3)} className="t-btn-light w-full font-semibold text-[0.85rem] py-3 mt-2 cursor-pointer">
              {f.pdfSkip}
            </button>
          </div>
        )}

        {/* ÉTAPE 3 : rendez-vous (Zoom → email · WhatsApp → numéro) */}
        {step === 3 && (
          <div className="p-6 pt-12 overflow-y-auto">
            <span className="t-btn-primary inline-block text-[0.7rem] font-bold uppercase tracking-wide px-3.5 py-1.5 mb-3">{f.step3Tag}</span>
            <h3 className="t-display font-bold text-xl tracking-[-0.03em] mb-1.5">{f.step3Title}</h3>
            <p className="text-[0.85rem] t-muted leading-[1.55] mb-3">{f.step3Desc}</p>

            <span className="block text-[0.72rem] font-bold uppercase tracking-wider opacity-45 mt-3 mb-2">{f.fieldLabel}</span>
            <div className="flex flex-wrap gap-2">
              {f.fields.map((opt) => (
                <button key={opt} type="button" onClick={() => setField(opt)} className={chip(field === opt)}>{opt}</button>
              ))}
            </div>

            <span className="block text-[0.72rem] font-bold uppercase tracking-wider opacity-45 mt-3.5 mb-2">{f.modeLabel}</span>
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={() => setMode('whatsapp')} className={chip(mode === 'whatsapp')}>{f.modeWhatsapp}</button>
              <button type="button" onClick={() => setMode('zoom')} className={chip(mode === 'zoom')}>{f.modeZoom}</button>
            </div>

            <span className="block text-[0.72rem] font-bold uppercase tracking-wider opacity-45 mt-3.5 mb-2">{f.dayLabel}</span>
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
              {days.map((d, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setDayIdx(idx)}
                  className={`shrink-0 w-[58px] rounded-2xl py-2.5 text-center cursor-pointer transition-all ${dayIdx === idx ? 't-chip-active rounded-2xl' : 't-chip rounded-2xl'}`}
                >
                  <div className="text-[0.65rem] opacity-60 uppercase font-semibold">{d.name}</div>
                  <div className="text-[1.1rem] font-bold mt-0.5">{d.num}</div>
                </button>
              ))}
            </div>

            <span className="block text-[0.72rem] font-bold uppercase tracking-wider opacity-45 mt-3 mb-2">{f.slotLabel}</span>
            <div className="flex flex-wrap gap-2">
              {SLOTS.map((s) => (
                <button key={s} type="button" onClick={() => setSlot(s)} className={chip(slot === s)}>{s}</button>
              ))}
            </div>

            <span className="block text-[0.72rem] font-bold uppercase tracking-wider opacity-45 mt-3.5 mb-2">{f.coordLabel}</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={f.namePlaceholder}
              className="t-input w-full px-5 py-3 text-[0.9rem] mb-2.5"
            />
            {mode === 'whatsapp' ? (
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={f.phonePlaceholder}
                className="t-input w-full px-5 py-3 text-[0.9rem] mb-2.5"
                dir="ltr"
              />
            ) : (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={f.emailPlaceholder2}
                className="t-input w-full px-5 py-3 text-[0.9rem] mb-2.5"
                dir="ltr"
              />
            )}
            {err3 && <p className="t-red-text text-[0.78rem] mb-2">{f.err3}</p>}
            <button onClick={submitBooking} className="t-btn-primary w-full font-bold text-[0.92rem] py-3.5 cursor-pointer">
              {f.confirm}
            </button>
          </div>
        )}

        {/* ÉTAPE 4 : succès */}
        {step === 4 && (
          <div className="p-6 pt-12 overflow-y-auto text-center">
            <div className="text-5xl mb-2.5 animate-pop">🎉</div>
            <h3 className="t-display font-bold text-xl tracking-[-0.03em] mb-1.5">{f.successTitle}</h3>
            <p className="text-[0.85rem] t-muted leading-[1.55]">{mode === 'zoom' ? f.successZoom : f.successWa}</p>
            <div className="t-card rounded-[14px] p-3.5 text-start text-[0.82rem] my-3.5 leading-relaxed">
              <strong>{name}</strong><br />
              {dayIdx !== null ? days[dayIdx].full : ''} · {slot}<br />
              {field || f.fieldTbd}<br />
              {mode === 'zoom' ? f.zoomLabel : f.waLabel}<br />
              <span className="opacity-50">{f.ref} {refId}</span>
            </div>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center font-bold text-[0.9rem] py-3.5 rounded-full text-white"
              style={{ background: '#25D366' }}
            >
              {mode === 'zoom' ? f.waZoomBtn : f.waBtn}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
