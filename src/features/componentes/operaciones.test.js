
import { describe, it, expect } from 'vitest'

import {
  agregarComponente,
  actualizarComponente,
  eliminarComponente,
  filtrarComponentes
} from './operaciones'

const componentesEjemplo = [
  {
    id: 1,
    nombre: 'Módulo de navegación',
    categoria: 'Navegación',
    estado: 'Disponible'
  },
  {
    id: 2,
    nombre: 'Unidad de comunicación',
    categoria: 'Comunicaciones',
    estado: 'En mantenimiento'
  },
  {
    id: 3,
    nombre: 'Pantalla multifunción',
    categoria: 'Instrumentación',
    estado: 'Disponible'
  }
]

describe('Operaciones de componentes', () => {

  describe('Registrar componentes', () => {

    it('agrega un componente válido', () => {
      const resultado = agregarComponente(componentesEjemplo, {
        nombre: 'Sensor GPS',
        categoria: 'Navegación',
        estado: 'Disponible'
      })

      expect(resultado.error).toBeNull()
      expect(resultado.componentes).toHaveLength(4)
      expect(resultado.componentes[3].nombre).toBe('Sensor GPS')
      expect(resultado.componentes[3].id).toBe(4)
    })

    it('rechaza un nombre inválido', () => {
      const resultado = agregarComponente(componentesEjemplo, {
        nombre: 'AB',
        categoria: 'Navegación',
        estado: 'Disponible'
      })

      expect(resultado.error).not.toBeNull()
      expect(resultado.componentes).toHaveLength(3)
    })

    it('rechaza una categoría vacía', () => {
      const resultado = agregarComponente(componentesEjemplo, {
        nombre: 'Sensor GPS',
        categoria: '',
        estado: 'Disponible'
      })

      expect(resultado.error).toBe('Debes seleccionar una categoría.')
      expect(resultado.componentes).toHaveLength(3)
    })

  })

  describe('Editar componentes', () => {

    it('actualiza los datos de un componente existente', () => {
      const resultado = actualizarComponente(componentesEjemplo, 1, {
        nombre: 'Módulo GPS avanzado',
        categoria: 'Navegación',
        estado: 'En mantenimiento'
      })

      expect(resultado.error).toBeNull()
      expect(resultado.componentes[0].nombre).toBe('Módulo GPS avanzado')
      expect(resultado.componentes[0].estado).toBe('En mantenimiento')
      expect(resultado.componentes[1]).toEqual(componentesEjemplo[1])
    })

    it('rechaza la edición de un componente inexistente', () => {
      const resultado = actualizarComponente(componentesEjemplo, 99, {
        nombre: 'Sensor GPS',
        categoria: 'Navegación',
        estado: 'Disponible'
      })

      expect(resultado.error).toBe('El componente no existe.')
      expect(resultado.componentes).toEqual(componentesEjemplo)
    })

  })

  describe('Eliminar componentes', () => {

    it('elimina solamente el componente seleccionado', () => {
      const resultado = eliminarComponente(componentesEjemplo, 2)

      expect(resultado).toHaveLength(2)
      expect(resultado.some((componente) => componente.id === 2)).toBe(false)
      expect(resultado.some((componente) => componente.id === 1)).toBe(true)
    })

    it('no altera la lista si el ID no existe', () => {
      const resultado = eliminarComponente(componentesEjemplo, 99)

      expect(resultado).toEqual(componentesEjemplo)
    })

  })

  describe('Buscar y filtrar componentes', () => {

    it('busca componentes por nombre', () => {
      const resultado = filtrarComponentes(
        componentesEjemplo, 'navegación', 'Todas', 'Todos'
      )

      expect(resultado).toHaveLength(1)
      expect(resultado[0].id).toBe(1)
    })

    it('filtra componentes por estado', () => {
      const resultado = filtrarComponentes(
        componentesEjemplo, '', 'Todas', 'Disponible'
      )

      expect(resultado).toHaveLength(2)
    })

    it('combina búsqueda, categoría y estado', () => {
      const resultado = filtrarComponentes(
        componentesEjemplo, 'módulo', 'Navegación', 'Disponible'
      )

      expect(resultado).toHaveLength(1)
      expect(resultado[0].id).toBe(1)
    })

    it('devuelve una lista vacía si no hay coincidencias', () => {
      const resultado = filtrarComponentes(
        componentesEjemplo, 'xyz123', 'Todas', 'Todos'
      )

      expect(resultado).toEqual([])
    })

  })

})
