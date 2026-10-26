
import { useState } from 'react'

import {
  agregarComponente,
  actualizarComponente,
  eliminarComponente,
  filtrarComponentes
} from './operaciones'

// Componentes iniciales
const componentesIniciales = [
  {
    id: 1,
    nombre: 'Módulo de navegación',
    categoria: 'Navegación',
    estado: 'Disponible',
  },
  {
    id: 2,
    nombre: 'Unidad de comunicación',
    categoria: 'Comunicaciones',
    estado: 'En mantenimiento',
  },
  {
    id: 3,
    nombre: 'Pantalla multifunción',
    categoria: 'Instrumentación',
    estado: 'Disponible',
  },
]

function Componentes() {
  const [componentes, setComponentes] = useState(componentesIniciales)

  // Formulario
  const [nombre, setNombre] = useState('')
  const [categoria, setCategoria] = useState('')
  const [estado, setEstado] = useState('Disponible')
  const [error, setError] = useState('')

  // Edición y eliminación
  const [idEnEdicion, setIdEnEdicion] = useState(null)
  const [componenteAEliminar, setComponenteAEliminar] = useState(null)

  // Buscador y filtros
  const [busqueda, setBusqueda] = useState('')
  const [filtroCategoria, setFiltroCategoria] = useState('Todas')
  const [filtroEstado, setFiltroEstado] = useState('Todos')

  // Usamos la función probada con Vitest
  const componentesFiltrados = filtrarComponentes(
    componentes,
    busqueda,
    filtroCategoria,
    filtroEstado
  )

  function limpiarFormulario() {
    setNombre('')
    setCategoria('')
    setEstado('Disponible')
    setError('')
    setIdEnEdicion(null)
  }

  function editarComponente(componente) {
    setIdEnEdicion(componente.id)
    setNombre(componente.nombre)
    setCategoria(componente.categoria)
    setEstado(componente.estado)
    setError('')

    document.getElementById('formulario-componentes')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  function guardarComponente(evento) {
    evento.preventDefault()

    const datos = {
      nombre,
      categoria,
      estado,
    }

    if (idEnEdicion !== null) {
      // UPDATE: utilizar la función probada
      const resultado = actualizarComponente(
        componentes,
        idEnEdicion,
        datos
      )

      if (resultado.error) {
        setError(resultado.error)
        return
      }

      setComponentes(resultado.componentes)
    } else {
      // CREATE: utilizar la función probada
      const resultado = agregarComponente(componentes, datos)

      if (resultado.error) {
        setError(resultado.error)
        return
      }

      setComponentes(resultado.componentes)
    }

    limpiarFormulario()
  }

  function solicitarEliminacion(componente) {
    setComponenteAEliminar(componente)
  }

  function confirmarEliminacion() {
    if (!componenteAEliminar) return

    const idEliminar = componenteAEliminar.id

    // DELETE: utilizar la función probada
    setComponentes((anteriores) =>
      eliminarComponente(anteriores, idEliminar)
    )

    if (idEnEdicion === idEliminar) {
      limpiarFormulario()
    }

    setComponenteAEliminar(null)
  }

  function cancelarEliminacion() {
    setComponenteAEliminar(null)
  }

  function limpiarFiltros() {
    setBusqueda('')
    setFiltroCategoria('Todas')
    setFiltroEstado('Todos')
  }

  return (
    <main className="container py-5">
      <header className="mb-4">
        <h1>Gestión de componentes</h1>
        <p className="text-secondary">
          Administración de componentes electrónicos aeronáuticos.
        </p>
      </header>

      {/* Formulario de registro y edición */}
      <section id="formulario-componentes" className="card mb-5">
        <div className="card-body">
          <h2 className="h4 mb-4">
            {idEnEdicion !== null
              ? 'Editar componente'
              : 'Registrar componente'}
          </h2>

          <form onSubmit={guardarComponente} noValidate>
            <div className="mb-3">
              <label htmlFor="nombre-componente" className="form-label">
                Nombre del componente
              </label>
              <input
                id="nombre-componente"
                type="text"
                className="form-control"
                placeholder="Ejemplo: Sensor de navegación"
                maxLength={100}
                value={nombre}
                onChange={(evento) => setNombre(evento.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="categoria-componente" className="form-label">
                Categoría
              </label>
              <select
                id="categoria-componente"
                className="form-select"
                value={categoria}
                onChange={(evento) => setCategoria(evento.target.value)}
              >
                <option value="">Selecciona una categoría</option>
                <option value="Navegación">Navegación</option>
                <option value="Comunicaciones">Comunicaciones</option>
                <option value="Instrumentación">Instrumentación</option>
                <option value="UAV">UAV</option>
                <option value="Conectividad">Conectividad</option>
                <option value="Defensa">Defensa</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="estado-componente" className="form-label">
                Estado
              </label>
              <select
                id="estado-componente"
                className="form-select"
                value={estado}
                onChange={(evento) => setEstado(evento.target.value)}
              >
                <option value="Disponible">Disponible</option>
                <option value="En mantenimiento">En mantenimiento</option>
                <option value="No disponible">No disponible</option>
              </select>
            </div>

            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            <div className="d-flex gap-2 flex-wrap">
              <button type="submit" className="btn btn-primary">
                {idEnEdicion !== null
                  ? 'Guardar cambios'
                  : 'Registrar componente'}
              </button>

              {idEnEdicion !== null && (
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={limpiarFormulario}
                >
                  Cancelar edición
                </button>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Buscador y filtros */}
      <section className="card mb-4" aria-label="Filtros de componentes">
        <div className="card-body">
          <h2 className="h4 mb-3">Buscar y filtrar componentes</h2>

          <div className="row g-3">
            <div className="col-12 col-md-4">
              <label htmlFor="buscar-componente" className="form-label">
                Buscar por nombre
              </label>
              <input
                id="buscar-componente"
                type="search"
                className="form-control"
                placeholder="Ejemplo: navegación"
                value={busqueda}
                onChange={(evento) => setBusqueda(evento.target.value)}
              />
            </div>

            <div className="col-12 col-md-4">
              <label htmlFor="filtrar-categoria" className="form-label">
                Categoría
              </label>
              <select
                id="filtrar-categoria"
                className="form-select"
                value={filtroCategoria}
                onChange={(evento) => setFiltroCategoria(evento.target.value)}
              >
                <option value="Todas">Todas las categorías</option>
                <option value="Navegación">Navegación</option>
                <option value="Comunicaciones">Comunicaciones</option>
                <option value="Instrumentación">Instrumentación</option>
                <option value="UAV">UAV</option>
                <option value="Conectividad">Conectividad</option>
                <option value="Defensa">Defensa</option>
              </select>
            </div>

            <div className="col-12 col-md-4">
              <label htmlFor="filtrar-estado" className="form-label">
                Estado
              </label>
              <select
                id="filtrar-estado"
                className="form-select"
                value={filtroEstado}
                onChange={(evento) => setFiltroEstado(evento.target.value)}
              >
                <option value="Todos">Todos los estados</option>
                <option value="Disponible">Disponible</option>
                <option value="En mantenimiento">En mantenimiento</option>
                <option value="No disponible">No disponible</option>
              </select>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-outline-secondary mt-3"
            onClick={limpiarFiltros}
          >
            Limpiar filtros
          </button>
        </div>
      </section>

      {/* Tabla de componentes */}
      <section aria-label="Listado de componentes">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h4 mb-0">Componentes registrados</h2>
          <span className="text-secondary">
            {componentesFiltrados.length} resultado(s)
          </span>
        </div>

        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Categoría</th>
                <th scope="col">Estado</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {componentesFiltrados.map((componente) => (
                <tr key={componente.id}>
                  <td>{componente.id}</td>
                  <td>{componente.nombre}</td>
                  <td>{componente.categoria}</td>
                  <td>{componente.estado}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => editarComponente(componente)}
                      >
                        Editar
                      </button>

                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => solicitarEliminacion(componente)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {componentesFiltrados.length === 0 && (
          <p role="status" className="alert alert-info">
            No se encontraron componentes con los filtros seleccionados.
          </p>
        )}
      </section>

      {/* Confirmación de eliminación */}
      {componenteAEliminar && (
        <div
          className="card border-danger mt-4"
          role="alertdialog"
          aria-labelledby="titulo-eliminacion"
          aria-describedby="descripcion-eliminacion"
          aria-modal="false"
        >
          <div className="card-body">
            <h2 id="titulo-eliminacion" className="h5 text-danger">
              Confirmar eliminación
            </h2>

            <p id="descripcion-eliminacion">
              ¿Estás seguro de que deseas eliminar el componente{' '}
              <strong>{componenteAEliminar.nombre}</strong>?
            </p>

            <div className="d-flex gap-2">
              <button
                type="button"
                className="btn btn-danger"
                onClick={confirmarEliminacion}
              >
                Sí, eliminar
              </button>

              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={cancelarEliminacion}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Componentes
