"use server"

import { sql } from "@/lib/db"

interface ReservaInput {
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
  message: string
}

interface ReservaResult {
  ok: boolean
  id?: number
  error?: string
}

export async function crearReserva(data: ReservaInput): Promise<ReservaResult> {
  // Validación básica en el servidor
  if (!data.cabin || !data.checkIn || !data.checkOut) {
    return { ok: false, error: "Faltan datos de la cabaña o las fechas." }
  }
  if (!data.name.trim() || !data.email.trim() || !data.phone.trim()) {
    return { ok: false, error: "Nombre, email y teléfono son obligatorios." }
  }
  if (data.nights <= 0) {
    return { ok: false, error: "La fecha de salida debe ser posterior a la de entrada." }
  }

  try {
    const rows = await sql`
      INSERT INTO reservas (
        cabin, cabin_name, check_in, check_out, nights, guests,
        total, name, email, phone, message, status
      ) VALUES (
        ${data.cabin}, ${data.cabinName}, ${data.checkIn}, ${data.checkOut},
        ${data.nights}, ${data.guests}, ${data.total}, ${data.name.trim()},
        ${data.email.trim()}, ${data.phone.trim()}, ${data.message?.trim() || null}, 'pendiente'
      )
      RETURNING id
    `

    const id = rows[0]?.id as number
    return { ok: true, id }
  } catch (error) {
    console.log("[v0] Error al crear reserva:", error instanceof Error ? error.message : error)
    return { ok: false, error: "Ocurrió un error al guardar la reserva. Intenta nuevamente." }
  }
}
