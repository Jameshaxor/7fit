import { useEffect, useRef } from 'react'

/**
 * Premium magnetic-pull effect — attaches to a ref'd element.
 *
 * What makes this feel premium:
 *   1. Elliptical proximity ring — natural for pill-shaped buttons
 *   2. Critically-damped spring physics (lerp 0.15) — no overshoot, no snap
 *   3. Subtle hover-lift scale that eases in/out with the pull
 *   4. Supports negative `strength` for counter-parallax inner layers
 *   5. Exits the RAF loop completely when idle (zero cost at rest)
 *
 * Skipped on touch devices (no hover) and when reduced-motion is set.
 */
export default function useMagnetic({
  strength = 0.25,
  radius = 60,
  hoverScale = 1,
} = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    const target = { x: 0, y: 0, s: 1 }
    const current = { x: 0, y: 0, s: 1 }
    let active = false

    const apply = () => {
      el.style.transform = `translate3d(${current.x.toFixed(2)}px, ${current.y.toFixed(2)}px, 0) scale(${current.s.toFixed(4)})`
    }

    const animate = () => {
      // Spring lerp — same factor for translation & scale keeps motion coherent
      current.x += (target.x - current.x) * 0.15
      current.y += (target.y - current.y) * 0.15
      current.s += (target.s - current.s) * 0.15
      apply()
      const settled =
        Math.abs(target.x - current.x) < 0.05 &&
        Math.abs(target.y - current.y) < 0.05 &&
        Math.abs(target.s - current.s) < 0.001
      raf = settled ? 0 : requestAnimationFrame(animate)
    }

    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      // Elliptical proximity: pill buttons get a ring shaped like themselves
      const rx = r.width / 2 + radius
      const ry = r.height / 2 + radius
      const inside = (dx * dx) / (rx * rx) + (dy * dy) / (ry * ry) < 1
      if (inside) {
        target.x = dx * strength
        target.y = dy * strength
        target.s = hoverScale
        active = true
      } else if (active) {
        target.x = 0
        target.y = 0
        target.s = 1
        active = false
      } else {
        return // outside ring and already at rest — don't schedule RAF
      }
      if (!raf) raf = requestAnimationFrame(animate)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (raf) cancelAnimationFrame(raf)
      el.style.transform = ''
    }
  }, [strength, radius, hoverScale])

  return ref
}
