import { blogPosts } from "@/data/blog";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";

export default function Blog() {
    return (
        <div className="bg-brand-light">
            {/* Section En-tête de Liste de Blogs en Vedette */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-brand-light to-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-5xl lg:text-7xl font-sans font-bold text-brand-dark mb-8 leading-tight">
                        Le Blog Tech Bloom
                    </h1>
                    <p className="text-xl lg:text-2xl text-brand-gray max-w-4xl mx-auto leading-relaxed">
                        Conseils d'experts, tendances et guides pratiques pour accompagner la croissance des 
                        PME et entrepreneurs. Explorez l'univers du digital, du branding, du community management et du marketing.
                    </p>
                </div>
            </section>

            {/* Section Liste de Blogs */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {blogPosts.map((post) => (
                            <article 
                                key={post.id} 
                                className="group bg-white rounded-agency overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-brand-blue text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                                        {post.category}
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar size={16} className="text-brand-blue" />
                                            <span>{new Date(post.date).toLocaleDateString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Clock size={16} className="text-brand-blue" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-sans font-bold text-brand-dark mb-4 group-hover:text-brand-blue transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed mb-8 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto">
                                        <Link 
                                            href={`/blog/${post.id}`} 
                                            className="inline-flex items-center gap-2 text-brand-blue font-bold group-hover:gap-4 transition-all uppercase text-sm tracking-widest"
                                        >
                                            Lire l'article
                                            <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}
