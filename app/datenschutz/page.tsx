import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Datenschutz – KatzeFAIRsichert',
}

export default function Datenschutz() {
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
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 text-brand-text leading-relaxed">
          {/* 1 */}
          <div>
            <h2 className="font-heading text-xl font-semibold mb-3">
              1. Einleitung
            </h2>
            <p>
              Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges
              Anliegen. Wir verarbeiten Ihre Daten ausschließlich im Rahmen der
              gesetzlichen Bestimmungen, insbesondere der
              Datenschutz-Grundverordnung (DSGVO) und des
              Bundesdatenschutzgesetzes (BDSG). Nachfolgend informieren wir Sie
              über die Verarbeitung personenbezogener Daten auf unserer Website,
              insbesondere im Zusammenhang mit Facebook und Instagram.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="font-heading text-xl font-semibold mb-3">
              2. Verantwortlicher
            </h2>
            <p>Gianclaudio Sena e. K.</p>
            <p>Stettener Hauptstraße 62</p>
            <p>70771 Leinfelden-Echterdingen</p>
            <p>Telefon: 0711 78239633</p>
            <p>
              E-Mail:{' '}
              <a
                href="mailto:support@katzefairsichert.de"
                className="text-brand-accent hover:text-brand-accentDark transition-colors"
              >
                support@katzefairsichert.de
              </a>
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="font-heading text-xl font-semibold mb-3">
              3. Zwecke und Rechtsgrundlagen der Datenverarbeitung
            </h2>

            <h3 className="font-heading font-semibold mb-2">
              Allgemeine Nutzung der Website
            </h3>
            <p className="mb-4">
              Wir erheben und verarbeiten personenbezogene Daten (z.&nbsp;B.
              IP-Adressen, Cookies, Nutzungsdaten) zur Bereitstellung unserer
              Website und ihrer Inhalte sowie zur Sicherstellung der
              Funktionalität. Die Verarbeitung erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem
              funktionierenden und sicheren Internetauftritt).
            </p>

            <h3 className="font-heading font-semibold mb-2">
              Datenverarbeitung durch Facebook und Instagram
            </h3>
            <p className="mb-3">
              Unsere Website kann Funktionen und Inhalte der sozialen Netzwerke
              Facebook und Instagram (Meta Platforms Inc., 1 Hacker Way, Menlo
              Park, CA 94025, USA) einbinden, wie z.&nbsp;B. Social Plugins,
              „Gefällt mir"-Buttons oder eingebettete Beiträge.
            </p>

            <p className="font-semibold mb-1">Verarbeitete Daten:</p>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>IP-Adresse</li>
              <li>Browser- und Gerätedaten</li>
              <li>
                Nutzungsdaten (z.&nbsp;B. besuchte Seiten, Interaktionen mit
                Inhalten)
              </li>
              <li>
                Daten, die im Rahmen Ihrer Profilnutzung bei Facebook oder
                Instagram generiert werden
              </li>
            </ul>

            <p className="font-semibold mb-1">Rechtsgrundlage:</p>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>
                Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO, die Sie über
                unser Cookie-Banner erteilen können.
              </li>
              <li>
                Vertragserfüllung nach Art. 6 Abs. 1 lit. b DSGVO, falls Sie
                mit uns über Facebook/Instagram interagieren (z.&nbsp;B. in
                Kommentaren oder Nachrichten).
              </li>
            </ul>

            <p className="font-semibold mb-1">
              Datenübermittlung in Drittländer:
            </p>
            <p>
              Facebook und Instagram können Ihre Daten in die USA übertragen. Es
              besteht derzeit kein Angemessenheitsbeschluss der EU für die USA.
              Die Übertragung erfolgt auf Grundlage von
              Standardvertragsklauseln, um ein angemessenes Datenschutzniveau
              sicherzustellen.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="font-heading text-xl font-semibold mb-3">
              4. Cookies und Tracking-Technologien
            </h2>
            <p className="mb-3">
              Wir verwenden Cookies und ähnliche Technologien, um
              Nutzerverhalten zu analysieren, Inhalte zu personalisieren und
              Werbung zu schalten. Hierzu können auch Dienste von Drittanbietern
              wie Facebook Pixel eingesetzt werden.
            </p>

            <p className="font-semibold mb-1">Facebook Pixel:</p>
            <p className="mb-3">
              Mit Facebook Pixel analysieren wir das Verhalten der Nutzer auf
              unserer Website und spielen gezielte Werbung auf
              Facebook/Instagram aus. Dabei werden Daten an Meta Platforms Inc.
              übermittelt. Die Rechtsgrundlage hierfür ist Ihre Einwilligung
              (Art. 6 Abs. 1 lit. a DSGVO).
            </p>

            <p className="font-semibold mb-1">Widerruf:</p>
            <p>
              Sie können Ihre Einwilligung jederzeit über die
              Cookie-Einstellungen auf unserer Website widerrufen oder Cookies
              in Ihrem Browser löschen.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="font-heading text-xl font-semibold mb-3">
              5. Betroffenenrechte
            </h2>
            <p className="mb-3">
              Sie haben folgende Rechte gemäß DSGVO:
            </p>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>
                Auskunft über die Verarbeitung Ihrer Daten (Art. 15 DSGVO)
              </li>
              <li>
                Berichtigung unrichtiger oder unvollständiger Daten (Art. 16
                DSGVO)
              </li>
              <li>
                Löschung Ihrer Daten (Art. 17 DSGVO), soweit keine gesetzlichen
                Aufbewahrungspflichten bestehen
              </li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p>
              Zudem können Sie sich bei einer Datenschutzaufsichtsbehörde
              beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer
              Daten gegen die DSGVO verstößt.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="font-heading text-xl font-semibold mb-3">
              6. Kontakt zum Datenschutz
            </h2>
            <p className="mb-2">
              Für Fragen zum Datenschutz können Sie uns jederzeit kontaktieren:
            </p>
            <p>Gianclaudio Sena e. K.</p>
            <p>Stettener Hauptstraße 62</p>
            <p>70771 Leinfelden-Echterdingen</p>
            <p>Telefon: 0711 78239633</p>
            <p>
              E-Mail:{' '}
              <a
                href="mailto:support@katzefairsichert.de"
                className="text-brand-accent hover:text-brand-accentDark transition-colors"
              >
                support@katzefairsichert.de
              </a>
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="font-heading text-xl font-semibold mb-3">
              7. Änderungen des Datenschutz-Hinweises
            </h2>
            <p>
              Wir behalten uns vor, diesen Hinweis anzupassen, um ihn an
              rechtliche oder technische Änderungen anzupassen. Die aktuelle
              Version finden Sie jederzeit auf unserer Website.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
