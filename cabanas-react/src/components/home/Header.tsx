import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="site-header">
      <nav
        className="main-navbar"
        role="navigation"
        aria-label="Navegación principal">
        <div className="navbar-wrapper">
          <div className="navbar-brand">
            <Link
              to="/"
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
            </Link>
          </div>

          <div
            className={`navbar-nav ${isOpen ? "active" : ""}`}
            id="navbarNav">
            <ul className="nav-list" role="list">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${isActive("/") ? "nav-link--active" : ""}`}
                  aria-current={isActive("/") ? "page" : undefined}
                  onClick={() => setIsOpen(false)}>
                  <i className="nav-icon fas fa-home" aria-hidden="true"></i>
                  <span className="nav-text">Inicio</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/ubicacion"
                  className={`nav-link ${isActive("/ubicacion") ? "nav-link--active" : ""}`}
                  aria-current={isActive("/ubicacion") ? "page" : undefined}
                  onClick={() => setIsOpen(false)}>
                  <i
                    className="nav-icon fas fa-map-marker-alt"
                    aria-hidden="true"></i>
                  <span className="nav-text">Ubicación</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/precios"
                  className={`nav-link ${isActive("/precios") ? "nav-link--active" : ""}`}
                  aria-current={isActive("/precios") ? "page" : undefined}
                  onClick={() => setIsOpen(false)}>
                  <i className="nav-icon fas fa-tags" aria-hidden="true"></i>
                  <span className="nav-text">Precios</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contacto"
                  className={`nav-link ${isActive("/contacto") ? "nav-link--active" : ""}`}
                  aria-current={isActive("/contacto") ? "page" : undefined}
                  onClick={() => setIsOpen(false)}>
                  <i
                    className="nav-icon fas fa-envelope"
                    aria-hidden="true"></i>
                  <span className="nav-text">Contacto</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="navbar-cta">
            <Link to="/#reservar" className="cta-button">
              <i className="fas fa-calendar-check" aria-hidden="true"></i>
              <span>Reservar Ahora</span>
            </Link>
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
