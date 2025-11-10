import { motion } from 'framer-motion'
import { CheckCircle2, XCircle, Users } from 'lucide-react'
import GlowButton from '../components/GlowButton'

const sampleEvents = [
  { id: '1', name: 'Solana Hacker House • NYC', claims: 324, status: 'open', participants: 289 },
  { id: '2', name: 'Validator Summit 2025', claims: 512, status: 'closed', participants: 478 },
  { id: '3', name: 'Metaplex Dev Call #42', claims: 71, status: 'open', participants: 68 },
]

export default function Dashboard() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl font-semibold">Event Dashboard</h2>
          <p className="text-white/60">Manage issuance, status, and analytics.</p>
        </div>
        <GlowButton>Create Event</GlowButton>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sampleEvents.map((e) => (
          <motion.div
            key={e.id}
            whileHover={{ y: -2 }}
            className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/20 via-transparent to-[#14b8a6]/20 opacity-0 hover:opacity-100 transition" />
            <div className="relative z-10">
              <h3 className="font-medium tracking-tight">{e.name}</h3>
              <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3">
                  <p className="text-white/60">Claims</p>
                  <p className="text-lg font-semibold">{e.claims}</p>
                </div>
                <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3">
                  <p className="text-white/60">Status</p>
                  <div className="flex items-center gap-1.5">
                    {e.status === 'open' ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <XCircle className="h-4 w-4 text-rose-400" />
                    )}
                    <p className="text-lg font-semibold capitalize">{e.status}</p>
                  </div>
                </div>
                <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3">
                  <p className="text-white/60">Participants</p>
                  <div className="flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-sky-400" />
                    <p className="text-lg font-semibold">{e.participants}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
