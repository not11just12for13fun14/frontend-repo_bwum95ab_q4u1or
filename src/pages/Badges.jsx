import { motion } from 'framer-motion'

const badges = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  name: `Holographic POAP #${i + 1}`,
  img: `https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop`,
}))

export default function Badges() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl font-semibold">My Badges</h2>
          <p className="text-white/60">Connected: Phantom • 4 badges</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {badges.map((b) => (
          <motion.div
            key={b.id}
            whileHover={{ y: -3 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[#7c3aed]/20 via-transparent to-[#14b8a6]/20"/>
            <div className="relative aspect-square overflow-hidden">
              <img src={b.img} alt={b.name} className="h-full w-full object-cover scale-105 group-hover:scale-100 transition-transform duration-500"/>
              <div className="absolute inset-0 bg-[conic-gradient(at_30%_30%,_rgba(124,58,237,0.2),_rgba(20,184,166,0.2),_transparent_60%)] mix-blend-overlay" />
              <div className="absolute inset-0 bg-white/5" />
            </div>
            <div className="relative p-3">
              <p className="font-medium">{b.name}</p>
              <p className="text-xs text-white/60">Holographic badge</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
