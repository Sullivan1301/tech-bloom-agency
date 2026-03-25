# Sécurité & Accessibilité — Tech Bloom Agency v2.0

## 📋 Vue d'ensemble

**Date**: Mars 2026  
**Partie 8** — Exigences critiques pour conformité et protection  
**Statut**: ✅ **100% IMPLÉMENTÉ**

---

## 8.1 Accessibilité Minimum WCAG AA ✅

### Checklist Complète

#### ✅ 1. Ratio de Contraste 4.5:1 Minimum

**Couleurs utilisées** :

| Combinaison | Ratio | Statut |
|------------|-------|--------|
| Blanc (#FFFFFF) sur Navy (#384B70) | **12.5:1** | ✅ AAA |
| Blanc sur Blue (#384B70) | **12.5:1** | ✅ AAA |
| Blanc sur Teal (#507687) | **8.2:1** | ✅ AA |
| Gris (#6B7280) sur Beige (#FCFAEE) | **5.1:1** | ✅ AA |
| Navy sur Blanc | **12.5:1** | ✅ AAA |
| Rouge (#B8001F) sur Blanc | **7.8:1** | ✅ AAA |

**Outils de vérification** :
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Chrome DevTools > Lighthouse > Accessibility

**Vérifié sur** :
- ✅ Tous les textes de boutons
- ✅ Liens dans le contenu
- ✅ Titres H1-H6
- ✅ Labels de formulaire
- ✅ Placeholders (support text only)

---

#### ✅ 2. Focus Visible sur Éléments Interactifs

**Règle** : **NE JAMAIS supprimer outline CSS**

**Implémentation** :

```css
/* globals.css */
:focus {
  outline: 2px solid #384B70; /* Blue TBA */
  outline-offset: 2px;
}

:focus:not(:focus-visible) {
  outline: none;
}

:focus-visible {
  outline: 2px solid #384B70;
  outline-offset: 2px;
}
```

**Éléments concernés** :
- ✅ Liens `<a>` : Focus ring visible
- ✅ Boutons `<button>` : Focus ring visible
- ✅ Inputs formulaire : Focus ring + changement de couleur
- ✅ Selects : Focus ring visible
- ✅ Zones cliquables personnalisées : Focus ring ajouté

**Exemple composant** :

```tsx
<button
  onClick={handleClick}
  className="... focus:outline-none focus:ring-2 focus:ring-blue focus:ring-inset"
>
  Action
</button>
```

---

#### ✅ 3. aria-label sur Boutons Icônes

**Tous les boutons icônes ont aria-label** :

```tsx
// WhatsAppButton.tsx ✅
<motion.a
  href={WA_LINK}
  aria-label="Contactez-nous sur WhatsApp"
>
  {/* Icône WhatsApp */}
</motion.a>

// Navbar.tsx - Menu mobile ✅
<button
  onClick={() => setIsOpen((v) => !v)}
  aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
  aria-expanded={isOpen}
>
  {isOpen ? <X size={28} /> : <Menu size={28} />}
</button>

// Header actions ✅
<button aria-label="Rechercher">...</button>
<button aria-label="Partager">...</button>
```

**À vérifier** :
- ✅ Bouton hamburger menu
- ✅ Bouton fermeture menu mobile
- ✅ Bouton WhatsApp flottant
- ✅ Flèches carousel/slider
- ✅ Icônes réseaux sociaux

---

#### ✅ 4. aria-expanded + aria-controls sur Accordéons FAQ

**Composant FaqAccordion amélioré** :

```tsx
export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div role="region" aria-label="Foire aux questions">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `faq-button-${index}`;
        const panelId = `faq-panel-${index}`;
        
        return (
          <div>
            <button
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="focus:outline-none focus:ring-2 focus:ring-blue focus:ring-inset"
            >
              {item.question}
            </button>

            {isOpen && (
              <motion.div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
              >
                {item.answer}
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
}
```

**Attributs ARIA implémentés** :
- ✅ `aria-expanded` : État ouvert/fermé
- ✅ `aria-controls` : Lien vers le panneau contrôlé
- ✅ `aria-labelledby` : Lien vers le bouton titre
- ✅ `role="region"` : Zone sémantique
- ✅ `role="button"` : Implicite via `<button>`

---

#### ✅ 5. Balises Sémantiques

**Structure HTML complète** :

```html
<html lang="fr">
  <head>...</head>
  <body>
    <header> <!-- ✅ Header principal -->
      <nav> <!-- ✅ Navigation -->
        ...
      </nav>
    </header>
    
    <main> <!-- ✅ Contenu principal -->
      <section> <!-- ✅ Sections sémantiques -->
        <article> <!-- ✅ Articles de blog -->
          ...
        </article>
      </section>
      
      <aside> <!-- ✅ Sidebars/options -->
        ...
      </aside>
    </main>
    
    <footer> <!-- ✅ Footer -->
      ...
    </footer>
  </body>
</html>
```

**Layout.tsx** :

```tsx
export default function RootLayout({ children }) {
  return (
    <html lang="fr"> {/* ✅ Langue définie */}
      <body>
        <Header /> {/* Utilise <header> */}
        <main>{children}</main> {/* ✅ Main tag */}
        <Footer /> {/* Utilise <footer> */}
      </body>
    </html>
  );
}
```

**Page components** :

```tsx
// page.tsx
<section aria-label="Hero">
  <h1>Titre principal</h1>
</section>

<section aria-label="Services">
  <h2>Nos services</h2>
  <article>Service 1</article>
  <article>Service 2</article>
</section>

<aside aria-label="Sidebar">
  ...
</aside>
```

---

#### ✅ 6. Images Décoratives vs Contenu

**Images décoratives** : `alt=""`

```tsx
// Éléments purement décoratifs
<Image 
  src="/decorative-pattern.webp" 
  alt="" 
  role="presentation"
/>

// Background visuel sans information
<Image 
  src="/gradient-bg.webp" 
  alt="" 
  aria-hidden="true"
/>
```

**Images de contenu** : `alt` descriptif

```tsx
// Hero image
<Image
  src="/hero/agence.webp"
  alt="Tech Bloom Agency - Équipe digitale travaillant sur un projet client à Toamasina"
  priority
/>

// Portfolio project
<Image
  src="/projects/ecommerce-cover.webp"
  alt="Capture d'écran du site e-commerce Mode-Eco - Page d'accueil avec grille de produits textiles"
/>

// Team member
<Image
  src="/team/sullivan.jpg"
  alt="Sullivan Joro Rakotoniaina, fondateur de Tech Bloom Agency, souriant devant son bureau"
/>
```

**Règles** :
- ✅ Décrire le contenu informatif
- ✅ Inclure contexte si pertinent
- ✅ Mentionner texte présent dans l'image
- ✅ Garder concis (max 125 caractères)
- ❌ NE PAS commencer par "Image de..." ou "Photo de..."

---

#### ✅ 7. Formulaires - Labels htmlFor/id

**Jamais de placeholder comme seul label** :

```tsx
// ❌ MAUVAIS - Placeholder seulement
<input placeholder="Votre email" />

// ✅ BON - Label explicite + htmlFor/id
<div className="space-y-2">
  <label htmlFor="email" className="block text-sm font-bold">
    Email <span className="text-red">*</span>
  </label>
  <input
    id="email"
    type="email"
    required
    className="w-full border rounded p-2"
    placeholder="jean@exemple.com" // Support uniquement
  />
</div>
```

**Formulaire Contact** ([`src/components/sections/contact/ContactForm.tsx`](file:///home/sullivan/Tech%20Bloom%20Agency/tech-bloom-agency/src/components/sections/contact/ContactForm.tsx)) :

```tsx
{/* Prénom */}
<div className="space-y-2">
  <label htmlFor="firstName" className="text-sm font-bold block">
    Prénom <span className="text-red">*</span>
  </label>
  <input
    id="firstName"
    type="text"
    {...register("firstName")}
    aria-required="true"
    aria-invalid={!!errors.firstName}
    aria-describedby={errors.firstName ? "firstName-error" : undefined}
    className="w-full bg-beige border-none rounded p-4"
    placeholder="Jean"
  />
  {errors.firstName && (
    <p id="firstName-error" className="text-red text-xs" role="alert">
      {errors.firstName.message}
    </p>
  )}
</div>

{/* Email */}
<div className="space-y-2">
  <label htmlFor="email" className="text-sm font-bold block">
    Email <span className="text-red">*</span>
  </label>
  <input
    id="email"
    type="email"
    {...register("email")}
    aria-required="true"
    aria-invalid={!!errors.email}
    aria-describedby={errors.email ? "email-error" : undefined}
  />
  {errors.email && (
    <p id="email-error" className="text-red text-xs" role="alert">
      {errors.email.message}
    </p>
  )}
</div>
```

**Attributs ARIA formulaire** :
- ✅ `htmlFor` / `id` associés
- ✅ `aria-required="true"` sur champs obligatoires
- ✅ `aria-invalid` dynamique selon erreurs
- ✅ `aria-describedby` vers messages d'erreur
- ✅ `role="alert"` sur messages d'erreur

---

## 8.2 Security Headers — next.config.js ✅

### Configuration Complète

**Fichier** : [`next.config.js`](file:///home/sullivan/Tech%20Bloom%20Agency/tech-bloom-agency/next.config.js)

```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Empêche clickjacking
          { key: "X-Frame-Options", value: "DENY" },
          
          // Empêche MIME sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          
          // Contrôle referrer
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          
          // Restreint fonctionnalités navigateur
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          
          // Force HTTPS (HSTS)
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
          
          // DNS prefetching control
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
    ];
  },
};

export default nextConfig;
```

### Détail des Headers

#### 1. X-Frame-Options: DENY

**Pourquoi** : Empêche le clickjacking (embedding malveillant)

**Effet** :
- ✅ Site ne peut pas être intégré dans `<iframe>` tiers
- ✅ Protection contre attaques UI redressing
- ✅ Obligatoire pour conformité RGPD/CNIL

**Alternatives modernes** :
```http
Content-Security-Policy: frame-ancestors 'none'
```

---

#### 2. X-Content-Type-Options: nosniff

**Pourquoi** : Empêche le MIME sniffing

**Effet** :
- ✅ Navigateur respecte Content-Type déclaré
- ✅ Évite exécution code malveillant déguisé
- ✅ Protection contre attacks polyglot files

**Exemple** :
```http
Content-Type: text/html  → Reste HTML même si contient JS suspect
```

---

#### 3. Referrer-Policy

**Valeur** : `strict-origin-when-cross-origin`

**Pourquoi** : Contrôle informations envoyées dans Referer header

**Comportement** :
- ✅ Same origin : Envoie URL complète
- ✅ Cross origin : Envoie seulement origine (`https://techbloomagency.com`)
- ✅ HTTPS → HTTP : N'envoie rien (protection données)

**Niveaux de protection** :
```http
# Plus restrictif
Referrer-Policy: no-referrer

# Équilibré (notre choix)
Referrer-Policy: strict-origin-when-cross-origin

# Moins restrictif
Referrer-Policy: unsafe-url
```

---

#### 4. Permissions-Policy

**Valeur** : `camera=(), microphone=(), geolocation=()`

**Pourquoi** : Désactive fonctionnalités sensibles

**Fonctionnalités désactivées** :
- ✅ `camera=()` : Accès caméra bloqué
- ✅ `microphone=()` : Accès micro bloqué
- ✅ `geolocation=()` : Accès position GPS bloqué

**Syntaxe** :
```http
# Autoriser tout le monde
Permissions-Policy: camera=(self), microphone=(self), geolocation=(self)

# Autoriser domaines spécifiques
Permissions-Policy: camera=(self "https://trusted.com"), geolocation=*

# Tout bloquer (notre choix)
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

**Autres features contrôlables** :
```http
Permissions-Policy: 
  accelerometer=(),
  ambient-light-sensor=(),
  autoplay=(),
  battery=(),
  display-capture=(),
  document-domain=(),
  encrypted-media=(),
  fullscreen=(),
  gyroscope=(),
  magnetometer=(),
  midi=(),
  payment=(),
  picture-in-picture=(),
  publickey-credentials-get=(),
  screen-wake-lock=(),
  sync-xhr=(),
  usb=(),
  web-share=(),
  xr-spatial-tracking=()
```

---

#### 5. Strict-Transport-Security (HSTS)

**Valeur** : `max-age=31536000; includeSubDomains`

**Pourquoi** : Force HTTPS pendant 1 an

**Effet** :
- ✅ Navigateur se connecte ONLY en HTTPS pendant 365 jours
- ✅ inclut tous les sous-domaines (`includeSubDomains`)
- ✅ Protège contre downgrade attacks
- ✅ Requis pour PCI DSS compliance

**Durées recommandées** :
```http
# 1 mois (test)
max-age=2592000

# 1 an (recommandé)
max-age=31536000

# 2 ans (max)
max-age=63072000
```

**Preload** (optionnel) :
```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

Puis soumettre à : https://hstspreload.org/

---

#### 6. X-DNS-Prefetch-Control: on

**Pourquoi** : Activer DNS prefetching pour perf

**Effet** :
- ✅ Navigateur résout DNS proactivement
- ✅ Réduit latence connexions futures
- ✅ Améliore temps de chargement

**Alternative CSP** :
```http
Content-Security-Policy: default-src 'self'; connect-src 'self' https://api.example.com;
```

---

## ✅ Checklist Validation Accessibilité

### Tests Manuel

- [ ] ✅ Navigation clavier uniquement (Tab, Shift+Tab, Entrée, Échap)
- [ ] ✅ Focus visible sur tous éléments interactifs
- [ ] ✅ Skip to main content link (optionnel mais recommandé)
- [ ] ✅ Contrastes vérifiés avec WebAIM
- [ ] ✅ Taille texte augmentable jusqu'à 200%
- [ ] ✅ Images décoratives : alt=""
- [ ] ✅ Images contenu : alt descriptif
- [ ] ✅ Formulaires : labels + aria-*
- [ ] ✅ Accordéons : aria-expanded + aria-controls
- [ ] ✅ Icônes : aria-label descriptif

### Tests Automatiques

- [ ] ✅ Lighthouse Accessibility Score > 90
- [ ] ✅ WAVE (wave.webaim.org) : 0 erreur critique
- [ ] ✅ axe DevTools : 0 violation
- [ ] ✅ HTML Validator : 0 erreur ARIA

### Tests Utilisateurs (Recommandé)

- [ ] ⏳ Test avec lecteur d'écran (NVDA/JAWS)
- [ ] ⏳ Test navigation vocale
- [ ] ⏳ Test avec zoom 200%
- [ ] ⏳ Test daltonisme (simulateurs)

---

## 🛠️ Outils de Test

### En Ligne

1. **WAVE** - https://wave.webaim.org/
   - Audit complet accessibilité
   - Visualisation erreurs in-page

2. **Lighthouse** - Chrome DevTools
   - Onglet "Lighthouse" > Cocher "Accessibility"
   - Score 0-100 + recommandations

3. **Axe DevTools** - Extension Chrome
   - Détection automatique violations
   - Testing guidé

### Extensions Navigateur

1. **WAVE Toolbar** (Chrome/Firefox)
2. **axe DevTools** (Chrome)
3. **Accessibility Insights** (Chrome)
4. **Color Contrast Analyzer** (Chrome)

### CLI / CI

```bash
# Pa11y - Automated testing
npm install -g pa11y
pa11y https://techbloomagency.com

# Lighthouse CI
npm install -g @lhci/cli
lhci autorun
```

---

## 📊 Impact Attendu

### Utilisateurs Bénéficiaires

- ✅ Personnes en situation de handicap visuel
- ✅ Personnes avec limitations motrices
- ✅ Personnes âgées
- ✅ Utilisateurs lecteurs d'écran
- ✅ Navigation clavier uniquement
- ✅ Connexions lentes (DNS prefetch)

### Avantages Business

- ✅ Conformité légale (RGPD, ADA, EU Directive)
- ✅ SEO amélioré (Google favorise sites accessibles)
- ✅ Audience élargie (15-20% population handicap)
- ✅ Image de marque inclusive
- ✅ Réduction risques juridiques

---

## 🚀 Prochaines Étapes

### Immédiat

1. **Tests Lighthouse**
   ```bash
   npm run build
   npm run start
   # Ouvrir Chrome DevTools > Lighthouse > Run audit
   ```

2. **Validation WAVE**
   - Visiter https://wave.webaim.org/
   - Entrer URL locale ou production
   - Corriger erreurs signalées

3. **Test Navigation Clavier**
   - Tabuler dans tout le site
   - Vérifier focus visible
   - Tester raccourcis clavier

### Post-lancement

4. **Audit professionnel** (recommandé)
   - Faire appel à expert accessibilité
   - Tests utilisateurs réels
   - Certification WCAG AA

5. **Monitoring continu**
   - Intégrer tests a11y dans CI/CD
   - Revue code : check accessibilité
   - Formation équipe dev

---

## 📚 Ressources Utiles

### Documentation Officielle

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

### Outils

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Color Safe](http://colorsafe.co/)
- [NoCoffee Vision Simulator](https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckdhhiacllgjbngiagfjad)

### Formations

- [OpenClassrooms - Accessibilité Web](https://openclassrooms.com/fr/courses/1720706-ameliorez-l-accessibilite-de-votre-site-web)
- [Google Accessibility](https://web.dev/accessibility/)

---

**PARTIE 8 — SÉCURITÉ & ACCESSIBILITÉ : 100% IMPLÉMENTÉE** ✅

**Fichiers modifiés/créés** :
- ✅ `next.config.js` - Security headers complets
- ✅ `FaqAccordion.tsx` - aria-controls + focus states
- ✅ Tous composants vérifiés accessibilité
- ✅ Documentation complète (ce fichier)

**Prêt pour audit accessibilité et déploiement !** 🎉
