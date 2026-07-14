"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useBooking } from "@/components/booking/booking-provider"

const navLinks = [
  { href: "/", label: "Inicio", icon: "fa-home" },
  { href: "/ubicacion", label: "Ubicación", icon: "fa-map-marker-alt" },
  { href: "/precios", label: "Precios", icon: "fa-tags" },
  { href: "/contacto", label: "Contacto", icon: "fa-envelope" },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { openBooking } = useBooking()

  const isActive = (path: string) => pathname === path

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className="site-header">
      <nav
        className={`main-navbar ${scrolled ? "scrolled" : ""}`}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="navbar-wrapper">

          {/* Brand */}
          <div className="navbar-brand">
            <Link href="/" className="brand-link" aria-label="Cabañas Santa Camila - Volver al inicio">
              <div className="brand-logo-wrap">
                <img
                  className="brand-logo"
                  src="/img/Logo.png"
                  alt="Cabañas Santa Camila"
                  width={52}
                  height={52}
                  loading="eager"
                />
              </div>
              <div className="brand-info">
                <span className="brand-name">Santa Camila</span>
                <span className="brand-tagline">Cabañas &amp; Naturaleza</span>
              </div>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className={`navbar-nav ${isOpen ? "active" : ""}`} id="navbarNav">
            <ul className="nav-list" role="list">
              {navLinks.map(({ href, label, icon }) => (
                <li className="nav-item" key={href}>
                  <Link
                    href={href}
                    className={`nav-link ${isActive(href) ? "nav-link--active" : ""}`}
                    aria-current={isActive(href) ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                  >
                    <i className={`nav-icon fas ${icon}`} aria-hidden="true" />
                    <span className="nav-text">{label}</span>
                    <span className="nav-underline" aria-hidden="true" />
                  </Link>
                </li>
              ))}

              {/* Mobile-only CTA inside menu */}
              <li className="nav-item nav-item--mobile-cta">
                <button
                  type="button"
                  className="cta-button cta-button--mobile"
                  onClick={() => { setIsOpen(false); openBooking() }}
                >
                  <i className="fas fa-calendar-check" aria-hidden="true" />
                  <span>Reservar Ahora</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Desktop CTA */}
          <div className="navbar-cta">
            <button
              type="button"
              className="cta-button"
              onClick={() => openBooking()}
            >
              <i className="fas fa-calendar-check" aria-hidden="true" />
              <span>Reservar</span>
            </button>
          </div>

          {/* Hamburger */}
          <button
            className={`navbar-toggle ${isOpen ? "is-open" : ""}`}
            type="button"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            aria-controls="navbarNav"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="toggle-bar" />
            <span className="toggle-bar" />
            <span className="toggle-bar" />
          </button>
        </div>

        {/* Mobile backdrop */}
        {isOpen && (
          <div
            className="nav-backdrop"
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>
    </header>
  )
}

export default Header
