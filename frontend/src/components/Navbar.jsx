import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="navbar-logo-icono">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <circle cx="3.5" cy="10.5" r="2.5" stroke="#F5F5F0" strokeWidth="1.2" fill="none"/>
            <circle cx="12.5" cy="10.5" r="2.5" stroke="#F5F5F0" strokeWidth="1.2" fill="none"/>
            <path d="M3.5 10.5L7 4.5L9 7.5L11 4.5L12.5 10.5" stroke="#F5F5F0" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
          </svg>
        </div>
        <span>VeloParts</span>
      </div>

      <div className="navbar-links">
        <Link to="/catalogo">Tienda</Link>
        <Link to="/armador">Armar bici</Link>
        <Link to="/agenda">Agenda</Link>
        <Link to="/nosotros">Nosotros</Link>
      </div>

      <Link to="/carrito" className="navbar-carrito">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="#F5F5F0" strokeWidth="1.5" fill="none"/>
          <line x1="3" y1="6" x2="21" y2="6" stroke="#F5F5F0" strokeWidth="1.5"/>
          <path d="M16 10a4 4 0 01-8 0" stroke="#F5F5F0" strokeWidth="1.5" fill="none"/>
        </svg>
        <span className="navbar-carrito-contador">0</span>
      </Link>
    </nav>
  )
}

export default Navbar