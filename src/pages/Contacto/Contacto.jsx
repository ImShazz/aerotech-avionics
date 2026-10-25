
import { useState } from 'react'
import {
  Mail,
  Building2,
  MessageSquare,
  ArrowRight,
  ShieldCheck
} from 'lucide-react'

import './Contacto.css'

function Contacto() {
  const [aviso, setAviso] = useState('')

  const manejarEnvio = (evento) => {
    evento.preventDefault()

    // Pendiente: conectar con el servicio de contacto
    setAviso(
      'El formulario todavía no está conectado al servicio de recepción. Tu mensaje no ha sido enviado.'
    )
  }

  return (
    <main className="pagina-contacto">

      <section className="contacto-hero">
        <div className="container">
          <span className="contacto-etiqueta">
            AEROTECH AVIONICS
          </span>

          <h1>HABLEMOS DE TU PRÓXIMO PROYECTO</h1>

          <p>
            Estamos preparados para explorar nuevas
            oportunidades de colaboración, ingeniería
            e innovación aeroespacial.
          </p>
        </div>
      </section>

      <section className="contacto-contenido">
        <div className="container">
          <div className="row g-5 align-items-start">

            <div className="col-12 col-lg-5">
              <div className="contacto-informacion">

                <span className="contacto-subtitulo">
                  CONECTEMOS
                </span>

                <h2>SOLUCIONES QUE COMIENZAN CON UNA CONVERSACIÓN</h2>

                <p>
                  Cada proyecto presenta nuevos desafíos.
                  Nuestro equipo está enfocado en ofrecer
                  soluciones de integración, modernización
                  y tecnología aeronáutica.
                </p>

                <div className="contacto-beneficio">
                  <Building2 size={25} aria-hidden="true" />
                  <div>
                    <h3>Colaboración corporativa</h3>
                    <p>
                      Conversemos sobre oportunidades
                      de cooperación y desarrollo.
                    </p>
                  </div>
                </div>

                <div className="contacto-beneficio">
                  <MessageSquare size={25} aria-hidden="true" />
                  <div>
                    <h3>Consultas técnicas</h3>
                    <p>
                      Cuéntanos sobre tus necesidades
                      de integración aeronáutica.
                    </p>
                  </div>
                </div>

                <div className="contacto-beneficio">
                  <ShieldCheck size={25} aria-hidden="true" />
                  <div>
                    <h3>Atención profesional</h3>
                    <p>
                      Nuestro enfoque prioriza la precisión,
                      la comunicación y la calidad.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-12 col-lg-7">
              <div className="contacto-formulario">

                <div className="contacto-formulario-encabezado">
                  <Mail size={30} aria-hidden="true" />

                  <h2>ENVÍANOS TU CONSULTA</h2>

                  <p>
                    Completa tus datos y describe
                    brevemente el motivo de tu contacto.
                  </p>
                </div>

                <form onSubmit={manejarEnvio}>

                  <div className="row g-3">

                    <div className="col-12 col-md-6">
                      <label htmlFor="contacto-nombre" className="form-label">
                        Nombre completo
                      </label>
                      <input
                        id="contacto-nombre"
                        name="nombre"
                        type="text"
                        className="form-control"
                        placeholder="Tu nombre"
                        autoComplete="name"
                        required
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <label htmlFor="contacto-empresa" className="form-label">
                        Empresa u organización
                      </label>
                      <input
                        id="contacto-empresa"
                        name="empresa"
                        type="text"
                        className="form-control"
                        placeholder="Nombre de la organización"
                        autoComplete="organization"
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="contacto-correo" className="form-label">
                        Correo electrónico
                      </label>
                      <input
                        id="contacto-correo"
                        name="correo"
                        type="email"
                        className="form-control"
                        placeholder="correo@empresa.com"
                        autoComplete="email"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="contacto-asunto" className="form-label">
                        Motivo de contacto
                      </label>
                      <select
                        id="contacto-asunto"
                        name="asunto"
                        className="form-select"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          Selecciona una opción
                        </option>
                        <option value="servicios">
                          Consulta sobre servicios
                        </option>
                        <option value="tecnologias">
                          Soluciones tecnológicas
                        </option>
                        <option value="proyectos">
                          Propuesta de proyecto
                        </option>
                        <option value="colaboracion">
                          Colaboración empresarial
                        </option>
                        <option value="otro">
                          Otra consulta
                        </option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label htmlFor="contacto-mensaje" className="form-label">
                        Mensaje
                      </label>
                      <textarea
                        id="contacto-mensaje"
                        name="mensaje"
                        className="form-control"
                        rows="5"
                        placeholder="Cuéntanos sobre tu consulta..."
                        required
                      />
                    </div>

                  </div>

                  <button
                    type="submit"
                    className="contacto-boton"
                  >
                    ENVIAR CONSULTA
                    <ArrowRight size={19} aria-hidden="true" />
                  </button>

                  {aviso && (
                    <p className="contacto-aviso" role="status">
                      {aviso}
                    </p>
                  )}

                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}

export default Contacto
