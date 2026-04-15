'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'

const EMIL = [0.32, 0.72, 0, 1] as const

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EMIL },
  },
}

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

interface AnimateInViewProps {
  children: ReactNode
  className?: string
  variants?: Variants
  stagger?: boolean
  amount?: number
}

export default function AnimateInView({
  children,
  className = '',
  variants,
  stagger = false,
  amount = 0.15,
}: AnimateInViewProps) {
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => setHydrated(true), [])

  if (!hydrated) {
    return <div className={className}>{children}</div>
  }

  const resolvedVariants = variants ?? (stagger ? staggerContainer : fadeInUp)

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={resolvedVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export { fadeInUp, staggerContainer, EMIL }
