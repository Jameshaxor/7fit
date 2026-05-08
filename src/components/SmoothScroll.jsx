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
      lerp: 0.085,           // slightly snappier — feels more locked-in than floaty
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      syncTouch: false,      // let mobile use native scroll (already buttery on touch)
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
