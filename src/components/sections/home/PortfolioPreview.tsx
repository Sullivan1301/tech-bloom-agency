"use client";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PortfolioPreview() {
    const featuredProjects = projects.slice(0, 3);

    return (
        <section className="py-32 bg-white">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8"
                >
                    <div className="max-w-2xl space-y-6">
                         <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-red-rose block">Portfolio</span>
                        <h2 className="text-4xl lg:text-7xl font-serif font-bold text-brand-primary leading-[0.9]">
                            Dernières <br />
                            <span className="text-brand-dark-blue opacity-50">éclosions.</span>
                        </h2>
                        <p className="text-lg text-brand-gray font-medium leading-relaxed uppercase tracking-wide">
                            Découvrez les produits digitaux que nous avons conçus et 
                            développés avec passion pour nos clients.
                        </p>
                    </div>
                    <Link
                        href="/portfolio"
                        className="group inline-flex items-center space-x-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-primary hover:text-brand-red-rose transition-colors pb-2 border-b-2 border-brand-light-gray hover:border-brand-red-rose"
                    >
                        <span>Tout le portfolio</span>
                        <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.8 }}
                            className="group space-y-8"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden bg-brand-bg-soft rounded-agency-md shadow-sm group-hover:shadow-2xl transition-all duration-500">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <div className="space-y-4">
                                <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red-rose">
                                  {project.category}
                                </span>
                                <h3 className="font-serif font-bold text-2xl text-brand-primary group-hover:text-brand-red-rose transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-brand-gray text-xs font-medium uppercase tracking-wider leading-relaxed line-clamp-2">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
