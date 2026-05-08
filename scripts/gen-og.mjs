/**
 * Generates the OpenGraph share image at public/og-image.jpg (1200x630).
 * Run via:  npm run og
 *
 * Pure SVG → JPEG via sharp. No external image fetch, no font dependencies
 * beyond system Impact / Arial Black fallbacks.
 */
import sharp from 'sharp'
import { mkdirSync } from 'node:fs'
import { dirname } from 'node:path'

const OUT = 'public/og-image.jpg'

// Background grid lines for the techy feel
const verticals = Array.from({ length: 21 }, (_, i) =>
  `<line x1="${i * 60}" y1="0" x2="${i * 60}" y2="630"/>`
).join('')
const horizontals = Array.from({ length: 11 }, (_, i) =>
  `<line x1="0" y1="${i * 60}" x2="1200" y2="${i * 60}"/>`
).join('')

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#030303"/>
      <stop offset="1" stop-color="#0a0a0a"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.85" cy="0.2" r="0.55">
      <stop offset="0" stop-color="#ccff00" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#ccff00" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="0.1" cy="0.85" r="0.4">
      <stop offset="0" stop-color="#ccff00" stop-opacity="0.08"/>
      <stop offset="1" stop-color="#ccff00" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Backdrop -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>

  <!-- Subtle grid -->
  <g opacity="0.05" stroke="#ffffff" stroke-width="1">
    ${verticals}
    ${horizontals}
  </g>

  <!-- Giant "7" watermark behind everything -->
  <text x="950" y="540" font-family="Impact, 'Arial Black', sans-serif"
        font-size="700" font-weight="900" fill="#ccff00" fill-opacity="0.05"
        text-anchor="middle">7</text>

  <!-- Left lime accent bar -->
  <rect x="0" y="0" width="8" height="630" fill="#ccff00"/>

  <!-- Top eyebrow: location pill -->
  <g transform="translate(72, 78)">
    <rect x="0" y="0" width="290" height="40" rx="20"
          fill="#ccff00" fill-opacity="0.12"
          stroke="#ccff00" stroke-opacity="0.45" stroke-width="1.5"/>
    <circle cx="22" cy="20" r="4" fill="#ccff00"/>
    <text x="40" y="26" font-family="Inter, Arial, sans-serif"
          font-size="13" font-weight="700" fill="#ccff00" letter-spacing="2.5">
      JAWAHAR NAGAR · RANCHI
    </text>
  </g>

  <!-- Main wordmark "7 FIT" -->
  <text x="68" y="290" font-family="Impact, 'Arial Black', sans-serif"
        font-size="220" font-weight="900" fill="#ccff00" letter-spacing="-8">
    7 FIT
  </text>

  <!-- Subhead -->
  <text x="72" y="370" font-family="Impact, 'Arial Black', sans-serif"
        font-size="52" font-weight="900" fill="#ffffff" letter-spacing="-1.5">
    RANCHI'S PREMIUM
  </text>
  <text x="72" y="425" font-family="Impact, 'Arial Black', sans-serif"
        font-size="52" font-weight="900" fill="#ffffff" fill-opacity="0.7" letter-spacing="-1.5">
    FITNESS DESTINATION.
  </text>

  <!-- Tagline -->
  <text x="72" y="475" font-family="Inter, Arial, sans-serif"
        font-size="20" fill="#ffffff" fill-opacity="0.6">
    World-class equipment · Certified coaches · Real results
  </text>

  <!-- CTA pill -->
  <g transform="translate(72, 510)">
    <rect x="0" y="0" width="305" height="48" rx="24" fill="#ccff00"/>
    <text x="152" y="31" font-family="Inter, Arial, sans-serif"
          font-size="14" font-weight="900" fill="#030303"
          text-anchor="middle" letter-spacing="2.5">
      CLAIM YOUR FREE TRIAL →
    </text>
  </g>

  <!-- Right column: stats -->
  <g transform="translate(1080, 130)">
    <text x="0" y="0" font-family="Impact, 'Arial Black', sans-serif"
          font-size="62" font-weight="900" fill="#ccff00" text-anchor="end">5K+</text>
    <text x="0" y="28" font-family="Inter, Arial, sans-serif"
          font-size="11" fill="#ffffff" fill-opacity="0.55"
          text-anchor="end" letter-spacing="2.5">LIVES TRANSFORMED</text>

    <text x="0" y="130" font-family="Impact, 'Arial Black', sans-serif"
          font-size="62" font-weight="900" fill="#ccff00" text-anchor="end">15+</text>
    <text x="0" y="158" font-family="Inter, Arial, sans-serif"
          font-size="11" fill="#ffffff" fill-opacity="0.55"
          text-anchor="end" letter-spacing="2.5">EXPERT COACHES</text>

    <text x="0" y="260" font-family="Impact, 'Arial Black', sans-serif"
          font-size="62" font-weight="900" fill="#ccff00" text-anchor="end">4.9★</text>
    <text x="0" y="288" font-family="Inter, Arial, sans-serif"
          font-size="11" fill="#ffffff" fill-opacity="0.55"
          text-anchor="end" letter-spacing="2.5">GOOGLE RATING</text>
  </g>

  <!-- Bottom right URL -->
  <text x="1130" y="595" font-family="Inter, Arial, sans-serif"
        font-size="12" fill="#ffffff" fill-opacity="0.35"
        text-anchor="end" letter-spacing="3">
    7FITGYM.VERCEL.APP
  </text>

  <!-- Bottom left: small badge -->
  <g transform="translate(72, 580)">
    <text x="0" y="0" font-family="Inter, Arial, sans-serif"
          font-size="11" fill="#ccff00" fill-opacity="0.7" letter-spacing="3">
      ◆ EST. RANCHI · MEMBERSHIPS OPEN
    </text>
  </g>
</svg>`

mkdirSync(dirname(OUT), { recursive: true })

await sharp(Buffer.from(svg))
  .jpeg({ quality: 88, mozjpeg: true, progressive: true })
  .toFile(OUT)

console.log(`Generated ${OUT} (1200x630)`)
