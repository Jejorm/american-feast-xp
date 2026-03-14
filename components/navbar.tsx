'use client'

import { motion } from 'framer-motion'
import { Menu, Ticket, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#lineup', label: 'Lineup' },
  { href: '#food-drink', label: 'Food & Drink' },
  { href: '#location', label: 'Location' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl"
      >
        <motion.div
          className={`rounded-full border border-white/10 shadow-2xl shadow-black/20 transition-all duration-300 ${
            hasScrolled
              ? 'bg-black/75 backdrop-blur-xl'
              : 'bg-black/50 backdrop-blur-md'
          }`}
        >
          <div className="px-2 sm:px-4 md:px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector('#home')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
                setIsOpen(false)
              }}
              whileHover={{ scale: 1.05 }}
              className="text-lg sm:text-xl md:text-2xl px-4 md:px-0 font-black text-festival-yellow cursor-pointer"
            >
              AMERICAN FEAST EXP
            </motion.button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <motion.div
                    className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    layoutId="navHover"
                  />
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector('#tickets')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
                setIsOpen(false)
              }}
              whileHover={{ scale: 1.1, rotate: -2 }}
              whileTap={{ scale: 0.9 }}
              className="hidden md:inline-flex items-center gap-2 bg-festival-orange text-festival-dark px-5 py-2 rounded-full font-bold text-sm shadow-lg hover:bg-festival-yellow transition-colors cursor-pointer"
            >
              <Ticket className="w-4 h-4" />
              Get Tickets
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.7 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <motion.div
        initial={false}
        animate={
          isOpen
            ? { opacity: 1, pointerEvents: 'auto' as const }
            : { opacity: 0, pointerEvents: 'none' as const }
        }
        className="fixed inset-0 z-40 bg-festival-dark/80 backdrop-blur-xl md:hidden"
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              initial={{ opacity: 0, y: 20 }}
              animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
              className="text-4xl font-black text-festival-cream hover:text-festival-yellow transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
          <motion.button
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector('#tickets')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
              setIsOpen(false)
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ delay: 0.4 }}
            className="mt-4 inline-flex items-center gap-3 bg-festival-orange text-festival-dark px-8 py-4 rounded-full font-bold text-xl"
          >
            <Ticket className="w-6 h-6" />
            Get Tickets
          </motion.button>
        </div>
      </motion.div>
    </>
  )
}
