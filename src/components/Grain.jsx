/**
 * Subtle film-grain overlay. Drop into any section to add tactile depth.
 * Uses an inline SVG turbulence pattern (no extra HTTP request).
 * Pointer-events: none, so it never blocks clicks.
 */
export default function Grain({ opacity = 0.07, blend = 'overlay', className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none bg-noise ${className}`}
      style={{ opacity, mixBlendMode: blend }}
    />
  )
}
