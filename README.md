# NA-BOUDOU

Plateforme indépendante de gestion locative : biens, locataires,
propriétaires, maintenance, dépenses et rapports.

**Phase actuelle : 01 — fondations techniques.** L'interface finale et les
fonctionnalités métier ne sont pas encore développées.

## 1. Qu'est-ce que NA-BOUDOU ?

NA-BOUDOU est un projet SaaS de gestion locatif construit comme un vrai
projet logiciel indépendant : il possède sa propre structure, son propre
dépôt Git, et peut être développé, hébergé et maintenu sans dépendre
d'aucune plateforme d'IA ni d'aucun service payant obligatoire.

## 2. Technologies utilisées

| Outil        | Version (au moment de l'installation) |
| ------------ | ------------------------------------- |
| Next.js      | 16.4.6 (App Router)                   |
| React        | 19.3.0                                |
| TypeScript   | 5 (mode strict)                       |
| Tailwind CSS | 4.3.3                                 |
| ESLint       | 9                                     |
| Node.js      | ≥ 20.9 requis                         |
| npm          | gestionnaire de paquets               |

## 3. Installer le projet

Prérequis : [Node.js](https://nodejs.org) version 20 ou supérieure
installée sur votre ordinateur.

```bash
git clone https://github.com/VOTRE-PSEUDO/na-boudou.git
cd na-boudou
npm install
```

Copiez ensuite le fichier d'exemple des variables d'environnement :

```bash
cp .env.example .env.local
```

## 4. Lancer le serveur local

```bash
npm run dev
```

Puis ouvrez http://localhost:3000 dans votre navigateur.
La page `/dashboard` montre la structure de l'application.

## 5. Lancer les vérifications

```bash
npm run lint        # analyse de la qualité du code (ESLint)
npm run typecheck   # vérification des types TypeScript
```

## 6. Construire la version de production

```bash
npm run build
npm start
```

## 7. Envoyer le projet sur GitHub

Le détail complet (création du dépôt, token d'accès, premiers envois) est
dans [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md). En résumé, une fois le dépôt
créé sur GitHub :

```bash
git remote add origin https://github.com/VOTRE-PSEUDO/na-boudou.git
git branch -M main
git push -u origin main
```

Et pour chaque modification ensuite :

```bash
git add .
git commit -m "Description de la modification"
git push
```

## 8. Connecter GitHub à Vercel

1. Créez un compte sur [vercel.com](https://vercel.com) en vous connectant
   avec GitHub.
2. **Add New → Project** → importez le dépôt `na-boudou`.
3. Vercel détecte Next.js automatiquement : cliquez **Deploy**.

## 9. Déployer une nouvelle version

C'est automatique : dès que vous faites `git push`, Vercel détecte le
changement et déploie la nouvelle version. Vous pouvez suivre chaque
déploiement dans l'onglet **Deployments** du projet sur Vercel.

## Documentation

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — organisation du code, PWA, règles de sécurité
- [docs/ROADMAP.md](docs/ROADMAP.md) — phases de développement prévues
- [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) — guide GitHub + Vercel détaillé
