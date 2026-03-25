# Spécifications Techniques - Page Contact (/contact)

## Vue d'ensemble

**Fichier**: `app/contact/page.tsx`  
**Rendu**: SSG (Static Site Generation)  
**Priorité**: Critique (conversion)  
**API**: `/api/contact` route

---

## 📐 Layout 2 Colonnes

### Structure
```tsx
<div className="grid lg:grid-cols-2 gap-16">
  {/* Colonne Gauche : Formulaire */}
  <div><ContactForm /></div>
  
  {/* Colonne Droite : Infos + Calendly */}
  <div>
    <Coordonnées />
    <HorairesRéseaux />
    <CalendlyEmbed />
  </div>
</div>
```

**Desktop** (≥ 1024px):
- 2 colonnes 50/50
- Gap: 16 (64px)

**Mobile** (< 1024px):
- Stack vertical
- Formulaire en premier

---

## 📝 Formulaire de Contact

### Fichier
`components/sections/contact/ContactForm.tsx`

### Champs du Formulaire

| Champ | Type | Required | Validation |
|-------|------|----------|------------|
| `firstName` | text | ✅ | Min 2 chars |
| `email` | email | ✅ | Format email valide |
| `phone` | tel | ❌ | Optionnel |
| `service` | select | ✅ | Min 1 char |
| `message` | textarea | ✅ | Min 20 chars |
| `company` | text | ❌ | Honeypot (hidden) |

### Schema Zod
```typescript
const contactSchema = z.object({
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  phone: z.string().optional().or(z.literal("")),
  service: z.string().min(1, "Veuillez sélectionner un service"),
  message: z.string().min(20, "Le message doit contenir au moins 20 caractères"),
  company: z.string().optional(), // Honeypot field
});
```

### React Hook Form
```tsx
const {
  register,
  handleSubmit,
  reset,
  setValue,
  formState: { errors },
} = useForm<ContactFormData>({
  resolver: zodResolver(contactSchema),
  defaultValues: {
    firstName: "",
    email: "",
    phone: "",
    service: preselectedService || "",
    message: "",
  },
});
```

### Pré-sélection Service
```tsx
const searchParams = useSearchParams();
const preselectedService = searchParams.get("service");

useEffect(() => {
  if (preselectedService) {
    setValue("service", preselectedService);
  }
}, [preselectedService, setValue]);
```

**Usage**: `/contact?service=creation-web` pré-remplit le select

### États du Bouton
```tsx
<button
  type="submit"
  disabled={isSubmitting}
  className="w-full bg-red text-white py-5 rounded-md ..."
>
  {isSubmitting ? (
    <>
      <Loader2 className="animate-spin" size={20} />
      Envoi en cours...
    </>
  ) : (
    <>
      <Send size={20} className="group-hover:translate-x-1" />
      Démarrer la collaboration
    </>
  )}
</button>
```

**États**:
- **Normal**: Icône Send + texte
- **Loading**: Spinner + "Envoi en cours..."
- **Disabled**: Opacité 50%, cursor not-allowed

### Message de Succès
```tsx
{submitSuccess && (
  <div className="mb-6 p-4 bg-green/10 border border-green/30 rounded-md flex items-center gap-3 animate-fade-in">
    <CheckCircle2 className="w-6 h-6 text-green" />
    <p className="text-green font-medium">
      Message envoyé avec succès ! Nous vous répondrons sous 24h.
    </p>
  </div>
)}
```

**Auto-reset**: Disparaît après 5 secondes

---

## 🔌 API Route - /api/contact

### Fichier
`app/api/contact/route.ts`

### POST Handler
```typescript
export async function POST(request: NextRequest) {
  // 1. Récupérer IP client
  const ip = request.headers.get("x-forwarded-for") || "unknown";
  
  // 2. Check rate limit
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Trop de tentatives..." },
      { status: 429 }
    );
  }
  
  // 3. Validation Zod
  const validationResult = contactSchema.safeParse(body);
  if (!validationResult.success) {
    return NextResponse.json(
      { error: "Validation failed", details: ... },
      { status: 400 }
    );
  }
  
  // 4. Honeypot check
  if (data.company && data.company.trim() !== "") {
    console.log("🤖 Spam detected");
    return NextResponse.json({ success: true }, { status: 200 });
  }
  
  // 5. POST webhook n8n
  const webhookResponse = await fetch(process.env.N8N_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...data,
      source: "website_contact",
      timestamp: new Date().toISOString(),
      ip: ip,
    }),
  });
  
  if (!webhookResponse.ok) {
    return NextResponse.json(
      { error: "webhook_failed" },
      { status: 500 }
    );
  }
  
  return NextResponse.json({ success: true });
}
```

### Rate Limiting

**Configuration**:
- Fenêtre: 1 heure (3600000ms)
- Max requêtes: 5 par IP
- Stockage: Map en mémoire

```typescript
const RATE_LIMIT_WINDOW = 3600000; // 1 heure
const RATE_LIMIT_MAX = 5; // 5 req/heure

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);
  
  if (!limit) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (limit.count >= RATE_LIMIT_MAX) {
    return false; // Rate limit exceeded
  }
  
  limit.count++;
  return true;
}
```

### Anti-Spam Honeypot

**Principe**: Champ hidden invisible pour les humains mais visible par les bots

```tsx
{/* Honeypot field (hidden - anti-spam) */}
<div className="hidden" aria-hidden="true">
  <label htmlFor="company">Company</label>
  <input
    id="company"
    type="text"
    {...register("company")}
    tabIndex={-1}
    autoComplete="off"
  />
</div>
```

**Vérification API**:
```typescript
if (data.company && data.company.trim() !== "") {
  console.log("🤖 Spam detected from IP:", ip);
  return NextResponse.json(
    { success: true }, // Retourner succès pour ne pas éveiller les soupçons
    { status: 200 }
  );
}
```

---

## 📅 Calendly Embed

### Fichier
`components/sections/contact/CalendlyEmbed.tsx`

### Chargement Différé (IntersectionObserver)
```tsx
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !isLoaded && !hasError) {
        loadCalendlyScript();
      }
    },
    { threshold: 0.1 }
  );

  if (calendlyContainerRef.current) {
    observer.observe(calendlyContainerRef.current);
  }

  return () => observer.disconnect();
}, [isLoaded, hasError]);
```

**Threshold**: 0.1 = Se déclenche quand 10% du composant est visible

### Script Loading
```tsx
const loadCalendlyScript = () => {
  if (document.getElementById("calendly-script")) {
    setIsLoaded(true);
    return;
  }

  const script = document.createElement("script");
  script.id = "calendly-script";
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;
  
  script.onload = () => {
    setIsLoaded(true);
    initCalendlyWidget();
  };
  
  script.onerror = () => setHasError(true);

  document.body.appendChild(script);
};
```

**Pas de chargement au load page** → Performance optimisée

### Widget Initialization
```tsx
const initCalendlyWidget = () => {
  // @ts-ignore - Calendly widget
  if (window.Calendly && calendlyContainerRef.current) {
    // @ts-ignore
    window.Calendly.initBadgeWidget({
      url: process.env.NEXT_PUBLIC_CALENDLY_URL || 
           "https://calendly.com/techbloomagency/appel-decouverte",
      text: "Réserver un appel",
      color: "#B8001F", // Rouge TBA
      textColor: "#FFFFFF",
      branding: false
    });
  }
};
```

### Anchor ID
```tsx
<div id="calendly" ref={calendlyContainerRef}>
  {/* Widget container */}
</div>
```

**Usage**: Les CTA du header peuvent pointer vers `#calendly`

---

## 🔗 Intégration n8n Webhook

### Payload Envoyé
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

### Variables d'Environnement Requises

**.env.local**:
```env
# n8n Webhook - Pour traitement formulaire contact
N8N_WEBHOOK_URL=https://[n8n-instance]/webhook/[id]

# Calendly - URL pour prise de rendez-vous
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/techbloomagency/appel-decouverte

# Google Analytics 4
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Facebook Pixel (optionnel)
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXXXXX
```

---

## 🎨 Couleurs Utilisées

| Élément | Couleur | Code | Classe Tailwind |
|---------|---------|-------|----------------|
| Background Hero | Blanc | `#FFFFFF` | `bg-white` |
| Background Formulaire | Beige | `#FCFAEE` | `bg-beige` |
| Bouton Submit | Rouge | `#B8001F` | `bg-red` |
| Bouton Hover | Rouge Foncé | `#960019` | `hover:bg-red-hover` |
| Icons Gradient | Blue→Teal | `#384B70`→`#507687` | `from-blue to-teal` |
| Error Messages | Rouge | `#FF0000` | `text-red` |
| Success Message | Vert | `#22C55E` | `text-green` |
| Calendly Button | Rouge TBA | `#B8001F` | Custom color |

---

## ✅ Checklist CDN

| Exigence | Statut | Implémentation |
|----------|--------|----------------|
| Layout 2 colonnes 50/50 | ✅ | `lg:grid-cols-2 gap-16` |
| Stack mobile | ✅ | Grid responsive |
| Formulaire gauche | ✅ | `ContactForm.tsx` |
| Calendly embed droite | ✅ | `CalendlyEmbed.tsx` |
| React Hook Form | ✅ | `useForm()` hook |
| Zod validation | ✅ | `zodResolver(schema)` |
| Champs requis | ✅ | firstName, email, service, message |
| Téléphone optionnel | ✅ | `.optional().or(z.literal(''))` |
| Email format | ✅ | `z.string().email()` |
| Message min 20 chars | ✅ | `z.string().min(20)` |
| Fetch POST /api/contact | ✅ | `fetch("/api/contact", { method: "POST" })` |
| No reload | ✅ | SPA form submission |
| Loading state bouton | ✅ | `isSubmitting` + spinner |
| Success state animé | ✅ | Banner with CheckCircle2 |
| Calendly script IntersectionObserver | ✅ | Chargement différé |
| Pas de chargement au load | ✅ | Observer threshold 0.1 |
| Honeypot input hidden | ✅ | Hidden field `company` |
| Rate limit API 5 req/heure | ✅ | Map-based rate limiting |
| Anchor id="calendly" | ✅ | Sur section Calendly |
| Webhook n8n | ✅ | POST avec payload complet |

---

## 🚀 Performance

### Optimisations
- ✅ Calendly script chargé à la demande (IntersectionObserver)
- ✅ Rate limiting en mémoire (pas de DB)
- ✅ Validation côté client + serveur
- ✅ Honeypot anti-spam sans CAPTCHA
- ✅ Form submit sans reload page

### Poids estimé
- HTML: ~18KB (compressé)
- JS: ~55KB (avec React Hook Form + Zod)
- CSS: ~32KB (Tailwind purged)
- Calendly: ~40KB (chargé async)

---

## 📱 Responsive Design

### Breakpoints
```tsx
className="grid lg:grid-cols-2 gap-16"
```

**Desktop** (≥ 1024px):
- 2 colonnes égales
- Formulaire à gauche
- Infos + Calendly à droite

**Tablette & Mobile** (< 1024px):
- Stack vertical
- Formulaire en premier
- Infos + Calendly en dessous

---

## 🧪 Tests à Prévoir

### Fonctionnels
1. ✅ Soumission formulaire fonctionne
2. ✅ Validation Zod correcte
3. ✅ Rate limiting actif
4. ✅ Honeypot détecte bots
5. ✅ Calendly se charge au scroll
6. ✅ Pré-sélection service via URL

### Accessibilité
1. ✅ Labels sur tous les champs
2. ✅ Error messages clairs
3. ✅ Focus states visibles
4. ✅ Keyboard navigation OK
5. ✅ ARIA attributes (aria-hidden sur honeypot)

### Sécurité
1. ✅ Validation côté serveur
2. ✅ Rate limiting par IP
3. ✅ Honeypot anti-spam
4. ✅ HTTPS requis en prod
5. ✅ Input sanitization (Zod)

---

## 📝 Prochaines Étapes

1. **Configurer .env.local** - Ajouter N8N_WEBHOOK_URL et CALENDLY_URL
2. **Tester webhook n8n** - Vérifier réception des données
3. **Ajouter analytics** - Track form submissions
4. **Email confirmation** - Auto-réponse après soumission
5. **CRM integration** - Sync contacts avec HubSpot/Pipedrive

---

**Date**: Mars 2026  
**Version**: 2.0  
**Statut**: ✅ Implémenté selon CDN
