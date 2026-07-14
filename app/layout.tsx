import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import "@/styles/styles.scss"
import { BookingProvider } from "@/components/booking/booking-provider"

export const metadata: Metadata = {
  title: "Cabañas Santa Camila | Tu refugio natural en Radal Siete Tazas",
  description:
    "Cabañas totalmente equipadas en El Radal, Molina, a minutos del Parque Nacional Radal Siete Tazas. Desconéctate y reconecta con la naturaleza. Reserva directa sin comisiones.",
  generator: "v0.app",
  keywords: [
    "cabañas",
    "Radal Siete Tazas",
    "Molina",
    "Maule",
    "turismo",
    "naturaleza",
    "alojamiento",
  ],
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#70866b",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" style={{ backgroundColor: "#f8f6f2" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          referrerPolicy="no-referrer"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <BookingProvider>{children}</BookingProvider>
        <Analytics />
      </body>
    </html>
  )
}
