"use client";
import AnimatedCounter from "@/components/AnimatedCounter";
import { stats } from "@/data/stats";
import { Section } from "@/components/ui/Section";

export default function StatsSection() {
  return (
    <Section padding="lg" className="bg-navy">
      <div className="grid md:grid-cols-3 gap-12 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="space-y-4">
            <AnimatedCounter 
              value={`${stat.value}${stat.suffix}`} 
              duration={2}
              className="text-5xl md:text-7xl font-heading font-bold text-red"
            />
            <p className="text-lg text-white/80 font-body uppercase tracking-widest">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
