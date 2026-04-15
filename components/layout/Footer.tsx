import Image from 'next/image'
import { Instagram, Facebook } from 'lucide-react'
import { FOOTER } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="grain relative bg-brand-text text-white overflow-hidden py-20 md:py-24">
      {/* Top accent gradient line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent"
      />

      {/* Ambient glow blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-accent/20 rounded-full blur-3xl"
      />

      <div className="relative max-w-content mx-auto px-6 flex flex-col items-center text-center gap-8">
        {/* Logo */}
        <Image
          src="/images/logo-hero.png"
          alt="KatzeFAIRsichert Logo"
          width={320}
          height={114}
          className="w-44 md:w-56 h-auto drop-shadow-[0_0_32px_rgba(155,109,191,0.45)]"
        />

        {/* Wordmark */}
        <div className="font-heading text-2xl md:text-3xl font-semibold tracking-tight-2">
          Katze<span className="text-brand-accent">FAIR</span>sichert
        </div>

        {/* Inline nav links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          {FOOTER.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline relative font-body text-sm text-white/70 hover:text-white transition-colors duration-450 ease-emil"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social chips with label */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://www.instagram.com/katzenfairsichert?igsh=MWdoZnZwcWcybzA0Zg=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="KatzeFAIRsichert auf Instagram"
            className="group inline-flex items-center gap-2.5 h-11 px-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/80 hover:text-white hover:bg-brand-accent/20 hover:border-brand-accent/40 hover:-translate-y-0.5 transition-all duration-600 ease-emil shadow-brand-sm"
          >
            <Instagram
              size={18}
              strokeWidth={2}
              className="transition-transform duration-600 ease-spring group-hover:scale-110 group-hover:rotate-3"
            />
            <span className="font-heading text-sm font-semibold tracking-tight-2">Instagram</span>
          </a>
          <a
            href="https://www.facebook.com/people/Katzenfairsichert/61566952312045/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="KatzeFAIRsichert auf Facebook"
            className="group inline-flex items-center gap-2.5 h-11 px-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/80 hover:text-white hover:bg-brand-accent/20 hover:border-brand-accent/40 hover:-translate-y-0.5 transition-all duration-600 ease-emil shadow-brand-sm"
          >
            <Facebook
              size={18}
              strokeWidth={2}
              className="transition-transform duration-600 ease-spring group-hover:scale-110 group-hover:-rotate-3"
            />
            <span className="font-heading text-sm font-semibold tracking-tight-2">Facebook</span>
          </a>
        </div>

        {/* Dotted gradient separator with center accent dot */}
        <div className="flex items-center w-full max-w-md gap-3" aria-hidden="true">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-brand-glow" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/20 to-transparent" />
        </div>

        {/* Copyright */}
        <p className="font-body text-xs text-white/40 tnum">{FOOTER.copyright}</p>
      </div>
    </footer>
  )
}
