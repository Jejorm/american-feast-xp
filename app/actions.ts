'use server';

import { supabaseAdmin } from '@/lib/supabase-admin';

export async function purchaseTicketAction() {
  // Usamos el cliente singleton pre-inicializado con permisos de administrador
  const { error } = await supabaseAdmin.rpc('increment_tickets');

  if (error) throw new Error('Fallo al actualizar la base de datos');
  return { success: true };
}
