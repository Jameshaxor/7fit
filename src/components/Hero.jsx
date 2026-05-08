import { ArrowRight, MapPin, Star } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter.jsx'
import MagneticButton from './MagneticButton.jsx'
import Grain from './Grain.jsx'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-svh flex items-center overflow-hidden pt-28 pb-16 sm:pt-24"
    >
      {/* Background image (parallax) */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=80"
          alt="7 Fit Gym interior"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/60" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <Grain opacity={0.12} blend="overlay" />
      </div>

      {/* Glow blobs — opacity animation only; layers are GPU-promoted via index.css */}
      <div className="absolute -top-32 -right-20 w-[500px] h-[500px] bg-brand-400/20 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-0 left-1/4 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: '-2s' }}
      />

      <div className="container-x relative z-10">
        <div className="max-w-5xl">
          {/* Top badge row */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8 animate-fade-up">
            <span className="glass rounded-full px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-medium tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
              Now Open
            </span>
            <span className="glass rounded-full px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-medium tracking-wider uppercase flex items-center gap-2">
              <MapPin className="w-3 h-3 text-brand-400" /> Jawahar Nagar
            </span>
            <span className="glass rounded-full px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-medium tracking-wider uppercase flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-brand-400 text-brand-400" />
              ))}
              <span className="ml-1">5.0</span>
            </span>
          </div>

          {/* Main headline */}
          <h1 className="heading-xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="block">SWEAT.</span>
            <span className="block text-stroke">SCULPT.</span>
            <span className="block">
              <span className="text-brand-400">SEVEN.</span>
              <span className="inline-block w-3 h-3 rounded-full bg-brand-400 ml-3 mb-3 animate-pulse"></span>
            </span>
          </h1>

          <p
            className="mt-6 sm:mt-8 text-base sm:text-xl text-white/70 max-w-2xl leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.25s' }}
          >
            Ranchi's most <span className="text-white font-semibold">premium fitness destination</span>.
            Built for those who refuse average — world-class equipment, elite coaching, unmatched energy.
          </p>

          <div
            className="mt-8 sm:mt-10 flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <MagneticButton href="#contact" className="btn-primary group">
              Claim Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            <a href="#programs" className="btn-ghost">
              Explore Programs
            </a>
          </div>

          {/* Stats */}
          <div
            className="mt-12 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 max-w-3xl rounded-2xl overflow-hidden animate-fade-up"
            style={{ animationDelay: '0.55s' }}
          >
            {[
              { to: 5000, suffix: '+', l: 'Members' },
              { to: 15, suffix: '+', l: 'Coaches' },
              { to: 50, suffix: '+', l: 'Equipment' },
              { to: '24/7', l: 'Access' },
            ].map((s) => (
              <div
                key={s.l}
                className="bg-ink-950/80 backdrop-blur-md p-4 sm:p-5 hover:bg-ink-900 transition group"
              >
                <AnimatedCounter
                  to={s.to}
                  suffix={s.suffix || ''}
                  className="font-display text-3xl xs:text-4xl sm:text-5xl text-white group-hover:text-brand-400 transition block"
                />
                <div className="text-[9px] sm:text-xs uppercase tracking-[0.2em] text-white/50 mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/40 text-[10px] tracking-[0.3em] uppercase">
        <span>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-brand-400 to-transparent" />
      </div>
    </section>
  )
}
