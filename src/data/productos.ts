export interface Producto {
  id: number;
  nombre: string;
  tipo: 'caliente' | 'frio' | 'postre';
  precio: number;
  descripcion: string;
  imagen: string;
  destacado?: boolean;
}

export const productos: Producto[] = [
  {
    id: 1,
    nombre: "Latte Especial",
    tipo: "caliente",
    precio: 1.50,
    descripcion: "Espresso doble con leche cremosa al vapor y un sutil arte latte en la superficie.",
    imagen: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=400",
    destacado: true
  },
  {
    id: 2,
    nombre: "Frappé de Caramelo",
    tipo: "frio",
    precio: 2.00,
    descripcion: "Café mezclado con hielo, leche, salsa de caramelo premium y crema batida.",
    imagen: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=400",
    destacado: true
  },
  {
    id: 3,
    nombre: "Capuccino de Canela",
    tipo: "caliente",
    precio: 2.25,
    descripcion: "Equilibrio perfecto de espresso, leche al vapor y abundante espuma con canela espolvoreada.",
    imagen: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=400",
    destacado: true
  },
  {
    id: 4,
    nombre: "Espresso Ristretto",
    tipo: "caliente",
    precio: 1.25,
    descripcion: "Extracción corta de espresso con un sabor concentrado y cuerpo denso y dulce.",
    imagen: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400"
  },
  {
    id: 5,
    nombre: "Americano Clásico",
    tipo: "caliente",
    precio: 1.50,
    descripcion: "Espresso de especialidad diluido en agua caliente, conservando notas de chocolate y avellana.",
    imagen: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=400"
  },
  {
    id: 6,
    nombre: "Mocha Blanco Caliente",
    tipo: "caliente",
    precio: 2.50,
    descripcion: "Espresso combinado con chocolate blanco derretido, leche cremosa y un toque de vainilla.",
    imagen: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=400"
  },
  {
    id: 7,
    nombre: "Cold Brew de la Casa",
    tipo: "frio",
    precio: 2.25,
    descripcion: "Café extraído en frío lentamente durante 18 horas para un sabor suave y refrescante.",
    imagen: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=400"
  },
  {
    id: 8,
    nombre: "Iced Latte de Vainilla",
    tipo: "frio",
    precio: 2.20,
    descripcion: "Espresso vertido sobre leche fría, hielo y un toque artesanal de jarabe de vainilla.",
    imagen: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=400"
  },
  {
    id: 9,
    nombre: "Tarta de Queso y Frutos Rojos",
    tipo: "postre",
    precio: 3.50,
    descripcion: "Suave tarta de queso horneada sobre galleta crujiente, cubierta con mermelada artesanal de frutos rojos.",
    imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=400"
  },
  {
    id: 10,
    nombre: "Croissant de Almendras",
    tipo: "postre",
    precio: 1.75,
    descripcion: "Hojaldre crujiente relleno de crema frangipane de almendras y decorado con almendras fileteadas.",
    imagen: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400"
  },
  {
    id: 11,
    nombre: "Muffin de Chocolate Belga",
    tipo: "postre",
    precio: 1.50,
    descripcion: "Esponjoso muffin de chocolate relleno de pepitas gigantes de auténtico chocolate belga.",
    imagen: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=400"
  },
  {
    id: 12,
    nombre: "Tiramisú 404",
    tipo: "postre",
    precio: 3.25,
    descripcion: "Postre tradicional italiano con capas de bizcocho soletilla bañado en nuestro espresso y mascarpone cremoso.",
    imagen: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=400"
  }
];
