import { Quote, Star, BadgeCheck } from 'lucide-react'

// Real reviews sourced from the 7 Fit Gym Google Maps listing
const reviews = [
  {
    name: 'Shivam Rai',
    when: '6 months ago',
    badge: 'Local Guide',
    text: "I've been a member of this gym for over six months, and the experience has been excellent. The equipment is modern, well-maintained, and available in good quantity. The trainers are knowledgeable, approachable, and genuinely interested in helping members reach their fitness goals.",
    big: true,
  },
  {
    name: 'Aashi Upadhyay',
    when: 'a year ago',
    text: 'Love this gym! Great facilities, friendly staff, and an amazing community. I have seen real results and feel motivated every time I step in. 5/5 stars, highly recommended!',
  },
  {
    name: 'Nazhat Khan',
    when: '9 months ago',
    text: 'I would definitely recommend 7 Fit Gym because of its atmosphere and training. I took PT from Dhiraj sir and got effective results. Go ahead without a second thought.',
  },
  {
    name: 'Mohit Sinha',
    when: '6 months ago',
    badge: 'Local Guide',
    text: 'One of the best gyms in Ranchi.',
  },
]

// Lime gradient avatar from initials
function Avatar({ name, dark = false }) {
  const initials = name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
  return (
    <div
      className={`w-11 h-11 rounded-full flex items-center justify-center font-display text-lg shrink-0 ring-2 ${
        dark
          ? 'bg-ink-950 text-brand-400 ring-ink-950/30'
          : 'bg-gradient-to-br from-brand-400 to-brand-600 text-ink-950 ring-brand-400/40'
      }`}
    >
      {initials}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-ink-950 relative overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-400/5 rounded-full blur-3xl" />

      <div className="container-x relative">
        <div className="flex flex-wrap items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
          <div>
            <span className="section-label">Success Stories</span>
            <h2 className="heading-lg mt-4">
              Real People. <span className="text-brand-400">Real Results.</span>
            </h2>
          </div>
          <a
            href="https://www.google.com/maps/place/7+Fit+Gym/@23.3970637,85.3143749,17z/data=!4m6!3m5!1s0x39f4e19a6d46159f:0x8a462946340496a5!8m2!3d23.3970637!4d85.3143749!16s%2Fg%2F11wncx__4z"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 glass rounded-full px-5 py-3 hover:border-brand-400/40 transition group"
          >
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-brand-400 text-brand-400" />
              ))}
            </div>
            <span className="text-sm">
              <span className="font-bold text-white group-hover:text-brand-400 transition">
                Verified
              </span>
              <span className="text-white/50"> · Google Reviews</span>
            </span>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div
              key={r.name}
              className={`relative rounded-2xl p-5 sm:p-7 transition-all duration-500 hover:-translate-y-1 ${
                r.big
                  ? 'md:col-span-2 md:row-span-1 bg-gradient-to-br from-brand-400 to-brand-600 text-ink-950'
                  : 'glass hover:border-brand-400/30'
              }`}
            >
              <Quote
                className={`w-10 h-10 absolute top-6 right-6 ${
                  r.big ? 'text-ink-950/20' : 'text-brand-400/20'
                }`}
              />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      r.big
                        ? 'fill-ink-950 text-ink-950'
                        : 'fill-brand-400 text-brand-400'
                    }`}
                  />
                ))}
              </div>
              <p
                className={`leading-relaxed ${
                  r.big ? 'text-lg sm:text-xl text-ink-950 font-medium' : 'text-white/80 text-sm'
                }`}
              >
                "{r.text}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar name={r.name} dark={r.big} />
                <div className="min-w-0">
                  <div
                    className={`flex items-center gap-1.5 font-bold ${
                      r.big ? 'text-ink-950' : 'text-white'
                    }`}
                  >
                    <span className="truncate">{r.name}</span>
                    {r.badge && (
                      <BadgeCheck
                        className={`w-3.5 h-3.5 shrink-0 ${
                          r.big ? 'text-ink-950' : 'text-brand-400'
                        }`}
                      />
                    )}
                  </div>
                  <div
                    className={`text-[10px] uppercase tracking-[0.2em] flex items-center gap-1.5 ${
                      r.big ? 'text-ink-950/70' : 'text-white/40'
                    }`}
                  >
                    {r.badge && <span>{r.badge}</span>}
                    {r.badge && <span className="opacity-60">·</span>}
                    <span>{r.when}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
