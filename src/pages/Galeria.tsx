import React, { useState } from 'react';

interface ImagenGaleria {
  id: number;
  url: string;
  titulo: string;
  descripcion: string;
}

const Galeria: React.FC = () => {
  const imagenes: ImagenGaleria[] = [
    {
      id: 0,
      url: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600",
      titulo: "El Arte en Taza",
      descripcion: "Nuestros baristas dominan la técnica del arte latte para entregarte una taza hermosa cada día."
    },
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600",
      titulo: "Selección Especial",
      descripcion: "Variedades de cafés elaborados con granos seleccionados individualmente."
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600",
      titulo: "Extracción Perfecta",
      descripcion: "Cuidamos el tiempo de molienda y temperatura del agua para lograr el mejor cuerpo y sabor."
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=600",
      titulo: "Molienda de Grano",
      descripcion: "Tostado medio de granos locales premium que desprenden un aroma irresistible."
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600",
      titulo: "Ambiente Acogedor",
      descripcion: "El rincón perfecto para leer un buen libro o concentrarte en tus proyectos."
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=600",
      titulo: "Productividad y Sabor",
      descripcion: "Mesas equipadas con conexiones eléctricas y Wi-Fi de alta velocidad para tu comodidad laboral."
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=600",
      titulo: "Brewing Artesanal",
      descripcion: "Métodos de filtrado lento (V60, Chemex y Aeropress) a cargo de baristas experimentados."
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=600",
      titulo: "Momentos Compartidos",
      descripcion: "Espacios amplios diseñados para charlas amenas e inolvidables."
    }
  ];

  // Estado para controlar la imagen actualmente seleccionada en el Lightbox
  const [indexActivo, setIndexActivo] = useState<number | null>(null);

  const abrirLightbox = (index: number) => {
    setIndexActivo(index);
  };

  const cerrarLightbox = () => {
    setIndexActivo(null);
  };

  const anteriorImagen = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evitar que cierre el modal
    if (indexActivo !== null) {
      setIndexActivo(prev => (prev === 0 ? imagenes.length - 1 : (prev !== null ? prev - 1 : 0)));
    }
  };

  const iframeSiguienteImagen = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evitar que cierre el modal
    if (indexActivo !== null) {
      setIndexActivo(prev => (prev === imagenes.length - 1 ? 0 : (prev !== null ? prev + 1 : 0)));
    }
  };

  return (
    <div className="container py-5 animate-fade-in text-start">
      {/* Cabecera */}
      <div className="text-center mb-5">
        <span className="text-caramel font-monospace text-uppercase tracking-wider">Galería Visual</span>
        <h1 className="display-4 text-cream fw-bold mt-2 font-serif">Nuestra Cafetería en Imágenes</h1>
        <div className="mx-auto bg-caramel mt-3 mb-4" style={{ width: '80px', height: '3px' }}></div>
        <p className="text-cream-dark mx-auto text-center" style={{ maxWidth: '600px' }}>
          Date un paseo visual por nuestras instalaciones y descubre la pasión y dedicación que ponemos en cada detalle de Café 404.
        </p>
      </div>

      {/* Grid de la Galería */}
      <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        {imagenes.map((img, index) => (
          <div key={img.id} className="col" onClick={() => abrirLightbox(index)}>
            <div className="gallery-item-container shadow-sm">
              <img 
                src={img.url} 
                alt={img.titulo} 
                className="gallery-image"
              />
              {/* Overlay en Hover */}
              <div className="gallery-overlay">
                <div className="text-center p-3 text-cream">
                  <i className="bi bi-zoom-in display-6 text-caramel mb-2 d-block"></i>
                  <h5 className="fw-bold mb-1 font-serif">{img.titulo}</h5>
                  <p className="small text-cream-dark opacity-75 mb-0" style={{ fontSize: '0.75rem' }}>Hacer clic para ampliar</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL LIGHTBOX DINÁMICO */}
      {indexActivo !== null && (
        <div 
          className="modal fade show d-block" 
          tabIndex={-1} 
          style={{ backgroundColor: 'rgba(33, 19, 13, 0.95)', zIndex: 1060 }}
          onClick={cerrarLightbox}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg lightbox-modal">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              
              {/* Botón Cerrar */}
              <button 
                type="button" 
                className="btn-close btn-close-white position-absolute top-0 end-0 m-3 z-3 bg-cream border border-secondary"
                aria-label="Cerrar"
                onClick={cerrarLightbox}
                style={{ width: '40px', height: '40px', borderRadius: '50%', opacity: 0.8 }}
              ></button>

              <div className="modal-body p-0 position-relative text-center">
                {/* Imagen del Lightbox */}
                <img 
                  src={imagenes[indexActivo].url} 
                  alt={imagenes[indexActivo].titulo} 
                  className="lightbox-img img-fluid shadow-lg"
                />

                {/* Controles de Diapositivas */}
                <button 
                  className="btn btn-dark text-caramel border-0 position-absolute start-0 top-50 translate-middle-y ms-3 d-flex align-items-center justify-content-center"
                  style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: 'rgba(47, 28, 20, 0.75)' }}
                  onClick={anteriorImagen}
                >
                  <i className="bi bi-chevron-left fs-4"></i>
                </button>
                
                <button 
                  className="btn btn-dark text-caramel border-0 position-absolute end-0 top-50 translate-middle-y me-3 d-flex align-items-center justify-content-center"
                  style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: 'rgba(47, 28, 20, 0.75)' }}
                  onClick={iframeSiguienteImagen}
                >
                  <i className="bi bi-chevron-right fs-4"></i>
                </button>

                {/* Pie de Foto */}
                <div className="bg-coffee-dark text-start p-3 border-top border-secondary mt-2 rounded-bottom">
                  <h5 className="text-cream fw-bold mb-1 font-serif">{imagenes[indexActivo].titulo}</h5>
                  <p className="text-cream-dark opacity-75 small mb-0">{imagenes[indexActivo].descripcion}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeria;
