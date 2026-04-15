'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { BarChart3 } from 'lucide-react'
import { WISSENSWERTES } from '@/lib/constants'
import Accordion from '@/components/ui/Accordion'
import SectionHeader from '@/components/ui/SectionHeader'
import { EMIL } from '@/components/ui/AnimateInView'

export default function Wissenswertes() {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  const closeHotspot = useCallback(() => setActiveHotspot(null), [])

  const startCloseTimer = useCallback(() => {
    closeTimerRef.current = setTimeout(() => {
      setActiveHotspot(null)
    }, 150)
  }, [])

  const cancelCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeHotspot()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [closeHotspot])

  const accordionItems = WISSENSWERTES.hotspots.map((h) => ({
    question: `${h.id}. ${h.title} – ${h.bodyPart}`,
    answer: `${h.description} — Behandlungskosten: ${h.kosten}`,
  }))

  return (
    <section id="wissenswertes" className="relative bg-white py-20 md:py-32">
      <div className="max-w-content mx-auto px-6">
        <SectionHeader
          eyebrow="Wissen"
          title={WISSENSWERTES.title}
          subtitle={WISSENSWERTES.subtitle}
        />
        <motion.p
          className="mt-4 text-center font-body text-sm text-brand-accent font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: EMIL, delay: 0.3 }}
        >
          Fahre mit der Maus über die Punkte, um mehr zu erfahren
        </motion.p>

        {/* Desktop: Image with hotspots */}
        <motion.div
          className="mt-14 hidden md:block relative"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.85, ease: EMIL, delay: 0.1 }}
          onMouseLeave={() => {
            if (!isTouchDevice) {
              cancelCloseTimer()
              setActiveHotspot(null)
            }
          }}
        >
          <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-brand-grayLight to-white rounded-3xl overflow-visible border border-brand-border/60 shadow-brand-md">
            <Image
              src="/images/katzen/kitten-blume.jpg"
              alt="Katze – häufige Behandlungen"
              fill
              className="object-contain rounded-3xl"
              quality={100}
              priority
            />

            {/* Hotspots — Spec point 21 */}
            {WISSENSWERTES.hotspots.map((hotspot) => {
              const isActive = activeHotspot === hotspot.id

              return (
                <div
                  key={hotspot.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${hotspot.position.x}%`,
                    top: `${hotspot.position.y}%`,
                    zIndex: isActive ? 50 : 10,
                  }}
                  onMouseEnter={() => {
                    if (!isTouchDevice) {
                      cancelCloseTimer()
                      setActiveHotspot(hotspot.id)
                    }
                  }}
                  onMouseLeave={() => {
                    if (!isTouchDevice) {
                      startCloseTimer()
                    }
                  }}
                  onClick={(e) => {
                    if (isTouchDevice) {
                      e.stopPropagation()
                      setActiveHotspot(isActive ? null : hotspot.id)
                    }
                  }}
                >
                  {/* Dual concentric ripple rings — Spec point 21 */}
                  {!isActive && (
                    <>
                      <span className="absolute inset-0 rounded-full bg-brand-accent/40 animate-ripple pointer-events-none" />
                      <span className="absolute inset-0 rounded-full bg-brand-accent/40 animate-ripple-delay pointer-events-none" />
                    </>
                  )}

                  {/* Center dot */}
                  <div
                    className={`relative w-9 h-9 rounded-full bg-gradient-to-br from-brand-accent to-brand-accentDark shadow-brand-glow ring-2 ring-white flex items-center justify-center cursor-pointer transition-all duration-450 ease-emil ${
                      isActive
                        ? 'scale-125'
                        : activeHotspot !== null
                          ? 'opacity-0 pointer-events-none scale-75'
                          : 'hover:scale-110'
                    }`}
                    aria-label={`${hotspot.id}. ${hotspot.title}`}
                  >
                    <span className="font-heading text-sm font-bold tnum text-white">
                      {hotspot.id}
                    </span>
                  </div>

                  {/* Info Bubble — spring overshoot */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0.85, opacity: 0, y: 8 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.85, opacity: 0, y: 4 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.34, 1.56, 0.64, 1],
                        }}
                        style={{
                          transformOrigin: `${hotspot.position.x > 55 ? 'right' : 'left'} ${hotspot.position.y > 50 ? 'bottom' : 'top'}`,
                          ...(hotspot.position.x > 55
                            ? { right: '3rem' }
                            : { left: '3rem' }),
                          ...(hotspot.position.y > 50
                            ? { bottom: '-1rem' }
                            : { top: '-1rem' }),
                        }}
                        className="absolute z-[60] w-[340px] bg-white/95 backdrop-blur-md border-2 border-brand-accent/30 rounded-2xl shadow-brand-xl p-6"
                        onMouseEnter={() => {
                          if (!isTouchDevice) cancelCloseTimer()
                        }}
                        onMouseLeave={() => {
                          if (!isTouchDevice) startCloseTimer()
                        }}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <span className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-accent to-brand-accentDark shadow-brand-glow ring-2 ring-white flex items-center justify-center text-white font-heading text-sm font-bold tnum shrink-0">
                            {hotspot.id}
                          </span>
                          <div>
                            <h4 className="font-heading text-base font-bold tracking-tight-2 text-brand-text leading-tight">
                              {hotspot.title}
                            </h4>
                            <p className="font-body text-xs text-brand-grayMid">
                              {hotspot.bodyPart}
                            </p>
                          </div>
                        </div>

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-border to-transparent mb-3" />

                        <p className="font-body text-sm text-brand-text leading-[1.7]">
                          {hotspot.description}
                        </p>

                        <div className="mt-3">
                          <p className="font-heading text-[10px] font-semibold uppercase tracking-eyebrow text-brand-accent mb-1">
                            Das leisten wir
                          </p>
                          <p className="font-body text-xs text-brand-grayMid leading-[1.6]">
                            {hotspot.leistung}
                          </p>
                        </div>

                        <div className="mt-4 flex items-center gap-2 bg-brand-lavender rounded-xl px-3 py-2.5 ring-1 ring-brand-accent/20">
                          <BarChart3 size={14} className="text-brand-accent shrink-0" />
                          <span className="font-heading text-xs font-semibold text-brand-text tnum">
                            Behandlungskosten: {hotspot.kosten}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Mobile: Image + Accordion */}
        <div className="mt-14 md:hidden">
          <div className="relative w-full aspect-[16/10] bg-brand-grayLight rounded-2xl overflow-hidden border border-brand-border/60 shadow-brand-sm">
            <Image
              src="/images/katzen/kitten-blume.jpg"
              alt="Katze – häufige Behandlungen"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
          <div className="mt-8">
            <Accordion items={accordionItems} />
          </div>
        </div>
      </div>
    </section>
  )
}
