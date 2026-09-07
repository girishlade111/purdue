import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ShoppingCart, User, ChevronDown, Menu, X } from 'lucide-react'
import { navLinks } from '../data'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<number | null>(null)

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[var(--color-border)]"
      style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
    >
      <div className="container-main flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <span className="text-xl font-bold text-[var(--color-text-dark)]" style={{ letterSpacing: '-0.03em' }}>Purdue</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <div
              key={i}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(i)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-[var(--color-text-dark)] hover:text-[var(--color-primary)] transition-colors inline-flex items-center gap-1"
              >
                {link.label}
                {link.children && (
                  <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === i ? 'rotate-180' : ''}`} />
                )}
                <motion.span
                  className="absolute bottom-0 left-3 right-3 h-0.5 bg-[var(--color-primary)] rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </a>
              {link.children && (
                <div
                  className={`absolute top-full left-0 min-w-[200px] bg-white rounded-xl shadow-lg border border-[var(--color-border)] py-2 transition-all duration-200 ${
                    openDropdown === i ? 'opacity-100 visible translate-y-1' : 'opacity-0 invisible translate-y-0'
                  }`}
                >
                  {link.children.map((child, j) => (
                    <a
                      key={j}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-[var(--color-text-light)] hover:text-[var(--color-primary)] hover:bg-[var(--color-soft-bg)] transition-colors"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button className="p-2 text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors" aria-label="Search">
            <Search size={20} />
          </button>
          <button className="p-2 text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors relative" aria-label="Cart">
            <ShoppingCart size={20} />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[var(--color-primary)] text-white text-[10px] font-bold rounded-full flex items-center justify-center">2</span>
          </button>
          <button className="p-2 text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors" aria-label="Profile">
            <User size={20} />
          </button>
          <motion.a
            href="#"
            className="ml-2 px-6 py-2.5 bg-[var(--color-primary)] text-white text-sm font-medium rounded-full hover:bg-[var(--color-primary-dark)] transition-colors"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Register
          </motion.a>
        </div>

        <button
          className="lg:hidden p-2 text-[var(--color-text-dark)]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-[var(--color-border)] bg-white overflow-hidden"
          >
            <div className="container-main py-4 space-y-1">
              {navLinks.map((link, i) => (
                <div key={i}>
                  <button
                    className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-[var(--color-text-dark)] hover:text-[var(--color-primary)] rounded-lg hover:bg-[var(--color-soft-bg)] transition-colors"
                    onClick={() => link.children ? setOpenDropdown(openDropdown === i ? null : i) : setIsOpen(false)}
                  >
                    <span>{link.label}</span>
                    {link.children && (
                      <ChevronDown size={16} className={`transition-transform ${openDropdown === i ? 'rotate-180' : ''}`} />
                    )}
                  </button>
                  {link.children && openDropdown === i && (
                    <div className="ml-4 space-y-1 pb-1">
                      {link.children.map((child, j) => (
                        <a
                          key={j}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-[var(--color-text-light)] hover:text-[var(--color-primary)] rounded-lg hover:bg-[var(--color-soft-bg)] transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 px-3">
                <a
                  href="#"
                  className="block text-center px-6 py-2.5 bg-[var(--color-primary)] text-white text-sm font-medium rounded-full hover:bg-[var(--color-primary-dark)] transition-colors"
                >
                  Register
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
