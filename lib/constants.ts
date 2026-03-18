// ─────────────────────────────────────────────
// Allgemein / Navigation
// ─────────────────────────────────────────────
export const SITE = {
  name: 'KatzeFAIRsichert',
} as const

export const NAV_LINKS = [
  { label: 'Start', href: '#hero' },
  { label: 'Vorteile', href: '#vorteile' },
  { label: 'Vergleich Tarife', href: '#tarife' },
  { label: 'Im Versicherungsfall', href: '#versicherungsfall' },
  { label: 'Wissenswertes', href: '#wissenswertes' },
  { label: 'FAQs', href: '#faq' },
] as const

// ─────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────
export const HERO = {
  headline: 'Deine Katze verdient den besten Schutz',
  subline:
    'Faire Krankenversicherung für deine Katze – individuell, transparent und mit persönlicher Beratung.',
  cta: 'Jetzt Anfrage schicken',
} as const

// ─────────────────────────────────────────────
// Team
// ─────────────────────────────────────────────
export const TEAM = {
  title: 'Das sind wir',
  subtitle: 'Dein Team bei KatzeFAIRsichert',
  description:
    'Bei KatzeFAIRsichert dreht sich alles um das Wohl von Katze und Halter. Wir sind dein persönlicher Ansprechpartner, wenn es darum geht, für Sicherheit und Wohlbefinden zu sorgen – für dich und deine Katze. Mit maßgeschneiderten Lösungen ermöglichen wir euch ein sorgenfreies Miteinander, damit ihr euch voll und ganz auf das konzentrieren könnt, was wirklich zählt: das gemeinsame Erleben unvergesslicher Momente.',
  members: [
    { name: 'Gianclaudio Sena', role: 'Geschäftsführer', image: '/images/team/gianclaudio-sena.png' },
    { name: 'Giuseppa Muscara', role: 'Kundenbetreuerin', image: '/images/team/giuseppa-muscara.png' },
    { name: 'Berkan Atac', role: 'Kundenbetreuer', image: '/images/team/berkan-atac.png' },
    { name: 'Maria Russo', role: 'Kundenberaterin', image: '/images/team/maria-russo.png' },
    { name: 'Enza Sena', role: 'Kundenbetreuerin', image: '/images/team/enza-sena.png' },
    { name: 'Gesine Bischoff', role: 'Kundenbetreuerin', image: '/images/team/gesine-bischoff.png' },
    { name: 'Sascha Bauer', role: 'Kundenbetreuer', image: '/images/team/sascha-bauer.png' },
    { name: 'Helena Curic', role: 'Kundenbetreuerin', image: '/images/team/helena-curic.png' },
    { name: 'Asena Yeker', role: 'Vertriebsassistentin', image: '/images/team/asena-yeker.png' },
  ] as Array<{ name: string; role: string; image: string }>,
} as const

// ─────────────────────────────────────────────
// Vorteile (Produkte)
// ─────────────────────────────────────────────
export interface VorteilItem {
  title: string
  description: string
  bullets?: string[]
}

export const VORTEILE = {
  title: 'Möglichkeiten zur Absicherung',
  subtitle: 'Individueller Schutz – Wähle in beiden Produkten den passenden Tarif: Basis, Smart, Komfort oder Premium.',
  intro: 'Auch bei bester Fürsorge kann eine Katze krank werden oder einen Unfall erleiden – und tierärztliche Behandlungen können schnell sehr teuer werden. Operationen und andere Behandlungen gehen oft mit hohen Kosten einher. Seit der Anpassung der Gebührenordnung für Tierärztinnen und Tierärzte (GOT) im November 2022 sind die Tierarztkosten zudem erheblich gestiegen. Eine Katzenkrankenversicherung schützt zuverlässig vor diesen finanziellen Belastungen und erstattet Kosten für notwendige tierärztliche Behandlungen nach Unfall, Krankheit oder Fehlentwicklung.',
  items: [
    {
      title: 'OP-Schutz',
      description:
        'Die OP-Versicherung deckt die Kosten für medizinisch notwendige Operationen aufgrund von Unfall, Krankheit oder Fehlentwicklung sowie Nachbehandlungen von bis zu 30 Tagen.',
    },
    {
      title: 'Vollschutz',
      description:
        'Die Krankenvollversicherung deckt neben den Kosten für Operationen auch die Kosten für notwendige Behandlungen ohne Operationen ab. Hierzu zählen auch alternative und komplementäre Behandlungsmethoden, z. B. Homöopathie.',
    },
    {
      title: 'Flexible Selbstbeteiligung',
      description: 'Alle Tarife sind mit oder ohne Selbstbeteiligung abschließbar. Neu ist die Deckelung der Selbstbeteiligung – für mehr Planbarkeit bei hohen Rechnungen:',
      bullets: [
        '10 % Selbstbeteiligung: maximal 500 € pro Rechnung',
        '20 % Selbstbeteiligung: maximal 1.000 € pro Rechnung',
      ],
    },
  ] satisfies VorteilItem[],
} as const

// ─────────────────────────────────────────────
// Vorteile und Leistungen (Benefit-Cards)
// ─────────────────────────────────────────────
export interface BenefitCard {
  title: string
  description: string
}

export const VORTEILE_LEISTUNGEN = {
  title: 'Vorteile und Leistungen',
  subtitle: 'Was unsere Katzenkrankenversicherung leistet',
  items: [
    {
      title: 'OP-Leistungen',
      description: 'Im OP-Schutz und im Vollschutz werden bei Krankheit oder nach einem Unfall bis zu 100 % der Tierarztkosten für chirurgische Eingriffe unter Narkose (auch Teilnarkose) und deren Nachbehandlung von bis zu 30 Folgetagen unbegrenzt pro Jahr erstattet – abhängig vom gewählten Tarif. Ab Smart sind auch Leistungen für Zahnbehandlungen und chirurgische Behandlungen der Maulhöhle mit gesonderter Höchstleistung versichert.',
    },
    {
      title: 'Behandlungen bei Operationen',
      description: 'Der Vollschutz deckt zusätzlich ambulante und stationäre Tierarztbehandlungen bei Unfall oder Krankheit unabhängig von einer Operation mit ab. Wenn deine Katze beispielsweise wegen einer Durchfallerkrankung ein paar Tage in der Tierklinik bleiben muss oder die Behandlung von chronischen Erkrankungen (z. B. Stoffwechselerkrankung) in einer Tierarztpraxis erfolgen muss, sichert der Vollschutz ab.',
    },
    {
      title: 'Basisvorsorge',
      description: 'Die Vorsorgemaßnahmen Floh- & Zeckenbekämpfung, Entwurmungen, Impfungen (Empfehlung StiKo Vet) sowie die einmalige Kennzeichnung (Mikrochip) sind bereits im OP-Schutz ab dem Tarif Smart mit einer Höchstsumme versichert. Für diese Leistungen besteht keine Selbstbeteiligung und keine Wartezeit.',
    },
    {
      title: 'Vorsorgebonus',
      description: 'Gesunde Katzen profitieren von einem Zuschuss zur Basisvorsorge für leistungsfreie Versicherungsjahre: 50 Euro nach dem ersten und 150 Euro nach dem zweiten, unmittelbar darauffolgenden Jahr. Der Vorsorgebonus entfällt nach einem Jahr mit Leistungen für das Folgejahr.',
    },
    {
      title: 'Keine Wartezeit bei Unfällen',
      description: 'Unsere Katzenkrankenversicherung übernimmt nach einem Unfall die Kosten der Behandlung – ganz ohne Wartezeit! Die Übernahme der Kosten für die versicherte Behandlung richtet sich dabei nach dem gewählten Tarif.',
    },
    {
      title: 'Erstattung nach GOT',
      description: 'Die Tierkrankenversicherung für Katzen zahlt – je nach Tarif – bis zum vierfachen Satz der Gebührenordnung für Tierärztinnen und Tierärzte (GOT). Bei Notfällen, zum Beispiel in der Nacht oder am Wochenende, wird auch die Notdienstgebühr erstattet.',
    },
    {
      title: 'Schutz für Jungtiere',
      description: 'Kitten, die bei Versicherungsbeginn maximal sechs Monate alt sind, haben keine Wartezeit und wir gewähren sofortigen Versicherungsschutz. Auch Vorsorgeleistungen wie Impfungen, die einmalige Kennzeichnung (Mikrochip) und das Ausstellen des EU-Heimtierausweises können gleich genutzt werden.',
    },
    {
      title: 'Physiotherapie',
      description: 'Physiotherapie ist im OP-Schutz (ab Smart) bis zu 60 Tage im Anschluss an eine Operation mit einer Höchstsumme von bis zu 500 Euro pro Versicherungsjahr versichert. Im Vollschutz übernehmen wir auch ohne vorhergehende Operation die Kosten für Physiotherapie durch eine Tierärztin oder einen Tierarzt oder mit Überweisung durch einen Therapeuten oder eine Therapeutin.',
    },
  ] satisfies BenefitCard[],
} as const

// ─────────────────────────────────────────────
// Tarifvergleich
// ─────────────────────────────────────────────
export type TarifToggle = 'OP-Schutz' | 'Vollschutz'
export type TarifStufe = 'Basis' | 'Smart' | 'Komfort' | 'Premium'

export const TARIF_TOGGLE_OPTIONS: [TarifToggle, TarifToggle] = [
  'OP-Schutz',
  'Vollschutz',
]

export const TARIF_STUFEN: TarifStufe[] = ['Basis', 'Smart', 'Komfort', 'Premium']

export interface TarifFeature {
  label: string
  values: [string, string, string, string]
}

export interface TarifPlan {
  features: TarifFeature[]
}

export const TARIF_DATA: Record<TarifToggle, TarifPlan> = {
  'OP-Schutz': {
    features: [
      { label: 'Jahreshöchstleistung', values: ['2.000 €', '4.000 €', '8.000 €', 'unbegrenzt'] },
      { label: 'Selbstbeteiligung', values: ['wählbar', 'wählbar', 'wählbar', 'wählbar'] },
      { label: 'Behandlungen ohne OP', values: ['✗', '✗', '✗', '✗'] },
      { label: 'Erstattung nach GOT', values: ['2-fach', '4-fach', '4-fach', '4-fach'] },
      { label: 'Nachbehandlungen nach OP', values: ['bis 20 Tage', 'bis 20 Tage', 'bis 30 Tage', 'bis 30 Tage'] },
      { label: 'Basisvorsorge', values: ['✗', 'bis 50 €', 'bis 100 €', 'bis 100 €'] },
      { label: 'Vorsorgebonus', values: ['✗', '50 € / 150 €', '50 € / 150 €', '50 € / 150 €'] },
      { label: 'Physiotherapie', values: ['✗', 'bis 150 €', 'bis 500 €', 'bis 500 €'] },
      { label: 'Zahnbehandlungen', values: ['✗', 'bis 1.000 €', 'bis 2.500 €', 'bis 5.000 €'] },
      { label: 'Chirurgische Kastration / Sterilisation', values: ['✗', 'bis 100 €', 'bis 150 €', 'bis 300 €'] },
    ],
  },
  'Vollschutz': {
    features: [
      { label: 'Jahreshöchstleistung', values: ['2.000 €', '4.000 €', '8.000 €', 'unbegrenzt'] },
      { label: 'Selbstbeteiligung', values: ['wählbar', 'wählbar', 'wählbar', 'wählbar'] },
      { label: 'Behandlungen ohne OP', values: ['bis 1.000 €', 'bis 2.000 €', 'bis 4.000 €', 'bis 6.000 €'] },
      { label: 'Erstattung nach GOT', values: ['2-fach', '4-fach', '4-fach', '4-fach'] },
      { label: 'Nachbehandlungen nach OP', values: ['bis 20 Tage', 'bis 20 Tage', 'bis 30 Tage', 'bis 30 Tage'] },
      { label: 'Basisvorsorge', values: ['✗', 'bis 50 €', 'bis 100 €', 'bis 100 €'] },
      { label: 'Vorsorgebonus', values: ['✗', '50 € / 150 €', '50 € / 150 €', '50 € / 150 €'] },
      { label: 'Physiotherapie', values: ['✗', 'bis 150 €', 'bis 500 €', 'bis 500 €'] },
      { label: 'Zahnbehandlungen', values: ['✗', 'bis 1.000 €', 'bis 2.500 €', 'bis 5.000 €'] },
      { label: 'Chirurgische Kastration / Sterilisation', values: ['✗', 'bis 100 €', 'bis 150 €', 'bis 300 €'] },
    ],
  },
}

export const TARIF = {
  title: 'Vergleich unserer Tarife',
  subtitle: 'Finde den Tarif, der am besten zu deiner Katze passt',
  columnHeader: 'Leistung',
  wartezeiten: {
    title: 'Wartezeiten im Überblick',
    subtitle: 'Damit du genau weißt, ab wann dein Schutz greift:',
    items: [
      'Jungtiere unter 6 Monate: keine Wartezeit',
      'Unfall: keine Wartezeit – der Schutz gilt sofort',
      'Basisvorsorge: keine Wartezeit',
      'Krankheit & Fehlentwicklung: 3 Monate Wartezeit',
      'Chirurgische Kastration bzw. Sterilisation & Notkaiserschnitt: 3 Monate Wartezeit',
    ],
  },
  wannZahlt: {
    title: 'Wann zahlt die Katzenkrankenversicherung?',
    zahlt: [
      'Deine Katze nach einem Unfall operiert werden muss, z. B. wegen eines Beinbruchs nach einem Autounfall.',
      'Eine Operation wegen einer Krankheit erforderlich ist, z. B. eine operative Tumorentfernung an der Leber.',
      'Dir Kosten durch Behandlungen ohne Operation und Medikamente entstanden sind, z. B. aufgrund einer chronischen Erkrankung wie Diabetes – sofern der Vollschutz gewählt wurde.',
      'Eine chirurgische Kastration bzw. Sterilisation durchgeführt wird, auch ohne medizinische Indikation (ab Tarif Smart).',
      'Die Kosten der Einschläferung durch Injektion übernommen werden, wenn deine Katze unheilbar erkrankt ist, bei einem Unfall schwer verletzt wurde oder eine tierärztliche Empfehlung zur Einschläferung vorliegt.',
      'Zahnbehandlungen oder chirurgische Behandlungen der Maulhöhle notwendig sind (z. B. Zahnextraktion, Zahnfüllung, Wurzelbehandlung).',
    ],
    zahltNicht: [
      'Kosten durch spezielles Diät- und Ergänzungsfuttermittel entstehen.',
      'Medizinisch nicht notwendige Behandlungen vorgenommen werden, z. B. Operationen zur Herstellung des Rassestandards.',
      'Kosten durch Vitamine und Mineralstoffpräparate entstehen.',
      'Eine Selbstbeteiligung vereinbart ist – die Kosten in Höhe der Selbstbeteiligung müssen selbst getragen werden.',
      'Ein Krankheitsfall oder eine Fehlentwicklung während der Wartezeit auftritt.',
    ],
  },
  wechseloption: {
    title: 'Zusatzbaustein Wechseloption',
    badge: 'Einmalig zubuchbar',
    description:
      'Du hast einmalig bei einem Erstabschluss der neuen Katzenkrankenversicherung die Möglichkeit, den Zusatzbaustein „Wechseloption" in deinen Vertrag einzuschließen. Du kannst den Baustein einmalig nutzen, um die Leistungen in deinem Vertrag zu verbessern.',
    bullets: [
      'Leistungsverbesserungen ohne erneute Gesundheitsprüfung',
      'Einmalig während der gesamten Vertragslaufzeit nutzbar – keine Frist',
      'Ohne Zusatzbaustein ist eine Verbesserung nur mit erneuter Gesundheitsprüfung möglich',
      'Für neu hinzukommende Leistungen greifen die Wartezeiten',
    ],
  },
} as const

// ─────────────────────────────────────────────
// Extra Leistungen
// ─────────────────────────────────────────────
export interface ExtraLeistungItem {
  image: string
  title: string
  text: string
}

export const EXTRA_LEISTUNGEN = {
  title: 'Extra Leistungen',
  subtitle: 'Zusätzliche Vorteile für deine Katze',
  items: [
    {
      image: '/images/katzen/cat-window.jpg',
      title: 'Lebenslange Absicherung',
      text: 'Wir versichern Katzen ab der achten Lebenswoche – ohne Maximalalter und mit gleichbleibenden Leistungen im Alter. Zudem verzichten wir ab dem vierten Versicherungsjahr auf unser ordentliches Kündigungsrecht zum Ablauf sowie auf unser Kündigungsrecht im Versicherungsfall.',
    },
    {
      image: '/images/katzen/airplane.jpg',
      title: 'Schutz im Ausland',
      text: 'Der Versicherungsschutz für Katzen gilt auch im Ausland, und zwar bis zu zwölf Monate bei weltweiten Reisen. Erstattet werden auch versicherte Behandlungen, die gezielt im Ausland durchgeführt werden.',
    },
    {
      image: '/images/katzen/vet-desk.jpg',
      title: 'Telemedizin',
      text: 'Bevor spätabends ein Besuch bei einer Tierarztpraxis notwendig ist, kann auch per Smartphone oder Telefon eine digitale Sprechstunde direkt mit einem niedergelassenen Tierarzt genutzt werden. Wir übernehmen auch die Kosten für eine telemedizinische Beratung.',
    },
    {
      image: '/images/katzen/kitten.jpg',
      title: 'Freie Tierarztwahl & Direktabrechnung',
      text: 'Die Tierarztpraxis bzw. Tierklinik kann frei gewählt werden. Damit nach einer Operation die Genesung im Mittelpunkt stehen kann, übernehmen wir gerne die Direktabrechnung mit der Tierarztpraxis oder Klinik.',
    },
  ] satisfies ExtraLeistungItem[],
} as const

// ─────────────────────────────────────────────
// Versicherungsfall
// ─────────────────────────────────────────────
export interface VersicherungsfallStep {
  step: number
  title: string
  text: string
  bullets?: string[]
}

export const VERSICHERUNGSFALL = {
  title: 'Im Versicherungsfall',
  subtitle: 'So einfach funktioniert die Abwicklung',
  steps: [
    {
      step: 1,
      title: 'Tierarzt frei wählen',
      text: 'Für dich besteht freie Tierarztwahl. Muss deine Katze tierärztlich behandelt werden, kannst du den Tierarzt oder die Tierklinik deines Vertrauens aufsuchen.',
    },
    {
      step: 2,
      title: 'GOT-konforme Rechnung anfordern',
      text: 'Die Rechnung des Tierarztes ist nach der Gebührenordnung für Tierärztinnen und Tierärzte (GOT) zu erstellen und muss mindestens folgende Daten enthalten:',
      bullets: [
        'Name des Versicherungsnehmers (Tierhalter)',
        'Chipnummer / Tätowierungsnummer / Lebensnummer des Tieres',
        'Diagnose',
        'Berechnete Leistungen aufgegliedert nach Gebührenpositionen mit dem jeweiligen Gebührensatz',
        'Datum der erbrachten Leistungen',
      ],
    },
    {
      step: 3,
      title: 'Erstattungsweg wählen',
      text: 'Als besonderen Service bieten wir die Direktabrechnung mit dem Tierarzt an. Du kannst wählen, ob du im Versicherungsfall die Erstattungskosten selbst erhalten möchtest oder direkt an den behandelnden Tierarzt gezahlt werden sollen.',
    },
    {
      step: 4,
      title: 'Direkte Kommunikation mit dem Tierarzt',
      text: 'Zusätzlich bieten wir die direkte Kommunikation mit dem Tierarzt bei Leistungsrückfragen an (Entbindung von der Schweigepflicht). Damit können eventuelle tiermedizinische Rückfragen direkt mit dem behandelnden Tierarzt geklärt werden.',
    },
    {
      step: 5,
      title: 'Schnelle Erstattung',
      text: 'Versicherungsfälle können so schnell und bequemer für dich abgeschlossen werden.',
    },
  ] satisfies VersicherungsfallStep[],
} as const

// ─────────────────────────────────────────────
// Wissenswertes – Hotspots
// ─────────────────────────────────────────────
export interface HotspotItem {
  id: number
  title: string
  bodyPart: string
  description: string
  leistung: string
  kosten: string
  frequency: string
  position: { x: number; y: number }
}

export const WISSENSWERTES = {
  title: 'Wissenswertes',
  subtitle: 'Die Top 8 Behandlungen bei Katzen',
  hotspots: [
    {
      id: 1,
      title: 'Hauttumore',
      bodyPart: 'Haut / Gewebe',
      description: 'Sie kommen vor allem bei älteren Katzen häufiger vor. Bei Geschwulsten muss es sich aber nicht zwangsläufig um Krebs handeln: Viele Tumore sind gutartig, zum Beispiel Lipome (Fettgeschwulste).',
      leistung: 'Operative Entfernung von Hauttumoren. Nachbehandlung sowie Aufenthalt in der Tierklinik je nach Tarif bis zu 30 Tagen nach der OP. Im Vollschutz sind – unabhängig davon, ob operiert werden muss oder nicht – je nach Tarif bis zu 6.000 Euro jährlich für Heilbehandlungen, Medikamente und Arzneimittel abgesichert.',
      kosten: 'ca. 1.200 bis 1.900 €',
      frequency: 'Häufig bei älteren Katzen',
      position: { x: 45, y: 35 },
    },
    {
      id: 2,
      title: 'FORL (Zahnerkrankung)',
      bodyPart: 'Zähne / Maul',
      description: 'FORL ist eine bei Katzen häufige, schmerzhafte Zahnerkrankung. Dabei werden Zähne nach und nach zerstört – oft bleibt lange unbemerkt, dass die Katze Schmerzen hat. Häufig ist eine Behandlung nur durch das Ziehen betroffener Zähne möglich.',
      leistung: 'FORL-Behandlungen sind in allen Tarifen ab Smart mitversichert. Wir übernehmen die Kosten für Untersuchungen am letzten Untersuchungstag vor der OP, an dem die Notwendigkeit zur Durchführung festgestellt wurde. Nachbehandlung sowie Aufenthalt in der Tierklinik je nach Tarif bis zu 30 Tagen nach der OP.',
      kosten: 'ca. 1.400 bis 2.000 €',
      frequency: 'Sehr häufig bei Katzen',
      position: { x: 18, y: 30 },
    },
    {
      id: 3,
      title: 'Katzenstaupe',
      bodyPart: 'Immunsystem',
      description: 'Katzenstaupe ist eine hoch ansteckende Viruserkrankung, die vor allem bei jungen oder ungeimpften Katzen schwer verlaufen kann. Häufig sind starke Magen-Darm-Beschwerden und ein deutlich geschwächter Allgemeinzustand – oft ist eine intensive Behandlung notwendig.',
      leistung: 'Für die Behandlung von Katzenstaupe sind neben Arzneimitteln und Medikamenten häufig auch Infusionen notwendig. Im Vollschutz sind diese Behandlungen – je nach Tarif – bis zu 6.000 Euro abgesichert.',
      kosten: 'bis zu 1.100 €',
      frequency: 'Häufig bei ungeimpften Katzen',
      position: { x: 40, y: 50 },
    },
    {
      id: 4,
      title: 'Diabetes',
      bodyPart: 'Stoffwechsel',
      description: 'Diabetes ist eine Stoffwechselerkrankung, bei der der Blutzucker nicht mehr richtig reguliert wird. Für betroffene Katzen sind neben Medikamenten häufig regelmäßige Kontrollen und Nachuntersuchungen notwendig, um die Werte stabil einzustellen.',
      leistung: 'Um eine Diabeteserkrankung zu behandeln, sind neben Medikamenten auch regelmäßige Untersuchungen und die Kontrolle des Blutzuckerwertes nötig. Im Vollschutz sind diese Behandlungen – je nach Tarif – bis zu 6.000 Euro abgesichert.',
      kosten: 'ca. 800 € jährlich',
      frequency: 'Häufig bei älteren Katzen',
      position: { x: 50, y: 45 },
    },
    {
      id: 5,
      title: 'Chronische Niereninsuffizienz',
      bodyPart: 'Nieren',
      description: 'Eine chronische Niereninsuffizienz ist eine häufige Erkrankung, bei der die Nieren dauerhaft geschädigt sind und ihre Funktion nach und nach nachlässt. Oft sind regelmäßige Kontrollen und eine langfristige Behandlung nötig, um die Lebensqualität deiner Katze möglichst lange zu erhalten.',
      leistung: 'Für die Behandlung einer Niereninsuffizienz sind neben Arzneimitteln und Medikamenten häufig Infusionen notwendig, zusätzlich müssen oft viele Nachuntersuchungen durchgeführt werden. Im Vollschutz stehen für diese Behandlungen – je nach Tarif – bis zu 6.000 Euro jährlich zur Verfügung. Alternative Heilmethoden wie Homöopathie sind ebenfalls mitversichert, wenn sie von einem Tierarzt durchgeführt werden.',
      kosten: 'bis zu 2.200 € jährlich',
      frequency: 'Häufig bei älteren Katzen',
      position: { x: 55, y: 40 },
    },
    {
      id: 6,
      title: 'Ohrenentzündung',
      bodyPart: 'Ohren',
      description: 'Ohrenentzündungen können bei Katzen immer wieder auftreten und sind für die Tiere oft sehr unangenehm. Typische Anzeichen sind z. B. häufiges Kratzen am Ohr oder Kopfschütteln – dann sollte das Ohr tierärztlich untersucht werden.',
      leistung: 'Zur Behandlung einer Ohrenentzündung muss zunächst das Ohr gesäubert werden und ein Ohrenmedikament angewendet werden. Bei besonders schweren Fällen sind zudem Schmerzmittel und Antibiotika notwendig. Im Vollschutz sind je nach Tarif bis zu 6.000 Euro jährlich für Heilbehandlungen abgesichert.',
      kosten: 'bis zu 250 €',
      frequency: 'Häufig bei Katzen',
      position: { x: 15, y: 25 },
    },
    {
      id: 7,
      title: 'Hautverletzungen / (Biss)Wunden',
      bodyPart: 'Haut / Gewebe',
      description: 'Gerade bei Freigängern kommen Schnitt- oder Bisswunden häufiger vor – zum Beispiel nach Revierkämpfen. Auch kleine Verletzungen können sich entzünden und sollten deshalb frühzeitig tierärztlich behandelt werden.',
      leistung: 'Das Nähen von Schnittwunden oder Hautverletzungen ist in allen Tarifen mitversichert. Hat sich deine Katze eine schlimme Schnittverletzung zugezogen und es muss operiert werden, übernehmen wir die Kosten für Untersuchungen und die Nachbehandlung bis zu 30 Tage nach der OP.',
      kosten: 'bis zu 500 €',
      frequency: 'Häufig bei Freigängern',
      position: { x: 65, y: 60 },
    },
    {
      id: 8,
      title: 'Kreuzbandriss',
      bodyPart: 'Kniegelenk',
      description: 'Ein Kreuzbandriss ist eine schmerzhafte Verletzung, die plötzlich auftreten kann – etwa nach einem Sprung oder einem unglücklichen Tritt. Häufig ist eine Operation notwendig, damit sich das betroffene Bein wieder stabilisieren kann.',
      leistung: 'Kreuzbandoperationen sind in allen Tarifen abgedeckt. Wir übernehmen die Kosten für Untersuchungen am letzten Untersuchungstag vor der OP und die Nachbehandlung bis zu 30 Tage nach der OP (ambulant und stationär).',
      kosten: 'bis zu 1.800 €',
      frequency: 'Selten, aber kostspielig',
      position: { x: 70, y: 70 },
    },
  ] satisfies HotspotItem[],
} as const

// ─────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────
export interface FaqItem {
  question: string
  answer: string
}

export const FAQ = {
  title: 'Häufig gestellte Fragen',
  subtitle: 'Hier findest du häufig gestellte Fragen rund um das Thema Katzenversicherung und Wechselbaustein',
  categoryA: {
    title: 'Katzenversicherung',
    items: [
      {
        question: 'Was ist der Unterschied zwischen OP-Schutz und Vollschutz?',
        answer: 'Der OP-Schutz übernimmt die Kosten für medizinisch notwendige Operationen unter Narkose (auch Teilnarkose) inklusive der versicherten Nachbehandlung. Der Vollschutz deckt darüber hinaus auch Behandlungen ohne Operation (ambulant und stationär) sowie Medikamente ab – bis zu einer tarifabhängigen Höchstsumme. Je nach Tarif können außerdem weitere Leistungen wie z. B. die chirurgische Kastration bzw. Sterilisation mitversichert sein.',
      },
      {
        question: 'Welche Kosten übernimmt die Katzenkrankenversicherung grundsätzlich?',
        answer: 'Sie erstattet versicherte Tierarztkosten für notwendige Behandlungen wegen Unfall, Krankheit oder Fehlentwicklung – inklusive Diagnostik, ggf. Operationen und der medizinisch notwendigen Nachbehandlung im vereinbarten Zeitraum. Umfang und Erstattung richten sich dabei nach dem gewählten Tarif.',
      },
      {
        question: 'Gibt es eine Jahreshöchstleistung und wie unterscheiden sich die Tarife?',
        answer: 'Ja. Sowohl im OP-Schutz als auch im Vollschutz gilt je nach Tarif eine Jahreshöchstleistung: 2.000 € (Basis), 4.000 € (Smart), 8.000 € (Komfort) oder unbegrenzt (Premium) pro Versicherungsjahr.',
      },
      {
        question: 'Welche Wartezeiten gelten?',
        answer: 'Bei Unfällen gibt es keine Wartezeit – der Schutz gilt sofort. Für Krankheit und Fehlentwicklung gilt eine Wartezeit von 3 Monaten. Für chirurgische Kastration bzw. Sterilisation und Notkaiserschnitt ebenfalls 3 Monate. Für Jungtiere unter 6 Monaten besteht keine Wartezeit.',
      },
      {
        question: 'Wie funktioniert die Selbstbeteiligung (inkl. Deckelung)?',
        answer: 'Du kannst die Selbstbeteiligung wahlweise mit 0 %, 10 % oder 20 % vereinbaren. Bei 10 % zahlst du 10 % der Tierarztrechnung selbst, jedoch maximal 500 € pro Rechnung. Bei 20 % sind es maximal 1.000 € pro Rechnung. Dadurch bleibt dein Eigenanteil auch bei hohen Rechnungen planbar.',
      },
      {
        question: 'Wie hoch sind die Leistungen für Behandlungen ohne OP im Vollschutz?',
        answer: 'Im Vollschutz sind Behandlungen ohne Operation bis zu 1.000 € (Basis), 2.000 € (Smart), 4.000 € (Komfort) bzw. 6.000 € (Premium) pro Versicherungsjahr versichert.',
      },
      {
        question: 'Welche Vorsorgeleistungen sind enthalten und was ist der Vorsorgebonus?',
        answer: 'Ab Smart sind Basisvorsorge-Leistungen (z. B. Floh- & Zeckenbekämpfung, Entwurmung, Impfungen nach StiKo Vet sowie die einmalige Kennzeichnung per Mikrochip) bis zu 50 € (Smart) bzw. bis zu 100 € (Komfort/Premium) pro Versicherungsjahr versichert. Zusätzlich gibt es einen Vorsorgebonus: 50 € nach 1 und 150 € nach 2 unmittelbar aufeinanderfolgenden leistungsfreien Jahren.',
      },
    ] satisfies FaqItem[],
  },
  categoryB: {
    title: 'Wechseloption',
    items: [
      {
        question: 'Wann kann ich den Zusatzbaustein „Wechseloption" abschließen?',
        answer: 'Den Zusatzbaustein „Wechseloption" kannst du einmalig beim ersten Abschluss der neuen Katzenkrankenversicherung abschließen – entweder im Neuantrag oder im Ersatzantrag.',
      },
      {
        question: 'Welche Wechseloptionen bietet der Zusatzbaustein?',
        answer: 'Mit dem Zusatzbaustein sind Vertragsverbesserungen einmalig ohne erneute Gesundheitsprüfung möglich. Dazu zählen der Wechsel der Linie, der Wechsel zwischen OP-Schutz und Vollschutz sowie die Reduzierung der Selbstbeteiligung.',
      },
      {
        question: 'Ist der Wechsel in eine höherwertige Linie ohne Gesundheitsprüfung möglich?',
        answer: 'Ja – allerdings nur, wenn der Zusatzbaustein „Wechseloption" abgeschlossen wurde.',
      },
      {
        question: 'Ist ein Wechsel auch ohne den Zusatzbaustein möglich?',
        answer: 'Ja. Leistungsverbesserungen sind auch ohne Zusatzbaustein möglich – dann jedoch nur mit erneuter Gesundheitsprüfung. Diese kann im Folgevertrag ggf. zu Leistungsausschlüssen führen.',
      },
      {
        question: 'Gibt es Wartezeiten für den Wechselbaustein?',
        answer: 'Teilweise. Für neu hinzukommende Leistungen greifen die jeweiligen Wartezeiten (z. B. beim Wechsel vom OP-Schutz in den Vollschutz).',
      },
      {
        question: 'Gibt es eine Frist für den Einsatz des Wechselbausteins?',
        answer: 'Nein. Der Zusatzbaustein „Wechseloption" kann einmalig und ohne feste Frist während der gesamten Vertragslaufzeit genutzt werden.',
      },
      {
        question: 'Sind mehrere Verbesserungen gleichzeitig möglich?',
        answer: 'Ja, mehrere Verbesserungen bzw. Wechsel sind gleichzeitig möglich.',
      },
    ] satisfies FaqItem[],
  },
} as const

// ─────────────────────────────────────────────
// CTA / Kontakt
// ─────────────────────────────────────────────
export const CTA = {
  title: 'Wir beraten dich gerne',
  subtitle: 'Unsere Experten stehen dir mit Rat und Tat zur Seite – ob bei konkreten Fragen oder individuellen Anliegen. Lass uns gemeinsam die beste Lösung für dich finden.',
  button: 'Jetzt auf WhatsApp schreiben',
} as const

export const CONTACT = {
  email: 'support@katzefairsichert.de',
} as const

// ─────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────
export const FOOTER = {
  company: 'SENATOR Versicherungsmakler GmbH',
  copyright: '© 2025 SENATOR Versicherungsmakler GmbH',
  links: [
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
  ],
} as const
