# CLAUDE.md – KatzeFAIRsichert

Lies diese Datei zu Beginn jeder Sitzung. Sie enthält alle dauerhaften Anweisungen für dieses Projekt.

---

## Projekt

**Name:** KatzeFAIRsichert  
**Kunde:** SENATOR Versicherungsmakler GmbH  
**Typ:** Statische Marketing-Website (kein Backend, kein CMS)  
**Sprache:** Deutsch (DE)  
**Referenz-Website:** https://www.hundefairsichert.de

---

## Tech-Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animationen:** Framer Motion
- **Icons:** Lucide React
- **Schriftarten:** Raleway (Überschriften), Poppins (Fließtext) – via Google Fonts
- **Bilder:** next/image mit Lazy Loading und WebP-Format
- **Deployment:** Docker + Coolify
- **Analytics:** Google Analytics 4 (Platzhalter – ID in .env)

---

## Ordnerstruktur

```
katzefairsichert/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Team.tsx
│   │   ├── Vorteile.tsx
│   │   ├── TarifVergleich.tsx
│   │   ├── Versicherungsfall.tsx
│   │   ├── Wissenswertes.tsx
│   │   └── FAQ.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Toggle.tsx
│       ├── Accordion.tsx
│       └── WhatsAppButton.tsx
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── team/
│   │   └── katzen/
│   └── favicon.ico
├── lib/
│   └── constants.ts        ← Texte, Tarifdaten, FAQs, Hotspots
├── CLAUDE.md
├── PRD.md
├── DESIGN.md
├── COMPONENTS.md
├── CONTENT.md
├── .env.local
├── .env.example
├── Dockerfile
├── docker-compose.yml
└── README.md
```

---

## Code-Konventionen

- **Codesprache:** Englisch (Variablen, Funktionen, Kommentare)
- **Inhaltssprache:** Deutsch (alle sichtbaren Texte)
- **Komponenten:** PascalCase, eine Komponente pro Datei
- **Alle Texte und Daten** gehören in `lib/constants.ts` – niemals hardcoded in Komponenten
- **Kein CSS inline** – ausschließlich Tailwind-Klassen verwenden
- **Kein `any` in TypeScript** – immer typisieren
- **Bilder** immer mit `next/image`, niemals `<img>`
- **Mobile-First** – erst Mobile stylen, dann md: lg: xl:

---

## Nützliche Befehle

```bash
# Lokale Entwicklung
npm run dev

# Produktions-Build
npm run build

# Docker lokal
docker compose up --build

# Lint
npm run lint
```

---

## Umgebungsvariablen (.env.local)

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_WHATSAPP_NUMBER=49XXXXXXXXXX
NEXT_PUBLIC_EMAIL=support@katzefairsichert.de
```

---

## Wichtige Regeln

- **Nicht ändern:** `Dockerfile` und `docker-compose.yml` – nur auf ausdrückliche Anweisung
- **Keine neuen Bibliotheken** installieren, die nicht in dieser Datei aufgeführt sind, ohne vorher zu fragen
- **Keine Texte oder Preise erfinden** – Platzhalter aus `CONTENT.md` verwenden
- **Immer `COMPONENTS.md` lesen** vor der Entwicklung interaktiver Komponenten
- **Immer `DESIGN.md` lesen** vor der Anwendung von Styles
- Jeder Seitenbereich entspricht einer Komponente in `components/sections/`

---

## Referenzdokumente

| Datei | Zweck |
|---|---|
| `PRD.md` | Vollständige Projektanforderungen |
| `DESIGN.md` | Farben, Schriften, Abstände, Breakpoints |
| `COMPONENTS.md` | Verhalten interaktiver Komponenten |
| `CONTENT.md` | Alle Texte und Inhalte |
