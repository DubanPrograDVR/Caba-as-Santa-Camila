const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-about">
            <div className="footer-logo">
              <img
                src="/img/Logo.png"
                alt="Cabañas Santa Camila"
                className="footer-logo-img"
              />
              <h3>Cabañas Santa Camila</h3>
            </div>
            <p className="footer-description">
              Tu refugio natural en El Radal, Molina. Desconéctate del ruido
              urbano y reconecta con la naturaleza.
            </p>
          </div>

          <div className="footer-section footer-links">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li>
                <a href="#">
                  <i className="fas fa-home"></i> Inicio
                </a>
              </li>
              <li>
                <a href="/pages/ubicacion.html">
                  <i className="fas fa-map-marker-alt"></i> Ubicación
                </a>
              </li>
              <li>
                <a href="/pages/precios.html">
                  <i className="fas fa-tags"></i> Precios
                </a>
              </li>
              <li>
                <a href="/pages/contacto.html">
                  <i className="fas fa-envelope"></i> Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section footer-contact">
            <h4>Contáctanos</h4>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Ruta K‑275, El Radal, Molina</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <a href="tel:+56982222698">+56 9 8222 2698</a>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:contacto@cabanassantacamila.cl">
                  contacto@cabanassantacamila.cl
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section footer-social">
            <h4>Síguenos</h4>
            <div className="social-links">
              <a
                href="#"
                target="_blank"
                aria-label="Instagram"
                className="social-link"
                rel="noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="#"
                target="_blank"
                aria-label="Facebook"
                className="social-link"
                rel="noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://wa.me/56982222698"
                target="_blank"
                aria-label="WhatsApp"
                className="social-link"
                rel="noreferrer">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2025 Cabañas Santa Camila. Todos los derechos reservados.
          </p>
          <p className="footer-credits">
            Desarrollado por <strong>Duban Alejandro Vásquez Romero</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
