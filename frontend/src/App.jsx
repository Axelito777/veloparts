import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home/Home'
import Carrito from './pages/Carrito/Carrito'
import Pago from './pages/Pago/Pago'
import Catalogo from './pages/Catalogo/Catalogo'
import Producto from './pages/Producto/Producto'
import Nosotros from './pages/Nosotros/Nosotros'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Home />
          </Layout>
        }/>
        <Route path="/carrito" element={
          <Layout>
            <Carrito />
          </Layout>
        }/>
        <Route path="/pago" element={
          <Layout>
            <Pago />
          </Layout>
        }/>
        <Route path="/catalogo" element={
          <Layout>
            <Catalogo />
          </Layout>
        }/>
        <Route path="/producto/:id" element={
          <Layout>
            <Producto />
          </Layout>
        }/>
        <Route path="/nosotros" element={
          <Layout>
            <Nosotros />
          </Layout>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App