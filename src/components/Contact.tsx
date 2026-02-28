"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import CTASection from "@/components/CTASection";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "Web",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoUrl = `mailto:${SITE_CONFIG.email}?subject=Contact Tech Bloom Agency - ${formData.service}&body=${encodeURIComponent(
            `Nom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\nEntreprise: ${formData.company}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;
    };

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-brand-light">
            {/* Section En-tête */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-brand-light to-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-5xl lg:text-7xl font-sans font-bold text-brand-dark mb-8 leading-tight">
                        Parlons de votre projet
                    </h1>
                    <p className="text-xl lg:text-2xl text-brand-gray max-w-4xl mx-auto leading-relaxed">
                        Faites le premier pas vers une présence digitale premium. Que vous soyez une PME 
                        ou un entrepreneur, nous sommes là pour transformer vos idées en réalité.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        
                        {/* Section Formulaire de Contact */}
                        <div className="bg-white p-8 lg:p-12 rounded-agency shadow-xl border border-gray-100">
                            <h2 className="text-3xl font-sans font-bold text-brand-dark mb-8">Envoyez-nous un message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-brand-gray uppercase tracking-wider">Nom complet</label>
                                        <input name="name" required onChange={handleChange} className="w-full bg-brand-light border-none rounded-agency p-4 focus:ring-2 focus:ring-accent transition-all" placeholder="Jean Dupont" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-brand-gray uppercase tracking-wider">Email</label>
                                        <input name="email" type="email" required onChange={handleChange} className="w-full bg-brand-light border-none rounded-agency p-4 focus:ring-2 focus:ring-accent transition-all" placeholder="jean@exemple.com" />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-brand-gray uppercase tracking-wider">Téléphone</label>
                                        <input name="phone" onChange={handleChange} className="w-full bg-brand-light border-none rounded-agency p-4 focus:ring-2 focus:ring-accent transition-all" placeholder="+261 -- -- --- --" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-brand-gray uppercase tracking-wider">Service souhaité</label>
                                        <select name="service" onChange={handleChange} className="w-full bg-brand-light border-none rounded-agency p-4 focus:ring-2 focus:ring-accent transition-all">
                                            <option value="Web">Création de site web</option>
                                            <option value="Branding">Branding & Design</option>
                                            <option value="Marketing">Marketing Digital</option>
                                            <option value="Community">Community Management</option>
                                            <option value="IA">Solutions IA</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-brand-gray uppercase tracking-wider">Message</label>
                                    <textarea name="message" required rows={5} onChange={handleChange} className="w-full bg-brand-light border-none rounded-agency p-4 focus:ring-2 focus:ring-accent transition-all resize-none" placeholder="Décrivez votre projet en quelques mots..." />
                                </div>
                                <button type="submit" className="w-full bg-brand-blue text-white py-5 rounded-agency font-sans font-bold text-lg hover:shadow-2xl hover:opacity-90 transition-all flex items-center justify-center gap-3">
                                    <Send size={20} />
                                    Démarrer la collaboration
                                </button>
                            </form>
                        </div>

                        {/* Section Infos de Contact */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-sans font-bold text-brand-dark mb-8">Coordonnées</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-6 group">
                                        <div className="w-14 h-14 bg-white rounded-agency flex items-center justify-center shadow-md group-hover:bg-brand-blue group-hover:text-white transition-all">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-brand-gray uppercase tracking-wider mb-1">Email</p>
                                            <a href={`mailto:${SITE_CONFIG.email}`} className="text-xl font-sans font-bold text-brand-dark hover:text-brand-blue transition-colors">{SITE_CONFIG.email}</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-6 group">
                                        <div className="w-14 h-14 bg-white rounded-agency flex items-center justify-center shadow-md group-hover:bg-brand-blue group-hover:text-white transition-all">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-brand-gray uppercase tracking-wider mb-1">Téléphone</p>
                                            <a href={`tel:${SITE_CONFIG.phone}`} className="text-xl font-sans font-bold text-brand-dark hover:text-brand-blue transition-colors">{SITE_CONFIG.phone}</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-6 group">
                                        <div className="w-14 h-14 bg-white rounded-agency flex items-center justify-center shadow-md group-hover:bg-brand-blue group-hover:text-white transition-all">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-brand-gray uppercase tracking-wider mb-1">Localisation</p>
                                            <p className="text-xl font-sans font-bold text-brand-dark">{SITE_CONFIG.address}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl font-sans font-bold text-brand-dark mb-8">Horaires & Réseaux</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-6">
                                        <div className="w-14 h-14 bg-white rounded-agency flex items-center justify-center shadow-md">
                                            <Clock size={24} className="text-brand-blue" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-brand-gray uppercase tracking-wider mb-1">Disponibilité</p>
                                            <p className="text-lg text-gray-700 font-medium">Lundi - Vendredi : 08h00 - 18h00</p>
                                            <p className="text-lg text-gray-700 font-medium">Samedi : 09h00 - 12h00</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <a href={SITE_CONFIG.social.facebook} target="_blank" className="w-14 h-14 bg-white rounded-agency flex items-center justify-center shadow-md hover:bg-brand-dark hover:text-white transition-all">
                                            <Facebook size={24} />
                                        </a>
                                        <a href={SITE_CONFIG.social.instagram} target="_blank" className="w-14 h-14 bg-white rounded-agency flex items-center justify-center shadow-md hover:bg-brand-dark hover:text-white transition-all">
                                            <Instagram size={24} />
                                        </a>
                                        <a href={SITE_CONFIG.social.linkedin} target="_blank" className="w-14 h-14 bg-white rounded-agency flex items-center justify-center shadow-md hover:bg-brand-dark hover:text-white transition-all">
                                            <Linkedin size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}
