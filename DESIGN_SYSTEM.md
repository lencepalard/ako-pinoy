# Ako Pinoy — Design System & UI/UX Reference

> A comprehensive, research-backed design specification for the Ako Pinoy Filipino language and culture learning app.
> Covers web (Next.js) and mobile (Expo/React Native) surfaces.
> Based on 2025–2026 UI/UX trends, WCAG 2.2, education app patterns, and Filipino/tropical aesthetics.

---

## Table of Contents

1. [Brand Identity & Filipino Aesthetic](#1-brand-identity--filipino-aesthetic)
2. [Color System](#2-color-system)
3. [Typography System](#3-typography-system)
4. [Layout Patterns](#4-layout-patterns)
5. [Component Design Patterns](#5-component-design-patterns)
6. [Animation & Micro-interaction System](#6-animation--micro-interaction-system)
7. [Dark Mode System](#7-dark-mode-system)
8. [Glassmorphism Specs](#8-glassmorphism-specs)
9. [Neubrutalism Accent Style](#9-neubrutalism-accent-style)
10. [Mobile-First Design Patterns](#10-mobile-first-design-patterns)
11. [Accessibility Standards (WCAG 2.2)](#11-accessibility-standards-wcag-22)
12. [Education & Language App UX Patterns](#12-education--language-app-ux-patterns)
13. [Gamification UI Patterns](#13-gamification-ui-patterns)
14. [Tailwind CSS v4 Design Tokens](#14-tailwind-css-v4-design-tokens)

---

## 1. Brand Identity & Filipino Aesthetic

### Core Visual Identity

Ako Pinoy's visual language is built on the intersection of:
- **Philippine national colors** (patriotic foundation)
- **Tropical warmth** (ocean blues, sunset oranges, lush greens, ripe mango yellows)
- **Jeepney art** (vibrant, layered, expressive, folk-art energy)
- **Sampaguita softness** (the national flower — white, delicate, fragrant)
- **Parol geometry** (the Christmas lantern — star shapes, radiating patterns, warm light)
- **Modern gamified learning** (Duolingo-inspired energy, clean scaffolding)

### Aesthetic Direction: "Tropical Modern"

The style sits between vibrant tropical warmth and clean modern UI — NOT a pure neobrutalist nor pure glassmorphism app. Instead:
- **Base:** Clean white/cream surfaces with tropical accent colors
- **Emotion:** Warm, welcoming, joyful, celebratory
- **Personality:** Playful but trustworthy; educational but not sterile
- **References:** Think Duolingo's energy + tropical resort aesthetic + jeepney folk art accents

### Filipino Cultural Color Anchors

| Element | Color | Hex | Application |
|---------|-------|-----|-------------|
| Philippine Blue | Cobalt | `#0038A8` | Primary brand, trust, learning |
| Philippine Red | Crimson | `#CE1126` | Alerts, streaks, urgency, energy |
| Philippine Gold | Pollen Yellow | `#FCD116` | XP, rewards, achievements, CTA highlights |
| Sampaguita White | Warm White | `#FFFDF5` | Background base, purity, clarity |
| Ocean Blue | Turquoise | `#0EA5E9` | Progress, water, tropical sky |
| Tropical Green | Leaf Green | `#22C55E` | Success, correct answers, nature |
| Sunset Orange | Mango | `#F97316` | Streaks, warm energy, food module |
| Jeepney Pink | Hot Pink | `#EC4899` | Festivals, fiestas, celebrations |
| Bamboo Tan | Sandy Beige | `#D4A96A` | Cultural modules, warmth, heritage |
| Baybayin Ink | Deep Sepia | `#3D2B1F` | Typography accent, traditional scripts |

---

## 2. Color System

### 2.1 Primary Palette (Light Mode)

```css
/* ===== AKO PINOY DESIGN TOKENS ===== */
:root {
  /* === BRAND PRIMARIES === */
  --color-brand-blue:        #0038A8;  /* Philippine flag blue */
  --color-brand-blue-light:  #1D4ED8;  /* Brightened for UI */
  --color-brand-blue-dark:   #1E3A8A;  /* Deep navy, headings */
  --color-brand-red:         #CE1126;  /* Philippine flag red */
  --color-brand-red-light:   #EF4444;  /* Error states, hearts */
  --color-brand-gold:        #FCD116;  /* Philippine flag gold */
  --color-brand-gold-dark:   #D4A017;  /* Hover state for gold */

  /* === TROPICAL ACCENTS === */
  --color-ocean:             #0EA5E9;  /* Sky/water */
  --color-ocean-dark:        #0284C7;  /* Deeper ocean */
  --color-leaf:              #22C55E;  /* Tropical green / success */
  --color-leaf-dark:         #16A34A;  /* Deeper green */
  --color-sunset:            #F97316;  /* Mango orange / streaks */
  --color-sunset-dark:       #EA580C;  /* Deeper sunset */
  --color-hibiscus:          #EC4899;  /* Fiesta pink */
  --color-sampaguita:        #F9FAFB;  /* Near-white, flower white */
  --color-bamboo:            #D4A96A;  /* Tan, heritage */
  --color-baybayin:          #3D2B1F;  /* Deep sepia ink */

  /* === SEMANTIC ROLES === */
  --color-success:           #22C55E;
  --color-success-bg:        #DCFCE7;
  --color-error:             #EF4444;
  --color-error-bg:          #FEE2E2;
  --color-warning:           #F59E0B;
  --color-warning-bg:        #FEF3C7;
  --color-info:              #3B82F6;
  --color-info-bg:           #DBEAFE;

  /* === NEUTRAL SURFACES (Light Mode) === */
  --color-bg-base:           #FFFDF5;  /* Warm white / sampaguita */
  --color-bg-surface:        #FFFFFF;
  --color-bg-elevated:       #F8F7F2;  /* Slightly warm off-white */
  --color-bg-subtle:         #F1EFE8;  /* Card backgrounds */
  --color-border:            #E5E2D9;
  --color-border-strong:     #D1CEC5;

  /* === TEXT (Light Mode) === */
  --color-text-primary:      #1A1612;  /* Near black, warm undertone */
  --color-text-secondary:    #57534E;  /* Stone gray */
  --color-text-tertiary:     #A8A29E;  /* Muted / placeholder */
  --color-text-inverse:      #FFFDF5;  /* Text on dark backgrounds */
  --color-text-link:         #1D4ED8;  /* Blue links */
  --color-text-link-visited: #7C3AED;

  /* === GAMIFICATION COLORS === */
  --color-xp:                #FCD116;  /* XP rewards */
  --color-xp-glow:           rgba(252, 209, 22, 0.3);
  --color-streak:            #F97316;  /* Streak fire */
  --color-streak-glow:       rgba(249, 115, 22, 0.3);
  --color-heart:             #EF4444;  /* Hearts / lives */
  --color-league:            #A855F7;  /* League / level */
  --color-crown:             #D97706;  /* Top performer */
}
```

### 2.2 Gradient Palette

```css
:root {
  /* === TROPICAL GRADIENTS === */
  /* Primary CTA — Ocean to Blue */
  --gradient-primary:
    linear-gradient(135deg, #0EA5E9 0%, #0038A8 100%);

  /* Hero header — Philippine dawn */
  --gradient-hero:
    linear-gradient(160deg, #FCD116 0%, #F97316 35%, #CE1126 70%, #0038A8 100%);

  /* Success / correct answer — Leaf burst */
  --gradient-success:
    linear-gradient(135deg, #86EFAC 0%, #22C55E 50%, #16A34A 100%);

  /* XP reward — Gold glow */
  --gradient-xp:
    linear-gradient(135deg, #FEF08A 0%, #FCD116 50%, #D4A017 100%);

  /* Streak / fire */
  --gradient-streak:
    linear-gradient(135deg, #FEF08A 0%, #F97316 50%, #CE1126 100%);

  /* Tropical sunset background */
  --gradient-sunset:
    linear-gradient(180deg, #FFF7ED 0%, #FED7AA 40%, #FDBA74 100%);

  /* Ocean depth — Progress bars */
  --gradient-ocean:
    linear-gradient(90deg, #7DD3FC 0%, #0EA5E9 50%, #0038A8 100%);

  /* Baybayin / Heritage module */
  --gradient-heritage:
    linear-gradient(135deg, #FEF3C7 0%, #D4A96A 50%, #3D2B1F 100%);

  /* Card shimmer overlay (loading skeleton) */
  --gradient-shimmer:
    linear-gradient(
      90deg,
      rgba(255,255,255,0) 0%,
      rgba(255,255,255,0.4) 50%,
      rgba(255,255,255,0) 100%
    );

  /* Glassmorphism tint — tropical */
  --gradient-glass-tropical:
    linear-gradient(
      135deg,
      rgba(14, 165, 233, 0.15) 0%,
      rgba(252, 209, 22, 0.08) 100%
    );
}
```

### 2.3 Duolingo-Inspired Semantic Color Map

Mapping Ako Pinoy's gamification colors to functions (following Duolingo's proven color grammar):

| Function | Color | Hex | Notes |
|----------|-------|-----|-------|
| Primary CTA | Philippine Blue | `#0038A8` | Main action buttons |
| Success / Correct | Tropical Green | `#22C55E` | Quiz correct, checkmarks |
| Error / Incorrect | Philippine Red | `#EF4444` | Wrong answers, hearts lost |
| XP / Rewards | Philippine Gold | `#FCD116` | Points, coins, achievements |
| Streaks | Sunset Orange | `#F97316` | Fire streak indicator |
| Premium / League | Hibiscus Purple | `#A855F7` | Premium tier, top league |
| Events / Fiesta | Hibiscus Pink | `#EC4899` | Festival modules, specials |
| Information | Ocean Blue | `#0EA5E9` | Tips, tooltips, info banners |
| Neutral CTA | Warm Stone | `#78716C` | Secondary buttons |

---

## 3. Typography System

### 3.1 Font Stack

```css
/* Primary UI Font — Clean, modern, high legibility */
--font-ui: 'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, sans-serif;

/* Display / Headings — Character and warmth */
--font-display: 'Nunito', 'Plus Jakarta Sans', sans-serif;

/* Body / Reading — Maximum legibility for lesson content */
--font-body: 'Inter', 'DM Sans', system-ui, sans-serif;

/* Tagalog Script / Cultural accent — When displaying Baybayin */
--font-baybayin: 'Noto Sans Tagalog', 'Noto Sans', serif;

/* Monospace — Code snippets, IPA phonetics */
--font-mono: 'Space Mono', 'JetBrains Mono', monospace;
```

**Font Rationale:**
- **Plus Jakarta Sans** — Southeast Asian design heritage, excellent at small sizes, 9 weights, variable font support. Perfect for a Filipino app.
- **Nunito** — Rounded, friendly, approachable. Best for headings in an educational/gamified context. Universally loved for learning apps.
- **Inter** — Industry standard for UI text, optimized for screen rendering at 12–16px.
- **Noto Sans Tagalog** — Only font with full Baybayin/Tagalog Unicode support (Google Fonts, free).
- **DM Sans** — Geometric, clean fallback for body text.

### 3.2 Type Scale (Mobile — Base 16px)

```css
:root {
  /* === TYPE SCALE === */
  /* Base: 16px, Scale: Major Third (1.25) */

  --text-xs:    0.64rem;   /* 10.24px — Labels, badges, timestamps */
  --text-sm:    0.8rem;    /* 12.8px  — Captions, secondary info */
  --text-base:  1rem;      /* 16px    — Body text, quiz answers */
  --text-lg:    1.25rem;   /* 20px    — Card titles, section headers */
  --text-xl:    1.563rem;  /* 25px    — Page sub-headings */
  --text-2xl:   1.953rem;  /* 31px    — Page headings */
  --text-3xl:   2.441rem;  /* 39px    — Hero text, feature titles */
  --text-4xl:   3.052rem;  /* 49px    — Display, celebration screens */
  --text-5xl:   3.815rem;  /* 61px    — Maximum display use */

  /* === LINE HEIGHTS === */
  --leading-none:    1;
  --leading-tight:   1.2;   /* Headings */
  --leading-snug:    1.35;  /* Sub-headings */
  --leading-normal:  1.5;   /* Body text */
  --leading-relaxed: 1.65;  /* Long-form lesson content */
  --leading-loose:   2;     /* Spaced out text */

  /* === LETTER SPACING === */
  --tracking-tighter: -0.04em;  /* Large display headings */
  --tracking-tight:   -0.02em;  /* Headings 24px+ */
  --tracking-normal:   0em;     /* Body text */
  --tracking-wide:     0.04em;  /* Labels, captions */
  --tracking-wider:    0.08em;  /* Badges, all-caps elements */
  --tracking-widest:   0.12em;  /* Button text, tag labels */
}
```

### 3.3 Component Typography Specs

```css
/* === PAGE TITLES === */
.page-title {
  font-family: var(--font-display);    /* Nunito */
  font-size: var(--text-2xl);          /* 31px */
  font-weight: 800;
  line-height: var(--leading-tight);   /* 1.2 */
  letter-spacing: var(--tracking-tight); /* -0.02em */
  color: var(--color-text-primary);
}

/* === SECTION HEADINGS === */
.section-heading {
  font-family: var(--font-display);    /* Nunito */
  font-size: var(--text-xl);           /* 25px */
  font-weight: 700;
  line-height: var(--leading-snug);    /* 1.35 */
  letter-spacing: var(--tracking-tight);
}

/* === CARD TITLES === */
.card-title {
  font-family: var(--font-ui);         /* Plus Jakarta Sans */
  font-size: var(--text-lg);           /* 20px */
  font-weight: 700;
  line-height: var(--leading-snug);
}

/* === BODY TEXT (Lesson content) === */
.body-text {
  font-family: var(--font-body);       /* Inter */
  font-size: var(--text-base);         /* 16px */
  font-weight: 400;
  line-height: var(--leading-relaxed); /* 1.65 */
  color: var(--color-text-secondary);
}

/* === TAGALOG WORD DISPLAY === */
.tagalog-word {
  font-family: var(--font-display);    /* Nunito */
  font-size: var(--text-3xl);          /* 39px */
  font-weight: 800;
  letter-spacing: var(--tracking-tight);
  color: var(--color-brand-blue);
}

/* === BAYBAYIN SCRIPT DISPLAY === */
.baybayin-text {
  font-family: var(--font-baybayin);   /* Noto Sans Tagalog */
  font-size: var(--text-3xl);
  line-height: var(--leading-relaxed);
  color: var(--color-baybayin);
}

/* === QUIZ ANSWER OPTIONS === */
.quiz-option-text {
  font-family: var(--font-ui);
  font-size: var(--text-base);         /* 16px */
  font-weight: 600;
  line-height: var(--leading-normal);
}

/* === BUTTON TEXT === */
.btn-text {
  font-family: var(--font-ui);
  font-size: var(--text-base);
  font-weight: 700;
  letter-spacing: var(--tracking-widest); /* 0.12em */
  text-transform: uppercase;
}

/* === LABELS & BADGES === */
.label-text {
  font-family: var(--font-ui);
  font-size: var(--text-sm);           /* 12.8px */
  font-weight: 600;
  letter-spacing: var(--tracking-wider); /* 0.08em */
  text-transform: uppercase;
}

/* === XP / NUMBER DISPLAYS === */
.xp-number {
  font-family: var(--font-display);    /* Nunito */
  font-size: var(--text-4xl);          /* 49px */
  font-weight: 900;
  color: var(--color-xp);
}
```

### 3.4 Typography Trends Applied

- **Variable font** loading: Load Plus Jakarta Sans and Nunito as variable fonts to cover all weights (100–900) in a single network request.
- **Fluid typography**: Use `clamp()` for hero/display text so it scales between mobile and desktop without media queries.

```css
/* Fluid display text example */
.hero-display {
  font-size: clamp(2rem, 5vw + 1rem, 4rem);
  font-weight: 900;
  letter-spacing: -0.03em;
}
```

---

## 4. Layout Patterns

### 4.1 Bento Grid System

Bento grids are the dominant 2025–2026 layout for dashboards and feature showcases. The Ako Pinoy dashboard uses a bento grid for the home screen.

```css
/* === BENTO GRID FOUNDATION === */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 12px;
  padding: 16px;
}

/* Cell span utilities */
.bento-cell-full    { grid-column: span 12; }
.bento-cell-half    { grid-column: span 6; }
.bento-cell-third   { grid-column: span 4; }
.bento-cell-quarter { grid-column: span 3; }
.bento-cell-tall    { grid-row: span 2; }
.bento-cell-wide    { grid-column: span 8; }

/* Responsive collapse — mobile single column */
@media (max-width: 640px) {
  .bento-cell-half,
  .bento-cell-third,
  .bento-cell-quarter {
    grid-column: span 12;
  }
  .bento-cell-wide {
    grid-column: span 12;
  }
}
```

**Ako Pinoy Home Dashboard Bento Layout:**
```
┌────────────────────────────────────┐
│  Daily Streak (full width - 12)    │  <- Streak card, orange gradient
├──────────────┬─────────────────────┤
│  XP This     │  Level Progress     │  <- 5 + 7 columns
│  Week (5)    │  Bar (7)            │
├──────────────┴──────────┬──────────┤
│  Today's Lesson (8)     │ Daily    │  <- 8 + 4 columns
│                         │ Word (4) │
├────────────┬────────────┴──────────┤
│ Vocab (4)  │ Culture (4)│ Quiz (4) │  <- Three equal thirds
└────────────┴────────────┴──────────┘
```

### 4.2 Spacing System (8px Grid)

```css
:root {
  --space-1:   4px;
  --space-2:   8px;
  --space-3:   12px;
  --space-4:   16px;
  --space-5:   20px;
  --space-6:   24px;
  --space-8:   32px;
  --space-10:  40px;
  --space-12:  48px;
  --space-16:  64px;
  --space-20:  80px;
  --space-24:  96px;

  /* Content width constraints */
  --max-width-sm:   640px;
  --max-width-md:   768px;
  --max-width-lg:   1024px;
  --max-width-xl:   1280px;
  --max-width-content: 680px;  /* Lesson reading content */
}
```

### 4.3 Border Radius System

```css
:root {
  --radius-sm:   6px;    /* Small elements: badges, tags */
  --radius-md:   12px;   /* Buttons, inputs */
  --radius-lg:   16px;   /* Cards */
  --radius-xl:   24px;   /* Modal sheets, large cards */
  --radius-2xl:  32px;   /* Feature hero cards */
  --radius-full: 9999px; /* Pills, avatars, progress bars */
}
```

---

## 5. Component Design Patterns

### 5.1 Cards

Cards are the primary content container across all surfaces. Three card variants:

```css
/* === BASE CARD === */
.card {
  background: var(--color-bg-surface);  /* #FFFFFF */
  border-radius: var(--radius-lg);      /* 16px */
  border: 1px solid var(--color-border); /* #E5E2D9 */
  padding: var(--space-6);              /* 24px */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06),
              0 4px 12px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.10),
              0 12px 32px rgba(0, 0, 0, 0.06);
  transform: translateY(-2px);
}

/* === LESSON CARD === */
.card-lesson {
  background: var(--color-bg-surface);
  border-radius: var(--radius-xl);       /* 24px */
  border: 1.5px solid var(--color-border);
  overflow: hidden;
  /* Thumbnail top, content bottom */
}

.card-lesson__thumbnail {
  aspect-ratio: 16 / 9;
  background: var(--gradient-ocean);   /* fallback gradient */
  object-fit: cover;
}

.card-lesson__body {
  padding: var(--space-5) var(--space-6);
}

/* === VOCABULARY CARD (flashcard) === */
.card-vocab {
  background: var(--color-bg-surface);
  border-radius: var(--radius-xl);      /* 24px */
  border: 2px solid var(--color-brand-blue);
  padding: var(--space-10) var(--space-8);
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 56, 168, 0.12);
  /* Flip animation handled by Framer Motion */
}

/* === CULTURE CARD === */
.card-culture {
  border-radius: var(--radius-xl);
  overflow: hidden;
  position: relative;
  /* Full bleed image with overlay gradient */
}

.card-culture__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(26, 22, 18, 0.85) 0%,
    rgba(26, 22, 18, 0.4) 50%,
    transparent 100%
  );
}

/* === GLASSMORPHISM CARD (used on dark/image backgrounds) === */
.card-glass {
  background: rgba(255, 253, 245, 0.12);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border-radius: var(--radius-xl);       /* 24px */
  border: 1px solid rgba(255, 253, 245, 0.25);
  box-shadow: 0 8px 32px rgba(0, 56, 168, 0.2);
  padding: var(--space-6);
}

/* === SCENARIO CARD (interactive scene) === */
.card-scenario {
  border-radius: var(--radius-2xl);     /* 32px */
  background: var(--gradient-heritage);
  padding: var(--space-8);
  border: none;
  box-shadow: 0 12px 40px rgba(61, 43, 31, 0.2);
}
```

### 5.2 Buttons

Following Duolingo's proven button system with a 3D press effect.

```css
/* === PRIMARY BUTTON (Philippine Blue) === */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: 14px 28px;
  background: var(--color-brand-blue);    /* #0038A8 */
  color: #FFFFFF;
  border-radius: var(--radius-md);        /* 12px */
  font-family: var(--font-ui);
  font-size: var(--text-base);            /* 16px */
  font-weight: 700;
  letter-spacing: var(--tracking-widest); /* 0.12em */
  text-transform: uppercase;
  border: none;
  /* 3D bottom edge — Duolingo-style */
  box-shadow: 0 4px 0 0 #002780,
              0 6px 16px rgba(0, 56, 168, 0.3);
  transition: transform 0.1s ease,
              box-shadow 0.1s ease;
  cursor: pointer;
  min-height: 52px; /* WCAG 2.2 touch target */
  min-width: 44px;
}

.btn-primary:hover {
  background: #1D4ED8;
  box-shadow: 0 4px 0 0 #1E3A8A,
              0 8px 20px rgba(0, 56, 168, 0.4);
  transform: translateY(-1px);
}

.btn-primary:active {
  transform: translateY(4px);       /* Simulates button press */
  box-shadow: 0 0 0 0 #002780,     /* Remove 3D shadow */
              0 2px 8px rgba(0, 56, 168, 0.2);
}

.btn-primary:focus-visible {
  outline: 3px solid var(--color-ocean);
  outline-offset: 3px;
}

/* === SUCCESS BUTTON (Correct answer / continue) === */
.btn-success {
  background: var(--color-leaf);          /* #22C55E */
  box-shadow: 0 4px 0 0 #15803D,
              0 6px 16px rgba(34, 197, 94, 0.3);
}

.btn-success:active {
  transform: translateY(4px);
  box-shadow: 0 0 0 0 #15803D;
}

/* === SECONDARY BUTTON === */
.btn-secondary {
  background: transparent;
  color: var(--color-brand-blue);
  border: 2px solid var(--color-brand-blue);
  box-shadow: none;
}

.btn-secondary:hover {
  background: rgba(0, 56, 168, 0.06);
}

/* === GHOST / TERTIARY BUTTON === */
.btn-ghost {
  background: transparent;
  color: var(--color-text-secondary);
  border: none;
  box-shadow: none;
}

/* === ANSWER OPTION BUTTON (Quiz) === */
.btn-quiz-option {
  width: 100%;
  padding: 16px 20px;
  background: var(--color-bg-surface);
  border: 2px solid var(--color-border);  /* #E5E2D9 */
  border-radius: var(--radius-md);        /* 12px */
  text-align: left;
  font-weight: 600;
  font-size: var(--text-base);
  transition: border-color 0.15s ease,
              background 0.15s ease,
              transform 0.1s ease;
  cursor: pointer;
  min-height: 56px;
}

.btn-quiz-option:hover {
  border-color: var(--color-brand-blue);
  background: rgba(0, 56, 168, 0.04);
  transform: scale(1.01);
}

.btn-quiz-option--selected {
  border-color: var(--color-brand-blue);  /* #0038A8 */
  background: rgba(0, 56, 168, 0.08);
  border-width: 2.5px;
}

.btn-quiz-option--correct {
  border-color: var(--color-leaf);        /* #22C55E */
  background: var(--color-success-bg);    /* #DCFCE7 */
  border-width: 2.5px;
}

.btn-quiz-option--incorrect {
  border-color: var(--color-error);       /* #EF4444 */
  background: var(--color-error-bg);      /* #FEE2E2 */
  border-width: 2.5px;
}
```

### 5.3 Navigation

```css
/* === BOTTOM TAB BAR (Mobile) === */
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 8px 0 calc(8px + env(safe-area-inset-bottom));
  background: var(--color-bg-surface);
  border-top: 1px solid var(--color-border);
  /* Subtle glass lift */
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  background: rgba(255, 255, 255, 0.92);
}

.tab-bar__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  border-radius: var(--radius-md);
  min-width: 56px;
  min-height: 56px;  /* WCAG 2.2 */
  color: var(--color-text-tertiary);
  transition: color 0.2s ease;
}

.tab-bar__item--active {
  color: var(--color-brand-blue);
}

.tab-bar__item--active .tab-bar__icon-bg {
  background: rgba(0, 56, 168, 0.1);
  border-radius: var(--radius-full);
  padding: 6px 12px;
}

.tab-bar__label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.04em;
}

/* === TOP NAVIGATION / HEADER (Lesson view) === */
.lesson-header {
  display: flex;
  align-items: center;
  padding: 16px var(--space-4);
  padding-top: calc(16px + env(safe-area-inset-top));
  gap: var(--space-4);
  background: var(--color-bg-surface);
}

.lesson-progress-bar {
  flex: 1;
  height: 12px;
  background: var(--color-bg-subtle);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.lesson-progress-bar__fill {
  height: 100%;
  background: var(--gradient-ocean);
  border-radius: var(--radius-full);
  transition: width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); /* Spring */
}
```

### 5.4 Progress Components

```css
/* === XP PROGRESS BAR === */
.xp-bar {
  width: 100%;
  height: 16px;
  background: var(--color-bg-subtle);
  border-radius: var(--radius-full);
  overflow: hidden;
  border: 1.5px solid var(--color-border);
}

.xp-bar__fill {
  height: 100%;
  background: var(--gradient-xp);
  border-radius: var(--radius-full);
  position: relative;
  /* Animated shine */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: var(--gradient-shimmer);
    animation: shimmer 2.5s ease-in-out infinite;
  }
}

@keyframes shimmer {
  0%   { transform: translateX(-100%); }
  60%  { transform: translateX(100%); }
  100% { transform: translateX(100%); }
}

/* === STREAK DISPLAY === */
.streak-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  background: var(--gradient-streak);
  border-radius: var(--radius-full);
  color: white;
  font-weight: 800;
  font-size: var(--text-sm);
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.4);
}

/* === HEART / LIVES DISPLAY === */
.hearts-display {
  display: flex;
  gap: var(--space-1);
}

.heart-icon {
  width: 28px;
  height: 28px;
  color: var(--color-heart);
  transition: transform 0.2s ease, opacity 0.3s ease;
}

.heart-icon--lost {
  opacity: 0.25;
  filter: grayscale(1);
}
```

### 5.5 Input Components

```css
/* === TEXT INPUT === */
.input-text {
  width: 100%;
  padding: 14px 16px;
  background: var(--color-bg-elevated);  /* #F8F7F2 */
  border: 2px solid var(--color-border); /* #E5E2D9 */
  border-radius: var(--radius-md);       /* 12px */
  font-family: var(--font-body);
  font-size: var(--text-base);           /* 16px — prevents iOS zoom */
  color: var(--color-text-primary);
  transition: border-color 0.2s ease,
              box-shadow 0.2s ease;
  min-height: 52px;
}

.input-text:focus {
  outline: none;
  border-color: var(--color-brand-blue);
  box-shadow: 0 0 0 4px rgba(0, 56, 168, 0.12);
}

.input-text::placeholder {
  color: var(--color-text-tertiary);
}

/* IMPORTANT: Font size must be >= 16px on mobile inputs
   to prevent iOS from auto-zooming the viewport */
```

---

## 6. Animation & Micro-interaction System

### 6.1 Duration Scale

```css
:root {
  --duration-instant:  50ms;   /* Imperceptible — state toggles */
  --duration-fast:     150ms;  /* Button press, checkbox tick */
  --duration-normal:   250ms;  /* Hover transitions, color changes */
  --duration-slow:     350ms;  /* Page transitions, modal open */
  --duration-slower:   500ms;  /* Complex choreography */
  --duration-slowest:  700ms;  /* Celebration animations */
}
```

### 6.2 Easing Functions

```css
:root {
  /* Standard ease-out for entering elements */
  --ease-out:          cubic-bezier(0.0, 0.0, 0.2, 1);

  /* Standard ease-in for exiting elements */
  --ease-in:           cubic-bezier(0.4, 0.0, 1, 1);

  /* Ease-in-out for persistent motion */
  --ease-in-out:       cubic-bezier(0.4, 0.0, 0.2, 1);

  /* Spring overshoot — buttons, bouncy elements */
  --ease-spring:       cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Snappy — fast in, controlled landing */
  --ease-snappy:       cubic-bezier(0.2, 0, 0, 1);
}
```

### 6.3 Framer Motion Presets

```typescript
// packages/ui/animations.ts

export const SPRING_BUTTON = {
  type: "spring",
  stiffness: 500,
  damping: 30,
  mass: 0.8,
};

export const SPRING_CARD = {
  type: "spring",
  stiffness: 300,
  damping: 25,
  mass: 1,
};

export const SPRING_CELEBRATION = {
  type: "spring",
  stiffness: 200,
  damping: 15,
  mass: 1.2,
  // High bounce for XP gain, level up
};

export const TWEEN_FAST = {
  type: "tween",
  duration: 0.15,
  ease: [0.0, 0.0, 0.2, 1], // ease-out
};

export const TWEEN_PAGE = {
  type: "tween",
  duration: 0.3,
  ease: [0.4, 0.0, 0.2, 1], // ease-in-out
};

/* === PAGE TRANSITIONS === */
export const PAGE_ENTER = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { ...TWEEN_PAGE },
};

export const PAGE_EXIT = {
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
};

/* === SLIDE UP SHEET (bottom modals) === */
export const SHEET_ENTER = {
  initial: { y: "100%" },
  animate: { y: 0 },
  exit:    { y: "100%" },
  transition: { ...SPRING_CARD },
};

/* === QUIZ ANSWER FEEDBACK === */
export const ANSWER_CORRECT = {
  animate: {
    scale:           [1, 1.08, 1],
    borderColor:     ["#E5E2D9", "#22C55E", "#22C55E"],
    backgroundColor: ["#FFFFFF", "#DCFCE7", "#DCFCE7"],
  },
  transition: { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] },
};

export const ANSWER_INCORRECT = {
  animate: {
    x:     [0, -8, 8, -6, 6, -3, 0],   /* Shake */
    borderColor: ["#E5E2D9", "#EF4444", "#EF4444"],
  },
  transition: { duration: 0.4, ease: "easeOut" },
};

/* === XP GAIN FLOAT === */
export const XP_FLOAT = {
  initial: { opacity: 0, y: 0, scale: 0.5 },
  animate: { opacity: [0, 1, 1, 0], y: -60, scale: [0.5, 1.2, 1, 0.8] },
  transition: { duration: 0.9, times: [0, 0.2, 0.7, 1] },
};

/* === CARD ENTRANCE (staggered list) === */
export const CARD_STAGGER_PARENT = {
  animate: { transition: { staggerChildren: 0.07 } },
};

export const CARD_STAGGER_CHILD = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: TWEEN_FAST,
};

/* === STREAK FIRE PULSE === */
export const STREAK_PULSE = {
  animate: {
    scale: [1, 1.12, 1, 1.08, 1],
    filter: [
      "drop-shadow(0 0 0px #F97316)",
      "drop-shadow(0 0 8px #F97316)",
      "drop-shadow(0 0 4px #F97316)",
      "drop-shadow(0 0 8px #CE1126)",
      "drop-shadow(0 0 0px #F97316)",
    ],
  },
  transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
};

/* === VOCABULARY CARD FLIP === */
export const VOCAB_FLIP_FRONT = {
  initial: { rotateY: 0 },
  exit:    { rotateY: 90 },
  transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
};

export const VOCAB_FLIP_BACK = {
  initial: { rotateY: -90 },
  animate: { rotateY: 0 },
  transition: { duration: 0.2, ease: [0.0, 0.0, 0.2, 1] },
};
```

### 6.4 Micro-interaction Specifications

| Interaction | Animation | Duration | Notes |
|-------------|-----------|----------|-------|
| Button tap (mobile) | `scale: 0.97` press | 100ms | Haptic feedback + |
| Button hover (web) | `translateY(-2px)` + shadow grow | 150ms | |
| Button release | Spring back to original | 200ms spring | |
| Correct answer | Border flash green + scale 1.05 | 350ms | Play sound effect |
| Incorrect answer | Horizontal shake (8 keyframes) | 400ms | Red border flash |
| Lesson complete | Confetti burst + XP float | 900ms | Philippine flag colors |
| Streak extended | Fire icon pulse + bounce | 600ms | Orange glow |
| Level up | Full-screen celebration | 1500ms | Starburst pattern |
| Card hover | `translateY(-2px)` + shadow | 200ms | Subtle, not jarring |
| Progress bar fill | Linear width transition | 400ms spring | Shimmer overlay |
| Tab switch | Slide + fade between screens | 300ms ease-out | |
| Pull to refresh | Filipino-themed spinner | continuous | |
| Long press | Scale down 0.95 | 100ms | Hold states |
| Swipe to delete | Translate X with opacity | 200ms ease-in | |

**Haptic Feedback Map (Mobile):**
```typescript
// Expo Haptics integration
import * as Haptics from 'expo-haptics';

// Correct answer  → ImpactFeedbackStyle.Medium
// Incorrect answer → NotificationFeedbackType.Error
// Achievement earned → NotificationFeedbackType.Success
// Button press    → ImpactFeedbackStyle.Light
// Streak achieved → ImpactFeedbackStyle.Heavy
```

---

## 7. Dark Mode System

### 7.1 Dark Mode Color Tokens

**Core Principle:** Never use pure black (#000000). Use near-black dark surfaces with warm undertones to match the app's tropical personality.

```css
[data-theme="dark"] {
  /* === DARK SURFACES === */
  --color-bg-base:     #0F0D0B;   /* Warm near-black (not #000000) */
  --color-bg-surface:  #1C1916;   /* Warm charcoal — primary card bg */
  --color-bg-elevated: #252118;   /* Raised surface, nav bars */
  --color-bg-subtle:   #2E2923;   /* Input backgrounds, subtle fills */
  --color-border:      #3D3830;   /* Warm dark border */
  --color-border-strong: #524D46; /* Stronger border, separators */

  /* === DARK TEXT === */
  --color-text-primary:   #F5F1EB;  /* Warm off-white (not #FFFFFF) */
  --color-text-secondary: #B5AFA8;  /* Muted warm grey */
  --color-text-tertiary:  #7A746D;  /* Placeholder / disabled */
  --color-text-inverse:   #1A1612;  /* Text on light bg in dark mode */

  /* === DARK BRAND COLORS (desaturated slightly) === */
  /* Colors appear more vivid in dark mode — reduce 10-15% saturation */
  --color-brand-blue:    #1D5FC8;   /* Slightly lightened for dark bg */
  --color-brand-gold:    #E6BF10;   /* Slightly muted gold */
  --color-leaf:          #1EA84F;   /* Slightly muted green */
  --color-sunset:        #E86A10;   /* Slightly muted orange */
  --color-ocean:         #0B92D4;   /* Slightly muted sky */
  --color-hibiscus:      #D44090;   /* Slightly muted pink */

  /* === DARK SEMANTIC COLORS === */
  --color-success-bg:  rgba(34, 197, 94, 0.15);  /* Translucent on dark */
  --color-error-bg:    rgba(239, 68, 68, 0.15);
  --color-warning-bg:  rgba(245, 158, 11, 0.15);
  --color-info-bg:     rgba(59, 130, 246, 0.15);

  /* === DARK CARD SHADOWS === */
  /* In dark mode, shadows become border-glow effects */
  --shadow-card:    0 0 0 1px var(--color-border),
                    0 4px 16px rgba(0, 0, 0, 0.4);
  --shadow-elevated: 0 0 0 1px var(--color-border-strong),
                     0 8px 32px rgba(0, 0, 0, 0.5);
}
```

### 7.2 Dark Mode Implementation (CSS)

```css
/* System preference detection */
@media (prefers-color-scheme: dark) {
  :root { /* Apply dark tokens if no explicit data-theme set */ }
}

/* User-toggled override */
[data-theme="dark"] { /* Explicit dark mode */ }
[data-theme="light"] { /* Explicit light mode override */ }
```

### 7.3 Dark Mode Surface Elevation Scale

In dark mode, elevation is shown through increasingly lighter dark surfaces (NOT shadows):

| Level | Purpose | Hex | Lightness |
|-------|---------|-----|-----------|
| 0 — Base | Page background | `#0F0D0B` | L5% |
| 1 — Surface | Default cards | `#1C1916` | L10% |
| 2 — Elevated | Raised cards, nav | `#252118` | L14% |
| 3 — Floating | Dropdowns, popovers | `#2E2923` | L17% |
| 4 — Overlay | Modal backgrounds | `#3A342D` | L21% |

### 7.4 Dark Mode Glassmorphism

On dark backgrounds, glassmorphism uses dark-tinted glass rather than white:

```css
.card-glass--dark {
  background: rgba(28, 25, 22, 0.60);    /* Dark warm glass */
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
  border: 1px solid rgba(245, 241, 235, 0.08);  /* Subtle light border */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5),
              inset 0 1px 0 rgba(245, 241, 235, 0.05);
}
```

---

## 8. Glassmorphism Specs

Used in: Hero sections, overlaid lesson completion cards, floating streaks, onboarding overlays, settings sheets over blurred content.

### 8.1 CSS Specification — Three Tiers

```css
/* === TIER 1: SUBTLE GLASS (Cards over light backgrounds) === */
.glass-subtle {
  background: rgba(255, 253, 245, 0.55);
  backdrop-filter: blur(8px) saturate(140%);
  -webkit-backdrop-filter: blur(8px) saturate(140%);
  border-radius: var(--radius-xl);        /* 24px */
  border: 1px solid rgba(255, 253, 245, 0.6);
  box-shadow: 0 4px 16px rgba(0, 56, 168, 0.08),
              inset 0 1px 0 rgba(255, 255, 255, 0.7);
}

/* === TIER 2: STANDARD GLASS (Main glassmorphic cards) === */
.glass-standard {
  background: rgba(255, 253, 245, 0.15);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border-radius: var(--radius-xl);        /* 24px */
  border: 1px solid rgba(255, 253, 245, 0.25);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

/* === TIER 3: INTENSE GLASS (Over image/video backgrounds) === */
.glass-intense {
  background: rgba(255, 253, 245, 0.08);
  backdrop-filter: blur(20px) saturate(200%);
  -webkit-backdrop-filter: blur(20px) saturate(200%);
  border-radius: var(--radius-2xl);       /* 32px */
  border: 1px solid rgba(255, 253, 245, 0.18);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

/* === TROPICAL GLASS (Blue-tinted for ocean/culture sections) === */
.glass-tropical {
  background: linear-gradient(
    135deg,
    rgba(14, 165, 233, 0.12) 0%,
    rgba(0, 56, 168, 0.08) 100%
  );
  backdrop-filter: blur(12px) saturate(160%);
  -webkit-backdrop-filter: blur(12px) saturate(160%);
  border-radius: var(--radius-xl);
  border: 1px solid rgba(14, 165, 233, 0.2);
  box-shadow: 0 8px 24px rgba(0, 56, 168, 0.15);
}

/* === MOBILE PERFORMANCE NOTE ===
   On iOS/Android, reduce blur to 6-8px for smooth 60fps:
*/
@media (max-width: 768px) {
  .glass-standard { backdrop-filter: blur(8px) saturate(160%); }
  .glass-intense  { backdrop-filter: blur(12px) saturate(180%); }
}
```

---

## 9. Neubrutalism Accent Style

Used selectively for: Achievement badges, "New" tags, call-to-action feature banners, Baybayin learning module cards (gives it a bold, printed-text energy). Not used for the entire app — applied as a style accent to specific components.

### 9.1 CSS Specification

```css
/* === NEUBRUTALISM CARD === */
.neu-card {
  background: #FCD116;             /* Philippine Gold */
  border: 3px solid #000000;
  border-radius: 0;                /* Hard square corners — essential */
  box-shadow: 5px 5px 0 0 #000000;
  padding: var(--space-6);         /* 24px */
  transition: transform 0.1s ease,
              box-shadow 0.1s ease;
}

.neu-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 7px 7px 0 0 #000000;
}

.neu-card:active {
  transform: translate(3px, 3px);
  box-shadow: 2px 2px 0 0 #000000;
}

/* === NEUBRUTALISM BUTTON === */
.neu-btn {
  background: var(--color-brand-gold);   /* #FCD116 */
  color: #000000;
  border: 3px solid #000000;
  border-radius: 0;
  box-shadow: 4px 4px 0 0 #000000;
  padding: 14px 28px;
  font-weight: 800;
  font-size: var(--text-base);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.1s ease,
              box-shadow 0.1s ease;
}

.neu-btn:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 0 #000000;
}

.neu-btn:active {
  transform: translate(3px, 3px);
  box-shadow: 1px 1px 0 0 #000000;
}

/* === NEUBRUTALISM BADGE (Achievement unlocked) === */
.neu-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  background: #CE1126;             /* Philippine Red */
  color: #FFFFFF;
  border: 2.5px solid #000000;
  border-radius: 0;
  box-shadow: 3px 3px 0 0 #000000;
  font-weight: 800;
  font-size: var(--text-sm);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* Neubrutalism color variants for different modules */
.neu--blue    { background: #0038A8; color: #FFFFFF; }
.neu--red     { background: #CE1126; color: #FFFFFF; }
.neu--gold    { background: #FCD116; color: #000000; }
.neu--green   { background: #22C55E; color: #000000; }
.neu--white   { background: #FFFDF5; color: #000000; }
```

---

## 10. Mobile-First Design Patterns

### 10.1 Viewport & Safe Areas

```css
/* React Native / Expo — Safe area handling */
/* Always use SafeAreaView from react-native-safe-area-context */

/* Web equivalent */
.app-container {
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}

/* Bottom sheet / fixed elements must account for notch */
.bottom-sheet {
  padding-bottom: calc(24px + env(safe-area-inset-bottom));
}
```

### 10.2 Touch Target Compliance

```css
/* WCAG 2.2 — Minimum 24x24px, recommended 44x44px */
/* All interactive elements MUST meet these minimums */

.touch-target {
  min-width:  44px;
  min-height: 44px;
  /* For small visual icons, use padding to extend tap area: */
  padding: 10px;
}

/* Invisible tap area expansion */
.icon-btn {
  position: relative;
}
.icon-btn::after {
  content: '';
  position: absolute;
  inset: -10px;  /* Extends tap area by 10px on all sides */
}
```

### 10.3 Mobile Typography (iOS Auto-Zoom Prevention)

```css
/* CRITICAL: Any input with font-size < 16px triggers iOS auto-zoom */
input, textarea, select {
  font-size: 16px !important;  /* Never go below this */
}
```

### 10.4 Lesson Screen Layout (Mobile)

```
┌────────────────────────────┐
│ ← [progress bar] ❤️❤️❤️     │  Header (safe area aware)
├────────────────────────────┤
│                            │
│     QUESTION AREA          │  ~50% of screen height
│   (word, image, audio)     │
│                            │
├────────────────────────────┤
│                            │
│  [ Answer Option A ]       │  Quiz options
│  [ Answer Option B ]       │  44px+ height each
│  [ Answer Option C ]       │  12px gap between
│  [ Answer Option D ]       │
│                            │
├────────────────────────────┤
│  [ CHECK ]   ← CTA        │  52px button height
│                            │  Safe area aware bottom
└────────────────────────────┘
```

### 10.5 Swipe Gesture Patterns

```typescript
// Expo / React Native gesture patterns
// Using react-native-gesture-handler

// Lesson navigation: swipe right = back, swipe left = skip
// Vocabulary cards: swipe up = easy (FSRS), swipe down = hard
// Culture cards: horizontal swipe carousel
// Home screen: pull down = refresh

const SWIPE_THRESHOLD = 50;   // Minimum px to register swipe
const SWIPE_VELOCITY = 0.3;   // Minimum velocity

// Duolingo-style: swipe to reveal answer on vocab cards
// The card lifts slightly during swipe (visual affordance)
```

### 10.6 Low-Bandwidth Optimization (Philippine Context)

Philippines has variable internet quality. Design for resilience:

- **Skeleton screens** instead of spinners for all card grids
- **Optimistic UI updates** — show XP gain immediately, sync in background
- **Offline lesson cache** — last 5 lessons always available offline
- **Progressive image loading** — tiny blur placeholder → full quality
- **Audio preloading** — preload next word's audio while current plays
- **Lesson content max size** — cap each lesson JSON at 50KB

```css
/* Skeleton loading animation */
.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-bg-subtle) 0%,
    var(--color-bg-elevated) 50%,
    var(--color-bg-subtle) 100%
  );
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.5s ease-in-out infinite;
  border-radius: var(--radius-md);
}

@keyframes skeleton-shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

---

## 11. Accessibility Standards (WCAG 2.2)

### 11.1 Color Contrast Requirements

All Ako Pinoy UI must meet WCAG 2.2 Level AA minimum:

| Text Type | Minimum Contrast Ratio | Target |
|-----------|------------------------|--------|
| Body text (< 18px) | 4.5:1 | 7:1 preferred |
| Large text (>= 18px or 14px bold) | 3:1 | 4.5:1 preferred |
| UI components (buttons, inputs) | 3:1 | 4.5:1 |
| Focus indicators | 3:1 | — |
| Non-text info (icons, charts) | 3:1 | — |

**Verified Passing Combinations:**

| Text | Background | Ratio | Pass |
|------|-----------|-------|------|
| `#FFFDF5` | `#0038A8` | 9.8:1 | AA + AAA |
| `#1A1612` | `#FFFDF5` | 16.2:1 | AA + AAA |
| `#000000` | `#FCD116` | 13.1:1 | AA + AAA |
| `#FFFFFF` | `#CE1126` | 5.5:1 | AA |
| `#1A1612` | `#DCFCE7` | 14.8:1 | AA + AAA |
| `#57534E` | `#FFFDF5` | 6.1:1 | AA |
| `#A8A29E` | `#FFFDF5` | 3.1:1 | AA (large text only) |

**NEVER use these combinations:**
- Gold `#FCD116` on White `#FFFFFF` — fails (1.9:1)
- Light blue `#7DD3FC` on White — fails (2.1:1)
- Any grey `#666–#999` on White for body text — borderline/failing

### 11.2 Touch Target Sizes (WCAG 2.5.8)

```
Minimum (WCAG 2.2 AA): 24×24 CSS pixels
Recommended (WCAG 2.2 AAA): 44×44 CSS pixels
Ako Pinoy Standard: 44×44px for all interactive elements
Bottom Tab Bar Items: 56px height minimum
Quiz Answer Options: 56px height minimum
Primary CTA Buttons: 52px height minimum
Icon-only buttons: 44×44px with invisible tap extension
```

### 11.3 Focus Management

```css
/* Global focus visible style */
:focus-visible {
  outline: 3px solid var(--color-ocean);   /* #0EA5E9 */
  outline-offset: 3px;
  border-radius: calc(var(--radius-md) + 2px);
}

/* Remove default outline only when :focus-visible is used */
:focus:not(:focus-visible) {
  outline: none;
}

/* Focus trap for modals — use @radix-ui/react-focus-trap */
/* Skip navigation link */
.skip-link {
  position: absolute;
  top: -100%;
  left: 16px;
  z-index: 9999;
  background: var(--color-brand-blue);
  color: white;
  padding: 8px 16px;
  border-radius: var(--radius-md);
  font-weight: 700;
}
.skip-link:focus { top: 16px; }
```

### 11.4 ARIA Roles for Learning Components

```tsx
// Quiz component — ARIA requirements
<section aria-label="Quiz question 3 of 10" role="main">
  <div role="status" aria-live="polite">
    {/* Score, hearts, progress updates */}
  </div>

  <h1 id="question-text">
    {question}
  </h1>

  <div
    role="radiogroup"
    aria-labelledby="question-text"
    aria-required="true"
  >
    {options.map((opt, i) => (
      <button
        key={i}
        role="radio"
        aria-checked={selected === i}
        aria-label={`Option ${i + 1}: ${opt.text}`}
        onClick={() => handleSelect(i)}
      >
        {opt.text}
      </button>
    ))}
  </div>

  {/* Announce result to screen readers */}
  <div role="alert" aria-live="assertive">
    {isCorrect ? "Correct! Tama!" : "Incorrect. Mali."}
  </div>
</section>

// Progress bar — ARIA
<div
  role="progressbar"
  aria-valuenow={currentQuestion}
  aria-valuemin={0}
  aria-valuemax={totalQuestions}
  aria-label={`Lesson progress: ${currentQuestion} of ${totalQuestions}`}
>
  <div style={{ width: `${progress}%` }} />
</div>

// Audio player for vocabulary
<button
  aria-label={`Play pronunciation for ${tagalogWord}`}
  aria-pressed={isPlaying}
>
  {isPlaying ? <PauseIcon /> : <PlayIcon />}
</button>
```

### 11.5 Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  /* Disable all animations for users who request it */
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  /* Keep critical state transitions (opacity only, no movement) */
  .quiz-feedback {
    animation: none;
    transition: background-color 0.2s ease, border-color 0.2s ease;
  }
}
```

```typescript
// Framer Motion — Respect reduced motion
import { useReducedMotion } from 'framer-motion';

function AnimatedCard() {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduce ? 0 : 0.3 }}
    />
  );
}
```

### 11.6 Internationalization / RTL Readiness

```css
/* Use logical properties — future-proof for RTL languages */
.card {
  padding-inline: var(--space-6);  /* Not padding-left/right */
  margin-block: var(--space-4);    /* Not margin-top/bottom */
  border-inline-start: 3px solid var(--color-brand-blue); /* Not border-left */
}

/* Tagalog text direction — LTR (Filipino uses Latin script) */
/* Baybayin historically can be read LTR or top-to-bottom */
.baybayin-text {
  direction: ltr;
  writing-mode: horizontal-tb;
}
```

---

## 12. Education & Language App UX Patterns

### 12.1 Onboarding Flow

```
Screen 1: Welcome splash
  - Full-screen tropical gradient (sunset gradient)
  - "Ako Pinoy" in Nunito 900 weight, large
  - Tagline: "Postcard" of sampaguita imagery
  - CTA: "Magsimula na tayo!" (Let's start!) — large primary button

Screen 2: Goal setting (Duolingo-inspired)
  - "Ilang minuto sa isang araw?" (How many minutes a day?)
  - 4 option cards: 5, 10, 15, 20 minutes
  - Visual icons for each (candle, cup of kape, etc.)

Screen 3: Level assessment
  - "Gaano kayo ka-Pilipino?" (How Filipino are you already?)
  - 3 options: "Absolute beginner", "I know a little", "I'm conversational"
  - Skip option always visible

Screen 4: Account creation
  - Google, Facebook, Apple auth options
  - Facebook FIRST in Philippines context (most common)

Screen 5: Push notification permission
  - Filipino-framed ask: "Dapat ba kaming mag-remind sa inyo?"
  - Visual: Duo-style mascot holding parol
```

### 12.2 Lesson Screen Architecture

```
Lesson Layout:
├── Header: back button + progress bar + hearts
├── Question Area (50% viewport height)
│   ├── Lesson type indicator ("Listening", "Translation", etc.)
│   ├── Main content (word / audio / image)
│   └── Helper text (pronunciation guide, context)
├── Answer Area (variable height)
│   ├── Multiple choice: 4 option cards
│   ├── Fill-blank: text input + keyboard
│   ├── Listening: play button + transcript area
│   └── Speaking: mic button + waveform visualizer
└── Footer: "CHECK" CTA button (full-width)

State Machine:
  idle → selected → checking → correct/incorrect → next
```

### 12.3 Vocabulary Flashcard Pattern

```
Card States:
  Front: Tagalog word (large, bold, Philippine Blue)
          + Baybayin script below (smaller, sepia)
          + Audio play button
          + Pronunciation guide in IPA

  Back:  English translation (large)
          + Example sentence in Tagalog (italic)
          + Example sentence in English
          + Word category badge (food, family, etc.)
          + FSRS rating buttons:
              [Muli] [Mahirap] [Ayos] [Madali]
              Again   Hard     Good   Easy

Gesture: Tap to flip, swipe up = Easy, swipe down = Hard
```

### 12.4 Culture Article Layout

```
Culture Article Screen:
├── Hero image (full width, 40vw height)
│   └── Overlay: region tag + read time
├── Title (Nunito 800, 28px)
├── Cultural context badge ("Tradition", "Food", "Festival")
├── Author: "Curated by Ako Pinoy"
├── Body content (Inter 16px, 1.65 line-height)
│   ├── Section headings (Nunito 700, 20px)
│   ├── Pull quotes (large, Philippine Blue, left border)
│   ├── Filipino word highlights (blue background badge)
│   └── Audio pronunciation buttons inline in text
└── Bottom: Related vocabulary + "Learn these words" CTA
```

### 12.5 Scenario / Roleplay Screen

```
Interactive Scenario Layout:
├── Scene header: setting illustration (palengke, jeepney, etc.)
├── Chat interface:
│   ├── AI character message bubbles (left, warm beige bg)
│   ├── Player message bubbles (right, Philippine Blue bg)
│   └── "Typing..." indicator (AI is responding)
├── Input area:
│   ├── Free text input OR
│   ├── Suggested response chips (2-4 options)
└── Hint button: "💡 Tulong" (Help) — shows translation hint

Character Avatar: Illustrated Filipino character
  (Ate Maria = palengke vendor, Kuya Jose = jeepney driver, etc.)
  — Warm, friendly illustrated style, NOT photorealistic
```

### 12.6 Progress & Dashboard

```
Dashboard Sections:
├── Daily streak + XP this week (bento top row)
├── "Continue learning" — last lesson resumption card
├── Today's vocabulary review (FSRS due words count)
├── Featured scenario (rotating daily)
├── Quick stats: total words learned, lessons completed
├── Leaderboard sneak peak (top 3 + your rank)
└── Community: recent forum posts
```

---

## 13. Gamification UI Patterns

### 13.1 XP System Visual Design

```css
/* XP Gain animation overlay */
.xp-gain-toast {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--gradient-xp);
  color: #000000;
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-full);
  font-weight: 900;
  font-size: var(--text-xl);
  font-family: var(--font-display);
  box-shadow: 0 8px 24px rgba(252, 209, 22, 0.5),
              0 0 0 3px rgba(212, 160, 23, 0.4);
  pointer-events: none;
  z-index: 9999;
  /* Animated by Framer Motion XP_FLOAT preset */
}
```

### 13.2 Level Badge Design

```
Level Badge Visual Spec:
  Baguhan (1):     Simple circle, Stone Grey,    "B"
  Natututo (2):    Bronze shield, #CD7F32
  Bihasa (3):      Silver shield, #C0C0C0
  Dalubhasa (4):   Gold shield,   #FCD116
  Tunay na Pinoy:  Philippine flag colors, star burst, animated glow

Badge size:   40×40px standard, 64×64px on profile
Badge border: 3px solid [level color]
Badge glow:   Drop shadow matching level color (animated for highest tier)
```

### 13.3 Streak System Visual

```css
/* Streak fire indicator */
.streak-indicator {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: linear-gradient(135deg, #FEF08A, #F97316, #CE1126);
  border-radius: var(--radius-full);
  color: white;
  font-weight: 800;
  font-size: 14px;
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.45);
}

/* Streak at risk (not completed today) */
.streak-indicator--at-risk {
  background: linear-gradient(135deg, #E5E5E5, #9CA3AF);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Streak lost */
.streak-indicator--lost {
  background: #E5E7EB;
  color: #9CA3AF;
  box-shadow: none;
}
```

### 13.4 Achievement Badge Unlock Screen

```
Full-screen celebration overlay:
  Background: Philippine flag gradient radial burst
  Center: Achievement badge (large, 120×120px) with glow ring
  Below badge: Achievement name in Nunito 900
  Below name: Description text
  XP awarded: Gold floating "+50 XP" animation
  Confetti: Philippine flag colors (#0038A8, #CE1126, #FCD116, #FFFFFF)
  CTA: "Magaling!" (Great job!) button — green primary style
  Duration: Auto-dismiss after 4 seconds or on tap
```

---

## 14. Tailwind CSS v4 Design Tokens

Ako Pinoy uses Tailwind CSS v4. Map the design system into the Tailwind config:

```css
/* apps/web/app/globals.css */
@import "tailwindcss";

@theme {
  /* === BRAND COLORS === */
  --color-brand-blue:        #0038A8;
  --color-brand-blue-light:  #1D4ED8;
  --color-brand-blue-dark:   #1E3A8A;
  --color-brand-red:         #CE1126;
  --color-brand-red-light:   #EF4444;
  --color-brand-gold:        #FCD116;
  --color-brand-gold-dark:   #D4A017;

  /* === TROPICAL ACCENTS === */
  --color-ocean:             #0EA5E9;
  --color-leaf:              #22C55E;
  --color-sunset:            #F97316;
  --color-hibiscus:          #EC4899;
  --color-bamboo:            #D4A96A;
  --color-baybayin:          #3D2B1F;
  --color-sampaguita:        #FFFDF5;

  /* === FONTS === */
  --font-display:  'Nunito', sans-serif;
  --font-ui:       'Plus Jakarta Sans', sans-serif;
  --font-body:     'Inter', sans-serif;
  --font-baybayin: 'Noto Sans Tagalog', serif;
  --font-mono:     'Space Mono', monospace;

  /* === RADIUS === */
  --radius-sm:   6px;
  --radius-md:   12px;
  --radius-lg:   16px;
  --radius-xl:   24px;
  --radius-2xl:  32px;
}
```

```typescript
// For React Native (Expo) — NativeWind v4 compatible
// packages/ui/theme.ts

export const theme = {
  colors: {
    brand: {
      blue:      '#0038A8',
      blueLight: '#1D4ED8',
      blueDark:  '#1E3A8A',
      red:       '#CE1126',
      redLight:  '#EF4444',
      gold:      '#FCD116',
      goldDark:  '#D4A017',
    },
    tropical: {
      ocean:     '#0EA5E9',
      leaf:      '#22C55E',
      sunset:    '#F97316',
      hibiscus:  '#EC4899',
      bamboo:    '#D4A96A',
      baybayin:  '#3D2B1F',
      sampaguita:'#FFFDF5',
    },
    semantic: {
      success:   '#22C55E',
      error:     '#EF4444',
      warning:   '#F59E0B',
      info:      '#3B82F6',
    },
    gamification: {
      xp:        '#FCD116',
      streak:    '#F97316',
      heart:     '#EF4444',
      league:    '#A855F7',
      crown:     '#D97706',
    },
    // Light mode surfaces
    surface: {
      base:      '#FFFDF5',
      card:      '#FFFFFF',
      elevated:  '#F8F7F2',
      subtle:    '#F1EFE8',
    },
    // Dark mode surfaces
    surfaceDark: {
      base:      '#0F0D0B',
      card:      '#1C1916',
      elevated:  '#252118',
      subtle:    '#2E2923',
    },
    text: {
      primary:   '#1A1612',
      secondary: '#57534E',
      tertiary:  '#A8A29E',
      inverse:   '#FFFDF5',
    },
    textDark: {
      primary:   '#F5F1EB',
      secondary: '#B5AFA8',
      tertiary:  '#7A746D',
    },
    border: {
      default: '#E5E2D9',
      strong:  '#D1CEC5',
    },
    borderDark: {
      default: '#3D3830',
      strong:  '#524D46',
    },
  },
  spacing: {
    1: 4, 2: 8, 3: 12, 4: 16, 5: 20,
    6: 24, 8: 32, 10: 40, 12: 48, 16: 64,
  },
  fontSizes: {
    xs:   10.24,
    sm:   12.8,
    base: 16,
    lg:   20,
    xl:   25,
    '2xl': 31,
    '3xl': 39,
    '4xl': 49,
  },
  borderRadius: {
    sm:   6,
    md:   12,
    lg:   16,
    xl:   24,
    '2xl': 32,
    full: 9999,
  },
} as const;
```

---

## Quick Reference Cheat Sheet

### Most-Used Colors

```
BRAND:       #0038A8  #CE1126  #FCD116  #FFFDF5
TROPICAL:    #0EA5E9  #22C55E  #F97316  #EC4899
DARK BG:     #0F0D0B  #1C1916  #252118
TEXT LIGHT:  #1A1612  #57534E  #A8A29E
TEXT DARK:   #F5F1EB  #B5AFA8  #7A746D
GAMIFY:      #FCD116 (XP)  #F97316 (Streak)  #EF4444 (Hearts)  #A855F7 (League)
```

### Most-Used Font Specs

```
Hero display:    Nunito 900, 49px, tracking -0.03em
Page title:      Nunito 800, 31px, tracking -0.02em
Section heading: Nunito 700, 25px
Tagalog word:    Nunito 800, 39px, #0038A8
Card title:      Plus Jakarta Sans 700, 20px
Body text:       Inter 400, 16px, leading 1.65
Button text:     Plus Jakarta Sans 700, 16px, tracking 0.12em, UPPERCASE
Quiz option:     Plus Jakarta Sans 600, 16px
Badge/Label:     Plus Jakarta Sans 600, 12.8px, tracking 0.08em, UPPERCASE
Baybayin:        Noto Sans Tagalog, 39px, #3D2B1F
```

### Most-Used Animations

```
Button press:       spring { stiffness: 500, damping: 30 }
Page transition:    tween 300ms ease-in-out
Correct answer:     scale 1→1.08→1 + green border, 350ms spring
Incorrect answer:   shake ±8px horizontal, 400ms
XP float:           y -60px + opacity 0→1→0, 900ms
Card hover:         translateY(-2px) + shadow, 200ms ease-out
Bottom sheet:       spring { stiffness: 300, damping: 25 } from y:100%
```

### WCAG 2.2 Minimums

```
Body text contrast:   4.5:1  (target 7:1)
Large text contrast:  3:1    (target 4.5:1)
UI component contrast: 3:1
Touch targets:        24×24px minimum, 44×44px recommended
Focus ring:           3px solid #0EA5E9, offset 3px
Input font size:      16px minimum (prevents iOS zoom)
```

---

*Mabuhay ang Pilipinas! Design with heart, build with culture.*
