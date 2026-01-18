const FloatingActions = () => {
  return (
    <div className="floating-actions">
      <a
        href="/pages/reserva-rapida.html"
        className="floating-reserve"
        id="floating-reserve">
        <i className="fas fa-calendar-plus"></i>
        <span className="floating-text">Reservar</span>
      </a>

      <a
        href="https://wa.me/56982222698"
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer">
        <i className="fa-brands fa-whatsapp"></i>
        <span className="floating-text">WhatsApp</span>
      </a>
    </div>
  );
};

export default FloatingActions;
