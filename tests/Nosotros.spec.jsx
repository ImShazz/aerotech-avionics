
import React, { act } from 'react'
import { createRoot } from 'react-dom/client'

import Nosotros from '../src/pages/Nosotros/Nosotros'

describe('Nosotros - AeroTech Avionics', function () {
  let contenedor
  let root

  beforeEach(function () {
    globalThis.IS_REACT_ACT_ENVIRONMENT = true

    contenedor = document.createElement('div')
    document.body.appendChild(contenedor)

    root = createRoot(contenedor)

    act(() => {
      root.render(<Nosotros />)
    })
  })

  afterEach(function () {
    act(() => {
      root.unmount()
    })

    contenedor.remove()
  })

  it('debe mostrar el título QUIÉNES SOMOS', function () {
    const titulo = contenedor.querySelector('#titulo-nosotros')

    expect(titulo).not.toBeNull()
    expect(titulo.tagName).toBe('H1')
    expect(titulo.textContent).toContain('QUIÉNES SOMOS')
  })

  it('debe mostrar la misión y visión', function () {
    const titulos = Array.from(
      contenedor.querySelectorAll('h2')
    ).map((titulo) => titulo.textContent.trim())

    expect(titulos).toContain('NUESTRA MISIÓN')
    expect(titulos).toContain('NUESTRA VISIÓN')
  })

  it('debe mostrar los valores corporativos', function () {
    const tarjeta = contenedor.querySelector(
      '.nosotros-valores-tarjeta'
    )

    expect(tarjeta).not.toBeNull()
    expect(tarjeta.textContent).toContain('NUESTROS VALORES')
    expect(tarjeta.textContent).toContain('Precisión')
    expect(tarjeta.textContent).toContain('responsabilidad')
  })

  it('debe asociar la sección con su título', function () {
    const seccion = contenedor.querySelector(
      '.nosotros-contenido'
    )

    expect(seccion).not.toBeNull()
    expect(seccion.getAttribute('aria-labelledby')).toBe(
      'titulo-nosotros'
    )

    const idTitulo = seccion.getAttribute('aria-labelledby')
    expect(contenedor.querySelector(`#${idTitulo}`)).not.toBeNull()
  })
})
