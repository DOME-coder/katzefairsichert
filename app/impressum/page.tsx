import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Impressum – KatzeFAIRsichert',
}

export default function Impressum() {
  return (
    <section className="bg-white pt-32 md:pt-40 pb-20 md:pb-28">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          href="/"
          className="link-underline group inline-flex items-center gap-2 mb-10 font-heading text-sm font-semibold text-brand-accent hover:text-brand-accentDark transition-colors duration-450 ease-emil"
        >
          <ArrowLeft
            size={18}
            strokeWidth={2.25}
            className="transition-transform duration-450 ease-emil group-hover:-translate-x-1"
          />
          <span>Zurück zur Startseite</span>
        </Link>

        <h1 className="font-heading text-h1 font-bold tracking-tight-3 mb-10">
          Impressum
        </h1>

        <div className="space-y-6 text-brand-text leading-relaxed">
          <div>
            <p className="font-heading font-semibold text-lg mb-1">
              KatzeFAIRsichert
            </p>
            <p>Stettener Hauptstraße 66</p>
            <p>70771 Leinfelden-Echterdingen</p>
          </div>

          <div>
            <p>
              <a
                href="mailto:support@katzefairsichert.de"
                className="text-brand-accent hover:text-brand-accentDark transition-colors"
              >
                support@katzefairsichert.de
              </a>
            </p>
            <p>+49 155 60422451</p>
          </div>

          <div>
            <p className="font-heading font-semibold text-lg mb-1">
              SENATOR Versicherungsmakler GmbH
            </p>
            <p>Geschäftsführer: Gianclaudio Sena und Marc Ernst</p>
            <p>Registergericht Stuttgart HRB 746143</p>
            <p>Steuer-Nr. 96060/07060</p>
          </div>
        </div>
      </div>
    </section>
  )
}
