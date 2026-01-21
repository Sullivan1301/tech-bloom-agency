import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Bitter, Inter } from "next/font/google";

const bitter = Bitter({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-bitter",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Tech Bloom Agency – Agence digitale premium",
    description:
        "Agence digitale pour PME et entrepreneurs. Sites web, branding, marketing et solutions IA pour accélérer votre croissance.",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" className={`${bitter.variable} ${inter.variable}`}>
            <body className="bg-beige text-brand-blue min-h-screen antialiased">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
