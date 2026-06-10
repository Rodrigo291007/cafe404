import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Importar Bootstrap 5.3.3 y Bootstrap Icons
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Importar nuestros estilos globales y específicos
import './index.css'
import './App.css'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
