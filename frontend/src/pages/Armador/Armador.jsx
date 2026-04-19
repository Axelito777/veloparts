import { useState } from 'react'
import './Armador.css'

const TIPOS_BICI = [
  {
    id: 'mtb',
    nombre: 'Mountain Bike',
    descripcion: 'Diseñada para terrenos irregulares y montaña. Suspensión delantera o doble, neumáticos anchos y transmisión amplia para subidas exigentes.',
    icono: '🚵',
    usos: ['Montaña', 'Trail', 'Enduro']
  },
  {
    id: 'ruta',
    nombre: 'Pistera / Ruta',
    descripcion: 'Optimizada para velocidad en asfalto. Liviana, aerodinámica, con manubrio de cuernos y neumáticos delgados para máxima eficiencia.',
    icono: '🚴',
    usos: ['Asfalto', 'Velocidad', 'Distancia']
  },
  {
    id: 'hibrida',
    nombre: 'Híbrida',
    descripcion: 'Combina lo mejor de la MTB y la pistera. Versátil para ciudad, caminos mixtos y rutas tranquilas. La más usada a nivel global.',
    icono: '🚲',
    usos: ['Ciudad', 'Mixto', 'Casual']
  }
]

const TALLAS = [
  { min: 0, max: 160, talla: 'S', aro: '26"' },
  { min: 160, max: 172, talla: 'M', aro: '27.5"' },
  { min: 172, max: 183, talla: 'L', aro: '29"' },
  { min: 183, max: 999, talla: 'XL', aro: '29"' },
]

const PIEZAS = {
  marco: {
    nombre: 'Marco',
    mtb: [
      { id: 'm1', nombre: 'Marco Aluminio 6061', precio: 189990, desc: 'Liviano y resistente. Ideal para trail y enduro. Geometría agresiva.', tallas: ['S','M','L','XL'] },
      { id: 'm2', nombre: 'Marco Cromoly Steel', precio: 149990, desc: 'Más pesado pero muy duradero. Buena absorción de vibraciones.', tallas: ['S','M','L','XL'] },
    ],
    ruta: [
      { id: 'm3', nombre: 'Marco Carbono T700', precio: 389990, desc: 'Ultraliviano y rígido. Para ciclistas que buscan máximo rendimiento.', tallas: ['S','M','L','XL'] },
      { id: 'm4', nombre: 'Marco Aluminio Ruta', precio: 219990, desc: 'Buena relación peso/precio para ciclismo de ruta recreativo.', tallas: ['S','M','L','XL'] },
    ],
    hibrida: [
      { id: 'm5', nombre: 'Marco Híbrido Aluminio', precio: 159990, desc: 'Geometría erguida y cómoda. Ideal para uso urbano y rutas mixtas.', tallas: ['S','M','L','XL'] },
      { id: 'm6', nombre: 'Marco Híbrido Steel', precio: 129990, desc: 'Económico y resistente. Buena opción para ciclistas casuales.', tallas: ['S','M','L','XL'] },
    ]
  },
  transmision: {
    nombre: 'Transmisión',
    velocidades: {
      8: [
        { id: 't1', nombre: 'Shimano Altus 8v', precio: 45990, desc: 'Confiable y económico. Ideal para uso urbano y rutas mixtas.', tags: ['Ciudad', 'Económico'] },
        { id: 't2', nombre: 'Shimano Acera 8v', precio: 62990, desc: 'Un escalón sobre Altus. Mejor precisión en cambios exigentes.', tags: ['Mixto', 'Preciso'] },
      ],
      9: [
        { id: 't3', nombre: 'Shimano Alivio 9v', precio: 79990, desc: 'Rango amplio para montaña. Buena relación calidad precio.', tags: ['Montaña', 'Versátil'] },
        { id: 't4', nombre: 'SRAM X4 9v', precio: 69990, desc: 'Sistema SRAM confiable. Buen funcionamiento en trail.', tags: ['Trail'] },
      ],
      12: [
        { id: 't5', nombre: 'Shimano Deore 12v', precio: 129990, desc: 'Excelente para trail y enduro. Sistema 1x12 moderno y liviano.', tags: ['Trail', 'Moderno'] },
        { id: 't6', nombre: 'SRAM SX Eagle 12v', precio: 149990, desc: 'Mono piñón Eagle. Mínimo mantenimiento, máximo rendimiento.', tags: ['Enduro', 'Premium'] },
      ]
    }
  },
  frenos: {
    nombre: 'Frenos',
    opciones: [
      { id: 'f1', nombre: 'Frenos de disco mecánico', precio: 34990, desc: 'Buena potencia de frenado. Fácil mantenimiento y ajuste.', tags: ['Económico'] },
      { id: 'f2', nombre: 'Frenos de disco hidráulico', precio: 74990, desc: 'Mayor potencia con menos esfuerzo. El estándar actual para MTB y ruta.', tags: ['Rendimiento', 'Recomendado'] },
      { id: 'f3', nombre: 'Frenos V-Brake', precio: 19990, desc: 'Clásico y económico. Solo compatible con híbridas urbanas.', tags: ['Urbano', 'Económico'] },
    ]
  },
  ruedas: {
    nombre: 'Ruedas',
    por_aro: {
      '26"': [
        { id: 'r1', nombre: 'Rueda 26" aluminio doble pared', precio: 69990, desc: 'Resistente para uso diario y trail suave.' },
        { id: 'r2', nombre: 'Rueda 26" reforzada', precio: 84990, desc: 'Mayor resistencia para terrenos exigentes.' },
      ],
      '27.5"': [
        { id: 'r3', nombre: 'Rueda 27.5" trail', precio: 79990, desc: 'Equilibrio entre agilidad y estabilidad. Popular en MTB modernas.' },
        { id: 'r4', nombre: 'Rueda 27.5" enduro', precio: 94990, desc: 'Reforzada para enduro y bajadas técnicas.' },
      ],
      '29"': [
        { id: 'r5', nombre: 'Rueda 29" XC', precio: 89990, desc: 'Excelente rodadura. Ideal para cross country y trail largo.' },
        { id: 'r6', nombre: 'Rueda 29" trail reforzada', precio: 109990, desc: 'Mayor rigidez lateral para trail exigente.' },
      ]
    }
  },
  manubrio: {
    nombre: 'Manubrio',
    opciones: [
      { id: 'man1', nombre: 'Manubrio plano 780mm', precio: 18990, desc: 'Ancho para mayor control en MTB. Aluminio 6061.' },
      { id: 'man2', nombre: 'Manubrio rise 20mm 760mm', precio: 24990, desc: 'Posición más erguida. Ideal para trail y enduro.' },
      { id: 'man3', nombre: 'Manubrio cuernos carbono', precio: 89990, desc: 'Aerodinámico para pistera. Posición agresiva.' },
      { id: 'man4', nombre: 'Manubrio plano híbrida', precio: 14990, desc: 'Cómodo y versátil para uso urbano y mixto.' },
    ]
  },
  sillin: {
    nombre: 'Sillín',
    opciones: [
      { id: 's1', nombre: 'Sillín trail ergonómico', precio: 34990, desc: 'Canal central para aliviar presión. Cubierta resistente al agua.' },
      { id: 's2', nombre: 'Sillín ruta racing', precio: 54990, desc: 'Liviano y angosto. Optimizado para posición aerodinámica.' },
      { id: 's3', nombre: 'Sillín urbano acolchado', precio: 24990, desc: 'Máxima comodidad para trayectos cortos en ciudad.' },
    ]
  }
}

function getTalla(estatura) {
  return TALLAS.find(t => estatura >= t.min && estatura < t.max)
}

function Armador() {
  const [paso, setPaso] = useState(1)
  const [tipoBici, setTipoBici] = useState(null)
  const [estatura, setEstatura] = useState('')
  const [tallaConfirmada, setTallaConfirmada] = useState(null)
  const [velocidades, setVelocidades] = useState(null)
  const [selecciones, setSelecciones] = useState({})

  const talaRecomendada = estatura ? getTalla(parseInt(estatura)) : null

  const formatPrecio = (p) => p.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })

  const total = Object.values(selecciones).reduce((acc, item) => acc + (item?.precio || 0), 0)

  const elegir = (categoria, item) => {
    setSelecciones(prev => ({ ...prev, [categoria]: item }))
    if (categoria === 'transmision') {
      setVelocidades(item.nombre.includes('8v') ? 8 : item.nombre.includes('9v') ? 9 : 12)
    }
  }

  const piezasTransmision = velocidades ? PIEZAS.transmision.velocidades[velocidades] : []
  const piezasRuedas = tallaConfirmada ? PIEZAS.ruedas.por_aro[tallaConfirmada.aro] : []
  const piezasMarco = tipoBici ? PIEZAS.marco[tipoBici] : []

  const pasos = ['Tipo de bici', 'Tu talla', 'Piezas', 'Resumen']

  return (
    <div className="armador">
      <div className="armador-header">
        <h1>Arma tu bicicleta</h1>
        <p>Configura tu bici ideal paso a paso. Las piezas se filtran automáticamente según tu elección.</p>
      </div>

      <div className="armador-pasos">
        {pasos.map((label, i) => (
          <div key={i} className={`armador-paso ${paso === i + 1 ? 'activo' : ''} ${paso > i + 1 ? 'completado' : ''}`}>
            <div className="armador-paso-num">{paso > i + 1 ? '✓' : i + 1}</div>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <div className="armador-layout">
        <div className="armador-contenido">

          {paso === 1 && (
            <div>
              <h2>¿Qué tipo de bicicleta quieres?</h2>
              <div className="armador-tipos">
                {TIPOS_BICI.map(tipo => (
                  <div
                    key={tipo.id}
                    className={`armador-tipo-card ${tipoBici === tipo.id ? 'activo' : ''}`}
                    onClick={() => setTipoBici(tipo.id)}
                  >
                    <div className="armador-tipo-icono">{tipo.icono}</div>
                    <div className="armador-tipo-info">
                      <p className="armador-tipo-nombre">{tipo.nombre}</p>
                      <p className="armador-tipo-desc">{tipo.descripcion}</p>
                      <div className="armador-tipo-tags">
                        {tipo.usos.map(u => (
                          <span key={u} className="armador-tag">{u}</span>
                        ))}
                      </div>
                    </div>
                    <div className={`armador-tipo-radio ${tipoBici === tipo.id ? 'activo' : ''}`}>
                      {tipoBici === tipo.id && <div className="armador-tipo-radio-inner" />}
                    </div>
                  </div>
                ))}
              </div>
              <div className="armador-btns">
                <button
                  className="armador-btn-siguiente"
                  disabled={!tipoBici}
                  onClick={() => setPaso(2)}
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}

          {paso === 2 && (
            <div>
              <h2>¿Cuál es tu estatura?</h2>
              <p className="armador-subtitulo">Esto nos ayuda a recomendarte el tamaño de cuadro y aro adecuado.</p>

              <div className="armador-estatura">
                <div className="armador-estatura-input">
                  <input
                    type="number"
                    placeholder="Ej: 175"
                    min="100"
                    max="220"
                    value={estatura}
                    onChange={e => {
                      setEstatura(e.target.value)
                      setTallaConfirmada(null)
                    }}
                  />
                  <span>cm</span>
                </div>

                {talaRecomendada && !tallaConfirmada && (
                  <div className="armador-talla-recomendada">
                    <p className="armador-talla-titulo">Talla recomendada para {estatura} cm</p>
                    <div className="armador-talla-info">
                      <div className="armador-talla-dato">
                        <span className="armador-talla-label">Cuadro</span>
                        <span className="armador-talla-valor">{talaRecomendada.talla}</span>
                      </div>
                      <div className="armador-talla-dato">
                        <span className="armador-talla-label">Aro</span>
                        <span className="armador-talla-valor">{talaRecomendada.aro}</span>
                      </div>
                    </div>
                    <div className="armador-talla-btns">
                      <button
                        className="armador-btn-confirmar-talla"
                        onClick={() => setTallaConfirmada(talaRecomendada)}
                      >
                        Confirmar talla {talaRecomendada.talla} — Aro {talaRecomendada.aro}
                      </button>
                      <p className="armador-talla-manual">¿Prefieres elegir otra talla?</p>
                      <div className="armador-tallas-manual">
                        {TALLAS.map(t => (
                          <button
                            key={t.talla}
                            className={`armador-talla-btn ${tallaConfirmada?.talla === t.talla ? 'activo' : ''}`}
                            onClick={() => setTallaConfirmada(t)}
                          >
                            {t.talla} — {t.aro}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {tallaConfirmada && (
                  <div className="armador-talla-confirmada">
                    <span>✓ Talla {tallaConfirmada.talla} — Aro {tallaConfirmada.aro} seleccionada</span>
                    <button onClick={() => setTallaConfirmada(null)}>Cambiar</button>
                  </div>
                )}
              </div>

              <div className="armador-btns">
                <button className="armador-btn-volver" onClick={() => setPaso(1)}>Volver</button>
                <button
                  className="armador-btn-siguiente"
                  disabled={!tallaConfirmada}
                  onClick={() => setPaso(3)}
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}

          {paso === 3 && (
            <div className="armador-piezas">
              <h2>Elige tus componentes</h2>

              {[
                { key: 'marco', label: 'Marco', items: piezasMarco },
                { key: 'frenos', label: 'Frenos', items: PIEZAS.frenos.opciones },
                { key: 'manubrio', label: 'Manubrio', items: PIEZAS.manubrio.opciones },
                { key: 'sillin', label: 'Sillín', items: PIEZAS.sillin.opciones },
              ].map(({ key, label, items }) => (
                <div key={key} className="armador-categoria">
                  <p className="armador-categoria-titulo">{label}</p>
                  <div className="armador-opciones">
                    {items.map(item => (
                      <div
                        key={item.id}
                        className={`armador-opcion ${selecciones[key]?.id === item.id ? 'activo' : ''}`}
                        onClick={() => elegir(key, item)}
                      >
                        <div className={`armador-opcion-radio ${selecciones[key]?.id === item.id ? 'activo' : ''}`}>
                          {selecciones[key]?.id === item.id && <div className="armador-opcion-radio-inner" />}
                        </div>
                        <div className="armador-opcion-info">
                          <p className="armador-opcion-nombre">{item.nombre}</p>
                          <p className="armador-opcion-desc">{item.desc}</p>
                          {item.tags && (
                            <div className="armador-opcion-tags">
                              {item.tags.map(t => <span key={t} className="armador-tag">{t}</span>)}
                            </div>
                          )}
                        </div>
                        <span className="armador-opcion-precio">{formatPrecio(item.precio)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="armador-categoria">
                <p className="armador-categoria-titulo">Transmisión — elige velocidades primero</p>
                <div className="armador-vel-selector">
                  {[8, 9, 12].map(v => (
                    <button
                      key={v}
                      className={`armador-vel-btn ${velocidades === v ? 'activo' : ''}`}
                      onClick={() => {
                        setVelocidades(v)
                        setSelecciones(prev => ({ ...prev, transmision: null }))
                      }}
                    >
                      {v} velocidades
                    </button>
                  ))}
                </div>
                {velocidades && (
                  <div className="armador-opciones">
                    {piezasTransmision.map(item => (
                      <div
                        key={item.id}
                        className={`armador-opcion ${selecciones.transmision?.id === item.id ? 'activo' : ''}`}
                        onClick={() => elegir('transmision', item)}
                      >
                        <div className={`armador-opcion-radio ${selecciones.transmision?.id === item.id ? 'activo' : ''}`}>
                          {selecciones.transmision?.id === item.id && <div className="armador-opcion-radio-inner" />}
                        </div>
                        <div className="armador-opcion-info">
                          <p className="armador-opcion-nombre">{item.nombre}</p>
                          <p className="armador-opcion-desc">{item.desc}</p>
                          <div className="armador-opcion-tags">
                            {item.tags.map(t => <span key={t} className="armador-tag">{t}</span>)}
                          </div>
                        </div>
                        <span className="armador-opcion-precio">{formatPrecio(item.precio)}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="armador-categoria">
                <p className="armador-categoria-titulo">Ruedas — Aro {tallaConfirmada?.aro} (según tu talla)</p>
                <div className="armador-opciones">
                  {piezasRuedas.map(item => (
                    <div
                      key={item.id}
                      className={`armador-opcion ${selecciones.ruedas?.id === item.id ? 'activo' : ''}`}
                      onClick={() => elegir('ruedas', item)}
                    >
                      <div className={`armador-opcion-radio ${selecciones.ruedas?.id === item.id ? 'activo' : ''}`}>
                        {selecciones.ruedas?.id === item.id && <div className="armador-opcion-radio-inner" />}
                      </div>
                      <div className="armador-opcion-info">
                        <p className="armador-opcion-nombre">{item.nombre}</p>
                        <p className="armador-opcion-desc">{item.desc}</p>
                      </div>
                      <span className="armador-opcion-precio">{formatPrecio(item.precio)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="armador-btns">
                <button className="armador-btn-volver" onClick={() => setPaso(2)}>Volver</button>
                <button
                  className="armador-btn-siguiente"
                  onClick={() => setPaso(4)}
                >
                  Ver resumen
                </button>
              </div>
            </div>
          )}

          {paso === 4 && (
            <div>
              <h2>Resumen de tu bicicleta</h2>
              <div className="armador-resumen-lista">
                {Object.entries(selecciones).map(([key, item]) => item && (
                  <div key={key} className="armador-resumen-fila">
                    <span className="armador-resumen-cat">{PIEZAS[key]?.nombre || key}</span>
                    <span className="armador-resumen-nombre">{item.nombre}</span>
                    <span className="armador-resumen-precio">{formatPrecio(item.precio)}</span>
                  </div>
                ))}
                <div className="armador-resumen-total">
                  <span>Total</span>
                  <span>{formatPrecio(total)}</span>
                </div>
              </div>
              <div className="armador-btns">
                <button className="armador-btn-volver" onClick={() => setPaso(3)}>Volver</button>
                <button className="armador-btn-siguiente">Agregar al carrito</button>
              </div>
            </div>
          )}

        </div>

        <div className="armador-sidebar">
          <div className="armador-bici-visual">
            <p className="armador-visual-titulo">Tu bici</p>
            <svg width="200" height="160" viewBox="0 0 200 160">
              <circle cx="45" cy="110" r="38" fill="none" stroke={tipoBici ? '#4A9E78' : '#E0DED8'} strokeWidth="3"/>
              <circle cx="155" cy="110" r="38" fill="none" stroke={tipoBici ? '#4A9E78' : '#E0DED8'} strokeWidth="3"/>
              <circle cx="45" cy="110" r="6" fill={tipoBici ? '#4A9E78' : '#E0DED8'}/>
              <circle cx="155" cy="110" r="6" fill={tipoBici ? '#4A9E78' : '#E0DED8'}/>
              <line x1="45" y1="110" x2="155" y2="110" stroke="#E0DED8" strokeWidth="1.5"/>
              <line x1="45" y1="110" x2="100" y2="55" stroke={selecciones.marco ? '#4A9E78' : '#E0DED8'} strokeWidth="2.5"/>
              <line x1="100" y1="55" x2="155" y2="110" stroke={selecciones.marco ? '#4A9E78' : '#E0DED8'} strokeWidth="2.5"/>
              <line x1="100" y1="55" x2="97" y2="28" stroke={selecciones.marco ? '#4A9E78' : '#E0DED8'} strokeWidth="2.5"/>
              <line x1="97" y1="28" x2="82" y2="20" stroke={selecciones.manubrio ? '#4A9E78' : '#E0DED8'} strokeWidth="2"/>
              <line x1="97" y1="28" x2="112" y2="20" stroke={selecciones.manubrio ? '#4A9E78' : '#E0DED8'} strokeWidth="2"/>
              <line x1="155" y1="110" x2="152" y2="60" stroke={selecciones.marco ? '#4A9E78' : '#E0DED8'} strokeWidth="2.5"/>
              <line x1="148" y1="58" x2="162" y2="58" stroke="#E0DED8" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="100" cy="110" r="14" fill="none" stroke={selecciones.transmision ? '#4A9E78' : '#E0DED8'} strokeWidth="2"/>
              <circle cx="100" cy="110" r="5" fill={selecciones.transmision ? '#4A9E78' : '#E0DED8'}/>
              <ellipse cx="152" cy="116" rx="8" ry="5" fill="none" stroke={selecciones.frenos ? '#4A9E78' : '#E0DED8'} strokeWidth="1.5"/>
            </svg>
            <p className="armador-visual-nota">Las piezas se iluminan al seleccionarlas</p>
          </div>

          <div className="armador-precio-total">
            <p className="armador-precio-label">Total acumulado</p>
            <p className="armador-precio-valor">{formatPrecio(total)}</p>
          </div>

          <div className="armador-selecciones">
            {Object.entries(PIEZAS).map(([key, cat]) => (
              <div key={key} className="armador-sel-fila">
                <span className="armador-sel-cat">{cat.nombre}</span>
                <span className="armador-sel-valor">
                  {selecciones[key] ? selecciones[key].nombre : 'Sin elegir'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Armador