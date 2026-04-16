'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HERO } from '@/lib/constants'
import Button from '@/components/ui/Button'
import { EMIL } from '@/components/ui/AnimateInView'

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ''
const whatsappUrl = `https://wa.me/${whatsappNumber}`

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  // Parallax background — Spec point 16/17
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-6%', '12%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05])

  const headlineWords = HERO.headline.split(' ')

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden bg-brand-text"
    >
      {/* Parallax video background — Spec point 16 */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute -inset-y-[10%] inset-x-0 will-change-transform"
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/katzen/hero-poster.jpg"
        >
          <source src="/videos/hero-desktop.mp4" type="video/mp4" />
          <source src="/videos/hero-mobile.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Multi-layer overlay — Spec point 17 (light, not dark) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.65) 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(45,45,58,0.10) 0%, transparent 30%, transparent 70%, rgba(45,45,58,0.30) 100%)',
        }}
      />

      {/* Decorative blur blobs — Spec point 30 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -left-20 w-96 h-96 bg-brand-accent/[0.06] rounded-full blur-3xl animate-float"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-20 w-[28rem] h-[28rem] bg-brand-accent/[0.05] rounded-full blur-3xl animate-float-delayed"
      />

      {/* Content */}
      <div className="relative z-10 max-w-content mx-auto px-6 py-20 flex flex-col items-center text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 16, filter: 'blur(8px)' }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: EMIL }}
          className="mb-8"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-hero.png"
            alt="KatzeFAIRsichert Logo"
            className="w-72 md:w-[24rem] lg:w-[28rem] h-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
          />
        </motion.div>

        {/*
          Word-by-word headline reveal — Spec point 4
          Implemented as pure CSS animation (not framer-motion) so the
          server-rendered markup matches hydration exactly and there is no
          flash of unstyled / re-flowed text on first paint.
        */}
        <h1 className="font-heading text-display font-bold text-white tracking-tight-3 leading-[1.02] drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)]">
          {headlineWords.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="inline-block hero-word"
              style={{ animationDelay: `${0.35 + i * 0.045}s` }}
            >
              {word}
              {i < headlineWords.length - 1 && '\u00A0'}
            </span>
          ))}
        </h1>

        <motion.p
          className="mt-6 font-body text-base md:text-lg text-white/90 max-w-2xl leading-[1.7] drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: EMIL, delay: 0.7 }}
        >
          {HERO.subline}
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: EMIL, delay: 0.85 }}
        >
          <Button href={whatsappUrl} className="uppercase tracking-wider text-lg">
            {HERO.cta}
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator — Spec point 17 */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="font-heading text-[11px] font-semibold uppercase tracking-eyebrow text-white/70 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
          Scroll
        </span>
        <div className="w-px h-12 bg-white/40 origin-top animate-scroll-draw" />
      </div>
    </section>
  )
}
