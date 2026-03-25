# Spécifications Techniques - Page d'Accueil (/)

## Vue d'ensemble

**Fichier**: `app/page.tsx`  
**Rendu**: SSG (Static Site Generation)  
**Priorité**: Critique  
**LCP Element**: Image du Hero  

---

## 🎯 Hero Section

### Fichier
`components/sections/home/Hero.tsx`

### Spécifications techniques

#### Structure
- **Hauteur**: `min-h-screen` (100vh minimum, jamais de px fixe)
- **Background**: `bg-gradient-to-br from-navy via-blue to-teal`
- **Pattern overlay**: Radial gradient subtil en CSS pur

#### Image Hero (LCP Critical)
```tsx
<Image
  src="/hero/agence.webp"
  alt="Tech Bloom Agency - Équipe digitale"
  fill
  priority={true}
  fetchPriority="high"
  className="object-contain opacity-20 mix-blend-overlay"
  sizes="(max-width: 1024px) 0vw, 50vw"
/>
```

**Points clés**:
- ✅ `priority={true}` - Ne PAS lazy-loader
- ✅ `fetchPriority="high"` - Priorité absolue
- ✅ Format WebP uniquement
- ✅ Dimensions: width 600 height 500
- ✅ Chargement immédiat pour optimiser LCP

#### Titre avec animation
```tsx
<motion.h1 
  variants={itemVariants}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.8 }}
>
  De la stratégie <br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue/80">
    à l'éclosion digitale.
  </span>
</motion.h1>
```

**Animation**: Fade-in-up avec Framer Motion  
**Delay**: 0.2s  
**Durée**: 0.8s  
**Easing**: `[0.22, 1, 0.36, 1]` (ease-out cubic)

#### CTA Principal (Calendly)
```tsx
<button
  onClick={openCalendly}
  className="group relative inline-flex items-center justify-center 
             bg-red text-white px-10 py-5 rounded-full 
             font-semibold text-sm uppercase tracking-widest 
             transition-all duration-300 
             hover:bg-red-hover hover:shadow-2xl hover:scale-105"
>
  Réserver un appel gratuit
</button>
```

**Comportement**: Ouvre popup Calendly (PAS de redirect)  
**Couleur**: Rouge TBA `#B8001F`  
**Tracking**: Uppercase + `tracking-widest`

#### CTA Secondaire
```tsx
<Link
  href="#portfolio"
  className="group inline-flex items-center px-10 py-5 
             border-2 border-white text-white rounded-full 
             font-semibold text-sm uppercase tracking-widest 
             hover:bg-white hover:text-navy"
>
  Voir nos projets
</Link>
```

**Comportement**: Scroll anchor vers `#portfolio`  
**Style**: Outline blanc  
**Hover**: Background blanc + texte navy

---

## 📊 Section Stats Animées

### Fichier
`components/sections/home/StatsSection.tsx`

### Données (`data/stats.ts`)
```typescript
export const stats = [
  { value: 20, suffix: "+", label: "Projets livrés" },
  { value: 90, suffix: "%", label: "Clients satisfaits" },
  { value: 1, suffix: "+", label: "An d'expérience" },
];
```

### Composant AnimatedCounter
```tsx
<AnimatedCounter 
  value={`${stat.value}${stat.suffix}`} 
  duration={2}
  className="text-5xl md:text-7xl font-heading font-bold text-red"
/>
```

**Trigger**: Intersection Observer  
**Threshold**: 0.3 (se déclenche à 30% de visibilité)  
**Durée**: 2s  
**Easing**: Ease-out quart  
**Suffixes**: Gère automatiquement %, +, etc.

### Layout
```tsx
<div className="grid md:grid-cols-3 gap-12 text-center">
  {stats.map((stat, index) => (
    <div key={index} className="space-y-4">
      <AnimatedCounter ... />
      <p className="text-lg text-white/80 font-body uppercase tracking-widest">
        {stat.label}
      </p>
    </div>
  ))}
</div>
```

**Background**: Navy `#0D2A40`  
**Texte**: Blanc avec opacité 80%  
**Grid**: 3 colonnes responsive

---

## 💬 Section Témoignages

### Fichier
`components/sections/home/Testimonials.tsx`

### Données (`data/testimonials.ts`)
```typescript
export interface Testimonial {
  name: string;
  company: string;
  role: string;
  quote: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Longin",
    company: "Runrobe",
    role: "Fondateur",
    quote: "...",
    avatar: "/avatars/longin.jpg"
  },
  // ... 3 témoignages au total
];
```

### Auto-slide
```tsx
const [currentIndex, setCurrentIndex] = useState(0);
const [isPaused, setIsPaused] = useState(false);

// Auto-slide toutes les 5 secondes
useEffect(() => {
  if (isPaused) return;
  const interval = setInterval(nextSlide, 5000);
  return () => clearInterval(interval);
}, [isPaused, nextSlide]);

// Pause au survol
const handleMouseEnter = () => setIsPaused(true);
const handleMouseLeave = () => setIsPaused(false);
```

**Intervalle**: 5000ms (5 secondes)  
**Pause**: `onMouseEnter` sur le container  
**Navigation**: Flèches gauche/droite + indicateurs

### Structure visuelle
```tsx
<section 
  className="py-32 bg-navy text-white"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  {/* Guillemets décoratifs */}
  <Quote className="absolute -top-8 -left-4 w-32 h-32 
                    text-white opacity-10 pointer-events-none" 
         strokeWidth={0.5} />
  
  {/* Citation */}
  <p className="text-2xl md:text-3xl font-heading font-medium 
                leading-relaxed italic">
    "{testimonial.quote}"
  </p>
  
  {/* Avatar 64x64 */}
  {testimonial.avatar ? (
    <Image
      src={testimonial.avatar}
      alt={testimonial.name}
      width={64}
      height={64}
      className="rounded-full object-cover ring-2 ring-white/30"
    />
  ) : (
    <div className="w-16 h-16 bg-red rounded-full 
                    flex items-center justify-center 
                    text-white text-2xl font-bold">
      {getInitials(testimonial.name)}
    </div>
  )}
</section>
```

**Avatar**: next/image 64x64 rounded-full  
**Fallback**: Initiales colorées si pas de photo  
**Guillemets**: Opacity 10%, font-size 160px (w-32 h-32)  
**Background**: Navy `#0D2A40`  
**Texte**: Blanc

---

## 🎨 Portfolio Vitrine (3 projets)

### Fichier
`components/sections/home/PortfolioPreview.tsx`

### Grille CSS Pure
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
  {featuredProjects.map((project, index) => (
    <motion.div key={project.id} ...>
      {/* Contenu */}
    </motion.div>
  ))}
</div>
```

**Desktop**: 3 colonnes (`lg:grid-cols-3`)  
**Tablette**: 2 colonnes (`md:grid-cols-2`)  
**Mobile**: 1 colonne (`grid-cols-1`)  
**Gap**: 12 (48px)

### Image avec Overlay
```tsx
<div className="relative aspect-[4/3] overflow-hidden rounded-md">
  <Image
    src={project.image}
    alt={project.title}
    fill
    className="object-cover scale-105 group-hover:scale-100 
               transition-transform duration-1000 ease-out"
    sizes="(max-width: 768px) 100vw, 
           (max-width: 1200px) 50vw, 
           33vw"
    priority={index === 0}
  />
  
  {/* Overlay teal au hover */}
  <div className="absolute inset-0 bg-teal/90 
                  opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300 
                  flex items-center justify-center">
    {/* Contenu overlay */}
  </div>
</div>
```

**Hover effect**:
- Scale: `1.05 → 1.00` (zoom out smooth)
- Duration: 1000ms
- Overlay: `bg-teal/90` opacity 0→100%
- Transition: 300ms

### Priority Loading
```tsx
priority={index === 0} // Premier projet chargé en priorité
```

**Pourquoi**: Optimiser LCP des projets visibles

### Hover Overlay Content
```tsx
<div className="text-center px-6 transform translate-y-4 
                group-hover:translate-y-0 transition-transform">
  <p className="text-white text-sm uppercase tracking-widest mb-2">
    {project.category}
  </p>
  <h3 className="text-white text-2xl font-heading font-bold mb-4">
    {project.title}
  </h3>
  <button className="inline-flex items-center text-white text-xs 
                     font-bold uppercase tracking-widest 
                     border-2 border-white px-6 py-3 rounded-full 
                     hover:bg-white hover:text-teal">
    Voir le projet
  </button>
</div>
```

**Animation**: Translate Y + fade in  
**Background**: Teal `#507687` à 90%  
**Texte**: Blanc

---

## 🔧 Composants Utilisés

### AnimatedCounter
- **Fichier**: `components/AnimatedCounter.tsx`
- **Props**: `value`, `duration`, `className`, `label`
- **Trigger**: Intersection Observer threshold 0.3

### Section Wrapper
- **Fichier**: `components/ui/Section.tsx`
- **Props**: `padding`, `className`, `id`, `children`
- **Padding options**: default (py-20 md:py-32), sm, lg, none

### Framer Motion
- **Fade-in-up**: `opacity: 0, y: 30 → opacity: 1, y: 0`
- **Duration**: 0.8s
- **Easing**: `[0.22, 1, 0.36, 1]`
- **Stagger**: 0.15s entre enfants

---

## 📈 Performance & SEO

### LCP (Largest Contentful Paint)
- **Élément**: Image Hero
- **Optimisation**: `priority={true}`, `fetchPriority="high"`
- **Format**: WebP uniquement
- **Dimensions**: 600x500px
- **Lazy-loading**: ❌ DÉSACTIVÉ

### CLS (Cumulative Layout Shift)
- **Images**: Toutes avec `aspect-[4/3]`
- **Fonts**: `next/font/google` avec `display: swap`
- **Animations**: Transform uniquement (pas de layout shifts)

### TTI (Time To Interactive)
- **Hydration**: Progressive avec Framer Motion
- **Delays**: 0.2s avant première animation
- **Code splitting**: Next.js App Router automatique

---

## 🎨 Couleurs Utilisées

| Élément | Couleur | Code |
|---------|---------|------|
| Background Hero | Gradient | `from-navy via-blue to-teal` |
| CTA Principal | Rouge TBA | `#B8001F` |
| CTA Hover | Rouge Foncé | `#960019` |
| Overlay Portfolio | Teal | `#507687` (90%) |
| Texte Stats | Rouge | `#B8001F` |
| Background Stats | Navy | `#0D2A40` |
| Background Testimonials | Navy | `#0D2A40` |

---

## ✅ Checklist CDN

| Exigence | Statut | Implémentation |
|----------|--------|----------------|
| Hero 100vh min | ✅ | `min-h-screen` |
| Background gradient | ✅ | `bg-gradient-to-br` |
| Image priority | ✅ | `priority={true}` |
| Animation titre | ✅ | Framer Motion fade-in-up |
| CTA rouge Calendly | ✅ | Button + `openCalendly()` |
| CTA secondaire outline | ✅ | Link border-2 white |
| Stats animées | ✅ | AnimatedCounter threshold 0.3 |
| Témoignages auto-slide | ✅ | 5s + pause hover |
| Avatar 64x64 fallback | ✅ | next/image + initiales |
| Portfolio grille 3 cols | ✅ | CSS Grid pure |
| Hover overlay teal | ✅ | `bg-teal/90` opacity transition |
| Pas de carousel lib | ✅ | Grid CSS uniquement |

---

## 🚀 Prochaines Étapes

1. **Créer image hero** : `/public/hero/agence.webp` (600x500px)
2. **Créer avatars** : `/public/avatars/*.jpg` (64x64px)
3. **Optimiser images portfolio** : Format WebP, quality 80
4. **Ajouter schema.org** : Review markup pour témoignages
5. **Tester LCP** : Chrome DevTools > Lighthouse
6. **Vérifier accessibilité** : aria-labels, keyboard navigation

---

**Date**: Mars 2026  
**Version**: 2.0  
**Statut**: ✅ Implémenté selon CDN
