/* ------------------------------------------------------------------
   Scène « cadran ».

   Compter, demander un prix, dire l'heure : trois choses, un seul
   objet. Le cadran porte les douze premiers nombres ; un anneau
   extérieur accueille ceux qui débordent. L'aiguille désigne le
   nombre qu'on prononce, et quand vient l'heure, la deuxième aiguille
   paraît — le même cadran, qui ne faisait que compter, se met à lire
   l'heure.
   ------------------------------------------------------------------ */
(window.CoursAnime = window.CoursAnime || {}).scenes =
  window.CoursAnime.scenes || {};

window.CoursAnime.scenes.cadran = function (THREE, parent) {
  var API = window.CoursAnime;
  var g = new THREE.Group();
  parent.add(g);

  var R = 1.95, R2 = 2.75;
  var P = { nombres: [], pointe: null, heure: null, anneau: false };
  var t = 0;
  var BLANC = new THREE.Color('#ffffff');

  function cercle(rayon, opacite, segments) {
    var pts = [];
    for (var i = 0; i <= segments; i++) {
      var a = i / segments * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.sin(a) * rayon, Math.cos(a) * rayon, 0));
    }
    var m = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),
      new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true,
        opacity: opacite, depthWrite: false }));
    g.add(m);
    return m;
  }
  var anneauInt = cercle(R, .22, 96);
  var anneauExt = cercle(R2, 0, 96);

  /* Les douze repères du cadran. */
  var reperes = [];
  for (var i = 0; i < 12; i++) {
    var a = i / 12 * Math.PI * 2;
    var geo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(Math.sin(a) * (R - .12), Math.cos(a) * (R - .12), 0),
      new THREE.Vector3(Math.sin(a) * R, Math.cos(a) * R, 0),
    ]);
    var r = new THREE.Line(geo, new THREE.LineBasicMaterial({
      color: 0xffffff, transparent: true, opacity: .3, depthWrite: false }));
    g.add(r);
    reperes.push(r);
  }

  function plan(ordre) {
    var m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, opacity: 0 }));
    m.renderOrder = ordre || 4;
    g.add(m);
    return m;
  }

  /* Les nombres : 0 au centre, 1 à 12 sur le cadran, 13 à 20 dehors. */
  var chiffres = [];
  function placeDe(n) {
    if (n === 0) return [0, -.62, .1];
    if (n <= 12) {
      var a = (n % 12) / 12 * Math.PI * 2;
      return [Math.sin(a) * (R - .42), Math.cos(a) * (R - .42), .1];
    }
    var b = ((n - 12) / 8) * Math.PI * 2;
    return [Math.sin(b) * R2, Math.cos(b) * R2, .1];
  }
  for (var n = 0; n <= 20; n++) {
    var m = plan(5);
    var tx = API.texte(THREE, String(n), 110, '800');
    m.material.map = tx.tex;
    m.material.needsUpdate = true;
    var h = n <= 12 ? .42 : .34;
    m.scale.set(h * tx.ratio, h, 1);
    var p = placeDe(n);
    m.position.set(p[0], p[1], p[2]);
    chiffres.push({ mesh: m, n: n, c: 0, v: 0, h: h, ratio: tx.ratio });
  }

  /* Les aiguilles. Une seule quand on compte, deux quand on lit l'heure. */
  function aiguille(longueur, epaisseur) {
    var f = new THREE.Mesh(new THREE.PlaneGeometry(epaisseur, longueur),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true,
        opacity: 0, depthWrite: false }));
    f.geometry.translate(0, longueur / 2, 0);
    f.renderOrder = 6;
    g.add(f);
    return f;
  }
  var grande = aiguille(R - .25, .055);
  var petite = aiguille(R - .75, .085);
  var moyeu = new THREE.Mesh(new THREE.CircleGeometry(.11, 20),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true,
      opacity: .8, depthWrite: false }));
  moyeu.position.z = .12;
  moyeu.renderOrder = 7;
  g.add(moyeu);

  var halo = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 1.5),
    new THREE.MeshBasicMaterial({ map: API.halo(THREE), transparent: true,
      opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
  halo.renderOrder = 3;
  g.add(halo);

  var angle = { grande: 0, petite: 0, vg: 0, vp: 0 };

  function angleDe(n) {
    /* Sens horaire depuis midi : l'aiguille désigne le nombre. */
    if (n > 12) return -((n - 12) / 8) * Math.PI * 2;
    return -(n % 12) / 12 * Math.PI * 2;
  }

  function appliquer() {
    var vus = P.nombres || [];
    for (var i = 0; i < chiffres.length; i++) {
      var c = chiffres[i];
      var dedans = vus.indexOf(c.n) >= 0;
      /* L'heure n'allume que le cadran : 14 n'est pas deux heures. */
      var pointe = P.pointe === c.n ||
        (P.heure && c.n >= 1 && c.n <= 12 &&
          (P.heure[0] % 12 === c.n % 12 || P.heure[1] / 5 === c.n));
      c.c = pointe ? 1 : (dedans ? .78 : .1);
      c.focus = pointe;
    }
    anneauExt.material.opacity = P.anneau ? .16 : 0;

    if (P.heure) {
      angle.petite = -((P.heure[0] % 12) + P.heure[1] / 60) / 12 * Math.PI * 2;
      angle.grande = -(P.heure[1] % 60) / 60 * Math.PI * 2;
    } else if (P.pointe !== null && P.pointe !== undefined) {
      angle.grande = angleDe(P.pointe);
      angle.petite = angle.grande;
    }
    var p = P.pointe !== null && P.pointe !== undefined
      ? placeDe(P.pointe)
      : (P.heure ? placeDe(P.heure[0] % 12) : null);
    halo.userData.cible = p;
  }

  return {
    groupe: g,
    cadre: { hauteur: 6.2, largeur: 6.2 },
    regler: function (p) {
      P.nombres = p.nombres || [];
      P.pointe = p.pointe === undefined ? null : p.pointe;
      P.heure = p.heure || null;
      P.anneau = !!p.anneau;
      appliquer();
    },
    ancre: function (nom) {
      var n = parseInt(nom, 10);
      if (isNaN(n)) return null;
      var p = placeDe(n);
      return [p[0], p[1]];
    },
    source: function () { return [0, 0]; },
    maj: function (dt, niveau, couleur) {
      t += dt;
      var k = 1 - Math.exp(-3.5 * dt);
      for (var i = 0; i < chiffres.length; i++) {
        var c = chiffres[i];
        c.v += (c.c - c.v) * k;
        c.mesh.material.opacity = c.v;
        c.mesh.visible = c.v > .02;
        c.mesh.material.color.lerp(c.focus ? couleur : BLANC, Math.min(1, dt * 3));
        var ech = c.focus ? 1.25 + niveau * .14 : 1;
        c.mesh.scale.set(c.h * c.ratio * ech, c.h * ech, 1);
      }
      angle.vg += (angle.grande - angle.vg) * Math.min(1, dt * 2.6);
      angle.vp += (angle.petite - angle.vp) * Math.min(1, dt * 2.2);
      grande.rotation.z = angle.vg;
      petite.rotation.z = angle.vp;
      var deux = !!P.heure;
      grande.material.opacity += ((deux ? .75 : .85) - grande.material.opacity) * Math.min(1, dt * 3);
      petite.material.opacity += ((deux ? .95 : 0) - petite.material.opacity) * Math.min(1, dt * 3);
      grande.material.color.copy(couleur);
      petite.material.color.copy(couleur);
      moyeu.material.color.copy(couleur);
      anneauInt.material.color.copy(couleur);
      anneauExt.material.color.copy(couleur);

      var cible = halo.userData.cible;
      halo.material.color.copy(couleur);
      if (cible) {
        halo.position.set(cible[0], cible[1], .05);
        halo.material.opacity += ((.25 + niveau * .7) - halo.material.opacity) * Math.min(1, dt * 4);
        halo.scale.setScalar(1 + Math.sin(t * 1.8) * .07 + niveau * .3);
      } else {
        halo.material.opacity += (0 - halo.material.opacity) * Math.min(1, dt * 4);
      }
    }
  };
};
