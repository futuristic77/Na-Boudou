/**
 * Service Worker minimal de NA-BOUDOU (phase 01).
 *
 * Stratégie actuelle : "cache-first" sur le shell statique de l'app
 * (pages pré-rendues, CSS/JS, icônes) pour permettre l'ouverture de
 * l'application hors connexion avec les données déjà servies.
 *
 * IMPORTANT — sécurité :
 * - AUCUNE donnée privée n'est mise en cache ici. Le cache ne contient
 *   que des assets publics servis par l'application elle-même.
 * - Toute future stratégie de synchronisation différée (opérations mises
 *   en attente hors ligne) devra :
 *     1. utiliser une base locale chiffrée (ex. IndexedDB),
 *     2. ne jamais écrire de données personnelles dans Cache Storage,
 *     3. être documentée dans docs/ARCHITECTURE.md.
 *
 * Reste à développer (phases ultérieures) :
 * - File d'attente hors ligne des mutations (IndexedDB + Background Sync).
 * - Invalidation de cache après déploiement d'une nouvelle version.
 */

const CACHE_NAME = "na-boudou-shell-v1";
const SHELL = [
  "/",
  "/dashboard",
  "/manifest.webmanifest",
  "/icons/icon-any.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Ne gérer que les requêtes GET same-origin : jamais de données
  // tierces, jamais de requêtes sensibles dans le cache.
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Stratégie cache-first avec repli réseau, pour le shell statique uniquement.
  event.respondWith(
    caches.match(request).then(
      (cached) =>
        cached ??
        fetch(request).then((response) => {
          if (response.ok && request.destination !== "document") {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
    )
  );
});
