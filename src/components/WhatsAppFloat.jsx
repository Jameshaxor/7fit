import { useEffect, useState } from 'react'
import { MessageCircle, Phone, Plus, X } from 'lucide-react'

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)

  // Hide the cluster when the contact section is in view (form is right there)
  useEffect(() => {
    const target = document.getElementById('contact')
    if (!target || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.2 },
    )
    io.observe(target)
    return () => io.disconnect()
  }, [])

  // Close popup on Esc
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div
      className={`fixed right-4 sm:right-6 z-40 transition-all duration-500 ${
        hidden ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100'
      }`}
      style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}
    >
      {/* Action buttons (revealed when expanded) */}
      <div
        className={`flex flex-col items-end gap-2.5 mb-3 transition-all duration-300 ${
          open
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <a
          href="https://wa.me/919576080807?text=Hi!%20I'd%20like%20to%20know%20more%20about%207%20Fit%20Gym."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3"
          aria-label="Chat on WhatsApp"
        >
          <span className="bg-ink-900/90 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/10 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition">
            WhatsApp
          </span>
          <span className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition">
            <MessageCircle className="w-5 h-5 fill-white" />
          </span>
        </a>
        <a
          href="tel:+919576080807"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3"
          aria-label="Call us"
        >
          <span className="bg-ink-900/90 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/10 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition">
            Call
          </span>
          <span className="w-12 h-12 rounded-full bg-brand-400 text-ink-950 flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(204,255,0,0.5)] hover:scale-110 active:scale-95 transition">
            <Phone className="w-5 h-5" />
          </span>
        </a>
      </div>

      {/* Trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close contact options' : 'Open contact options'}
        aria-expanded={open}
        className="relative w-14 h-14 rounded-full bg-brand-400 text-ink-950 flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(204,255,0,0.6)] hover:scale-105 active:scale-95 transition ml-auto"
      >
        {!open && (
          <span className="absolute inset-0 rounded-full bg-brand-400 animate-ping opacity-30" />
        )}
        <Plus
          className={`w-6 h-6 absolute transition-all duration-300 ${
            open ? 'opacity-0 rotate-45 scale-75' : 'opacity-100 rotate-0 scale-100'
          }`}
        />
        <X
          className={`w-6 h-6 absolute transition-all duration-300 ${
            open ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-45 scale-75'
          }`}
        />
      </button>
    </div>
  )
}
