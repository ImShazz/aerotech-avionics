
import { Mail, MapPin } from 'lucide-react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer-aerotech">
      <div className="container">
        <div className="row g-4">

          <div className="col-12 col-md-6 col-lg-4">
            <img
              src="/images/aerotech_logo_completo.png"
              alt="AeroTech Avionics"
              className="footer-logo"
            />

            <p className="footer-descripcion">
              Soluciones de aviónica, integración tecnológica
              y modernización de sistemas para el sector
              aeroespacial y de defensa.
            </p>
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <h3>NAVEGACIÓN</h3>

            <a href="#nosotros">Nosotros</a>
            <a href="#servicios">Servicios</a>
            <a href="#tecnologias">Tecnologías</a>
            <a href="#proyectos">Proyectos</a>
          </div>

          <div className="col-6 col-md-3 col-lg-3">
            <h3>SOLUCIONES</h3>

            <a href="#servicios">Integración de aviónica</a>
            <a href="#servicios">Mantenimiento</a>
            <a href="#servicios">Sistemas de radar</a>
            <a href="#servicios">Modernización</a>
          </div>

          <div className="col-12 col-lg-3">
            <h3>CONTACTO</h3>

            <a href="#contacto" className="footer-contacto">
              <Mail size={17} />
              Formulario de contacto
            </a>

            <p className="footer-contacto">
              <MapPin size={17} />
              Chile
            </p>
          </div>

        </div>

        <div className="footer-inferior">
          <p>
            © {new Date().getFullYear()} AeroTech Avionics.
            Proyecto académico ficticio — Fullstack II.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
