
import {
  Building2,
  Target,
  Telescope,
  ShieldCheck
} from 'lucide-react'

import './Nosotros.css'

function Nosotros() {
  return (
    <main className="pagina-nosotros">

      <section className="nosotros-contenido" aria-labelledby="titulo-nosotros">
        <div className="container">
          <div className="row">

            <div className="col-12 col-lg-6">

              {/* Presentación, misión y visión */}
              <article className="nosotros-panel">

                <Building2 size={32} strokeWidth={1.5} />

                <h1 id="titulo-nosotros">QUIÉNES SOMOS</h1>

                <p>
                  AeroTech Avionics es una empresa
                  especializada en ingeniería, integración
                  y modernización de sistemas electrónicos
                  aeronáuticos.
                </p>

                <p>
                  Combinamos tecnología, precisión y gestión
                  de proyectos para responder a las
                  necesidades del sector aeroespacial.
                </p>

                <div className="nosotros-panel-separador" />

                <div className="nosotros-panel-item">
                  <Target size={25} strokeWidth={1.6} />

                  <div>
                    <h2>NUESTRA MISIÓN</h2>
                    <p>
                      Desarrollar soluciones tecnológicas
                      confiables para sistemas aeronáuticos.
                    </p>
                  </div>
                </div>

                <div className="nosotros-panel-item">
                  <Telescope size={25} strokeWidth={1.6} />

                  <div>
                    <h2>NUESTRA VISIÓN</h2>
                    <p>
                      Impulsar la innovación tecnológica
                      del sector aeroespacial.
                    </p>
                  </div>
                </div>

              </article>

              {/* Valores corporativos */}
              <article className="nosotros-valores-tarjeta">
                <ShieldCheck size={28} strokeWidth={1.5} />

                <div>
                  <h2>NUESTROS VALORES</h2>

                  <p>
                    Precisión, innovación, responsabilidad
                    y colaboración son los principios que
                    orientan nuestro trabajo.
                  </p>
                </div>
              </article>

            </div>

          </div>
        </div>
      </section>

    </main>
  )
}

export default Nosotros
