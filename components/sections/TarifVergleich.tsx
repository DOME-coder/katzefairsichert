'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'
import Toggle from '@/components/ui/Toggle'
import {
  TARIF,
  TARIF_TOGGLE_OPTIONS,
  TARIF_STUFEN,
  TARIF_DATA,
  type TarifToggle,
} from '@/lib/constants'

export default function TarifVergleich() {
  const [activeToggle, setActiveToggle] = useState<TarifToggle>('OP-Schutz')
  const directionRef = useRef(1)

  const handleToggle = (value: string) => {
    const newValue = value as TarifToggle
    directionRef.current = newValue === 'Vollschutz' ? 1 : -1
    setActiveToggle(newValue)
  }

  const plan = TARIF_DATA[activeToggle]

  return (
    <section id="tarife" className="bg-white py-12 md:py-20">
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
            {TARIF.title}
          </h2>
          <p className="mt-3 font-heading text-base text-brand-grayMid">
            {TARIF.subtitle}
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="mt-8 flex justify-center">
          <Toggle
            options={TARIF_TOGGLE_OPTIONS}
            value={activeToggle}
            onChange={handleToggle}
          />
        </div>

        {/* Table */}
        <div className="mt-8 overflow-x-auto">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeToggle}
              initial={{ x: directionRef.current * 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: directionRef.current * -300, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <table className="w-full min-w-[700px] border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 text-left font-heading text-sm font-semibold text-brand-grayMid w-[220px]">
                      {TARIF.columnHeader}
                    </th>
                    {TARIF_STUFEN.map((stufe) => (
                      <th key={stufe} className="p-4 text-center font-heading text-base font-semibold">
                        {stufe}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {plan.features.map((feature, rowIdx) => (
                    <tr
                      key={feature.label}
                      className={rowIdx % 2 === 0 ? 'bg-brand-grayLight/50' : ''}
                    >
                      <td className="p-4 font-heading text-sm text-brand-text font-medium">
                        {feature.label}
                      </td>
                      {feature.values.map((value, colIdx) => (
                        <td key={colIdx} className="p-4 text-center font-heading text-sm text-brand-text">
                          {value === '✗' ? (
                            <span className="text-brand-error font-bold">✗</span>
                          ) : (
                            value
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Wartezeiten */}
        <motion.div
          className="mt-12 bg-brand-grayLight rounded-xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h3 className="font-heading text-[1.25rem] font-semibold text-brand-text">
            {TARIF.wartezeiten.title}
          </h3>
          <p className="mt-2 font-heading text-sm text-brand-grayMid">
            {TARIF.wartezeiten.subtitle}
          </p>
          <ul className="mt-4 space-y-2">
            {TARIF.wartezeiten.items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check size={18} className="text-brand-accent mt-0.5 shrink-0" />
                <span className="font-heading text-sm text-brand-text">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Wann zahlt */}
        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="bg-brand-lavender rounded-xl p-8">
            <h3 className="font-heading text-[1.125rem] font-semibold text-brand-text">
              Die Versicherung zahlt, wenn ...
            </h3>
            <ul className="mt-4 space-y-2">
              {TARIF.wannZahlt.zahlt.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check size={16} className="text-brand-success mt-0.5 shrink-0" />
                  <span className="font-heading text-sm text-brand-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-brand-border rounded-xl p-8">
            <h3 className="font-heading text-[1.125rem] font-semibold text-brand-text">
              Die Versicherung zahlt z. B. nicht, wenn ...
            </h3>
            <ul className="mt-4 space-y-2">
              {TARIF.wannZahlt.zahltNicht.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-brand-error mt-0.5 shrink-0 font-bold text-sm">✗</span>
                  <span className="font-heading text-sm text-brand-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Wechseloption – USP */}
        <motion.div
          className="mt-16 relative bg-gradient-to-br from-brand-lavender via-white to-brand-lavender border-2 border-brand-accent rounded-2xl p-8 md:p-10 shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-accent/20 rounded-full blur-3xl" />
          <div className="relative flex flex-col md:flex-row md:items-start gap-6">
            <div className="shrink-0 w-16 h-16 rounded-full bg-brand-accent/10 border-2 border-brand-accent flex items-center justify-center overflow-hidden">
              <Image
                src="/images/icons/directions-light.jpg"
                alt="Wechseloption"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-heading text-[1.75rem] md:text-[2rem] font-bold text-brand-text">
                  {TARIF.wechseloption.title}
                </h3>
                <span className="inline-block bg-brand-accent text-white text-sm font-heading font-bold px-4 py-1.5 rounded-full shadow-md animate-pulse">
                  {TARIF.wechseloption.badge}
                </span>
              </div>
              <p className="mt-4 font-heading text-base md:text-lg text-brand-grayMid leading-[1.7]">
                {TARIF.wechseloption.description}
              </p>
              <ul className="mt-5 space-y-3">
                {TARIF.wechseloption.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <Check size={20} className="text-brand-accent mt-0.5 shrink-0" />
                    <span className="font-heading text-base text-brand-text">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
