import { useState } from 'react'
import './Producto.css'
import { useParams, Link } from 'react-router-dom'

const productos = [
  { id: 1, nombre: 'Rueda delantera 29"', marca: 'VeloParts Pro', precio: 89990, categoria: 'Ruedas', tipo: 'propia', descripcion: 'Rueda delantera de alta resistencia para mountain bike. Fabricada en aluminio 6061 con llanta doble pared. Compatible con ejes de 15mm y 9mm. Ideal para terrenos exigentes y uso diario.' },
  { id: 2, nombre: 'Rueda trasera 29"', marca: 'VeloParts Pro', precio: 92990, categoria: 'Ruedas', tipo: 'propia', descripcion: 'Rueda trasera reforzada para mountain bike 29". Construida para soportar el peso del ciclista en bajadas técnicas. Compatible con cassettes de 8 a 12 velocidades.' },
  { id: 3, nombre: 'Casco Trail MTB', marca: 'Bell Sports', precio: 54990, categoria: 'Cascos', tipo: 'externo', descripcion: 'Casco liviano con ventilación optimizada para trail y enduro. Certificación CE EN1078. Ajuste dial en la parte trasera. Disponible en tallas S, M y L.' },
  { id: 4, nombre: 'Casco Road Pro', marca: 'Giro', precio: 79990, categoria: 'Cascos', tipo: 'externo', descripcion: 'Casco aerodinámico para ciclismo de ruta. Muy liviano con 18 canales de ventilación. Sistema de ajuste Roc Loc 5. Tallas S, M y L disponibles.' },
  { id: 5, nombre: 'Guantes Full Finger', marca: 'Fox Racing', precio: 29990, categoria: 'Guantes', tipo: 'externo', descripcion: 'Guantes dedos completos para trail y enduro. Palma de silicona antideslizante. Dorso en lycra transpirable. Protección en nudillos.' },
  { id: 6, nombre: 'Guantes Half Finger', marca: 'Fox Racing', precio: 22990, categoria: 'Guantes', tipo: 'externo', descripcion: 'Guantes de medio dedo ideales para rutas largas en ruta o ciudad. Acolchado en palma para mayor comodidad. Material transpirable.' },
  { id: 7, nombre: 'Freno hidráulico set', marca: 'VeloParts', precio: 74990, categoria: 'Frenos', tipo: 'propia', descripcion: 'Set de frenos hidráulicos delantero y trasero. Mayor potencia de frenado con menos esfuerzo. Compatible con la mayoría de cuadros modernos. Incluye pastillas y aceite.' },
  { id: 8, nombre: 'Shimano Deore 12v', marca: 'Shimano', precio: 89990, categoria: 'Transmisión', tipo: 'externo', descripcion: 'Grupo Shimano Deore de 12 velocidades. Excelente relación calidad precio para trail y enduro. Cambio trasero con Shadow Plus para evitar golpeteo en terreno rugoso.' },
  { id: 9, nombre: 'Manubrio aluminio', marca: 'VeloParts', precio: 18990, categoria: 'Manubrio', tipo: 'propia', descripcion: 'Manubrio de aluminio 6061 rise 20mm. Ancho 780mm ideal para mountain bike. Diámetro central 31.8mm. Peso aproximado 280g.' },
  { id: 10, nombre: 'Sillín ergonómico', marca: 'Selle Italia', precio: 44990, categoria: 'Sillín', tipo: 'externo', descripcion: 'Sillín ergonómico con canal central para aliviar presión. Cubierta en microfibra resistente al agua. Compatible con riel estándar de 7mm.' },
  { id: 11, nombre: 'Pedales plataforma', marca: 'VeloParts', precio: 19990, categoria: 'Pedales', tipo: 'propia', descripcion: 'Pedales de plataforma en nylon reforzado con fibra de vidrio. Pines de acero reemplazables. Rodamientos sellados. Eje de acero CrMo.' },
  { id: 12, nombre: 'Luces LED set', marca: 'Lezyne', precio: 34990, categoria: 'Iluminación', tipo: 'externo', descripcion: 'Set de luces delantera y trasera LED recargables por USB. Delantera 500 lúmenes, trasera 75 lúmenes. Autonomía de hasta 8 horas en modo eco.' },
]

function Producto() {
  const { id } = useParams()
  const [cantidad, setCantidad] = useState(1)

  const producto = productos.find(p => p.id === parseInt(id))

  const formatPrecio = (precio) =>
    precio.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })

  if (!producto) {
    return (
      <div className="producto-no-encontrado">
        <p>Producto no encontrado</p>
        <Link to="/catalogo">Volver al catálogo</Link>
      </div>
    )
  }

  return (
    <div className="producto">

      <div className="producto-breadcrumb">
        <Link to="/catalogo">Catálogo</Link>
        <span>›</span>
        <span>{producto.categoria}</span>
        <span>›</span>
        <span>{producto.nombre}</span>
      </div>

      <div className="producto-contenido">

        <div className="producto-imagen">
          <div className="producto-imagen-principal">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="#B4B2A9" strokeWidth="1.5" fill="none"/>
              <circle cx="8.5" cy="8.5" r="1.5" stroke="#B4B2A9" strokeWidth="1.5" fill="none"/>
              <path d="M21 15l-5-5L5 21" stroke="#B4B2A9" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
          <div className="producto-imagen-miniaturas">
            {[1,2,3].map(i => (
              <div key={i} className="producto-miniatura">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="#B4B2A9" strokeWidth="1.5" fill="none"/>
                  <circle cx="8.5" cy="8.5" r="1.5" stroke="#B4B2A9" strokeWidth="1.5" fill="none"/>
                  <path d="M21 15l-5-5L5 21" stroke="#B4B2A9" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
            ))}
          </div>
        </div>

        <div className="producto-info">
          {producto.tipo === 'propia' && (
            <span className="producto-badge-propia">Marca propia</span>
          )}

          <h1>{producto.nombre}</h1>
          <p className="producto-marca">{producto.marca}</p>
          <p className="producto-precio">{formatPrecio(producto.precio)}</p>

          <div className="producto-separador" />

          <div className="producto-descripcion">
            <h3>Descripción</h3>
            <p>{producto.descripcion}</p>
          </div>

          <div className="producto-separador" />

          <div className="producto-acciones">
            <div className="producto-cantidad">
              <button
                className="cantidad-btn"
                onClick={() => setCantidad(c => Math.max(1, c - 1))}
              >−</button>
              <span>{cantidad}</span>
              <button
                className="cantidad-btn"
                onClick={() => setCantidad(c => c + 1)}
              >+</button>
            </div>

            <button className="producto-btn-agregar">
              Agregar al carrito
            </button>
          </div>

          <div className="producto-envio">
            <div className="producto-envio-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="#4A9E78" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              </svg>
              <span>Retiro disponible en tienda</span>
            </div>
            <div className="producto-envio-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="1" y="3" width="15" height="13" rx="1" stroke="#4A9E78" strokeWidth="1.5" fill="none"/>
                <path d="M16 8h4l3 3v5h-7V8z" stroke="#4A9E78" strokeWidth="1.5" fill="none"/>
                <circle cx="5.5" cy="18.5" r="1.5" stroke="#4A9E78" strokeWidth="1.5" fill="none"/>
                <circle cx="18.5" cy="18.5" r="1.5" stroke="#4A9E78" strokeWidth="1.5" fill="none"/>
              </svg>
              <span>Envío a domicilio disponible</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Producto