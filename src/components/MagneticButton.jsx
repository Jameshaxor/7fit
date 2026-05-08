import useMagnetic from '../hooks/useMagnetic.js'

/**
 * Wrap any anchor/button with a magnetic pull on the outer element
 * and a subtler counter-pull on the inner content for depth.
 */
export default function MagneticButton({
  as: Component = 'a',
  className = '',
  children,
  strength = 0.35,
  innerStrength = 0.18,
  ...rest
}) {
  const outerRef = useMagnetic({ strength, radius: 90 })
  const innerRef = useMagnetic({ strength: innerStrength, radius: 90 })

  return (
    <Component ref={outerRef} className={`inline-block will-change-transform ${className}`} {...rest}>
      <span ref={innerRef} className="inline-flex items-center gap-2 will-change-transform">
        {children}
      </span>
    </Component>
  )
}
