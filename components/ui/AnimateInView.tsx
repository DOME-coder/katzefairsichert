'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function AnimateInView({
  children,
  className = '',
  variants = fadeInUp,
}: {
  children: ReactNode
  className?: string
  variants?: Variants
}) {
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => setHydrated(true), [])

  if (!hydrated) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
