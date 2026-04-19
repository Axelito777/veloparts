import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home/Home'
import Carrito from './pages/Carrito/Carrito'
import Pago from './pages/Pago/Pago'

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
      </Routes>
    </BrowserRouter>
  )
}

export default App