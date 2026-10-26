
import { Routes, Route } from 'react-router'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToHash from './components/ScrollToHash'

import Home from './pages/Home/Home'
import Nosotros from './pages/Nosotros/Nosotros'
import Contacto from './pages/Contacto/Contacto'

import Tecnologias from './features/tecnologias/Tecnologias'
import Componentes from './features/componentes/Componentes'

import Dashboard from './features/admin/Dashboard'
import Clientes from './features/clientes/Clientes'
import Proyectos from './features/proyectos/Proyectos'

import './App.css'

function App() {
  return (
    <>
      <ScrollToHash />

      <Navbar />

      <Routes>
        {/* Portal público */}
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/tecnologias" element={<Tecnologias />} />

        {/* Área administrativa */}
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/componentes" element={<Componentes />} />
        <Route path="/admin/proyectos" element={<Proyectos />} />

        {/* Clientes: conservar la ruta implementada por Vicente */}
        <Route path="/clientes" element={<Clientes />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
