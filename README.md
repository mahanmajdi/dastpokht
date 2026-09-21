# Macro — say what you ate, start a workout, get told what's next

**Live:** https://mahanmajdi.github.io/macro/

A calorie, macro and workout tracker with a scroll-driven 3D site in front of
it. Type a meal the way you'd say it and Macro fills in the numbers. Start a
workout and it runs a timer, counts your sets and times your rest. When you
finish, it tells you what to eat, how much to drink and where your week stands.
Everything is saved to your account and follows you to every device.

## Pages

| Page | What it is |
|---|---|
| `index.html` | The product site: a hand-built 3D calorie ring, light and dark scroll chapters, a live training demo, and the sign-in buttons. |
| `app.html` | Sign-in, first-time setup, Today, the food log and live workouts. |
| `foods.js` | The food list and the sentence parser the app uses. |

## Logging food by name

Type `2 eggs, toast and a flat white` or `a bowl of ghormeh sabzi with chelo`
and each food appears with its calories, protein, carbs and fat before you add
it. Amounts are optional — counts (`3 dates`), sizes (`large fries`), grams and
millilitres (`200 g chicken`, `500 ml doogh`), and household units (`a cup of
rice`, `2 tbsp peanut butter`, `2 skewers koobideh`) all work.

- `foods.js` holds 240+ everyday foods, drinks and Persian dishes with a
  typical portion each. Values are typical figures (USDA FoodData Central and
  common recipes) — good estimates, not lab numbers.
- `−` and `+` adjust an amount before you add it; `×` drops a food.
- A misspelling gets "did you mean" suggestions. A food that isn't in the list
  is added once with numbers, and after that typing its name is enough.

## Today

A dark, watch-style panel with three animated dials — **Calories** (eaten
against today's target), **Protein**, and **Workouts** (the last 7 days against
the weekly goal from your plan) — a coach line that changes with the day, and
the Start workout button. Below it: the coach, macros, food, workouts, the last
7 days and a four-week training history with your streak.

There's deliberately no strain, sleep or recovery score: those need a wearable
to be honest, and Macro doesn't pretend to have one.

## Workouts

- **Start workout:** pick one of 12 activities, how hard you plan to go, and an
  optional time goal. The row is saved straight away, so the timer shows up on
  every device you're signed in on.
- **Live screen:** a big timer, a 3D ring that fills toward your time goal,
  estimated calories, intensity you can change as you go, and — for weights,
  HIIT, combat and climbing — a **+ Set** button that starts a rest timer (60 s
  to 3 min, depending on intensity) and buzzes when it's time to go again.
- **End:** rate the session 1–10 and fix the minutes if you forgot to stop.
- **Summary:** refuel targets with one-tap meals, water, whether today's
  calories went up, the week so far, and one thing to do next time.
- **Log a past workout** for anything you didn't time.

Calories burned are estimated from the activity's MET value (adjusted for
effort), your body weight and the minutes. Your plan already includes a typical
training day's burn; only the part above that is added to the day's target,
and the extra goes to carbs.

## Signing in

1. Type your email and Macro sends you a sign-in link.
2. Open the link anywhere — the same computer or your phone. That tab just says
   **Email verification complete**.
3. The page where you typed your email signs itself in.

The link tab stores a one-time token under a 256-bit random id that only the
waiting page knows; the waiting page claims it through a database function —
once, within 15 minutes. *Continue with Google* appears automatically once
Google sign-in is switched on in Supabase.

## First-time setup

Goal, sex, age, height, weight, an optional goal weight, how active your day
is, how often you train and how fast you want to go. From that:

- **Calories** — Mifflin–St Jeor resting energy × activity level, ± a deficit
  or surplus for your goal and pace.
- **Protein** — 1.6–2.0 g per kg depending on goal and training.
- **Fat** at 28% of calories, **carbs** filling what's left.
- **Weekly workouts** — the goal behind the Workouts dial.

Safety rails: no deficit or surplus for under-18s, no cut for anyone already at
the low end of the healthy range, a calorie floor, and goal weights below the
healthy range are planned toward its edge instead.

## Accounts and data

Supabase handles sign-in and storage: `entries`, `goals`, `profiles`,
`workouts` and `login_handoffs`, all with row-level security, so each person
only ever reads and writes their own rows. The pages use Supabase's
*publishable* key, which is made for browser code, and talk to its HTTP API
with `fetch` — no client library.

## Built from

Plain HTML, CSS and JavaScript. No frameworks, no build step.

Calories, burn and targets are estimates, not medical advice.
