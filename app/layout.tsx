import type { Metadata } from 'next'
import Script from 'next/script'
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

const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const hasGA = GA_ID && !GA_ID.includes('XXXX')

export const metadata: Metadata = {
  metadataBase: new URL('https://katzefairsichert.de'),
  title: 'KatzeFAIRsichert – Faire Krankenversicherung für deine Katze',
  description:
    'Faire Krankenversicherung für deine Katze – individuell, transparent und mit persönlicher Beratung. Von SENATOR Versicherungsmakler GmbH.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'KatzeFAIRsichert – Faire Krankenversicherung für deine Katze',
    description:
      'Faire Krankenversicherung für deine Katze – individuell, transparent und mit persönlicher Beratung.',
    url: 'https://katzefairsichert.de',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KatzeFAIRsichert – Faire Krankenversicherung für deine Katze',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KatzeFAIRsichert – Faire Krankenversicherung für deine Katze',
    description:
      'Faire Krankenversicherung für deine Katze – individuell, transparent und mit persönlicher Beratung.',
    images: ['/images/og-image.jpg'],
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
        className={`${raleway.variable} ${poppins.variable} font-body text-brand-text bg-white antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />

        {/* Google Analytics 4 */}
        {hasGA && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-config" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
