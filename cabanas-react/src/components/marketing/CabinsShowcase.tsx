const CabinsShowcase = () => {
  return (
    <section className="carousel-section text-center" id="galeria">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <i className="fas fa-home"></i>
            Alojamiento Premium
          </span>
          <h2 className="section-title">
            <span className="title-icon">🏡</span>
            Tus Cabañas te Esperan
            <span className="title-accent"></span>
          </h2>
          <p className="section-subtitle">
            <i className="fas fa-heart"></i>
            Cada cabaña cuenta una historia de descanso y conexión con la
            naturaleza
          </p>
        </div>

        <div className="cabanas-showcase">
          <div className="cabana-preview" data-cabin="bosque">
            <div className="cabana-image-wrapper">
              <img
                src="/img/Cabañas.png"
                className="cabana-img"
                alt="Cabaña Bosque - Vista exterior"
                loading="lazy"
              />
            </div>
            <div className="cabana-content">
              <div className="cabana-header">
                <h3 className="cabana-title">
                  <i className="fas fa-tree"></i>
                  Cabaña Bosque
                </h3>
                <div className="availability-status available">
                  <i className="fas fa-check-circle"></i>
                  <span>Disponible</span>
                </div>
              </div>
              <p className="cabana-description">
                Perfecta para familias pequeñas, rodeada de naturaleza
              </p>
              <div className="cabana-features">
                <span className="feature-item">
                  <i className="fas fa-users"></i> 4 personas
                </span>
                <span className="feature-item">
                  <i className="fas fa-water"></i> Vista al río
                </span>
              </div>
              <button className="btn-view-cabin">
                <span>Ver Detalles</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <div className="cabana-preview" data-cabin="rio">
            <div className="cabana-image-wrapper">
              <img
                src="/img/Cabañas_stc.jpg"
                className="cabana-img"
                alt="Cabaña Río - Vista panorámica"
                loading="lazy"
              />
            </div>
            <div className="cabana-content">
              <div className="cabana-header">
                <h3 className="cabana-title">
                  <i className="fas fa-water"></i>
                  Cabaña Río
                </h3>
                <div className="availability-status limited">
                  <i className="fas fa-exclamation-triangle"></i>
                  <span>Pocas fechas</span>
                </div>
              </div>
              <p className="cabana-description">
                Espacio amplio con terraza privada para disfrutar al máximo
              </p>
              <div className="cabana-features">
                <span className="feature-item">
                  <i className="fas fa-users"></i> 6 personas
                </span>
                <span className="feature-item">
                  <i className="fas fa-house-chimney"></i> Terraza privada
                </span>
              </div>
              <button className="btn-view-cabin">
                <span>Ver Detalles</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <div className="cabana-preview" data-cabin="premium">
            <div className="cabana-image-wrapper">
              <img
                src="/img/Imagen_Cabaña_3.jpg"
                className="cabana-img"
                alt="Cabaña Premium - Interior acogedor"
                loading="lazy"
              />
            </div>
            <div className="cabana-content">
              <div className="cabana-header">
                <h3 className="cabana-title">
                  <i className="fas fa-crown"></i>
                  Cabaña Premium
                </h3>
                <div className="availability-status available">
                  <i className="fas fa-check-circle"></i>
                  <span>Disponible</span>
                </div>
              </div>
              <p className="cabana-description">
                Lujo y confort en plena naturaleza, ideal para grupos
              </p>
              <div className="cabana-features">
                <span className="feature-item">
                  <i className="fas fa-users"></i> 8 personas
                </span>
                <span className="feature-item">
                  <i className="fas fa-star"></i> Premium
                </span>
              </div>
              <button className="btn-view-cabin">
                <span>Ver Detalles</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="main-cta">
          <a href="/pages/reserva-rapida.html" className="btn-reserve-now">
            <i className="fas fa-calendar-check"></i>
            Reservar Mi Escapada
          </a>
          <p className="cta-subtitle">
            <i className="fas fa-shield-alt"></i>
            Reserva directa sin comisiones • Atención personalizada garantizada
          </p>
        </div>
      </div>
    </section>
  );
};

export default CabinsShowcase;
