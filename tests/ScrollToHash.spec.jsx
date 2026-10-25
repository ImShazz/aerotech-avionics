
import React, { act } from 'react'
import { createRoot } from 'react-dom/client'
import { MemoryRouter } from 'react-router'

import ScrollToHash from '../src/components/ScrollToHash'

describe('ScrollToHash - AeroTech Avionics', function () {
  let contenedor
  let root
  let seccion

  beforeEach(function () {
    globalThis.IS_REACT_ACT_ENVIRONMENT = true

    contenedor = document.createElement('div')
    document.body.appendChild(contenedor)

    root = createRoot(contenedor)

    spyOn(window, 'scrollTo').and.stub()
  })

  afterEach(function () {
    act(() => {
      root.unmount()
    })

    contenedor.remove()

    if (seccion) {
      seccion.remove()
      seccion = null
    }
  })

  function renderizar(ruta) {
    act(() => {
      root.render(
        <MemoryRouter initialEntries={[ruta]}>
          <ScrollToHash />
        </MemoryRouter>
      )
    })
  }

  it('debe volver al inicio cuando no existe un hash', function () {
    renderizar('/nosotros')

    expect(window.scrollTo).toHaveBeenCalledWith(0, 0)
  })

  it('debe desplazarse hasta la sección servicios', async function () {
    seccion = document.createElement('section')
    seccion.id = 'servicios'

    document.body.appendChild(seccion)

    const desplazar = spyOn(seccion, 'scrollIntoView').and.stub()

    renderizar('/#servicios')

    await new Promise((resolver) => {
      window.setTimeout(resolver, 100)
    })

    expect(desplazar).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start'
    })
  })

  it('no debe fallar si la sección solicitada no existe', async function () {
    renderizar('/#seccion-inexistente')

    await new Promise((resolver) => {
      window.setTimeout(resolver, 100)
    })

    expect(contenedor).not.toBeNull()
  })
})
