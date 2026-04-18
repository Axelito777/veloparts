import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">

      <section className="home-hero">
        <div className="home-hero-texto">
          <h1>Tu tienda de ciclismo en Puerto Montt</h1>
          <p>Piezas, accesorios y armado de bicicletas. También agendamos tu mantención o reparación con nuestros mecánicos.</p>
          <div className="home-hero-botones">
            <Link to="/catalogo" className="btn-principal">Ver catálogo</Link>
            <Link to="/agenda" className="btn-secundario">Agendar hora</Link>
          </div>
        </div>
        <div className="home-hero-imagen">
          <svg width="320" height="220" viewBox="0 0 320 220">
            <circle cx="75" cy="150" r="60" fill="none" stroke="#4A9E78" strokeWidth="4"/>
            <circle cx="245" cy="150" r="60" fill="none" stroke="#4A9E78" strokeWidth="4"/>
            <circle cx="75" cy="150" r="8" fill="#4A9E78"/>
            <circle cx="245" cy="150" r="8" fill="#4A9E78"/>
            <line x1="75" y1="150" x2="245" y2="150" stroke="#E0DED8" strokeWidth="2"/>
            <line x1="75" y1="150" x2="165" y2="75" stroke="#1C1C1E" strokeWidth="3"/>
            <line x1="165" y1="75" x2="245" y2="150" stroke="#1C1C1E" strokeWidth="3"/>
            <line x1="165" y1="75" x2="160" y2="40" stroke="#1C1C1E" strokeWidth="3"/>
            <line x1="160" y1="40" x2="138" y2="28" stroke="#4A9E78" strokeWidth="2.5"/>
            <line x1="160" y1="40" x2="182" y2="28" stroke="#4A9E78" strokeWidth="2.5"/>
            <line x1="245" y1="150" x2="240" y2="85" stroke="#1C1C1E" strokeWidth="3"/>
            <line x1="235" y1="83" x2="258" y2="83" stroke="#4A9E78" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="160" cy="150" r="20" fill="none" stroke="#E0DED8" strokeWidth="2.5"/>
            <circle cx="160" cy="150" r="6" fill="#E0DED8"/>
          </svg>
        </div>
      </section>

      <section className="home-info">
        <div className="home-info-card">
          <div className="home-info-icono">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#4A9E78" strokeWidth="1.5" fill="none"/>
              <path d="M2 17l10 5 10-5" stroke="#4A9E78" strokeWidth="1.5" fill="none"/>
              <path d="M2 12l10 5 10-5" stroke="#4A9E78" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
          <h3>Amplio catálogo</h3>
          <p>Piezas, cascos, guantes y más de las mejores marcas y de nuestra línea propia.</p>
        </div>
        <div className="home-info-card">
          <div className="home-info-icono">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#4A9E78" strokeWidth="1.5" fill="none"/>
              <path d="M12 6v6l4 2" stroke="#4A9E78" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            </svg>
          </div>
          <h3>Agenda tu hora</h3>
          <p>Reserva tu mantención o reparación online y recibe confirmación al instante.</p>
        </div>
        <div className="home-info-card">
          <div className="home-info-icono">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="#4A9E78" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
          <h3>Armado profesional</h3>
          <p>Diseña tu bici a medida y nuestros mecánicos se encargan del armado completo.</p>
        </div>
      </section>

      <section className="home-ubicacion">
        <h2>Encuéntranos</h2>
        <p className="home-ubicacion-subtitulo">Estamos ubicados en Puerto Montt, Los Lagos. Ven a visitarnos.</p>
        <div className="home-ubicacion-fotos">
          <div className="home-foto home-foto-grande">
            <div className="home-foto-placeholder">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="#B4B2A9" strokeWidth="1.5" fill="none"/>
                <circle cx="8.5" cy="8.5" r="1.5" stroke="#B4B2A9" strokeWidth="1.5" fill="none"/>
                <path d="M21 15l-5-5L5 21" stroke="#B4B2A9" strokeWidth="1.5" fill="none"/>
              </svg>
              <p>Foto exterior del local</p>
            </div>
          </div>
          <div className="home-fotos-pequeñas">
            <div className="home-foto">
              <div className="home-foto-placeholder">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="#B4B2A9" strokeWidth="1.5" fill="none"/>
                  <circle cx="8.5" cy="8.5" r="1.5" stroke="#B4B2A9" strokeWidth="1.5" fill="none"/>
                  <path d="M21 15l-5-5L5 21" stroke="#B4B2A9" strokeWidth="1.5" fill="none"/>
                </svg>
                <p>Interior del taller</p>
              </div>
            </div>
            <div className="home-foto">
              <div className="home-foto-placeholder">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="#B4B2A9" strokeWidth="1.5" fill="none"/>
                  <circle cx="8.5" cy="8.5" r="1.5" stroke="#B4B2A9" strokeWidth="1.5" fill="none"/>
                  <path d="M21 15l-5-5L5 21" stroke="#B4B2A9" strokeWidth="1.5" fill="none"/>
                </svg>
                <p>Zona de exhibición</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-contacto">
        <h2>Contacto</h2>
        <div className="home-contacto-links">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="home-contacto-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="#4A9E78" strokeWidth="1.5"/>
              <circle cx="12" cy="12" r="4" stroke="#4A9E78" strokeWidth="1.5"/>
              <circle cx="17.5" cy="6.5" r="1" fill="#4A9E78"/>
            </svg>
            <span>@veloparts</span>
          </a>
          <a href="mailto:contacto@veloparts.cl" className="home-contacto-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="#4A9E78" strokeWidth="1.5" fill="none"/>
              <path d="M2 7l10 7 10-7" stroke="#4A9E78" strokeWidth="1.5" fill="none"/>
            </svg>
            <span>contacto@veloparts.cl</span>
          </a>
        </div>
      </section>

    </div>
  )
}

export default Home