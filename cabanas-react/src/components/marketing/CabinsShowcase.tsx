import { useState } from "react";

interface CabinsShowcaseProps {
  onBookClick?: () => void;
}

const cabinsData = [
  {
    id: "bosque",
    name: "Cabaña Bosque",
    icon: "fas fa-tree",
    image: "/img/Cabañas.png",
    description: "Perfecta para familias pequeñas, rodeada de naturaleza",
    capacity: 4,
    features: ["Vista al río", "Terraza", "Cocina equipada"],
    price: 65000,
    status: "available" as const,
    highlight: "Más reservada",
  },
  {
    id: "rio",
    name: "Cabaña Río",
    icon: "fas fa-water",
    image: "/img/Cabañas_stc.jpg",
    description: "Espacio amplio con terraza privada para disfrutar al máximo",
    capacity: 6,
    features: ["Terraza privada", "Quincho", "2 baños"],
    price: 85000,
    status: "limited" as const,
    highlight: "Última disponible",
  },
  {
    id: "premium",
    name: "Cabaña Premium",
    icon: "fas fa-crown",
    image: "/img/Imagen_Cabaña_3.jpg",
    description:
      "Lujo y confort en plena naturaleza, ideal para grupos grandes",
    capacity: 8,
    features: ["Jacuzzi", "Vista panorámica", "Premium"],
    price: 120000,
    status: "available" as const,
    highlight: "Exclusiva",
  },
];

const CabinsShowcase = ({ onBookClick }: CabinsShowcaseProps) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "available":
        return {
          label: "Disponible",
          icon: "fas fa-check-circle",
          class: "available",
        };
      case "limited":
        return {
          label: "¡Últimas fechas!",
          icon: "fas fa-fire",
          class: "limited",
        };
      default:
        return { label: "Consultar", icon: "fas fa-clock", class: "pending" };
    }
  };

  return (
    <section className="cabins-section" id="cabanas">
      <div className="cabins-bg-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-leaf leaf-1">🍃</div>
        <div className="decoration-leaf leaf-2">🌿</div>
      </div>

      <div className="container">
        {/* Header mejorado */}
        <div className="cabins-header">
          <div className="header-content">
            <span className="cabins-badge">
              <i className="fas fa-star"></i>
              Nuestras Cabañas
            </span>
            <h2 className="cabins-title">
              Elige Tu <span className="title-highlight">Refugio Perfecto</span>
            </h2>
            <p className="cabins-subtitle">
              Tres experiencias únicas diseñadas para tu descanso. Cada cabaña
              tiene su propia personalidad y encanto.
            </p>
          </div>

          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Cabañas</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">18</span>
              <span className="stat-label">Huéspedes max</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Equipadas</span>
            </div>
          </div>
        </div>

        {/* Grid de cabañas estilo bento */}
        <div className="cabins-bento-grid">
          {cabinsData.map((cabin, index) => (
            <article
              key={cabin.id}
              className={`cabin-card ${index === 0 ? "featured" : ""} ${activeCard === cabin.id ? "active" : ""}`}
              onMouseEnter={() => setActiveCard(cabin.id)}
              onMouseLeave={() => setActiveCard(null)}
              data-cabin={cabin.id}>
              {/* Imagen con overlay */}
              <div className="cabin-visual">
                <img src={cabin.image} alt={cabin.name} loading="lazy" />
                <div className="cabin-overlay">
                  <span className="cabin-highlight">
                    <i className="fas fa-fire-alt"></i>
                    {cabin.highlight}
                  </span>
                </div>

                {/* Precio flotante */}
                <div className="cabin-price-tag">
                  <span className="price-from">Desde</span>
                  <span className="price-value">
                    {formatPrice(cabin.price)}
                  </span>
                  <span className="price-unit">/noche</span>
                </div>
              </div>

              {/* Contenido */}
              <div className="cabin-info">
                <div className="cabin-top">
                  <div className="cabin-name">
                    <i className={cabin.icon}></i>
                    <h3>{cabin.name}</h3>
                  </div>
                  <div
                    className={`cabin-status ${getStatusConfig(cabin.status).class}`}>
                    <i className={getStatusConfig(cabin.status).icon}></i>
                    <span>{getStatusConfig(cabin.status).label}</span>
                  </div>
                </div>

                <p className="cabin-desc">{cabin.description}</p>

                {/* Features como pills */}
                <div className="cabin-features-row">
                  <div className="feature-pill capacity">
                    <i className="fas fa-users"></i>
                    <span>{cabin.capacity} personas</span>
                  </div>
                  {cabin.features.slice(0, 2).map((feature, i) => (
                    <div key={i} className="feature-pill">
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Botón de acción */}
                <button className="cabin-cta" onClick={onBookClick}>
                  <span className="cta-text">Reservar Ahora</span>
                  <span className="cta-icon">
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Final */}
        <div className="cabins-footer">
          <div className="footer-trust">
            <div className="trust-item">
              <i className="fas fa-shield-alt"></i>
              <span>Pago seguro</span>
            </div>
            <div className="trust-item">
              <i className="fas fa-undo"></i>
              <span>Cancelación flexible</span>
            </div>
            <div className="trust-item">
              <i className="fas fa-headset"></i>
              <span>Soporte 24/7</span>
            </div>
          </div>

          <div className="footer-action">
            <p className="action-text">
              <i className="fas fa-question-circle"></i>
              ¿No sabes cuál elegir?
            </p>
            <a
              href="https://wa.me/56982222698"
              className="btn-consult"
              target="_blank"
              rel="noreferrer">
              <i className="fab fa-whatsapp"></i>
              Te ayudamos a decidir
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CabinsShowcase;
