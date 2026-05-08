import { useEffect, useRef } from 'react'

/**
 * Premium magnetic button with parallax depth.
 *
 * Single RAF loop + single bounding-rect read. The inner label counter-
 * translates purely as a function of the outer's current position (not from
 * its own DOM rect) — this avoids the feedback loop that occurs when a
 * child reads getBoundingClientRect() inside a transformed parent.
 *
 * Motion is deterministic and coherent: the button glides toward the cursor,
 * the label glides subtly in the opposite direction for depth, and both
 * spring back together when the cursor leaves the ring.
 */
export default function MagneticButton({
  as: Component = 'a',
  className = '',
  children,
  strength = 0.22,        // how far the button pulls toward the cursor (0.15–0.3)
  innerRatio = -0.4,      // inner label counter-motion as fraction of outer motion
  hoverScale = 1.04,      // subtle lift on approach
  radius = 70,            // px padding around the button that activates the pull
  ...rest
}) {
  const outerRef = useRef(null)
  const innerRef = useRef(null)

  useEffect(() => {
    const outer = outerRef.current
    const inner = innerRef.current
    if (!outer || !inner) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    let active = false
    const tgt = { x: 0, y: 0, s: 1 }
    const cur = { x: 0, y: 0, s: 1 }

    const apply = () => {
      outer.style.transform = `translate3d(${cur.x.toFixed(2)}px, ${cur.y.toFixed(2)}px, 0) scale(${cur.s.toFixed(4)})`
      // Inner is a pure function of outer's CURRENT translation — no DOM read, no feedback
      const ix = cur.x * innerRatio
      const iy = cur.y * innerRatio
      inner.style.transform = `translate3d(${ix.toFixed(2)}px, ${iy.toFixed(2)}px, 0)`
    }

    const animate = () => {
      cur.x += (tgt.x - cur.x) * 0.15
      cur.y += (tgt.y - cur.y) * 0.15
      cur.s += (tgt.s - cur.s) * 0.15
      apply()
      const settled =
        Math.abs(tgt.x - cur.x) < 0.05 &&
        Math.abs(tgt.y - cur.y) < 0.05 &&
        Math.abs(tgt.s - cur.s) < 0.001
      raf = settled ? 0 : requestAnimationFrame(animate)
    }

    const onMove = (e) => {
      const r = outer.getBoundingClientRect()
      // Compensate for the outer's current translation so the rest-center is stable.
      // getBoundingClientRect includes transforms; subtracting cur.x/y recovers the layout center.
      // (scale around center doesn't shift the center, so only translation needs correction)
      const restCx = r.left + r.width / 2 - cur.x
      const restCy = r.top + r.height / 2 - cur.y
      const dx = e.clientX - restCx
      const dy = e.clientY - restCy
      // Elliptical ring matched to the button's rest shape
      const restW = r.width / cur.s
      const restH = r.height / cur.s
      const rx = restW / 2 + radius
      const ry = restH / 2 + radius
      const inside = (dx * dx) / (rx * rx) + (dy * dy) / (ry * ry) < 1

      if (inside) {
        tgt.x = dx * strength
        tgt.y = dy * strength
        tgt.s = hoverScale
        active = true
      } else if (active) {
        tgt.x = 0
        tgt.y = 0
        tgt.s = 1
        active = false
      } else {
        return // outside ring and at rest — nothing to animate
      }
      if (!raf) raf = requestAnimationFrame(animate)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (raf) cancelAnimationFrame(raf)
      outer.style.transform = ''
      inner.style.transform = ''
    }
  }, [strength, innerRatio, hoverScale, radius])

  return (
    <Component
      ref={outerRef}
      className={`inline-block will-change-transform ${className}`}
      {...rest}
    >
      <span
        ref={innerRef}
        className="inline-flex items-center gap-2 will-change-transform"
      >
        {children}
      </span>
    </Component>
  )
}
