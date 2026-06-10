import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="row g-4 mb-4 text-start">
          {/* Columna Branding */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center mb-3">
              <img 
                src="/assets/logo.png" 
                alt="Café 404 Logo" 
                className="me-3"
                style={{ height: '50px', borderRadius: '50%' }}
              />
              <span className="fs-3 fw-bold text-cream font-serif">Café 404</span>
            </div>
            <p className="small text-cream-dark opacity-75 mb-3">
              Un lugar único diseñado para amantes del café de especialidad y la tranquilidad. "Simple. Real. Delicioso."
            </p>
            <div className="d-flex gap-2">
              <a href="#" className="btn btn-sm btn-outline-secondary text-cream" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="btn btn-sm btn-outline-secondary text-cream" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="btn btn-sm btn-outline-secondary text-cream" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="btn btn-sm btn-outline-secondary text-cream" aria-label="TikTok">
                <i className="bi bi-tiktok"></i>
              </a>
            </div>
          </div>
          
          {/* Columna Enlaces Rápidos */}
          <div className="col-lg-2 col-md-6">
            <h5 className="text-caramel fw-bold mb-3 font-monospace" style={{ fontSize: '0.9rem', letterSpacing: '1px' }}>EXPLORA</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li>
                <Link to="/" className="text-cream-dark text-decoration-none hover-link">
                  <i className="bi bi-chevron-right text-caramel me-1 small"></i> Inicio
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-cream-dark text-decoration-none hover-link">
                  <i className="bi bi-chevron-right text-caramel me-1 small"></i> Menú
                </Link>
              </li>
              <li>
                <Link to="/promociones" className="text-cream-dark text-decoration-none hover-link">
                  <i className="bi bi-chevron-right text-caramel me-1 small"></i> Promociones
                </Link>
              </li>
              <li>
                <Link to="/sucursales" className="text-cream-dark text-decoration-none hover-link">
                  <i className="bi bi-chevron-right text-caramel me-1 small"></i> Sucursales
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="text-cream-dark text-decoration-none hover-link">
                  <i className="bi bi-chevron-right text-caramel me-1 small"></i> Galería
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-cream-dark text-decoration-none hover-link">
                  <i className="bi bi-chevron-right text-caramel me-1 small"></i> Nosotros
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Columna Horarios */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-caramel fw-bold mb-3 font-monospace" style={{ fontSize: '0.9rem', letterSpacing: '1px' }}>HORARIO</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-cream-dark opacity-75">
              <li className="d-flex justify-content-between">
                <span>Lunes - Viernes:</span>
                <span className="text-cream fw-semibold">7:00 AM - 8:00 PM</span>
              </li>
              <li className="d-flex justify-content-between">
                <span>Sábado:</span>
                <span className="text-cream fw-semibold">8:00 AM - 9:00 PM</span>
              </li>
              <li className="d-flex justify-content-between">
                <span>Domingo:</span>
                <span className="text-cream fw-semibold">8:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
          
          {/* Columna Contacto Rápido */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-caramel fw-bold mb-3 font-monospace" style={{ fontSize: '0.9rem', letterSpacing: '1px' }}>CONTACTO</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-cream-dark opacity-75">
              <li className="d-flex align-items-start gap-2">
                <i className="bi bi-geo-alt-fill text-caramel mt-1"></i>
                <span>Av. Fray Felipe de Jesús Moraga Sur, Santa Ana, El Salvador</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-telephone-fill text-caramel"></i>
                <span>+503 2440-1234</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-envelope-fill text-caramel"></i>
                <span>info@cafe404.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-secondary opacity-25 my-4" />
        
        {/* Fila Copyright */}
        <div className="row text-center align-items-center small text-cream-dark opacity-50">
          <div className="col-12 text-center">
            &copy; {new Date().getFullYear()} Café 404. Todos los derechos reservados.
          </div>
        </div>
      </div>
      
      {/* Estilo local hover-link para transiciones */}
      <style>{`
        .hover-link {
          transition: var(--transition-smooth);
        }
        .hover-link:hover {
          color: var(--color-caramel) !important;
          padding-left: 4px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
