# 🌙 Mode Dark & Mode Clair - Tech Bloom Agency

## 🎨 Vue d'Ensemble

Le site Tech Bloom Agency supporte maintenant le **mode dark** et le **mode clair** avec une transition fluide et une fleur bioluminescente en mode sombre.

---

## ✨ Fonctionnalités

### Toggle Dark Mode
- **Bouton** : Fixé en bas à droite (au-dessus de la fleur persistante)
- **Fleur bioluminescente** : Animation de 6 pétales lumineuses en mode dark
- **Transition fluide** : Changement de thème sans flash
- **Persistance** : Le choix est sauvegardé dans localStorage
- **Préférence système** : Détection automatique au premier chargement

### Couleurs Dark Mode

Les couleurs sont adaptées pour le mode sombre :

**Mode Clair :**
- Fond : Blanc / Beige clair (#FCFAEE)
- Texte : Bleu profond (#384B70)
- Accent : Rouge cerise (#B8001F)

**Mode Dark :**
- Fond : Gris foncé (#1A1F2E / gray-900)
- Texte : Beige clair / Blanc
- Accent : Rouge cerise plus lumineux (#FF3D5C)

---

## 🎯 Composants avec Dark Mode

Tous les composants principaux supportent le dark mode :

- ✅ **Header** : Fond transparent → Fond sombre au scroll
- ✅ **Hero** : Dégradé adapté
- ✅ **Services** : Cartes avec bordures sombres
- ✅ **About** : Sections avec fonds adaptés
- ✅ **Portfolio** : Cartes de projets
- ✅ **Testimonials** : Cartes de témoignages
- ✅ **FAQ** : Accordéon avec bordures sombres
- ✅ **Contact** : Formulaire avec fond sombre
- ✅ **Footer** : Fond sombre avec bordures
- ✅ **Scroll Progress Bar** : Couleurs adaptées
- ✅ **Custom Cursor** : Couleurs adaptées

---

## 🛠️ Utilisation Technique

### Hook useTheme

Un hook personnalisé `useTheme` est disponible :

```tsx
import { useTheme } from '@/hooks/useTheme';

const { theme, isDark, toggleTheme, setTheme } = useTheme();
```

### Classes Tailwind

Utilisez les classes `dark:` pour le mode sombre :

```tsx
<div className="bg-white dark:bg-gray-900">
  <h1 className="text-tech-primary dark:text-tech-light">
    Titre
  </h1>
</div>
```

### Variables CSS

Les variables CSS sont automatiquement mises à jour :

```css
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... */
}
```

---

## 🎨 Charte Graphique Dark Mode

### Couleurs Principales

| Élément | Mode Clair | Mode Dark |
|---------|-----------|-----------|
| Fond principal | `#FCFAEE` | `#1A1F2E` |
| Fond secondaire | `#FFFFFF` | `#111827` (gray-900) |
| Texte principal | `#384B70` | `#FCFAEE` |
| Texte secondaire | `#6B7280` | `#9CA3AF` (gray-400) |
| Accent | `#B8001F` | `#FF3D5C` |
| Bordures | `#E5E7EB` | `#374151` (gray-700) |

### Dégradés

- **Hero** : `from-tech-light dark:from-gray-900`
- **Sections** : Adaptés avec `dark:from-gray-900 dark:to-gray-800`

---

## 🔧 Configuration

Le dark mode est activé automatiquement via :

1. **Préférence utilisateur** : Sauvegardée dans localStorage
2. **Préférence système** : Détectée au premier chargement
3. **Toggle manuel** : Bouton en bas à droite

### Désactiver le Dark Mode

Pour désactiver complètement, supprimez le composant `DarkModeFlower` de `App.tsx`.

---

## 📱 Responsive

Le dark mode fonctionne sur tous les appareils :
- ✅ Desktop
- ✅ Tablet
- ✅ Mobile

---

## 🐛 Dépannage

### Le dark mode ne s'active pas
- Vérifiez que `DarkModeFlower` est dans `App.tsx`
- Vérifiez la console pour les erreurs
- Vérifiez que `darkMode: ["class"]` est dans `tailwind.config.ts`

### Les couleurs ne changent pas
- Vérifiez que les classes `dark:` sont présentes
- Vérifiez que la classe `dark` est ajoutée à `<html>`
- Vérifiez les variables CSS dans `index.css`

### Flash au chargement
- Le composant `DarkModeFlower` gère le mounted state
- Le thème est appliqué avant le premier render si possible

---

## 🚀 Améliorations Futures

- [ ] Animation de transition entre les modes
- [ ] Préférence par page (certaines pages en dark, d'autres en light)
- [ ] Schedule automatique (dark la nuit, light le jour)
- [ ] Plus d'options de personnalisation

---

**Tech Bloom Agency - From Strategy to Digital Growth 🌸**

