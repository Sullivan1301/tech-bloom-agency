"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatItemProps {
  value: string;
  suffix?: string;
  label: string;
  index: number;
}

function AnimatedNumber({ value, suffix = "" }: { value: string; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const numericValue = parseInt(value);
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), numericValue);
      setDisplayValue(current.toString());

      if (step >= steps) {
        clearInterval(timer);
        setDisplayValue(value);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

function StatItem({ value, suffix, label, index }: StatItemProps) {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
      className="relative group"
    >
      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
        className="absolute -top-4 left-0 w-12 h-px bg-red origin-left"
      />

      {/* Number */}
      <div className="mb-4">
        <span className="text-[clamp(3.5rem,8vw,6rem)] font-heading font-black text-navy leading-none tracking-tight">
          <AnimatedNumber value={value} suffix={suffix} />
        </span>
      </div>

      {/* Label */}
      <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gray group-hover:text-blue transition-colors duration-300">
        {label}
      </p>

      {/* Hover effect */}
      <motion.div
        className="absolute -inset-6 bg-beige rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
    </motion.div>
  );
}

export default function StatsSection() {
  const stats = [
    { value: "20", suffix: "+", label: "Projets Réalisés" },
    { value: "10", suffix: "+", label: "Clients Satisfaits" },
    { value: "2", suffix: "+", label: "Années d'Expérience" },
    { value: "97", suffix: "%", label: "Engagement" },
  ];

  return (
    <section className="relative py-32 px-6 lg:px-12 bg-beige overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #0D2A40 1px, transparent 0)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-red mb-4">
            Nos Chiffres
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy leading-tight max-w-2xl">
            Des résultats qui parlent de notre
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-teal"> excellence</span>
          </h2>
        </motion.div>

        {/* Stats grid - Asymmetric layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              index={index}
            />
          ))}
        </div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-12 right-12 w-24 h-24 border border-navy/10 rounded-full hidden lg:block"
        />
      </div>
    </section>
  );
}
