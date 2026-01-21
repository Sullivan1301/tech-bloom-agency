"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Fermer avec Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Bloquer le scroll quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-beige/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <span className="text-white text-xl font-bold">TBA</span>
            </div>
            <span className="font-bitter font-semibold text-xl text-primary hidden sm:block">
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop menu */}
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
              className="bg-accent text-white px-6 py-3 rounded-full font-sans font-medium hover:opacity-90 hover:text-accent hover:bg-white transition-colors duration-500"
            >
              Devis gratuit
            </Link>
          </div>

          {/* Burger button */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="lg:hidden p-2 text-primary hover:text-accent transition-colors"
            aria-label="Menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu (animé) */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-out border-t border-gray-200 bg-beige
          ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
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
    </nav>
  );
}
