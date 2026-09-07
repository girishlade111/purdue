import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { fadeUp, staggerContainer } from '../motion/variants'

export default function VideoSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1400&q=80)' }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(19,42,99,0.92) 0%, rgba(46,91,255,0.85) 100%)' }} />

      <div className="container-main relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.span variants={fadeUp} className="inline-block text-sm font-semibold text-[var(--color-yellow)] uppercase tracking-wider mb-3">
            Watch Video
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.03em' }}>
            Take The Best Education From The Experts
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-3 text-base text-white/70">
            Education is the key that unlocks the door to a world of possibilities.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 inline-flex items-center justify-center">
            <motion.button
              className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl cursor-pointer hover:scale-105 transition-transform"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Play video"
            >
              <Play size={28} className="text-[var(--color-primary)] ml-1" />
            </motion.button>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-4 text-sm text-white/50">
            Watch Video intro
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
