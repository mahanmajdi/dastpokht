# Macro — a food log that reads sentences

**Live:** https://mahanmajdi.github.io/macro/

A calorie and macro tracker with a scroll-driven 3D site in front of it. Sign
in, answer a few questions the first time, get targets worked out for you, and
log what you eat — your log follows you to every device you sign in on.

## Pages

| Page | What it is |
|---|---|
| `index.html` | The product site: a hand-built 3D calorie ring, light and dark scroll chapters, and the sign-in buttons. |
| `app.html` | Sign-in, first-time setup, and the food log itself. |

## Signing in

1. Type your email and Macro sends you a sign-in link.
2. Open the link anywhere — the same computer or your phone. That tab just says
   **Email verification complete**.
3. The page where you typed your email signs itself in, with the ring filling
   up as it does.

Under the hood, the link tab stores a one-time token under a 256-bit random id
that only the waiting page knows. The waiting page claims it through a
database function — once, within 15 minutes — and nobody can list or read
those tokens directly. *Continue with Google* appears automatically once
Google sign-in is switched on in Supabase.

## First-time setup

The first sign-in asks for your goal (lose fat, maintain, build muscle), sex,
age, height, weight, an optional goal weight, how active your day is, how often
you train, and how fast you want to go. From that Macro works out:

- **Calories** — Mifflin–St Jeor for resting energy, times an activity level,
  plus or minus a deficit or surplus for your goal and pace.
- **Protein** — 1.6–2.0 g per kg depending on goal and training.
- **Fat** at 28% of calories, **carbs** filling what's left after protein.
- A weekly pace, a rough time to your goal weight, and five things to do.

Safety rails: no deficit or surplus for under-18s, no cut for anyone already at
the low end of the healthy range, a calorie floor, and a goal weight below the
healthy range is planned toward the edge of that range instead.

Answers are stored privately and only asked once; *Update answers* in the app
re-runs them.

## Accounts and data

Supabase handles sign-in and storage. Four tables — `entries`, `goals`,
`profiles`, `login_handoffs` — all with row-level security, so each person only
ever reads and writes their own rows. The log refreshes when you come back to
the tab and every 45 seconds while it's open.

The key in the pages is Supabase's *publishable* key, which is designed to live
in browser code; the row-level security policies are what protect the data.
The pages talk to Supabase's HTTP API directly with `fetch` — no client library.

## Built from

Plain HTML, CSS and JavaScript. No frameworks, no build step.

Calorie counts and targets are estimates, not medical advice.
