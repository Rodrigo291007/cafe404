import React from 'react';

export interface EquipoMiembro {
  id: number;
  nombre: string;
  rol: string;
  correo: string;
  bio: string;
  imagen: string;
}

interface CardEquipoProps {
  miembro: EquipoMiembro;
}

const CardEquipo: React.FC<CardEquipoProps> = ({ miembro }) => {
  return (
    <div className="card h-100 bg-coffee-dark border border-secondary rounded-4 overflow-hidden text-center p-4 animate-fade-in hover-team-card">
      <div className="position-relative mx-auto mb-4" style={{ width: '130px', height: '130px' }}>
        <img 
          src={miembro.imagen} 
          alt={miembro.nombre} 
          className="rounded-circle border border-caramel border-2 shadow"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div className="position-absolute bottom-0 end-0 bg-caramel text-dark rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: '32px', height: '32px', fontSize: '0.75rem' }}>
          <i className="bi bi-star-fill text-dark"></i>
        </div>
      </div>
      
      <h5 className="text-cream fw-bold mb-1 font-serif">{miembro.nombre}</h5>
      <span className="badge bg-secondary text-caramel border border-secondary mb-2 text-uppercase font-monospace" style={{ fontSize: '0.75rem' }}>
        {miembro.rol}
      </span>
      <p className="small text-cream-dark opacity-50 mb-3 font-monospace">
      </p>
      
      <p className="text-cream-dark opacity-75 small mb-4 flex-grow-1">
        "{miembro.bio}"
      </p>

      <div className="border-top border-secondary pt-3 mt-auto text-cream-dark opacity-75 small d-flex align-items-center justify-content-center gap-2">
        <i className="bi bi-envelope-fill text-caramel"></i>
        <span className="font-monospace">{miembro.correo}</span>
      </div>

      <style>{`
        .hover-team-card {
          transition: var(--transition-smooth);
        }
        .hover-team-card:hover {
          transform: translateY(-8px);
          border-color: var(--color-caramel) !important;
          box-shadow: 0 10px 25px rgba(200, 150, 62, 0.15);
        }
      `}</style>
    </div>
  );
};

export default CardEquipo;
