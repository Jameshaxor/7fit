import { Award, HeartPulse, Users, Zap, Dumbbell, Wind } from 'lucide-react'
import Reveal from './Reveal.jsx'

const features = [
  { icon: Dumbbell, title: 'World-Class Equipment', text: 'Top-tier strength machines, free weights & cardio gear.' },
  { icon: Award, title: 'Certified Coaches', text: 'Internationally certified trainers obsessed with your goals.' },
  { icon: HeartPulse, title: 'Personalized Plans', text: 'Custom workout & diet plans tailored to your body.' },
  { icon: Wind, title: 'AC + Hygiene', text: 'Fully air-conditioned, sanitized space designed for comfort.' },
  { icon: Users, title: 'Strong Community', text: 'A close-knit community of members who push each other to be stronger every day.' },
  { icon: Zap, title: 'Energy That Hits', text: 'Motivating playlists, vibrant lighting — every session feels electric.' },
]

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 bg-ink-950 relative overflow-hidden">
      {/* Decorative giant text */}
      <div className="absolute -top-6 -left-4 sm:-top-10 sm:-left-10 font-display text-[7rem] xs:text-[9rem] sm:text-[14rem] lg:text-[18rem] leading-none text-white/[0.02] pointer-events-none select-none uppercase">
        7 Fit
      </div>

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left: image + floating stats */}
          <Reveal as="div" className="lg:col-span-5 relative mb-16 lg:mb-0">
            <div className="relative aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80"
                alt="Trainer at 7 Fit Gym"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-8 right-2 sm:-right-6 lg:-right-10 bg-brand-400 text-ink-950 p-4 sm:p-6 rounded-2xl shadow-[0_20px_60px_-15px_rgba(204,255,0,0.5)] max-w-[200px] sm:max-w-[240px] animate-float">
              <div className="font-display text-4xl sm:text-6xl leading-none">300+</div>
              <div className="uppercase tracking-[0.2em] text-[10px] sm:text-xs mt-2 font-bold">Active Members</div>
            </div>

            {/* Floating glass badge top-left */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 glass rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
              Live Now
            </div>
          </Reveal>

          {/* Right: copy + bento features */}
          <Reveal as="div" delay={150} className="lg:col-span-7 lg:pl-6">
            <span className="section-label">About 7 Fit Gym</span>
            <h2 className="heading-lg mt-4">
              <span className="block">More Than A Gym.</span>
              <span className="block text-stroke-brand">A Lifestyle.</span>
            </h2>
            <p className="mt-5 sm:mt-6 text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
              Tucked beside Reliance Mart in <span className="text-white">Jawahar Nagar, Ranchi</span>,
              7 Fit Gym is engineered for results. We blend serious training with serious style —
              premium equipment, motivating energy, and coaches who actually care about your transformation.
            </p>

            <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 gap-3 sm:gap-4">
              {features.map((f, i) => (
                <Reveal
                  key={f.title}
                  delay={i * 80}
                  className="card group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-400/0 to-brand-400/0 group-hover:from-brand-400/5 group-hover:to-transparent transition" />
                  <f.icon className="w-7 h-7 text-brand-400 mb-3 group-hover:scale-110 group-hover:rotate-6 transition" />
                  <h3 className="font-bold text-base">{f.title}</h3>
                  <p className="text-white/60 text-sm mt-1.5 leading-relaxed">{f.text}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
