'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FAQ } from '@/lib/constants'
import Accordion from '@/components/ui/Accordion'

type TabKey = 'categoryA' | 'categoryB'

const TABS: { key: TabKey; title: string }[] = [
  { key: 'categoryA', title: FAQ.categoryA.title },
  { key: 'categoryB', title: FAQ.categoryB.title },
]

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState<TabKey>('categoryA')

  const items = FAQ[activeTab].items.map((item) => ({
    question: item.question,
    answer: item.answer,
  }))

  return (
    <section id="faq" className="bg-brand-lavender py-12 md:py-20">
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
            {FAQ.title}
          </h2>
          {'subtitle' in FAQ && (
            <p className="mt-3 font-heading text-base text-brand-grayMid">
              {FAQ.subtitle}
            </p>
          )}
        </motion.div>

        {/* Tabs */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex bg-brand-grayLight rounded-lg p-1">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-2 rounded-md font-heading font-semibold text-sm transition-all duration-200 ${
                  activeTab === tab.key
                    ? 'bg-brand-accent text-white shadow-sm'
                    : 'text-brand-grayMid hover:text-brand-text'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion */}
        <div className="mt-8 max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <Accordion items={items} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
