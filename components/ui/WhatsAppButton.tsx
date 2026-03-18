'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ''
  const href = `https://wa.me/${whatsappNumber}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Auf WhatsApp schreiben"
      className="group fixed bottom-6 right-6 z-[100] w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:scale-110 transition-transform duration-200"
    >
      <MessageCircle size={24} />

      {/* Tooltip – desktop only */}
      <span className="hidden md:block absolute right-full mr-3 px-3 py-1.5 bg-brand-text text-white text-sm font-heading rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Jetzt beraten lassen
      </span>
    </a>
  )
}
