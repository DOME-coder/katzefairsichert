'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { VORTEILE_LEISTUNGEN } from '@/lib/constants'
import SectionHeader from '@/components/ui/SectionHeader'
import { EMIL } from '@/components/ui/AnimateInView'

const MAX_CHARS = 120

export default function VorteileLeistungen() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="relative bg-brand-lavender py-20 md:py-32 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-brand-accent/[0.05] rounded-full blur-3xl animate-float-delayed"
      />

      <div className="relative max-w-content mx-auto px-6">
        <SectionHeader
          eyebrow="Leistungen"
          title={VORTEILE_LEISTUNGEN.title}
          subtitle={VORTEILE_LEISTUNGEN.subtitle}
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VORTEILE_LEISTUNGEN.items.map((item, index) => {
            const isExpanded = expandedIndex === index
            const needsTruncation = item.description.length > MAX_CHARS
            const displayText =
              isExpanded || !needsTruncation
                ? item.description
                : item.description.slice(0, MAX_CHARS) + '…'

            return (
              <motion.div
                key={item.title}
                className="group gradient-border relative bg-white/85 backdrop-blur-sm rounded-2xl overflow-hidden shadow-brand-sm transition-all duration-600 ease-emil hover:-translate-y-2 hover:shadow-brand-lg hover:border-brand-accent/40 border border-brand-border/60 flex flex-col"
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.85, ease: EMIL, delay: index * 0.06 }}
              >
                {/* Top accent stripe */}
                <div className="h-1 bg-gradient-to-r from-brand-accent via-brand-accentDark to-brand-accent bg-220 animate-gradient-drift" />

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading text-lg font-bold tracking-tight-2 text-brand-text mb-3">
                    {item.title}
                  </h3>

                  <p className="font-body text-sm text-brand-grayMid leading-[1.7] flex-1">
                    {displayText}
                  </p>

                  {needsTruncation && (
                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                      className="mt-4 link-underline inline-flex items-center gap-1 min-h-[44px] py-2 font-heading text-sm font-semibold text-brand-accent hover:text-brand-accentDark transition-colors duration-450 ease-emil self-start"
                    >
                      {isExpanded ? 'Weniger' : 'Mehr erfahren'}
                      <motion.span
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.45, ease: EMIL }}
                      >
                        <ChevronDown size={16} />
                      </motion.span>
                    </button>
                  )}
                </div>

                {/* Bottom accent stripe with gradient-drift animation */}
                <div className="h-1 bg-gradient-to-r from-brand-accent via-brand-accentDark to-brand-accent bg-220 animate-gradient-drift" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
