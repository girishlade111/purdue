import { motion } from 'framer-motion'
import { BookOpen, Users as UsersIcon, ArrowRight } from 'lucide-react'
import { fadeUp, staggerContainer } from '../motion/variants'
import { instructors } from '../data'

export default function InstructorsSection() {
  return (
    <section id="instructors" className="section-spacing bg-[var(--color-soft-bg)] overflow-hidden">
      <div className="container-main">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div className="max-w-lg">
            <motion.span variants={fadeUp} className="inline-block text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-3">
              Instructors
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] leading-tight" style={{ letterSpacing: '-0.03em' }}>
              Meet Our Expert Instructors
            </motion.h2>
          </div>
          <motion.a
            variants={fadeUp}
            href="#"
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-[var(--color-primary)] text-[var(--color-primary)] font-medium rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-all text-sm shrink-0"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            View All
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
        >
          {instructors.map((instructor, i) => (
            <motion.a
              key={i}
              href="#"
              variants={fadeUp}
              className="group bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden hover:shadow-xl transition-all duration-300 text-center"
              whileHover={{ y: -4 }}
            >
              <div className="overflow-hidden">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h4 className="text-base font-semibold text-[var(--color-text-dark)] group-hover:text-[var(--color-primary)] transition-colors">{instructor.name}</h4>
                <p className="text-xs text-[var(--color-text-light)] mt-0.5">{instructor.role}</p>
                <hr className="my-3 border-[var(--color-border)]" />
                <div className="flex items-center justify-center gap-4 text-xs text-[var(--color-text-light)]">
                  <span className="flex items-center gap-1">
                    <BookOpen size={13} />
                    {instructor.courses} Courses
                  </span>
                  <span className="flex items-center gap-1">
                    <UsersIcon size={13} />
                    {instructor.students}k
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
