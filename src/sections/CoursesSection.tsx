import { motion } from 'framer-motion'
import { Star, BookOpen, Clock, Users, ArrowRight } from 'lucide-react'
import { fadeUp, staggerContainer } from '../motion/variants'
import { courses } from '../data'

export default function CoursesSection() {
  return (
    <section id="courses" className="section-spacing overflow-hidden">
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
              Our Courses
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] leading-tight" style={{ letterSpacing: '-0.03em' }}>
              Explore Our Popular Courses
            </motion.h2>
          </div>
          <motion.a
            variants={fadeUp}
            href="#"
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-[var(--color-primary)] text-[var(--color-primary)] font-medium rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-all text-sm shrink-0"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            View All Courses
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
          {courses.map((course, i) => (
            <motion.a
              key={i}
              href="#"
              variants={fadeUp}
              className="group bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-[var(--color-primary)] text-white text-xs font-medium rounded-full">
                  {course.category}
                </span>
                <span className="absolute top-3 right-3 px-3 py-1 bg-white text-[var(--color-primary)] text-xs font-bold rounded-full shadow-sm">
                  {course.price}
                </span>
              </div>
              <div className="p-5">
                <h4 className="text-sm font-semibold text-[var(--color-text-dark)] leading-snug group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                  {course.title}
                </h4>
                <div className="flex items-center gap-1 mt-3">
                  <Star size={14} className="text-[var(--color-yellow)] fill-current" />
                  <span className="text-xs font-medium text-[var(--color-text-light)]">{course.rating}</span>
                </div>
                <div className="flex items-center gap-4 mt-3 text-xs text-[var(--color-text-light)]">
                  <span className="flex items-center gap-1">
                    <BookOpen size={13} />
                    {course.lessons} Lessons
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} />
                    {course.duration}
                  </span>
                </div>
                <hr className="my-3 border-[var(--color-border)]" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={course.instructorImage} alt={course.instructor} className="w-6 h-6 rounded-full object-cover" />
                    <span className="text-xs text-[var(--color-text-light)]">{course.instructor}</span>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-[var(--color-text-light)]">
                    <Users size={13} />
                    {course.students}
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
