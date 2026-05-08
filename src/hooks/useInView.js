import { useEffect, useRef, useState } from 'react'

/**
 * Tiny IntersectionObserver hook.
 * Returns [ref, inView] — once inView, stays true (one-shot reveal).
 */
export default function useInView(options = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      options,
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  return [ref, inView]
}
