'use client'

import { motion } from 'framer-motion'
import { CTA as CTA_DATA } from '@/lib/constants'
import Button from '@/components/ui/Button'

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ''
const whatsappUrl = `https://wa.me/${whatsappNumber}`

export default function CTA() {
  return (
    <section
      className="relative min-h-[400px] flex items-center justify-center bg-cover bg-top bg-fixed"
      style={{ backgroundImage: 'url(/images/katzen/katze-gekrault.jpg)' }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <motion.div
        className="relative z-10 max-w-content mx-auto px-6 py-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className="font-heading text-[1.625rem] md:text-[2.25rem] font-semibold text-white">
          {CTA_DATA.title}
        </h2>
        <p className="mt-3 font-body text-base md:text-lg text-white/90 max-w-xl mx-auto">
          {CTA_DATA.subtitle}
        </p>
        <div className="mt-8">
          <Button href={whatsappUrl} className="uppercase tracking-wider">
            {CTA_DATA.button}
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
