'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { VERSICHERUNGSFALL } from '@/lib/constants'
import SectionHeader from '@/components/ui/SectionHeader'
import { EMIL } from '@/components/ui/AnimateInView'

const MAX_CHARS = 120

export default function Versicherungsfall() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section
      id="versicherungsfall"
      className="relative bg-brand-lavender py-20 md:py-32 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 w-[28rem] h-[28rem] bg-brand-accent/[0.05] rounded-full blur-3xl animate-float"
      />

      <div className="relative max-w-content mx-auto px-6">
        <SectionHeader
          eyebrow="Schadensfall"
          title={VERSICHERUNGSFALL.title}
          subtitle={VERSICHERUNGSFALL.subtitle}
        />

        <div className="mt-14 flex flex-wrap justify-center gap-6">
          {VERSICHERUNGSFALL.steps.map((step, index) => {
            const isExpanded = expandedIndex === index
            const fullText = step.text + (step.bullets ? ' ' + step.bullets.join(', ') : '')
            const needsTruncation = fullText.length > MAX_CHARS
            const displayText =
              isExpanded || !needsTruncation
                ? step.text
                : step.text.slice(0, MAX_CHARS) + '…'

            return (
              <motion.div
                key={step.step}
                className="group gradient-border relative w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] bg-white/85 backdrop-blur-sm rounded-2xl overflow-hidden shadow-brand-sm transition-all duration-600 ease-emil hover:-translate-y-2 hover:shadow-brand-lg hover:border-brand-accent/40 border border-brand-border/60 flex flex-col"
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.85, ease: EMIL, delay: index * 0.08 }}
              >
                {/* Top accent stripe */}
                <div className="h-1 bg-gradient-to-r from-brand-accent via-brand-accentDark to-brand-accent bg-220 animate-gradient-drift" />

                <div className="p-6 flex flex-col flex-1">
                  {/* Step number badge */}
                  <div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-accent to-brand-accentDark shadow-brand-glow ring-2 ring-white flex items-center justify-center mb-5 transition-transform duration-600 group-hover:scale-110 group-hover:-rotate-6"
                    style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
                  >
                    <span className="font-heading text-base font-bold tnum text-white">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold tracking-tight-2 text-brand-text mb-3">
                    {step.title}
                  </h3>

                  <p className="font-body text-sm text-brand-grayMid leading-[1.7] flex-1">
                    {displayText}
                  </p>

                  <AnimatePresence initial={false}>
                    {isExpanded && step.bullets && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: EMIL }}
                        className="mt-4 space-y-2 overflow-hidden"
                      >
                        {step.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-2.5 font-body text-sm text-brand-text leading-[1.6]"
                          >
                            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-brand-accent" />
                            {bullet}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>

                  {needsTruncation && (
                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                      className="mt-4 link-underline inline-flex items-center gap-1 font-heading text-sm font-semibold text-brand-accent hover:text-brand-accentDark transition-colors duration-450 ease-emil self-start"
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
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
