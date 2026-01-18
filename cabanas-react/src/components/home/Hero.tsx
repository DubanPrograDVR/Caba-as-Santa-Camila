const Hero = () => {
  return (
    <section className="contenedor_de_img">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/video/hero-cabanas.mp4" type="video/mp4" />
      </video>

      <div className="hero-fallback"></div>

      <div className="hero-overlay">
        <span className="hero-badge">
          <i className="fas fa-leaf"></i>
          El Mejor Escape Natural del Maule
        </span>

        <h1 className="textos_importantes animate-fade-in">
          Tu Refugio Natural en
          <br />
          <span className="highlight-text">Radal Siete Tazas</span>
        </h1>

        <p className="hero-subtitle">
          Desconéctate del ruido urbano y reconecta con la naturaleza.
          <br />
          Cabañas totalmente equipadas donde el río es tu melodía matutina.
        </p>

        <div className="hero-cta-wrapper">
          <a href="/pages/reserva-rapida.html" className="btn-hero-primary">
            <i className="fas fa-calendar-check"></i>
            <span>Reservar Ahora</span>
            <span className="btn-arrow">→</span>
          </a>
          <p className="hero-microcopy">
            <i className="fas fa-shield-check"></i>
            Reserva segura • Cancelación flexible
          </p>
        </div>

        <div className="hero-trust-strip">
          <div className="trust-badge-inline">
            <i className="fas fa-star"></i>
            <span>
              <strong>4.9</strong> en Google
            </span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-badge-inline">
            <i className="fas fa-users"></i>
            <span>
              <strong>200+</strong> familias felices
            </span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-badge-inline">
            <i className="fas fa-award"></i>
            <span>
              <strong>5 años</strong> de experiencia
            </span>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <span>Descubre más</span>
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  );
};

export default Hero;
