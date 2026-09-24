# Dastpokht · دستپخت

**Cook with what you have.** Tell Dastpokht what’s in your kitchen and it shows you the dishes you can cook right now — mostly Persian home cooking — plus the ones you’re one or two ingredients away from.

Live: https://mahanmajdi.github.io/macro/

## What it does

- **Your kitchen**: a running list of ingredients and appliances. Type it or say it, in any of the app’s languages. Recipes that need an appliance you don’t have are marked.
- **Cook now**: 51 Persian classics (plus a few everyday dishes), matched against your kitchen.
- **Full meal**: pick a main dish and it adds the rice, salad, yogurt and drink that go with it, scales every amount to your table, writes the shopping list and times each step back from serving.
- **Cook along**: a live timer that chimes and buzzes when the next step is due, across every dish at once.
- **Recipes from cooks**: anyone can post a recipe for everyone to browse; only the author can edit or delete it.
- **Kitchen assistant**: a chat that plans your week, suggests dishes from what you have and links to the recipes. It switches on once an AI key is added (see below).
- **Food log**: type what you ate (“a plate of ghormeh sabzi and a doogh”) and calories, protein, carbs and fat fill in. Optional daily targets.
- **8 languages**: English, فارسی, العربية, Türkçe, Español, Français, Deutsch, Русский. Persian and Arabic are right-to-left and use their own numerals.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Landing page, with a working “try it” demo |
| `app.html` | The app |
| `recipes.js` | Recipe library (English + Persian) |
| `kitchen.js` | Ingredient catalogue, matcher, meal timeline and shopping list |
| `foods.js` | Food list and parser for the food log |
| `i18n.js` | Interface text in English and Persian |
| `lang-xx.js` | Everything in one more language, loaded only when chosen |

Backend: Supabase (auth by email link, Postgres with row-level security, and the `cook` edge function for AI).

## Switching on the AI

The assistant and “Ask AI for ideas” use Claude through a Supabase edge function named `cook`. To turn them on, add a secret named `ANTHROPIC_API_KEY` in Supabase → Edge Functions → Secrets. Every signed-in cook gets 60 AI requests a day.

Nutrition numbers are estimates, not medical advice.
