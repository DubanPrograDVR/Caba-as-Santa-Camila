import Header from "@/components/layout/header"
import Hero from "@/components/home/hero"
import SocialProof from "@/components/home/social-proof"
import InfoSection from "@/components/content/info-section"
import About from "@/components/content/about"
import Amenities from "@/components/content/amenities"
import Attractions from "@/components/marketing/attractions"
import CabinsShowcase from "@/components/marketing/cabins-showcase"
import PhotoGallery from "@/components/marketing/photo-gallery"
import FloatingActions from "@/components/marketing/floating-actions"
import Footer from "@/components/layout/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <main className="contenedor-principal">
        <SocialProof />
        <InfoSection />
        <About />
        <Amenities />
        <CabinsShowcase />
        <PhotoGallery />
        <Attractions />
      </main>
      <FloatingActions />
      <Footer />
    </>
  )
}
