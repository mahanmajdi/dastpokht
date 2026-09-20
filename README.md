# Hakim International School — website concept

A design concept for the website of **Hakim International School**
(مجتمع آموزشی بین‌المللی حکیم), Tehran.

**Live:** https://mahanmajdi.github.io/zero_eleven/

> Unofficial. This is a design proposal, not an official school site, and is
> not affiliated with or endorsed by the school. All figures, names and portal
> activity shown are sample content for demonstration.

## The idea

*Hakim* (حکیم) is the Persian word for the polymath — the scholar who refuses a
single discipline. The whole site is built on that, down to the 3D: the hero is
a **muqarnas vault**, the stalactite honeycomb found in the ceilings of Persian
domes, generated procedurally and flown through as you scroll.

The palette comes from the school's own mark — the plum `#7A3A8C` was sampled
from their logo — paired with the gold of Persian manuscript illumination.

## What's in it

- **Scroll-driven WebGL hero** — 168 instanced niches across seven tiers on a
  girih star ring, lit and fogged, with scroll driving the camera up into it.
- **Bilingual EN ⇄ فارسی** — every string translated, full RTL layout flip,
  Persian numerals, Vazirmatn typeface, mirrored chart, Persian ordinals.
- **Live data** — a Tehran-time clock driving a real "in session / free period /
  finished" status, a timetable that marks Now / Next / Done against the actual
  clock, and a streaming activity feed.
- **⌘K command palette** — fuzzy search across sections, programs, subjects and
  the timetable, fully keyboard navigable.
- **Student portal preview** — the school's current LMS (sixteen identical
  tiles) shown beside a redesigned dashboard.

Respects `prefers-reduced-motion`. No horizontal scroll from 360px to 1440px in
either text direction. No login form and no data collection anywhere.

## Stack

Single self-contained `index.html`. No build step, no framework.
Three.js r128 and the typefaces (Fraunces, Archivo, Vazirmatn) load from CDNs.

## Editing

| What | Where |
|---|---|
| Copy, both languages | the `I18N` object — `en` and `fa` keys must match |
| Colours | CSS custom properties on `:root` |
| Sample figures | `data-count` attributes, and the `SUBJ` / `SCHED` arrays |
| 3D vault | `initVault()` — `R`, `TIERS`, cell width factor |
| Search index | `buildIndex()` |

The emblem is an original mark drawn in SVG, not the school's official logo.
To use the real one, replace the two inline `<svg class="mark">` blocks.

`<meta name="robots" content="noindex, nofollow">` in the `<head>` keeps this
concept out of search results so it is not mistaken for the school's official
site. Remove that line to have it indexed.

---

### Previously

This repository previously held *Zero Eleven*, a landing page for an original
series. It is preserved in git history at `1d8e4b9` and can be restored with:

```
git checkout 1d8e4b9 -- index.html
```
