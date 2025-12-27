'use client'

import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

const Counter = () => {
  const stats = [
    {
      icon: 'mdi:rocket-launch',
      value: '50+',
      label: 'Projets livrés',
      description: 'Avec succès et dans les délais',
      color: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-400',
    },
    {
      icon: 'mdi:trending-up',
      value: '+250%',
      label: 'Croissance moyenne',
      description: 'Augmentation du trafic pour nos clients',
      color: 'from-green-500/20 to-emerald-500/20',
      iconColor: 'text-green-400',
    },
    {
      icon: 'mdi:star',
      value: '4.9/5',
      label: 'Satisfaction client',
      description: 'Basé sur 50+ projets et témoignages',
      color: 'from-yellow-500/20 to-orange-500/20',
      iconColor: 'text-yellow-400',
    },
    {
      icon: 'mdi:earth',
      value: '15+',
      label: 'Pays servis',
      description: 'Clients internationaux satisfaits',
      color: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400',
    },
  ]

  return (
    <section className="bg-darklight py-20 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group glass-card p-8 text-center hover:border-accent/30 transition-all duration-500 rounded-2xl relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              data-aos-duration="1000"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
              
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-light/10 group-hover:from-accent/30 group-hover:to-accent-light/20 transition-all mx-auto mb-6">
                <Icon icon={stat.icon} className={`text-4xl ${stat.iconColor} group-hover:scale-110 transition-transform`} />
              </div>

              {/* Value */}
              <div className="text-5xl md:text-6xl font-bold font-bitter text-beige mb-3 group-hover:text-accent transition-colors">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-lg font-semibold text-beige mb-2">
                {stat.label}
              </div>

              {/* Description */}
              <div className="text-sm text-beige/60 leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Counter
