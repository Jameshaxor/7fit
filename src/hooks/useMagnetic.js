import { useEffect, useRef } from 'react'

/**
 * Subtle magnetic-pull effect — attaches to a ref'd element.
 * On pointermove inside the element + a `radius` ring, it nudges
 * the element toward the cursor with smooth spring-like easing.
 *
 * Skipped on touch devices (no hover) and when reduced-motion is set.
 */
export default function useMagnetic({ strength = 0.35, radius = 80 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Only on fine pointers (mouse/trackpad), not touch
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    let target = { x: 0, y: 0 }
    let current = { x: 0, y: 0 }

    const animate = () => {
      // Lerp toward target (spring-like easing)
      current.x += (target.x - current.x) * 0.18
      current.y += (target.y - current.y) * 0.18
      el.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`
      if (Math.abs(target.x - current.x) > 0.1 || Math.abs(target.y - current.y) > 0.1) {
        raf = requestAnimationFrame(animate)
      } else {
        raf = 0
      }
    }

    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.hypot(dx, dy)
      const reach = Math.max(r.width, r.height) / 2 + radius
      if (dist < reach) {
        target.x = dx * strength
        target.y = dy * strength
      } else {
        target.x = 0
        target.y = 0
      }
      if (!raf) raf = requestAnimationFrame(animate)
    }

    const onLeave = () => {
      target.x = 0
      target.y = 0
      if (!raf) raf = requestAnimationFrame(animate)
    }

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerleave', onLeave)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
      if (raf) cancelAnimationFrame(raf)
      el.style.transform = ''
    }
  }, [strength, radius])

  return ref
}
