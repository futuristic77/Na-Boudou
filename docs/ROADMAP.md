# NA-BOUDOU — Feuille de route

## Phase 01 — Fondations techniques ✅

- [x] Projet Next.js (App Router, TypeScript strict, Tailwind, ESLint)
- [x] Structure de dossiers modulaire (components, features, lib, hooks…)
- [x] Préparation PWA (manifest, icônes, service worker minimal)
- [x] Documentation (README, architecture, déploiement)
- [x] Préparation GitHub + Vercel
- [x] Vérifications : TypeScript, ESLint, build de production

## Phase 02 — Direction artistique et identité

- [ ] Charte graphique (couleurs, typographies)
- [ ] Logo et icônes finales (remplacer les icônes SVG temporaires)
- [ ] Page d'accueil publique
- [ ] Layout de l'application (navigation, responsive)

## Phase 03 — Données et authentification

- [ ] Choix de la base de données (option gratuite : PostgreSQL managé
      avec un niveau gratuit, ex. Neon ou Supabase — à décider)
- [ ] Authentification (solution open source : Auth.js)
- [ ] Modèle de données : biens, locataires, propriétaires

## Phase 04 — Fonctionnalités métier (par priorité)

- [ ] Module Biens (CRUD)
- [ ] Module Locataires (CRUD, liaison aux biens)
- [ ] Module Dépenses
- [ ] Module Maintenance (signalements, suivi)
- [ ] Module Rapports (synthèses, export)
- [ ] Module Propriétaires

## Phase 05 — PWA complète

- [ ] Persistance locale (IndexedDB)
- [ ] File d'attente hors ligne + synchronisation au retour de connexion
- [ ] Stratégie de mise à jour du cache après déploiement

## Phase 06 — Mise en production

- [ ] Déploiement Vercel connecté à GitHub
- [ ] Nom de domaine personnalisé (facultatif)
- [ ] Variables d'environnement de production configurées
