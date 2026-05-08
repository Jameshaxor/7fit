import { MapPin, Clock, Phone, Navigation } from 'lucide-react'

export default function Location() {
  return (
    <section id="location" className="py-20 sm:py-28 lg:py-32 bg-ink-900 relative">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
          <div>
            <span className="section-label">Find Us</span>
            <h2 className="heading-lg mt-4">
              Right In The <span className="text-brand-400">Heart</span> Of Ranchi.
            </h2>
          </div>
          <a
            href="https://www.google.com/maps/place/7+Fit+Gym/@23.3970637,85.3143749,17z/data=!4m6!3m5!1s0x39f4e19a6d46159f:0x8a462946340496a5!8m2!3d23.3970637!4d85.3143749!16s%2Fg%2F11wncx__4z"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <Navigation className="w-4 h-4" /> Open in Google Maps
          </a>
        </div>

        <div className="grid lg:grid-cols-5 gap-4 sm:gap-6">
          {/* Map embed */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-white/10 h-[320px] sm:h-[400px] lg:h-[500px] relative bg-ink-800">
            <iframe
              title="7 Fit Gym Location"
              src="https://maps.google.com/maps?q=7+Fit+Gym+Jawahar+Nagar+Hatma+Ranchi&ll=23.3970637,85.3143749&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(0.92) hue-rotate(180deg) saturate(0.6)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info cards */}
          <div className="lg:col-span-2 grid gap-3 sm:gap-4">
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-400/10 border border-brand-400/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                    Address
                  </div>
                  <p className="mt-2 font-medium leading-relaxed">
                    3rd Floor, Kanke Road,<br />
                    Beside Reliance Mart,<br />
                    Bank of India Building,<br />
                    Jawahar Nagar, Hatma,<br />
                    Ranchi, Jharkhand 834008
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-400/10 border border-brand-400/30 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brand-400" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                    Hours
                  </div>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li className="flex justify-between">
                      <span className="text-white/70">Mon – Sat</span>
                      <span className="font-medium">5:30 AM – 10:30 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-white/70">Sunday</span>
                      <span className="font-medium">7:00 AM – 1:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <a
              href="tel:+919576080807"
              className="card flex items-center gap-4 hover:bg-brand-400 hover:text-ink-950 group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-400/10 border border-brand-400/30 flex items-center justify-center shrink-0 group-hover:bg-ink-950/20 group-hover:border-ink-950/30">
                <Phone className="w-5 h-5 text-brand-400 group-hover:text-ink-950" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 group-hover:text-ink-950/70">
                  Call Now
                </div>
                <div className="mt-1 font-display text-xl sm:text-2xl tracking-wide">
                  +91 95760 80807
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
