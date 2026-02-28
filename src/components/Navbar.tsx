"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/90 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm" : "bg-transparent py-6"
    }`}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo minimaliste Feel and Clic style */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-brand-primary rounded-agency-sm flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-sm">
            <span className="text-white text-sm font-bold tracking-tighter">TBA</span>
          </div>
          <span className={`font-serif font-bold text-xl tracking-tight transition-colors ${isScrolled || isOpen ? "text-brand-dark-blue" : "text-brand-dark-blue"}`}>
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* Desktop Links (Feel and Clic uses very clean typography) */}
        <div className="hidden md:flex items-center space-x-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-brand-red-cherry ${
                isScrolled ? "text-brand-dark-blue/80" : "text-brand-dark-blue"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary py-3 px-6 text-xs uppercase tracking-widest"
          >
            Débuter un projet
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden p-2 text-brand-dark"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu (Full screen modern overlay) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-[60] md:hidden flex flex-col p-8 pt-24 space-y-8"
          >
             <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 text-brand-dark"
            >
              <X size={32} />
            </button>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-4xl font-bold text-brand-dark hover:text-brand-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="pt-8 mt-auto border-t border-gray-100">
               <Link
                href="/contact"
                className="block text-center bg-brand-blue text-white py-5 rounded-agency text-lg font-bold"
                onClick={() => setIsOpen(false)}
              >
                Parlons de votre projet
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

