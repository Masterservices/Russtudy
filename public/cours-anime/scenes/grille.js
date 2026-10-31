/* ------------------------------------------------------------------
   Scène « grille ».

   Six petits mots que le russe n'a pas : le, la, les, un, une, des.
   Ils ne s'apprennent pas en liste mais en tableau — deux genres,
   deux façons de désigner, un pluriel. La grille se construit case
   par case, et les mots d'exemple viennent se ranger dans la leur.

   Rien d'autre à l'écran : c'est le tableau qui enseigne.
   ------------------------------------------------------------------ */
(window.CoursAnime = window.CoursAnime || {}).scenes =
  window.CoursAnime.scenes || {};

window.CoursAnime.scenes.grille = function (THREE, parent) {
  var API = window.CoursAnime;
  var g = new THREE.Group();
  parent.add(g);

  var colonnes = [], rangs = [], cases = {};
  var LARGEUR = 6.4, HAUTEUR = 4.4, portrait = false;
  /* Les intitulés de rangées vivent à gauche du tableau : le cadre
     doit les compter, sinon ils sortent de l'écran. */
  var marge = 0, cadre = { hauteur: HAUTEUR, largeur: LARGEUR };
  var P = { allume: [], mots: [], index: 0 };
  var t = 0;
  var BLANC = new THREE.Color('#ffffff');

  function plan(ordre) {
    var m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, opacity: 0 }));
    m.renderOrder = ordre || 4;
    g.add(m);
    return m;
  }
  function poserTexte(mesh, txt, hauteur, taille) {
    var tx = API.texte(THREE, txt, taille || 100, '800');
    mesh.material.map = tx.tex;
    mesh.material.needsUpdate = true;
    mesh.scale.set(hauteur * tx.ratio, hauteur, 1);
    mesh.userData.ratio = tx.ratio;
    mesh.userData.h = hauteur;
  }
  function cadreCase() {
    var m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true,
        opacity: .05, depthWrite: false }));
    m.renderOrder = 1;
    g.add(m);
    return m;
  }

  var entetesC = [], entetesR = [], listeCases = [], mots = [];

  function construire(c) {
    colonnes = c.colonnes || [];
    rangs = c.rangs || [];
    (c.cases || []).forEach(function (k) {
      cases[k.col + '|' + k.rang] = k;
    });
    colonnes.forEach(function (col) {
      var e = plan(5);
      poserTexte(e, col.titre, .3, 64);
      e.material.opacity = .4;
      entetesC.push({ mesh: e, id: col.id });
    });
    rangs.forEach(function (r) {
      var e = plan(5);
      poserTexte(e, r.titre, .3, 64);
      e.material.opacity = .4;
      entetesR.push({ mesh: e, id: r.id });
    });
    (c.cases || []).forEach(function (k) {
      var fond = cadreCase();
      var txt = plan(5);
      poserTexte(txt, k.mot, .56, 120);
      listeCases.push({ fond: fond, mesh: txt, col: k.col, rang: k.rang, mot: k.mot });
    });
    for (var i = 0; i < 4; i++) {
      mots.push({ mesh: plan(6), txt: null,
                  c: { x: 0, y: 0, s: .6, o: 0 }, v: { x: 0, y: 0, s: .6, o: 0 } });
    }
    disposer();
  }

  function centre(col, rang) {
    var ic = 0, ir = 0, i;
    for (i = 0; i < colonnes.length; i++) if (colonnes[i].id === col) ic = i;
    for (i = 0; i < rangs.length; i++) if (rangs[i].id === rang) ir = i;
    var lc = LARGEUR / Math.max(1, colonnes.length);
    var lr = (HAUTEUR - .9) / Math.max(1, rangs.length);
    return [-LARGEUR / 2 + lc * (ic + .5) + marge / 2,
            (HAUTEUR - .9) / 2 - lr * (ir + .5) - .25, lc, lr];
  }

  function disposer() {
    LARGEUR = portrait ? 4.9 : 6.2;
    HAUTEUR = portrait ? 4.6 : 4.2;

    var tailleR = portrait ? .2 : .24;
    marge = 0;
    entetesR.forEach(function (e, i) {
      poserTexte(e.mesh, rangs[i].titre, tailleR, 64);
      marge = Math.max(marge, e.mesh.scale.x + .3);
    });
    cadre.largeur = LARGEUR + marge;
    cadre.hauteur = HAUTEUR;

    var lc = LARGEUR / Math.max(1, colonnes.length);
    entetesC.forEach(function (e, i) {
      poserTexte(e.mesh, colonnes[i].titre, portrait ? .22 : .26, 64);
      e.mesh.position.set(-LARGEUR / 2 + lc * (i + .5) + marge / 2,
                          (HAUTEUR - .9) / 2 + .2, .1);
    });
    entetesR.forEach(function (e, i) {
      var p = centre(colonnes.length ? colonnes[0].id : '', rangs[i].id);
      e.mesh.position.set(-LARGEUR / 2 + marge / 2 - e.mesh.scale.x / 2 - .14, p[1], .1);
    });
    listeCases.forEach(function (k) {
      var p = centre(k.col, k.rang);
      k.fond.position.set(p[0], p[1], 0);
      k.fond.scale.set(p[2] * .88, p[3] * .62, 1);
      poserTexte(k.mesh, k.mot, portrait ? .46 : .54, 120);
      k.mesh.position.set(p[0], p[1] + p[3] * .08, .1);
    });
  }

  function appliquer() {
    var allume = P.allume || [];
    listeCases.forEach(function (k) {
      var actif = allume.indexOf(k.col + '|' + k.rang) >= 0 ||
                  allume.indexOf(k.mot) >= 0;
      k.actif = actif;
      k.cible = actif ? 1 : (allume.length ? .18 : .5);
    });
    entetesC.forEach(function (e) {
      e.mesh.material.opacity = allume.some(function (a) {
        return a.indexOf(e.id + '|') === 0;
      }) ? .85 : .3;
    });
    entetesR.forEach(function (e) {
      e.mesh.material.opacity = allume.some(function (a) {
        return a.indexOf('|' + e.id) > 0;
      }) ? .85 : .3;
    });

    /* Les exemples se rangent dans leur case : c'est le geste que la
       leçon demande — apprendre le mot avec son article. */
    var liste = P.mots || [];
    var actif = Math.min(Math.max(0, P.index), Math.max(0, liste.length - 1));
    for (var i = 0; i < mots.length; i++) {
      var m = mots[i], d = liste[i], ecart = i - actif;
      if (!d || Math.abs(ecart) > 1) { m.c.o = 0; continue; }
      if (m.txt !== d.t) { m.txt = d.t; poserTexte(m.mesh, d.t, .4, 90); }
      var p = d.col ? centre(d.col, d.rang) : [0, -HAUTEUR / 2 + .4, LARGEUR, 1];
      m.c.x = p[0];
      m.c.y = p[1] - p[3] * .2 - (ecart === 0 ? 0 : .34 * ecart);
      m.c.s = ecart === 0 ? 1 : .8;
      m.c.o = ecart === 0 ? 1 : .25;
    }
  }

  return {
    groupe: g,
    cadre: cadre,
    configurer: construire,
    regler: function (p) {
      if (p.vue && !!p.vue.P !== portrait) { portrait = !!p.vue.P; disposer(); }
      P.allume = p.allume || [];
      P.mots = p.mots || [];
      P.index = Math.max(0, p.index || 0);
      appliquer();
    },
    ancre: function (nom) {
      for (var i = 0; i < listeCases.length; i++) {
        if (listeCases[i].mot === nom) {
          var p = centre(listeCases[i].col, listeCases[i].rang);
          return [p[0], p[1]];
        }
      }
      return null;
    },
    source: function () { return [0, 0]; },
    maj: function (dt, niveau, couleur) {
      t += dt;
      var k = 1 - Math.exp(-4 * dt);
      listeCases.forEach(function (c) {
        var o = c.mesh.material.opacity;
        c.mesh.material.opacity = o + ((c.cible === undefined ? .5 : c.cible) - o) * k;
        c.fond.material.opacity += ((c.actif ? .16 : .04) - c.fond.material.opacity) * k;
        c.fond.material.color.copy(couleur);
        c.mesh.material.color.lerp(c.actif ? couleur : BLANC, Math.min(1, dt * 3));
        var ech = c.actif ? 1.08 + niveau * .08 : 1;
        c.mesh.scale.set(c.mesh.userData.h * c.mesh.userData.ratio * ech,
                         c.mesh.userData.h * ech, 1);
      });
      for (var i = 0; i < mots.length; i++) {
        var m = mots[i], c2 = m.c, v = m.v;
        v.x += (c2.x - v.x) * k; v.y += (c2.y - v.y) * k;
        v.s += (c2.s - v.s) * k; v.o += (c2.o - v.o) * k;
        m.mesh.position.set(v.x, v.y, .3);
        m.mesh.scale.set(v.s * (m.mesh.userData.ratio || 3) * .4, v.s * .4, 1);
        m.mesh.material.opacity = v.o;
        m.mesh.visible = v.o > .01 && !!m.mesh.material.map;
        m.mesh.material.color.lerp(c2.s > .9 ? couleur : BLANC, Math.min(1, dt * 3));
      }
    }
  };
};
