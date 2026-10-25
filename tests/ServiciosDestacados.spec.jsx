
import React, { act } from 'react'
import { createRoot } from 'react-dom/client'
import ServiciosDestacados from '../src/pages/Home/ServiciosDestacados'

describe('ServiciosDestacados - AeroTech Avionics', function () {
  let contenedor
  let root

  beforeEach(function () {
    globalThis.IS_REACT_ACT_ENVIRONMENT = true

    contenedor = document.createElement('div')
    document.body.appendChild(contenedor)

    root = createRoot(contenedor)

    act(() => {
      root.render(<ServiciosDestacados />)
    })
  })

  afterEach(function () {
    act(() => {
      root.unmount()
    })

    contenedor.remove()
  })

  it('debe mostrar cuatro servicios', function () {
    const tarjetas = contenedor.querySelectorAll('.servicio-card')

    expect(tarjetas.length).toBe(4)
  })

  it('debe mostrar los nombres de los servicios', function () {
    const texto = contenedor.textContent

    expect(texto).toContain('Integración de aviónica')
    expect(texto).toContain('Mantenimiento aeronáutico')
    expect(texto).toContain('Sistemas de radar')
    expect(texto).toContain('Modernización tecnológica')
  })

  it('debe tener el identificador servicios', function () {
    const seccion = contenedor.querySelector('#servicios')

    expect(seccion).not.toBeNull()
  })
})
