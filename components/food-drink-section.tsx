'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const vendors = [
  {
    name: "SMOKY JOE'S BBQ",
    specialty: 'Texas-Style Brisket',
    image: 'images/unsplash/bbq-ribs.jpg',
  },
  {
    name: 'BURGER BARN',
    specialty: 'Gourmet Smash Burgers',
    image: 'images/unsplash/burger.jpeg',
  },
  {
    name: 'WING SHACK',
    specialty: 'Nashville Hot Wings',
    image: 'images/unsplash/wings.jpeg',
  },
  {
    name: 'CRAFT BREW CO.',
    specialty: 'Local IPAs & Lagers',
    image: 'images/unsplash/craft-beer.jpg',
  },
  {
    name: 'MAC ATTACK',
    specialty: 'Loaded Mac & Cheese',
    image: 'images/unsplash/mac-and-cheese.jpeg',
  },
  {
    name: 'SWEET TOOTH',
    specialty: 'Deep Fried Desserts',
    image: 'images/unsplash/donuts.jpeg',
  },
]

export default function FoodDrinkSection() {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const isInView = useInView(titleRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section
      id="food-drink"
      ref={containerRef}
      className="bg-festival-orange py-16 md:py-20 relative overflow-hidden"
    >
      {/* Decorative background shapes */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute top-20 left-10 w-32 h-32 md:w-48 md:h-48 opacity-20"
      >
        <StarburstShape color="#FBC02D" />
      </motion.div>
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 150]) }}
        className="absolute bottom-20 right-10 w-24 h-24 md:w-36 md:h-36 opacity-15"
      >
        <StarburstShape color="#D32F2F" />
      </motion.div>

      <div ref={titleRef} className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: 'spring' }}
          className="text-center mb-10 md:mb-12"
        >
          <h2
            className="text-6xl md:text-8xl lg:text-9xl font-black text-festival-dark leading-none"
            style={{
              textShadow:
                '4px 4px 0px rgba(0,0,0,0.1), 8px 8px 0px rgba(0,0,0,0.05)',
            }}
          >
            FOOD & DRINK
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-festival-dark/80 text-xl md:text-2xl max-w-2xl mx-auto font-medium"
          >
            Over 50 vendors serving the best American cuisine
          </motion.p>
        </motion.div>

        {/* Vendor Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {vendors.map((vendor, index) => (
            <motion.div
              key={vendor.name}
              initial={{ opacity: 0, y: 80, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100,
              }}
            >
              <VendorCard vendor={vendor} index={index} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.1, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-festival-yellow text-festival-dark px-10 py-5 text-xl font-black rounded-full shadow-2xl hover:shadow-festival-yellow/30 transition-all cursor-pointer"
            aria-label="View the full food and drink menu"
          >
            VIEW FULL MENU
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

function VendorCard({
  vendor,
  index,
}: {
  vendor: (typeof vendors)[0]
  index: number
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotate: index % 2 === 0 ? 3 : -3,
        y: -8,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group cursor-pointer"
    >
      <div className="relative bg-festival-cream rounded-3xl overflow-hidden shadow-xl">
        {/* Image */}
        <div className=" aspect-square relative overflow-hidden">
          <Image
            src={vendor.image}
            alt={vendor.name}
            fill
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-center backdrop-blur-[2px]">
          <h3 className="text-shadow-strong font-black text-festival-cream text-sm md:text-xl leading-tight tracking-tight uppercase">
            {vendor.name}
          </h3>
          <p className="text-white font-bold text-xs md:text-sm mt-1 drop-shadow-md">
            {vendor.specialty}
          </p>
        </div>

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-festival-red/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <span className="text-festival-cream font-bold text-lg">
            VIEW MENU
          </span>
        </motion.div>
      </div>
    </motion.div>
  )
}

function StarburstShape({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <title>Starburst Shape</title>
      <path
        d="M50 0 L55 35 L75 8 L60 38 L100 25 L65 45 L100 50 L65 55 L100 75 L60 62 L75 92 L55 65 L50 100 L45 65 L25 92 L40 62 L0 75 L35 55 L0 50 L35 45 L0 25 L40 38 L25 8 L45 35 Z"
        fill={color}
      />
    </svg>
  )
}
