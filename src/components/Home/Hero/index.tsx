'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import toast from 'react-hot-toast'

/* =========================
   HERO SECTION - Tech Bloom Agency
   ========================= */

export default function Hero() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
    terms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.terms) {
      toast.error('Veuillez accepter les conditions générales')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi')
      }
      
      toast.success('Demande envoyée avec succès ! Nous vous contacterons sous 24h.')
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        message: '',
        terms: false,
      })
    } catch (error) {
      toast.error('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const partners = [
    { src: '/images/hero/wise_white.png', alt: 'Wise' },
    { src: '/images/hero/google_white.png', alt: 'Google' },
    { src: '/images/hero/pay_white.png', alt: 'Pay' },
    { src: '/images/hero/stripe_white.png', alt: 'Stripe' },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-darkprimary via-primary/95 to-darkmode min-h-[90vh] flex items-center">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(252,250,238,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(252,250,238,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Gradient Orbs - Subtle */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />

      <div className="container relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 space-y-8" data-aos="fade-up" data-aos-duration="800">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all">
              <Icon icon="mdi:sparkles" className="text-accent text-lg" />
              <span className="text-sm text-beige font-medium tracking-wide">
                Performance • Branding • Intelligence Artificielle
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-5xl md:text-6xl xl:text-7xl font-bold font-bitter text-beige leading-[1.1] tracking-tight">
              Transformez vos{' '}
              <span className="relative inline-block">
                <span className="text-gradient bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
                  idées
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent/50 to-transparent rounded-full" />
              </span>{' '}
              en solutions digitales scalables
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-lg md:text-xl text-beige/75 leading-relaxed font-light">
              Tech Bloom Agency transforme votre vision en réalité digitale. 
              Nous combinons stratégie, design premium et technologies de pointe 
              pour créer des solutions qui génèrent de la croissance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link 
                href="/contact" 
                className="btn btn-primary group px-8 py-4 text-base font-semibold rounded-xl shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all"
              >
                <span>Obtenir un devis</span>
                <Icon 
                  icon="mdi:arrow-right" 
                  className="text-xl transition-transform group-hover:translate-x-1" 
                />
              </Link>

              <Link 
                href="/portfolio" 
                className="btn btn-outline border-beige/30 text-beige hover:bg-beige/10 hover:border-beige/50 px-8 py-4 text-base font-semibold rounded-xl backdrop-blur-sm transition-all"
              >
                <Icon icon="mdi:play-circle" className="text-xl" />
                <span>Voir nos réalisations</span>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-6">
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon
                    key={i}
                    icon="mdi:star"
                    className="w-5 h-5 text-accent"
                  />
                ))}
              </div>
              <div className="text-sm text-beige/70">
                <span className="font-semibold text-beige">4.9/5</span> basé sur{' '}
                <span className="font-semibold text-beige">50+ projets</span> livrés
              </div>
            </div>

            {/* Partners / Clients */}
            <div className="pt-8 border-t border-white/5">
              <p className="text-xs text-beige/50 uppercase tracking-wider mb-5 font-medium">
                Ils nous font confiance
              </p>
              <div className="flex flex-wrap items-center gap-8 opacity-60 hover:opacity-100 transition-opacity">
                {partners.map((partner, i) => (
                  <div
                    key={i}
                    className="grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
                  >
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      width={90}
                      height={28}
                      className="h-7 w-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-5" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
            <div className="glass-card p-8 md:p-10 shadow-2xl hover:shadow-glow transition-all duration-500 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent-light/20 backdrop-blur-sm">
                  <Icon icon="mdi:rocket-launch" className="text-accent text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-bitter text-beige">
                    Démarrons votre projet
                  </h3>
                  <p className="text-sm text-beige/60 mt-1">
                    Réponse sous 24h
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative group">
                    <Icon 
                      icon="mdi:account" 
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-beige/40 group-focus-within:text-accent text-lg pointer-events-none transition-colors" 
                    />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Prénom"
                      required
                      className="w-full pl-11 pr-4 py-3.5 bg-darkmode/40 border border-dark_border/50 rounded-xl text-beige placeholder-beige/40 focus:outline-none focus:border-accent/50 focus:bg-darkmode/60 transition-all backdrop-blur-sm"
                    />
                  </div>
                  <div className="relative group">
                    <Icon 
                      icon="mdi:account" 
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-beige/40 group-focus-within:text-accent text-lg pointer-events-none transition-colors" 
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Nom"
                      required
                      className="w-full pl-11 pr-4 py-3.5 bg-darkmode/40 border border-dark_border/50 rounded-xl text-beige placeholder-beige/40 focus:outline-none focus:border-accent/50 focus:bg-darkmode/60 transition-all backdrop-blur-sm"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="relative group">
                  <Icon 
                    icon="mdi:email" 
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-beige/40 group-focus-within:text-accent text-lg pointer-events-none transition-colors" 
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="votre@email.com"
                    required
                    className="w-full pl-11 pr-4 py-3.5 bg-darkmode/40 border border-dark_border/50 rounded-xl text-beige placeholder-beige/40 focus:outline-none focus:border-accent/50 focus:bg-darkmode/60 transition-all backdrop-blur-sm"
                  />
                </div>

                {/* Company */}
                <div className="relative group">
                  <Icon 
                    icon="mdi:office-building" 
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-beige/40 group-focus-within:text-accent text-lg pointer-events-none transition-colors" 
                  />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Entreprise (optionnel)"
                    className="w-full pl-11 pr-4 py-3.5 bg-darkmode/40 border border-dark_border/50 rounded-xl text-beige placeholder-beige/40 focus:outline-none focus:border-accent/50 focus:bg-darkmode/60 transition-all backdrop-blur-sm"
                  />
                </div>

                {/* Message */}
                <div className="relative group">
                  <Icon 
                    icon="mdi:message-text" 
                    className="absolute left-4 top-4 text-beige/40 group-focus-within:text-accent text-lg pointer-events-none transition-colors" 
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Parlez-nous de votre projet..."
                    rows={4}
                    required
                    className="w-full pl-11 pr-4 py-3.5 bg-darkmode/40 border border-dark_border/50 rounded-xl text-beige placeholder-beige/40 focus:outline-none focus:border-accent/50 focus:bg-darkmode/60 transition-all resize-none backdrop-blur-sm"
                  />
                </div>

                {/* Terms Checkbox */}
                <label className="flex items-start gap-3 text-sm text-beige/70 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 accent-accent cursor-pointer rounded"
                  />
                  <span className="group-hover:text-beige transition-colors leading-relaxed">
                    J'accepte les{' '}
                    <a href="/terms" className="underline text-accent hover:text-accent-light transition-colors">
                      Conditions Générales
                    </a>
                    {' '}et la{' '}
                    <a href="/privacy" className="underline text-accent hover:text-accent-light transition-colors">
                      Politique de Confidentialité
                    </a>
                  </span>
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full justify-center group disabled:opacity-50 disabled:cursor-not-allowed py-4 rounded-xl font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Icon icon="mdi:loading" className="text-xl animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <span>Envoyer la demande</span>
                      <Icon 
                        icon="mdi:send" 
                        className="text-xl transition-transform group-hover:translate-x-1" 
                      />
                    </>
                  )}
                </button>
              </form>

              {/* Trust Badge */}
              <div className="mt-6 flex items-center gap-2.5 text-xs text-beige/50">
                <Icon icon="mdi:shield-check" className="text-green-400/80 text-base" />
                <span>Vos données sont protégées et ne seront jamais partagées</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
