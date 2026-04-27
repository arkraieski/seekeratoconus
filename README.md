# Keratoconus Awareness Site

A minimal, scroll-driven awareness site built with Astro + GSAP. The core experience is a pinned fullscreen vision simulator: as the user scrolls, the image degrades from normal vision into what keratoconus looks like — irregular distortion, light ghosting, and monocular diplopia.

## Stack

- **Astro** — static site generator, zero JS by default
- **GSAP + ScrollTrigger** — scroll-pinned vision animation
- No component framework, no CMS. Everything is in one file.

## Dev

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # preview the build
```

## File structure

```
src/pages/index.astro   ← the entire site (HTML + CSS + JS in one file)
public/images/
  normal_hires.jpg      ← 1024×680 source photo (Flickr CC BY-NC-SA 3.0)
  normal.jpeg           ← original low-res from livingwithkeratoconus.com
  kc.jpeg               ← pre-made KC simulation (not currently used)
media/                  ← original downloaded images, kept for reference
```

## How the vision effect works

The vision section (`#vision`) is `300vh` tall so GSAP can pin it and scrub the animation over three viewport-heights of scroll.

Three image layers are stacked absolutely inside `#vision-sticky`:

| Layer | ID | Purpose |
|---|---|---|
| Base | `#img-clean` | Always visible, full opacity — the sharp reference |
| Warped | `#img-warped` | Same image with an SVG filter applied (`filter:url(#kc)`) — fades in |
| Ghost | `#img-ghost` | Same image, `mix-blend-mode:screen`, offset by GSAP — doubles bright lights |

The SVG filter (`#kc`) has two animated primitives:
- `#kc-d` — `feDisplacementMap`, scale animated `0 → 8` (subtle warp, like an irregular cornea)
- `#kc-b` — `feGaussianBlur`, stdDeviation animated `0 → 0.6` (mild loss of acuity)

The ghost layer uses `mix-blend-mode: screen`, which means dark pixels contribute nothing — only bright areas (headlights, neon signs) double. No extra brightness filter needed.

### Tuning the effect

All the key numbers are in the GSAP vision timeline in `index.astro`:

```js
.to(kcDisp, { attr: { scale: 8 }, ... })        // warp amount — raise for more swirl
.to(kcBlur, { attr: { stdDeviation: 0.6 }, ... }) // blur amount
.to('#img-warped', { opacity: 0.35, ... })         // how much the warp overlays the base
.to('#img-ghost',  { opacity: 0.6, x: 20, y: 11 }) // ghost strength and direction
```

Increase `scale` for more corneal distortion. Increase ghost `opacity` and `x`/`y` offset for stronger diplopia. The easing is `power1.in` so the degradation accelerates as the user scrolls deeper.

## Content

All copy lives directly in `index.astro` — no CMS, no data files. Sections in order:

1. **Hero** — headline, subheading, scroll hint
2. **Vision** — the pinned scroll animation
3. **What is KC** (`#what`) — two explanatory paragraphs
4. **Symptoms** (`#symptoms`) — six cards in a responsive grid
5. **CTA** (`#cta`) — links to NKCF
6. **Footer** — copyright + image attribution

## Image credit

The photo is ["Times Square Rain Dance"](https://www.flickr.com/photos/sprengben/5126320106/) by Spreng Ben, licensed [CC BY-NC-SA 3.0](https://creativecommons.org/licenses/by-nc-sa/3.0/). The KC simulation was originally adapted from [livingwithkeratoconus.com](https://www.livingwithkeratoconus.com). Attribution is in the page footer.
