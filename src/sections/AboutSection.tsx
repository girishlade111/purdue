import { motion } from 'framer-motion'
import { GraduationCap, Award, ScrollText, ArrowRight, Play } from 'lucide-react'
import { fadeUp, fadeLeft, staggerContainer } from '../motion/variants'

const aboutFeatures = [
  {
    icon: GraduationCap,
    title: 'Online Courses',
    description: 'Learn from industry experts with structured curriculum designed for real-world skills.',
  },
  {
    icon: Award,
    title: 'Expert Teachers',
    description: 'Our instructors bring years of practical experience and deep subject matter expertise.',
  },
  {
    icon: ScrollText,
    title: 'Certifications',
    description: 'Earn recognized certificates upon completion to boost your career prospects.',
  },
]

const numbers = [
  { value: '136+', label: 'Courses' },
  { value: '299+', label: 'Teachers' },
  { value: '684+', label: 'Students' },
  { value: '941+', label: 'Awards' },
]

export default function AboutSection() {
  return (
    <section id="about" className="section-spacing bg-[var(--color-soft-bg)] overflow-hidden">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="relative"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80"
              alt="About"
              className="rounded-2xl w-full object-cover shadow-lg"
              style={{ aspectRatio: '5/6', borderRadius: '20px' }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute bottom-6 left-6 bg-white rounded-2xl p-5 shadow-xl flex items-center gap-4"
            >
              <span className="w-14 h-14 rounded-full bg-[var(--color-primary)] flex items-center justify-center cursor-pointer hover:bg-[var(--color-primary-dark)] transition-colors" aria-label="Play video">
                <Play size={22} className="text-white ml-0.5" />
              </span>
              <div>
                <p className="text-base font-semibold text-[var(--color-text-dark)]">Learn More</p>
                <p className="text-xs text-[var(--color-text-light)]">Watch Video</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.span variants={fadeUp} className="inline-block text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-3">
              About Us
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] leading-tight" style={{ letterSpacing: '-0.03em' }}>
              Build Your Skill From Anywhere
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-base text-[var(--color-text-light)] leading-relaxed">
              Education is the key that unlocks the door to a world of possibilities, empowering minds to explore, learn, and grow beyond imagination. It is the bridge that connects dreams to reality.
            </motion.p>

            <div className="mt-8 space-y-5">
              {aboutFeatures.map((feat, i) => (
                <motion.div key={i} variants={fadeUp} className="flex items-start gap-4">
                  <span className="w-11 h-11 rounded-xl bg-[var(--color-light-blue)] flex items-center justify-center shrink-0">
                    <feat.icon size={20} className="text-[var(--color-primary)]" />
                  </span>
                  <div>
                    <h4 className="text-base font-semibold text-[var(--color-text-dark)]">{feat.title}</h4>
                    <p className="text-sm text-[var(--color-text-light)] mt-1">{feat.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              variants={fadeUp}
              href="#"
              className="inline-flex items-center gap-2 mt-8 px-6 py-2.5 bg-[var(--color-primary)] text-white font-medium rounded-full hover:bg-[var(--color-primary-dark)] transition-colors text-sm"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore More
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 bg-white rounded-2xl p-8 shadow-sm border border-[var(--color-border)]"
        >
          {numbers.map((num, i) => (
            <motion.div key={i} variants={fadeUp} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[var(--color-primary)]">{num.value}</p>
              <p className="text-sm text-[var(--color-text-light)] mt-1">{num.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
