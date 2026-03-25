# Implémentation CDN Technique - Tech Bloom Agency v2.0

## ✅ Composants implémentés

### 1. Configuration de base

#### Variables CSS globales (`src/app/globals.css`)
- Palette TBA officielle complète
- Typographie : Bitter (headings) + Montserrat (body)
- Espacements et bordures standardisés
- Transitions cohérentes

#### Tailwind Config (`tailwind.config.ts`)
- Couleurs officielles : navy, blue, teal, red, beige, etc.
- Font-family : heading, body, sans, serif
- Border radius avec variables CSS
- Support backward-compatible avec les anciennes couleurs

---

### 2. Layout & Navigation

#### RootLayout (`src/app/layout.tsx`)
- ✅ Polices : Montserrat + Bitter via `next/font/google`
- ✅ WhatsApp Button intégré
- ✅ Google Analytics via `@next/third-parties/google`
- ✅ Metadata complètes : OpenGraph, Twitter Card
- ✅ ScrollProgress bar

#### Header (`src/components/layout/Header.tsx`)
- ✅ Hook `useScrollHeader` pour le comportement au scroll
- ✅ Transmission du état `scrolled` à Navbar
- ✅ Transition fluide au scroll

#### Navbar (`src/components/layout/Navbar.tsx`)
- ✅ Logo avec losange dégradé (blue → teal)
- ✅ Navigation desktop responsive
- ✅ Menu mobile drawer
- ✅ Bouton CTA "Réserver un appel" avec intégration Calendly
- ✅ Couleurs qui changent au scroll

#### WhatsApp Button (`src/components/layout/WhatsAppButton.tsx`)
- ✅ Fixed bottom-right (z-index 9999)
- ✅ Animation ring toutes les 3s
- ✅ Badge notification pulsing
- ✅ Tooltip au hover
- ✅ Lien personnalisé vers WhatsApp Business

---

### 3. Hooks Custom

#### useScrollHeader (`src/hooks/useScrollHeader.ts`)
```typescript
export function useScrollHeader(threshold = 80)
```
- Retourne `true` si `scrollY > threshold`
- Nettoyage automatique des event listeners
- Option `passive: true` pour la performance

---

### 4. Composants UI

#### Button (`src/components/ui/Button.tsx`)
- **Variants** : primary, secondary, outline, ghost
- **Sizes** : sm, md, lg
- **Loading state** avec spinner
- **Disabled state**
- Hover effects + active scale

#### Card (`src/components/ui/Card.tsx`)
- Hover effect : scale(1.02) + shadow-xl
- Border accentuée au hover
- Option pour désactiver hover

#### Section (`src/components/ui/Section.tsx`)
- Wrapper sémantique `<section>`
- Padding options : default, sm, lg, none
- Container max-w-7xl centré
- Support ID pour ancres

#### AnimatedCounter (`src/components/AnimatedCounter.tsx`)
- Count-up animation avec Intersection Observer
- Durée configurable (default 2s)
- Gestion des suffixes (%, +, etc.)
- Ease-out quart pour smooth animation
- Se déclenche quand visible à 30%

#### FaqAccordion (`src/components/FaqAccordion.tsx`)
- Animation height 0→auto
- aria-expanded correct
- Icon ChevronDown rotative
- Multiple items accordéon

---

## 🎨 Styles & Classes Utilitaires

### Classes disponibles dans globals.css

```css
/* Boutons */
.btn-primary        /* Rouge TBA */
.btn-secondary      /* Bleu TBA */
.btn-outline        /* Outline bleu */

/* Cards */
.card-agency        /* Card avec hover effects */

/* Utilitaires */
.text-brand-gradient
.section-padding
.bg-beige
.text-navy
.text-teal
```

---

## 📝 Structure des routes (App Router)

```
app/
├── layout.tsx              # RootLayout avec WhatsApp + GA4
├── page.tsx                # / — Accueil
├── globals.css             # Variables CSS + Tailwind
├── services/page.tsx       # /services
├── portfolio/
│   ├── page.tsx           # /portfolio — grille
│   └── [slug]/page.tsx    # /portfolio/[slug] — fiche
├── a-propos/page.tsx       # /a-propos
├── tarifs/page.tsx         # /tarifs (à créer)
├── partenariats/page.tsx   # /partenariats (existe: b2b)
├── blog/
│   ├── page.tsx           # /blog — liste
│   └── [slug]/page.tsx    # /blog/[slug] — article
├── contact/page.tsx        # /contact
├── merci/page.tsx          # /merci (post-formulaire)
└── mentions-legales/page.tsx
```

---

## 🔧 Intégrations externes

### Calendly
```javascript
// Dans Navbar.tsx
const openCalendly = () => {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/techbloomagency/appel-decouverte"
    });
  } else {
    window.open("https://calendly.com/techbloomagency/appel-decouverte", "_blank");
  }
};
```

### Google Analytics
```tsx
// Dans layout.tsx
{gaId && <GoogleAnalytics gaId={gaId} />}
```

### WhatsApp
```typescript
const WA_LINK =
  "https://wa.me/261341060802?text=Bonjour%20Sullivan%2C%20je%20souhaite%20discuter%20d%27un%20projet%20digital%20avec%20TBA.";
```

---

## 🚀 Performances

### Optimisations implémentées
- ✅ `next/image` obligatoire (pas de `<img>` direct)
- ✅ `next/font/google` pour optimisation polices
- ✅ Framer Motion tree-shakable
- ✅ Lucide React icons (stroke 2px)
- ✅ Lazy loading naturel avec App Router
- ✅ Event listeners avec option `passive: true`

### Bonnes pratiques
- Hooks custom pour logique réutilisable
- Composants modulaires et composable
- TypeScript strict
- Tailwind CSS utilitaire
- Pas de CSS modules custom

---

## 📦 Dépendances clés

```json
{
  "next": "^15.1.1",
  "react": "^18.3.1",
  "framer-motion": "^12.34.3",
  "lucide-react": "^0.562.0",
  "tailwindcss": "^3.4.1",
  "@hookform/resolvers": "^5.2.2",
  "zod": "^4.3.6",
  "react-hook-form": "^7.71.2",
  "@next/third-parties": "^16.1.6"
}
```

---

## 🎯 Prochaines étapes recommandées

1. **Créer pages manquantes** :
   - `/tarifs`
   - Renommer `/b2b` → `/partenariats`
   - `/merci`

2. **Composants à ajouter** :
   - `ServiceCard`
   - `PortfolioCard`
   - `TestimonialCard`
   - `StickyNav` (pills navigation)

3. **API Routes** :
   - `api/contact/route.ts` → webhook n8n
   - `api/newsletter/route.ts`

4. **Data files** :
   - `src/data/projects.ts`
   - `src/data/blog.ts`
   - `src/data/testimonials.ts`
   - `src/data/faq.ts`

---

## 📊 Checklist CDN

| Élément | Statut | Fichier |
|---------|--------|---------|
| Variables CSS | ✅ | `globals.css` |
| Polices Bitter + Montserrat | ✅ | `layout.tsx` |
| WhatsApp Button | ✅ | `WhatsAppButton.tsx` |
| Header scroll behavior | ✅ | `Header.tsx` + `useScrollHeader.ts` |
| Navbar + Calendly | ✅ | `Navbar.tsx` |
| Button component | ✅ | `Button.tsx` |
| Card component | ✅ | `Card.tsx` |
| Section component | ✅ | `Section.tsx` |
| AnimatedCounter | ✅ | `AnimatedCounter.tsx` |
| FaqAccordion | ✅ | `FaqAccordion.tsx` |
| Metadata SEO | ✅ | `layout.tsx` |
| Google Analytics | ✅ | `layout.tsx` |

---

## 🔐 Variables d'environnement requises

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GSC_VERIFICATION=xxx
NEXT_PUBLIC_SITE_URL=https://techbloomagency.com
```

---

**Date de mise à jour** : Mars 2026  
**Version** : 2.0  
**Statut** : ✅ Components de base implémentés
