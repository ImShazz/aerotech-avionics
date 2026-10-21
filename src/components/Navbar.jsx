
import { useState } from 'react'

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const cerrarMenu = () => setMenuAbierto(false)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">
          AeroTech Avionics
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-label="Abrir o cerrar menú"
          aria-expanded={menuAbierto}
          aria-controls="menuPrincipal"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          id="menuPrincipal"
          className={`collapse navbar-collapse ${
            menuAbierto ? 'show' : ''
          }`}
        >
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="/" onClick={cerrarMenu}>
              INICIO
            </a>
            <a className="nav-link" href="#productos" onClick={cerrarMenu}>
              PRODUCTOS
            </a>
            <a className="nav-link" href="#categorias" onClick={cerrarMenu}>
              CATEGORIAS
            </a>
            <a className="nav-link" href="#carrito" onClick={cerrarMenu}>
              CARRITO
            </a>
            <a className="nav-link" href="#login" onClick={cerrarMenu}>
              INICIAR SESION
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
