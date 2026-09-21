# Macro — a food log that reads sentences

**Live:** https://mahanmajdi.github.io/macro/

Describe a meal the way you'd say it out loud — *"2 eggs, sourdough with butter,
and a flat white"* — and Macro splits it into individual foods, estimates the
calories and macros for each, and counts the day against your goal. No barcodes,
no database search, no picking a portion size from a dropdown.

## The page

A single scroll-driven product site, ending in the working app.

- **The 3D is drawn, not filmed.** A hand-written perspective renderer — no
  Three.js, no CDN, nothing to fail to load. The calorie ring is a torus with
  real face normals, two lights, specular highlights, depth-sorted facets and a
  bloom pass. Scroll drives its position, camera distance and fill; the cursor
  turns it.
- **One object through the whole film.** The ring sits beside the headline,
  recedes while the sentence scene plays, returns centred and closes as the
  counter climbs, then splits into the protein / carb / fat colours by energy
  share.
- **Chapters that switch light and dark** as you scroll, with the nav and the
  chapter rail recolouring to match.
- **Scene work:** a sentence lighting up word by word and breaking into three log
  entries, a pinned horizontal card gallery, extruded 3D week bars against a
  dashed goal line, a tilting phone playing out a coach conversation, and a
  Nutrition Facts panel for one logged day.
- **Calm when asked.** Everything, including the scroll scenes, switches off
  under `prefers-reduced-motion`. The page reads fine with JavaScript disabled.

## The app

Plain-language logging, manual entry, day navigation, the calorie ring and macro
bars, a seven-day chart, editable goals, and a coach with two page tools —
`log_food` writes entries, `get_day` reads an earlier date.

Carbs and fat aren't goals you set: they're derived from the calorie goal at 45%
and 28%. Protein is the one number you choose.

The log lives in `localStorage`, in your browser. It is never sent anywhere.

## About this public build

Estimating a meal from a sentence, and the coach, both need a Claude runtime
(`window.claude`), which exists only when the page is opened inside Claude. On
this GitHub Pages build they are switched off, and the page says so where it
matters. Everything else is live — add entries by hand, set goals, move between
days, watch the week fill in.

Wiring the AI up for a genuinely public site means putting the API key behind a
server (a Supabase Edge Function or equivalent), never in this file.

## Built from

One `index.html`. No frameworks, no build step, no dependencies, nothing to
install. Fonts come from Google Fonts; everything else is in the file.

Calorie counts are estimates, not medical advice.
