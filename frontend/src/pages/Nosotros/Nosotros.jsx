import './Nosotros.css'

function Nosotros() {
  return (
    <div className="nosotros">

      <section className="nosotros-hero">
        <h1>Somos VeloParts</h1>
        <p>Una tienda de ciclismo ubicada en Puerto Montt, dedicada a entregar las mejores piezas, accesorios y servicio técnico para tu bicicleta.</p>
      </section>

      <section className="nosotros-info">
        <div className="nosotros-texto">
          <h2>Nuestra historia</h2>
          <p>Nacimos de la pasión por el ciclismo y la necesidad de contar con una tienda especializada en la región de Los Lagos. Ofrecemos productos de marcas reconocidas y nuestra propia línea de componentes fabricados con los mejores materiales.</p>
          <p>Contamos con mecánicos certificados que pueden armar tu bicicleta desde cero o realizar mantenciones y reparaciones con la mayor precisión.</p>
        </div>
        <div className="nosotros-stats">
          <div className="nosotros-stat">
            <span className="nosotros-stat-numero">+500</span>
            <span className="nosotros-stat-label">Productos disponibles</span>
          </div>
          <div className="nosotros-stat">
            <span className="nosotros-stat-numero">+200</span>
            <span className="nosotros-stat-label">Clientes atendidos</span>
          </div>
          <div className="nosotros-stat">
            <span className="nosotros-stat-numero">5</span>
            <span className="nosotros-stat-label">Mecánicos certificados</span>
          </div>
        </div>
      </section>

      <section className="nosotros-ubicacion">
        <h2>Ubicación</h2>
        <p className="nosotros-ubicacion-texto">Encuéntranos en Puerto Montt, Los Lagos. Atendemos de lunes a sábado.</p>
        <div className="nosotros-fotos">
          <div className="nosotros-foto nosotros-foto-grande">
            <div className="nosotros-foto-placeholder">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="#B4B2A9" strokeWidth="1.5" fill="none"/>
                <circle cx="8.5" cy="8.5" r="1.5" stroke="#B4B2A9" strokeWidth="1.5" fill="none"/>
                <path d="M21 15l-5-5L5 21" stroke="#B4B2A9" strokeWidth="1.5" fill="none"/>
              </svg>
              <p>Foto exterior del local</p>
            </div>
          </div>
          <div className="nosotros-fotos-lado">
            <div className="nosotros-foto">
              <div className="nosotros-foto-placeholder">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="#B4B2A9" strokeWidth="1.5" fill="none"/>
                  <circle cx="8.5" cy="8.5" r="1.5" stroke="#B4B2A9" strokeWidth="1.5" fill="none"/>
                  <path d="M21 15l-5-5L5 21" stroke="#B4B2A9" strokeWidth="1.5" fill="none"/>
                </svg>
                <p>Interior del taller</p>
              </div>
            </div>
            <div className="nosotros-foto">
              <div className="nosotros-foto-placeholder">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
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

      <section className="nosotros-contacto">
        <h2>Contáctanos</h2>
        <div className="nosotros-contacto-grid">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="nosotros-contacto-card">
            <div className="nosotros-contacto-icono">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="#4A9E78" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="4" stroke="#4A9E78" strokeWidth="1.5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="#4A9E78"/>
              </svg>
            </div>
            <div>
              <p className="nosotros-contacto-titulo">Instagram</p>
              <p className="nosotros-contacto-valor">@veloparts</p>
            </div>
          </a>
          <a href="mailto:contacto@veloparts.cl" className="nosotros-contacto-card">
            <div className="nosotros-contacto-icono">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="#4A9E78" strokeWidth="1.5" fill="none"/>
                <path d="M2 7l10 7 10-7" stroke="#4A9E78" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
            <div>
              <p className="nosotros-contacto-titulo">Correo</p>
              <p className="nosotros-contacto-valor">contacto@veloparts.cl</p>
            </div>
          </a>
          <div className="nosotros-contacto-card">
            <div className="nosotros-contacto-icono">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#4A9E78" strokeWidth="1.5" fill="none"/>
                <circle cx="12" cy="9" r="2.5" stroke="#4A9E78" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
            <div>
              <p className="nosotros-contacto-titulo">Dirección</p>
              <p className="nosotros-contacto-valor">Puerto Montt, Los Lagos</p>
            </div>
          </div>
          <div className="nosotros-contacto-card">
            <div className="nosotros-contacto-icono">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#4A9E78" strokeWidth="1.5" fill="none"/>
                <path d="M12 6v6l4 2" stroke="#4A9E78" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
            <div>
              <p className="nosotros-contacto-titulo">Horario</p>
              <p className="nosotros-contacto-valor">Lun - Sáb: 9:00 - 18:00</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Nosotros