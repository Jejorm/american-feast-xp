'use client'

import { motion, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'

export default function TicketTracker({
  ticketsSold,
}: {
  ticketsSold: number
}) {
  // Simulating the number of tickets sold
  const count = useSpring(0, {
    mass: 1,
    stiffness: 85,
    damping: 20,
  })

  // Format number
  const rounded = useTransform(count, (latest) =>
    Math.floor(latest).toLocaleString(),
  )

  useEffect(() => {
    count.set(ticketsSold)
  }, [ticketsSold, count])

  return (
    <section className="py-20 bg-festival-yellow border-t-8 border-festival-dark">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block relative"
        >
          {/* Badge Background */}
          <div className="absolute inset-0 bg-festival-orange rotate-2 rounded-4xl shadow-xl" />
          <div className="relative bg-festival-dark text-festival-cream px-10 py-8 md:px-16 md:py-12 rounded-4xl -rotate-2 border-4 border-festival-cream shadow-2xl">
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-festival-yellow mb-4">
              Tickets Sold So Far
            </h3>
            <motion.div
              className="text-6xl md:text-8xl font-black tracking-tighter"
              style={{
                textShadow: '0px 6px 0px rgba(255,152,0,0.5)',
              }}
            >
              <motion.span>{rounded}</motion.span>
            </motion.div>
            <p className="mt-4 text-festival-cream/70 text-lg uppercase tracking-wider font-semibold">
              Join the biggest food celebration of the year!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
