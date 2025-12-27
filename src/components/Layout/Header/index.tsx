'use client'

import { usePathname } from 'next/navigation'
import { useContext, useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import { Icon } from '@iconify/react/dist/iconify.js'

import Logo from './Logo'
import HeaderLink from './Navigation/HeaderLink'
import MobileHeaderLink from './Navigation/MobileHeaderLink'
import ThemeToggler from './ThemeToggler'
import { headerData } from './Navigation/menuData'

import Signin from '@/components/Auth/SignIn'
import SignUp from '@/components/Auth/SignUp'
import { SuccessfullLogin } from '@/components/Auth/AuthDialog/SuccessfulLogin'
import { FailedLogin } from '@/components/Auth/AuthDialog/FailedLogin'
import { UserRegistered } from '@/components/Auth/AuthDialog/UserRegistered'
import AuthDialogContext from '@/app/context/AuthDialogContext'

/* =========================
   HEADER COMPONENT
   ========================= */

const Header: React.FC = () => {
  const pathUrl = usePathname()
  const { theme } = useTheme()
  const authDialog = useContext(AuthDialogContext)

  // States
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)

  // Refs
  const signInRef = useRef<HTMLDivElement>(null)
  const signUpRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // Scroll handler
  const handleScroll = () => {
    setSticky(window.scrollY >= 80)
  }

  // Click outside handler
  const handleClickOutside = (event: MouseEvent) => {
    if (signInRef.current && !signInRef.current.contains(event.target as Node)) {
      setIsSignInOpen(false)
    }
    if (signUpRef.current && !signUpRef.current.contains(event.target as Node)) {
      setIsSignUpOpen(false)
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false)
    }
  }

  // Escape key handler
  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsSignInOpen(false)
      setIsSignUpOpen(false)
      setNavbarOpen(false)
    }
  }

  // Effects
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscapeKey)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [navbarOpen])

  useEffect(() => {
    document.body.style.overflow = 
      (isSignInOpen || isSignUpOpen || navbarOpen) ? 'hidden' : ''
  }, [isSignInOpen, isSignUpOpen, navbarOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          sticky
            ? 'h-20 bg-primary/95 backdrop-blur-md shadow-lg dark:shadow-primary/20'
            : 'h-24 bg-primary shadow-none'
        }`}
      >
        <div className="container mx-auto flex h-full items-center justify-between px-6">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav 
            className="hidden lg:flex grow items-center justify-center gap-8"
            aria-label="Main navigation"
          >
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 xl:gap-4">
            {/* Theme Toggler */}
            <ThemeToggler />

            {/* Sign In Button - Desktop */}
            <button
              onClick={() => setIsSignInOpen(true)}
              className="hidden lg:flex items-center gap-2 btn btn-outline border-beige text-beige hover:bg-beige hover:text-primary transition-all"
              aria-label="Sign In"
            >
              <Icon icon="mdi:login" className="text-lg" />
              <span>Sign In</span>
            </button>

            {/* Sign Up Button - Desktop */}
            <button
              onClick={() => setIsSignUpOpen(true)}
              className="hidden lg:flex items-center gap-2 btn btn-primary"
              aria-label="Sign Up"
            >
              <Icon icon="mdi:account-plus" className="text-lg" />
              <span>Sign Up</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={navbarOpen}
            >
              <span 
                className={`block w-6 h-0.5 bg-beige transition-all duration-300 ${
                  navbarOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span 
                className={`block w-6 h-0.5 bg-beige transition-all duration-300 ${
                  navbarOpen ? 'opacity-0' : ''
                }`}
              />
              <span 
                className={`block w-6 h-0.5 bg-beige transition-all duration-300 ${
                  navbarOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {navbarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setNavbarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <aside
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-full max-w-xs bg-darkmode shadow-2xl transform transition-transform duration-300 z-50 ${
          navbarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile navigation"
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-dark_border">
          <h2 className="text-xl font-bold text-beige font-bitter">Menu</h2>
          <button
            onClick={() => setNavbarOpen(false)}
            className="p-2 rounded-lg hover:bg-darklight transition-colors"
            aria-label="Close mobile menu"
          >
            <Icon icon="mdi:close" className="text-2xl text-beige" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <nav className="flex flex-col p-6 space-y-2">
          {headerData.map((item, index) => (
            <MobileHeaderLink key={index} item={item} />
          ))}

          {/* Mobile Auth Buttons */}
          <div className="mt-6 flex flex-col gap-3 pt-6 border-t border-dark_border">
            <button
              onClick={() => {
                setIsSignInOpen(true)
                setNavbarOpen(false)
              }}
              className="btn btn-outline border-beige text-beige hover:bg-beige hover:text-primary w-full justify-center"
            >
              <Icon icon="mdi:login" className="text-lg" />
              <span>Sign In</span>
            </button>
            <button
              onClick={() => {
                setIsSignUpOpen(true)
                setNavbarOpen(false)
              }}
              className="btn btn-primary w-full justify-center"
            >
              <Icon icon="mdi:account-plus" className="text-lg" />
              <span>Sign Up</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Sign In Modal */}
      {isSignInOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="signin-title"
        >
          <div
            ref={signInRef}
            className="relative w-full max-w-md bg-white dark:bg-darklight rounded-2xl shadow-2xl overflow-hidden animate-fadeIn"
          >
            <button
              onClick={() => setIsSignInOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-darkmode transition-colors z-10"
              aria-label="Close Sign In Modal"
            >
              <Icon icon="mdi:close" className="text-2xl dark:text-beige" />
            </button>
            <div className="p-8">
              <Signin signInOpen={(value: boolean) => setIsSignInOpen(value)} />
            </div>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {isSignUpOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="signup-title"
        >
          <div
            ref={signUpRef}
            className="relative w-full max-w-md bg-white dark:bg-darklight rounded-2xl shadow-2xl overflow-hidden animate-fadeIn"
          >
            <button
              onClick={() => setIsSignUpOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-darkmode transition-colors z-10"
              aria-label="Close Sign Up Modal"
            >
              <Icon icon="mdi:close" className="text-2xl dark:text-beige" />
            </button>
            <div className="p-8">
              <SignUp signUpOpen={(value: boolean) => setIsSignUpOpen(value)} />
            </div>
          </div>
        </div>
      )}

      {/* Auth Dialogs */}
      <div 
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          authDialog?.isSuccessDialogOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <SuccessfullLogin />
      </div>

      <div 
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          authDialog?.isFailedDialogOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <FailedLogin />
      </div>

      <div 
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          authDialog?.isUserRegistered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <UserRegistered />
      </div>
    </>
  )
}

export default Header