
import { ArrowRight, ShieldCheck, Cpu } from 'lucide-react'
import './SobreAerotech.css'

function SobreAerotech() {
  return (
    <section className="sobre-aerotech" id="nosotros">
      <div className="container">
        <div className="row align-items-center g-5">

          <div className="col-12 col-lg-6">
            <div className="sobre-aerotech-imagen">
              <img
                src="/images/sobre-aerotech.jpg"
                alt="Aeronave en instalaciones de mantenimiento"
              />
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="sobre-aerotech-contenido">

              <span className="sobre-aerotech-etiqueta">
                SOBRE NOSOTROS
              </span>

              <h2>INGENIERÍA PARA EL FUTURO</h2>

              <p>
                En AeroTech Avionics desarrollamos soluciones
                de ingeniería, integración y modernización
                de sistemas electrónicos aeronáuticos.
              </p>

              <p>
                Nuestro enfoque combina innovación tecnológica,
                precisión y compromiso con la evolución
                del sector aeroespacial.
              </p>

              <div className="sobre-aerotech-valores">
                <div>
                  <ShieldCheck size={22} />
                  <span>Compromiso y precisión</span>
                </div>

                <div>
                  <Cpu size={22} />
                  <span>Innovación tecnológica</span>
                </div>
              </div>

              <a href="#nosotros" className="sobre-aerotech-enlace">
                CONOCE NUESTRA EMPRESA
                <ArrowRight size={18} />
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SobreAerotech
