import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum – KatzeFAIRsichert',
}

export default function Impressum() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="font-heading text-[32px] md:text-5xl font-bold mb-8">
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
