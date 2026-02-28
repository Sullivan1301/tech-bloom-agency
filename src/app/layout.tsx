import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Inter, Bitter } from "next/font/google";

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
    title: "Tech Bloom Agency – Agence digitale premium",
    description:
        "Concevoir des produits digitaux performants. Agence experte en UX/UI, développement Next.js et stratégie SEO.",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" className={`${inter.variable} ${bitter.variable}`}>
            <body className="bg-white text-brand-dark min-h-screen antialiased font-sans">
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}

