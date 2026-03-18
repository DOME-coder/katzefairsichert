# PRD – KatzeFAIRsichert Website

## 1. Projektübersicht

**Projektname:** KatzeFAIRsichert  
**Typ:** Einzel-Website (kein CMS, kein Backend) – Next.js  
**Sprache:** Deutsch  
**Referenz-Website:** [HundeFAIRsichert](https://www.hundefairsichert.de) – gleiche Struktur, gleiches Unternehmen (SENATOR Versicherungsmakler GmbH), angepasst für Katzen  
**Zielgruppe:** Katzenbesitzer in Deutschland, die eine Krankenversicherung für ihre Katze suchen

---

## 2. Ziel der Website

Die Website soll Katzenbesitzer informieren, überzeugen und zur Kontaktaufnahme oder zum Vertragsabschluss motivieren. Sie muss:
- Alle Versicherungsprodukte klar und verständlich erklären
- Einen direkten Vergleich zwischen den Tarifen ermöglichen
- Interaktive Elemente nutzen, um Vertrauen und Engagement zu erzeugen
- Einen klaren Call-to-Action (CTA) bieten

---

## 3. Design & Stilrichtlinien

**Referenz:** Strukturell wie [hundefairsichert.de](https://www.hundefairsichert.de), mit eigenem Katzen-Branding
- Modernes, elegantes Layout
- Helle Lavendel-Hintergründe mit Violett-Akzenten
- Freundliche, vertrauenserweckende Typografie
- Hochwertige Tier-Bilder (Katzen)
- Mobile-First Responsive Design
- Navigation: Sticky Header mit Logo links, Menüpunkte rechts

**Farbpalette (Katzen-Branding):**
- Primär: Sanftes Lavendel (`#F3EEF8`)
- Akzent: Mittleres Violett (`#9B6DBF`) für CTAs und Highlights
- Hover: Dunkles Violett (`#7A4FA0`)
- Text: Dunkelblau-Grau (`#2D2D3A`)

**Assets (vom Auftraggeber bereitgestellt):**
- ✅ Logo KatzeFAIRsichert (als Datei übergeben)
- ✅ Team-Fotos (als Dateien übergeben)

---

## 4. Seitenstruktur & Navigation

```
Navigation:
├── Start (Startseite / Hero)
├── Vorteile und Leistungen
├── Vergleich unserer Tarife
├── Im Versicherungsfall
├── FAQs
└── Wissenswertes (Top 10 Behandlungen – interaktiv)
```

---

## 5. Seiteninhalt – Detailbeschreibung

### 5.1 Startseite (Hero Section)

- **Hero-Bild:** Hochwertiges Foto einer Katze (oder Katze mit Besitzer)
- **Headline:** „Deine Katze verdient den besten Schutz"
- **Subline:** Kurze Beschreibung des Angebots
- **CTA-Button:** „Jetzt Anfrage schicken" → Link zu WhatsApp
- **Sektion „Das sind wir":** Vorstellung des Teams mit Fotos und Namen (Mitarbeiter von SENATOR Versicherungsmakler GmbH)

---

### 5.2 Vorteile und Leistungen

Erklärung der zwei Hauptprodukte:

**OP-Schutz:**
- Absicherung medizinisch notwendiger Operationen
- Ursachen: Unfall, Krankheit, Fehlentwicklung
- Inklusive Nachbehandlung (bis zu 15 Tage)

**Vollschutz:**
- Alles aus OP-Schutz PLUS
- Behandlungen ohne OP
- Alternative/komplementäre Methoden (z.B. Homöopathie, Physiotherapie)

**Flexible Selbstbeteiligung:**
- Mit oder ohne Selbstbeteiligung buchbar
- 10% SB: max. 1.500 € pro Rechnung
- 20% SB: max. 3.000 € pro Rechnung

**4 Tarifstufen:** Basis | Smart | Komfort | Premium

---

### 5.3 Vergleich unserer Tarife (INTERAKTIV)

**Anforderung:** Interaktive Tabelle mit Swipe/Toggle zwischen OP-Schutz und Vollschutz

**UI-Konzept:**
- Toggle-Button oben: `[OP-Schutz]` / `[Vollschutz]`
- Beim Klick/Swipe wechselt die Tabelle mit Animation
- Tabelle zeigt: Leistungsmerkmale vs. Tarifstufen (Basis / Smart / Komfort / Premium)
- Checkmarks (✓) und Kreuze (✗) für Leistungen je Tarif
- Preis-Zeile am Ende (falls Preise vorhanden)
- Highlight-Effekt für empfohlenen Tarif (z.B. „Beliebteste Wahl") in Violett

**Wechseloption-Baustein:**
- Separater Abschnitt unterhalb der Tabelle
- Erklärt den Zusatzbaustein „Wechseloption":
  - Einmalig beim Abschluss zubuchbar
  - Ermöglicht **einmaligen Tarifwechsel** in einen höherwertigen Tarif
  - Beispiel: Von Basis → Premium ohne erneute Gesundheitsprüfung
  - Nur einmal nutzbar während der Vertragslaufzeit

---

### 5.4 Im Versicherungsfall (Schritt-für-Schritt-Anleitung)

**Anforderung:** Detaillierte, visuelle Schritt-für-Schritt-Anleitung

**UI-Konzept:**
- Nummerierte Schritte mit Icons
- Klar formuliert, einfache Sprache

**UI-Schritte (visuell dargestellt):**
1. 🏥 Tierarzt frei wählen und behandeln lassen
2. 🧾 GOT-konforme Rechnung anfordern
3. 📤 Rechnung einreichen (selbst erstatten ODER Direktabrechnung wählen)
4. 💬 Bei Rückfragen: direkte Kommunikation mit Tierarzt möglich (Schweigepflichtentbindung)
5. ✅ Schnelle Abwicklung und Erstattung

---

### 5.5 Wissenswertes – Top 10 Behandlungen bei der Katze (INTERAKTIV)

**Anforderung:** SVG-Grafik einer Katze mit klickbaren Hotspots

**UI-Konzept:**
- Seitliche Ansicht einer Katze als SVG oder Illustration
- 10 nummerierte Hotspots an anatomisch korrekten Stellen
- Beim Klick auf einen Hotspot: **Bubble/Tooltip** erscheint mit:
  - Name der Behandlung/Erkrankung
  - Kurze Erklärung (2–3 Sätze)
  - Häufigkeit in Deutschland (falls verfügbar)
- Auf Mobile: Hotspots größer, Bubble unterhalb der Grafik
- Alternativ: Liste der 10 Behandlungen unterhalb der Grafik für SEO

**Top 10 häufige Behandlungen bei der Katze in Deutschland:**
1. **Harnwegsprobleme (FLUTD)** (Blase/Harnwege) – häufigste Erkrankungsgruppe
2. **Nierenerkrankungen (CNE)** – häufigste Todesursache bei Senioren-Katzen
3. **Zahnerkrankungen** – Zahnstein, FORL, Gingivitis
4. **Hauterkrankungen / Allergien** – Parasiten, Umwelt, Futter
5. **Hyperthyreose** – häufigste Hormonerkrankung bei Senioren-Katzen
6. **Atemwegserkrankungen** – Asthma, Katzenschnupfen
7. **Traumata & Verletzungen** – besonders bei Freigängern
8. **Magen-Darm-Erkrankungen** – Erbrechen, Durchfall, IBD
9. **Tumorerkrankungen** – häufig bei älteren Katzen
10. **Augenerkrankungen** – Bindehaut, Hornhaut, Glaukom

---

### 5.6 FAQ – Häufig gestellte Fragen

**Zwei Kategorien:**

#### A) Allgemeine Fragen zur Katzenversicherung
- Was ist eine Katzenkrankenversicherung?
- Ab welchem Alter kann ich meine Katze versichern?
- Welche Erkrankungen sind ausgeschlossen?
- Was passiert bei Vorerkrankungen?
- Kann ich jeden Tierarzt aufsuchen?
- Gilt die Versicherung auch für Freigänger?
- Gibt es Wartezeiten?

#### B) Fragen zum Wechseloption-Baustein
- Was ist die Wechseloption?
- Wie buche ich die Wechseloption?
- Wann kann ich die Wechseloption nutzen?
- Kann ich die Wechseloption mehrmals nutzen?
- Von welchem Tarif kann ich in welchen wechseln?
- Was kostet der Baustein?

**UI-Konzept:** Akkordeon-Komponente (Frage klicken → Antwort klappt auf)

---

## 6. Technische Anforderungen

| Kriterium | Anforderung |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Animationen | Framer Motion |
| Icons | Lucide React |
| Responsive | Mobile-First, Breakpoints: sm/md/lg/xl |
| SEO | Meta Tags, Open Graph, strukturierte Daten |
| Performance | Bilder optimiert (WebP), lazy loading |
| Deployment | Docker + Coolify |
| Analytics | Google Analytics 4 vorbereiten (Platzhalter) |

---

## 7. Interaktive Komponenten – Zusammenfassung

| Komponente | Typ | Priorität |
|---|---|---|
| Tarif-Vergleichstabelle | Toggle OP-Schutz / Vollschutz | 🔴 Hoch |
| Katzen-Körper-Grafik | Klickbare Hotspots mit Bubbles | 🔴 Hoch |
| FAQ Akkordeon | Expand/Collapse | 🟡 Mittel |
| Schritt-für-Schritt Versicherungsfall | Nummerierte Karten | 🟡 Mittel |
| WhatsApp CTA Button | Floating oder in Hero | 🔴 Hoch |

---

## 8. Assets & Noch fehlende Informationen

### ✅ Bestätigt / Vorhanden
- [x] 4 Tarifstufen: **Basis / Smart / Komfort / Premium**
- [x] Text „Im Versicherungsfall" (offiziell bestätigt)
- [x] Logo KatzeFAIRsichert (als Datei bereitgestellt)
- [x] Team-Fotos (als Dateien bereitgestellt)

### ⬜ Noch ausstehend
- [ ] Tarifdetails und Preise je Tarifstufe (Basis / Smart / Komfort / Premium)
- [ ] Genaue Leistungsunterschiede zwischen den 4 Tarifen
- [ ] Kosten des Wechseloption-Bausteins
- [ ] Kontaktdaten (WhatsApp-Nummer, Telefon)
- [ ] Impressum-Daten (SENATOR Versicherungsmakler GmbH)
- [ ] Offizielle Katzen-Bilder (lizenzfrei oder eigene Fotos)
- [ ] Regelung für Freigänger (Versicherungsschutz außerhalb)

---

## 9. Wie Assets in Claude Code übergeben werden

**Logo und Team-Fotos:**
- Dateien in den Projektordner legen: `public/images/logo.png`, `public/images/team/`
- In Claude Code sagen: *„Das Logo liegt unter public/images/logo.png – verwende es im Header"*
- Alternativ: Dateien direkt in den Claude Code Chat ziehen/hochladen

---

## 10. Projektzeitplan (Vorschlag)

| Phase | Aufgabe | Status |
|---|---|---|
| Phase 1 | Setup Projekt, Navigation, Hero | ⬜ Todo |
| Phase 2 | Vorteile & Leistungen | ⬜ Todo |
| Phase 3 | Interaktive Vergleichstabelle | ⬜ Todo |
| Phase 4 | Katzen-Grafik mit Hotspots | ⬜ Todo |
| Phase 5 | Im Versicherungsfall | ⬜ Todo |
| Phase 6 | FAQ Akkordeon | ⬜ Todo |
| Phase 7 | SEO, Performance, Deployment | ⬜ Todo |

---

*Dokument erstellt für: SENATOR Versicherungsmakler GmbH / KatzeFAIRsichert*  
*Referenz: hundefairsichert.de*  
*Zuletzt aktualisiert: März 2026*
