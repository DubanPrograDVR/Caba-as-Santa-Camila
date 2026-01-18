import Header from "../../components/home/Header";
import Footer from "../../components/layout/Footer";
import FloatingActions from "../../components/marketing/FloatingActions";

interface UbicacionProps {
  onBookClick?: () => void;
}

const Ubicacion = ({ onBookClick }: UbicacionProps) => {
  return (
    <>
      <Header />

      {/* Hero de Ubicación */}
      <section className="ubicacion-hero">
        <div className="ubicacion-hero-overlay">
          <div className="container">
            <span className="ubicacion-badge">
              <i className="fas fa-map-marker-alt"></i>
              Nuestra Ubicación
            </span>
            <h1 className="ubicacion-title">
              Encuéntranos en el
              <span className="title-highlight"> Corazón de la Naturaleza</span>
            </h1>
            <p className="ubicacion-subtitle">
              Descubre cómo llegar fácilmente a nuestras cabañas ubicadas en el
              corazón de El Radal, Molina, en la Región del Maule. Tu puerta de
              entrada perfecta al Parque Nacional Radal Siete Tazas.
            </p>
            <div className="ubicacion-hero-cta">
              <a
                href="https://maps.google.com/?q=-35.415001,-71.053659"
                target="_blank"
                rel="noreferrer"
                className="btn-maps">
                <i className="fas fa-directions"></i>
                Cómo Llegar
              </a>
              <a href="tel:+56982222698" className="btn-call">
                <i className="fas fa-phone"></i>
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      <main className="ubicacion-main">
        {/* Puntos de Interés */}
        <section className="points-of-interest-section">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-badge">
                <i className="fas fa-compass"></i>
                Explora
              </span>
              <h2 className="section-title">Puntos de Interés Cercanos</h2>
              <p className="section-description">
                Todo lo que necesitas está a minutos de distancia
              </p>
            </div>

            <div className="points-grid">
              <div className="point-card">
                <div className="point-icon-wrapper">
                  <i className="fas fa-tree"></i>
                </div>
                <div className="point-content">
                  <h3>Parque Nacional Radal Siete Tazas</h3>
                  <div className="point-distance">
                    <i className="fas fa-car"></i>
                    <span>15 minutos en auto</span>
                  </div>
                  <p>Senderos, cascadas y piscinas naturales</p>
                </div>
                <div className="point-tag">Imperdible</div>
              </div>

              <div className="point-card">
                <div className="point-icon-wrapper water">
                  <i className="fas fa-water"></i>
                </div>
                <div className="point-content">
                  <h3>Río Claro</h3>
                  <div className="point-distance">
                    <i className="fas fa-walking"></i>
                    <span>5 minutos caminando</span>
                  </div>
                  <p>Actividades acuáticas y relajación junto al río</p>
                </div>
                <div className="point-tag nearby">Muy cerca</div>
              </div>

              <div className="point-card">
                <div className="point-icon-wrapper services">
                  <i className="fas fa-store"></i>
                </div>
                <div className="point-content">
                  <h3>Centro de Molina</h3>
                  <div className="point-distance">
                    <i className="fas fa-road"></i>
                    <span>25 km</span>
                  </div>
                  <p>Supermercados, farmacias y servicios</p>
                </div>
                <div className="point-tag services">Servicios</div>
              </div>

              <div className="point-card">
                <div className="point-icon-wrapper hiking">
                  <i className="fas fa-hiking"></i>
                </div>
                <div className="point-content">
                  <h3>Senderos Naturales</h3>
                  <div className="point-distance">
                    <i className="fas fa-shoe-prints"></i>
                    <span>Acceso directo</span>
                  </div>
                  <p>Rutas de trekking para todos los niveles</p>
                </div>
                <div className="point-tag nature">Aventura</div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Direcciones */}
        <section className="directions-section">
          <div className="container">
            <div className="directions-grid">
              {/* Columna de información */}
              <div className="directions-info">
                <div className="direction-card">
                  <div className="direction-header">
                    <div className="direction-icon">
                      <i className="fas fa-location-dot"></i>
                    </div>
                    <h3>Dirección</h3>
                  </div>
                  <p>
                    Cabañas Santa Camila está en <strong>Ruta K-275</strong>,
                    sector El Radal, Molina, Región del Maule. Se accede pasando
                    el puente nuevo y luego caminas aproximadamente 300 m hacia
                    la izquierda.
                  </p>
                  <a
                    href="https://maps.google.com/?q=-35.415001,-71.053659"
                    target="_blank"
                    rel="noreferrer"
                    className="direction-link">
                    <i className="fas fa-external-link-alt"></i>
                    Ver en Google Maps
                  </a>
                </div>

                <div className="direction-card">
                  <div className="direction-header">
                    <div className="direction-icon car">
                      <i className="fas fa-car"></i>
                    </div>
                    <h3>En Auto desde Molina</h3>
                  </div>
                  <ol className="direction-steps">
                    <li>Toma la Ruta K-275 dirección El Radal</li>
                    <li>Continúa por 25 km hasta llegar al sector</li>
                    <li>Cruza el puente nuevo sobre el río</li>
                    <li>Gira a la izquierda y avanza 300 metros</li>
                    <li>¡Llegaste a Cabañas Santa Camila!</li>
                  </ol>
                  <div className="travel-time">
                    <i className="fas fa-clock"></i>
                    <span>Tiempo estimado: 35-40 minutos</span>
                  </div>
                </div>

                <div className="direction-card">
                  <div className="direction-header">
                    <div className="direction-icon bus">
                      <i className="fas fa-bus"></i>
                    </div>
                    <h3>En Bus + A Pie</h3>
                  </div>
                  <ol className="direction-steps">
                    <li>
                      Viaja desde Molina hacia Parque Nacional Radal Siete Tazas
                      con transporte local
                      <span className="step-note">
                        (Buses Radal Siete Tazas o Buses Hernández)
                      </span>
                    </li>
                    <li>
                      Baja en el sector El Radal / Río Claro, cerca del puente
                    </li>
                    <li>
                      Camina 300 m hacia la izquierda tras cruzar el puente
                    </li>
                  </ol>
                  <div className="tip-box">
                    <i className="fas fa-lightbulb"></i>
                    <span>
                      Tip: También puedes acordar que te recojamos en el
                      paradero
                    </span>
                  </div>
                </div>
              </div>

              {/* Mapa */}
              <div className="map-container">
                <div className="map-header">
                  <h3>
                    <i className="fas fa-map"></i>
                    Ubicación en el Mapa
                  </h3>
                </div>
                <div className="map-wrapper">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.606564228851!2d-71.05624842458!3d-35.415001472674284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96650cdef7ccc641%3A0x1eecbbc7a7d739a6!2sCaba%C3%B1as%20Y%20Camping%20Santa%20Camila!5e0!3m2!1ses-419!2scl!4v1754511506669!5m2!1ses-419!2scl"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa de Cabañas Santa Camila"></iframe>
                </div>
                <div className="map-actions">
                  <a
                    href="https://maps.google.com/?q=-35.415001,-71.053659"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-open-maps">
                    <i className="fas fa-external-link-alt"></i>
                    Abrir en Google Maps
                  </a>
                  <a
                    href="https://wa.me/56982222698?text=Hola,%20necesito%20indicaciones%20para%20llegar%20a%20las%20cabañas"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-whatsapp-help">
                    <i className="fab fa-whatsapp"></i>
                    ¿Necesitas ayuda?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="ubicacion-cta-section">
          <div className="container">
            <div className="ubicacion-cta-content">
              <div className="cta-text">
                <h2>¿Listo para tu escapada?</h2>
                <p>
                  Reserva ahora y vive la experiencia de desconectarte en plena
                  naturaleza
                </p>
              </div>
              <div className="cta-actions">
                <button onClick={onBookClick} className="btn-reservar-cta">
                  <i className="fas fa-calendar-check"></i>
                  Reservar Ahora
                </button>
                <a href="/" className="btn-ver-cabanas">
                  <i className="fas fa-home"></i>
                  Ver Cabañas
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FloatingActions onBookClick={onBookClick} />
      <Footer />
    </>
  );
};

export default Ubicacion;
