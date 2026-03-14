'use client'

import { useOptimistic, useState, useTransition } from 'react'
import { purchaseTicketAction } from '@/app/actions'
import { useTicketsCount } from '@/hooks/use-tickets-count'
import TicketTracker from './ticket-tracker'
import TicketsSection from './tickets-section'

const MAX_CLICKS = 3

export default function TicketHandler() {
  const { ticketsSold } = useTicketsCount(1000)
  const [clickCount, setClickCount] = useState<number>(0)
  const [, startTransition] = useTransition()

  // useOptimistic toma el estado base y un reducer que define cómo aplicar la actualización optimista
  const [optimisticTicketsSold, addOptimisticTicketsSold] = useOptimistic(
    ticketsSold,
    (state, amount: number) => state + amount,
  )

  const handlePurchase = async () => {
    if (clickCount >= MAX_CLICKS) {
      console.error('Max clicks reached')
      return
    }

    setClickCount((prev) => prev + 1)

    // startTransition le dice a React que esta es una actualización de estado que
    // puede ser interrumpida y que permite a useOptimistic funcionar
    startTransition(async () => {
      // Actualización optimista: Incrementamos el contador localmente de inmediato
      addOptimisticTicketsSold(1)

      try {
        await purchaseTicketAction()
        // En caso de éxito, la suscripción de Supabase eventualmente enviará el valor real,
        // sincronizando cualquier discrepancia si múltiples usuarios compraron a la vez.
      } catch {
        console.error('Error procesando la compra')
        // El estado optimista se descarta automáticamente si la acción falla
        // y el request de servidor falla/termina,
        // regresando al valor base the `ticketsSold`.
        // Sólo necesitamos revertir clickCount:
        setClickCount((prev) => prev - 1)
      }
    })
  }

  const isButtonDisabled = clickCount >= MAX_CLICKS

  return (
    <div>
      <TicketsSection
        handlePurchase={handlePurchase}
        isButtonDisabled={isButtonDisabled}
      />
      <TicketTracker ticketsSold={optimisticTicketsSold} />
    </div>
  )
}
