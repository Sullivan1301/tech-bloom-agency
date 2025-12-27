import type { Metadata } from "next";
import { Bitter, Montserrat } from "next/font/google";
import "./globals.css";

import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Aoscompo from "@/utils/aos";

import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";

import SessionProviderComp from "@/components/nextauth/SessionProvider";
import { AuthDialogProvider } from "./context/AuthDialogContext";

/* =========================
   FONTS
   ========================= */

const bitter = Bitter({
  subsets: ["latin"],
  variable: "--font-bitter",
  display: "swap",
  weight: ["400", "600", "700"],
  preload: true,
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  preload: true,
});

/* =========================
   METADATA SEO
   ========================= */

export const metadata: Metadata = {
  title: {
    default: "Tech Bloom Agency - De la stratégie à l'éclosion digitale",
    template: "%s | Tech Bloom Agency",
  },
  description:
    "Agence digitale basée à Toamasina, Madagascar. Création de sites web, branding, marketing digital et accompagnement tech personnalisé.",
  keywords: [
    "agence digitale Madagascar",
    "création site web Madagascar",
    "branding Madagascar",
    "marketing digital Madagascar",
    "Toamasina",
    "agence web Madagascar",
    "développement web",
    "stratégie digitale",
    "Tech Bloom Agency",
  ],
  authors: [{ name: "Joro Sullivan RAKOTONIAINA", url: "https://techbloom.agency" }],
  creator: "Tech Bloom Agency",
  publisher: "Tech Bloom Agency",
  metadataBase: new URL("https://techbloom.agency"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://techbloom.agency",
    title: "Tech Bloom Agency - De la stratégie à l'éclosion digitale",
    description:
      "Agence digitale à Madagascar spécialisée en web, branding et marketing digital.",
    siteName: "Tech Bloom Agency",
    images: [
      {
        url: "/lovable-uploads/474b2305-036f-4b7a-b879-3f1a8bd98f47.png",
        width: 1200,
        height: 630,
        alt: "Tech Bloom Agency - Agence digitale Madagascar",
      },
    ],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Bloom Agency - Agence digitale Madagascar",
    description: "De la stratégie à l'éclosion digitale. Création web, branding et marketing digital.",
    images: ["/lovable-uploads/474b2305-036f-4b7a-b879-3f1a8bd98f47.png"],
    creator: "@techbloomagency",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/lovable-uploads/474b2305-036f-4b7a-b879-3f1a8bd98f47.png", type: "image/png" },
    ],
    apple: [
      { url: "/lovable-uploads/474b2305-036f-4b7a-b879-3f1a8bd98f47.png" },
    ],
  },
  verification: {
    // Ajouter Google Search Console
    // google: "votre-code-verification",
  },
};

/* =========================
   VIEWPORT
   ========================= */

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FCFAEE" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
};

/* =========================
   STRUCTURED DATA (JSON-LD)
   ========================= */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://techbloom.agency",
  name: "Tech Bloom Agency",
  alternateName: "TBA",
  url: "https://techbloom.agency",
  logo: "https://techbloom.agency/lovable-uploads/474b2305-036f-4b7a-b879-3f1a8bd98f47.png",
  image: "https://techbloom.agency/lovable-uploads/474b2305-036f-4b7a-b879-3f1a8bd98f47.png",
  description:
    "Agence digitale basée à Toamasina, Madagascar. Création de sites web, branding, marketing digital et accompagnement tech personnalisé.",
  telephone: "+261341060802",
  email: "contact@techbloom.agency",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toamasina",
    addressRegion: "Atsinanana",
    addressCountry: "MG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -18.1443,
    longitude: 49.4027,
  },
  areaServed: {
    "@type": "Country",
    name: "Madagascar",
  },
  sameAs: [
    "https://web.facebook.com/profile.php?id=61578188340191",
    "https://www.instagram.com/tech.bloom.agency",
  ],
  founder: {
    "@type": "Person",
    name: "Joro Sullivan RAKOTONIAINA",
    jobTitle: "Fondateur",
  },
  priceRange: "$$",
  openingHours: "Mo-Fr 08:00-18:00",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://techbloom.agency/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

/* =========================
   ROOT LAYOUT
   ========================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Preconnect pour performances */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      
      <body
        className={`${bitter.variable} ${montserrat.variable} font-sans antialiased`}
      >
        <AuthDialogProvider>
          <SessionProviderComp>
            <ThemeProvider 
              attribute="class" 
              defaultTheme="dark" 
              enableSystem
              disableTransitionOnChange
            >
              <Aoscompo>
                {/* Loader de progression */}
                <NextTopLoader 
                  color="#B8001F" 
                  height={3}
                  showSpinner={false}
                  shadow="0 0 10px #B8001F,0 0 5px #B8001F"
                />
                
                {/* Structure principale */}
                <div className="flex min-h-screen flex-col">
                  <Header />
                  
                  <main className="flex-1">
                    {children}
                  </main>
                  
                  <Footer />
                </div>
                
                {/* ScrollToTop Button */}
                <ScrollToTop />
              </Aoscompo>
            </ThemeProvider>
          </SessionProviderComp>
        </AuthDialogProvider>
      </body>
    </html>
  );
}