export const GUIDE_POPUP_CSS = `
.gp-root {
  --card:#FDFBF7; --ink:#0A0A0A; --soft:#5C5C6B; --muted:#93909F;
  --violet:var(--accent); --violet-2:var(--accent); --violet-3:var(--accent-hover);
  --orange:#F97316; --orange-soft:#FFF0E2; --green:#25D366;
  --panel:#F3F0FB; --line:#E7E3F1;
  --ru: clamp(9px, min(4vw, 1.82dvh), 17px);
  position:fixed; inset:0; z-index:1200;
  font-family: var(--font-display, 'Space Grotesk', sans-serif);
  color:var(--ink);
  display:grid; place-items:center;
  padding:calc(.6 * var(--ru));
  overflow:hidden;
}
html[lang="ar"] .gp-root { font-family:'Tajawal', var(--font-display, sans-serif); }
.gp-root, .gp-root * { box-sizing:border-box; -webkit-tap-highlight-color:transparent; }
.gp-root :where(h1,h2,h3,h4,p,button,input,ul,li) { margin:0; padding:0; }
.gp-root button { font:inherit; color:inherit; }

.gp-root .backdrop {
  position:fixed; inset:0; background:#3A3A44; overflow:hidden;
}

.gp-root .backdrop::after {
  content:""; position:absolute; inset:0; background:rgba(16,16,22,.55);
}

.gp-root .blob {
  position:absolute; filter:blur(48px); border-radius:22px;
}

.gp-root .b1 {
  width:38vw; height:30vh; left:1vw; top:-6vh; background:#1C1B2E;
}

.gp-root .b2 {
  width:26vw; height:22vh; left:42vw; top:-3vh; background:#0E0E14;
}

.gp-root .b3 {
  width:34vw; height:28vh; right:1vw; top:1vh; background:#2B2A3E;
}

.gp-root .b4 {
  width:30vw; height:34vh; left:5vw; bottom:4vh; background:#232232;
}

.gp-root .b5 {
  width:34vw; height:30vh; right:5vw; bottom:2vh; background:#2E2D3C;
}

.gp-root .app {
  position:relative; z-index:1;
    width:min(calc(25 * var(--ru)), 100%);
    height:min(calc(58 * var(--ru)), calc(100dvh - calc(.6 * var(--ru))));      /* s'adapte à mobile ET laptop */
    background:var(--card); border-radius:calc(2 * var(--ru)); overflow:hidden;
    box-shadow:0 calc(2.6 * var(--ru)) calc(5.2 * var(--ru)) rgba(0,0,0,.55), 0 calc(.2 * var(--ru)) calc(.6 * var(--ru)) rgba(0,0,0,.3);
    display:flex; flex-direction:column;
    animation:gpPop .55s cubic-bezier(.2,1.25,.4,1) both;
}

@keyframes gpPop {
  from { opacity:0; transform:translateY(calc(1.6 * var(--ru))) scale(.95); }
  to { opacity:1; transform:none; }
}

.gp-root .top {
  display:flex; align-items:center; gap:calc(.55 * var(--ru)); padding:calc(.85 * var(--ru)) calc(1.05 * var(--ru)) calc(.5 * var(--ru));
}

.gp-root .brand {
  font-weight:800; font-size:calc(1.02 * var(--ru)); letter-spacing:-.02em;
}

.gp-root .brand i {
  font-style:normal; color:var(--violet);
}

.gp-root .dots {
  display:flex; gap:calc(.3 * var(--ru)); margin-left:calc(.2 * var(--ru));
}

.gp-root .dots b {
  width:calc(.42 * var(--ru)); height:calc(.42 * var(--ru)); border-radius:50%; background:var(--line); transition:.3s;
}

.gp-root .dots b.on {
  background:var(--violet); transform:scale(1.25);
}

.gp-root .dots b.past {
  background:var(--violet-2);
}

.gp-root .top .sp {
  flex:1;
}

.gp-root .x {
  width:calc(1.9 * var(--ru)); height:calc(1.9 * var(--ru)); border-radius:50%; cursor:pointer; background:#fff; border:1px solid var(--line); display:grid; place-items:center;
}

.gp-root .x svg {
  width:calc(.85 * var(--ru)); height:calc(.85 * var(--ru)); stroke:var(--ink); stroke-width:2.6;
}

.gp-root .stage {
  position:relative; flex:1; min-height:0;
}

.gp-root .scr {
  position:absolute; inset:0; padding:calc(.3 * var(--ru)) calc(1.3 * var(--ru)) calc(1.1 * var(--ru)); overflow:hidden;
    display:flex; flex-direction:column; text-align:center;
    opacity:0; transform:translateX(calc(1.6 * var(--ru))); pointer-events:none;
    transition:opacity .38s ease, transform .48s cubic-bezier(.2,.9,.3,1);
}

.gp-root .scr.on {
  opacity:1; transform:none; pointer-events:auto;
}

.gp-root .scr.past {
  transform:translateX(calc(-1.6 * var(--ru)));
}

.gp-root .badge {
  display:inline-flex; align-items:center; gap:calc(.45 * var(--ru)); margin:calc(.2 * var(--ru)) auto calc(.7 * var(--ru));
    padding:calc(.42 * var(--ru)) calc(1 * var(--ru)); border-radius:999px; background:var(--orange-soft); color:var(--orange);
    font-weight:800; font-size:calc(.78 * var(--ru)); letter-spacing:.05em; text-transform:uppercase;
}

.gp-root .badge svg {
  width:calc(.95 * var(--ru)); height:calc(.95 * var(--ru));
}

.gp-root h2 {
  font-size:calc(1.6 * var(--ru)); line-height:1.14; font-weight:800; letter-spacing:-.02em;
}

.gp-root h2 em {
  font-style:normal; color:var(--violet);
}

.gp-root h2 b {
  color:var(--orange);
}

.gp-root .off {
  color:var(--orange); font-size:calc(2.6 * var(--ru)); font-weight:800; line-height:1; display:block; margin:calc(.15 * var(--ru)) 0;
}

.gp-root .sub {
  color:var(--soft); font-size:calc(.98 * var(--ru)); line-height:1.42;
}

.gp-root .grow {
  flex:1;
}

.gp-root .cta {
  width:100%; height:calc(3.5 * var(--ru)); margin-top:calc(.7 * var(--ru));
    display:flex; align-items:center; justify-content:center; gap:calc(.6 * var(--ru));
    border:0; border-radius:calc(1.05 * var(--ru)); cursor:pointer; font:inherit;
    font-size:calc(1.08 * var(--ru)); font-weight:800; color:#fff;
    background:linear-gradient(96deg,var(--violet),var(--violet-2) 55%,var(--violet-3));
    box-shadow:0 calc(.7 * var(--ru)) calc(1.5 * var(--ru)) rgba(109,40,217,.34);
    transition:transform .16s ease, box-shadow .16s ease;
}

.gp-root .cta:hover {
  transform:translateY(-2px); box-shadow:0 calc(1 * var(--ru)) calc(1.9 * var(--ru)) rgba(109,40,217,.44);
}

.gp-root .cta:active {
  transform:translateY(0);
}

.gp-root .cta:disabled {
  opacity:.45; cursor:not-allowed; box-shadow:none; transform:none; filter:grayscale(.3);
}

.gp-root .demohint {
  margin-top:calc(.5 * var(--ru)); text-align:center; font-size:calc(.8 * var(--ru)); font-weight:600; color:var(--muted);
}

.gp-root .demohint.done {
  color:var(--green);
}

.gp-root .cta svg {
  width:calc(1.15 * var(--ru)); height:calc(1.15 * var(--ru)); stroke:#fff; stroke-width:2.3; fill:none;
}

.gp-root .cta.wa {
  background:linear-gradient(96deg,#25D366,#128C7E); box-shadow:0 calc(.7 * var(--ru)) calc(1.5 * var(--ru)) rgba(18,140,126,.3);
}

.gp-root .cta.wa svg {
  fill:#fff; stroke:none;
}

.gp-root .cta.dl {
  background:#fff; color:var(--ink); border:1.6px solid var(--line); box-shadow:none;
}

.gp-root .cta.dl svg {
  stroke:var(--violet-3);
}

.gp-root .cta.dl:hover {
  border-color:var(--violet); transform:translateY(-2px); box-shadow:0 calc(.6 * var(--ru)) calc(1.2 * var(--ru)) rgba(124,58,237,.14);
}

.gp-root .ghost {
  width:100%; margin-top:calc(.45 * var(--ru)); padding:calc(.35 * var(--ru)); border:0; background:none; cursor:pointer; font:inherit; font-size:calc(.85 * var(--ru)); font-weight:700; color:var(--muted);
}

.gp-root .fine {
  display:flex; justify-content:center; gap:calc(1 * var(--ru)); color:var(--muted); font-size:calc(.8 * var(--ru)); margin-top:calc(.55 * var(--ru));
}

.gp-root .giftwrap {
  position:relative; margin:calc(.5 * var(--ru)) auto; height:clamp(calc(17 * var(--ru)), 52dvh, calc(30 * var(--ru))); aspect-ratio:9/16;
    max-width:calc(100% - calc(.5 * var(--ru))); transform-origin:center center; will-change:transform;
    border-radius:calc(1.4 * var(--ru)); overflow:hidden; background:#EDE7FB;
    box-shadow:0 calc(1.4 * var(--ru)) calc(2.8 * var(--ru)) rgba(76,29,149,.3);
}

.gp-root .scr[data-i="0"].intro {
  padding:0;
}

.gp-root .scr[data-i="0"].intro .giftwrap {
  position:absolute; inset:0; width:auto; height:auto; max-width:none;
    aspect-ratio:auto; margin:0; border-radius:0; z-index:5; box-shadow:none;
}

.gp-root .scr[data-i="0"] h2,
  .gp-root .scr[data-i="0"] > .sub,
  .gp-root .scr[data-i="0"] .cta,
  .gp-root .scr[data-i="0"] .fine {
  transition:opacity .5s ease .1s;
}

.gp-root .scr[data-i="0"].intro h2,
  .gp-root .scr[data-i="0"].intro > .sub,
  .gp-root .scr[data-i="0"].intro .cta,
  .gp-root .scr[data-i="0"].intro .fine {
  opacity:0; pointer-events:none;
}

.gp-root .giftwrap video {
  width:100%; height:100%; object-fit:cover; display:block;
}

.gp-root .giftwrap .halo {
  position:absolute; inset:0; box-shadow:inset 0 0 0 3px rgba(255,255,255,.35); border-radius:calc(1.3 * var(--ru)); pointer-events:none;
}

.gp-root .float {
  position:absolute; bottom:calc(.7 * var(--ru)); left:50%; transform:translateX(-50%);
    display:inline-flex; align-items:center; gap:calc(.35 * var(--ru)); white-space:nowrap;
    background:rgba(20,16,30,.6); backdrop-filter:blur(6px); color:#fff;
    font-weight:700; font-size:calc(.82 * var(--ru)); padding:calc(.4 * var(--ru)) calc(.8 * var(--ru)); border-radius:999px;
}

.gp-root .float b {
  color:#FDBA74;
}

.gp-root .player {
  position:relative; margin:calc(.5 * var(--ru)) 0 calc(.2 * var(--ru)); border-radius:calc(1.1 * var(--ru)); overflow:hidden; background:#000; aspect-ratio:16/9;
}

.gp-root .player video {
  width:100%; height:100%; display:block; object-fit:cover;
}

.gp-root .big-play {
  position:absolute; inset:0; margin:auto; width:calc(3.6 * var(--ru)); height:calc(3.6 * var(--ru)); border:0; cursor:pointer;
    border-radius:50%; background:rgba(255,255,255,.92); display:grid; place-items:center;
    box-shadow:0 calc(.5 * var(--ru)) calc(1.2 * var(--ru)) rgba(0,0,0,.35); transition:.2s;
}

.gp-root .big-play svg {
  width:calc(1.5 * var(--ru)); height:calc(1.5 * var(--ru)); fill:var(--violet-3); margin-left:calc(.15 * var(--ru));
}

.gp-root .big-play.hide {
  opacity:0; pointer-events:none; transform:scale(.7);
}

.gp-root .pbar {
  display:flex; align-items:center; gap:calc(.6 * var(--ru)); margin-top:calc(.65 * var(--ru));
}

.gp-root .pp {
  width:calc(2 * var(--ru)); height:calc(2 * var(--ru)); flex:none; border:0; cursor:pointer; border-radius:50%; background:var(--ink); display:grid; place-items:center;
}

.gp-root .pp svg {
  width:calc(.85 * var(--ru)); height:calc(.85 * var(--ru)); fill:#fff;
}

.gp-root .track {
  flex:1; height:calc(.35 * var(--ru)); border-radius:999px; background:var(--line); cursor:pointer; position:relative;
}

.gp-root .track i {
  display:block; height:100%; border-radius:999px; width:0; background:linear-gradient(90deg,var(--violet),var(--orange));
}

.gp-root .track b {
  position:absolute; top:50%; left:0; width:calc(.7 * var(--ru)); height:calc(.7 * var(--ru)); border-radius:50%; background:#fff; border:2px solid var(--violet); transform:translate(-50%,-50%); box-shadow:0 0 0 calc(.18 * var(--ru)) rgba(124,58,237,.16);
}

.gp-root .time {
  font-size:calc(.75 * var(--ru)); font-weight:700; color:var(--muted); font-variant-numeric:tabular-nums;
}

.gp-root .mute {
  width:calc(1.9 * var(--ru)); height:calc(1.9 * var(--ru)); flex:none; border:0; cursor:pointer; border-radius:calc(.5 * var(--ru)); background:var(--panel); display:grid; place-items:center;
}

.gp-root .mute svg {
  width:calc(1 * var(--ru)); height:calc(1 * var(--ru)); stroke:var(--soft); fill:none; stroke-width:1.8;
}

.gp-root .perks {
  margin-top:calc(.7 * var(--ru)); padding:0 calc(1 * var(--ru)); background:var(--panel); border-radius:calc(1.1 * var(--ru)); text-align:left;
}

.gp-root .pk {
  display:flex; align-items:center; gap:calc(.7 * var(--ru)); padding:calc(.65 * var(--ru)) 0;
}

.gp-root .pk + .pk {
  border-top:1px solid var(--line);
}

.gp-root .pk i {
  flex:none; width:calc(2 * var(--ru)); height:calc(2 * var(--ru)); border-radius:50%; background:linear-gradient(150deg,var(--violet-2),var(--violet-3)); display:grid; place-items:center;
}

.gp-root .pk i svg {
  width:calc(1 * var(--ru)); height:calc(1 * var(--ru)); stroke:#fff; fill:none; stroke-width:2;
}

.gp-root .pk b {
  font-size:calc(.9 * var(--ru)); font-weight:700;
}

.gp-root .pk span {
  display:block; color:var(--soft); font-size:calc(.78 * var(--ru));
}

.gp-root .field {
  margin-top:calc(.9 * var(--ru)); display:flex; align-items:center; gap:calc(.7 * var(--ru)); padding:0 calc(1.1 * var(--ru)); height:calc(3.4 * var(--ru));
    background:#fff; border:1.6px solid var(--violet); border-radius:calc(1 * var(--ru)); transition:box-shadow .2s;
}

.gp-root .field:focus-within {
  box-shadow:0 0 0 calc(.25 * var(--ru)) rgba(124,58,237,.16);
}

.gp-root .field.err {
  border-color:#E4572E; box-shadow:0 0 0 calc(.25 * var(--ru)) rgba(228,87,46,.14);
}

.gp-root .field svg {
  width:calc(1.3 * var(--ru)); height:calc(1.3 * var(--ru)); stroke:#9A94A8; fill:none; stroke-width:1.8;
}

.gp-root .field input {
  flex:1; min-width:0; border:0; outline:0; background:none; font:inherit; font-size:calc(1.02 * var(--ru));
}

.gp-root .msg {
  min-height:calc(1 * var(--ru)); margin-top:calc(.35 * var(--ru)); font-size:calc(.78 * var(--ru)); font-weight:700; color:#E4572E;
}

.gp-root .trust {
  display:grid; gap:calc(.55 * var(--ru)); margin-top:calc(1 * var(--ru)); text-align:left;
}

.gp-root .trust .pk {
  padding:calc(.2 * var(--ru)) 0;
}

.gp-root #gift {
  height:clamp(calc(10 * var(--ru)), 26dvh, calc(15 * var(--ru))); margin:calc(.3 * var(--ru)) 0 calc(.1 * var(--ru)); cursor:grab; touch-action:none; position:relative;
}

.gp-root #gift::before {
  content:""; position:absolute; left:50%; top:50%; width:calc(9.5 * var(--ru)); height:calc(9.5 * var(--ru)); transform:translate(-50%,-50%);
    border-radius:50%;
    background:radial-gradient(circle, rgba(255,178,122,.5) 0%, rgba(255,214,180,.2) 46%, rgba(255,214,180,0) 70%);
}

.gp-root #gift canvas {
  position:relative; width:100%; height:100%; display:block;
}

.gp-root .giftfb {
  position:relative; width:100%; height:100%; display:grid; place-items:center;
}

.gp-root .giftfb .disc {
  width:calc(6.2 * var(--ru)); height:calc(6.2 * var(--ru)); border-radius:50%; display:grid; place-items:center;
    background:linear-gradient(150deg,var(--violet-2),var(--violet-3)); box-shadow:0 calc(1 * var(--ru)) calc(2 * var(--ru)) rgba(109,40,217,.4);
    animation:gpFbPop .7s cubic-bezier(.2,1.4,.4,1) both, gpFbFloat 3s ease-in-out .7s infinite;
}

.gp-root .giftfb .disc .g {
  font-size:calc(2.6 * var(--ru)); line-height:1;
}

.gp-root .giftfb .ring {
  position:absolute; width:calc(6.2 * var(--ru)); height:calc(6.2 * var(--ru)); border-radius:50%; border:2px solid #F97316; animation:gpFbRing 1.2s ease-out .15s both;
}

.gp-root .giftfb .ring.r2 {
  border-color:var(--violet); animation-delay:.4s;
}

.gp-root .giftfb .cf {
  position:absolute; top:50%; left:50%; width:calc(.5 * var(--ru)); height:calc(.72 * var(--ru)); border-radius:1px; opacity:0; animation:gpFbFall 1.3s ease-out var(--d) both;
}

@keyframes gpFbPop {
  0% { transform:scale(0) rotate(-20deg); }
  100% { transform:scale(1) rotate(0); }
}

@keyframes gpFbFloat {
  0%,100% { transform:translateY(0); }
  50% { transform:translateY(calc(-.4 * var(--ru))); }
}

@keyframes gpFbRing {
  0% { transform:scale(.6); opacity:.7; }
  100% { transform:scale(1.9); opacity:0; }
}

@keyframes gpFbFall {
  0% { opacity:1; transform:translate(-50%,-50%) scale(.6); }
  100% { opacity:0; transform:translate(calc(-50% + var(--x)*calc(7 * var(--ru))), calc(2.6 * var(--ru))) rotate(280deg); }
}

.gp-root .tick {
  width:calc(3.6 * var(--ru)); height:calc(3.6 * var(--ru)); border-radius:50%; margin:calc(.3 * var(--ru)) auto calc(.4 * var(--ru));
    background:linear-gradient(150deg,var(--violet-2),var(--violet-3)); display:grid; place-items:center;
    box-shadow:0 calc(.7 * var(--ru)) calc(1.5 * var(--ru)) rgba(109,40,217,.34); animation:gpTk .55s cubic-bezier(.2,1.3,.4,1) both;
}

@keyframes gpTk {
  from { transform:scale(.4); opacity:0; }
  to { transform:none; opacity:1; }
}

.gp-root .tick svg {
  width:calc(1.7 * var(--ru)); height:calc(1.7 * var(--ru)); stroke:#fff; stroke-width:3; fill:none;
}

.gp-root .ticket {
  position:relative; margin:calc(.6 * var(--ru)) auto; width:100%; max-width:calc(19 * var(--ru));
    background:linear-gradient(135deg,#FDBA74,#F97316 55%,#EA580C);
    color:#fff; border-radius:calc(1 * var(--ru)); padding:calc(1 * var(--ru)) calc(1.1 * var(--ru)); display:flex; align-items:center; gap:calc(1 * var(--ru));
    box-shadow:0 calc(.8 * var(--ru)) calc(1.6 * var(--ru)) rgba(234,88,12,.35);
}

.gp-root .ticket::before,
  .gp-root .ticket::after {
  content:""; position:absolute; top:50%; width:calc(1.1 * var(--ru)); height:calc(1.1 * var(--ru)); background:var(--card); border-radius:50%; transform:translateY(-50%);
}

.gp-root .ticket::before {
  left:calc(-.55 * var(--ru));
}

.gp-root .ticket::after {
  right:calc(-.55 * var(--ru));
}

.gp-root .ticket .qr {
  flex:none; width:calc(5 * var(--ru)); height:calc(5 * var(--ru)); background:#fff; border-radius:calc(.6 * var(--ru)); padding:calc(.3 * var(--ru)); display:grid; place-items:center;
}

.gp-root .ticket .qr canvas,
  .gp-root .ticket .qr img {
  width:100% !important; height:100% !important; display:block;
}

.gp-root .ticket .info {
  text-align:left;
}

.gp-root .ticket .info small {
  font-size:calc(.7 * var(--ru)); opacity:.9; letter-spacing:.08em; text-transform:uppercase;
}

.gp-root .ticket .info .pct {
  font-size:calc(2 * var(--ru)); font-weight:800; line-height:1; margin:calc(.1 * var(--ru)) 0;
}

.gp-root .ticket .info .code {
  font-weight:800; letter-spacing:.14em; font-size:calc(.95 * var(--ru)); background:rgba(255,255,255,.2); padding:calc(.15 * var(--ru)) calc(.5 * var(--ru)); border-radius:calc(.4 * var(--ru)); display:inline-block;
}

.gp-root .qrnote {
  color:var(--soft); font-size:calc(.82 * var(--ru)); margin-top:calc(.1 * var(--ru));
}

.gp-root .qrnote b {
  color:var(--ink);
}

.gp-root .scr[data-i="3"] #sentTo {
  margin-top:calc(.3 * var(--ru)); margin-bottom:calc(.4 * var(--ru));
}

.gp-root .cal {
  margin-top:calc(.55 * var(--ru)); flex:1; min-height:calc(16 * var(--ru)); border-radius:calc(1 * var(--ru)); overflow:hidden; border:1px solid var(--line); background:#fff; -webkit-overflow-scrolling:touch;
}

.gp-root .cal iframe,
  .gp-root .cal .calendly-inline-widget {
  width:100%; height:100%; min-height:100%; border:0;
}

.gp-root .app.cal-mode {
  height:calc(100dvh - calc(.4 * var(--ru))); width:min(calc(30 * var(--ru)), 100%);
}

.gp-root .app.cal-mode .scr[data-i="4"] {
  padding:calc(.35 * var(--ru)) calc(.55 * var(--ru)) calc(.55 * var(--ru));
}

.gp-root .app.cal-mode .scr[data-i="4"] .badge {
  display:none;
}

.gp-root .app.cal-mode .scr[data-i="4"] h2 {
  font-size:calc(1.15 * var(--ru)); margin-top:calc(.15 * var(--ru));
}

.gp-root .app.cal-mode .scr[data-i="4"] .sub {
  display:none;
}

.gp-root .app.cal-mode .scr[data-i="4"] .cal {
  min-height:0; margin-top:calc(.45 * var(--ru));
}

.gp-root .app.cal-mode .scr[data-i="4"] .cta {
  height:calc(2.7 * var(--ru)); font-size:calc(.92 * var(--ru)); margin-top:calc(.45 * var(--ru));
}

.gp-root .app.cal-mode .scr[data-i="4"] .ghost {
  margin-top:calc(.2 * var(--ru)); padding:calc(.2 * var(--ru));
}

@media (prefers-reduced-motion:reduce) {
  .gp-root * {
    animation:none !important; transition:none !important;
  }

}

`;
