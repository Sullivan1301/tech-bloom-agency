'use client'

import Link from 'next/link'
import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

const WorkGrow = () => {
  const services = [
    {
      icon: 'mdi:web',
      title: 'Développement Web',
      description: 'Sites web sur mesure, e-commerce et applications web performantes avec les dernières technologies.',
      features: ['Next.js & React', 'E-commerce', 'API Integration'],
      color: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-400',
    },
    {
      icon: 'mdi:palette',
      title: 'Branding & Design',
      description: 'Identité visuelle premium, design system et stratégie de marque qui vous démarque de la concurrence.',
      features: ['Identité visuelle', 'Design System', 'UI/UX Design'],
      color: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400',
    },
    {
      icon: 'mdi:chart-line-variant',
      title: 'Marketing Digital',
      description: 'Stratégies marketing digital, SEO, publicités et campagnes qui génèrent des résultats mesurables.',
      features: ['SEO & SEM', 'Social Media', 'Content Strategy'],
      color: 'from-green-500/20 to-emerald-500/20',
      iconColor: 'text-green-400',
    },
    {
      icon: 'mdi:robot',
      title: 'Intelligence Artificielle',
      description: 'Intégration d\'IA pour automatiser vos processus, améliorer l\'expérience client et optimiser vos opérations.',
      features: ['Chatbots IA', 'Automatisation', 'Analyse prédictive'],
      color: 'from-orange-500/20 to-red-500/20',
      iconColor: 'text-orange-400',
    },
  ]

  return (
    <section className="bg-darklight py-20 md:py-32">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6">
            <Icon icon="mdi:briefcase-variant" className="text-accent text-lg" />
            <span className="text-sm text-beige font-medium">
              Nos services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold font-bitter text-beige mb-6 leading-tight">
            Solutions digitales{' '}
            <span className="text-gradient bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              sur mesure
            </span>
          </h2>
          <p className="text-lg md:text-xl text-beige/75 max-w-3xl mx-auto leading-relaxed font-light">
            Des services complets pour transformer votre présence digitale et 
            accélérer votre croissance. Chaque solution est pensée pour générer 
            des résultats concrets.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass-card p-8 md:p-10 hover:border-accent/30 transition-all duration-500 rounded-2xl relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              data-aos-duration="1000"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
              
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-light/10 group-hover:from-accent/30 group-hover:to-accent-light/20 transition-all mb-6">
                <Icon icon={service.icon} className={`text-3xl ${service.iconColor} group-hover:scale-110 transition-transform`} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold font-bitter text-beige mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-base text-beige/70 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="flex flex-wrap gap-3 mb-6">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-darkmode/50 text-xs font-medium text-beige/80 border border-dark_border/50"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-accent text-sm font-semibold group-hover:gap-3 transition-all"
              >
                <span>En savoir plus</span>
                <Icon
                  icon="mdi:arrow-right"
                  className="text-lg transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="400">
          <div className="inline-flex flex-col items-center gap-6 p-10 rounded-2xl glass-card border border-accent/20">
            <h3 className="text-2xl md:text-3xl font-bold font-bitter text-beige">
              Prêt à transformer votre présence digitale ?
            </h3>
            <p className="text-base text-beige/70 max-w-xl">
              Discutons de votre projet et découvrons comment nous pouvons 
              accélérer votre croissance.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="btn btn-primary px-8 py-4 rounded-xl font-semibold group"
              >
                <span>Obtenir un devis gratuit</span>
                <Icon
                  icon="mdi:arrow-right"
                  className="text-xl transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/portfolio"
                className="btn btn-outline border-beige/30 text-beige hover:bg-beige/10 px-8 py-4 rounded-xl font-semibold"
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkGrow
