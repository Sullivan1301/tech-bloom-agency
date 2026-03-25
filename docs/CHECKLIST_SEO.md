# Checklist SEO — Validation Rapide

## 🎯 Validation Page par Page

### Homepage (/)

```bash
# Métadonnées
Title: "Tech Bloom Agency — Agence Digitale Madagascar | Sites Web, Branding, Marketing" ✅
Description: "Agence digitale à Toamasina..." (158 car.) ✅
Keywords: agence digitale Madagascar, création site web Toamasina... ✅

# Schema.org
LocalBusiness ✅
AggregateRating + Reviews ✅

# OG Image
/og/og-home.jpg (1200x630px) ⏳ À créer
```

### Services (/services)

```bash
# Métadonnées
Title: "Nos Services Digitaux — Création Web, Branding, Marketing | Tech Bloom Agency" ✅
Description: "Découvrez nos services..." (156 car.) ✅
Keywords: services agence digitale Madagascar... ✅

# Schema.org
Service (catalogue complet) ✅

# OG Image
/og/og-services.jpg (1200x630px) ⏳ À créer
```

### Portfolio (/portfolio)

```bash
# Métadonnées
Title: "Portfolio — Projets & Réalisations | Tech Bloom Agency" ✅
Description: "Découvrez nos réalisations..." (159 car.) ✅
Keywords: réalisations agence digitale Madagascar... ✅

# Schema.org
BreadcrumbList ✅

# OG Image
/og/og-portfolio.jpg (1200x630px) ⏳ À créer
```

### Contact (/contact)

```bash
# Métadonnées
Title: "Contact & Prise de RDV | Tech Bloom Agency" ✅
Description: "Contactez Tech Bloom Agency..." (142 car.) ✅

# Schema.org
BreadcrumbList ✅

# OG Image
/og/og-contact.jpg (1200x630px) ⏳ À créer
```

---

## 🔍 Audit Technique Rapide

### Commandes Shell

```bash
# 1. Vérifier balises title
grep -r "export const metadata" src/app/*/page.tsx | grep title

# 2. Vérifier schemas JSON-LD
grep -r "application/ld+json" src/app/ src/components/

# 3. Vérifier lang="fr"
grep -r 'lang="fr"' src/app/layout.tsx

# 4. Vérifier sitemap
ls -lh public/sitemap.xml public/robots.txt

# 5. Vérifier OG images
ls -lh public/og/*.jpg
```

### Tests Automatisés

```bash
# Build + sitemap
npm run build

# Vérifier erreurs
npm run lint

# Test Rich Results
# https://search.google.com/test/rich-results

# Test PageSpeed
# https://pagespeed.web.dev/
```

---

## 📋 Checklist Finale Pré-déploiement

### Métadonnées (6.1)

- [ ] Title 50-60 caractères max sur toutes pages
- [ ] Meta description 140-160 caractères max
- [ ] Keywords pertinents définis
- [ ] OG images créées (1200x630px)
- [ ] Twitter cards configurées
- [ ] URLs canoniques (`alternates.canonical`)
- [ ] Robots index/follow défini

### Schema.org (6.3)

- [ ] LocalBusiness injecté sur / et /a-propos
- [ ] Service schema sur /services
- [ ] AggregateRating + Reviews sur /
- [ ] BreadcrumbList sur pages internes
- [ ] BlogPosting sur articles blog
- [ ] JSON valide (tester sur Rich Results Test)

### Sitemap & Robots (6.4)

- [ ] next-sitemap installé
- [ ] Script postbuild dans package.json
- [ ] next-sitemap.config.js créé
- [ ] Sitemap.xml généré après build
- [ ] Robots.txt présent avec bonnes règles
- [ ] Sitemap soumis Search Console

### On-Page (6.6)

- [ ] Un H1 unique par page avec mot-clé principal
- [ ] H2 avec variantes/mots-clés secondaires
- [ ] Alt text sur toutes les images
- [ ] Width + height sur images
- [ ] Liens internes vers 2+ pages
- [ ] Anchor text descriptifs
- [ ] URLs en kebab-case sans accents
- [ ] `<html lang="fr">` présent
- [ ] next/font utilisé (pas de <link>)
- [ ] Breadcrumb visible + JSON-LD

### Validation

- [ ] Google Rich Results Test OK
- [ ] PageSpeed Insights > 85 mobile
- [ ] PageSpeed Insights > 95 desktop
- [ ] Search Console configurée
- [ ] GA4 events trackés
- [ ] Aucune erreur console

---

## 🚨 Erreurs Fréquentes à Éviter

### ❌ Title trop long (> 60 car.)

```tsx
// ❌ MAUVAIS - 75 caractères (tronqué dans SERPs)
title: "Tech Bloom Agency — Agence Digitale Madagascar à Toamasina pour Création de Sites Web et Marketing Digital"

// ✅ BON - 58 caractères
title: "Tech Bloom Agency — Agence Digitale Madagascar | Sites Web, Marketing"
```

### ❌ Description trop courte/longue

```tsx
// ❌ TROP COURT - 80 caractères
description: "Agence digitale à Madagascar. Création web et marketing."

// ❌ TROP LONG - 200 caractères (tronqué)
description: "Agence digitale basée à Toamasina, Madagascar, spécialisée dans la création de sites web professionnels, le branding, le community management et le marketing digital pour les PME locales et internationales qui souhaitent développer leur présence en ligne."

// ✅ PARFAIT - 158 caractères
description: "Agence digitale à Toamasina, Madagascar. Création de sites web, branding, community management et marketing digital pour PME et entrepreneurs."
```

### ❌ Schema.org invalide

```tsx
// ❌ FAUX - JSON mal formé
<script dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", /* virgule manquante */ }) }} />

// ✅ BON - Utiliser helper
import { createJsonLd } from "@/lib/schema-org";
<script dangerouslySetInnerHTML={createJsonLd(LocalBusinessSchema)} />
```

### ❌ Images sans alt

```tsx
// ❌ INTERDIT
<Image src="/photo.jpg" width={800} height={600} />

// ✅ OBLIGATOIRE
<Image src="/photo.jpg" alt="Description détaillée avec mot-clé" width={800} height={600} />
```

### ❌ Pas de canonical

```tsx
// ❌ DANGER - Duplicate content
export const metadata: Metadata = {
  title: "...",
  // Pas de canonical
};

// ✅ BON
export const metadata: Metadata = {
  title: "...",
  alternates: { canonical: "/page-slug" },
};
```

### ❌ Robots.txt bloqueant

```txt
# ❌ CATASTROPHE - Bloque tout le site
User-agent: *
Disallow: /

# ✅ PARFAIT
User-agent: *
Allow: /
Disallow: /api/
Disallow: /merci
Sitemap: https://site.com/sitemap.xml
```

---

## 📊 Suivi Post-Déploiement

### Semaine 1

- [ ] Vérifier indexation (site:techbloomagency.com)
- [ ] Soumettre sitemap Search Console
- [ ] Monitorer erreurs crawl
- [ ] Checker premiers rankings

### Mois 1

- [ ] Analyser impressions/clics Search Console
- [ ] Identifier keywords positionnés
- [ ] Corriger erreurs techniques
- [ ] Optimiser pages sous-performantes

### Mois 3

- [ ] Audit complet avec Screaming Frog
- [ ] Analyse concurrentielle
- [ ] Stratégie netlinking
- [ ] Planification contenu blog

---

**Objectif**: 100% de cette checklist validé avant déploiement production ! ✅
