'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { EMIL } from './AnimateInView'

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            className="group relative bg-white/85 backdrop-blur-sm border border-brand-border/60 rounded-2xl overflow-hidden shadow-brand-sm transition-all duration-600 ease-emil hover:shadow-brand-md"
          >
            {/* Active left accent bar (Spec point 20) */}
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 bottom-0 w-[3px] origin-top bg-gradient-to-b from-brand-accent to-brand-accentDark transition-transform duration-450 ease-emil"
              style={{ transform: isOpen ? 'scaleY(1)' : 'scaleY(0)' }}
            />

            <button
              type="button"
              className="relative w-full flex items-center justify-between gap-4 px-5 md:px-6 py-4 md:py-5 text-left min-h-[44px]"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span className="font-heading font-semibold text-brand-text tracking-tight-2">
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.45, ease: EMIL }}
                className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full border border-brand-border bg-white text-brand-accent shadow-brand-xs"
                aria-hidden="true"
              >
                <ChevronDown size={16} strokeWidth={2.25} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: EMIL }}
                  className="overflow-hidden"
                >
                  {/* Gradient divider */}
                  <div className="mx-6 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
                  <p className="px-6 pt-4 pb-6 font-body text-sm text-brand-grayMid leading-[1.75]">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
