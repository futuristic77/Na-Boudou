# NA-BOUDOU — Architecture technique

Ce document décrit les fondations techniques de NA-BOUDOU. Il est écrit pour
être compris par un développeur débutant et par n'importe quel agent IA
chargé de faire évoluer le projet.

## Stack

| Outil      | Rôle                                        |
| ---------- | ------------------------------------------- |
| Next.js    | Framework web (App Router, rendu serveur)   |
| React      | Bibliothèque d'interface                    |
| TypeScript | Typage strict du code                       |
| Tailwind CSS | Styles utilitaires                        |
| ESLint     | Analyse statique (qualité du code)          |
| npm        | Gestionnaire de paquets                     |
| Git/GitHub | Versionnement et hébergement du code        |
| Vercel     | Déploiement de la production                |

## Organisation des dossiers

```
na-boudou/
├── public/                  # Assets publics servis tels quels
│   ├── icons/               # Icônes PWA (SVG temporaires)
│   ├── images/              # Images du site (à remplir plus tard)
│   ├── manifest.webmanifest # Manifeste PWA
│   └── sw.js                # Service Worker minimal (shell hors ligne)
│
├── src/
│   ├── app/                 # App Router de Next.js = les routes/URL
│   │   ├── (marketing)/     # Groupe de routes : pages publiques
│   │   │   └── page.tsx     # Page d'accueil ("/")
│   │   ├── (application)/   # Groupe de routes : pages connectées
│   │   │   └── dashboard/   # Tableau de bord ("/dashboard")
│   │   ├── layout.tsx       # Mise en page racine + métadonnées PWA
│   │   └── globals.css      # Styles globaux (Tailwind)
│   │
│   ├── components/          # Composants React réutilisables
│   │   ├── ui/              # Petits éléments (boutons, champs…)
│   │   ├── layout/          # Structures de page (header, sidebar…)
│   │   └── shared/          # Composants partagés entre modules
│   │
│   ├── features/            # Un dossier par module métier
│   │   ├── properties/      # Biens
│   │   ├── tenants/         # Locataires
│   │   ├── owners/          # Propriétaires
│   │   ├── maintenance/     # Maintenance
│   │   ├── expenses/        # Dépenses
│   │   └── reports/         # Rapports
│   │
│   ├── lib/                 # Fonctions utilitaires pures
│   ├── hooks/               # Hooks React personnalisés
│   ├── types/               # Types TypeScript partagés
│   ├── config/              # Configuration (nom du site, constantes)
│   └── styles/              # Styles complémentaires si besoin
│
└── docs/                    # Documentation du projet
```

### Pourquoi des groupes de routes `(marketing)` et `(application)` ?

Dans Next.js, un dossier entre parenthèses **n'apparaît pas dans l'URL**.
Cela permet de séparer les pages publiques des pages de l'application tout
en gardant des URLs simples (`/`, `/dashboard`). À terme, `(application)`
pourra avoir son propre layout (barre latérale, protection par connexion)
sans affecter le site public.

### Pourquoi un dossier `features/` ?

Chaque module métier vit dans son propre dossier. Quand une fonctionnalité
grandit, son code reste regroupé au lieu d'être éparpillé. Un dossier
`features/tenants/` contiendra plus tard ses composants, ses types et ses
appels de données.

## PWA — stratégie et limites actuelles

Ce qui est en place (phase 01) :

- `manifest.webmanifest` : rend l'application installable sur Android.
- Icônes SVG (standard et maskable) dans `public/icons/` — icônes
  temporaires, à remplacer par des icônes finales en phase 02.
- Métadonnées dans `src/app/layout.tsx` (nom, thème, mode standalone).
- `public/sw.js` : Service Worker minimal qui met en cache le *shell*
  statique pour permettre l'ouverture hors connexion des pages déjà visitées.
  Aucune donnée privée n'est stockée dans ce cache.

Ce qui reste à développer :

1. **Persistance locale des données métier** : IndexedDB (via une
   bibliothèque open source choisie au moment venu) pour les données déjà
   synchronisées.
2. **File d'attente hors ligne** : enregistrer les opérations faites hors
   connexion et les rejouer à la reconnexion (Background Sync / reprise
   manuelle).
3. **Gestion des versions du cache** : invalider proprement l'ancien cache
   à chaque déploiement.
4. **Notifications** (si besoin métier confirmé).

Règle de sécurité permanente : jamais de données personnelles dans
Cache Storage — uniquement des assets publics.

## Indépendance du projet

Le projet NA-BOUDOU :

- n'a aucune dépendance obligatoire à une plateforme d'IA (Lovable, Bolt,
  Replit, v0…) : c'est un projet Next.js standard ;
- n'utilise aucun service payant obligatoire ;
- peut être cloné, installé (`npm install`) et lancé (`npm run dev`)
  n'importe où, sur n'importe quel poste.
