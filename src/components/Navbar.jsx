
import { useState } from 'react'

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const cerrarMenu = () => setMenuAbierto(false)

  const enlaces = [
    { nombre: 'INICIO', ruta: '#inicio' },
    { nombre: 'NOSOTROS', ruta: '#nosotros' },
    { nombre: 'SERVICIOS', ruta: '#servicios' },
    { nombre: 'TECNOLOGÍAS', ruta: '#tecnologias' },
    { nombre: 'PROYECTOS', ruta: '#proyectos' },
    { nombre: 'CONTACTO', ruta: '#contacto' },
    { nombre: 'ACCESO', ruta: '#acceso' },
  ]

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: 'var(--color-primary)' }}
    >
      <div className="container">
        <a className="navbar-brand fw-bold" href="#inicio">
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
            {enlaces.map((enlace) => (
              <a
                key={enlace.nombre}
                className="nav-link"
                href={enlace.ruta}
                onClick={cerrarMenu}
              >
                {enlace.nombre}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
