"use client";

import { useScrollHeader } from "@/hooks/useScrollHeader";
import Navbar from "@/components/layout/Navbar";

export default function Header() {
  const scrolled = useScrollHeader(80);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Navbar avec comportement au scroll */}
      <Navbar scrolled={scrolled} />
    </header>
  );
}
