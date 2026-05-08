import { useEffect, useState } from 'react'
import useInView from '../hooks/useInView.js'

/**
 * Counts up from 0 to `to` once it scrolls into view.
 * Accepts optional `prefix`, `suffix`, and `duration` (ms).
 * If `to` is non-numeric (e.g. '24/7'), it's rendered as-is.
 */
export default function AnimatedCounter({ to, duration = 1400, prefix = '', suffix = '', className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const [value, setValue] = useState(0)

  // If `to` isn't a finite number, just render it directly.
  const numeric = Number(to)
  const isNumber = Number.isFinite(numeric)

  useEffect(() => {
    if (!inView || !isNumber) return
    let raf
    const start = performance.now()
    const step = (now) => {
      const t = Math.min(1, (now - start) / duration)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(numeric * eased))
      if (t < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, numeric, duration, isNumber])

  return (
    <span ref={ref} className={className}>
      {isNumber ? `${prefix}${value.toLocaleString('en-IN')}${suffix}` : to}
    </span>
  )
}
