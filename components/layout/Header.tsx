'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '@/lib/constants'
import { EMIL } from '@/components/ui/AnimateInView'

export default function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // On subpages (Impressum, Datenschutz, …) there is no dark hero behind
  // the header — force the solid scrolled style so it stays visible.
  const solid = scrolled || !isHomePage

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
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

  // Lock scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[60px] md:h-[72px] flex items-center transition-all duration-600 ease-emil ${
          solid
            ? 'bg-white/85 backdrop-blur-2xl shadow-brand-sm border-b border-brand-border/60'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-content mx-auto w-full px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center transition-opacity duration-450 ease-emil hover:opacity-80"
          >
            <Image
              src="/images/logo-header.png"
              alt="KatzeFAIRsichert Logo"
              width={160}
              height={57}
              className={`h-9 md:h-11 w-auto transition-all duration-600 ease-emil ${
                solid ? '' : 'brightness-0 invert drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]'
              }`}
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`link-underline relative font-heading text-[0.9375rem] font-medium tracking-tight-2 transition-colors duration-450 ease-emil whitespace-nowrap ${
                  solid
                    ? 'text-brand-text hover:text-brand-accent'
                    : 'text-white hover:text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className={`md:hidden transition-colors duration-450 ease-emil ${
              solid ? 'text-brand-text hover:text-brand-accent' : 'text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]'
            }`}
            onClick={() => setMobileOpen(true)}
            aria-label="Menü öffnen"
          >
            <Menu size={26} strokeWidth={2.25} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-brand-text/50 backdrop-blur-sm z-[60]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: EMIL }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-2xl z-[70] flex flex-col shadow-brand-xl border-l border-brand-border/60"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 32 }}
            >
              <div className="flex items-center justify-between px-6 h-[72px] border-b border-brand-border/60">
                <Image
                  src="/images/logo-header.png"
                  alt="KatzeFAIRsichert"
                  width={140}
                  height={50}
                  className="h-9 w-auto"
                />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Menü schließen"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-brand-border bg-white text-brand-text hover:text-brand-accent hover:border-brand-accent transition-all duration-450 ease-emil"
                >
                  <X size={20} />
                </button>
              </div>
              <motion.nav
                className="flex flex-col p-6 gap-1"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
                }}
              >
                {NAV_LINKS.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    variants={{
                      hidden: { opacity: 0, x: 30 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EMIL } },
                    }}
                    className="link-underline relative font-heading text-base font-medium text-brand-text hover:text-brand-accent transition-colors duration-450 ease-emil py-3 px-2"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </motion.nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
