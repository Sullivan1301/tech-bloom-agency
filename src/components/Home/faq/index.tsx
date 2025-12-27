'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'

const FaqQuestion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const faqData = [
    {
      title: 'Quels types de projets réalisez-vous ?',
      content:
        'Nous réalisons des sites web sur mesure, des plateformes e-commerce, des applications web, des stratégies de branding et d\'identité visuelle, ainsi que des solutions d\'intelligence artificielle. Nous travaillons avec des startups, des PME et des entreprises établies qui cherchent à transformer leur présence digitale.',
    },
    {
      title: 'Combien de temps prend un projet typique ?',
      content:
        'La durée dépend de la complexité du projet. Un site web vitrine prend généralement 4-6 semaines, une plateforme e-commerce 8-12 semaines, et une application web sur mesure 12-16 semaines. Nous fournissons toujours un planning détaillé lors de la phase de découverte.',
    },
    {
      title: 'Quels sont vos tarifs ?',
      content:
        'Nos tarifs sont adaptés à chaque projet car chaque client a des besoins uniques. Nous proposons des devis personnalisés basés sur vos objectifs, la complexité du projet et le périmètre fonctionnel. Contactez-nous pour obtenir un devis gratuit et sans engagement.',
    },
    {
      title: 'Travaillez-vous avec des clients internationaux ?',
      content:
        'Oui, absolument ! Nous servons des clients dans plus de 15 pays. Nous sommes basés à Madagascar mais travaillons avec des entreprises du monde entier. Nos équipes sont multilingues (français, anglais) et nous adaptons nos horaires pour faciliter la collaboration.',
    },
    {
      title: 'Proposez-vous un support après la livraison ?',
      content:
        'Oui, nous proposons plusieurs formules de support : maintenance mensuelle, support technique, mises à jour de sécurité, et optimisation continue. Nous restons votre partenaire à long terme pour garantir la performance et l\'évolution de votre solution digitale.',
    },
    {
      title: 'Comment intégrez-vous l\'intelligence artificielle dans vos projets ?',
      content:
        'Nous intégrons l\'IA de manière stratégique : chatbots intelligents pour le service client, automatisation de processus métier, analyse prédictive de données, et personnalisation de l\'expérience utilisateur. Chaque intégration est pensée pour générer de la valeur concrète pour votre business.',
    },
  ]

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6">
              <Icon icon="mdi:help-circle" className="text-accent text-lg" />
              <span className="text-sm text-beige font-medium">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold font-bitter text-beige mb-6 leading-tight">
              Questions{' '}
              <span className="text-gradient bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                fréquentes
              </span>
            </h2>
            <p className="text-lg text-beige/75 max-w-2xl mx-auto leading-relaxed font-light">
              Trouvez rapidement les réponses à vos questions sur nos services, 
              notre processus et notre approche.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`glass-card rounded-2xl overflow-hidden border transition-all duration-300 ${
                  activeIndex === index
                    ? 'border-accent/50 shadow-lg shadow-accent/10'
                    : 'border-dark_border/50 hover:border-dark_border'
                }`}
                data-aos="fade-up"
                data-aos-delay={`${index * 50}`}
              >
                <button
                  className="flex justify-between items-center w-full text-left p-6 md:p-8 bg-transparent border-none outline-none cursor-pointer group"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span className="text-lg md:text-xl font-bold font-bitter text-beige pr-4 group-hover:text-accent transition-colors">
                    {item.title}
                  </span>
                  <div className="flex-shrink-0">
                    <Icon
                      icon={
                        activeIndex === index
                          ? 'mdi:minus-circle'
                          : 'mdi:plus-circle'
                      }
                      className={`text-2xl transition-all duration-300 ${
                        activeIndex === index
                          ? 'text-accent rotate-0'
                          : 'text-beige/60 group-hover:text-accent'
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index
                      ? 'max-h-[500px] opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <p className="text-base text-beige/75 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-12 text-center glass-card p-8 rounded-2xl border border-accent/20"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p className="text-lg font-semibold text-beige mb-4">
              Vous avez d'autres questions ?
            </p>
            <p className="text-base text-beige/70 mb-6">
              Notre équipe est là pour vous aider. Contactez-nous et nous 
              répondrons à toutes vos questions.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary inline-flex items-center gap-3 group px-8 py-4 rounded-xl font-semibold"
            >
              <span>Nous contacter</span>
              <Icon
                icon="mdi:arrow-right"
                className="text-xl transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqQuestion
