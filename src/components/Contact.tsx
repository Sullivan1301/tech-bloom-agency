
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxTxC_N4Uj7CHZYGL6yrxOwrk8YPimG6pyTMBrBggwWkM4bE_xOPw4lQn1hUWF9P2wM/exec";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
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
      icon: MapPin,
      title: "Localisation",
      content: "Madagascar • Remote",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-tech-primary dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-bitter font-bold text-3xl md:text-4xl text-white dark:text-tech-light mb-4">
            Contactez-nous
          </h2>
          <p className="font-montserrat text-lg text-white/90 dark:text-gray-300 max-w-2xl mx-auto">
            Prêt à faire éclore votre projet digital ? Parlons-en ensemble et créons quelque chose d'exceptionnel.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-fade-in">
            <h3 className="font-bitter font-semibold text-2xl text-white mb-8">
              Restons en contact
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-tech-accent rounded-xl p-3">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-montserrat font-medium text-white">{info.title}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="font-montserrat text-white/80 hover:text-white transition-colors duration-300"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="font-montserrat text-white/80">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="font-bitter font-semibold text-xl text-white mb-4">
                Réponse garantie sous 24h
              </h4>
              <p className="font-montserrat text-white/90 text-sm leading-relaxed">
                Nous nous engageons à vous répondre rapidement pour discuter de votre projet
                et vous proposer des solutions adaptées à vos besoins et votre budget.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 animate-slide-in-right border border-gray-200 dark:border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-montserrat font-medium text-tech-primary mb-2">
                    Nom complet
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
                  <label className="block font-montserrat font-medium text-tech-primary mb-2">
                    Email
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

              <div>
                <label className="block font-montserrat font-medium text-tech-primary mb-2">
                  Sujet
                </label>
                <Input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Sujet de votre message"
                  required
                  className="border-gray-300 focus:border-tech-accent"
                />
              </div>

              <div>
                <label className="block font-montserrat font-medium text-tech-primary mb-2">
                  Message
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Décrivez votre projet..."
                  rows={5}
                  required
                  className="border-gray-300 focus:border-tech-accent resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-tech-accent hover:bg-tech-accent/90 text-white font-montserrat font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Envoyer le message
                <Send size={18} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
