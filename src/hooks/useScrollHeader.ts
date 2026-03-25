"use client";

import { useState, useEffect } from "react";

export function useScrollHeader(threshold = 80) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [threshold]);

  return scrolled;
}
