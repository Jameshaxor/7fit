import { useEffect, useState } from 'react'
import useInView from '../hooks/useInView.js'

/**
 * Wraps children in a div that fades + translates up when scrolled into view.
 * After the reveal animation completes, the inline transform is removed so
 * Tailwind hover-transform classes (hover:-translate-y-1, etc.) work normally.
 *
 * Props:
 *  - delay: ms (default 0)
 *  - y: starting translateY in px (default 30)
 *  - as: element tag (default 'div')
 */
export default function Reveal({
  children,
  delay = 0,
  y = 30,
  as: Tag = 'div',
  className = '',
  style: styleProp,
  ...rest
}) {
  const [ref, inView] = useInView()
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!inView) return
    const t = setTimeout(() => setDone(true), delay + 950)
    return () => clearTimeout(t)
  }, [inView, delay])

  const style = done
    ? styleProp
    : {
        transform: inView ? 'translate3d(0,0,0)' : `translate3d(0,${y}px,0)`,
        opacity: inView ? 1 : 0,
        transition: `transform 900ms cubic-bezier(.16,1,.3,1) ${delay}ms, opacity 700ms ease ${delay}ms`,
        willChange: 'transform, opacity',
        ...styleProp,
      }

  return (
    <Tag ref={ref} className={className} style={style} {...rest}>
      {children}
    </Tag>
  )
}
