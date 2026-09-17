# Zero Eleven

A single-page, cinematic "streaming platform" landing page for an original series called *Zero Eleven* — built as one self-contained `index.html` file and hosted with GitHub Pages.

**Live site:** https://mahanmajdi.github.io/zero_eleven/

## What it does

- A full-screen animated hero (GSAP-driven title reveal, parallax orbs, a scroll-triggered "reveal" system for each section).
- A "Series Info" section with an editable description and stats (admin-only editing).
- A Seasons & Episodes browser: admins can add seasons and episodes (video file upload or a pasted URL/YouTube link), everyone else can watch them once logged in.
- A lightweight auth system (register/login) and a separate admin login, both backed by [Supabase](https://supabase.com/) (Postgres + realtime + file storage) so content updates sync live to every open tab.
- A slide-out side menu with account settings and, for admins, a small user-management panel.

## Tech stack

- Plain HTML/CSS/JS — no build step, no framework. Everything lives in `index.html`.
- [GSAP](https://gsap.com/) + ScrollTrigger for animation.
- [Supabase](https://supabase.com/) for the database, realtime sync, and file storage (posters, thumbnails, videos).
- Fonts: Space Grotesk + Inter, from Google Fonts.

## Running it locally

There's no build step — just open `index.html` in a browser, or serve the folder with any static server, e.g.:

```bash
python3 -m http.server 8000
```

## Design & accessibility improvements

This page started as a strong visual concept but had a few real bugs and gaps that are easy to miss when you're styling by eye. Here's what changed and why — useful if you want to explain the reasoning behind any of it:

1. **Fixed an invisible cursor.** The CSS set `cursor:none` on `<body>` (hiding the real mouse pointer) so a custom red-dot-and-ring cursor could take over — but the two elements that custom cursor actually draws into (`#cur`, `#cur-ring`) were never added to the page. The JavaScript quietly gave up (`if(!cur||!ring)return;`), so **every visitor's mouse pointer simply disappeared** the moment it moved over the page. Adding the two missing `<div>`s fixes it.
2. **Fixed text you couldn't read.** Most secondary text (footer credits, stat labels, empty-state messages, modal descriptions, field labels...) was set in near-black grays like `#111`–`#2a2a2a` on a `#030303` background — several combinations were under a 1.3:1 contrast ratio (WCAG requires at least 4.5:1 for normal text). It looked like a deliberate "moody" choice, but there was no hover state or any way to ever read it. I introduced two CSS custom properties, `--text-dim` and `--text-faint` (translucent white, ~4.6:1 and ~3.1:1 against the background), and swapped the unreadable colors for them — same dark aesthetic, but everything is actually legible now.
3. **Keyboard accessibility.** Most interactive elements (menu items, episode cards, season tabs, the hamburger button) were `<div>`s or `<a>` tags with an `onclick` handler and no `href` — a mouse could click them, but the Tab key skipped right past them and Enter/Space did nothing. A small script now finds anything clickable that isn't already keyboard-friendly and gives it `tabindex="0"`, `role="button"`, and an Enter/Space handler. A visible focus outline (`:focus-visible`) was added too, since a couple of inputs had `outline:none` with nothing standing in for it.
4. **Respects "reduce motion."** This page leans heavily on animation (parallax, scroll reveals, pulsing background orbs), which can genuinely cause discomfort for people with motion sensitivity. It now checks the OS-level `prefers-reduced-motion` setting and skips the animated versions in favor of the settled end-state.
5. **SEO & link previews.** Added a meta description, Open Graph / Twitter Card tags (so a link posted in Discord/Slack/iMessage shows a real title, description, and image instead of nothing), a favicon, `theme-color`, and `preconnect` hints for the font and script CDNs (a small performance win — the browser opens those connections before it even needs them).
6. **Alt text & lazy loading** on episode thumbnails, and `aria-label`s on icon-only buttons (close ×, hamburger, delete ×) so a screen reader announces what they do instead of nothing.
7. **A known limitation, left as-is on purpose:** `ADMIN_PASS` is a plain string in the client-side JavaScript, which means anyone can read it via "View Page Source." That's fine for a private class demo, but I didn't rewrite the auth flow, since that's a behavior change, not a design one — the fix, if this ever needs to be real, is Supabase Auth with an `is_admin` flag checked by a server-side Row Level Security policy, so the check happens somewhere a visitor can't read.

### Ideas for further learning

- Split `index.html` into `index.html` + `style.css` + `app.js` once the file gets bigger — easier to navigate, and each file gets syntax highlighting suited to it.
- The reveal/parallax animations use GSAP tweens, which the CSS `prefers-reduced-motion` rule can't reach directly (it only mutes CSS `@keyframes`/`transition`s) — this was additionally handled with a `matchMedia` check in JavaScript so GSAP skips those tweens too. Worth understanding *why* both were needed.
- Two CSS variables (`--muted`, `--subtle`) are defined but never used anywhere in the stylesheet — harmless, but a good example of the kind of dead code worth cleaning up as a project grows.
