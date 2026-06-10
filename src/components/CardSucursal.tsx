import React from 'react';

export interface SucursalData {
  id: number;
  nombre: string;
  direccion: string;
  horario: string;
  telefono: string;
  mapaIframeUrl: string;
}

interface CardSucursalProps {
  sucursal: SucursalData;
}

const CardSucursal: React.FC<CardSucursalProps> = ({ sucursal }) => {
  return (
    <div className="card h-100 bg-coffee-dark border border-secondary p-4 rounded-4 d-flex flex-column justify-content-between">
      {/* Contenido de la Tarjeta */}
      <div className="text-start px-2 flex-grow-1 d-flex flex-column justify-content-between">
        <div>
          <h4 className="text-cream fw-bold mb-3 font-serif">
            <i className="bi bi-geo-alt-fill text-caramel me-2"></i>{sucursal.nombre}
          </h4>
          
          <div className="mb-2 text-cream-dark opacity-75 small d-flex gap-2 align-items-start">
            <i className="bi bi-map-fill text-caramel mt-1"></i>
            <span>{sucursal.direccion}</span>
          </div>
          
          <div className="mb-2 text-cream-dark opacity-75 small d-flex gap-2 align-items-center">
            <i className="bi bi-clock-fill text-caramel"></i>
            <span>{sucursal.horario}</span>
          </div>
          
          <div className="mb-1 text-cream-dark opacity-75 small d-flex gap-2 align-items-center">
            <i className="bi bi-telephone-fill text-caramel"></i>
            <span>{sucursal.telefono}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSucursal;
