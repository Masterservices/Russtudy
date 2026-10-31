/*
 * Service worker de la plateforme RusStudy.
 *
 * Il ne met délibérément rien en cache : /app est un espace authentifié, et
 * une réponse mise en cache pourrait être servie à un autre utilisateur du
 * même appareil. Son unique rôle est de recevoir les notifications système
 * et d'ouvrir le bon écran au clic.
 */

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

/*
 * Gestionnaire `fetch` volontairement inerte.
 *
 * Chrome exige qu'un service worker en déclare un pour considérer le site
 * installable et produire une vraie application — sans quoi « ajouter à
 * l'écran d'accueil » ne crée qu'un raccourci, et les notifications restent
 * attribuées au navigateur.
 *
 * Il n'appelle jamais `respondWith` : le navigateur garde donc son
 * comportement normal, et aucune réponse d'un espace authentifié ne transite
 * par le service worker.
 */
self.addEventListener('fetch', () => {});

self.addEventListener('push', (event) => {
  let payload = {};
  try {
    payload = event.data ? event.data.json() : {};
  } catch {
    payload = {};
  }

  const title = payload.title || 'RusStudy';

  event.waitUntil(
    self.registration.showNotification(title, {
      body: payload.body || '',
      icon: '/icons/app-192.png',
      // Le badge est la petite icône de la barre d'état : Android n'en garde
      // que la silhouette. Une image en couleurs sur fond opaque est
      // inexploitable et le système lui substitue l'icône du navigateur.
      badge: '/icons/badge-96.png',
      // `tag` regroupe les alertes de même nature : dix messages ne produisent
      // pas dix bannières empilées.
      tag: payload.tag || 'russtudy',
      data: { href: payload.href || '/app' },
    }),
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const href = (event.notification.data && event.notification.data.href) || '/app';

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clients) => {
      // Si l'application est déjà ouverte, on la réutilise plutôt que
      // d'empiler les onglets.
      for (const client of clients) {
        if (client.url.includes('/app') && 'focus' in client) {
          client.navigate(href);
          return client.focus();
        }
      }
      return self.clients.openWindow(href);
    }),
  );
});
