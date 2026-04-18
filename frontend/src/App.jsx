import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home/Home'
import Carrito from './pages/Carrito/Carrito'

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
      </Routes>
    </BrowserRouter>
  )
}

export default App