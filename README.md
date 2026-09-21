# Macro — a food log that reads sentences

**Live:** https://mahanmajdi.github.io/macro/

A calorie and macro tracker with a scroll-driven 3D product site in front of it.
Sign in with Google (or an emailed link), log what you eat, and your log follows
you to every device you sign in on.

## Pages

| Page | What it is |
|---|---|
| `index.html` | The product site: a hand-built 3D calorie ring, light and dark scroll chapters, and the sign-in buttons. |
| `app.html` | The food log. Sign in, then log foods for any day, watch the ring and macro bars fill, re-add recent foods with one tap, and set your goals. |

## Accounts and sync

- **Sign-in** is handled by [Supabase Auth](https://supabase.com/docs/guides/auth):
  *Continue with Google*, or an emailed magic link. The same email on another
  device opens the same account.
- **Storage** is a Supabase Postgres database with two tables, `entries` and
  `goals`. Row-level security is on for both: every read and write is checked
  against the signed-in user, so each person only ever sees their own rows.
- **Sync** — the log refreshes whenever you return to the tab and every 45
  seconds while it's open, so a meal logged on your phone shows up on your
  laptop.
- The page talks to Supabase's HTTP API directly with `fetch` — no client
  library, nothing to install.

The key in `app.html` is Supabase's *publishable* key. It is designed to live
in browser code; the row-level security policies are what protect the data.

## Built from

Plain HTML, CSS and JavaScript. No frameworks, no build step. Fonts from Google
Fonts; everything else is in the files.

Carbs and fat targets are derived from the calorie goal at 45% and 28%.
Protein is the one number you set yourself.

Calorie counts are estimates, not medical advice.
