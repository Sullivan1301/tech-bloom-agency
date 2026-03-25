# Guide Complet SEO — Tech Bloom Agency v2.0

## 📋 Vue d'ensemble

**Date**: Mars 2026  
**Priorité**: Niveau 1 — Critique pour le succès  
**Statut**: ✅ Spécifications CDN implémentées

---

## 🎯 Objectifs SEO

### Cibles de Trafic Organique

| Métrique | Actuel | Cible M+3 | Cible M+6 |
|----------|--------|-----------|-----------|
| Impressions Search Console | 0 | 5 000/mois | 15 000/mois |
| Clics organiques | 0 | 150/mois | 500/mois |
| Position moyenne | - | Top 20 | Top 10 |
| Mots-clés positionnés | 0 | 50 | 200 |

### Mots-clés Principaux

**Page /**:
- `agence digitale Madagascar` (Volume: 500/mois)
- `création site web Toamasina` (Volume: 200/mois)
- `marketing digital Madagascar` (Volume: 300/mois)

**Page /services**:
- `services agence digitale Madagascar` (Volume: 150/mois)
- `création site web professionnel` (Volume: 400/mois)

**Page /portfolio**:
- `réalisations agence digitale Madagascar` (Volume: 80/mois)
- `portfolio web Madagascar` (Volume: 60/mois)

---

## 6.1 Métadonnées — Page par Page

### ✅ Toutes les pages principales

| Page | Title (50-60 car.) | Meta Description (140-160 car.) |
|------|-------------------|--------------------------------|
| **/** | Tech Bloom Agency — Agence Digitale Madagascar \| Sites Web, Branding, Marketing | Agence digitale à Toamasina, Madagascar. Création de sites web, branding, community management et marketing digital pour PME et entrepreneurs. |
| **/services** | Nos Services Digitaux — Création Web, Branding, Marketing \| Tech Bloom Agency | Découvrez nos services : création de sites web, identité visuelle, marketing digital, community management et accompagnement à Madagascar. |
| **/portfolio** | Portfolio — Projets & Réalisations \| Tech Bloom Agency | Découvrez nos réalisations : sites web, identité visuelle et stratégies marketing pour entrepreneurs et PME malgaches et internationaux. |
| **/contact** | Contact & Prise de RDV \| Tech Bloom Agency | Contactez Tech Bloom Agency. Réservez un appel découverte gratuit de 30 min avec Sullivan Joro. Réponse en moins de 24h. |

### 📝 Templates de Métadonnées

#### Homepage (/)
```typescript
export const metadata: Metadata = {
  title: "Tech Bloom Agency — Agence Digitale Madagascar | Sites Web, Branding, Marketing",
  description: "Agence digitale à Toamasina, Madagascar. Création de sites web, branding, community management et marketing digital pour PME et entrepreneurs.",
  keywords: [
    "agence digitale Madagascar",
    "création site web Toamasina",
    "community manager Madagascar",
    "marketing digital Madagascar",
    "branding Madagascar",
    "agence web Madagascar",
  ],
  openGraph: {
    title: "Tech Bloom Agency — Agence Digitale Madagascar",
    description: "Création web, branding, marketing digital à Madagascar.",
    url: "/",
    siteName: "Tech Bloom Agency",
    images: [{ url: "/og/og-home.jpg", width: 1200, height: 630, alt: "Tech Bloom Agency" }],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Bloom Agency — Agence Digitale Madagascar",
    description: "Création web, branding, marketing digital à Madagascar.",
    images: ["/og/og-home.jpg"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};
```

---

## 6.2 generateMetadata() Next.js — Exemples

### Structure Complète par Page

```typescript
// app/[page]/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  // Title 50-60 caractères max
  title: "Titre optimisé SEO | Tech Bloom Agency",
  
  // Description 140-160 caractères max
  description: "Description complète avec mots-clés principaux et secondaires.",
  
  // Keywords (optionnel mais recommandé)
  keywords: [
    "mot-clé principal",
    "variante 1",
    "variante 2",
    "localisation",
  ],
  
  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Titre OG (peut être identique au title)",
    description: "Description OG (similaire à meta description)",
    url: "/page-slug",
    siteName: "Tech Bloom Agency",
    images: [
      {
        url: "/og/og-page.jpg",
        width: 1200,
        height: 630,
        alt: "Description image",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Titre Twitter",
    description: "Description Twitter",
    images: ["/og/og-page.jpg"],
  },
  
  // URL canonique
  alternates: { 
    canonical: "/page-slug" 
  },
  
  // Indexation
  robots: { 
    index: true, 
    follow: true 
  },
};
```

---

## 6.3 Schema.org — JSON-LD Obligatoires

### LocalBusiness (Homepage + /a-propos)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Tech Bloom Agency",
  "alternateName": "TBA",
  "description": "Agence digitale à Madagascar : création de sites web, branding, marketing digital et community management.",
  "url": "https://tech-bloom-agency.vercel.app",
  "logo": "https://tech-bloom-agency.vercel.app/images/logo-tba.png",
  "image": "https://tech-bloom-agency.vercel.app/og/og-home.jpg",
  "telephone": "+261341060802",
  "email": "sullivanjoro3@gmail.com",
  "founder": {
    "@type": "Person",
    "name": "Sullivan Joro Rakotoniaina",
    "jobTitle": "Fondateur et Directeur"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Toamasina",
    "addressCountry": "MG"
  },
  "areaServed": ["Madagascar","France","Belgique","Suisse","Afrique francophone"],
  "priceRange": "$$",
  "openingHours": "Mo-Fr 08:00-18:00",
  "sameAs": [
    "https://facebook.com/techbloomagency",
    "https://linkedin.com/company/tech-bloom-agency"
  ]
}
```

**Utilisation dans code**:
```tsx
import { LocalBusinessSchema, createJsonLd } from "@/lib/schema-org";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(LocalBusinessSchema)}
      />
      {/* Contenu page */}
    </>
  );
}
```

### Service (Page /services)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Création de site web",
  "name": "Création de sites web professionnels",
  "description": "Conception et développement de sites web modernes, responsives et SEO-optimisés pour PME et entrepreneurs à Madagascar.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Tech Bloom Agency",
    "url": "https://tech-bloom-agency.vercel.app"
  },
  "areaServed": "Madagascar",
  "offers": {
    "@type": "Offer",
    "price": "120",
    "priceCurrency": "EUR",
    "description": "A partir de 120€ (600 000 Ar)"
  }
}
```

### AggregateRating + Reviews (Homepage)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tech Bloom Agency",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "3",
    "bestRating": "5"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Longin — Runrobe" },
      "reviewBody": "L'efficacité du travail fourni par Tech Bloom Agency est satisfaisante.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Erica — Girl's Touch" },
      "reviewBody": "C'était d'une facilité et fluidité optimalement parfait.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    }
  ]
}
```

### BreadcrumbList (Toutes pages internes)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { 
      "@type": "ListItem", 
      "position": 1, 
      "name": "Accueil", 
      "item": "https://tech-bloom-agency.vercel.app" 
    },
    { 
      "@type": "ListItem", 
      "position": 2, 
      "name": "Portfolio", 
      "item": "https://tech-bloom-agency.vercel.app/portfolio" 
    },
    { 
      "@type": "ListItem", 
      "position": 3, 
      "name": "Titre du projet" 
    }
  ]
}
```

**Utilisation avec helper**:
```tsx
import { BreadcrumbSchema, createJsonLd } from "@/lib/schema-org";

const breadcrumbSchema = BreadcrumbSchema([
  { position: 1, name: "Accueil", item: "/" },
  { position: 2, name: "Portfolio", item: "/portfolio" },
  { position: 3, name: project.title },
]);

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={createJsonLd(breadcrumbSchema)}
/>
```

### BlogPosting (Articles de blog)

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Titre de l'article",
  "description": "Meta description de l'article (140-160 car.)",
  "image": "https://tech-bloom-agency.vercel.app/blog/[slug]/cover.jpg",
  "author": { 
    "@type": "Person", 
    "name": "Sullivan Joro Rakotoniaina" 
  },
  "publisher": {
    "@type": "Organization",
    "name": "Tech Bloom Agency",
    "logo": { 
      "@type": "ImageObject", 
      "url": "https://tech-bloom-agency.vercel.app/images/logo-tba.png" 
    }
  },
  "datePublished": "2026-03-25",
  "dateModified": "2026-03-25",
  "url": "https://tech-bloom-agency.vercel.app/blog/[slug]",
  "mainEntityOfPage": { 
    "@type": "WebPage", 
    "@id": "https://tech-bloom-agency.vercel.app/blog/[slug]" 
  }
}
```

---

## 6.4 Sitemap & Robots.txt

### Configuration next-sitemap

**Installation**:
```bash
npm install next-sitemap
```

**Fichier**: `next-sitemap.config.js`
```javascript
module.exports = {
  siteUrl: "https://tech-bloom-agency.vercel.app",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/merci", "/mentions-legales"],
}
```

**Package.json**:
```json
{
  "scripts": {
    "build": "next build",
    "postbuild": "next-sitemap"
  }
}
```

### Robots.txt Généré

```txt
User-agent: *
Allow: /
Disallow: /api/
Disallow: /merci
Disallow: /_next/
Disallow: /static/
Sitemap: https://tech-bloom-agency.vercel.app/sitemap.xml
```

### Vérification

Après build :
```bash
npm run build
# Vérifier fichiers générés
ls -lh public/sitemap.xml public/robots.txt
```

---

## 6.5 Mots-clés Cibles par Page

### Stratégie de Maillage

| Page | Mot-clé H1 Principal | Mots-clés H2/Body | Intent Recherche |
|------|---------------------|-------------------|------------------|
| **/** | agence digitale Madagascar | création site web Madagascar, agence web Toamasina, marketing digital Madagascar | Informationnel + Navigational |
| **/services** | services agence digitale Madagascar | création site web professionnel, community manager Madagascar, branding Madagascar | Commercial |
| **/portfolio** | réalisations agence digitale Madagascar | portfolio web Madagascar, exemples sites entreprises Madagascar | Commercial |
| **/tarifs** | prix agence digitale Madagascar | tarif site web Madagascar, combien coûte site internet Madagascar | Transactionnel |
| **/partenariats** | agence offshore francophone Madagascar | sous-traitance digitale, partenaire offshore francophone, white-label agence web | Commercial B2B |
| **/a-propos** | agence digitale Toamasina Madagascar | Sullivan Joro Rakotoniaina, Tech Bloom Agency histoire | Navigational |
| **/blog/\*** | [sujet article] | Mots-clés longue traîne liés au sujet | Informationnel |

---

## 6.6 Règles SEO On-Page — À Appliquer Partout

### ✅ Checklist Complète

#### Structure HTML
- [ ] **Un seul H1 par page** — Contient mot-clé principal
- [ ] **H2 contiennent variantes** — Mots-clés secondaires
- [ ] **Hiérarchie respectée** — H1 > H2 > H3 > H4
- [ ] **Pas de sauts de niveau** — Éviter H1 → H3 directement

#### Images
- [ ] **Balise alt sur TOUTES les images** — Descriptive
- [ ] **Mot-clé si pertinent** — Sans stuffing
- [ ] **Nom de fichier explicite** — `creation-site-web-madagascar.webp`
- [ ] **Width + Height définis** — Anti-CLS

#### Liens Internes
- [ ] **Chaque page renvoie vers 2+ autres pages**
- [ ] **Anchor text descriptif** — Éviter "cliquez ici"
- [ ] **Maillage thématique** — Pages liées sémantiquement

#### URLs
- [ ] **Kebab-case français sans accents**
  - ✅ `/creation-site-web-madagascar`
  - ❌ `/CreationSiteWebMadagascar`
  - ❌ `/création_site_web_Madagascar`
- [ ] **URLs courtes et descriptives**
- [ ] **Pas de paramètres inutiles**

#### Canonical
- [ ] **`alternates.canonical` dans chaque page**
- [ ] **URL absolue ou relative cohérente**
- [ ] **Pas de duplicate content**

#### Langue
- [ ] **`<html lang="fr">` dans layout** — Obligatoire
- [ ] **Contenu 100% en français**
- [ ] **Pas de mélange de langues**

#### Polices
- [ ] **Pas de `<link>` Google Fonts** — next/font uniquement
- [ ] **`display: swap` activé**
- [ ] **Preload: true**

#### Breadcrumb
- [ ] **Breadcrumb visible** — Navigation utilisateur
- [ ] **BreadcrumbList JSON-LD** — Rich snippet
- [ ] **Sur toutes les pages internes**

---

## 🛠️ Outils de Validation SEO

### 1. Google Rich Results Test

**URL**: https://search.google.com/test/rich-results

**À tester**:
- Homepage avec LocalBusiness + AggregateRating
- Page services avec Service schema
- Pages portfolio avec BreadcrumbList
- Articles blog avec BlogPosting

**Résultats attendus**:
- ✅ Valid structured data detected
- ✅ LocalBusiness eligible
- ✅ Review stars eligible
- ✅ Breadcrumb eligible

### 2. PageSpeed Insights

**URL**: https://pagespeed.web.dev/

**Cibles**:
- Mobile : > 85/100
- Desktop : > 95/100
- LCP : < 2.5s
- CLS : < 0.1
- INP : < 100ms

### 3. Google Search Console

**Setup**:
1. Ajouter propriété : `https://tech-bloom-agency.vercel.app`
2. Valider via DNS ou fichier HTML
3. Soumettre sitemap : `/sitemap.xml`
4. Surveiller :
   - Impressions
   - Clics
   - Positions moyennes
   - Erreurs d'indexation

### 4. Screaming Frog (Audit Technique)

**Configuration**:
- Mode : Spider
- Limite : 100 URLs
- Profondeur : 3 niveaux

**Vérifications**:
- Status codes (200, 301, 404)
- Title tags (longueur, duplicatas)
- Meta descriptions (longueur, manquantes)
- H1/H2 (manquants, duplicatas)
- Images (alt manquantes)
- Liens internes (broken links)

### 5. Ahrefs Webmaster Tools (Gratuit)

**URL**: https://ahrefs.com/webmaster-tools

**Fonctionnalités**:
- Audit technique complet
- Suivi positions keywords
- Analyse backlinks
- Détection erreurs SEO

---

## 📊 Tracking & Analytics

### Google Analytics 4 — Events SEO

```typescript
// Track search console data
window.gtag('event', 'page_view', {
  page_title: document.title,
  page_location: window.location.href,
});

// Track outbound clicks
document.querySelectorAll('a[href^="http"]').forEach(link => {
  link.addEventListener('click', (e) => {
    gtag('event', 'click', {
      event_category: 'Outbound Link',
      event_label: link.href,
    });
  });
});
```

### Search Console API — Récupération Données

```javascript
// Récupérer impressions/clics
const searchConsoleData = await fetch('/api/search-console', {
  method: 'POST',
  body: JSON.stringify({
    startDate: '2026-01-01',
    endDate: '2026-03-31',
  }),
});
```

---

## ✅ Checklist Finale SEO

### Avant Déploiement

#### Métadonnées
- [ ] Title 50-60 caractères sur toutes pages
- [ ] Meta description 140-160 caractères
- [ ] Keywords pertinents
- [ ] OG images 1200x630px créées
- [ ] Twitter cards configurées
- [ ] URLs canoniques définies

#### Schema.org
- [ ] LocalBusiness sur / et /a-propos
- [ ] Service sur /services
- [ ] AggregateRating + Reviews sur /
- [ ] BreadcrumbList sur pages internes
- [ ] BlogPosting sur articles blog

#### Technique
- [ ] Sitemap.xml généré
- [ ] Robots.txt configuré
- [ ] `<html lang="fr">` présent
- [ ] next/font utilisé (pas de <link>)
- [ ] Images avec alt + width/height
- [ ] H1 unique par page
- [ ] Liens internes fonctionnels

#### Validation
- [ ] Test Rich Results OK
- [ ] PageSpeed > 85 mobile
- [ ] Search Console configurée
- [ ] GA4 events trackés

---

## 🚀 Impact Attendu

### Mois 1 (Post-lancement)

- Indexation complète (50-100 pages)
- Premières impressions Search Console
- Positionnement mots-clés longue traîne

### Mois 3

- 5 000 impressions/mois
- 150 clics organiques/mois
- Top 20 sur mots-clés principaux

### Mois 6

- 15 000 impressions/mois
- 500 clics organiques/mois
- Top 10 sur mots-clés principaux
- Premiers leads qualifiés organiques

---

## 📚 Ressources Utiles

**Documentation Officielle**:
- [Google Search Central](https://developers.google.com/search/docs)
- [Schema.org](https://schema.org/docs/documents.html)
- [Next.js SEO](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)

**Outils**:
- [Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Search Console](https://search.google.com/search-console)
- [Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/)

---

**Date**: Mars 2026  
**Version**: 2.0  
**Statut**: ✅ Spécifications SEO implémentées
