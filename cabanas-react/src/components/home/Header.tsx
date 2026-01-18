import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <nav
        className="main-navbar"
        role="navigation"
        aria-label="Navegación principal">
        <div className="navbar-wrapper">
          <div className="navbar-brand">
            <a
              href="/"
              className="brand-link"
              aria-label="Cabañas Santa Camila - Volver al inicio">
              <img
                className="brand-logo"
                src="/img/Logo.png"
                alt="Cabañas Santa Camila Logo"
                width={120}
                height={60}
                loading="eager"
              />
              <span className="brand-text" aria-hidden="true">
                Santa Camila
              </span>
            </a>
          </div>

          <div
            className={`navbar-nav ${isOpen ? "active" : ""}`}
            id="navbarNav">
            <ul className="nav-list" role="list">
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link nav-link--active"
                  aria-current="page">
                  <i className="nav-icon fas fa-home" aria-hidden="true"></i>
                  <span className="nav-text">Inicio</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/pages/ubicacion.html" className="nav-link">
                  <i
                    className="nav-icon fas fa-map-marker-alt"
                    aria-hidden="true"></i>
                  <span className="nav-text">Ubicación</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/pages/precios.html" className="nav-link">
                  <i className="nav-icon fas fa-tags" aria-hidden="true"></i>
                  <span className="nav-text">Precios</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/pages/contacto.html" className="nav-link">
                  <i
                    className="nav-icon fas fa-envelope"
                    aria-hidden="true"></i>
                  <span className="nav-text">Contacto</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="navbar-cta">
            <a href="/pages/reserva-rapida.html" className="cta-button">
              <i className="fas fa-calendar-check" aria-hidden="true"></i>
              <span>Reservar Ahora</span>
            </a>
          </div>

          <button
            className="navbar-toggle"
            type="button"
            aria-label="Abrir menú de navegación"
            aria-expanded={isOpen}
            aria-controls="navbarNav"
            onClick={() => setIsOpen((prev) => !prev)}>
            <span className="toggle-icon"></span>
            <span className="toggle-icon"></span>
            <span className="toggle-icon"></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
