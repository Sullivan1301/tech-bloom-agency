# Commandes Utiles - Performance & Optimisation

## 🔍 Audit Performance

### PageSpeed Insights (En ligne)
```bash
# Ouvrir dans le navigateur
https://pagespeed.web.dev/analysis?url=https://techbloomagency.com
```

### Lighthouse (Local)
```bash
# Dans Chrome DevTools
F12 > Lighthouse > Run audit

# Ou en CLI
npm install -g lighthouse
lighthouse https://techbloomagency.com --view
```

### WebPageTest (TTFB)
```bash
# Ouvrir dans le navigateur
https://www.webpagetest.org/

# Configuration recommandée:
- Location: Paris (proximité Madagascar)
- Browser: Chrome
- Connection: 4G
- Captures: Video, Waterfall
```

---

## 📦 Bundle Analysis

### Installer Bundle Analyzer
```bash
npm install --save-dev @next/bundle-analyzer
```

### Analyser le Bundle
```bash
# Méthode 1: Script npm
npm run build:analyze

# Méthode 2: Variable d'environnement
ANALYZE=true npm run build

# Résultat: Ouvre une page web interactive
# http://127.0.0.1:8888
```

### Visualiser Taille Chunks
```bash
# Liste des fichiers statiques
ls -lh .next/static/chunks/

# Taille totale du build
du -sh .next/

# Top 10 plus gros fichiers
find .next/static -type f -exec ls -lh {} \; | sort -k5 -h | tail -n 10
```

### Analyser Coverage (Chrome)
```bash
# Dans Chrome DevTools
F12 > Ctrl+Shift+P > "Show JavaScript Coverage"
Recharger la page
Analyser les zones rouges (code non utilisé)
```

---

## 🖼️ Optimisation Images

### Convertir en WebP
```bash
# Avec ImageMagick
convert image.jpg -quality 85 image.webp

# Batch conversion
mkdir public/images/webp
for img in public/images/*.jpg; do
  convert "$img" -quality 85 "public/images/webp/$(basename "${img%.jpg}.webp)"
done
```

### Vérifier Poids Images
```bash
# Lister toutes images avec poids
find public -type f \( -name "*.jpg" -o -name "*.png" -o -name "*.webp" \) \
  -exec ls -lh {} \; | awk '{print $5, $9}'

# Trouver images > 200KB
find public -type f \( -name "*.jpg" -o -name "*.png" -o -name "*.webp" \) -size +200k
```

### Outils de Compression

**En ligne**:
- [Squoosh.app](https://squoosh.app) (Google) - Recommandé
- [TinyPNG](https://tinypng.com)
- [CompressJPEG](https://compressjpeg.com)

**CLI**:
```bash
# ImageOptim CLI
brew install imageoptim-cli
imageoptim -q 85 public/images/*.jpg

# Sharp (Node.js)
npm install sharp
```

**Script Node.js avec Sharp**:
```javascript
const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function compressImages() {
  const inputDir = './public/images';
  const outputDir = './public/images/optimized';
  
  await fs.mkdir(outputDir, { recursive: true });
  
  const files = await fs.readdir(inputDir);
  
  for (const file of files) {
    if (/\.(jpg|jpeg|png)$/i.test(file)) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
      
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(outputPath);
      
      console.log(`✅ ${file} → ${path.basename(outputPath)}`);
    }
  }
}

compressImages();
```

---

## 🎯 Core Web Vitals Monitoring

### Real User Monitoring (RUM)

**Installer web-vitals**:
```bash
npm install web-vitals
```

**Setup dans app/layout.tsx**:
```tsx
"use client";

import { onLCP, onCLS, onINP } from 'web-vitals';

if (typeof window !== 'undefined') {
  onLCP((metric) => {
    console.log('LCP:', metric.value);
    // Envoyer à GA4 ou analytics
  });

  onCLS((metric) => {
    console.log('CLS:', metric.value);
  });

  onINP((metric) => {
    console.log('INP:', metric.value);
  });
}
```

**Track dans Google Analytics**:
```tsx
// components/WebVitalsTracker.tsx
"use client";

import { onLCP, onCLS, onINP } from 'web-vitals';

export default function WebVitalsTracker() {
  useEffect(() => {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    
    if (!gaId) return;

    onLCP(({ value }) => {
      // @ts-ignore
      window.gtag('event', 'LCP', {
        event_category: 'Web Vitals',
        value: Math.round(value),
        non_interaction: true,
      });
    });

    onCLS(({ value }) => {
      // @ts-ignore
      window.gtag('event', 'CLS', {
        event_category: 'Web Vitals',
        value: value * 1000, // Multiplier pour éviter décimales
        non_interaction: true,
      });
    });

    onINP(({ value }) => {
      // @ts-ignore
      window.gtag('event', 'INP', {
        event_category: 'Web Vitals',
        value: Math.round(value),
        non_interaction: true,
      });
    });
  }, []);

  return null;
}
```

---

## 🚀 Build & Déploiement

### Build Production
```bash
# Build standard
npm run build

# Build avec analyse
npm run build:analyze

# Build sans source maps
productionBrowserSourceMaps: false
```

### Vérifications Pré-déploiement

```bash
# 1. Build réussi ?
npm run build

# 2. ESLint clean ?
npm run lint

# 3. TypeScript errors ?
npx tsc --noEmit

# 4. Bundle size OK ?
npm run build:analyze

# 5. Test local
npm run start
```

### Deploy sur Vercel
```bash
# Installer Vercel CLI
npm install -g vercel

# Deploy preview
vercel

# Deploy production
vercel --prod
```

---

## 🧪 Tests Performance Comparatifs

### Avant/Après Optimisation

**Script de test**:
```bash
#!/bin/bash

echo "🔍 Running Lighthouse..."

# Avant optimisation
lighthouse https://localhost:3000 --output html --output-path ./lighthouse-before.html

# Après optimisation (à faire après déploiement)
lighthouse https://techbloomagency.com --output html --output-path ./lighthouse-after.html

echo "✅ Rapports générés"
echo "Ouvrir: lighthouse-before.html vs lighthouse-after.html"
```

### Metrics à Comparer

| Métrique | Avant | Après | Cible |
|----------|-------|-------|-------|
| Performance | | | > 90 |
| LCP | | | < 2.5s |
| CLS | | | < 0.1 |
| INP | | | < 100ms |
| Bundle Size | | | < 150KB |

---

## 🛠️ Debugging Performance

### Chrome DevTools Performance Tab

```bash
# 1. Ouvrir DevTools (F12)
# 2. Onglet "Performance"
# 3. Click Record
# 4. Charger la page
# 5. Stop Recording
# 6. Analyser:
    - Main thread activity
    - Layout shifts
    - Long tasks (> 50ms)
```

### Identifier JavaScript Lent

```bash
# Dans DevTools Performance
- Regarder "Bottom-Up" tab
- Trier par "Total Time"
- Identifier fonctions > 100ms
```

### Détecter Layout Shifts

```bash
# DevTools > Settings > Experiments
# Activer "Layout Shift Regions"
# Recharger page
# Zones bleues = éléments qui shiftent
```

### Memory Leaks

```bash
# DevTools > Memory tab
# Take Heap Snapshot avant interaction
# Prendre snapshot après
# Compare les deux
# Chercher objets retenus inutilement
```

---

## 📊 Checklist Rapide

### Quotidien
- [ ] Tester LCP sur mobile
- [ ] Vérifier erreurs console
- [ ] Monitorer analytics

### Hebdomadaire
- [ ] Run bundle analysis
- [ ] Check Core Web Vitals GA4
- [ ] Optimiser nouvelles images

### Mensuel
- [ ] Audit complet PageSpeed
- [ ] Nettoyer dépendances inutilisées
- [ ] Mettre à jour Next.js

---

## 🔗 Ressources Utiles

**Documentation Officielle**:
- [Next.js Performance](https://nextjs.org/docs/advanced-features/measuring-performance)
- [Web Vitals](https://web.dev/vitals/)
- [Core Web Vitals](https://web.dev/core-web-vitals/)

**Outils**:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- [Squoosh](https://squoosh.app)
- [Bundle Phobia](https://bundlephobia.com/)

**Articles**:
- [Optimizing Core Web Vitals](https://web.dev/optimize-vitals/)
- [Image Optimization Guide](https://images.guide/)
- [Font Display Swap](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display)

---

**Date**: Mars 2026  
**Maintenant**: Prêt à auditer et optimiser ! 🚀
