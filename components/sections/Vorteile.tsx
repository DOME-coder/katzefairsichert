'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { VORTEILE } from '@/lib/constants'

const ICONS: Record<string, string> = {
  'OP-Schutz': '/images/icons/stethoscope.jpg',
  'Vollschutz': '/images/icons/health.jpg',
  'Flexible Selbstbeteiligung': '/images/icons/moneybag.jpg',
}

export default function Vorteile() {
  return (
    <section id="vorteile" className="bg-brand-lavender py-12 md:py-20">
      <div className="max-w-content mx-auto px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="font-heading text-[1.625rem] md:text-[2.25rem] font-semibold text-brand-text">
            {VORTEILE.title}
          </h2>
          <p className="mt-3 font-heading text-base text-brand-grayMid">
            {VORTEILE.subtitle}
          </p>
          {'intro' in VORTEILE && (
            <p className="mt-4 font-heading text-sm text-brand-grayMid leading-[1.7] max-w-3xl mx-auto">
              {VORTEILE.intro}
            </p>
          )}
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VORTEILE.items.map((item, index) => {
            const iconSrc = ICONS[item.title]

            return (
              <motion.div
                key={item.title}
                className="bg-white border border-brand-border rounded-xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {iconSrc && (
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={iconSrc}
                      alt={item.title}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <h3 className="mt-5 font-heading text-[1.5rem] font-semibold text-brand-text">
                  {item.title}
                </h3>

                <p className="mt-3 font-body text-base text-brand-grayMid leading-[1.7]">
                  {item.description}
                </p>

                {item.bullets && (
                  <ul className="mt-4 space-y-2 text-left w-full">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <Check size={18} className="text-brand-accent mt-0.5 shrink-0" />
                        <span className="font-body text-sm text-brand-text">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
