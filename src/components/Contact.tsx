"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validation basique
        if (!formData.name || !formData.email || !formData.message) {
            alert("Veuillez remplir tous les champs obligatoires.");
            return;
        }
        
        try {
            // Simulation d'envoi (à remplacer par votre API)
            console.log("Données du formulaire:", formData);
            
            // Envoi par email
            window.location.href = `mailto:${SITE_CONFIG.email}?subject=Message depuis le site&body=${encodeURIComponent(
                `Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone}
Entreprise: ${formData.company}
Service: ${formData.service}

Message: ${formData.message}`
            )}`;
            
            // Reset du formulaire
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                service: "",
                message: "",
            });
            
            alert("Message envoyé avec succès !");
        } catch (error) {
            console.error("Erreur lors de l'envoi:", error);
            alert("Une erreur est survenue lors de l'envoi du message.");
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            {/* HERO */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-brand-beige to-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-5xl lg:text-6xl font-heading font-bold text-brand-blue mb-6">
                        Contactez-nous
                    </h1>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Prêt à lancer votre projet digital ? Parlons-en ensemble. Nous répondons sous 24h.
                    </p>
                </div>
            </section>

            {/* CONTENT */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* FORM */}
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-brand-blue mb-6">
                                Envoyez-nous un message
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-heading font-medium text-gray-700 mb-2">
                                            Nom complet *
                                        </label>
                                        <input
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-heading font-medium text-gray-700 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-heading font-medium text-gray-700 mb-2">
                                        Votre message *
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="inline-flex items-center gap-2 bg-brand-red-cherry text-white px-8 py-4 rounded-full font-heading font-semibold"
                                >
                                    <Send size={20} />
                                    Envoyer le message
                                </button>
                            </form>
                        </div>

                        {/* INFOS */}
                        <div className="space-y-8">
                            <h2 className="text-3xl font-heading font-bold text-brand-blue">
                                Informations de contact
                            </h2>

                            {/* EMAIL */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center">
                                    <Mail className="text-white" />
                                </div>
                                <div>
                                    <p className="font-heading font-semibold text-brand-blue">Email</p>
                                    <a
                                        href={`mailto:${SITE_CONFIG.email}`}
                                        className="text-gray-700 hover:text-brand-red-cherry"
                                    >
                                        {SITE_CONFIG.email}
                                    </a>
                                </div>
                            </div>

                            {/* PHONE */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center">
                                    <Phone className="text-white" />
                                </div>
                                <div>
                                    <p className="font-heading font-semibold text-brand-blue">Téléphone</p>
                                    <a
                                        href={`tel:${SITE_CONFIG.phone}`}
                                        className="text-gray-700 hover:text-brand-red-cherry"
                                    >
                                        {SITE_CONFIG.phone}
                                    </a>
                                </div>
                            </div>

                            {/* ADDRESS */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center">
                                    <MapPin className="text-white" />
                                </div>
                                <div>
                                    <p className="font-heading font-semibold text-brand-blue">Adresse</p>
                                    <p className="text-gray-700">{SITE_CONFIG.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
