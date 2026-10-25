
const tecnologias = [
  {
    id: 1,
    nombre: 'Sistemas de navegación',
    descripcion:
      'Tecnologías de posicionamiento y orientación utilizadas en aeronaves.',
  },
  {
    id: 2,
    nombre: 'Sistemas de comunicación',
    descripcion:
      'Equipos que permiten la comunicación entre aeronaves y estaciones terrestres.',
  },
  {
    id: 3,
    nombre: 'Instrumentación digital',
    descripcion:
      'Pantallas e instrumentos para visualizar información de vuelo.',
  },
]

function Tecnologias() {
  return (
    <main className="container py-5">
      <header className="mb-5">
        <h1>Tecnologías de aviónica</h1>
        <p className="text-secondary">
          Conoce las soluciones tecnológicas de AeroTech Avionics.
        </p>
      </header>

      <section className="row g-4" aria-label="Catálogo de tecnologías">
        {tecnologias.map((tecnologia) => (
          <div className="col-12 col-md-6 col-lg-4" key={tecnologia.id}>
            <article className="card h-100 shadow-sm">
              <div className="card-body">
                <h2 className="card-title h5">{tecnologia.nombre}</h2>
                <p className="card-text">{tecnologia.descripcion}</p>
              </div>
            </article>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Tecnologias
