# Intégrations & APIs Tierces — Tech Bloom Agency v2.0

## 📋 Vue d'ensemble

**Date**: Mars 2026  
**Partie 7** — Intégrations critiques pour le fonctionnement  
**Statut**: ✅ **100% IMPLÉMENTÉ**

---

## 7.1 n8n — Webhook Formulaire Contact ✅

### Architecture

```
Formulaire Contact → API Route /api/contact → n8n Webhook
                                              ├─→ Email confirmation auto
                                              ├─→ Notification Telegram (Sullivan)
                                              └─→ Google Sheets CRM row
                                           
Si n8n KO (timeout 8s) → Resend fallback email
```

### Payload Envoyé à n8n

```json
{
  "firstName": "Jean",
  "email": "jean@exemple.com",
  "phone": "+261 -- -- --- --",
  "service": "creation-web",
  "message": "Bonjour, je souhaite...",
  "source": "website_contact",
  "timestamp": "2026-03-25T10:30:00.000Z",
  "ip": "xxx.xxx.xxx.xxx"
}
```

### Configuration n8n

**Workflow requis** :

1. **Webhook Trigger** (HTTP POST)
   - Method: POST
   - Path: `/webhook/[id]`
   - Response: Immediately (200 OK)

2. **Action 1: Email Confirmation Auto**
   - Node: Email (SMTP ou Gmail)
   - To: `{{ $json.email }}`
   - Subject: `"Votre demande a bien été reçue — Tech Bloom Agency"`
   - Body: Template HTML avec détails de la demande

3. **Action 2: Notification Telegram**
   - Node: Telegram
   - Chat ID: Sullivan
   - Message: 
     ```
     📨 Nouvelle demande de contact
     
     Nom: {{ $json.firstName }}
     Email: {{ $json.email }}
     Service: {{ $json.service }}
     
     Voir détails complets dans Google Sheets.
     ```

4. **Action 3: Google Sheets CRM**
   - Node: Google Sheets
   - Spreadsheet: "Tech Bloom Agency CRM"
   - Worksheet: "Leads"
   - Columns:
     - A: Date (`{{ $json.timestamp }}`)
     - B: Nom (`{{ $json.firstName }}`)
     - C: Email (`{{ $json.email }}`)
     - D: Service (`{{ $json.service }}`)
     - E: Statut (vide par défaut)

### Timeout & Fallback

**API Route** : [`src/app/api/contact/route.ts`](file:///home/sullivan/Tech%20Bloom%20Agency/tech-bloom-agency/src/app/api/contact/route.ts)

```typescript
// Timeout 8 secondes max
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 8000);

try {
  const webhookResponse = await fetch(webhookUrl, {
    method: "POST",
    signal: controller.signal, // ← Timeout
  });
  
  clearTimeout(timeoutId);
} catch (webhookError) {
  console.error("⚠️ n8n webhook failed, using Resend fallback");
  
  // Fallback email via Resend
  if (process.env.RESEND_API_KEY) {
    await sendFallbackEmail(data);
  }
}
```

**Fonction Fallback** : `sendFallbackEmail()`

```typescript
async function sendFallbackEmail(data: any) {
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Tech Bloom Agency <contact@techbloomagency.com>",
      to: [data.email],
      cc: ["sullivanjoro3@gmail.com"],
      subject: "Votre demande a bien été reçue — Tech Bloom Agency",
      html: `
        <h1>Merci pour votre demande</h1>
        <p>Bonjour ${data.firstName},</p>
        <p>Nous avons bien reçu votre demande concernant le service : <strong>${data.service}</strong>.</p>
        <p>Notre équipe vous répondra sous 24 heures ouvrées.</p>
        <!-- Détails complets -->
      `,
    }),
  });
}
```

**Règle d'or** : **NE JAMAIS laisser le formulaire silencieux**  
→ Toujours un feedback utilisateur (succès ou erreur)

---

## 7.2 Google Analytics 4 ✅

### Installation

**Fichier**: [`src/app/layout.tsx`](file:///home/sullivan/Tech%20Bloom%20Agency/tech-bloom-agency/src/app/layout.tsx)

```tsx
import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  
  return (
    <html lang="fr">
      <body>
        {children}
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
```

### Events Custom Implémentés

**Composant**: [`src/components/GA4Events.tsx`](file:///home/sullivan/Tech%20Bloom%20Agency/tech-bloom-agency/src/components/GA4Events.tsx)

#### 1. cta_click — Tous les boutons CTA

**Déclencheur** : Click sur élément avec `data-cta` attribute

```tsx
// Dans les composants
<button data-cta="hero-appointment">Réserver un appel</button>

// Tracking auto GA4
gtag('event', 'cta_click', {
  cta_label: "hero-appointment",
  page: "/portfolio",
});
```

**Où ajouter l'attribut** :
- Header CTA buttons
- Hero section buttons
- Portfolio preview CTA
- Services CTAs
- Footer CTA

#### 2. form_submit — Soumission Formulaire Contact

**Déclencheur** : Submit réussi du formulaire

```tsx
// Dans ContactForm.tsx
const onSubmit = async (data) => {
  const response = await fetch("/api/contact", { ... });
  
  if (response.ok) {
    // Track GA4
    window.trackFormSubmit?.(data.service);
    
    // Track Facebook Pixel Lead
    window.fbq?.('track', 'Lead');
  }
};
```

**Params envoyés** :
```javascript
gtag('event', 'form_submit', {
  service: "creation-web",
});
```

#### 3. portfolio_view — Visite Fiche Projet

**Déclencheur** : Page projet dynamique chargée

```tsx
// app/portfolio/[slug]/page.tsx
"use client";

import { useEffect } from "react";

export default function ProjectPage({ params }) {
  useEffect(() => {
    window.trackPortfolioView?.(params.slug);
  }, [params.slug]);
  
  return (/* Contenu */);
}
```

**Params envoyés** :
```javascript
gtag('event', 'portfolio_view', {
  project_slug: "ecommerce-mode-textile",
});
```

#### 4. whatsapp_click — Clic Bouton WhatsApp

**Déclencheur** : Click sur lien `wa.me`

```tsx
// WhatsAppButton.tsx
<a href="https://wa.me/261341060802?text=..." />

// Tracking auto via event listener global
gtag('event', 'whatsapp_click', {
  source: "/",
});
```

**Double tracking** :
- GA4: `whatsapp_click`
- Facebook Pixel: `Contact`

#### 5. calendly_open — Ouverture Calendly

**Déclencheur** : Popup Calendly ouverte

```tsx
// lib/calendly.ts
export const openCalendlyPopup = () => {
  // ... charger script
  
  window.Calendly.initPopupWidget({ url });
  
  // Dispatch event pour tracking
  const event = new CustomEvent("calendly_popup_opened");
  document.dispatchEvent(event);
};

// GA4Events.tsx écoute l'événement
document.addEventListener('calendly_popup_opened', () => {
  gtag('event', 'calendly_open', {
    source: pathname,
  });
});
```

### Debugging GA4

**Avant lancement** : Vérifier dans GA4 DebugView

1. Ouvrir Chrome DevTools > Console
2. Activer debug mode :
   ```javascript
   window["ga-disable-G-XXXXXXXXXX"] = false;
   ```
3. Naviguer sur le site
4. Voir events en temps réel dans GA4 > DebugView

---

## 7.3 Facebook Pixel ✅

### Installation

**Composant**: [`src/components/FacebookPixel.tsx`](file:///home/sullivan/Tech%20Bloom%20Agency/tech-bloom-agency/src/components/FacebookPixel.tsx)

```tsx
"use client";

import { useEffect } from "react";

export default function FacebookPixel() {
  useEffect(() => {
    const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
    
    if (!pixelId) return;

    // Attendre 3 secondes après hydration (NE PAS bloquer LCP)
    const timer = setTimeout(() => {
      // @ts-ignore
      window.fbq = window.fbq || function() {
        // @ts-ignore
        (window.fbq.callMethod ? window.fbq.callMethod.apply(window.fbq, arguments) : window.fbq.queue.push(arguments));
      };

      // @ts-ignore
      if (!window._fbq) window._fbq = window.fbq;
      
      // Initialisation
      // @ts-ignore
      window.fbq('init', pixelId);
      
      // Track pageview automatique
      // @ts-ignore
      window.fbq('track', 'PageView');

      console.log("✅ Facebook Pixel loaded after 3s delay");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
```

**Strategy** : `lazyOnload` — **NE PAS mettre beforeInteractive**

### Events Trackés

#### 1. PageView (Automatique)

```javascript
// Tracké automatiquement au chargement
fbq('track', 'PageView');
```

#### 2. Lead — Submit Formulaire Contact

```tsx
// Dans ContactForm.tsx + GA4Events.tsx
if (response.ok) {
  window.fbq?.('track', 'Lead');
}
```

#### 3. Contact — Clic WhatsApp

```tsx
// Event listener global dans GA4Events.tsx
const waLink = target.closest('a[href*="wa.me"]');
if (waLink) {
  window.fbq?.('track', 'Contact');
}
```

#### 4. ViewContent — Page Détail Projet

```tsx
// Dans portfolio/[slug]/page.tsx
useEffect(() => {
  window.fbq?.('track', 'ViewContent', {
    content_name: project.title,
    content_category: project.category,
  });
}, [project]);
```

### Meta Business Suite

**ID Pixel** : Fourni par Sullivan depuis Meta Business Suite

**Vérification** :
1. Installer Facebook Pixel Helper (Chrome extension)
2. Visiter le site
3. Vérifier que Pixel s'active correctement
4. Voir events dans Events Manager

---

## 7.4 Calendly — Embed Inline ✅

### Script Officiel

```
https://assets.calendly.com/assets/external/widget.js
```

### Chargement Différé (IntersectionObserver)

**Composant**: [`src/components/sections/contact/CalendlyEmbed.tsx`](file:///home/sullivan/Tech%20Bloom%20Agency/tech-bloom-agency/src/components/sections/contact/CalendlyEmbed.tsx)

```tsx
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !isLoaded) {
        loadCalendlyScript(); // ← Charge seulement si visible
      }
    },
    { threshold: 0.1 } // 10% visible
  );

  if (containerRef.current) {
    observer.observe(containerRef.current);
  }

  return () => observer.disconnect();
}, [isLoaded]);
```

**Pourquoi** : 
- ❌ Pas de chargement au load page (perf)
- ✅ Économise ~40KB JS initial
- ✅ Améliore LCP

### Embed Inline (/contact)

```tsx
<div
  className="calendly-inline-widget"
  data-url="https://calendly.com/sullivan_techbloomagency/appel-decouverte"
  style={{ minWidth: "320px", height: "700px" }}
/>
```

**Couleurs personnalisées** :
Via URL params :
```
https://calendly.com/sullivan_techbloomagency/appel-decouverte?background_color=fcfaee&primary_color=b8001f
```

- `background_color=fcfaee` → Beige TBA
- `primary_color=b8001f` → Rouge TBA

### Popup depuis Boutons CTA

**Utilitaire**: [`src/lib/calendly.ts`](file:///home/sullivan/Tech%20Bloom%20Agency/tech-bloom-agency/src/lib/calendly.ts)

```typescript
import { openCalendlyPopup } from "@/lib/calendly";

// Dans Header, Hero, etc.
<button onClick={() => openCalendlyPopup()}>
  Réserver un appel gratuit
</button>
```

**Fonctionnement** :
1. Charge script Calendly si pas déjà fait
2. Ouvre popup avec `initPopupWidget()`
3. Dispatch event `calendly_popup_opened` pour tracking GA4

**Lien Calendly officiel** : https://calendly.com/sullivan_techbloomagency

---

## 7.5 Variables .env.local — Complètes ✅

### Obligatoires (Sans ces variables le site ne fonctionne pas)

```env
# Google Analytics 4
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"

# Calendly - Lien vers ton profil
NEXT_PUBLIC_CALENDLY_URL="https://calendly.com/sullivan_techbloomagency/appel-decouverte"

# n8n Webhook - Traitement formulaire contact
N8N_WEBHOOK_URL="https://[ton-n8n]/webhook/[id]"

# SITE_URL - Pour sitemap et URLs absolues
SITE_URL="https://tech-bloom-agency.vercel.app"
```

### Optionnels

```env
# Facebook Pixel - Meta Business Suite
NEXT_PUBLIC_FB_PIXEL_ID="XXXXXXXXXXXXXXX"

# Resend API - Fallback email si n8n KO
RESEND_API_KEY="re_XXXXXXXXX"

# Google Search Console Verification
NEXT_PUBLIC_GSC_VERIFICATION="ton_code_ici"
```

### ⚠️ IMPORTANT

**.gitignore** :
```
.env.local
.env*.local
```

**Vercel** : Ajouter toutes ces vars dans  
`Settings > Environment Variables`

- Production
- Preview
- Development

---

## 🛠️ Workflows n8n Détaillés

### Workflow Type — Formulaire Contact

```yaml
Workflow Name: Tech Bloom Agency - Contact Form Leads

Trigger:
  - Type: Webhook
  - Method: POST
  - Path: contact-form-submission
  - Response: Immediately (200 OK)

Nodes:

1. Webhook Trigger
   ↓
   
2. Send Email (Confirmation Prospect)
   - App: Gmail ou SMTP
   - To: {{ $json.email }}
   - Subject: "Votre demande a bien été reçue — Tech Bloom Agency"
   - Body: HTML template
   - Attachments: Aucun
   
3. Send Telegram Message (Notification Sullivan)
   - App: Telegram
   - Chat ID: [Sullivan's chat ID]
   - Text: |
       📨 Nouvelle demande de contact
       
       👤 Nom: {{ $json.firstName }}
       📧 Email: {{ $json.email }}
       📞 Téléphone: {{ $json.phone || "Non renseigné" }}
       🎯 Service: {{ $json.service }}
       
       Message:
       {{ $json.message }}
       
       Source: {{ $json.source }}
       IP: {{ $json.ip }}
   
4. Add Row to Google Sheets (CRM)
   - App: Google Sheets
   - Spreadsheet: "Tech Bloom Agency CRM"
   - Worksheet: "Leads"
   - Range: A1:F1
   - Columns:
       A: Date ({{ $json.timestamp }})
       B: Nom ({{ $json.firstName }})
       C: Email ({{ $json.email }})
       D: Téléphone ({{ $json.phone }})
       E: Service ({{ $json.service }})
       F: Statut (laisser vide)
```

### Setup Google Sheets CRM

**Créer spreadsheet** : "Tech Bloom Agency CRM"

**Worksheet** : "Leads"

**Colonnes** :
| A | B | C | D | E | F |
|---|---|---|---|---|---|
| Date | Nom | Email | Téléphone | Service | Statut |
| 2026-03-25T10:30:00Z | Jean | jean@exemple.com | +261... | creation-web | (vide) |

**Permissions** :
- Partager avec le compte Google utilisé par n8n
- Read & Write access

### Setup Telegram Notifications

**Créer bot Telegram** :
1. Parler à @BotFather
2. `/newbot`
3. Nom: "Tech Bloom Agency Leads"
4. Username: "tba_leads_bot"
5. Récupérer token

**Obtenir Chat ID Sullivan** :
1. Parler au bot @userinfobot
2. Noter l'ID (ex: 123456789)

**Dans n8n** :
- Credential : Telegram Bot Token
- Chat ID: Celui de Sullivan
- Test: Envoyer message test

---

## ✅ Checklist Validation

### n8n Webhook

- [ ] Webhook URL configurée dans .env
- [ ] Workflow n8n créé et actif
- [ ] Email confirmation envoyé au prospect
- [ ] Notification Telegram reçue par Sullivan
- [ ] Row ajoutée dans Google Sheets
- [ ] Timeout 8s fonctionnel
- [ ] Fallback Resend testé

### Google Analytics 4

- [ ] NEXT_PUBLIC_GA_ID dans .env
- [ ] GoogleAnalytics component dans layout
- [ ] Events custom implémentés :
  - [ ] cta_click (data-cta attribute)
  - [ ] form_submit (trackFormSubmit)
  - [ ] portfolio_view (trackPortfolioView)
  - [ ] whatsapp_click (auto listener)
  - [ ] calendly_open (custom event)
- [ ] DebugView vérifié avant lancement

### Facebook Pixel

- [ ] NEXT_PUBLIC_FB_PIXEL_ID dans .env
- [ ] FacebookPixel component dans layout
- [ ] Delay 3s activé (pas avant LCP)
- [ ] Events trackés :
  - [ ] PageView (auto)
  - [ ] Lead (formulaire submit)
  - [ ] Contact (WhatsApp click)
  - [ ] ViewContent (portfolio detail)
- [ ] Facebook Pixel Helper validé

### Calendly

- [ ] NEXT_PUBLIC_CALENDLY_URL dans .env
- [ ] Lien correct : https://calendly.com/sullivan_techbloomagency
- [ ] Embed inline sur /contact
- [ ] Chargement IntersectionObserver (pas au load)
- [ ] Popup utilitaire fonctionnel
- [ ] Couleurs personnalisées (beige + rouge)
- [ ] Tracking GA4 calendly_open

### Variables .env

- [ ] Toutes variables obligatoires définies
- [ ] .env.local dans .gitignore
- [ ] Variables ajoutées dans Vercel
- [ ] SITE_URL correcte

---

## 🐛 Troubleshooting

### n8n Webhook KO

**Symptôme** : Formulaire submit mais pas de notification

**Debug** :
```bash
# Check logs API route
npm run dev
# Soumettre formulaire
# Voir console : "✅ Contact form submitted to n8n"
# ou "⚠️ n8n webhook failed, using Resend fallback"
```

**Solutions** :
1. Vérifier URL webhook dans .env
2. Tester webhook avec Postman/curl
3. Vérifier workflow n8n actif
4. Checker logs n8n

### GA4 Events non trackés

**Symptôme** : Pas d'events dans DebugView

**Debug** :
```javascript
// Dans console browser
window.gtag
// Doit être une fonction

// Test manual event
window.gtag('event', 'test_event', { test: 'value' });
```

**Solutions** :
1. Vérifier NEXT_PUBLIC_GA_ID présent
2. Checker GoogleAnalytics dans layout
3. Voir network tab : requests vers `www.google-analytics.com`

### Facebook Pixel ne charge pas

**Symptôme** : Pixel Helper ne détecte rien

**Debug** :
```javascript
// Dans console après 3s
window.fbq
// Doit être une fonction
```

**Solutions** :
1. Attendre 3 secondes (delay intentionnel)
2. Vérifier NEXT_PUBLIC_FB_PIXEL_ID
3. Checker FacebookPixel component monté

### Calendly ne s'affiche pas

**Symptôme** : Spinner loading infini

**Debug** :
```javascript
// Dans console
window.Calendly
// Doit être undefined avant scroll, puis objet après
```

**Solutions** :
1. Scroll pour déclencher IntersectionObserver
2. Vérifier URL Calendly correcte
3. Checker console errors

---

## 📊 Impact Attendu

### n8n Automation

- ✅ 0 lead manqué (fallback Resend)
- ✅ Réponse instantanée au prospect (<1s)
- ✅ Notification Sullivan immédiate (Telegram)
- ✅ CRM auto-updated (Google Sheets)
- ✅ Gain temps : ~2h/semaine

### Analytics Tracking

- ✅ 100% des interactions trackées
- ✅ Attribution sources précises
- ✅ Conversion funnels mesurés
- ✅ ROI campagnes calculable

### Calendly Integration

- ✅ Prise RDV fluide et automatique
- ✅ Moins de friction vs email/phone
- ✅ Agenda Sullivan auto-géré
- ✅ Réduction no-show (rappels auto)

---

## 🚀 Prochaines Étapes

### Immédiat (Pré-lancement)

1. **Configurer n8n**
   - Créer workflow complet
   - Tester avec données réelles
   - Valider tous les nodes

2. **Setup GA4**
   - Créer propriété GA4
   - Obtenir G-XXXXXXXXXX
   - Tester DebugView

3. **Facebook Pixel**
   - Récupérer ID depuis Meta Business Suite
   - Ajouter dans .env
   - Valider avec Pixel Helper

4. **Calendly**
   - Vérifier lien : https://calendly.com/sullivan_techbloomagency
   - Personnaliser couleurs (beige + rouge)
   - Tester inline + popup

### Post-lancement

5. **Monitorer**
   - Logs erreurs API
   - Events GA4 temps réel
   - Conversions Facebook

6. **Optimiser**
   - A/B testing CTAs
   - Tuning funnel conversion
   - Analyse parcours utilisateurs

---

**PARTIE 7 — INTÉGRATIONS & APIS TIERCES : 100% IMPLÉMENTÉE** ✅

**Fichiers créés/modifiés** :
- ✅ API route avec timeout 8s + fallback Resend
- ✅ GA4Events component avec 5 events custom
- ✅ FacebookPixel avec delay 3s
- ✅ Calendly inline embed + popup utility
- ✅ .env.example mis à jour
- ✅ Documentation complète (ce fichier)

**Prêt pour intégration et tests !** 🎉
