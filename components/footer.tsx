'use client'

import { motion } from 'framer-motion'
// import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react'
import {
  SiInstagram,
  SiTiktok,
  SiX,
  SiFacebook,
} from '@icons-pack/react-simple-icons'

export default function Footer() {
  return (
    <footer className="bg-festival-dark py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Social banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="lg:inline-block relative">
            {/* Ribbon decoration */}
            <svg
              className="absolute -left-100 lg:-left-16 xl:-left-32 top-1/2 -translate-y-1/2 w-12 h-8 text-festival-orange hidden md:block"
              viewBox="0 0 60 30"
            >
              <title>Ribbon Left</title>
              <polygon points="60,0 60,30 0,15" fill="currentColor" />
            </svg>
            <svg
              className="absolute -right-100 lg:-right-16 xl:-right-32 top-1/2 -translate-y-1/2 w-12 h-8 text-festival-orange hidden md:block"
              viewBox="0 0 60 30"
            >
              <title>Ribbon Right</title>
              <polygon points="0,0 0,30 60,15" fill="currentColor" />
            </svg>

            <motion.a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -2 }}
              className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-festival-yellow hover:text-festival-orange transition-colors inline-block"
            >
              @AMERICANFEASTEXP
            </motion.a>
          </div>
          <p className="mt-6 text-festival-cream/70 text-lg sm:text-xl">
            Follow us for updates, behind-the-scenes, and mouthwatering content
          </p>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-5 mb-12"
        >
          {[
            {
              icon: SiInstagram,
              label: 'Instagram',
              href: 'https://instagram.com/',
            },
            {
              icon: SiFacebook,
              label: 'Facebook',
              href: 'https://facebook.com/',
            },
            { icon: SiX, label: 'X', href: 'https://x.com/' },
            { icon: SiTiktok, label: 'Tiktok', href: 'https://tiktok.com/' },
          ].map(({ icon: Icon, label, href }, index) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.3,
                rotate: index % 2 === 0 ? 10 : -15,
                y: -5,
              }}
              whileTap={{ scale: 0.9 }}
              className="bg-festival-cream/10 text-festival-cream p-4 rounded-full hover:bg-festival-orange hover:text-festival-dark transition-colors"
              aria-label={label}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 text-festival-cream/60 text-sm mb-10"
        >
          {[
            'Privacy Policy',
            'Terms of Service',
            'Contact Us',
            'FAQs',
            'Vendor Applications',
          ].map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              whileHover={{ color: '#FF9800', x: 3 }}
              className="hover:text-festival-orange transition-colors"
            >
              {link}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-festival-cream/40 text-sm"
        >
          <p>&copy; 2026 American Feast Experience. All rights reserved.</p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute -left-20 -bottom-20 w-48 h-48 opacity-10"
      >
        <svg viewBox="0 0 100 100" fill="#FF9800">
          <title>Starburst Orange</title>
          <path d="M50 0 L54 42 L96 35 L58 50 L96 65 L54 58 L50 100 L46 58 L4 65 L42 50 L4 35 L46 42 Z" />
        </svg>
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute -right-16 -top-16 w-40 h-40 opacity-10"
      >
        <svg viewBox="0 0 100 100" fill="#FBC02D">
          <title>Starburst Yellow</title>
          <path d="M50 0 L54 42 L96 35 L58 50 L96 65 L54 58 L50 100 L46 58 L4 65 L42 50 L4 35 L46 42 Z" />
        </svg>
      </motion.div>
    </footer>
  )
}
