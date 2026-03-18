'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE, NAV_LINKS } from '@/lib/constants'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-200 h-[60px] md:h-[72px] flex items-center ${
          scrolled ? 'shadow-[0_2px_8px_rgba(0,0,0,0.06)]' : ''
        }`}
      >
        <div className="max-w-content mx-auto w-full px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src="/images/logo.png"
              alt="KatzeFAIRsichert Logo"
              width={48}
              height={48}
              className="w-12 h-12 brightness-0"
            />
            <span className="font-heading font-bold text-xl text-brand-text">
              {SITE.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-heading text-[0.9375rem] font-medium text-brand-text hover:text-brand-accent transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-brand-text hover:text-brand-accent transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Menü öffnen"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-72 bg-white z-50 flex flex-col shadow-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
            >
              <div className="flex items-center justify-between px-6 h-[60px] border-b border-brand-border">
                <span className="font-heading font-bold text-brand-text">Menü</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Menü schließen"
                  className="text-brand-text hover:text-brand-accent transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-col p-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-heading text-[0.9375rem] font-medium text-brand-text hover:text-brand-accent transition-colors py-3 px-2 border-b border-brand-border last:border-0"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
