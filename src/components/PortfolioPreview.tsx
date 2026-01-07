import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function PortfolioPreview() {
    const featuredProjects = projects.slice(0, 3);

    return (
        <section className="py-20 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-2xl mb-8 md:mb-0">
                        <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-blue mb-4">
                            Nos Réalisations
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Découvrez quelques-uns des projets que nous avons accompagnés avec succès.
                        </p>
                    </div>
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center space-x-2 text-brand-red-cherry font-heading font-semibold hover:underline"
                    >
                        <span>Voir tout le portfolio</span>
                        <ArrowRight size={20} />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-brand-red-cherry hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative h-48 overflow-hidden bg-gray-100">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                <span className="inline-block text-xs font-heading font-semibold text-brand-red-cherry bg-brand-red-cherry/10 px-3 py-1 rounded-full mb-3">
                  {project.category}
                </span>
                                <h3 className="font-heading font-bold text-xl text-brand-blue mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
                                        >
                      {tag}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
