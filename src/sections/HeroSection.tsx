import { motion } from 'framer-motion'
import { Play, ChevronRight, BookOpen } from 'lucide-react'
import { fadeLeft, fadeUp, staggerContainer, floatingAnimation } from '../motion/variants'

const stats = [
  { value: '136+', label: 'Courses' },
  { value: '299+', label: 'Teachers' },
  { value: '684+', label: 'Students' },
  { value: '941+', label: 'Awards' },
]

const jobStats = [
  { value: '63K', label: 'Job Placement' },
  { value: '815', label: 'Expert Trainer' },
]

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #132A63 0%, #1a3a8a 50%, #2E5BFF 100%)' }}>
      <div className="container-main" style={{ position: 'relative', zIndex: 2 }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm mb-6 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Learn from anywhere
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.03em' }}>
              Create, Learn & Grow <br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #FFC94A, #FF9F43)' }}>
                Your Skills
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-5 text-base md:text-lg text-white/70 leading-relaxed max-w-lg">
              Education is the key that unlocks the door to a world of possibilities, empowering minds to explore, learn, and grow beyond imagination.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mt-8">
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[var(--color-dark-blue)] font-semibold rounded-full hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Started Free
                <ChevronRight size={18} />
              </motion.a>
              <motion.a
                href="#"
                className="inline-flex items-center gap-3 px-6 py-3 text-white/90 font-medium hover:text-white transition-colors"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
                  <Play size={16} className="text-white ml-0.5" />
                </span>
                Watch Video
              </motion.a>
            </motion.div>
            <motion.div variants={fadeUp} className="flex items-center gap-2 mt-10">
              <div className="flex -space-x-2">
                {['https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&q=80',
                  'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=50&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&q=80',
                  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=50&q=80'].map((src, i) => (
                  <motion.img
                    key={i}
                    src={src}
                    alt="Student"
                    className="w-9 h-9 rounded-full border-2 border-white object-cover"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                  />
                ))}
              </div>
              <span className="text-sm text-white/70 ml-2">
                <strong className="text-white text-base">64k+</strong> Students enrolled
              </span>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeLeft} initial="hidden" animate="visible" className="relative hidden lg:block">
            <motion.img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80"
              alt="Learning"
              className="rounded-2xl w-full max-w-md ml-auto object-cover shadow-2xl"
              style={{ aspectRatio: '5/6', borderRadius: '20px' }}
              variants={floatingAnimation(15)}
              initial="initial"
              animate="animate"
            />
            <motion.div
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3"
              variants={floatingAnimation(8)}
              initial="initial"
              animate="animate"
            >
              <span className="w-12 h-12 rounded-xl bg-[var(--color-primary)] flex items-center justify-center">
                <BookOpen size={22} className="text-white" />
              </span>
              <div>
                <p className="text-2xl font-bold text-[var(--color-text-dark)]">64k+</p>
                <p className="text-xs text-[var(--color-text-light)]">Online Courses</p>
              </div>
            </motion.div>
            <motion.div
              className="absolute top-8 -right-4 bg-white rounded-2xl p-4 shadow-xl"
              variants={floatingAnimation(10)}
              initial="initial"
              animate="animate"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="flex -space-x-1">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 border-2 border-white" />
                  ))}
                </div>
                <span className="text-xs font-medium text-[var(--color-text-light)]">Enrolled</span>
              </div>
              <p className="text-sm font-semibold text-[var(--color-text-dark)]">2k+ Students</p>
              <div className="flex gap-3 mt-2">
                {jobStats.map((s, i) => (
                  <div key={i}>
                    <p className="text-base font-bold text-[var(--color-text-dark)]">{s.value}</p>
                    <p className="text-[10px] text-[var(--color-text-light)]">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10"
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={fadeUp} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-white/70 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
