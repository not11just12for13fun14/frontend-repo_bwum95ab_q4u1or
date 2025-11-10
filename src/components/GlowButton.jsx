import { motion } from 'framer-motion'
import clsx from 'clsx'

export default function GlowButton({ children, className = '', glow = true, ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        'relative inline-flex items-center justify-center rounded-xl px-5 py-2.5 font-semibold text-white',
        'bg-gradient-to-r from-[#6c2bd9] via-[#7c3aed] to-[#14b8a6]',
        'shadow-[0_0_0_0_rgba(124,58,237,0.5)] transition-shadow duration-500',
        glow && 'after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:blur-lg after:content-[""] after:bg-gradient-to-r after:from-[#7c3aed]/50 after:via-[#22d3ee]/40 after:to-[#14b8a6]/40',
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
