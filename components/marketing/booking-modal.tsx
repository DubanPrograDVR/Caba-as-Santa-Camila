"use client"

import { useEffect, useState } from "react"
import { crearReserva } from "@/app/actions/reservas"

interface Cabin {
  id: string
  name: string
  icon: string
  capacity: number
  price: number
  available: boolean
}

const cabins: Cabin[] = [
  { id: "bosque", name: "Cabaña Bosque", icon: "fas fa-tree", capacity: 4, price: 65000, available: true },
  { id: "rio", name: "Cabaña Río", icon: "fas fa-water", capacity: 6, price: 85000, available: true },
  { id: "premium", name: "Cabaña Premium", icon: "fas fa-crown", capacity: 8, price: 120000, available: true },
]

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  preselectedCabin?: string
}

const BookingModal = ({ isOpen, onClose, preselectedCabin }: BookingModalProps) => {
  const [step, setStep] = useState(1)
  const [isSaving, setIsSaving] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [formData, setFormData] = useState({
    cabin: preselectedCabin || "",
    checkIn: "",
    checkOut: "",
    guests: 2,
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({ ...prev, cabin: preselectedCabin || prev.cabin }))
      setStep(1)
      setErrorMsg("")
    }
  }, [isOpen, preselectedCabin])

  if (!isOpen) return null

  const selectedCabin = cabins.find((c) => c.id === formData.cabin)

  const calculateNights = () => {
    if (!formData.checkIn || !formData.checkOut) return 0
    const start = new Date(formData.checkIn)
    const end = new Date(formData.checkOut)
    const diff = end.getTime() - start.getTime()
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)))
  }

  const calculateTotal = () => {
    const nights = calculateNights()
    return selectedCabin ? nights * selectedCabin.price : 0
  }

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(price)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedCabin) return

    setIsSaving(true)
    setErrorMsg("")

    const nights = calculateNights()
    const total = calculateTotal()

    // 1. Guardar la reserva en la base de datos Neon
    const result = await crearReserva({
      cabin: selectedCabin.id,
      cabinName: selectedCabin.name,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      nights,
      guests: Number(formData.guests),
      total,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    })

    setIsSaving(false)

    if (!result.ok) {
      setErrorMsg(result.error || "No se pudo guardar la reserva.")
      return
    }

    // 2. Seguir enviando la solicitud por WhatsApp (como antes)
    const message = encodeURIComponent(
      `🏡 *Nueva Solicitud de Reserva* (N° ${result.id})\n\n` +
        `📍 *Cabaña:* ${selectedCabin.name}\n` +
        `📅 *Check-in:* ${formData.checkIn}\n` +
        `📅 *Check-out:* ${formData.checkOut}\n` +
        `🌙 *Noches:* ${nights}\n` +
        `👥 *Huéspedes:* ${formData.guests}\n` +
        `💰 *Total estimado:* ${formatPrice(total)}\n\n` +
        `👤 *Nombre:* ${formData.name}\n` +
        `📧 *Email:* ${formData.email}\n` +
        `📱 *Teléfono:* ${formData.phone}\n\n` +
        `💬 *Mensaje:* ${formData.message || "Sin mensaje adicional"}`,
    )
    window.open(`https://wa.me/56982222698?text=${message}`, "_blank")
    onClose()
  }

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3))
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

  const today = new Date().toISOString().split("T")[0]

  return (
    <div className="booking-modal-overlay" onClick={onClose}>
      <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">
          <i className="fas fa-times"></i>
        </button>

        <div className="modal-header">
          <h2>
            <i className="fas fa-calendar-check"></i>
            Reserva Tu Escapada
          </h2>
          <div className="booking-steps">
            <div className={`step ${step >= 1 ? "active" : ""}`}>
              <span className="step-number">1</span>
              <span className="step-label">Cabaña</span>
            </div>
            <div className={`step ${step >= 2 ? "active" : ""}`}>
              <span className="step-number">2</span>
              <span className="step-label">Fechas</span>
            </div>
            <div className={`step ${step >= 3 ? "active" : ""}`}>
              <span className="step-number">3</span>
              <span className="step-label">Datos</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="modal-step">
              <h3>Selecciona tu cabaña</h3>
              <div className="cabin-selector">
                {cabins.map((cabin) => (
                  <label
                    key={cabin.id}
                    className={`cabin-option ${formData.cabin === cabin.id ? "selected" : ""} ${
                      !cabin.available ? "unavailable" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="cabin"
                      value={cabin.id}
                      checked={formData.cabin === cabin.id}
                      onChange={handleInputChange}
                      disabled={!cabin.available}
                    />
                    <div className="cabin-option-content">
                      <i className={cabin.icon}></i>
                      <h4>{cabin.name}</h4>
                      <div className="cabin-details">
                        <span>
                          <i className="fas fa-users"></i> {cabin.capacity} personas
                        </span>
                        <span className="cabin-price">{formatPrice(cabin.price)}/noche</span>
                      </div>
                      {!cabin.available && <span className="unavailable-badge">No disponible</span>}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="modal-step">
              <h3>Elige tus fechas</h3>
              <div className="date-inputs">
                <div className="form-group">
                  <label>
                    <i className="fas fa-calendar-alt"></i> Check-in
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    min={today}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    <i className="fas fa-calendar-alt"></i> Check-out
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    min={formData.checkIn || today}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    <i className="fas fa-users"></i> Huéspedes
                  </label>
                  <select name="guests" value={formData.guests} onChange={handleInputChange}>
                    {[...Array(selectedCabin?.capacity || 8)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? "persona" : "personas"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {calculateNights() > 0 && selectedCabin && (
                <div className="price-summary">
                  <div className="price-row">
                    <span>
                      {selectedCabin.name} × {calculateNights()} noches
                    </span>
                    <span>{formatPrice(calculateTotal())}</span>
                  </div>
                  <div className="price-row total">
                    <span>Total estimado</span>
                    <span>{formatPrice(calculateTotal())}</span>
                  </div>
                  <p className="price-note">
                    <i className="fas fa-info-circle"></i>
                    Precio final sujeto a disponibilidad
                  </p>
                </div>
              )}
            </div>
          )}

          {step === 3 && (
            <div className="modal-step">
              <h3>Tus datos de contacto</h3>
              <div className="contact-inputs">
                <div className="form-group">
                  <label>
                    <i className="fas fa-user"></i> Nombre completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Juan Pérez"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    <i className="fas fa-envelope"></i> Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="juan@email.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    <i className="fas fa-phone"></i> Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+56 9 1234 5678"
                    required
                  />
                </div>
                <div className="form-group full-width">
                  <label>
                    <i className="fas fa-comment"></i> Mensaje (opcional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="¿Alguna solicitud especial?"
                    rows={3}
                  />
                </div>
              </div>

              <div className="booking-summary">
                <h4>Resumen de tu reserva</h4>
                <div className="summary-details">
                  <p>
                    <strong>{selectedCabin?.name}</strong>
                  </p>
                  <p>
                    {formData.checkIn} → {formData.checkOut}
                  </p>
                  <p>
                    {calculateNights()} noches • {formData.guests} huéspedes
                  </p>
                  <p className="summary-total">
                    Total: <strong>{formatPrice(calculateTotal())}</strong>
                  </p>
                </div>
              </div>

              {errorMsg && (
                <p className="price-note" role="alert" style={{ color: "#b54a35" }}>
                  <i className="fas fa-exclamation-circle"></i> {errorMsg}
                </p>
              )}
            </div>
          )}

          <div className="modal-actions">
            {step > 1 && (
              <button type="button" className="btn-back" onClick={prevStep} disabled={isSaving}>
                <i className="fas fa-arrow-left"></i> Atrás
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                className="btn-next"
                onClick={nextStep}
                disabled={(step === 1 && !formData.cabin) || (step === 2 && calculateNights() <= 0)}
              >
                Siguiente <i className="fas fa-arrow-right"></i>
              </button>
            ) : (
              <button type="submit" className="btn-submit" disabled={isSaving}>
                {isSaving ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Guardando...
                  </>
                ) : (
                  <>
                    <i className="fab fa-whatsapp"></i> Reservar y enviar por WhatsApp
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default BookingModal
