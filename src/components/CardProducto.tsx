import React from 'react';
import type { Producto } from '../data/productos';

interface CardProductoProps {
  producto: Producto;
}

const CardProducto: React.FC<CardProductoProps> = ({ producto }) => {
  return (
    <div className="coffee-card card border-0 h-100 animate-fade-in">
      <div className="coffee-card-img-container">
        {/* Tipo Badge (icono) */}
        <span className={`coffee-card-badge ${
          producto.tipo === 'caliente' ? 'bg-danger text-white' : 
          producto.tipo === 'frio' ? 'bg-info text-dark' : 'bg-warning text-dark'
        }`}>
          {producto.tipo === 'caliente' ? <><i className="bi bi-fire me-1"></i> Caliente</> : 
           producto.tipo === 'frio' ? <><i className="bi bi-snow me-1"></i> Frío</> : 
           <><i className="bi bi-cake2-fill me-1"></i> Postre</>}
        </span>
        <img 
          src={producto.imagen} 
          className="coffee-card-img card-img-top" 
          alt={producto.nombre} 
        />
      </div>
      <div className="card-body p-4 d-flex flex-column justify-content-between">
        <div>
          <h4 className="card-title text-cream fw-bold mb-2 font-serif">{producto.nombre}</h4>
          <p className="card-text text-cream-dark opacity-75 small mb-3">{producto.descripcion}</p>
        </div>
        <div>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <span className="fs-3 text-caramel fw-bold">${producto.precio.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProducto;
