import React, { useEffect } from 'react';
import CardSucursal from '../components/CardSucursal';
import type { SucursalData } from '../components/CardSucursal';

// Declaración global para Leaflet.js inyectado en index.html
declare const L: any;

const Sucursales: React.FC = () => {
  const listadoSucursales: SucursalData[] = [
    {
      id: 1,
      nombre: "Café 404 - Santa Ana Centro",
      direccion: "Centro Comercial Metrocentro Santa Ana, Santa Ana, El Salvador",
      horario: "Lunes a Domingo: 7:00 AM - 8:30 PM",
      telefono: "2440-1234",
      mapaIframeUrl: "" 
    },
    {
      id: 2,
      nombre: "Café 404 - San Salvador",
      direccion: "Metrocentro San Salvador, San Salvador, El Salvador",
      horario: "Lunes a Domingo: 7:00 AM - 9:00 PM",
      telefono: "2222-5678",
      mapaIframeUrl: ""
    },
    {
      id: 3,
      nombre: "Café 404 - San Miguel",
      direccion: "Centro Comercial El Encuentro, San Miguel, El Salvador",
      horario: "Lunes a Sábado: 8:00 AM - 8:00 PM",
      telefono: "2661-9876",
      mapaIframeUrl: ""
    }
  ];

  useEffect(() => {
    // Inicializar el mapa de Leaflet en el div con ID 'mapa-leaflet'
    // Coordenadas El Salvador
    const mapa = L.map('mapa-leaflet').setView([13.7942, -88.8965], 8);

    // Capa mapa normal (OpenStreetMap)
    const normal = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      { 
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }
    );

    // Capa satélite (ESRI)
    const satelite = L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      { 
        maxZoom: 19,
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
      }
    );

    // Agregar capa inicial
    normal.addTo(mapa);

    // Sucursal Santa Ana
    const santaAna = L.marker([13.9772084, -89.5645234]).addTo(mapa);
    santaAna.bindTooltip(
      "<b>Café 404 Santa Ana</b><br>Dirección: Centro Comercial Metrocentro Santa Ana<br>Teléfono: 2440-1234"
    );

    // Sucursal San Salvador
    const sanSalvador = L.marker([13.7060706, -89.2141875]).addTo(mapa);
    sanSalvador.bindTooltip(
      "<b>Café 404 San Salvador</b><br>Dirección: Metrocentro San Salvador<br>Teléfono: 2222-5678"
    );

    // Sucursal San Miguel
    const sanMiguel = L.marker([13.4635225, -88.168757]).addTo(mapa);
    sanMiguel.bindTooltip(
      "<b>Café 404 San Miguel</b><br>Dirección: Centro Comercial El Encuentro<br>Teléfono: 2661-9876"
    );

    // Selector de capas
    const capas = {
      "Mapa": normal,
      "Satélite": satelite
    };
    L.control.layers(capas).addTo(mapa);

    // Limpieza al desmontar el componente para evitar mapas duplicados
    return () => {
      mapa.remove();
    };
  }, []);

  return (
    <div className="container py-5 animate-fade-in text-start">
      {/* Cabecera */}
      <div className="text-center mb-5">
        <span className="text-caramel font-monospace text-uppercase tracking-wider">¿Dónde Encontrarnos?</span>
        <h1 className="display-4 text-cream fw-bold mt-2 font-serif">Nuestras Sucursales</h1>
        <div className="mx-auto bg-caramel mt-3 mb-4" style={{ width: '80px', height: '3px' }}></div>
        <p className="text-cream-dark mx-auto text-center" style={{ maxWidth: '600px' }}>
          Ven y visítanos en cualquiera de nuestras sucursales acogedoras. Contamos con excelente señal de Wi-Fi, aire acondicionado y el mejor ambiente para tu comodidad.
        </p>
      </div>

      {/* Mapa interactivo Leaflet */}
      <div className="row mb-5">
        <div className="col-12">
          <h3 className="text-cream fw-bold mb-3 font-serif">Mapa de Cobertura Nacional</h3>
          <div 
            id="mapa-leaflet" 
            className="shadow"
            style={{ 
              height: '500px', 
              width: '100%', 
              borderRadius: '16px', 
              border: '2px solid rgba(176, 132, 92, 0.3)',
              position: 'relative',
              zIndex: 1
            }}
          ></div>
        </div>
      </div>

      {/* Grid de sucursales */}
      <div className="row g-4 justify-content-center">
        {listadoSucursales.map(sucursal => (
          <div key={sucursal.id} className="col-lg-4 col-md-6 col-sm-12">
            <CardSucursal sucursal={sucursal} />
          </div>
        ))}
      </div>

      {/* Servicios generales en sucursal */}
      <div className="mt-5 py-5 border-top border-secondary text-center">
        <h3 className="text-cream fw-bold mb-4 font-serif">Servicios Incluidos en Nuestras Mesas</h3>
        <div className="row g-4 justify-content-center text-center">
          <div className="col-6 col-md-3">
            <div className="p-3 bg-coffee-dark rounded border border-secondary shadow-sm">
              <i className="bi bi-wifi display-4 text-caramel d-block mb-3"></i>
              <span className="text-cream fw-semibold">Wi-Fi de Alta Velocidad</span>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-3 bg-coffee-dark rounded border border-secondary shadow-sm">
              <i className="bi bi-snow display-4 text-caramel d-block mb-3"></i>
              <span className="text-cream fw-semibold">Aire Acondicionado</span>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-3 bg-coffee-dark rounded border border-secondary shadow-sm">
              <i className="bi bi-plug display-4 text-caramel d-block mb-3"></i>
              <span className="text-cream fw-semibold">Contactos de Carga</span>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-3 bg-coffee-dark rounded border border-secondary shadow-sm">
              <i className="bi bi-music-note-beamed display-4 text-caramel d-block mb-3"></i>
              <span className="text-cream fw-semibold">Música Acústica Relajante</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sucursales;
