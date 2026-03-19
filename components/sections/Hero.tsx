'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { HERO } from '@/lib/constants'
import Button from '@/components/ui/Button'

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ''
const whatsappUrl = `https://wa.me/${whatsappNumber}`

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // Play/pause video based on visibility
  useEffect(() => {
    const video = videoRef.current
    const section = sectionRef.current
    if (!video || !section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/katzen/hero-katzen.jpg"
      >
        <source src="/videos/hero-desktop.mp4" type="video/mp4" />
        <source src="/videos/hero-mobile.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-content mx-auto px-6 py-20 flex flex-col items-center text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-6"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-hero.png"
            alt="KatzeFAIRsichert Logo"
            className="w-72 md:w-[24rem] lg:w-[28rem] h-auto drop-shadow-lg"
          />
        </motion.div>

        <motion.h1
          className="font-heading text-[2rem] md:text-[3rem] lg:text-[3.5rem] font-bold text-white leading-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {HERO.headline}
        </motion.h1>

        <motion.p
          className="mt-4 font-body text-base md:text-lg text-white/90 max-w-2xl leading-[1.7] drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        >
          {HERO.subline}
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        >
          <Button href={whatsappUrl} className="uppercase tracking-wider text-lg px-10 py-4">
            {HERO.cta}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
