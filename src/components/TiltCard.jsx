import useTilt from '../hooks/useTilt.js'

/**
 * Card wrapper that adds 3D perspective tilt on cursor (desktop only).
 * Falls back to a regular div on touch / reduced-motion users.
 */
export default function TiltCard({ children, className = '', max = 7, scale = 1.02, ...rest }) {
  const ref = useTilt({ max, scale })
  return (
    <div ref={ref} className={className} {...rest}>
      {children}
    </div>
  )
}
