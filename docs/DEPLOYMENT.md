# NA-BOUDOU — Déploiement (GitHub + Vercel)

Guide pas à pas pour un débutant, sans rien supposer d'automatique.

## 1. Créer le dépôt GitHub

1. Créez-vous un compte sur [github.com](https://github.com) (gratuit).
2. Cliquez sur **New repository** (bouton vert, ou menu `+` en haut à droite).
3. Remplissez :
   - **Repository name** : `na-boudou`
   - **Public** (gratuit et suffisant pour démarrer)
   - Ne cochez **pas** « Add a README » (le projet en a déjà un).
4. Cliquez **Create repository**. GitHub affiche alors les commandes.

Dans un terminal, à la racine du projet :

```bash
git remote add origin https://github.com/VOTRE-PSEUDO/na-boudou.git
git branch -M main
git push -u origin main
```

À la première exécution, Git demandera vos identifiants GitHub : utilisez
un **Personal Access Token** (à créer dans GitHub :
`Settings → Developer settings → Personal access tokens → Tokens (classic)`,
cochez la permission `repo`) plutôt que votre mot de passe.

## 2. Connecter GitHub à Vercel

1. Créez-vous un compte sur [vercel.com](https://vercel.com) (gratuit)
   en vous connectant **avec votre compte GitHub**.
2. Dans le tableau de bord Vercel, cliquez **Add New → Project**.
3. Sélectionnez le dépôt `na-boudou` (bouton **Import**).
4. Vercel détecte automatiquement Next.js : ne changez rien.
   La commande de build (`next build`) est déjà la bonne.
5. Cliquez **Deploy**. Quelques minutes plus tard, le site est en ligne
   (adresse du type `na-boudou.vercel.app`).

## 3. Déployer une nouvelle version

Le déploiement est automatique : à chaque fois que vous faites

```bash
git add .
git commit -m "Description de la modification"
git push
```

Vercel détecte le changement sur GitHub et déploie la nouvelle version
seule (déploiement automatique depuis GitHub).

## 4. Variables d'environnement sur Vercel

Si le projet utilise des variables d'environnement (fichier `.env.local`
en local) :

1. Dans Vercel : projet `na-boudou` → **Settings → Environment Variables**.
2. Ajoutez chaque variable (nom exactement comme dans `.env.example`).
3. Redéployez (un nouveau `git push` suffit, ou bouton **Redeploy**).

## 5. Fichier `.env.example`

Le fichier `.env.example` à la racine liste les variables attendues avec
des valeurs d'exemple. Il est versionné dans Git ; le vrai fichier
`.env.local` ne l'est jamais.
