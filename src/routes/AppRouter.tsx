import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Importación de Páginas
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Promociones from '../pages/Promociones';
import Sucursales from '../pages/Sucursales';
import Galeria from '../pages/Galeria';
import Nosotros from '../pages/Nosotros';

const AppRouter: React.FC = () => {
  // Manejo de estado del Tema Claro/Oscuro (Sin localStorage)
  const [isLightTheme, setIsLightTheme] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsLightTheme(prev => !prev);
  };

  // Sincronizar el estado del tema con la clase del elemento body
  useEffect(() => {
    if (isLightTheme) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [isLightTheme]);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 bg-espresso text-cream-dark">
        {/* Barra de Navegación Global con control del interruptor de tema */}
        <Navbar isLightTheme={isLightTheme} onToggleTheme={toggleTheme} />
        
        {/* Contenedor Principal de Contenido Fluyente */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/promociones" element={<Promociones />} />
            <Route path="/sucursales" element={<Sucursales />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/nosotros" element={<Nosotros />} />
            
            {/* Redirección por defecto si la ruta no existe (redirige a Inicio) */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        
        {/* Pie de Página Global */}
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
