
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-contenido">
        <div className="hero-texto">
          <span className="hero-etiqueta">
            AEROTECH AVIONICS
          </span>

          <h1>
            INNOVACIÓN Y TECNOLOGÍA AEROESPACIAL
          </h1>

          <p>
            Soluciones avanzadas de aviónica,
            integración y modernización de sistemas
            para el sector aeroespacial y de defensa.
          </p>

          <div className="hero-acciones">
            <a href="#servicios" className="btn hero-boton">
              EXPLORAR SERVICIOS
            </a>

            <a href="#proyectos" className="btn hero-boton-secundario">
              NUESTROS PROYECTOS
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
