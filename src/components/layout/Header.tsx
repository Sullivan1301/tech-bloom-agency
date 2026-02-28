"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

export default function Header() {
  const [showTopBar, setShowTopBar] = useState(true);

  // Exemple : on peut faire disparaître le TopBar au scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar promo / contact */}
      {showTopBar && (
        <div className="bg-brand-dark text-white text-sm flex justify-center items-center h-8">
          Bienvenue chez Tech Bloom Agency ! Contactez-nous au 📞 +261 34 10 608 02
        </div>
      )}

      {/* Navbar */}
      <Navbar />
    </header>
  );
}
