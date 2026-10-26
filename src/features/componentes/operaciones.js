
import {
  validarNombreComponente,
  validarCategoriaComponente
} from './validaciones'

// Registrar un componente nuevo
export function agregarComponente(componentes, datos) {
  const errorNombre = validarNombreComponente(datos.nombre)
  const errorCategoria = validarCategoriaComponente(datos.categoria)

  if (errorNombre || errorCategoria) {
    return {
      componentes,
      error: errorNombre || errorCategoria
    }
  }

  const nuevoId =
    Math.max(0, ...componentes.map((componente) => componente.id)) + 1

  const nuevoComponente = {
    id: nuevoId,
    nombre: datos.nombre.trim(),
    categoria: datos.categoria,
    estado: datos.estado
  }

  return {
    componentes: [...componentes, nuevoComponente],
    error: null
  }
}

// Editar un componente existente
export function actualizarComponente(componentes, id, datos) {
  const errorNombre = validarNombreComponente(datos.nombre)
  const errorCategoria = validarCategoriaComponente(datos.categoria)

  if (errorNombre || errorCategoria) {
    return {
      componentes,
      error: errorNombre || errorCategoria
    }
  }

  if (!componentes.some((componente) => componente.id === id)) {
    return {
      componentes,
      error: 'El componente no existe.'
    }
  }

  return {
    componentes: componentes.map((componente) =>
      componente.id === id
        ? {
            ...componente,
            nombre: datos.nombre.trim(),
            categoria: datos.categoria,
            estado: datos.estado
          }
        : componente
    ),
    error: null
  }
}

// Eliminar un componente por su ID
export function eliminarComponente(componentes, id) {
  return componentes.filter((componente) => componente.id !== id)
}

// Buscar y filtrar componentes
export function filtrarComponentes(
  componentes,
  busqueda,
  categoria,
  estado
) {
  const texto = busqueda.trim().toLocaleLowerCase('es')

  return componentes.filter((componente) => {
    const coincideNombre = componente.nombre
      .toLocaleLowerCase('es')
      .includes(texto)

    const coincideCategoria =
      categoria === 'Todas' || componente.categoria === categoria

    const coincideEstado =
      estado === 'Todos' || componente.estado === estado

    return coincideNombre && coincideCategoria && coincideEstado
  })
}
