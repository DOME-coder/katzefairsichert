'use client'

import { motion, type Variants } from 'framer-motion'
import { EMIL } from './AnimateInView'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  className?: string
  align?: 'center' | 'left'
}

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: EMIL },
  },
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className = '',
  align = 'center',
}: SectionHeaderProps) {
  const alignClasses =
    align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <motion.div
      className={`flex flex-col ${alignClasses} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      {eyebrow && (
        <motion.div
          variants={item}
          className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-eyebrow text-brand-accent"
        >
          <span
            aria-hidden="true"
            className="inline-block w-8 h-px bg-brand-accent/60"
          />
          <span>{eyebrow}</span>
          <span
            aria-hidden="true"
            className="inline-block w-8 h-px bg-brand-accent/60"
          />
        </motion.div>
      )}

      <motion.h2
        variants={item}
        className="mt-4 font-heading text-h2 font-semibold tracking-tight-2 text-brand-text"
      >
        {title}
      </motion.h2>

      <motion.div
        variants={item}
        aria-hidden="true"
        className="mt-4 h-px w-16 bg-gradient-to-r from-transparent via-brand-accent to-transparent"
      />

      {subtitle && (
        <motion.p
          variants={item}
          className="mt-5 max-w-2xl font-body text-base text-brand-grayMid"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
