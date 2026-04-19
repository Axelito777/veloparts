import { useState } from 'react'
import './Mecanico.css'

const ORDENES_ARMADO = [
  {
    id: 1,
    cliente: 'Juan Pérez',
    correo: 'juan@gmail.com',
    tipo: 'armado',
    bici: 'Mountain Bike',
    talla: 'M',
    aro: '27.5"',
    piezas: [
      { cat: 'Marco', nombre: 'Marco Aluminio 6061' },
      { cat: 'Transmisión', nombre: 'Shimano Deore 12v' },
      { cat: 'Frenos', nombre: 'Frenos de disco hidráulico' },
      { cat: 'Ruedas', nombre: 'Rueda 27.5" trail' },
      { cat: 'Manubrio', nombre: 'Manubrio rise 20mm 760mm' },
      { cat: 'Sillín', nombre: 'Sillín trail ergonómico' },
    ],
    estado: 'pendiente',
    fecha: '18/04/2026',
  },
  {
    id: 2,
    cliente: 'María González',
    correo: 'maria@gmail.com',
    tipo: 'armado',
    bici: 'Híbrida',
    talla: 'S',
    aro: '26"',
    piezas: [
      { cat: 'Marco', nombre: 'Marco Híbrido Aluminio' },
      { cat: 'Transmisión', nombre: 'Shimano Altus 8v' },
      { cat: 'Frenos', nombre: 'Frenos V-Brake' },
      { cat: 'Ruedas', nombre: 'Rueda 26" aluminio doble pared' },
      { cat: 'Manubrio', nombre: 'Manubrio plano híbrida' },
      { cat: 'Sillín', nombre: 'Sillín urbano acolchado' },
    ],
    estado: 'en_proceso',
    fecha: '17/04/2026',
  },
]

const AGENDA = [
  {
    id: 10,
    cliente: 'Carlos Muñoz',
    correo: 'carlos@gmail.com',
    tipo: 'agenda',
    servicio: 'Mantención completa',
    hora: '10:00 — 12:00',
    descripcion: 'El cambio no responde bien en velocidades altas.',
    estado: 'aceptada',
    fecha: '18/04/2026',
  },
  {
    id: 11,
    cliente: 'Ana Torres',
    correo: 'ana@gmail.com',
    tipo: 'agenda',
    servicio: 'Reparación',
    hora: '14:00 — 17:00',
    descripcion: '',
    estado: 'pendiente',
    fecha: '18/04/2026',
  },
  {
    id: 12,
    cliente: 'Luis Soto',
    correo: 'luis@gmail.com',
    tipo: 'agenda',
    servicio: 'Cambio de piezas',
    hora: '09:00 — 10:00',
    descripcion: 'Quiere cambiar el sillín y el manubrio.',
    estado: 'en_espera_pieza',
    fecha: '17/04/2026',
    mensajePieza: 'Sillín ergonómico no disponible en stock. Se solicitó al proveedor.',
  },
]

const ESTADO_LABELS = {
  pendiente: { label: 'Pendiente', color: '#BA7517', bg: '#FAEEDA' },
  en_proceso: { label: 'En proceso', color: '#185FA5', bg: '#E6F1FB' },
  aceptada: { label: 'Aceptada', color: '#185FA5', bg: '#E6F1FB' },
  listo: { label: 'Listo', color: '#0F6E56', bg: '#E8F5EF' },
  en_espera_pieza: { label: 'Esperando pieza', color: '#993C1D', bg: '#FFF0E6' },
}

function Mecanico() {
  const [pestana, setPestana] = useState('armados')
  const [ordenes, setOrdenes] = useState(ORDENES_ARMADO)
  const [agenda, setAgenda] = useState(AGENDA)
  const [modalPieza, setModalPieza] = useState(null)
  const [mensajePieza, setMensajePieza] = useState('')

  const cambiarEstadoOrden = (id, nuevoEstado) => {
    setOrdenes(prev => prev.map(o => o.id === id ? { ...o, estado: nuevoEstado } : o))
  }

  const cambiarEstadoAgenda = (id, nuevoEstado) => {
    setAgenda(prev => prev.map(a => a.id === id ? { ...a, estado: nuevoEstado } : a))
  }

  const confirmarPiezaFaltante = (id) => {
    if (!mensajePieza.trim()) return
    setAgenda(prev => prev.map(a => a.id === id
      ? { ...a, estado: 'en_espera_pieza', mensajePieza }
      : a
    ))
    setModalPieza(null)
    setMensajePieza('')
  }

  return (
    <div className="mecanico">
      <div className="mecanico-header">
        <h1>Panel del mecánico</h1>
        <p>Gestiona los armados y las horas de mantención asignadas.</p>
      </div>

      <div className="mecanico-tabs">
        <button
          className={`mecanico-tab ${pestana === 'armados' ? 'activo' : ''}`}
          onClick={() => setPestana('armados')}
        >
          Órdenes de armado
          <span className="mecanico-tab-badge">{ordenes.filter(o => o.estado !== 'listo').length}</span>
        </button>
        <button
          className={`mecanico-tab ${pestana === 'agenda' ? 'activo' : ''}`}
          onClick={() => setPestana('agenda')}
        >
          Agenda del día
          <span className="mecanico-tab-badge">{agenda.filter(a => a.estado !== 'listo').length}</span>
        </button>
      </div>

      {pestana === 'armados' && (
        <div className="mecanico-lista">
          {ordenes.map(orden => (
            <div key={orden.id} className="mecanico-card">
              <div className="mecanico-card-header">
                <div>
                  <p className="mecanico-card-cliente">{orden.cliente}</p>
                  <p className="mecanico-card-meta">{orden.correo} — {orden.fecha}</p>
                </div>
                <div
                  className="mecanico-estado"
                  style={{
                    color: ESTADO_LABELS[orden.estado]?.color,
                    background: ESTADO_LABELS[orden.estado]?.bg
                  }}
                >
                  {ESTADO_LABELS[orden.estado]?.label}
                </div>
              </div>

              <div className="mecanico-bici-info">
                <div className="mecanico-bici-tipo">
                  <span className="mecanico-bici-label">Tipo</span>
                  <span className="mecanico-bici-valor">{orden.bici}</span>
                </div>
                <div className="mecanico-bici-tipo">
                  <span className="mecanico-bici-label">Talla</span>
                  <span className="mecanico-bici-valor">{orden.talla}</span>
                </div>
                <div className="mecanico-bici-tipo">
                  <span className="mecanico-bici-label">Aro</span>
                  <span className="mecanico-bici-valor">{orden.aro}</span>
                </div>
              </div>

              <div className="mecanico-piezas">
                <p className="mecanico-piezas-titulo">Piezas a montar</p>
                <div className="mecanico-piezas-grid">
                  {orden.piezas.map((p, i) => (
                    <div key={i} className="mecanico-pieza">
                      <span className="mecanico-pieza-cat">{p.cat}</span>
                      <span className="mecanico-pieza-nombre">{p.nombre}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mecanico-bici-visual">
                <svg width="180" height="130" viewBox="0 0 200 160">
                  <circle cx="45" cy="110" r="38" fill="none" stroke="#4A9E78" strokeWidth="3"/>
                  <circle cx="155" cy="110" r="38" fill="none" stroke="#4A9E78" strokeWidth="3"/>
                  <circle cx="45" cy="110" r="6" fill="#4A9E78"/>
                  <circle cx="155" cy="110" r="6" fill="#4A9E78"/>
                  <line x1="45" y1="110" x2="155" y2="110" stroke="#E0DED8" strokeWidth="1.5"/>
                  <line x1="45" y1="110" x2="100" y2="55" stroke="#4A9E78" strokeWidth="2.5"/>
                  <line x1="100" y1="55" x2="155" y2="110" stroke="#4A9E78" strokeWidth="2.5"/>
                  <line x1="100" y1="55" x2="97" y2="28" stroke="#4A9E78" strokeWidth="2.5"/>
                  <line x1="97" y1="28" x2="82" y2="20" stroke="#4A9E78" strokeWidth="2"/>
                  <line x1="97" y1="28" x2="112" y2="20" stroke="#4A9E78" strokeWidth="2"/>
                  <line x1="155" y1="110" x2="152" y2="60" stroke="#4A9E78" strokeWidth="2.5"/>
                  <line x1="148" y1="58" x2="162" y2="58" stroke="#E0DED8" strokeWidth="2.5" strokeLinecap="round"/>
                  <circle cx="100" cy="110" r="14" fill="none" stroke="#4A9E78" strokeWidth="2"/>
                  <circle cx="100" cy="110" r="5" fill="#4A9E78"/>
                </svg>
              </div>

              <div className="mecanico-acciones">
                {orden.estado === 'pendiente' && (
                  <button
                    className="mecanico-btn mecanico-btn-aceptar"
                    onClick={() => cambiarEstadoOrden(orden.id, 'en_proceso')}
                  >
                    Aceptar orden
                  </button>
                )}
                {orden.estado === 'en_proceso' && (
                  <button
                    className="mecanico-btn mecanico-btn-listo"
                    onClick={() => cambiarEstadoOrden(orden.id, 'listo')}
                  >
                    Marcar como listo
                  </button>
                )}
                {orden.estado === 'listo' && (
                  <p className="mecanico-completado">✓ Orden completada — cliente notificado</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {pestana === 'agenda' && (
        <div className="mecanico-lista">
          {agenda.map(item => (
            <div key={item.id} className="mecanico-card">
              <div className="mecanico-card-header">
                <div>
                  <p className="mecanico-card-cliente">{item.cliente}</p>
                  <p className="mecanico-card-meta">{item.correo} — {item.fecha}</p>
                </div>
                <div
                  className="mecanico-estado"
                  style={{
                    color: ESTADO_LABELS[item.estado]?.color,
                    background: ESTADO_LABELS[item.estado]?.bg
                  }}
                >
                  {ESTADO_LABELS[item.estado]?.label}
                </div>
              </div>

              <div className="mecanico-bici-info">
                <div className="mecanico-bici-tipo">
                  <span className="mecanico-bici-label">Servicio</span>
                  <span className="mecanico-bici-valor">{item.servicio}</span>
                </div>
                <div className="mecanico-bici-tipo">
                  <span className="mecanico-bici-label">Horario</span>
                  <span className="mecanico-bici-valor">{item.hora}</span>
                </div>
              </div>

              {item.descripcion && (
                <div className="mecanico-descripcion">
                  <p className="mecanico-desc-label">Descripción del cliente</p>
                  <p className="mecanico-desc-texto">"{item.descripcion}"</p>
                </div>
              )}

              {item.mensajePieza && (
                <div className="mecanico-alerta-pieza">
                  <p>⚠ Pieza faltante: {item.mensajePieza}</p>
                </div>
              )}

              <div className="mecanico-acciones">
                {item.estado === 'pendiente' && (
                  <button
                    className="mecanico-btn mecanico-btn-aceptar"
                    onClick={() => cambiarEstadoAgenda(item.id, 'aceptada')}
                  >
                    Aceptar hora
                  </button>
                )}
                {item.estado === 'aceptada' && (
                  <>
                    <button
                      className="mecanico-btn mecanico-btn-listo"
                      onClick={() => cambiarEstadoAgenda(item.id, 'listo')}
                    >
                      Marcar como listo
                    </button>
                    <button
                      className="mecanico-btn mecanico-btn-pieza"
                      onClick={() => setModalPieza(item.id)}
                    >
                      Pieza faltante
                    </button>
                  </>
                )}
                {item.estado === 'en_espera_pieza' && (
                  <button
                    className="mecanico-btn mecanico-btn-aceptar"
                    onClick={() => cambiarEstadoAgenda(item.id, 'aceptada')}
                  >
                    Pieza llegó — retomar
                  </button>
                )}
                {item.estado === 'listo' && (
                  <p className="mecanico-completado">✓ Servicio completado — cliente notificado</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {modalPieza && (
        <div className="mecanico-modal-overlay">
          <div className="mecanico-modal">
            <h3>Pieza faltante</h3>
            <p>Describe qué pieza falta y el motivo. Este mensaje se enviará al cliente y al encargado de almacén.</p>
            <textarea
              placeholder="Ej: El sillín ergonómico no está disponible en stock. Se solicitó al proveedor, estimamos 3 días hábiles..."
              rows={4}
              value={mensajePieza}
              onChange={e => setMensajePieza(e.target.value)}
            />
            <div className="mecanico-modal-btns">
              <button
                className="mecanico-btn mecanico-btn-volver"
                onClick={() => { setModalPieza(null); setMensajePieza('') }}
              >
                Cancelar
              </button>
              <button
                className="mecanico-btn mecanico-btn-pieza"
                onClick={() => confirmarPiezaFaltante(modalPieza)}
                disabled={!mensajePieza.trim()}
              >
                Confirmar y notificar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Mecanico