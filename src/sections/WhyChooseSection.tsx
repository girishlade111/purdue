import { motion } from 'framer-motion'
import { BookOpen, Briefcase, Users, ClipboardList, BarChart3, Headphones, ArrowRight } from 'lucide-react'
import { fadeUp, fadeRight, staggerContainer } from '../motion/variants'

const reasons = [
  { icon: BookOpen, title: 'Learn More Anywhere', description: 'Access your courses anytime, anywhere with our mobile-friendly platform.', link: '#' },
  { icon: Briefcase, title: 'Expert Instructor', description: 'Learn from certified professionals with proven track records in their fields.', link: '#' },
  { icon: Users, title: 'Team Management', description: 'Efficient tools for managing learning paths and tracking team progress.', link: '#' },
  { icon: ClipboardList, title: 'Course Planning', description: 'Structured learning paths designed to take you from beginner to advanced.', link: '#' },
  { icon: BarChart3, title: 'Teacher Monitoring', description: 'Advanced analytics to monitor teacher performance and student engagement.', link: '#' },
  { icon: Headphones, title: '24/7 Strong Support', description: 'Round-the-clock support team ready to help with any questions or issues.', link: '#' },
]

export default function WhyChooseSection() {
  return (
    <section className="section-spacing overflow-hidden" style={{ background: 'linear-gradient(135deg, #132A63 0%, #1a3a8a 50%, #2E5BFF 100%)' }}>
      <div className="container-main">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.span variants={fadeUp} className="inline-block text-sm font-semibold text-[var(--color-yellow)] uppercase tracking-wider mb-3">
            Why Choose Us
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.03em' }}>
            Thousands Of Students Choose Us
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-3 text-base text-white/70">
            Education is the key that unlocks the door to a world of possibilities, empowering minds to explore.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
        >
          {reasons.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              variants={fadeRight}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-7 border border-white/10 hover:bg-white/20 transition-all duration-300"
              whileHover={{ y: -3 }}
            >
              <span className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center group-hover:bg-[var(--color-yellow)] transition-colors duration-300">
                <item.icon size={22} className="text-white group-hover:text-[var(--color-text-dark)] transition-colors duration-300" />
              </span>
              <h4 className="mt-4 text-lg font-semibold text-white">{item.title}</h4>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{item.description}</p>
              <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[var(--color-yellow)] opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More
                <ArrowRight size={14} />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
