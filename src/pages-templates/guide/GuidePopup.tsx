'use client';

/* eslint-disable @typescript-eslint/no-explicit-any --
   THREE, QRCode et Calendly sont injectés au runtime via <script> et ne
   fournissent aucun type ; le moteur impératif ci-dessous les manipule en any. */

import { useEffect, useRef } from 'react';
import type { Lang } from '../../i18n';
import type { GuidePopupCopy } from '../../content/guide/popup';
import { GUIDE_POPUP_CSS } from './guidePopupStyles';

declare global {
  interface Window {
    THREE?: any;
    QRCode?: any;
    Calendly?: any;
  }
}

const GIFT_SRC = '/videos/gift.mp4';
const DEMO_SRC = '/videos/demo.mp4';
const CAL_URL = 'https://calendly.com/master-services-ad-001/russtudy-interviews';
const WA_NUMBER = '79964334489';
const COUPON = 'GUIDE25';
const PDF_PATH = '/assets/pdf/guide-gratuit-etudes-russie.pdf';

export interface GuidePopupPerk {
  title: string;
  text: string;
}

interface GuidePopupProps {
  lang: Lang;
  copy: GuidePopupCopy;
  perks: [GuidePopupPerk, GuidePopupPerk];
  onClose: () => void;
}

export default function GuidePopup({ lang, copy, perks, onClose }: GuidePopupProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCloseRef.current();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    return runGuidePopup(root, copy, () => onCloseRef.current());
    // Le moteur d'étapes est purement impératif (vidéo, QR, cadeau 3D, Calendly) :
    // il n'est (re)lancé qu'au montage du popup, pas à chaque frappe/traduction.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={rootRef} className="gp-root" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <style>{GUIDE_POPUP_CSS}</style>
      <div className="backdrop" aria-hidden="true">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
        <div className="blob b4" />
        <div className="blob b5" />
      </div>

      <div className="app" role="dialog" aria-modal="true" aria-label="RusStudy">
        <div className="top">
          <span className="brand">.Rus<i>Study</i>.</span>
          <div className="dots" id="dots" />
          <span className="sp" />
          <button type="button" className="x" id="gp-close" aria-label={copy.closeAria}>
            <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        </div>

        <div className="stage" id="stage">
          {/* 1 · cadeau vidéo (hook) */}
          <section className="scr on" data-i="0">
            <div className="badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="4" rx="1" /><path d="M5 12v8h14v-8M12 8v12" /><path d="M12 8S10.5 4 8 4a2 2 0 000 4h4zM12 8s1.5-4 4-4a2 2 0 010 4h-4z" /></svg>
              {copy.giftBadge}
            </div>
            <h2>{copy.giftTitle}<span className="off">{copy.giftOff}</span></h2>
            <p className="sub">{copy.giftSub}</p>
            <div className="grow" />
            <div className="giftwrap">
              <video id="vGift" src={GIFT_SRC} muted playsInline autoPlay preload="auto" />
              <div className="halo" />
              <span className="float">{copy.giftFloat}</span>
            </div>
            <div className="grow" />
            <button type="button" className="cta" data-next>
              {copy.giftCta} <svg viewBox="0 0 24 24" strokeLinecap="round"><path d="M4 12h15M13 6l6 6-6 6" /></svg>
            </button>
            <div className="fine"><span>{copy.giftTrust[0]}</span><span>{copy.giftTrust[1]}</span></div>
          </section>

          {/* 2 · démo vidéo */}
          <section className="scr" data-i="1">
            <div className="badge">{copy.demoBadge}</div>
            <h2>{copy.demoTitle}</h2>
            <div className="player">
              <video id="vDemo" src={DEMO_SRC} playsInline preload="auto" />
              <button type="button" className="big-play" id="bigPlay" aria-label={copy.demoCta}><svg viewBox="0 0 24 24"><path d="M7 4l12 8-12 8z" /></svg></button>
            </div>
            <div className="pbar">
              <button type="button" className="pp" id="pp" aria-label={copy.demoCta}><svg id="ppi" viewBox="0 0 24 24"><path d="M7 4l12 8-12 8z" /></svg></button>
              <div className="track" id="track"><i id="tfill" /><b id="tdot" /></div>
              <span className="time" id="time">0:00</span>
              <button type="button" className="mute" id="mute" aria-label={copy.closeAria}><svg id="mutei" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H3v6h3l5 4z" /><path d="M16 9a4 4 0 010 6M19 6a8 8 0 010 12" /></svg></button>
            </div>
            <div className="perks">
              {perks.map((perk) => (
                <div className="pk" key={perk.title}>
                  <i><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg></i>
                  <div><b>{perk.title}</b><span>{perk.text}</span></div>
                </div>
              ))}
            </div>
            <div className="grow" />
            <button type="button" className="cta" id="demoNext" data-next disabled>
              {copy.demoCta} <svg viewBox="0 0 24 24" strokeLinecap="round"><path d="M4 12h15M13 6l6 6-6 6" /></svg>
            </button>
            <p className="demohint" id="demoHint">{copy.demoHint}</p>
          </section>

          {/* 3 · email */}
          <section className="scr" data-i="2">
            <div className="badge">{copy.emailBadge}</div>
            <h2>{copy.emailTitle}</h2>
            <p className="sub">{copy.emailSub}</p>
            <div className="field" id="fieldName">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></svg>
              <input id="gp-name" type="text" autoComplete="name" placeholder={copy.namePlaceholder} aria-label={copy.namePlaceholder} />
            </div>
            <div className="field" id="fieldEmail">
              <svg viewBox="0 0 24 24"><rect x="2.5" y="5" width="19" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
              <input id="gp-email" type="email" inputMode="email" autoComplete="email" placeholder={copy.emailPlaceholder} aria-label={copy.emailPlaceholder} dir="ltr" />
            </div>
            <p className="msg" id="msg" />
            <div className="trust">
              <div className="pk"><i><svg viewBox="0 0 24 24"><path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z" /></svg></i><div><b>{copy.trustSpamTitle}</b><span>{copy.trustSpamText}</span></div></div>
              <div className="pk"><i><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg></i><div><b>{copy.trustCouponTitle}</b><span>{copy.trustCouponText}</span></div></div>
            </div>
            <div className="grow" />
            <button type="button" className="cta" id="send">{copy.emailCta}</button>
          </section>

          {/* 4 · coupon débloqué + QR + WhatsApp */}
          <section className="scr" data-i="3">
            <h2>{copy.couponTitle}</h2>
            <div className="grow" />
            <div id="gift" role="img" aria-label={copy.ticketLabel} />
            <p className="sub" id="sentTo">{copy.couponSentDefault}</p>
            <div className="ticket">
              <div className="qr" id="qr" />
              <div className="info">
                <small>{copy.ticketLabel}</small>
                <div className="pct">{copy.giftOff}</div>
                <span className="code">{COUPON}</span>
              </div>
            </div>
            <p className="qrnote">{copy.qrNote}</p>
            <div className="grow" />
            <button type="button" className="cta dl" id="dlCoupon">
              <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12M7 10l5 5 5-5M5 21h14" /></svg>
              {copy.downloadCouponCta}
            </button>
            <a href={PDF_PATH} download className="cta dl" style={{ marginTop: '.5rem' }}>
              <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12M7 10l5 5 5-5M5 21h14" /></svg>
              {copy.downloadPdfCta}
            </a>
            <button type="button" className="cta wa" id="wa" style={{ marginTop: '.5rem' }}>
              <svg viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.7 1-.9 1.1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.5-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5C9.3 8.4 8.8 7 8.6 6.5c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6 2 .8 2.7.9 3.7.8.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 00-8.6 15L2 22l5.1-1.3A10 10 0 1012 2z" /></svg>
              {copy.waCta}
            </button>
            <p className="demohint" id="waHint" style={{ marginTop: '.35rem' }}>{copy.waHint}</p>
            <button type="button" className="cta" data-next style={{ marginTop: '.5rem' }}>
              {copy.bookCta} <svg viewBox="0 0 24 24" strokeLinecap="round"><path d="M4 12h15M13 6l6 6-6 6" /></svg>
            </button>
          </section>

          {/* 5 · rendez-vous conseiller (Calendly) */}
          <section className="scr" data-i="4">
            <div className="badge">{copy.calBadge}</div>
            <h2>{copy.calTitle}</h2>
            <p className="sub">{copy.calSub}</p>
            <div className="cal" id="cal" />
            <button type="button" className="ghost" id="closeBtn" style={{ marginTop: '.5rem' }}>{copy.laterClose}</button>
          </section>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Moteur impératif du popup : navigation entre étapes, lecteur vidéo,
 * capture email, cadeau 3D WebGL (repli 2D si indisponible), QR code,
 * export du coupon en JPG, partage WhatsApp, widget Calendly.
 * Three.js / QRCode.js / Calendly ne sont chargés qu'au moment où
 * l'étape correspondante est atteinte (lazy loading, budget de perf).
 * ------------------------------------------------------------------ */
function runGuidePopup(root: HTMLDivElement, copy: GuidePopupCopy, onClose: () => void): () => void {
  const disposers: Array<() => void> = [];
  const onTimeout = (fn: () => void, ms: number) => {
    const id = window.setTimeout(fn, ms);
    disposers.push(() => window.clearTimeout(id));
  };
  const onEvent = <K extends keyof WindowEventMap>(target: Window, type: K, fn: (e: WindowEventMap[K]) => void) => {
    target.addEventListener(type, fn as EventListener);
    disposers.push(() => target.removeEventListener(type, fn as EventListener));
  };
  const onElEvent = (el: Element | null, type: string, fn: EventListenerOrEventListenerObject) => {
    if (!el) return;
    el.addEventListener(type, fn);
    disposers.push(() => el.removeEventListener(type, fn));
  };

  const qs = <T extends Element = HTMLElement>(sel: string): T | null => root.querySelector<T>(sel);
  const qsa = (sel: string): Element[] => Array.from(root.querySelectorAll(sel));

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const scr = qsa('.scr');
  const dots = qs('#dots');
  if (dots) dots.innerHTML = '';
  scr.forEach(() => dots?.insertAdjacentHTML('beforeend', '<b></b>'));
  const dotEls = dots ? Array.from(dots.children) : [];

  let i = 0;
  let userEmail = '';
  let userName = '';

  function paintDots() {
    dotEls.forEach((d, k) => {
      d.classList.toggle('on', k === i);
      d.classList.toggle('past', k < i);
    });
  }

  function go(n: number) {
    n = Math.max(0, Math.min(scr.length - 1, n));
    if (n === i) return;
    scr[i].classList.remove('on');
    scr[i].classList.toggle('past', n > i);
    i = n;
    scr[i].classList.remove('past');
    scr[i].classList.add('on');
    paintDots();
    void enter(i);
  }
  paintDots();

  /* intro : la vidéo cadeau occupe toute la fenêtre, puis se minimise (FLIP) */
  (function initIntro() {
    const vGift = qs<HTMLVideoElement>('#vGift');
    if (reduced) return;
    const gw = qs<HTMLElement>('.scr[data-i="0"] .giftwrap');
    scr[0].classList.add('intro');
    let done = false;
    function minimize() {
      if (done || !gw || !scr[0].classList.contains('intro')) return;
      done = true;
      const first = gw.getBoundingClientRect();
      scr[0].classList.remove('intro');
      const last = gw.getBoundingClientRect();
      const dx = first.left - last.left;
      const dy = first.top - last.top;
      const sx = first.width / last.width;
      const sy = first.height / last.height;
      gw.style.transformOrigin = 'top left';
      gw.style.transition = 'none';
      gw.style.transform = `translate(${dx}px,${dy}px) scale(${sx},${sy})`;
      gw.getBoundingClientRect();
      gw.style.transition = 'transform .85s cubic-bezier(.2,.8,.24,1)';
      gw.style.transform = 'none';
      onElEvent(gw, 'transitionend', () => {
        gw.style.transition = '';
        gw.style.transform = '';
        gw.style.transformOrigin = '';
      });
    }
    if (vGift) {
      onElEvent(vGift, 'ended', () => {
        minimize();
        vGift.loop = true;
        vGift.play().catch(() => {});
      });
      vGift.play().catch(() => {});
    }
    onTimeout(minimize, 9000);
  })();

  qsa('[data-next]').forEach((b) => onElEvent(b, 'click', () => go(i + 1)));

  const closeApp = () => onClose();
  onElEvent(qs('#gp-close'), 'click', closeApp);
  onElEvent(qs('#closeBtn'), 'click', closeApp);

  /* ---------------- étape 2 : lecteur vidéo démo ---------------- */
  const vDemo = qs<HTMLVideoElement>('#vDemo')!;
  const bigPlay = qs<HTMLButtonElement>('#bigPlay')!;
  const pp = qs<HTMLButtonElement>('#pp')!;
  const ppi = qs<HTMLElement>('#ppi')!;
  const tfill = qs<HTMLElement>('#tfill')!;
  const tdot = qs<HTMLElement>('#tdot')!;
  const timeL = qs<HTMLElement>('#time')!;
  const track = qs<HTMLElement>('#track')!;
  const muteBtn = qs<HTMLButtonElement>('#mute')!;
  const mutei = qs<HTMLElement>('#mutei')!;

  const ICON_PLAY = '<path d="M7 4l12 8-12 8z"/>';
  const ICON_PAUSE = '<path d="M7 4h4v16H7zM13 4h4v16h-4z"/>';
  const fmt = (s: number) => `${(s / 60) | 0}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

  const demoNext = qs<HTMLButtonElement>('#demoNext')!;
  const demoHint = qs<HTMLElement>('#demoHint')!;
  let demoWatched = 0;
  let demoDone = false;

  function playDemo() {
    vDemo.play().catch(() => {
      vDemo.muted = true;
      setMuteIcon();
      vDemo.play().catch(() => {});
    });
  }
  onElEvent(bigPlay, 'click', playDemo);
  onElEvent(pp, 'click', () => (vDemo.paused ? playDemo() : vDemo.pause()));
  onElEvent(vDemo, 'play', () => { ppi.innerHTML = ICON_PAUSE; bigPlay.classList.add('hide'); });
  onElEvent(vDemo, 'pause', () => { ppi.innerHTML = ICON_PLAY; if (vDemo.currentTime < vDemo.duration) bigPlay.classList.remove('hide'); });
  onElEvent(vDemo, 'timeupdate', () => {
    const f = vDemo.currentTime / (vDemo.duration || 1);
    tfill.style.width = `${f * 100}%`;
    tdot.style.left = `${f * 100}%`;
    timeL.textContent = fmt(vDemo.currentTime);
    if (vDemo.currentTime <= demoWatched + 1.2) demoWatched = Math.max(demoWatched, vDemo.currentTime);
  });
  onElEvent(vDemo, 'ended', () => {
    bigPlay.classList.remove('hide');
    ppi.innerHTML = ICON_PLAY;
    unlockDemo();
  });
  function unlockDemo() {
    if (demoDone) return;
    demoDone = true;
    demoNext.disabled = false;
    demoHint.textContent = copy.demoHintDone;
    demoHint.classList.add('done');
  }
  onElEvent(track, 'click', (e) => {
    const ev = e as MouseEvent;
    const r = track.getBoundingClientRect();
    const target = ((ev.clientX - r.left) / r.width) * (vDemo.duration || 0);
    vDemo.currentTime = demoDone ? target : Math.min(target, demoWatched + 0.3);
  });
  function setMuteIcon() {
    mutei.innerHTML = vDemo.muted
      ? '<path d="M11 5L6 9H3v6h3l5 4z"/><path d="M22 9l-6 6M16 9l6 6"/>'
      : '<path d="M11 5L6 9H3v6h3l5 4z"/><path d="M16 9a4 4 0 010 6M19 6a8 8 0 010 12"/>';
  }
  onElEvent(muteBtn, 'click', () => { vDemo.muted = !vDemo.muted; setMuteIcon(); });

  /* ---------------- étape 3 : email ---------------- */
  const fieldEmail = qs<HTMLElement>('#fieldEmail')!;
  const fieldName = qs<HTMLElement>('#fieldName')!;
  const nameInput = qs<HTMLInputElement>('#gp-name')!;
  const emailInput = qs<HTMLInputElement>('#gp-email')!;
  const msg = qs<HTMLElement>('#msg')!;
  onElEvent(qs('#send'), 'click', () => {
    const nm = nameInput.value.trim();
    const v = emailInput.value.trim();
    if (nm.length < 2) {
      fieldName.classList.add('err');
      msg.textContent = copy.errName;
      nameInput.focus();
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) {
      fieldName.classList.remove('err');
      fieldEmail.classList.add('err');
      msg.textContent = copy.errEmail;
      emailInput.focus();
      return;
    }
    fieldName.classList.remove('err');
    fieldEmail.classList.remove('err');
    msg.textContent = '';
    userName = nm;
    userEmail = v;
    try { window.localStorage.setItem('rs_guide_email', userEmail); } catch { /* non bloquant */ }
    go(3);
  });
  onElEvent(nameInput, 'input', () => { fieldName.classList.remove('err'); msg.textContent = ''; });
  onElEvent(emailInput, 'input', () => { fieldEmail.classList.remove('err'); msg.textContent = ''; });

  /* ---------------- étape 4 : QR + coupon JPG + WhatsApp ---------------- */
  let qrDone = false;
  let couponBlob: Blob | null = null;

  function buildQR() {
    if (qrDone) return;
    qrDone = true;
    const QRCode = window.QRCode;
    const qrHost = qs('#qr');
    if (QRCode && qrHost) {
      const payload = `RusStudy | Coupon ${COUPON} ${copy.giftOff} | ${userEmail || copy.qrClientFallback} | https://russieetudes.com/coupon/${COUPON}`;
      new QRCode(qrHost, {
        text: payload, width: 200, height: 200,
        colorDark: '#14141A', colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.M,
      });
    }
    const sentTo = qs('#sentTo');
    if (sentTo && userEmail) {
      const [before, after] = copy.couponSentWithEmail.split('{email}');
      sentTo.textContent = '';
      const strong = document.createElement('b');
      strong.style.color = 'var(--ink)';
      strong.textContent = userEmail;
      sentTo.append(before ?? '', strong, after ?? '');
    }
    makeCouponJPG();
  }

  function roundRect(x: CanvasRenderingContext2D, X: number, Y: number, w: number, h: number, r: number) {
    x.beginPath();
    x.moveTo(X + r, Y); x.arcTo(X + w, Y, X + w, Y + h, r); x.arcTo(X + w, Y + h, X, Y + h, r);
    x.arcTo(X, Y + h, X, Y, r); x.arcTo(X, Y, X + w, Y, r); x.closePath();
  }

  function makeCouponJPG() {
    const S = 2;
    const W = 1000, H = 520;
    const c = document.createElement('canvas'); c.width = W * S; c.height = H * S;
    const x = c.getContext('2d');
    if (!x) return;
    x.scale(S, S);

    x.fillStyle = '#FDFBF7'; x.fillRect(0, 0, W, H);

    const P = 40, cardW = W - 2 * P, cardH = 300, cardY = 60, r = 34;
    const g = x.createLinearGradient(P, cardY, P + cardW, cardY + cardH);
    g.addColorStop(0, '#FDBA74'); g.addColorStop(.5, '#F97316'); g.addColorStop(1, '#EA580C');
    roundRect(x, P, cardY, cardW, cardH, r); x.fillStyle = g; x.fill();

    x.fillStyle = '#FDFBF7';
    x.beginPath(); x.arc(P, cardY + cardH / 2, 26, 0, 7); x.fill();
    x.beginPath(); x.arc(P + cardW, cardY + cardH / 2, 26, 0, 7); x.fill();

    const qrImg = qs('#qr img, #qr canvas') as HTMLImageElement | HTMLCanvasElement | null;
    const qs2 = 220, qx = P + 50, qy = cardY + (cardH - qs2) / 2;
    roundRect(x, qx - 14, qy - 14, qs2 + 28, qs2 + 28, 18); x.fillStyle = '#fff'; x.fill();
    if (qrImg) x.drawImage(qrImg as CanvasImageSource, qx, qy, qs2, qs2);

    const tx = qx + qs2 + 70;
    x.fillStyle = 'rgba(255,255,255,.92)';
    x.font = '600 26px "Space Grotesk", sans-serif';
    x.fillText(copy.couponImgLabel, tx, cardY + 95);
    x.fillStyle = '#fff';
    x.font = '800 108px "Space Grotesk", sans-serif';
    x.fillText(copy.giftOff, tx, cardY + 195);
    x.font = '800 34px "Space Grotesk", sans-serif';
    const codeW = x.measureText(COUPON).width + 48;
    roundRect(x, tx, cardY + 215, codeW, 52, 12); x.fillStyle = 'rgba(255,255,255,.22)'; x.fill();
    x.fillStyle = '#fff'; x.fillText(COUPON, tx + 24, cardY + 251);

    x.fillStyle = '#0A0A0A';
    x.font = '800 34px "Space Grotesk", sans-serif';
    x.fillText('.Rus', P, H - 70);
    const wRus = x.measureText('.Rus').width;
    x.fillStyle = '#A855F7'; x.fillText('Study', P + wRus, H - 70);
    x.fillStyle = '#93909F';
    x.font = '500 22px "Space Grotesk", sans-serif';
    x.fillText(copy.couponImgFooter, P, H - 34);

    c.toBlob((b) => { couponBlob = b; }, 'image/jpeg', 0.92);
  }

  function downloadCoupon() {
    if (!couponBlob) return;
    const url = URL.createObjectURL(couponBlob);
    const a = document.createElement('a');
    a.href = url; a.download = `coupon-RusStudy-${COUPON}.jpg`;
    document.body.appendChild(a); a.click(); a.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 4000);
  }

  onElEvent(qs('#dlCoupon'), 'click', () => {
    if (!couponBlob) makeCouponJPG();
    if (couponBlob) downloadCoupon();
    else onTimeout(downloadCoupon, 400);
  });

  onElEvent(qs('#wa'), 'click', () => {
    if (!couponBlob) makeCouponJPG();
    const txt =
      copy.waMsgGreeting.replace('{coupon}', COUPON) +
      (userName ? copy.waMsgName.replace('{name}', userName) : '') +
      (userEmail ? copy.waMsgEmail.replace('{email}', userEmail) : '') +
      copy.waMsgClosing;
    const openWA = () => window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(txt)}`, '_blank');
    if (couponBlob) { downloadCoupon(); onTimeout(openWA, 600); }
    else onTimeout(() => { downloadCoupon(); onTimeout(openWA, 600); }, 400);
  });

  /* ---------------- étape 5 : Calendly ---------------- */
  let calDone = false;
  function buildCal() {
    if (calDone) return;
    const box = qs('#cal');
    if (!box) return;
    const q = (userName ? `&name=${encodeURIComponent(userName)}` : '') + (userEmail ? `&email=${encodeURIComponent(userEmail)}` : '');
    const url = `${CAL_URL}?hide_gdpr_banner=1&hide_event_type_details=1&background_color=ffffff&primary_color=a855f7${q}`;
    const H = () => `${Math.max(360, Math.round(box.getBoundingClientRect().height))}px`;
    const applyH = () => {
      const w = box.querySelector('.calendly-inline-widget, iframe') as HTMLElement | null;
      if (w) { w.style.height = H(); w.style.minHeight = H(); w.style.width = '100%'; }
    };
    const tryInit = (tries: number) => {
      if (window.Calendly?.initInlineWidget) {
        calDone = true;
        box.innerHTML = '';
        window.Calendly.initInlineWidget({ url, parentElement: box, prefill: { name: userName, email: userEmail } });
        requestAnimationFrame(applyH);
      } else if (tries > 0) {
        onTimeout(() => tryInit(tries - 1), 300);
      } else {
        calDone = true;
        box.innerHTML = `<iframe src="${url}" title="Calendly" style="width:100%;border:0"></iframe>`;
        applyH();
      }
    };
    onEvent(window, 'resize', applyH);
    tryInit(4);
  }

  /* ---------------- chargement paresseux des scripts externes ---------------- */
  function loadOnceScript(src: string): Promise<void> {
    return new Promise((resolve) => {
      if (document.querySelector(`script[data-gp="${src}"]`)) return resolve();
      const el = document.createElement('script');
      el.src = src;
      el.setAttribute('data-gp', src);
      el.onload = () => resolve();
      el.onerror = () => resolve();
      document.head.appendChild(el);
    });
  }
  function loadOnceLink(href: string) {
    if (document.querySelector(`link[data-gp="${href}"]`)) return;
    const el = document.createElement('link');
    el.rel = 'stylesheet'; el.href = href;
    el.setAttribute('data-gp', href);
    document.head.appendChild(el);
  }

  /* Un CDN bloqué/lent ne doit jamais geler la suite du parcours : on continue
     après un délai même si le script n'a ni chargé ni échoué explicitement. */
  function withTimeout(p: Promise<void>, ms: number): Promise<void> {
    return new Promise((resolve) => {
      let done = false;
      const finish = () => { if (!done) { done = true; resolve(); } };
      p.then(finish);
      onTimeout(finish, ms);
    });
  }

  let threeQrPromise: Promise<void> | null = null;
  function loadThreeAndQr(): Promise<void> {
    if (!threeQrPromise) {
      threeQrPromise = Promise.all([
        loadOnceScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'),
        loadOnceScript('https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js'),
      ]).then(() => undefined);
    }
    return withTimeout(threeQrPromise, 4000);
  }
  let calendlyPromise: Promise<void> | null = null;
  function loadCalendly(): Promise<void> {
    if (!calendlyPromise) {
      loadOnceLink('https://assets.calendly.com/assets/external/widget.css');
      calendlyPromise = loadOnceScript('https://assets.calendly.com/assets/external/widget.js');
    }
    return withTimeout(calendlyPromise, 4000);
  }

  /* ---------------- entrées d'étape ---------------- */
  async function enter(n: number) {
    if (n !== 1) vDemo.pause();
    if (n === 1) { setMuteIcon(); playDemo(); }
    if (n === 3) {
      await loadThreeAndQr();
      buildQR();
      initGift();
      playGift();
    }
    const app = qs('.app');
    app?.classList.toggle('cal-mode', n === 4);
    if (n === 4) {
      await loadCalendly();
      buildCal();
    }
  }

  /* =====================================================================
     CADEAU WEBGL — la boîte 3D s'ouvre sur le coupon -25 %
     ===================================================================== */
  let giftReady = false;
  let burst: () => void = () => {};
  let playGift: () => void = () => {};
  let giftRaf = 0;

  function giftFallback(host: HTMLElement) {
    host.innerHTML = '<div class="giftfb"><span class="ring"></span><span class="ring r2"></span><div class="disc"><span class="g">🎁</span></div></div>';
    const fb = host.querySelector('.giftfb');
    const COL = ['#7C3AED', '#A855F7', '#F97316', '#FDBA74', '#8B3FF0', '#E9D5FF'];
    for (let k = 0; k < 16; k++) {
      const s = document.createElement('span');
      s.className = 'cf';
      s.style.setProperty('--x', (Math.random() * 2 - 1).toFixed(2));
      s.style.setProperty('--d', `${(Math.random() * 0.4).toFixed(2)}s`);
      s.style.background = COL[k % COL.length];
      fb?.appendChild(s);
    }
  }

  function initGift() {
    if (giftReady) return;
    giftReady = true;
    const host = qs<HTMLElement>('#gift');
    if (!host) return;

    giftFallback(host);

    const THREE = window.THREE;
    if (!THREE) return;
    let ctx: RenderingContext | null = null;
    try {
      const tc = document.createElement('canvas');
      ctx = tc.getContext('webgl') || tc.getContext('experimental-webgl');
    } catch { /* pas de WebGL */ }
    if (!ctx) return;

    let renderer: any;
    try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); }
    catch { return; }
    try { if (renderer.getContext().isContextLost()) return; } catch { return; }
    host.innerHTML = '';

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, .1, 100);
    camera.position.set(0, .95, 10.4); camera.lookAt(0, -.05, 0);
    onElEvent(renderer.domElement, 'webglcontextlost', (e: Event) => { e.preventDefault(); giftReady = false; giftFallback(host); });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    renderer.physicallyCorrectLights = true;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    host.appendChild(renderer.domElement);

    (function studioEnv() {
      const c = document.createElement('canvas'); c.width = c.height = 128;
      const x = c.getContext('2d')!;
      const g = x.createLinearGradient(0, 0, 0, 128);
      g.addColorStop(0, '#fff'); g.addColorStop(.42, '#f7f1fb'); g.addColorStop(.7, '#efe2dc'); g.addColorStop(1, '#e6dcd6');
      x.fillStyle = g; x.fillRect(0, 0, 128, 128);
      const s = x.createRadialGradient(30, 22, 2, 30, 22, 34);
      s.addColorStop(0, '#fff'); s.addColorStop(1, 'rgba(255,255,255,0)');
      x.fillStyle = s; x.fillRect(0, 0, 128, 60);
      const t = new THREE.CanvasTexture(c); t.mapping = THREE.EquirectangularReflectionMapping;
      const p = new THREE.PMREMGenerator(renderer);
      scene.environment = p.fromEquirectangular(t).texture; p.dispose(); t.dispose();
    })();

    scene.add(new THREE.HemisphereLight(0xffffff, 0xEBD9E6, 2.2));
    const key = new THREE.DirectionalLight(0xfffaf4, 2.1);
    key.position.set(-3.2, 6.2, 4.6); key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024); key.shadow.radius = 9; key.shadow.bias = -.0006; key.shadow.normalBias = .03;
    Object.assign(key.shadow.camera, { left: -4.5, right: 4.5, top: 4.5, bottom: -4.5, near: 1, far: 18 });
    scene.add(key);
    const bounce = new THREE.DirectionalLight(0xffe9d6, .9); bounce.position.set(4.5, .6, 2.6); scene.add(bounce);
    const rim = new THREE.DirectionalLight(0xffb07a, 1.1); rim.position.set(-1.2, 2.2, -4.5); scene.add(rim);

    const bc = document.createElement('canvas'); bc.width = bc.height = 256;
    const bx = bc.getContext('2d')!;
    const bg = bx.createRadialGradient(128, 128, 4, 128, 128, 124);
    bg.addColorStop(0, 'rgba(120,86,70,.5)'); bg.addColorStop(.45, 'rgba(140,100,84,.22)'); bg.addColorStop(1, 'rgba(150,110,90,0)');
    bx.fillStyle = bg; bx.fillRect(0, 0, 256, 256);
    const blob = new THREE.Mesh(new THREE.PlaneGeometry(4.4, 4.4),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(bc), transparent: true, opacity: .55, depthWrite: false }));
    blob.rotation.x = -Math.PI / 2; blob.position.y = -1.34; blob.scale.set(1, .72, 1); scene.add(blob);
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(18, 18), new THREE.ShadowMaterial({ opacity: .13 }));
    floor.rotation.x = -Math.PI / 2; floor.position.y = -1.33; floor.receiveShadow = true; scene.add(floor);

    const world = new THREE.Group(); world.rotation.y = -.22; scene.add(world);

    function rbox(w: number, h: number, d: number, r: number, seg = 5) {
      const g = new THREE.BoxGeometry(w, h, d, seg, seg, seg), p = g.attributes.position;
      const hx = w / 2 - r, hy = h / 2 - r, hz = d / 2 - r;
      const v = new THREE.Vector3(), inn = new THREE.Vector3(), dir = new THREE.Vector3();
      const cl = (n: number, m: number) => Math.max(-m, Math.min(m, n));
      for (let k = 0; k < p.count; k++) {
        v.fromBufferAttribute(p, k); inn.set(cl(v.x, hx), cl(v.y, hy), cl(v.z, hz)); dir.subVectors(v, inn);
        if (dir.lengthSq() > 1e-6) v.copy(inn).addScaledVector(dir.normalize(), r);
        p.setXYZ(k, v.x, v.y, v.z);
      }
      g.computeVertexNormals(); return g;
    }
    const shell = new THREE.MeshPhysicalMaterial({ color: 0xF6F2ED, roughness: .86, metalness: 0, clearcoat: .12, clearcoatRoughness: .85, envMapIntensity: .55 });
    const satin = (c: number) => { const m = new THREE.MeshPhysicalMaterial({ color: 0x000000, emissive: c, emissiveIntensity: 1, roughness: .28, clearcoat: .85, clearcoatRoughness: .12, envMapIntensity: .35 }); m.toneMapped = false; return m; };
    const VIO = 0x7C3AED, VIO2 = 0x8B3FF0;
    const cast = (m: any) => { m.castShadow = true; m.receiveShadow = true; return m; };

    const box = new THREE.Group();
    const body = cast(new THREE.Mesh(rbox(2.25, 1.25, 2.05, .11, 6), shell)); body.position.y = -.62; box.add(body);
    const sZ = cast(new THREE.Mesh(rbox(.5, 1.3, 2.14, .05, 3), satin(VIO))); sZ.position.set(-.05, -.62, 0); box.add(sZ);
    const sX = cast(new THREE.Mesh(rbox(2.34, 1.3, .5, .05, 3), satin(VIO2))); sX.position.set(0, -.62, .12); box.add(sX);
    const lip = cast(new THREE.Mesh(rbox(2.32, .14, 2.12, .05, 4), new THREE.MeshStandardMaterial({ color: 0xE3DDD6, roughness: .7 }))); lip.position.y = -.02; box.add(lip);
    const inner = new THREE.Mesh(new THREE.BoxGeometry(2.05, 1.05, 1.85), new THREE.MeshStandardMaterial({ color: 0x8E8496, roughness: .95, side: THREE.BackSide }));
    inner.position.y = -.6; inner.receiveShadow = true; box.add(inner);
    world.add(box);

    const lid = new THREE.Group();
    lid.add(cast(new THREE.Mesh(rbox(2.55, .44, 2.35, .1, 6), shell)));
    const rA = cast(new THREE.Mesh(rbox(.5, .52, 2.44, .06, 3), satin(VIO))); rA.position.set(-.05, .02, 0); lid.add(rA);
    const rB = cast(new THREE.Mesh(rbox(2.64, .52, .5, .06, 3), satin(VIO2))); rB.position.set(0, .02, .12); lid.add(rB);
    const ribbonLoop = cast(new THREE.Mesh(new THREE.TorusGeometry(.42, .15, 16, 44), satin(VIO)));
    ribbonLoop.position.set(-.42, .5, .1); ribbonLoop.rotation.set(.35, -.5, .45); ribbonLoop.scale.set(1, .78, 1); lid.add(ribbonLoop);
    const ribbonLoopR = ribbonLoop.clone(); ribbonLoopR.position.set(.42, .5, .1); ribbonLoopR.rotation.set(.35, .5, -.45); lid.add(ribbonLoopR);
    const knot = cast(new THREE.Mesh(new THREE.SphereGeometry(.22, 24, 18), satin(VIO2))); knot.position.set(0, .42, .14); lid.add(knot);
    const tail = cast(new THREE.Mesh(rbox(.24, .62, .16, .06, 3), satin(VIO))); tail.position.set(-.32, .14, .5); tail.rotation.z = .55; lid.add(tail);
    const tail2 = tail.clone(); tail2.position.set(.34, .16, .42); tail2.rotation.z = -.4; lid.add(tail2);
    lid.position.y = .2; world.add(lid);

    function couponTex() {
      const c = document.createElement('canvas'); c.width = 700; c.height = 420;
      const x = c.getContext('2d')!;
      const L = 26, R = 674, T = 18, B = 402, n = 11, st = (B - T) / n, d = 20;
      x.beginPath(); x.moveTo(L, T); x.lineTo(R, T);
      for (let k = 0; k < n; k++) { const y = T + k * st; x.lineTo(R - d, y + st / 2); x.lineTo(R, y + st); }
      x.lineTo(L, B);
      for (let k = n - 1; k >= 0; k--) { const y = T + k * st; x.lineTo(L + d, y + st / 2); x.lineTo(L, y); }
      x.closePath();
      const g = x.createLinearGradient(0, 0, 700, 420);
      g.addColorStop(0, '#FDBA74'); g.addColorStop(.45, '#F97316'); g.addColorStop(1, '#EA580C');
      x.fillStyle = g; x.fill();
      x.fillStyle = '#fff'; x.textAlign = 'center';
      x.font = '800 168px "Space Grotesk", sans-serif'; x.fillText(copy.giftOff, 350, 235);
      x.font = '600 46px "Space Grotesk", sans-serif'; x.letterSpacing = '14px'; x.globalAlpha = .92; x.fillText(copy.ticketLabel.toUpperCase(), 350, 320);
      const t = new THREE.CanvasTexture(c); t.anisotropy = 4; return t;
    }
    const cg = new THREE.PlaneGeometry(2.5, 1.5, 24, 8), cp = cg.attributes.position;
    for (let k = 0; k < cp.count; k++) cp.setZ(k, Math.cos(cp.getX(k) * .7) * .12 - .05);
    cg.computeVertexNormals();
    const coupon = new THREE.Mesh(cg, new THREE.MeshStandardMaterial({ map: couponTex(), transparent: true, alphaTest: .35, roughness: .88, envMapIntensity: .45, side: THREE.DoubleSide }));
    coupon.castShadow = coupon.receiveShadow = true; coupon.position.set(.06, -.9, .05); world.add(coupon);

    const COL = [0x7C3AED, 0xA855F7, 0xF97316, 0xFDBA74, 0xFFFFFF, 0xE9D5FF];
    const flakes: Array<{ m: any; v: any; a: any; life: number; max: number; delay: number }> = [];
    const fgeo = new THREE.PlaneGeometry(.09, .15), cloud = new THREE.Group(); world.add(cloud);
    for (let k = 0; k < 110; k++) {
      const m = new THREE.Mesh(fgeo, new THREE.MeshBasicMaterial({ color: COL[k % COL.length], side: THREE.DoubleSide, transparent: true }));
      m.visible = false; cloud.add(m);
      flakes.push({ m, v: new THREE.Vector3(), a: new THREE.Vector3(), life: 0, max: 1, delay: k / 260 });
    }
    burst = () => flakes.forEach((p) => {
      const ang = Math.random() * Math.PI * 2, spd = 1.6 + Math.random() * 3.4;
      p.m.position.set((Math.random() - .5) * .9, -.1 + Math.random() * .4, (Math.random() - .5) * .6);
      p.v.set(Math.cos(ang) * spd * .55, 2.6 + Math.random() * 3.4, Math.sin(ang) * spd * .35);
      p.a.set((Math.random() - .5) * 9, (Math.random() - .5) * 9, (Math.random() - .5) * 9);
      p.m.scale.setScalar(.6 + Math.random() * .9); p.m.material.opacity = 1; p.m.visible = true;
      p.life = 0; p.max = 1.9 + Math.random() * 1.5;
    });

    let t0 = performance.now() / 1000, fired = false;
    const ease = (k: number) => 1 - Math.pow(1 - k, 3);
    const over = (k: number) => 1 + 2.7 * Math.pow(k - 1, 3) + 1.7 * Math.pow(k - 1, 2);
    playGift = () => { t0 = performance.now() / 1000; fired = false; flakes.forEach((p) => (p.m.visible = false)); };

    const dg = { on: false, x: 0, y: 0, ry: 0, rx: 0, vy: 0, moved: 0 };
    onElEvent(host, 'pointerdown', (e) => {
      const ev = e as PointerEvent;
      dg.on = true; dg.moved = 0; dg.x = ev.clientX; dg.y = ev.clientY; host.setPointerCapture(ev.pointerId);
    });
    onElEvent(host, 'pointermove', (e) => {
      if (!dg.on) return;
      const ev = e as PointerEvent;
      const dx = ev.clientX - dg.x, dy = ev.clientY - dg.y;
      dg.moved += Math.abs(dx) + Math.abs(dy);
      dg.ry += dx * .009; dg.rx = Math.max(-.5, Math.min(.5, dg.rx + dy * .005)); dg.vy = dx * .009;
      dg.x = ev.clientX; dg.y = ev.clientY;
    });
    onElEvent(host, 'pointerup', () => { dg.on = false; if (dg.moved < 6) playGift(); });

    let cw = 0, ch = 0;
    function size() {
      const w = host.clientWidth, h = host.clientHeight;
      if (w === cw && h === ch) return;
      cw = w; ch = h;
      renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
    }
    onEvent(window, 'resize', size);

    let prev = performance.now() / 1000;
    const loop = (now: number) => {
      giftRaf = requestAnimationFrame(loop);
      now /= 1000;
      const dt = Math.min(now - prev, .05); prev = now;
      if (!scr[3].classList.contains('on')) return;
      size();

      const t = reduced ? 3 : now - t0;
      const wind = Math.min(t / .38, 1);
      const sq = t < .38 ? Math.sin(wind * Math.PI) * .12 : 0;
      box.scale.set(1 + sq * .5, 1 - sq, 1 + sq * .5); box.rotation.z = Math.sin(t * 34) * sq * .12;

      if (t > .38) {
        const e = ease(Math.min((t - .38) / .85, 1));
        lid.position.set(.28 * e, .2 + 1.55 * e + Math.sin(Math.min((t - .38) / .85, 1) * Math.PI) * .55, -.35 * e);
        lid.rotation.set(.3 * e, .35 * e, -.55 * e);
        const o = over(Math.min(Math.max((t - .5) / .75, 0), 1));
        coupon.position.set(.06, -.9 + 1.62 * o, .05 + .55 * o);
        coupon.rotation.z = -.06 - .06 * o + Math.sin(t * 1.6) * .03;
        if (!fired && !reduced) { burst(); fired = true; }
      } else {
        lid.position.set(0, .2, 0); lid.rotation.set(0, 0, 0); coupon.position.set(.06, -.9, .05);
      }

      for (const p of flakes) {
        if (!p.m.visible || t - .38 < p.delay) continue;
        p.life += dt; p.v.y -= 5.2 * dt; p.v.multiplyScalar(1 - 1.05 * dt);
        p.m.position.addScaledVector(p.v, dt);
        p.m.rotation.x += p.a.x * dt; p.m.rotation.y += p.a.y * dt; p.m.rotation.z += p.a.z * dt;
        const f = p.life / p.max; p.m.material.opacity = f > .7 ? Math.max(0, 1 - (f - .7) / .3) : 1;
        if (f >= 1) p.m.visible = false;
      }

      if (!dg.on) { dg.ry += dg.vy; dg.vy *= .94; dg.ry *= .97; dg.rx *= .95; }
      const spin = reduced ? 0 : Math.max(0, t - .6) * .32;
      world.position.y = Math.sin(now * 1.3) * .06;
      world.rotation.y = -.22 + spin + dg.ry;
      world.rotation.x = dg.rx;
      coupon.rotation.y = -world.rotation.y + Math.sin(now * 1.1) * .05;
      const lift = .5 + world.position.y * .5 + sq * .6;
      blob.scale.set(1 + lift * .12, .72 * (1 + lift * .12), 1); blob.material.opacity = .55 - lift * .06;

      renderer.render(scene, camera);
    };
    giftRaf = requestAnimationFrame(loop);
    disposers.push(() => cancelAnimationFrame(giftRaf));
  }

  return () => disposers.forEach((fn) => fn());
}
