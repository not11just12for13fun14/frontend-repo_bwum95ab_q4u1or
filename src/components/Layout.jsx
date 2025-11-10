import { Link, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Wallet, QrCode, Grid2X2, Home } from 'lucide-react'
import GlowButton from './GlowButton'

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-teal-400/30 selection:text-white">
      <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur-xl bg-neutral-950/40 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 rounded-xl bg-gradient-to-br from-[#7c3aed] via-[#22d3ee] to-[#14b8a6] shadow-[0_0_30px_rgba(124,58,237,0.35)]">
              <div className="absolute inset-0 rounded-xl bg-white/10 mix-blend-overlay" />
            </div>
            <span className="text-lg font-semibold tracking-tight">POAPonSOL</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link className="text-white/80 hover:text-white transition" to="/">Home</Link>
            <Link className="text-white/80 hover:text-white transition" to="/dashboard">Dashboard</Link>
            <Link className="text-white/80 hover:text-white transition" to="/claim">Claim</Link>
            <Link className="text-white/80 hover:text-white transition" to="/badges">My Badges</Link>
          </nav>
          <GlowButton className="hidden md:inline-flex">
            <Wallet className="h-4 w-4 mr-2" /> Connect
          </GlowButton>
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="pt-16"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <footer className="border-t border-white/10 backdrop-blur-xl bg-neutral-950/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-between text-sm text-white/60">
          <p>© {new Date().getFullYear()} POAPonSOL. Built for Solana speed.</p>
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:text-white transition inline-flex items-center gap-1"><Home className="h-4 w-4"/>Home</Link>
            <Link to="/claim" className="hover:text-white transition inline-flex items-center gap-1"><QrCode className="h-4 w-4"/>Claim</Link>
            <Link to="/badges" className="hover:text-white transition inline-flex items-center gap-1"><Grid2X2 className="h-4 w-4"/>Badges</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
