import React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface NavbarProps {
  isLightTheme: boolean;
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLightTheme, onToggleTheme }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img 
            src="/assets/logo.png" 
            alt="Café 404 Logo" 
            className="navbar-logo-img me-3"
          />
          <div className="d-flex flex-column text-start">
            <span className="fs-4 fw-bold font-serif text-cream mb-2" style={{ letterSpacing: '1px' }}>Café 404</span>
            <span className="font-monospace text-caramel text-uppercase mt-1" style={{ fontSize: '0.65rem', letterSpacing: '2px', opacity: 0.9 }}>Simple. Real. Delicioso.</span>
          </div>
        </Link>
        
        <div className="d-flex align-items-center gap-2 order-lg-last ms-2">
          {/* Botón de Cambio de Tema Claro/Oscuro */}
          <button 
            onClick={onToggleTheme} 
            className="btn btn-outline-caramel rounded-circle p-2 d-flex align-items-center justify-content-center" 
            style={{ width: '40px', height: '40px' }}
            title={isLightTheme ? "Cambiar a Modo Oscuro" : "Cambiar a Modo Claro"}
          >
            {isLightTheme ? (
              <i className="bi bi-moon-stars-fill text-dark fs-5"></i>
            ) : (
              <i className="bi bi-sun-fill text-caramel fs-5"></i>
            )}
          </button>

          <button 
            className="navbar-toggler border-secondary" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarContent" 
            aria-controls="navbarContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                <i className="bi bi-house-door-fill me-1"></i> Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/menu">
                <i className="bi bi-cup-hot-fill me-1"></i> Menú
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/promociones">
                <i className="bi bi-percent me-1"></i> Promociones
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sucursales">
                <i className="bi bi-geo-alt-fill me-1"></i> Sucursales
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/galeria">
                <i className="bi bi-images me-1"></i> Galería
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/nosotros">
                <i className="bi bi-people-fill me-1"></i> Nosotros
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
