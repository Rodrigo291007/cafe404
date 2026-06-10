import React, { useState } from 'react';
import { productos } from '../data/productos';
import type { Producto } from '../data/productos';
import CardProducto from '../components/CardProducto';

type Categoria = 'todos' | 'caliente' | 'frio' | 'postre';

const Menu: React.FC = () => {
  const [categoriaActiva, setCategoriaActiva] = useState<Categoria>('todos');
  const [busqueda, setBusqueda] = useState<string>('');

  // Filtrado lógico dinámico combinando buscador en tiempo real y categoría activa
  const productosFiltrados = productos.filter((producto: Producto) => {
    // 1. Filtrar por categoría
    const cumpleCategoria = categoriaActiva === 'todos' || producto.tipo === categoriaActiva;
    // 2. Filtrar por búsqueda de nombre en tiempo real (case-insensitive)
    const cumpleBusqueda = producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) || 
                           producto.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    
    return cumpleCategoria && cumpleBusqueda;
  });

  return (
    <div className="container py-5 animate-fade-in">
      {/* Cabecera del Menú */}
      <div className="text-center mb-5">
        <span className="text-caramel font-monospace text-uppercase tracking-wider">Carta Digital</span>
        <h1 className="display-4 text-cream fw-bold mt-2">Nuestro Menú Exclusivo</h1>
        <div className="mx-auto bg-caramel mt-3 mb-4" style={{ width: '80px', height: '3px' }}></div>
        <p className="text-cream-dark mx-auto" style={{ maxWidth: '600px' }}>
          Desde espressos intensos y lattes cremosos hasta postres recién horneados. Todo elaborado por baristas profesionales y maestros pasteleros.
        </p>
      </div>

      {/* Panel de Filtros y Buscador */}
      <div className="row g-4 mb-5 align-items-center justify-content-between">
        {/* Botones de Categorías (Bootstrap Group) */}
        <div className="col-lg-6 col-md-12 d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
          <button 
            onClick={() => setCategoriaActiva('todos')}
            className={`btn px-4 py-2 fw-semibold rounded-pill ${
              categoriaActiva === 'todos' ? 'btn-caramel' : 'btn-outline-caramel'
            }`}
          >
            ☕ Todos
          </button>
          <button 
            onClick={() => setCategoriaActiva('caliente')}
            className={`btn px-4 py-2 fw-semibold rounded-pill ${
              categoriaActiva === 'caliente' ? 'btn-caramel' : 'btn-outline-caramel'
            }`}
          >
            🔥 Calientes
          </button>
          <button 
            onClick={() => setCategoriaActiva('frio')}
            className={`btn px-4 py-2 fw-semibold rounded-pill ${
              categoriaActiva === 'frio' ? 'btn-caramel' : 'btn-outline-caramel'
            }`}
          >
            ❄️ Fríos
          </button>
          <button 
            onClick={() => setCategoriaActiva('postre')}
            className={`btn px-4 py-2 fw-semibold rounded-pill ${
              categoriaActiva === 'postre' ? 'btn-caramel' : 'btn-outline-caramel'
            }`}
          >
            🍰 Postres
          </button>
        </div>

        {/* Barra de Búsqueda */}
        <div className="col-lg-4 col-md-8 mx-auto mx-lg-0">
          <div className="input-group">
            <span className="input-group-text bg-coffee-dark border-secondary text-caramel">
              <i className="bi bi-search"></i>
            </span>
            <input 
              type="text" 
              className="form-control form-custom-control placeholder-cream"              
              placeholder="Buscar por nombre o descripción..." 
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            {busqueda && (
              <button 
                className="btn btn-outline-secondary border-secondary text-cream-dark" 
                type="button"
                onClick={() => setBusqueda('')}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Grid de Productos */}
      {productosFiltrados.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {productosFiltrados.map((producto: Producto) => (
            <div key={producto.id} className="col">
              <CardProducto producto={producto} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-5 glass-card p-5 mt-4">
          <div className="display-1 text-caramel mb-3">
            <i className="bi bi-cup-hot-fill" style={{ opacity: 0.3 }}></i>
          </div>
          <h3 className="text-cream mb-2">No se encontraron productos</h3>
          <p className="text-cream-dark opacity-75">
            Prueba ajustando los filtros o escribiendo otra palabra en el buscador.
          </p>
          <button 
            className="btn btn-caramel mt-3"
            onClick={() => { setCategoriaActiva('todos'); setBusqueda(''); }}
          >
            Restablecer Búsqueda
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
