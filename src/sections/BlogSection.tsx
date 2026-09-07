import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import { fadeUp, staggerContainer } from '../motion/variants'
import { blogPosts } from '../data'

export default function BlogSection() {
  return (
    <section id="blog" className="section-spacing bg-[var(--color-soft-bg)] overflow-hidden">
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
              Blog
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] leading-tight" style={{ letterSpacing: '-0.03em' }}>
              Our Latest Blog & News
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
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
        >
          {blogPosts.map((post, i) => (
            <motion.a
              key={i}
              href={post.href}
              variants={fadeUp}
              className="group bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-white text-[var(--color-primary)] text-xs font-medium rounded-full shadow-sm">
                  {post.category}
                </span>
              </div>
              <div className="p-5">
                <span className="flex items-center gap-1 text-xs text-[var(--color-text-light)]">
                  <Calendar size={13} />
                  {post.date}
                </span>
                <h4 className="mt-2 text-base font-semibold text-[var(--color-text-dark)] leading-snug group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <span className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity">
                  Read More
                  <ArrowRight size={14} />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
