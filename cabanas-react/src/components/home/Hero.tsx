const Hero = () => {
  return (
    <section className="contenedor_de_img">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/video/hero-cabanas.mp4" type="video/mp4" />
      </video>

      <div className="hero-fallback"></div>

      <div className="hero-overlay">
        <span className="hero-badge">🌲 El Mejor Escape Natural del Maule</span>
        <h1 className="textos_importantes animate-fade-in">
          Tu Refugio Natural en
          <br />
          <span className="highlight-text">Radal Siete Tazas</span>
        </h1>
        <p className="centrar_texto color-textos-cabeza hero-subtitle">
          Desconéctate del ruido urbano y reconecta con la naturaleza.
          <br />
          Cabañas totalmente equipadas donde el río es tu melodía matutina.
        </p>

        <div className="cta-buttons">
          <a href="/pages/reserva-rapida.html" className="btn-primary">
            <i className="fas fa-calendar-check"></i>
            <span>Reservar Ahora</span>
          </a>
          <a href="#galeria" className="btn-secondary">
            <i className="fas fa-images"></i>
            <span>Ver Galería</span>
          </a>
        </div>

        <div className="trust-indicators">
          <span className="trust-item">
            <i className="fas fa-shield-check"></i>
            <strong>100%</strong> Seguro
          </span>
          <span className="trust-item">
            <i className="fas fa-star"></i>
            <strong>4.9/5</strong> Rating
          </span>
          <span className="trust-item">
            <i className="fas fa-users"></i>
            <strong>200+</strong> Familias
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
