"use client";

/**
 * Google Analytics 4 - Events Custom
 * 
 * Implémente tous les événements requis par le CDN :
 * - cta_click: Tous les boutons CTA
 * - form_submit: Soumission formulaires
 * - portfolio_view: Visite fiche projet
 * - whatsapp_click: Clic bouton WA
 * - calendly_open: Ouverture Calendly
 */

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GA4Events() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page views automatiquement
    if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_GA_ID) {
      // @ts-ignore
      window.gtag = window.gtag || function() {
        // @ts-ignore
        (window.gtag.q = window.gtag.q || []).push(arguments);
      };

      // Page view
      // @ts-ignore
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: pathname,
      });
    }
  }, [pathname]);

  useEffect(() => {
    // Setup event listeners globaux
    
    // 1. CTA Clicks - Tous les boutons avec data-cta
    const handleCTAClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const ctaButton = target.closest('[data-cta]') as HTMLElement;
      
      if (ctaButton) {
        const ctaLabel = ctaButton.getAttribute('data-cta') || ctaButton.textContent?.trim() || 'Unknown';
        
        // @ts-ignore
        if (window.gtag) {
          // @ts-ignore
          window.gtag('event', 'cta_click', {
            cta_label: ctaLabel,
            page: pathname,
          });
        }
      }
    };

    document.addEventListener('click', handleCTAClick);

    // 2. WhatsApp Click
    const handleWhatsAppClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const waLink = target.closest('a[href*="wa.me"]') as HTMLAnchorElement;
      
      if (waLink) {
        // @ts-ignore
        if (window.gtag) {
          // @ts-ignore
          window.gtag('event', 'whatsapp_click', {
            source: pathname,
          });
        }

        // Track aussi Facebook Pixel Contact
        // @ts-ignore
        if (window.fbq) {
          // @ts-ignore
          window.fbq('track', 'Contact');
        }
      }
    };

    document.addEventListener('click', handleWhatsAppClick);

    // 3. Calendly Open (si popup)
    const handleCalendlyOpen = () => {
      // @ts-ignore
      if (window.gtag) {
        // @ts-ignore
        window.gtag('event', 'calendly_open', {
          source: pathname,
        });
      }
    };

    // Écouter l'événement custom Calendly
    document.addEventListener('calendly_popup_opened', handleCalendlyOpen);

    return () => {
      document.removeEventListener('click', handleCTAClick);
      document.removeEventListener('click', handleWhatsAppClick);
      document.removeEventListener('calendly_popup_opened', handleCalendlyOpen);
    };
  }, [pathname]);

  // Exposer des fonctions globales pour les composants
  useEffect(() => {
    if (typeof window !== "undefined") {
      // @ts-ignore
      window.trackGAEvent = function(eventName: string, params: object) {
        // @ts-ignore
        if (window.gtag) {
          // @ts-ignore
          window.gtag('event', eventName, params);
        }
      };

      // Form submit tracking
      // @ts-ignore
      window.trackFormSubmit = function(service: string) {
        // @ts-ignore
        if (window.gtag) {
          // @ts-ignore
          window.gtag('event', 'form_submit', { service });
        }
        
        // Facebook Pixel Lead
        // @ts-ignore
        if (window.fbq) {
          // @ts-ignore
          window.fbq('track', 'Lead');
        }
      };

      // Portfolio view tracking
      // @ts-ignore
      window.trackPortfolioView = function(projectSlug: string) {
        // @ts-ignore
        if (window.gtag) {
          // @ts-ignore
          window.gtag('event', 'portfolio_view', {
            project_slug: projectSlug,
          });
        }
      };
    }

    return () => {
      // @ts-ignore
      delete window.trackGAEvent;
      // @ts-ignore
      delete window.trackFormSubmit;
      // @ts-ignore
      delete window.trackPortfolioView;
    };
  }, []);

  return null; // Component headless
}

// Déclarations TypeScript pour les globals
declare global {
  interface Window {
    gtag?: Function;
    fbq?: Function;
    trackGAEvent?: (eventName: string, params: object) => void;
    trackFormSubmit?: (service: string) => void;
    trackPortfolioView?: (projectSlug: string) => void;
  }
}
