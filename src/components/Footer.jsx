import { Instagram, Facebook, Youtube, MapPin, ArrowUpRight, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-white/5 pt-16 sm:pt-20 pb-8 relative overflow-hidden">
      <div className="container-x relative">
        <div className="grid md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-5">
            <a href="#" className="inline-flex items-center gap-2.5 group">
              <div className="w-11 h-11 rounded-full bg-brand-400 flex items-center justify-center shadow-[0_0_20px_rgba(204,255,0,0.4)] group-hover:rotate-180 transition-transform duration-700">
                <span className="font-display text-2xl text-ink-950 leading-none translate-y-[1px]">7</span>
              </div>
              <div className="leading-none">
                <div className="font-display text-2xl tracking-wider">7 FIT GYM</div>
                <div className="text-[9px] tracking-[0.3em] text-brand-400 mt-0.5">RANCHI · JHARKHAND</div>
              </div>
            </a>
            <p className="mt-6 text-white/60 max-w-sm leading-relaxed">
              Ranchi's premium fitness destination. Built for those who refuse average — premium
              equipment, elite coaching, unmatched energy.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {[
                { Icon: Instagram, href: 'https://www.google.com/maps/place/7+Fit+Gym/@23.3970637,85.3143749,17z', label: 'Instagram' },
                { Icon: Facebook, href: 'https://www.google.com/maps/place/7+Fit+Gym/@23.3970637,85.3143749,17z', label: 'Facebook' },
                { Icon: Youtube, href: 'https://www.google.com/maps/place/7+Fit+Gym/@23.3970637,85.3143749,17z', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`7 Fit Gym on ${label}`}
                  className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-400 hover:border-brand-400 hover:text-ink-950 transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-bold uppercase tracking-[0.2em] text-xs text-brand-400">Explore</h4>
            <ul className="mt-5 space-y-3 text-white/70">
              {[
                { label: 'About', href: '#about' },
                { label: 'Programs', href: '#programs' },
                { label: 'Coaches', href: '#trainers' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Visit', href: '#location' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-flex items-center gap-1 hover:text-brand-400 transition group"
                  >
                    {l.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-bold uppercase tracking-[0.2em] text-xs text-brand-400">Visit Us</h4>
            <p className="mt-5 text-white/70 text-sm leading-relaxed flex gap-2">
              <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
              <span>
                3rd Floor, Kanke Rd, beside Reliance Mart,<br />
                Bank of India Building, Jawahar Nagar,<br />
                Hatma, Ranchi, Jharkhand 834008
              </span>
            </p>
            <div className="mt-6">
              <h4 className="font-bold uppercase tracking-[0.2em] text-xs text-brand-400">Hours</h4>
              <ul className="mt-4 space-y-1.5 text-white/70 text-sm">
                <li className="flex justify-between">
                  <span>Mon – Sat</span>
                  <span className="text-white">5:30am – 10:30pm</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-white">7:00am – 1:00pm</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Massive wordmark */}
        <div className="mt-12 sm:mt-20 mb-6 sm:mb-10 select-none">
          <div className="font-display text-[26vw] sm:text-[22vw] lg:text-[18rem] leading-[0.85] tracking-tight text-center bg-gradient-to-b from-brand-400/30 via-white/5 to-transparent bg-clip-text text-transparent">
            7 FIT
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[10px] sm:text-xs text-white/40 uppercase tracking-wider">
          <div className="order-2 md:order-1">
            © {new Date().getFullYear()} 7 Fit Gym · Made with sweat in Ranchi
          </div>

          <a
            href="https://www.instagram.com/manu_haxor"
            target="_blank"
            rel="noopener noreferrer"
            className="order-1 md:order-2 group inline-flex items-center gap-2 self-start md:self-center hover:text-brand-400 transition"
          >
            <span className="inline-flex items-center gap-1.5">
              Designed by
              <span className="text-white/70 group-hover:text-brand-400 normal-case tracking-normal font-medium transition">
                Manu Kumar Nayak
              </span>
            </span>
            <Instagram className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition" />
            <ArrowUpRight className="w-3 h-3 -ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
          </a>

          <div className="order-3 flex gap-6">
            <a
              href="https://www.google.com/maps/place/7+Fit+Gym/@23.3970637,85.3143749,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-400 transition"
            >
              Get Directions
            </a>
            <a
              href="https://wa.me/919576080807"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-400 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
