const Attractions = () => {
  return (
    <section className="attractions-section">
      <div className="container">
        <div className="section-intro">
          <span className="section-badge">🏞️ Naturaleza Prístina</span>
          <h2 className="section-title">Atractivos Naturales Cercanos</h2>
          <p className="section-description">
            Explora las maravillas naturales que rodean Cabañas Santa Camila.
            <br />
            Acceso directo a los paisajes más espectaculares de la Región del
            Maule.
          </p>
        </div>

        <div className="attractions-grid">
          <div className="attraction-card featured">
            <div className="attraction-image">
              <div className="attraction-overlay"></div>
              <div className="attraction-icon">
                <i className="fa-solid fa-leaf"></i>
              </div>
              <div className="attraction-badge">Principal</div>
            </div>
            <div className="attraction-content">
              <h3 className="attraction-title">Naturaleza Virgen</h3>
              <p className="attraction-description">
                Bosques nativos, flora endémica y fauna silvestre en su hábitat
                natural. Senderos para trekking y caminatas ecológicas.
              </p>
              <div className="attraction-meta">
                <span className="meta-item">
                  <i className="fas fa-walking"></i> 0 min
                </span>
                <span className="meta-item">
                  <i className="fas fa-star"></i> Imperdible
                </span>
              </div>
            </div>
          </div>

          <div className="attraction-card">
            <div className="attraction-image">
              <div className="attraction-overlay"></div>
              <div className="attraction-icon">
                <i className="fa-solid fa-person-swimming"></i>
              </div>
            </div>
            <div className="attraction-content">
              <h3 className="attraction-title">Río al Frente</h3>
              <p className="attraction-description">
                Ríos cristalinos con pozones naturales perfectos para nadar y
                refrescarse. Ideal para actividades acuáticas familiares.
              </p>
              <div className="attraction-meta">
                <span className="meta-item">
                  <i className="fas fa-walking"></i> Al frente
                </span>
                <span className="meta-item">
                  <i className="fas fa-heart"></i> Favorito
                </span>
              </div>
            </div>
          </div>

          <div className="attraction-card">
            <div className="attraction-image">
              <div className="attraction-overlay"></div>
              <div className="attraction-icon">
                <i className="fa-solid fa-droplet"></i>
              </div>
            </div>
            <div className="attraction-content">
              <h3 className="attraction-title">Siete Tazas & Más</h3>
              <p className="attraction-description">
                Velo de la Novia, Siete Tazas y Salto de la Leona. Cascadas
                espectaculares y formaciones geológicas únicas.
              </p>
              <div className="attraction-meta">
                <span className="meta-item">
                  <i className="fas fa-car"></i> 15-20 min
                </span>
                <span className="meta-item">
                  <i className="fas fa-camera"></i> Fotogénico
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="location-preview">
          <div className="location-content">
            <div className="location-info">
              <i className="fas fa-map-marked-alt"></i>
              <div>
                <h4>¿Quieres saber cómo llegar?</h4>
                <p>Revisa nuestra ubicación y planifica tu visita</p>
              </div>
            </div>
            <a href="/pages/ubicacion.html" className="btn-location">
              Ver Mapa Completo
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attractions;
