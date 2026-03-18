# DESIGN.md – KatzeFAIRsichert

Vollständiges Design-System. Diese Vorgaben sind für alle Komponenten verbindlich.

---

## Farben

```css
/* Primäre Farben */
--color-bg-soft:     #F3EEF8;  /* sanftes Lavendel – Haupthintergrund */
--color-white:       #FFFFFF;  /* Hintergrund abwechselnder Sektionen */
--color-text-dark:   #2D2D3A;  /* Haupttextfarbe (leicht bläuliches Dunkel) */

/* Akzentfarben */
--color-accent:      #9B6DBF;  /* mittleres Violett – CTAs, Highlights */
--color-accent-dark: #7A4FA0;  /* dunkles Violett – Hover-Zustand */

/* Unterstützende Farben */
--color-gray-light:  #F7F4FB;  /* sekundäre Hintergründe, Cards */
--color-gray-mid:    #8E8EA0;  /* sekundärer Text, Platzhalter */
--color-border:      #DDD5EA;  /* Rahmen, Trennlinien */

/* Statusfarben */
--color-success:     #4CAF50;  /* Häkchen ✓ in der Tariftabelle */
--color-error:       #E57373;  /* Kreuz ✗ in der Tariftabelle */
```

**Tailwind-Konfiguration (tailwind.config.ts):**
```js
colors: {
  brand: {
    lavender:    '#F3EEF8',
    accent:      '#9B6DBF',
    accentDark:  '#7A4FA0',
    text:        '#2D2D3A',
    border:      '#DDD5EA',
  }
}
```

---

## Typografie

```css
/* Schriftarten */
--font-heading: 'Raleway', sans-serif;   /* Überschriften, Navigation, Buttons */
--font-body:    'Poppins', sans-serif;   /* Fließtext */
```

**Typografische Hierarchie:**

| Element | Schrift | Größe | Gewicht | Hinweis |
|---|---|---|---|---|
| H1 (Hero) | Raleway | 48px / 3rem | 700 | Mobile: 32px |
| H2 (Abschnitt) | Raleway | 36px / 2.25rem | 600 | Mobile: 26px |
| H3 (Karte) | Raleway | 24px / 1.5rem | 600 | |
| Fließtext | Poppins | 16px / 1rem | 400 | Zeilenhöhe: 1.7 |
| Kleiner Text | Poppins | 14px / 0.875rem | 400 | |
| Button | Raleway | 16px / 1rem | 600 | Großbuchstaben, Buchstabenabstand |
| Navigation | Raleway | 15px / 0.9375rem | 500 | |

---

## Abstände

Vielfache von 4px verwenden (Standard-Tailwind-System):

| Verwendung | Wert |
|---|---|
| Vertikaler Sektionsabstand | 80px (py-20) |
| Sektionsabstand Mobile | 48px (py-12) |
| Abstand zwischen Cards | 24px (gap-6) |
| Innerer Card-Abstand | 32px (p-8) |
| Maximale Inhaltsbreite | 1200px (max-w-6xl) |
| Horizontaler Inhaltsabstand | 24px (px-6) |

---

## Breakpoints

```
sm:  640px   (Smartphone Querformat)
md:  768px   (Tablet)
lg:  1024px  (Kleiner Desktop)
xl:  1280px  (Desktop)
2xl: 1536px  (Großer Desktop)
```

---

## Basis-UI-Komponenten

### Header / Navbar
- Hintergrund: `#FFFFFF` mit `box-shadow: 0 2px 8px rgba(0,0,0,0.06)`
- Sticky oben (position: sticky, top: 0, z-index: 50)
- Logo links, Navigation rechts
- Mobile: Hamburger-Menü
- Höhe: 72px Desktop, 60px Mobile

### Buttons

**Primär (CTA):**
```
Hintergrund: #9B6DBF
Textfarbe: #FFFFFF
Rahmenradius: 8px
Innenabstand: 14px 28px
Schrift: Raleway 600
Hover: Hintergrund #7A4FA0, transform: scale(1.02)
Übergang: all 0.2s ease
```

**Sekundär (Outline):**
```
Hintergrund: transparent
Rahmen: 2px solid #9B6DBF
Textfarbe: #9B6DBF
Hover: Hintergrund #F3EEF8
```

### Cards
```
Hintergrund: #FFFFFF
Rahmen: 1px solid #DDD5EA
Rahmenradius: 12px
Innenabstand: 32px
Schatten: 0 2px 12px rgba(0,0,0,0.06)
Hover: Schatten 0 4px 20px rgba(155,109,191,0.15), transform: translateY(-2px)
Übergang: all 0.2s ease
```

### Sektionen – Hintergrundwechsel
```
Sektion 1 (Hero):               Bild-Hintergrund / #F3EEF8
Sektion 2 (Team):               #FFFFFF
Sektion 3 (Vorteile):           #F3EEF8
Sektion 4 (Tarifvergleich):     #FFFFFF
Sektion 5 (Versicherungsfall):  #F3EEF8
Sektion 6 (Wissenswertes):      #FFFFFF
Sektion 7 (FAQ):                #F3EEF8
Footer:                         #2D2D3A (weißer Text)
```

---

## WhatsApp-Button (schwebend)
```
Position: fixed, unten: 24px, rechts: 24px
z-index: 100
Hintergrund: #25D366 (WhatsApp-Grün)
Rahmenradius: 50%
Breite: 56px, Höhe: 56px
Schatten: 0 4px 12px rgba(0,0,0,0.2)
Hover: scale(1.1)
```

---

## Icons
- Bibliothek: **Lucide React**
- Standardgröße: 24px
- Groß (Feature-Icons): 48px
- Farbe: vom Text geerbt oder `#9B6DBF` für Akzente

---

## Animationen (Framer Motion)

**Sektionseingang (beim Scrollen):**
```js
initial: { opacity: 0, y: 30 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.5, ease: 'easeOut' }
```

**Card Hover:** `whileHover: { y: -4 }`

**Tariftoggle:** `AnimatePresence` mit horizontalem Slide

**FAQ Akkordeon:** Höhenanimation mit `motion.div`

---

## Responsive – Allgemeine Regeln

- Raster: 1 Spalte Mobile → 2 Spalten Tablet → 3 Spalten Desktop
- H1-Schriftgröße: 32px Mobile → 48px Desktop
- Sektionsabstand: 48px Mobile → 80px Desktop
- Katzen-Hotspots: Mobile als Liste unterhalb des Bildes, nicht als Overlay
- Tariftabelle: Mobile mit horizontalem Scroll
