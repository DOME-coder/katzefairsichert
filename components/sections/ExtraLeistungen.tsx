'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { EXTRA_LEISTUNGEN } from '@/lib/constants'

export default function ExtraLeistungen() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-content mx-auto px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="font-heading text-[1.625rem] md:text-[2.25rem] font-semibold text-brand-text">
            {EXTRA_LEISTUNGEN.title}
          </h2>
          <p className="mt-3 font-body text-base text-brand-grayMid">
            {EXTRA_LEISTUNGEN.subtitle}
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXTRA_LEISTUNGEN.items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border border-brand-border rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="relative aspect-video">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-brand-text">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-sm text-brand-grayMid leading-[1.7]">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
