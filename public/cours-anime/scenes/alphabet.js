/* ------------------------------------------------------------------
   Scène « alphabet ».

   Un seul alphabet, qui ne disparaît jamais et se réorganise à chaque
   chapitre : nuage, onde, groupe, lettre seule, anneau, alphabet
   complet. C'est ce fil-là qui tient la leçon — on ne remplace pas
   des diapositives, on déplace les mêmes lettres.

   Scène « libre » : elle occupe le plateau entier plutôt que d'être un
   objet posé dans une case. Voir docs/COURS-ANIME.md.
   ------------------------------------------------------------------ */
(window.CoursAnime = window.CoursAnime || {}).scenes =
  window.CoursAnime.scenes || {};

window.CoursAnime.scenes.alphabet = function (THREE, parent) {
  var g = new THREE.Group();
  parent.add(g);

  var ALPHABET = ('АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ').split('');
  var POOL = 60, lettres = [], texGlyphe = {}, texHalo = null;
  var P = { forme: 'constellation', lettres: [], mots: [], index: 0 };
  /* Vue par défaut, remplacée dès le premier réglage par celle que
     mesure le noyau : c'est elle qui dit où s'arrête le texte. */
  var VUE = { h: 13, l: 6, P: true, texteHaut: -2, texteDroite: 0, ly: 5 };
  var t = 0;
  var BLANC = new THREE.Color('#ffffff');

  function glyphe(ch) {
    if (texGlyphe[ch]) return texGlyphe[ch];
    var S = 256, c = document.createElement('canvas');
    c.width = c.height = S;
    var x = c.getContext('2d');
    x.font = '800 168px Manrope, "Space Grotesk", sans-serif';
    x.textAlign = 'center'; x.textBaseline = 'middle';
    x.shadowColor = 'rgba(255,255,255,.85)'; x.shadowBlur = 26;
    x.fillStyle = '#fff';
    x.fillText(ch, S / 2, S / 2 + 8);
    x.shadowBlur = 0; x.fillText(ch, S / 2, S / 2 + 8);
    var tx = new THREE.CanvasTexture(c);
    tx.minFilter = THREE.LinearFilter;
    texGlyphe[ch] = tx;
    return tx;
  }
  function halo() {
    if (texHalo) return texHalo;
    var c = document.createElement('canvas'); c.width = c.height = 128;
    var x = c.getContext('2d');
    var gr = x.createRadialGradient(64, 64, 0, 64, 64, 64);
    gr.addColorStop(0, 'rgba(255,255,255,.55)');
    gr.addColorStop(.4, 'rgba(255,255,255,.14)');
    gr.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = gr; x.fillRect(0, 0, 128, 128);
    texHalo = new THREE.CanvasTexture(c);
    return texHalo;
  }

  for (var k = 0; k < POOL; k++) {
    var mat = new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, opacity: 0 });
    var mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat);
    var h = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 2.6), new THREE.MeshBasicMaterial({
      map: halo(), transparent: true, depthWrite: false, opacity: 0,
      blending: THREE.AdditiveBlending
    }));
    h.position.z = -.02;
    mesh.add(h);
    g.add(mesh);
    lettres.push({ mesh: mesh, halo: h, ch: null,
                   c: { x: 0, y: 0, z: -20, s: 1, o: 0 },
                   v: { x: 0, y: 0, z: -20, s: 1, o: 0 } });
  }

  function poser(l, ch) {
    if (l.ch === ch) return;
    l.ch = ch;
    l.mesh.material.map = glyphe(ch);
    l.mesh.material.needsUpdate = true;
  }

  /* Un nuage réparti sur une sphère, sans amas ni trou : la suite de
     Fibonacci donne des points mieux espacés que le hasard. */
  function nuage(i, n, r, biais) {
    var phi = Math.acos(1 - 2 * (i + .5) / n);
    var th = Math.PI * (1 + Math.sqrt(5)) * (i + .5);
    r = r || 11;
    return { x: r * Math.sin(phi) * Math.cos(th),
             y: r * Math.cos(phi) * .58 + (biais || 0),
             z: r * Math.sin(phi) * Math.sin(th) - 7 };
  }

  /* Grandeur relative du sujet selon la forme : c'est elle qui donne
     la variété, puisque la caméra, elle, ne bouge plus. */
  var ZOOM = { constellation: 1, onde: .92, groupe: 1.06, piege: 1.2,
               anneau: 1.06, nouvelle: 1.2, finale: .94 };

  function cibles() {
    var out = [], i, p;
    var sc = P.forme;
    var portrait = VUE.P;
    var hVue = VUE.h, lVue = VUE.l;

    /* Le texte garde sa place ; la scène prend ce qui reste. En
       portrait la bande est au-dessus du bloc, en paysage c'est la
       colonne restée libre à sa droite. */
    var bas = (portrait ? VUE.texteHaut : (VUE.bas === undefined ? -hVue * .34 : VUE.bas)) + .55;
    var haut = VUE.ly - .3;
    var ox = portrait ? 0 : (VUE.texteDroite + lVue / 2) / 2;
    var oyM = bas + .75;
    var oyF = oyM + Math.max(1.6, (haut - oyM) * .62);
    var largeur = portrait ? lVue * .88 : (lVue / 2 - VUE.texteDroite) * .82;
    var zoom = ZOOM[sc] || 1;

    /* 1. Le mot en cours, assemblé sur une ligne au premier plan. */
    var mots = P.mots || [];
    if (mots.length) {
      var mot = String(mots[P.index % mots.length]).split('');
      var ecart = Math.min(1.45, largeur / Math.max(1, mot.length));
      for (i = 0; i < mot.length; i++) {
        out.push({ ch: mot[i], x: ox + (i - (mot.length - 1) / 2) * ecart, y: oyM, z: 3.2,
                   s: Math.min(1.35, ecart * .9), o: 1, focus: true, teinte: true,
                   vitesse: Math.max(1.5, 3.6 - i * .28) });
      }
    }

    /* 2. Le sujet du chapitre. */
    var L = P.lettres || [];
    if ((sc === 'groupe' || sc === 'finale') && L.length) {
      var parRang = sc === 'finale' ? (portrait ? 5 : 7) : (portrait ? 3 : L.length);
      var rangs = Math.ceil(L.length / parRang);
      var pasG = Math.min(1.9, largeur / parRang);
      for (i = 0; i < L.length; i++) {
        var rang = Math.floor(i / parRang), col = i % parRang;
        var dansRang = Math.min(parRang, L.length - rang * parRang);
        out.push({ ch: L[i], x: ox + (col - (dansRang - 1) / 2) * pasG,
                   y: oyF + (rangs - 1) * pasG * .55 - rang * pasG * 1.1, z: 1.4,
                   s: pasG * .82, o: 1, focus: true });
      }
    } else if ((sc === 'piege' || sc === 'nouvelle') && L.length) {
      out.push({ ch: L[0], x: ox, y: oyF, z: 2.4,
                 s: Math.min(5.4, largeur * .7, (haut - oyM) * .9) * zoom,
                 o: 1, focus: true, tourne: true });
    } else if (sc === 'anneau' && L.length) {
      for (i = 0; i < L.length; i++) {
        var a = (i / L.length) * Math.PI * 2;
        var rA = Math.min(2.8, largeur * .3, (haut - oyM) * .36);
        out.push({ ch: L[i], x: ox + Math.cos(a) * rA, y: oyF + Math.sin(a) * rA * .76, z: 2,
                   s: rA * .78, o: 1, focus: true, anneau: a, ax: ox, ay: oyF, rA: rA });
      }
    } else if (sc === 'onde') {
      var pas = (portrait ? lVue * .94 : largeur) / ALPHABET.length;
      for (i = 0; i < ALPHABET.length; i++) {
        out.push({ ch: ALPHABET[i], x: ox + (i - (ALPHABET.length - 1) / 2) * pas,
                   y: oyF, z: 0, s: pas * 3.2, o: .92, onde: i, oy: oyF });
      }
    }

    /* 3. Le reste de l'alphabet, en fond. Il ne disparaît jamais :
          c'est le même alphabet qui se réorganise, et c'est ce fil-là
          qui tient l'ensemble. */
    if (sc !== 'onde') {
      var ouverture = sc === 'constellation';
      for (i = 0; i < ALPHABET.length && out.length < POOL; i++) {
        p = nuage(i, ALPHABET.length, ouverture ? 8.6 : 11, ouverture ? oyF - .4 : oyF - 1.1);
        out.push({ ch: ALPHABET[i], x: p.x, y: p.y, z: p.z,
                   s: ouverture ? 1.15 : .62,
                   o: ouverture ? .86 : .18 });
      }
    }
    return out.slice(0, POOL);
  }

  function appliquer() {
    var cb = cibles(), i, j, l;
    for (i = 0; i < lettres.length; i++) { lettres[i].pris = false; lettres[i].focus = false; }
    var choisi = new Array(cb.length).fill(null);

    /* Priorité à la lettre déjà portée par un emplacement : elle glisse
       vers sa nouvelle place au lieu de disparaître et renaître. */
    for (i = 0; i < cb.length; i++) {
      for (j = 0; j < lettres.length; j++) {
        if (!lettres[j].pris && lettres[j].ch === cb[i].ch) {
          lettres[j].pris = true; choisi[i] = lettres[j]; break;
        }
      }
    }
    for (i = 0; i < cb.length; i++) {
      if (choisi[i]) continue;
      var best = null, bd = 1e9;
      for (j = 0; j < lettres.length; j++) {
        if (lettres[j].pris) continue;
        var dx = lettres[j].v.x - cb[i].x, dy = lettres[j].v.y - cb[i].y;
        var d = dx * dx + dy * dy;
        if (d < bd) { bd = d; best = lettres[j]; }
      }
      if (best) { best.pris = true; poser(best, cb[i].ch); choisi[i] = best; }
    }
    for (i = 0; i < cb.length; i++) {
      l = choisi[i];
      if (!l) continue;
      poser(l, cb[i].ch);
      l.c.x = cb[i].x; l.c.y = cb[i].y; l.c.z = cb[i].z;
      l.c.s = cb[i].s; l.c.o = cb[i].o;
      l.focus = !!cb[i].focus;
      l.tourne = !!cb[i].tourne;
      l.anneau = cb[i].anneau; l.ax = cb[i].ax; l.ay = cb[i].ay; l.rA = cb[i].rA;
      l.onde = cb[i].onde; l.oy = cb[i].oy;
      l.vitesse = cb[i].vitesse || 2.6;
      l.teinte = !!cb[i].teinte;
    }
    for (i = 0; i < lettres.length; i++) {
      if (!lettres[i].pris) { lettres[i].c.o = 0; lettres[i].c.z = -24; }
    }
  }

  return {
    groupe: g,
    libre: true,
    regler: function (p) {
      if (p.alphabet && p.alphabet.length) ALPHABET = p.alphabet;
      P.forme = p.forme || 'constellation';
      P.lettres = p.lettres || [];
      P.mots = p.mots || [];
      P.index = Math.max(0, p.index || 0);
      if (p.vue && p.vue.h) VUE = p.vue;
      appliquer();
    },
    /* Le mot assemblé est le foyer de la scène. */
    source: function () {
      return [VUE.P ? 0 : (VUE.texteDroite + VUE.l / 2) / 2,
              (VUE.P ? VUE.texteHaut : (VUE.bas === undefined ? -VUE.h * .34 : VUE.bas)) + 1.3];
    },
    maj: function (dt, niveau, couleur) {
      t += dt;
      var doux = matchMedia('(prefers-reduced-motion: reduce)').matches;
      var pulse = 1 + niveau * .09;
      var kl = doux ? 1 : 1 - Math.exp(-3.2 * dt);
      for (var i = 0; i < lettres.length; i++) {
        var l = lettres[i], c = l.c, v = l.v;
        var kp = doux ? 1 : 1 - Math.exp(-(l.vitesse || 2.6) * dt);
        var cy = c.y, cx = c.x;
        if (!doux) {
          if (l.onde !== undefined) {
            cy = (l.oy !== undefined ? l.oy : c.y) +
                 Math.sin(t * 1.6 + l.onde * .52) * (.5 + niveau * 2.2);
          }
          if (l.anneau !== undefined) {
            var a = l.anneau + t * .22, rr = l.rA || 2.6;
            cx = (l.ax || 0) + Math.cos(a) * rr;
            cy = (l.ay || 0) + Math.sin(a) * rr * .76;
          }
          if (!l.focus) cy += Math.sin(t * .35 + i) * .22;
        }
        v.x += (cx - v.x) * kp;
        v.y += (cy - v.y) * kp;
        v.z += (c.z - v.z) * kp;
        v.s += (c.s * (l.focus ? pulse : 1) - v.s) * kl;
        v.o += (c.o - v.o) * kl;
        l.mesh.position.set(v.x, v.y, v.z);
        l.mesh.scale.setScalar(Math.max(.001, v.s));
        l.mesh.material.opacity = v.o;
        l.mesh.visible = v.o > .01;
        l.mesh.rotation.y = l.tourne && !doux ? Math.sin(t * .5) * .42 : 0;
        l.halo.material.opacity = l.focus ? v.o * (.2 + niveau * .55) : 0;
        l.halo.material.color.copy(couleur);
        l.mesh.material.color.lerp(l.teinte ? couleur : BLANC, Math.min(1, dt * 3.5));
      }
    }
  };
};
