# Dastpokht · دستپخت

**Cook with what you have.** Tell Dastpokht what’s in your kitchen and it shows you the dishes you can cook right now — mostly Persian home cooking — plus the ones you’re one or two ingredients away from.

Live: https://mahanmajdi.github.io/macro/

## What it does

- **Your kitchen**: a running list of ingredients and appliances. Type it or say it, in any of the app’s languages. Recipes that need an appliance you don’t have are marked.
- **Cook now**: 79 dishes — Persian classics plus quick everyday ones — matched against your kitchen. Even “I have an egg” gets real ideas.
- **Only what I have / I can buy a few things**: one switch. The first shows only dishes you can make right now; the second shows what one or two purchases would open up, and which single purchase unlocks the most.
- **Photo of your table**: snap your counter or fridge and it picks out the ingredients (you tick or untick them), adds them to your kitchen and shows ideas.
- **Photo of your meal**: snap your plate and it suggests what it is, with calories, protein, carbs and fat for the portion you pick, and adds it to your food log.
- **Full meal**: pick a main dish and it adds the rice, salad, yogurt and drink that go with it, scales every amount to your table, writes the shopping list and times each step back from serving.
- **Cook along**: a live timer that chimes and buzzes when the next step is due, across every dish at once.
- **Recipes from cooks**: anyone can post a recipe for everyone to browse; only the author can edit or delete it.
- **Kitchen assistant**: a chat that plans your week, suggests dishes from what you have and links to the recipes. It works out of the box (see “The AI” below).
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
| `snap.js` | The on-device photo reader, loaded the first time you use a photo button |

Backend: Supabase (auth by email link, Postgres with row-level security, and the `cook` edge function for AI).

## The AI

The assistant (Ask tab) works with no key: they use Pollinations’ free text service directly from the browser. It’s free and needs no account, but it can be slow (often 10–30 seconds), and it isn’t guaranteed to stay free or available.

Optional upgrade: add a secret named `ANTHROPIC_API_KEY` in Supabase → Edge Functions → Secrets, and answers come from Claude through the `cook` edge function instead (60 requests per cook per day). If that ever fails, the app falls back to the free service.

## Photos

The photo buttons run [MobileCLIP-S0](https://huggingface.co/Xenova/mobileclip_s0) (Apple) inside the browser with Transformers.js, so photos are never uploaded. The first use downloads about 65 MB (then it’s cached); after that a photo takes a few seconds. It recognises the foods, dishes and ingredients the app knows, so it always asks you to confirm.

Nutrition numbers are estimates, not medical advice.
