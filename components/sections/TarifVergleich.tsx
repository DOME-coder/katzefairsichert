'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRightLeft, Sparkles, Star } from 'lucide-react'
import Toggle from '@/components/ui/Toggle'
import SectionHeader from '@/components/ui/SectionHeader'
import { EMIL } from '@/components/ui/AnimateInView'
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
    <section id="tarife" className="relative bg-white py-20 md:py-32">
      <div className="max-w-content mx-auto px-6">
        <SectionHeader
          eyebrow="Vergleich"
          title={TARIF.title}
          subtitle={TARIF.subtitle}
        />

        {/* Toggle */}
        <div className="mt-10 flex justify-center">
          <Toggle
            options={TARIF_TOGGLE_OPTIONS}
            value={activeToggle}
            onChange={handleToggle}
          />
        </div>

        {/* Table */}
        <motion.div
          className="mt-10 overflow-x-auto rounded-2xl border border-brand-border/60 shadow-brand-sm bg-white/85 backdrop-blur-sm"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.85, ease: EMIL }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeToggle}
              initial={{ x: directionRef.current * 240, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: directionRef.current * -240, opacity: 0 }}
              transition={{ duration: 0.6, ease: EMIL }}
            >
              <table className="w-full min-w-[700px] border-collapse tnum">
                <thead>
                  <tr className="bg-gradient-to-b from-brand-grayLight to-brand-grayLight/40">
                    <th className="p-5 text-left font-heading text-[11px] font-semibold uppercase tracking-eyebrow text-brand-grayMid w-[220px]">
                      {TARIF.columnHeader}
                    </th>
                    {TARIF_STUFEN.map((stufe) => (
                      <th
                        key={stufe}
                        className="p-5 text-center font-heading text-base font-semibold tracking-tight-2 text-brand-text"
                      >
                        {stufe}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {plan.features.map((feature, rowIdx) => (
                    <tr
                      key={feature.label}
                      className={`group/row relative transition-colors duration-450 ease-emil hover:bg-brand-lavender/40 ${
                        rowIdx % 2 === 0 ? 'bg-brand-grayLight/30' : 'bg-white'
                      }`}
                    >
                      <td className="relative p-4 font-heading text-sm text-brand-text font-medium">
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-3/4 origin-center scale-y-0 bg-gradient-to-b from-brand-accent to-brand-accentDark rounded-full transition-transform duration-450 ease-emil group-hover/row:scale-y-100"
                        />
                        {feature.label}
                      </td>
                      {feature.values.map((value, colIdx) => (
                        <td
                          key={colIdx}
                          className="p-4 text-center font-heading text-sm"
                        >
                          {value === '✗' ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-error/10 text-brand-error font-bold">
                              ✗
                            </span>
                          ) : (
                            <span className="text-brand-text tnum">{value}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Wartezeiten */}
        <motion.div
          className="mt-12 bg-gradient-to-br from-brand-grayLight to-white rounded-2xl border border-brand-border/60 p-8 shadow-brand-sm"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.85, ease: EMIL }}
        >
          <h3 className="font-heading text-h3 font-semibold tracking-tight-2 text-brand-text">
            {TARIF.wartezeiten.title}
          </h3>
          <p className="mt-2 font-body text-sm text-brand-grayMid">
            {TARIF.wartezeiten.subtitle}
          </p>
          <ul className="mt-5 space-y-3">
            {TARIF.wartezeiten.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-accent/10 ring-1 ring-brand-accent/30 shrink-0">
                  <Check size={12} className="text-brand-accent" strokeWidth={2.75} />
                </span>
                <span className="font-body text-sm text-brand-text leading-[1.6]">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Wann zahlt */}
        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.85, ease: EMIL }}
        >
          <div className="gradient-border relative bg-brand-lavender/60 backdrop-blur-sm rounded-2xl border border-brand-accent/30 p-8 shadow-brand-sm">
            <h3 className="font-heading text-h3 font-semibold tracking-tight-2 text-brand-text">
              Die Versicherung zahlt, wenn …
            </h3>
            <ul className="mt-5 space-y-3">
              {TARIF.wannZahlt.zahlt.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-success/10 ring-1 ring-brand-success/40 shrink-0">
                    <Check size={12} className="text-brand-success" strokeWidth={2.75} />
                  </span>
                  <span className="font-body text-sm text-brand-text leading-[1.6]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="gradient-border relative bg-white/85 backdrop-blur-sm rounded-2xl border border-brand-border/60 p-8 shadow-brand-sm">
            <h3 className="font-heading text-h3 font-semibold tracking-tight-2 text-brand-text">
              Die Versicherung zahlt z. B. nicht, wenn …
            </h3>
            <ul className="mt-5 space-y-3">
              {TARIF.wannZahlt.zahltNicht.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-error/10 ring-1 ring-brand-error/30 shrink-0 text-brand-error font-bold text-[11px]">
                    ✗
                  </span>
                  <span className="font-body text-sm text-brand-text leading-[1.6]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/*
          Wechseloption – Hero-Produkt-Box (Spec point 23)
          Maximum visual hierarchy: pulsing outer halo, conic rotating border,
          shimmer sweep, gradient drift, large icon-only block, hover lift.
        */}
        <motion.div
          className="mt-20 relative"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.95, ease: EMIL }}
        >
          {/* Outer pulsing halo (extends beyond box) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-6 md:-inset-10 rounded-[2.5rem] bg-brand-accent/15 blur-3xl animate-pulse-soft"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-brand-accent/25 via-transparent to-brand-accentDark/25 blur-2xl"
          />

          {/* Wrapper with conic-gradient rotating border */}
          <div className="relative rounded-3xl group">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-3xl p-[2px] animate-gradient-drift bg-220"
              style={{
                background:
                  'conic-gradient(from 140deg, #9B6DBF, #7A4FA0 20%, rgba(155,109,191,0.3) 40%, #9B6DBF 60%, #7A4FA0 80%, #9B6DBF)',
                WebkitMask:
                  'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />

            {/* Inner card */}
            <div className="relative bg-gradient-to-br from-white via-brand-lavender/40 to-white rounded-3xl px-7 py-10 md:px-14 md:py-14 shadow-brand-xl overflow-hidden">
              {/* Diagonal shimmer sweep */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background:
                    'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%)',
                  backgroundSize: '220% 100%',
                  animation: 'shimmer 6s ease-in-out infinite',
                }}
              />

              {/* Decorative blur orbs */}
              <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 bg-brand-accent/25 rounded-full blur-3xl animate-pulse-soft" />
              <div className="pointer-events-none absolute -bottom-24 -left-20 w-56 h-56 bg-brand-accentDark/20 rounded-full blur-3xl animate-pulse-soft" />
              <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-32 h-32 bg-white/40 rounded-full blur-2xl" />

              {/* Top accent gradient line */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-accent to-transparent"
              />

              {/* Corner ribbon — large & prominent */}
              <div className="absolute top-6 right-6 z-20">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-accent via-brand-accentDark to-brand-accent bg-220 animate-gradient-drift text-white text-xs md:text-sm font-heading font-bold uppercase tracking-eyebrow px-5 py-2.5 rounded-full shadow-brand-glow ring-1 ring-white/30">
                  <Star size={14} className="fill-white text-white" />
                  <span>{TARIF.wechseloption.badge}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                </div>
              </div>

              {/* Floating sparkles */}
              <Sparkles
                size={18}
                className="pointer-events-none absolute top-12 left-12 text-brand-accent/60 animate-float"
                aria-hidden="true"
              />
              <Sparkles
                size={14}
                className="pointer-events-none absolute bottom-16 right-16 text-brand-accentDark/60 animate-float-delayed"
                aria-hidden="true"
              />

              <div className="relative flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
                {/* Icon-only block — ArrowRightLeft */}
                <div className="relative shrink-0 mx-auto md:mx-0">
                  {/* Icon container glow halo */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-[2rem] bg-brand-accent/40 blur-2xl scale-125 animate-pulse-soft"
                  />
                  <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-[2rem] bg-gradient-to-br from-brand-accent via-brand-accentDark to-brand-accent bg-220 animate-gradient-drift shadow-brand-glow ring-4 ring-white flex items-center justify-center transition-transform duration-600 ease-emil group-hover:scale-105 group-hover:rotate-3">
                    <ArrowRightLeft
                      size={48}
                      className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
                      strokeWidth={2.25}
                    />
                  </div>
                </div>

                <div className="flex-1 min-w-0 text-center md:text-left">
                  {/* Eyebrow */}
                  <div className="inline-flex items-center gap-2.5 bg-brand-accent/10 ring-1 ring-brand-accent/30 px-3 py-1.5 rounded-full">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75 animate-ping" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent" />
                    </span>
                    <span className="font-heading text-[11px] font-semibold uppercase tracking-eyebrow text-brand-accent">
                      Brandneu &middot; Exklusiv
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-h1 font-bold tracking-tight-3 text-brand-text leading-[1.05]">
                    {TARIF.wechseloption.title}
                  </h3>

                  <p className="mt-5 font-body text-base md:text-lg text-brand-text/75 leading-[1.7] max-w-2xl mx-auto md:mx-0">
                    {TARIF.wechseloption.description}
                  </p>

                  {/* Bullets as 2-col gradient mini cards */}
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {TARIF.wechseloption.bullets.map((bullet, i) => (
                      <div
                        key={bullet}
                        className="group/bullet flex items-start gap-3 bg-white/85 backdrop-blur-sm border border-brand-border/60 rounded-2xl p-4 shadow-brand-xs transition-all duration-600 ease-emil hover:-translate-y-0.5 hover:border-brand-accent/40 hover:shadow-brand-md text-left"
                        style={{ animationDelay: `${i * 80}ms` }}
                      >
                        <span className="mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-xl bg-gradient-to-br from-brand-accent to-brand-accentDark shadow-brand-glow ring-2 ring-white shrink-0 transition-transform duration-600 ease-spring group-hover/bullet:scale-110 group-hover/bullet:-rotate-6">
                          <Check size={14} className="text-white" strokeWidth={3.5} />
                        </span>
                        <span className="font-body text-sm text-brand-text leading-[1.55] font-medium">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
