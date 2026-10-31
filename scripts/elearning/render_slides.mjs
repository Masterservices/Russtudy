/**
 * Fabrique les diapositives d'une leçon, localement.
 *
 *   node scripts/elearning/render_slides.mjs <dossier-lecon>
 *
 * Chaque bloc du lesson.json devient une image, composée à partir de
 * son titre et de ses lignes, aux couleurs du site. Le fichier est
 * ensuite rattaché au bloc sous la clé `media`, comme le ferait une
 * diapositive extraite d'un PowerPoint.
 *
 * Rendu typographique plutôt qu'image générée : une leçon de langue
 * affiche des lettres qui doivent être exactes. Un modèle d'image
 * déforme le cyrillique et les diacritiques, ce qui enseignerait des
 * formes fausses — exactement ce que la leçon corrige.
 */
import { chromium } from 'playwright';
import { readFileSync, writeFileSync, unlinkSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';

const PALETTE = {
  ink: '#0A0A0A',
  paper: '#F0EBE3',
  accent: '#A855F7',
  gold: '#FBBB21',
  blue: '#2460E8',
};

const page = (title, lines, index, total, lang) => `<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1600px;height:1000px;background:${PALETTE.ink};color:${PALETTE.paper};
       font-family:Inter,'DejaVu Sans',sans-serif;display:flex;flex-direction:column;
       padding:92px 104px;position:relative;overflow:hidden}
  .halo{position:absolute;width:900px;height:900px;border-radius:50%;
        background:radial-gradient(circle,${PALETTE.accent}38 0%,transparent 68%);
        top:-280px;right:-240px}
  .halo2{position:absolute;width:680px;height:680px;border-radius:50%;
        background:radial-gradient(circle,${PALETTE.blue}2e 0%,transparent 70%);
        bottom:-300px;left:-200px}
  .mark{font-size:25px;font-weight:800;letter-spacing:-.04em;opacity:.78;position:relative}
  .mark i{color:${PALETTE.accent};font-style:normal}
  h1{font-size:${title.length > 48 ? 58 : 70}px;font-weight:800;letter-spacing:-.035em;
     line-height:1.08;margin:40px 0 46px;max-width:1300px;position:relative}
  .rule{width:132px;height:7px;border-radius:4px;background:${PALETTE.gold};position:relative}
  ul{list-style:none;display:flex;flex-direction:column;gap:${lines.length > 5 ? 18 : 26}px;
     margin-top:44px;position:relative;flex:1;justify-content:center}
  li{font-size:${lines.length > 5 ? 31 : 36}px;line-height:1.42;opacity:.93;
     padding-left:40px;position:relative;max-width:1320px}
  li:before{content:'';position:absolute;left:0;top:.62em;width:17px;height:5px;
            border-radius:3px;background:${PALETTE.accent}}
  .foot{font-size:22px;opacity:.5;position:relative}
</style></head><body>
  <div class="halo"></div><div class="halo2"></div>
  <div class="mark">Rus<i>Study</i>.</div>
  <h1>${title}</h1>
  <div class="rule"></div>
  <ul>${lines.map((l) => `<li>${l}</li>`).join('')}</ul>
  <div class="foot">${index} / ${total}</div>
</body></html>`;

const escape = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const dir = process.argv[2];
if (!dir) {
  console.error('Usage : node render_slides.mjs <dossier-lecon>');
  process.exit(2);
}

const lessonPath = join(dir, 'lesson.json');
const lesson = JSON.parse(readFileSync(lessonPath, 'utf-8'));
const uiLang = lesson.ui_lang ?? 'fr';

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const tab = await browser.newPage({ viewport: { width: 1600, height: 1000 } });

let made = 0;
for (const block of lesson.blocks) {
  const name = `slide-${String(block.position + 1).padStart(2, '0')}.webp`;
  await tab.setContent(
    page(
      escape(block.title ?? ''),
      (block.lines ?? []).map(escape),
      block.position + 1,
      lesson.blocks.length,
      uiLang,
    ),
    { waitUntil: 'networkidle' },
  );
  // Playwright n'écrit qu'en PNG ou JPEG : le webp vient d'une
  // conversion, qui divise le poids par trois sur des aplats de texte.
  const raw = join(dir, `${name}.png`);
  await tab.screenshot({ path: raw, type: 'png' });
  execFileSync('python3', [
    '-I', '-c',
    'import sys;from PIL import Image;Image.open(sys.argv[1]).save(sys.argv[2], "WEBP", quality=88, method=6)',
    raw,
    join(dir, name),
  ]);
  unlinkSync(raw);
  block.media = name;
  made += 1;
}

await browser.close();
writeFileSync(lessonPath, `${JSON.stringify(lesson, null, 2)}\n`, 'utf-8');
console.log(`${made} diapositive(s) rendue(s) dans ${dir}`);
