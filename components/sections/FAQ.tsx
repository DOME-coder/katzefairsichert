'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FAQ } from '@/lib/constants'
import Accordion from '@/components/ui/Accordion'
import Toggle from '@/components/ui/Toggle'
import SectionHeader from '@/components/ui/SectionHeader'
import { EMIL } from '@/components/ui/AnimateInView'

type TabKey = 'categoryA' | 'categoryB'

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState<TabKey>('categoryA')
  const tabOptions: [string, string] = [FAQ.categoryA.title, FAQ.categoryB.title]

  const handleToggle = (value: string) => {
    setActiveTab(value === FAQ.categoryA.title ? 'categoryA' : 'categoryB')
  }

  const items = FAQ[activeTab].items.map((item) => ({
    question: item.question,
    answer: item.answer,
  }))

  return (
    <section id="faq" className="relative bg-brand-lavender py-20 md:py-32 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 w-[28rem] h-[28rem] bg-brand-accent/[0.05] rounded-full blur-3xl animate-float-delayed"
      />

      <div className="relative max-w-content mx-auto px-6">
        <SectionHeader
          eyebrow="Fragen"
          title={FAQ.title}
          subtitle={'subtitle' in FAQ ? FAQ.subtitle : undefined}
        />

        {/* Tabs */}
        <div className="mt-10 flex justify-center">
          <Toggle
            options={tabOptions}
            value={activeTab === 'categoryA' ? FAQ.categoryA.title : FAQ.categoryB.title}
            onChange={handleToggle}
          />
        </div>

        {/* Accordion */}
        <div className="mt-10 max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: EMIL }}
            >
              <Accordion items={items} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
