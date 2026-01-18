const InfoSection = () => {
  return (
    <section className="info-section text-center">
      <div className="container">
        <div className="section-intro">
          <span className="section-badge">¿Por qué nosotros?</span>
          <h2 className="section-title">La Experiencia Completa</h2>
          <p className="section-description">
            Más que un alojamiento, es tu puerta de entrada a la aventura y el
            descanso
          </p>
        </div>

        <div className="row">
          <div className="col-md-4 info-item">
            <div className="info-icon-wrapper">
              <i className="fas fa-home feature-icon"></i>
            </div>
            <h3>Comodidad Premium</h3>
            <p>
              Cabañas completamente equipadas con cocina moderna, TV cable, agua
              caliente 24/7 y amenidades de alta calidad.
            </p>
            <a href="/pages/precios.html" className="info-link">
              Ver detalles <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <div className="col-md-4 info-item">
            <div className="info-icon-wrapper">
              <i className="fas fa-leaf feature-icon"></i>
            </div>
            <h3>Naturaleza Virgen</h3>
            <p>
              Ubicación privilegiada a orillas del río y a minutos de las
              cascadas más impresionantes de Chile.
            </p>
            <a href="/pages/ubicacion.html" className="info-link">
              Cómo llegar <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <div className="col-md-4 info-item">
            <div className="info-icon-wrapper">
              <i className="fas fa-heart feature-icon"></i>
            </div>
            <h3>Atención Personalizada</h3>
            <p>
              Servicio familiar directo. Te asesoramos para crear la escapada
              perfecta según tus necesidades.
            </p>
            <a href="/pages/contacto.html" className="info-link">
              Contáctanos <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
