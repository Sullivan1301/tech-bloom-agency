"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 bg-beige/95 backdrop-blur-sm z-50 border-b border-BorderLine">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent-light rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform">
                            <span className="text-white text-xl font-bold">TBA</span>
                        </div>

                        <span className="font-bitter font-semibold text-xl text-primary hidden sm:block">
              {SITE_CONFIG.name}
            </span>
                    </Link>

                    <div className="hidden lg:flex items-center space-x-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="font-sans text-primary hover:text-accent transition-colors duration-300 font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <Link
                            href="/contact"
                            className="bg-accent text-primary px-6 py-3 rounded-full font-sans font-medium hover:opacity-90 transition-opacity duration-300"
                        >
                            Devis gratuit
                        </Link>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-primary hover:text-accent transition-colors"
                        aria-label="Menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="lg:hidden bg-beige border-t border-BorderLine">
                    <div className="px-6 py-4 space-y-4">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block font-sans text-primary hover:text-accent transition-colors font-medium py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}

                        <Link
                            href="/contact"
                            className="block text-center bg-accent text-white px-6 py-3 rounded-full font-sans font-medium hover:opacity-90 transition-opacity"
                            onClick={() => setIsOpen(false)}
                        >
                            Devis gratuit
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
