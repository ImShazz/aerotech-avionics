
import React, { act } from 'react'
import { createRoot } from 'react-dom/client'
import { MemoryRouter } from 'react-router'
import { vi } from 'vitest'

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

    vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
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

    vi.restoreAllMocks()
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

    const desplazar = vi.fn()
    seccion.scrollIntoView = desplazar

    renderizar('/#servicios')

    await vi.waitFor(() => {
      expect(desplazar).toHaveBeenCalledWith({
        behavior: 'smooth',
        block: 'start'
      })
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
