# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Problem Tracker is a Next.js application for cataloging problems worth solving as potential startup ideas. Users record problems they encounter, categorize them by frequency and willingness-to-pay, and review them to identify opportunities.

## Running the App

```bash
npm install
npm run dev
```

Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local`.

## Architecture

Next.js App Router with client components for interactivity. Supabase JS client used directly from the browser (no API routes). Tailwind CSS for styling with a dark theme.

**Key files:**
- `app/page.tsx` — server component shell
- `components/ProblemTracker.tsx` — main client component (state, CRUD)
- `components/ProblemForm.tsx` — add problem form (fixed bottom)
- `components/ProblemCard.tsx` — single problem card
- `components/StatsBar.tsx` — stats summary
- `components/EmptyState.tsx` — empty state
- `lib/supabase.ts` — Supabase client singleton

**Data flow:** `useEffect` loads problems from Supabase on mount → form captures input → `insert` writes to Supabase → reload list.

## Data Model (Supabase `problems` table)

```json
{
  "id": "int (auto)",
  "title": "string",
  "description": "string",
  "frequency": "Rare | Occasional | Frequent | Daily",
  "willingness_to_pay": "Low | Medium | High",
  "created": "ISO timestamp (auto)"
}
```

## Future Features (from original vision)

The app is designed to eventually support:
- Severity ratings and pain scoring (Frequency x Severity)
- Validation tracking (people count, market size estimates)
- Opportunity scoring (market size x willingness to pay)
- Problem sources (personal, interview, observation)
