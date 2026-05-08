import { useState } from 'react'
import { Check, Sparkles, ArrowRight } from 'lucide-react'
import Reveal from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'
import PaymentModal from './PaymentModal.jsx'

const plans = [
  {
    name: 'Monthly',
    price: 1499,
    period: 'month',
    desc: 'Try it. Test the vibe. Decide later.',
    features: [
      'Full gym floor access',
      'All group classes',
      'Locker & shower access',
      'Workout app + tracking',
    ],
  },
  {
    name: 'Quarterly',
    price: 3999,
    period: '3 months',
    save: 'Save ₹500',
    desc: 'The sweet spot — most members start here.',
    features: [
      'Everything in Monthly',
      '2 personal training sessions',
      'Diet consultation',
      'Body composition analysis',
      'Welcome supplement kit',
    ],
    popular: true,
  },
  {
    name: 'Annual',
    price: 11999,
    period: 'year',
    save: 'Save ₹6,000',
    desc: 'For the truly committed. Total transformation.',
    features: [
      'Everything in Quarterly',
      'Weekly 1-on-1 PT',
      'Personalized meal plans',
      'Recovery zone access',
      'Priority booking',
      'Free 7 Fit merch kit',
    ],
  },
]

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(null)

  return (
    <section id="pricing" className="py-20 sm:py-28 lg:py-32 bg-ink-900 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-400/5 rounded-full blur-3xl" />

      <div className="container-x relative">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-label justify-center">Membership Plans</span>
          <h2 className="heading-lg mt-4">
            Pick Your <span className="text-brand-400">Power.</span>
          </h2>
          <p className="mt-6 text-white/60 text-lg">
            Transparent pricing. No registration fee. No hidden charges. Just results.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 120} className="h-full">
            <TiltCard
              max={p.popular ? 4 : 7}
              scale={p.popular ? 1.07 : 1.02}
              className={`relative h-full flex flex-col rounded-3xl p-6 sm:p-8 group tilt-shine ${
                p.popular
                  ? 'bg-gradient-to-br from-brand-400 to-brand-600 text-ink-950 shadow-[0_30px_80px_-20px_rgba(204,255,0,0.5)]'
                  : 'glass'
              }`}
            >
              {p.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-ink-950 text-brand-400 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" /> Most Popular
                </div>
              )}

              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="font-display text-2xl sm:text-3xl tracking-tight uppercase">{p.name}</h3>
                  <p className={`mt-1 text-xs sm:text-sm ${p.popular ? 'text-ink-950/70' : 'text-white/50'}`}>
                    {p.desc}
                  </p>
                </div>
                {p.save && (
                  <span
                    className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full whitespace-nowrap shrink-0 ${
                      p.popular ? 'bg-ink-950 text-brand-400' : 'bg-brand-400/10 text-brand-400'
                    }`}
                  >
                    {p.save}
                  </span>
                )}
              </div>

              <div className="mt-6 sm:mt-8 flex items-baseline gap-2 flex-wrap">
                <span className="font-display text-5xl xs:text-6xl sm:text-7xl leading-none">
                  ₹{p.price.toLocaleString('en-IN')}
                </span>
                <span className={`text-xs sm:text-sm ${p.popular ? 'text-ink-950/60' : 'text-white/40'}`}>
                  /{p.period}
                </span>
              </div>

              <div className={`my-6 sm:my-8 h-px ${p.popular ? 'bg-ink-950/20' : 'bg-white/10'}`} />

              <ul className="space-y-3 sm:space-y-3.5 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <div
                      className={`w-5 h-5 rounded-full shrink-0 flex items-center justify-center mt-0.5 ${
                        p.popular ? 'bg-ink-950' : 'bg-brand-400/10'
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${p.popular ? 'text-brand-400' : 'text-brand-400'}`}
                      />
                    </div>
                    <span className={p.popular ? 'text-ink-950' : 'text-white/80'}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => setSelectedPlan(p)}
                className={`mt-8 sm:mt-10 w-full inline-flex justify-center items-center gap-2 rounded-full px-6 py-3.5 font-bold uppercase tracking-wider text-sm transition active:scale-95 group/cta ${
                  p.popular
                    ? 'bg-ink-950 text-brand-400 hover:bg-ink-900'
                    : 'bg-brand-400 text-ink-950 hover:bg-brand-300 shadow-[0_0_30px_rgba(204,255,0,0.3)]'
                }`}
              >
                Pay ₹{p.price.toLocaleString('en-IN')}
                <ArrowRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-1" />
              </button>
              <a
                href="#contact"
                className={`mt-3 inline-flex items-center justify-center gap-1.5 w-full text-[11px] uppercase tracking-[0.2em] font-medium transition ${
                  p.popular
                    ? 'text-ink-950/70 hover:text-ink-950'
                    : 'text-white/50 hover:text-brand-400'
                }`}
              >
                Or message us first
              </a>
            </TiltCard>
            </Reveal>
          ))}
        </div>

        <p className="text-center mt-10 text-white/40 text-sm">
          Couple plan & student discount available · GST extra · No registration fee
        </p>
      </div>

      <PaymentModal
        open={!!selectedPlan}
        plan={selectedPlan}
        onClose={() => setSelectedPlan(null)}
      />
    </section>
  )
}
