'use client'

import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'

const BuildAmazing = ({ isSpace }: { isSpace: boolean }) => {
  const processSteps = [
    {
      icon: 'mdi:lightbulb-on-outline',
      title: 'Stratégie & Vision',
      description: 'Nous analysons vos objectifs business et définissons une roadmap claire pour transformer votre vision en réalité.',
    },
    {
      icon: 'mdi:palette-outline',
      title: 'Design & Branding',
      description: 'Création d\'une identité visuelle premium qui reflète vos valeurs et capte l\'attention de votre audience.',
    },
    {
      icon: 'mdi:code-tags',
      title: 'Développement',
      description: 'Développement sur mesure avec les dernières technologies pour des performances optimales et une scalabilité garantie.',
    },
    {
      icon: 'mdi:rocket-launch-outline',
      title: 'Lancement & Croissance',
      description: 'Mise en ligne et optimisation continue pour maximiser vos conversions et votre croissance digitale.',
    },
  ]

  const keyFeatures = [
    {
      icon: 'mdi:brain',
      title: 'Intelligence Artificielle',
      description: 'Intégration d\'IA pour automatiser vos processus et améliorer l\'expérience utilisateur.',
    },
    {
      icon: 'mdi:chart-line',
      title: 'Performance Optimisée',
      description: 'Sites ultra-rapides et optimisés SEO pour maximiser votre visibilité et vos conversions.',
    },
    {
      icon: 'mdi:shield-check',
      title: 'Sécurité Avancée',
      description: 'Protection de vos données et celles de vos clients avec les meilleures pratiques de sécurité.',
    },
    {
      icon: 'mdi:cellphone-cog',
      title: 'Mobile-First',
      description: 'Design responsive pensé mobile d\'abord pour une expérience parfaite sur tous les appareils.',
    },
  ]

  return (
    <section className={`${isSpace ? '' : ''} bg-darkmode py-20 md:py-32`}>
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 lg:gap-20 items-start">
          {/* LEFT CONTENT */}
          <div
            className="col-span-1 space-y-8 sticky top-24"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
              <Icon icon="mdi:chart-timeline-variant" className="text-accent text-lg" />
              <span className="text-sm text-beige font-medium">
                Notre approche
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold font-bitter text-beige leading-tight">
              De l'idée à la{' '}
              <span className="text-gradient bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                croissance
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-beige/75 leading-relaxed max-w-xl font-light">
              Notre méthodologie éprouvée transforme vos ambitions en solutions digitales 
              performantes. Chaque étape est pensée pour maximiser votre ROI et accélérer 
              votre croissance.
            </p>

            {/* Process Steps */}
            <div className="pt-6 flex flex-col gap-6">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5 group"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-light/10 group-hover:from-accent/30 group-hover:to-accent-light/20 transition-all flex-shrink-0">
                    <Icon icon={step.icon} className="text-accent text-2xl" />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-bold font-bitter text-beige mb-2 group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-base text-beige/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Link
                href="/contact"
                className="btn btn-primary inline-flex items-center gap-3 group px-8 py-4 rounded-xl font-semibold"
              >
                <span>Découvrir notre processus</span>
                <Icon
                  icon="mdi:arrow-right"
                  className="text-xl transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="group glass-card p-8 hover:border-accent/30 transition-all duration-300 rounded-2xl"
                data-aos="fade-up"
                data-aos-delay={`${(index + 1) * 150}`}
                data-aos-duration="1000"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-light/10 group-hover:from-accent/30 group-hover:to-accent-light/20 transition-all mb-6">
                  <Icon icon={feature.icon} className="text-accent text-3xl" />
                </div>
                <h3 className="text-xl font-bold font-bitter text-beige mb-3 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-beige/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuildAmazing
