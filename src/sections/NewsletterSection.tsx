import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { fadeUp, fadeLeft, staggerContainer } from '../motion/variants'

export default function NewsletterSection() {
  return (
    <section className="section-spacing overflow-hidden" style={{ background: 'linear-gradient(135deg, #132A63 0%, #1a3a8a 50%, #2E5BFF 100%)' }}>
      <div className="container-main">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid lg:grid-cols-2 gap-10 items-center"
        >
          <motion.div variants={fadeLeft}>
            <span className="inline-block text-sm font-semibold text-[var(--color-yellow)] uppercase tracking-wider mb-3">Newsletter</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.03em' }}>
              Subscribe To Our Newsletter
            </h2>
            <p className="mt-3 text-base text-white/70">
              Stay updated with latest courses, news, and offers.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 text-sm outline-none focus:bg-white/25 transition-colors"
                required
              />
              <motion.button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[var(--color-dark-blue)] font-semibold rounded-full hover:shadow-xl transition-shadow text-sm"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Subscribe
                <Send size={16} />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
