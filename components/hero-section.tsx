'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Calendar, Ticket } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Parallax transforms
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Food image transforms - they scale down, rotate, and move out
  const food1X = useTransform(scrollYProgress, [0, 0.5], [0, -300])
  const food1Y = useTransform(scrollYProgress, [0, 0.5], [0, -100])
  const food1Scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.5])
  const food1Rotate = useTransform(scrollYProgress, [0, 0.5], [0, -45])

  const food2X = useTransform(scrollYProgress, [0, 0.5], [0, 300])
  const food2Y = useTransform(scrollYProgress, [0, 0.5], [0, -150])
  const food2Scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.4])
  const food2Rotate = useTransform(scrollYProgress, [0, 0.5], [0, 30])

  const food3X = useTransform(scrollYProgress, [0, 0.5], [0, -200])
  const food3Y = useTransform(scrollYProgress, [0, 0.5], [0, 200])
  const food3Scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.6])
  const food3Rotate = useTransform(scrollYProgress, [0, 0.5], [0, 20])

  const food4X = useTransform(scrollYProgress, [0, 0.5], [0, 250])
  const food4Y = useTransform(scrollYProgress, [0, 0.5], [0, 150])
  const food4Scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.6])
  const food4Rotate = useTransform(scrollYProgress, [0, 0.5], [0, -25])

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[120vh] bg-festival-red overflow-hidden"
    >
      {/* Background texture overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating food cutouts with scroll-based transforms */}
      <motion.div
        style={{
          x: food1X,
          y: food1Y,
          scale: food1Scale,
          rotate: food1Rotate,
        }}
        className="absolute left-[5%] md:left-[10%] lg:left-[20%] top-24 md:top-36 w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 z-10"
      >
        <FloatingImage
          src="images/unsplash/burger.jpeg"
          alt="Delicious burger"
          delay={0}
        />
      </motion.div>

      <motion.div
        style={{
          x: food2X,
          y: food2Y,
          scale: food2Scale,
          rotate: food2Rotate,
        }}
        className="absolute right-[5%] md:right-[10%] lg:right-[20%] top-48 md:top-28 w-44 h-44 md:w-64 md:h-64 lg:w-72 lg:h-72 z-10"
      >
        <FloatingImage
          src="images/unsplash/bbq-ribs_hero.jpeg"
          alt="BBQ ribs"
          delay={0.2}
        />
      </motion.div>

      <motion.div
        style={{
          x: food3X,
          y: food3Y,
          scale: food3Scale,
          rotate: food3Rotate,
        }}
        className="absolute left-[20%] md:left-[25%] bottom-32 md:bottom-40 w-40 h-40 md:w-56 md:h-56 z-10 hidden md:block"
      >
        <FloatingImage
          src="images/unsplash/hot-dog.jpeg"
          alt="Delicious Festival Hot Dog"
          delay={0.6}
        />
      </motion.div>

      <motion.div
        style={{
          x: food4X,
          y: food4Y,
          scale: food4Scale,
          rotate: food4Rotate,
        }}
        className="absolute right-[20%] md:right-[25%] bottom-20 md:bottom-32 w-36 h-36 md:w-60 md:h-60 z-10 hidden lg:block"
      >
        <FloatingImage
          src="images/unsplash/vegan-food.jpeg"
          alt="Vegan Food"
          delay={0.8}
        />
      </motion.div>

      {/* Main content with parallax */}
      <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 min-h-screen flex flex-col items-center justify-center">
        {/* Date badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ y: titleY, opacity: titleOpacity }}
          className="mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: -3 }}
            className="inline-flex items-center gap-2 bg-festival-orange text-festival-dark px-6 py-3 rounded-full font-bold text-base md:text-lg shadow-2xl border-4 border-festival-dark/10"
          >
            <Calendar className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-sm sm:text-lg md:text-xl lg:text-2xl tracking-wider">
              OCT 12-14, 2026
            </span>
          </motion.div>
        </motion.div>

        {/* Main title with parallax */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ y: titleY, scale: titleScale, opacity: titleOpacity }}
          className="text-center"
        >
          <h1 className="text-6xl sm:text-7xl md:text-9xl lg:text-[11rem] xl:text-[14rem] font-black text-festival-cream leading-[0.85] tracking-tighter">
            <span className="mb-4 md:mb-2 block drop-shadow-[6px_6px_0px_rgba(0,0,0,0.4)] hover:drop-shadow-[8px_8px_0px_rgba(0,0,0,0.5)] transition-all">
              ALL-AMERICAN
            </span>
            <span className="block text-festival-yellow drop-shadow-[8px_8px_0px_rgba(0,0,0,0.4)] hover:drop-shadow-[12px_12px_0px_rgba(0,0,0,0.5)] transition-all">
              FOOD FEST
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            y: titleY,
            opacity: titleOpacity,
            textShadow: '0px 2px 4px rgba(0,0,0,0.6)',
          }}
          className="mt-8 text-white text-xl md:text-2xl max-w-2xl text-center font-semibold"
        >
          The ultimate celebration of American cuisine. Three days of
          mouthwatering BBQ, craft beer, live music, and unforgettable flavors.
        </motion.p>

        {/* CTA Button with extreme hover effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ y: titleY, opacity: titleOpacity }}
          className="mt-12"
        >
          <motion.a
            href="#tickets"
            whileHover={{
              scale: 1.15,
              rotate: -3,
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
            }}
            whileTap={{ scale: 0.95, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="group inline-flex items-center gap-2 sm:gap-3 bg-festival-cream text-festival-red px-10 py-5 md:px-12 md:py-6 rounded-full font-black text-xl md:text-2xl shadow-2xl hover:bg-white cursor-pointer border-4 border-festival-dark/10"
          >
            <Ticket className="w-6 h-6 md:w-7 md:h-7" />
            <span>GRAB TICKETS</span>
            <motion.span
              className="hidden sm:inline-block text-2xl"
              animate={{ x: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>

        {/* Decorative rotating stars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-16 right-8 md:top-28 md:right-[20%]"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
          >
            <StarBurst className="w-16 h-16 md:w-24 md:h-24 text-festival-yellow" />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-32 left-8 md:bottom-40 md:left-[18%]"
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          >
            <StarBurst className="w-14 h-14 md:w-20 md:h-20 text-festival-orange" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-festival-cream/50 flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-3 bg-festival-cream/80 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

function FloatingImage({
  src,
  alt,
  delay,
}: {
  src: string
  alt: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, delay }}
      className="relative w-full h-full"
    >
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 4 + delay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-full h-full"
      >
        <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-8 border-white/20 group hover:border-festival-yellow/50 transition-colors">
          <Image
            src={src}
            alt={alt}
            fill
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Shine effect */}
          <div className="absolute inset-0 bg-linear-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </motion.div>
    </motion.div>
  )
}

function StarBurst({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M50 0 L54 42 L96 35 L58 50 L96 65 L54 58 L50 100 L46 58 L4 65 L42 50 L4 35 L46 42 Z" />
    </svg>
  )
}
