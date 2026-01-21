import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";
import Image from "next/image";

export default function Blog() {
    return (
        <>
            <section className="pt-32 pb-20 bg-gradient-to-br from-brand-beige to-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-5xl lg:text-6xl font-heading font-bold text-brand-blue mb-6">
                        Blog
                    </h1>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Conseils pratiques, actualités et tendances du digital pour faire évoluer
                        votre entreprise.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <article
                                key={post.id}
                                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-brand-red-cherry hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative h-48 overflow-hidden bg-gray-100">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        priority={false}
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                                        <span className="inline-flex items-center space-x-1">
                                            <Calendar size={14} className="flex-shrink-0" />
                                            <time dateTime={post.date}>
                                                {new Date(post.date).toLocaleDateString('fr-FR', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </time>
                                        </span>
                                        <span className="inline-flex items-center space-x-1">
                                            <Clock size={14} className="flex-shrink-0" />
                                            <span>{post.readTime}</span>
                                        </span>
                                    </div>

                                    <span className="inline-block text-xs font-heading font-semibold text-brand-red-cherry bg-brand-red-cherry/10 px-3 py-1 rounded-full mb-3">
                                        {post.category}
                                    </span>

                                    <h3 className="font-heading font-bold text-xl text-brand-blue mb-3 line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    <div className="inline-flex items-center space-x-2 text-brand-red-cherry font-heading font-medium group-hover:underline">
                                        <span>Lire l'article</span>
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}