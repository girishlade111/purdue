import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp, staggerContainer } from '../motion/variants'

export default function PromoSection() {
  return (
    <section className="section-spacing overflow-hidden">
      <div className="container-main">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative rounded-3xl overflow-hidden px-6 py-14 md:py-20 text-center"
          style={{ background: 'linear-gradient(135deg, #132A63 0%, #1a3a8a 50%, #2E5BFF 100%)' }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <motion.div variants={fadeUp} className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.03em' }}>
              We Are Always Ready For Your Better Education
            </h2>
            <p className="mt-3 text-base text-white/70">
              Start your learning journey today and unlock your full potential with our expert-led courses.
            </p>
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-white text-[var(--color-dark-blue)] font-semibold rounded-full hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Get Started Now
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
