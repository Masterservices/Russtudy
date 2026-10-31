/* ------------------------------------------------------------------
   Scène « carte ».

   Une conversation est un chemin : on salue, on demande comment ça
   va, on donne son prénom, on remercie, on prend congé. Et ce chemin
   a deux voies parallèles — le registre poli et le registre familier
   — entre lesquelles il faut choisir à chaque station.

   La carte ne change pas d'un chapitre à l'autre : c'est la même, et
   le chapitre allume la station où l'on se trouve. À la fin, le
   chemin complet s'éclaire : c'est la conversation entière.
   ------------------------------------------------------------------ */
(window.CoursAnime = window.CoursAnime || {}).scenes =
  window.CoursAnime.scenes || {};

window.CoursAnime.scenes.carte = function (THREE, parent) {
  var API = window.CoursAnime;
  var g = new THREE.Group();
  parent.add(g);

  /* La carte se resserre en portrait : un téléphone donne de la
     hauteur, pas de la largeur. */
  var LARGEUR = 7.4, HAUTEUR = 4.2, portrait = false;
  var cadre = { hauteur: HAUTEUR, largeur: LARGEUR };
  var stations = [];        // { id, titre }
  var voies = ['poli', 'familier'];
  var voieY = { poli: 1.05, familier: -1.05 };
  var P = { allume: [], voie: 'deux', mots: [], index: 0 };
  var t = 0;
  var BLANC = new THREE.Color('#ffffff');

  /* L'axe, tracé une fois : c'est le fil de la conversation. */
  function ligne(y, opacite) {
    var geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
    var m = new THREE.Line(geo, new THREE.LineBasicMaterial({
      color: 0xffffff, transparent: true, opacity: opacite, depthWrite: false }));
    g.add(m);
    return m;
  }
  var axePoli = ligne(voieY.poli, .14);
  var axeFamilier = ligne(voieY.familier, .14);

  /* Le chemin parcouru, redessiné à chaque chapitre. */
  var geoChemin = new THREE.BufferGeometry();
  geoChemin.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
  var chemin = new THREE.Line(geoChemin, new THREE.LineBasicMaterial({
    color: 0xffffff, transparent: true, opacity: 0, depthWrite: false }));
  chemin.renderOrder = 2;
  g.add(chemin);

  var pastilles = [], etiquettes = [], halos = [];
  var mots = [];
  var etiVoies = [];

  function plan(taille, ordre) {
    var m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, opacity: 0 }));
    m.renderOrder = ordre || 3;
    g.add(m);
    return m;
  }
  function poserTexte(mesh, txt, hauteur, taille) {
    var tx = API.texte(THREE, txt, taille || 90, '800');
    mesh.material.map = tx.tex;
    mesh.material.needsUpdate = true;
    mesh.scale.set(hauteur * tx.ratio, hauteur, 1);
    mesh.userData.ratio = tx.ratio;
  }

  function construire() {
    var n = Math.max(1, stations.length);
    for (var i = 0; i < n; i++) {
      var d = new THREE.Mesh(new THREE.CircleGeometry(.14, 20),
        new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true,
          opacity: .3, depthWrite: false }));
      d.renderOrder = 4;
      g.add(d);
      pastilles.push(d);

      var h = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 1.5),
        new THREE.MeshBasicMaterial({ map: API.halo(THREE), transparent: true,
          opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      g.add(h);
      halos.push(h);

      etiquettes.push(plan(1, 5));
    }
    /* Les deux registres, nommés une fois pour toutes. */
    voies.forEach(function (v) {
      var e = plan(1, 5);
      poserTexte(e, (stations.noms && stations.noms[v]) || v.toUpperCase(), .34, 64);
      e.material.opacity = .32;
      etiVoies.push({ mesh: e, voie: v });
    });
    disposer();
    for (var j = 0; j < 6; j++) {
      var m = plan(1, 6);
      mots.push({ mesh: m, c: { x: 0, y: 0, s: .5, o: 0 },
                  v: { x: 0, y: 0, s: .5, o: 0 }, txt: null });
    }
  }

  /* Place ce qui ne dépend que du format : axes, pastilles, noms. */
  function disposer() {
    LARGEUR = portrait ? 5.3 : 7.4;
    HAUTEUR = portrait ? 5.2 : 4.2;
    voieY = { poli: portrait ? 1.5 : 1.05, familier: portrait ? -1.5 : -1.05 };
    cadre.hauteur = HAUTEUR;
    cadre.largeur = LARGEUR + .5;

    [[axePoli, voieY.poli], [axeFamilier, voieY.familier]].forEach(function (a) {
      var p = a[0].geometry.attributes.position;
      p.setXYZ(0, -LARGEUR / 2, a[1], 0);
      p.setXYZ(1, LARGEUR / 2, a[1], 0);
      p.needsUpdate = true;
    });

    var n = Math.max(1, stations.length), pas = LARGEUR / n;
    for (var i = 0; i < n; i++) {
      var x = -LARGEUR / 2 + pas * (i + .5);
      pastilles[i].position.set(x, 0, .05);
      halos[i].position.set(x, 0, .04);
      poserTexte(etiquettes[i], stations[i].titre, portrait ? .24 : .3, 64);
      etiquettes[i].position.set(x, portrait ? -.46 : -.55, .06);
    }
    etiVoies.forEach(function (e) {
      e.mesh.position.set(-LARGEUR / 2 + e.mesh.scale.x / 2,
                          (e.voie === 'familier' ? -1 : 1) * (HAUTEUR / 2 - .22), .06);
    });
  }

  function indexDe(id) {
    for (var i = 0; i < stations.length; i++) if (stations[i].id === id) return i;
    return -1;
  }

  function appliquer() {
    var n = Math.max(1, stations.length), pas = LARGEUR / n;
    var vus = [];
    (P.allume || []).forEach(function (id) {
      var k = indexDe(id);
      if (k >= 0) vus.push(k);
    });
    var dernier = vus.length ? Math.max.apply(null, vus) : -1;

    for (var i = 0; i < pastilles.length; i++) {
      var actif = vus.indexOf(i) >= 0;
      var passe = i < dernier;
      pastilles[i].material.opacity = actif ? 1 : (passe ? .45 : .2);
      pastilles[i].scale.setScalar(actif ? 1.5 : 1);
      halos[i].userData.actif = actif;
      etiquettes[i].material.opacity = actif ? .9 : (passe ? .3 : .16);
    }

    /* Le chemin va du départ à la station la plus avancée. */
    var p = geoChemin.attributes.position;
    var fin = dernier >= 0 ? -LARGEUR / 2 + pas * (dernier + .5) : -LARGEUR / 2;
    p.setXYZ(0, -LARGEUR / 2 + pas * .5, 0, .03);
    p.setXYZ(1, fin, 0, .03);
    p.needsUpdate = true;
    chemin.material.opacity = dernier >= 0 ? .75 : 0;

    etiVoies.forEach(function (e) {
      e.mesh.material.opacity =
        P.voie === 'deux' ? .34 : (P.voie === e.voie ? .95 : .12);
    });
    axePoli.material.opacity = P.voie === 'familier' ? .06 : .18;
    axeFamilier.material.opacity = P.voie === 'poli' ? .06 : .18;

    /* Les mots du chapitre se posent sur leur voie, au-dessus de la
       station allumée : c'est là qu'ils se disent. */
    /* Trois mots au plus à l'image : celui qu'on dit, et ses deux
       voisins en retrait. Au-delà, la carte devient illisible. */
    var liste = P.mots || [];
    var actif = Math.min(Math.max(0, P.index), Math.max(0, liste.length - 1));
    for (var j = 0; j < mots.length; j++) {
      var m = mots[j], d = liste[j];
      var ecart = j - actif;
      if (!d || Math.abs(ecart) > 1) { m.c.o = 0; continue; }
      if (m.txt !== d.t) {
        m.txt = d.t;
        poserTexte(m.mesh, d.t, .46, 100);
      }
      var k2 = d.station ? indexDe(d.station) : dernier;
      var x = -LARGEUR / 2 + pas * ((k2 < 0 ? 0 : k2) + .5);
      var voie = d.voie || (P.voie === 'familier' ? 'familier' : 'poli');
      var y = voieY[voie] || 0;
      var ech = ecart === 0 ? 1.1 : .78;
      var demi = ech * (m.mesh.userData.ratio || 3) * .23 + .12;
      m.c.x = Math.max(-LARGEUR / 2 + demi, Math.min(LARGEUR / 2 - demi, x));
      m.c.y = y + (voie === 'familier' ? -1 : 1) * (.42 + Math.abs(ecart) * .62) *
              (ecart < 0 ? -1 : 1) * (voie === 'familier' ? -1 : 1);
      if (ecart !== 0) m.c.y = y + (voie === 'familier' ? -.42 : .42) + ecart * .62;
      m.c.s = ech;
      m.c.o = ecart === 0 ? 1 : .26;
    }
  }

  return {
    groupe: g,
    cadre: cadre,
    configurer: function (c) {
      stations = c.stations || [];
      if (c.voies) { voies = c.voies; }
      if (c.voieY) { voieY = c.voieY; }
      stations.noms = c.noms || null;
      construire();
    },
    regler: function (p) {
      if (p.vue && !!p.vue.P !== portrait) { portrait = !!p.vue.P; disposer(); }
      P.allume = p.allume || [];
      P.voie = p.voie || 'deux';
      P.mots = p.mots || [];
      P.index = Math.max(0, p.index || 0);
      appliquer();
    },
    ancre: function (nom) {
      var k = indexDe(nom);
      if (k < 0) return null;
      var pas = LARGEUR / Math.max(1, stations.length);
      return [-LARGEUR / 2 + pas * (k + .5), 0];
    },
    source: function () { return [0, voieY.poli]; },
    maj: function (dt, niveau, couleur) {
      t += dt;
      var k = 1 - Math.exp(-4 * dt);
      for (var i = 0; i < mots.length; i++) {
        var m = mots[i], c = m.c, v = m.v;
        v.x += (c.x - v.x) * k; v.y += (c.y - v.y) * k;
        v.s += (c.s - v.s) * k; v.o += (c.o - v.o) * k;
        m.mesh.position.set(v.x, v.y, .3);
        m.mesh.scale.set(v.s * (m.mesh.userData.ratio || 3) * .46, v.s * .46, 1);
        m.mesh.material.opacity = v.o;
        m.mesh.visible = v.o > .01 && !!m.mesh.material.map;
        m.mesh.material.color.lerp(c.s > 1 ? couleur : BLANC, Math.min(1, dt * 3));
      }
      for (i = 0; i < halos.length; i++) {
        var cible = halos[i].userData.actif ? (.25 + niveau * .75) : 0;
        halos[i].material.opacity += (cible - halos[i].material.opacity) * Math.min(1, dt * 4);
        halos[i].material.color.copy(couleur);
        halos[i].scale.setScalar(1 + Math.sin(t * 1.6) * .06 + niveau * .25);
      }
      for (i = 0; i < pastilles.length; i++) pastilles[i].material.color.copy(couleur);
      chemin.material.color.copy(couleur);
    }
  };
};
