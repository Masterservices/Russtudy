/* ------------------------------------------------------------------
   La bouche.

   Une coupe sagittale réduite à ce que la leçon enseigne vraiment :
   où va la langue, si les lèvres s'arrondissent, de combien la
   mâchoire s'ouvre, si l'air passe aussi par le nez, si les cordes
   vibrent, et où se place la friction. Sept paramètres, pas un de
   plus — chaque chapitre règle l'instrument, la voix le fait bouger.

   Le profil est plein, pas seulement tracé : un visage de côté se
   reconnaît à sa masse. L'œil et l'oreille achèvent la lecture.
   ------------------------------------------------------------------ */
(window.CoursAnime = window.CoursAnime || {}).scenes =
  window.CoursAnime.scenes || {};

window.CoursAnime.scenes.bouche = function (THREE, parent) {
  var g = new THREE.Group();
  parent.add(g);
  /* Le modèle est dessiné à l'échelle anatomique ; ce décalage ramène
     son centre sur l'origine du groupe, pour que moteur.js n'ait plus
     qu'à le poser et à le dimensionner. */
  var M = new THREE.Group();
  var DX = .44, DY = -.13;
  M.position.set(DX, DY, 0);
  g.add(M);

  var P = { recul: .5, hauteur: .5, arrondi: .3, ouverture: .4, nasal: 0, voix: 1, friction: 0 };
  var C = { recul: .5, hauteur: .5, arrondi: .3, ouverture: .4, nasal: 0, voix: 1, friction: 0 };

  /* ---------- fabriques ---------- */
  function plein(pts, couleur, opacite, ordre) {
    var vec = pts.map(function (p) { return new THREE.Vector2(p[0], p[1]); });
    var tri = THREE.ShapeUtils.triangulateShape(vec, []);
    var idx = [];
    tri.forEach(function (f) { idx.push(f[0], f[1], f[2]); });
    var geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pts.length * 3), 3));
    geo.setIndex(idx);
    var m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({
      color: couleur, transparent: true, opacity: opacite,
      depthWrite: false, side: THREE.DoubleSide
    }));
    m.renderOrder = ordre || 0;
    M.add(m);
    ecrire(geo, pts);
    return m;
  }
  function trait(pts, couleur, opacite, ordre, boucle) {
    var geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pts.length * 3), 3));
    var m = new (boucle ? THREE.LineLoop : THREE.Line)(geo, new THREE.LineBasicMaterial({
      color: couleur, transparent: true, opacity: opacite, depthWrite: false
    }));
    m.renderOrder = ordre || 4;
    M.add(m);
    ecrire(geo, pts);
    return m;
  }
  function ecrire(geo, pts) {
    var a = geo.attributes.position;
    for (var i = 0; i < pts.length && i < a.count; i++) a.setXYZ(i, pts[i][0], pts[i][1], 0);
    a.needsUpdate = true;
  }
  function halo(taille, opacite, ordre) {
    var cv = document.createElement('canvas'); cv.width = cv.height = 64;
    var x = cv.getContext('2d');
    var gr = x.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, 'rgba(255,255,255,.95)');
    gr.addColorStop(.4, 'rgba(255,255,255,.3)');
    gr.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = gr; x.fillRect(0, 0, 64, 64);
    var m = new THREE.Mesh(new THREE.PlaneGeometry(taille, taille),
      new THREE.MeshBasicMaterial({
        map: new THREE.CanvasTexture(cv), transparent: true, opacity: opacite,
        depthWrite: false, blending: THREE.AdditiveBlending
      }));
    m.renderOrder = ordre || 6;
    M.add(m); return m;
  }

  /* ---------- le profil ---------- */
  var TETE = [
    [-2.50, 0.60], [-2.52, 1.48], [-2.38, 2.22], [-2.00, 2.82], [-1.45, 3.24],
    [-0.75, 3.44], [-0.05, 3.34], [0.42, 2.96], [0.66, 2.45], [0.58, 2.02],
    [1.60, 1.22],
    [1.00, 1.08], [0.96, 0.86],
    [1.22, 0.62], [1.26, 0.40],
    [0.98, 0.34], [0.82, 0.30],
    [0.36, 0.52], [-0.16, 0.66], [-0.64, 0.58],
    [-0.98, 0.26], [-1.06, -0.30],
    [-1.12, -1.25], [-1.20, -2.20], [-1.28, -3.05],
    [-2.00, -2.62], [-2.32, -1.55], [-2.48, -0.25]
  ];
  /* La gorge. Sans elle le profil se lit comme un « C » creux. */
  var COU = [
    [-1.06, -0.30], [-1.12, -1.25], [-1.20, -2.20], [-1.28, -3.05],
    [-0.52, -2.92], [-0.12, -2.15], [0.22, -1.40], [0.38, -1.00]
  ];
  var NEZ_INT = [
    [-0.80, 0.95], [-0.20, 1.10], [0.45, 1.05], [0.95, 0.95],
    [1.08, 1.16], [0.40, 1.44], [-0.25, 1.50], [-0.86, 1.34]
  ];
  var MACHOIRE = [
    [1.24, 0.10], [1.30, -0.22], [1.12, -0.72], [0.60, -1.00],
    [-0.30, -1.12], [-1.00, -0.92], [-1.30, -0.35], [-1.33, 0.35],
    [-1.00, 0.10], [-0.30, -0.10], [0.45, -0.12], [0.86, 0.02]
  ];
  var PIVOT = [-1.33, .40];

  var fondCou = plein(COU, 0xffffff, .05, 0);
  trait(COU.slice(4), 0xffffff, .22, 4);
  var fondTete = plein(TETE, 0xffffff, .09, 0);
  var traitTete = trait(TETE, 0xffffff, .62, 4, true);
  var fondNez = plein(NEZ_INT, 0xffffff, .05, 1);
  var traitNez = trait(NEZ_INT, 0xffffff, .3, 4, true);
  var fondMach = plein(MACHOIRE, 0xffffff, .11, 3);
  var traitMach = trait(MACHOIRE, 0xffffff, .62, 4, true);

  /* L'œil et l'oreille : deux détails, et la coupe devient un visage. */
  function disque(cx, cy, r, n) {
    var p = [];
    for (var i = 0; i < n; i++) {
      var a = i / n * Math.PI * 2;
      p.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r * .72]);
    }
    return p;
  }
  var oeil = plein(disque(.14, 2.26, .12, 16), 0xffffff, .55, 2);
  trait([[-.12, 2.5], [.2, 2.58], [.5, 2.5]], 0xffffff, .3, 4);
  trait([[-1.5, 1.72], [-1.18, 1.6], [-1.12, 1.25], [-1.42, 1.08], [-1.5, 1.3]], 0xffffff, .28, 4);

  /* ---------- pièces mobiles ---------- */
  var NL = 14;
  var langueH = [], langueB = [];
  for (var i = 0; i < NL; i++) { langueH.push([0, 0]); langueB.push([0, 0]); }
  var geoLangue = new THREE.BufferGeometry();
  geoLangue.setAttribute('position', new THREE.BufferAttribute(new Float32Array(NL * 2 * 3), 3));
  var idxL = [];
  for (i = 0; i < NL - 1; i++) {
    idxL.push(i, i + 1, NL + i, i + 1, NL + i + 1, NL + i);
  }
  geoLangue.setIndex(idxL);
  var langue = new THREE.Mesh(geoLangue, new THREE.MeshBasicMaterial({
    color: 0xffffff, transparent: true, opacity: .34, depthWrite: false, side: THREE.DoubleSide
  }));
  langue.renderOrder = 2; M.add(langue);
  var traitLangue = trait(new Array(NL).fill([0, 0]), 0xffffff, .95, 5);

  var pointFriction = halo(1.4, 0, 6);
  var anneauVoix = halo(1.5, 0, 6);
  var souffleNez = halo(1.1, 0, 6);
  souffleNez.position.set(1.5, 1.15, 0);

  /* ---------- l'air ---------- */
  /* Chaque grain monte la trachée puis sort par la bouche ou par le
     nez selon le voile. C'est la seule façon de montrer qu'une
     voyelle nasale n'ajoute pas de consonne : l'air se partage. */
  var N = 130, pos = new Float32Array(N * 3), grains = [];
  for (i = 0; i < N; i++) grains.push({ u: Math.random(), nez: false, v: .2 + Math.random() * .18 });
  var geoAir = new THREE.BufferGeometry();
  geoAir.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  var air = new THREE.Points(geoAir, new THREE.PointsMaterial({
    size: .075, color: 0xffffff, transparent: true, opacity: .6,
    depthWrite: false, blending: THREE.AdditiveBlending
  }));
  air.renderOrder = 7; M.add(air);

  var VOIE = [[-.72, -2.9], [-.88, -2.1], [-1.02, -1.3], [-1.06, -.6], [-.98, -.05], [-.95, .18]];
  var NEZ = [[-.95, .18], [-.86, .8], [-.3, 1.2], [.45, 1.22], [1.1, 1.12], [2.0, 1.0]];
  var BOUCHE = [[-.95, .18], [-.3, .2], [.45, .18], [1.25, .2], [2.1, .22]];

  function courbe(u, pts) {
    var n = pts.length - 1, f = Math.min(.9999, Math.max(0, u)) * n;
    var k = Math.floor(f), t = f - k, a = pts[k], b = pts[k + 1];
    return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
  }
  function tourner(p, ang) {
    var dx = p[0] - PIVOT[0], dy = p[1] - PIVOT[1];
    var c = Math.cos(ang), s = Math.sin(ang);
    return [PIVOT[0] + dx * c - dy * s, PIVOT[1] + dx * s + dy * c];
  }

  var machPts = MACHOIRE.map(function (p) { return p.slice(); });

  return {
    groupe: g,
    regler: function (p) { for (var k in p) if (k in C && p[k] !== undefined) C[k] = p[k]; },
    maj: function (dt, niveau, couleur) {
      var k = Math.min(1, dt * 3.2), q;
      for (q in P) P[q] += (C[q] - P[q]) * k;
      var o = P.ouverture, a = P.arrondi, ang = -o * .40;

      /* Mâchoire : elle pivote au condyle, et les lèvres avancent
         avec l'arrondi — le même geste que devant un miroir. */
      for (var i = 0; i < MACHOIRE.length; i++) {
        var p = MACHOIRE[i], av = (i === 0 || i === 1 || i === 11) ? a * .3 : 0;
        machPts[i] = tourner([p[0] + av, p[1]], ang);
      }
      ecrire(fondMach.geometry, machPts);
      ecrire(traitMach.geometry, machPts);

      /* Langue : trois points de commande, le reste est interpolé.
         Elle suit la mâchoire, sans la suivre tout à fait. */
      var chute = o * .55;
      var racine = [-.92, -.78 - chute * .5];
      var dos = [-.72 + (1 - P.recul) * 1.15, -.42 + P.hauteur * 1.05 - chute * .6];
      var pointe = [.92 - P.recul * .55, -.48 + P.hauteur * .28 - chute * .8];
      for (i = 0; i < NL; i++) {
        var t = i / (NL - 1);
        langueH[i] = [
          (1 - t) * (1 - t) * racine[0] + 2 * (1 - t) * t * dos[0] + t * t * pointe[0],
          (1 - t) * (1 - t) * racine[1] + 2 * (1 - t) * t * dos[1] + t * t * pointe[1]
        ];
        var sol = tourner([-.95 + t * 1.85, -.88 + t * .1], ang);
        var bas = Math.min(langueH[i][1] - .08, sol[1] + .12);
        var fin = Math.max(0, (t - .72) / .28);
        langueB[i] = [langueH[i][0] - .04 * (1 - fin),
                      bas + (langueH[i][1] - .03 - bas) * fin * fin];
      }
      ecrire(geoLangue, langueH.concat(langueB));
      ecrire(traitLangue.geometry, langueH);

      /* Repères d'énergie : la friction se pose là où elle se produit,
         le larynx bat quand la voix est voisée, le nez s'allume quand
         le voile s'abaisse. */
      pointFriction.position.set(-.95 + (1 - P.friction) * 2.1, .3, .05);
      pointFriction.material.opacity = P.friction * (.25 + niveau * .75);
      pointFriction.material.color.set(couleur);

      anneauVoix.position.set(-1.2, -2.5, .05);
      anneauVoix.material.opacity = P.voix * (.14 + niveau * .8);
      anneauVoix.material.color.set(couleur);
      anneauVoix.scale.setScalar(.8 + niveau * .5);

      souffleNez.material.opacity = P.nasal * (.18 + niveau * .7);
      souffleNez.material.color.set(couleur);

      var vitesse = .4 + niveau * 1.6;
      for (i = 0; i < N; i++) {
        var gr = grains[i];
        gr.u += dt * gr.v * vitesse;
        if (gr.u > 1) { gr.u -= 1; gr.nez = Math.random() < P.nasal * .55; }
        var pt = gr.u < .45 ? courbe(gr.u / .45, VOIE)
                            : courbe((gr.u - .45) / .55, gr.nez ? NEZ : BOUCHE);
        pos[i * 3] = pt[0] + (Math.random() - .5) * .06;
        pos[i * 3 + 1] = pt[1] + (Math.random() - .5) * .06;
        pos[i * 3 + 2] = .06;
      }
      geoAir.attributes.position.needsUpdate = true;
      air.material.opacity = .25 + niveau * .5;
      air.material.color.set(couleur);

      langue.material.color.set(couleur);
      traitLangue.material.color.set(couleur);
      fondTete.material.color.set(couleur);
      fondCou.material.color.set(couleur);
      oeil.material.color.set(couleur);
      fondMach.material.color.set(couleur);
      fondNez.material.color.set(couleur);
      fondNez.material.opacity = .04 + P.nasal * .14;
      traitNez.material.opacity = .22 + P.nasal * .45;
      traitNez.material.color.set(P.nasal > .5 ? couleur : 0xffffff);
    },
    /* Cadre du modèle, pour que le noyau sache le dimensionner. */
    cadre: { hauteur: 6.55, largeur: 4.08 },
    /* D'où sort ce qui est prononcé : des lèvres. */
    source: function () { return [1.35 + DX, .25 + DY]; },
    /* La bouche sait aussi se laisser montrer du doigt. */
    ancre: function (nom) {
      var p = nom === 'langue' ? [.1, -.1]
            : nom === 'levres' ? [1.35, .25]
            : nom === 'voile' ? [-.95, .3]
            : nom === 'cordes' ? [-1.2, -2.5]
            : nom === 'nez' ? [.3, 1.3]
            : nom === 'arriere' ? [-.88, -.5]
            : null;
      return p && [p[0] + DX, p[1] + DY];
    }
  };
};
