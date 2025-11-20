# 🌸 Guide des Animations Florales - Tech Bloom Agency

Ce document explique comment utiliser les composants d'animation florale intégrés dans le site.

## 📦 Dépendances Installées

Pour utiliser les animations 3D et le motion design, les dépendances suivantes ont été ajoutées :

```json
{
  "three": "^0.169.0",
  "@react-three/fiber": "^8.16.0",
  "@react-three/drei": "^9.114.0",
  "gsap": "^3.12.5",
  "framer-motion": "^11.3.0"
}
```

**Installation :**
```bash
npm install
# ou
bun install
```

## 🎨 Composants Disponibles

### 1. Flower3D
Fleur 3D interactive avec Three.js dans la Hero Section.

**Utilisation :**
```tsx
import Flower3D from '@/components/Flower3D';

<Flower3D scrollProgress={scrollProgress} className="w-full h-full" />
```

**Fonctionnalités :**
- Rotation lente et fluide (effet de "respiration")
- Suivi du curseur de la souris
- Éclosion progressive selon le scroll
- Particules lumineuses qui gravitent autour
- Effet glow/lumineux

### 2. FlowerLoader
Animation de chargement avec bourgeon qui s'ouvre.

**Utilisation :**
```tsx
import FlowerLoader from '@/components/FlowerLoader';

<FlowerLoader progress={loadingProgress} />
```

### 3. FlowerButton
Bouton avec animation de fleur qui s'épanouit au survol.

**Utilisation :**
```tsx
import FlowerButton from '@/components/FlowerButton';

<FlowerButton 
  onClick={handleClick}
  variant="primary" // ou "outline"
>
  Mon bouton
</FlowerButton>
```

### 4. FlowerParticles
Particules animées en arrière-plan.

**Utilisation :**
```tsx
import FlowerParticles from '@/components/FlowerParticles';

<FlowerParticles count={20} className="opacity-30" />
```

### 5. FlowerIcon
Icône SVG de fleur animée.

**Utilisation :**
```tsx
import FlowerIcon from '@/components/FlowerIcon';

<FlowerIcon size={24} animated={true} />
```

### 6. FlowerFieldInput
Champ de formulaire avec animation de validation.

**Utilisation :**
```tsx
import FlowerFieldInput from '@/components/FlowerFieldInput';

<FlowerFieldInput
  label="Email"
  type="email"
  isValid={isValid}
  showFlower={true}
/>
```

### 7. ParallaxFlower
Effet de parallaxe pour les éléments floraux.

**Utilisation :**
```tsx
import ParallaxFlower from '@/components/ParallaxFlower';

<ParallaxFlower>
  {/* Contenu avec effet parallaxe */}
</ParallaxFlower>
```

## 🎯 Intégrations Actuelles

### Page d'Accueil (Index)
- ✅ Hero Section : Fleur 3D interactive
- ✅ Services : Petites fleurs qui fleurissent au survol
- ✅ Témoignages : Pétales qui tombent en arrière-plan
- ✅ Footer : Particules florales en filigrane
- ✅ Chargement : Animation de bourgeon qui s'ouvre

### Header
- ✅ Fleur minimale animée au scroll

### Boutons
- ✅ Tous les CTA utilisent FlowerButton avec animation au survol

## ⚡ Optimisation des Performances

### Lazy Loading
Les animations 3D sont chargées de manière progressive :
- Le composant Flower3D vérifie si le navigateur supporte WebGL
- Les animations lourdes sont désactivées sur mobile si nécessaire

### Progressive Enhancement
- Les animations sont optionnelles et n'affectent pas le contenu si elles ne se chargent pas
- Version de fallback pour les navigateurs sans support WebGL

### Mobile
- Les animations 3D peuvent être désactivées sur mobile pour économiser la batterie
- Les micro-animations restent actives (légères)

## 🔧 Personnalisation

### Couleurs des Animations
Les couleurs utilisent la charte graphique TBA :
- **Bleu Profond** : `#384B70` (primary)
- **Bleu Pétrole** : `#507687` (secondary)
- **Rouge Cerise** : `#B8001F` (accent)

### Vitesse des Animations
Ajustez dans les composants :
- `duration` : durée de l'animation
- `delay` : délai avant l'animation
- `ease` : courbe d'animation (easeInOut, easeOut, etc.)

## 📱 Responsive

Toutes les animations sont responsive :
- Desktop : Animations complètes 3D
- Tablet : Animations simplifiées
- Mobile : Micro-animations uniquement

## 🐛 Dépannage

### Les animations 3D ne se chargent pas
1. Vérifiez que Three.js est installé : `npm list three`
2. Vérifiez la console pour les erreurs WebGL
3. Testez dans un navigateur moderne (Chrome, Firefox, Safari)

### Performance lente
1. Réduisez le nombre de particules dans FlowerParticles
2. Désactivez les animations 3D sur mobile
3. Utilisez `will-change` CSS pour optimiser

### Animations qui clignotent
1. Vérifiez que Framer Motion est bien installé
2. Assurez-vous que les composants ne se re-rendent pas trop souvent

## 🚀 Prochaines Améliorations

- [ ] Export d'un modèle 3D depuis Spline
- [ ] Animations Lottie pour micro-interactions
- [ ] GSAP pour animations plus complexes
- [ ] Système de préférences utilisateur (désactiver animations)

---

**Tech Bloom Agency - From Strategy to Digital Growth 🌸**

