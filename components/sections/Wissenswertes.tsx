'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { BarChart3 } from 'lucide-react'
import { WISSENSWERTES } from '@/lib/constants'
import Accordion from '@/components/ui/Accordion'

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
    <section id="wissenswertes" className="bg-white py-12 md:py-20">
      <div className="max-w-content mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="font-heading text-[1.625rem] md:text-[2.25rem] font-semibold text-brand-text">
            {WISSENSWERTES.title}
          </h2>
          <p className="mt-3 font-heading text-base text-brand-grayMid">
            {WISSENSWERTES.subtitle}
          </p>
          <p className="mt-2 font-heading text-sm text-brand-accent font-medium">
            Fahre mit der Maus über die Punkte, um mehr zu erfahren
          </p>
        </motion.div>

        {/* Desktop: Image with hotspots */}
        <motion.div
          className="mt-10 hidden md:block relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          onMouseLeave={() => {
            if (!isTouchDevice) {
              cancelCloseTimer()
              setActiveHotspot(null)
            }
          }}
        >
          <div className="relative w-full aspect-[16/10] bg-brand-grayLight rounded-2xl overflow-visible border border-brand-border shadow-lg">
            <Image
              src="/images/katzen/kitten-blume.jpg"
              alt="Katze – häufige Behandlungen"
              fill
              className="object-contain"
              quality={100}
              priority
            />

            {/* Hotspots */}
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
                  {/* Pulse ring – only when NOT active */}
                  {!isActive && (
                    <span className="absolute -inset-2 rounded-full bg-brand-accent/30 animate-ping" />
                  )}
                  {!isActive && (
                    <span className="absolute -inset-1 rounded-full bg-brand-accent/20" />
                  )}

                  {/* Hotspot button */}
                  <div
                    className={`relative w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 shadow-lg ${
                      isActive
                        ? 'bg-brand-accentDark scale-110 ring-4 ring-brand-accent/40'
                        : activeHotspot !== null
                          ? 'opacity-0 pointer-events-none'
                          : 'bg-brand-accent hover:scale-110 hover:shadow-xl'
                    }`}
                    aria-label={`${hotspot.id}. ${hotspot.title}`}
                  >
                    <span className="font-heading text-sm font-bold text-white">
                      {hotspot.id}
                    </span>
                  </div>

                  {/* Info Bubble */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        className="absolute z-[60] w-[320px] bg-white border-2 border-brand-accent/30 rounded-2xl shadow-2xl p-6"
                        style={{
                          ...(hotspot.position.x > 55
                            ? { right: '3rem' }
                            : { left: '3rem' }),
                          ...(hotspot.position.y > 50
                            ? { bottom: '-1rem' }
                            : { top: '-1rem' }),
                        }}
                        onMouseEnter={() => {
                          if (!isTouchDevice) cancelCloseTimer()
                        }}
                        onMouseLeave={() => {
                          if (!isTouchDevice) startCloseTimer()
                        }}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <span className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center text-white font-heading text-sm font-bold shrink-0">
                            {hotspot.id}
                          </span>
                          <div>
                            <h4 className="font-heading text-base font-bold text-brand-text leading-tight">
                              {hotspot.title}
                            </h4>
                            <p className="font-heading text-xs text-brand-grayMid">
                              {hotspot.bodyPart}
                            </p>
                          </div>
                        </div>

                        <div className="w-full h-px bg-brand-border mb-3" />

                        <p className="font-heading text-sm text-brand-text leading-[1.7]">
                          {hotspot.description}
                        </p>

                        <div className="mt-3">
                          <p className="font-heading text-xs font-semibold text-brand-accent mb-1">Das leisten wir:</p>
                          <p className="font-heading text-xs text-brand-grayMid leading-[1.6]">
                            {hotspot.leistung}
                          </p>
                        </div>

                        <div className="mt-3 flex items-center gap-2 bg-brand-lavender rounded-lg px-3 py-2">
                          <BarChart3 size={14} className="text-brand-accent shrink-0" />
                          <span className="font-heading text-xs font-semibold text-brand-text">
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
        <div className="mt-10 md:hidden">
          <div className="relative w-full aspect-[16/10] bg-brand-grayLight rounded-2xl overflow-hidden border border-brand-border">
            <Image
              src="/images/katzen/kitten-blume.jpg"
              alt="Katze – häufige Behandlungen"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
          <div className="mt-6">
            <Accordion items={accordionItems} />
          </div>
        </div>
      </div>
    </section>
  )
}
