
import { useState } from 'react'
import { NavLink, Link } from 'react-router'

import {
  Building2,
  Wrench,
  Cpu,
  FolderKanban,
  Mail,
  UserRound
} from 'lucide-react'

import './Navbar.css'

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const cerrarMenu = () => setMenuAbierto(false)

  const enlaces = [
    { nombre: 'NOSOTROS', ruta: '/nosotros', Icono: Building2 },
    { nombre: 'SERVICIOS', ruta: '/#servicios', Icono: Wrench },
    { nombre: 'TECNOLOGIAS', ruta: '/#tecnologias', Icono: Cpu },
    { nombre: 'PROYECTOS', ruta: '/#proyectos', Icono: FolderKanban },
    { nombre: 'CONTACTO', ruta: '/contacto', Icono: Mail },
    { nombre: 'ACCESO', ruta: '/admin', Icono: UserRound },
  ]

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-aerotech">
      <div className="container">

        <Link
          className="navbar-brand navbar-logo"
          to="/"
          onClick={cerrarMenu}
          aria-label="AeroTech Avionics - Ir al inicio"
        >
          <img
            src="/images/aerotech_logo_AA.png"
            alt="AeroTech Avionics"
            className="logo-aa"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-label="Abrir o cerrar menú"
          aria-controls="menuPrincipal"
          aria-expanded={menuAbierto}
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
          <div className="navbar-nav ms-auto align-items-lg-center">
            {enlaces.map(({ nombre, ruta, Icono }) => (
              <NavLink
                key={nombre}
                to={ruta}
                end
                className={({ isActive }) =>
                  `nav-link nav-enlace ${
                    nombre === 'ACCESO' ? 'nav-acceso' : ''
                  } ${
                    isActive && !ruta.includes('#')
                      ? 'active'
                      : ''
                  }`
                }
                onClick={cerrarMenu}
              >
                <Icono
                  size={17}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
                <span>{nombre}</span>
              </NavLink>
            ))}
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
