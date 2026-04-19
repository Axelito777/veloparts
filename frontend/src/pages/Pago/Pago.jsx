import { useState } from 'react'
import './Pago.css'

function Pago() {
  const [tipoEntrega, setTipoEntrega] = useState('retiro')

  const formatPrecio = (precio) =>
    precio.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })

  const total = 229960

  return (
    <div className="pago">
      <h1>Finalizar compra</h1>

      <div className="pago-contenido">
        <div className="pago-formulario">

          <div className="pago-seccion">
            <h2>Datos de contacto</h2>
            <div className="pago-campos">
              <div className="pago-campo">
                <label>Correo electrónico</label>
                <input type="email" placeholder="tucorreo@gmail.com" />
              </div>
              <div className="pago-campo">
                <label>Teléfono</label>
                <input type="tel" placeholder="+56 9 1234 5678" />
              </div>
            </div>
          </div>

          <div className="pago-seccion">
            <h2>Tipo de entrega</h2>
            <div className="pago-entrega-opciones">
              <div
                className={`pago-entrega-opcion ${tipoEntrega === 'retiro' ? 'activo' : ''}`}
                onClick={() => setTipoEntrega('retiro')}
              >
                <div className="pago-entrega-radio">
                  {tipoEntrega === 'retiro' && <div className="pago-entrega-radio-inner" />}
                </div>
                <div>
                  <p className="pago-entrega-titulo">Retiro en tienda</p>
                  <p className="pago-entrega-desc">Retira en nuestro local con tu código de retiro</p>
                </div>
                <span className="pago-entrega-gratis">Gratis</span>
              </div>

              <div
                className={`pago-entrega-opcion ${tipoEntrega === 'envio' ? 'activo' : ''}`}
                onClick={() => setTipoEntrega('envio')}
              >
                <div className="pago-entrega-radio">
                  {tipoEntrega === 'envio' && <div className="pago-entrega-radio-inner" />}
                </div>
                <div>
                  <p className="pago-entrega-titulo">Envío a domicilio</p>
                  <p className="pago-entrega-desc">Recibe tu pedido en la dirección indicada</p>
                </div>
                <span className="pago-entrega-costo">A calcular</span>
              </div>
            </div>
          </div>

          {tipoEntrega === 'envio' && (
            <div className="pago-seccion">
              <h2>Datos de envío</h2>
              <div className="pago-campos">
                <div className="pago-campo">
                  <label>Nombre completo</label>
                  <input type="text" placeholder="Tu nombre completo" />
                </div>
                <div className="pago-campo">
                  <label>Dirección</label>
                  <input type="text" placeholder="Calle, número" />
                </div>
                <div className="pago-campo pago-campo-mitad">
                  <div>
                    <label>Ciudad</label>
                    <input type="text" placeholder="Puerto Montt" />
                  </div>
                  <div>
                    <label>Región</label>
                    <input type="text" placeholder="Los Lagos" />
                  </div>
                </div>
                <div className="pago-campo">
                  <label>Descripción adicional <span className="opcional">(opcional)</span></label>
                  <textarea placeholder="Ej: dejar con el conserje, timbre no funciona..." rows={3} />
                </div>
              </div>
            </div>
          )}

        </div>

        <div className="pago-resumen">
          <h2>Resumen del pedido</h2>

          <div className="pago-resumen-items">
            <div className="pago-resumen-fila">
              <span>Rueda delantera 29" x1</span>
              <span>{formatPrecio(89990)}</span>
            </div>
            <div className="pago-resumen-fila">
              <span>Casco Trail MTB x2</span>
              <span>{formatPrecio(109980)}</span>
            </div>
            <div className="pago-resumen-fila">
              <span>Guantes Full Finger x1</span>
              <span>{formatPrecio(29990)}</span>
            </div>
          </div>

          <div className="pago-resumen-total">
            <span>Total</span>
            <span>{formatPrecio(total)}</span>
          </div>

          <button className="pago-btn-confirmar">
            Confirmar y pagar
          </button>

          <p className="pago-aviso">
            Al confirmar recibirás un correo con los detalles de tu pedido
            {tipoEntrega === 'retiro' ? ' y tu código de retiro.' : ' y el seguimiento de tu envío.'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Pago