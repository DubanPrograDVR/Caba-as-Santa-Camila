import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ubicacion from "./pages/ubicacion/Ubicacion";
import Precios from "./pages/precios/Precios";
import Contacto from "./pages/contacto/Contacto";
import BookingModal from "./components/marketing/BookingModal";

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookClick = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home onBookClick={handleBookClick} />} />
        <Route
          path="/ubicacion"
          element={<Ubicacion onBookClick={handleBookClick} />}
        />
        <Route
          path="/precios"
          element={<Precios onBookClick={handleBookClick} />}
        />
        <Route
          path="/contacto"
          element={<Contacto onBookClick={handleBookClick} />}
        />
      </Routes>

      {/* Modal de reserva global */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </Router>
  );
}

export default App;
