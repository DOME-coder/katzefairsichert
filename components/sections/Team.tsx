'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import { TEAM } from '@/lib/constants'

export default function Team() {
  return (
    <section id="team" className="bg-white py-12 md:py-20">
      <div className="max-w-content mx-auto px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="font-heading text-[1.625rem] md:text-[2.25rem] font-semibold text-brand-text">
            {TEAM.title}
          </h2>
          <p className="mt-3 font-heading text-base text-brand-grayMid">
            {TEAM.subtitle}
          </p>
          {'description' in TEAM && (
            <p className="mt-4 font-heading text-sm text-brand-grayMid leading-[1.7] max-w-3xl mx-auto">
              {TEAM.description}
            </p>
          )}
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.members.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white border border-brand-border rounded-xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {member.image ? (
                <div className="relative w-24 h-24 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-24 h-24 rounded-full bg-brand-lavender flex items-center justify-center">
                  <User size={40} className="text-brand-grayMid" />
                </div>
              )}

              <h3 className="mt-5 font-heading text-[1.5rem] font-semibold text-brand-text">
                {member.name}
              </h3>
              <p className="mt-1 font-body text-sm text-brand-grayMid">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
