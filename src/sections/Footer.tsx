import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react'
import { fadeUp, staggerContainer } from '../motion/variants'

const footerLinks = [
  {
    title: 'Useful Links',
    links: ['Online Learning', 'About Us', 'Our Teachers', 'Latest Courses', 'Contact Us'],
  },
  {
    title: 'Categories',
    links: ['IT & Software', 'Digital Marketing', 'Web Development', 'Health & Fitness', 'Music Production'],
  },
  {
    title: 'Support',
    links: ['Documentation', 'FAQs', 'Forum', 'Contact', 'Live Chat'],
  },
]

const contacts = [
  { icon: MapPin, text: '1234 AB Hall, Brooklyn, NY 12345' },
  { icon: Phone, text: '+123 456 7890' },
  { icon: Mail, text: 'mail@purdue.com' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-[var(--color-text-dark)] text-white overflow-hidden">
      <div className="container-main section-spacing">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10"
        >
          <motion.div variants={fadeUp} className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold text-white" style={{ letterSpacing: '-0.03em' }}>Purdue</span>
            </div>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-sm">
              Education is the key that unlocks the door to a world of possibilities, empowering minds to explore, learn, and grow beyond imagination.
            </p>
            <div className="mt-6 space-y-3">
              {contacts.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <item.icon size={15} className="text-[var(--color-primary)]" />
                  </span>
                  <span className="text-sm text-white/60">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {footerLinks.map((group, i) => (
            <motion.div key={i} variants={fadeUp}>
              <h4 className="text-base font-semibold text-white mb-4">{group.title}</h4>
              <ul className="space-y-2.5">
                {group.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-sm text-white/60 hover:text-[var(--color-primary)] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-main flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} <span className="text-white/60">Purdue</span>. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center hover:bg-[var(--color-primary-dark)] transition-colors cursor-pointer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
