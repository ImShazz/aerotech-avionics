
import React, { act } from 'react'
import { createRoot } from 'react-dom/client'
import { MemoryRouter } from 'react-router'

import Navbar from '../src/components/layout/Navbar'

describe('Navbar - AeroTech Avionics', function () {
  let contenedor
  let root

  beforeEach(function () {
    globalThis.IS_REACT_ACT_ENVIRONMENT = true

    contenedor = document.createElement('div')
    document.body.appendChild(contenedor)

    root = createRoot(contenedor)

    act(() => {
      root.render(
        <MemoryRouter initialEntries={['/']}>
          <Navbar />
        </MemoryRouter>
      )
    })
  })

  afterEach(function () {
    act(() => {
      root.unmount()
    })

    contenedor.remove()
  })

  it('debe mostrar el logo de AeroTech Avionics', function () {
    const logo = contenedor.querySelector('img.logo-aa')

    expect(logo).not.toBeNull()
    expect(logo.getAttribute('alt')).toBe('AeroTech Avionics')
  })

  it('debe contener un enlace a Nosotros', function () {
    const enlace = contenedor.querySelector('a[href="/nosotros"]')

    expect(enlace).not.toBeNull()
    expect(enlace.textContent).toContain('NOSOTROS')
  })

  it('debe contener un enlace a Contacto', function () {
    const enlace = contenedor.querySelector('a[href="/contacto"]')

    expect(enlace).not.toBeNull()
    expect(enlace.textContent).toContain('CONTACTO')
  })

  it('debe contener el enlace a Servicios', function () {
    const enlace = contenedor.querySelector('a[href="/#servicios"]')

    expect(enlace).not.toBeNull()
    expect(enlace.textContent).toContain('SERVICIOS')
  })

  it('debe abrir y cerrar el menú móvil', function () {
    const boton = contenedor.querySelector('.navbar-toggler')
    const menu = contenedor.querySelector('#menuPrincipal')

    expect(boton.getAttribute('aria-expanded')).toBe('false')
    expect(menu.classList.contains('show')).toBe(false)

    act(() => {
      boton.dispatchEvent(
        new MouseEvent('click', { bubbles: true })
      )
    })

    expect(boton.getAttribute('aria-expanded')).toBe('true')
    expect(menu.classList.contains('show')).toBe(true)

    act(() => {
      boton.dispatchEvent(
        new MouseEvent('click', { bubbles: true })
      )
    })

    expect(boton.getAttribute('aria-expanded')).toBe('false')
    expect(menu.classList.contains('show')).toBe(false)
  })
})
