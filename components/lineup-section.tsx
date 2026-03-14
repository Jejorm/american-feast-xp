'use client'

import Autoplay from 'embla-carousel-autoplay'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

// Using the new high-quality unsplash images
const carouselItems = [
  {
    id: 'chicken',
    title: 'FRIED CHICKEN',
    subtitle: 'Crispy & Sizzling',
    image: '/images/unsplash/fried-chicken.jpg',
  },
  {
    id: 'beer',
    title: 'CRAFT BEER',
    subtitle: 'Ice Cold Brews',
    image: '/images/unsplash/craft-beer.jpg',
  },
  {
    id: 'ribs',
    title: 'BBQ RIBS',
    subtitle: 'Smoky Perfection',
    image: '/images/unsplash/bbq-ribs.jpg',
  },
  {
    id: 'mic',
    title: 'LIVE MUSIC',
    subtitle: 'Non-Stop Entertainment',
    image: '/images/unsplash/live-music.jpg',
  },
]

export default function LineupSection() {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const isInView = useInView(titleRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Parallax for background starbursts
  const starburst1Y = useTransform(scrollYProgress, [0, 1], [150, -150])
  const starburst2Y = useTransform(scrollYProgress, [0, 1], [-100, 200])
  const starburst3Rotate = useTransform(scrollYProgress, [0, 1], [0, 180])

  return (
    <section
      id="lineup"
      ref={containerRef}
      className="bg-festival-yellow py-16 md:py-24 relative overflow-hidden"
    >
      {/* Parallax Starbursts */}
      <motion.div
        style={{ y: starburst1Y, rotate: starburst3Rotate }}
        className="absolute top-[5%] left-[2%] w-28 h-28 md:w-40 md:h-40 opacity-25 pointer-events-none z-0"
      >
        <StarburstShape color="#D32F2F" />
      </motion.div>

      <motion.div
        style={{ y: starburst2Y }}
        className="absolute bottom-[15%] right-[5%] w-20 h-20 md:w-32 md:h-32 opacity-20 pointer-events-none z-0"
      >
        <StarburstShape color="#FF9800" />
      </motion.div>

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [50, -100]) }}
        className="absolute top-[45%] right-[2%] w-16 h-16 md:w-24 md:h-24 opacity-15 pointer-events-none z-0"
      >
        <StarburstShape color="#D32F2F" />
      </motion.div>

      {/* Main Content: Header */}
      <div className="container mx-auto px-4 relative z-10">
        <div ref={titleRef} className="relative mb-0">
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
            className="text-center"
          >
            <h2
              className="text-7xl md:text-[10rem] lg:text-[14rem] font-black text-festival-dark leading-[0.85] tracking-tight"
              style={{
                textShadow:
                  '6px 6px 0px rgba(211, 47, 47, 0.3), 12px 12px 0px rgba(211, 47, 47, 0.15)',
              }}
            >
              WHAT&apos;S ON
            </h2>
          </motion.div>

          {/* 3 DAYS starburst badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: 'spring',
              stiffness: 150,
            }}
            className="absolute -top-12 -right-2 md:-top-24 md:-right-12 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 z-20"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <StarburstBadge text="3 DAYS!" />
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 text-center text-festival-dark/80 text-2xl md:text-3xl max-w-2xl mx-auto md:mt-12 font-bold tracking-tight"
          >
            Three days packed with the best food, music, and entertainment
            America has to offer
          </motion.p>
        </div>
      </div>

      {/* ── PREMIUM CAROUSEL ── */}
      <div className="container mx-auto px-4 md:px-8 mt-12 md:mt-20 relative z-10">
        <PremiumCarousel items={carouselItems} />
      </div>
    </section>
  )
}

function PremiumCarousel({ items }: { items: typeof carouselItems }) {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null)
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

  // Handle outside clicks to reset active state on mobile
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('.carousel-card')) {
        setActiveCardIndex(null)
      }
    }

    document.addEventListener('click', handleGlobalClick)
    return () => document.removeEventListener('click', handleGlobalClick)
  }, [])

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {items.map((item, index) => {
          const isActive = activeCardIndex === index

          return (
            <CarouselItem
              key={item.id}
              // Mobile: 1 column (basis-full), Tablet: 2 columns (basis-1/2), Desktop: 3 columns (basis-1/3)
              className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <button
                type="button"
                className="carousel-card relative w-full aspect-4/5 md:aspect-3/4 rounded-3xl overflow-hidden cursor-pointer group shadow-xl border-4 border-festival-cream/20 text-left"
                onClick={(e) => {
                  e.stopPropagation() // Prevent immediate reset from global click
                  setActiveCardIndex(isActive ? null : index)
                }}
                onMouseEnter={() => {
                  // Only apply hover state on desktop (devices that support hover)
                  if (window.matchMedia('(hover: hover)').matches) {
                    setActiveCardIndex(index)
                  }
                }}
                onMouseLeave={() => {
                  if (window.matchMedia('(hover: hover)').matches) {
                    setActiveCardIndex(null)
                  }
                }}
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-cover transition-transform duration-700 ease-out ${
                    isActive ? 'scale-110' : 'scale-100 group-hover:scale-105'
                  }`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Dark Gradient Overlay - Only visible when active */}
                <div
                  className={`absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 z-10 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8">
                  <div
                    className={`transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      isActive
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-8 opacity-0'
                    }`}
                  >
                    <h3
                      className="text-4xl md:text-5xl text-white tracking-wider leading-[1.1] mb-2 drop-shadow-xl"
                      style={{ textShadow: '2px 4px 12px rgba(0,0,0,0.8)' }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-festival-yellow font-bold text-sm md:text-base uppercase tracking-widest transition-all duration-500 delay-100 ${
                        isActive
                          ? 'translate-y-0 opacity-100'
                          : 'translate-y-4 opacity-0'
                      }`}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </button>
            </CarouselItem>
          )
        })}
      </CarouselContent>

      {/* Navigation buttons - Hidden on mobile, visible on tablet+ */}
      <div className="hidden md:block">
        <CarouselPrevious className="bg-festival-cream text-festival-dark border-2 border-festival-dark hover:bg-festival-dark hover:text-festival-cream w-12 h-12 -left-6" />
        <CarouselNext className="bg-festival-cream text-festival-dark border-2 border-festival-dark hover:bg-festival-dark hover:text-festival-cream w-12 h-12 -right-6" />
      </div>
    </Carousel>
  )
}

function StarburstBadge({ text }: { text: string }) {
  return (
    <div className="relative w-full h-full drop-shadow-xl">
      <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
        <path
          d="M50 0 L55 35 L75 8 L60 38 L100 25 L65 45 L100 50 L65 55 L100 75 L60 62 L75 92 L55 65 L50 100 L45 65 L25 92 L40 62 L0 75 L35 55 L0 50 L35 45 L0 25 L40 38 L25 8 L45 35 Z"
          fill="#D32F2F"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="text-festival-cream font-black text-xl md:text-3xl text-center leading-none"
          style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.2)' }}
        >
          {text}
        </span>
      </div>
    </div>
  )
}

function StarburstShape({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
      <path
        d="M50 0 L55 35 L75 8 L60 38 L100 25 L65 45 L100 50 L65 55 L100 75 L60 62 L75 92 L55 65 L50 100 L45 65 L25 92 L40 62 L0 75 L35 55 L0 50 L35 45 L0 25 L40 38 L25 8 L45 35 Z"
        fill={color}
      />
    </svg>
  )
}
