"use client";

import { useEffect, useState } from "react";
import { services } from "@/data/services";
import { motion } from "framer-motion";

export default function StickyNav() {
  const [activeId, setActiveId] = useState("");
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const navElement = document.getElementById("services-nav");
    if (!navElement) return;

    const navTopOffset = navElement.offsetTop + 200; // Après le hero

    const handleScroll = () => {
      // Fixer la nav après scroll
      setIsFixed(window.scrollY > navTopOffset - 80);

      // Trouver la section active
      const sections = services.map((service) => document.getElementById(service.id));
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && window.scrollY >= section.offsetTop - 150) {
          setActiveId(service.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 150; // Offset pour le header sticky
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div
      id="services-nav"
      className={`sticky z-40 transition-all duration-300 ${
        isFixed ? "top-0 bg-white shadow-lg border-b border-gray/20" : "relative bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-4">
        {/* Pills navigation */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => scrollToSection(service.id)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                activeId === service.id
                  ? "bg-navy text-white shadow-md scale-105"
                  : "bg-gray/10 text-gray hover:bg-gray/20"
              }`}
            >
              {service.title.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
