const Amenities = () => {
  return (
    <section className="amenities-section">
      <div className="container">
        <div className="section-intro">
          <span className="section-badge">✨ Todo Incluido</span>
          <h2 className="section-title">Comodidades de Nuestras Cabañas</h2>
          <p className="section-description">
            Cada cabaña está completamente equipada con todo lo necesario para
            una estadía confortable.
            <br />
            Disfruta de amenidades modernas en un entorno natural privilegiado.
          </p>
        </div>

        <div className="amenities-grid">
          <div className="amenity-card">
            <div className="amenity-icon-wrapper">
              <i className="fa-solid fa-tv"></i>
            </div>
            <h3 className="amenity-title">Televisión por Cable</h3>
            <p className="amenity-description">
              Entretenimiento familiar con canales variados para todas las
              edades
            </p>
            <div className="amenity-check">
              <i className="fas fa-check-circle"></i>
            </div>
          </div>

          <div className="amenity-card">
            <div className="amenity-icon-wrapper">
              <i className="fa-solid fa-bed"></i>
            </div>
            <h3 className="amenity-title">2 Dormitorios</h3>
            <p className="amenity-description">
              Espacios cómodos con ropa de cama premium para un descanso
              reparador
            </p>
            <div className="amenity-check">
              <i className="fas fa-check-circle"></i>
            </div>
          </div>

          <div className="amenity-card">
            <div className="amenity-icon-wrapper">
              <i className="fa-solid fa-kitchen-set"></i>
            </div>
            <h3 className="amenity-title">Cocina a Gas</h3>
            <p className="amenity-description">
              Cocina totalmente equipada con utensilios y vajilla completa
            </p>
            <div className="amenity-check">
              <i className="fas fa-check-circle"></i>
            </div>
          </div>

          <div className="amenity-card">
            <div className="amenity-icon-wrapper">
              <i className="fa-solid fa-shower"></i>
            </div>
            <h3 className="amenity-title">Ducha con Agua Caliente</h3>
            <p className="amenity-description">
              Sistema de agua caliente continuo para tu máxima comodidad
            </p>
            <div className="amenity-check">
              <i className="fas fa-check-circle"></i>
            </div>
          </div>

          <div className="amenity-card">
            <div className="amenity-icon-wrapper">
              <i className="fa-solid fa-bolt"></i>
            </div>
            <h3 className="amenity-title">Energía Eléctrica</h3>
            <p className="amenity-description">
              Suministro eléctrico estable con conexiones en todas las
              habitaciones
            </p>
            <div className="amenity-check">
              <i className="fas fa-check-circle"></i>
            </div>
          </div>

          <div className="amenity-card highlight">
            <div className="amenity-icon-wrapper">
              <i className="fa-solid fa-wifi"></i>
            </div>
            <h3 className="amenity-title">Y Mucho Más...</h3>
            <p className="amenity-description">
              Parrilla, estacionamiento, aseo incluido y más comodidades
            </p>
            <div className="amenity-check">
              <i className="fas fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
