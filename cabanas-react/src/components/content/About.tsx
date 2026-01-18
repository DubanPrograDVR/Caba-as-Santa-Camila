const About = () => {
  return (
    <section className="seccion-sobre-nosotros">
      <div className="container">
        <div className="section-intro">
          <span className="section-badge">Nuestra Esencia</span>
          <h2 className="section-title">¿Quiénes Somos?</h2>
          <p className="section-description">
            Una familia apasionada por la naturaleza y el turismo sustentable
          </p>
        </div>

        <div className="about-content">
          <div className="about-image-wrapper">
            <div className="image-decoration"></div>
            <img
              src="/img/Nosotros.jpg"
              alt="Familia Cabañas Santa Camila - Equipo"
              className="about-image"
              loading="lazy"
            />
            <div className="image-badge">
              <i className="fas fa-heart"></i>
              <span>
                Familia
                <br />
                Santa Camila
              </span>
            </div>
          </div>

          <div className="about-info">
            <div className="about-card">
              <div className="card-icon">
                <i className="fas fa-book-open"></i>
              </div>
              <div className="card-content">
                <h3>Nuestra Historia</h3>
                <p>
                  Cabañas Santa Camila nació del sueño de ofrecer a las familias
                  y viajeros un refugio auténtico en la naturaleza. Ubicadas en
                  el corazón del sector El Radal, nuestras cabañas han sido
                  diseñadas para brindar la máxima comodidad mientras te
                  conectas con los paisajes únicos de la Región del Maule.
                </p>
                <div className="card-highlight">
                  <i className="fas fa-quote-left"></i>
                  "Más que cabañas, creamos experiencias memorables"
                </div>
              </div>
            </div>

            <div className="about-card">
              <div className="card-icon">
                <i className="fas fa-medal"></i>
              </div>
              <div className="card-content">
                <h3>¿Por Qué Elegirnos?</h3>
                <div className="benefits-list">
                  <div className="benefit-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Más de 5 años de experiencia en turismo rural</span>
                  </div>
                  <div className="benefit-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Ubicación privilegiada cerca de Siete Tazas</span>
                  </div>
                  <div className="benefit-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Atención personalizada y familiar</span>
                  </div>
                  <div className="benefit-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Instalaciones modernas y confortables</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-card">
              <div className="card-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <div className="card-content">
                <h3>Compromiso con la Naturaleza</h3>
                <p>
                  Creemos en el turismo sustentable. Nuestras instalaciones
                  respetan el entorno natural y promovemos prácticas
                  ecoamigables para preservar la belleza de El Radal para
                  futuras generaciones.
                </p>
                <div className="eco-badges">
                  <div className="eco-badge">
                    <i className="fas fa-recycle"></i>
                    <span>Reciclaje</span>
                  </div>
                  <div className="eco-badge">
                    <i className="fas fa-water"></i>
                    <span>Uso eficiente</span>
                  </div>
                  <div className="eco-badge">
                    <i className="fas fa-tree"></i>
                    <span>Reforestación</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="stat-info">
              <h4>Ubicación Estratégica</h4>
              <p>A minutos del Parque Nacional Radal Siete Tazas</p>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-award"></i>
            </div>
            <div className="stat-info">
              <h4>Calidad Garantizada</h4>
              <p>Instalaciones mantenidas con los más altos estándares</p>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-headset"></i>
            </div>
            <div className="stat-info">
              <h4>Atención 24/7</h4>
              <p>Siempre disponibles para hacer tu estadía perfecta</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
