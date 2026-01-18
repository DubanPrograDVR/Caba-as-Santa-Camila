import { useState } from "react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: "exterior" | "interior" | "naturaleza" | "amenidades";
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/img/Cabañas.png",
    alt: "Vista exterior Cabaña Bosque",
    category: "exterior",
  },
  {
    id: 2,
    src: "/img/Cabañas_stc.jpg",
    alt: "Cabaña Río con terraza",
    category: "exterior",
  },
  {
    id: 3,
    src: "/img/Imagen_Cabaña_3.jpg",
    alt: "Interior Cabaña Premium",
    category: "interior",
  },
  {
    id: 4,
    src: "/img/sietetazas.webp",
    alt: "Parque Siete Tazas",
    category: "naturaleza",
  },
  {
    id: 5,
    src: "/img/terraza.jpg",
    alt: "Terraza con vista al río",
    category: "amenidades",
  },
  {
    id: 6,
    src: "/img/rio-claro.jpg",
    alt: "Río Claro al amanecer",
    category: "naturaleza",
  },
];

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("todos");

  const filters = [
    { id: "todos", label: "Todos", icon: "fas fa-th" },
    { id: "exterior", label: "Exteriores", icon: "fas fa-home" },
    { id: "interior", label: "Interiores", icon: "fas fa-couch" },
    { id: "naturaleza", label: "Naturaleza", icon: "fas fa-leaf" },
    { id: "amenidades", label: "Amenidades", icon: "fas fa-star" },
  ];

  const filteredImages =
    activeFilter === "todos"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="photo-gallery-section" id="fotos">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">
            <i className="fas fa-camera"></i>
            Galería
          </span>
          <h2 className="section-title">Descubre Nuestros Espacios</h2>
          <p className="section-subtitle">
            <i className="fas fa-mountain"></i>
            Cada rincón diseñado para tu descanso
          </p>
        </div>

        {/* Filtros */}
        <div className="gallery-filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? "active" : ""}`}
              onClick={() => setActiveFilter(filter.id)}>
              <i className={filter.icon}></i>
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Grid de Imágenes */}
        <div className="gallery-grid">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => openLightbox(image)}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <div className="gallery-overlay">
                <i className="fas fa-expand"></i>
                <span>{image.alt}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="gallery-cta">
          <p>
            <i className="fas fa-heart"></i>
            ¿Te gustó lo que viste?
          </p>
          <a href="#reservar" className="btn-gallery-cta">
            <i className="fas fa-calendar-check"></i>
            Reserva Tu Estadía
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-modal" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <i className="fas fa-times"></i>
          </button>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <p className="lightbox-caption">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
