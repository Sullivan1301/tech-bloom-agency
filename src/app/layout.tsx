import type { Metadata } from "next";
import { Bitter, Montserrat } from "next/font/google";
import "./globals.css";

const font = Bitter({ 
    subsets: ["latin"],
    variable: "--font-bitter",
    display: "swap",
  });

const headingFont = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    display: "swap",
  });

export const metadata: Metadata = {
  title: "Tech Bloom Agency - De la stratégie à l'éclosion digitale | Agence digitale",
  description: "Agence digitale basée à Madagascar. Spécialisée dans la création de sites web, le branding, le marketing digital et l'accompagnement tech personnalisé.",
  keywords: "agence digitale Madagascar, création site web, branding, marketing digital, community management, Toamasina, transformation digitale, agence web Madagascar",
  authors: [{ name: "Tech Bloom Agency - Joro Sullivan RAKOTONIAINA" }],
  metadataBase: new URL('https://techbloomagency.vercel.app/'),
  openGraph: {
    type: "website",
    url: "https://techbloomagency.vercel.app/",
    title: "Tech Bloom Agency - De la stratégie à l'éclosion digitale",
    description: "Agence digitale basée à Madagascar. Spécialisée dans la création de sites web, le branding, le marketing digital et l'accompagnement tech personnalisé.",
    images: [{ url: "https://drive.google.com/file/d/187wPIyiwUHqAz7f1RitEq9r58P8NMd1q/view?usp=drive_link" }],
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Tech Bloom Agency",
        url: "https://techbloomagency.vercel.app/",
        logo: "https://drive.google.com/file/d/187wPIyiwUHqAz7f1RitEq9r58P8NMd1q/view?usp=drive_link",
        "@id": "https://techbloomagency.vercel.app/",
        "telephone": "+261 34 10 608 02",
        "address": {
            "@type": "PostalAddress",
            streetAddress: "Rue de Madagascar",
            addressLocality: "Toamasina",
            postalCode: "1000",
            addressCountry: "MG",
        },
        "openingHours": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "08:00",
            "closes": "20:00",
        },
        "sameAs": [
            "https://www.facebook.com/profile.php?id=61578188340191",
            "https://www.instagram.com/tech.bloom.agency",
            "https://twitter.com/tech_bloom_agency",
            "https://www.linkedin.com/company/tech-bloom-agency",
        ],
        "founder":{
            "@type": "Person",
            "name": "Joro Sullivan RAKOTONIAINA",
        }
    };

  return (
    <html lang="fr" className="scroll-smooth">
        <body className={`${font.variable} ${headingFont.variable} font-sans`}>
            {children}
            <script 
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd) }}
            />
        </body>
    </html>
  );
}
