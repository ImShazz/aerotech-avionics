
import { describe, it, expect } from 'vitest'

import {
  validarNombreComponente,
  validarCategoriaComponente
} from './validaciones'

describe('Validaciones de componentes', () => {

  describe('Nombre del componente', () => {

    it('rechaza un nombre vacío', () => {
      expect(validarNombreComponente('')).toBe(
        'El nombre debe tener al menos 3 caracteres.'
      )
    })

    it('rechaza un nombre de dos caracteres', () => {
      expect(validarNombreComponente('AB')).toBe(
        'El nombre debe tener al menos 3 caracteres.'
      )
    })

    it('rechaza un nombre compuesto solo por espacios', () => {
      expect(validarNombreComponente('   ')).toBe(
        'El nombre debe tener al menos 3 caracteres.'
      )
    })

    it('acepta un nombre válido', () => {
      expect(validarNombreComponente('Sensor GPS')).toBeNull()
    })

    it('acepta un nombre de exactamente tres caracteres', () => {
      expect(validarNombreComponente('GPS')).toBeNull()
    })

  })

  describe('Categoría del componente', () => {

    it('rechaza una categoría vacía', () => {
      expect(validarCategoriaComponente('')).toBe(
        'Debes seleccionar una categoría.'
      )
    })

    it('rechaza una categoría con solo espacios', () => {
      expect(validarCategoriaComponente('   ')).toBe(
        'Debes seleccionar una categoría.'
      )
    })

    it('acepta una categoría válida', () => {
      expect(validarCategoriaComponente('Navegación')).toBeNull()
    })

  })

})
