
export function validarNombreComponente(nombre) {
  const nombreLimpio = nombre.trim()

  if (nombreLimpio.length < 3) {
    return 'El nombre debe tener al menos 3 caracteres.'
  }

  return null
}

export function validarCategoriaComponente(categoria) {
  if (categoria.trim() === '') {
    return 'Debes seleccionar una categoría.'
  }

  return null
}
