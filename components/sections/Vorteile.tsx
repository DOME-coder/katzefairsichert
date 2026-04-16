'use client'

import { motion } from 'framer-motion'
import {
  Check,
  Scissors,
  ShieldPlus,
  SlidersHorizontal,
  type LucideIcon,
} from 'lucide-react'
import { VORTEILE } from '@/lib/constants'
import SectionHeader from '@/components/ui/SectionHeader'
import { EMIL } from '@/components/ui/AnimateInView'

const ICONS: Record<string, LucideIcon> = {
  'OP-Schutz': Scissors,
  'Vollschutz': ShieldPlus,
  'Flexible Selbstbeteiligung': SlidersHorizontal,
}

export default function Vorteile() {
  return (
    <section id="vorteile" className="relative bg-brand-lavender py-20 md:py-32 overflow-hidden">
      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 -right-32 w-96 h-96 bg-brand-accent/[0.05] rounded-full blur-3xl animate-float"
      />

      <div className="relative max-w-content mx-auto px-6">
        <SectionHeader
          eyebrow="Möglichkeiten"
          title={VORTEILE.title}
          subtitle={VORTEILE.subtitle}
        />
        {'intro' in VORTEILE && (
          <motion.p
            className="mt-5 mx-auto max-w-3xl text-center font-body text-sm text-brand-grayMid leading-[1.8]"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: EMIL, delay: 0.2 }}
          >
            {VORTEILE.intro}
          </motion.p>
        )}

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VORTEILE.items.map((item, index) => {
            const Icon = ICONS[item.title]

            return (
              <motion.div
                key={item.title}
                className="group gradient-border relative bg-white/85 backdrop-blur-sm rounded-2xl border border-brand-border/60 p-6 md:p-8 flex flex-col items-center text-center shadow-brand-sm transition-all duration-600 ease-emil hover:-translate-y-2 hover:shadow-brand-lg hover:border-brand-accent/40"
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.85, ease: EMIL, delay: index * 0.08 }}
              >
                {Icon && (
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-brand-grayLight ring-1 ring-brand-border/50 flex items-center justify-center text-brand-accent transition-all duration-600 ease-emil group-hover:bg-brand-accent/10 group-hover:ring-brand-accent/30 group-hover:shadow-brand-glow group-hover:text-brand-accentDark">
                    <Icon
                      size={24}
                      strokeWidth={1.75}
                      className="transition-transform duration-600 group-hover:scale-110 group-hover:-rotate-6"
                      style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
                    />
                  </div>
                )}

                <h3 className="mt-6 font-heading text-h3 font-semibold tracking-tight-2 text-brand-text">
                  {item.title}
                </h3>

                <p className="mt-3 font-body text-base text-brand-grayMid leading-[1.7]">
                  {item.description}
                </p>

                {item.bullets && (
                  <ul className="mt-5 space-y-2.5 text-left w-full">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-accent/10 ring-1 ring-brand-accent/30 shrink-0">
                          <Check size={12} className="text-brand-accent" strokeWidth={2.75} />
                        </span>
                        <span className="font-body text-sm text-brand-text leading-[1.6]">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
