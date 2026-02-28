import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Inter, Bitter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import { SITE_CONFIG } from "@/lib/constants";
import ScrollProgress from "@/components/ui/ScrollProgress";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-inter",
    display: "swap",
});

const bitter = Bitter({
    subsets: ["latin"],
    weight: ["600", "700"],
    variable: "--font-bitter",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Tech Bloom Agency – Agence digitale premium",
        template: `%s | ${SITE_CONFIG.name}`,
    },
    description:
        "Concevoir des produits digitaux performants. Agence experte en UX/UI, développement Next.js et stratégie SEO.",
    metadataBase: SITE_CONFIG.url ? new URL(SITE_CONFIG.url) : null,
    alternates: {
        canonical: '/',
    },
    verification: {
        google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;

    return (
        <html lang="fr" className={`${inter.variable} ${bitter.variable}`}>
            <body className="bg-white text-brand-dark min-h-screen antialiased font-sans">
                <ScrollProgress />
                <Header />
                <main>{children}</main>
                <Footer />
                {gaId && <GoogleAnalytics gaId={gaId} />}
            </body>
        </html>
    );
}
