import React from 'react';
import { Link } from 'react-router-dom';
import { productos } from '../data/productos';

const Home: React.FC = () => {
  // Filtrar los productos destacados para mostrar en la página de inicio
  const destacados = productos.filter(p => p.destacado);

  return (
    <div className="animate-fade-in text-start">
      {/* Banner Principal */}
      <section className="hero-banner d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="hero-content text-center py-5">
                <span className="text-caramel font-monospace text-uppercase tracking-wider mb-2 d-inline-block">
                  <i className="bi bi-cup-hot-fill me-2"></i>Café de Especialidad
                </span>
                <h1 className="hero-title">Café 404</h1>
                <p className="fs-5 text-cream-dark mb-4">
                  "Simple. Real. Delicioso." Encontraste el rincón perfecto que no sabías que estabas buscando.
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Link to="/menu" className="btn btn-caramel px-4 py-2.5">
                    <i className="bi bi-journal-richtext me-2"></i>Ver Menú Completo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Bienvenida / Sobre Nosotros */}
      <section className="py-5 bg-coffee-dark">
        <div className="container py-4">
          <div className="row align-items-center g-5">
            <div className="col-md-6 text-center text-md-start">
              <span className="text-caramel font-monospace text-uppercase">Nuestra Pasión</span>
              <h2 className="display-5 text-cream fw-bold mt-2 mb-4 font-serif">Un Refugio Para Los Amantes Del Buen Café</h2>
              <p className="text-cream-dark mb-3 lead">
                En Café 404, seleccionamos a mano cada grano de fincas sostenibles locales, tostándolos con precisión para liberar notas intensas y complejas.
              </p>
              <p className="text-cream-dark mb-4 opacity-75">
                No somos solo una cafetería, somos una experiencia de tranquilidad en medio de la rutina diaria. Nuestro ambiente está diseñado para inspirarte, ya sea que vengas a estudiar, trabajar o simplemente a disfrutar de un momento inolvidable.
              </p>
              <Link to="/sucursales" className="btn btn-outline-caramel">
                <i className="bi bi-geo-alt me-2"></i>Visita Nuestras Sucursales
              </Link>
            </div>
            <div className="col-md-6">
              <div className="position-relative p-3">
                <div className="border border-caramel border-3 position-absolute w-100 h-100 top-0 start-0 translate-middle-x ms-4 mt-4" style={{ zIndex: 0, opacity: 0.2, borderRadius: '15px' }}></div>
                <img 
                  src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=600" 
                  alt="Vertido de café premium" 
                  className="img-fluid rounded-4 shadow-lg position-relative" 
                  style={{ zIndex: 1, border: '1px solid rgba(200, 150, 62, 0.3)', width: '100%', height: '380px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Productos Destacados */}
      <section className="py-5 bg-espresso">
        <div className="container py-4">
          <div className="text-center mb-5 text-center">
            <span className="text-caramel font-monospace text-uppercase">Selección de la Casa</span>
            <h2 className="display-6 text-cream fw-bold mt-2 font-serif">Productos Destacados</h2>
            <div className="mx-auto bg-caramel mt-3" style={{ width: '60px', height: '3px' }}></div>
          </div>

          <div className="row g-4 justify-content-center">
            {destacados.map(producto => (
              <div key={producto.id} className="col-md-6 col-lg-4">
                <div className="coffee-card card h-100 border-0">
                  <div className="coffee-card-img-container">
                    <span className="coffee-card-badge">
                      <i className="bi bi-star-fill me-1"></i> Favorito
                    </span>
                    <img 
                      src={producto.imagen} 
                      className="coffee-card-img card-img-top" 
                      alt={producto.nombre} 
                    />
                  </div>
                  <div className="card-body text-center p-4 d-flex flex-column justify-content-between">
                    <div>
                      <span className="badge bg-dark text-caramel border border-secondary mb-2 text-uppercase font-monospace">
                        {producto.tipo}
                      </span>
                      <h4 className="card-title text-cream fw-bold mb-2 font-serif">{producto.nombre}</h4>
                      <p className="card-text text-cream-dark opacity-75 small mb-3">{producto.descripcion}</p>
                    </div>
                    <div>
                      <h3 className="text-caramel fw-bold mb-3">${producto.precio.toFixed(2)}</h3>
                      <Link to="/menu" className="btn btn-outline-caramel btn-sm w-100">
                        Ver en Menú <i className="bi bi-arrow-right ms-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5">
            <Link to="/menu" className="btn btn-caramel px-5 py-3 fs-5">
              Explorar Menú Completo <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
