import { motion } from 'framer-motion'
import { Monitor, TrendingUp, Globe, Heart, Music, Palette, Layers, Sigma } from 'lucide-react'
import { fadeUp, staggerContainer } from '../motion/variants'

const categories = [
  { name: 'IT & Software', count: '71 Courses', color: '#EEF4FF', icon: Monitor },
  { name: 'Digital Marketing', count: '59 Courses', color: '#F0FDF4', icon: TrendingUp },
  { name: 'Web Development', count: '68 Courses', color: '#FFF7ED', icon: Globe },
  { name: 'Health & Fitness', count: '83 Courses', color: '#FEF2F2', icon: Heart },
  { name: 'Music Production', count: '37 Courses', color: '#F5F3FF', icon: Music },
  { name: 'Graphic Design', count: '51 Courses', color: '#ECFDF5', icon: Palette },
  { name: 'UI/UX Design', count: '38 Courses', color: '#FFFBEB', icon: Layers },
  { name: 'Math & Physics', count: '43 Courses', color: '#F8FAFC', icon: Sigma },
]

export default function CategoriesSection() {
  return (
    <section className="section-spacing bg-[var(--color-soft-bg)] overflow-hidden">
      <div className="container-main">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.span variants={fadeUp} className="inline-block text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-3">
            Categories
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] leading-tight" style={{ letterSpacing: '-0.03em' }}>
            Browse Top Categories
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-3 text-base text-[var(--color-text-light)]">
            Explore our wide range of categories and start learning today.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10"
        >
          {categories.map((cat, i) => (
            <motion.a
              key={i}
              href="#"
              variants={fadeUp}
              className="group bg-white rounded-2xl p-6 flex items-center gap-4 border border-[var(--color-border)] hover:shadow-lg hover:border-transparent transition-all duration-300"
              whileHover={{ y: -3 }}
            >
              <span
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-300"
                style={{ background: cat.color }}
              >
                <cat.icon size={24} className="text-[var(--color-primary)]" />
              </span>
              <div>
                <h4 className="text-base font-semibold text-[var(--color-text-dark)] group-hover:text-[var(--color-primary)] transition-colors">{cat.name}</h4>
                <p className="text-xs text-[var(--color-text-light)] mt-0.5">{cat.count}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
