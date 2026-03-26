# Ako Pinoy — Project Plan & Architecture

> **Mission:** Help foreigners not just *understand* Filipino culture and language, but to truly *become* Pinoy — through immersive learning, real-life scenarios, quizzes, and AI-powered guidance.

---

## Table of Contents

1. [Vision & Goals](#1-vision--goals)
2. [Core Features](#2-core-features)
3. [Tech Stack](#3-tech-stack)
4. [System Architecture](#4-system-architecture)
5. [Monorepo Structure](#5-monorepo-structure)
6. [Database Schema](#6-database-schema)
7. [Content Strategy](#7-content-strategy)
8. [AI & Language Learning Engine](#8-ai--language-learning-engine)
9. [Gamification System](#9-gamification-system)
10. [Deployment & Infrastructure](#10-deployment--infrastructure)
11. [Development Roadmap](#11-development-roadmap)
12. [Filipino-Specific Considerations](#12-filipino-specific-considerations)
13. [Monetization & Donation Model](#13-monetization--donation-model)
14. [Content Creator Pipeline](#14-content-creator-pipeline)
15. [Legal & IP Considerations](#15-legal--ip-considerations)
16. [Cold Start Strategy](#16-cold-start-strategy)
17. [Content Moderation](#17-content-moderation)
18. [Marketing & Growth Plan](#18-marketing--growth-plan)

---

## 1. Vision & Goals

**Ako Pinoy** ("I am Filipino") is a cultural immersion and language learning platform designed for foreigners who want to deeply connect with Filipino people, language, and daily life.

### Primary Goals
- Teach **Tagalog** vocabulary, phrases, grammar, and pronunciation
- Explain **Filipino culture** — traditions, values (e.g., *Bayanihan*, *Pakikisama*, *Hiya*), festivals, food, and family dynamics
- Simulate **real-life Filipino scenarios** — market (palengke) visits, jeepney rides, family gatherings, fiestas
- Test understanding through **adaptive quizzes** with spaced repetition
- Build a **community** where learners interact with each other and native speakers
- Provide a path from complete beginner to someone who can truly *live* as a Filipino

### Target Users
- Tourists visiting the Philippines
- OFW (Overseas Filipino Worker) family members abroad
- Business people working with Filipino teams
- People in relationships with Filipinos
- Cultural enthusiasts and language hobbyists

---

## 2. Core Features

### 2.1 Language Learning
- **Vocabulary builder** — word-of-the-day, topic-based word sets (food, family, directions, greetings)
- **Pronunciation guide** — native audio for every word and phrase (fil-PH TTS + real recordings)
- **Grammar lessons** — Tagalog sentence structure, verb focus system (Actor, Object, Locative, Benefactive Focus)
- **Phrase library** — common expressions, idioms (*salawikain*), slang (*jejemon*, *conyo*, *Taglish*)
- **Baybayin script** — optional module to learn the traditional Filipino writing system
- **Spaced repetition (FSRS algorithm)** — smart scheduling so learners never forget vocabulary

### 2.2 Cultural Immersion
- **Daily life scenarios** — interactive simulations of Filipino daily routines
  - Eating breakfast (*tapsilog*, *sinangag*, *itlog*)
  - Riding a jeepney or tricycle
  - Shopping at the palengke (wet market)
  - Attending a birthday party or *fiesta*
  - Visiting a relative's home (*mano po* protocol)
  - Watching a *serbisyo* (church service)
- **Cultural deep-dives** — articles on values (*utang na loob*, *amor propio*), history, religion, regional differences
- **Filipino calendar** — explanations of holidays (*Araw ng Kalayaan*, *Pista ng Mahal na Ina*, Holy Week traditions)
- **Food guide** — descriptions of Filipino dishes, how to order, what to expect
- **Regional cultures** — Ilocano, Cebuano, Bicolano, Kapampangan, Maranao cultural differences

### 2.3 Quizzes & Assessments
- **Multiple choice** — Tagalog word meanings, cultural facts
- **Fill-in-the-blank** — complete the Filipino sentence
- **Listening comprehension** — hear a phrase, choose the meaning
- **Speaking challenge** — record pronunciation, get AI feedback
- **Scenario roleplay** — AI-powered dialogue simulations (e.g., bargaining at the market)
- **Image recognition** — "What is this Filipino food called?"
- **Daily challenge** — one quiz per day to maintain streak

### 2.4 Progress & Gamification
- **XP system** — earn experience points for every lesson, quiz, and streak
- **Leveling** — Baguhan (Beginner) → Natututo (Learning) → Bihasa (Skilled) → Dalubhasa (Expert) → Tunay na Pinoy (True Filipino)
- **Streaks** — daily login and learning streaks (inspired by Duolingo)
- **Badges & achievements** — "First Mano Po", "Palengke Pro", "Tagalog Tsinelas" unlockable badges
- **Leaderboard** — weekly and all-time rankings
- **Hearts system** — limited mistakes before losing progress (optional, configurable)

### 2.5 Community
- **Discussion forums** — ask questions about Filipino culture and language
- **Language exchange** — match foreigners with Filipinos for practice sessions
- **User-submitted content** — Filipinos contribute recordings, corrections, and cultural stories
- **Native speaker verification** — community-validated translations and pronunciations

---

## 3. Tech Stack

### Decision Summary

| Layer | Technology | Version | Reason |
|---|---|---|---|
| Web Framework | **Next.js** | 15.x | Best fullstack React framework, App Router, SSR |
| Mobile | **Expo + React Native** | SDK 52 / RN 0.76 | New Architecture, single codebase iOS+Android |
| Backend API | **Hono + tRPC** | 4.x / 11.x | Type-safe, edge-native, minimal overhead |
| Database | **PostgreSQL + Drizzle ORM** | 17 / 0.38.x | Type-safe SQL, pgvector for AI embeddings |
| Cache | **Upstash Redis** | 7.x | Serverless, leaderboards, session cache |
| Auth | **Clerk** | 6.x | Best Next.js + Expo DX, social OAuth |
| AI Engine | **Vercel AI SDK + OpenAI** | 4.x / GPT-4o | Streaming, quiz generation, conversation AI |
| TTS/Speech | **Azure Cognitive Speech** | Latest | fil-PH native voice support |
| UI Components | **shadcn/ui + Tailwind CSS** | Latest / 4.x | Accessible, customizable, zero-runtime |
| Animations | **Framer Motion** | 11.x | Gamification animations, transitions |
| State (Client) | **Zustand** | 5.x | Minimal boilerplate, TypeScript-first |
| State (Server) | **TanStack Query** | 5.x | Caching, background sync, optimistic updates |
| Forms | **React Hook Form + Zod** | 7.x / 3.x | Type-safe, performant validation |
| Job Queue | **BullMQ** | 5.x | Async scraping, AI processing pipelines |
| Monorepo | **Turborepo** | 2.x | Fast builds, shared packages |
| Testing (Unit) | **Vitest** | 2.x | Fastest, modern, Vite-native |
| Testing (E2E Web) | **Playwright** | 1.x | Cross-browser, reliable |
| Testing (E2E Mobile) | **Maestro** | 1.x | Best mobile E2E tool 2025 |
| Hosting (Web) | **Vercel** | Latest | Zero-config Next.js, Edge Functions |
| Hosting (Mobile) | **Expo EAS** | Latest | Cloud builds, OTA updates |
| Database Host | **Neon** | Latest | Serverless PostgreSQL, branching |
| File Storage | **Cloudflare R2** | Latest | Zero egress fees for audio/images |
| Monitoring | **Sentry** | 8.x | Error tracking web + mobile |
| Analytics | **Vercel Analytics + PostHog** | Latest | Web vitals + product analytics |

---

## 4. System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENTS                              │
│  ┌─────────────────┐        ┌──────────────────────────┐   │
│  │  Next.js 15 Web │        │  Expo 52 Mobile (iOS/And)│   │
│  │  (Vercel)       │        │  (EAS Build + EAS Update)│   │
│  └────────┬────────┘        └───────────┬──────────────┘   │
└───────────┼─────────────────────────────┼───────────────────┘
            │ tRPC over HTTPS             │ tRPC over HTTPS
            ▼                             ▼
┌─────────────────────────────────────────────────────────────┐
│                     API LAYER (Hono + tRPC)                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────┐  │
│  │ Auth     │ │ Lessons  │ │ Quiz     │ │ Community    │  │
│  │ Router   │ │ Router   │ │ Router   │ │ Router       │  │
│  └──────────┘ └──────────┘ └──────────┘ └──────────────┘  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────┐  │
│  │ Progress │ │ Content  │ │ AI/Chat  │ │ Leaderboard  │  │
│  │ Router   │ │ Router   │ │ Router   │ │ Router       │  │
│  └──────────┘ └──────────┘ └──────────┘ └──────────────┘  │
└─────────────────────┬───────────────────────────────────────┘
                      │
          ┌───────────┼───────────────┐
          ▼           ▼               ▼
┌──────────────┐ ┌──────────┐ ┌──────────────┐
│  Neon        │ │ Upstash  │ │ Cloudflare   │
│  PostgreSQL  │ │ Redis    │ │ R2 Storage   │
│  + pgvector  │ │          │ │ (Audio/Imgs) │
└──────────────┘ └──────────┘ └──────────────┘
          │
          ▼
┌─────────────────────────────────────────────┐
│           BACKGROUND WORKERS (BullMQ)        │
│  ┌────────────┐ ┌─────────────┐ ┌────────┐  │
│  │ Content    │ │ AI Quiz     │ │ Email/ │  │
│  │ Scraper    │ │ Generator   │ │ Notif  │  │
│  └─────┬──────┘ └──────┬──────┘ └────────┘  │
└────────┼───────────────┼─────────────────────┘
         ▼               ▼
┌──────────────┐  ┌──────────────────────────┐
│ External     │  │ OpenAI API               │
│ Content APIs │  │ Azure Speech (fil-PH TTS)│
│ (Wikipedia,  │  │ Whisper (Speech-to-Text) │
│  Wiktionary) │  └──────────────────────────┘
└──────────────┘
```

### Data Flow: Lesson + Quiz

```
User opens lesson
    → tRPC query → API → Redis cache check
    → Cache miss → PostgreSQL fetch
    → Return lesson content + vocabulary
    → Client renders with React Server Components
    → User completes quiz
    → tRPC mutation → API → PostgreSQL update (progress, XP)
    → Redis update (streak, leaderboard sorted set)
    → FSRS algorithm calculates next review date
    → Response with updated XP + badge check
    → Framer Motion animations for XP gain
```

---

## 5. Monorepo Structure

```
ako-pinoy/
├── apps/
│   ├── web/                          # Next.js 15 web app
│   │   ├── app/
│   │   │   ├── (auth)/               # Auth pages (login, signup)
│   │   │   ├── (app)/                # Protected app pages
│   │   │   │   ├── dashboard/        # Learning dashboard
│   │   │   │   ├── lessons/          # Lesson browser + viewer
│   │   │   │   ├── quiz/             # Quiz interface
│   │   │   │   ├── scenarios/        # Interactive daily life simulations
│   │   │   │   ├── culture/          # Cultural deep-dive articles
│   │   │   │   ├── community/        # Forums + language exchange
│   │   │   │   ├── leaderboard/      # Rankings
│   │   │   │   └── profile/          # User profile + achievements
│   │   │   ├── api/                  # API routes (tRPC handler)
│   │   │   └── layout.tsx
│   │   ├── components/               # Web-specific components
│   │   └── package.json
│   │
│   ├── mobile/                       # Expo 52 React Native app
│   │   ├── app/                      # Expo Router file-based navigation
│   │   │   ├── (tabs)/
│   │   │   │   ├── home.tsx          # Daily lesson + streak
│   │   │   │   ├── learn.tsx         # Lesson browser
│   │   │   │   ├── practice.tsx      # Quiz + speaking practice
│   │   │   │   ├── culture.tsx       # Culture cards
│   │   │   │   └── profile.tsx       # Progress + achievements
│   │   │   ├── lesson/[id].tsx
│   │   │   ├── quiz/[id].tsx
│   │   │   └── scenario/[id].tsx
│   │   ├── components/               # Mobile-specific components
│   │   └── package.json
│   │
│   └── workers/                      # BullMQ background workers
│       ├── scraper/                  # Content scraping jobs
│       ├── ai-processor/             # AI quiz generation
│       └── notifications/            # Push notification sender
│
├── packages/
│   ├── ui/                           # Shared shadcn/ui components
│   │   ├── components/               # Button, Card, Badge, Progress, etc.
│   │   ├── hooks/                    # Shared React hooks
│   │   └── package.json
│   │
│   ├── db/                           # Drizzle ORM schema + migrations
│   │   ├── schema/
│   │   │   ├── users.ts
│   │   │   ├── lessons.ts
│   │   │   ├── vocabulary.ts
│   │   │   ├── quizzes.ts
│   │   │   ├── progress.ts
│   │   │   ├── achievements.ts
│   │   │   ├── content.ts
│   │   │   └── community.ts
│   │   ├── migrations/
│   │   ├── client.ts                 # Drizzle client export
│   │   └── package.json
│   │
│   ├── api/                          # tRPC routers (shared between web + mobile)
│   │   ├── routers/
│   │   │   ├── auth.ts
│   │   │   ├── lessons.ts
│   │   │   ├── quiz.ts
│   │   │   ├── progress.ts
│   │   │   ├── vocabulary.ts
│   │   │   ├── community.ts
│   │   │   ├── leaderboard.ts
│   │   │   └── ai-chat.ts
│   │   ├── root.ts                   # Root tRPC router
│   │   └── package.json
│   │
│   ├── ai/                           # AI utilities
│   │   ├── quiz-generator.ts         # GPT-4o quiz generation
│   │   ├── pronunciation-check.ts    # Whisper pronunciation scoring
│   │   ├── dialogue-engine.ts        # Scenario roleplay AI
│   │   ├── embeddings.ts             # pgvector embeddings for vocabulary
│   │   ├── fsrs.ts                   # FSRS spaced repetition algorithm
│   │   └── package.json
│   │
│   ├── scraper/                      # Content sourcing
│   │   ├── sources/
│   │   │   ├── wikipedia.ts          # Wikipedia API integration
│   │   │   ├── wiktionary.ts         # Wiktionary Tagalog scraper
│   │   │   ├── tagalog-lang.ts       # tagaloglang.com scraper
│   │   │   └── filipiknow.ts         # filipiknow.net scraper
│   │   ├── pipeline.ts               # ETL pipeline orchestrator
│   │   └── package.json
│   │
│   └── types/                        # Shared Zod schemas + TypeScript types
│       ├── lesson.ts
│       ├── quiz.ts
│       ├── user.ts
│       ├── vocabulary.ts
│       └── package.json
│
├── turbo.json                        # Turborepo pipeline config
├── package.json                      # Root package.json (pnpm workspaces)
├── pnpm-workspace.yaml
└── PLAN.md                           # This file
```

---

## 6. Database Schema

```sql
-- Users
users (
  id          uuid PRIMARY KEY,
  clerk_id    text UNIQUE NOT NULL,
  username    text UNIQUE NOT NULL,
  display_name text,
  avatar_url  text,
  native_lang text DEFAULT 'en',       -- learner's native language
  xp          integer DEFAULT 0,
  level       text DEFAULT 'baguhan',  -- baguhan → natututo → bihasa → dalubhasa → tunay_na_pinoy
  streak_days integer DEFAULT 0,
  last_active_at timestamptz,
  created_at  timestamptz DEFAULT now()
)

-- Vocabulary
vocabulary (
  id           uuid PRIMARY KEY,
  tagalog      text NOT NULL,
  english      text NOT NULL,
  pronunciation text,                  -- IPA transcription
  audio_url    text,                   -- Cloudflare R2 audio file
  part_of_speech text,                 -- noun, verb, adjective, etc.
  category     text,                   -- food, family, directions, etc.
  difficulty   text,                   -- beginner, intermediate, advanced
  example_tagalog text,
  example_english text,
  baybayin     text,                   -- Baybayin script representation
  embedding    vector(1536),           -- pgvector for semantic search
  created_at   timestamptz DEFAULT now()
)

-- Lessons
lessons (
  id           uuid PRIMARY KEY,
  title        text NOT NULL,
  slug         text UNIQUE NOT NULL,
  description  text,
  category     text,                   -- language, culture, scenario, food, etc.
  difficulty   text,
  xp_reward    integer DEFAULT 10,
  order_index  integer,
  content      jsonb,                  -- structured lesson content blocks
  thumbnail_url text,
  is_published boolean DEFAULT false,
  created_at   timestamptz DEFAULT now()
)

-- Quiz Questions
quiz_questions (
  id           uuid PRIMARY KEY,
  lesson_id    uuid REFERENCES lessons(id),
  type         text NOT NULL,          -- multiple_choice, fill_blank, listening, speaking, image
  question     text NOT NULL,
  options      jsonb,                  -- array of choices for MCQ
  correct_answer text NOT NULL,
  explanation  text,                   -- shown after answering
  audio_url    text,                   -- for listening questions
  image_url    text,                   -- for image recognition questions
  difficulty   text,
  created_at   timestamptz DEFAULT now()
)

-- User Progress (per lesson)
user_progress (
  id           uuid PRIMARY KEY,
  user_id      uuid REFERENCES users(id),
  lesson_id    uuid REFERENCES lessons(id),
  completed    boolean DEFAULT false,
  score        integer,                -- quiz score percentage
  xp_earned    integer DEFAULT 0,
  completed_at timestamptz,
  UNIQUE(user_id, lesson_id)
)

-- Spaced Repetition (FSRS)
vocabulary_reviews (
  id           uuid PRIMARY KEY,
  user_id      uuid REFERENCES users(id),
  vocab_id     uuid REFERENCES vocabulary(id),
  due_date     timestamptz NOT NULL,
  stability    float DEFAULT 0,        -- FSRS stability parameter
  difficulty   float DEFAULT 0.3,     -- FSRS difficulty parameter
  elapsed_days integer DEFAULT 0,
  scheduled_days integer DEFAULT 0,
  reps         integer DEFAULT 0,
  lapses       integer DEFAULT 0,
  state        text DEFAULT 'new',    -- new, learning, review, relearning
  last_review  timestamptz,
  UNIQUE(user_id, vocab_id)
)

-- Achievements / Badges
achievements (
  id           uuid PRIMARY KEY,
  key          text UNIQUE NOT NULL,   -- e.g., 'first_mano_po', 'palengke_pro'
  title        text NOT NULL,
  description  text,
  icon_url     text,
  xp_reward    integer DEFAULT 0,
  condition    jsonb                   -- JSON rules for unlock conditions
)

user_achievements (
  id           uuid PRIMARY KEY,
  user_id      uuid REFERENCES users(id),
  achievement_id uuid REFERENCES achievements(id),
  earned_at    timestamptz DEFAULT now(),
  UNIQUE(user_id, achievement_id)
)

-- Scenarios (interactive daily life simulations)
scenarios (
  id           uuid PRIMARY KEY,
  title        text NOT NULL,
  description  text,
  setting      text,                   -- e.g., 'palengke', 'jeepney', 'fiesta'
  thumbnail_url text,
  dialogue_config jsonb,              -- AI dialogue system prompt + context
  vocabulary_ids uuid[],              -- vocabulary featured in this scenario
  xp_reward    integer DEFAULT 15,
  is_published boolean DEFAULT false
)

-- Scraped Content (content pipeline)
scraped_content (
  id           uuid PRIMARY KEY,
  source_url   text NOT NULL,
  source_name  text NOT NULL,
  title        text,
  raw_html     text,
  parsed_content jsonb,
  content_type text,                  -- article, vocabulary, phrase, audio
  is_processed boolean DEFAULT false,
  scraped_at   timestamptz DEFAULT now(),
  processed_at timestamptz
)

-- Community Posts
community_posts (
  id           uuid PRIMARY KEY,
  user_id      uuid REFERENCES users(id),
  title        text,
  body         text NOT NULL,
  category     text,                  -- question, story, tip, correction
  upvotes      integer DEFAULT 0,
  created_at   timestamptz DEFAULT now()
)
```

---

## 7. Content Strategy

### Public APIs (Free, No Scraping)

| Source | API | Content Type |
|---|---|---|
| Wikipedia | `en.wikipedia.org/api/rest_v1/` | Cultural articles, history |
| Wiktionary | `en.wiktionary.org/w/api.php` | Tagalog word definitions |
| YouTube Data API v3 | `googleapis.com` | Curated Filipino learning videos |
| FreeSound API | `freesound.org/apiv2/` | Ambient Filipino sounds for scenarios |
| Open Library | `openlibrary.org/api/` | Public domain Filipino literature |
| GeoNames API | `geonames.org/export/` | Philippine provinces, cities, regions |

### Web Scraping (robots.txt compliant, rate-limited)

| Target | Content | Schedule |
|---|---|---|
| `tagaloglang.com` | Phrases, expressions, slang | Weekly |
| `filipiknow.net` | Cultural articles, trivia | Weekly |
| `tagalog.com` | Vocabulary lists, grammar | Weekly |
| `omniglot.com/writing/tagalog.htm` | Baybayin script info | Monthly |
| `seasite.niu.edu/tagalog/` | Academic Tagalog resources | Monthly |

### Scraping Ethics Rules
1. Always check `robots.txt` before adding a new source
2. Rate-limit requests to max 1 request per 2 seconds per domain
3. Use BullMQ delay queues — never burst scrape
4. Cache all scraped content with `scraped_at` timestamps
5. Re-scrape on weekly cron schedule, not on every user request
6. Display source attribution for all scraped content
7. Respect `Cache-Control` and `Retry-After` headers

### Free Linguistic Datasets

- **FLORES-200** (Meta) — Filipino language dataset, no scraping needed
- **UD_Tagalog** — Universal Dependencies Tagalog treebank for grammar
- **Leipzig Filipino Corpus** — Large Filipino text corpus (CC-BY license)
- **Common Voice** (Mozilla) — Community Filipino audio recordings

---

## 8. AI & Language Learning Engine

### Spaced Repetition (FSRS Algorithm)

The **Free Spaced Repetition Scheduler (FSRS)** is the 2024-2025 state-of-the-art algorithm, used in Anki. It outperforms the older SM-2 algorithm.

```typescript
// packages/ai/fsrs.ts
// Calculates next review date based on user performance
// Parameters: stability, difficulty, elapsed_days, rating (1-4: again/hard/good/easy)
// Returns: next_due_date, updated_stability, updated_difficulty
```

### AI Quiz Generation

- GPT-4o-mini generates context-aware quiz questions from lesson content
- Questions are generated once and stored in PostgreSQL (not generated per-request)
- Regenerated weekly or when source content updates
- Prompt template injects: lesson topic, difficulty, learner level, previous questions to avoid duplicates

### Conversational AI (Scenario Roleplay)

- GPT-4o powers real-time dialogue for daily-life scenarios
- System prompt establishes Filipino character persona (e.g., `Ate Maria`, a vendor at the palengke)
- AI character uses natural Tagalog, corrects learner mistakes in-conversation
- Vercel AI SDK `useChat` hook for streaming responses

### Pronunciation Assessment

- Learner records voice via `expo-av` (mobile) or Web Audio API (web)
- Audio sent to OpenAI Whisper for transcription
- Transcription compared to expected text using edit distance + phoneme matching
- Score returned with feedback ("Good try! The stress should be on the second syllable")

### Semantic Vocabulary Search

- All vocabulary stored with OpenAI `text-embedding-3-small` embeddings in pgvector
- "Find similar words" feature uses cosine similarity search
- Powers recommendation engine: "Since you learned *kumain*, try *magluto*, *masarap*"

---

## 9. Gamification System

### XP & Levels

| Level | Filipino Name | XP Required | Unlock |
|---|---|---|---|
| 1 | Baguhan (Newbie) | 0 | Basic lessons |
| 2 | Natututo (Learning) | 500 | Scenarios, audio exercises |
| 3 | Bihasa (Skilled) | 2,000 | Advanced grammar, Baybayin |
| 4 | Dalubhasa (Expert) | 5,000 | Community tools, teaching mode |
| 5 | Tunay na Pinoy | 10,000 | Full platform, native speaker matching |

### XP Sources

| Action | XP Earned |
|---|---|
| Complete a lesson | 10 XP |
| Perfect quiz score | 20 XP |
| Daily streak (7 days) | 50 bonus XP |
| Complete a scenario | 15 XP |
| Community contribution (upvoted) | 5 XP |
| Vocabulary review (FSRS) | 2 XP per word |
| Speaking exercise | 8 XP |

### Badges (Sample)

| Badge | Key | Unlock Condition |
|---|---|---|
| Mano Po | `first_mano_po` | Learn the *mano po* tradition |
| Palengke Pro | `palengke_pro` | Complete the palengke scenario |
| Kumain Na | `kumain_na` | Learn 20 food-related words |
| 7-Day Streak | `streak_7` | Maintain 7-day streak |
| Salamat | `first_correct` | First correct quiz answer |
| Baybayin Basic | `baybayin_basic` | Write your name in Baybayin |
| Tunay na Pinoy | `max_level` | Reach Level 5 |

### Leaderboard

- Powered by Redis Sorted Sets (`ZADD`, `ZREVRANK`)
- Weekly leaderboard resets every Monday 00:00 UTC+8 (Philippine time)
- All-time leaderboard persisted in PostgreSQL
- Filter by: Global, Friends, Country

---

## 10. Deployment & Infrastructure

### Environments

| Environment | Branch | Database | Notes |
|---|---|---|---|
| Development | `dev` | Neon dev branch | Local Expo Go |
| Staging | `staging` | Neon staging branch | EAS preview builds |
| Production | `main` | Neon main | EAS production builds |

### CI/CD Pipeline (GitHub Actions)

```yaml
on: push to main
jobs:
  1. Lint + Type Check (Turborepo)
  2. Run Vitest unit tests
  3. Run Playwright E2E tests
  4. Deploy to Vercel (web)
  5. EAS Update (mobile OTA) or EAS Build (native)
  6. Run database migrations (drizzle-kit migrate)
  7. Sentry release upload
```

### Infrastructure Cost Estimate (Early Stage)

| Service | Free Tier | Paid (est.) |
|---|---|---|
| Vercel | 100GB bandwidth | $20/mo Pro |
| Neon PostgreSQL | 0.5GB, 10 branches | $19/mo Launch |
| Upstash Redis | 10K req/day | $0.2 per 100K req |
| Cloudflare R2 | 10GB storage | $0.015/GB |
| OpenAI API | Pay-per-use | ~$50/mo est. |
| Clerk Auth | 10K MAU free | $25/mo Pro |
| EAS Build | 30 builds/mo | $29/mo Production |
| Azure Speech | 0.5M chars/mo | ~$15/mo |
| **Total (est.)** | | **~$160/mo** at scale |

---

## 11. Development Roadmap

### Phase 1 — Foundation (Weeks 1-4)
- [ ] Monorepo setup with Turborepo + pnpm workspaces
- [ ] Next.js 15 web app scaffold
- [ ] Expo 52 mobile app scaffold
- [ ] Drizzle schema + Neon PostgreSQL setup
- [ ] Clerk authentication (web + mobile)
- [ ] tRPC API setup with basic routers
- [ ] Cloudflare R2 file storage setup
- [ ] Basic UI design system with shadcn/ui + Tagalog-inspired color palette

### Phase 2 — Core Learning (Weeks 5-8)
- [ ] Vocabulary database (seed with 500+ words from public datasets)
- [ ] Lesson content structure + 10 starter lessons
- [ ] Multiple choice + fill-in-blank quiz engine
- [ ] Listening quiz with Azure TTS audio generation
- [ ] FSRS spaced repetition implementation
- [ ] User progress tracking
- [ ] XP + level system

### Phase 3 — Culture & Scenarios (Weeks 9-12)
- [ ] 5 interactive daily-life scenarios
- [ ] AI dialogue engine (GPT-4o scenario roleplay)
- [ ] Cultural article library (Wikipedia API integration)
- [ ] Food guide module
- [ ] Festival calendar
- [ ] Content scraping pipeline (Crawlee + BullMQ)

### Phase 4 — Gamification & Community (Weeks 13-16)
- [ ] Badges + achievements system
- [ ] Leaderboard (Redis sorted sets)
- [ ] Streak system with push notifications
- [ ] Community forums
- [ ] Speaking practice (Whisper pronunciation feedback)
- [ ] Baybayin script module

### Phase 5 — Polish & Launch (Weeks 17-20)
- [ ] Performance optimization (Core Web Vitals)
- [ ] Mobile app App Store + Play Store submission
- [ ] Onboarding flow
- [ ] SEO optimization for web
- [ ] Analytics (PostHog funnels)
- [ ] Beta user testing with Filipino community
- [ ] Public launch

---

## 12. Filipino-Specific Considerations

### Language & Locale
- Use locale `fil-PH` (Filipino, Philippines) not just `tl` for broader dialect coverage
- Include both formal Tagalog and everyday spoken Filipino (Taglish is common and should be taught)
- Cover regional languages as bonus content: Cebuano, Ilocano, Bicolano, Kapampangan

### Typography & Script
- Use **Noto Sans Tagalog** (Google Fonts) for Baybayin script rendering
- Ensure Tagalog characters with diacritics (á, é, í, ó, ú) render correctly
- Font stack: `'Noto Sans', 'Arial', sans-serif` for fallback

### Audio & TTS
- **Azure Neural TTS** voices for Filipino:
  - `fil-PH-BlessicaNeural` (Female, natural)
  - `fil-PH-AngeloNeural` (Male, natural)
- Pre-generate TTS for all vocabulary and store in Cloudflare R2 (avoid per-request latency)
- Record real native speaker audio for the most common 1,000 words

### Cultural Sensitivity
- Present Filipino culture respectfully — avoid stereotypes
- Include diverse regional representation (not just Manila/Tagalog-centric)
- Have Filipino cultural advisors review content before publishing
- Teach the concept of *pakikisama* (social harmony) — explain why direct refusal is rare

### Authentication for Philippine Users
- **Google OAuth** — most common login for Filipinos
- **Facebook OAuth** — extremely popular in the Philippines (high Facebook penetration)
- **Apple OAuth** — required for iOS App Store
- **Semaphore.co** — Philippine SMS gateway for OTP (cheaper than Twilio for PH numbers)

### Philippine Payments (Premium Features)
- **GCash** — dominant e-wallet in the Philippines
- **Maya (PayMaya)** — major Philippine payment platform
- **Stripe** — for international users
- Use Xendit or PayMongo as unified Philippine payment gateway

### Design Aesthetics
- Color palette inspired by:
  - Philippine flag: **Blue** (#0038A8), **Red** (#CE1126), **Yellow/Gold** (#FCD116), **White**
  - Tropical: warm yellows, greens, ocean blues
- Illustrative style: vibrant, warm, hand-drawn feel (similar to *parol* and *jeepney* art)
- Icons representing Filipino symbols: *parol*, *jeepney*, *sampaguita*, *bamboo*, *sipa*

---

## Key Principles

1. **Immersion over memorization** — teach language through context, not word lists
2. **Culture-first** — understanding *why* Filipinos say things makes language stick
3. **Accessibility** — works offline (mobile), low-bandwidth friendly
4. **Community-powered** — Filipinos improving the app makes it more authentic
5. **Respect** — present Filipino culture with dignity and depth, not as novelty

---

## 13. Monetization & Donation Model

### Philosophy

**Ako Pinoy is 100% free.** Everything is accessible to everyone, no paywalls, no locked lessons. The donation is purely a "thank you" from people who love the app — like buying the creator a coffee. No perks locked behind it. Just gratitude.

> *"Kung gusto mong tumulong, salamat. Kung hindi, okay lang — maligayang pagdating!"*
> ("If you want to help, thank you. If not, no problem — welcome!")

---

### Donation Options

| Option | Amount | Label |
|---|---|---|
| Small coffee | **$3** | "Salamat!" |
| Big coffee | **$5** | "Maraming Salamat!" |
| One-time custom | Any amount | "Ikaw ang magaling!" |

- **No recurring billing** — one-time donation only, no subscription
- Donor gets a **"Supporter" badge** on their profile as a thank-you (cosmetic only)
- No features locked, no premium tier, no upsell funnel

---

### The Donation Message

A single, honest, non-intrusive message shown in two places only:

> *"Ako Pinoy is completely free. If it's helped you, a small donation ($3–$5) keeps the lights on. Salamat!"*

**Shown only on:**
- Profile settings page (always visible, never a popup)
- After reaching Level 3 — Bihasa (one-time soft banner, dismissible, never shown again)

**Never shown:**
- During lessons or quizzes
- As a blocking modal
- More than once per session

---

### Payment Integration (Donations)

| Method | Users |
|---|---|
| **Ko-fi / Buy Me a Coffee** | Simplest — no backend needed, link out |
| **Stripe one-time payment** | Custom in-app donation flow |
| **GCash** | Philippine users |
| **Maya (PayMaya)** | Philippine users |
| **PayPal** | International fallback |

**Recommended approach:** Start with **Ko-fi** (zero setup, zero backend) and link to it. Migrate to in-app Stripe if donation volume warrants it.

---

### Database: Donations Schema

```sql
donations (
  id           uuid PRIMARY KEY,
  user_id      uuid REFERENCES users(id),
  amount_usd   numeric(6,2) NOT NULL,      -- e.g., 3.00 or 5.00
  currency     text DEFAULT 'USD',
  platform     text,                        -- 'stripe', 'kofi', 'gcash', 'paypal'
  external_ref text,                        -- payment reference / transaction ID
  message      text,                        -- optional donor message
  donated_at   timestamptz DEFAULT now()
)
```

---

### Revenue Projection (Donations Only)

| Users (MAU) | Donors (est. 2%) | Avg Donation | Monthly |
|---|---|---|---|
| 500 | 10 | $4 | ~$40/mo |
| 2,000 | 40 | $4 | ~$160/mo ← breaks even on infra |
| 10,000 | 200 | $4 | ~$800/mo |
| 50,000 | 1,000 | $4 | ~$4,000/mo |

Break-even is ~2,000 MAU. Realistic to reach within 3–6 months with a focused launch.

---

### Phase Addition to Roadmap

Add to **Phase 5 — Polish & Launch**:
- [ ] Ko-fi / Buy Me a Coffee page setup (day 1, zero dev cost)
- [ ] Donation page inside app (links out to Ko-fi or Stripe)
- [ ] Supporter badge awarded automatically on donation confirmation
- [ ] Stripe one-time payment flow (optional upgrade from Ko-fi)

---

---

## 14. Content Creator Pipeline

Without a clear workflow for who writes and curates content, the app will stall after the initial seed content. This section defines how content gets created, reviewed, and published.

### Content Types & Owners

| Content Type | Who Creates It | Who Reviews It |
|---|---|---|
| Vocabulary entries | Automated (public datasets + scraper) | Filipino language consultant |
| Lesson articles | Creator (you) + AI-assisted drafting | Filipino cultural advisor |
| Cultural deep-dives | Creator + Wikipedia API + AI summary | Filipino cultural advisor |
| Quiz questions | AI-generated (GPT-4o-mini) | Auto + spot-check by creator |
| Scenario dialogues | Creator writes script, AI expands | Native speaker review |
| Pronunciation audio | Azure TTS (automated) + native recordings | Listen check by native speaker |
| User-submitted content | Community contributors | Moderation team (see Section 17) |

### Content Workflow (CMS-style)

```
Idea / Source
    ↓
Draft (Creator or AI-assisted)
    ↓
Filipino Advisor Review  ←── flag cultural inaccuracies
    ↓
Native Speaker Audio Recording (if needed)
    ↓
QA Check (quiz logic, links, audio sync)
    ↓
Publish (is_published = true in DB)
    ↓
Community feedback → update cycle
```

### Tools for Content Creation

- **Notion or Linear** — content calendar and editorial tracking
- **Admin dashboard** (build in Phase 2) — CRUD interface for lessons, vocabulary, quizzes
- **AI drafting** — use GPT-4o with a custom system prompt to draft lesson content, then human-edit
- **Crowdin or Loco** — if you add translations beyond English

### Filipino Cultural Advisors

Recruit 2–3 Filipino advisors early (pre-launch):
- Post in Filipino Facebook groups, Reddit r/Philippines, and Twitter/X Filipino community
- Offer: **free lifetime supporter badge + credited in the app** ("Content reviewed by...")
- Role: spot-check cultural accuracy, flag stereotypes, suggest missing topics
- Time commitment: 1–2 hours/week async (async via Notion comments)

### Content Velocity Target

| Phase | Target |
|---|---|
| Launch | 50 vocabulary lessons, 10 cultural articles, 5 scenarios |
| Month 3 | 200 vocab, 30 articles, 15 scenarios |
| Month 6 | 500 vocab, 60 articles, 30 scenarios |
| Year 1 | 1,000+ vocab, 100+ articles, 50+ scenarios |

---

## 15. Legal & IP Considerations

Scraping and using public content has real legal risk if not handled carefully. This section defines the guardrails.

### Scraping Rules (Non-Negotiable)

1. **Always read `robots.txt`** before scraping any domain — if disallowed, skip it
2. **Never scrape paywalled or login-required content**
3. **Rate-limit all scrapers** — max 1 request per 2–3 seconds per domain
4. **Store attribution** — every scraped content record must have `source_url` and `source_name`
5. **Display attribution in the UI** — "Source: filipiknow.net" under every article
6. **Do not reproduce full articles** — use excerpts (< 300 words) and link to original
7. **Re-check `robots.txt` on every weekly scrape run** — sites change their policies

### Licenses to Understand Before Launch

| Source | License | What You Can Do |
|---|---|---|
| Wikipedia content | CC BY-SA 4.0 | Use freely with attribution + share-alike |
| Wiktionary | CC BY-SA 3.0 | Use freely with attribution + share-alike |
| FLORES-200 (Meta) | CC BY-SA 4.0 | Use freely with attribution |
| Leipzig Corpus | CC BY | Use freely with attribution |
| Common Voice (Mozilla) | CC0 | Public domain, use freely |
| YouTube videos | YouTube ToS | Embed only via iframe — never download |
| FreeSound audio | Mixed (check per file) | Use CC0/CC BY files only |

### Pre-Launch Legal Checklist

- [ ] Write a **Terms of Service** that covers user-generated content ownership
- [ ] Write a **Privacy Policy** (required for App Store + GDPR/Philippines Data Privacy Act)
- [ ] Add **DMCA takedown process** for user-submitted content
- [ ] Consult a lawyer (1-hour session) on scraping liability before public launch — ~$150–$300 one-time cost
- [ ] Add `robots.txt` to your own domain (allow crawlers for SEO, block scrapers if desired)
- [ ] Register **"Ako Pinoy"** as a trademark if the app gains traction (optional, ~$400 USPTO)

### Philippines Data Privacy Act (R.A. 10173)

If you collect data from Filipino users, you must comply:
- Disclose what data you collect and why
- Allow users to request data deletion
- Register with the **National Privacy Commission (NPC)** if you process personal data commercially
- Clerk (auth provider) handles most of the data privacy heavy lifting, but you must still publish a compliant Privacy Policy

---

## 16. Cold Start Strategy

With zero users at launch, community features will feel empty. This is the "cold start problem" — and it needs a deliberate plan.

### Phase 0 — Pre-Launch (4 weeks before launch)

**Goal:** Have content and a small community ready on day 1.

- [ ] Seed the database with 50 lessons, 200 vocabulary words, 5 scenarios before opening to public
- [ ] Recruit **10–20 beta testers** from Filipino diaspora Facebook groups and Reddit r/LearnFilipino
- [ ] Create a **waitlist page** (simple Next.js page + email capture via Resend or Mailchimp)
- [ ] Post in communities to build pre-launch interest:
  - Reddit: r/Philippines, r/LearnFilipino, r/languagelearning
  - Facebook groups: "Tagalog for Beginners", "Learn Filipino Language"
  - Twitter/X: #LearnTagalog, #Filipino
  - TikTok: short videos teaching one Tagalog word/phrase per day (links to waitlist)

### Phase 1 — Soft Launch (Week 1)

- Invite waitlist users only (controlled rollout)
- Personally message each beta user — ask for feedback within 48 hours
- Fix top 3 reported bugs before public launch

### Seeding Community Features

| Feature | Cold Start Fix |
|---|---|
| Forums | Pre-populate with 10 starter threads written by you ("What surprised you about Filipino culture?") |
| Language exchange | Don't launch until you have 20+ Filipino native speakers signed up — recruit via OFW Facebook groups |
| Leaderboard | Seed with 5 dummy accounts showing realistic XP so new users don't see an empty board |
| "Word of the Day" | Pre-schedule 90 days of word-of-the-day content before launch |
| Community posts | Invite 5 Filipino friends to post their stories before public launch |

### Growth Loop (Post-Launch)

```
New user signs up
    ↓
Completes first lesson → earns "Baguhan" badge
    ↓
Shares badge on social media (built-in share button)
    ↓
Friends see post → visit app → sign up
    ↓
Loop repeats
```

- Add a **"Share your progress"** button after every level-up and streak milestone
- Generate a shareable image card (e.g., "I just learned 50 Tagalog words on Ako Pinoy!")
- Use **Vercel OG image generation** for dynamic share cards

---

## 17. Content Moderation

User-generated content (forum posts, comments, user submissions) needs moderation tooling from day 1 — not as an afterthought.

### What Needs Moderation

| Content | Risk Level | Strategy |
|---|---|---|
| Forum posts | Medium | Automated filter + report button |
| User-submitted vocabulary corrections | Low | Queue for admin review before publishing |
| User-submitted cultural stories | Medium | Queue for admin review before publishing |
| User avatars / profile images | Medium | Clerk handles this, or use Cloudflare Images moderation |
| Community comments | Medium | Rate-limit + automated filter + report button |

### Moderation Stack

- **Automated pre-filter:** [Perspective API](https://perspectiveapi.com/) (free, by Google) — detects toxicity, spam, harassment before content is saved
- **Report button** on every post/comment — sends to admin review queue
- **Admin dashboard** — simple table of flagged content with approve/reject/ban actions
- **Shadow banning** — hide content from others without notifying the user (reduces ban evasion)
- **Rate limiting** — max 5 posts per hour per user (Upstash Redis rate limiter)

### Database: Moderation Schema

```sql
content_reports (
  id           uuid PRIMARY KEY,
  reporter_id  uuid REFERENCES users(id),
  content_type text NOT NULL,          -- 'post', 'comment', 'submission'
  content_id   uuid NOT NULL,
  reason       text NOT NULL,          -- 'spam', 'offensive', 'inaccurate', 'other'
  status       text DEFAULT 'pending', -- 'pending', 'resolved', 'dismissed'
  reviewed_by  uuid REFERENCES users(id),
  reviewed_at  timestamptz,
  created_at   timestamptz DEFAULT now()
)

user_bans (
  id           uuid PRIMARY KEY,
  user_id      uuid REFERENCES users(id),
  reason       text,
  banned_until timestamptz,            -- null = permanent
  banned_by    uuid REFERENCES users(id),
  created_at   timestamptz DEFAULT now()
)
```

### Moderation Workflow

```
User submits content
    ↓
Perspective API auto-check (< 200ms)
    ↓
Score > 0.8 → auto-reject + notify user
Score 0.5–0.8 → hold for admin review
Score < 0.5 → publish immediately
    ↓
Any user can report published content
    ↓
Admin reviews flagged content → approve / remove / ban user
```

### Community Guidelines

Publish a short, clear Community Guidelines page:
- Speak respectfully about Filipino culture and people
- No hate speech, discrimination, or harassment
- No spam or self-promotion
- Corrections must be constructive, not dismissive
- Off-topic posts will be removed

---

## 18. Marketing & Growth Plan

Reaching 2,000 MAU (donation break-even) requires a deliberate marketing plan, not luck.

### Target Audiences & Channels

| Audience | Where They Are | Message |
|---|---|---|
| Foreigners dating/married to Filipinos | Reddit r/Philippines, Facebook "Expats in Philippines" | "Finally understand your partner's family" |
| Tourists planning Philippines trip | TripAdvisor forums, travel subreddits, YouTube travel comments | "Learn Tagalog before your trip" |
| OFW family members abroad | Facebook OFW groups | "Connect with your Filipino roots" |
| Language learners | Reddit r/languagelearning, LingQ forums, Discord | "Filipino is underserved — learn it here" |
| K-pop / Southeast Asia culture fans | TikTok, Twitter/X | "Filipino culture is fascinating — here's why" |

### Content Marketing (Free, Highest ROI)

- **TikTok / Instagram Reels** — 1 short video per day teaching one Tagalog word or cultural fact
  - "Did you know Filipinos say *mano po* to show respect to elders?"
  - "What does *Bahala na* really mean?"
  - Link in bio to app
- **YouTube Shorts** — same content repurposed
- **Reddit posts** — share genuinely helpful Tagalog tips in r/languagelearning (no spam, add value first)
- **SEO blog** — "How to say X in Tagalog", "Filipino culture explained" — targets Google search traffic

### Launch Channels

- **Product Hunt launch** — schedule for a Tuesday, have 20+ friends upvote on launch day
- **Hacker News "Show HN"** — post a Show HN thread with the technical story
- **Filipino influencers** — DM 5–10 small Filipino YouTubers/TikTokers, offer them early access and supporter badge in exchange for an honest mention
- **App Store optimization (ASO)** — keyword-optimize the App Store listing for "learn tagalog", "filipino language", "tagalog for beginners"

### Growth Milestones & Timeline

| Milestone | Target Date | How |
|---|---|---|
| 100 users | Week 2 | Beta testers + Product Hunt |
| 500 users | Month 2 | TikTok + Reddit |
| 2,000 users (break-even) | Month 4–6 | SEO kicks in + word of mouth |
| 10,000 users | Month 9–12 | Organic + influencer mentions |

### Key Metric to Track

**Week-1 retention** — if 40%+ of new users return within 7 days, the product has pull. Below 20% means the core loop needs fixing before spending on marketing.

Track via **PostHog** (open-source, self-hostable, free tier):
- Day 1, Day 7, Day 30 retention cohorts
- Funnel: Sign up → First lesson → First quiz → 3-day streak
- Drop-off point analysis

---

## Key Principles

1. **Immersion over memorization** — teach language through context, not word lists
2. **Culture-first** — understanding *why* Filipinos say things makes language stick
3. **Accessibility** — works offline (mobile), low-bandwidth friendly
4. **Community-powered** — Filipinos improving the app makes it more authentic
5. **Respect** — present Filipino culture with dignity and depth, not as novelty
6. **Free forever** — donations fund the mission, never paywalls

---

*Mabuhay ang Pilipinas!* 🇵🇭
