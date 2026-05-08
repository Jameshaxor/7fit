import { useEffect, useRef } from 'react'

/**
 * 3D perspective tilt on hover. Attach the returned ref to a card.
 * Uses CSS variables (--rx, --ry) so consumers can style accents.
 * Disabled on touch + reduced-motion.
 */
export default function useTilt({ max = 8, scale = 1.02 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    el.style.transformStyle = 'preserve-3d'
    el.style.willChange = 'transform'

    const onEnter = () => {
      // Only transition on enter/leave so cursor tracking stays snappy mid-hover
      el.style.transition = 'transform 400ms cubic-bezier(.16,1,.3,1)'
    }
    const onMove = (e) => {
      // Kill the transition during active tracking so transform follows cursor 1:1
      el.style.transition = 'none'
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width
      const py = (e.clientY - r.top) / r.height
      const rx = (0.5 - py) * max * 2
      const ry = (px - 0.5) * max * 2
      el.style.setProperty('--rx', `${rx.toFixed(2)}deg`)
      el.style.setProperty('--ry', `${ry.toFixed(2)}deg`)
      el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`
    }
    const onLeave = () => {
      el.style.transition = 'transform 500ms cubic-bezier(.16,1,.3,1)'
      el.style.setProperty('--rx', '0deg')
      el.style.setProperty('--ry', '0deg')
      el.style.transform = ''
    }

    el.addEventListener('pointerenter', onEnter)
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointerenter', onEnter)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      el.style.transform = ''
      el.style.willChange = ''
    }
  }, [max, scale])

  return ref
}
