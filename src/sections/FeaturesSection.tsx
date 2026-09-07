import { motion } from 'framer-motion'
import { Trophy, BookOpen, Users, Headphones, ArrowRight } from 'lucide-react'
import { fadeUp, staggerContainer } from '../motion/variants'

const features = [
  { icon: Trophy, title: 'Award Winning', description: 'Award-winning platform recognized globally for excellence in online education.', link: '#' },
  { icon: BookOpen, title: 'Quality Education', description: 'High-quality curriculum designed by top educators and industry professionals.', link: '#' },
  { icon: Users, title: 'Expert Teachers', description: 'Learn from certified experts with years of teaching and industry experience.', link: '#' },
  { icon: Headphones, title: 'Life Time Support', description: 'Enjoy lifetime access to course materials and dedicated support whenever you need it.', link: '#' },
]

export default function FeaturesSection() {
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
            Features
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] leading-tight" style={{ letterSpacing: '-0.03em' }}>
            Our Best Features
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-3 text-base text-[var(--color-text-light)]">
            Education is the key that unlocks the door to a world of possibilities, empowering minds to explore.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
        >
          {features.map((feat, i) => (
            <motion.a
              key={i}
              href={feat.link}
              variants={fadeUp}
              className="group bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <span className="w-12 h-12 rounded-xl bg-[var(--color-light-blue)] flex items-center justify-center group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <feat.icon size={22} className="text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />
              </span>
              <h4 className="mt-4 text-lg font-semibold text-[var(--color-text-dark)]">{feat.title}</h4>
              <p className="mt-2 text-sm text-[var(--color-text-light)] leading-relaxed">{feat.description}</p>
              <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity">
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
