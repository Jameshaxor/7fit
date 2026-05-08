import { useState } from 'react'
import { Send, MessageCircle, Phone, Sparkles } from 'lucide-react'
import MagneticButton from './MagneticButton.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', goal: 'Weight Loss', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = (e) => {
    e.preventDefault()
    // Build a clean WhatsApp lead message and open the chat with everything pre-filled.
    // Zero backend needed — the owner gets a real chat with name + phone + goal + message.
    const lines = [
      `Hi 7 Fit Gym! I'd like to book a visit and learn more about the membership.`,
      ``,
      `👤 Name: ${form.name}`,
      `📞 Phone: ${form.phone}`,
      `🎯 Goal: ${form.goal}`,
      form.message ? `💬 Note: ${form.message}` : null,
    ].filter(Boolean).join('\n')
    const url = `https://wa.me/919576080807?text=${encodeURIComponent(lines)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSent(true)
    setForm({ name: '', phone: '', goal: 'Weight Loss', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-32 bg-ink-900 relative overflow-hidden">
      {/* Massive bg text */}
      <div className="absolute -bottom-6 sm:-bottom-12 right-0 font-display text-[6rem] xs:text-[8rem] sm:text-[12rem] lg:text-[16rem] leading-none text-white/[0.025] pointer-events-none select-none uppercase whitespace-nowrap">
        Join 7 Fit
      </div>

      <div className="container-x relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: CTA copy + contact rails */}
          <div>
            <span className="section-label">Get In Touch</span>
            <h2 className="heading-lg mt-4">
              Your Best Body. <br />
              <span className="text-brand-400">Starts Today.</span>
            </h2>
            <p className="mt-5 sm:mt-6 text-white/70 text-base sm:text-lg max-w-md leading-relaxed">
              <span className="text-white font-semibold">Walk in for a tour</span>, meet the
              coaches, ask us anything. We respond on WhatsApp within 30 minutes.
            
            </p>

            <div className="mt-8 sm:mt-10 grid gap-3 max-w-md">
              <a href="https://wa.me/919576080807?text=Hi!%20I'd%20like%20to%20visit%207%20Fit%20Gym%20and%20learn%20more." target="_blank" rel="noopener noreferrer" className="btn-whatsapp justify-center">
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
              </a>
              <a href="tel:+919576080807" className="btn-ghost justify-center">
                <Phone className="w-5 h-5" /> +91 95760 80807
              </a>
            </div>

            <div className="mt-10 sm:mt-12 glass rounded-2xl p-5 sm:p-6 max-w-md flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-400 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-ink-950" />
              </div>
              <div>
                <div className="font-bold">Limited Offer</div>
                <div className="text-sm text-white/60 mt-0.5">
                  Free PT session + diet chart on first sign-up.
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={onSubmit}
            className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-10 border-white/10 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-brand-400/20 rounded-full blur-3xl" />
            <div className="relative">
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight">Book Your Visit</h3>
              <p className="text-white/50 text-xs sm:text-sm mt-1">
                Quick 30-second form. No spam, no pressure.
              </p>

              <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/50">Name</label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    className="mt-2 w-full bg-ink-800/60 border border-white/10 rounded-xl px-4 py-3.5 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/20 transition"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/50">Phone / WhatsApp</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    className="mt-2 w-full bg-ink-800/60 border border-white/10 rounded-xl px-4 py-3.5 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/20 transition"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/50">Your Goal</label>
                  <select
                    name="goal"
                    value={form.goal}
                    onChange={onChange}
                    className="mt-2 w-full bg-ink-800/60 border border-white/10 rounded-xl px-4 py-3.5 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/20 transition"
                  >
                    <option>Weight Loss</option>
                    <option>Muscle Gain</option>
                    <option>Strength Training</option>
                    <option>General Fitness</option>
                    <option>Personal Training</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/50">Anything else?</label>
                  <textarea
                    rows={3}
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    className="mt-2 w-full bg-ink-800/60 border border-white/10 rounded-xl px-4 py-3.5 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/20 transition resize-none"
                    placeholder="Optional — preferred timing, any injuries, etc."
                  />
                </div>
                <MagneticButton as="button" type="submit" className="btn-primary w-full justify-center">
                  {sent ? 'Opening WhatsApp ✓' : (<>Send via WhatsApp <Send className="w-4 h-4" /></>)}
                </MagneticButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
