import { Instagram, Award } from 'lucide-react'
import Reveal from './Reveal.jsx'

const trainers = [
  {
    n: '01',
    name: 'Dhiraj Sir',
    role: 'Head Coach · Personal Training',
    spec: 'Strength · Transformation',
    img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=900&q=80',
  },
  {
    n: '02',
    name: 'Priya Sharma',
    role: 'HIIT & Conditioning',
    spec: 'CrossFit L2 · 8 yrs',
    img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=900&q=80',
  },
  {
    n: '03',
    name: 'Arjun Singh',
    role: 'Boxing & Combat',
    spec: 'Pro Boxer · 10 yrs',
    img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=80',
  },
  {
    n: '04',
    name: 'Anjali Verma',
    role: 'Yoga & Mobility',
    spec: 'RYT-500 · 7 yrs',
    img: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=900&q=80',
  },
]

export default function Trainers() {
  return (
    <section id="trainers" className="py-20 sm:py-28 lg:py-32 bg-ink-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container-x relative">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <span className="section-label">Meet The Team</span>
            <h2 className="heading-lg mt-4">
              Coaches Who <span className="text-brand-400">Care.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/60 text-lg">
            Certified, passionate, and obsessed with your progress. The kind of coaches who
            remember your name <em className="text-brand-400 not-italic">and</em> your goals.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {trainers.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className="group">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[3/4] bg-ink-800">
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110 sm:grayscale sm:group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />

                {/* Index */}
                <div className="absolute top-4 left-4 font-display text-xs tracking-[0.3em] text-white/70">
                  {t.n}
                </div>

                {/* Cert badge */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full glass flex items-center justify-center">
                  <Award className="w-4 h-4 text-brand-400" />
                </div>

                {/* Hover IG → Google Maps until owner shares real handles */}
                <a
                  href="https://www.google.com/maps/place/7+Fit+Gym/@23.3970637,85.3143749,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Connect with ${t.name}`}
                  className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-brand-400 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition duration-500 shadow-[0_0_30px_rgba(204,255,0,0.5)]"
                >
                  <Instagram className="w-4 h-4 text-ink-950" />
                </a>
              </div>
              <div className="mt-4 sm:mt-5">
                <div className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-brand-400">{t.spec}</div>
                <h3 className="font-display text-lg sm:text-2xl tracking-tight uppercase mt-1.5 leading-none">{t.name}</h3>
                <p className="text-white/50 text-xs sm:text-sm mt-1">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
