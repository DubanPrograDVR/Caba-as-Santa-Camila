import Header from "../../components/home/Header";
import Footer from "../../components/layout/Footer";
import FloatingActions from "../../components/marketing/FloatingActions";

interface PreciosProps {
  onBookClick: () => void;
}

const Precios = ({ onBookClick }: PreciosProps) => {
  const cabins = [
    {
      name: "Cabaña Estándar",
      capacity: "2-3 personas",
      lowSeason: 50000,
      highSeason: 70000,
      features: [
        "1 Cama matrimonial cómoda",
        "Cocina completamente equipada",
        "Baño privado con agua caliente",
        "Televisión por cable",
        "Ropa de cama y toallas",
        "Estacionamiento privado",
      ],
    },
    {
      name: "Cabaña Familiar",
      capacity: "4-5 personas",
      lowSeason: 75000,
      highSeason: 95000,
      features: [
        "2 Habitaciones independientes",
        "Living comedor amplio",
        "Terraza con vista al río",
        "Cocina con refrigerador grande",
        "2 Televisores",
        "Área de juegos para niños",
      ],
    },
    {
      name: "Cabaña Premium",
      capacity: "6 personas",
      lowSeason: 90000,
      highSeason: 120000,
      features: [
        "3 Habitaciones (2 matrimoniales + 1 individual)",
        "Acceso directo a piscina privada",
        "Parrilla y área de asado",
        "Terraza panorámica",
        "WiFi de alta velocidad",
        "Servicio de limpieza incluido",
      ],
      featured: true,
    },
  ];

  const promotions = [
    {
      icon: "fas fa-calendar-week",
      title: "Semana Completa",
      description: "7 noches o más",
      discount: "15%",
    },
    {
      icon: "fas fa-users",
      title: "Grupo Familiar",
      description: "3 cabañas o más",
      discount: "10%",
    },
    {
      icon: "fas fa-heart",
      title: "Cliente Frecuente",
      description: "Tercera visita",
      discount: "20%",
    },
  ];

  const additionalServices = [
    {
      icon: "fas fa-utensils",
      title: "Desayuno Continental",
      description: "Pan casero, mermeladas, café, té, jugos naturales",
      price: "$8.000",
      unit: "por persona",
    },
    {
      icon: "fas fa-fire",
      title: "Pack Asado",
      description: "Carne, chorizo, carbón, ensaladas",
      price: "$15.000",
      unit: "por persona",
    },
    {
      icon: "fas fa-route",
      title: "Guía Turístico",
      description: "Tour por Siete Tazas y alrededores",
      price: "$25.000",
      unit: "por grupo",
    },
  ];

  const includedFeatures = [
    { icon: "fas fa-bed", title: "Alojamiento", description: "Cabaña completamente amoblada" },
    { icon: "fas fa-tshirt", title: "Ropa de Cama", description: "Sábanas y toallas incluidas" },
    { icon: "fas fa-parking", title: "Estacionamiento", description: "Un vehículo por cabaña" },
    { icon: "fas fa-wifi", title: "WiFi", description: "Internet de alta velocidad" },
    { icon: "fas fa-tree", title: "Entorno Natural", description: "Acceso a senderos y río" },
    { icon: "fas fa-phone", title: "Atención 24/7", description: "Soporte durante tu estadía" },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="precios-page">
      <Header />

      {/* Hero Section */}
      <section className="precios-hero">
        <div className="precios-hero__overlay"></div>
        <div className="precios-hero__content">
          <span className="precios-hero__badge">
            <i className="fas fa-tag" aria-hidden="true"></i>
            Tarifas 2025
          </span>
          <h1 className="precios-hero__title">
            Tarifas Transparentes
            <span className="precios-hero__title-accent">Sin Sorpresas</span>
          </h1>
          <p className="precios-hero__description">
            Descubre nuestras tarifas 2025 para Cabañas Santa Camila. 
            Precios justos y transparentes para tu estadía en El Radal, Molina. 
            Reserva directa sin comisiones adicionales.
          </p>
          <button className="precios-hero__cta" onClick={onBookClick}>
            <i className="fas fa-calendar-check" aria-hidden="true"></i>
            Reservar Ahora
          </button>
        </div>
      </section>

      <main className="precios-main">
        {/* Info Box */}
        <section className="precios-info">
          <div className="precios-info__box">
            <h2 className="precios-info__title">
              <i className="fas fa-info-circle" aria-hidden="true"></i>
              Información Importante
            </h2>
            <ul className="precios-info__list">
              <li>
                <i className="fas fa-clock" aria-hidden="true"></i>
                <strong>Check-in:</strong> 15:00 hrs | <strong>Check-out:</strong> 12:00 hrs
              </li>
              <li>
                <i className="fas fa-sun" aria-hidden="true"></i>
                <strong>Temporada Alta:</strong> Diciembre, Enero, Febrero, Semana Santa, Fiestas Patrias
              </li>
              <li>
                <i className="fas fa-leaf" aria-hidden="true"></i>
                <strong>Temporada Baja:</strong> Marzo a Noviembre (excepto fechas especiales)
              </li>
              <li>
                <i className="fas fa-credit-card" aria-hidden="true"></i>
                <strong>Pago:</strong> 50% reserva, 50% al llegar
              </li>
              <li>
                <i className="fas fa-shield-alt" aria-hidden="true"></i>
                <strong>Cancelación gratuita</strong> hasta 48 horas antes
              </li>
            </ul>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="precios-cards">
          <h2 className="precios-cards__title">Nuestras Cabañas</h2>
          <div className="precios-cards__grid">
            {cabins.map((cabin, index) => (
              <article 
                key={index} 
                className={`precios-card ${cabin.featured ? "precios-card--featured" : ""}`}
              >
                {cabin.featured && (
                  <span className="precios-card__badge">
                    <i className="fas fa-star" aria-hidden="true"></i>
                    Más Popular
                  </span>
                )}
                <header className="precios-card__header">
                  <h3 className="precios-card__name">{cabin.name}</h3>
                  <p className="precios-card__capacity">
                    <i className="fas fa-users" aria-hidden="true"></i>
                    {cabin.capacity}
                  </p>
                </header>

                <div className="precios-card__pricing">
                  <div className="precios-card__season precios-card__season--low">
                    <span className="precios-card__season-label">Temporada Baja</span>
                    <span className="precios-card__price">{formatPrice(cabin.lowSeason)}</span>
                    <span className="precios-card__unit">por noche</span>
                  </div>
                  <div className="precios-card__season precios-card__season--high">
                    <span className="precios-card__season-label">Temporada Alta</span>
                    <span className="precios-card__price">{formatPrice(cabin.highSeason)}</span>
                    <span className="precios-card__unit">por noche</span>
                  </div>
                </div>

                <ul className="precios-card__features">
                  {cabin.features.map((feature, i) => (
                    <li key={i}>
                      <i className="fas fa-check" aria-hidden="true"></i>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="precios-card__cta" onClick={onBookClick}>
                  Reservar Esta Cabaña
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* Promotions */}
        <section className="precios-promos">
          <h2 className="precios-promos__title">
            <i className="fas fa-gift" aria-hidden="true"></i>
            Promociones Especiales 2025
          </h2>
          <div className="precios-promos__grid">
            {promotions.map((promo, index) => (
              <article key={index} className="promo-card">
                <div className="promo-card__icon">
                  <i className={promo.icon} aria-hidden="true"></i>
                </div>
                <h3 className="promo-card__title">{promo.title}</h3>
                <p className="promo-card__description">{promo.description}</p>
                <span className="promo-card__discount">{promo.discount} OFF</span>
              </article>
            ))}
          </div>
          <p className="precios-promos__disclaimer">
            * Promociones no acumulables. Válidas para reservas directas hasta diciembre 2025.
          </p>
        </section>

        {/* Additional Services */}
        <section className="precios-services">
          <h2 className="precios-services__title">Servicios Adicionales</h2>
          <div className="precios-services__grid">
            {additionalServices.map((service, index) => (
              <article key={index} className="service-card">
                <div className="service-card__icon">
                  <i className={service.icon} aria-hidden="true"></i>
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">{service.description}</p>
                <div className="service-card__price">
                  <span className="service-card__amount">{service.price}</span>
                  <span className="service-card__unit">{service.unit}</span>
                </div>
              </article>
            ))}
          </div>
          <p className="precios-services__note">
            Servicios sujetos a disponibilidad. Solicitar al momento de la reserva.
          </p>
        </section>

        {/* Policies */}
        <section className="precios-policies">
          <h2 className="precios-policies__title">
            <i className="fas fa-file-contract" aria-hidden="true"></i>
            Políticas de Reserva y Pago
          </h2>
          <div className="precios-policies__grid">
            <article className="policy-card">
              <h3 className="policy-card__title">
                <i className="fas fa-credit-card" aria-hidden="true"></i>
                Formas de Pago
              </h3>
              <ul className="policy-card__list">
                <li>Efectivo (descuento 5%)</li>
                <li>Transferencia bancaria</li>
                <li>Tarjetas de crédito/débito</li>
                <li>Pago con Khipu</li>
              </ul>
            </article>

            <article className="policy-card">
              <h3 className="policy-card__title">
                <i className="fas fa-calendar-alt" aria-hidden="true"></i>
                Políticas de Cancelación
              </h3>
              <ul className="policy-card__list">
                <li>Gratuita hasta 48h antes</li>
                <li>24-48h: 50% del total</li>
                <li>Menos de 24h: 100% del total</li>
                <li>Fuerza mayor: reembolso completo</li>
              </ul>
            </article>

            <article className="policy-card">
              <h3 className="policy-card__title">
                <i className="fas fa-shield-alt" aria-hidden="true"></i>
                Garantías
              </h3>
              <ul className="policy-card__list">
                <li>Cabaña disponible garantizada</li>
                <li>Limpieza y desinfección</li>
                <li>Cambio sin costo por problemas</li>
                <li>Atención 24/7 durante la estadía</li>
              </ul>
            </article>
          </div>
        </section>

        {/* What's Included */}
        <section className="precios-included">
          <h2 className="precios-included__title">
            <i className="fas fa-check-circle" aria-hidden="true"></i>
            ¿Qué Incluye Nuestro Precio?
          </h2>
          <div className="precios-included__grid">
            {includedFeatures.map((feature, index) => (
              <article key={index} className="included-card">
                <div className="included-card__icon">
                  <i className={feature.icon} aria-hidden="true"></i>
                </div>
                <h3 className="included-card__title">{feature.title}</h3>
                <p className="included-card__description">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="precios-cta">
          <div className="precios-cta__content">
            <h2 className="precios-cta__title">¿Tienes alguna duda sobre nuestras tarifas?</h2>
            <p className="precios-cta__text">
              Contáctanos directamente para obtener información personalizada sobre 
              descuentos, disponibilidad y promociones especiales.
            </p>
            <div className="precios-cta__buttons">
              <button className="precios-cta__btn precios-cta__btn--primary" onClick={onBookClick}>
                <i className="fas fa-calendar-check" aria-hidden="true"></i>
                Verificar Disponibilidad
              </button>
              <a
                href="https://wa.me/56982222698?text=Hola,%20me%20gustaría%20información%20sobre%20precios%20y%20disponibilidad"
                className="precios-cta__btn precios-cta__btn--whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp" aria-hidden="true"></i>
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <FloatingActions onBookClick={onBookClick} />
      <Footer />
    </div>
  );
};

export default Precios;
