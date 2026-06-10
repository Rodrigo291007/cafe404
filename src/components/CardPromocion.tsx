import React from 'react';

export interface PromocionData {
  id: number;
  subtitulo: string;
  titulo: string;
  descripcion: string;
  precio: number;
  precioOriginal?: number;
  imagen: string;
}

interface CardPromocionProps {
  promocion: PromocionData;
}

const CardPromocion: React.FC<CardPromocionProps> = ({ promocion }) => {
  return (
    <div className="w-100 h-100 d-flex flex-column flex-md-row align-items-center bg-espresso p-4 p-md-5">
      <div className="col-md-6 text-start p-3 order-2 order-md-1">
        <span className="text-caramel fw-bold font-monospace text-uppercase">{promocion.subtitulo}</span>
        <h3 className="text-cream display-6 fw-bold mt-2 mb-3">{promocion.titulo}</h3>
        <p className="text-cream-dark opacity-75 mb-4">
          {promocion.descripcion}
        </p>
        <div className="d-flex align-items-center gap-3">
          <span className="fs-3 text-caramel fw-bold">${promocion.precio.toFixed(2)}</span>
          {promocion.precioOriginal && (
            <span className="text-decoration-line-through small text-cream-dark opacity-50">
              ${promocion.precioOriginal.toFixed(2)}
            </span>
          )}
        </div>
      </div>
      <div className="col-md-6 h-100 order-1 order-md-2 p-3">
        <img 
          src={promocion.imagen} 
          className="d-block w-100 h-100 rounded-3" 
          alt={promocion.titulo}
          style={{ objectFit: 'cover', minHeight: '200px' }}
        />
      </div>
    </div>
  );
};

export default CardPromocion;
