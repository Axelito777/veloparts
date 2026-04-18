import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/Layout.css'

function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout-contenido">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout