'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { useRef } from 'react'

const ticketTiers = [
  {
    name: 'GENERAL ADMISSION',
    price: '$49',
    priceDetail: 'per day',
    features: [
      'Access to all food vendors',
      'Live music stages',
      'Cooking demonstrations',
      'Family activity zone',
    ],
    popular: false,
  },
  {
    name: 'VIP PASS',
    price: '$149',
    priceDetail: 'per day',
    features: [
      'Everything in General',
      'VIP lounge access',
      'Complimentary craft beer',
      'Meet & greet with chefs',
      'Priority entry',
      'Exclusive merch',
    ],
    popular: true,
  },
  {
    name: 'ALL-ACCESS',
    price: '$349',
    priceDetail: '3-day pass',
    features: [
      'Full VIP benefits',
      'All 3 days included',
      'Backstage tours',
      'Private tasting sessions',
      'Festival gift bag',
      'Free parking',
    ],
    popular: false,
  },
]

export default function TicketsSection({
  handlePurchase,
  isButtonDisabled,
}: {
  handlePurchase: () => void
  isButtonDisabled: boolean
}) {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const starRotate1 = useTransform(scrollYProgress, [0, 1], [0, 360])
  const starRotate2 = useTransform(scrollYProgress, [0, 1], [360, 0])

  return (
    <section
      id="tickets"
      ref={containerRef}
      className="bg-festival-red py-20 md:py-32 relative overflow-hidden"
    >
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-festival-cream leading-none drop-shadow-[6px_6px_0px_rgba(0,0,0,0.3)]">
            GET YOUR TICKETS
          </h2>
          <p className="mt-6 text-festival-cream/80 text-xl md:text-2xl max-w-2xl mx-auto font-medium">
            Early bird pricing available now. Don&apos;t miss out on the
            tastiest festival of the year!
          </p>
        </motion.div>

        {/* Ticket cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ticketTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 100, rotateX: -30 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                type: 'spring',
                stiffness: 100,
              }}
            >
              <TicketCard
                isButtonDisabled={isButtonDisabled}
                handlePurchase={handlePurchase}
                {...tier}
                index={index}
              />
            </motion.div>
          ))}
        </div>

        {/* Guarantee badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: -2 }}
            className="inline-flex items-center gap-3 bg-festival-yellow text-festival-dark px-8 py-4 rounded-full font-bold text-lg shadow-2xl"
          >
            <Check className="w-6 h-6" />
            <span>100% Money-Back Guarantee</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative starbursts with scroll-linked rotation */}
      <motion.div
        style={{ rotate: starRotate1 }}
        className="absolute -left-16 top-24 w-32 h-32 md:w-44 md:h-44"
      >
        <StarburstShape className="w-full h-full text-festival-orange" />
      </motion.div>
      <motion.div
        style={{ rotate: starRotate2 }}
        className="absolute -right-16 bottom-24 w-28 h-28 md:w-40 md:h-40"
      >
        <StarburstShape className="w-full h-full text-festival-yellow" />
      </motion.div>
      <motion.div
        style={{ rotate: starRotate1 }}
        className="absolute right-[20%] top-16 w-20 h-20 md:w-28 md:h-28 hidden lg:block"
      >
        <StarburstShape className="w-full h-full text-festival-orange/50" />
      </motion.div>
    </section>
  )
}

function TicketCard({
  name,
  price,
  priceDetail,
  features,
  popular,
  index,
  handlePurchase,
  isButtonDisabled,
}: {
  name: string
  price: string
  priceDetail: string
  features: string[]
  popular: boolean
  index: number
  handlePurchase: () => void
  isButtonDisabled: boolean
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        y: -20,
        rotate: index === 1 ? 0 : index === 0 ? -3 : 3,
        boxShadow: '0 50px 100px -25px rgba(0,0,0,0.5)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`relative bg-festival-cream rounded-3xl p-8 md:p-10 shadow-2xl cursor-pointer ${
        popular ? 'ring-6 ring-festival-yellow' : ''
      }`}
    >
      {popular && (
        <motion.div
          initial={{ scale: 0, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
          className="absolute -top-6 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              filter: [
                'drop-shadow(0 0 8px rgba(251,192,45,0.4))',
                'drop-shadow(0 0 16px rgba(251,192,45,0.7))',
                'drop-shadow(0 0 8px rgba(251,192,45,0.4))',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="bg-linear-to-r from-festival-yellow to-festival-orange text-festival-dark px-5 py-2.5 rounded-full font-black text-xs sm:text-sm md:text-base flex items-center gap-2 shadow-2xl border-2 border-festival-dark/10 whitespace-nowrap"
          >
            <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
            <span className="text-lg tracking-tighter md:tracking-normal">
              MOST POPULAR
            </span>
          </motion.div>
        </motion.div>
      )}

      <div className="text-center">
        <h3 className="font-bold text-festival-dark text-xl md:text-2xl">
          {name}
        </h3>
        <div className="flex justify-center items-center mt-6">
          <span className="text-6xl md:text-7xl font-black text-festival-red">
            {price}
          </span>
          <span className="text-festival-dark/60 ml-2 text-xl">
            {priceDetail}
          </span>
        </div>
      </div>

      <ul className="mt-8 space-y-4">
        {features.map((feature, featureIndex) => (
          <motion.li
            key={feature}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: featureIndex * 0.1 }}
            className="flex items-center gap-3 text-festival-dark/80"
          >
            <motion.div
              whileHover={{ scale: 1.3, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Check className="w-5 h-5 text-festival-orange shrink-0" />
            </motion.div>
            <span className="text-base md:text-lg">{feature}</span>
          </motion.li>
        ))}
      </ul>

      <motion.button
        disabled={isButtonDisabled}
        onClick={handlePurchase}
        whileHover={
          !isButtonDisabled
            ? {
                scale: 1.1,
                rotate: 2,
              }
            : {}
        }
        whileTap={!isButtonDisabled ? { scale: 0.95 } : {}}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        className={`mt-10 w-full ${isButtonDisabled ? 'cursor-not-allowed' : 'cursor-pointer group'}`}
        aria-label={
          isButtonDisabled
            ? 'Ticket purchase limit reached'
            : `Buy ${name} ticket for ${price}`
        }
      >
        <div
          className={`relative w-full flex justify-center py-7 rounded-full transition-all duration-300 ${
            isButtonDisabled
              ? 'bg-gray-300 text-gray-500 border-gray-400 opacity-60'
              : 'bg-festival-orange text-festival-dark border-4 border-festival-dark shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-[2px] group-hover:translate-y-[2px]'
          }`}
        >
          <span className="font-black text-lg uppercase tracking-wider">
            {isButtonDisabled ? 'LIMIT REACHED' : 'BUY NOW'}
          </span>
        </div>
      </motion.button>
    </motion.div>
  )
}

function StarburstShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <title>Starburst Shape</title>
      <path d="M50 0 L54 42 L96 35 L58 50 L96 65 L54 58 L50 100 L46 58  4 65 L42 50 L4 35 L46 42 Z" />
    </svg>
  )
}
