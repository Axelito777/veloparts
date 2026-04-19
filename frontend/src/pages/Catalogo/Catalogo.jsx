import { useState } from 'react'
import './Catalogo.css'
import { Link } from 'react-router-dom'

const productos = [
  { id: 1, nombre: 'Rueda delantera 29"', marca: 'VeloParts Pro', precio: 89990, categoria: 'Ruedas', tipo: 'propia' },
  { id: 2, nombre: 'Rueda trasera 29"', marca: 'VeloParts Pro', precio: 92990, categoria: 'Ruedas', tipo: 'propia' },
  { id: 3, nombre: 'Casco Trail MTB', marca: 'Bell Sports', precio: 54990, categoria: 'Cascos', tipo: 'externo' },
  { id: 4, nombre: 'Casco Road Pro', marca: 'Giro', precio: 79990, categoria: 'Cascos', tipo: 'externo' },
  { id: 5, nombre: 'Guantes Full Finger', marca: 'Fox Racing', precio: 29990, categoria: 'Guantes', tipo: 'externo' },
  { id: 6, nombre: 'Guantes Half Finger', marca: 'Fox Racing', precio: 22990, categoria: 'Guantes', tipo: 'externo' },
  { id: 7, nombre: 'Freno hidráulico set', marca: 'VeloParts', precio: 74990, categoria: 'Frenos', tipo: 'propia' },
  { id: 8, nombre: 'Shimano Deore 12v', marca: 'Shimano', precio: 89990, categoria: 'Transmisión', tipo: 'externo' },
  { id: 9, nombre: 'Manubrio aluminio', marca: 'VeloParts', precio: 18990, categoria: 'Manubrio', tipo: 'propia' },
  { id: 10, nombre: 'Sillín ergonómico', marca: 'Selle Italia', precio: 44990, categoria: 'Sillín', tipo: 'externo' },
  { id: 11, nombre: 'Pedales plataforma', marca: 'VeloParts', precio: 19990, categoria: 'Pedales', tipo: 'propia' },
  { id: 12, nombre: 'Luces LED set', marca: 'Lezyne', precio: 34990, categoria: 'Iluminación', tipo: 'externo' },
]

const categorias = ['Todos', 'Ruedas', 'Cascos', 'Guantes', 'Frenos', 'Transmisión', 'Manubrio', 'Sillín', 'Pedales', 'Iluminación']

function Catalogo() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos')
  const [busqueda, setBusqueda] = useState('')
  const [orden, setOrden] = useState('default')

  const productosFiltrados = productos
    .filter(p => categoriaActiva === 'Todos' || p.categoria === categoriaActiva)
    .filter(p => p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                 p.marca.toLowerCase().includes(busqueda.toLowerCase()))
    .sort((a, b) => {
      if (orden === 'precio-asc') return a.precio - b.precio
      if (orden === 'precio-desc') return b.precio - a.precio
      return 0
    })

  const formatPrecio = (precio) =>
    precio.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })

  return (
    <div className="catalogo">

      <div className="catalogo-header">
        <h1>Catálogo de productos</h1>
        <p>{productosFiltrados.length} productos encontrados</p>
      </div>

      <div className="catalogo-controles">
        <div className="catalogo-busqueda">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8" stroke="#B4B2A9" strokeWidth="1.5"/>
            <path d="M21 21l-4.35-4.35" stroke="#B4B2A9" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input
            type="text"
            placeholder="Buscar producto o marca..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
        <select
          className="catalogo-orden"
          value={orden}
          onChange={(e) => setOrden(e.target.value)}
        >
          <option value="default">Ordenar por</option>
          <option value="precio-asc">Precio: menor a mayor</option>
          <option value="precio-desc">Precio: mayor a menor</option>
        </select>
      </div>

      <div className="catalogo-categorias">
        {categorias.map(cat => (
          <button
            key={cat}
            className={`catalogo-cat-btn ${categoriaActiva === cat ? 'activo' : ''}`}
            onClick={() => setCategoriaActiva(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="catalogo-grid">
        {productosFiltrados.map(producto => (
          <Link to={`/producto/${producto.id}`} key={producto.id} className="catalogo-card">
            <div className="catalogo-card-imagen">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="#B4B2A9" strokeWidth="1.5" fill="none"/>
                <circle cx="8.5" cy="8.5" r="1.5" stroke="#B4B2A9" strokeWidth="1.5" fill="none"/>
                <path d="M21 15l-5-5L5 21" stroke="#B4B2A9" strokeWidth="1.5" fill="none"/>
              </svg>
              {producto.tipo === 'propia' && (
                <span className="catalogo-badge-propia">Marca propia</span>
              )}
            </div>
            <div className="catalogo-card-info">
              <p className="catalogo-card-nombre">{producto.nombre}</p>
              <p className="catalogo-card-marca">{producto.marca}</p>
              <p className="catalogo-card-precio">{formatPrecio(producto.precio)}</p>
            </div>
          </Link>
        ))}

        {productosFiltrados.length === 0 && (
          <div className="catalogo-vacio">
            <p>No se encontraron productos</p>
          </div>
        )}
      </div>

    </div>
  )
}

export default Catalogo