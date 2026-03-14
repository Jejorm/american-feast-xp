'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Car, Clock, MapPin, Train } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

export default function LocationSection() {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const mapY = useTransform(scrollYProgress, [0, 1], [50, -50])
  const cardsY = useTransform(scrollYProgress, [0, 1], [80, -40])

  return (
    <section
      id="location"
      ref={containerRef}
      className="bg-festival-yellow py-20 md:py-32 relative overflow-visible"
    >
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-festival-red leading-none drop-shadow-[5px_5px_0px_rgba(0,0,0,0.2)]">
            LOCATION
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          {/* Map placeholder / stylized location */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
            style={{ y: mapY }}
            className="relative"
          >
            <motion.div
              whileHover={{
                scale: 1.03,
                rotate: -2,
                boxShadow: '0 40px 80px -20px rgba(0,0,0,0.3)',
              }}
              className="bg-festival-cream rounded-3xl p-10 shadow-2xl border-4 border-festival-dark/10 relative overflow-hidden"
            >
              {/* Decorative map pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <title>Map pattern</title>
                  <pattern
                    id="grid"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 10 0 L 0 0 0 10"
                      fill="none"
                      stroke="#D32F2F"
                      strokeWidth="0.5"
                    />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              <div className="relative z-10 text-center py-10">
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-flex"
                >
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <MapPin className="w-20 h-20 md:w-28 md:h-28 text-festival-red drop-shadow-lg" />
                  </motion.div>
                </motion.div>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-festival-dark mt-6">
                  CENTRAL PARK
                </h3>
                <p className="text-festival-dark/80 text-2xl md:text-3xl font-bold mt-3">
                  NEW YORK, NY
                </p>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  className="mt-8 inline-flex items-center gap-2 bg-festival-orange text-festival-dark px-6 py-3 rounded-full font-bold text-lg shadow-lg"
                >
                  <span className="cursor-pointer">The Great Lawn</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Info cards with staggered animation */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
            style={{ y: cardsY }}
            className="space-y-5"
          >
            <InfoCard
              icon={Clock}
              title="FESTIVAL HOURS"
              details={[
                'Friday: 4PM - 11PM',
                'Saturday: 11AM - 11PM',
                'Sunday: 11AM - 9PM',
              ]}
              delay={0}
            />
            <InfoCard
              icon={Car}
              title="PARKING"
              details={[
                'Limited street parking',
                'Nearby garages available',
                'Rideshare drop-off zone',
              ]}
              delay={0.1}
            />
            <InfoCard
              icon={Train}
              title="PUBLIC TRANSIT"
              details={[
                'Subway: B, C to 81st Street',
                'Bus: M10, M79, M86',
                'Accessible entrances available',
              ]}
              delay={0.2}
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative floating food - overlapping into next section */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
        className="absolute -right-16 bottom-10 w-44 h-44 md:w-60 md:h-60 hidden lg:block z-30"
      >
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [5, -5, 5] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-8 border-white/30">
            <Image
              src="images/unsplash/burgers.jpeg"
              alt="Burger"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 80]) }}
        className="absolute -left-10 -bottom-20 w-36 h-36 md:w-48 md:h-48 hidden md:block z-30"
      >
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [-3, 3, -3] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-8 border-white/30">
            <Image
              src="images/unsplash/wings-location.jpeg"
              alt="Wings"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function InfoCard({
  icon: Icon,
  title,
  details,
}: {
  icon: typeof Clock
  title: string
  details: string[]
  delay: number
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        y: -5,
        boxShadow: '0 30px 60px -15px rgba(0,0,0,0.15)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative bg-linear-to-br from-white/90 to-festival-cream/40 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-white/50 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left cursor-pointer overflow-hidden transition-all duration-300 hover:border-festival-red/20"
    >
      {/* Background glow effect on hover */}
      <div className="absolute inset-0 bg-linear-to-tr from-festival-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <motion.div
        whileHover={{ scale: 1.1, rotate: 12 }}
        className="relative bg-linear-to-br from-festival-red to-festival-red/80 text-festival-cream p-5 rounded-2xl shrink-0 shadow-lg shadow-festival-red/20"
      >
        <Icon className="w-8 h-8 md:w-10 md:h-10" />
      </motion.div>

      <div className="relative z-10 w-full">
        <h4 className="font-black text-festival-dark text-xl md:text-2xl tracking-tight uppercase leading-none">
          {title}
        </h4>
        <div className="mt-4 sm:mt-5 space-y-2 sm:space-y-3">
          {details.map((detail) => (
            <div
              key={detail}
              className="group/item flex items-center justify-center sm:justify-start gap-3 text-festival-dark/70 transition-colors hover:text-festival-red"
            >
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-festival-red/30 group-hover/item:bg-festival-red group-hover/item:scale-125 transition-all" />
              <span className="text-base md:text-lg font-medium tracking-tight">
                {detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
