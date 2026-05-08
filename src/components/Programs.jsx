import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal.jsx'

const programs = [
  {
    n: '01',
    title: 'Strength Training',
    img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80',
    desc: 'Build raw power with progressive overload, compound lifts, and elite barbell programming.',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    n: '02',
    title: 'HIIT & Cardio',
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80',
    desc: 'Torch fat. Skyrocket endurance. Earn your sweat.',
  },
  {
    n: '03',
    title: 'CrossFit',
    img: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=900&q=80',
    desc: 'Functional fitness — strength, agility, conditioning.',
  },
  {
    n: '04',
    title: 'Yoga & Mobility',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80',
    desc: 'Flexibility, balance, recovery. Reset your body.',
  },
  {
    n: '05',
    title: 'Boxing & MMA',
    img: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=900&q=80',
    desc: 'Combat athletics — master technique, build cardio.',
  },
  {
    n: '06',
    title: 'Personal Training',
    img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
    desc: '1-on-1 coaching, custom plans, real accountability — from first rep to peak performance.',
    span: 'lg:col-span-2',
  },
]

export default function Programs() {
  return (
    <section id="programs" className="py-20 sm:py-28 lg:py-32 bg-ink-900 relative">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
          <div>
            <span className="section-label">Our Programs</span>
            <h2 className="heading-lg mt-4">
              Find Your <span className="text-brand-400">Fight.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/60 text-lg">
            From your first rep to your hundredth PR — we've built programs for every level, every goal,
            every body.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[280px] sm:auto-rows-[260px]">
          {programs.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 70}
              className={`group relative overflow-hidden rounded-2xl block ${p.span || ''}`}
            >
              <a href="#contact" className="absolute inset-0 z-10" aria-label={p.title} />
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-ink-950/10" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-brand-400/0 group-hover:to-brand-400/20 transition duration-700" />

              <div className="absolute top-4 sm:top-5 left-4 sm:left-5 right-4 sm:right-5 flex justify-between items-start">
                <span className="font-display text-xs tracking-[0.3em] text-white/60">{p.n}</span>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center group-hover:bg-brand-400 group-hover:rotate-45 transition duration-500">
                  <ArrowUpRight className="w-4 h-4 group-hover:text-ink-950" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 pointer-events-none">
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl tracking-tight uppercase leading-none">
                  {p.title}
                </h3>
                {/* Description: always visible on mobile (no hover); reveal on hover from sm+ */}
                <p className="mt-2 text-white/70 text-xs sm:text-sm max-w-md sm:opacity-0 sm:translate-y-2 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition duration-500">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
