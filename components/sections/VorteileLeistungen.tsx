'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { VORTEILE_LEISTUNGEN } from '@/lib/constants'

const MAX_CHARS = 120

export default function VorteileLeistungen() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="bg-brand-lavender py-12 md:py-20">
      <div className="max-w-content mx-auto px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="font-heading text-[1.625rem] md:text-[2.25rem] font-semibold text-brand-text">
            {VORTEILE_LEISTUNGEN.title}
          </h2>
          <p className="mt-3 font-heading text-base text-brand-grayMid">
            {VORTEILE_LEISTUNGEN.subtitle}
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VORTEILE_LEISTUNGEN.items.map((item, index) => {
            const isExpanded = expandedIndex === index
            const needsTruncation = item.description.length > MAX_CHARS
            const displayText = isExpanded || !needsTruncation
              ? item.description
              : item.description.slice(0, MAX_CHARS) + '...'

            return (
              <motion.div
                key={item.title}
                className="group relative bg-white rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:border-brand-accent border-2 border-transparent flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.05 }}
                whileHover={{ y: -6 }}
              >
                {/* Top accent stripe */}
                <div className="h-1 bg-gradient-to-r from-brand-accent to-brand-accentDark" />

                <div className="p-6 flex flex-col flex-1">
                  {/* Title */}
                  <h3 className="font-heading text-lg font-bold text-brand-text mb-3">
                    {item.title}
                  </h3>

                  {/* Description with expand */}
                  <p className="font-heading text-sm text-brand-grayMid leading-[1.7] flex-1">
                    {displayText}
                  </p>

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
