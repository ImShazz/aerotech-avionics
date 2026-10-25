
import React, { act } from 'react'
import { createRoot } from 'react-dom/client'

import Contacto from '../src/pages/Contacto/Contacto'

describe('Contacto - AeroTech Avionics', function () {
  let contenedor
  let root

  beforeEach(function () {
    globalThis.IS_REACT_ACT_ENVIRONMENT = true

    contenedor = document.createElement('div')
    document.body.appendChild(contenedor)

    root = createRoot(contenedor)

    act(() => {
      root.render(<Contacto />)
    })
  })

  afterEach(function () {
    act(() => {
      root.unmount()
    })

    contenedor.remove()
  })

  it('debe mostrar el título principal de Contacto', function () {
    const titulo = contenedor.querySelector('h1')

    expect(titulo).not.toBeNull()
    expect(titulo.textContent).toContain(
      'HABLEMOS DE TU PRÓXIMO PROYECTO'
    )
  })

  it('debe contener los cinco campos del formulario', function () {
    const formulario = contenedor.querySelector('form')

    expect(formulario).not.toBeNull()

    const campos = [
      'contacto-nombre',
      'contacto-empresa',
      'contacto-correo',
      'contacto-asunto',
      'contacto-mensaje'
    ]

    campos.forEach((id) => {
      expect(contenedor.querySelector(`#${id}`))
        .withContext(`Campo esperado: ${id}`)
        .not.toBeNull()
    })
  })

  it('debe marcar los campos obligatorios', function () {
    const obligatorios = [
      'contacto-nombre',
      'contacto-correo',
      'contacto-asunto',
      'contacto-mensaje'
    ]

    obligatorios.forEach((id) => {
      const campo = contenedor.querySelector(`#${id}`)

      expect(campo.required).toBe(true)
    })

    const empresa = contenedor.querySelector('#contacto-empresa')

    expect(empresa.required).toBe(false)
  })

  it('debe mostrar los motivos de contacto disponibles', function () {
    const selector = contenedor.querySelector('#contacto-asunto')

    const valores = Array.from(selector.options).map(
      (opcion) => opcion.value
    )

    expect(valores).toContain('servicios')
    expect(valores).toContain('tecnologias')
    expect(valores).toContain('proyectos')
    expect(valores).toContain('colaboracion')
    expect(valores).toContain('otro')
  })

  it('debe informar que el mensaje no fue enviado', function () {
    const nombre = contenedor.querySelector('#contacto-nombre')
    const correo = contenedor.querySelector('#contacto-correo')
    const asunto = contenedor.querySelector('#contacto-asunto')
    const mensaje = contenedor.querySelector('#contacto-mensaje')
    const formulario = contenedor.querySelector('form')

    act(() => {
      nombre.value = 'Cliente de prueba'
      correo.value = 'cliente@ejemplo.com'
      asunto.value = 'servicios'
      mensaje.value = 'Necesito información de aviónica.'

      formulario.dispatchEvent(
        new Event('submit', {
          bubbles: true,
          cancelable: true
        })
      )
    })

    const aviso = contenedor.querySelector('[role="status"]')

    expect(aviso).not.toBeNull()
    expect(aviso.textContent).toContain(
      'Tu mensaje no ha sido enviado.'
    )
  })
})
