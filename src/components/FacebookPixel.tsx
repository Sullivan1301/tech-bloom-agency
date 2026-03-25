"use client";

import { useEffect } from "react";

/**
 * Facebook Pixel - Chargé après 3s pour ne pas bloquer le LCP
 * 
 * Utilisation:
 * 1. Ajouter NEXT_PUBLIC_FB_PIXEL_ID dans .env.local
 * 2. Importer dans RootLayout ou page.tsx
 * 3. Le composant s'injecte automatiquement après 3 secondes
 */
export default function FacebookPixel() {
  useEffect(() => {
    const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
    
    if (!pixelId) {
      console.log("Facebook Pixel ID not configured");
      return;
    }

    // Attendre 3 secondes après hydration pour ne pas impacter le LCP
    const timer = setTimeout(() => {
      // @ts-ignore - fbq global
      window.fbq = window.fbq || function() {
        // @ts-ignore
        (window.fbq.callMethod ? window.fbq.callMethod.apply(window.fbq, arguments) : window.fbq.queue.push(arguments));
      };

      // @ts-ignore
      if (!window._fbq) window._fbq = window.fbq;
      
      // @ts-ignore
      window.fbq.push = window.fbq;
      // @ts-ignore
      window.fbq.loaded = true;
      // @ts-ignore
      window.fbq.version = '2.0';
      // @ts-ignore
      window.fbq.queue = [];

      // Initialisation
      // @ts-ignore
      window.fbq('init', pixelId);
      
      // Track pageview automatique
      // @ts-ignore
      window.fbq('track', 'PageView');

      console.log("✅ Facebook Pixel loaded after 3s delay");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return null; // Component headless - s'injecte dans le contexte global
}
