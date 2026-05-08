import { Zap } from 'lucide-react'

const items = [
  'Strength Training',
  'CrossFit',
  'HIIT',
  'Boxing',
  'Yoga & Mobility',
  'Personal Training',
  'Nutrition Coaching',
  'Cardio Zone',
  'Functional Fitness',
]

export default function Marquee() {
  return (
    <section className="relative bg-brand-400 text-ink-950 py-4 sm:py-6 overflow-hidden border-y border-brand-500/30">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-4 sm:gap-6 mx-4 sm:mx-6 shrink-0">
            <span className="font-display text-2xl sm:text-4xl lg:text-5xl tracking-wide uppercase">
              {item}
            </span>
            <Zap className="w-5 h-5 sm:w-7 sm:h-7 fill-ink-950" />
          </div>
        ))}
      </div>
    </section>
  )
}
