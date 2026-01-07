# Guide de démarrage - Tech Bloom Agency

## Ce qui a été créé

### Structure complète du site

✅ **7 pages entièrement fonctionnelles**
- Accueil avec sections Hero, Services, Valeurs, Stats, Portfolio preview, CTA
- Services (détail de tous les services)
- À propos (histoire, mission, vision, valeurs)
- Portfolio (projets avec système de catégories)
- Blog (articles avec dates et temps de lecture)
- Contact (formulaire complet + informations de contact)
- Mentions légales

✅ **Composants réutilisables**
- Navbar responsive avec menu mobile
- Footer complet avec liens et réseaux sociaux
- Hero section moderne
- Cards de services
- Section valeurs
- Stats section
- Portfolio preview
- CTA section

✅ **Système de données**
- Portfolio géré via `src/data/projects.ts`
- Blog géré via `src/data/blog.ts`
- Constantes centralisées dans `src/lib/constants.ts`

✅ **Design moderne (Webflow 2025 style)**
- Espaces généreux
- Typographie forte (Bitter + Montserrat)
- Couleurs de la charte graphique respectées
- Animations subtiles
- Ombres douces
- Bords arrondis
- Responsive mobile-first

## Démarrage rapide

```bash
# Installation
npm install

# Développement
npm run dev

# Production
npm run build
npm start
```

## Personnalisation

### 1. Modifier les informations de l'agence

Éditez `src/lib/constants.ts` :

```typescript
export const SITE_CONFIG = {
  name: "Tech Bloom Agency",
  email: "contact@techbloomagency.com",
  phone: "+261 34 10 608 02",
  // ...
};
```

### 2. Ajouter un projet au portfolio

Éditez `src/data/projects.ts` et ajoutez :

```typescript
{
  id: "7",
  title: "Nouveau projet",
  description: "Description du projet",
  category: "Site vitrine",
  image: "https://images.pexels.com/...",
  tags: ["Next.js", "Design"],
}
```

### 3. Ajouter un article de blog

Éditez `src/data/blog.ts` et ajoutez :

```typescript
{
  id: "5",
  title: "Nouveau article",
  excerpt: "Court résumé",
  content: "",
  author: "Tech Bloom Agency",
  date: "2025-01-07",
  readTime: "5 min",
  image: "https://images.pexels.com/...",
  category: "Design",
  tags: ["Web", "Conseils"]
}
```

### 4. Modifier les couleurs

Les couleurs sont définies dans `tailwind.config.ts` et `src/app/globals.css`.

Classes disponibles :
- `bg-brand-blue-dark` (#0D2A40)
- `bg-brand-blue` (#384B70)
- `bg-brand-blue-petrol` (#507687)
- `bg-brand-beige` (#FCFAEE)
- `bg-brand-red-cherry` (#B8001F)
- `bg-brand-red-rose` (#C94A6B)

## Points importants

### SEO

Chaque page a ses propres métadonnées définies avec l'export `metadata`. Vous pouvez les personnaliser dans chaque fichier `page.tsx`.

### Images

Les images utilisent le service Pexels pour les photos stock. Vous pouvez les remplacer par vos propres images en modifiant les URLs dans :
- `src/data/projects.ts` (portfolio)
- `src/data/blog.ts` (blog)

### Formulaire de contact

Le formulaire dans `/contact` est actuellement en mode "demo". Pour le rendre fonctionnel :
1. Créez une API route dans `src/app/api/contact/route.ts`
2. Ou utilisez un service comme Formspree, Formspark ou SendGrid

### Navigation

Les liens de navigation sont définis dans `src/lib/constants.ts` :

```typescript
export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  // ...
];
```

## Déploiement

### Vercel (recommandé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Autres plateformes

Le site est compatible avec toutes les plateformes supportant Next.js :
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway
- Render

## Structure des fichiers

```
src/
├── app/
│   ├── (pages)/           # Routes du site
│   ├── layout.tsx         # Layout global
│   ├── page.tsx           # Page d'accueil
│   └── globals.css        # Styles globaux
├── components/            # Composants UI
├── data/                  # Données statiques
├── lib/                   # Utilitaires
└── types/                 # Types TypeScript
```

## Prochaines étapes

1. **Personnaliser le contenu** - Remplacer les textes et images par vos propres contenus
2. **Configurer le formulaire** - Connecter le formulaire de contact à un service d'email
3. **Ajouter Google Analytics** - Pour suivre les visiteurs
4. **Optimiser les images** - Utiliser vos propres images optimisées
5. **Créer un favicon** - Ajouter une icône personnalisée
6. **Tester sur mobile** - Vérifier l'affichage sur différents appareils

## Support

Pour toute question, consultez :
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation TypeScript](https://www.typescriptlang.org/docs)

---

Créé avec Next.js 15 + TypeScript + Tailwind CSS 4
