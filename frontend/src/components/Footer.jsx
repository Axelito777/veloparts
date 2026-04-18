import { Link } from 'react-router-dom'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contenido">

        <div className="footer-marca">
          <div className="footer-logo">
            <div className="footer-logo-icono">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <circle cx="3.5" cy="10.5" r="2.5" stroke="#F5F5F0" strokeWidth="1.2" fill="none"/>
                <circle cx="12.5" cy="10.5" r="2.5" stroke="#F5F5F0" strokeWidth="1.2" fill="none"/>
                <path d="M3.5 10.5L7 4.5L9 7.5L11 4.5L12.5 10.5" stroke="#F5F5F0" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
            <span>VeloParts</span>
          </div>
          <p className="footer-descripcion">
            Tu tienda de confianza para todo lo que necesita tu bicicleta.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-columna">
            <p className="footer-columna-titulo">Navegación</p>
            <Link to="/catalogo">Tienda</Link>
            <Link to="/armador">Armar bici</Link>
            <Link to="/agenda">Agenda</Link>
            <Link to="/nosotros">Nosotros</Link>
          </div>

          <div className="footer-columna">
            <p className="footer-columna-titulo">Contacto</p>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="mailto:contacto@veloparts.cl">Gmail</a>
          </div>
        </div>

      </div>

      <div className="footer-inferior">
        <p>© 2025 VeloParts. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer