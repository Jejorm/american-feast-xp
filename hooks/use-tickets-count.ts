import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export function useTicketsCount(initialCount = 1000) {
  const [ticketsSold, setTicketsSold] = useState<number>(initialCount);

  useEffect(() => {
    // 1. Obtener el número inicial al cargar la página
    const fetchInitialCount = async () => {
      const { data, error } = await supabase
        .from('stats')
        .select('tickets_sold')
        .eq('id', 1)
        .single();

      if (error) {
        console.error('Error leyendo el contador de supabase', error.message);
      } else if (data) {
        setTicketsSold(data.tickets_sold);
      }
    };
    fetchInitialCount();

    // 2. Suscripción en tiempo real
    const channel = supabase
      .channel('public-stats')
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'stats' },
        (payload) => {
          // Actualiza el número en vivo cuando cualquier persona en el mundo compra
          if (payload.new && payload.new.tickets_sold !== undefined) {
            setTicketsSold(payload.new.tickets_sold);
          }
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return { ticketsSold, setTicketsSold };
}
