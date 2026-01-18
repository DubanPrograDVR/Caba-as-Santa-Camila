const SocialProof = () => {
  return (
    <section className="social-proof-section">
      <div className="container">
        <div className="stats-wrapper">
          <div className="trust-metrics">
            <div className="metric">
              <div className="metric-icon">
                <i className="fas fa-calendar-check"></i>
              </div>
              <span className="metric-number" data-target="5">
                0
              </span>
              <span className="metric-plus">+</span>
              <span className="metric-label">Años de Experiencia</span>
            </div>
            <div className="metric">
              <div className="metric-icon">
                <i className="fas fa-users"></i>
              </div>
              <span className="metric-number" data-target="200">
                0
              </span>
              <span className="metric-plus">+</span>
              <span className="metric-label">Familias Felices</span>
            </div>
            <div className="metric">
              <div className="metric-icon">
                <i className="fas fa-star"></i>
              </div>
              <span className="metric-number" data-target="4.9">
                0
              </span>
              <span className="metric-label">Calificación Promedio</span>
            </div>
            <div className="metric">
              <div className="metric-icon">
                <i className="fas fa-home"></i>
              </div>
              <span className="metric-number" data-target="100">
                0
              </span>
              <span className="metric-plus">%</span>
              <span className="metric-label">Satisfacción</span>
            </div>
          </div>
        </div>

        <div className="testimonios-section">
          <div className="section-intro">
            <span className="section-badge">Testimonios</span>
            <h2 className="section-title">Experiencias Reales</h2>
            <p className="section-description">
              Lee lo que nuestros huéspedes dicen sobre su estadía
            </p>
          </div>

          <div className="testimonios-grid">
            <div className="testimonio-card">
              <div className="testimonio-rating">★★★★★</div>
              <p className="testimonio-text">
                "Increíble experiencia familiar. Los niños no querían irse del
                río y nosotros tampoco de la tranquilidad. ¡Volveremos sin
                dudas!"
              </p>
              <div className="testimonio-footer">
                <div className="testimonio-author">
                  <div className="author-avatar">
                    <i className="fas fa-user-circle"></i>
                  </div>
                  <div className="author-info">
                    <h4>Familia González</h4>
                    <span>Santiago • Enero 2025</span>
                  </div>
                </div>
                <div className="verified-badge">
                  <i className="fas fa-check-circle"></i> Verificado
                </div>
              </div>
            </div>

            <div className="testimonio-card featured">
              <div className="featured-label">⭐ Destacado</div>
              <div className="testimonio-rating">★★★★★</div>
              <p className="testimonio-text">
                "La cabaña tenía todo lo necesario. Despertarse con el sonido
                del río es una experiencia que no se paga con nada. Atención
                impecable."
              </p>
              <div className="testimonio-footer">
                <div className="testimonio-author">
                  <div className="author-avatar">
                    <i className="fas fa-user-circle"></i>
                  </div>
                  <div className="author-info">
                    <h4>María & Carlos</h4>
                    <span>Valparaíso • Diciembre 2024</span>
                  </div>
                </div>
                <div className="verified-badge">
                  <i className="fas fa-check-circle"></i> Verificado
                </div>
              </div>
            </div>

            <div className="testimonio-card">
              <div className="testimonio-rating">★★★★★</div>
              <p className="testimonio-text">
                "Perfecta ubicación para conocer Siete Tazas. Las cabañas súper
                limpias y la atención de primera. Recomendado 100%."
              </p>
              <div className="testimonio-footer">
                <div className="testimonio-author">
                  <div className="author-avatar">
                    <i className="fas fa-user-circle"></i>
                  </div>
                  <div className="author-info">
                    <h4>Los Aventureros</h4>
                    <span>Concepción • Febrero 2025</span>
                  </div>
                </div>
                <div className="verified-badge">
                  <i className="fas fa-check-circle"></i> Verificado
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
