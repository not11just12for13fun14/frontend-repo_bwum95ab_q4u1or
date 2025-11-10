import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GlowButton from '../components/GlowButton'

export default function Claim() {
  const [scanning, setScanning] = useState(false)
  const [success, setSuccess] = useState(false)
  const videoRef = useRef(null)

  const startScan = async () => {
    setScanning(true)
    try {
      // Simulate scan for this mockup
      await new Promise((r) => setTimeout(r, 1200))
      handleSuccess()
    } catch (e) {
      setScanning(false)
    }
  }

  const handleSuccess = () => {
    setSuccess(true)
    setScanning(false)
    setTimeout(() => setSuccess(false), 2800)
  }

  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/15 via-transparent to-[#14b8a6]/15" />
          <div className="relative aspect-video flex items-center justify-center">
            <div className="h-full w-full bg-black/40 flex items-center justify-center text-white/60">QR Scanner Preview</div>
            <div className="absolute inset-8 border-2 border-teal-400/70 rounded-3xl shadow-[0_0_25px_rgba(45,212,191,0.45)]" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Claim Your Badge</h2>
          <p className="mt-2 text-white/70">Scan the event QR to mint your attendance badge on Solana. Gas-light, instant, and verifiable.</p>
          <div className="mt-6 flex items-center gap-4">
            <GlowButton onClick={startScan}>{scanning ? 'Scanning…' : 'Start Scan'}</GlowButton>
            <button className="text-white/70 hover:text-white">Use invite code</button>
          </div>

          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="mt-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-4"
              >
                <p className="font-medium text-emerald-300">Minted! Your POAP badge is on its way.</p>
                <Confetti />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function Confetti() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {Array.from({ length: 80 }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: [0, 600], opacity: [1, 1, 0] }}
          transition={{ duration: 1.8 + Math.random(), delay: i * 0.01, ease: 'easeOut' }}
          className="absolute top-0 left-1/2 h-2 w-2 rounded-sm"
          style={{
            background: `hsl(${Math.random() * 360}, 80%, 60%)`,
            transform: `translateX(${(Math.random() - 0.5) * 400}px)`
          }}
        />
      ))}
    </div>
  )
}
