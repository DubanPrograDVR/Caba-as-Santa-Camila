"use server"

import { sql } from "@/lib/db"

export interface ReservaInput {
  cabin: string
  cabinName: string
  checkIn: string
  checkOut: string
  nights: number
  guests: number
  total: number
  name: string
  email: string
  phone: string
  message?: string
}

export interface ReservaResult {
  ok: boolean
  id?: number
  error?: string
}

export async function crearReserva(data: ReservaInput): Promise<ReservaResult> {
  // Validación básica en el servidor
  if (
    !data.cabin ||
    !data.checkIn ||
    !data.checkOut ||
    !data.name?.trim() ||
    !data.email?.trim() ||
    !data.phone?.trim()
  ) {
    return { ok: false, error: "Faltan datos obligatorios para la reserva." }
  }

  if (new Date(data.checkOut) <= new Date(data.checkIn)) {
    return { ok: false, error: "La fecha de salida debe ser posterior a la de llegada." }
  }

  try {
    const rows = await sql`
      INSERT INTO reservas
        (cabin, cabin_name, check_in, check_out, nights, guests, total, name, email, phone, message)
      VALUES
        (${data.cabin}, ${data.cabinName}, ${data.checkIn}, ${data.checkOut},
         ${data.nights}, ${data.guests}, ${data.total}, ${data.name.trim()},
         ${data.email.trim()}, ${data.phone.trim()}, ${data.message?.trim() || null})
      RETURNING id
    `
    return { ok: true, id: rows[0].id as number }
  } catch (error) {
    console.log("[v0] Error al crear reserva:", error)
    return { ok: false, error: "No se pudo guardar la reserva. Intenta nuevamente." }
  }
}
