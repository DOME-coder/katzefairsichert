'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CTA as CTA_DATA } from '@/lib/constants'
import Button from '@/components/ui/Button'
import { EMIL } from '@/components/ui/AnimateInView'

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ''
const whatsappUrl = `https://wa.me/${whatsappNumber}`

export default function CTA() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  return (
    <section
      ref={ref}
      className="relative min-h-[480px] flex items-center justify-center overflow-hidden bg-brand-text"
    >
      {/* Parallax background image — Spec point 16 */}
      <motion.div
        style={{ y }}
        className="absolute -inset-y-[18%] inset-x-0 will-change-transform"
      >
        <Image
          src="/images/katzen/katze-gekrault.jpg"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: 'center 30%' }}
          sizes="100vw"
        />
      </motion.div>

      {/* Multi-layer overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.7) 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(45,45,58,0.30) 0%, transparent 30%, transparent 70%, rgba(45,45,58,0.45) 100%)',
        }}
      />

      {/* Accent gradient lines top + bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent"
      />

      <motion.div
        className="relative z-10 max-w-content mx-auto px-6 py-20 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.85, ease: EMIL }}
      >
        <h2 className="font-heading text-h2 font-semibold tracking-tight-2 text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)]">
          {CTA_DATA.title}
        </h2>
        <p className="mt-5 mx-auto max-w-xl font-body text-base md:text-lg text-white/90 leading-[1.7] drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
          {CTA_DATA.subtitle}
        </p>
        <div className="mt-10">
          <Button href={whatsappUrl} className="uppercase tracking-wider">
            {CTA_DATA.button}
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
