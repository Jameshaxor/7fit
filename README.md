# 7 Fit Gym — Ranchi

Premium landing site for **7 Fit Gym**, Jawahar Nagar, Ranchi.

Built with React + Vite + Tailwind CSS. Designed for conversion: free-trial CTAs, transparent pricing, mobile-first, buttery animations.

## Tech stack

- **React 18** + **Vite 6** (fast HMR, ES module dev server)
- **Tailwind CSS** with a custom lime/ink design system
- **Lenis** for momentum-based smooth scroll
- **Lucide React** icons
- Custom hooks: `useMagnetic`, `useTilt`, `useInView`
- Custom components: magnetic buttons, 3D tilt cards, film-grain overlay, animated counters, intersection-observer reveals

## Sections

`Hero` · `Marquee` · `About` · `Programs` · `Trainers` · `Pricing` · `Testimonials` · `Location` · `Contact` · `Footer`

Plus a floating WhatsApp/Call action cluster, sticky scroll progress bar, and a full-screen mobile drawer.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the build
```

## Project structure

```
src/
├── components/      # All UI sections + shared primitives
├── hooks/           # useMagnetic, useTilt, useInView
├── App.jsx          # Composition root
├── main.jsx         # React entry
└── index.css        # Tailwind layers + Lenis CSS + custom keyframes
```

## Design tokens

- **Brand lime**: `#ccff00` (`brand-400`)
- **Ink black**: `#030303` (`ink-950`)
- **Display font**: Anton (uppercase, condensed)
- **Body font**: Inter

## Performance & accessibility

- `loading="lazy"` on heavy images, `preconnect` to Unsplash
- Respects `prefers-reduced-motion` (Lenis disabled, animations clamped)
- iOS-safe `min-h-svh`, ≥16px input font (no auto-zoom)
- `safe-area-inset-bottom` on the floating WhatsApp cluster
- JSON-LD structured data (`HealthClub`) for local SEO
- Open Graph + Twitter card meta + favicon set

## Deployment

Static site — deploy `dist/` to Netlify, Vercel, GitHub Pages, or any CDN.

## Credits

Designed by [Manu Kumar Nayak](https://www.instagram.com/manu_haxor).
