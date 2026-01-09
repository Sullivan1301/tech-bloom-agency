# Palette de couleurs - Tech Bloom Agency

## Variables CSS racine (globals.css)

```css
:root {
  --background: #FCFAEE;        /* Beige clair - Fond principal */
  --foreground: #0D2A40;        /* Bleu marine - Texte principal */
  --brand-blue-dark: #0D2A40;   /* Bleu marine très foncé */
  --brand-blue: #384B70;        /* Bleu profond - Titres principaux */
  --brand-blue-petrol: #507687; /* Bleu pétrole - Accents */
  --brand-beige: #FCFAEE;       /* Beige clair - Arrière-plans */
  --brand-red-cherry: #B8001F;  /* Rouge cerise - CTA */
  --brand-red-rose: #C94A6B;    /* Rouge rosé - Dégradés */
}
```

## Utilisation dans Tailwind CSS

### Couleurs de fond (bg-)
- `bg-brand-blue-dark` → #0D2A40
- `bg-brand-blue` → #384B70
- `bg-brand-blue-petrol` → #507687
- `bg-brand-beige` → #FCFAEE
- `bg-brand-red-cherry` → #B8001F
- `bg-brand-red-rose` → #C94A6B

### Couleurs de texte (text-)
- `text-brand-blue-dark` → #0D2A40
- `text-brand-blue` → #384B70
- `text-brand-blue-petrol` → #507687
- `text-brand-red-cherry` → #B8001F
- `text-brand-red-rose` → #C94A6B

### Couleurs de bordure (border-)
- `border-brand-blue` → #384B70
- `border-brand-red-cherry` → #B8001F

## Schéma de couleurs par élément

### Header/Navbar
- Fond : Blanc avec bordure gris clair
- Logo : Dégradé bleu → rouge
- Texte : Bleu profond (#384B70)
- CTA "Devis gratuit" : Rouge cerise (#B8001F)

### Hero Section
- Fond : Dégradé beige clair → blanc
- Décoration : Cercles bleus/rouges semi-transparents
- Titre H1 : Bleu profond (#384B70)
- Texte : Gris (#6B7280)

### Sections de services
- Fond cartes : Blanc avec bordure gris clair
- Icônes : Dégradé bleu marine → bleu pétrole
- Surbrillance : Ombre rouge cerise au survol

### Footer
- Fond : Bleu marine (#0D2A40)
- Texte : Blanc
- Accents liens : Rouge cerise (#B8001F)
- Icônes réseaux : Blanc avec survol rouge

### Formulaire (Contact)
- Champs : Bordure gris, focus rouge cerise
- Bouton : Rouge cerise (#B8001F) avec survol plus foncé
- Étiquettes : Gris foncé (#374151)

## Contraste et accessibilité

Toutes les combinaisons de couleurs respectent les normes WCAG AA :
- Texte blanc (#FFFFFF) sur bleu marine : ✓ AAA
- Texte bleu profond sur beige : ✓ AAA
- Texte blanc sur rouge cerise : ✓ AA
- Texte bleu marine sur beige : ✓ AAA

## Fichiers concernés

- `src/app/globals.css` - Variables CSS racine
- `tailwind.config.ts` - Configuration des couleurs Tailwind
- Tous les fichiers `.tsx` utilisent les classes Tailwind de couleur

## Migration depuis le prototype

Les couleurs ont été ajustées pour :
1. Améliorer le contraste et l'accessibilité
2. Respecter la charte graphique fournie
3. Créer une hiérarchie visuelle claire
4. Assurer la cohérence sur tous les appareils
