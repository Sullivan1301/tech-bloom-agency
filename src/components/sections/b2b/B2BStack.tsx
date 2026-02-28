"use client";
import { Code2, Server, Layout, Database } from "lucide-react";

const STACK = [
    {
        category: "Frontend",
        tech: "Next.js, React, Tailwind CSS, TypeScript",
        icon: Layout
    },
    {
        category: "Backend",
        tech: "Node.js, Express, PostgreSQL, Prisma",
        icon: Server
    },
    {
        category: "Outils",
        tech: "Git, Figma, Trello, Slack",
        icon: Code2
    },
    {
        category: "Hébergement",
        tech: "Vercel, AWS, DigitalOcean",
        icon: Database
    }
];

export default function B2BStack() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl lg:text-5xl font-serif font-bold text-brand-primary">Maîtrise technique</h2>
                    <p className="text-brand-gray font-medium uppercase tracking-widest text-sm">
                        Des stacks modernes pour des performances optimales.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {STACK.map((item, index) => (
                        <div key={index} className="p-8 border border-brand-light-gray rounded-agency-md hover:border-brand-primary transition-colors group">
                            <item.icon className="w-10 h-10 text-brand-red-rose mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-serif font-bold text-brand-primary mb-2">{item.category}</h3>
                            <p className="text-sm text-brand-gray font-medium leading-relaxed uppercase tracking-wider">
                                {item.tech}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
