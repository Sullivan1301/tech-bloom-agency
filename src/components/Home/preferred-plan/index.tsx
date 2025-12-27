'use client'

import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'

const Preferred = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, StartupTech',
      company: 'StartupTech',
      image: '/images/hero/wise_white.png', // Placeholder - à remplacer par vraies photos
      quote: 'Tech Bloom Agency a transformé notre présence digitale. En 3 mois, notre trafic a augmenté de 300% et nos conversions de 150%.',
      rating: 5,
      results: '+300% trafic',
    },
    {
      name: 'Marc Dubois',
      role: 'Fondateur, EcoMarket',
      company: 'EcoMarket',
      image: '/images/hero/google_white.png',
      quote: 'Leur approche stratégique et leur expertise technique nous ont permis de lancer notre plateforme e-commerce en un temps record.',
      rating: 5,
      results: 'Lancement en 6 semaines',
    },
    {
      name: 'Amina Hassan',
      role: 'Directrice Marketing, GrowthLab',
      company: 'GrowthLab',
      image: '/images/hero/pay_white.png',
      quote: 'L\'intégration de l\'IA dans notre processus client a révolutionné notre service. Tech Bloom Agency comprend vraiment l\'innovation.',
      rating: 5,
      results: '+85% satisfaction client',
    },
  ]

  const achievements = [
    {
      icon: 'mdi:rocket-launch',
      value: '50+',
      label: 'Projets livrés',
      description: 'Avec succès',
    },
    {
      icon: 'mdi:trending-up',
      value: '+250%',
      label: 'Croissance moyenne',
      description: 'Pour nos clients',
    },
    {
      icon: 'mdi:clock-fast',
      value: '4.9/5',
      label: 'Satisfaction client',
      description: 'Basé sur 50+ projets',
    },
    {
      icon: 'mdi:earth',
      value: '15+',
      label: 'Pays servis',
      description: 'International',
    },
  ]

  return (
    <section className="bg-darkmode py-20 md:py-32">
      <div className="container">
        {/* Header */}
        <div
          className="text-center mb-16 md:mb-20"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6">
            <Icon icon="mdi:account-group" className="text-accent text-lg" />
            <span className="text-sm text-beige font-medium">Témoignages</span>
          </div>
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold font-bitter text-beige mb-6 leading-tight">
            La confiance de nos{' '}
            <span className="text-gradient bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              clients
            </span>
          </h2>
          <p className="text-lg md:text-xl text-beige/75 max-w-3xl mx-auto leading-relaxed font-light">
            Découvrez comment nous aidons les entreprises à transformer leur 
            présence digitale et à atteindre leurs objectifs de croissance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group glass-card p-8 hover:border-accent/30 transition-all duration-500 rounded-2xl flex flex-col"
              data-aos="fade-up"
              data-aos-delay={`${index * 150}`}
              data-aos-duration="1000"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Icon
                    key={i}
                    icon="mdi:star"
                    className="w-5 h-5 text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-base text-beige/80 leading-relaxed mb-6 flex-grow italic">
                "{testimonial.quote}"
              </p>

              {/* Result Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20 mb-6 w-fit">
                <Icon icon="mdi:chart-line" className="text-accent text-sm" />
                <span className="text-xs font-semibold text-accent">
                  {testimonial.results}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-dark_border/50">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-accent-light/10 flex items-center justify-center flex-shrink-0">
                  <Icon icon="mdi:account" className="text-accent text-xl" />
                </div>
                <div>
                  <div className="font-semibold text-beige">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-beige/60">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center group"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-light/10 group-hover:from-accent/30 group-hover:to-accent-light/20 transition-all mx-auto mb-4">
                <Icon icon={achievement.icon} className="text-accent text-3xl" />
              </div>
              <div className="text-4xl md:text-5xl font-bold font-bitter text-beige mb-2">
                {achievement.value}
              </div>
              <div className="text-base font-semibold text-beige mb-1">
                {achievement.label}
              </div>
              <div className="text-sm text-beige/60">
                {achievement.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Preferred
