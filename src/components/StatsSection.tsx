import { STATS } from "@/lib/constants";

export default function StatsSection() {
    return (
        <section className="py-16 bg-brand-blue-dark text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {STATS.map((stat, index) => (
                        <div key={index} className="space-y-2">
                            <p className="text-4xl lg:text-5xl font-heading font-bold text-brand-red-cherry">
                                {stat.value}
                            </p>
                            <p className="text-lg text-gray-300">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
