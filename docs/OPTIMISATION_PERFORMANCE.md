# Guide d'Optimisation Performance - Tech Bloom Agency v2.0

## 🎯 Core Web Vitals — Cibles Obligatoires

### Tableau des Métriques

| Métrique | Cible | Outil | Priorité | Statut |
|----------|-------|-------|----------|--------|
| **LCP** (Largest Contentful Paint) | < 2.5s | PageSpeed Insights | 🔴 Critique | ✅ |
| **INP** (Interaction to Next Paint) | < 100ms | PageSpeed Insights | 🔴 Critique | ✅ |
| **CLS** (Cumulative Layout Shift) | < 0.1 | PageSpeed Insights | 🔴 Critique | ✅ |
| **TTFB** (Time to First Byte) | < 600ms | WebPageTest | 🟠 Haute | ✅ |
| **PageSpeed Mobile** | > 85/100 | PSI | 🟠 Haute | ⏳ |
| **PageSpeed Desktop** | > 95/100 | PSI | 🟢 Moyenne | ⏳ |
| **Bundle JS Total** | < 150 KB gzip | next build | 🔴 Critique | ⏳ |

---

## 📸 Optimisation Images — Règles Non Négociables

### 5.2 Checklist Complète

#### ✅ 1. Format WebP Exclusif
```tsx
// ✅ CORRECT
<Image src="/hero/agence.webp" alt="..." />

// ❌ INTERDIT
<img src="/image.jpg" alt="..." />
<Image src="/photo.png" alt="..." />
```

**Action Requise**: Convertir toutes les images en WebP avant déploiement

#### ✅ 2. next/image Obligatoire
```tsx
// ✅ TOUJOURS utiliser next/image
import Image from "next/image";
<Image src={src} alt={alt} width={800} height={600} />

// ❌ JAMAIS de <img> direct
<img src={src} alt={alt} /> // BANNI
```

#### ✅ 3. Dimensions Explicites (Anti-CLS)
```tsx
// ✅ CORRECT - Width + Height définis
<Image 
  src="/avatar.jpg" 
  alt="Avatar" 
  width={64} 
  height={64} 
/>

// ✅ CORRECT - fill avec parent positionné
<div className="relative aspect-[4/3]">
  <Image src={src} alt={alt} fill className="object-cover" />
</div>

// ❌ FAUX - Pas de dimensions
<Image src={src} alt={alt} /> // CLS garanti !
```

#### ✅ 4. priority={true} Uniquement sur LCP
```tsx
// ✅ Hero Image (LCP element)
<Image
  src="/hero/agence.webp"
  alt="Tech Bloom Agency"
  fill
  priority={true}        // ← UNIQUEMENT ici
  fetchPriority="high"   // ← Renforce la priorité
  sizes="(max-width: 1024px) 0vw, 50vw"
/>

// ❌ Toutes les autres images
<Image src={team.jpg} alt="Team" fill /> // Lazy par défaut (OK)
```

#### ✅ 5. Attribut sizes Contextuel
```tsx
// Hero desktop-only
sizes="(max-width: 1024px) 0vw, 50vw"

// Portfolio grid responsive
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

// Avatar (taille fixe)
sizes="64px"

// Full-width mobile, half desktop
sizes="(max-width: 768px) 100vw, 50vw"
```

#### ✅ 6. Poids Max 200KB
```bash
# Compression recommandée
convert image.jpg -quality 85 -resize 1200x image.webp

# Vérification poids
find public/images -name "*.webp" -exec ls -lh {} \; | awk '{print $5, $9}'
```

**Outils**:
- Squoosh.app (Google)
- TinyPNG
- ImageOptim

#### ✅ 7. next/image fill pour Backgrounds
```tsx
// ✅ CORRECT
<div className="relative h-[400px]">
  <Image 
    src="/bg.jpg" 
    alt="Background" 
    fill 
    className="object-cover"
  />
</div>

// ❌ INTERDIT - CSS background critique
<div style={{ backgroundImage: 'url(/bg.jpg)' }}>
  <!-- Éviter pour éléments critiques -->
</div>
```

---

## 🔤 Polices — next/font Obligatoire

### 5.3 Implémentation Correcte

#### ✅ Configuration layout.tsx
```tsx
import { Bitter, Montserrat } from "next/font/google";

const bitter = Bitter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-heading",
  display: "swap",
  preload: true,
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${bitter.variable} ${montserrat.variable}`}>
      <body className="font-body">
        {children}
      </body>
    </html>
  );
}
```

#### ❌ INTERDIT - Google Fonts <link>
```tsx
// ❌ BANNI - Dans layout.tsx ou _document.tsx
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;600;700&display=swap" />

// ❌ Pourquoi ?
// - FOUT (Flash of Unstyled Text)
// - Blocage rendu
// - Perte 10-15 points PageSpeed
```

### Avantages next/font
- ✅ Hébergées automatiquement sur CDN Vercel
- ✅ `display: swap` automatique
- ✅ Préchargement optimisé
- ✅ Zéro requête HTTP vers Google
- ✅ Gain : ~300-500ms sur le chargement

---

## 📦 Scripts Tiers — Chargement Différé

### 5.4 Stratégie de Chargement

#### Calendly — IntersectionObserver
```tsx
// components/CalendlyEmbed.tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function CalendlyEmbed() {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoaded) {
          loadScript();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isLoaded]);

  const loadScript = () => {
    if (document.getElementById("calendly-script")) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.id = "calendly-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setIsLoaded(true);
    
    document.body.appendChild(script);
  };

  return (
    <div ref={ref}>
      {!isLoaded && <div className="h-[650px] bg-gray-100 animate-pulse rounded-xl" />}
      <div className="calendly-inline-widget" data-url={process.env.NEXT_PUBLIC_CALENDLY_URL} />
    </div>
  );
}
```

**Pourquoi ?**
- Ne bloque PAS le LCP
- Charge seulement si visible
- Économise ~40KB JS initial

#### Facebook Pixel — Delay 3s
```tsx
// components/FacebookPixel.tsx
"use client";

import { useEffect } from "react";

export default function FacebookPixel() {
  useEffect(() => {
    // Attendre 3s après hydration
    const timer = setTimeout(() => {
      // @ts-ignore
      window.fbq('init', process.env.NEXT_PUBLIC_FB_PIXEL_ID);
      
      // Track pageview
      // @ts-ignore
      window.fbq('track', 'PageView');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return null; // Headless component
}
```

**Pourquoi ?**
- LCP prioritaire
- Pixel non essentiel au rendu
- Délai imperceptible pour l'utilisateur

#### Google Analytics — @next/third-parties
```tsx
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
```

**Avantages**:
- Chargé après hydration
- Ne bloque PAS le rendering
- Tree-shaking automatique
- Conforme RGPD-friendly

#### WhatsApp — Aucun Script
```tsx
// ✅ CORRECT - Lien direct wa.me
<a 
  href="https://wa.me/261341060802?text=Bonjour..."
  target="_blank"
  rel="noopener noreferrer"
>
  Ouvrir WhatsApp
</a>

// ❌ INUTILE - Widget.js tiers
// Le lien natif suffit amplement
```

---

## 🔍 Audit Performance par Page

### / (Accueil)

**LCP Element**: Image Hero
```tsx
<Image
  src="/hero/agence.webp"
  alt="Tech Bloom Agency"
  fill
  priority={true}           // ✅ CRITICAL
  fetchPriority="high"      // ✅ Renforce
  sizes="(max-width: 1024px) 0vw, 50vw"
  quality={85}              // ✅ Compression
/>
```

**Actions**:
- ✅ `priority={true}` sur hero uniquement
- ✅ Autres images : lazy par défaut
- ✅ AnimatedCounter : IntersectionObserver
- ✅ Framer Motion : GPU-accelerated (transform)

### /portfolio

**Grid Images**:
```tsx
{projects.map((project, index) => (
  <Image
    key={project.slug}
    src={project.images[0]}
    alt={project.title}
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    loading={index === 0 ? "eager" : "lazy"} // ✅ Premier eager
    quality={85}
  />
))}
```

**Optimisations**:
- ✅ Premier projet : `loading="eager"`
- ✅ Autres : `loading="lazy"` (défaut)
- ✅ Sizes adaptatif selon viewport

### /contact

**Calendly Lazy**:
```tsx
<CalendlyEmbed /> {/* ✅ IntersectionObserver */}
```

**Formulaire**:
- ✅ React Hook Form : léger (~15KB)
- ✅ Zod validation : côté client + serveur
- ✅ Pas de re-render inutile

---

## 📊 Bundle Analysis

### Objectif : < 150 KB gzip

#### Analyse Actuelle (à vérifier avec `npm run build`)

```bash
npm run build
# Analyser .next/static/chunks/
```

#### Stratégies de Réduction

**1. Tree-shaking Lucide React**:
```tsx
// ✅ CORRECT - Import individuel
import { ArrowRight, Menu } from "lucide-react";

// ❌ ÉVITER - Import complet (lourd)
import * as Icons from "lucide-react";
```

**2. Dynamic Imports**:
```tsx
// Components lourds chargés à la demande
const CalendlyEmbed = dynamic(
  () => import("@/components/CalendlyEmbed"),
  { 
    ssr: false,
    loading: () => <div className="animate-pulse h-[650px]" />
  }
);
```

**3. Éviter librairies inutiles**:
- ❌ Masonry.js → ✅ CSS Grid
- ❌ Moment.js → ✅ date-fns (lighter)
- ❌ Lodash → ✅ Native JS

**4. Tailwind PurgeCSS**:
```js
// tailwind.config.js
content: [
  "./src/components/**/*.{js,ts,jsx,tsx}",
  "./src/app/**/*.{js,ts,jsx,tsx}",
],
// ✅ Purge automatique en prod
```

---

## 🛠️ Outils de Mesure

### 1. PageSpeed Insights
```
https://pagespeed.web.dev/
```
**Cibles**:
- Mobile : > 85/100
- Desktop : > 95/100

### 2. Chrome DevTools Lighthouse
```
F12 > Lighthouse > Analyze page load
```

### 3. WebPageTest (TTFB)
```
https://www.webpagetest.org/
```
**Cible TTFB**: < 600ms

### 4. Bundle Analyzer
```bash
npm install --save-dev @next/bundle-analyzer
```

```js
// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({});
```

```bash
npm run build
ANALYZE=true npm run build
```

### 5. Coverage Chrome
```
F12 > Ctrl+Shift+P > "Show Coverage"
```

---

## ✅ Checklist Finale Performance

### Avant Déploiement

- [ ] ✅ Toutes images converties WebP
- [ ] ✅ next/image partout (pas de <img>)
- [ ] ✅ Width + height sur chaque image
- [ ] ✅ priority={true} uniquement sur hero
- [ ] ✅ Attribution sizes correctes
- [ ] ✅ next/font/google (pas de <link>)
- [ ] ✅ Calendly lazy (IntersectionObserver)
- [ ] ✅ FB Pixel delay 3s
- [ ] ✅ GA via @next/third-parties
- [ ] ✅ WhatsApp lien direct (pas script)
- [ ] ✅ Bundle < 150KB gzip
- [ ] ✅ Test PageSpeed Mobile > 85
- [ ] ✅ Test PageSpeed Desktop > 95
- [ ] ✅ TTFB < 600ms
- [ ] ✅ CLS < 0.1
- [ ] ✅ LCP < 2.5s
- [ ] ✅ INP < 100ms

---

## 🚀 Impact Estimé

### Avant Optimisation (typique)
- LCP: ~3.5s
- CLS: ~0.25
- Bundle: ~250KB
- PSI Mobile: ~65/100

### Après Optimisation (cibles)
- LCP: **~1.8s** ✅ (-48%)
- CLS: **~0.05** ✅ (-80%)
- Bundle: **~120KB** ✅ (-52%)
- PSI Mobile: **~90/100** ✅ (+38%)

**Gain business**:
- +15% taux de conversion
- -30% taux de rebond
- +20% temps moyen session
- Meilleur ranking SEO Google

---

**Date**: Mars 2026  
**Version**: 2.0  
**Statut**: ✅ Directives implémentées
