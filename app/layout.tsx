import type { Metadata } from 'next'
import { Raleway, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'KatzeFAIRsichert – Faire Krankenversicherung für deine Katze',
  description:
    'Faire Krankenversicherung für deine Katze – individuell, transparent und mit persönlicher Beratung. Von SENATOR Versicherungsmakler GmbH.',
  openGraph: {
    title: 'KatzeFAIRsichert – Faire Krankenversicherung für deine Katze',
    description:
      'Faire Krankenversicherung für deine Katze – individuell, transparent und mit persönlicher Beratung.',
    locale: 'de_DE',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body
        className={`${raleway.variable} ${poppins.variable} font-heading text-brand-text bg-brand-lavender`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
