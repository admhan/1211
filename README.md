# Adam Hannachi — Portfolio

Ce projet est une refonte du site d'Adam Hannachi avec React, Vite et TailwindCSS. L'application est entièrement statique et peut être déployée sur GitHub Pages.

## Prérequis

- Node.js 18+
- npm 9+

## Installation

```bash
npm install
```

## Télécharger le projet sans Git

Si vous ne souhaitez pas utiliser `git clone`, vous pouvez récupérer le code via une archive ZIP :

1. Ouvrez la page du dépôt sur GitHub.
2. Cliquez sur le bouton vert **Code** puis sélectionnez **Download ZIP**.
3. Décompressez l'archive sur votre ordinateur (clic droit → *Extraire tout* ou outil équivalent).
4. Dans le dossier extrait, ouvrez un terminal et installez les dépendances :
   ```bash
   npm install
   ```
5. Vous pouvez ensuite lancer les scripts habituels (`npm run dev`, `npm run build`, etc.).

## Scripts

```bash
npm run dev      # lance le serveur de développement
npm run build    # construit la version de production
npm run preview  # prévisualise la build
npm run deploy   # build + publication sur GitHub Pages (branche gh-pages)
```

## Structure principale

- `src/components` : chaque section du site dans un composant dédié.
- `src/data` : contenus éditoriaux (traductions, projets, WIP).
- `public/assets` : emplacement réservé aux médias (images, CV) à fournir avant le déploiement.
- `src/i18n.js` : configuration d'i18next pour le support FR/EN.

## Médias à fournir

- Les fichiers binaires (photo, CV, aperçus de projets, favicon) ne sont pas inclus dans ce dépôt.
- Ajoutez vos propres fichiers dans `public/assets/` en conservant les noms attendus par les composants (par exemple `photo_profil.jpg`, `cv_Adam_Hannachi.pdf`, `preview.png`).
- Le favicon peut aussi être remplacé par un fichier SVG/PNG custom via `index.html`.

## Thème & Langue

- Le thème s'adapte automatiquement aux préférences système et peut être changé manuellement.
- La langue (FR/EN) est gérée avec i18next et persistée dans `localStorage`.

## Commenter un commit sur GitHub

1. Ouvrez le dépôt sur GitHub et allez dans l'onglet **Commits** (ou "History").
2. Cliquez sur le hash du commit qui vous intéresse pour afficher la vue détaillée.
3. Faites défiler jusqu'au fichier à commenter, puis cliquez sur l'icône **+** à gauche de la ligne désirée.
4. Saisissez votre commentaire dans le champ prévu, puis validez avec **Comment** ou **Start a review** si vous souhaitez regrouper plusieurs remarques.
5. Une fois vos commentaires prêts, cliquez sur **Submit review** pour les publier (sélectionnez *Comment*, *Approve* ou *Request changes* selon le contexte).

