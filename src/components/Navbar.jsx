import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight, Phone, MessageCircle, MapPin } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#programs', label: 'Programs' },
  { href: '#trainers', label: 'Coaches' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#location', label: 'Visit' },
]

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2.5 group">
      <div className="relative w-10 h-10 rounded-full bg-brand-400 flex items-center justify-center shadow-[0_0_20px_rgba(204,255,0,0.4)] group-hover:rotate-180 transition-transform duration-700 animate-logo-reveal">
        <span className="font-display text-2xl text-ink-950 leading-none translate-y-[1px]">7</span>
      </div>
      <div className="leading-none">
        <div className="font-display text-xl tracking-wider text-white">7 FIT</div>
        <div className="text-[9px] tracking-[0.3em] text-brand-400 mt-0.5">GYM · RANCHI</div>
      </div>
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll + ESC to close while menu is open
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? 'bg-ink-950/85 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="container-x flex items-center justify-between h-16 sm:h-20">
          <Logo />

          <nav className="hidden lg:flex items-center gap-1 glass rounded-full px-2 py-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-white/70 hover:text-white px-4 py-2 rounded-full hover:bg-white/5 transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="#contact" className="btn-primary text-xs py-2.5 px-5">
              Book a Visit <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <button
            className="lg:hidden relative w-11 h-11 -mr-2 flex items-center justify-center text-white rounded-full hover:bg-white/5 transition"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <Menu
              className={`w-6 h-6 absolute transition-all duration-300 ${
                open ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
              }`}
            />
            <X
              className={`w-6 h-6 absolute transition-all duration-300 ${
                open ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
              }`}
            />
          </button>
        </div>
      </header>

      {/* Full-screen mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-ink-950/95 backdrop-blur-2xl"
          onClick={close}
        />
        {/* Decorative giant text */}
        <div className="absolute -bottom-10 -right-6 font-display text-[40vw] leading-none text-white/[0.03] pointer-events-none select-none uppercase">
          7
        </div>
        {/* Glow */}
        <div className="absolute top-1/4 -right-20 w-72 h-72 bg-brand-400/15 rounded-full blur-3xl" />

        <div
          className={`relative h-svh flex flex-col pt-20 sm:pt-24 px-5 sm:px-8 pb-safe transition-transform duration-500 ${
            open ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <nav className="flex-1 flex flex-col justify-center gap-1">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                style={{ transitionDelay: open ? `${100 + i * 60}ms` : '0ms' }}
                className={`group flex items-baseline gap-4 py-3 sm:py-4 border-b border-white/5 transition-all duration-500 ${
                  open ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
              >
                <span className="font-mono text-[10px] tracking-[0.2em] text-brand-400 w-8 shrink-0">
                  0{i + 1}
                </span>
                <span className="font-display text-4xl xs:text-5xl uppercase tracking-tight text-white group-hover:text-brand-400 transition">
                  {l.label}
                </span>
                <ArrowRight className="w-5 h-5 ml-auto text-white/30 group-hover:text-brand-400 group-hover:translate-x-1 transition" />
              </a>
            ))}
          </nav>

          {/* Bottom: contact CTAs */}
          <div
            className={`pb-6 transition-all duration-500 ${
              open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: open ? '420ms' : '0ms' }}
          >
            <a
              href="#contact"
              onClick={close}
              className="btn-primary w-full justify-center mb-4"
            >
              Book a Visit <ArrowRight className="w-4 h-4" />
            </a>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:+919576080807"
                className="flex items-center justify-center gap-2 py-3 rounded-full glass text-sm font-medium hover:border-brand-400/40 transition"
              >
                <Phone className="w-4 h-4 text-brand-400" /> Call
              </a>
              <a
                href="https://wa.me/919576080807"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-full glass text-sm font-medium hover:border-brand-400/40 transition"
              >
                <MessageCircle className="w-4 h-4 text-brand-400" /> WhatsApp
              </a>
            </div>
            <div className="mt-5 flex items-start gap-2 text-xs text-white/40 leading-relaxed">
              <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-brand-400" />
              <span>3rd Floor, Kanke Rd, Jawahar Nagar, Hatma, Ranchi 834008</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
