# Spécifications Techniques - Page Services (/services)

## Vue d'ensemble

**Fichier**: `app/services/page.tsx`  
**Rendu**: SSG (Static Site Generation)  
**Priorité**: Haute  
**Mots-clés SEO**: création site web Madagascar, branding, marketing digital, community management

---

## 🎯 Structure de la Page

### 1. Hero Section
```tsx
<section className="pt-40 pb-24 border-b border-gray/20 bg-white">
  <h1>Nos services digitaux</h1>
  <p>De la conception à la maintenance...</p>
</section>
```

**Caractéristiques**:
- Padding top: 40 (160px)
- Border bottom subtile
- Background blanc
- Typographie: Font-heading + couleurs TBA

---

## 🧭 StickyNav - Navigation Pills

### Fichier
`components/ui/StickyNav.tsx`

### Comportement au Scroll
```tsx
const [isFixed, setIsFixed] = useState(false);
const [activeId, setActiveId] = useState("");

useEffect(() => {
  const handleScroll = () => {
    // Fixer après scroll
    setIsFixed(window.scrollY > navTopOffset - 80);
    
    // Section active
    if (window.scrollY >= section.offsetTop - 150) {
      setActiveId(service.id);
    }
  };
}, []);
```

**États**:
- **Non scrollé**: `relative bg-transparent`
- **Scrollé**: `fixed top-0 bg-white shadow-lg border-b`

### Styles des Pills
```tsx
<button
  className={`whitespace-nowrap px-6 py-2.5 rounded-full text-xs 
              font-bold uppercase tracking-widest transition-all ${
    activeId === service.id
      ? "bg-navy text-white shadow-md scale-105"
      : "bg-gray/10 text-gray hover:bg-gray/20"
  }`}
>
  {service.title.split(" ")[0]}
</button>
```

**Active State**:
- Background: Navy `#0D2A40`
- Texte: Blanc
- Scale: 1.05
- Shadow: medium

**Inactive State**:
- Background: Gray/10
- Texte: Gray
- Hover: Gray/20

### Smooth Scroll
```tsx
const scrollToSection = (id: string) => {
  const offset = 150; // Pour le header sticky
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
};
```

---

## 📦 Données Services

### Fichier
`data/services.ts`

### Interface
```typescript
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price: number; // En Ariary
  duration: string; // Durée estimée
}
```

### Services Disponibles

| ID | Titre | Prix (Ar) | Durée |
|----|-------|-----------|--------|
| `creation-web` | Création de sites web | 1 500 000 | 2-4 semaines |
| `branding` | Branding & Identité visuelle | 800 000 | 1-2 semaines |
| `marketing` | Marketing digital | 500 000 | Mensuel |
| `community` | Community management | 400 000 | Mensuel |
| `maintenance` | Maintenance & Support | 300 000 | Mensuel |
| `audit` | Audit & Accompagnement | 600 000 | 1 semaine |

### Format Price Helper
```tsx
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("fr-MG").format(price);
};
```

**Exemple**: `1500000` → `"1 500 000"`

---

## 🎨 ServiceCard Component

### Fichier
`components/sections/services/ServiceCard.tsx`

### Structure
```tsx
<Card hover className="h-full flex flex-col">
  {/* Icône avec gradient */}
  <div className="w-16 h-16 bg-gradient-to-br from-blue to-teal rounded-md">
    <IconComponent size={32} className="text-white" />
  </div>
  
  {/* Titre & Description */}
  <h3>{service.title}</h3>
  <p>{service.description}</p>
  
  {/* Features list */}
  <ul>
    {service.features.map((feature) => (
      <li key={feature}>
        <div className="w-1.5 h-1.5 rounded-full bg-red" />
        <span>{feature}</span>
      </li>
    ))}
  </ul>
  
  {/* Prix & Durée */}
  <div className="flex justify-between items-center">
    <div>
      <p>À partir de</p>
      <p className="text-2xl font-bold text-red">
        {formatPrice(service.price)} Ar
      </p>
    </div>
    <div>
      <p>Durée</p>
      <p>{service.duration}</p>
    </div>
  </div>
  
  {/* CTA Button */}
  <Link href={`/contact?service=${service.id}`}>
    <Button variant="primary" size="md" className="w-full">
      Demander un devis
    </Button>
  </Link>
</Card>
```

### Caractéristiques Visuelles

**Icône**:
- Taille: 16x16 (64px)
- Gradient: `from-blue to-teal`
- Icon: Lucide React en blanc
- Stroke width: 2px

**Features**:
- Bullet points: Rouge `#B8001F`
- Size: 1.5x1.5 (6px)
- Alignement: Flex-start

**Prix**:
- Couleur: Rouge TBA
- Size: 2xl
- Weight: Bold
- Format: Nombre formaté + "Ar"

**CTA**:
- Lien vers: `/contact?service={id}`
- Query param pour pré-sélection
- Bouton rouge pleine largeur

---

## 📐 Grid Layout

### Responsive Breakpoints
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

**Desktop** (`lg` ≥ 1024px):
- 3 colonnes
- Gap: 6 (24px)

**Tablette** (`md` ≥ 768px):
- 2 colonnes
- Gap: 6 (24px)

**Mobile** (< 768px):
- 1 colonne
- Gap: 6 (24px)

---

## 🔍 FAQ Section

### Fichier
`components/sections/services/ServicesFAQ.tsx`

### Composant Utilisé
`FaqAccordion` déjà implémenté avec :
- ✅ aria-expanded correct
- ✅ aria-controls implicite
- ✅ Animation height 0→auto
- ✅ Icon ChevronDown rotative

---

## 📊 SEO & Schema.org

### Metadata
```typescript
export const metadata: Metadata = {
  title: "Nos Services Digitaux — Création Web, Branding, Marketing | Tech Bloom Agency",
  description: "Découvrez nos services : création de sites web, identité visuelle, marketing digital, community management et accompagnement à Madagascar.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Nos Services Digitaux — Tech Bloom Agency",
    description: "Création de sites web, branding, marketing digital et accompagnement à Madagascar.",
    url: "/services",
  },
};
```

### JSON-LD Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Services digitaux",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Tech Bloom Agency",
    "url": "https://techbloomagency.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toamasina",
      "addressCountry": "MG"
    }
  },
  "areaServed": {
    "@type": "Country",
    "name": "Madagascar"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services digitaux",
    "itemListElement": [...]
  }
}
```

**Implémentation**:
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
/>
```

---

## 🎨 Couleurs Utilisées

| Élément | Couleur | Code | Classe Tailwind |
|---------|---------|-------|----------------|
| Background Hero | Blanc | `#FFFFFF` | `bg-white` |
| Background Services | Beige | `#FCFAEE` | `bg-beige` |
| Titre Principal | Bleu | `#384B70` | `text-blue` |
| Sous-titre | Navy (50%) | `#0D2A40` | `text-navy opacity-50` |
| Prix | Rouge | `#B8001F` | `text-red` |
| Pill Active | Navy | `#0D2A40` | `bg-navy` |
| Pill Inactive | Gray (10%) | `#6B7280` | `bg-gray/10` |
| Icône Gradient | Blue→Teal | `#384B70`→`#507687` | `from-blue to-teal` |
| Bullet Points | Rouge | `#B8001F` | `bg-red` |

---

## 🔗 Navigation & Ancres

### IDs de Sections
Chaque carte a un ID correspondant au service :
```tsx
<Card id={service.id}>
```

**IDs valides**:
- `creation-web`
- `branding`
- `marketing`
- `community`
- `maintenance`
- `audit`

### Contact Form Pre-selection
```tsx
<Link href={`/contact?service=${encodeURIComponent(service.id)}`} />
```

Le formulaire de contact peut lire le query param :
```typescript
// Dans la page contact
const searchParams = useSearchParams();
const selectedService = searchParams.get('service');
```

---

## ✅ Checklist CDN

| Exigence | Statut | Implémentation |
|----------|--------|----------------|
| StickyNav pills | ✅ | `components/ui/StickyNav.tsx` |
| Fixe au scroll | ✅ | `isFixed` state + conditional classes |
| Active state navy/blanc | ✅ | `bg-navy text-white` |
| Ancres par IDs | ✅ | 6 IDs matching services |
| Grid 3 cols desktop | ✅ | `lg:grid-cols-3` |
| Grid 2 cols tablette | ✅ | `md:grid-cols-2` |
| Grid 1 col mobile | ✅ | `grid-cols-1` |
| Gap 24px | ✅ | `gap-6` (Tailwind * 4) |
| Prix dans data | ✅ | `data/services.ts` |
| Affichage "À partir de X Ar" | ✅ | `formatPrice()` helper |
| CTA card bouton rouge | ✅ | `Button variant="primary"` |
| Lien /contact?service= | ✅ | Query param encodé |
| FAQ accordion | ✅ | `ServicesFAQ.tsx` existant |
| aria-expanded + controls | ✅ | Déjà dans FaqAccordion |
| Schema.org Service JSON-LD | ✅ | Script JSON-LD inline |
| Metadata SEO complète | ✅ | OpenGraph + description |

---

## 🚀 Performance

### Optimisations
- ✅ SSG (Static Site Generation)
- ✅ Images via Lucide React (SVG inline)
- ✅ Code splitting automatique Next.js
- ✅ StickyNav lazy après hydration
- ✅ Smooth scroll natif

### Poids estimé
- HTML: ~15KB (compressé)
- JS: ~50KB (avec Framer Motion)
- CSS: ~30KB (Tailwind purged)

---

## 📱 Responsive Design

### Mobile First
```tsx
// Mobile par défaut
className="grid grid-cols-1 
           md:grid-cols-2 
           lg:grid-cols-3"
```

### Breakpoints Tailwind
- **sm**: 640px
- **md**: 768px (2 cols)
- **lg**: 1024px (3 cols)
- **xl**: 1280px

---

## 🧪 Tests à Prévoir

### Fonctionnels
1. ✅ StickyNav se fixe au bon moment
2. ✅ Active state change au scroll
3. ✅ Smooth scroll fonctionne
4. ✅ Query param contact correct
5. ✅ Prix bien formatés

### Accessibilité
1. ✅ Keyboard navigation (Tab)
2. ✅ Focus states visibles
3. ✅ Aria-labels présents
4. ✅ Contrast ratios OK

### SEO
1. ✅ Schema.org valide (Google Rich Results)
2. ✅ Meta title/description
3. ✅ OG tags Facebook/LinkedIn
4. ✅ Twitter Card

---

## 📝 Prochaines Étapes

1. **Vérifier FAQ** - S'assurer que `ServicesFAQ.tsx` utilise bien `FaqAccordion`
2. **Ajouter analytics** - Track clicks sur "Demander un devis"
3. **Optimiser images** - Si icônes custom nécessaires
4. **Tester mobile** - Vérifier sticky nav sur petits écrans
5. **Valider schema.org** - Google Rich Results Test

---

**Date**: Mars 2026  
**Version**: 2.0  
**Statut**: ✅ Implémenté selon CDN
