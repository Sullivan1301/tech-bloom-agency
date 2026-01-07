"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-red-rose rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <span className="text-white text-xl font-bold">TB</span>
            </div>
            <span className="font-heading font-semibold text-xl text-brand-blue hidden sm:block">
              {SITE_CONFIG.name}
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-heading text-brand-blue hover:text-brand-red-cherry transition-colors duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-brand-red-cherry text-white px-6 py-3 rounded-full font-heading font-medium hover:bg-brand-red-cherry/90 transition-colors duration-300"
            >
              Devis gratuit
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-brand-blue hover:text-brand-red-cherry transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block font-heading text-brand-blue hover:text-brand-red-cherry transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block text-center bg-brand-red-cherry text-white px-6 py-3 rounded-full font-heading font-medium hover:bg-brand-red-cherry/90 transition-colors"
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
