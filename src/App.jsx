
import { Routes, Route } from 'react-router'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home/Home'

import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/nosotros"
          element={
            <main className="container py-5">
              <h1>Nosotros</h1>
              <p>Próximamente conocerás más sobre AeroTech Avionics.</p>
            </main>
          }
        />
      </Routes>

      <Footer />
    </>
  )
}

export default App
