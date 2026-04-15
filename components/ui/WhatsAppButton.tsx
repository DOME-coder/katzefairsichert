'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ''
  const href = `https://wa.me/${whatsappNumber}`

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Auf WhatsApp schreiben"
        className="group relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] ring-2 ring-white/30 transition-all duration-600 ease-emil hover:scale-110 hover:shadow-[0_12px_32px_rgba(37,211,102,0.6)] animate-float"
      >
        {/* Dual concentric ripple rings */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366]/50 animate-ripple"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366]/50 animate-ripple-delay"
        />

        {/* Icon with subtle wiggle on hover */}
        <MessageCircle
          size={26}
          strokeWidth={2}
          className="relative z-10 transition-transform duration-600 ease-spring group-hover:rotate-12"
        />

        {/* Tooltip — desktop only */}
        <span className="hidden md:block absolute right-full mr-4 px-4 py-2 bg-brand-text text-white text-sm font-heading font-semibold rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-450 ease-emil pointer-events-none shadow-brand-md">
          Jetzt beraten lassen
        </span>
      </a>
    </div>
  )
}
