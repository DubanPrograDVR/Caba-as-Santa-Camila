"use client"

import { createContext, useCallback, useContext, useMemo, useState } from "react"
import BookingModal from "@/components/marketing/booking-modal"

interface BookingContextValue {
  isOpen: boolean
  preselectedCabin?: string
  openBooking: (cabin?: string) => void
  closeBooking: () => void
}

const BookingContext = createContext<BookingContextValue | null>(null)

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [preselectedCabin, setPreselectedCabin] = useState<string | undefined>(undefined)

  const openBooking = useCallback((cabin?: string) => {
    setPreselectedCabin(cabin)
    setIsOpen(true)
  }, [])

  const closeBooking = useCallback(() => setIsOpen(false), [])

  const value = useMemo(
    () => ({ isOpen, preselectedCabin, openBooking, closeBooking }),
    [isOpen, preselectedCabin, openBooking, closeBooking],
  )

  return (
    <BookingContext.Provider value={value}>
      {children}
      <BookingModal isOpen={isOpen} onClose={closeBooking} preselectedCabin={preselectedCabin} />
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error("useBooking debe usarse dentro de BookingProvider")
  return ctx
}
