
import { Routes, Route } from 'react-router'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home/Home'
import Nosotros from './pages/Nosotros/Nosotros'

import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
