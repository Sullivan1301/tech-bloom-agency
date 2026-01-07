"use client";

import { useState } from "react";
import { Metadata } from "next";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-br from-brand-beige to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-brand-blue mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Prêt à lancer votre projet digital ? Parlons-en ensemble.
              Nous répondons sous 24h.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-heading font-bold text-brand-blue mb-6">
                  Envoyez-nous un message
                </h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement
                  pour discuter de votre projet.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-heading font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-brand-red-cherry transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-heading font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-brand-red-cherry transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-heading font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-brand-red-cherry transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-heading font-medium text-gray-700 mb-2">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-brand-red-cherry transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-heading font-medium text-gray-700 mb-2">
                      Service souhaité *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-brand-red-cherry transition-colors"
                    >
                      <option value="">Sélectionnez un service</option>
                      <option value="web">Création de site web</option>
                      <option value="branding">Branding & Identité</option>
                      <option value="marketing">Marketing digital</option>
                      <option value="community">Community management</option>
                      <option value="maintenance">Maintenance & Support</option>
                      <option value="consulting">Audit & Accompagnement</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-heading font-medium text-gray-700 mb-2">
                      Votre message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-brand-red-cherry transition-colors resize-none"
                      placeholder="Décrivez votre projet..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto inline-flex items-center justify-center space-x-2 bg-brand-red-cherry text-white px-8 py-4 rounded-full font-heading font-semibold hover:bg-brand-red-cherry/90 transition-colors duration-300"
                  >
                    <Send size={20} />
                    <span>Envoyer le message</span>
                  </button>
                </form>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-heading font-bold text-brand-blue mb-6">
                    Informations de contact
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg text-brand-blue mb-1">
                          Email
                        </h3>
                        <a
                          href={`mailto:${SITE_CONFIG.email}`}
                          className="text-gray-700 hover:text-brand-red-cherry transition-colors"
                        >
                          {SITE_CONFIG.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg text-brand-blue mb-1">
                          Téléphone
                        </h3>
                        <a
                          href={`tel:${SITE_CONFIG.phone}`}
                          className="text-gray-700 hover:text-brand-red-cherry transition-colors"
                        >
                          {SITE_CONFIG.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg text-brand-blue mb-1">
                          Adresse
                        </h3>
                        <p className="text-gray-700">{SITE_CONFIG.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-beige rounded-2xl p-8">
                  <h3 className="font-heading font-bold text-xl text-brand-blue mb-4">
                    Horaires d'ouverture
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="flex justify-between">
                      <span className="font-medium">Lundi - Vendredi</span>
                      <span>08:00 - 20:00</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="font-medium">Samedi</span>
                      <span>09:00 - 18:00</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="font-medium">Dimanche</span>
                      <span>10:00 - 16:00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
