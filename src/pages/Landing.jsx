import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import Particles from '../components/Particles'
import GlowButton from '../components/GlowButton'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <Particles />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold tracking-tight"
          >
            POAPs, but <span className="bg-gradient-to-r from-[#7c3aed] via-[#22d3ee] to-[#14b8a6] bg-clip-text text-transparent">Solana-fast</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-white/70"
          >
            Issue proof-of-attendance badges at the speed of Solana. Minimal, credible, and built for onchain communities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex items-center gap-4"
          >
            <Link to="/dashboard">
              <GlowButton>Create Event</GlowButton>
            </Link>
            <Link to="/claim" className="text-white/70 hover:text-white">Claim a badge →</Link>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[['Instant mints','under 1s'],['Permissionless','no custody'],['Wallet-native','Phantom & Backpack']].map(([title,desc]) => (
              <div key={title} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#7c3aed]/20 via-transparent to-[#14b8a6]/20 opacity-0 hover:opacity-100 transition" />
                <p className="text-sm text-white/60">{title}</p>
                <p className="mt-1 text-xl font-semibold">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
