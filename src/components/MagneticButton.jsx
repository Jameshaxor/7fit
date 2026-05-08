import useMagnetic from '../hooks/useMagnetic.js'

/**
 * Premium magnetic button with parallax depth.
 *
 * Layer 1 (outer): magnetic pull + subtle hover-lift scale
 * Layer 2 (inner label): COUNTER-pull (negative strength) so the label
 *   resists the button's motion, creating a real parallax depth illusion
 *   instead of a unified wobble.
 */
export default function MagneticButton({
  as: Component = 'a',
  className = '',
  children,
  strength = 0.22,
  innerStrength = -0.08,
  hoverScale = 1.04,
  ...rest
}) {
  const outerRef = useMagnetic({ strength, radius: 70, hoverScale })
  const innerRef = useMagnetic({ strength: innerStrength, radius: 70 })

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
