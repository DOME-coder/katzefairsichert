'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

interface SectionDividerProps {
  imageSrc: string
  alt: string
  focusX?: string
  focusY?: string
  height?: 'sm' | 'md' | 'lg' | 'xl'
  parallax?: boolean
  objectFit?: 'cover' | 'contain'
}

const heightMap = {
  sm: 'h-[200px] md:h-[280px]',
  md: 'h-[240px] md:h-[340px]',
  lg: 'h-[300px] md:h-[420px]',
  xl: 'h-[420px] md:h-[600px]',
}

export default function SectionDivider({
  imageSrc,
  alt,
  focusX = '50%',
  focusY = '50%',
  height = 'md',
  parallax = true,
  objectFit = 'cover',
}: SectionDividerProps) {
  const fitClass = objectFit === 'contain' ? 'object-contain' : 'object-cover'
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])

  return (
    <div
      ref={ref}
      className={`relative ${heightMap[height]} overflow-hidden bg-brand-text`}
      role="img"
      aria-label={alt}
    >
      {/* Blurred background fill (only when contain) so the sides aren't empty */}
      {objectFit === 'contain' && (
        <>
          <div className="absolute inset-0 scale-110">
            <Image
              src={imageSrc}
              alt=""
              fill
              className="object-cover blur-2xl opacity-60"
              sizes="100vw"
              aria-hidden="true"
            />
          </div>
          <div className="absolute inset-0 bg-brand-text/40" aria-hidden="true" />
        </>
      )}

      {parallax ? (
        // Oversized parallax wrapper to avoid empty edges (Spec point 16 + 24)
        <motion.div
          style={{ y }}
          className="absolute -inset-y-[22%] inset-x-0 will-change-transform"
        >
          <Image
            src={imageSrc}
            alt=""
            fill
            className={fitClass}
            style={{ objectPosition: `${focusX} ${focusY}` }}
            sizes="100vw"
          />
        </motion.div>
      ) : (
        // Static — image scrolls 1:1 with the page
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt=""
            fill
            className={fitClass}
            style={{ objectPosition: `${focusX} ${focusY}` }}
            sizes="100vw"
          />
        </div>
      )}

      {/* Soft edge fades top + bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-brand-text/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-text/40 to-transparent"
      />

      {/* Accent gradient lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent"
      />
    </div>
  )
}
