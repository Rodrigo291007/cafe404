import React from 'react';
import CardEquipo from '../components/CardEquipo';
import type { EquipoMiembro } from '../components/CardEquipo';

const Nosotros: React.FC = () => {
  // Lista de miembros del equipo basada en los integrantes provistos
  const equipo: EquipoMiembro[] = [
    {
      id: 1,
      nombre: "Jonathan Duvan Salguero",
      rol: "Director de Barismo y Tostado",
      correo: "jduvan.salguero26@cafe404.com",
      bio: "Apasionado por encontrar el perfil de tostado perfecto para cada grano de especialidad. Experto en arte latte.",
      imagen: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300"
    },
    {
      id: 2,
      nombre: "Carlos Daniel Mancía",
      rol: "Control de Calidad",
      correo: "carlos.mancia26@cafe404.com",
      bio: "Encargado de catar cada lote de granos que llega a nuestras tiendas, asegurando notas dulces y balanceadas.",
      imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300"
    },
    {
      id: 3,
      nombre: "Samuel Alexander Sánchez",
      rol: "Jefe de Operaciones",
      correo: "samuel.sanchez26@cafe404.com",
      bio: "Planificador estratégico del ambiente Café 404, coordinando el diseño de las barras y la atención premium al cliente.",
      imagen: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300"
    },
    {
      id: 4,
      nombre: "José Rodrigo Zavala",
      rol: "Coordinador de Alianzas",
      correo: "jose.zavala26@cafe404.com",
      bio: "Dedica su tiempo a establecer vínculos éticos con caficultores locales, promoviendo el comercio justo y ecológico.",
      imagen: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300"
    }
  ];

  // Datos curiosos para la sección "¿Sabías que?"
  const datosCuriosos = [
    {
      id: "curiosidad1",
      titulo: "🐐 El origen gracias a las cabras",
      contenido: "La leyenda cuenta que en el siglo IX, un pastor de cabras etíope llamado Kaldi notó que su rebaño se comportaba de manera inusualmente enérgica después de comer las cerezas rojas de un arbusto silvestre. Así se descubrieron las propiedades estimulantes del cafeto."
    },
    {
      id: "curiosidad2",
      titulo: "🛢️ El segundo bien más comercializado",
      contenido: "El café es el segundo producto básico más comercializado en todo el planeta, superado únicamente por el petróleo crudo. Se consumen alrededor de 2,250 millones de tazas de café al día en el mundo."
    },
    {
      id: "curiosidad3",
      titulo: "🧪 Café 404: Una búsqueda inesperada",
      contenido: "Nuestro nombre se inspira en el famoso error de Internet '404 Not Found'. Decidimos llamarnos así porque representamos ese rincón escondido y perfecto de paz y sabor que no sabías que existía ni que estabas buscando, pero que finalmente has encontrado."
    },
    {
      id: "curiosidad4",
      titulo: "💧 El agua es clave",
      contenido: "Una taza de café filtrado es aproximadamente 98% agua. Esto significa que la calidad del agua utilizada (mineralización y temperatura a 90°C) influye casi tanto en el sabor final como la misma selección de granos tostados."
    }
  ];

  return (
    <div className="container py-5 animate-fade-in text-start">
      {/* Cabecera */}
      <div className="text-center mb-5">
        <span className="text-caramel font-monospace text-uppercase tracking-wider">Quiénes Somos</span>
        <h1 className="display-4 text-cream fw-bold mt-2">Nuestra Historia y Valores</h1>
        <div className="mx-auto bg-caramel mt-3 mb-4" style={{ width: '80px', height: '3px' }}></div>
        <p className="text-cream-dark mx-auto text-center" style={{ maxWidth: '600px' }}>
          Detrás de cada taza que servimos hay años de domar el fuego del tostador y calibrar espressos perfectos. Nacimos como un grupo de baristas y apasionados del café de especialidad que querían romper con lo comercial. Decidimos abrir este espacio en Santa Ana, San Salvador y San Miguel para conectar directamente el esfuerzo de los caficultores locales con tu taza diaria, sirviendo solo café con puntajes de excelencia.
        </p>
      </div>

      {/* Sección Historia */}
      <section className="mb-5 py-4">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <h2 className="text-cream fw-bold mb-4 font-serif display-6">El Origen de Café 404</h2>
            <p className="text-cream-dark mb-3 lead">
              Nacimos de la pasión por el barismo y nos convertimos en una filosofía de vida.
            </p>
            <p className="text-cream-dark opacity-75 mb-3">
              Todo comenzó tras años de domar el fuego del tostador y calibrar espressos perfectos. Un grupo de baristas y apasionados del café de especialidad decidimos unir fuerzas para romper con lo comercial y crear una plataforma que transmitiera el aroma, la calidez y la mística de las cafeterías artesanales de El Salvador.
            </p>
            <p className="text-cream-dark opacity-75">
              Hoy, Café 404 representa un santuario digital y físico. Seleccionamos granos cultivados a más de 1,200 metros sobre el nivel del mar en la cordillera Apaneca-Ilamatepec, garantizando perfiles de taza limpios, dulces e inigualables.
            </p>
          </div>
          <div className="col-lg-6">
            <img 
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600" 
              alt="Taza de café humeante en barra" 
              className="img-fluid rounded-4 shadow-lg border border-secondary"
              style={{ width: '100%', height: '350px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="mb-5 py-5 border-top border-bottom border-secondary">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="glass-card p-4 h-100 border-0">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="bg-caramel text-cream rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                  <i className="bi bi-compass-fill fs-4"></i>
                </div>
                <h3 className="text-cream fw-bold mb-0 font-serif">Nuestra Misión</h3>
              </div>
              <p className="text-cream-dark opacity-75">
                Brindar una experiencia sensorial inigualable a través del café de especialidad salvadoreño, ofreciendo espacios modernos y confortables que inspiren la creatividad, la productividad y el encuentro humano, respaldados por una atención cálida y sostenible.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="glass-card p-4 h-100 border-0">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="bg-caramel text-cream rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                  <i className="bi bi-eye-fill fs-4"></i>
                </div>
                <h3 className="text-cream fw-bold mb-0 font-serif">Nuestra Visión</h3>
              </div>
              <p className="text-cream-dark opacity-75">
                Ser la cadena de cafeterías de especialidad líder y más querida en el occidente del país, reconocida por nuestra excelencia en barismo, el apoyo directo a los caficultores locales y el desarrollo de tecnologías y entornos digitales amigables para el usuario.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección del Equipo */}
      <section className="mb-5 py-4">
        <div className="text-center mb-5">
          <span className="text-caramel font-monospace text-uppercase">El Alma de la Barra</span>
          <h2 className="display-6 text-cream fw-bold mt-2 font-serif">Nuestro Equipo de Trabajo</h2>
          <div className="mx-auto bg-caramel mt-2 mb-4" style={{ width: '50px', height: '2px' }}></div>
        </div>

        <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center">
          {equipo.map(miembro => (
            <div key={miembro.id} className="col">
              <CardEquipo miembro={miembro} />
            </div>
          ))}
        </div>
      </section>

      {/* Sección ¿Sabías que? */}
      <section className="py-4">
        <div className="text-center mb-5">
          <span className="text-caramel font-monospace text-uppercase">Cultura Cafetera</span>
          <h2 className="display-6 text-cream fw-bold mt-2 font-serif">¿Sabías que?</h2>
          <div className="mx-auto bg-caramel mt-2 mb-4" style={{ width: '50px', height: '2px' }}></div>
        </div>

        <div className="accordion" id="sabiasQueAccordion">
          {datosCuriosos.map((item, index) => (
            <div 
              key={item.id} 
              className="accordion-item bg-coffee-dark border border-secondary mb-3 rounded-3 overflow-hidden"
              style={{ border: '1px solid rgba(200, 150, 62, 0.15)' }}
            >
              <h2 className="accordion-header" id={`heading-${item.id}`}>
                <button 
                  className={`accordion-button bg-coffee-dark text-cream border-0 font-serif fs-5 fw-bold ${index !== 0 ? 'collapsed' : ''}`}
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target={`#collapse-${item.id}`} 
                  aria-expanded={index === 0 ? "true" : "false"} 
                  aria-controls={`collapse-${item.id}`}
                  style={{ boxShadow: 'none' }}
                >
                  {item.titulo}
                </button>
              </h2>
              <div 
                id={`collapse-${item.id}`} 
                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} 
                aria-labelledby={`heading-${item.id}`} 
                data-bs-parent="#sabiasQueAccordion"
              >
                <div className="accordion-body text-cream-dark opacity-75 bg-espresso border-top border-secondary">
                  {item.contenido}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
