"use client"

import { useBooking } from "@/components/booking/booking-provider"

interface ReservarButtonProps {
  className?: string
  cabin?: string
  children: React.ReactNode
}

export default function ReservarButton({ className, cabin, children }: ReservarButtonProps) {
  const { openBooking } = useBooking()
  return (
    <button className={className} onClick={() => openBooking(cabin)} type="button">
      {children}
    </button>
  )
}
