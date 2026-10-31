/* ------------------------------------------------------------------
   Cours animé — noyau.

   Un cours animé, c'est une leçon dont chaque chapitre règle un seul
   objet en trois dimensions. Le noyau tient tout ce qui ne change pas
   d'un cours à l'autre : la machine à chapitres, la narration, les
   sous-titres mot à mot, la mise en page, le ciel, le grain, la
   parallaxe, les jetons qui sortent de l'objet.

   Ce qui change d'un cours à l'autre tient en deux choses : la scène
   (un module qui sait fabriquer et régler l'objet) et les données de
   la leçon. Voir docs/COURS-ANIME.md.
   ------------------------------------------------------------------ */
(function () {
  'use strict';

  var API = window.CoursAnime || (window.CoursAnime = {});
  API.scenes = API.scenes || {};

  /* Du texte dans une scène : une étiquette dessinée sur un canevas,
     posée sur un plan. Les scènes s'en servent toutes, autant qu'elles
     la partagent — et le cache évite de redessiner le même mot. */
  var CACHE = {};
  API.texte = function (THREE, txt, taille, poids, police) {
    var cle = txt + '|' + taille + '|' + poids;
    if (CACHE[cle]) return CACHE[cle];
    var H = 200, c = document.createElement('canvas'), g = c.getContext('2d');
    var f = (poids || '800') + ' ' + (taille || 120) + 'px ' +
            (police || "'Space Grotesk', Manrope, sans-serif");
    g.font = f;
    var L = Math.max(32, Math.ceil(g.measureText(txt).width) + 56);
    c.width = L; c.height = H;
    g = c.getContext('2d');
    g.font = f;
    g.textAlign = 'center'; g.textBaseline = 'middle';
    g.shadowColor = 'rgba(255,255,255,.75)'; g.shadowBlur = 20;
    g.fillStyle = '#fff';
    g.fillText(txt, L / 2, H / 2);
    g.shadowBlur = 0; g.fillText(txt, L / 2, H / 2);
    var t = new THREE.CanvasTexture(c);
    t.minFilter = THREE.LinearFilter;
    t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
    CACHE[cle] = { tex: t, ratio: L / H };
    return CACHE[cle];
  };

  /* Un point lumineux doux, pour marquer ce qui compte. */
  var TEX_HALO = null;
  API.halo = function (THREE) {
    if (TEX_HALO) return TEX_HALO;
    var c = document.createElement('canvas'); c.width = c.height = 128;
    var x = c.getContext('2d');
    var gr = x.createRadialGradient(64, 64, 0, 64, 64, 64);
    gr.addColorStop(0, 'rgba(255,255,255,.9)');
    gr.addColorStop(.38, 'rgba(255,255,255,.22)');
    gr.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = gr; x.fillRect(0, 0, 128, 128);
    TEX_HALO = new THREE.CanvasTexture(c);
    return TEX_HALO;
  };

  var GABARIT = [
    '<div class="ca-scene"></div>',
    '<div class="ca-voile"></div>',
    '<canvas class="ca-grain"></canvas>',
    '<div class="ca-ui ca-rail" role="tablist"></div>',
    '<header class="ca-ui ca-entete">',
    '  <span class="ca-logo">Rus<span class="s">Study</span><span class="d">.</span></span>',
    '  <span class="ca-compteur"></span>',
    '</header>',
    '<section class="ca-ui ca-texte">',
    '  <p class="ca-sur"></p><h1 class="ca-titre"></h1><ul class="ca-lignes"></ul>',
    '</section>',
    '<div class="ca-ui ca-mot" aria-live="polite"></div>',
    '<div class="ca-ui ca-sous"><p class="ca-sousP"></p></div>',
    '<div class="ca-ui ca-barre">',
    '  <button class="ca-btn ca-rond ca-prec"></button>',
    '  <button class="ca-btn ca-lire"></button>',
    '  <div class="ca-piste" role="progressbar"><i></i></div>',
    '  <span class="ca-fin">0:00</span>',
    '  <button class="ca-btn ca-rond ca-suiv"></button>',
    '  <button class="ca-btn ca-rond ca-txt">≡</button>',
    '</div>',
    '<div class="ca-panneau" aria-hidden="true">',
    '  <button class="ca-btn ca-rond ca-fermer">✕</button>',
    '  <h2></h2><p class="ca-note"></p><ol></ol>',
    '</div>',
    '<div class="ca-entree">',
    '  <span class="ca-meta"></span>',
    '  <h1></h1><p class="ca-pitch"></p>',
    '  <button class="ca-btn ca-commencer"></button>',
    '  <p class="ca-casque"></p>',
    '</div>'
  ].join('');

  /**
   * Lance un cours animé dans un conteneur.
   *
   * @param {HTMLElement} hote    conteneur, vidé puis rempli
   * @param {object} lecon        données de la leçon (voir la doc)
   * @param {object} [options]    { baseAudio, auto }
   * @returns {{detruire: function}}
   */
  API.demarrer = function (hote, lecon, options) {
    var opt = options || {};
    var CH = lecon.chapitres;
    var T = lecon.textes || {};
    var doux = matchMedia('(prefers-reduced-motion: reduce)').matches;
    var vivant = true;

    hote.innerHTML = GABARIT;
    hote.classList.add('ca-hote');
    var $ = function (s) { return hote.querySelector(s); };
    var elRail = $('.ca-rail'), elCompteur = $('.ca-compteur'),
        elSur = $('.ca-sur'), elTitre = $('.ca-titre'), elLignes = $('.ca-lignes'),
        elTexte = $('.ca-texte'), elMot = $('.ca-mot'), elSousP = $('.ca-sousP'),
        elLire = $('.ca-lire'), elPiste = $('.ca-piste i'), elFin = $('.ca-fin'),
        elPanneau = $('.ca-panneau'), elEntree = $('.ca-entree'),
        cG = $('.ca-grain'), gG = cG.getContext('2d');

    $('.ca-prec').textContent = '←';
    $('.ca-suiv').textContent = '→';
    $('.ca-prec').setAttribute('aria-label', T.precedent || '');
    $('.ca-suiv').setAttribute('aria-label', T.suivant || '');
    $('.ca-txt').setAttribute('aria-label', T.texteIntegral || '');
    $('.ca-fermer').setAttribute('aria-label', T.fermer || '');
    $('.ca-piste').setAttribute('aria-label', T.progression || '');
    elPanneau.querySelector('h2').textContent = T.titrePanneau || '';
    elPanneau.querySelector('.ca-note').textContent = T.notePanneau || '';
    elEntree.querySelector('.ca-meta').textContent = (lecon.intro && lecon.intro.meta) || '';
    elEntree.querySelector('h1').innerHTML = (lecon.intro && lecon.intro.titre) || '';
    elEntree.querySelector('.ca-pitch').textContent = (lecon.intro && lecon.intro.texte) || '';
    elEntree.querySelector('.ca-casque').textContent = (lecon.intro && lecon.intro.note) || '';
    $('.ca-commencer').textContent = (lecon.intro && lecon.intro.bouton) || '→';
    hote.setAttribute('lang', lecon.ui || 'fr');


    var etat = { i: 0, jeton: -1, niveau: 0, vus: [0] };
    /* Au-delà, le bloc de texte mange la scène et les sous-titres. */
    var LIGNES_VUES = 4;
    /* Une leçon dont la voix n'est pas encore enregistrée se lit quand
       même : les jetons défilent au rythme de la lecture, et les
       commandes de lecture s'effacent plutôt que de ne rien faire. */
    var minuterie = null;

    /* ===================== narration ===================== */
    var audio = new Audio();
    audio.preload = 'none';
    audio.crossOrigin = 'anonymous';
    var ctxAudio = null, analyseur = null, spectre = null;

    function urlAudio(nom) {
      if (!nom) return '';
      if (/^(https?:)?\/\//.test(nom) || nom.charAt(0) === '/') return nom;
      return (opt.baseAudio || '') + nom;
    }
    function brancherAnalyse() {
      if (ctxAudio) return;
      try {
        var AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        ctxAudio = new AC();
        var src = ctxAudio.createMediaElementSource(audio);
        analyseur = ctxAudio.createAnalyser();
        analyseur.fftSize = 64;
        analyseur.smoothingTimeConstant = .78;
        src.connect(analyseur);
        analyseur.connect(ctxAudio.destination);
        spectre = new Uint8Array(analyseur.frequencyBinCount);
      } catch (e) { analyseur = null; }
    }
    function mmss(s) {
      if (!isFinite(s)) return '0:00';
      var m = Math.floor(s / 60), r = Math.floor(s % 60);
      return m + ':' + (r < 10 ? '0' : '') + r;
    }

    /* ===================== 3D ===================== */
    var gl = null, rendu, scene3d, cam, etoiles, nebuleuse, scene, etiq = null;
    var plans = [], pile = [], curseur = 0, POOL = 4, cacheTex = {};
    var camCible, camActuel, teinte, teinteCible, BLANC;
    var parallax = { x: 0, y: 0, cx: 0, cy: 0 };
    var vue = { h: 12, l: 12, P: true, bx: 0, by: 0, ech: 1, lx: 0, ly: 0, taille: 2 };
    var THREE = window.THREE;

    function texture(txt, taille, poids) {
      var cle = txt + '|' + taille;
      if (cacheTex[cle]) return cacheTex[cle];
      var H = 200, c = document.createElement('canvas'), g = c.getContext('2d');
      var police = poids + ' ' + taille + 'px ' + (lecon.police || "'Space Grotesk', Manrope, sans-serif");
      g.font = police;
      var L = Math.ceil(g.measureText(txt).width) + 56;
      c.width = L; c.height = H;
      g = c.getContext('2d');
      g.font = police;
      g.textAlign = 'center'; g.textBaseline = 'middle';
      g.shadowColor = 'rgba(255,255,255,.75)'; g.shadowBlur = 20;
      g.fillStyle = '#fff';
      g.fillText(txt, L / 2, H / 2);
      g.shadowBlur = 0; g.fillText(txt, L / 2, H / 2);
      var t = new THREE.CanvasTexture(c);
      t.minFilter = THREE.LinearFilter;
      t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
      cacheTex[cle] = { tex: t, ratio: L / H };
      return cacheTex[cle];
    }

    function initGL() {
      var fabrique = API.scenes[lecon.scene];
      if (!fabrique) return false;

      rendu = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      rendu.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
      rendu.setSize(hote.clientWidth || innerWidth, hote.clientHeight || innerHeight);
      $('.ca-scene').appendChild(rendu.domElement);

      scene3d = new THREE.Scene();
      cam = new THREE.PerspectiveCamera(52, 1, .1, 100);
      camCible = new THREE.Vector3(0, 0, 13.5);
      camActuel = new THREE.Vector3(0, 0, 21);
      teinte = new THREE.Color(CH[0].teinte);
      teinteCible = new THREE.Color(CH[0].teinte);
      BLANC = new THREE.Color('#ffffff');

      var n = 900, p = new Float32Array(n * 3);
      for (var i = 0; i < n; i++) {
        var r = 18 + Math.random() * 26, a = Math.random() * Math.PI * 2,
            b = Math.acos(2 * Math.random() - 1);
        p[i * 3] = r * Math.sin(b) * Math.cos(a);
        p[i * 3 + 1] = r * Math.cos(b) * .7;
        p[i * 3 + 2] = r * Math.sin(b) * Math.sin(a) - 12;
      }
      var geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(p, 3));
      /* Sans texture, un point se dessine en carré : une étoile
         proche de la caméra devient alors un défaut à l'écran. */
      etoiles = new THREE.Points(geo, new THREE.PointsMaterial({
        size: .14, map: API.halo(THREE), color: 0xffffff, transparent: true,
        opacity: .45, depthWrite: false, blending: THREE.AdditiveBlending
      }));
      scene3d.add(etoiles);

      var cv = document.createElement('canvas'); cv.width = cv.height = 128;
      var x = cv.getContext('2d');
      var gr = x.createRadialGradient(64, 64, 0, 64, 64, 64);
      gr.addColorStop(0, 'rgba(255,255,255,.9)');
      gr.addColorStop(.45, 'rgba(255,255,255,.2)');
      gr.addColorStop(1, 'rgba(255,255,255,0)');
      x.fillStyle = gr; x.fillRect(0, 0, 128, 128);
      nebuleuse = new THREE.Mesh(new THREE.PlaneGeometry(46, 34),
        new THREE.MeshBasicMaterial({
          map: new THREE.CanvasTexture(cv), transparent: true, opacity: .35,
          depthWrite: false, blending: THREE.AdditiveBlending, color: teinte.clone()
        }));
      nebuleuse.position.set(0, 0, -10);
      scene3d.add(nebuleuse);

      var racine = new THREE.Group();
      scene3d.add(racine);
      scene = fabrique(THREE, racine);
      if (scene.configurer && lecon.config) scene.configurer(lecon.config);

      for (var k = 0; k < POOL; k++) {
        var m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1),
          new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, opacity: 0 }));
        m.renderOrder = 9; m.visible = false;
        scene3d.add(m);
        plans.push({ mesh: m, txt: null, ratio: 2,
                     c: { x: 0, y: 0, s: 1, o: 0 }, v: { x: 0, y: 0, s: 1, o: 0 } });
      }

      var e = new THREE.Mesh(new THREE.PlaneGeometry(1, 1),
        new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, opacity: 0 }));
      e.renderOrder = 8; e.visible = false;
      scene.groupe.add(e);
      var geoA = new THREE.BufferGeometry();
      geoA.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
      var aig = new THREE.Line(geoA, new THREE.LineBasicMaterial({
        color: 0xffffff, transparent: true, opacity: 0, depthWrite: false }));
      aig.renderOrder = 8; aig.visible = false;
      scene.groupe.add(aig);
      etiq = { mesh: e, aiguille: aig, o: 0, cible: 0 };
      return true;
    }

    /* ===================== mise en page ===================== */
    /*
     * L'objet occupe ce que le texte lui laisse.
     *
     * Un chapitre au titre long et à trois lignes ne laisse pas la
     * même place qu'un chapitre d'une ligne : la place se mesure sur
     * la page rendue, elle ne se devine pas à l'avance. En portrait,
     * l'objet prend la bande entre l'en-tête et le texte ; en paysage,
     * la colonne restée libre à droite du texte.
     */
    function mesurer() {
      var L = hote.clientWidth || innerWidth, H = hote.clientHeight || innerHeight;
      var P = H > L;
      var h = 2 * camCible.z * Math.tan(52 * Math.PI / 360);
      var l = h * (L / H);
      vue.P = P; vue.h = h; vue.l = l;
      var cadre = scene.cadre || { hauteur: 6.6, largeur: 4.1 };

      var rH = hote.getBoundingClientRect();
      if (scene.libre) {
        var rL = elTexte.getBoundingClientRect();
        vue.ech = 1;
        vue.bx = 0; vue.by = 0;
        vue.lx = P ? 0 : l * .22;
        vue.ly = (.5 - 86 / H) * h;
        vue.taille = P ? 1.7 : 1.9;
        vue.texteHaut = (.5 - (rL.top - rH.top) / H) * h;
        vue.texteDroite = ((rL.right - rH.left) / L - .5) * l;
        vue.bas = (.5 - ($('.ca-barre').getBoundingClientRect().top - rH.top) / H) * h;
        return;
      }
      var rT = elTexte.getBoundingClientRect();
      var haut = 62, bas, gauche = 0, droite = L;
      if (P) {
        bas = Math.max(haut + 80, rT.top - rH.top - 12);
      } else {
        bas = Math.max(haut + 80, $('.ca-barre').getBoundingClientRect().top - rH.top - 10);
        gauche = Math.min(L * .62, rT.right - rH.left + 24);
        /* Un texte qui mange toute la largeur ne laisse rien : on
           garde alors une colonne minimale plutôt que rien du tout. */
        if (droite - gauche < L * .3) gauche = L * .55;
      }

      /* Une bande du haut reste aux jetons : ce qui sort de l'objet
         doit pouvoir se poser quelque part. */
      var bande = (bas - haut) * .82;
      vue.ech = Math.max(.25, Math.min(1.35,
        (bande / H) * h / cadre.hauteur,
        ((droite - gauche) * .88 / L) * l / cadre.largeur));
      vue.bx = ((gauche + droite) / 2 / L - .5) * l;
      vue.by = (.5 - (haut + (bas - haut) * .58) / H) * h;

      vue.lx = vue.bx + (P ? .25 : 0);
      vue.ly = Math.min(
        (.5 - (haut + 10) / H) * h - .45,
        vue.by + cadre.hauteur * .5 * vue.ech + (P ? .7 : .8),
      );
      vue.taille = P ? 1.85 : 2.1;
    }

    function placer() {
      var ch = CH[etat.i];
      if (gl) mesurer();
      /* Une scène « libre » se place elle-même : elle n'est pas un
         objet posé dans une case, elle occupe le plateau. Le noyau lui
         donne la vue et la laisse faire. */
      if (!scene.libre) {
        scene.groupe.position.set(vue.bx, vue.by, 0);
        scene.groupe.scale.setScalar(vue.ech);
      }

      var reg = {}, q, w;
      for (q in ch.params) reg[q] = ch.params[q];
      var actif = ch.jetons && ch.jetons[etat.jeton];
      if (actif && actif.params) {
        for (w in actif.params) if (actif.params[w] !== undefined) reg[w] = actif.params[w];
      }
      reg.index = etat.jeton;
      reg.chapitre = etat.i;
      reg.vue = vue;
      scene.regler(reg);

      var oeil = scene.camera && scene.camera(etat.i, vue);
      camCible.set(oeil ? oeil[0] : 0, oeil ? oeil[1] : 0,
                   oeil ? oeil[2] : (vue.P ? 13.5 : 12.5));
      teinteCible.set(ch.teinte);
    }

    function poserEtiquette(ch) {
      if (!etiq) return;
      if (!ch.focus || !scene.ancre) { etiq.cible = 0; return; }
      var a = scene.ancre(ch.focus.ancre);
      if (!a) { etiq.cible = 0; return; }
      var t = texture(ch.focus.texte, 60, '800');
      etiq.mesh.material.map = t.tex;
      etiq.mesh.material.needsUpdate = true;
      etiq.mesh.scale.set(t.ratio * .78, .78, 1);
      var cadre = scene.cadre || { largeur: 4.1 };
      var x = cadre.largeur * .56 + t.ratio * .4;
      etiq.mesh.position.set(x, a[1], .3);
      var pa = etiq.aiguille.geometry.attributes.position;
      pa.setXYZ(0, a[0], a[1], .3);
      pa.setXYZ(1, x - t.ratio * .42, a[1], .3);
      pa.needsUpdate = true;
      etiq.cible = 1;
    }

    /* Un jeton qui arrive sort de l'objet : il naît à la bouche de la
       scène, puis monte prendre sa place pendant que le précédent
       s'efface. */
    function emettre(txt) {
      if (!gl) return;
      if (!txt) { pile.length = 0; return; }
      var p = plans[curseur++ % plans.length];
      var i = pile.indexOf(p);
      if (i >= 0) pile.splice(i, 1);
      var t = texture(txt, 132, '800');
      p.mesh.material.map = t.tex;
      p.mesh.material.needsUpdate = true;
      p.ratio = t.ratio;
      p.txt = txt;
      var source = (scene.source && scene.source()) || [0, 0];
      p.v.x = scene.libre ? source[0] : vue.bx + source[0] * vue.ech;
      p.v.y = scene.libre ? source[1] : vue.by + source[1] * vue.ech;
      p.v.s = .25; p.v.o = 0;
      pile.unshift(p);
      while (pile.length > 3) pile.pop();
    }

    /* ===================== boucle ===================== */
    var dernier = performance.now(), tG = 0, image = 0;
    function boucle(maintenant) {
      if (!vivant) return;
      image = requestAnimationFrame(boucle);
      var dt = Math.min(.05, (maintenant - dernier) / 1000);
      dernier = maintenant;

      if (analyseur) {
        analyseur.getByteFrequencyData(spectre);
        var s = 0;
        for (var q = 0; q < spectre.length; q++) s += spectre[q];
        etat.niveau += (s / spectre.length / 255 - etat.niveau) * Math.min(1, dt * 9);
      } else etat.niveau += (0 - etat.niveau) * Math.min(1, dt * 4);

      if (!gl) return;
      scene.maj(dt, etat.niveau, teinte);

      var clair = teinte.clone().lerp(BLANC, .4);
      var k = doux ? 1 : 1 - Math.exp(-3.4 * dt);
      for (var i = 0; i < plans.length; i++) {
        var p = plans[i], r = pile.indexOf(p);
        if (r < 0) p.c.o = 0;
        else {
          p.c.x = vue.lx + r * 1.5;
          p.c.y = vue.ly - r * .55;
          p.c.s = r === 0 ? (vue.taille + etat.niveau * .14) : vue.taille * .62;
          p.c.o = r === 0 ? 1 : (r === 1 ? .2 : 0);
        }
        var c = p.c, v = p.v;
        v.x += (c.x - v.x) * k; v.y += (c.y - v.y) * k;
        v.s += (c.s - v.s) * k; v.o += (c.o - v.o) * k;
        p.mesh.position.set(v.x, v.y, .5);
        p.mesh.scale.set(v.s * p.ratio * .5, v.s * .5, 1);
        p.mesh.material.opacity = v.o;
        p.mesh.visible = v.o > .01 && !!p.mesh.material.map;
        p.mesh.material.color.lerp(r === 0 ? clair : BLANC, Math.min(1, dt * 3));
      }

      etiq.o += (etiq.cible - etiq.o) * Math.min(1, dt * 2.5);
      etiq.mesh.material.opacity = etiq.o * (.55 + etat.niveau * .45);
      etiq.mesh.visible = etiq.o > .02;
      etiq.mesh.material.color.copy(clair);
      etiq.aiguille.material.opacity = etiq.o * .4;
      etiq.aiguille.material.color.copy(clair);
      etiq.aiguille.visible = etiq.o > .02;

      teinte.lerp(teinteCible, Math.min(1, dt * 2));
      nebuleuse.material.color.copy(teinte);
      var foyer = scene.libre ? ((scene.source && scene.source()) || [0, 0]) : [vue.bx, vue.by];
      nebuleuse.position.set(foyer[0], foyer[1], -10);
      nebuleuse.material.opacity = .2 + etat.niveau * .3;
      if (!doux) etoiles.rotation.y += dt * .01;

      parallax.cx += (parallax.x - parallax.cx) * Math.min(1, dt * 2.2);
      parallax.cy += (parallax.y - parallax.cy) * Math.min(1, dt * 2.2);
      camActuel.x += (camCible.x + parallax.cx * .55 - camActuel.x) * Math.min(1, dt * 1.6);
      camActuel.y += (camCible.y + parallax.cy * .38 - camActuel.y) * Math.min(1, dt * 1.6);
      camActuel.z += (camCible.z - camActuel.z) * Math.min(1, dt * 1.6);
      cam.position.copy(camActuel);
      cam.lookAt(parallax.cx * .18, parallax.cy * .12, 0);

      rendu.render(scene3d, cam);

      tG += dt;
      if (!doux && tG >= .09) {
        tG = 0;
        var img = gG.createImageData(cG.width, cG.height), d = img.data;
        for (var j = 0; j < d.length; j += 4) {
          var bruit = (Math.random() * 255) | 0;
          d[j] = d[j + 1] = d[j + 2] = bruit; d[j + 3] = 24;
        }
        gG.putImageData(img, 0, 0);
      }
    }

    /* ===================== chapitres ===================== */
    function rendreChapitre(anim) {
      var ch = CH[etat.i];
      hote.style.setProperty('--ca-teinte', ch.teinte);
      elSur.textContent = ch.sur || '';
      elTitre.textContent = ch.titre;
      elLignes.innerHTML = (ch.lignes || []).slice(0, LIGNES_VUES).map(function (l) {
        return '<li>' + echapper(l) + '</li>';
      }).join('');
      elCompteur.textContent = ('0' + ch.n).slice(-2) + ' / ' + ('0' + CH.length).slice(-2);
      elSousP.setAttribute('lang', lecon.langueNarration || 'fr');
      elSousP.innerHTML = (ch.narration || '').split(/\s+/).map(function (m) {
        return '<span class="m">' + echapper(m) + '</span>';
      }).join(' ');

      if (anim && !doux) {
        elTexte.classList.remove('entre');
        void elTexte.offsetWidth;
        elTexte.classList.add('entre');
      }
      etat.jeton = -1;
      allerJeton(0);
      majRail();
      if (gl) { poserEtiquette(ch); placer(); }

      $('.ca-prec').disabled = etat.i === 0;
      $('.ca-suiv').disabled = etat.i === CH.length - 1;

      /* La voix se juge chapitre par chapitre : une leçon dont la
         narration n'est enregistrée qu'en partie se lit quand même.
         Sans voix, les jetons défilent au rythme de la lecture et les
         commandes de lecture s'effacent plutôt que de ne rien faire. */
      clearInterval(minuterie);
      audio.pause();
      var sansVoix = !ch.audio;
      ['.ca-lire', '.ca-piste', '.ca-fin'].forEach(function (c) {
        $(c).style.display = sansVoix ? 'none' : '';
      });
      $('.ca-barre').style.justifyContent = sansVoix ? 'space-between' : '';
      if (sansVoix) {
        audio.removeAttribute('src');
        var jetons = ch.jetons || [];
        if (jetons.length > 1) {
          minuterie = setInterval(function () {
            if (!vivant) return clearInterval(minuterie);
            allerJeton((etat.jeton + 1) % jetons.length);
          }, 3600);
        }
        return;
      }
      audio.src = urlAudio(ch.audio);
      audio.currentTime = 0;
      elLire.textContent = '▶ ' + (T.ecouter || '');
      elPiste.style.width = '0%';
      elFin.textContent = '0:00';
    }

    function echapper(s) {
      return String(s).replace(/[&<>]/g, function (c) {
        return c === '&' ? '&amp;' : c === '<' ? '&lt;' : '&gt;';
      });
    }

    function allerJeton(i) {
      var jetons = CH[etat.i].jetons || [];
      if (i === etat.jeton || !jetons.length) return;
      etat.jeton = i;
      var j = jetons[i];
      elMot.innerHTML = '<span class="ru"' + (j.barre ? ' data-barre="1"' : '') + '>' +
        echapper(j.t) + '</span>' + (j.s ? '<span class="fr">' + echapper(j.s) + '</span>' : '');
      elMot.classList.remove('chg');
      void elMot.offsetWidth;
      elMot.classList.add('chg');
      emettre(j.souffle || null);
      if (gl) placer();
    }

    function majRail() {
      elRail.innerHTML = CH.map(function (c, i) {
        return '<button role="tab" data-i="' + i + '" data-vu="' +
          (etat.vus.indexOf(i) >= 0 ? 1 : 0) + '" aria-current="' + (i === etat.i) +
          '" aria-label="' + (T.chapitre || '') + ' ' + c.n + '"></button>';
      }).join('');
    }

    function aller(i) {
      i = Math.max(0, Math.min(CH.length - 1, i));
      if (i === etat.i) return;
      etat.i = i;
      if (etat.vus.indexOf(i) < 0) etat.vus.push(i);
      rendreChapitre(true);
    }

    function basculer() {
      if (!CH[etat.i].audio) return;
      brancherAnalyse();
      if (ctxAudio && ctxAudio.state === 'suspended') ctxAudio.resume();
      if (audio.paused) audio.play().catch(function () {}); else audio.pause();
    }

    /* ===================== écoute ===================== */
    var liens = [];
    function sur(cible, nom, fn) {
      cible.addEventListener(nom, fn);
      liens.push([cible, nom, fn]);
    }

    sur(audio, 'play', function () { elLire.textContent = '❚❚ ' + (T.pause || ''); });
    sur(audio, 'pause', function () { elLire.textContent = '▶ ' + (T.ecouter || ''); });
    sur(audio, 'ended', function () {
      elLire.textContent = '▶ ' + (T.ecouter || '');
      if (etat.i < CH.length - 1) setTimeout(function () { if (vivant) aller(etat.i + 1); }, 900);
    });
    sur(audio, 'timeupdate', function () {
      if (!audio.duration) return;
      var p = audio.currentTime / audio.duration;
      elPiste.style.width = (p * 100).toFixed(1) + '%';
      elFin.textContent = mmss(audio.duration - audio.currentTime);
      var mots = elSousP.querySelectorAll('.m');
      var jusqu = Math.floor(p * mots.length);
      for (var i = 0; i < mots.length; i++) mots[i].classList.toggle('dit', i <= jusqu);
      var jetons = CH[etat.i].jetons || [];
      if (jetons.length) allerJeton(Math.min(jetons.length - 1, Math.floor(p * jetons.length)));
    });

    sur($('.ca-prec'), 'click', function () { aller(etat.i - 1); });
    sur($('.ca-suiv'), 'click', function () { aller(etat.i + 1); });
    sur(elLire, 'click', basculer);
    sur(elRail, 'click', function (e) {
      var b = e.target.closest('button[data-i]');
      if (b) aller(+b.dataset.i);
    });
    sur(window, 'keydown', function (e) {
      if (!hote.isConnected) return;
      if (e.key === 'ArrowRight') aller(etat.i + 1);
      else if (e.key === 'ArrowLeft') aller(etat.i - 1);
      else if (e.key === ' ' && e.target === document.body) { e.preventDefault(); basculer(); }
      else if (e.key === 'Escape') fermerPanneau();
    });
    sur(window, 'pointermove', function (e) {
      var r = hote.getBoundingClientRect();
      parallax.x = ((e.clientX - r.left) / r.width - .5) * 2;
      parallax.y = -((e.clientY - r.top) / r.height - .5) * 2;
    });
    sur(window, 'deviceorientation', function (e) {
      if (e.gamma == null) return;
      parallax.x = Math.max(-1, Math.min(1, e.gamma / 32));
      parallax.y = Math.max(-1, Math.min(1, ((e.beta || 45) - 45) / 32));
    });

    function fermerPanneau() {
      elPanneau.classList.remove('ouvert');
      elPanneau.setAttribute('aria-hidden', 'true');
    }
    sur($('.ca-txt'), 'click', function () {
      elPanneau.querySelector('ol').innerHTML = CH.map(function (c) {
        var points = (c.lignes || []).length
          ? '<ul class="pts">' + c.lignes.map(function (l) {
              return '<li>' + echapper(l) + '</li>';
            }).join('') + '</ul>'
          : '';
        return '<li><p class="num">' + ('0' + c.n).slice(-2) +
          (c.sur ? ' · ' + echapper(c.sur) : '') + '</p>' +
          '<p class="t">' + echapper(c.titre) + '</p>' + points +
          '<p class="r" lang="' + (lecon.langueNarration || 'fr') + '">' +
          echapper(c.narration || '') + '</p>' +
          (c.traduction ? '<p class="f">' + echapper(c.traduction) + '</p>' : '') + '</li>';
      }).join('');
      elPanneau.classList.add('ouvert');
      elPanneau.setAttribute('aria-hidden', 'false');
    });
    sur($('.ca-fermer'), 'click', fermerPanneau);

    function dimensionner() {
      var L = hote.clientWidth || innerWidth, H = hote.clientHeight || innerHeight;
      if (gl) {
        rendu.setSize(L, H);
        cam.aspect = L / H;
        cam.updateProjectionMatrix();
        mesurer();
      }
      cG.width = Math.ceil(L / 3);
      cG.height = Math.ceil(H / 3);
    }
    sur(window, 'resize', function () { dimensionner(); if (gl) placer(); });

    sur($('.ca-commencer'), 'click', function () {
      elEntree.classList.add('parti');
      if (typeof DeviceOrientationEvent !== 'undefined' &&
          typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission().catch(function () {});
      }
      if (CH[etat.i].audio) setTimeout(function () { if (vivant) basculer(); }, 420);
    });

    /* ===================== démarrage ===================== */
    try { if (THREE) gl = initGL(); } catch (e) { gl = null; }
    if (!gl) {
      $('.ca-scene').style.background =
        'radial-gradient(ellipse at 50% 32%, rgba(36,96,232,.3), transparent 70%)';
    }
    dimensionner();
    rendreChapitre(false);
    if (gl) { placer(); image = requestAnimationFrame(boucle); }
    if (opt.auto) {
      elEntree.classList.add('parti');
      setTimeout(function () { if (vivant) basculer(); }, 300);
    }

    return {
      detruire: function () {
        vivant = false;
        clearInterval(minuterie);
        cancelAnimationFrame(image);
        audio.pause();
        audio.src = '';
        liens.forEach(function (l) { l[0].removeEventListener(l[1], l[2]); });
        liens.length = 0;
        if (ctxAudio && ctxAudio.close) ctxAudio.close().catch(function () {});
        if (rendu) { rendu.dispose(); }
        hote.innerHTML = '';
        hote.classList.remove('ca-hote');
      }
    };
  };
})();
