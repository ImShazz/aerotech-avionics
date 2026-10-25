
import Dashboard from './features/admin/Dashboard'
import Proyectos from './features/proyectos/Proyectos';
import { Routes, Route } from 'react-router'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Home from './pages/Home/Home'
import Nosotros from './pages/Nosotros/Nosotros'
import Contacto from './pages/Contacto/Contacto'
import Clientes from './features/clientes/Clientes'

import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/proyectos" element={<Proyectos />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
