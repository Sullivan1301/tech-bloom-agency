import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
    return (
        <section className="py-32 bg-brand-bg-soft border-y border-brand-light-gray">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center space-y-12">
                <div className="space-y-6">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-red-rose">
                        Parlons de votre futur
                    </span>
                    <h2 className="text-4xl lg:text-7xl font-serif font-bold text-brand-primary leading-[0.95] tracking-tight max-w-4xl mx-auto">
                        Votre projet mérite <br />
                        <span className="text-brand-dark-blue opacity-50">une agilité techno—logique.</span>
                    </h2>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-6">
                    <Link
                        href="/contact"
                        className="btn-primary py-5 px-12 text-sm uppercase tracking-widest"
                    >
                        <span>Débuter un projet</span>
                        <ArrowRight size={18} className="ml-3" />
                    </Link>
                    
                    <Link
                        href="/portfolio"
                        className="group flex items-center text-brand-dark-blue font-bold text-sm uppercase tracking-widest hover:text-brand-red-rose transition-colors"
                    >
                        <span>Nos expertises</span>
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
