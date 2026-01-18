import Header from "./components/home/Header";
import Hero from "./components/home/Hero";
import SocialProof from "./components/home/SocialProof";
import InfoSection from "./components/content/InfoSection";
import About from "./components/content/About";
import Amenities from "./components/content/Amenities";
import Attractions from "./components/marketing/Attractions";
import CabinsShowcase from "./components/marketing/CabinsShowcase";
import FloatingActions from "./components/marketing/FloatingActions";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main className="contenedor-principal">
        <SocialProof />
        <InfoSection />
        <About />
        <Amenities />
        <Attractions />
        <CabinsShowcase />
      </main>
      <FloatingActions />
      <Footer />
    </>
  );
}

export default App;
