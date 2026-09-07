import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { fadeUp, staggerContainer } from '../motion/variants'
import { testimonials } from '../data'

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="section-spacing overflow-hidden">
      <div className="container-main">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.span variants={fadeUp} className="inline-block text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-3">
            Testimonials
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] leading-tight" style={{ letterSpacing: '-0.03em' }}>
            What Our Students Say
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-3 text-base text-[var(--color-text-light)]">
            Hear from our students about their learning experience.
          </motion.p>
        </motion.div>

        <div className="relative mt-10 max-w-2xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl border border-[var(--color-border)] p-8 text-center"
              >
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-16 h-16 rounded-full object-cover mx-auto"
                />
                <div className="flex items-center justify-center gap-0.5 mt-4">
                  {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-[var(--color-yellow)] fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-[var(--color-text-light)] leading-relaxed italic">
                  &ldquo;{testimonials[activeIndex].text}&rdquo;
                </p>
                <h4 className="mt-4 text-base font-semibold text-[var(--color-text-dark)]">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-xs text-[var(--color-text-light)] mt-0.5">{testimonials[activeIndex].role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-3 mt-6">
            <motion.button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-light)] hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </motion.button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === activeIndex ? 'bg-[var(--color-primary)] w-6' : 'bg-[var(--color-border)]'
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <motion.button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-light)] hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
