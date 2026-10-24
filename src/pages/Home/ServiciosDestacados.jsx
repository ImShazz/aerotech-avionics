
import {
  Cpu,
  Wrench,
  Radar,
  Settings
} from 'lucide-react'

import './ServiciosDestacados.css'

const servicios = [
  {
    id: 1,
    titulo: 'Integración de aviónica',
    descripcion:
      'Integración de sistemas electrónicos de navegación e instrumentación aeronáutica.',
    Icono: Cpu
  },
  {
    id: 2,
    titulo: 'Mantenimiento aeronáutico',
    descripcion:
      'Inspección, diagnóstico y seguimiento de componentes electrónicos.',
    Icono: Wrench
  },
  {
    id: 3,
    titulo: 'Sistemas de radar',
    descripcion:
      'Soluciones de sensores, detección y vigilancia aeronáutica.',
    Icono: Radar
  },
  {
    id: 4,
    titulo: 'Modernización tecnológica',
    descripcion:
      'Actualización e integración de sistemas electrónicos existentes.',
    Icono: Settings
  }
]

function ServiciosDestacados() {
  return (
    <section id="servicios" className="servicios-section">
      <div className="container">
        <div className="servicios-encabezado">
          <span className="servicios-etiqueta">
            NUESTRAS CAPACIDADES
          </span>

          <h2>SOLUCIONES AEROESPACIALES</h2>

          <p>
            Tecnología, precisión e innovación para
            sistemas aeronáuticos.
          </p>
        </div>

        <div className="row g-4">
          {servicios.map(({ id, titulo, descripcion, Icono }) => (
            <div className="col-12 col-md-6 col-lg-3" key={id}>
              <article className="servicio-card">
                <Icono size={32} strokeWidth={1.6} aria-hidden="true" />

                <h3>{titulo}</h3>

                <p>{descripcion}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiciosDestacados
