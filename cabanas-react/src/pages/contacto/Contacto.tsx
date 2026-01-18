import { useState, FormEvent } from "react";
import Header from "../../components/home/Header";
import Footer from "../../components/layout/Footer";
import FloatingActions from "../../components/marketing/FloatingActions";

interface ContactoProps {
  onBookClick: () => void;
}

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  fechas: string;
  personas: string;
  mensaje: string;
  acepto: boolean;
}

const Contacto = ({ onBookClick }: ContactoProps) => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    fechas: "",
    personas: "",
    mensaje: "",
    acepto: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Generate WhatsApp message
      const message = `Hola, me gustaría hacer una consulta:
- Nombre: ${formData.nombre}
- Email: ${formData.email}
- Teléfono: ${formData.telefono || "No proporcionado"}
- Fechas: ${formData.fechas || "Por definir"}
- Personas: ${formData.personas || "Por definir"}
- Mensaje: ${formData.mensaje}`;

      window.open(
        `https://wa.me/56982222698?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    }, 1000);
  };

  const benefits = [
    {
      icon: "fas fa-tag",
      title: "Mejores Precios",
      description: "Sin comisiones de terceros",
    },
    {
      icon: "fas fa-clock",
      title: "Respuesta Rápida",
      description: "Confirmación inmediata",
    },
    {
      icon: "fas fa-heart",
      title: "Atención Personal",
      description: "Trato directo con los dueños",
    },
  ];

  return (
    <div className="contacto-page">
      <Header />

      {/* Hero Section */}
      <section className="contacto-hero">
        <div className="contacto-hero__overlay"></div>
        <div className="contacto-hero__content">
          <span className="contacto-hero__badge">
            <i className="fas fa-envelope" aria-hidden="true"></i>
            Contacto Directo
          </span>
          <h1 className="contacto-hero__title">
            Reserva Tu Estadía
            <span className="contacto-hero__title-accent">en Cabañas Santa Camila</span>
          </h1>
          <p className="contacto-hero__description">
            ¿Listo para vivir una experiencia única en la naturaleza? 
            Contáctanos para reservar tu cabaña en El Radal, Molina. 
            Respuesta rápida garantizada y atención personalizada.
          </p>
          <a href="/precios" className="contacto-hero__cta">
            <i className="fas fa-tags" aria-hidden="true"></i>
            Ver Nuestras Tarifas
          </a>
        </div>
      </section>

      <main className="contacto-main">
        {/* Contact Info Cards */}
        <section className="contacto-info">
          <h2 className="contacto-info__title">¡Contáctanos Ahora!</h2>
          
          <div className="contacto-info__cards">
            <article className="contact-card">
              <div className="contact-card__icon">
                <i className="fas fa-phone" aria-hidden="true"></i>
              </div>
              <h3 className="contact-card__title">Teléfono / WhatsApp</h3>
              <a href="tel:+56982222698" className="contact-card__link">
                +56 9 8222 2698
              </a>
              <p className="contact-card__note">Disponible 24/7 para emergencias</p>
            </article>

            <article className="contact-card">
              <div className="contact-card__icon">
                <i className="fas fa-envelope" aria-hidden="true"></i>
              </div>
              <h3 className="contact-card__title">Email</h3>
              <a href="mailto:reservas@cabanassantacamila.cl" className="contact-card__link">
                reservas@cabanassantacamila.cl
              </a>
              <p className="contact-card__note">Respuesta en menos de 2 horas</p>
            </article>
          </div>

          {/* WhatsApp CTA */}
          <div className="contacto-whatsapp">
            <h3 className="contacto-whatsapp__title">
              <i className="fab fa-whatsapp" aria-hidden="true"></i>
              Reserva por WhatsApp
            </h3>
            <p className="contacto-whatsapp__text">¡La forma más rápida de reservar!</p>
            <a
              href="https://wa.me/56982222698?text=Hola,%20me%20gustaría%20reservar%20una%20cabaña%20en%20Santa%20Camila"
              className="contacto-whatsapp__btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp" aria-hidden="true"></i>
              Chatear por WhatsApp
            </a>
          </div>
        </section>

        {/* Benefits */}
        <section className="contacto-benefits">
          <h3 className="contacto-benefits__title">¿Por qué reservar directo con nosotros?</h3>
          <div className="contacto-benefits__grid">
            {benefits.map((benefit, index) => (
              <article key={index} className="benefit-card">
                <div className="benefit-card__icon">
                  <i className={benefit.icon} aria-hidden="true"></i>
                </div>
                <h4 className="benefit-card__title">{benefit.title}</h4>
                <p className="benefit-card__description">{benefit.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="contacto-form-section">
          <h2 className="contacto-form-section__title">Formulario de Consultas y Reservas</h2>
          <p className="contacto-form-section__description">
            Completa el formulario y nos pondremos en contacto contigo a la brevedad. 
            Todos los campos marcados con * son obligatorios.
          </p>

          {submitSuccess ? (
            <div className="contacto-success">
              <div className="contacto-success__icon">
                <i className="fas fa-check-circle" aria-hidden="true"></i>
              </div>
              <h3 className="contacto-success__title">¡Mensaje Enviado!</h3>
              <p className="contacto-success__text">
                Gracias por contactarnos. Te hemos redirigido a WhatsApp para una respuesta más rápida.
              </p>
              <button 
                className="contacto-success__btn"
                onClick={() => setSubmitSuccess(false)}
              >
                Enviar Otra Consulta
              </button>
            </div>
          ) : (
            <form className="contacto-form" onSubmit={handleSubmit}>
              <div className="contacto-form__group">
                <label htmlFor="nombre" className="contacto-form__label">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="contacto-form__input"
                  placeholder="Tu nombre completo"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="contacto-form__group">
                <label htmlFor="email" className="contacto-form__label">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contacto-form__input"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="contacto-form__row">
                <div className="contacto-form__group">
                  <label htmlFor="telefono" className="contacto-form__label">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    className="contacto-form__input"
                    placeholder="+56 9 1234 5678"
                    value={formData.telefono}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="contacto-form__group">
                  <label htmlFor="personas" className="contacto-form__label">
                    Número de Personas
                  </label>
                  <select
                    id="personas"
                    name="personas"
                    className="contacto-form__select"
                    value={formData.personas}
                    onChange={handleInputChange}
                  >
                    <option value="">Selecciona...</option>
                    <option value="1-2">1-2 personas</option>
                    <option value="3-4">3-4 personas</option>
                    <option value="5-6">5-6 personas</option>
                    <option value="7+">7 o más personas</option>
                  </select>
                </div>
              </div>

              <div className="contacto-form__group">
                <label htmlFor="fechas" className="contacto-form__label">
                  Fechas de Interés
                </label>
                <input
                  type="text"
                  id="fechas"
                  name="fechas"
                  className="contacto-form__input"
                  placeholder="Ej: Del 15 al 20 de marzo, 2025"
                  value={formData.fechas}
                  onChange={handleInputChange}
                />
              </div>

              <div className="contacto-form__group">
                <label htmlFor="mensaje" className="contacto-form__label">
                  Mensaje o Consulta *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  className="contacto-form__textarea"
                  placeholder="Cuéntanos sobre tu estadía ideal, consultas específicas, o cualquier requerimiento especial..."
                  rows={6}
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <div className="contacto-form__group contacto-form__group--checkbox">
                <label className="contacto-form__checkbox-label">
                  <input
                    type="checkbox"
                    name="acepto"
                    checked={formData.acepto}
                    onChange={handleInputChange}
                    required
                  />
                  <span>
                    Acepto la <a href="#">política de privacidad</a> y autorizo el tratamiento 
                    de mis datos para fines de contacto y reserva. *
                  </span>
                </label>
              </div>

              <button 
                type="submit" 
                className="contacto-form__submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin" aria-hidden="true"></i>
                    Enviando...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane" aria-hidden="true"></i>
                    Enviar Consulta
                  </>
                )}
              </button>

              <p className="contacto-form__security">
                <i className="fas fa-shield-alt" aria-hidden="true"></i>
                Tus datos están seguros. No compartimos información personal con terceros.
              </p>
            </form>
          )}
        </section>
      </main>

      <FloatingActions onBookClick={onBookClick} />
      <Footer />
    </div>
  );
};

export default Contacto;
