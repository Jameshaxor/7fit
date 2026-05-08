import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Buttery momentum-based smooth scroll using Lenis.
 * - Skipped if user prefers reduced motion (falls back to native scroll).
 * - Hijacks anchor (#hash) clicks to scroll smoothly to targets, accounting for the fixed navbar.
 */
export default function SmoothScroll({ children }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      lerp: 0.1,            // lower = snappier, higher = floatier (0.08–0.12 sweet spot)
      smoothWheel: true,
      wheelMultiplier: 1.1,  // slight boost so wheel scroll covers more ground per tick
      touchMultiplier: 1.5,
      syncTouch: false,
    })

    let rafId = 0
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // Smooth anchor scrolling with offset for fixed navbar
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const href = a.getAttribute('href')
      if (!href || href === '#' || href.length < 2) return
      const target = document.querySelector(href)
      if (!target) return
      e.preventDefault()
      lenis.scrollTo(target, { offset: -64 })
    }
    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return children
}
