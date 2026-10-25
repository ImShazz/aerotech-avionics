
import { useState } from 'react'
import './Tecnologias.css'

// Catálogo público de tecnologías de AeroTech Avionics
const tecnologias = [
  {
    id: 1,
    nombre: 'Sistemas de navegación',
    categoria: 'Navegación',
    imagen: '/images/tecnologias/navegacion.jpg',
    descripcion:
      'Tecnologías de posicionamiento, orientación y guiado utilizadas en aeronaves modernas para optimizar la seguridad y la precisión del vuelo.',
    aplicaciones: [
      'Rutas de vuelo y posicionamiento',
      'Monitoreo de trayectorias',
      'Apoyo a la navegación instrumental',
    ],
  },
  {
    id: 2,
    nombre: 'Sistemas de comunicación',
    categoria: 'Comunicaciones',
    imagen: '/images/tecnologias/comunicacion.jpg',
    descripcion:
      'Equipos que permiten la comunicación entre aeronaves, torres de control y estaciones terrestres, asegurando coordinación operativa eficiente.',
    aplicaciones: [
      'Comunicación aire-tierra',
      'Coordinación con control de tráfico aéreo',
      'Transmisión de información operativa',
    ],
  },
  {
    id: 3,
    nombre: 'Instrumentación digital',
    categoria: 'Instrumentación',
    imagen: '/images/tecnologias/instrumentacion.jpg',
    descripcion:
      'Pantallas, indicadores e instrumentos digitales que permiten visualizar datos críticos de vuelo y del estado de la aeronave en tiempo real.',
    aplicaciones: [
      'Visualización de altitud y velocidad',
      'Monitoreo del estado de sistemas',
      'Interfaz digital para pilotos y técnicos',
    ],
  },
  {
    id: 4,
    nombre: 'Sistemas UAV',
    categoria: 'UAV',
    imagen: '/images/tecnologias/uav.jpg',
    descripcion:
      'Soluciones tecnológicas orientadas a vehículos aéreos no tripulados, utilizadas para monitoreo, reconocimiento y apoyo operativo en entornos estratégicos.',
    aplicaciones: [
      'Supervisión aérea remota',
      'Reconocimiento de zonas de operación',
      'Apoyo a misiones de vigilancia',
    ],
  },
  {
    id: 5,
    nombre: 'Conectividad piloto-dron',
    categoria: 'Conectividad',
    imagen: '/images/tecnologias/conectividad-dron.jpg',
    descripcion:
      'Sistemas que permiten la comunicación y coordinación entre operadores, pilotos y plataformas no tripuladas, favoreciendo el control seguro de misiones.',
    aplicaciones: [
      'Enlace entre estación de control y dron',
      'Monitoreo de telemetría en tiempo real',
      'Coordinación operativa entre piloto y UAV',
    ],
  },
  {
    id: 6,
    nombre: 'Aviones de guerra',
    categoria: 'Defensa',
    imagen: '/images/tecnologias/aviones-guerra.jpg',
    descripcion:
      'Tecnologías aeronáuticas aplicadas a aeronaves de defensa, enfocadas en navegación avanzada, sensores, instrumentación táctica y apoyo a operaciones aéreas.',
    aplicaciones: [
      'Instrumentación táctica de vuelo',
      'Integración de sensores avanzados',
      'Apoyo a operaciones de defensa aérea',
    ],
  },
]

// Componente principal de la página
function Tecnologias() {

  // Estado del buscador
  const [busqueda, setBusqueda] = useState('')

  // Estado del filtro por categoría
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas')

  // Normalizar el texto de búsqueda
  const textoBusqueda = busqueda.toLocaleLowerCase('es').trim()

  // Filtrar por búsqueda y categoría
  const tecnologiasFiltradas = tecnologias.filter((tecnologia) => {

    const coincideBusqueda =
      tecnologia.nombre.toLocaleLowerCase('es').includes(textoBusqueda) ||
      tecnologia.categoria.toLocaleLowerCase('es').includes(textoBusqueda) ||
      tecnologia.descripcion.toLocaleLowerCase('es').includes(textoBusqueda)

    const coincideCategoria =
      categoriaSeleccionada === 'Todas' ||
      tecnologia.categoria === categoriaSeleccionada

    return coincideBusqueda && coincideCategoria
  })

  return (
    <main className="tecnologias-page">

      {/* Imagen principal */}
      <section className="tecnologias-hero">
        <div className="container tecnologias-hero-content">
          <div className="tecnologias-hero-texto">

            <span className="tecnologias-etiqueta">
              Soluciones aeronáuticas
            </span>

            <h1>Tecnologías de aviónica</h1>

            <p>
              Conoce las principales soluciones tecnológicas de
              AeroTech Avionics, orientadas a la navegación,
              la comunicación, la instrumentación digital
              y los sistemas aeronáuticos de defensa.
            </p>

          </div>
        </div>
      </section>

      {/* Catálogo de tecnologías */}
      <section className="container py-5">

        {/* Buscador */}
        <div className="tecnologias-buscador mb-4">

          <label
            htmlFor="buscar-tecnologia"
            className="form-label"
          >
            Buscar tecnología
          </label>

          <input
            id="buscar-tecnologia"
            type="search"
            className="form-control"
            placeholder="Ejemplo: navegación, UAV o defensa"
            value={busqueda}
            onChange={(evento) => setBusqueda(evento.target.value)}
          />

        </div>

        {/* Nuevo filtro por categoría */}
        <div className="mb-4">

          <label
            htmlFor="filtro-categoria"
            className="form-label"
          >
            Filtrar por categoría
          </label>

          <select
            id="filtro-categoria"
            className="form-select"
            value={categoriaSeleccionada}
            onChange={(evento) =>
              setCategoriaSeleccionada(evento.target.value)
            }
          >
            <option value="Todas">
              Todas las tecnologías
            </option>
            <option value="Navegación">Navegación</option>
            <option value="Comunicaciones">Comunicaciones</option>
            <option value="Instrumentación">Instrumentación</option>
            <option value="UAV">UAV</option>
            <option value="Conectividad">Conectividad</option>
            <option value="Defensa">Defensa</option>
          </select>

        </div>

        {/* Resultado del filtrado */}
        {tecnologiasFiltradas.length > 0 ? (

          <div
            className="row g-4"
            aria-label="Catálogo de tecnologías"
          >

            {tecnologiasFiltradas.map((tecnologia) => (

              <div
                className="col-12 col-md-6 col-lg-4"
                key={tecnologia.id}
              >

                <article className="card h-100 tecnologia-card">

                  {/* Imagen */}
                  <img
                    src={tecnologia.imagen}
                    alt={tecnologia.nombre}
                    className="tecnologia-imagen"
                    loading="lazy"
                  />

                  <div className="card-body">

                    {/* Categoría */}
                    <span className="tecnologia-categoria">
                      {tecnologia.categoria}
                    </span>

                    {/* Nombre */}
                    <h2 className="card-title h4 mt-2">
                      {tecnologia.nombre}
                    </h2>

                    {/* Descripción */}
                    <p className="card-text">
                      {tecnologia.descripcion}
                    </p>

                    {/* Aplicaciones */}
                    <h3 className="h6 mt-4">
                      Aplicaciones
                    </h3>

                    <ul className="tecnologia-lista">
                      {tecnologia.aplicaciones.map((aplicacion) => (
                        <li key={aplicacion}>
                          {aplicacion}
                        </li>
                      ))}
                    </ul>

                  </div>
                </article>
              </div>

            ))}
          </div>

        ) : (

          <p role="status" className="text-secondary">
            No se encontraron tecnologías con los filtros seleccionados.
          </p>

        )}

      </section>
    </main>
  )
}

export default Tecnologias
