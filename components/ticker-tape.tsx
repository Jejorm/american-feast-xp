'use client'

import { motion } from 'framer-motion'

const tickerItems = [
  'FRESHLY GRILLED DAILY',
  'NO ARTIFICIAL FLAVORS',
  '50+ FOOD VENDORS',
  'CRAFT BEER GARDEN',
  'LIVE ENTERTAINMENT',
  'FAMILY FRIENDLY',
  'VEGAN OPTIONS',
  'AWARD-WINNING BBQ',
]

export default function TickerTape() {
  return (
    <div className="bg-festival-cream py-5 border-y-4 border-festival-dark overflow-hidden relative">
      {/* First row - moves left */}
      <div className="flex">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex shrink-0"
        >
          {[0, 1].flatMap((copy) =>
            tickerItems.map((item) => (
              <span
                key={`row1-copy${copy}-${item}`}
                className="flex items-center gap-6 mx-8 text-festival-red font-bold text-lg md:text-xl whitespace-nowrap uppercase tracking-wider"
              >
                <span>{item}</span>
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="text-festival-orange text-2xl"
                >
                  ✦
                </motion.span>
              </span>
            ))
          )}
        </motion.div>
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex shrink-0"
        >
          {[0, 1].flatMap((copy) =>
            tickerItems.map((item) => (
              <span
                key={`row2-copy${copy}-${item}`}
                className="flex items-center gap-6 mx-8 text-festival-red font-bold text-lg md:text-xl whitespace-nowrap uppercase tracking-wider"
              >
                <span>{item}</span>
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="text-festival-orange text-2xl"
                >
                  ✦
                </motion.span>
              </span>
            ))
          )}
        </motion.div>
      </div>
    </div>
  )
}
