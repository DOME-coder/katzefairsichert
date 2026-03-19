import Image from 'next/image'
import { Instagram, Facebook } from 'lucide-react'
import { FOOTER, SITE } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-brand-text text-white py-12">
      <div className="max-w-content mx-auto px-6 flex flex-col items-center gap-6">
        {/* Logo + Company name */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo-header.png"
            alt="KatzeFAIRsichert Logo"
            width={80}
            height={29}
            className="h-7 w-auto"
          />
          <span className="font-heading text-lg font-semibold">{SITE.name}</span>
        </div>

        <p className="font-body text-sm text-gray-400">
          {FOOTER.company}
        </p>

        {/* Navigation links */}
        <div className="flex items-center gap-6">
          {FOOTER.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-gray-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
            <Facebook size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="font-body text-xs text-gray-500">{FOOTER.copyright}</p>
      </div>
    </footer>
  )
}
