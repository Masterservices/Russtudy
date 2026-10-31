/**
 * Profondeur du parcours dans `/app` pour l'onglet courant.
 *
 * Le bouton de retour pointait vers une route canonique : depuis
 * « Paramètres → Utilisateurs », il ramenait au tableau de bord et non à
 * l'écran d'où l'on venait. On mémorise donc le nombre de pas réellement
 * effectués dans l'application pour revenir sur la page précédente quand elle
 * existe, et retomber sur la route canonique sinon (lien profond, notification,
 * onglet neuf).
 *
 * `sessionStorage` est propre à l'onglet et disparaît avec lui : exactement la
 * portée d'un historique de navigation.
 */
const KEY = 'rs-app-nav-depth';

export function readNavDepth(): number {
  try {
    return Number(window.sessionStorage.getItem(KEY) ?? '0') || 0;
  } catch {
    // Navigation privée ou stockage refusé : on retombe sur la route canonique.
    return 0;
  }
}

export function writeNavDepth(value: number): void {
  try {
    window.sessionStorage.setItem(KEY, String(Math.max(0, value)));
  } catch {
    /* sans stockage, le retour canonique reste correct */
  }
}
