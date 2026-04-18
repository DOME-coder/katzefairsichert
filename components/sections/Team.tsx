'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import { TEAM } from '@/lib/constants'
import SectionHeader from '@/components/ui/SectionHeader'
import { EMIL } from '@/components/ui/AnimateInView'

export default function Team() {
  return (
    <section id="team" className="relative bg-white py-20 md:py-32">
      <div className="max-w-content mx-auto px-6">
        <SectionHeader
          eyebrow="Unser Team"
          title={TEAM.title}
          subtitle={TEAM.subtitle}
        />
        {'description' in TEAM && (
          <motion.p
            className="mt-5 mx-auto max-w-3xl text-center font-body text-sm text-brand-grayMid leading-[1.8]"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: EMIL, delay: 0.2 }}
          >
            {TEAM.description}
          </motion.p>
        )}

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.members.map((member, index) => (
            <motion.div
              key={index}
              className="group gradient-border relative bg-white/85 backdrop-blur-sm rounded-2xl border border-brand-border/60 p-6 md:p-8 flex flex-col items-center text-center shadow-brand-sm transition-all duration-600 ease-emil hover:-translate-y-2 hover:shadow-brand-lg hover:border-brand-accent/40"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, ease: EMIL, delay: index * 0.08 }}
            >
              {member.image ? (
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-1 ring-brand-border/50 transition-all duration-600 ease-emil group-hover:ring-brand-accent/30 group-hover:shadow-brand-glow">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-600 ease-emil group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-brand-lavender flex items-center justify-center ring-1 ring-brand-border/50">
                  <User size={44} className="text-brand-grayMid" />
                </div>
              )}

              <h3 className="mt-6 font-heading text-[1.5rem] font-semibold tracking-tight-2 text-brand-text">
                {member.name}
              </h3>
              <div className="mt-3 mb-3 h-px w-10 bg-brand-accent/40 transition-all duration-500 ease-emil group-hover:w-16 group-hover:bg-brand-accent" />
              <p className="font-body text-sm text-brand-grayMid">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
