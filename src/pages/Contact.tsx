import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxTxC_N4Uj7CHZYGL6yrxOwrk8YPimG6pyTMBrBggwWkM4bE_xOPw4lQn1hUWF9P2wM/exec";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact - Tech Bloom Agency";
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.projectType || 'Demande de contact',
        message: formData.message
      }),
    });

    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });

    setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "sullivanjoro3@gmail.com",
      link: "mailto:sullivanjoro3@gmail.com"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Business",
      content: "+261 37 87 17 959",
      link: "https://wa.me/261378717959"
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+261 34 10 608 02",
      link: "tel:+261341060802"
    },
    {
      icon: MapPin,
      title: "Localisation",
      content: "Toamasina, Madagascar",
      link: null
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lundi - Vendredi, 8h - 17h (UTC+3)",
      link: null
    }
  ];

  const socialLinks = [
    { name: "Facebook", href: "https://web.facebook.com/profile.php?id=61578188340191" },
    { name: "Instagram", href: "https://www.instagram.com/tech.bloom.agency?igsh=MWh5cjdvajFlZmEwcQ==" },
    { name: "LinkedIn", href: "#" },
    { name: "TikTok", href: "#" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-tech-light dark:from-gray-900 via-white dark:via-gray-800 to-tech-light/50 dark:to-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <h1 className="font-bitter font-bold text-4xl md:text-5xl lg:text-6xl text-tech-primary dark:text-tech-light mb-6">
                Contactez-nous
              </h1>
              <p className="font-montserrat text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Prêt à faire éclore votre projet digital ? Parlons-en ensemble et créons quelque chose d'exceptionnel.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="animate-fade-in">
                <h2 className="font-bitter font-semibold text-3xl text-tech-primary dark:text-tech-light mb-8">
                  Restons en contact
                </h2>

                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="bg-tech-accent rounded-xl p-3">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                    <p className="font-montserrat font-medium text-tech-primary dark:text-tech-light">{info.title}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="font-montserrat text-gray-600 dark:text-gray-400 hover:text-tech-accent transition-colors duration-300"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="font-montserrat text-gray-600 dark:text-gray-400">{info.content}</p>
                    )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mb-8">
                  <h3 className="font-bitter font-semibold text-xl text-tech-primary mb-4">
                    Suivez-nous
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-tech-light hover:bg-tech-accent hover:text-white text-tech-primary px-4 py-2 rounded-full font-montserrat font-medium transition-all duration-300"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>

                <Card className="bg-tech-primary dark:bg-gray-800 text-white border-0">
                  <CardContent className="p-6">
                    <h4 className="font-bitter font-semibold text-xl mb-4">
                      Réponse garantie sous 24h
                    </h4>
                    <p className="font-montserrat text-white/90 dark:text-gray-300 text-sm leading-relaxed">
                      Nous nous engageons à vous répondre rapidement pour discuter de votre projet
                      et vous proposer des solutions adaptées à vos besoins et votre budget.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="bg-tech-light dark:bg-gray-800 rounded-2xl p-8 animate-slide-in-right border border-gray-200 dark:border-gray-700">
                <h2 className="font-bitter font-semibold text-2xl text-tech-primary dark:text-tech-light mb-6">
                  Envoyez-nous un message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-montserrat font-medium text-tech-primary dark:text-tech-light mb-2">
                        Nom complet *
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Votre nom"
                        required
                        className="border-gray-300 focus:border-tech-accent"
                      />
                    </div>
                    <div>
                      <label className="block font-montserrat font-medium text-tech-primary dark:text-tech-light mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="votre@email.com"
                        required
                        className="border-gray-300 focus:border-tech-accent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-montserrat font-medium text-tech-primary dark:text-tech-light mb-2">
                        Téléphone
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+261 37 87 17 959"
                        className="border-gray-300 focus:border-tech-accent"
                      />
                    </div>
                    <div>
                      <label className="block font-montserrat font-medium text-tech-primary dark:text-tech-light mb-2">
                        Type de projet *
                      </label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                        required
                      >
                        <SelectTrigger className="border-gray-300 focus:border-tech-accent">
                          <SelectValue placeholder="Sélectionnez un type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="site-web">Site web</SelectItem>
                          <SelectItem value="branding">Branding & Identité visuelle</SelectItem>
                          <SelectItem value="marketing">Marketing digital</SelectItem>
                          <SelectItem value="cm">Community Management</SelectItem>
                          <SelectItem value="accompagnement">Accompagnement digital</SelectItem>
                          <SelectItem value="maintenance">Maintenance & Support</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-montserrat font-medium text-tech-primary mb-2">
                      Message *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Décrivez votre projet, vos besoins et vos objectifs..."
                      rows={6}
                      required
                      className="border-gray-300 focus:border-tech-accent resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-tech-accent hover:bg-tech-accent/90 text-white font-montserrat font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Envoyer ma demande
                    <Send size={18} />
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="font-montserrat text-sm text-gray-600 mb-2">
                    Préférez-vous nous contacter sur WhatsApp ?
                  </p>
                  <a
                    href="https://wa.me/261378717959"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-tech-accent font-montserrat font-medium hover:gap-3 transition-all duration-300"
                  >
                    <MessageSquare size={18} />
                    Contacter sur WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

