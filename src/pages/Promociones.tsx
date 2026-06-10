import React, { useState } from 'react';
import CardPromocion from '../components/CardPromocion';
import type { PromocionData } from '../components/CardPromocion';

interface Oferta {
  nombre: string;
  descuento: number;
  precioOriginal: number;
  imagen: string;
}

const Promociones: React.FC = () => {
  // Oferta dinámica del día
  const [oferta] = useState<Oferta>({
    nombre: "Capuccino Canela Especial",
    descuento: 25,
    precioOriginal: 2.25,
    imagen: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=400"
  });

  const precioDescuento = oferta.precioOriginal * (1 - oferta.descuento / 100);

  // Lista de promociones semanales usando el nuevo formato
  const promocionesSemanales: PromocionData[] = [
    {
      id: 0,
      subtitulo: "COMBO DESAYUNO COMPLETO",
      titulo: "Latte Grande + Croissant",
      descripcion: "Inicia tus mañanas de la mejor manera. Llévate un Latte de especialidad caliente más un delicioso Croissant de Almendras crujiente por un precio exclusivo de desayuno.",
      precio: 2.99,
      precioOriginal: 3.25,
      imagen: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600",
    },
    {
      id: 1,
      subtitulo: "PROMO DE TARDE (2X1)",
      titulo: "2x1 en Frappés los Jueves",
      descripcion: "¡Los jueves de calor se disfrutan mejor acompañados! Compra cualquier Frappé frío y llévate el segundo totalmente gratis a partir de las 3:00 PM.",
      precio: 2.00,
      imagen: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600",
    },
    {
      id: 2,
      subtitulo: "DULCE CAPRICHO FIN DE SEMANA",
      titulo: "Café + Postre a Elección",
      descripcion: "Consiéntete el fin de semana con nuestro combo dulce. Elige cualquier café americano o espresso y acompáñalo con nuestra exquisita Tarta de Queso o Tiramisú 404.",
      precio: 3.99,
      precioOriginal: 4.75,
      imagen: "https://images.unsplash.com/photo-1511018556340-d16986a1c194?q=80&w=600",
    }
  ];

  return (
    <div className="container py-5 animate-fade-in text-start">
      {/* Cabecera */}
      <div className="text-center mb-5">
        <span className="text-caramel font-monospace text-uppercase tracking-wider">Descuentos Activos</span>
        <h1 className="display-4 text-cream fw-bold mt-2 font-serif">Promociones Exclusivas</h1>
        <div className="mx-auto bg-caramel mt-3 mb-4" style={{ width: '80px', height: '3px' }}></div>
        <p className="text-cream-dark mx-auto text-center" style={{ maxWidth: '600px' }}>
          ¡Aprovecha nuestras ofertas exclusivas de la semana! Diseñadas para que disfrutes de tu sabor favorito a un precio increíble.
        </p>
      </div>

      <div className="row g-5 align-items-center mb-5">
        {/* Columna Guía de Canje (Sustituye al Temporizador) */}
        <div className="col-lg-6">
          <div className="text-center text-lg-start mb-4">
            <span className="badge bg-danger text-uppercase px-3 py-2 fs-6 mb-2">🔥 ¡OFERTA ESTRELLA DEL DÍA!</span>
            <h2 className="text-cream fw-bold display-6 font-serif">{oferta.nombre}</h2>
          </div>
          
          {/* Tarjeta explicativa del cupón en lugar del countdown */}
          <div className="countdown-box p-4 mb-4">
            <h4 className="text-cream fw-bold mb-3 font-serif"><i className="bi bi-gift-fill text-caramel me-2"></i>¿Cómo funciona tu Cupón Diario?</h4>
            
            <div className="d-flex flex-column gap-3 text-start small">
              <div className="d-flex align-items-start gap-3">
                <div className="bg-caramel text-cream rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: '30px', height: '30px', minWidth: '30px' }}>1</div>
                <div>
                  <h6 className="text-cream mb-1 fw-bold">Captura la promoción</h6>
                  <p className="text-cream-dark opacity-75 mb-0">Toma una captura de pantalla de la promoción semanal que más te guste de la que aparece en nuestro sitio web.</p>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3">
                <div className="bg-caramel text-cream rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: '30px', height: '30px', minWidth: '30px' }}>2</div>
                <div>
                  <h6 className="text-cream mb-1 fw-bold">Visita cualquier Sucursal</h6>
                  <p className="text-cream-dark opacity-75 mb-0">Preséntate en cualquiera de nuestras barras de café (Santa Ana, San Salvador o San Miguel).</p>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3">
                <div className="bg-caramel text-cream rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: '30px', height: '30px', minWidth: '30px' }}>3</div>
                <div>
                  <h6 className="text-cream mb-1 fw-bold">¡Disfruta el 25% OFF!</h6>
                  <p className="text-cream-dark opacity-75 mb-0">Muestra la captura al barista en caja y obtén tu Capuccino del día con el descuento aplicado automáticamente.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-4 d-flex align-items-center gap-4 border-0">
            <div className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: '80px', height: '80px', fontSize: '1.5rem', minWidth: '80px' }}>
              -{oferta.descuento}%
            </div>
            <div className="text-start">
              <p className="text-cream-dark small mb-1 text-decoration-line-through">Precio Original: ${oferta.precioOriginal.toFixed(2)}</p>
              <h3 className="text-caramel fw-bold mb-2">Precio de Oferta: ${precioDescuento.toFixed(2)}</h3>
            </div>
          </div>
        </div>

        {/* Columna Imagen de Oferta */}
        <div className="col-lg-6">
          <div className="position-relative">
            <div className="position-absolute top-0 start-0 bg-danger text-white px-3 py-2 m-3 rounded fw-bold z-3 shadow">
              AHORRA 25%
            </div>
            <img 
              src={oferta.imagen} 
              alt={oferta.nombre} 
              className="img-fluid rounded-4 shadow-lg border border-secondary"
              style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      {/* Sección Carrusel de Combos y Ofertas (Bootstrap Carousel) */}
      <div className="my-5 py-4 bg-coffee-dark rounded-4 p-4 p-md-5 border border-secondary">
        <div className="text-center mb-5">
          <span className="text-caramel font-monospace text-uppercase">Combos Especiales</span>
          <h2 className="text-cream fw-bold mt-2 font-serif">Nuestras Promociones Semanales</h2>
          <div className="mx-auto bg-caramel mt-2 mb-3" style={{ width: '50px', height: '2px' }}></div>
        </div>

        {/* Carrusel de Bootstrap */}
        <div id="promocionesCarousel" className="carousel slide" data-bs-ride="carousel">
          {/* Indicadores */}
          <div className="carousel-indicators">
            {promocionesSemanales.map((_, idx) => (
              <button 
                key={idx}
                type="button" 
                data-bs-target="#promocionesCarousel" 
                data-bs-slide-to={idx} 
                className={idx === 0 ? "active" : ""}
                aria-current={idx === 0 ? "true" : "false"}
                aria-label={`Promo ${idx + 1}`}
              ></button>
            ))}
          </div>

          {/* Diapositivas */}
          <div className="carousel-inner rounded-3" style={{ minHeight: '450px' }}>
            {promocionesSemanales.map((promo, idx) => (
              <div key={promo.id} className={`carousel-item ${idx === 0 ? "active" : ""} h-100`}>
                <CardPromocion promocion={promo} />
              </div>
            ))}
          </div>

          {/* Controles de Navegación */}
          <button className="carousel-control-prev" type="button" data-bs-target="#promocionesCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#promocionesCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Promociones;
