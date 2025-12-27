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
   TYPOGRAPHY - Tech Bloom Agency
   Modern, clean, premium sans-serif pairing
   ========================= */

const bitter = Bitter({
  subsets: ["latin"],
  variable: "--font-bitter",
  display: "swap",
  weight: ["400", "600", "700"],
  preload: true,
  fallback: ["Georgia", "serif"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  preload: true,
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
});

/* =========================
   METADATA SEO - Tech Bloom Agency
   Premium positioning: Performance, Branding, AI
   ========================= */

export const metadata: Metadata = {
  title: {
    default: "Tech Bloom Agency – Solutions digitales premium | Performance, Branding & IA",
    template: "%s | Tech Bloom Agency",
  },
  description:
    "Transformez vos idées en solutions digitales scalables. Tech Bloom Agency combine stratégie, design premium et intelligence artificielle pour accélérer votre croissance. Agence digitale spécialisée en performance, branding et IA.",
  keywords: [
    "agence digitale",
    "développement web premium",
    "branding stratégique",
    "marketing digital performance",
    "intelligence artificielle",
    "solutions digitales scalables",
    "e-commerce",
    "design premium",
    "stratégie digitale",
    "Tech Bloom Agency",
    "Madagascar",
    "agence tech",
    "transformation digitale",
  ],
  authors: [
    { 
      name: "Tech Bloom Agency", 
      url: "https://techbloom.agency" 
    },
    {
      name: "Joro Sullivan RAKOTONIAINA",
      url: "https://techbloom.agency",
    },
  ],
  creator: "Tech Bloom Agency",
  publisher: "Tech Bloom Agency",
  metadataBase: new URL("https://techbloom.agency"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://techbloom.agency",
    title: "Tech Bloom Agency – Solutions digitales premium | Performance, Branding & IA",
    description:
      "Transformez vos idées en solutions digitales scalables. Agence digitale spécialisée en performance, branding et intelligence artificielle pour accélérer votre croissance.",
    siteName: "Tech Bloom Agency",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tech Bloom Agency – Agence digitale premium",
      },
    ],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Bloom Agency – Solutions digitales premium",
    description:
      "Transformez vos idées en solutions digitales scalables. Performance, Branding & Intelligence Artificielle.",
    images: ["/og-image.jpg"],
    creator: "@techbloomagency",
    site: "@techbloomagency",
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
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  verification: {
    // Google Search Console verification
    // google: "votre-code-verification",
  },
  category: "Digital Agency",
};

/* =========================
   VIEWPORT - Optimized for all devices
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
  colorScheme: "dark light",
};

/* =========================
   STRUCTURED DATA (JSON-LD)
   Tech Bloom Agency - Premium Digital Agency
   ========================= */

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://techbloom.agency/#organization",
  name: "Tech Bloom Agency",
  alternateName: "TBA",
  url: "https://techbloom.agency",
  logo: "https://techbloom.agency/logo.png",
  image: "https://techbloom.agency/og-image.jpg",
  description:
    "Agence digitale premium spécialisée en performance, branding et intelligence artificielle. Nous transformons les idées en solutions digitales scalables qui génèrent de la croissance.",
  telephone: "+261341060802",
  email: "contact@techbloom.agency",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toamasina",
    addressRegion: "Atsinanana",
    addressCountry: "MG",
    addressCountryName: "Madagascar",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -18.1443,
    longitude: 49.4027,
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Madagascar",
    },
    {
      "@type": "Place",
      name: "International",
    },
  ],
  sameAs: [
    "https://web.facebook.com/profile.php?id=61578188340191",
    "https://www.instagram.com/tech.bloom.agency",
    "https://www.linkedin.com/company/tech-bloom-agency",
    "https://twitter.com/techbloomagency",
  ],
  founder: {
    "@type": "Person",
    name: "Joro Sullivan RAKOTONIAINA",
    jobTitle: "Fondateur & CEO",
    url: "https://techbloom.agency",
  },
  foundingDate: "2024",
  priceRange: "$$$",
  openingHours: "Mo-Fr 08:00-18:00",
  slogan: "Transformez vos idées en solutions digitales scalables",
  knowsAbout: [
    "Développement Web",
    "Branding",
    "Marketing Digital",
    "Intelligence Artificielle",
    "E-commerce",
    "Stratégie Digitale",
  ],
  potentialAction: {
    "@type": "SearchAction",
    target: "https://techbloom.agency/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://techbloom.agency/#website",
  url: "https://techbloom.agency",
  name: "Tech Bloom Agency",
  description:
    "Agence digitale premium spécialisée en performance, branding et intelligence artificielle.",
  publisher: {
    "@id": "https://techbloom.agency/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://techbloom.agency/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

/* =========================
   ROOT LAYOUT
   Foundation for Tech Bloom Agency
   ========================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>

      <body
        className={`${bitter.variable} ${montserrat.variable} font-sans antialiased bg-darkmode text-beige selection:bg-accent selection:text-beige`}
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
                {/* Progress Loader - Premium accent color */}
                <NextTopLoader
                  color="#B8001F"
                  height={3}
                  showSpinner={false}
                  shadow="0 0 10px rgba(184, 0, 31, 0.3), 0 0 5px rgba(184, 0, 31, 0.2)"
                  easing="ease"
                  speed={200}
                />

                {/* Main Structure */}
                <div className="flex min-h-screen flex-col">
                  <Header />

                  <main className="flex-1 relative">
                    {children}
                  </main>

                  <Footer />
                </div>

                {/* Scroll to Top Button */}
                <ScrollToTop />
              </Aoscompo>
            </ThemeProvider>
          </SessionProviderComp>
        </AuthDialogProvider>
      </body>
    </html>
  );
}
