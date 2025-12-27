'use client'

import React, { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Icon } from '@iconify/react/dist/iconify.js'

/* =========================
   FOOTER DATA
   ========================= */

const footerSections = {
  services: [
    { name: 'Création de sites web', href: '/services/web-development' },
    { name: 'Branding & Design', href: '/services/branding' },
    { name: 'Marketing Digital', href: '/services/marketing' },
    { name: 'Stratégie Digitale', href: '/services/strategy' },
    { name: 'SEO & Analytics', href: '/services/seo' },
  ],
  entreprise: [
    { name: 'À propos', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Notre équipe', href: '/team' },
    { name: 'Carrières', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  ressources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Guides', href: '/guides' },
    { name: 'Études de cas', href: '/case-studies' },
    { name: 'Documentation', href: '/documentation' },
    { name: 'FAQ', href: '/faq' },
  ],
}

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://web.facebook.com/profile.php?id=61578188340191',
    icon: 'mdi:facebook',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/tech.bloom.agency',
    icon: 'mdi:instagram',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/techbloomagency',
    icon: 'mdi:linkedin',
  }
]

/* =========================
   FOOTER COMPONENT
   ========================= */

const Footer: FC = () => {
  const pathname = usePathname()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter subscription logic
    console.log('Newsletter subscription:', email)
    setSubscribed(true)
    setEmail('')
    
    setTimeout(() => setSubscribed(false), 3000)
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer
      className={`relative bg-darkmode bg-[url('/images/footer/ftr-bg.png')] bg-cover bg-no-repeat ${
        pathname === '/' ? 'pt-72 -mt-60' : 'pt-20'
      }`}
    >
      {/* Wave Separator (only on homepage) */}
      {pathname === '/' && (
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-darklight"
            />
          </svg>
        </div>
      )}

      <div className="bg-darklight pb-10 md:pb-16">
        <div className="container">
          {/* Top Section - Logo & Social */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-dark_border">
            {/* Logo */}
            <Link 
              href="/" 
              className="transition-transform hover:scale-105 duration-300"
              aria-label="Tech Bloom Agency - Accueil"
            >
              <Image
                src="/images/logo/logo.svg"
                alt="Tech Bloom Agency Logo"
                width={180}
                height={56}
                quality={100}
                className="h-12 w-auto"
              />
            </Link>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-11 w-11 items-center justify-center rounded-full bg-primary/30 transition-all duration-300 hover:bg-accent hover:scale-110 hover:shadow-glow"
                  aria-label={social.name}
                >
                  <Icon 
                    icon={social.icon} 
                    className="text-xl text-beige group-hover:text-white transition-colors" 
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pt-12">
            {/* Services Section */}
            <div className="lg:col-span-3">
              <h3 className="text-lg font-bold text-beige mb-4 font-bitter">
                Services
              </h3>
              <ul className="space-y-3">
                {footerSections.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-light hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <Icon 
                        icon="mdi:chevron-right" 
                        className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" 
                      />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Entreprise Section */}
            <div className="lg:col-span-3">
              <h3 className="text-lg font-bold text-beige mb-4 font-bitter">
                Entreprise
              </h3>
              <ul className="space-y-3">
                {footerSections.entreprise.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-light hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <Icon 
                        icon="mdi:chevron-right" 
                        className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" 
                      />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ressources Section */}
            <div className="lg:col-span-3">
              <h3 className="text-lg font-bold text-beige mb-4 font-bitter">
                Ressources
              </h3>
              <ul className="space-y-3">
                {footerSections.ressources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-light hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <Icon 
                        icon="mdi:chevron-right" 
                        className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" 
                      />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="lg:col-span-3">
              <h3 className="text-lg font-bold text-beige mb-4 font-bitter">
                Newsletter
              </h3>
              <p className="text-sm text-gray-light mb-4">
                Restez informé de nos dernières actualités et offres exclusives.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email*"
                  required
                  className="w-full bg-darkmode border border-dark_border rounded-lg py-3 px-4 pr-12 text-sm text-beige placeholder-gray focus:outline-none focus:border-accent transition-colors"
                  aria-label="Email pour newsletter"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-accent transition-colors"
                  aria-label="S'inscrire à la newsletter"
                >
                  <Icon 
                    icon="mdi:send" 
                    className="text-xl text-accent hover:text-white" 
                  />
                </button>
              </form>

              {subscribed && (
                <p className="text-xs text-green-400 mt-2 flex items-center gap-1">
                  <Icon icon="mdi:check-circle" />
                  Inscription réussie !
                </p>
              )}

              {/* Contact Info */}
              <div className="mt-6 space-y-2">
                <Link
                  href="tel:+261341060802"
                  className="flex items-center gap-2 text-sm text-gray-light hover:text-accent transition-colors"
                >
                  <Icon icon="mdi:phone" className="text-lg" />
                  +261 34 10 608 02
                </Link>
                <Link
                  href="mailto:sullivanjoro3@gmail.com"
                  className="flex items-center gap-2 text-sm text-gray-light hover:text-accent transition-colors"
                >
                  <Icon icon="mdi:email" className="text-lg" />
                  sullivanjoro3@gmail.com
                </Link>
                <p className="flex items-start gap-2 text-sm text-gray-light">
                  <Icon icon="mdi:map-marker" className="text-lg flex-shrink-0 mt-0.5" />
                  Madagascar
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section - Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 mt-12 border-t border-dark_border">
            <p className="text-sm text-gray-light text-center md:text-left">
              © {currentYear}{' '}
              <Link 
                href="/" 
                className="text-accent hover:text-accent-light transition-colors font-semibold"
              >
                Tech Bloom Agency
              </Link>
              . Tous droits réservés.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-light hover:text-accent transition-colors"
              >
                Confidentialité
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-light hover:text-accent transition-colors"
              >
                Conditions
              </Link>
              <Link
                href="/legal"
                className="text-sm text-gray-light hover:text-accent transition-colors"
              >
                Mentions légales
              </Link>
            </div>
          </div>

          {/* Made with love */}
          <div className="text-center pt-6">
            <p className="text-xs text-gray flex items-center justify-center gap-1">
              Fait avec <Icon icon="mdi:heart" className="text-accent animate-pulse" /> à Madagascar
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer