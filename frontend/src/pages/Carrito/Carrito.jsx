import './Carrito.css'
import { Link } from 'react-router-dom'

function Carrito() {

  const productos = [
    { id: 1, nombre: 'Rueda delantera 29"', marca: 'VeloParts Pro', precio: 89990, cantidad: 1 },
    { id: 2, nombre: 'Casco Trail MTB', marca: 'Bell Sports', precio: 54990, cantidad: 2 },
    { id: 3, nombre: 'Guantes Full Finger', marca: 'Fox Racing', precio: 29990, cantidad: 1 },
  ]

  const total = productos.reduce((acc, p) => acc + p.precio * p.cantidad, 0)

  const formatPrecio = (precio) =>
    precio.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })

  return (
    <div className="carrito">
      <div className="carrito-header">
        <h1>Tu carrito</h1>
        <span className="carrito-cantidad">{productos.length} productos</span>
      </div>

      <div className="carrito-contenido">
        <div className="carrito-lista">

          <div className="carrito-lista-header">
            <span>Producto</span>
            <span>Cantidad</span>
            <span>Subtotal</span>
          </div>

          {productos.map((producto) => (
            <div key={producto.id} className="carrito-item">
              <div className="carrito-item-info">
                <div className="carrito-item-imagen">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#B4B2A9" strokeWidth="1.5" fill="none"/>
                    <circle cx="8.5" cy="8.5" r="1.5" stroke="#B4B2A9" strokeWidth="1.5" fill="none"/>
                    <path d="M21 15l-5-5L5 21" stroke="#B4B2A9" strokeWidth="1.5" fill="none"/>
                  </svg>
                </div>
                <div>
                  <p className="carrito-item-nombre">{producto.nombre}</p>
                  <p className="carrito-item-marca">{producto.marca}</p>
                  <p className="carrito-item-precio">{formatPrecio(producto.precio)}</p>
                </div>
              </div>

              <div className="carrito-item-cantidad">
                <button className="cantidad-btn">−</button>
                <span>{producto.cantidad}</span>
                <button className="cantidad-btn">+</button>
              </div>

              <div className="carrito-item-subtotal">
                <span>{formatPrecio(producto.precio * producto.cantidad)}</span>
                <button className="carrito-item-borrar">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" stroke="#B4B2A9" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}

          <button className="carrito-eliminar-todo">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" stroke="#993C1D" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            </svg>
            Eliminar todo
          </button>

        </div>

        <div className="carrito-resumen">
          <h2>Resumen</h2>

          <div className="carrito-resumen-filas">
            {productos.map((p) => (
              <div key={p.id} className="carrito-resumen-fila">
                <span>{p.nombre} x{p.cantidad}</span>
                <span>{formatPrecio(p.precio * p.cantidad)}</span>
              </div>
            ))}
          </div>

          <div className="carrito-resumen-total">
            <span>Total</span>
            <span>{formatPrecio(total)}</span>
          </div>

          <Link to="/pago" className="carrito-btn-pago">
            Ir a pagar
          </Link>

          <Link to="/catalogo" className="carrito-btn-seguir">
            Seguir comprando
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Carrito