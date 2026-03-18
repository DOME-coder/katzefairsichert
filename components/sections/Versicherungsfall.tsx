'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { VERSICHERUNGSFALL } from '@/lib/constants'

const MAX_CHARS = 120

export default function Versicherungsfall() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="versicherungsfall" className="bg-brand-lavender py-12 md:py-20">
      <div className="max-w-content mx-auto px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="font-heading text-[1.625rem] md:text-[2.25rem] font-semibold text-brand-text">
            {VERSICHERUNGSFALL.title}
          </h2>
          <p className="mt-3 font-heading text-base text-brand-grayMid">
            {VERSICHERUNGSFALL.subtitle}
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VERSICHERUNGSFALL.steps.map((step, index) => {
            const isExpanded = expandedIndex === index
            const fullText = step.text + (step.bullets ? ' ' + step.bullets.join(', ') : '')
            const needsTruncation = fullText.length > MAX_CHARS
            const displayText = isExpanded || !needsTruncation
              ? step.text
              : step.text.slice(0, MAX_CHARS) + '...'

            return (
              <motion.div
                key={step.step}
                className="group relative bg-white rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:border-brand-accent border-2 border-transparent flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
                whileHover={{ y: -6 }}
              >
                {/* Top accent stripe */}
                <div className="h-1 bg-gradient-to-r from-brand-accent to-brand-accentDark" />

                <div className="p-6 flex flex-col flex-1">
                  {/* Step number */}
                  <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center mb-4">
                    <span className="font-heading text-sm font-bold text-white">
                      {step.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg font-bold text-brand-text mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-heading text-sm text-brand-grayMid leading-[1.7] flex-1">
                    {displayText}
                  </p>

                  {/* Bullets (expanded) */}
                  {isExpanded && step.bullets && (
                    <ul className="mt-3 space-y-1.5">
                      {step.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 font-heading text-sm text-brand-text">
                          <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-brand-accent" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  {needsTruncation && (
                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                      className="mt-3 flex items-center gap-1 font-heading text-sm font-semibold text-brand-accent hover:text-brand-accentDark transition-colors self-start"
                    >
                      {isExpanded ? 'Weniger' : 'Mehr erfahren'}
                      <motion.span
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
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
