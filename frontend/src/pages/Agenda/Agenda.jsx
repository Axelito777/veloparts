import { useState } from 'react'
import './Agenda.css'

const HORARIO = { inicio: 9, almuerzo: 13, reinicio: 14, fin: 18 }

const SERVICIOS = [
  { id: 'mantencion', nombre: 'Mantención completa', duracion: 2, precio: 25000, descripcion: 'Revisión general, limpieza, lubricación y ajuste de todos los componentes.' },
  { id: 'reparacion', nombre: 'Reparación', duracion: 3, precio: 15000, descripcion: 'Diagnóstico y reparación del problema. Precio base, puede variar según repuestos.' },
  { id: 'cambio', nombre: 'Cambio de piezas', duracion: 1, precio: 10000, descripcion: 'Instalación de piezas que el cliente trae o adquiere en la tienda.' },
]

const diasSemana = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do']

function getCalendario(año, mes) {
  const primerDia = new Date(año, mes, 1).getDay()
  const ajuste = primerDia === 0 ? 6 : primerDia - 1
  const diasEnMes = new Date(año, mes + 1, 0).getDate()
  const dias = []
  for (let i = 0; i < ajuste; i++) dias.push(null)
  for (let i = 1; i <= diasEnMes; i++) dias.push(i)
  return dias
}

function getHorasDisponibles(duracion) {
  const horas = []
  for (let h = HORARIO.inicio; h < HORARIO.almuerzo; h++) {
    if (h + duracion <= HORARIO.almuerzo) horas.push(h)
  }
  for (let h = HORARIO.reinicio; h < HORARIO.fin; h++) {
    if (h + duracion <= HORARIO.fin) horas.push(h)
  }
  return horas
}

function formatHora(h) {
  return `${String(h).padStart(2, '0')}:00`
}

function Agenda() {
  const hoy = new Date()
  const [mes, setMes] = useState(hoy.getMonth())
  const [año, setAño] = useState(hoy.getFullYear())
  const [diaSeleccionado, setDiaSeleccionado] = useState(null)
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null)
  const [horaSeleccionada, setHoraSeleccionada] = useState(null)
  const [descripcion, setDescripcion] = useState('')
  const [correo, setCorreo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [paso, setPaso] = useState(1)

  const calendario = getCalendario(año, mes)
  const nombreMes = new Date(año, mes).toLocaleString('es-CL', { month: 'long', year: 'numeric' })

  const mesAnterior = () => {
    if (mes === 0) { setMes(11); setAño(a => a - 1) }
    else setMes(m => m - 1)
    setDiaSeleccionado(null)
    setHoraSeleccionada(null)
  }

  const mesSiguiente = () => {
    if (mes === 11) { setMes(0); setAño(a => a + 1) }
    else setMes(m => m + 1)
    setDiaSeleccionado(null)
    setHoraSeleccionada(null)
  }

  const servicio = SERVICIOS.find(s => s.id === servicioSeleccionado)
  const horas = servicio ? getHorasDisponibles(servicio.duracion) : []

  const formatPrecio = (p) => p.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })

  return (
    <div className="agenda">
      <div className="agenda-header">
        <h1>Agendar hora</h1>
        <p>Reserva tu mantención, reparación o cambio de piezas con nuestros mecánicos.</p>
      </div>

      <div className="agenda-pasos">
        {['Servicio', 'Fecha y hora', 'Tus datos'].map((label, i) => (
          <div key={i} className={`agenda-paso ${paso === i + 1 ? 'activo' : ''} ${paso > i + 1 ? 'completado' : ''}`}>
            <div className="agenda-paso-num">{paso > i + 1 ? '✓' : i + 1}</div>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <div className="agenda-contenido">

        {paso === 1 && (
          <div className="agenda-servicios">
            <h2>¿Qué necesitas?</h2>
            <div className="agenda-servicios-lista">
              {SERVICIOS.map(s => (
                <div
                  key={s.id}
                  className={`agenda-servicio-card ${servicioSeleccionado === s.id ? 'activo' : ''}`}
                  onClick={() => setServicioSeleccionado(s.id)}
                >
                  <div className="agenda-servicio-radio">
                    {servicioSeleccionado === s.id && <div className="agenda-servicio-radio-inner" />}
                  </div>
                  <div className="agenda-servicio-info">
                    <p className="agenda-servicio-nombre">{s.nombre}</p>
                    <p className="agenda-servicio-desc">{s.descripcion}</p>
                    <div className="agenda-servicio-meta">
                      <span className="agenda-servicio-duracion">⏱ {s.duracion} {s.duracion === 1 ? 'hora' : 'horas'}</span>
                      <span className="agenda-servicio-precio">{formatPrecio(s.precio)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="agenda-descripcion">
              <label>Descripción de tu bicicleta <span className="opcional">(opcional)</span></label>
              <textarea
                placeholder="Ej: el freno delantero no agarra bien, hace ruido al pedalear..."
                rows={3}
                value={descripcion}
                onChange={e => setDescripcion(e.target.value)}
              />
            </div>

            <button
              className="agenda-btn-siguiente"
              disabled={!servicioSeleccionado}
              onClick={() => setPaso(2)}
            >
              Siguiente
            </button>
          </div>
        )}

        {paso === 2 && (
          <div className="agenda-calendario-section">
            <h2>Elige fecha y hora</h2>
            <div className="agenda-cal-contenido">
              <div className="agenda-calendario">
                <div className="agenda-cal-header">
                  <button onClick={mesAnterior}>‹</button>
                  <span>{nombreMes}</span>
                  <button onClick={mesSiguiente}>›</button>
                </div>
                <div className="agenda-cal-grid">
                  {diasSemana.map(d => (
                    <div key={d} className="agenda-cal-label">{d}</div>
                  ))}
                  {calendario.map((dia, i) => (
                    <div
                      key={i}
                      className={`agenda-cal-dia
                        ${!dia ? 'vacio' : ''}
                        ${dia && dia % 7 !== 0 ? 'disponible' : ''}
                        ${diaSeleccionado === dia ? 'seleccionado' : ''}
                      `}
                      onClick={() => {
                        if (dia && dia % 7 !== 0) {
                          setDiaSeleccionado(dia)
                          setHoraSeleccionada(null)
                        }
                      }}
                    >
                      {dia}
                    </div>
                  ))}
                </div>
                <p className="agenda-cal-leyenda">
                  <span className="leyenda-verde" /> Días disponibles
                </p>
              </div>

              <div className="agenda-horas">
                <p className="agenda-horas-titulo">
                  {diaSeleccionado
                    ? `Horas disponibles — ${diaSeleccionado} de ${new Date(año, mes).toLocaleString('es-CL', { month: 'long' })}`
                    : 'Selecciona un día'}
                </p>
                {diaSeleccionado && (
                  <>
                    <p className="agenda-horas-servicio">
                      {servicio?.nombre} — {servicio?.duracion} {servicio?.duracion === 1 ? 'hora' : 'horas'}
                    </p>
                    <div className="agenda-horas-grid">
                      {horas.map(h => (
                        <button
                          key={h}
                          className={`agenda-hora-btn ${horaSeleccionada === h ? 'seleccionada' : ''}`}
                          onClick={() => setHoraSeleccionada(h)}
                        >
                          {formatHora(h)}
                        </button>
                      ))}
                      {horas.length === 0 && (
                        <p className="agenda-sin-horas">No hay horas disponibles para este servicio hoy</p>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="agenda-btns">
              <button className="agenda-btn-volver" onClick={() => setPaso(1)}>Volver</button>
              <button
                className="agenda-btn-siguiente"
                disabled={!diaSeleccionado || horaSeleccionada === null}
                onClick={() => setPaso(3)}
              >
                Siguiente
              </button>
            </div>
          </div>
        )}

        {paso === 3 && (
          <div className="agenda-datos">
            <h2>Tus datos de contacto</h2>
            <div className="agenda-resumen-box">
              <p className="agenda-resumen-titulo">Resumen de tu reserva</p>
              <div className="agenda-resumen-fila">
                <span>Servicio</span>
                <span>{servicio?.nombre}</span>
              </div>
              <div className="agenda-resumen-fila">
                <span>Fecha</span>
                <span>{diaSeleccionado} de {new Date(año, mes).toLocaleString('es-CL', { month: 'long' })} {año}</span>
              </div>
              <div className="agenda-resumen-fila">
                <span>Hora</span>
                <span>{formatHora(horaSeleccionada)} — {formatHora(horaSeleccionada + servicio?.duracion)}</span>
              </div>
              <div className="agenda-resumen-fila">
                <span>Precio base</span>
                <span>{formatPrecio(servicio?.precio)}</span>
              </div>
              {descripcion && (
                <div className="agenda-resumen-fila">
                  <span>Descripción</span>
                  <span>{descripcion}</span>
                </div>
              )}
            </div>

            <div className="agenda-form">
              <div className="agenda-campo">
                <label>Correo electrónico</label>
                <input
                  type="email"
                  placeholder="tucorreo@gmail.com"
                  value={correo}
                  onChange={e => setCorreo(e.target.value)}
                />
              </div>
              <div className="agenda-campo">
                <label>Teléfono</label>
                <input
                  type="tel"
                  placeholder="+56 9 1234 5678"
                  value={telefono}
                  onChange={e => setTelefono(e.target.value)}
                />
              </div>
            </div>

            <p className="agenda-aviso">
              Al confirmar recibirás un QR en tu correo para presentar al llegar al local.
            </p>

            <div className="agenda-btns">
              <button className="agenda-btn-volver" onClick={() => setPaso(2)}>Volver</button>
              <button
                className="agenda-btn-confirmar"
                disabled={!correo || !telefono}
              >
                Confirmar y pagar {formatPrecio(servicio?.precio)}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Agenda