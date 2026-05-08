import { useEffect, useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { X, Copy, Check, Smartphone, ScanLine, MessageCircle, ShieldCheck } from 'lucide-react'

// Owner's UPI details — edit here only
const UPI_ID = 'manukum1445@okhdfcbank'
const PAYEE_NAME = 'Manu Kumar Nayak'
const OWNER_PHONE = '919576080807' // for the post-payment WhatsApp confirmation

/**
 * Build a UPI deep link per the NPCI spec.
 * https://www.npci.org.in/what-we-do/upi/product-overview
 */
function buildUpiLink({ amount, note }) {
  const params = new URLSearchParams({
    pa: UPI_ID,
    pn: PAYEE_NAME,
    am: String(amount),
    cu: 'INR',
    tn: note,
  })
  return `upi://pay?${params.toString()}`
}

function whatsappConfirmationLink(plan) {
  const msg = `Hi! I just paid ₹${plan.price.toLocaleString('en-IN')} for the ${plan.name} plan at 7 Fit Gym. Here's my payment screenshot. Please activate my membership.`
  return `https://wa.me/${OWNER_PHONE}?text=${encodeURIComponent(msg)}`
}

export default function PaymentModal({ open, onClose, plan }) {
  const [copied, setCopied] = useState(false)

  // Lock body scroll + ESC to close
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  // Reset copied state whenever the modal reopens
  useEffect(() => {
    if (open) setCopied(false)
  }, [open])

  if (!plan) return null

  const upiLink = buildUpiLink({
    amount: plan.price,
    note: `7Fit ${plan.name} Plan`,
  })

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(UPI_ID)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // Clipboard may be blocked (non-https in some contexts) — fall back to selection
      const ta = document.createElement('textarea')
      ta.value = UPI_ID
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    }
  }

  return (
    <div
      className={`fixed inset-0 z-[60] transition-all duration-300 ${
        open ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
      }`}
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
      aria-labelledby="pay-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink-950/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal card */}
      <div
        className={`relative h-full w-full flex items-end sm:items-center justify-center p-0 sm:p-6 transition-transform duration-400 ${
          open ? 'translate-y-0' : 'translate-y-8'
        }`}
      >
        <div
          className="relative w-full max-w-md bg-ink-900 sm:rounded-3xl rounded-t-3xl border border-white/10 shadow-2xl flex flex-col"
          style={{ maxHeight: 'min(90vh, 90svh)' }}
        >
          {/* Sticky close (stays reachable while content scrolls) */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition z-20 backdrop-blur-sm"
            aria-label="Close payment dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Scrollable content */}
          <div
            data-lenis-prevent
            className="relative flex-1 overflow-y-auto overscroll-contain p-6 sm:p-8 pb-safe"
          >
            {/* Decorative lime glow (clipped by parent radius; positioned inside scroll so it doesn't cover close btn) */}
            <div className="absolute -top-20 -right-10 w-48 h-48 bg-brand-400/20 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="relative text-center mb-6">
              <div className="inline-flex items-center gap-1.5 bg-brand-400/10 text-brand-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
                <ShieldCheck className="w-3 h-3" />
                Secure UPI
              </div>
              <h3 id="pay-title" className="font-display text-3xl sm:text-4xl uppercase tracking-tight">
                {plan.name} Plan
              </h3>
              <div className="mt-2 flex items-baseline justify-center gap-1">
                <span className="font-display text-5xl sm:text-6xl text-brand-400">
                  ₹{plan.price.toLocaleString('en-IN')}
                </span>
                <span className="text-sm text-white/40">/{plan.period}</span>
              </div>
            </div>

            {/* QR code */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl flex items-center justify-center mx-auto w-fit">
              <QRCodeSVG
                value={upiLink}
                size={200}
                level="M"
                bgColor="#ffffff"
                fgColor="#030303"
                includeMargin={false}
              />
            </div>

            <p className="mt-4 text-center text-xs text-white/50 flex items-center justify-center gap-1.5">
              <ScanLine className="w-3.5 h-3.5" />
              Scan with any UPI app — GPay, PhonePe, Paytm, BHIM
            </p>

            {/* Mobile: direct deep link */}
            <a
              href={upiLink}
              className="mt-6 sm:hidden w-full btn-primary justify-center"
            >
              <Smartphone className="w-4 h-4" />
              Open UPI App to Pay
            </a>

            {/* UPI ID row with copy */}
            <div className="mt-5 glass rounded-2xl p-4 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">
                  Or pay to UPI ID
                </div>
                <div className="font-mono text-sm text-white truncate">{UPI_ID}</div>
                <div className="text-[11px] text-white/50 mt-0.5">{PAYEE_NAME}</div>
              </div>
              <button
                onClick={handleCopy}
                className="shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-brand-400 text-ink-950 text-xs font-bold uppercase tracking-wider hover:bg-brand-300 transition active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" /> Copy
                  </>
                )}
              </button>
            </div>

            {/* Post-payment CTA */}
            <div className="mt-5 border-t border-white/5 pt-5">
              <p className="text-xs text-white/60 text-center leading-relaxed">
                After paying, send a screenshot on WhatsApp to{' '}
                <span className="text-white font-semibold">activate your membership</span>.
              </p>
              <a
                href={whatsappConfirmationLink(plan)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#25D366] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#1ebe57] transition active:scale-95 shadow-[0_0_30px_rgba(37,211,102,0.3)]"
              >
                <MessageCircle className="w-4 h-4" />
                Sent Payment? Confirm on WhatsApp
              </a>
            </div>

            {/* Trust footer */}
            <p className="mt-4 text-center text-[10px] text-white/30 uppercase tracking-[0.2em]">
              No card details stored · GST extra where applicable
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
