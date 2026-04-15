'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { EXTRA_LEISTUNGEN } from '@/lib/constants'
import SectionHeader from '@/components/ui/SectionHeader'
import { EMIL } from '@/components/ui/AnimateInView'

export default function ExtraLeistungen() {
  return (
    <section className="relative bg-white py-20 md:py-32">
      <div className="max-w-content mx-auto px-6">
        <SectionHeader
          eyebrow="Extras"
          title={EXTRA_LEISTUNGEN.title}
          subtitle={EXTRA_LEISTUNGEN.subtitle}
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXTRA_LEISTUNGEN.items.map((item, index) => (
            <motion.div
              key={index}
              className="group gradient-border relative bg-white/85 backdrop-blur-sm border border-brand-border/60 rounded-2xl overflow-hidden shadow-brand-sm transition-all duration-600 ease-emil hover:-translate-y-2 hover:shadow-brand-lg hover:border-brand-accent/40 flex flex-col"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, ease: EMIL, delay: index * 0.08 }}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-800 ease-emil group-hover:scale-105"
                />
                {/* Soft bottom fade */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white/70 to-transparent"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading text-lg font-semibold tracking-tight-2 text-brand-text">
                  {item.title}
                </h3>
                <p className="mt-3 font-body text-sm text-brand-grayMid leading-[1.7]">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
