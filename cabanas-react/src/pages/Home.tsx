import Header from "../components/home/Header";
import Hero from "../components/home/Hero";
import SocialProof from "../components/home/SocialProof";
import InfoSection from "../components/content/InfoSection";
import About from "../components/content/About";
import Amenities from "../components/content/Amenities";
import Attractions from "../components/marketing/Attractions";
import CabinsShowcase from "../components/marketing/CabinsShowcase";
import PhotoGallery from "../components/marketing/PhotoGallery";
import FloatingActions from "../components/marketing/FloatingActions";
import Footer from "../components/layout/Footer";

interface HomeProps {
  onBookClick: () => void;
}

const Home = ({ onBookClick }: HomeProps) => {
  return (
    <>
      <Header />
      <Hero />
      <main className="contenedor-principal">
        <SocialProof />
        <InfoSection />
        <About />
        <Amenities />
        <CabinsShowcase onBookClick={onBookClick} />
        <PhotoGallery />
        <Attractions />
      </main>
      <FloatingActions onBookClick={onBookClick} />
      <Footer />
    </>
  );
};

export default Home;
