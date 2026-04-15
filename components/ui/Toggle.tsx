'use client'

import { motion } from 'framer-motion'
import { useId } from 'react'

interface ToggleProps {
  options: [string, string]
  value: string
  onChange: (value: string) => void
}

export default function Toggle({ options, value, onChange }: ToggleProps) {
  const layoutId = useId()

  return (
    <div className="inline-flex rounded-full bg-white/60 backdrop-blur-md p-1 border border-brand-border/60 shadow-brand-sm">
      {options.map((option) => {
        const isActive = value === option
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`relative px-7 py-2.5 rounded-full font-heading font-semibold text-sm tracking-tight-2 transition-colors duration-450 ease-emil ${
              isActive ? 'text-white' : 'text-brand-grayMid hover:text-brand-text'
            }`}
            aria-pressed={isActive}
          >
            {isActive && (
              <motion.span
                layoutId={`toggle-pill-${layoutId}`}
                className="absolute inset-0 rounded-full bg-brand-accent shadow-brand-glow ring-1 ring-brand-accentDark/30"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative z-10">{option}</span>
          </button>
        )
      })}
    </div>
  )
}
